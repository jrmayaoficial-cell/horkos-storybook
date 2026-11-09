import{C as s,m as xt}from"./jornadaGestao-BpLF5V3O.js";import{t as i,s as l}from"./jornadaOperar-DV4ZgHxp.js";import"./ShellJornada-D8UUS_AD.js";import"./jsx-runtime-B7yl4BrL.js";import"./iframe-O6irGc0s.js";import"./preload-helper-D6kgxu3v.js";import"./dadosShell-D6XgCTfe.js";import"./index-CRcNFVq_.js";import"./index-aSoJ-SWA.js";import"./v2-DUy2kPFF.js";import"./index-C8tPWWbP.js";import"./api-CwvJBfED.js";import"./index-DymOWEBJ.js";import"./marca-kvVvCas0.js";import"./carregando-Qpee-vr7.js";import"./celulas-DM01SyBy.js";/* empty css              */import"./CartaoKpi-BEnLXpF6.js";import"./MiniBarras-BXS10ct1.js";import"./cores-D-iLqYVd.js";import"./Login-Dp1XH9tl.js";import"./etapas-CwWCDmfe.js";/* empty css                */import"./ShellGestao-CNRQmrbB.js";const{expect:e,userEvent:n,waitFor:p,within:u}=__STORYBOOK_MODULE_TEST__,Et=xt("/roteiros",'Jornada de roteiros dentro do shell: lista e editor. No editor, cada pergunta é uma linha compacta (botão que abre a gaveta da pergunta, com Anterior e Próxima) e um menu Mais ações com Subir, Descer, Duplicar, Ativar/Desativar e Remover, além do arraste pela alça; o índice e a régua do veredito ficam em seções recolhíveis (fechadas no celular). Com a carga falhando o editor não aparece (antes ficava no carregando para sempre); roteiro que não existe mostra "não encontrado" com Voltar; erro ao publicar aparece em frase, nunca o JSON da resposta; o erro que cita perguntas fica acima da lista, marca as linhas (ícone, borda e descrição para leitor de tela), leva o foco à primeira marcada sem abrir a gaveta e reaparece no topo da gaveta quando a pessoa abre a pergunta. "Ver textos completos" mostra o texto inteiro de cada pergunta na lista, só para leitura, e o índice abre a gaveta da pergunta escolhida.'),v="GET /v1/roteiros/:id/:versao",B="POST /v1/roteiros",d="/roteiros/editar/rot_consignado_novo/3",Kt={title:"Jornadas/Roteiros",...Et};function Tt(t){return[...t.ownerDocument.querySelectorAll(".roteiro-perguntas .pergunta-cabeca .pid")].map(a=>a.textContent)}function ca(t){return[...t.ownerDocument.querySelectorAll(".roteiro-perguntas .pergunta-resumo")].map(a=>a.textContent)}function g(t,a){const r=[...t.ownerDocument.querySelectorAll(".roteiro-perguntas button.pergunta-cabeca")].find(c=>{var m;return((m=c.querySelector(".pid"))==null?void 0:m.textContent)===a});if(!r)throw new Error(`linha ${a} não está na tela`);return r}async function w(t,a,o){return await a.findByRole("button",{name:`Mais ações de ${o}`}),await n.click(g(t,o)),a.findByRole("dialog",{name:`Pergunta ${o}`})}async function R(t,a,o){await n.click(await t.findByRole("button",{name:`Mais ações de ${a}`}));const r=await t.findByRole("menu");await n.click(u(r).getByRole("menuitem",{name:o})),await p(()=>e(t.queryByRole("menu")).not.toBeInTheDocument())}async function ia(t,a){await n.click(await t.findByRole("button",{name:`Mais ações de ${a}`}));const o=await t.findByRole("menu"),r=u(o).getAllByRole("menuitem").map(c=>{var m;return(m=c.querySelector(".hk-pop-item-texto"))==null?void 0:m.textContent});return await n.keyboard("{Escape}"),await p(()=>e(t.queryByRole("menu")).not.toBeInTheDocument()),r}const D={name:"Padrão: lista",play:async({canvasElement:t})=>{const a=i(t);await e(await a.findByRole("region",{name:/Roteiros/})).toBeInTheDocument(),await e((await a.findAllByText(/contrato novo/)).length).toBeGreaterThan(0),await l()}},b={name:"Editor: lista, gaveta, menu e publicar",args:{rotaInicial:d},play:async({canvasElement:t,step:a})=>{const o=i(t);await e(await o.findByRole("heading",{name:"Consignado · contrato novo",level:2})).toBeInTheDocument();const r=ca(t);await a("Descer p1 pelo menu Mais ações troca com a seguinte",async()=>{await R(o,"p1","Descer"),await e(ca(t)).toEqual([r[1],r[0],...r.slice(2)]),await e(Tt(t).slice(0,2)).toEqual(["p1","p2"])}),await a("Subir p2 pelo menu desfaz a troca",async()=>{await R(o,"p2","Subir"),await e(ca(t)).toEqual(r)}),await a("Primeira não oferece Subir, última não oferece Descer e Remover vem por último",async()=>{await e(await ia(o,"p1")).toEqual(["Descer","Duplicar","Desativar","Remover"]),await e((await ia(o,"p6")).slice(0,2)).toEqual(["Subir","Duplicar"]),await e((await ia(o,"p6")).at(-1)).toBe("Remover")}),await a("Clicar na p2 abre a gaveta, Próxima vai à p3 e Esc fecha devolvendo o foco à linha",async()=>{const c=await w(t,o,"p2");await e(u(c).getByRole("button",{name:"Anterior"})).toBeEnabled(),await n.click(u(c).getByRole("button",{name:"Próxima"}));const m=await o.findByRole("dialog",{name:"Pergunta p3"});await p(()=>e(t.ownerDocument.activeElement).toBe(u(m).getByRole("heading",{name:"Pergunta p3"}))),await n.keyboard("{Escape}"),await p(()=>e(o.queryByRole("dialog")).not.toBeInTheDocument()),await p(()=>e(t.ownerDocument.activeElement).toBe(g(t,"p3")))}),await a("Índice abre a gaveta da pergunta escolhida e régua do veredito abre",async()=>{const c=o.getByRole("button",{name:"Ir para a pergunta"});c.getAttribute("aria-expanded")==="false"&&await n.click(c),await e(c).toHaveAttribute("aria-expanded","true");const m=o.getByRole("list",{name:"Índice das perguntas"});await n.click(u(m).getByRole("button",{name:/^p4/})),await o.findByRole("dialog",{name:"Pergunta p4"}),await n.keyboard("{Escape}"),await p(()=>e(o.queryByRole("dialog")).not.toBeInTheDocument()),await p(()=>e(t.ownerDocument.activeElement).toBe(u(m).getByRole("button",{name:/^p4/})));const T=o.getByRole("button",{name:"Como o roteiro vira veredito"});await n.click(T),await e(T).toHaveAttribute("aria-expanded","true"),await e(o.getByText("Aprova automático")).toBeVisible()}),await a("Publicar cria a v4 e segue no editor",async()=>{await n.click(o.getByRole("button",{name:"Salvar como nova versão"})),await e(await o.findByText(/Publicado: rot_consignado_novo v4/)).toBeInTheDocument()}),await l()}},f={name:"Editor: aviso de saída",args:{rotaInicial:d},play:async({canvasElement:t,step:a})=>{const o=i(t),r=u(t.ownerDocument.body);await e(await o.findByRole("heading",{name:"Consignado · contrato novo",level:2})).toBeInTheDocument(),await a("Subir e descer de volta não conta como alteração: Voltar sai direto",async()=>{await R(o,"p1","Descer"),await R(o,"p2","Subir"),await n.click(o.getByRole("link",{name:"Voltar para Roteiros"})),await e(await o.findByRole("region",{name:/Roteiros/})).toBeInTheDocument(),await e(r.queryByText("Sair sem salvar?")).not.toBeInTheDocument()}),await a("Trocar a ordem e tentar sair pergunta, citando o roteiro",async()=>{await n.click((await o.findAllByRole("link",{name:/contrato novo/}))[0]),await e(await o.findByRole("heading",{name:"Consignado · contrato novo",level:2})).toBeInTheDocument(),await R(o,"p1","Descer"),await n.click(o.getByRole("link",{name:"Voltar para Roteiros"}));const c=u(await r.findByRole("dialog",{name:"Sair sem salvar?"}));await e(c.getByText(/alterações não salvas em Roteiro “Consignado · contrato novo”/)).toBeInTheDocument(),await n.click(c.getByRole("button",{name:"Continuar editando"})),await p(()=>e(r.queryByRole("dialog",{name:"Sair sem salvar?"})).not.toBeInTheDocument()),await e(o.getByRole("heading",{name:"Consignado · contrato novo",level:2})).toBeInTheDocument()}),await a("Publicar e depois sair não pergunta",async()=>{await n.click(o.getByRole("button",{name:"Salvar como nova versão"})),await e(await o.findByText(/Publicado: rot_consignado_novo v4/)).toBeInTheDocument(),await n.click(o.getByRole("link",{name:"Voltar para Roteiros"})),await e(await o.findByRole("region",{name:/Roteiros/})).toBeInTheDocument(),await e(r.queryByText("Sair sem salvar?")).not.toBeInTheDocument()}),await l()}},I={name:"Editor: roteiro novo",args:{rotaInicial:"/roteiros/novo"},play:async({canvasElement:t})=>{const a=i(t);await e(await a.findByText("Novo roteiro")).toBeInTheDocument(),await e(await ia(a,"p1")).toEqual(["Duplicar","Desativar","Remover"]),await l()}},h={args:{rotaInicial:d},parameters:{jornada:{...s,pendurar:[v]}},play:async({canvasElement:t})=>{const a=i(t);await e(await a.findByText(/Carregando o roteiro/)).toBeInTheDocument(),await e(a.queryByRole("button",{name:"Salvar como nova versão"})).not.toBeInTheDocument()}},S={name:"Erro de rede: sem editor",args:{rotaInicial:d},parameters:{jornada:{...s,semRede:[v]}},play:async({canvasElement:t})=>{const a=i(t);await e(await a.findByText(/Não foi possível carregar o roteiro/)).toBeInTheDocument(),await e(a.queryByText(/Carregando o roteiro/)).not.toBeInTheDocument(),await e(a.queryByRole("button",{name:"Salvar como nova versão"})).not.toBeInTheDocument(),await n.click(a.getByRole("button",{name:"Tentar de novo"})),await e(await a.findByText(/Não foi possível carregar o roteiro/)).toBeInTheDocument(),await l()}},A={name:"Erro do servidor",args:{rotaInicial:d},parameters:{jornada:{...s,falhar:[v]}},play:async({canvasElement:t})=>{const a=i(t);await e(await a.findByText(/O servidor teve um problema ao carregar o roteiro/)).toBeInTheDocument(),await e(a.queryByText(/api falsa/)).not.toBeInTheDocument(),await e(a.getByRole("button",{name:"Tentar de novo"})).toBeInTheDocument(),await e(a.getByRole("link",{name:"Voltar para Roteiros"})).toBeInTheDocument(),await l()}},C={name:"Erro: sem permissão",args:{rotaInicial:d},parameters:{jornada:{...s,respostas:{[v]:{status:403,corpo:{erro:"sem permissão"}}}}},play:async({canvasElement:t})=>{const a=i(t);await e(await a.findByText(/não tem permissão para ver o roteiro/)).toBeInTheDocument(),await e(a.queryByRole("button",{name:"Tentar de novo"})).not.toBeInTheDocument(),await l()}},O={name:"Erro: não encontrado",args:{rotaInicial:"/roteiros/editar/rot_inexistente/1"},play:async({canvasElement:t})=>{const a=i(t);await e(await a.findByText("Roteiro não encontrado.")).toBeInTheDocument(),await e(a.queryByRole("button",{name:"Tentar de novo"})).not.toBeInTheDocument(),await n.click(a.getByRole("button",{name:"Voltar à lista"})),await e(await a.findByRole("region",{name:/Roteiros/})).toBeInTheDocument(),await l()}},q={name:"Erro ao salvar: frase legível",args:{rotaInicial:d},parameters:{jornada:{...s,respostas:{[B]:{status:400,corpo:{detalhe:{campo:"perguntas",codigo:17}}}}}},play:async({canvasElement:t})=>{const a=i(t);await n.click(await a.findByRole("button",{name:"Salvar como nova versão"}));const o=await a.findByRole("alert");await e(o).toHaveTextContent("O servidor recusou o roteiro. Revise as perguntas e tente de novo."),await e(o.textContent).not.toMatch(/[{}]|codigo/),await l()}},_={name:"Erro ao salvar: linha marcada e frase na gaveta",args:{rotaInicial:d},parameters:{jornada:{...s,respostas:{[B]:{status:400,corpo:{erro:'p2: negativa ativa sem "mensagem", escreva o que a assistente fala no não'}}}}},play:async({canvasElement:t})=>{const a=i(t);await n.click(await a.findByRole("button",{name:"Salvar como nova versão"}));const o=await a.findByRole("alert");await e(o).toHaveTextContent(/p2: negativa ativa/),await e(o.closest(".roteiro-perguntas")).not.toBeNull(),await e(a.getByRole("img",{name:"Pergunta p2 com erro"})).toBeVisible(),await e(a.queryByRole("dialog")).not.toBeInTheDocument(),await p(()=>e(t.ownerDocument.activeElement).toBe(g(t,"p2")));const r=await w(t,a,"p2");await p(()=>e(u(r).getByRole("alert")).toHaveTextContent(/p2: negativa ativa/)),await l()}},P={name:"Erro ao salvar: sem conexão",args:{rotaInicial:d},parameters:{jornada:{...s,semRede:[B]}},play:async({canvasElement:t})=>{const a=i(t);await n.click(await a.findByRole("button",{name:"Salvar como nova versão"})),await e(await a.findByRole("alert")).toHaveTextContent(/Sem conexão\. Seu roteiro continua aqui/),await e(a.getByRole("button",{name:"Salvar como nova versão"})).toBeEnabled(),await l()}},V={name:"Vazio: roteiro sem perguntas",args:{rotaInicial:d},parameters:{jornada:{...s,respostas:{[v]:{status:200,corpo:{id:"rot_consignado_novo",versao:3,convenio:"Consignado",produto:"contrato novo",perguntas:[]}}}}},play:async({canvasElement:t})=>{const a=i(t);await e(await a.findByText("0 perguntas")).toBeInTheDocument(),await n.click(a.getByRole("button",{name:/Adicionar pergunta.*entra como p1/}));const o=await a.findByRole("dialog",{name:"Pergunta p1"});await e(u(o).getByRole("button",{name:"Anterior"})).toBeDisabled(),await e(u(o).getByRole("button",{name:"Próxima"})).toBeDisabled(),await l()}},k={name:"Vazio: nenhum roteiro",parameters:{jornada:{...s,respostas:{"GET /v1/roteiros":{status:200,corpo:[]}}}},play:async({canvasElement:t})=>{const a=i(t);await e(await a.findByText("Nenhum roteiro ainda")).toBeInTheDocument(),await l()}},x="GET /v1/roteiros",Rt="DELETE /v1/roteiros/:id/:versao",Dt="POST /v1/roteiros/:id/:versao/restaurar",gt=[{id:"rot_consignado_novo",versao:3,rotulo:"Consignado · contrato novo",origem:"painel",perguntas:6,arquivado:!1,modo:"IA",criado_por:"Marina Costa",criado_em:"2026-09-02T12:00:00Z"},{id:"rot_portabilidade",versao:1,rotulo:"Portabilidade de consignado",origem:"painel",perguntas:5,arquivado:!0,modo:"IA",criado_por:"Marina Costa",criado_em:"2026-08-02T12:00:00Z"}];async function yt(t){const a=i(t),[o]=await a.findAllByRole("button",{name:"Mais ações de Consignado · contrato novo v3"});await n.click(o);const r=await a.findByRole("menu");return await n.click(u(r).getByRole("menuitem",{name:"Arquivar"})),a.findByRole("dialog",{name:"Arquivar roteiro?"})}async function Bt(t){const a=i(t);await n.click(await a.findByRole("button",{name:/^Arquivados/}));const[o]=await a.findAllByRole("button",{name:"Restaurar Portabilidade de consignado v1"});return o}const N={name:"Erro: lista sem conexão",parameters:{jornada:{...s,semRede:[x]}},play:async({canvasElement:t})=>{const a=i(t);await e(await a.findByText("Não foi possível carregar os roteiros. Verifique a conexão e tente de novo.")).toBeVisible(),await e(a.getByRole("button",{name:"Tentar de novo"})).toBeVisible(),await e(a.getByText("Lista indisponível no momento")).toBeInTheDocument()}},j={name:"Erro: servidor na lista",parameters:{jornada:{...s,falhar:[x]}},play:async({canvasElement:t})=>{const a=i(t);await e(await a.findByText("O servidor teve um problema ao carregar os roteiros. Tente de novo em instantes.")).toBeVisible(),await e(a.queryByText(/HTTP|api falsa/)).not.toBeInTheDocument(),await e(a.getByRole("button",{name:"Tentar de novo"})).toBeVisible()}},F={name:"Erro: sem permissão para a lista",parameters:{jornada:{...s,respostas:{[x]:{status:403,corpo:{erro:"seu perfil não tem esta permissão"}}}}},play:async({canvasElement:t})=>{const a=i(t);await e(await a.findByText("Seu usuário não tem permissão para ver os roteiros.")).toBeVisible(),await e(a.queryByRole("button",{name:"Tentar de novo"})).not.toBeInTheDocument()}},G={name:"Vazio: nenhum roteiro arquivado",play:async({canvasElement:t})=>{const a=i(t);await n.click(await a.findByRole("button",{name:/^Arquivados/}));const o=await a.findByText("Nenhum roteiro arquivado");await e(o).toBeVisible(),await e(o.parentElement).not.toHaveTextContent(/Arquivados/),await e(a.queryByRole("button",{name:"Limpar"})).not.toBeInTheDocument(),await l()}},H={name:"Carregando: lista",parameters:{jornada:{...s,pendurar:[x]}},play:async({canvasElement:t})=>{const a=i(t);await e(await a.findByText("Carregando…")).toBeVisible(),await e(a.getByText("Carregando roteiros…")).toBeInTheDocument(),await e(a.queryByText(/contrato novo/)).not.toBeInTheDocument(),await e(a.queryByRole("button",{name:"Tentar de novo"})).not.toBeInTheDocument()}},L={name:"Arquivar: confirma e avisa",play:async({canvasElement:t})=>{const a=i(t),o=await yt(t);await e(o).toHaveTextContent("Arquivar “Consignado · contrato novo”?"),await e(o).not.toHaveTextContent("rot_consignado_novo"),await n.click(u(o).getByRole("button",{name:"Arquivar"})),await e(await a.findByText("Roteiro arquivado. As sessões antigas continuam íntegras.")).toBeVisible(),await p(()=>e(a.queryByRole("dialog",{name:"Arquivar roteiro?"})).not.toBeInTheDocument()),await l()}},M={name:"Arquivar: erro do servidor no diálogo",parameters:{jornada:{...s,falhar:[Rt]}},play:async({canvasElement:t})=>{const a=await yt(t);await n.click(u(a).getByRole("button",{name:"Arquivar"})),await e(await u(a).findByText("O servidor teve um problema ao arquivar o roteiro. Tente de novo em instantes.")).toBeVisible(),await e(a).not.toHaveTextContent(/api falsa|Erro interno/)}},J={name:"Restaurar: volta para os ativos",parameters:{jornada:{...s,respostas:{[x]:{status:200,corpo:gt}}}},play:async({canvasElement:t})=>{const a=i(t);await n.click(await Bt(t)),await e(await a.findByText("Roteiro restaurado.")).toBeVisible()}},z={name:"Restaurar: erro do servidor visível",parameters:{jornada:{...s,respostas:{[x]:{status:200,corpo:gt}},falhar:[Dt]}},play:async({canvasElement:t})=>{const a=i(t);await n.click(await Bt(t));const o=await a.findByText("O servidor teve um problema ao restaurar o roteiro. Tente de novo em instantes.");await e(o).toBeVisible(),await e(a.queryByText(/api falsa|Erro interno/)).not.toBeInTheDocument()}},sa="/roteiros/clonar/rot_consignado_novo/3",bt="GET /v1/config/agente";function y(t){return{status:200,corpo:{id:"rot_consignado_novo",versao:3,convenio:"Consignado",produto:"contrato novo",modo:"IA",criado_por:"Marina Costa",vigente_desde:"2026-09-02T12:00:00Z",perguntas:t}}}const E={id:"p1",tipo:"identificacao",texto:"Para começar, confirme seu nome completo, por favor.",obrigatoria:!0},ua='p3: {{cet_mensal}} é usada tanto para "ao mês" quanto para "ao ano", então o valor anual sai igual ao mensal — no "ao ano" use {{cet_anual}}',U={name:"Carregando: editor ao clonar",args:{rotaInicial:sa},parameters:{jornada:{...s,pendurar:[v]}},play:async({canvasElement:t})=>{const a=i(t);await e(await a.findByText(/Carregando o roteiro/)).toBeInTheDocument(),await e(a.queryByRole("textbox",{name:/ID do novo roteiro/})).not.toBeInTheDocument(),await e(a.queryByRole("button",{name:"Salvar como nova versão"})).not.toBeInTheDocument()}},Q={name:"Editor: clonar com ID novo",args:{rotaInicial:sa},play:async({canvasElement:t,step:a})=>{const o=i(t),r=await o.findByRole("textbox",{name:/ID do novo roteiro/});await e(r).toHaveValue("rot_consignado_novo_copia"),await e(await o.findByText("→ salvará como v1 de um roteiro novo")).toBeInTheDocument(),await a("Acento e espaço viram ID válido enquanto digita",async()=>{await n.clear(r),await n.type(r,"Crédito Pessoal"),await e(r).toHaveValue("Credito_Pessoal"),await e(r).not.toHaveAttribute("aria-invalid")}),await a("Publicar cria a v1 do roteiro novo",async()=>{await n.click(o.getByRole("button",{name:"Salvar como nova versão"})),await e(await o.findByText(/Publicado: Credito_Pessoal v1/)).toBeInTheDocument()}),await l()}},$={name:"Editor: ID que já existe",args:{rotaInicial:sa},play:async({canvasElement:t})=>{const a=i(t),o=await a.findByRole("textbox",{name:/ID do novo roteiro/});await n.clear(o),await n.type(o,"ROT_PORTABILIDADE"),await e(await a.findByText("→ este ID já existe; escolha outro")).toBeInTheDocument(),await e(o).toHaveAttribute("aria-invalid","true"),await n.click(a.getByRole("button",{name:"Salvar como nova versão"})),await e(await a.findByRole("alert")).toHaveTextContent("Já existe um roteiro com o ID rot_portabilidade. Escolha outro."),await e(a.queryByText(/Publicado:/)).not.toBeInTheDocument(),await l()}},W={name:"Editor: pergunta sem texto",args:{rotaInicial:d},parameters:{jornada:{...s,respostas:{[v]:y([E,{id:"p2",tipo:"confirmacao",texto:"   ",obrigatoria:!0},{id:"p3",tipo:"confirmacao",texto:"",obrigatoria:!0}])}}},play:async({canvasElement:t})=>{const a=i(t);await n.click(await a.findByRole("button",{name:"Salvar como nova versão"})),await e(await a.findByRole("img",{name:"Pergunta p2 com erro"})).toBeInTheDocument(),await e(a.getByRole("img",{name:"Pergunta p3 com erro"})).toBeInTheDocument(),await e(a.getByRole("alert")).toHaveTextContent("2 perguntas precisam de ajuste: p2 e p3."),await e(a.queryByRole("img",{name:"Pergunta p1 com erro"})).not.toBeInTheDocument(),await e(a.queryByRole("dialog")).not.toBeInTheDocument(),await p(()=>e(t.ownerDocument.activeElement).toBe(g(t,"p2"))),await e(g(t,"p2")).toHaveAccessibleDescription("p2: escreva o texto da pergunta."),await e(a.queryByText(/Publicado:/)).not.toBeInTheDocument(),await l()}},X={name:"Erro ao salvar: variável não permitida",args:{rotaInicial:d},parameters:{jornada:{...s,respostas:{[v]:y([E,{id:"p2",tipo:"confirmacao",texto:"Quem acompanhou foi o {{apelido_do_gerente}}?",obrigatoria:!0}]),[B]:{status:400,corpo:{erro:"variáveis não permitidas: apelido_do_gerente, use as variáveis padrão ou um campo personalizado (cmp_*) cadastrado em Configurações → Campos"}}}}},play:async({canvasElement:t})=>{const a=i(t);await n.click(await a.findByRole("button",{name:"Salvar como nova versão"})),await e(await a.findByRole("img",{name:"Pergunta p2 com erro"})).toBeInTheDocument();const o=t.ownerDocument.querySelector(".roteiro-perguntas [role=alert]");await e(o).toHaveTextContent(/variáveis não permitidas: apelido_do_gerente/),await e(a.queryByRole("img",{name:"Pergunta p1 com erro"})).not.toBeInTheDocument();const r=await w(t,a,"p2");await p(()=>e(u(r).getByText("Esta pergunta usa uma variável que não é permitida.")).toBeVisible()),await l()}},Z={name:"Erro ao salvar: coerência com variável",args:{rotaInicial:d},parameters:{jornada:{...s,respostas:{[B]:{status:400,corpo:{erro:ua}}}}},play:async({canvasElement:t})=>{const a=i(t);await n.click(await a.findByRole("button",{name:"Salvar como nova versão"})),await e(await a.findByRole("img",{name:"Pergunta p3 com erro"})).toBeInTheDocument();const o=await a.findByRole("alert");await e(o).toHaveTextContent(ua),await e(a.queryByRole("dialog")).not.toBeInTheDocument();const r=await w(t,a,"p3");await p(()=>e(u(r).getByRole("alert")).toBeVisible()),await l()}},K={name:"Erro: sem permissão para criar",args:{rotaInicial:"/roteiros/novo"},parameters:{jornada:{...s,sessao:{papel:"gerente",permissoes:{"roteiros.ver":!0}}}},play:async({canvasElement:t})=>{const a=i(t);await e(await a.findByText("Seu usuário não tem permissão para criar roteiros.")).toBeVisible(),await e(a.queryByRole("button",{name:"Tentar de novo"})).not.toBeInTheDocument(),await e(a.queryByRole("button",{name:"Salvar como nova versão"})).not.toBeInTheDocument(),await e(a.getByRole("link",{name:"Voltar para Roteiros"})).toBeInTheDocument()}},Y={name:"Editor: despedida não carregada",args:{rotaInicial:d},parameters:{jornada:{...s,falhar:[bt],respostas:{[v]:y([E,{id:"p2",tipo:"confirmacao",texto:"Alguém cobrou algum valor para liberar o empréstimo?",obrigatoria:!0,resposta_esperada:"negativa",negativa:{ativa:!0,mensagem:"Entendi. Vou registrar isso no atendimento.",fluxo:"encerrar",usar_despedida_padrao:!0}}])}}},play:async({canvasElement:t})=>{const a=i(t);await w(t,a,"p2");const o=await a.findByText("Não foi possível ler a despedida configurada; será usada a padrão.");await p(()=>e(o).toBeVisible()),await e(a.queryByText(/Será usada a despedida padrão: "/)).not.toBeInTheDocument(),await l()}},ft="GET /v1/campos-customizados",It="GET /v1/roteiros",ht="GET /v1/eu/permissoes";function la(t){var r;const a=[],o=t.ownerDocument.createTreeWalker(t,NodeFilter.SHOW_TEXT);for(let c=o.nextNode();c;c=o.nextNode()){const m=c.parentElement,T=(r=c.textContent)==null?void 0:r.trim();if(!m||!T||m.closest(".hk-sr-only")||m.getClientRects().length===0)continue;const ma=parseFloat(getComputedStyle(m).fontSize);ma<12&&a.push(`${ma}px "${T.slice(0,40)}"`)}return a}const aa={name:"Editor: campos da empresa não carregados",args:{rotaInicial:d},parameters:{jornada:{...s,falhar:[ft],respostas:{[v]:y([E])}}},play:async({canvasElement:t})=>{const a=i(t);await w(t,a,"p1");const o=await a.findByText(/Não foi possível carregar os campos da empresa/);await e(getComputedStyle(o).display).not.toBe("none"),await e(o.getBoundingClientRect().height).toBeGreaterThan(0),await p(()=>e(o).toBeVisible()),await e(parseFloat(getComputedStyle(o).fontSize)).toBeGreaterThanOrEqual(12);const r=t.ownerDocument.querySelector(".bloco-condicao input[role=switch]");await e(r).toBeDisabled(),await l()}},ea={name:"Carregando: Publicar esperando a lista de IDs",args:{rotaInicial:sa},parameters:{jornada:{...s,pendurar:[It]}},play:async({canvasElement:t})=>{const a=i(t);await a.findByRole("textbox",{name:/ID do novo roteiro/}),await e(a.getByText("→ conferindo o ID…")).toBeVisible();const o=a.getByRole("button",{name:"Salvar como nova versão"});await e(o).toBeDisabled(),await e(o).toHaveAttribute("aria-busy","true"),await e(a.queryByText(/Publicado:/)).not.toBeInTheDocument()}},ta={name:"Carregando: novo roteiro esperando as permissões",args:{rotaInicial:"/roteiros/novo"},parameters:{jornada:{...s,sessao:{papel:"gerente"},pendurar:[ht]}},play:async({canvasElement:t})=>{const a=i(t);await e(await a.findByText(/Carregando permissões/)).toBeInTheDocument(),await e(a.queryByText("Seu usuário não tem permissão para criar roteiros.")).not.toBeInTheDocument(),await e(a.queryByText("Novo roteiro")).not.toBeInTheDocument(),await e(a.queryByRole("button",{name:"Salvar como nova versão"})).not.toBeInTheDocument()}},oa={name:"Editor: nenhum texto abaixo de 12px",args:{rotaInicial:d},parameters:{jornada:{...s,respostas:{[v]:y([E,{id:"p2",tipo:"confirmacao",texto:"Alguém cobrou algum valor para liberar o empréstimo?",obrigatoria:!0,resposta_esperada:"negativa",negativa:{ativa:!0,mensagem:"Entendi. Vou registrar isso no atendimento.",fluxo:"encerrar",usar_despedida_padrao:!1,mensagem_encerramento:""},condicional:{ativa:!0,condicao:{campo:"",operador:"verdadeiro"},perguntas:[]}}])}}},play:async({canvasElement:t})=>{const a=i(t),o=await a.findByRole("button",{name:"Como o roteiro vira veredito"});o.getAttribute("aria-expanded")==="false"&&await n.click(o);const r=a.getByRole("button",{name:"Ir para a pergunta"});r.getAttribute("aria-expanded")==="false"&&await n.click(r);const c=t.ownerDocument.querySelector(".roteiro-editor");await e(c).not.toBeNull(),await e(la(c)).toEqual([]);const m=await w(t,a,"p2");await e(la(m)).toEqual([]),await n.click(u(m).getByRole("button",{name:"Anterior"})),await e(la(await a.findByRole("dialog",{name:"Pergunta p1"}))).toEqual([])}},na={name:"Erro ao salvar: variável em duas perguntas",args:{rotaInicial:d},parameters:{jornada:{...s,respostas:{[v]:y([{id:"p1",tipo:"identificacao",texto:"Olá, aqui é o {{apelido_do_gerente}}. Confirme seu nome completo, por favor.",obrigatoria:!0},{id:"p2",tipo:"confirmacao",texto:"Você confirma o valor do contrato?",obrigatoria:!0},{id:"p3",tipo:"confirmacao",texto:"Quem acompanhou foi o {{apelido_do_gerente}}?",obrigatoria:!0}]),[B]:{status:400,corpo:{erro:"variáveis não permitidas: apelido_do_gerente"}}}}},play:async({canvasElement:t})=>{const a=i(t);await n.click(await a.findByRole("button",{name:"Salvar como nova versão"})),await e(await a.findByRole("img",{name:"Pergunta p1 com erro"})).toBeVisible(),await e(a.getByRole("img",{name:"Pergunta p3 com erro"})).toBeVisible(),await e(a.queryByRole("img",{name:"Pergunta p2 com erro"})).not.toBeInTheDocument(),await e(a.getByRole("alert")).toHaveTextContent("2 perguntas marcadas: p1 e p3."),await p(()=>e(t.ownerDocument.activeElement).toBe(g(t,"p1"))),await l()}},pa="Você confirma que contratou o empréstimo consignado com desconto em folha, no valor combinado com o seu gerente, e que recebeu o dinheiro na conta informada?",ra={name:"Editor: ver textos completos",args:{rotaInicial:d},parameters:{jornada:{...s,respostas:{[v]:y([E,{id:"p2",tipo:"confirmacao",texto:pa,obrigatoria:!0}])}}},play:async({canvasElement:t,step:a})=>{const o=i(t),r=await o.findByRole("button",{name:"Ver textos completos"}),c=()=>g(t,"p2").querySelector(".pergunta-resumo");await e(r).toHaveAttribute("aria-pressed","false"),await a("Ligado, a linha mostra o texto inteiro sem cortar",async()=>{await n.click(r),await e(r).toHaveAttribute("aria-pressed","true"),await p(()=>e(c().scrollWidth).toBeLessThanOrEqual(c().clientWidth+1)),await e(c().scrollHeight).toBeLessThanOrEqual(c().clientHeight+1),await e(o.queryByRole("dialog")).not.toBeInTheDocument()}),await a("A linha segue abrindo a gaveta para editar",async()=>{const m=await w(t,o,"p2");await e(u(m).getByRole("textbox",{name:"Texto da pergunta p2"})).toHaveValue(pa),await n.keyboard("{Escape}"),await p(()=>e(o.queryByRole("dialog")).not.toBeInTheDocument())}),await a("Desligado, volta ao resumo",async()=>{await n.click(r),await e(r).toHaveAttribute("aria-pressed","false")}),await l()}},Yt=["Padrao","Editor","AvisoDeSaida","Novo","Carregando","SemRede","ErroDoServidor","SemPermissao","NaoEncontrado","ErroAoSalvar","ErroDaPergunta","SemRedeAoSalvar","Vazio","ListaVazia","ListaSemRede","ListaErroServidor","ListaSemPermissao","ListaArquivadosVazio","ListaCarregando","Arquivar","ArquivarErro","Restaurar","RestaurarErro","EditorCarregando","Clonar","IdRepetido","PerguntaSemTexto","ErroVariavelNaoPermitida","ErroCoerenciaComVariavel","SemPermissaoNovo","DespedidaNaoCarregada","CamposNaoCarregados","PublicarEsperandoIds","NovoEsperandoPermissoes","FonteMinima","VariavelEmDuasPerguntas","TextosCompletos"];var da,va,wa;D.parameters={...D.parameters,docs:{...(da=D.parameters)==null?void 0:da.docs,source:{originalSource:`{
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
}`,...(wa=(va=D.parameters)==null?void 0:va.docs)==null?void 0:wa.source}}};var ga,ya,Ba;b.parameters={...b.parameters,docs:{...(ga=b.parameters)==null?void 0:ga.docs,source:{originalSource:`{
  name: "Editor: lista, gaveta, menu e publicar",
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
    await step("Descer p1 pelo menu Mais ações troca com a seguinte", async () => {
      await escolherNoMenu(tela, "p1", "Descer");
      await expect(resumos(canvasElement)).toEqual([antes[1], antes[0], ...antes.slice(2)]);
      await expect(ordem(canvasElement).slice(0, 2)).toEqual(["p1", "p2"]);
    });
    await step("Subir p2 pelo menu desfaz a troca", async () => {
      await escolherNoMenu(tela, "p2", "Subir");
      await expect(resumos(canvasElement)).toEqual(antes);
    });
    await step("Primeira não oferece Subir, última não oferece Descer e Remover vem por último", async () => {
      await expect(await itensDoMenu(tela, "p1")).toEqual(["Descer", "Duplicar", "Desativar", "Remover"]);
      await expect((await itensDoMenu(tela, "p6")).slice(0, 2)).toEqual(["Subir", "Duplicar"]);
      await expect((await itensDoMenu(tela, "p6")).at(-1)).toBe("Remover");
    });
    await step("Clicar na p2 abre a gaveta, Próxima vai à p3 e Esc fecha devolvendo o foco à linha", async () => {
      const gaveta = await abrirGavetaDa(canvasElement, tela, "p2");
      await expect(within(gaveta).getByRole("button", {
        name: "Anterior"
      })).toBeEnabled();
      await userEvent.click(within(gaveta).getByRole("button", {
        name: "Próxima"
      }));
      const p3 = await tela.findByRole("dialog", {
        name: "Pergunta p3"
      });
      await waitFor(() => expect(canvasElement.ownerDocument.activeElement).toBe(within(p3).getByRole("heading", {
        name: "Pergunta p3"
      })));
      await userEvent.keyboard("{Escape}");
      await waitFor(() => expect(tela.queryByRole("dialog")).not.toBeInTheDocument());
      await waitFor(() => expect(canvasElement.ownerDocument.activeElement).toBe(linhaDa(canvasElement, "p3")));
    });
    await step("Índice abre a gaveta da pergunta escolhida e régua do veredito abre", async () => {
      const indice = tela.getByRole("button", {
        name: "Ir para a pergunta"
      });
      if (indice.getAttribute("aria-expanded") === "false") await userEvent.click(indice);
      await expect(indice).toHaveAttribute("aria-expanded", "true");
      const lista = tela.getByRole("list", {
        name: "Índice das perguntas"
      });
      await userEvent.click(within(lista).getByRole("button", {
        name: /^p4/
      }));
      await tela.findByRole("dialog", {
        name: "Pergunta p4"
      });
      await userEvent.keyboard("{Escape}");
      await waitFor(() => expect(tela.queryByRole("dialog")).not.toBeInTheDocument());
      await waitFor(() => expect(canvasElement.ownerDocument.activeElement).toBe(within(lista).getByRole("button", {
        name: /^p4/
      })));
      const regua = tela.getByRole("button", {
        name: "Como o roteiro vira veredito"
      });
      await userEvent.click(regua);
      await expect(regua).toHaveAttribute("aria-expanded", "true");
      await expect(tela.getByText("Aprova automático")).toBeVisible();
    });
    await step("Publicar cria a v4 e segue no editor", async () => {
      await userEvent.click(tela.getByRole("button", {
        name: "Salvar como nova versão"
      }));
      await expect(await tela.findByText(/Publicado: rot_consignado_novo v4/)).toBeInTheDocument();
    });
    await semRotaSemFixture();
  }
}`,...(Ba=(ya=b.parameters)==null?void 0:ya.docs)==null?void 0:Ba.source}}};var xa,Ea,Ta;f.parameters={...f.parameters,docs:{...(xa=f.parameters)==null?void 0:xa.docs,source:{originalSource:`{
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
      await escolherNoMenu(tela, "p1", "Descer");
      await escolherNoMenu(tela, "p2", "Subir");
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
      await escolherNoMenu(tela, "p1", "Descer");
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
}`,...(Ta=(Ea=f.parameters)==null?void 0:Ea.docs)==null?void 0:Ta.source}}};var Ra,Da,ba;I.parameters={...I.parameters,docs:{...(Ra=I.parameters)==null?void 0:Ra.docs,source:{originalSource:`{
  name: "Editor: roteiro novo",
  args: {
    rotaInicial: "/roteiros/novo"
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Novo roteiro")).toBeInTheDocument();
    await expect(await itensDoMenu(tela, "p1")).toEqual(["Duplicar", "Desativar", "Remover"]);
    await semRotaSemFixture();
  }
}`,...(ba=(Da=I.parameters)==null?void 0:Da.docs)==null?void 0:ba.source}}};var fa,Ia,ha;h.parameters={...h.parameters,docs:{...(fa=h.parameters)==null?void 0:fa.docs,source:{originalSource:`{
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
}`,...(ha=(Ia=h.parameters)==null?void 0:Ia.docs)==null?void 0:ha.source}}};var Sa,Aa,Ca;S.parameters={...S.parameters,docs:{...(Sa=S.parameters)==null?void 0:Sa.docs,source:{originalSource:`{
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
}`,...(Ca=(Aa=S.parameters)==null?void 0:Aa.docs)==null?void 0:Ca.source}}};var Oa,qa,_a;A.parameters={...A.parameters,docs:{...(Oa=A.parameters)==null?void 0:Oa.docs,source:{originalSource:`{
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
}`,...(_a=(qa=A.parameters)==null?void 0:qa.docs)==null?void 0:_a.source}}};var Pa,Va,ka;C.parameters={...C.parameters,docs:{...(Pa=C.parameters)==null?void 0:Pa.docs,source:{originalSource:`{
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
}`,...(ka=(Va=C.parameters)==null?void 0:Va.docs)==null?void 0:ka.source}}};var Na,ja,Fa;O.parameters={...O.parameters,docs:{...(Na=O.parameters)==null?void 0:Na.docs,source:{originalSource:`{
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
}`,...(Fa=(ja=O.parameters)==null?void 0:ja.docs)==null?void 0:Fa.source}}};var Ga,Ha,La;q.parameters={...q.parameters,docs:{...(Ga=q.parameters)==null?void 0:Ga.docs,source:{originalSource:`{
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
}`,...(La=(Ha=q.parameters)==null?void 0:Ha.docs)==null?void 0:La.source}}};var Ma,Ja,za;_.parameters={..._.parameters,docs:{...(Ma=_.parameters)==null?void 0:Ma.docs,source:{originalSource:`{
  name: "Erro ao salvar: linha marcada e frase na gaveta",
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
    await expect(alerta.closest(".roteiro-perguntas")).not.toBeNull();
    await expect(tela.getByRole("img", {
      name: "Pergunta p2 com erro"
    })).toBeVisible();
    await expect(tela.queryByRole("dialog")).not.toBeInTheDocument();
    await waitFor(() => expect(canvasElement.ownerDocument.activeElement).toBe(linhaDa(canvasElement, "p2")));
    const gaveta = await abrirGavetaDa(canvasElement, tela, "p2");
    await waitFor(() => expect(within(gaveta).getByRole("alert")).toHaveTextContent(/p2: negativa ativa/));
    await semRotaSemFixture();
  }
}`,...(za=(Ja=_.parameters)==null?void 0:Ja.docs)==null?void 0:za.source}}};var Ua,Qa,$a;P.parameters={...P.parameters,docs:{...(Ua=P.parameters)==null?void 0:Ua.docs,source:{originalSource:`{
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
}`,...($a=(Qa=P.parameters)==null?void 0:Qa.docs)==null?void 0:$a.source}}};var Wa,Xa,Za;V.parameters={...V.parameters,docs:{...(Wa=V.parameters)==null?void 0:Wa.docs,source:{originalSource:`{
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
    const gaveta = await tela.findByRole("dialog", {
      name: "Pergunta p1"
    });
    await expect(within(gaveta).getByRole("button", {
      name: "Anterior"
    })).toBeDisabled();
    await expect(within(gaveta).getByRole("button", {
      name: "Próxima"
    })).toBeDisabled();
    await semRotaSemFixture();
  }
}`,...(Za=(Xa=V.parameters)==null?void 0:Xa.docs)==null?void 0:Za.source}}};var Ka,Ya,ae;k.parameters={...k.parameters,docs:{...(Ka=k.parameters)==null?void 0:Ka.docs,source:{originalSource:`{
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
}`,...(ae=(Ya=k.parameters)==null?void 0:Ya.docs)==null?void 0:ae.source}}};var ee,te,oe;N.parameters={...N.parameters,docs:{...(ee=N.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(oe=(te=N.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ne,re,ie;j.parameters={...j.parameters,docs:{...(ne=j.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(ie=(re=j.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var se,ce,le;F.parameters={...F.parameters,docs:{...(se=F.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(le=(ce=F.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var me,ue,pe;G.parameters={...G.parameters,docs:{...(me=G.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(pe=(ue=G.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var de,ve,we;H.parameters={...H.parameters,docs:{...(de=H.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(we=(ve=H.parameters)==null?void 0:ve.docs)==null?void 0:we.source}}};var ge,ye,Be;L.parameters={...L.parameters,docs:{...(ge=L.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(Be=(ye=L.parameters)==null?void 0:ye.docs)==null?void 0:Be.source}}};var xe,Ee,Te;M.parameters={...M.parameters,docs:{...(xe=M.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Te=(Ee=M.parameters)==null?void 0:Ee.docs)==null?void 0:Te.source}}};var Re,De,be;J.parameters={...J.parameters,docs:{...(Re=J.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(be=(De=J.parameters)==null?void 0:De.docs)==null?void 0:be.source}}};var fe,Ie,he;z.parameters={...z.parameters,docs:{...(fe=z.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(he=(Ie=z.parameters)==null?void 0:Ie.docs)==null?void 0:he.source}}};var Se,Ae,Ce;U.parameters={...U.parameters,docs:{...(Se=U.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Ce=(Ae=U.parameters)==null?void 0:Ae.docs)==null?void 0:Ce.source}}};var Oe,qe,_e;Q.parameters={...Q.parameters,docs:{...(Oe=Q.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(_e=(qe=Q.parameters)==null?void 0:qe.docs)==null?void 0:_e.source}}};var Pe,Ve,ke;$.parameters={...$.parameters,docs:{...(Pe=$.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(ke=(Ve=$.parameters)==null?void 0:Ve.docs)==null?void 0:ke.source}}};var Ne,je,Fe;W.parameters={...W.parameters,docs:{...(Ne=W.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
    await expect(tela.getByRole("alert")).toHaveTextContent("2 perguntas precisam de ajuste: p2 e p3.");
    await expect(tela.queryByRole("img", {
      name: "Pergunta p1 com erro"
    })).not.toBeInTheDocument();
    await expect(tela.queryByRole("dialog")).not.toBeInTheDocument();
    await waitFor(() => expect(canvasElement.ownerDocument.activeElement).toBe(linhaDa(canvasElement, "p2")));
    await expect(linhaDa(canvasElement, "p2")).toHaveAccessibleDescription("p2: escreva o texto da pergunta.");
    await expect(tela.queryByText(/Publicado:/)).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(Fe=(je=W.parameters)==null?void 0:je.docs)==null?void 0:Fe.source}}};var Ge,He,Le;X.parameters={...X.parameters,docs:{...(Ge=X.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
    const topo = canvasElement.ownerDocument.querySelector(".roteiro-perguntas [role=alert]");
    await expect(topo).toHaveTextContent(/variáveis não permitidas: apelido_do_gerente/);
    await expect(tela.queryByRole("img", {
      name: "Pergunta p1 com erro"
    })).not.toBeInTheDocument();
    const gaveta = await abrirGavetaDa(canvasElement, tela, "p2");
    await waitFor(() => expect(within(gaveta).getByText("Esta pergunta usa uma variável que não é permitida.")).toBeVisible());
    await semRotaSemFixture();
  }
}`,...(Le=(He=X.parameters)==null?void 0:He.docs)==null?void 0:Le.source}}};var Me,Je,ze;Z.parameters={...Z.parameters,docs:{...(Me=Z.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
    await expect(tela.queryByRole("dialog")).not.toBeInTheDocument();
    const gaveta = await abrirGavetaDa(canvasElement, tela, "p3");
    await waitFor(() => expect(within(gaveta).getByRole("alert")).toBeVisible());
    await semRotaSemFixture();
  }
}`,...(ze=(Je=Z.parameters)==null?void 0:Je.docs)==null?void 0:ze.source}}};var Ue,Qe,$e;K.parameters={...K.parameters,docs:{...(Ue=K.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...($e=(Qe=K.parameters)==null?void 0:Qe.docs)==null?void 0:$e.source}}};var We,Xe,Ze;Y.parameters={...Y.parameters,docs:{...(We=Y.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
    await abrirGavetaDa(canvasElement, tela, "p2");
    const aviso = await tela.findByText("Não foi possível ler a despedida configurada; será usada a padrão.");
    await waitFor(() => expect(aviso).toBeVisible());
    await expect(tela.queryByText(/Será usada a despedida padrão: "/)).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(Ze=(Xe=Y.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var Ke,Ye,at;aa.parameters={...aa.parameters,docs:{...(Ke=aa.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
    await abrirGavetaDa(canvasElement, tela, "p1");
    const aviso = await tela.findByText(/Não foi possível carregar os campos da empresa/);
    await expect(getComputedStyle(aviso).display).not.toBe("none");
    await expect(aviso.getBoundingClientRect().height).toBeGreaterThan(0);
    await waitFor(() => expect(aviso).toBeVisible());
    await expect(parseFloat(getComputedStyle(aviso).fontSize)).toBeGreaterThanOrEqual(12);
    const toggle = canvasElement.ownerDocument.querySelector(".bloco-condicao input[role=switch]");
    await expect(toggle).toBeDisabled();
    await semRotaSemFixture();
  }
}`,...(at=(Ye=aa.parameters)==null?void 0:Ye.docs)==null?void 0:at.source}}};var et,tt,ot;ea.parameters={...ea.parameters,docs:{...(et=ea.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(ot=(tt=ea.parameters)==null?void 0:tt.docs)==null?void 0:ot.source}}};var nt,rt,it;ta.parameters={...ta.parameters,docs:{...(nt=ta.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(it=(rt=ta.parameters)==null?void 0:rt.docs)==null?void 0:it.source}}};var st,ct,lt;oa.parameters={...oa.parameters,docs:{...(st=oa.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
    const regua = await tela.findByRole("button", {
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
    const gavetaP2 = await abrirGavetaDa(canvasElement, tela, "p2");
    await expect(textosAbaixoDe12(gavetaP2)).toEqual([]);
    await userEvent.click(within(gavetaP2).getByRole("button", {
      name: "Anterior"
    }));
    await expect(textosAbaixoDe12(await tela.findByRole("dialog", {
      name: "Pergunta p1"
    }))).toEqual([]);
  }
}`,...(lt=(ct=oa.parameters)==null?void 0:ct.docs)==null?void 0:lt.source}}};var mt,ut,pt;na.parameters={...na.parameters,docs:{...(mt=na.parameters)==null?void 0:mt.docs,source:{originalSource:`{
  name: "Erro ao salvar: variável em duas perguntas",
  args: {
    rotaInicial: EDITOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [VERSAO]: versaoCom([{
          id: "p1",
          tipo: "identificacao",
          texto: "Olá, aqui é o {{apelido_do_gerente}}. Confirme seu nome completo, por favor.",
          obrigatoria: true
        }, {
          id: "p2",
          tipo: "confirmacao",
          texto: "Você confirma o valor do contrato?",
          obrigatoria: true
        }, {
          id: "p3",
          tipo: "confirmacao",
          texto: "Quem acompanhou foi o {{apelido_do_gerente}}?",
          obrigatoria: true
        }]),
        [PUBLICAR]: {
          status: 400,
          corpo: {
            erro: "variáveis não permitidas: apelido_do_gerente"
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
      name: "Pergunta p1 com erro"
    })).toBeVisible();
    await expect(tela.getByRole("img", {
      name: "Pergunta p3 com erro"
    })).toBeVisible();
    await expect(tela.queryByRole("img", {
      name: "Pergunta p2 com erro"
    })).not.toBeInTheDocument();
    await expect(tela.getByRole("alert")).toHaveTextContent("2 perguntas marcadas: p1 e p3.");
    await waitFor(() => expect(canvasElement.ownerDocument.activeElement).toBe(linhaDa(canvasElement, "p1")));
    await semRotaSemFixture();
  }
}`,...(pt=(ut=na.parameters)==null?void 0:ut.docs)==null?void 0:pt.source}}};var dt,vt,wt;ra.parameters={...ra.parameters,docs:{...(dt=ra.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  name: "Editor: ver textos completos",
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
          texto: TEXTO_LONGO,
          obrigatoria: true
        }])
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    const alternar = await tela.findByRole("button", {
      name: "Ver textos completos"
    });
    const resumo = () => linhaDa(canvasElement, "p2").querySelector(".pergunta-resumo") as HTMLElement;
    await expect(alternar).toHaveAttribute("aria-pressed", "false");
    await step("Ligado, a linha mostra o texto inteiro sem cortar", async () => {
      await userEvent.click(alternar);
      await expect(alternar).toHaveAttribute("aria-pressed", "true");
      await waitFor(() => expect(resumo().scrollWidth).toBeLessThanOrEqual(resumo().clientWidth + 1));
      await expect(resumo().scrollHeight).toBeLessThanOrEqual(resumo().clientHeight + 1);
      await expect(tela.queryByRole("dialog")).not.toBeInTheDocument();
    });
    await step("A linha segue abrindo a gaveta para editar", async () => {
      const gaveta = await abrirGavetaDa(canvasElement, tela, "p2");
      await expect(within(gaveta).getByRole("textbox", {
        name: "Texto da pergunta p2"
      })).toHaveValue(TEXTO_LONGO);
      await userEvent.keyboard("{Escape}");
      await waitFor(() => expect(tela.queryByRole("dialog")).not.toBeInTheDocument());
    });
    await step("Desligado, volta ao resumo", async () => {
      await userEvent.click(alternar);
      await expect(alternar).toHaveAttribute("aria-pressed", "false");
    });
    await semRotaSemFixture();
  }
}`,...(wt=(vt=ra.parameters)==null?void 0:vt.docs)==null?void 0:wt.source}}};export{L as Arquivar,M as ArquivarErro,f as AvisoDeSaida,aa as CamposNaoCarregados,h as Carregando,Q as Clonar,Y as DespedidaNaoCarregada,b as Editor,U as EditorCarregando,q as ErroAoSalvar,Z as ErroCoerenciaComVariavel,_ as ErroDaPergunta,A as ErroDoServidor,X as ErroVariavelNaoPermitida,oa as FonteMinima,$ as IdRepetido,G as ListaArquivadosVazio,H as ListaCarregando,j as ListaErroServidor,F as ListaSemPermissao,N as ListaSemRede,k as ListaVazia,O as NaoEncontrado,I as Novo,ta as NovoEsperandoPermissoes,D as Padrao,W as PerguntaSemTexto,ea as PublicarEsperandoIds,J as Restaurar,z as RestaurarErro,C as SemPermissao,K as SemPermissaoNovo,S as SemRede,P as SemRedeAoSalvar,ra as TextosCompletos,na as VariavelEmDuasPerguntas,V as Vazio,Yt as __namedExportsOrder,Kt as default};
