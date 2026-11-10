import{Z as qe,_ as Fe,$ as Ge,a0 as je,a1 as ze,a2 as Ue,a3 as Le,a4 as Q,a5 as Y,a6 as Je}from"./ShellJornada-DBBrJknN.js";import{C as u,m as $e}from"./jornadaGestao-dF7-DiTZ.js";import{t as i,d as ke,i as We,s as c}from"./jornadaOperar-CeAbb8uz.js";import"./jsx-runtime-Bbiqkd5w.js";import"./iframe-CHDCLwKA.js";import"./preload-helper-D6kgxu3v.js";import"./dadosShell-CgSTafaH.js";import"./index-gwdxwssV.js";import"./index-XuxhtG-B.js";import"./v2-CKyo1J37.js";import"./index-DpnZhMMf.js";import"./api-CwvJBfED.js";import"./index-DY3h9vDP.js";import"./marca-DP-91ssU.js";import"./carregando-C8CQKI18.js";import"./celulas-DiwOZyDw.js";/* empty css              */import"./CartaoKpi-BYT2Nziu.js";import"./MiniBarras-Bt1bMKDG.js";import"./cores-D-iLqYVd.js";import"./Login-C8cgg3ot.js";import"./etapas-5ZyOYynv.js";/* empty css                */import"./ShellGestao-DSUaSVlw.js";const T="APROVADA COM RESSALVAS - DOCUMENTO CONFERIDO PELO SUPERVISOR",Xe="Catálogo salvo, mas há regra do motor apontando para tag que não existe mais: regras.r_pendente: entao.tag (pendente) não existe no catálogo de tags. Enquanto não for corrigida, essa regra não decide nada.",Ze={versao:4,min_principais:1,max_principais:2,tags:[{id:"aprovada",nome:"APROVADA",tipo:"primaria",efeito:"APROVADA",cor:"green",icone:"check_circle",ativa:!0},{id:"aprovada_confirmou",nome:"Confirmações satisfatórias",tipo:"subtag",pai:"aprovada",ativa:!0},{id:"aprovada_dados",nome:"Cliente confirmou os dados",tipo:"subtag",pai:"aprovada",ativa:!0},{id:"reprovada",nome:"REPROVADA",tipo:"primaria",efeito:"RECUSADA",cor:"red",icone:"cancel",exige_subtag:!0,ativa:!0},{id:"reprovada_fraude",nome:"Suspeita de fraude",tipo:"subtag",pai:"reprovada",ativa:!0},{id:"reprovada_documento",nome:"Documento divergente",tipo:"subtag",pai:"reprovada",ativa:!0},{id:"reprovada_desistiu",nome:"Cliente desistiu",tipo:"subtag",pai:"reprovada",ativa:!1},{id:"pendente",nome:"PENDENTE",tipo:"primaria",efeito:"REVISAR",cor:"orange",icone:"schedule",exige_subtag:!0,ativa:!0},{id:"pendente_caiu",nome:"Ligação caiu",tipo:"subtag",pai:"pendente",ativa:!0},{id:"pendente_interferencia",nome:"Interferência de terceiros na ligação",tipo:"subtag",pai:"pendente",ativa:!0},{id:"ressalva",nome:T,tipo:"primaria",efeito:"APROVADA",cor:"azure",alcada:!0,ativa:!1}]},{expect:e,userEvent:o,waitFor:Qe,within:m}=__STORYBOOK_MODULE_TEST__,Ke=$e("/tags-e-decisao","Jornada de Tags e Motor de decisão dentro do shell. Tags: lista compacta de tags principais, cada uma editada numa gaveta com os seus motivos; “Restaurar padrão” fica no menu ⋯ do cartão e confirma numa gaveta; a barra fixa tem só “Salvar tags” (largura total no celular) e não aparece para quem só pode ver. Motor: simulador, régua de faixas e deduções do motor de pontuação, com o histórico de versões. Carregando mostra esqueletos no lugar do texto; falha de carga diz o que foi (rede, servidor ou permissão) e só oferece Tentar de novo quando adianta; erro de ação nunca mostra detalhe técnico."),v="GET /v1/config/tags",B="GET /v1/config/decisao",K="PUT /v1/config/tags",y="/motor-de-decisao",ht={title:"Jornadas/Tags e Motor",...Ke},Ye={versao:1,exigir_tag_no_encerramento:!0,regras:[],campos:[],tags:[]};async function p(n,a){return await o.click(await n.findByRole("button",{name:`Editar a tag ${a}`})),m(await n.findByRole("dialog",{name:`Editar tag: ${a}`}))}async function d(n){for(let a=0;a<40&&document.activeElement!==n;a++)await new Promise(t=>setTimeout(t,25));await e(document.activeElement).toBe(n)}async function w(n){await o.click(await n.findByRole("button",{name:"Salvar tags"}))}async function Ve(n,a){await o.click(await n.findByRole("button",{name:"Nova tag principal"}));const t=m(await n.findByRole("dialog",{name:"Nova tag principal"})),r=t.getByLabelText(/^Nome/);await d(r),await o.type(r,a),await o.click(t.getByRole("button",{name:"Concluir"}))}async function at(n){return await o.click(await n.findByRole("button",{name:Y})),await o.click(await n.findByRole("menuitem",{name:"Restaurar padrão"})),n.findByRole("dialog",{name:Q})}async function et(n){const a=n.getBoundingClientRect(),t=document.elementFromPoint(a.left+a.width/2,a.top+a.height/2);await e(t&&n.contains(t)).toBe(!0)}const E={jornada:{...u,respostas:{[v]:{status:200,corpo:Ze}}}},R={name:"Tags: padrão",play:async({canvasElement:n,step:a})=>{const t=i(n),r=m(await t.findByRole("list",{name:"Tags principais"}));await e(r.getByRole("button",{name:"Editar a tag REPROVADA"})).toBeInTheDocument(),await a("botões só de ícone dizem qual item mexem",async()=>{const s=await p(t,"REPROVADA");await e(s.getByRole("button",{name:"Remover o motivo Suspeita de fraude de REPROVADA"})).toBeInTheDocument(),await o.click(s.getByRole("button",{name:"Concluir"}))}),await a("Adicionar motivo, Concluir e salvar",async()=>{const s=await p(t,"PENDENTE");await o.click(s.getByRole("button",{name:"Adicionar motivo"}));const l=s.getByRole("textbox",{name:"Motivo 2 de PENDENTE"});await d(l),await o.type(l,"Documento ilegível"),await o.click(s.getByRole("button",{name:"Concluir"})),await d(t.getByRole("button",{name:"Editar a tag PENDENTE"})),await e(t.getByRole("button",{name:"Editar a tag PENDENTE"})).toHaveTextContent("2 motivos"),await o.click(t.getByRole("button",{name:"Salvar tags"})),await e(await t.findByText(Le)).toBeInTheDocument()}),await c()}},x={name:"Tags: gaveta da tag",parameters:E,play:async({canvasElement:n,step:a})=>{const t=i(n),r=await p(t,"REPROVADA"),s=await t.findByRole("dialog",{name:"Editar tag: REPROVADA"});await a("campos na ordem da gaveta",async()=>{const l=Array.from(s.querySelectorAll(".tm-campos-tag .hk-field > label")).map(g=>(g.textContent??"").replace(/\s*(opcional|\*)\s*$/i,"").trim());await e(l).toEqual(["Nome","Efeito no atendimento","Cor","Ícone","Descrição"]),await e(r.getByRole("group",{name:"Como a tag funciona"})).toBeInTheDocument(),await e(r.getByRole("heading",{name:"Motivos (3)"})).toBeInTheDocument()}),await a("trocar a cor para Laranja",async()=>{await o.click(r.getByLabelText("Cor")),await o.click(await r.findByRole("button",{name:"Laranja"})),await e(r.getByLabelText("Cor")).toHaveTextContent("Laranja"),await e(s.querySelector(".tm-amostra-cor--orange")).not.toBeNull()}),await a("prévia do ícone acompanha o campo",async()=>{const l=s.querySelector(".tm-previa-icone");await e(l).toHaveTextContent("cancel"),await e(l).toHaveAttribute("aria-hidden","true");const g=r.getByLabelText(/^Ícone/);await o.clear(g),await o.type(g,"block"),await e(l).toHaveTextContent("block")}),await a("Concluir devolve o foco à linha",async()=>{await o.click(r.getByRole("button",{name:"Concluir"})),await d(t.getByRole("button",{name:"Editar a tag REPROVADA"}))}),await c()}},A={name:"Tags: gaveta com cores laranja e azul-claro",parameters:E,play:async({canvasElement:n})=>{const a=i(n),t=await p(a,"PENDENTE");await e(t.getByLabelText("Cor")).toHaveTextContent("Laranja"),await o.click(t.getByRole("button",{name:/Próxima/}));const r=m(await a.findByRole("dialog",{name:`Editar tag: ${T}`}));await e(r.getByLabelText("Cor")).toHaveTextContent("Azul-claro"),await e(document.querySelector(".tm-amostra-cor--azure")).not.toBeNull(),await c()}},b={name:"Tags: Anterior e Próxima na gaveta",parameters:E,play:async({canvasElement:n})=>{const a=i(n);let t=await p(a,"APROVADA");await e(t.getByText("1 de 4")).toBeInTheDocument(),await e(t.getByRole("button",{name:/Anterior/})).toBeDisabled();for(const[r,s]of[["REPROVADA","2 de 4"],["PENDENTE","3 de 4"],[T,"4 de 4"]])await o.click(t.getByRole("button",{name:/Próxima/})),t=m(await a.findByRole("dialog",{name:`Editar tag: ${r}`})),await e(t.getByText(s)).toBeInTheDocument();await e(t.getByRole("button",{name:/Próxima/})).toBeDisabled(),await o.click(t.getByRole("button",{name:/Anterior/})),t=m(await a.findByRole("dialog",{name:"Editar tag: PENDENTE"})),await o.click(t.getByRole("button",{name:"Concluir"})),await d(a.getByRole("button",{name:"Editar a tag PENDENTE"})),await c()}},D={name:"Tags: duas tags novas seguidas",parameters:E,play:async({canvasElement:n})=>{const a=i(n);await a.findByRole("list",{name:"Tags principais"});for(const r of["NOVA A","NOVA B"]){const s=a.getByRole("button",{name:"Nova tag principal"});await o.click(s);const l=m(await a.findByRole("dialog",{name:"Nova tag principal"})),g=l.getByLabelText(/^Nome/);await d(g),await o.type(g,r),await o.click(l.getByRole("button",{name:"Concluir"})),await d(a.getByRole("button",{name:`Editar a tag ${r}`}))}const t=m(a.getByRole("list",{name:"Tags principais"}));await e(t.getAllByRole("button")).toHaveLength(6),await e(t.getByRole("button",{name:"Editar a tag NOVA A"})).toBeInTheDocument(),await e(t.getByRole("button",{name:"Editar a tag NOVA B"})).toBeInTheDocument(),await c()}},h={name:"Tags: motivo em tag nova",parameters:E,play:async({canvasElement:n})=>{const a=i(n);await o.click(await a.findByRole("button",{name:"Nova tag principal"}));const t=m(await a.findByRole("dialog",{name:"Nova tag principal"})),r=t.getByLabelText(/^Nome/);await d(r),await o.type(r,"EM ANÁLISE"),await o.click(t.getByRole("button",{name:"Adicionar motivo"}));const s=t.getByRole("textbox",{name:"Motivo 1 de EM ANÁLISE"});await d(s),await o.type(s,"Aguardando documento"),await e(t.getByRole("heading",{name:"Motivos (1)"})).toBeInTheDocument(),await o.click(t.getByRole("button",{name:"Concluir"})),await e(a.getByRole("button",{name:"Editar a tag EM ANÁLISE"})).toHaveTextContent("1 motivo"),await c()}},O={name:"Tags: linha com nome de 60 caracteres",parameters:E,play:async({canvasElement:n})=>{const t=await i(n).findByRole("button",{name:`Editar a tag ${T}`}),r=t.querySelector(".tm-tag-linha-nome");await e(r).toHaveTextContent(T),await e(r.scrollHeight).toBeLessThanOrEqual(r.clientHeight+1),await e(r.scrollWidth).toBeLessThanOrEqual(r.clientWidth+1),await e(t).toHaveTextContent("Alçada"),await e(t).toHaveTextContent("Inativa"),await e(t.getBoundingClientRect().height).toBeGreaterThanOrEqual(44),await e(document.documentElement.scrollWidth).toBeLessThanOrEqual(window.innerWidth+1),await c()}},S={name:"Tags: carregando",parameters:{jornada:{...u,pendurar:[v]}},play:async({canvasElement:n})=>{const a=i(n);await e(await a.findByRole("status",{name:"Carregando as tags"})).toBeInTheDocument(),await e(a.queryByText("Carregando…")).not.toBeInTheDocument(),await e(a.queryByRole("button",{name:"Salvar tags"})).not.toBeInTheDocument()}},f={name:"Tags: erro de rede",parameters:{jornada:{...u,semRede:[v]}},play:async({canvasElement:n})=>{const a=i(n);await e(await a.findByText(/Não foi possível carregar as tags/)).toBeInTheDocument(),await e(a.queryByText(/Failed to fetch|HTTP \d+/)).not.toBeInTheDocument(),await o.click(a.getByRole("button",{name:"Tentar de novo"})),await e(await a.findByText(/Não foi possível carregar as tags/)).toBeInTheDocument(),await c()}},I={name:"Tags: erro do servidor",parameters:{jornada:{...u,falhar:[v]}},play:async({canvasElement:n})=>{const a=i(n);await e(await a.findByText(/O servidor teve um problema ao carregar as tags/)).toBeInTheDocument(),await e(a.queryByText(/api falsa/)).not.toBeInTheDocument(),await e(a.getByRole("button",{name:"Tentar de novo"})).toBeInTheDocument(),await c()}},C={name:"Tags: sem permissão",parameters:{jornada:{...u,respostas:{[v]:{status:403,corpo:{erro:"sem permissão"}}}}},play:async({canvasElement:n})=>{const a=i(n);await e(await a.findByText(/não tem permissão para ver as tags/)).toBeInTheDocument(),await e(a.queryByRole("button",{name:"Tentar de novo"})).not.toBeInTheDocument(),await c()}},N={name:"Tags: nenhuma tag",parameters:{jornada:{...u,respostas:{[v]:{status:200,corpo:{versao:1,min_principais:1,max_principais:1,tags:[]}}}}},play:async({canvasElement:n})=>{const a=i(n);await e(await a.findByText("Nenhuma tag ainda")).toBeInTheDocument(),await o.click(a.getByRole("button",{name:"Usar tags padrão"}));const t=m(await a.findByRole("dialog",{name:Q}));await o.click(t.getByRole("button",{name:"Trazer o padrão"})),await e(await a.findByRole("button",{name:"Editar a tag REPROVADA"})).toBeInTheDocument(),await e(a.queryByRole("dialog",{name:Q})).not.toBeInTheDocument(),await c()}},_={name:"Tags: erro ao salvar sem conexão",parameters:{jornada:{...u,semRede:[K]}},play:async({canvasElement:n})=>{const a=i(n);await o.click(await a.findByRole("button",{name:"Salvar tags"}));const t=await a.findByRole("alert");await e(t).toHaveTextContent(/Sem conexão\. Suas tags continuam aqui/),await e(t.textContent).not.toMatch(/Failed to fetch/),await c()}},M={name:"Tags: somente leitura",parameters:{jornada:{...u,sessao:{papel:"gerente",permissoes:{"tags_decisao.ver":!0}}}},play:async({canvasElement:n})=>{const a=i(n);await e(await a.findByText(Je)).toBeInTheDocument(),await a.findByRole("button",{name:"Editar a tag REPROVADA"}),await e(a.queryByRole("button",{name:"Salvar tags"})).not.toBeInTheDocument(),await e(a.queryByRole("button",{name:Y})).not.toBeInTheDocument(),await e(a.queryByRole("button",{name:"Nova tag principal"})).not.toBeInTheDocument(),await e(document.querySelector(".tm-barra-salvar, .tm-com-barra")).toBeNull(),await o.click(a.getByRole("button",{name:"Editar a tag REPROVADA"}));const t=await a.findByRole("dialog",{name:"Editar tag: REPROVADA"}),r=m(t);await e(r.getByLabelText(/^Nome/)).toBeDisabled(),await e(r.queryByRole("button",{name:"Concluir"})).not.toBeInTheDocument(),await e(r.queryByRole("button",{name:"Remover tag"})).not.toBeInTheDocument();const s=t.querySelector(".tm-gaveta-rodape");await e(m(s).getAllByRole("button").map(l=>l.textContent)).toEqual(["Fechar"]),await o.click(m(s).getByRole("button",{name:"Fechar"})),await d(a.getByRole("button",{name:"Editar a tag REPROVADA"})),await c()}},P={name:"Tags: nome curto demais",play:async({canvasElement:n})=>{const a=i(n);await Ve(a,"A"),await w(a);const t=await a.findByRole("alert");await e(t).toHaveTextContent(ze),await o.click(m(t.closest(".tm-aviso")).getByRole("button",{name:"Corrigir"}));const r=m(await a.findByRole("dialog",{name:"Editar tag: A"}));await d(r.getByLabelText(/^Nome/)),await c()}},q={name:"Tags: nome que repete o identificador",play:async({canvasElement:n})=>{const a=i(n);await Ve(a,"Reprovada"),await w(a),await e(await a.findByRole("alert")).toHaveTextContent(/Já existe outro item com um nome que gera o mesmo identificador: “REPROVADA”/),await e(a.getByRole("button",{name:"Editar a tag Reprovada"})).toHaveClass("com-erro"),await c()}},L={name:"Tags: mínimo maior que o máximo",play:async({canvasElement:n})=>{const a=i(n),t=await a.findByLabelText(/^Mínimo/);await ke(t,"3"),await w(a),await e(await a.findByRole("alert")).toHaveTextContent(Ue),await e(t).toHaveAttribute("aria-invalid","true"),await c()}},k={name:"Tags: exige motivo sem motivo ativo",play:async({canvasElement:n})=>{const a=i(n),t=await p(a,"PENDENTE");await o.click(t.getByRole("button",{name:"Remover o motivo Ligação caiu de PENDENTE"})),await o.click(t.getByRole("button",{name:"Concluir"})),await w(a),await e(await a.findByRole("alert")).toHaveTextContent(je),await e(a.getByRole("button",{name:"Editar a tag PENDENTE"})).toHaveClass("com-erro"),await c()}},V={name:"Tags: restaurar padrão com falha 409",parameters:{jornada:{...u,respostas:{"GET /v1/tags-padrao":{status:409,corpo:{erro:"conflict: catalogo_em_uso"}}}}},play:async({canvasElement:n,step:a})=>{const t=i(n);await t.findByRole("button",{name:"Editar a tag REPROVADA"});const r=await at(t),s=m(r);await a("gaveta lateral, Cancelar focado, nada por cima do rodapé",async()=>{await e(r).toHaveClass("op-gaveta"),await d(s.getByRole("button",{name:"Cancelar"})),await et(s.getByRole("button",{name:"Trazer o padrão"}))}),await a("409 aparece dentro da gaveta, sem eco",async()=>{await o.click(s.getByRole("button",{name:"Trazer o padrão"}));const l=await s.findByRole("alert");await e(l.textContent).not.toMatch(/conflict|catalogo_em_uso|409/),await e(t.getByRole("dialog",{name:Q})).toBeInTheDocument(),await e(t.getByRole("button",{name:"Editar a tag REPROVADA"})).toBeInTheDocument()}),await a("Cancelar fecha e devolve o foco ao menu",async()=>{await o.click(s.getByRole("button",{name:"Cancelar"})),await d(t.getByRole("button",{name:Y}))}),await c()}},H={name:"Tags: remover tag sem confirmação",play:async({canvasElement:n})=>{const a=i(n),t=await p(a,"PENDENTE");await o.click(t.getByRole("button",{name:"Remover tag"})),await e(a.queryByRole("dialog")).not.toBeInTheDocument(),await e(a.queryByRole("button",{name:"Editar a tag PENDENTE"})).not.toBeInTheDocument(),await e(a.queryByText(/removida/)).not.toBeInTheDocument(),await e(document.querySelector(".tm-barra-salvar")).toHaveTextContent(qe),await w(a),await e(await a.findByText(Le)).toBeInTheDocument(),await e(a.queryByRole("button",{name:"Editar a tag PENDENTE"})).not.toBeInTheDocument(),await c()}},F={name:"Tags: salvo com regra órfã",parameters:{jornada:{...u,respostas:{[K]:{status:200,corpo:{ok:!0,versao:4,aviso:Xe}}}}},play:async({canvasElement:n})=>{const a=i(n);await w(a),await e(await a.findByText(Fe)).toBeInTheDocument(),await e(a.queryByText(/entao\.tag|regras\./)).not.toBeInTheDocument(),await c()}},G={name:"Tags: erro do servidor ao salvar sem eco",parameters:{jornada:{...u,respostas:{[K]:{status:500,corpo:{erro:"Internal error: pg timeout em tags.ts:120"}}}}},play:async({canvasElement:n})=>{const a=i(n);await w(a);const t=await a.findByRole("alert");await e(t).toHaveTextContent(Ge),await e(document.body.textContent).not.toMatch(/pg timeout|tags\.ts|Internal/),await e(a.getByRole("button",{name:"Salvar tags"})).toBeEnabled(),await c()}},j={name:"Tags: salvando com clique duplo",parameters:{jornada:{...u,pendurar:[K]}},play:async({canvasElement:n})=>{const a=i(n),t=await a.findByRole("button",{name:"Salvar tags"});await o.dblClick(t);const r=await a.findByRole("button",{name:/Salvando…/});await e(r).toBeDisabled(),await e(r).toHaveAttribute("aria-busy","true"),await e(document.querySelector(".tm-com-barra")).toHaveAttribute("aria-busy","true");const s=document.querySelector(".tm-barra-salvar");await e(s.getBoundingClientRect().height).toBeLessThanOrEqual(76),await e(r.getBoundingClientRect().height).toBeGreaterThanOrEqual(44);const l=document.querySelectorAll(".tm-com-barra > .cartao"),g=l[l.length-1];window.scrollTo(0,document.documentElement.scrollHeight),await new Promise(He=>setTimeout(He,50)),await e(s.getBoundingClientRect().top-g.getBoundingClientRect().bottom).toBeGreaterThanOrEqual(16)}},z={name:"Tags: aviso ao sair com alteração",play:async({canvasElement:n})=>{const a=i(n);await ke(await a.findByLabelText(/^Máximo/),"2"),await e(document.querySelector(".tm-barra-salvar")).toHaveTextContent(qe),await We(n,/^Atendentes/);const r=m(await a.findByRole("dialog",{name:"Sair sem salvar?"})).getByRole("button",{name:"Continuar editando"});await Qe(()=>e(getComputedStyle(r).pointerEvents).not.toBe("none")),await o.click(r),await e(await a.findByLabelText(/^Máximo/)).toHaveValue(2),await c()}},U={name:"Motor: padrão",args:{rotaInicial:y},play:async({canvasElement:n,step:a})=>{const t=i(n);await e(await t.findByRole("region",{name:"Motor de pontuação"})).toBeInTheDocument(),await a("deduções com nome do item nos controles",async()=>{await e(t.getByRole("checkbox",{name:"Dedução Segunda voz na ligação ligada"})).toBeChecked(),await e(t.getByRole("button",{name:"Remover a dedução Segunda voz na ligação"})).toBeInTheDocument(),await o.click(t.getByRole("button",{name:"Editar o limiar de Semelhança facial abaixo de 70"})),await o.click(t.getByRole("button",{name:"Concluir"}))}),await a("histórico de versões abre",async()=>{await o.click(t.getByRole("button",{name:"Histórico de versões"}));const r=m(await t.findByRole("dialog"));await e(await r.findByText("v12")).toBeInTheDocument(),await o.keyboard("{Escape}")}),await a("calibração por canal mostra as duas réguas",async()=>{await o.click(t.getByText("Calibração por canal (IA × Humano)")),await e(await t.findByText("Faixas — Humano")).toBeInTheDocument(),await e(t.getByRole("spinbutton",{name:"Pontos de Segunda voz na ligação no Humano"})).toBeInTheDocument()}),await c()}},J={name:"Motor: carregando",args:{rotaInicial:y},parameters:{jornada:{...u,pendurar:[B]}},play:async({canvasElement:n})=>{const a=i(n);await e(await a.findByRole("status",{name:"Carregando as regras do motor de decisão"})).toBeInTheDocument(),await e(a.queryByRole("button",{name:"Salvar regras"})).not.toBeInTheDocument()}},$={name:"Motor: erro de rede",args:{rotaInicial:y},parameters:{jornada:{...u,semRede:[B]}},play:async({canvasElement:n})=>{const a=i(n);await e(await a.findByText(/Não foi possível carregar as regras do motor/)).toBeInTheDocument(),await e(a.getByRole("button",{name:"Tentar de novo"})).toBeInTheDocument(),await c()}},W={name:"Motor: erro do servidor",args:{rotaInicial:y},parameters:{jornada:{...u,falhar:[B]}},play:async({canvasElement:n})=>{const a=i(n);await e(await a.findByText(/O servidor teve um problema ao carregar as regras do motor/)).toBeInTheDocument(),await e(a.queryByText(/api falsa/)).not.toBeInTheDocument(),await c()}},X={name:"Motor: sem permissão",args:{rotaInicial:y},parameters:{jornada:{...u,respostas:{[B]:{status:403,corpo:{erro:"sem permissão"}}}}},play:async({canvasElement:n})=>{const a=i(n);await e(await a.findByText(/não tem permissão para ver as regras do motor/)).toBeInTheDocument(),await e(a.queryByRole("button",{name:"Tentar de novo"})).not.toBeInTheDocument(),await c()}},Z={name:"Motor: nenhuma regra",args:{rotaInicial:y},parameters:{jornada:{...u,respostas:{[B]:{status:200,corpo:Ye}}}},play:async({canvasElement:n})=>{const a=i(n);await e(await a.findByText("Nenhuma regra cadastrada")).toBeInTheDocument(),await o.click(a.getByRole("button",{name:"Restaurar padrão"})),await e(await a.findByDisplayValue("Lipsync reprovado → reprovar")).toBeInTheDocument(),await e(a.getAllByRole("button",{name:"Subir (decide antes)"})).toHaveLength(2),await c()}},Ot=["Padrao","GavetaTag","GavetaTagOrangeAzul","NavegacaoEntreTags","DuasTagsNovas","MotivoEmTagNova","LinhaCompacta375","Carregando","SemRede","ErroDoServidor","SemPermissao","Vazio","ErroAoSalvar","SomenteLeitura","IdCurto","IdRepetido","MinMaiorQueMax","ExigeMotivoSemMotivo","RestaurarPadraoConfirma","RemoverTagSemConfirmacao","AvisoRegraOrfa","ErroServidorSemEco","SalvandoCliqueDuplo","AvisoDeSaida","MotorPadrao","MotorCarregando","MotorSemRede","MotorErroDoServidor","MotorSemPermissao","MotorVazio"];var aa,ea,ta;R.parameters={...R.parameters,docs:{...(aa=R.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  name: "Tags: padrão",
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    const lista = within(await tela.findByRole("list", {
      name: "Tags principais"
    }));
    await expect(lista.getByRole("button", {
      name: "Editar a tag REPROVADA"
    })).toBeInTheDocument();
    await step("botões só de ícone dizem qual item mexem", async () => {
      const gaveta = await abrirGaveta(tela, "REPROVADA");
      await expect(gaveta.getByRole("button", {
        name: "Remover o motivo Suspeita de fraude de REPROVADA"
      })).toBeInTheDocument();
      await userEvent.click(gaveta.getByRole("button", {
        name: "Concluir"
      }));
    });
    await step("Adicionar motivo, Concluir e salvar", async () => {
      const gaveta = await abrirGaveta(tela, "PENDENTE");
      await userEvent.click(gaveta.getByRole("button", {
        name: "Adicionar motivo"
      }));
      const novo = gaveta.getByRole("textbox", {
        name: "Motivo 2 de PENDENTE"
      });
      await esperarFoco(novo);
      await userEvent.type(novo, "Documento ilegível");
      await userEvent.click(gaveta.getByRole("button", {
        name: "Concluir"
      }));
      await esperarFoco(tela.getByRole("button", {
        name: "Editar a tag PENDENTE"
      }));
      await expect(tela.getByRole("button", {
        name: "Editar a tag PENDENTE"
      })).toHaveTextContent("2 motivos");
      await userEvent.click(tela.getByRole("button", {
        name: "Salvar tags"
      }));
      await expect(await tela.findByText(SALVO_TAGS)).toBeInTheDocument();
    });
    await semRotaSemFixture();
  }
}`,...(ta=(ea=R.parameters)==null?void 0:ea.docs)==null?void 0:ta.source}}};var na,oa,ra;x.parameters={...x.parameters,docs:{...(na=x.parameters)==null?void 0:na.docs,source:{originalSource:`{
  name: "Tags: gaveta da tag",
  parameters: COM_ONDA13,
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    const gaveta = await abrirGaveta(tela, "REPROVADA");
    const dialogo = await tela.findByRole("dialog", {
      name: "Editar tag: REPROVADA"
    });
    await step("campos na ordem da gaveta", async () => {
      const rotulos = Array.from(dialogo.querySelectorAll<HTMLElement>(".tm-campos-tag .hk-field > label")).map(l => (l.textContent ?? "").replace(/\\s*(opcional|\\*)\\s*$/i, "").trim());
      await expect(rotulos).toEqual(["Nome", "Efeito no atendimento", "Cor", "Ícone", "Descrição"]);
      await expect(gaveta.getByRole("group", {
        name: "Como a tag funciona"
      })).toBeInTheDocument();
      await expect(gaveta.getByRole("heading", {
        name: "Motivos (3)"
      })).toBeInTheDocument();
    });
    await step("trocar a cor para Laranja", async () => {
      await userEvent.click(gaveta.getByLabelText("Cor"));
      await userEvent.click(await gaveta.findByRole("button", {
        name: "Laranja"
      }));
      await expect(gaveta.getByLabelText("Cor")).toHaveTextContent("Laranja");
      await expect(dialogo.querySelector(".tm-amostra-cor--orange")).not.toBeNull();
    });
    await step("prévia do ícone acompanha o campo", async () => {
      const previa = dialogo.querySelector<HTMLElement>(".tm-previa-icone");
      await expect(previa).toHaveTextContent("cancel");
      await expect(previa).toHaveAttribute("aria-hidden", "true");
      const icone = gaveta.getByLabelText(/^Ícone/);
      await userEvent.clear(icone);
      await userEvent.type(icone, "block");
      await expect(previa).toHaveTextContent("block");
    });
    await step("Concluir devolve o foco à linha", async () => {
      await userEvent.click(gaveta.getByRole("button", {
        name: "Concluir"
      }));
      await esperarFoco(tela.getByRole("button", {
        name: "Editar a tag REPROVADA"
      }));
    });
    await semRotaSemFixture();
  }
}`,...(ra=(oa=x.parameters)==null?void 0:oa.docs)==null?void 0:ra.source}}};var ia,sa,ca;A.parameters={...A.parameters,docs:{...(ia=A.parameters)==null?void 0:ia.docs,source:{originalSource:`{
  name: "Tags: gaveta com cores laranja e azul-claro",
  parameters: COM_ONDA13,
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    const gaveta = await abrirGaveta(tela, "PENDENTE");
    await expect(gaveta.getByLabelText("Cor")).toHaveTextContent("Laranja");
    await userEvent.click(gaveta.getByRole("button", {
      name: /Próxima/
    }));
    const seguinte = within(await tela.findByRole("dialog", {
      name: \`Editar tag: \${NOME_TAG_60}\`
    }));
    await expect(seguinte.getByLabelText("Cor")).toHaveTextContent("Azul-claro");
    await expect(document.querySelector(".tm-amostra-cor--azure")).not.toBeNull();
    await semRotaSemFixture();
  }
}`,...(ca=(sa=A.parameters)==null?void 0:sa.docs)==null?void 0:ca.source}}};var la,ma,ua;b.parameters={...b.parameters,docs:{...(la=b.parameters)==null?void 0:la.docs,source:{originalSource:`{
  name: "Tags: Anterior e Próxima na gaveta",
  parameters: COM_ONDA13,
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    let gaveta = await abrirGaveta(tela, "APROVADA");
    await expect(gaveta.getByText("1 de 4")).toBeInTheDocument();
    await expect(gaveta.getByRole("button", {
      name: /Anterior/
    })).toBeDisabled();
    for (const [nome, posicao] of [["REPROVADA", "2 de 4"], ["PENDENTE", "3 de 4"], [NOME_TAG_60, "4 de 4"]]) {
      await userEvent.click(gaveta.getByRole("button", {
        name: /Próxima/
      }));
      gaveta = within(await tela.findByRole("dialog", {
        name: \`Editar tag: \${nome}\`
      }));
      await expect(gaveta.getByText(posicao)).toBeInTheDocument();
    }
    await expect(gaveta.getByRole("button", {
      name: /Próxima/
    })).toBeDisabled();
    await userEvent.click(gaveta.getByRole("button", {
      name: /Anterior/
    }));
    gaveta = within(await tela.findByRole("dialog", {
      name: "Editar tag: PENDENTE"
    }));
    await userEvent.click(gaveta.getByRole("button", {
      name: "Concluir"
    }));
    await esperarFoco(tela.getByRole("button", {
      name: "Editar a tag PENDENTE"
    }));
    await semRotaSemFixture();
  }
}`,...(ua=(ma=b.parameters)==null?void 0:ma.docs)==null?void 0:ua.source}}};var da,ga,pa;D.parameters={...D.parameters,docs:{...(da=D.parameters)==null?void 0:da.docs,source:{originalSource:`{
  name: "Tags: duas tags novas seguidas",
  parameters: COM_ONDA13,
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await tela.findByRole("list", {
      name: "Tags principais"
    });
    for (const nome of ["NOVA A", "NOVA B"]) {
      const botao = tela.getByRole("button", {
        name: "Nova tag principal"
      });
      await userEvent.click(botao);
      const gaveta = within(await tela.findByRole("dialog", {
        name: "Nova tag principal"
      }));
      const campo = gaveta.getByLabelText(/^Nome/);
      await esperarFoco(campo);
      await userEvent.type(campo, nome);
      await userEvent.click(gaveta.getByRole("button", {
        name: "Concluir"
      }));
      await esperarFoco(tela.getByRole("button", {
        name: \`Editar a tag \${nome}\`
      }));
    }
    const lista = within(tela.getByRole("list", {
      name: "Tags principais"
    }));
    await expect(lista.getAllByRole("button")).toHaveLength(6);
    await expect(lista.getByRole("button", {
      name: "Editar a tag NOVA A"
    })).toBeInTheDocument();
    await expect(lista.getByRole("button", {
      name: "Editar a tag NOVA B"
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(pa=(ga=D.parameters)==null?void 0:ga.docs)==null?void 0:pa.source}}};var wa,va,ya;h.parameters={...h.parameters,docs:{...(wa=h.parameters)==null?void 0:wa.docs,source:{originalSource:`{
  name: "Tags: motivo em tag nova",
  parameters: COM_ONDA13,
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await userEvent.click(await tela.findByRole("button", {
      name: "Nova tag principal"
    }));
    const gaveta = within(await tela.findByRole("dialog", {
      name: "Nova tag principal"
    }));
    const campo = gaveta.getByLabelText(/^Nome/);
    await esperarFoco(campo);
    await userEvent.type(campo, "EM ANÁLISE");
    await userEvent.click(gaveta.getByRole("button", {
      name: "Adicionar motivo"
    }));
    const motivo = gaveta.getByRole("textbox", {
      name: "Motivo 1 de EM ANÁLISE"
    });
    await esperarFoco(motivo);
    await userEvent.type(motivo, "Aguardando documento");
    await expect(gaveta.getByRole("heading", {
      name: "Motivos (1)"
    })).toBeInTheDocument();
    await userEvent.click(gaveta.getByRole("button", {
      name: "Concluir"
    }));
    await expect(tela.getByRole("button", {
      name: "Editar a tag EM ANÁLISE"
    })).toHaveTextContent("1 motivo");
    await semRotaSemFixture();
  }
}`,...(ya=(va=h.parameters)==null?void 0:va.docs)==null?void 0:ya.source}}};var Ea,Ta,Ba;O.parameters={...O.parameters,docs:{...(Ea=O.parameters)==null?void 0:Ea.docs,source:{originalSource:`{
  name: "Tags: linha com nome de 60 caracteres",
  parameters: COM_ONDA13,
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    const linha = await tela.findByRole("button", {
      name: \`Editar a tag \${NOME_TAG_60}\`
    });
    const nome = linha.querySelector<HTMLElement>(".tm-tag-linha-nome");
    await expect(nome).toHaveTextContent(NOME_TAG_60);
    await expect(nome!.scrollHeight).toBeLessThanOrEqual(nome!.clientHeight + 1);
    await expect(nome!.scrollWidth).toBeLessThanOrEqual(nome!.clientWidth + 1);
    await expect(linha).toHaveTextContent("Alçada");
    await expect(linha).toHaveTextContent("Inativa");
    await expect(linha.getBoundingClientRect().height).toBeGreaterThanOrEqual(44);
    await expect(document.documentElement.scrollWidth).toBeLessThanOrEqual(window.innerWidth + 1);
    await semRotaSemFixture();
  }
}`,...(Ba=(Ta=O.parameters)==null?void 0:Ta.docs)==null?void 0:Ba.source}}};var Ra,xa,Aa;S.parameters={...S.parameters,docs:{...(Ra=S.parameters)==null?void 0:Ra.docs,source:{originalSource:`{
  name: "Tags: carregando",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      pendurar: [TAGS]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByRole("status", {
      name: "Carregando as tags"
    })).toBeInTheDocument();
    await expect(tela.queryByText("Carregando…")).not.toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: "Salvar tags"
    })).not.toBeInTheDocument();
  }
}`,...(Aa=(xa=S.parameters)==null?void 0:xa.docs)==null?void 0:Aa.source}}};var ba,Da,ha;f.parameters={...f.parameters,docs:{...(ba=f.parameters)==null?void 0:ba.docs,source:{originalSource:`{
  name: "Tags: erro de rede",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      semRede: [TAGS]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/Não foi possível carregar as tags/)).toBeInTheDocument();
    await expect(tela.queryByText(/Failed to fetch|HTTP \\d+/)).not.toBeInTheDocument();
    await userEvent.click(tela.getByRole("button", {
      name: "Tentar de novo"
    }));
    await expect(await tela.findByText(/Não foi possível carregar as tags/)).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(ha=(Da=f.parameters)==null?void 0:Da.docs)==null?void 0:ha.source}}};var Oa,Sa,fa;I.parameters={...I.parameters,docs:{...(Oa=I.parameters)==null?void 0:Oa.docs,source:{originalSource:`{
  name: "Tags: erro do servidor",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      falhar: [TAGS]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/O servidor teve um problema ao carregar as tags/)).toBeInTheDocument();
    await expect(tela.queryByText(/api falsa/)).not.toBeInTheDocument();
    await expect(tela.getByRole("button", {
      name: "Tentar de novo"
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(fa=(Sa=I.parameters)==null?void 0:Sa.docs)==null?void 0:fa.source}}};var Ia,Ca,Na;C.parameters={...C.parameters,docs:{...(Ia=C.parameters)==null?void 0:Ia.docs,source:{originalSource:`{
  name: "Tags: sem permissão",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [TAGS]: {
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
    await expect(await tela.findByText(/não tem permissão para ver as tags/)).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: "Tentar de novo"
    })).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(Na=(Ca=C.parameters)==null?void 0:Ca.docs)==null?void 0:Na.source}}};var _a,Ma,Pa;N.parameters={...N.parameters,docs:{...(_a=N.parameters)==null?void 0:_a.docs,source:{originalSource:`{
  name: "Tags: nenhuma tag",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [TAGS]: {
          status: 200,
          corpo: {
            versao: 1,
            min_principais: 1,
            max_principais: 1,
            tags: []
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Nenhuma tag ainda")).toBeInTheDocument();
    await userEvent.click(tela.getByRole("button", {
      name: "Usar tags padrão"
    }));
    const gaveta = within(await tela.findByRole("dialog", {
      name: TITULO_RESTAURAR_TAGS
    }));
    await userEvent.click(gaveta.getByRole("button", {
      name: "Trazer o padrão"
    }));
    await expect(await tela.findByRole("button", {
      name: "Editar a tag REPROVADA"
    })).toBeInTheDocument();
    await expect(tela.queryByRole("dialog", {
      name: TITULO_RESTAURAR_TAGS
    })).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(Pa=(Ma=N.parameters)==null?void 0:Ma.docs)==null?void 0:Pa.source}}};var qa,La,ka;_.parameters={..._.parameters,docs:{...(qa=_.parameters)==null?void 0:qa.docs,source:{originalSource:`{
  name: "Tags: erro ao salvar sem conexão",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      semRede: [SALVAR_TAGS]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await userEvent.click(await tela.findByRole("button", {
      name: "Salvar tags"
    }));
    const alerta = await tela.findByRole("alert");
    await expect(alerta).toHaveTextContent(/Sem conexão\\. Suas tags continuam aqui/);
    await expect(alerta.textContent).not.toMatch(/Failed to fetch/);
    await semRotaSemFixture();
  }
}`,...(ka=(La=_.parameters)==null?void 0:La.docs)==null?void 0:ka.source}}};var Va,Ha,Fa;M.parameters={...M.parameters,docs:{...(Va=M.parameters)==null?void 0:Va.docs,source:{originalSource:`{
  name: "Tags: somente leitura",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      sessao: {
        papel: "gerente",
        permissoes: {
          "tags_decisao.ver": true
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(PERMISSAO)).toBeInTheDocument();
    await tela.findByRole("button", {
      name: "Editar a tag REPROVADA"
    });
    await expect(tela.queryByRole("button", {
      name: "Salvar tags"
    })).not.toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: ROTULO_MENU_TAGS
    })).not.toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: "Nova tag principal"
    })).not.toBeInTheDocument();
    await expect(document.querySelector(".tm-barra-salvar, .tm-com-barra")).toBeNull();
    await userEvent.click(tela.getByRole("button", {
      name: "Editar a tag REPROVADA"
    }));
    const dialogo = await tela.findByRole("dialog", {
      name: "Editar tag: REPROVADA"
    });
    const gaveta = within(dialogo);
    await expect(gaveta.getByLabelText(/^Nome/)).toBeDisabled();
    await expect(gaveta.queryByRole("button", {
      name: "Concluir"
    })).not.toBeInTheDocument();
    await expect(gaveta.queryByRole("button", {
      name: "Remover tag"
    })).not.toBeInTheDocument();
    const rodape = dialogo.querySelector<HTMLElement>(".tm-gaveta-rodape")!;
    await expect(within(rodape).getAllByRole("button").map(b => b.textContent)).toEqual(["Fechar"]);
    await userEvent.click(within(rodape).getByRole("button", {
      name: "Fechar"
    }));
    await esperarFoco(tela.getByRole("button", {
      name: "Editar a tag REPROVADA"
    }));
    await semRotaSemFixture();
  }
}`,...(Fa=(Ha=M.parameters)==null?void 0:Ha.docs)==null?void 0:Fa.source}}};var Ga,ja,za;P.parameters={...P.parameters,docs:{...(Ga=P.parameters)==null?void 0:Ga.docs,source:{originalSource:`{
  name: "Tags: nome curto demais",
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await novaTag(tela, "A");
    await salvarTags(tela);
    const alerta = await tela.findByRole("alert");
    await expect(alerta).toHaveTextContent(ID_CURTO);
    await userEvent.click(within(alerta.closest(".tm-aviso") as HTMLElement).getByRole("button", {
      name: "Corrigir"
    }));
    const gaveta = within(await tela.findByRole("dialog", {
      name: "Editar tag: A"
    }));
    await esperarFoco(gaveta.getByLabelText(/^Nome/));
    await semRotaSemFixture();
  }
}`,...(za=(ja=P.parameters)==null?void 0:ja.docs)==null?void 0:za.source}}};var Ua,Ja,$a;q.parameters={...q.parameters,docs:{...(Ua=q.parameters)==null?void 0:Ua.docs,source:{originalSource:`{
  name: "Tags: nome que repete o identificador",
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await novaTag(tela, "Reprovada");
    await salvarTags(tela);
    await expect(await tela.findByRole("alert")).toHaveTextContent(/Já existe outro item com um nome que gera o mesmo identificador: “REPROVADA”/);
    await expect(tela.getByRole("button", {
      name: "Editar a tag Reprovada"
    })).toHaveClass("com-erro");
    await semRotaSemFixture();
  }
}`,...($a=(Ja=q.parameters)==null?void 0:Ja.docs)==null?void 0:$a.source}}};var Wa,Xa,Za;L.parameters={...L.parameters,docs:{...(Wa=L.parameters)==null?void 0:Wa.docs,source:{originalSource:`{
  name: "Tags: mínimo maior que o máximo",
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    const minimo = await tela.findByLabelText(/^Mínimo/);
    await digitar(minimo, "3");
    await salvarTags(tela);
    await expect(await tela.findByRole("alert")).toHaveTextContent(MINIMO_ACIMA_DO_MAXIMO);
    await expect(minimo).toHaveAttribute("aria-invalid", "true");
    await semRotaSemFixture();
  }
}`,...(Za=(Xa=L.parameters)==null?void 0:Xa.docs)==null?void 0:Za.source}}};var Qa,Ka,Ya;k.parameters={...k.parameters,docs:{...(Qa=k.parameters)==null?void 0:Qa.docs,source:{originalSource:`{
  name: "Tags: exige motivo sem motivo ativo",
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    const gaveta = await abrirGaveta(tela, "PENDENTE");
    await userEvent.click(gaveta.getByRole("button", {
      name: "Remover o motivo Ligação caiu de PENDENTE"
    }));
    await userEvent.click(gaveta.getByRole("button", {
      name: "Concluir"
    }));
    await salvarTags(tela);
    await expect(await tela.findByRole("alert")).toHaveTextContent(EXIGE_MOTIVO_SEM_MOTIVO);
    await expect(tela.getByRole("button", {
      name: "Editar a tag PENDENTE"
    })).toHaveClass("com-erro");
    await semRotaSemFixture();
  }
}`,...(Ya=(Ka=k.parameters)==null?void 0:Ka.docs)==null?void 0:Ya.source}}};var ae,ee,te;V.parameters={...V.parameters,docs:{...(ae=V.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: "Tags: restaurar padrão com falha 409",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        "GET /v1/tags-padrao": {
          status: 409,
          corpo: {
            erro: "conflict: catalogo_em_uso"
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await tela.findByRole("button", {
      name: "Editar a tag REPROVADA"
    });
    const dialogo = await abrirRestaurar(tela);
    const gaveta = within(dialogo);
    await step("gaveta lateral, Cancelar focado, nada por cima do rodapé", async () => {
      await expect(dialogo).toHaveClass("op-gaveta");
      await esperarFoco(gaveta.getByRole("button", {
        name: "Cancelar"
      }));
      await semNadaPorCima(gaveta.getByRole("button", {
        name: "Trazer o padrão"
      }));
    });
    await step("409 aparece dentro da gaveta, sem eco", async () => {
      await userEvent.click(gaveta.getByRole("button", {
        name: "Trazer o padrão"
      }));
      const alerta = await gaveta.findByRole("alert");
      await expect(alerta.textContent).not.toMatch(/conflict|catalogo_em_uso|409/);
      await expect(tela.getByRole("dialog", {
        name: TITULO_RESTAURAR_TAGS
      })).toBeInTheDocument();
      await expect(tela.getByRole("button", {
        name: "Editar a tag REPROVADA"
      })).toBeInTheDocument();
    });
    await step("Cancelar fecha e devolve o foco ao menu", async () => {
      await userEvent.click(gaveta.getByRole("button", {
        name: "Cancelar"
      }));
      await esperarFoco(tela.getByRole("button", {
        name: ROTULO_MENU_TAGS
      }));
    });
    await semRotaSemFixture();
  }
}`,...(te=(ee=V.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,oe,re;H.parameters={...H.parameters,docs:{...(ne=H.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: "Tags: remover tag sem confirmação",
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    const gaveta = await abrirGaveta(tela, "PENDENTE");
    await userEvent.click(gaveta.getByRole("button", {
      name: "Remover tag"
    }));
    await expect(tela.queryByRole("dialog")).not.toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: "Editar a tag PENDENTE"
    })).not.toBeInTheDocument();
    await expect(tela.queryByText(/removida/)).not.toBeInTheDocument();
    await expect(document.querySelector(".tm-barra-salvar")).toHaveTextContent(ALTERACOES_NAO_SALVAS);
    await salvarTags(tela);
    await expect(await tela.findByText(SALVO_TAGS)).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: "Editar a tag PENDENTE"
    })).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(re=(oe=H.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var ie,se,ce;F.parameters={...F.parameters,docs:{...(ie=F.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: "Tags: salvo com regra órfã",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [SALVAR_TAGS]: {
          status: 200,
          corpo: {
            ok: true,
            versao: 4,
            aviso: AVISO_ORFA_DO_SERVIDOR
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await salvarTags(tela);
    await expect(await tela.findByText(AVISO_REGRA_ORFA)).toBeInTheDocument();
    await expect(tela.queryByText(/entao\\.tag|regras\\./)).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(ce=(se=F.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var le,me,ue;G.parameters={...G.parameters,docs:{...(le=G.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: "Tags: erro do servidor ao salvar sem eco",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [SALVAR_TAGS]: {
          status: 500,
          corpo: {
            erro: "Internal error: pg timeout em tags.ts:120"
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await salvarTags(tela);
    const alerta = await tela.findByRole("alert");
    await expect(alerta).toHaveTextContent(SERVIDOR);
    await expect(document.body.textContent).not.toMatch(/pg timeout|tags\\.ts|Internal/);
    await expect(tela.getByRole("button", {
      name: "Salvar tags"
    })).toBeEnabled();
    await semRotaSemFixture();
  }
}`,...(ue=(me=G.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var de,ge,pe;j.parameters={...j.parameters,docs:{...(de=j.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: "Tags: salvando com clique duplo",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      pendurar: [SALVAR_TAGS]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    const salvar = await tela.findByRole("button", {
      name: "Salvar tags"
    });
    await userEvent.dblClick(salvar);
    const salvando = await tela.findByRole("button", {
      name: /Salvando…/
    });
    await expect(salvando).toBeDisabled();
    await expect(salvando).toHaveAttribute("aria-busy", "true");
    await expect(document.querySelector(".tm-com-barra")).toHaveAttribute("aria-busy", "true");
    const barra = document.querySelector<HTMLElement>(".tm-barra-salvar")!;
    await expect(barra.getBoundingClientRect().height).toBeLessThanOrEqual(76);
    await expect(salvando.getBoundingClientRect().height).toBeGreaterThanOrEqual(44);
    const cartoes = document.querySelectorAll<HTMLElement>(".tm-com-barra > .cartao");
    const ultimo = cartoes[cartoes.length - 1];
    window.scrollTo(0, document.documentElement.scrollHeight);
    await new Promise(r => setTimeout(r, 50));
    await expect(barra.getBoundingClientRect().top - ultimo.getBoundingClientRect().bottom).toBeGreaterThanOrEqual(16);
  }
}`,...(pe=(ge=j.parameters)==null?void 0:ge.docs)==null?void 0:pe.source}}};var we,ve,ye;z.parameters={...z.parameters,docs:{...(we=z.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: "Tags: aviso ao sair com alteração",
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await digitar(await tela.findByLabelText(/^Máximo/), "2");
    await expect(document.querySelector(".tm-barra-salvar")).toHaveTextContent(ALTERACOES_NAO_SALVAS);
    await irPeloMenu(canvasElement, /^Atendentes/);
    const aviso = within(await tela.findByRole("dialog", {
      name: "Sair sem salvar?"
    }));
    const continuar = aviso.getByRole("button", {
      name: "Continuar editando"
    });
    await waitFor(() => expect(getComputedStyle(continuar).pointerEvents).not.toBe("none"));
    await userEvent.click(continuar);
    await expect(await tela.findByLabelText(/^Máximo/)).toHaveValue(2);
    await semRotaSemFixture();
  }
}`,...(ye=(ve=z.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var Ee,Te,Be;U.parameters={...U.parameters,docs:{...(Ee=U.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  name: "Motor: padrão",
  args: {
    rotaInicial: ROTA_MOTOR
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByRole("region", {
      name: "Motor de pontuação"
    })).toBeInTheDocument();
    await step("deduções com nome do item nos controles", async () => {
      await expect(tela.getByRole("checkbox", {
        name: "Dedução Segunda voz na ligação ligada"
      })).toBeChecked();
      await expect(tela.getByRole("button", {
        name: "Remover a dedução Segunda voz na ligação"
      })).toBeInTheDocument();
      await userEvent.click(tela.getByRole("button", {
        name: "Editar o limiar de Semelhança facial abaixo de 70"
      }));
      await userEvent.click(tela.getByRole("button", {
        name: "Concluir"
      }));
    });
    await step("histórico de versões abre", async () => {
      await userEvent.click(tela.getByRole("button", {
        name: "Histórico de versões"
      }));
      const caixa = within(await tela.findByRole("dialog"));
      await expect(await caixa.findByText("v12")).toBeInTheDocument();
      await userEvent.keyboard("{Escape}");
    });
    await step("calibração por canal mostra as duas réguas", async () => {
      await userEvent.click(tela.getByText("Calibração por canal (IA × Humano)"));
      await expect(await tela.findByText("Faixas — Humano")).toBeInTheDocument();
      await expect(tela.getByRole("spinbutton", {
        name: "Pontos de Segunda voz na ligação no Humano"
      })).toBeInTheDocument();
    });
    await semRotaSemFixture();
  }
}`,...(Be=(Te=U.parameters)==null?void 0:Te.docs)==null?void 0:Be.source}}};var Re,xe,Ae;J.parameters={...J.parameters,docs:{...(Re=J.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  name: "Motor: carregando",
  args: {
    rotaInicial: ROTA_MOTOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      pendurar: [MOTOR]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByRole("status", {
      name: "Carregando as regras do motor de decisão"
    })).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: "Salvar regras"
    })).not.toBeInTheDocument();
  }
}`,...(Ae=(xe=J.parameters)==null?void 0:xe.docs)==null?void 0:Ae.source}}};var be,De,he;$.parameters={...$.parameters,docs:{...(be=$.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: "Motor: erro de rede",
  args: {
    rotaInicial: ROTA_MOTOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      semRede: [MOTOR]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/Não foi possível carregar as regras do motor/)).toBeInTheDocument();
    await expect(tela.getByRole("button", {
      name: "Tentar de novo"
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(he=(De=$.parameters)==null?void 0:De.docs)==null?void 0:he.source}}};var Oe,Se,fe;W.parameters={...W.parameters,docs:{...(Oe=W.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  name: "Motor: erro do servidor",
  args: {
    rotaInicial: ROTA_MOTOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      falhar: [MOTOR]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/O servidor teve um problema ao carregar as regras do motor/)).toBeInTheDocument();
    await expect(tela.queryByText(/api falsa/)).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(fe=(Se=W.parameters)==null?void 0:Se.docs)==null?void 0:fe.source}}};var Ie,Ce,Ne;X.parameters={...X.parameters,docs:{...(Ie=X.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  name: "Motor: sem permissão",
  args: {
    rotaInicial: ROTA_MOTOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [MOTOR]: {
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
    await expect(await tela.findByText(/não tem permissão para ver as regras do motor/)).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: "Tentar de novo"
    })).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(Ne=(Ce=X.parameters)==null?void 0:Ce.docs)==null?void 0:Ne.source}}};var _e,Me,Pe;Z.parameters={...Z.parameters,docs:{...(_e=Z.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  name: "Motor: nenhuma regra",
  args: {
    rotaInicial: ROTA_MOTOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [MOTOR]: {
          status: 200,
          corpo: MOTOR_CLASSICO_VAZIO
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Nenhuma regra cadastrada")).toBeInTheDocument();
    await userEvent.click(tela.getByRole("button", {
      name: "Restaurar padrão"
    }));
    await expect(await tela.findByDisplayValue("Lipsync reprovado → reprovar")).toBeInTheDocument();
    await expect(tela.getAllByRole("button", {
      name: "Subir (decide antes)"
    })).toHaveLength(2);
    await semRotaSemFixture();
  }
}`,...(Pe=(Me=Z.parameters)==null?void 0:Me.docs)==null?void 0:Pe.source}}};export{z as AvisoDeSaida,F as AvisoRegraOrfa,S as Carregando,D as DuasTagsNovas,_ as ErroAoSalvar,I as ErroDoServidor,G as ErroServidorSemEco,k as ExigeMotivoSemMotivo,x as GavetaTag,A as GavetaTagOrangeAzul,P as IdCurto,q as IdRepetido,O as LinhaCompacta375,L as MinMaiorQueMax,h as MotivoEmTagNova,J as MotorCarregando,W as MotorErroDoServidor,U as MotorPadrao,X as MotorSemPermissao,$ as MotorSemRede,Z as MotorVazio,b as NavegacaoEntreTags,R as Padrao,H as RemoverTagSemConfirmacao,V as RestaurarPadraoConfirma,j as SalvandoCliqueDuplo,C as SemPermissao,f as SemRede,M as SomenteLeitura,N as Vazio,Ot as __namedExportsOrder,ht as default};
