import{C as i,m as it}from"./jornadaGestao-DRPoVhgy.js";import{t as r,s as c}from"./jornadaOperar-Bi6s_ycj.js";import"./ShellJornada-CMxJtqrp.js";import"./jsx-runtime-D7U-5bjP.js";import"./iframe-C2VJ8kVs.js";import"./preload-helper-D6kgxu3v.js";import"./dadosShell-BYTfkzL7.js";import"./index-UpX6kslj.js";import"./index-F-JZx0X5.js";import"./v2-CAWApgnC.js";import"./index-CohljNw-.js";import"./api-CwvJBfED.js";import"./index-DO39JyVV.js";import"./marca-CpBxYIL6.js";import"./carregando-BKTU6_YY.js";import"./celulas-KD9lZC8H.js";/* empty css              */import"./CartaoKpi-BDZfNefm.js";import"./MiniBarras-Cal1y1b-.js";import"./cores-D-iLqYVd.js";import"./Login-y4TyMd2N.js";import"./etapas-EEL7MefA.js";/* empty css                */import"./ShellGestao-ESbdmusA.js";const{expect:e,userEvent:n,waitFor:Y,within:d}=__STORYBOOK_MODULE_TEST__,st=it("/roteiros",'Jornada de roteiros dentro do shell: lista e editor. No editor, cada pergunta tem Subir e Descer (44 px, com o número da pergunta no nome) além do arraste; o índice e a régua do veredito ficam em seções recolhíveis (fechadas no celular). Com a carga falhando o editor não aparece (antes ficava no carregando para sempre); roteiro que não existe mostra "não encontrado" com Voltar; erro ao publicar aparece em frase, nunca o JSON da resposta, e o erro de uma pergunta aparece no cartão dela.'),u="GET /v1/roteiros/:id/:versao",w="POST /v1/roteiros",l="/roteiros/editar/rot_consignado_novo/3",Gt={title:"Jornadas/Roteiros",...st};function ct(t){return[...t.ownerDocument.querySelectorAll(".roteiro-perguntas .pergunta-cabeca .pid")].map(a=>a.textContent)}function ea(t){return[...t.ownerDocument.querySelectorAll(".roteiro-perguntas .pergunta-resumo")].map(a=>a.textContent)}const B={name:"Padrão: lista",play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByRole("region",{name:/Roteiros/})).toBeInTheDocument(),await e((await a.findAllByText(/contrato novo/)).length).toBeGreaterThan(0),await c()}},x={name:"Editor: subir, descer e publicar",args:{rotaInicial:l},play:async({canvasElement:t,step:a})=>{const o=r(t);await e(await o.findByRole("heading",{name:"Consignado · contrato novo",level:2})).toBeInTheDocument();const s=ea(t);await a("Descer p1 troca com a seguinte",async()=>{await n.click(o.getByRole("button",{name:"Descer p1"})),await e(ea(t)).toEqual([s[1],s[0],...s.slice(2)]),await e(ct(t).slice(0,2)).toEqual(["p1","p2"])}),await a("Subir p2 desfaz a troca",async()=>{await n.click(o.getByRole("button",{name:"Subir p2"})),await e(ea(t)).toEqual(s)}),await a("Primeira não sobe e última não desce",async()=>{await e(o.getByRole("button",{name:"Subir p1"})).toBeDisabled(),await e(o.getByRole("button",{name:"Descer p6"})).toBeDisabled()}),await a("Índice e régua do veredito abrem e fecham",async()=>{const m=o.getByRole("button",{name:"Ir para a pergunta"});m.getAttribute("aria-expanded")==="false"&&await n.click(m),await e(m).toHaveAttribute("aria-expanded","true");const p=o.getByRole("button",{name:"Como o roteiro vira veredito"});await n.click(p),await e(p).toHaveAttribute("aria-expanded","true"),await e(o.getByText("Aprova automático")).toBeVisible()}),await a("Expandir todas abre os cartões",async()=>{await n.click(o.getByRole("button",{name:"Expandir todas"})),await e(o.getByRole("button",{name:"Recolher todas"})).toBeInTheDocument()}),await a("Publicar cria a v4 e segue no editor",async()=>{await n.click(o.getByRole("button",{name:"Salvar como nova versão"})),await e(await o.findByText(/Publicado: rot_consignado_novo v4/)).toBeInTheDocument()}),await c()}},E={name:"Editor: aviso de saída",args:{rotaInicial:l},play:async({canvasElement:t,step:a})=>{const o=r(t),s=d(t.ownerDocument.body);await e(await o.findByRole("heading",{name:"Consignado · contrato novo",level:2})).toBeInTheDocument(),await a("Subir e descer de volta não conta como alteração: Voltar sai direto",async()=>{await n.click(o.getByRole("button",{name:"Descer p1"})),await n.click(o.getByRole("button",{name:"Subir p2"})),await n.click(o.getByRole("link",{name:"Voltar para Roteiros"})),await e(await o.findByRole("region",{name:/Roteiros/})).toBeInTheDocument(),await e(s.queryByText("Sair sem salvar?")).not.toBeInTheDocument()}),await a("Trocar a ordem e tentar sair pergunta, citando o roteiro",async()=>{await n.click((await o.findAllByRole("link",{name:/contrato novo/}))[0]),await e(await o.findByRole("heading",{name:"Consignado · contrato novo",level:2})).toBeInTheDocument(),await n.click(o.getByRole("button",{name:"Descer p1"})),await n.click(o.getByRole("link",{name:"Voltar para Roteiros"}));const m=d(await s.findByRole("dialog",{name:"Sair sem salvar?"}));await e(m.getByText(/alterações não salvas em Roteiro “Consignado · contrato novo”/)).toBeInTheDocument(),await n.click(m.getByRole("button",{name:"Continuar editando"})),await Y(()=>e(s.queryByRole("dialog",{name:"Sair sem salvar?"})).not.toBeInTheDocument()),await e(o.getByRole("heading",{name:"Consignado · contrato novo",level:2})).toBeInTheDocument()}),await a("Publicar e depois sair não pergunta",async()=>{await n.click(o.getByRole("button",{name:"Salvar como nova versão"})),await e(await o.findByText(/Publicado: rot_consignado_novo v4/)).toBeInTheDocument(),await n.click(o.getByRole("link",{name:"Voltar para Roteiros"})),await e(await o.findByRole("region",{name:/Roteiros/})).toBeInTheDocument(),await e(s.queryByText("Sair sem salvar?")).not.toBeInTheDocument()}),await c()}},T={name:"Editor: roteiro novo",args:{rotaInicial:"/roteiros/novo"},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText("Novo roteiro")).toBeInTheDocument(),await e(a.getByRole("button",{name:"Subir p1"})).toBeDisabled(),await e(a.getByRole("button",{name:"Descer p1"})).toBeDisabled(),await c()}},R={args:{rotaInicial:l},parameters:{jornada:{...i,pendurar:[u]}},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText(/Carregando o roteiro/)).toBeInTheDocument(),await e(a.queryByRole("button",{name:"Salvar como nova versão"})).not.toBeInTheDocument()}},I={name:"Erro de rede: sem editor",args:{rotaInicial:l},parameters:{jornada:{...i,semRede:[u]}},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText(/Não foi possível carregar o roteiro/)).toBeInTheDocument(),await e(a.queryByText(/Carregando o roteiro/)).not.toBeInTheDocument(),await e(a.queryByRole("button",{name:"Salvar como nova versão"})).not.toBeInTheDocument(),await n.click(a.getByRole("button",{name:"Tentar de novo"})),await e(await a.findByText(/Não foi possível carregar o roteiro/)).toBeInTheDocument(),await c()}},b={name:"Erro do servidor",args:{rotaInicial:l},parameters:{jornada:{...i,falhar:[u]}},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText(/O servidor teve um problema ao carregar o roteiro/)).toBeInTheDocument(),await e(a.queryByText(/api falsa/)).not.toBeInTheDocument(),await e(a.getByRole("button",{name:"Tentar de novo"})).toBeInTheDocument(),await e(a.getByRole("link",{name:"Voltar para Roteiros"})).toBeInTheDocument(),await c()}},D={name:"Erro: sem permissão",args:{rotaInicial:l},parameters:{jornada:{...i,respostas:{[u]:{status:403,corpo:{erro:"sem permissão"}}}}},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText(/não tem permissão para ver o roteiro/)).toBeInTheDocument(),await e(a.queryByRole("button",{name:"Tentar de novo"})).not.toBeInTheDocument(),await c()}},f={name:"Erro: não encontrado",args:{rotaInicial:"/roteiros/editar/rot_inexistente/1"},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText("Roteiro não encontrado.")).toBeInTheDocument(),await e(a.queryByRole("button",{name:"Tentar de novo"})).not.toBeInTheDocument(),await n.click(a.getByRole("button",{name:"Voltar à lista"})),await e(await a.findByRole("region",{name:/Roteiros/})).toBeInTheDocument(),await c()}},S={name:"Erro ao salvar: frase legível",args:{rotaInicial:l},parameters:{jornada:{...i,respostas:{[w]:{status:400,corpo:{detalhe:{campo:"perguntas",codigo:17}}}}}},play:async({canvasElement:t})=>{const a=r(t);await n.click(await a.findByRole("button",{name:"Salvar como nova versão"}));const o=await a.findByRole("alert");await e(o).toHaveTextContent("O servidor recusou o roteiro. Revise as perguntas e tente de novo."),await e(o.textContent).not.toMatch(/[{}]|codigo/),await c()}},h={name:"Erro ao salvar: no cartão da pergunta",args:{rotaInicial:l},parameters:{jornada:{...i,respostas:{[w]:{status:400,corpo:{erro:'p2: negativa ativa sem "mensagem", escreva o que a assistente fala no não'}}}}},play:async({canvasElement:t})=>{const a=r(t);await n.click(await a.findByRole("button",{name:"Salvar como nova versão"}));const o=await a.findByRole("alert");await e(o).toHaveTextContent(/p2: negativa ativa/),await Y(()=>e(o.closest(".pergunta-cartao")).not.toBeNull()),await e(d(o.closest(".pergunta-cartao")).getByText("p2",{selector:".pid"})).toBeInTheDocument(),await c()}},A={name:"Erro ao salvar: sem conexão",args:{rotaInicial:l},parameters:{jornada:{...i,semRede:[w]}},play:async({canvasElement:t})=>{const a=r(t);await n.click(await a.findByRole("button",{name:"Salvar como nova versão"})),await e(await a.findByRole("alert")).toHaveTextContent(/Sem conexão\. Seu roteiro continua aqui/),await e(a.getByRole("button",{name:"Salvar como nova versão"})).toBeEnabled(),await c()}},C={name:"Vazio: roteiro sem perguntas",args:{rotaInicial:l},parameters:{jornada:{...i,respostas:{[u]:{status:200,corpo:{id:"rot_consignado_novo",versao:3,convenio:"Consignado",produto:"contrato novo",perguntas:[]}}}}},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText("0 perguntas")).toBeInTheDocument(),await n.click(a.getByRole("button",{name:/Adicionar pergunta.*entra como p1/})),await e(a.getByRole("button",{name:"Subir p1"})).toBeDisabled(),await c()}},O={name:"Vazio: nenhum roteiro",parameters:{jornada:{...i,respostas:{"GET /v1/roteiros":{status:200,corpo:[]}}}},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText("Nenhum roteiro ainda")).toBeInTheDocument(),await c()}},v="GET /v1/roteiros",lt="DELETE /v1/roteiros/:id/:versao",mt="POST /v1/roteiros/:id/:versao/restaurar",tt=[{id:"rot_consignado_novo",versao:3,rotulo:"Consignado · contrato novo",origem:"painel",perguntas:6,arquivado:!1,modo:"IA",criado_por:"Marina Costa",criado_em:"2026-09-02T12:00:00Z"},{id:"rot_portabilidade",versao:1,rotulo:"Portabilidade de consignado",origem:"painel",perguntas:5,arquivado:!0,modo:"IA",criado_por:"Marina Costa",criado_em:"2026-08-02T12:00:00Z"}];async function ot(t){const a=r(t),[o]=await a.findAllByRole("button",{name:"Mais ações de Consignado · contrato novo v3"});await n.click(o);const s=await a.findByRole("menu");return await n.click(d(s).getByRole("menuitem",{name:"Arquivar"})),a.findByRole("dialog",{name:"Arquivar roteiro?"})}async function nt(t){const a=r(t);await n.click(await a.findByRole("button",{name:/^Arquivados/}));const[o]=await a.findAllByRole("button",{name:"Restaurar Portabilidade de consignado v1"});return o}const q={name:"Erro: lista sem conexão",parameters:{jornada:{...i,semRede:[v]}},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText("Não foi possível carregar os roteiros. Verifique a conexão e tente de novo.")).toBeVisible(),await e(a.getByRole("button",{name:"Tentar de novo"})).toBeVisible(),await e(a.getByText("Lista indisponível no momento")).toBeInTheDocument()}},_={name:"Erro: servidor na lista",parameters:{jornada:{...i,falhar:[v]}},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText("O servidor teve um problema ao carregar os roteiros. Tente de novo em instantes.")).toBeVisible(),await e(a.queryByText(/HTTP|api falsa/)).not.toBeInTheDocument(),await e(a.getByRole("button",{name:"Tentar de novo"})).toBeVisible()}},V={name:"Erro: sem permissão para a lista",parameters:{jornada:{...i,respostas:{[v]:{status:403,corpo:{erro:"seu perfil não tem esta permissão"}}}}},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText("Seu usuário não tem permissão para ver os roteiros.")).toBeVisible(),await e(a.queryByRole("button",{name:"Tentar de novo"})).not.toBeInTheDocument()}},P={name:"Vazio: nenhum roteiro arquivado",play:async({canvasElement:t})=>{const a=r(t);await n.click(await a.findByRole("button",{name:/^Arquivados/}));const o=await a.findByText("Nenhum roteiro arquivado");await e(o).toBeVisible(),await e(o.parentElement).not.toHaveTextContent(/Arquivados/),await e(a.queryByRole("button",{name:"Limpar"})).not.toBeInTheDocument(),await c()}},N={name:"Carregando: lista",parameters:{jornada:{...i,pendurar:[v]}},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText("Carregando…")).toBeVisible(),await e(a.getByText("Carregando roteiros…")).toBeInTheDocument(),await e(a.queryByText(/contrato novo/)).not.toBeInTheDocument(),await e(a.queryByRole("button",{name:"Tentar de novo"})).not.toBeInTheDocument()}},k={name:"Arquivar: confirma e avisa",play:async({canvasElement:t})=>{const a=r(t),o=await ot(t);await e(o).toHaveTextContent("Arquivar “Consignado · contrato novo”?"),await e(o).not.toHaveTextContent("rot_consignado_novo"),await n.click(d(o).getByRole("button",{name:"Arquivar"})),await e(await a.findByText("Roteiro arquivado. As sessões antigas continuam íntegras.")).toBeVisible(),await Y(()=>e(a.queryByRole("dialog",{name:"Arquivar roteiro?"})).not.toBeInTheDocument()),await c()}},j={name:"Arquivar: erro do servidor no diálogo",parameters:{jornada:{...i,falhar:[lt]}},play:async({canvasElement:t})=>{const a=await ot(t);await n.click(d(a).getByRole("button",{name:"Arquivar"})),await e(await d(a).findByText("O servidor teve um problema ao arquivar o roteiro. Tente de novo em instantes.")).toBeVisible(),await e(a).not.toHaveTextContent(/api falsa|Erro interno/)}},L={name:"Restaurar: volta para os ativos",parameters:{jornada:{...i,respostas:{[v]:{status:200,corpo:tt}}}},play:async({canvasElement:t})=>{const a=r(t);await n.click(await nt(t)),await e(await a.findByText("Roteiro restaurado.")).toBeVisible()}},G={name:"Restaurar: erro do servidor visível",parameters:{jornada:{...i,respostas:{[v]:{status:200,corpo:tt}},falhar:[mt]}},play:async({canvasElement:t})=>{const a=r(t);await n.click(await nt(t));const o=await a.findByText("O servidor teve um problema ao restaurar o roteiro. Tente de novo em instantes.");await e(o).toBeVisible(),await e(a.queryByText(/api falsa|Erro interno/)).not.toBeInTheDocument()}},aa="/roteiros/clonar/rot_consignado_novo/3",ut="GET /v1/config/agente";function y(t){return{status:200,corpo:{id:"rot_consignado_novo",versao:3,convenio:"Consignado",produto:"contrato novo",modo:"IA",criado_por:"Marina Costa",vigente_desde:"2026-09-02T12:00:00Z",perguntas:t}}}const g={id:"p1",tipo:"identificacao",texto:"Para começar, confirme seu nome completo, por favor.",obrigatoria:!0},na='p3: {{cet_mensal}} é usada tanto para "ao mês" quanto para "ao ano", então o valor anual sai igual ao mensal — no "ao ano" use {{cet_anual}}',F={name:"Carregando: editor ao clonar",args:{rotaInicial:aa},parameters:{jornada:{...i,pendurar:[u]}},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText(/Carregando o roteiro/)).toBeInTheDocument(),await e(a.queryByRole("textbox",{name:/ID do novo roteiro/})).not.toBeInTheDocument(),await e(a.queryByRole("button",{name:"Salvar como nova versão"})).not.toBeInTheDocument()}},H={name:"Editor: clonar com ID novo",args:{rotaInicial:aa},play:async({canvasElement:t,step:a})=>{const o=r(t),s=await o.findByRole("textbox",{name:/ID do novo roteiro/});await e(s).toHaveValue("rot_consignado_novo_copia"),await e(await o.findByText("→ salvará como v1 de um roteiro novo")).toBeInTheDocument(),await a("Acento e espaço viram ID válido enquanto digita",async()=>{await n.clear(s),await n.type(s,"Crédito Pessoal"),await e(s).toHaveValue("Credito_Pessoal"),await e(s).not.toHaveAttribute("aria-invalid")}),await a("Publicar cria a v1 do roteiro novo",async()=>{await n.click(o.getByRole("button",{name:"Salvar como nova versão"})),await e(await o.findByText(/Publicado: Credito_Pessoal v1/)).toBeInTheDocument()}),await c()}},J={name:"Editor: ID que já existe",args:{rotaInicial:aa},play:async({canvasElement:t})=>{const a=r(t),o=await a.findByRole("textbox",{name:/ID do novo roteiro/});await n.clear(o),await n.type(o,"ROT_PORTABILIDADE"),await e(await a.findByText("→ este ID já existe; escolha outro")).toBeInTheDocument(),await e(o).toHaveAttribute("aria-invalid","true"),await n.click(a.getByRole("button",{name:"Salvar como nova versão"})),await e(await a.findByRole("alert")).toHaveTextContent("Já existe um roteiro com o ID rot_portabilidade. Escolha outro."),await e(a.queryByText(/Publicado:/)).not.toBeInTheDocument(),await c()}},z={name:"Editor: pergunta sem texto",args:{rotaInicial:l},parameters:{jornada:{...i,respostas:{[u]:y([g,{id:"p2",tipo:"confirmacao",texto:"   ",obrigatoria:!0},{id:"p3",tipo:"confirmacao",texto:"",obrigatoria:!0}])}}},play:async({canvasElement:t})=>{const a=r(t);await n.click(await a.findByRole("button",{name:"Salvar como nova versão"})),await e(await a.findByRole("img",{name:"Pergunta p2 com erro"})).toBeInTheDocument(),await e(a.getByRole("img",{name:"Pergunta p3 com erro"})).toBeInTheDocument(),await e(a.getByText("p2: escreva o texto da pergunta.")).toBeVisible(),await e(a.queryByRole("img",{name:"Pergunta p1 com erro"})).not.toBeInTheDocument(),await e(a.queryByText(/Publicado:/)).not.toBeInTheDocument(),await c()}},M={name:"Erro ao salvar: variável não permitida",args:{rotaInicial:l},parameters:{jornada:{...i,respostas:{[u]:y([g,{id:"p2",tipo:"confirmacao",texto:"Quem acompanhou foi o {{apelido_do_gerente}}?",obrigatoria:!0}]),[w]:{status:400,corpo:{erro:"variáveis não permitidas: apelido_do_gerente, use as variáveis padrão ou um campo personalizado (cmp_*) cadastrado em Configurações → Campos"}}}}},play:async({canvasElement:t})=>{const a=r(t);await n.click(await a.findByRole("button",{name:"Salvar como nova versão"})),await e(await a.findByRole("img",{name:"Pergunta p2 com erro"})).toBeInTheDocument();const o=t.ownerDocument.querySelector(".roteiro-dados [role=alert]");await e(o).toHaveTextContent(/variáveis não permitidas: apelido_do_gerente/),await e(a.getByText("Esta pergunta usa uma variável que não é permitida.")).toBeVisible(),await e(a.queryByRole("img",{name:"Pergunta p1 com erro"})).not.toBeInTheDocument(),await c()}},U={name:"Erro ao salvar: coerência com variável",args:{rotaInicial:l},parameters:{jornada:{...i,respostas:{[w]:{status:400,corpo:{erro:na}}}}},play:async({canvasElement:t})=>{const a=r(t);await n.click(await a.findByRole("button",{name:"Salvar como nova versão"})),await e(await a.findByRole("img",{name:"Pergunta p3 com erro"})).toBeInTheDocument();const o=await a.findByRole("alert");await e(o).toHaveTextContent(na),await Y(()=>e(o.closest(".pergunta-cartao")).not.toBeNull()),await e(d(o.closest(".pergunta-cartao")).getByText("p3",{selector:".pid"})).toBeInTheDocument(),await c()}},Q={name:"Erro: sem permissão para criar",args:{rotaInicial:"/roteiros/novo"},parameters:{jornada:{...i,sessao:{papel:"gerente",permissoes:{"roteiros.ver":!0}}}},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText("Seu usuário não tem permissão para criar roteiros.")).toBeVisible(),await e(a.queryByRole("button",{name:"Tentar de novo"})).not.toBeInTheDocument(),await e(a.queryByRole("button",{name:"Salvar como nova versão"})).not.toBeInTheDocument(),await e(a.getByRole("link",{name:"Voltar para Roteiros"})).toBeInTheDocument()}},Z={name:"Editor: despedida não carregada",args:{rotaInicial:l},parameters:{jornada:{...i,falhar:[ut],respostas:{[u]:y([g,{id:"p2",tipo:"confirmacao",texto:"Alguém cobrou algum valor para liberar o empréstimo?",obrigatoria:!0,resposta_esperada:"negativa",negativa:{ativa:!0,mensagem:"Entendi. Vou registrar isso no atendimento.",fluxo:"encerrar",usar_despedida_padrao:!0}}])}}},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText("Não foi possível ler a despedida configurada; será usada a padrão.")).toBeVisible(),await e(a.queryByText(/Será usada a despedida padrão: "/)).not.toBeInTheDocument(),await c()}},dt="GET /v1/campos-customizados",pt="GET /v1/roteiros",vt="GET /v1/eu/permissoes";function wt(t){var s;const a=[],o=t.ownerDocument.createTreeWalker(t,NodeFilter.SHOW_TEXT);for(let m=o.nextNode();m;m=o.nextNode()){const p=m.parentElement,ta=(s=m.textContent)==null?void 0:s.trim();if(!p||!ta||p.closest(".hk-sr-only")||p.getClientRects().length===0)continue;const oa=parseFloat(getComputedStyle(p).fontSize);oa<12&&a.push(`${oa}px "${ta.slice(0,40)}"`)}return a}async function rt(t){const a=await t.findByRole("button",{name:/^(Expandir|Recolher) todas$/});a.textContent==="Expandir todas"&&await n.click(a),await e(t.getByRole("button",{name:"Recolher todas"})).toBeInTheDocument()}const $={name:"Editor: campos da empresa não carregados",args:{rotaInicial:l},parameters:{jornada:{...i,falhar:[dt],respostas:{[u]:y([g])}}},play:async({canvasElement:t})=>{const a=r(t);await rt(a);const o=await a.findByText(/Não foi possível carregar os campos da empresa/);await e(getComputedStyle(o).display).not.toBe("none"),await e(o.getBoundingClientRect().height).toBeGreaterThan(0),await e(o).toBeVisible(),await e(parseFloat(getComputedStyle(o).fontSize)).toBeGreaterThanOrEqual(12);const s=t.ownerDocument.querySelector(".bloco-condicao input[role=switch]");await e(s).toBeDisabled(),await c()}},W={name:"Carregando: Publicar esperando a lista de IDs",args:{rotaInicial:aa},parameters:{jornada:{...i,pendurar:[pt]}},play:async({canvasElement:t})=>{const a=r(t);await a.findByRole("textbox",{name:/ID do novo roteiro/}),await e(a.getByText("→ conferindo o ID…")).toBeVisible();const o=a.getByRole("button",{name:"Salvar como nova versão"});await e(o).toBeDisabled(),await e(o).toHaveAttribute("aria-busy","true"),await e(a.queryByText(/Publicado:/)).not.toBeInTheDocument()}},K={name:"Carregando: novo roteiro esperando as permissões",args:{rotaInicial:"/roteiros/novo"},parameters:{jornada:{...i,sessao:{papel:"gerente"},pendurar:[vt]}},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText(/Carregando permissões/)).toBeInTheDocument(),await e(a.queryByText("Seu usuário não tem permissão para criar roteiros.")).not.toBeInTheDocument(),await e(a.queryByText("Novo roteiro")).not.toBeInTheDocument(),await e(a.queryByRole("button",{name:"Salvar como nova versão"})).not.toBeInTheDocument()}},X={name:"Editor: nenhum texto abaixo de 12px",args:{rotaInicial:l},parameters:{jornada:{...i,respostas:{[u]:y([g,{id:"p2",tipo:"confirmacao",texto:"Alguém cobrou algum valor para liberar o empréstimo?",obrigatoria:!0,resposta_esperada:"negativa",negativa:{ativa:!0,mensagem:"Entendi. Vou registrar isso no atendimento.",fluxo:"encerrar",usar_despedida_padrao:!1,mensagem_encerramento:""},condicional:{ativa:!0,condicao:{campo:"",operador:"verdadeiro"},perguntas:[]}}])}}},play:async({canvasElement:t})=>{const a=r(t);await rt(a);const o=a.getByRole("button",{name:"Como o roteiro vira veredito"});o.getAttribute("aria-expanded")==="false"&&await n.click(o);const s=a.getByRole("button",{name:"Ir para a pergunta"});s.getAttribute("aria-expanded")==="false"&&await n.click(s);const m=t.ownerDocument.querySelector(".roteiro-editor");await e(m).not.toBeNull(),await e(wt(m)).toEqual([])}},Ft=["Padrao","Editor","AvisoDeSaida","Novo","Carregando","SemRede","ErroDoServidor","SemPermissao","NaoEncontrado","ErroAoSalvar","ErroDaPergunta","SemRedeAoSalvar","Vazio","ListaVazia","ListaSemRede","ListaErroServidor","ListaSemPermissao","ListaArquivadosVazio","ListaCarregando","Arquivar","ArquivarErro","Restaurar","RestaurarErro","EditorCarregando","Clonar","IdRepetido","PerguntaSemTexto","ErroVariavelNaoPermitida","ErroCoerenciaComVariavel","SemPermissaoNovo","DespedidaNaoCarregada","CamposNaoCarregados","PublicarEsperandoIds","NovoEsperandoPermissoes","FonteMinima"];var ra,ia,sa;B.parameters={...B.parameters,docs:{...(ra=B.parameters)==null?void 0:ra.docs,source:{originalSource:`{
  name: "Padrão: lista",
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByRole("region", {
      name: /Roteiros/
    })).toBeInTheDocument();
    await expect((await tela.findAllByText(/contrato novo/)).length).toBeGreaterThan(0);
    await semRotaSemFixture();
  }
}`,...(sa=(ia=B.parameters)==null?void 0:ia.docs)==null?void 0:sa.source}}};var ca,la,ma;x.parameters={...x.parameters,docs:{...(ca=x.parameters)==null?void 0:ca.docs,source:{originalSource:`{
  name: "Editor: subir, descer e publicar",
  args: {
    rotaInicial: EDITOR
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByRole("heading", {
      name: "Consignado · contrato novo",
      level: 2
    })).toBeInTheDocument();
    const antes = resumos(canvasElement);
    await step("Descer p1 troca com a seguinte", async () => {
      await userEvent.click(tela.getByRole("button", {
        name: "Descer p1"
      }));
      await expect(resumos(canvasElement)).toEqual([antes[1], antes[0], ...antes.slice(2)]);
      await expect(ordem(canvasElement).slice(0, 2)).toEqual(["p1", "p2"]);
    });
    await step("Subir p2 desfaz a troca", async () => {
      await userEvent.click(tela.getByRole("button", {
        name: "Subir p2"
      }));
      await expect(resumos(canvasElement)).toEqual(antes);
    });
    await step("Primeira não sobe e última não desce", async () => {
      await expect(tela.getByRole("button", {
        name: "Subir p1"
      })).toBeDisabled();
      await expect(tela.getByRole("button", {
        name: "Descer p6"
      })).toBeDisabled();
    });
    await step("Índice e régua do veredito abrem e fecham", async () => {
      const indice = tela.getByRole("button", {
        name: "Ir para a pergunta"
      });
      if (indice.getAttribute("aria-expanded") === "false") await userEvent.click(indice);
      await expect(indice).toHaveAttribute("aria-expanded", "true");
      const regua = tela.getByRole("button", {
        name: "Como o roteiro vira veredito"
      });
      await userEvent.click(regua);
      await expect(regua).toHaveAttribute("aria-expanded", "true");
      await expect(tela.getByText("Aprova automático")).toBeVisible();
    });
    await step("Expandir todas abre os cartões", async () => {
      await userEvent.click(tela.getByRole("button", {
        name: "Expandir todas"
      }));
      await expect(tela.getByRole("button", {
        name: "Recolher todas"
      })).toBeInTheDocument();
    });
    await step("Publicar cria a v4 e segue no editor", async () => {
      await userEvent.click(tela.getByRole("button", {
        name: "Salvar como nova versão"
      }));
      await expect(await tela.findByText(/Publicado: rot_consignado_novo v4/)).toBeInTheDocument();
    });
    await semRotaSemFixture();
  }
}`,...(ma=(la=x.parameters)==null?void 0:la.docs)==null?void 0:ma.source}}};var ua,da,pa;E.parameters={...E.parameters,docs:{...(ua=E.parameters)==null?void 0:ua.docs,source:{originalSource:`{
  name: "Editor: aviso de saída",
  args: {
    rotaInicial: EDITOR
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    const pagina = within(canvasElement.ownerDocument.body);
    await expect(await tela.findByRole("heading", {
      name: "Consignado · contrato novo",
      level: 2
    })).toBeInTheDocument();
    await step("Subir e descer de volta não conta como alteração: Voltar sai direto", async () => {
      await userEvent.click(tela.getByRole("button", {
        name: "Descer p1"
      }));
      await userEvent.click(tela.getByRole("button", {
        name: "Subir p2"
      }));
      await userEvent.click(tela.getByRole("link", {
        name: "Voltar para Roteiros"
      }));
      await expect(await tela.findByRole("region", {
        name: /Roteiros/
      })).toBeInTheDocument();
      await expect(pagina.queryByText("Sair sem salvar?")).not.toBeInTheDocument();
    });
    await step("Trocar a ordem e tentar sair pergunta, citando o roteiro", async () => {
      await userEvent.click((await tela.findAllByRole("link", {
        name: /contrato novo/
      }))[0]);
      await expect(await tela.findByRole("heading", {
        name: "Consignado · contrato novo",
        level: 2
      })).toBeInTheDocument();
      await userEvent.click(tela.getByRole("button", {
        name: "Descer p1"
      }));
      await userEvent.click(tela.getByRole("link", {
        name: "Voltar para Roteiros"
      }));
      const modal = within(await pagina.findByRole("dialog", {
        name: "Sair sem salvar?"
      }));
      await expect(modal.getByText(/alterações não salvas em Roteiro “Consignado · contrato novo”/)).toBeInTheDocument();
      await userEvent.click(modal.getByRole("button", {
        name: "Continuar editando"
      }));
      await waitFor(() => expect(pagina.queryByRole("dialog", {
        name: "Sair sem salvar?"
      })).not.toBeInTheDocument());
      await expect(tela.getByRole("heading", {
        name: "Consignado · contrato novo",
        level: 2
      })).toBeInTheDocument();
    });
    await step("Publicar e depois sair não pergunta", async () => {
      await userEvent.click(tela.getByRole("button", {
        name: "Salvar como nova versão"
      }));
      await expect(await tela.findByText(/Publicado: rot_consignado_novo v4/)).toBeInTheDocument();
      await userEvent.click(tela.getByRole("link", {
        name: "Voltar para Roteiros"
      }));
      await expect(await tela.findByRole("region", {
        name: /Roteiros/
      })).toBeInTheDocument();
      await expect(pagina.queryByText("Sair sem salvar?")).not.toBeInTheDocument();
    });
    await semRotaSemFixture();
  }
}`,...(pa=(da=E.parameters)==null?void 0:da.docs)==null?void 0:pa.source}}};var va,wa,ya;T.parameters={...T.parameters,docs:{...(va=T.parameters)==null?void 0:va.docs,source:{originalSource:`{
  name: "Editor: roteiro novo",
  args: {
    rotaInicial: "/roteiros/novo"
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Novo roteiro")).toBeInTheDocument();
    await expect(tela.getByRole("button", {
      name: "Subir p1"
    })).toBeDisabled();
    await expect(tela.getByRole("button", {
      name: "Descer p1"
    })).toBeDisabled();
    await semRotaSemFixture();
  }
}`,...(ya=(wa=T.parameters)==null?void 0:wa.docs)==null?void 0:ya.source}}};var ga,Ba,xa;R.parameters={...R.parameters,docs:{...(ga=R.parameters)==null?void 0:ga.docs,source:{originalSource:`{
  args: {
    rotaInicial: EDITOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      pendurar: [VERSAO]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/Carregando o roteiro/)).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: "Salvar como nova versão"
    })).not.toBeInTheDocument();
  }
}`,...(xa=(Ba=R.parameters)==null?void 0:Ba.docs)==null?void 0:xa.source}}};var Ea,Ta,Ra;I.parameters={...I.parameters,docs:{...(Ea=I.parameters)==null?void 0:Ea.docs,source:{originalSource:`{
  name: "Erro de rede: sem editor",
  args: {
    rotaInicial: EDITOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      semRede: [VERSAO]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/Não foi possível carregar o roteiro/)).toBeInTheDocument();
    await expect(tela.queryByText(/Carregando o roteiro/)).not.toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: "Salvar como nova versão"
    })).not.toBeInTheDocument();
    await userEvent.click(tela.getByRole("button", {
      name: "Tentar de novo"
    }));
    await expect(await tela.findByText(/Não foi possível carregar o roteiro/)).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(Ra=(Ta=I.parameters)==null?void 0:Ta.docs)==null?void 0:Ra.source}}};var Ia,ba,Da;b.parameters={...b.parameters,docs:{...(Ia=b.parameters)==null?void 0:Ia.docs,source:{originalSource:`{
  name: "Erro do servidor",
  args: {
    rotaInicial: EDITOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      falhar: [VERSAO]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/O servidor teve um problema ao carregar o roteiro/)).toBeInTheDocument();
    await expect(tela.queryByText(/api falsa/)).not.toBeInTheDocument();
    await expect(tela.getByRole("button", {
      name: "Tentar de novo"
    })).toBeInTheDocument();
    await expect(tela.getByRole("link", {
      name: "Voltar para Roteiros"
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(Da=(ba=b.parameters)==null?void 0:ba.docs)==null?void 0:Da.source}}};var fa,Sa,ha;D.parameters={...D.parameters,docs:{...(fa=D.parameters)==null?void 0:fa.docs,source:{originalSource:`{
  name: "Erro: sem permissão",
  args: {
    rotaInicial: EDITOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [VERSAO]: {
          status: 403,
          corpo: {
            erro: "sem permissão"
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/não tem permissão para ver o roteiro/)).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: "Tentar de novo"
    })).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(ha=(Sa=D.parameters)==null?void 0:Sa.docs)==null?void 0:ha.source}}};var Aa,Ca,Oa;f.parameters={...f.parameters,docs:{...(Aa=f.parameters)==null?void 0:Aa.docs,source:{originalSource:`{
  name: "Erro: não encontrado",
  args: {
    rotaInicial: "/roteiros/editar/rot_inexistente/1"
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Roteiro não encontrado.")).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: "Tentar de novo"
    })).not.toBeInTheDocument();
    await userEvent.click(tela.getByRole("button", {
      name: "Voltar à lista"
    }));
    await expect(await tela.findByRole("region", {
      name: /Roteiros/
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(Oa=(Ca=f.parameters)==null?void 0:Ca.docs)==null?void 0:Oa.source}}};var qa,_a,Va;S.parameters={...S.parameters,docs:{...(qa=S.parameters)==null?void 0:qa.docs,source:{originalSource:`{
  name: "Erro ao salvar: frase legível",
  args: {
    rotaInicial: EDITOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [PUBLICAR]: {
          status: 400,
          corpo: {
            detalhe: {
              campo: "perguntas",
              codigo: 17
            }
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await userEvent.click(await tela.findByRole("button", {
      name: "Salvar como nova versão"
    }));
    const alerta = await tela.findByRole("alert");
    await expect(alerta).toHaveTextContent("O servidor recusou o roteiro. Revise as perguntas e tente de novo.");
    await expect(alerta.textContent).not.toMatch(/[{}]|codigo/);
    await semRotaSemFixture();
  }
}`,...(Va=(_a=S.parameters)==null?void 0:_a.docs)==null?void 0:Va.source}}};var Pa,Na,ka;h.parameters={...h.parameters,docs:{...(Pa=h.parameters)==null?void 0:Pa.docs,source:{originalSource:`{
  name: "Erro ao salvar: no cartão da pergunta",
  args: {
    rotaInicial: EDITOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [PUBLICAR]: {
          status: 400,
          corpo: {
            erro: "p2: negativa ativa sem \\"mensagem\\", escreva o que a assistente fala no não"
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await userEvent.click(await tela.findByRole("button", {
      name: "Salvar como nova versão"
    }));
    const alerta = await tela.findByRole("alert");
    await expect(alerta).toHaveTextContent(/p2: negativa ativa/);
    await waitFor(() => expect(alerta.closest(".pergunta-cartao")).not.toBeNull());
    await expect(within(alerta.closest(".pergunta-cartao") as HTMLElement).getByText("p2", {
      selector: ".pid"
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(ka=(Na=h.parameters)==null?void 0:Na.docs)==null?void 0:ka.source}}};var ja,La,Ga;A.parameters={...A.parameters,docs:{...(ja=A.parameters)==null?void 0:ja.docs,source:{originalSource:`{
  name: "Erro ao salvar: sem conexão",
  args: {
    rotaInicial: EDITOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      semRede: [PUBLICAR]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await userEvent.click(await tela.findByRole("button", {
      name: "Salvar como nova versão"
    }));
    await expect(await tela.findByRole("alert")).toHaveTextContent(/Sem conexão\\. Seu roteiro continua aqui/);
    await expect(tela.getByRole("button", {
      name: "Salvar como nova versão"
    })).toBeEnabled();
    await semRotaSemFixture();
  }
}`,...(Ga=(La=A.parameters)==null?void 0:La.docs)==null?void 0:Ga.source}}};var Fa,Ha,Ja;C.parameters={...C.parameters,docs:{...(Fa=C.parameters)==null?void 0:Fa.docs,source:{originalSource:`{
  name: "Vazio: roteiro sem perguntas",
  args: {
    rotaInicial: EDITOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [VERSAO]: {
          status: 200,
          corpo: {
            id: "rot_consignado_novo",
            versao: 3,
            convenio: "Consignado",
            produto: "contrato novo",
            perguntas: []
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("0 perguntas")).toBeInTheDocument();
    await userEvent.click(tela.getByRole("button", {
      name: /Adicionar pergunta.*entra como p1/
    }));
    await expect(tela.getByRole("button", {
      name: "Subir p1"
    })).toBeDisabled();
    await semRotaSemFixture();
  }
}`,...(Ja=(Ha=C.parameters)==null?void 0:Ha.docs)==null?void 0:Ja.source}}};var za,Ma,Ua;O.parameters={...O.parameters,docs:{...(za=O.parameters)==null?void 0:za.docs,source:{originalSource:`{
  name: "Vazio: nenhum roteiro",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        "GET /v1/roteiros": {
          status: 200,
          corpo: []
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Nenhum roteiro ainda")).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(Ua=(Ma=O.parameters)==null?void 0:Ma.docs)==null?void 0:Ua.source}}};var Qa,Za,$a;q.parameters={...q.parameters,docs:{...(Qa=q.parameters)==null?void 0:Qa.docs,source:{originalSource:`{
  name: "Erro: lista sem conexão",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      semRede: [LISTA]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Não foi possível carregar os roteiros. Verifique a conexão e tente de novo.")).toBeVisible();
    await expect(tela.getByRole("button", {
      name: "Tentar de novo"
    })).toBeVisible();
    await expect(tela.getByText("Lista indisponível no momento")).toBeInTheDocument();
  }
}`,...($a=(Za=q.parameters)==null?void 0:Za.docs)==null?void 0:$a.source}}};var Wa,Ka,Xa;_.parameters={..._.parameters,docs:{...(Wa=_.parameters)==null?void 0:Wa.docs,source:{originalSource:`{
  name: "Erro: servidor na lista",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      falhar: [LISTA]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("O servidor teve um problema ao carregar os roteiros. Tente de novo em instantes.")).toBeVisible();
    await expect(tela.queryByText(/HTTP|api falsa/)).not.toBeInTheDocument();
    await expect(tela.getByRole("button", {
      name: "Tentar de novo"
    })).toBeVisible();
  }
}`,...(Xa=(Ka=_.parameters)==null?void 0:Ka.docs)==null?void 0:Xa.source}}};var Ya,ae,ee;V.parameters={...V.parameters,docs:{...(Ya=V.parameters)==null?void 0:Ya.docs,source:{originalSource:`{
  name: "Erro: sem permissão para a lista",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [LISTA]: {
          status: 403,
          corpo: {
            erro: "seu perfil não tem esta permissão"
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Seu usuário não tem permissão para ver os roteiros.")).toBeVisible();
    await expect(tela.queryByRole("button", {
      name: "Tentar de novo"
    })).not.toBeInTheDocument();
  }
}`,...(ee=(ae=V.parameters)==null?void 0:ae.docs)==null?void 0:ee.source}}};var te,oe,ne;P.parameters={...P.parameters,docs:{...(te=P.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: "Vazio: nenhum roteiro arquivado",
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await userEvent.click(await tela.findByRole("button", {
      name: /^Arquivados/
    }));
    const titulo = await tela.findByText("Nenhum roteiro arquivado");
    await expect(titulo).toBeVisible();
    await expect(titulo.parentElement).not.toHaveTextContent(/Arquivados/);
    await expect(tela.queryByRole("button", {
      name: "Limpar"
    })).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(ne=(oe=P.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var re,ie,se;N.parameters={...N.parameters,docs:{...(re=N.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: "Carregando: lista",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      pendurar: [LISTA]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Carregando…")).toBeVisible();
    await expect(tela.getByText("Carregando roteiros…")).toBeInTheDocument();
    await expect(tela.queryByText(/contrato novo/)).not.toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: "Tentar de novo"
    })).not.toBeInTheDocument();
  }
}`,...(se=(ie=N.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var ce,le,me;k.parameters={...k.parameters,docs:{...(ce=k.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: "Arquivar: confirma e avisa",
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    const dialogo = await abrirArquivarNaLista(canvasElement);
    await expect(dialogo).toHaveTextContent("Arquivar “Consignado · contrato novo”?");
    await expect(dialogo).not.toHaveTextContent("rot_consignado_novo");
    await userEvent.click(within(dialogo).getByRole("button", {
      name: "Arquivar"
    }));
    await expect(await tela.findByText("Roteiro arquivado. As sessões antigas continuam íntegras.")).toBeVisible();
    await waitFor(() => expect(tela.queryByRole("dialog", {
      name: "Arquivar roteiro?"
    })).not.toBeInTheDocument());
    await semRotaSemFixture();
  }
}`,...(me=(le=k.parameters)==null?void 0:le.docs)==null?void 0:me.source}}};var ue,de,pe;j.parameters={...j.parameters,docs:{...(ue=j.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: "Arquivar: erro do servidor no diálogo",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      falhar: [ARQUIVAR]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const dialogo = await abrirArquivarNaLista(canvasElement);
    await userEvent.click(within(dialogo).getByRole("button", {
      name: "Arquivar"
    }));
    await expect(await within(dialogo).findByText("O servidor teve um problema ao arquivar o roteiro. Tente de novo em instantes.")).toBeVisible();
    await expect(dialogo).not.toHaveTextContent(/api falsa|Erro interno/);
  }
}`,...(pe=(de=j.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ve,we,ye;L.parameters={...L.parameters,docs:{...(ve=L.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  name: "Restaurar: volta para os ativos",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [LISTA]: {
          status: 200,
          corpo: COM_ARQUIVADO
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await userEvent.click(await botaoRestaurarNaLista(canvasElement));
    await expect(await tela.findByText("Roteiro restaurado.")).toBeVisible();
  }
}`,...(ye=(we=L.parameters)==null?void 0:we.docs)==null?void 0:ye.source}}};var ge,Be,xe;G.parameters={...G.parameters,docs:{...(ge=G.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: "Restaurar: erro do servidor visível",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [LISTA]: {
          status: 200,
          corpo: COM_ARQUIVADO
        }
      },
      falhar: [RESTAURAR]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await userEvent.click(await botaoRestaurarNaLista(canvasElement));
    const alerta = await tela.findByText("O servidor teve um problema ao restaurar o roteiro. Tente de novo em instantes.");
    await expect(alerta).toBeVisible();
    await expect(tela.queryByText(/api falsa|Erro interno/)).not.toBeInTheDocument();
  }
}`,...(xe=(Be=G.parameters)==null?void 0:Be.docs)==null?void 0:xe.source}}};var Ee,Te,Re;F.parameters={...F.parameters,docs:{...(Ee=F.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  name: "Carregando: editor ao clonar",
  args: {
    rotaInicial: CLONAR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      pendurar: [VERSAO]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/Carregando o roteiro/)).toBeInTheDocument();
    await expect(tela.queryByRole("textbox", {
      name: /ID do novo roteiro/
    })).not.toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: "Salvar como nova versão"
    })).not.toBeInTheDocument();
  }
}`,...(Re=(Te=F.parameters)==null?void 0:Te.docs)==null?void 0:Re.source}}};var Ie,be,De;H.parameters={...H.parameters,docs:{...(Ie=H.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  name: "Editor: clonar com ID novo",
  args: {
    rotaInicial: CLONAR
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    const campo = await tela.findByRole("textbox", {
      name: /ID do novo roteiro/
    });
    await expect(campo).toHaveValue("rot_consignado_novo_copia");
    await expect(await tela.findByText("→ salvará como v1 de um roteiro novo")).toBeInTheDocument();
    await step("Acento e espaço viram ID válido enquanto digita", async () => {
      await userEvent.clear(campo);
      await userEvent.type(campo, "Crédito Pessoal");
      await expect(campo).toHaveValue("Credito_Pessoal");
      await expect(campo).not.toHaveAttribute("aria-invalid");
    });
    await step("Publicar cria a v1 do roteiro novo", async () => {
      await userEvent.click(tela.getByRole("button", {
        name: "Salvar como nova versão"
      }));
      await expect(await tela.findByText(/Publicado: Credito_Pessoal v1/)).toBeInTheDocument();
    });
    await semRotaSemFixture();
  }
}`,...(De=(be=H.parameters)==null?void 0:be.docs)==null?void 0:De.source}}};var fe,Se,he;J.parameters={...J.parameters,docs:{...(fe=J.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  name: "Editor: ID que já existe",
  args: {
    rotaInicial: CLONAR
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    const campo = await tela.findByRole("textbox", {
      name: /ID do novo roteiro/
    });
    await userEvent.clear(campo);
    await userEvent.type(campo, "ROT_PORTABILIDADE");
    await expect(await tela.findByText("→ este ID já existe; escolha outro")).toBeInTheDocument();
    await expect(campo).toHaveAttribute("aria-invalid", "true");
    await userEvent.click(tela.getByRole("button", {
      name: "Salvar como nova versão"
    }));
    await expect(await tela.findByRole("alert")).toHaveTextContent("Já existe um roteiro com o ID rot_portabilidade. Escolha outro.");
    await expect(tela.queryByText(/Publicado:/)).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(he=(Se=J.parameters)==null?void 0:Se.docs)==null?void 0:he.source}}};var Ae,Ce,Oe;z.parameters={...z.parameters,docs:{...(Ae=z.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  name: "Editor: pergunta sem texto",
  args: {
    rotaInicial: EDITOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [VERSAO]: versaoCom([P1, {
          id: "p2",
          tipo: "confirmacao",
          texto: "   ",
          obrigatoria: true
        }, {
          id: "p3",
          tipo: "confirmacao",
          texto: "",
          obrigatoria: true
        }])
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await userEvent.click(await tela.findByRole("button", {
      name: "Salvar como nova versão"
    }));
    await expect(await tela.findByRole("img", {
      name: "Pergunta p2 com erro"
    })).toBeInTheDocument();
    await expect(tela.getByRole("img", {
      name: "Pergunta p3 com erro"
    })).toBeInTheDocument();
    await expect(tela.getByText("p2: escreva o texto da pergunta.")).toBeVisible();
    await expect(tela.queryByRole("img", {
      name: "Pergunta p1 com erro"
    })).not.toBeInTheDocument();
    await expect(tela.queryByText(/Publicado:/)).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(Oe=(Ce=z.parameters)==null?void 0:Ce.docs)==null?void 0:Oe.source}}};var qe,_e,Ve;M.parameters={...M.parameters,docs:{...(qe=M.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  name: "Erro ao salvar: variável não permitida",
  args: {
    rotaInicial: EDITOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [VERSAO]: versaoCom([P1, {
          id: "p2",
          tipo: "confirmacao",
          texto: "Quem acompanhou foi o {{apelido_do_gerente}}?",
          obrigatoria: true
        }]),
        [PUBLICAR]: {
          status: 400,
          corpo: {
            erro: "variáveis não permitidas: apelido_do_gerente, use as variáveis padrão ou um campo personalizado (cmp_*) cadastrado em Configurações → Campos"
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await userEvent.click(await tela.findByRole("button", {
      name: "Salvar como nova versão"
    }));
    await expect(await tela.findByRole("img", {
      name: "Pergunta p2 com erro"
    })).toBeInTheDocument();
    const topo = canvasElement.ownerDocument.querySelector(".roteiro-dados [role=alert]");
    await expect(topo).toHaveTextContent(/variáveis não permitidas: apelido_do_gerente/);
    await expect(tela.getByText("Esta pergunta usa uma variável que não é permitida.")).toBeVisible();
    await expect(tela.queryByRole("img", {
      name: "Pergunta p1 com erro"
    })).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(Ve=(_e=M.parameters)==null?void 0:_e.docs)==null?void 0:Ve.source}}};var Pe,Ne,ke;U.parameters={...U.parameters,docs:{...(Pe=U.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  name: "Erro ao salvar: coerência com variável",
  args: {
    rotaInicial: EDITOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [PUBLICAR]: {
          status: 400,
          corpo: {
            erro: P3_CET
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await userEvent.click(await tela.findByRole("button", {
      name: "Salvar como nova versão"
    }));
    await expect(await tela.findByRole("img", {
      name: "Pergunta p3 com erro"
    })).toBeInTheDocument();
    const alerta = await tela.findByRole("alert");
    await expect(alerta).toHaveTextContent(P3_CET);
    await waitFor(() => expect(alerta.closest(".pergunta-cartao")).not.toBeNull());
    await expect(within(alerta.closest(".pergunta-cartao") as HTMLElement).getByText("p3", {
      selector: ".pid"
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(ke=(Ne=U.parameters)==null?void 0:Ne.docs)==null?void 0:ke.source}}};var je,Le,Ge;Q.parameters={...Q.parameters,docs:{...(je=Q.parameters)==null?void 0:je.docs,source:{originalSource:`{
  name: "Erro: sem permissão para criar",
  args: {
    rotaInicial: "/roteiros/novo"
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      sessao: {
        papel: "gerente",
        permissoes: {
          "roteiros.ver": true
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Seu usuário não tem permissão para criar roteiros.")).toBeVisible();
    await expect(tela.queryByRole("button", {
      name: "Tentar de novo"
    })).not.toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: "Salvar como nova versão"
    })).not.toBeInTheDocument();
    await expect(tela.getByRole("link", {
      name: "Voltar para Roteiros"
    })).toBeInTheDocument();
  }
}`,...(Ge=(Le=Q.parameters)==null?void 0:Le.docs)==null?void 0:Ge.source}}};var Fe,He,Je;Z.parameters={...Z.parameters,docs:{...(Fe=Z.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  name: "Editor: despedida não carregada",
  args: {
    rotaInicial: EDITOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      falhar: [CONFIG_AGENTE],
      respostas: {
        [VERSAO]: versaoCom([P1, {
          id: "p2",
          tipo: "confirmacao",
          texto: "Alguém cobrou algum valor para liberar o empréstimo?",
          obrigatoria: true,
          resposta_esperada: "negativa",
          negativa: {
            ativa: true,
            mensagem: "Entendi. Vou registrar isso no atendimento.",
            fluxo: "encerrar",
            usar_despedida_padrao: true
          }
        }])
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Não foi possível ler a despedida configurada; será usada a padrão.")).toBeVisible();
    await expect(tela.queryByText(/Será usada a despedida padrão: "/)).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(Je=(He=Z.parameters)==null?void 0:He.docs)==null?void 0:Je.source}}};var ze,Me,Ue;$.parameters={...$.parameters,docs:{...(ze=$.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  name: "Editor: campos da empresa não carregados",
  args: {
    rotaInicial: EDITOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      falhar: [CAMPOS],
      respostas: {
        [VERSAO]: versaoCom([P1])
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await abrirTodas(tela);
    const aviso = await tela.findByText(/Não foi possível carregar os campos da empresa/);
    await expect(getComputedStyle(aviso).display).not.toBe("none");
    await expect(aviso.getBoundingClientRect().height).toBeGreaterThan(0);
    await expect(aviso).toBeVisible();
    await expect(parseFloat(getComputedStyle(aviso).fontSize)).toBeGreaterThanOrEqual(12);
    const toggle = canvasElement.ownerDocument.querySelector(".bloco-condicao input[role=switch]");
    await expect(toggle).toBeDisabled();
    await semRotaSemFixture();
  }
}`,...(Ue=(Me=$.parameters)==null?void 0:Me.docs)==null?void 0:Ue.source}}};var Qe,Ze,$e;W.parameters={...W.parameters,docs:{...(Qe=W.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  name: "Carregando: Publicar esperando a lista de IDs",
  args: {
    rotaInicial: CLONAR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      pendurar: [LISTA_IDS]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await tela.findByRole("textbox", {
      name: /ID do novo roteiro/
    });
    await expect(tela.getByText("→ conferindo o ID…")).toBeVisible();
    const botao = tela.getByRole("button", {
      name: "Salvar como nova versão"
    });
    await expect(botao).toBeDisabled();
    await expect(botao).toHaveAttribute("aria-busy", "true");
    await expect(tela.queryByText(/Publicado:/)).not.toBeInTheDocument();
  }
}`,...($e=(Ze=W.parameters)==null?void 0:Ze.docs)==null?void 0:$e.source}}};var We,Ke,Xe;K.parameters={...K.parameters,docs:{...(We=K.parameters)==null?void 0:We.docs,source:{originalSource:`{
  name: "Carregando: novo roteiro esperando as permissões",
  args: {
    rotaInicial: "/roteiros/novo"
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      sessao: {
        papel: "gerente"
      },
      pendurar: [PERMISSOES]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/Carregando permissões/)).toBeInTheDocument();
    await expect(tela.queryByText("Seu usuário não tem permissão para criar roteiros.")).not.toBeInTheDocument();
    await expect(tela.queryByText("Novo roteiro")).not.toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: "Salvar como nova versão"
    })).not.toBeInTheDocument();
  }
}`,...(Xe=(Ke=K.parameters)==null?void 0:Ke.docs)==null?void 0:Xe.source}}};var Ye,at,et;X.parameters={...X.parameters,docs:{...(Ye=X.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  name: "Editor: nenhum texto abaixo de 12px",
  args: {
    rotaInicial: EDITOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [VERSAO]: versaoCom([P1, {
          id: "p2",
          tipo: "confirmacao",
          texto: "Alguém cobrou algum valor para liberar o empréstimo?",
          obrigatoria: true,
          resposta_esperada: "negativa",
          negativa: {
            ativa: true,
            mensagem: "Entendi. Vou registrar isso no atendimento.",
            fluxo: "encerrar",
            usar_despedida_padrao: false,
            mensagem_encerramento: ""
          },
          condicional: {
            ativa: true,
            condicao: {
              campo: "",
              operador: "verdadeiro"
            },
            perguntas: []
          }
        }])
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await abrirTodas(tela);
    const regua = tela.getByRole("button", {
      name: "Como o roteiro vira veredito"
    });
    if (regua.getAttribute("aria-expanded") === "false") await userEvent.click(regua);
    const indice = tela.getByRole("button", {
      name: "Ir para a pergunta"
    });
    if (indice.getAttribute("aria-expanded") === "false") await userEvent.click(indice);
    const editor = canvasElement.ownerDocument.querySelector(".roteiro-editor") as Element;
    await expect(editor).not.toBeNull();
    await expect(textosAbaixoDe12(editor)).toEqual([]);
  }
}`,...(et=(at=X.parameters)==null?void 0:at.docs)==null?void 0:et.source}}};export{k as Arquivar,j as ArquivarErro,E as AvisoDeSaida,$ as CamposNaoCarregados,R as Carregando,H as Clonar,Z as DespedidaNaoCarregada,x as Editor,F as EditorCarregando,S as ErroAoSalvar,U as ErroCoerenciaComVariavel,h as ErroDaPergunta,b as ErroDoServidor,M as ErroVariavelNaoPermitida,X as FonteMinima,J as IdRepetido,P as ListaArquivadosVazio,N as ListaCarregando,_ as ListaErroServidor,V as ListaSemPermissao,q as ListaSemRede,O as ListaVazia,f as NaoEncontrado,T as Novo,K as NovoEsperandoPermissoes,B as Padrao,z as PerguntaSemTexto,W as PublicarEsperandoIds,L as Restaurar,G as RestaurarErro,D as SemPermissao,Q as SemPermissaoNovo,I as SemRede,A as SemRedeAoSalvar,C as Vazio,Ft as __namedExportsOrder,Gt as default};
