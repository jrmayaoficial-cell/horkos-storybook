import{W as J}from"./ShellJornada-D8UUS_AD.js";import{C as c,m as xe}from"./jornadaGestao-BpLF5V3O.js";import{t as i,s,d as u,i as Te}from"./jornadaOperar-DV4ZgHxp.js";import"./jsx-runtime-B7yl4BrL.js";import"./iframe-O6irGc0s.js";import"./preload-helper-D6kgxu3v.js";import"./dadosShell-D6XgCTfe.js";import"./index-CRcNFVq_.js";import"./index-aSoJ-SWA.js";import"./v2-DUy2kPFF.js";import"./index-C8tPWWbP.js";import"./api-CwvJBfED.js";import"./index-DymOWEBJ.js";import"./marca-kvVvCas0.js";import"./carregando-Qpee-vr7.js";import"./celulas-DM01SyBy.js";/* empty css              */import"./CartaoKpi-BEnLXpF6.js";import"./MiniBarras-BXS10ct1.js";import"./cores-D-iLqYVd.js";import"./Login-Dp1XH9tl.js";import"./etapas-CwWCDmfe.js";/* empty css                */import"./ShellGestao-CNRQmrbB.js";const ge={fuso:"America/Sao_Paulo",dias:{seg:[{inicio:"09:00",fim:"18:00"}],ter:[{inicio:"09:00",fim:"18:00"}],qua:[{inicio:"09:00",fim:"18:00"}],qui:[{inicio:"09:00",fim:"18:00"}],sex:[{inicio:"09:00",fim:"18:00"}]},mensagem_fora:null},Ee={exibir_posicao_fila:!0,fila_timeout_aceite_s:30,midias:[],formulario:[],questionario:[],departamentos_permitidos:null};function W(n,a,t,r){return{id:n,nome:a,ativo:t,atendentes:r,setor:"Consignado",slug:n.replace(/^dep-/,""),empresa_id:J.id,empresa_nome:J.nome,criado_em:"2026-01-10T12:00:00Z",horarios:ge,config:Ee}}const Re=[W("dep-inss","INSS · Consignado",!0,[{id:101,nome:"Rafael Souza"},{id:102,nome:"Camila Rocha"}]),W("dep-fgts","FGTS · Saque-aniversário",!1,[{id:103,nome:"Diego Alves"}])],De={erro:"config.fila_timeout_aceite_s deve ser um inteiro entre 5 e 600"},Ie={erro:"Informe o nome do departamento"},Se={erro:'já existe um departamento com o identificador "inss-df"'},fe={erro:"usuários não habilitáveis nesta empresa (inexistentes, desativados ou super): 1130, 314"};function be(){return new File([new Uint8Array(256)],"boas-vindas.mp4",{type:"video/mp4"})}const he={papel:"gerente",permissoes:{"departamentos.ver":!0,"operacao.ver":!0,"sessoes.ver":!0}},Ae="BRB Brasília",Oe="clt",Ce="601",Ne="cpf",{expect:e,userEvent:o,waitFor:d,within:p}=__STORYBOOK_MODULE_TEST__,_e=xe("/departamentos",'Jornada de departamentos dentro do shell: lista e editor em sete abas (Geral, Horários, Atendentes, Fila de espera, Plano de fundo, Questionário, Transferência). Com a carga do editor falhando o formulário não aparece (antes ele abria vazio e o Salvar criava um departamento novo); departamento que não existe mostra "não encontrado" com Voltar; erro ao salvar aparece no topo, com alerta. Sair do editor com alteração não salva (Voltar, Cancelar, menu) pergunta "Sair sem salvar?" citando o departamento; abrir e sair sem mexer, ou salvar e sair, não pergunta.'),w="GET /v1/departamentos",l="/departamentos/dep-inss",v="PUT /v1/departamentos/:id",Fe="PUT /v1/departamentos/:id/atendentes",ke="GET /v1/departamentos/atendentes-elegiveis",Pe="POST /v1/departamentos/:id/midias",z="Mais ações de INSS · Consignado",qe=640;async function V(n){const a=".departamento-erro-topo [role='alert']";return await d(()=>e(n.ownerDocument.querySelector(a)).not.toBeNull()),n.ownerDocument.querySelector(a)}async function U(n){return await e(await n.findByRole("heading",{name:"INSS · Consignado",level:1})).toBeInTheDocument(),n.getByRole("button",{name:"Salvar alterações"})}async function j(n,a,t){const[r]=await n.findAllByRole("button",{name:a});await o.click(r),await o.click(await n.findByRole("menuitem",{name:t}))}const ct={title:"Jornadas/Departamentos",..._e},y={name:"Padrão",play:async({canvasElement:n})=>{const a=i(n);await e(await a.findByRole("region",{name:"Departamentos"})).toBeInTheDocument(),await e((await a.findAllByText("INSS · Consignado")).length).toBeGreaterThan(0),await s()}},B={name:"Editor: sete abas",args:{rotaInicial:l},play:async({canvasElement:n,step:a})=>{const t=i(n);await e(await t.findByRole("heading",{name:"INSS · Consignado",level:1})).toBeInTheDocument();const r=p(t.getByRole("tablist",{name:"Seções do departamento"}));await e(r.getAllByRole("tab")).toHaveLength(7),await a("Horários: campos de hora com nome e remover intervalo",async()=>{await o.click(r.getByRole("tab",{name:"Horários"})),await e(t.getByLabelText("Início do intervalo 1, Sábado")).toBeInTheDocument(),await o.click(t.getByRole("button",{name:"Remover intervalo 1 de Sábado"})),await e(t.queryByLabelText("Início do intervalo 1, Sábado")).not.toBeInTheDocument(),await o.click(t.getByRole("button",{name:"Abrir o atendimento de Sábado"})),await e(t.getByLabelText("Fim do intervalo 1, Sábado")).toBeInTheDocument()}),await a("Atendentes: contagem na aba",async()=>{await o.click(r.getByRole("tab",{name:/^Atendentes \(3\)/})),await e(await t.findByRole("textbox",{name:"Buscar atendente por nome"})).toBeInTheDocument()});for(const m of[/^Fila de espera/,/^Plano de fundo/,/^Questionário/,/^Transferência/,/^Geral/])await o.click(r.getByRole("tab",{name:m})),await e(r.getByRole("tab",{name:m})).toHaveAttribute("aria-selected","true");await a("Salvar volta à lista",async()=>{await o.click(t.getByRole("button",{name:"Salvar alterações"})),await e(await t.findByRole("region",{name:"Departamentos"})).toBeInTheDocument()}),await s()}},x={name:"Editor: aviso de saída",args:{rotaInicial:l},play:async({canvasElement:n,step:a})=>{const t=i(n);await e(await t.findByRole("heading",{name:"INSS · Consignado",level:1})).toBeInTheDocument(),await a("Abrir e voltar sem mexer sai direto",async()=>{await o.click(t.getByRole("link",{name:"Voltar para Departamentos"})),await e(await t.findByRole("region",{name:"Departamentos"})).toBeInTheDocument(),await e(t.queryByText("Sair sem salvar?")).not.toBeInTheDocument()}),await a("Mudar o nome e Cancelar pergunta, citando o departamento",async()=>{await o.click((await t.findAllByRole("link",{name:/INSS · Consignado/}))[0]),await e(await t.findByRole("heading",{name:"INSS · Consignado",level:1})).toBeInTheDocument(),await u(t.getByRole("textbox",{name:/Nome/}),"INSS · Benefícios"),await o.click(t.getByRole("button",{name:"Cancelar"}));const r=p(await t.findByRole("dialog",{name:"Sair sem salvar?"}));await e(r.getByText(/alterações não salvas em Departamento “INSS · Consignado”/)).toBeInTheDocument(),await o.click(r.getByRole("button",{name:"Continuar editando"})),await d(()=>e(t.queryByRole("dialog",{name:"Sair sem salvar?"})).not.toBeInTheDocument()),await e(t.getByRole("textbox",{name:/Nome/})).toHaveValue("INSS · Benefícios")}),await a("Sair pelo menu (gaveta no celular) pergunta e o foco fica no aviso",async()=>{await Te(n,"Departamentos");const r=await t.findByRole("dialog",{name:"Sair sem salvar?"});await d(()=>e(t.queryByRole("dialog",{name:"Menu"})).not.toBeInTheDocument()),await d(()=>e(r).toContainElement(n.ownerDocument.activeElement)),await e(n.ownerDocument.activeElement).toHaveTextContent("Continuar editando"),await o.click(p(r).getByRole("button",{name:"Continuar editando"})),await d(()=>e(t.queryByRole("dialog",{name:"Sair sem salvar?"})).not.toBeInTheDocument()),await e(t.getByRole("textbox",{name:/Nome/})).toHaveValue("INSS · Benefícios")}),await a("Salvar e sair não pergunta",async()=>{await o.click(t.getByRole("button",{name:"Salvar alterações"})),await e(await t.findByRole("region",{name:"Departamentos"})).toBeInTheDocument(),await e(t.queryByText("Sair sem salvar?")).not.toBeInTheDocument()}),await s()}},T={name:"Editor: novo departamento",args:{rotaInicial:"/departamentos/novo"},play:async({canvasElement:n,step:a})=>{const t=i(n);await e(await t.findByRole("heading",{name:"Novo departamento",level:1})).toBeInTheDocument(),await u(t.getByRole("textbox",{name:/Nome/}),"BRB · Banco de Brasília"),await a("fundo obrigatório sem padrão marca a aba com erro",async()=>{await o.click(t.getByRole("tab",{name:"Plano de fundo"})),await o.click(t.getByRole("checkbox",{name:/Fundo obrigatório/})),await o.click(t.getByRole("button",{name:"Criar departamento"})),await e(await t.findByRole("alert")).toHaveTextContent(/Fundo obrigatório precisa de um padrão/),await e(t.getByRole("tab",{name:"Plano de fundo (com erro)"})).toHaveAttribute("aria-selected","true")}),await a("corrigido, cria e volta à lista",async()=>{await o.click(t.getByRole("checkbox",{name:/Fundo obrigatório/})),await o.click(t.getByRole("button",{name:"Criar departamento"})),await e((await t.findAllByText("BRB · Banco de Brasília")).length).toBeGreaterThan(0)}),await s()}},g={args:{rotaInicial:l},parameters:{jornada:{...c,pendurar:[w]}},play:async({canvasElement:n})=>{const a=i(n);await e(await a.findByText(/Carregando o departamento/)).toBeInTheDocument(),await e(a.queryByRole("button",{name:/Salvar|Criar departamento/})).not.toBeInTheDocument()}},E={name:"Erro de rede: sem formulário",args:{rotaInicial:l},parameters:{jornada:{...c,semRede:[w]}},play:async({canvasElement:n})=>{const a=i(n);await e(await a.findByText(/Não foi possível carregar o departamento/)).toBeInTheDocument(),await e(a.queryByRole("button",{name:/Salvar|Criar departamento/})).not.toBeInTheDocument(),await e(a.queryByRole("tablist")).not.toBeInTheDocument(),await o.click(a.getByRole("button",{name:"Tentar de novo"})),await e(await a.findByText(/Não foi possível carregar o departamento/)).toBeInTheDocument(),await s()}},R={name:"Erro do servidor",args:{rotaInicial:l},parameters:{jornada:{...c,falhar:[w]}},play:async({canvasElement:n})=>{const a=i(n);await e(await a.findByText(/O servidor teve um problema ao carregar o departamento/)).toBeInTheDocument(),await e(a.queryByText(/api falsa/)).not.toBeInTheDocument(),await e(a.getByRole("link",{name:"Voltar para Departamentos"})).toBeInTheDocument(),await s()}},D={name:"Erro: não encontrado",args:{rotaInicial:"/departamentos/dep-inexistente"},play:async({canvasElement:n})=>{const a=i(n);await e(await a.findByText("Departamento não encontrado.")).toBeInTheDocument(),await e(a.queryByRole("button",{name:"Tentar de novo"})).not.toBeInTheDocument(),await o.click(a.getByRole("button",{name:"Voltar à lista"})),await e(await a.findByRole("region",{name:"Departamentos"})).toBeInTheDocument(),await s()}},I={name:"Erro ao salvar: alerta no topo",args:{rotaInicial:l},parameters:{jornada:{...c,respostas:{[v]:{status:409,corpo:Se}}}},play:async({canvasElement:n})=>{const a=i(n),t=await a.findByRole("button",{name:"Salvar alterações"}),r=a.getByRole("textbox",{name:/Identificador/});await u(r,"inss-df"),await o.click(t);const m=await a.findByRole("alert");await e(m).toHaveTextContent("Já existe um departamento com o identificador “inss-df”. Preencha outro identificador."),await e(a.getByRole("tab",{name:/^Geral.*\(com erro\)/})).toHaveAttribute("aria-selected","true"),await d(()=>e(m.compareDocumentPosition(a.getByRole("tablist"))&Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()),await d(()=>e(m.ownerDocument.activeElement).toBe(m.closest("[tabindex='-1']"))),await s()}},S={name:"Vazio: nenhum departamento",parameters:{jornada:{...c,respostas:{[w]:{status:200,corpo:[]}}}},play:async({canvasElement:n})=>{const a=i(n);await e(await a.findByText("Nenhum departamento ainda")).toBeInTheDocument(),await s()}},f={name:"Lista: sem rede",parameters:{jornada:{...c,semRede:[w]}},play:async({canvasElement:n})=>{const a=i(n);await e(await a.findByText("Não foi possível carregar os departamentos. Verifique a conexão e tente de novo.")).toBeInTheDocument(),await o.click(a.getByRole("button",{name:"Tentar de novo"})),await e(await a.findByText(/Não foi possível carregar os departamentos/)).toBeInTheDocument(),await s()}},b={name:"Lista: erro do servidor",parameters:{jornada:{...c,falhar:[w]}},play:async({canvasElement:n})=>{const a=i(n);await e(await a.findByText("O servidor teve um problema ao carregar os departamentos. Tente de novo em instantes.")).toBeInTheDocument(),await e(a.getByRole("button",{name:"Tentar de novo"})).toBeInTheDocument(),await e(a.queryByText(/HTTP|500|api falsa/)).not.toBeInTheDocument(),await s()}},h={name:"Lista: sem permissão",parameters:{jornada:{...c,respostas:{[w]:{status:403,corpo:{erro:"perfil sem acesso"}}}}},play:async({canvasElement:n})=>{const a=i(n),t=p(await a.findByRole("region",{name:"Departamentos"}));await e(await t.findByText("Seu usuário não tem permissão para ver os departamentos.")).toBeInTheDocument(),await e(a.queryByRole("button",{name:"Tentar de novo"})).not.toBeInTheDocument(),await e(a.queryByRole("button",{name:"Novo departamento"})).not.toBeInTheDocument(),await e(a.queryByText(/Perfil analista/)).not.toBeInTheDocument(),await s()}},A={name:"Lista: carregando",parameters:{jornada:{...c,pendurar:[w]}},play:async({canvasElement:n})=>{const a=i(n);await e(await a.findByText("Carregando departamentos…")).toBeInTheDocument(),await e(a.getByText("Carregando…")).toBeInTheDocument(),await e(a.queryByRole("button",{name:"Tentar de novo"})).not.toBeInTheDocument()}},O={name:"Desativar: gaveta de confirmação",play:async({canvasElement:n,step:a})=>{const t=i(n);await a("Cancelar tem o foco e não desativa",async()=>{await j(t,z,"Desativar");const r=await t.findByRole("dialog",{name:"Desativar o departamento “INSS · Consignado”?"});await e(r).toHaveClass("op-gaveta"),n.ownerDocument.defaultView.innerWidth<=qe&&await e(r).toHaveClass("hk-modal--folha"),await e(p(r).getByText(/Os 3 atendentes vinculados deixam de receber sessões dele\./)).toBeInTheDocument(),await d(()=>e(n.ownerDocument.activeElement).toHaveTextContent("Cancelar")),await o.click(p(r).getByRole("button",{name:"Cancelar"})),await d(()=>e(t.queryByRole("dialog")).not.toBeInTheDocument())}),await a("Desativar fecha, recarrega e avisa",async()=>{await j(t,z,"Desativar");const r=await t.findByRole("dialog",{name:/Desativar o departamento/});await o.click(p(r).getByRole("button",{name:"Desativar"})),await e(await t.findByText("Departamento desativado.")).toBeInTheDocument(),await d(()=>e(t.queryByRole("dialog")).not.toBeInTheDocument()),await e((await t.findAllByText("Desativado")).length).toBeGreaterThan(0)}),await s()}},C={name:"Desativar: erro do servidor na gaveta",parameters:{jornada:{...c,respostas:{[v]:{status:500,corpo:{erro:"falhou ao gravar"}}}}},play:async({canvasElement:n})=>{const a=i(n);await j(a,z,"Desativar");const t=p(await a.findByRole("dialog",{name:/Desativar o departamento/}));await o.click(t.getByRole("button",{name:"Desativar"})),await e(await t.findByText("O servidor teve um problema ao desativar o departamento. Tente de novo em instantes.")).toBeInTheDocument(),await e(t.queryByText(/falhou ao gravar/)).not.toBeInTheDocument(),await e(a.getByRole("dialog")).toBeInTheDocument(),await s()}},N={name:"Reativar: erro acima do cartão",parameters:{jornada:{...c,respostas:{[w]:{status:200,corpo:Re},[v]:{status:500,corpo:{erro:"falhou ao gravar"}}}}},play:async({canvasElement:n})=>{const a=i(n);await j(a,"Mais ações de FGTS · Saque-aniversário","Reativar");const t=await a.findByRole("alert");await e(t).toHaveTextContent("O servidor teve um problema ao reativar o departamento. Tente de novo em instantes."),await e(t.compareDocumentPosition(a.getByRole("region",{name:"Departamentos"}))&Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy(),await e(a.queryByRole("dialog")).not.toBeInTheDocument(),await s()}},_={name:"Erro da API traduzido: aba marcada",args:{rotaInicial:l},parameters:{jornada:{...c,respostas:{[v]:{status:422,corpo:De}}}},play:async({canvasElement:n})=>{const a=i(n);await o.click(await a.findByRole("button",{name:"Salvar alterações"}));const t=await a.findByRole("alert");await e(t).toHaveTextContent("O prazo de aceite vai de 5 a 600 segundos."),await e(t.textContent).not.toMatch(/config\.|fila_timeout/),await e(a.getByRole("tab",{name:/^Fila de espera.*\(com erro\)/})).toHaveAttribute("aria-selected","true"),await d(()=>e(t.ownerDocument.activeElement).toBe(t.closest("[tabindex='-1']"))),await s()}},F={name:"Erro do servidor ao salvar: sem eco",args:{rotaInicial:l},parameters:{jornada:{...c,respostas:{[v]:{status:500,corpo:Ie}}}},play:async({canvasElement:n})=>{const a=i(n);await o.click(await a.findByRole("button",{name:"Salvar alterações"}));const t=await a.findByRole("alert");await e(t).toHaveTextContent("O servidor não salvou o departamento. Tente de novo em instantes."),await e(t.textContent).not.toMatch(/Informe o nome/),await e(a.queryByRole("tab",{name:/\(com erro\)/})).not.toBeInTheDocument(),await s()}},k={name:"Atendentes não carregados: salvar sem mexer no vínculo",args:{rotaInicial:l},parameters:{jornada:{...c,semRede:[ke],respostas:{[Fe]:{status:400,corpo:fe}}}},play:async({canvasElement:n,step:a})=>{const t=i(n);await e(await t.findByRole("heading",{name:"INSS · Consignado",level:1})).toBeInTheDocument(),await a("aba Atendentes avisa e trava Limpar seleção",async()=>{await o.click(t.getByRole("tab",{name:/^Atendentes/}));const r=await t.findByRole("alert");await e(r).toHaveTextContent("Não foi possível carregar os atendentes desta empresa."),await e(t.getByRole("button",{name:"Limpar seleção"})).toBeDisabled(),await e(t.getByText("3 selecionados")).toBeInTheDocument(),await o.click(p(r).getByRole("button",{name:"Tentar de novo"})),await e(await t.findByText("Não foi possível carregar os atendentes desta empresa.")).toBeInTheDocument()}),await a("Salvar não envia o vínculo e volta à lista",async()=>{await o.click(t.getByRole("button",{name:"Salvar alterações"})),await e(await t.findByRole("region",{name:"Departamentos"})).toBeInTheDocument(),await e(t.queryByText(/Departamento salvo, mas/)).not.toBeInTheDocument()}),await s()}},P={name:"Upload de mídia sem rede",args:{rotaInicial:l},parameters:{jornada:{...c,semRede:[Pe]}},play:async({canvasElement:n})=>{const a=i(n);await e(await a.findByRole("heading",{name:"INSS · Consignado",level:1})).toBeInTheDocument(),await o.click(a.getByRole("tab",{name:/^Fila de espera/}));const t=n.ownerDocument.querySelector('input[type="file"]');if(!t)throw new Error("campo de arquivo da mídia não está na tela");await o.upload(t,be()),await e(await a.findByText("Sem conexão. O arquivo não foi enviado; confira a internet e tente de novo.")).toBeInTheDocument(),await e(a.queryByText(/arquivo enviado ·/)).not.toBeInTheDocument(),await s()}},q={name:"Editor sem permissão de gerir",args:{rotaInicial:l},parameters:{jornada:{...c,sessao:he}},play:async({canvasElement:n})=>{const a=i(n);await e(await a.findByText("Seu usuário não tem permissão para alterar departamentos.")).toBeInTheDocument(),await e(a.queryByRole("tablist")).not.toBeInTheDocument(),await e(a.queryByRole("button",{name:"Salvar alterações"})).not.toBeInTheDocument(),await o.click(a.getByRole("button",{name:"Voltar à lista"})),await e(await a.findByRole("region",{name:"Departamentos"})).toBeInTheDocument(),await s()}},H={name:"Identificador ajustado e repetido",args:{rotaInicial:l},play:async({canvasElement:n,step:a})=>{const t=i(n),r=await U(t),m=t.getByRole("textbox",{name:/Identificador/});await a("ao sair do campo, o identificador é ajustado",async()=>{await u(m,Ae),await o.tab(),await e(m).toHaveValue("brb-brasilia")}),await a("identificador de outro departamento bloqueia sob o campo",async()=>{await u(m,Oe),await o.click(r),await e(await V(n)).toHaveTextContent("Revise a aba Geral. Corrija os campos marcados antes de salvar."),await e(t.getByText("Já existe um departamento com o identificador “clt”.")).toBeInTheDocument(),await e(t.getByRole("tab",{name:/^Geral.*\(com erro\)/})).toHaveAttribute("aria-selected","true")}),await s()}},L={name:"Prazo de aceite fora da faixa",args:{rotaInicial:l},play:async({canvasElement:n})=>{const a=i(n),t=await U(a);await o.click(a.getByRole("tab",{name:/^Fila de espera/})),await u(a.getByRole("textbox",{name:/Prazo de aceite/}),Ce),await o.click(a.getByRole("tab",{name:/^Geral/})),await o.click(t),await e(await V(n)).toHaveTextContent("Revise a aba Fila de espera. Corrija os campos marcados antes de salvar."),await e(a.getByRole("tab",{name:/^Fila de espera.*\(com erro\)/})).toHaveAttribute("aria-selected","true"),await e(a.getByText("O prazo de aceite vai de 5 a 600 segundos.")).toBeInTheDocument(),await s()}},M={name:"Horário invertido",args:{rotaInicial:l},play:async({canvasElement:n})=>{const a=i(n),t=await U(a);await o.click(a.getByRole("tab",{name:/^Horários/})),await u(a.getByLabelText("Início do intervalo 1, Segunda"),"18:00"),await u(a.getByLabelText("Fim do intervalo 1, Segunda"),"09:00"),await o.click(a.getByRole("tab",{name:/^Geral/})),await o.click(t),await e(await V(n)).toHaveTextContent("Revise a aba Horários. Corrija os campos marcados antes de salvar."),await e(a.getByRole("tab",{name:/^Horários.*\(com erro\)/})).toHaveAttribute("aria-selected","true"),await e(a.getByText("O fim precisa ser depois do início. Para passar da meia-noite, use dois dias.")).toBeInTheDocument(),await s()}},G={name:"Campo do formulário meio preenchido",args:{rotaInicial:l},play:async({canvasElement:n})=>{const a=i(n),t=await U(a);await o.click(a.getByRole("tab",{name:/^Fila de espera/})),await o.click(a.getByRole("button",{name:"+ Adicionar campo"}));const r=a.getAllByRole("textbox",{name:/^id \(a-z, 0-9, _\)/});await u(r[r.length-1],Ne),await o.click(t),await e(await V(n)).toHaveTextContent("Revise a aba Fila de espera. Corrija os campos marcados antes de salvar."),await e(a.getByText("Informe a pergunta ou remova o campo.")).toBeInTheDocument(),await s()}},lt=["Padrao","Editor","AvisoDeSaida","Novo","Carregando","SemRede","ErroDoServidor","NaoEncontrado","ErroAoSalvar","Vazio","ListaSemRede","ListaErroServidor","ListaSemPermissao","ListaCarregando","Desativar","DesativarErro","ReativarErro","ErroDaApiTraduzido","ErroServidorSemEco","AtendentesNaoCarregados","UploadSemRede","SemPermissaoEditor","IdentificadorInvalido","PrazoForaDaFaixa","HorarioInvertido","CampoMeioPreenchido"];var Z,Q,K;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: "Padrão",
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByRole("region", {
      name: "Departamentos"
    })).toBeInTheDocument();
    await expect((await tela.findAllByText("INSS · Consignado")).length).toBeGreaterThan(0);
    await semRotaSemFixture();
  }
}`,...(K=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:K.source}}};var Y,X,$;B.parameters={...B.parameters,docs:{...(Y=B.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "Editor: sete abas",
  args: {
    rotaInicial: EDITOR
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByRole("heading", {
      name: "INSS · Consignado",
      level: 1
    })).toBeInTheDocument();
    const abas = within(tela.getByRole("tablist", {
      name: "Seções do departamento"
    }));
    await expect(abas.getAllByRole("tab")).toHaveLength(7);
    await step("Horários: campos de hora com nome e remover intervalo", async () => {
      await userEvent.click(abas.getByRole("tab", {
        name: "Horários"
      }));
      await expect(tela.getByLabelText("Início do intervalo 1, Sábado")).toBeInTheDocument();
      await userEvent.click(tela.getByRole("button", {
        name: "Remover intervalo 1 de Sábado"
      }));
      await expect(tela.queryByLabelText("Início do intervalo 1, Sábado")).not.toBeInTheDocument();
      await userEvent.click(tela.getByRole("button", {
        name: "Abrir o atendimento de Sábado"
      }));
      await expect(tela.getByLabelText("Fim do intervalo 1, Sábado")).toBeInTheDocument();
    });
    await step("Atendentes: contagem na aba", async () => {
      await userEvent.click(abas.getByRole("tab", {
        name: /^Atendentes \\(3\\)/
      }));
      await expect(await tela.findByRole("textbox", {
        name: "Buscar atendente por nome"
      })).toBeInTheDocument();
    });
    for (const nome of [/^Fila de espera/, /^Plano de fundo/, /^Questionário/, /^Transferência/, /^Geral/]) {
      await userEvent.click(abas.getByRole("tab", {
        name: nome
      }));
      await expect(abas.getByRole("tab", {
        name: nome
      })).toHaveAttribute("aria-selected", "true");
    }
    await step("Salvar volta à lista", async () => {
      await userEvent.click(tela.getByRole("button", {
        name: "Salvar alterações"
      }));
      await expect(await tela.findByRole("region", {
        name: "Departamentos"
      })).toBeInTheDocument();
    });
    await semRotaSemFixture();
  }
}`,...($=(X=B.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var aa,ea,ta;x.parameters={...x.parameters,docs:{...(aa=x.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  name: "Editor: aviso de saída",
  args: {
    rotaInicial: EDITOR
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByRole("heading", {
      name: "INSS · Consignado",
      level: 1
    })).toBeInTheDocument();
    await step("Abrir e voltar sem mexer sai direto", async () => {
      await userEvent.click(tela.getByRole("link", {
        name: "Voltar para Departamentos"
      }));
      await expect(await tela.findByRole("region", {
        name: "Departamentos"
      })).toBeInTheDocument();
      await expect(tela.queryByText("Sair sem salvar?")).not.toBeInTheDocument();
    });
    await step("Mudar o nome e Cancelar pergunta, citando o departamento", async () => {
      await userEvent.click((await tela.findAllByRole("link", {
        name: /INSS · Consignado/
      }))[0]);
      await expect(await tela.findByRole("heading", {
        name: "INSS · Consignado",
        level: 1
      })).toBeInTheDocument();
      await digitar(tela.getByRole("textbox", {
        name: /Nome/
      }), "INSS · Benefícios");
      await userEvent.click(tela.getByRole("button", {
        name: "Cancelar"
      }));
      const modal = within(await tela.findByRole("dialog", {
        name: "Sair sem salvar?"
      }));
      await expect(modal.getByText(/alterações não salvas em Departamento “INSS · Consignado”/)).toBeInTheDocument();
      await userEvent.click(modal.getByRole("button", {
        name: "Continuar editando"
      }));
      await waitFor(() => expect(tela.queryByRole("dialog", {
        name: "Sair sem salvar?"
      })).not.toBeInTheDocument());
      await expect(tela.getByRole("textbox", {
        name: /Nome/
      })).toHaveValue("INSS · Benefícios");
    });
    await step("Sair pelo menu (gaveta no celular) pergunta e o foco fica no aviso", async () => {
      await irPeloMenu(canvasElement, "Departamentos");
      const aviso = await tela.findByRole("dialog", {
        name: "Sair sem salvar?"
      });
      await waitFor(() => expect(tela.queryByRole("dialog", {
        name: "Menu"
      })).not.toBeInTheDocument());
      await waitFor(() => expect(aviso).toContainElement(canvasElement.ownerDocument.activeElement as HTMLElement));
      await expect(canvasElement.ownerDocument.activeElement).toHaveTextContent("Continuar editando");
      await userEvent.click(within(aviso).getByRole("button", {
        name: "Continuar editando"
      }));
      await waitFor(() => expect(tela.queryByRole("dialog", {
        name: "Sair sem salvar?"
      })).not.toBeInTheDocument());
      await expect(tela.getByRole("textbox", {
        name: /Nome/
      })).toHaveValue("INSS · Benefícios");
    });
    await step("Salvar e sair não pergunta", async () => {
      await userEvent.click(tela.getByRole("button", {
        name: "Salvar alterações"
      }));
      await expect(await tela.findByRole("region", {
        name: "Departamentos"
      })).toBeInTheDocument();
      await expect(tela.queryByText("Sair sem salvar?")).not.toBeInTheDocument();
    });
    await semRotaSemFixture();
  }
}`,...(ta=(ea=x.parameters)==null?void 0:ea.docs)==null?void 0:ta.source}}};var na,oa,ra;T.parameters={...T.parameters,docs:{...(na=T.parameters)==null?void 0:na.docs,source:{originalSource:`{
  name: "Editor: novo departamento",
  args: {
    rotaInicial: "/departamentos/novo"
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByRole("heading", {
      name: "Novo departamento",
      level: 1
    })).toBeInTheDocument();
    await digitar(tela.getByRole("textbox", {
      name: /Nome/
    }), "BRB · Banco de Brasília");
    await step("fundo obrigatório sem padrão marca a aba com erro", async () => {
      await userEvent.click(tela.getByRole("tab", {
        name: "Plano de fundo"
      }));
      await userEvent.click(tela.getByRole("checkbox", {
        name: /Fundo obrigatório/
      }));
      await userEvent.click(tela.getByRole("button", {
        name: "Criar departamento"
      }));
      await expect(await tela.findByRole("alert")).toHaveTextContent(/Fundo obrigatório precisa de um padrão/);
      await expect(tela.getByRole("tab", {
        name: "Plano de fundo (com erro)"
      })).toHaveAttribute("aria-selected", "true");
    });
    await step("corrigido, cria e volta à lista", async () => {
      await userEvent.click(tela.getByRole("checkbox", {
        name: /Fundo obrigatório/
      }));
      await userEvent.click(tela.getByRole("button", {
        name: "Criar departamento"
      }));
      await expect((await tela.findAllByText("BRB · Banco de Brasília")).length).toBeGreaterThan(0);
    });
    await semRotaSemFixture();
  }
}`,...(ra=(oa=T.parameters)==null?void 0:oa.docs)==null?void 0:ra.source}}};var ia,sa,ca;g.parameters={...g.parameters,docs:{...(ia=g.parameters)==null?void 0:ia.docs,source:{originalSource:`{
  args: {
    rotaInicial: EDITOR
  },
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
    await expect(await tela.findByText(/Carregando o departamento/)).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: /Salvar|Criar departamento/
    })).not.toBeInTheDocument();
  }
}`,...(ca=(sa=g.parameters)==null?void 0:sa.docs)==null?void 0:ca.source}}};var la,ma,da;E.parameters={...E.parameters,docs:{...(la=E.parameters)==null?void 0:la.docs,source:{originalSource:`{
  name: "Erro de rede: sem formulário",
  args: {
    rotaInicial: EDITOR
  },
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
    await expect(await tela.findByText(/Não foi possível carregar o departamento/)).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: /Salvar|Criar departamento/
    })).not.toBeInTheDocument();
    await expect(tela.queryByRole("tablist")).not.toBeInTheDocument();
    await userEvent.click(tela.getByRole("button", {
      name: "Tentar de novo"
    }));
    await expect(await tela.findByText(/Não foi possível carregar o departamento/)).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(da=(ma=E.parameters)==null?void 0:ma.docs)==null?void 0:da.source}}};var pa,ua,wa;R.parameters={...R.parameters,docs:{...(pa=R.parameters)==null?void 0:pa.docs,source:{originalSource:`{
  name: "Erro do servidor",
  args: {
    rotaInicial: EDITOR
  },
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
    await expect(await tela.findByText(/O servidor teve um problema ao carregar o departamento/)).toBeInTheDocument();
    await expect(tela.queryByText(/api falsa/)).not.toBeInTheDocument();
    await expect(tela.getByRole("link", {
      name: "Voltar para Departamentos"
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(wa=(ua=R.parameters)==null?void 0:ua.docs)==null?void 0:wa.source}}};var va,ya,Ba;D.parameters={...D.parameters,docs:{...(va=D.parameters)==null?void 0:va.docs,source:{originalSource:`{
  name: "Erro: não encontrado",
  args: {
    rotaInicial: "/departamentos/dep-inexistente"
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Departamento não encontrado.")).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: "Tentar de novo"
    })).not.toBeInTheDocument();
    await userEvent.click(tela.getByRole("button", {
      name: "Voltar à lista"
    }));
    await expect(await tela.findByRole("region", {
      name: "Departamentos"
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(Ba=(ya=D.parameters)==null?void 0:ya.docs)==null?void 0:Ba.source}}};var xa,Ta,ga;I.parameters={...I.parameters,docs:{...(xa=I.parameters)==null?void 0:xa.docs,source:{originalSource:`{
  name: "Erro ao salvar: alerta no topo",
  args: {
    rotaInicial: EDITOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [PUT_DEPARTAMENTO]: {
          status: 409,
          corpo: ERRO_API_IDENTIFICADOR_REPETIDO
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    const salvar = await tela.findByRole("button", {
      name: "Salvar alterações"
    });
    const identificador = tela.getByRole("textbox", {
      name: /Identificador/
    });
    await digitar(identificador, "inss-df");
    await userEvent.click(salvar);
    const alerta = await tela.findByRole("alert");
    await expect(alerta).toHaveTextContent("Já existe um departamento com o identificador “inss-df”. Preencha outro identificador.");
    await expect(tela.getByRole("tab", {
      name: /^Geral.*\\(com erro\\)/
    })).toHaveAttribute("aria-selected", "true");
    await waitFor(() => expect(alerta.compareDocumentPosition(tela.getByRole("tablist")) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy());
    await waitFor(() => expect(alerta.ownerDocument.activeElement).toBe(alerta.closest("[tabindex='-1']")));
    await semRotaSemFixture();
  }
}`,...(ga=(Ta=I.parameters)==null?void 0:Ta.docs)==null?void 0:ga.source}}};var Ea,Ra,Da;S.parameters={...S.parameters,docs:{...(Ea=S.parameters)==null?void 0:Ea.docs,source:{originalSource:`{
  name: "Vazio: nenhum departamento",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [LISTA]: {
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
    await expect(await tela.findByText("Nenhum departamento ainda")).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(Da=(Ra=S.parameters)==null?void 0:Ra.docs)==null?void 0:Da.source}}};var Ia,Sa,fa;f.parameters={...f.parameters,docs:{...(Ia=f.parameters)==null?void 0:Ia.docs,source:{originalSource:`{
  name: "Lista: sem rede",
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
    await expect(await tela.findByText("Não foi possível carregar os departamentos. Verifique a conexão e tente de novo.")).toBeInTheDocument();
    await userEvent.click(tela.getByRole("button", {
      name: "Tentar de novo"
    }));
    await expect(await tela.findByText(/Não foi possível carregar os departamentos/)).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(fa=(Sa=f.parameters)==null?void 0:Sa.docs)==null?void 0:fa.source}}};var ba,ha,Aa;b.parameters={...b.parameters,docs:{...(ba=b.parameters)==null?void 0:ba.docs,source:{originalSource:`{
  name: "Lista: erro do servidor",
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
    await expect(await tela.findByText("O servidor teve um problema ao carregar os departamentos. Tente de novo em instantes.")).toBeInTheDocument();
    await expect(tela.getByRole("button", {
      name: "Tentar de novo"
    })).toBeInTheDocument();
    await expect(tela.queryByText(/HTTP|500|api falsa/)).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(Aa=(ha=b.parameters)==null?void 0:ha.docs)==null?void 0:Aa.source}}};var Oa,Ca,Na;h.parameters={...h.parameters,docs:{...(Oa=h.parameters)==null?void 0:Oa.docs,source:{originalSource:`{
  name: "Lista: sem permissão",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [LISTA]: {
          status: 403,
          corpo: {
            erro: "perfil sem acesso"
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    const cartao = within(await tela.findByRole("region", {
      name: "Departamentos"
    }));
    await expect(await cartao.findByText("Seu usuário não tem permissão para ver os departamentos.")).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: "Tentar de novo"
    })).not.toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: "Novo departamento"
    })).not.toBeInTheDocument();
    await expect(tela.queryByText(/Perfil analista/)).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(Na=(Ca=h.parameters)==null?void 0:Ca.docs)==null?void 0:Na.source}}};var _a,Fa,ka;A.parameters={...A.parameters,docs:{...(_a=A.parameters)==null?void 0:_a.docs,source:{originalSource:`{
  name: "Lista: carregando",
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
    await expect(await tela.findByText("Carregando departamentos…")).toBeInTheDocument();
    await expect(tela.getByText("Carregando…")).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: "Tentar de novo"
    })).not.toBeInTheDocument();
  }
}`,...(ka=(Fa=A.parameters)==null?void 0:Fa.docs)==null?void 0:ka.source}}};var Pa,qa,Ha;O.parameters={...O.parameters,docs:{...(Pa=O.parameters)==null?void 0:Pa.docs,source:{originalSource:`{
  name: "Desativar: gaveta de confirmação",
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await step("Cancelar tem o foco e não desativa", async () => {
      await abrirAcaoDaLinha(tela, MENU_INSS, "Desativar");
      const gaveta = await tela.findByRole("dialog", {
        name: "Desativar o departamento “INSS · Consignado”?"
      });
      await expect(gaveta).toHaveClass("op-gaveta");
      const janela = canvasElement.ownerDocument.defaultView as Window;
      if (janela.innerWidth <= LARGURA_FOLHA) await expect(gaveta).toHaveClass("hk-modal--folha");
      await expect(within(gaveta).getByText(/Os 3 atendentes vinculados deixam de receber sessões dele\\./)).toBeInTheDocument();
      await waitFor(() => expect(canvasElement.ownerDocument.activeElement).toHaveTextContent("Cancelar"));
      await userEvent.click(within(gaveta).getByRole("button", {
        name: "Cancelar"
      }));
      await waitFor(() => expect(tela.queryByRole("dialog")).not.toBeInTheDocument());
    });
    await step("Desativar fecha, recarrega e avisa", async () => {
      await abrirAcaoDaLinha(tela, MENU_INSS, "Desativar");
      const gaveta = await tela.findByRole("dialog", {
        name: /Desativar o departamento/
      });
      await userEvent.click(within(gaveta).getByRole("button", {
        name: "Desativar"
      }));
      await expect(await tela.findByText("Departamento desativado.")).toBeInTheDocument();
      await waitFor(() => expect(tela.queryByRole("dialog")).not.toBeInTheDocument());
      await expect((await tela.findAllByText("Desativado")).length).toBeGreaterThan(0);
    });
    await semRotaSemFixture();
  }
}`,...(Ha=(qa=O.parameters)==null?void 0:qa.docs)==null?void 0:Ha.source}}};var La,Ma,Ga;C.parameters={...C.parameters,docs:{...(La=C.parameters)==null?void 0:La.docs,source:{originalSource:`{
  name: "Desativar: erro do servidor na gaveta",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [PUT_DEPARTAMENTO]: {
          status: 500,
          corpo: {
            erro: "falhou ao gravar"
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await abrirAcaoDaLinha(tela, MENU_INSS, "Desativar");
    const gaveta = within(await tela.findByRole("dialog", {
      name: /Desativar o departamento/
    }));
    await userEvent.click(gaveta.getByRole("button", {
      name: "Desativar"
    }));
    await expect(await gaveta.findByText("O servidor teve um problema ao desativar o departamento. Tente de novo em instantes.")).toBeInTheDocument();
    await expect(gaveta.queryByText(/falhou ao gravar/)).not.toBeInTheDocument();
    await expect(tela.getByRole("dialog")).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(Ga=(Ma=C.parameters)==null?void 0:Ma.docs)==null?void 0:Ga.source}}};var ja,Va,Ua;N.parameters={...N.parameters,docs:{...(ja=N.parameters)==null?void 0:ja.docs,source:{originalSource:`{
  name: "Reativar: erro acima do cartão",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [LISTA]: {
          status: 200,
          corpo: DEPARTAMENTOS_COM_DESATIVADO
        },
        [PUT_DEPARTAMENTO]: {
          status: 500,
          corpo: {
            erro: "falhou ao gravar"
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await abrirAcaoDaLinha(tela, "Mais ações de FGTS · Saque-aniversário", "Reativar");
    const alerta = await tela.findByRole("alert");
    await expect(alerta).toHaveTextContent("O servidor teve um problema ao reativar o departamento. Tente de novo em instantes.");
    await expect(alerta.compareDocumentPosition(tela.getByRole("region", {
      name: "Departamentos"
    })) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    await expect(tela.queryByRole("dialog")).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(Ua=(Va=N.parameters)==null?void 0:Va.docs)==null?void 0:Ua.source}}};var za,Ja,Wa;_.parameters={..._.parameters,docs:{...(za=_.parameters)==null?void 0:za.docs,source:{originalSource:`{
  name: "Erro da API traduzido: aba marcada",
  args: {
    rotaInicial: EDITOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [PUT_DEPARTAMENTO]: {
          status: 422,
          corpo: ERRO_API_PRAZO_DE_ACEITE
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await userEvent.click(await tela.findByRole("button", {
      name: "Salvar alterações"
    }));
    const alerta = await tela.findByRole("alert");
    await expect(alerta).toHaveTextContent("O prazo de aceite vai de 5 a 600 segundos.");
    await expect(alerta.textContent).not.toMatch(/config\\.|fila_timeout/);
    await expect(tela.getByRole("tab", {
      name: /^Fila de espera.*\\(com erro\\)/
    })).toHaveAttribute("aria-selected", "true");
    await waitFor(() => expect(alerta.ownerDocument.activeElement).toBe(alerta.closest("[tabindex='-1']")));
    await semRotaSemFixture();
  }
}`,...(Wa=(Ja=_.parameters)==null?void 0:Ja.docs)==null?void 0:Wa.source}}};var Za,Qa,Ka;F.parameters={...F.parameters,docs:{...(Za=F.parameters)==null?void 0:Za.docs,source:{originalSource:`{
  name: "Erro do servidor ao salvar: sem eco",
  args: {
    rotaInicial: EDITOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [PUT_DEPARTAMENTO]: {
          status: 500,
          corpo: ERRO_API_SERVIDOR_COM_FRASE
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await userEvent.click(await tela.findByRole("button", {
      name: "Salvar alterações"
    }));
    const alerta = await tela.findByRole("alert");
    await expect(alerta).toHaveTextContent("O servidor não salvou o departamento. Tente de novo em instantes.");
    await expect(alerta.textContent).not.toMatch(/Informe o nome/);
    await expect(tela.queryByRole("tab", {
      name: /\\(com erro\\)/
    })).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(Ka=(Qa=F.parameters)==null?void 0:Qa.docs)==null?void 0:Ka.source}}};var Ya,Xa,$a;k.parameters={...k.parameters,docs:{...(Ya=k.parameters)==null?void 0:Ya.docs,source:{originalSource:`{
  name: "Atendentes não carregados: salvar sem mexer no vínculo",
  args: {
    rotaInicial: EDITOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      semRede: [ELEGIVEIS],
      respostas: {
        [PUT_ATENDENTES]: {
          status: 400,
          corpo: ERRO_API_VINCULO
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByRole("heading", {
      name: "INSS · Consignado",
      level: 1
    })).toBeInTheDocument();
    await step("aba Atendentes avisa e trava Limpar seleção", async () => {
      await userEvent.click(tela.getByRole("tab", {
        name: /^Atendentes/
      }));
      const aviso = await tela.findByRole("alert");
      await expect(aviso).toHaveTextContent("Não foi possível carregar os atendentes desta empresa.");
      await expect(tela.getByRole("button", {
        name: "Limpar seleção"
      })).toBeDisabled();
      await expect(tela.getByText("3 selecionados")).toBeInTheDocument();
      await userEvent.click(within(aviso).getByRole("button", {
        name: "Tentar de novo"
      }));
      await expect(await tela.findByText("Não foi possível carregar os atendentes desta empresa.")).toBeInTheDocument();
    });
    await step("Salvar não envia o vínculo e volta à lista", async () => {
      await userEvent.click(tela.getByRole("button", {
        name: "Salvar alterações"
      }));
      await expect(await tela.findByRole("region", {
        name: "Departamentos"
      })).toBeInTheDocument();
      await expect(tela.queryByText(/Departamento salvo, mas/)).not.toBeInTheDocument();
    });
    await semRotaSemFixture();
  }
}`,...($a=(Xa=k.parameters)==null?void 0:Xa.docs)==null?void 0:$a.source}}};var ae,ee,te;P.parameters={...P.parameters,docs:{...(ae=P.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: "Upload de mídia sem rede",
  args: {
    rotaInicial: EDITOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      semRede: [UPLOAD_MIDIA]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByRole("heading", {
      name: "INSS · Consignado",
      level: 1
    })).toBeInTheDocument();
    await userEvent.click(tela.getByRole("tab", {
      name: /^Fila de espera/
    }));
    const entrada = canvasElement.ownerDocument.querySelector<HTMLInputElement>('input[type="file"]');
    if (!entrada) throw new Error("campo de arquivo da mídia não está na tela");
    await userEvent.upload(entrada, arquivoDeVideo());
    await expect(await tela.findByText("Sem conexão. O arquivo não foi enviado; confira a internet e tente de novo.")).toBeInTheDocument();
    await expect(tela.queryByText(/arquivo enviado ·/)).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(te=(ee=P.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,oe,re;q.parameters={...q.parameters,docs:{...(ne=q.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: "Editor sem permissão de gerir",
  args: {
    rotaInicial: EDITOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      sessao: SESSAO_SO_VER_DEPARTAMENTOS
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Seu usuário não tem permissão para alterar departamentos.")).toBeInTheDocument();
    await expect(tela.queryByRole("tablist")).not.toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: "Salvar alterações"
    })).not.toBeInTheDocument();
    await userEvent.click(tela.getByRole("button", {
      name: "Voltar à lista"
    }));
    await expect(await tela.findByRole("region", {
      name: "Departamentos"
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(re=(oe=q.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var ie,se,ce;H.parameters={...H.parameters,docs:{...(ie=H.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: "Identificador ajustado e repetido",
  args: {
    rotaInicial: EDITOR
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    const salvar = await editorAberto(tela);
    const campo = tela.getByRole("textbox", {
      name: /Identificador/
    });
    await step("ao sair do campo, o identificador é ajustado", async () => {
      await digitar(campo, IDENTIFICADOR_COM_ACENTO);
      await userEvent.tab();
      await expect(campo).toHaveValue("brb-brasilia");
    });
    await step("identificador de outro departamento bloqueia sob o campo", async () => {
      await digitar(campo, IDENTIFICADOR_DE_OUTRO_DEPARTAMENTO);
      await userEvent.click(salvar);
      await expect(await alertaDoTopo(canvasElement)).toHaveTextContent("Revise a aba Geral. Corrija os campos marcados antes de salvar.");
      await expect(tela.getByText("Já existe um departamento com o identificador “clt”.")).toBeInTheDocument();
      await expect(tela.getByRole("tab", {
        name: /^Geral.*\\(com erro\\)/
      })).toHaveAttribute("aria-selected", "true");
    });
    await semRotaSemFixture();
  }
}`,...(ce=(se=H.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var le,me,de;L.parameters={...L.parameters,docs:{...(le=L.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: "Prazo de aceite fora da faixa",
  args: {
    rotaInicial: EDITOR
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    const salvar = await editorAberto(tela);
    await userEvent.click(tela.getByRole("tab", {
      name: /^Fila de espera/
    }));
    await digitar(tela.getByRole("textbox", {
      name: /Prazo de aceite/
    }), PRAZO_ACIMA_DO_TETO);
    await userEvent.click(tela.getByRole("tab", {
      name: /^Geral/
    }));
    await userEvent.click(salvar);
    await expect(await alertaDoTopo(canvasElement)).toHaveTextContent("Revise a aba Fila de espera. Corrija os campos marcados antes de salvar.");
    await expect(tela.getByRole("tab", {
      name: /^Fila de espera.*\\(com erro\\)/
    })).toHaveAttribute("aria-selected", "true");
    await expect(tela.getByText("O prazo de aceite vai de 5 a 600 segundos.")).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(de=(me=L.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var pe,ue,we;M.parameters={...M.parameters,docs:{...(pe=M.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: "Horário invertido",
  args: {
    rotaInicial: EDITOR
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    const salvar = await editorAberto(tela);
    await userEvent.click(tela.getByRole("tab", {
      name: /^Horários/
    }));
    await digitar(tela.getByLabelText("Início do intervalo 1, Segunda"), "18:00");
    await digitar(tela.getByLabelText("Fim do intervalo 1, Segunda"), "09:00");
    await userEvent.click(tela.getByRole("tab", {
      name: /^Geral/
    }));
    await userEvent.click(salvar);
    await expect(await alertaDoTopo(canvasElement)).toHaveTextContent("Revise a aba Horários. Corrija os campos marcados antes de salvar.");
    await expect(tela.getByRole("tab", {
      name: /^Horários.*\\(com erro\\)/
    })).toHaveAttribute("aria-selected", "true");
    await expect(tela.getByText("O fim precisa ser depois do início. Para passar da meia-noite, use dois dias.")).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(we=(ue=M.parameters)==null?void 0:ue.docs)==null?void 0:we.source}}};var ve,ye,Be;G.parameters={...G.parameters,docs:{...(ve=G.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  name: "Campo do formulário meio preenchido",
  args: {
    rotaInicial: EDITOR
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    const salvar = await editorAberto(tela);
    await userEvent.click(tela.getByRole("tab", {
      name: /^Fila de espera/
    }));
    await userEvent.click(tela.getByRole("button", {
      name: "+ Adicionar campo"
    }));
    const ids = tela.getAllByRole("textbox", {
      name: /^id \\(a-z, 0-9, _\\)/
    });
    await digitar(ids[ids.length - 1], ID_DE_CAMPO_SEM_PERGUNTA);
    await userEvent.click(salvar);
    await expect(await alertaDoTopo(canvasElement)).toHaveTextContent("Revise a aba Fila de espera. Corrija os campos marcados antes de salvar.");
    await expect(tela.getByText("Informe a pergunta ou remova o campo.")).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(Be=(ye=G.parameters)==null?void 0:ye.docs)==null?void 0:Be.source}}};export{k as AtendentesNaoCarregados,x as AvisoDeSaida,G as CampoMeioPreenchido,g as Carregando,O as Desativar,C as DesativarErro,B as Editor,I as ErroAoSalvar,_ as ErroDaApiTraduzido,R as ErroDoServidor,F as ErroServidorSemEco,M as HorarioInvertido,H as IdentificadorInvalido,A as ListaCarregando,b as ListaErroServidor,h as ListaSemPermissao,f as ListaSemRede,D as NaoEncontrado,T as Novo,y as Padrao,L as PrazoForaDaFaixa,N as ReativarErro,q as SemPermissaoEditor,E as SemRede,P as UploadSemRede,S as Vazio,lt as __namedExportsOrder,ct as default};
