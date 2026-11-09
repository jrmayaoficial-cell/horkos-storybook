import{W as st,X as wa}from"./ShellJornada-dQtjvzoK.js";import{C as u,m as ct}from"./jornadaGestao-CLyC2Kwj.js";import{t as m,s as l,d as v,i as lt}from"./jornadaOperar-BSpzphu5.js";import"./jsx-runtime-BxkmYOhx.js";import"./iframe-CvwGTwxb.js";import"./preload-helper-D6kgxu3v.js";import"./dadosShell-CdtDdZjS.js";import"./index-Bk9tc66v.js";import"./index-C7gLAnno.js";import"./v2-BKgx1C0D.js";import"./index-B_TEXOCW.js";import"./api-CwvJBfED.js";import"./index-BxX8puOH.js";import"./marca-IZ8R_8pg.js";import"./carregando-CLNuqGFU.js";import"./celulas-BKlXq2YF.js";/* empty css              */import"./CartaoKpi-D8GTFk0D.js";import"./MiniBarras-CuGgzhOK.js";import"./cores-D-iLqYVd.js";import"./Login-RcCxCUCc.js";import"./etapas-DMOYpc72.js";/* empty css                */import"./ShellGestao-BC58C0k_.js";const mt={fuso:"America/Sao_Paulo",dias:{seg:[{inicio:"09:00",fim:"18:00"}],ter:[{inicio:"09:00",fim:"18:00"}],qua:[{inicio:"09:00",fim:"18:00"}],qui:[{inicio:"09:00",fim:"18:00"}],sex:[{inicio:"09:00",fim:"18:00"}]},mensagem_fora:null},ra={exibir_posicao_fila:!0,fila_timeout_aceite_s:30,midias:[],formulario:[],questionario:[],departamentos_permitidos:null};function pa(n,a,e,r){return{id:n,nome:a,ativo:e,atendentes:r,setor:"Consignado",slug:n.replace(/^dep-/,""),empresa_id:wa.id,empresa_nome:wa.nome,criado_em:"2026-01-10T12:00:00Z",horarios:mt,config:ra}}const sa=[pa("dep-inss","INSS · Consignado",!0,[{id:101,nome:"Rafael Souza"},{id:102,nome:"Camila Rocha"}]),pa("dep-fgts","FGTS · Saque-aniversário",!1,[{id:103,nome:"Diego Alves"}])],dt={erro:"config.fila_timeout_aceite_s deve ser um inteiro entre 5 e 600"},ut={erro:"Informe o nome do departamento"},wt={erro:'já existe um departamento com o identificador "inss-df"'},pt={erro:"usuários não habilitáveis nesta empresa (inexistentes, desativados ou super): 1130, 314"};function vt(){return new File([new Uint8Array(256)],"boas-vindas.mp4",{type:"video/mp4"})}const gt={papel:"gerente",permissoes:{"departamentos.ver":!0,"operacao.ver":!0,"sessoes.ver":!0}},yt="BRB Brasília",Bt="clt",xt="601",Rt="cpf",Et=[{id:"identidade",titulo:"Cliente confirmou a identidade",tipo:"aberta",instrucao:"Nome completo e CPF ditos pelo próprio cliente"},{id:"contratacao",titulo:"Cliente aceitou a contratação",tipo:"multipla_escolha",opcoes:["Sim","Não","Não ficou claro"],conformes:["Sim"]},{id:"coacao",titulo:"Sinal de coação durante a chamada",tipo:"aberta",instrucao:"Outra voz orientando o cliente ou pressa fora do comum"}],va="Cliente aceitou o contrato em voz alta";function Tt(n=Et){const[a,...e]=sa;return[{...a,config:{...ra,questionario:n}},...e]}const ot=st[0],ht=[{id:"beneficio",label:"Qual o número do benefício?",obrigatorio:!0},{id:"cpf",label:"Qual o seu CPF?",obrigatorio:!0,origem:ot.token,editavel_pelo_cliente:!1},{id:"banco",label:"Em qual banco você recebe?",obrigatorio:!1}],Dt=[{titulo:"Boas-vindas",url:"https://exemplo.invalid/boas-vindas.mp4"},{titulo:"Como funciona a chamada",url:"",chave_s3:"departamentos/dep-inss/midias/como-funciona.mp4"}],ga="HTTPS://exemplo.invalid/Documentos.mp4",ya="Em qual banco você recebe o benefício?";function It(n=ht,a=Dt){const[e,...r]=sa;return[{...e,config:{...ra,formulario:n,midias:a}},...r]}const{expect:t,userEvent:o,waitFor:d,within:s}=__STORYBOOK_MODULE_TEST__,ft=ct("/departamentos",'Jornada de departamentos dentro do shell: lista e editor em sete abas (Geral, Horários, Atendentes, Fila de espera, Plano de fundo, Questionário, Transferência). Com a carga do editor falhando o formulário não aparece (antes ele abria vazio e o Salvar criava um departamento novo); departamento que não existe mostra "não encontrado" com Voltar; erro ao salvar aparece no topo, com alerta. Sair do editor com alteração não salva (Voltar, Cancelar, menu) pergunta "Sair sem salvar?" citando o departamento; abrir e sair sem mexer, ou salvar e sair, não pergunta.'),g="GET /v1/departamentos",w="/departamentos/dep-inss",R="PUT /v1/departamentos/:id",bt="PUT /v1/departamentos/:id/atendentes",St="GET /v1/departamentos/atendentes-elegiveis",At="POST /v1/departamentos/:id/midias",oa="Mais ações de INSS · Consignado",E=640,T=44,Ct=12,ia=2e3,Ot=899;function ca(n){return n.ownerDocument.defaultView.innerWidth}async function Ba(n,a){ca(n)>Ot||await t(a.getBoundingClientRect().height).toBeGreaterThanOrEqual(T)}async function ta(n){const a=".departamento-erro-topo [role='alert']";return await d(()=>t(n.ownerDocument.querySelector(a)).not.toBeNull()),n.ownerDocument.querySelector(a)}async function x(n){return await t(await n.findByRole("heading",{name:"INSS · Consignado",level:1})).toBeInTheDocument(),n.getByRole("button",{name:"Salvar alterações"})}async function aa(n,a,e){const[r]=await n.findAllByRole("button",{name:a});await o.click(r),await o.click(await n.findByRole("menuitem",{name:e}))}const nn={title:"Jornadas/Departamentos",...ft},h={name:"Padrão",play:async({canvasElement:n})=>{const a=m(n);await t(await a.findByRole("region",{name:"Departamentos"})).toBeInTheDocument(),await t((await a.findAllByText("INSS · Consignado")).length).toBeGreaterThan(0),await l()}},D={name:"Editor: sete abas",args:{rotaInicial:w},play:async({canvasElement:n,step:a})=>{const e=m(n);await t(await e.findByRole("heading",{name:"INSS · Consignado",level:1})).toBeInTheDocument();const r=s(e.getByRole("tablist",{name:"Seções do departamento"}));await t(r.getAllByRole("tab")).toHaveLength(7),await a("Horários: campos de hora com nome e remover intervalo",async()=>{await o.click(r.getByRole("tab",{name:"Horários"})),await t(e.getByLabelText("Início do intervalo 1, Sábado")).toBeInTheDocument(),await o.click(e.getByRole("button",{name:"Remover intervalo 1 de Sábado"})),await t(e.queryByLabelText("Início do intervalo 1, Sábado")).not.toBeInTheDocument(),await o.click(e.getByRole("button",{name:"Abrir o atendimento de Sábado"})),await t(e.getByLabelText("Fim do intervalo 1, Sábado")).toBeInTheDocument()}),await a("Atendentes: contagem na aba, linhas de 44px e sem rolagem interna até 640",async()=>{await o.click(r.getByRole("tab",{name:/^Atendentes \(3\)/})),await t(await e.findByRole("textbox",{name:"Buscar atendente por nome"})).toBeInTheDocument();const i=n.ownerDocument;await d(()=>t(i.querySelectorAll(".dep-linha-sel").length).toBeGreaterThan(0));for(const B of i.querySelectorAll(".dep-linha-sel"))await t(B.getBoundingClientRect().height).toBeGreaterThanOrEqual(T);await t(i.querySelector(".hk-tag")).toBeNull();const c=i.querySelector(".dep-lista-rolagem");ca(n)<=E&&await t(c.scrollHeight).toBeLessThanOrEqual(c.clientHeight+1)}),await a("Fila de espera: campo e mídia abrem em gaveta, sem expandir inline",async()=>{await o.click(r.getByRole("tab",{name:/^Fila de espera/})),await t(e.queryByRole("textbox",{name:"Pergunta"})).not.toBeInTheDocument(),await o.click(e.getByRole("button",{name:/Qual o número do benefício\?/}));const i=await e.findByRole("dialog",{name:"Campo 1 do formulário"});await t(s(i).getByRole("textbox",{name:"Pergunta"})).toHaveValue("Qual o número do benefício?"),await o.click(s(i).getByRole("button",{name:"Concluir"})),await p(e),await o.click(e.getByRole("button",{name:/Boas-vindas/}));const c=await e.findByRole("dialog",{name:"Mídia 1"});await t(s(c).queryByRole("navigation")).not.toBeInTheDocument(),await o.click(s(c).getByRole("button",{name:"Concluir"})),await p(e);const B=e.getByRole("button",{name:"Enviar arquivo"});await Ba(n,B),await t(B).not.toHaveTextContent(/60 MB/)}),await a('Questionário: "Usar padrão" com 44px até 899',async()=>{await o.click(r.getByRole("tab",{name:/^Questionário/})),await Ba(n,e.getByRole("button",{name:/Usar padrão/}))});for(const i of[/^Fila de espera/,/^Plano de fundo/,/^Questionário/,/^Transferência/,/^Geral/])await o.click(r.getByRole("tab",{name:i})),await t(r.getByRole("tab",{name:i})).toHaveAttribute("aria-selected","true");await a("Salvar volta à lista",async()=>{await o.click(e.getByRole("button",{name:"Salvar alterações"})),await t(await e.findByRole("region",{name:"Departamentos"})).toBeInTheDocument()}),await l()}},I={name:"Editor: aviso de saída",args:{rotaInicial:w},play:async({canvasElement:n,step:a})=>{const e=m(n);await t(await e.findByRole("heading",{name:"INSS · Consignado",level:1})).toBeInTheDocument(),await a("Abrir e voltar sem mexer sai direto",async()=>{await o.click(e.getByRole("link",{name:"Voltar para Departamentos"})),await t(await e.findByRole("region",{name:"Departamentos"})).toBeInTheDocument(),await t(e.queryByText("Sair sem salvar?")).not.toBeInTheDocument()}),await a("Mudar o nome e Cancelar pergunta, citando o departamento",async()=>{await o.click((await e.findAllByRole("link",{name:/INSS · Consignado/}))[0]),await t(await e.findByRole("heading",{name:"INSS · Consignado",level:1})).toBeInTheDocument(),await v(e.getByRole("textbox",{name:/Nome/}),"INSS · Benefícios"),await o.click(e.getByRole("button",{name:"Cancelar"}));const r=s(await e.findByRole("dialog",{name:"Sair sem salvar?"}));await t(r.getByText(/alterações não salvas em Departamento “INSS · Consignado”/)).toBeInTheDocument(),await o.click(r.getByRole("button",{name:"Continuar editando"})),await d(()=>t(e.queryByRole("dialog",{name:"Sair sem salvar?"})).not.toBeInTheDocument()),await t(e.getByRole("textbox",{name:/Nome/})).toHaveValue("INSS · Benefícios")}),await a("Sair pelo menu (gaveta no celular) pergunta e o foco fica no aviso",async()=>{await lt(n,"Departamentos");const r=await e.findByRole("dialog",{name:"Sair sem salvar?"});await d(()=>t(e.queryByRole("dialog",{name:"Menu"})).not.toBeInTheDocument()),await d(()=>t(r).toContainElement(n.ownerDocument.activeElement)),await t(n.ownerDocument.activeElement).toHaveTextContent("Continuar editando"),await o.click(s(r).getByRole("button",{name:"Continuar editando"})),await d(()=>t(e.queryByRole("dialog",{name:"Sair sem salvar?"})).not.toBeInTheDocument()),await t(e.getByRole("textbox",{name:/Nome/})).toHaveValue("INSS · Benefícios")}),await a("Campo editado na gaveta continua na linha depois do aviso",async()=>{await o.click(e.getByRole("tab",{name:/^Fila de espera/})),await o.click(e.getByRole("button",{name:/Qual o número do benefício\?/}));const r=await e.findByRole("dialog",{name:"Campo 1 do formulário"}),i=s(r).getByRole("textbox",{name:"Pergunta"});await o.clear(i),await v(i,"Qual o número do seu benefício?"),await o.click(s(r).getByRole("button",{name:"Concluir"})),await p(e),await o.click(e.getByRole("button",{name:"Cancelar"}));const c=await e.findByRole("dialog",{name:"Sair sem salvar?"});await o.click(s(c).getByRole("button",{name:"Continuar editando"})),await d(()=>t(e.queryByRole("dialog",{name:"Sair sem salvar?"})).not.toBeInTheDocument()),await t(e.getByRole("button",{name:/Qual o número do seu benefício\?/})).toBeInTheDocument()}),await a("Salvar e sair não pergunta",async()=>{await o.click(e.getByRole("button",{name:"Salvar alterações"})),await t(await e.findByRole("region",{name:"Departamentos"})).toBeInTheDocument(),await t(e.queryByText("Sair sem salvar?")).not.toBeInTheDocument()}),await l()}},f={name:"Editor: novo departamento",args:{rotaInicial:"/departamentos/novo"},play:async({canvasElement:n,step:a})=>{const e=m(n);await t(await e.findByRole("heading",{name:"Novo departamento",level:1})).toBeInTheDocument(),await v(e.getByRole("textbox",{name:/Nome/}),"BRB · Banco de Brasília"),await a("fundo obrigatório sem padrão marca a aba com erro",async()=>{await o.click(e.getByRole("tab",{name:"Plano de fundo"})),await o.click(e.getByRole("checkbox",{name:/Fundo obrigatório/})),await o.click(e.getByRole("button",{name:"Criar departamento"})),await t(await e.findByRole("alert")).toHaveTextContent(/Fundo obrigatório precisa de um padrão/),await t(e.getByRole("tab",{name:"Plano de fundo (com erro)"})).toHaveAttribute("aria-selected","true")}),await a("corrigido, cria e volta à lista",async()=>{await o.click(e.getByRole("checkbox",{name:/Fundo obrigatório/})),await o.click(e.getByRole("button",{name:"Criar departamento"})),await t((await e.findAllByText("BRB · Banco de Brasília")).length).toBeGreaterThan(0)}),await l()}},b={args:{rotaInicial:w},parameters:{jornada:{...u,pendurar:[g]}},play:async({canvasElement:n})=>{const a=m(n);await t(await a.findByText(/Carregando o departamento/)).toBeInTheDocument(),await t(a.queryByRole("button",{name:/Salvar|Criar departamento/})).not.toBeInTheDocument()}},S={name:"Erro de rede: sem formulário",args:{rotaInicial:w},parameters:{jornada:{...u,semRede:[g]}},play:async({canvasElement:n})=>{const a=m(n);await t(await a.findByText(/Não foi possível carregar o departamento/)).toBeInTheDocument(),await t(a.queryByRole("button",{name:/Salvar|Criar departamento/})).not.toBeInTheDocument(),await t(a.queryByRole("tablist")).not.toBeInTheDocument(),await o.click(a.getByRole("button",{name:"Tentar de novo"})),await t(await a.findByText(/Não foi possível carregar o departamento/)).toBeInTheDocument(),await l()}},A={name:"Erro do servidor",args:{rotaInicial:w},parameters:{jornada:{...u,falhar:[g]}},play:async({canvasElement:n})=>{const a=m(n);await t(await a.findByText(/O servidor teve um problema ao carregar o departamento/)).toBeInTheDocument(),await t(a.queryByText(/api falsa/)).not.toBeInTheDocument(),await t(a.getByRole("link",{name:"Voltar para Departamentos"})).toBeInTheDocument(),await l()}},C={name:"Erro: não encontrado",args:{rotaInicial:"/departamentos/dep-inexistente"},play:async({canvasElement:n})=>{const a=m(n);await t(await a.findByText("Departamento não encontrado.")).toBeInTheDocument(),await t(a.queryByRole("button",{name:"Tentar de novo"})).not.toBeInTheDocument(),await o.click(a.getByRole("button",{name:"Voltar à lista"})),await t(await a.findByRole("region",{name:"Departamentos"})).toBeInTheDocument(),await l()}},O={name:"Erro ao salvar: alerta no topo",args:{rotaInicial:w},parameters:{jornada:{...u,respostas:{[R]:{status:409,corpo:wt}}}},play:async({canvasElement:n})=>{const a=m(n),e=await a.findByRole("button",{name:"Salvar alterações"}),r=a.getByRole("textbox",{name:/Identificador/});await v(r,"inss-df"),await o.click(e);const i=await a.findByRole("alert");await t(i).toHaveTextContent("Já existe um departamento com o identificador “inss-df”. Preencha outro identificador."),await t(a.getByRole("tab",{name:/^Geral.*\(com erro\)/})).toHaveAttribute("aria-selected","true"),await d(()=>t(i.compareDocumentPosition(a.getByRole("tablist"))&Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()),await d(()=>t(i.ownerDocument.activeElement).toBe(i.closest("[tabindex='-1']"))),await l()}},k={name:"Vazio: nenhum departamento",parameters:{jornada:{...u,respostas:{[g]:{status:200,corpo:[]}}}},play:async({canvasElement:n})=>{const a=m(n);await t(await a.findByText("Nenhum departamento ainda")).toBeInTheDocument(),await l()}},_={name:"Lista: sem rede",parameters:{jornada:{...u,semRede:[g]}},play:async({canvasElement:n})=>{const a=m(n);await t(await a.findByText("Não foi possível carregar os departamentos. Verifique a conexão e tente de novo.")).toBeInTheDocument(),await o.click(a.getByRole("button",{name:"Tentar de novo"})),await t(await a.findByText(/Não foi possível carregar os departamentos/)).toBeInTheDocument(),await l()}},N={name:"Lista: erro do servidor",parameters:{jornada:{...u,falhar:[g]}},play:async({canvasElement:n})=>{const a=m(n);await t(await a.findByText("O servidor teve um problema ao carregar os departamentos. Tente de novo em instantes.")).toBeInTheDocument(),await t(a.getByRole("button",{name:"Tentar de novo"})).toBeInTheDocument(),await t(a.queryByText(/HTTP|500|api falsa/)).not.toBeInTheDocument(),await l()}},F={name:"Lista: sem permissão",parameters:{jornada:{...u,respostas:{[g]:{status:403,corpo:{erro:"perfil sem acesso"}}}}},play:async({canvasElement:n})=>{const a=m(n),e=s(await a.findByRole("region",{name:"Departamentos"}));await t(await e.findByText("Seu usuário não tem permissão para ver os departamentos.")).toBeInTheDocument(),await t(a.queryByRole("button",{name:"Tentar de novo"})).not.toBeInTheDocument(),await t(a.queryByRole("button",{name:"Novo departamento"})).not.toBeInTheDocument(),await t(a.queryByText(/Perfil analista/)).not.toBeInTheDocument(),await l()}},q={name:"Lista: carregando",parameters:{jornada:{...u,pendurar:[g]}},play:async({canvasElement:n})=>{const a=m(n);await t(await a.findByText("Carregando departamentos…")).toBeInTheDocument(),await t(a.getByText("Carregando…")).toBeInTheDocument(),await t(a.queryByRole("button",{name:"Tentar de novo"})).not.toBeInTheDocument()}},P={name:"Desativar: gaveta de confirmação",play:async({canvasElement:n,step:a})=>{const e=m(n);await a("Cancelar tem o foco e não desativa",async()=>{await aa(e,oa,"Desativar");const r=await e.findByRole("dialog",{name:"Desativar o departamento “INSS · Consignado”?"});await t(r).toHaveClass("op-gaveta"),n.ownerDocument.defaultView.innerWidth<=E&&await t(r).toHaveClass("hk-modal--folha"),await t(s(r).getByText(/Os 3 atendentes vinculados deixam de receber sessões dele\./)).toBeInTheDocument(),await d(()=>t(n.ownerDocument.activeElement).toHaveTextContent("Cancelar")),await o.click(s(r).getByRole("button",{name:"Cancelar"})),await d(()=>t(e.queryByRole("dialog")).not.toBeInTheDocument())}),await a("Desativar fecha, recarrega e avisa",async()=>{await aa(e,oa,"Desativar");const r=await e.findByRole("dialog",{name:/Desativar o departamento/});await o.click(s(r).getByRole("button",{name:"Desativar"})),await t(await e.findByText("Departamento desativado.")).toBeInTheDocument(),await d(()=>t(e.queryByRole("dialog")).not.toBeInTheDocument()),await t((await e.findAllByText("Desativado")).length).toBeGreaterThan(0)}),await l()}},H={name:"Desativar: erro do servidor na gaveta",parameters:{jornada:{...u,respostas:{[R]:{status:500,corpo:{erro:"falhou ao gravar"}}}}},play:async({canvasElement:n})=>{const a=m(n);await aa(a,oa,"Desativar");const e=s(await a.findByRole("dialog",{name:/Desativar o departamento/}));await o.click(e.getByRole("button",{name:"Desativar"})),await t(await e.findByText("O servidor teve um problema ao desativar o departamento. Tente de novo em instantes.")).toBeInTheDocument(),await t(e.queryByText(/falhou ao gravar/)).not.toBeInTheDocument(),await t(a.getByRole("dialog")).toBeInTheDocument(),await l()}},L={name:"Reativar: erro acima do cartão",parameters:{jornada:{...u,respostas:{[g]:{status:200,corpo:sa},[R]:{status:500,corpo:{erro:"falhou ao gravar"}}}}},play:async({canvasElement:n})=>{const a=m(n);await aa(a,"Mais ações de FGTS · Saque-aniversário","Reativar");const e=await a.findByRole("alert");await t(e).toHaveTextContent("O servidor teve um problema ao reativar o departamento. Tente de novo em instantes."),await t(e.compareDocumentPosition(a.getByRole("region",{name:"Departamentos"}))&Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy(),await t(a.queryByRole("dialog")).not.toBeInTheDocument(),await l()}},M={name:"Erro da API traduzido: aba marcada",args:{rotaInicial:w},parameters:{jornada:{...u,respostas:{[R]:{status:422,corpo:dt}}}},play:async({canvasElement:n})=>{const a=m(n);await o.click(await a.findByRole("button",{name:"Salvar alterações"}));const e=await a.findByRole("alert");await t(e).toHaveTextContent("O prazo de aceite vai de 5 a 600 segundos."),await t(e.textContent).not.toMatch(/config\.|fila_timeout/),await t(a.getByRole("tab",{name:/^Fila de espera.*\(com erro\)/})).toHaveAttribute("aria-selected","true"),await d(()=>t(e.ownerDocument.activeElement).toBe(e.closest("[tabindex='-1']"))),await l()}},G={name:"Erro do servidor ao salvar: sem eco",args:{rotaInicial:w},parameters:{jornada:{...u,respostas:{[R]:{status:500,corpo:ut}}}},play:async({canvasElement:n})=>{const a=m(n);await o.click(await a.findByRole("button",{name:"Salvar alterações"}));const e=await a.findByRole("alert");await t(e).toHaveTextContent("O servidor não salvou o departamento. Tente de novo em instantes."),await t(e.textContent).not.toMatch(/Informe o nome/),await t(a.queryByRole("tab",{name:/\(com erro\)/})).not.toBeInTheDocument(),await l()}},V={name:"Atendentes não carregados: salvar sem mexer no vínculo",args:{rotaInicial:w},parameters:{jornada:{...u,semRede:[St],respostas:{[bt]:{status:400,corpo:pt}}}},play:async({canvasElement:n,step:a})=>{const e=m(n);await t(await e.findByRole("heading",{name:"INSS · Consignado",level:1})).toBeInTheDocument(),await a("aba Atendentes avisa e trava Limpar seleção",async()=>{await o.click(e.getByRole("tab",{name:/^Atendentes/}));const r=await e.findByRole("alert");await t(r).toHaveTextContent("Não foi possível carregar os atendentes desta empresa."),await t(e.getByRole("button",{name:"Limpar seleção"})).toBeDisabled(),await t(e.getByText("3 selecionados")).toBeInTheDocument(),await o.click(s(r).getByRole("button",{name:"Tentar de novo"})),await t(await e.findByText("Não foi possível carregar os atendentes desta empresa.")).toBeInTheDocument()}),await a("Salvar não envia o vínculo e volta à lista",async()=>{await o.click(e.getByRole("button",{name:"Salvar alterações"})),await t(await e.findByRole("region",{name:"Departamentos"})).toBeInTheDocument(),await t(e.queryByText(/Departamento salvo, mas/)).not.toBeInTheDocument()}),await l()}},U={name:"Upload de mídia sem rede",args:{rotaInicial:w},parameters:{jornada:{...u,semRede:[At]}},play:async({canvasElement:n})=>{const a=m(n);await t(await a.findByRole("heading",{name:"INSS · Consignado",level:1})).toBeInTheDocument(),await o.click(a.getByRole("tab",{name:/^Fila de espera/}));const e=n.ownerDocument.querySelector('input[type="file"]');if(!e)throw new Error("campo de arquivo da mídia não está na tela");await o.upload(e,vt()),await t(await a.findByText("Sem conexão. O arquivo não foi enviado; confira a internet e tente de novo.")).toBeInTheDocument(),await t(a.queryByText(/Arquivo enviado/)).not.toBeInTheDocument(),await l()}},j={name:"Editor sem permissão de gerir",args:{rotaInicial:w},parameters:{jornada:{...u,sessao:gt}},play:async({canvasElement:n})=>{const a=m(n);await t(await a.findByText("Seu usuário não tem permissão para alterar departamentos.")).toBeInTheDocument(),await t(a.queryByRole("tablist")).not.toBeInTheDocument(),await t(a.queryByRole("button",{name:"Salvar alterações"})).not.toBeInTheDocument(),await o.click(a.getByRole("button",{name:"Voltar à lista"})),await t(await a.findByRole("region",{name:"Departamentos"})).toBeInTheDocument(),await l()}},Q={name:"Identificador ajustado e repetido",args:{rotaInicial:w},play:async({canvasElement:n,step:a})=>{const e=m(n),r=await x(e),i=e.getByRole("textbox",{name:/Identificador/});await a("ao sair do campo, o identificador é ajustado",async()=>{await v(i,yt),await o.tab(),await t(i).toHaveValue("brb-brasilia")}),await a("identificador de outro departamento bloqueia sob o campo",async()=>{await v(i,Bt),await o.click(r),await t(await ta(n)).toHaveTextContent("Revise a aba Geral. Corrija os campos marcados antes de salvar."),await t(e.getByText("Já existe um departamento com o identificador “clt”.")).toBeInTheDocument(),await t(e.getByRole("tab",{name:/^Geral.*\(com erro\)/})).toHaveAttribute("aria-selected","true")}),await l()}},z={name:"Prazo de aceite fora da faixa",args:{rotaInicial:w},play:async({canvasElement:n})=>{const a=m(n),e=await x(a);await o.click(a.getByRole("tab",{name:/^Fila de espera/})),await v(a.getByRole("textbox",{name:/Prazo de aceite/}),xt),await o.click(a.getByRole("tab",{name:/^Geral/})),await o.click(e),await t(await ta(n)).toHaveTextContent("Revise a aba Fila de espera. Corrija os campos marcados antes de salvar."),await t(a.getByRole("tab",{name:/^Fila de espera.*\(com erro\)/})).toHaveAttribute("aria-selected","true"),await t(a.getByText("O prazo de aceite vai de 5 a 600 segundos.")).toBeInTheDocument(),await l()}},J={name:"Horário invertido",args:{rotaInicial:w},play:async({canvasElement:n})=>{const a=m(n),e=await x(a);await o.click(a.getByRole("tab",{name:/^Horários/})),await v(a.getByLabelText("Início do intervalo 1, Segunda"),"18:00"),await v(a.getByLabelText("Fim do intervalo 1, Segunda"),"09:00"),await o.click(a.getByRole("tab",{name:/^Geral/})),await o.click(e),await t(await ta(n)).toHaveTextContent("Revise a aba Horários. Corrija os campos marcados antes de salvar."),await t(a.getByRole("tab",{name:/^Horários.*\(com erro\)/})).toHaveAttribute("aria-selected","true"),await t(a.getByText("O fim precisa ser depois do início. Para passar da meia-noite, use dois dias.")).toBeInTheDocument(),await l()}},W={name:"Campo do formulário meio preenchido",args:{rotaInicial:w},play:async({canvasElement:n})=>{const a=m(n),e=await x(a);await o.click(a.getByRole("tab",{name:/^Fila de espera/})),await o.click(a.getByRole("button",{name:"+ Adicionar campo"}));const r=await a.findByRole("dialog",{name:"Novo campo do formulário"});await v(s(r).getByRole("textbox",{name:/^id \(a-z, 0-9, _\)/}),Rt),await o.click(s(r).getByRole("button",{name:"Concluir"})),await p(a),await o.click(e),await t(await ta(n)).toHaveTextContent("Revise a aba Fila de espera. Corrija os campos marcados antes de salvar.");const i=a.getByRole("button",{name:/Campo sem pergunta.*\(com erro\)/});await o.click(i);const c=await a.findByRole("dialog",{name:"Campo 2 do formulário"});await t(s(c).getByText("Informe a pergunta ou remova o campo.")).toBeInTheDocument(),await o.click(s(c).getByRole("button",{name:"Concluir"})),await p(a),await l()}},ea={args:{rotaInicial:w},parameters:{jornada:{...u,respostas:{[g]:{status:200,corpo:Tt()}}}}};function y(n){return Array.from(n.ownerDocument.querySelectorAll("button.dep-item-linha"))}async function la(n){const a=m(n);return await x(a),await o.click(a.getByRole("tab",{name:/^Questionário/})),await d(()=>t(y(n)).toHaveLength(3)),a}async function p(n){await d(()=>t(n.queryByRole("dialog")).not.toBeInTheDocument())}async function ma(n){const a=n.ownerDocument.defaultView,e=a.innerWidth,r=n.getAnimations({subtree:!0}).map(i=>i.finished.catch(()=>{}));await Promise.race([Promise.all(r),new Promise(i=>setTimeout(i,ia))]);for(const i of n.querySelectorAll("*")){const c=i.getBoundingClientRect();c.width!==0&&await t(c.right).toBeLessThanOrEqual(e+.5)}if(e<=E)for(const i of n.querySelectorAll("button"))await t(i.getBoundingClientRect().height).toBeGreaterThanOrEqual(T);for(const i of n.querySelectorAll("label, legend, input, textarea, p, button, nav span"))await t(parseFloat(a.getComputedStyle(i).fontSize)).toBeGreaterThanOrEqual(Ct)}const Z={name:"Questionário: item em gaveta",...ea,play:async({canvasElement:n,step:a})=>{const e=await la(n);await a("a linha compacta abre a gaveta do item, sem expandir inline",async()=>{await t(e.queryByRole("textbox",{name:"Título"})).not.toBeInTheDocument();for(const i of y(n))await t(i.getBoundingClientRect().height).toBeGreaterThanOrEqual(T);await o.click(y(n)[0]);const r=await e.findByRole("dialog",{name:"Item 1 do questionário"});await t(r).toHaveClass("op-gaveta"),await t(s(r).getByRole("button",{name:/Anterior/})).toBeDisabled(),await d(()=>t(n.ownerDocument.activeElement).toHaveTextContent("Item 1 do questionário"))}),await a("Próxima troca o item sem fechar e a edição aparece na linha",async()=>{const r=e.getByRole("dialog");await o.click(s(r).getByRole("button",{name:/Próxima/}));const i=await e.findByRole("dialog",{name:"Item 2 do questionário"});await t(s(i).getByText("2 de 3")).toBeInTheDocument(),await t(s(i).getAllByRole("checkbox",{name:"Conta como conforme"})).toHaveLength(3);const c=s(i).getByRole("textbox",{name:"Título"});await o.clear(c),await v(c,va),await o.click(s(i).getByRole("button",{name:"Concluir"})),await p(e),await t(y(n)[1]).toHaveTextContent(va)}),await a("item novo abre no primeiro campo e some se fechar vazio",async()=>{await o.click(e.getByRole("button",{name:"+ Adicionar item"}));const r=await e.findByRole("dialog",{name:"Novo item do questionário"});await d(()=>t(n.ownerDocument.activeElement).toBe(s(r).getByRole("textbox",{name:"Título"}))),await o.keyboard("{Escape}"),await p(e),await t(y(n)).toHaveLength(3)}),await a("Remover item fecha e tira a linha, sem confirmação",async()=>{await o.click(y(n)[2]);const r=await e.findByRole("dialog",{name:"Item 3 do questionário"});await o.click(s(r).getByRole("button",{name:"Remover item"})),await p(e),await t(y(n)).toHaveLength(2)}),await l()}},kt={horkos375:{name:"375 px",styles:{width:"375px",height:"812px"},type:"mobile"}},K={name:"Questionário: gaveta do item, medidas (folha até 640)",...ea,parameters:{...ea.parameters,viewport:{options:kt}},globals:{viewport:{value:"horkos375",isRotated:!1}},play:async({canvasElement:n})=>{const a=await la(n);await o.click(y(n)[1]);const e=await a.findByRole("dialog",{name:"Item 2 do questionário"});n.ownerDocument.defaultView.innerWidth<=E&&await t(e).toHaveClass("hk-modal--folha"),await ma(e);const i=s(e).getAllByRole("checkbox",{name:"Conta como conforme"}),c=i[i.length-1].closest(".dep-item-opcao");c.scrollIntoView({block:"nearest"});const B=e.querySelector(".dep-item-gaveta-rodape");await d(()=>t(c.getBoundingClientRect().bottom).toBeLessThanOrEqual(B.getBoundingClientRect().top+.5)),await o.click(s(e).getByRole("button",{name:"Concluir"})),await p(a),await l()}},X={name:"Questionário: fechar a gaveta mantém o que foi digitado",...ea,play:async({canvasElement:n,step:a})=>{const e=await la(n);await a("fechar pelo X mantém o texto e a página ainda pergunta antes de sair",async()=>{await o.click(y(n)[0]);const r=await e.findByRole("dialog",{name:"Item 1 do questionário"}),i=s(r).getByRole("textbox",{name:/Instrução para a análise/});await o.type(i," e data de nascimento"),await o.click(s(r).getByRole("button",{name:"Fechar"})),await p(e),await t(e.queryByRole("alertdialog")).not.toBeInTheDocument(),await o.click(y(n)[0]);const c=await e.findByRole("dialog",{name:"Item 1 do questionário"});await t(s(c).getByRole("textbox",{name:/Instrução para a análise/})).toHaveValue("Nome completo e CPF ditos pelo próprio cliente e data de nascimento"),await o.click(s(c).getByRole("button",{name:"Concluir"})),await p(e)}),await a('sair do editor pergunta "Sair sem salvar?"',async()=>{await o.click(e.getByRole("button",{name:"Cancelar"})),await t(await e.findByText("Sair sem salvar?")).toBeInTheDocument(),await o.click(e.getByRole("button",{name:"Continuar editando"}))}),await l()}},it={args:{rotaInicial:w},parameters:{jornada:{...u,respostas:{[g]:{status:200,corpo:It()}}}}};function da(n,a){return Array.from(n.ownerDocument.querySelectorAll(`ul[aria-label="${a}"] button.dep-item-linha`))}async function rt(n){const a=m(n);return await x(a),await o.click(a.getByRole("tab",{name:/^Fila de espera/})),await d(()=>t(da(n,"Campos do formulário")).toHaveLength(3)),a}const Y={name:"Formulário do cliente: campo em gaveta",...it,play:async({canvasElement:n,step:a})=>{const e=await rt(n),r=()=>da(n,"Campos do formulário");await a("a linha compacta tem 44px e abre a gaveta do campo",async()=>{for(const c of r())await t(c.getBoundingClientRect().height).toBeGreaterThanOrEqual(T);await o.click(r()[0]);const i=await e.findByRole("dialog",{name:"Campo 1 do formulário"});await t(i).toHaveClass("op-gaveta"),await t(s(i).getByRole("checkbox",{name:"O cliente precisa responder"})).toBeChecked(),await t(s(i).queryByRole("checkbox",{name:"O cliente pode editar mesmo assim"})).not.toBeInTheDocument(),await ma(i)}),await a("Próxima leva ao campo com origem, sem fechar",async()=>{const i=e.getByRole("dialog");await o.click(s(i).getByRole("button",{name:/Próxima/}));const c=await e.findByRole("dialog",{name:"Campo 2 do formulário"});await t(s(c).getByText("2 de 3")).toBeInTheDocument();const B=s(c).getByRole("button",{name:/Preencher sozinho com/});await t(B).toHaveTextContent(ot.rotulo),await t(s(c).getByRole("checkbox",{name:"O cliente pode editar mesmo assim"})).toBeInTheDocument(),await o.click(B),await o.click(await s(c).findByRole("button",{name:"nenhuma (cliente preenche)"})),await d(()=>t(s(c).queryByRole("checkbox",{name:"O cliente pode editar mesmo assim"})).not.toBeInTheDocument()),await o.click(s(c).getByRole("button",{name:/Próxima/}));const na=await e.findByRole("dialog",{name:"Campo 3 do formulário"});await t(s(na).getByRole("button",{name:/Próxima/})).toBeDisabled();const ua=s(na).getByRole("textbox",{name:"Pergunta"});await o.clear(ua),await v(ua,ya),await o.click(s(na).getByRole("button",{name:"Concluir"})),await p(e),await t(r()[2]).toHaveTextContent(ya)}),await a("Remover campo fecha e tira a linha, sem confirmação",async()=>{await o.click(r()[0]);const i=await e.findByRole("dialog",{name:"Campo 1 do formulário"});await o.click(s(i).getByRole("button",{name:"Remover campo"})),await p(e),await t(e.queryByRole("alertdialog")).not.toBeInTheDocument(),await t(r()).toHaveLength(2)}),await l()}},$={name:"Mídias da fila: gaveta curta",...it,play:async({canvasElement:n,step:a})=>{const e=await rt(n),r=()=>da(n,"Mídias introdutórias");await a("mídia de arquivo mostra só o título e a pílula, sem navegação",async()=>{await t(r()[1].querySelector(".hk-lista-pilula")).toHaveTextContent("Arquivo enviado"),await o.click(r()[1]);const i=await e.findByRole("dialog",{name:"Mídia 2"});await t(s(i).queryByRole("navigation")).not.toBeInTheDocument(),await t(s(i).getAllByRole("textbox")).toHaveLength(1),await d(()=>t(s(i).getByText("Arquivo enviado · como-funciona.mp4")).toBeVisible(),{timeout:ia}),await d(()=>t(s(i).getByText("O arquivo não pode ser trocado. Remova e envie outro.")).toBeVisible(),{timeout:ia}),ca(n)<=E&&await t(i).toHaveClass("hk-modal--folha"),await ma(i),await o.click(s(i).getByRole("button",{name:"Concluir"})),await p(e)}),await a("link novo normaliza HTTPS:// ao sair do campo e entra na lista",async()=>{await o.click(e.getByRole("button",{name:"+ Adicionar link"}));const i=await e.findByRole("dialog",{name:"Novo link de mídia"}),c=s(i).getByRole("textbox",{name:/^Link/});await v(c,ga),await o.tab(),await t(c).toHaveValue(ga.replace("HTTPS://","https://")),await o.click(s(i).getByRole("button",{name:"Concluir"})),await p(e),await t(r()).toHaveLength(3)}),await a("Remover mídia fecha e tira a linha",async()=>{await o.click(r()[0]);const i=await e.findByRole("dialog",{name:"Mídia 1"});await o.click(s(i).getByRole("button",{name:"Remover mídia"})),await p(e),await t(r()).toHaveLength(2)}),await l()}},on=["Padrao","Editor","AvisoDeSaida","Novo","Carregando","SemRede","ErroDoServidor","NaoEncontrado","ErroAoSalvar","Vazio","ListaSemRede","ListaErroServidor","ListaSemPermissao","ListaCarregando","Desativar","DesativarErro","ReativarErro","ErroDaApiTraduzido","ErroServidorSemEco","AtendentesNaoCarregados","UploadSemRede","SemPermissaoEditor","IdentificadorInvalido","PrazoForaDaFaixa","HorarioInvertido","CampoMeioPreenchido","GavetaQuestionario","GavetaQuestionario375","FecharGavetaMantemItem","GavetaFormulario","GavetaMidia"];var xa,Ra,Ea;h.parameters={...h.parameters,docs:{...(xa=h.parameters)==null?void 0:xa.docs,source:{originalSource:`{
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
}`,...(Ea=(Ra=h.parameters)==null?void 0:Ra.docs)==null?void 0:Ea.source}}};var Ta,ha,Da;D.parameters={...D.parameters,docs:{...(Ta=D.parameters)==null?void 0:Ta.docs,source:{originalSource:`{
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
    await step("Atendentes: contagem na aba, linhas de 44px e sem rolagem interna até 640", async () => {
      await userEvent.click(abas.getByRole("tab", {
        name: /^Atendentes \\(3\\)/
      }));
      await expect(await tela.findByRole("textbox", {
        name: "Buscar atendente por nome"
      })).toBeInTheDocument();
      const doc = canvasElement.ownerDocument;
      await waitFor(() => expect(doc.querySelectorAll(".dep-linha-sel").length).toBeGreaterThan(0));
      for (const linha of doc.querySelectorAll<HTMLElement>(".dep-linha-sel")) {
        await expect(linha.getBoundingClientRect().height).toBeGreaterThanOrEqual(ALVO_MINIMO);
      }
      await expect(doc.querySelector(".hk-tag")).toBeNull();
      const lista = doc.querySelector<HTMLElement>(".dep-lista-rolagem") as HTMLElement;
      if (larguraDaJanela(canvasElement) <= LARGURA_FOLHA) await expect(lista.scrollHeight).toBeLessThanOrEqual(lista.clientHeight + 1);
    });
    await step("Fila de espera: campo e mídia abrem em gaveta, sem expandir inline", async () => {
      await userEvent.click(abas.getByRole("tab", {
        name: /^Fila de espera/
      }));
      await expect(tela.queryByRole("textbox", {
        name: "Pergunta"
      })).not.toBeInTheDocument();
      await userEvent.click(tela.getByRole("button", {
        name: /Qual o número do benefício\\?/
      }));
      const campo = await tela.findByRole("dialog", {
        name: "Campo 1 do formulário"
      });
      await expect(within(campo).getByRole("textbox", {
        name: "Pergunta"
      })).toHaveValue("Qual o número do benefício?");
      await userEvent.click(within(campo).getByRole("button", {
        name: "Concluir"
      }));
      await semGaveta(tela);
      await userEvent.click(tela.getByRole("button", {
        name: /Boas-vindas/
      }));
      const midia = await tela.findByRole("dialog", {
        name: "Mídia 1"
      });
      await expect(within(midia).queryByRole("navigation")).not.toBeInTheDocument();
      await userEvent.click(within(midia).getByRole("button", {
        name: "Concluir"
      }));
      await semGaveta(tela);
      const enviar = tela.getByRole("button", {
        name: "Enviar arquivo"
      });
      await alvoDeToque(canvasElement, enviar);
      await expect(enviar).not.toHaveTextContent(/60 MB/);
    });
    await step("Questionário: \\"Usar padrão\\" com 44px até 899", async () => {
      await userEvent.click(abas.getByRole("tab", {
        name: /^Questionário/
      }));
      await alvoDeToque(canvasElement, tela.getByRole("button", {
        name: /Usar padrão/
      }));
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
}`,...(Da=(ha=D.parameters)==null?void 0:ha.docs)==null?void 0:Da.source}}};var Ia,fa,ba;I.parameters={...I.parameters,docs:{...(Ia=I.parameters)==null?void 0:Ia.docs,source:{originalSource:`{
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
    await step("Campo editado na gaveta continua na linha depois do aviso", async () => {
      await userEvent.click(tela.getByRole("tab", {
        name: /^Fila de espera/
      }));
      await userEvent.click(tela.getByRole("button", {
        name: /Qual o número do benefício\\?/
      }));
      const campo = await tela.findByRole("dialog", {
        name: "Campo 1 do formulário"
      });
      const pergunta = within(campo).getByRole("textbox", {
        name: "Pergunta"
      });
      await userEvent.clear(pergunta);
      await digitar(pergunta, "Qual o número do seu benefício?");
      await userEvent.click(within(campo).getByRole("button", {
        name: "Concluir"
      }));
      await semGaveta(tela);
      await userEvent.click(tela.getByRole("button", {
        name: "Cancelar"
      }));
      const aviso = await tela.findByRole("dialog", {
        name: "Sair sem salvar?"
      });
      await userEvent.click(within(aviso).getByRole("button", {
        name: "Continuar editando"
      }));
      await waitFor(() => expect(tela.queryByRole("dialog", {
        name: "Sair sem salvar?"
      })).not.toBeInTheDocument());
      await expect(tela.getByRole("button", {
        name: /Qual o número do seu benefício\\?/
      })).toBeInTheDocument();
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
}`,...(ba=(fa=I.parameters)==null?void 0:fa.docs)==null?void 0:ba.source}}};var Sa,Aa,Ca;f.parameters={...f.parameters,docs:{...(Sa=f.parameters)==null?void 0:Sa.docs,source:{originalSource:`{
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
}`,...(Ca=(Aa=f.parameters)==null?void 0:Aa.docs)==null?void 0:Ca.source}}};var Oa,ka,_a;b.parameters={...b.parameters,docs:{...(Oa=b.parameters)==null?void 0:Oa.docs,source:{originalSource:`{
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
}`,...(_a=(ka=b.parameters)==null?void 0:ka.docs)==null?void 0:_a.source}}};var Na,Fa,qa;S.parameters={...S.parameters,docs:{...(Na=S.parameters)==null?void 0:Na.docs,source:{originalSource:`{
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
}`,...(qa=(Fa=S.parameters)==null?void 0:Fa.docs)==null?void 0:qa.source}}};var Pa,Ha,La;A.parameters={...A.parameters,docs:{...(Pa=A.parameters)==null?void 0:Pa.docs,source:{originalSource:`{
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
}`,...(La=(Ha=A.parameters)==null?void 0:Ha.docs)==null?void 0:La.source}}};var Ma,Ga,Va;C.parameters={...C.parameters,docs:{...(Ma=C.parameters)==null?void 0:Ma.docs,source:{originalSource:`{
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
}`,...(Va=(Ga=C.parameters)==null?void 0:Ga.docs)==null?void 0:Va.source}}};var Ua,ja,Qa;O.parameters={...O.parameters,docs:{...(Ua=O.parameters)==null?void 0:Ua.docs,source:{originalSource:`{
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
}`,...(Qa=(ja=O.parameters)==null?void 0:ja.docs)==null?void 0:Qa.source}}};var za,Ja,Wa;k.parameters={...k.parameters,docs:{...(za=k.parameters)==null?void 0:za.docs,source:{originalSource:`{
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
}`,...(Wa=(Ja=k.parameters)==null?void 0:Ja.docs)==null?void 0:Wa.source}}};var Za,Ka,Xa;_.parameters={..._.parameters,docs:{...(Za=_.parameters)==null?void 0:Za.docs,source:{originalSource:`{
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
}`,...(Xa=(Ka=_.parameters)==null?void 0:Ka.docs)==null?void 0:Xa.source}}};var Ya,$a,ae;N.parameters={...N.parameters,docs:{...(Ya=N.parameters)==null?void 0:Ya.docs,source:{originalSource:`{
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
}`,...(ae=($a=N.parameters)==null?void 0:$a.docs)==null?void 0:ae.source}}};var ee,te,ne;F.parameters={...F.parameters,docs:{...(ee=F.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(te=F.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var oe,ie,re;q.parameters={...q.parameters,docs:{...(oe=q.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(re=(ie=q.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var se,ce,le;P.parameters={...P.parameters,docs:{...(se=P.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(le=(ce=P.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var me,de,ue;H.parameters={...H.parameters,docs:{...(me=H.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ue=(de=H.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var we,pe,ve;L.parameters={...L.parameters,docs:{...(we=L.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(ve=(pe=L.parameters)==null?void 0:pe.docs)==null?void 0:ve.source}}};var ge,ye,Be;M.parameters={...M.parameters,docs:{...(ge=M.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(Be=(ye=M.parameters)==null?void 0:ye.docs)==null?void 0:Be.source}}};var xe,Re,Ee;G.parameters={...G.parameters,docs:{...(xe=G.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Ee=(Re=G.parameters)==null?void 0:Re.docs)==null?void 0:Ee.source}}};var Te,he,De;V.parameters={...V.parameters,docs:{...(Te=V.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(De=(he=V.parameters)==null?void 0:he.docs)==null?void 0:De.source}}};var Ie,fe,be;U.parameters={...U.parameters,docs:{...(Ie=U.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
    await expect(tela.queryByText(/Arquivo enviado/)).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(be=(fe=U.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var Se,Ae,Ce;j.parameters={...j.parameters,docs:{...(Se=j.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Ce=(Ae=j.parameters)==null?void 0:Ae.docs)==null?void 0:Ce.source}}};var Oe,ke,_e;Q.parameters={...Q.parameters,docs:{...(Oe=Q.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(_e=(ke=Q.parameters)==null?void 0:ke.docs)==null?void 0:_e.source}}};var Ne,Fe,qe;z.parameters={...z.parameters,docs:{...(Ne=z.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(qe=(Fe=z.parameters)==null?void 0:Fe.docs)==null?void 0:qe.source}}};var Pe,He,Le;J.parameters={...J.parameters,docs:{...(Pe=J.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Le=(He=J.parameters)==null?void 0:He.docs)==null?void 0:Le.source}}};var Me,Ge,Ve;W.parameters={...W.parameters,docs:{...(Me=W.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
    const novo = await tela.findByRole("dialog", {
      name: "Novo campo do formulário"
    });
    await digitar(within(novo).getByRole("textbox", {
      name: /^id \\(a-z, 0-9, _\\)/
    }), ID_DE_CAMPO_SEM_PERGUNTA);
    await userEvent.click(within(novo).getByRole("button", {
      name: "Concluir"
    }));
    await semGaveta(tela);
    await userEvent.click(salvar);
    await expect(await alertaDoTopo(canvasElement)).toHaveTextContent("Revise a aba Fila de espera. Corrija os campos marcados antes de salvar.");
    const marcada = tela.getByRole("button", {
      name: /Campo sem pergunta.*\\(com erro\\)/
    });
    await userEvent.click(marcada);
    const gaveta = await tela.findByRole("dialog", {
      name: "Campo 2 do formulário"
    });
    await expect(within(gaveta).getByText("Informe a pergunta ou remova o campo.")).toBeInTheDocument();
    await userEvent.click(within(gaveta).getByRole("button", {
      name: "Concluir"
    }));
    await semGaveta(tela);
    await semRotaSemFixture();
  }
}`,...(Ve=(Ge=W.parameters)==null?void 0:Ge.docs)==null?void 0:Ve.source}}};var Ue,je,Qe;Z.parameters={...Z.parameters,docs:{...(Ue=Z.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  name: "Questionário: item em gaveta",
  ...COM_QUESTIONARIO,
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = await abaQuestionario(canvasElement);
    await step("a linha compacta abre a gaveta do item, sem expandir inline", async () => {
      await expect(tela.queryByRole("textbox", {
        name: "Título"
      })).not.toBeInTheDocument();
      for (const linha of linhasDoQuestionario(canvasElement)) {
        await expect(linha.getBoundingClientRect().height).toBeGreaterThanOrEqual(ALVO_MINIMO);
      }
      await userEvent.click(linhasDoQuestionario(canvasElement)[0]);
      const gaveta = await tela.findByRole("dialog", {
        name: "Item 1 do questionário"
      });
      await expect(gaveta).toHaveClass("op-gaveta");
      await expect(within(gaveta).getByRole("button", {
        name: /Anterior/
      })).toBeDisabled();
      await waitFor(() => expect(canvasElement.ownerDocument.activeElement).toHaveTextContent("Item 1 do questionário"));
    });
    await step("Próxima troca o item sem fechar e a edição aparece na linha", async () => {
      const gaveta = tela.getByRole("dialog");
      await userEvent.click(within(gaveta).getByRole("button", {
        name: /Próxima/
      }));
      const segunda = await tela.findByRole("dialog", {
        name: "Item 2 do questionário"
      });
      await expect(within(segunda).getByText("2 de 3")).toBeInTheDocument();
      await expect(within(segunda).getAllByRole("checkbox", {
        name: "Conta como conforme"
      })).toHaveLength(3);
      const titulo = within(segunda).getByRole("textbox", {
        name: "Título"
      });
      await userEvent.clear(titulo);
      await digitar(titulo, TITULO_EDITADO_NA_GAVETA);
      await userEvent.click(within(segunda).getByRole("button", {
        name: "Concluir"
      }));
      await semGaveta(tela);
      await expect(linhasDoQuestionario(canvasElement)[1]).toHaveTextContent(TITULO_EDITADO_NA_GAVETA);
    });
    await step("item novo abre no primeiro campo e some se fechar vazio", async () => {
      await userEvent.click(tela.getByRole("button", {
        name: "+ Adicionar item"
      }));
      const nova = await tela.findByRole("dialog", {
        name: "Novo item do questionário"
      });
      await waitFor(() => expect(canvasElement.ownerDocument.activeElement).toBe(within(nova).getByRole("textbox", {
        name: "Título"
      })));
      await userEvent.keyboard("{Escape}");
      await semGaveta(tela);
      await expect(linhasDoQuestionario(canvasElement)).toHaveLength(3);
    });
    await step("Remover item fecha e tira a linha, sem confirmação", async () => {
      await userEvent.click(linhasDoQuestionario(canvasElement)[2]);
      const terceira = await tela.findByRole("dialog", {
        name: "Item 3 do questionário"
      });
      await userEvent.click(within(terceira).getByRole("button", {
        name: "Remover item"
      }));
      await semGaveta(tela);
      await expect(linhasDoQuestionario(canvasElement)).toHaveLength(2);
    });
    await semRotaSemFixture();
  }
}`,...(Qe=(je=Z.parameters)==null?void 0:je.docs)==null?void 0:Qe.source}}};var ze,Je,We;K.parameters={...K.parameters,docs:{...(ze=K.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  name: "Questionário: gaveta do item, medidas (folha até 640)",
  ...COM_QUESTIONARIO,
  parameters: {
    ...COM_QUESTIONARIO.parameters,
    viewport: {
      options: VIEWPORT_375
    }
  },
  globals: {
    viewport: {
      value: "horkos375",
      isRotated: false
    }
  },
  play: async ({
    canvasElement
  }) => {
    const tela = await abaQuestionario(canvasElement);
    await userEvent.click(linhasDoQuestionario(canvasElement)[1]);
    const gaveta = await tela.findByRole("dialog", {
      name: "Item 2 do questionário"
    });
    const janela = canvasElement.ownerDocument.defaultView as Window;
    if (janela.innerWidth <= LARGURA_FOLHA) await expect(gaveta).toHaveClass("hk-modal--folha");
    await medirGavetaDoItem(gaveta);
    const opcoes = within(gaveta).getAllByRole("checkbox", {
      name: "Conta como conforme"
    });
    const ultimo = opcoes[opcoes.length - 1].closest(".dep-item-opcao") as HTMLElement;
    ultimo.scrollIntoView({
      block: "nearest"
    });
    const rodape = gaveta.querySelector(".dep-item-gaveta-rodape") as HTMLElement;
    await waitFor(() => expect(ultimo.getBoundingClientRect().bottom).toBeLessThanOrEqual(rodape.getBoundingClientRect().top + 0.5));
    await userEvent.click(within(gaveta).getByRole("button", {
      name: "Concluir"
    }));
    await semGaveta(tela);
    await semRotaSemFixture();
  }
}`,...(We=(Je=K.parameters)==null?void 0:Je.docs)==null?void 0:We.source}}};var Ze,Ke,Xe;X.parameters={...X.parameters,docs:{...(Ze=X.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  name: "Questionário: fechar a gaveta mantém o que foi digitado",
  ...COM_QUESTIONARIO,
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = await abaQuestionario(canvasElement);
    await step("fechar pelo X mantém o texto e a página ainda pergunta antes de sair", async () => {
      await userEvent.click(linhasDoQuestionario(canvasElement)[0]);
      const gaveta = await tela.findByRole("dialog", {
        name: "Item 1 do questionário"
      });
      const instrucao = within(gaveta).getByRole("textbox", {
        name: /Instrução para a análise/
      });
      await userEvent.type(instrucao, " e data de nascimento");
      await userEvent.click(within(gaveta).getByRole("button", {
        name: "Fechar"
      }));
      await semGaveta(tela);
      await expect(tela.queryByRole("alertdialog")).not.toBeInTheDocument();
      await userEvent.click(linhasDoQuestionario(canvasElement)[0]);
      const reaberta = await tela.findByRole("dialog", {
        name: "Item 1 do questionário"
      });
      await expect(within(reaberta).getByRole("textbox", {
        name: /Instrução para a análise/
      })).toHaveValue("Nome completo e CPF ditos pelo próprio cliente e data de nascimento");
      await userEvent.click(within(reaberta).getByRole("button", {
        name: "Concluir"
      }));
      await semGaveta(tela);
    });
    await step("sair do editor pergunta \\"Sair sem salvar?\\"", async () => {
      await userEvent.click(tela.getByRole("button", {
        name: "Cancelar"
      }));
      await expect(await tela.findByText("Sair sem salvar?")).toBeInTheDocument();
      await userEvent.click(tela.getByRole("button", {
        name: "Continuar editando"
      }));
    });
    await semRotaSemFixture();
  }
}`,...(Xe=(Ke=X.parameters)==null?void 0:Ke.docs)==null?void 0:Xe.source}}};var Ye,$e,at;Y.parameters={...Y.parameters,docs:{...(Ye=Y.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  name: "Formulário do cliente: campo em gaveta",
  ...COM_FILA,
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = await abaFila(canvasElement);
    const campos = () => linhasDaLista(canvasElement, "Campos do formulário");
    await step("a linha compacta tem 44px e abre a gaveta do campo", async () => {
      for (const linha of campos()) await expect(linha.getBoundingClientRect().height).toBeGreaterThanOrEqual(ALVO_MINIMO);
      await userEvent.click(campos()[0]);
      const gaveta = await tela.findByRole("dialog", {
        name: "Campo 1 do formulário"
      });
      await expect(gaveta).toHaveClass("op-gaveta");
      await expect(within(gaveta).getByRole("checkbox", {
        name: "O cliente precisa responder"
      })).toBeChecked();
      await expect(within(gaveta).queryByRole("checkbox", {
        name: "O cliente pode editar mesmo assim"
      })).not.toBeInTheDocument();
      await medirGavetaDoItem(gaveta);
    });
    await step("Próxima leva ao campo com origem, sem fechar", async () => {
      const gaveta = tela.getByRole("dialog");
      await userEvent.click(within(gaveta).getByRole("button", {
        name: /Próxima/
      }));
      const segundo = await tela.findByRole("dialog", {
        name: "Campo 2 do formulário"
      });
      await expect(within(segundo).getByText("2 de 3")).toBeInTheDocument();
      const origem = within(segundo).getByRole("button", {
        name: /Preencher sozinho com/
      });
      await expect(origem).toHaveTextContent(ORIGEM_DO_CAMPO.rotulo);
      await expect(within(segundo).getByRole("checkbox", {
        name: "O cliente pode editar mesmo assim"
      })).toBeInTheDocument();
      await userEvent.click(origem);
      await userEvent.click(await within(segundo).findByRole("button", {
        name: "nenhuma (cliente preenche)"
      }));
      await waitFor(() => expect(within(segundo).queryByRole("checkbox", {
        name: "O cliente pode editar mesmo assim"
      })).not.toBeInTheDocument());
      await userEvent.click(within(segundo).getByRole("button", {
        name: /Próxima/
      }));
      const terceiro = await tela.findByRole("dialog", {
        name: "Campo 3 do formulário"
      });
      await expect(within(terceiro).getByRole("button", {
        name: /Próxima/
      })).toBeDisabled();
      const pergunta = within(terceiro).getByRole("textbox", {
        name: "Pergunta"
      });
      await userEvent.clear(pergunta);
      await digitar(pergunta, PERGUNTA_EDITADA_NA_GAVETA);
      await userEvent.click(within(terceiro).getByRole("button", {
        name: "Concluir"
      }));
      await semGaveta(tela);
      await expect(campos()[2]).toHaveTextContent(PERGUNTA_EDITADA_NA_GAVETA);
    });
    await step("Remover campo fecha e tira a linha, sem confirmação", async () => {
      await userEvent.click(campos()[0]);
      const gaveta = await tela.findByRole("dialog", {
        name: "Campo 1 do formulário"
      });
      await userEvent.click(within(gaveta).getByRole("button", {
        name: "Remover campo"
      }));
      await semGaveta(tela);
      await expect(tela.queryByRole("alertdialog")).not.toBeInTheDocument();
      await expect(campos()).toHaveLength(2);
    });
    await semRotaSemFixture();
  }
}`,...(at=($e=Y.parameters)==null?void 0:$e.docs)==null?void 0:at.source}}};var et,tt,nt;$.parameters={...$.parameters,docs:{...(et=$.parameters)==null?void 0:et.docs,source:{originalSource:`{
  name: "Mídias da fila: gaveta curta",
  ...COM_FILA,
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = await abaFila(canvasElement);
    const midias = () => linhasDaLista(canvasElement, "Mídias introdutórias");
    await step("mídia de arquivo mostra só o título e a pílula, sem navegação", async () => {
      await expect(midias()[1].querySelector(".hk-lista-pilula")).toHaveTextContent("Arquivo enviado");
      await userEvent.click(midias()[1]);
      const gaveta = await tela.findByRole("dialog", {
        name: "Mídia 2"
      });
      await expect(within(gaveta).queryByRole("navigation")).not.toBeInTheDocument();
      await expect(within(gaveta).getAllByRole("textbox")).toHaveLength(1);
      await waitFor(() => expect(within(gaveta).getByText("Arquivo enviado · como-funciona.mp4")).toBeVisible(), {
        timeout: ESPERA_ANIMACAO_MS
      });
      await waitFor(() => expect(within(gaveta).getByText("O arquivo não pode ser trocado. Remova e envie outro.")).toBeVisible(), {
        timeout: ESPERA_ANIMACAO_MS
      });
      if (larguraDaJanela(canvasElement) <= LARGURA_FOLHA) await expect(gaveta).toHaveClass("hk-modal--folha");
      await medirGavetaDoItem(gaveta);
      await userEvent.click(within(gaveta).getByRole("button", {
        name: "Concluir"
      }));
      await semGaveta(tela);
    });
    await step("link novo normaliza HTTPS:// ao sair do campo e entra na lista", async () => {
      await userEvent.click(tela.getByRole("button", {
        name: "+ Adicionar link"
      }));
      const gaveta = await tela.findByRole("dialog", {
        name: "Novo link de mídia"
      });
      const link = within(gaveta).getByRole("textbox", {
        name: /^Link/
      });
      await digitar(link, LINK_COM_ESQUEMA_MAIUSCULO);
      await userEvent.tab();
      await expect(link).toHaveValue(LINK_COM_ESQUEMA_MAIUSCULO.replace("HTTPS://", "https://"));
      await userEvent.click(within(gaveta).getByRole("button", {
        name: "Concluir"
      }));
      await semGaveta(tela);
      await expect(midias()).toHaveLength(3);
    });
    await step("Remover mídia fecha e tira a linha", async () => {
      await userEvent.click(midias()[0]);
      const gaveta = await tela.findByRole("dialog", {
        name: "Mídia 1"
      });
      await userEvent.click(within(gaveta).getByRole("button", {
        name: "Remover mídia"
      }));
      await semGaveta(tela);
      await expect(midias()).toHaveLength(2);
    });
    await semRotaSemFixture();
  }
}`,...(nt=(tt=$.parameters)==null?void 0:tt.docs)==null?void 0:nt.source}}};export{V as AtendentesNaoCarregados,I as AvisoDeSaida,W as CampoMeioPreenchido,b as Carregando,P as Desativar,H as DesativarErro,D as Editor,O as ErroAoSalvar,M as ErroDaApiTraduzido,A as ErroDoServidor,G as ErroServidorSemEco,X as FecharGavetaMantemItem,Y as GavetaFormulario,$ as GavetaMidia,Z as GavetaQuestionario,K as GavetaQuestionario375,J as HorarioInvertido,Q as IdentificadorInvalido,q as ListaCarregando,N as ListaErroServidor,F as ListaSemPermissao,_ as ListaSemRede,C as NaoEncontrado,f as Novo,h as Padrao,z as PrazoForaDaFaixa,L as ReativarErro,j as SemPermissaoEditor,S as SemRede,U as UploadSemRede,k as Vazio,on as __namedExportsOrder,nn as default};
