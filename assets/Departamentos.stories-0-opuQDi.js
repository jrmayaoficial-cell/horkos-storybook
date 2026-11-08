import{W as k}from"./ShellJornada-DOz9uM2T.js";import{C as c,m as Fa}from"./jornadaGestao-CVB1H616.js";import{t as i,d as Na,i as La,s}from"./jornadaOperar-CCnVgK82.js";import"./jsx-runtime-CEo06wvt.js";import"./iframe-DVaGrerc.js";import"./preload-helper-D6kgxu3v.js";import"./dadosShell-BpcFcrpX.js";import"./index-BEALldq7.js";import"./index-DfpIZROc.js";import"./v2-CBuWZhP8.js";import"./index-Ctu9A9u4.js";import"./api-CwvJBfED.js";import"./index-c6P9_18s.js";import"./marca-JlK6OYD8.js";import"./carregando-CO0SwyOL.js";import"./celulas-Ddd5ld11.js";/* empty css              */import"./CartaoKpi-CPSdukY9.js";import"./MiniBarras-D-NVWNi3.js";import"./cores-D-iLqYVd.js";import"./Login-Cope_TMD.js";import"./etapas-CjwTh5VZ.js";/* empty css                */import"./ShellGestao-CCR2mtks.js";const _a={fuso:"America/Sao_Paulo",dias:{seg:[{inicio:"09:00",fim:"18:00"}],ter:[{inicio:"09:00",fim:"18:00"}],qua:[{inicio:"09:00",fim:"18:00"}],qui:[{inicio:"09:00",fim:"18:00"}],sex:[{inicio:"09:00",fim:"18:00"}]},mensagem_fora:null},qa={exibir_posicao_fila:!0,fila_timeout_aceite_s:30,midias:[],formulario:[],questionario:[],departamentos_permitidos:null};function F(n,a,t,r){return{id:n,nome:a,ativo:t,atendentes:r,setor:"Consignado",slug:n.replace(/^dep-/,""),empresa_id:k.id,empresa_nome:k.nome,criado_em:"2026-01-10T12:00:00Z",horarios:_a,config:qa}}const Pa=[F("dep-inss","INSS · Consignado",!0,[{id:101,nome:"Rafael Souza"},{id:102,nome:"Camila Rocha"}]),F("dep-fgts","FGTS · Saque-aniversário",!1,[{id:103,nome:"Diego Alves"}])],{expect:e,userEvent:o,waitFor:l,within:d}=__STORYBOOK_MODULE_TEST__,Ha=Fa("/departamentos",'Jornada de departamentos dentro do shell: lista e editor em sete abas (Geral, Horários, Atendentes, Fila de espera, Plano de fundo, Questionário, Transferência). Com a carga do editor falhando o formulário não aparece (antes ele abria vazio e o Salvar criava um departamento novo); departamento que não existe mostra "não encontrado" com Voltar; erro ao salvar aparece no topo, com alerta. Sair do editor com alteração não salva (Voltar, Cancelar, menu) pergunta "Sair sem salvar?" citando o departamento; abrir e sair sem mexer, ou salvar e sair, não pergunta.'),m="GET /v1/departamentos",u="/departamentos/dep-inss",ka="PUT /v1/departamentos/:id",N="Mais ações de INSS · Consignado",Ga=640;async function C(n,a,t){const[r]=await n.findAllByRole("button",{name:a});await o.click(r),await o.click(await n.findByRole("menuitem",{name:t}))}const de={title:"Jornadas/Departamentos",...Ha},p={name:"Padrão",play:async({canvasElement:n})=>{const a=i(n);await e(await a.findByRole("region",{name:"Departamentos"})).toBeInTheDocument(),await e((await a.findAllByText("INSS · Consignado")).length).toBeGreaterThan(0),await s()}},w={name:"Editor: sete abas",args:{rotaInicial:u},play:async({canvasElement:n,step:a})=>{const t=i(n);await e(await t.findByRole("heading",{name:"INSS · Consignado",level:1})).toBeInTheDocument();const r=d(t.getByRole("tablist",{name:"Seções do departamento"}));await e(r.getAllByRole("tab")).toHaveLength(7),await a("Horários: campos de hora com nome e remover intervalo",async()=>{await o.click(r.getByRole("tab",{name:"Horários"})),await e(t.getByLabelText("Início do intervalo 1, Sábado")).toBeInTheDocument(),await o.click(t.getByRole("button",{name:"Remover intervalo 1 de Sábado"})),await e(t.queryByLabelText("Início do intervalo 1, Sábado")).not.toBeInTheDocument(),await o.click(t.getByRole("button",{name:"Abrir o atendimento de Sábado"})),await e(t.getByLabelText("Fim do intervalo 1, Sábado")).toBeInTheDocument()}),await a("Atendentes: contagem na aba",async()=>{await o.click(r.getByRole("tab",{name:/^Atendentes \(3\)/})),await e(await t.findByRole("textbox",{name:"Buscar atendente por nome"})).toBeInTheDocument()});for(const O of[/^Fila de espera/,/^Plano de fundo/,/^Questionário/,/^Transferência/,/^Geral/])await o.click(r.getByRole("tab",{name:O})),await e(r.getByRole("tab",{name:O})).toHaveAttribute("aria-selected","true");await a("Salvar volta à lista",async()=>{await o.click(t.getByRole("button",{name:"Salvar alterações"})),await e(await t.findByRole("region",{name:"Departamentos"})).toBeInTheDocument()}),await s()}},B={name:"Editor: aviso de saída",args:{rotaInicial:u},play:async({canvasElement:n,step:a})=>{const t=i(n);await e(await t.findByRole("heading",{name:"INSS · Consignado",level:1})).toBeInTheDocument(),await a("Abrir e voltar sem mexer sai direto",async()=>{await o.click(t.getByRole("link",{name:"Voltar para Departamentos"})),await e(await t.findByRole("region",{name:"Departamentos"})).toBeInTheDocument(),await e(t.queryByText("Sair sem salvar?")).not.toBeInTheDocument()}),await a("Mudar o nome e Cancelar pergunta, citando o departamento",async()=>{await o.click((await t.findAllByRole("link",{name:/INSS · Consignado/}))[0]),await e(await t.findByRole("heading",{name:"INSS · Consignado",level:1})).toBeInTheDocument(),await Na(t.getByRole("textbox",{name:/Nome/}),"INSS · Benefícios"),await o.click(t.getByRole("button",{name:"Cancelar"}));const r=d(await t.findByRole("dialog",{name:"Sair sem salvar?"}));await e(r.getByText(/alterações não salvas em Departamento “INSS · Consignado”/)).toBeInTheDocument(),await o.click(r.getByRole("button",{name:"Continuar editando"})),await l(()=>e(t.queryByRole("dialog",{name:"Sair sem salvar?"})).not.toBeInTheDocument()),await e(t.getByRole("textbox",{name:/Nome/})).toHaveValue("INSS · Benefícios")}),await a("Sair pelo menu (gaveta no celular) pergunta e o foco fica no aviso",async()=>{await La(n,"Departamentos");const r=await t.findByRole("dialog",{name:"Sair sem salvar?"});await l(()=>e(t.queryByRole("dialog",{name:"Menu"})).not.toBeInTheDocument()),await l(()=>e(r).toContainElement(n.ownerDocument.activeElement)),await e(n.ownerDocument.activeElement).toHaveTextContent("Continuar editando"),await o.click(d(r).getByRole("button",{name:"Continuar editando"})),await l(()=>e(t.queryByRole("dialog",{name:"Sair sem salvar?"})).not.toBeInTheDocument()),await e(t.getByRole("textbox",{name:/Nome/})).toHaveValue("INSS · Benefícios")}),await a("Salvar e sair não pergunta",async()=>{await o.click(t.getByRole("button",{name:"Salvar alterações"})),await e(await t.findByRole("region",{name:"Departamentos"})).toBeInTheDocument(),await e(t.queryByText("Sair sem salvar?")).not.toBeInTheDocument()}),await s()}},y={name:"Editor: novo departamento",args:{rotaInicial:"/departamentos/novo"},play:async({canvasElement:n,step:a})=>{const t=i(n);await e(await t.findByRole("heading",{name:"Novo departamento",level:1})).toBeInTheDocument(),await Na(t.getByRole("textbox",{name:/Nome/}),"BRB · Banco de Brasília"),await a("fundo obrigatório sem padrão marca a aba com erro",async()=>{await o.click(t.getByRole("tab",{name:"Plano de fundo"})),await o.click(t.getByRole("checkbox",{name:/Fundo obrigatório/})),await o.click(t.getByRole("button",{name:"Criar departamento"})),await e(await t.findByRole("alert")).toHaveTextContent(/Fundo obrigatório precisa de um padrão/),await e(t.getByRole("tab",{name:"Plano de fundo (com erro)"})).toHaveAttribute("aria-selected","true")}),await a("corrigido, cria e volta à lista",async()=>{await o.click(t.getByRole("checkbox",{name:/Fundo obrigatório/})),await o.click(t.getByRole("button",{name:"Criar departamento"})),await e((await t.findAllByText("BRB · Banco de Brasília")).length).toBeGreaterThan(0)}),await s()}},v={args:{rotaInicial:u},parameters:{jornada:{...c,pendurar:[m]}},play:async({canvasElement:n})=>{const a=i(n);await e(await a.findByText(/Carregando o departamento/)).toBeInTheDocument(),await e(a.queryByRole("button",{name:/Salvar|Criar departamento/})).not.toBeInTheDocument()}},x={name:"Erro de rede: sem formulário",args:{rotaInicial:u},parameters:{jornada:{...c,semRede:[m]}},play:async({canvasElement:n})=>{const a=i(n);await e(await a.findByText(/Não foi possível carregar o departamento/)).toBeInTheDocument(),await e(a.queryByRole("button",{name:/Salvar|Criar departamento/})).not.toBeInTheDocument(),await e(a.queryByRole("tablist")).not.toBeInTheDocument(),await o.click(a.getByRole("button",{name:"Tentar de novo"})),await e(await a.findByText(/Não foi possível carregar o departamento/)).toBeInTheDocument(),await s()}},g={name:"Erro do servidor",args:{rotaInicial:u},parameters:{jornada:{...c,falhar:[m]}},play:async({canvasElement:n})=>{const a=i(n);await e(await a.findByText(/O servidor teve um problema ao carregar o departamento/)).toBeInTheDocument(),await e(a.queryByText(/api falsa/)).not.toBeInTheDocument(),await e(a.getByRole("link",{name:"Voltar para Departamentos"})).toBeInTheDocument(),await s()}},T={name:"Erro: não encontrado",args:{rotaInicial:"/departamentos/dep-inexistente"},play:async({canvasElement:n})=>{const a=i(n);await e(await a.findByText("Departamento não encontrado.")).toBeInTheDocument(),await e(a.queryByRole("button",{name:"Tentar de novo"})).not.toBeInTheDocument(),await o.click(a.getByRole("button",{name:"Voltar à lista"})),await e(await a.findByRole("region",{name:"Departamentos"})).toBeInTheDocument(),await s()}},D={name:"Erro ao salvar: alerta no topo",args:{rotaInicial:u},parameters:{jornada:{...c,respostas:{"PUT /v1/departamentos/:id":{status:409,corpo:{erro:"Já existe um departamento com este identificador."}}}}},play:async({canvasElement:n})=>{const a=i(n);await o.click(await a.findByRole("button",{name:"Salvar alterações"}));const t=await a.findByRole("alert");await e(t).toHaveTextContent("Já existe um departamento com este identificador."),await l(()=>e(t.compareDocumentPosition(a.getByRole("tablist"))&Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()),await l(()=>e(t.ownerDocument.activeElement).toBe(t.closest("[tabindex='-1']"))),await s()}},R={name:"Vazio: nenhum departamento",parameters:{jornada:{...c,respostas:{[m]:{status:200,corpo:[]}}}},play:async({canvasElement:n})=>{const a=i(n);await e(await a.findByText("Nenhum departamento ainda")).toBeInTheDocument(),await s()}},E={name:"Lista: sem rede",parameters:{jornada:{...c,semRede:[m]}},play:async({canvasElement:n})=>{const a=i(n);await e(await a.findByText("Não foi possível carregar os departamentos. Verifique a conexão e tente de novo.")).toBeInTheDocument(),await o.click(a.getByRole("button",{name:"Tentar de novo"})),await e(await a.findByText(/Não foi possível carregar os departamentos/)).toBeInTheDocument(),await s()}},I={name:"Lista: erro do servidor",parameters:{jornada:{...c,falhar:[m]}},play:async({canvasElement:n})=>{const a=i(n);await e(await a.findByText("O servidor teve um problema ao carregar os departamentos. Tente de novo em instantes.")).toBeInTheDocument(),await e(a.getByRole("button",{name:"Tentar de novo"})).toBeInTheDocument(),await e(a.queryByText(/HTTP|500|api falsa/)).not.toBeInTheDocument(),await s()}},S={name:"Lista: sem permissão",parameters:{jornada:{...c,respostas:{[m]:{status:403,corpo:{erro:"perfil sem acesso"}}}}},play:async({canvasElement:n})=>{const a=i(n),t=d(await a.findByRole("region",{name:"Departamentos"}));await e(await t.findByText("Seu usuário não tem permissão para ver os departamentos.")).toBeInTheDocument(),await e(a.queryByRole("button",{name:"Tentar de novo"})).not.toBeInTheDocument(),await e(a.queryByRole("button",{name:"Novo departamento"})).not.toBeInTheDocument(),await e(a.queryByText(/Perfil analista/)).not.toBeInTheDocument(),await s()}},f={name:"Lista: carregando",parameters:{jornada:{...c,pendurar:[m]}},play:async({canvasElement:n})=>{const a=i(n);await e(await a.findByText("Carregando departamentos…")).toBeInTheDocument(),await e(a.getByText("Carregando…")).toBeInTheDocument(),await e(a.queryByRole("button",{name:"Tentar de novo"})).not.toBeInTheDocument()}},h={name:"Desativar: gaveta de confirmação",play:async({canvasElement:n,step:a})=>{const t=i(n);await a("Cancelar tem o foco e não desativa",async()=>{await C(t,N,"Desativar");const r=await t.findByRole("dialog",{name:"Desativar o departamento “INSS · Consignado”?"});await e(r).toHaveClass("op-gaveta"),n.ownerDocument.defaultView.innerWidth<=Ga&&await e(r).toHaveClass("hk-modal--folha"),await e(d(r).getByText(/Os 3 atendentes vinculados deixam de receber sessões dele\./)).toBeInTheDocument(),await l(()=>e(n.ownerDocument.activeElement).toHaveTextContent("Cancelar")),await o.click(d(r).getByRole("button",{name:"Cancelar"})),await l(()=>e(t.queryByRole("dialog")).not.toBeInTheDocument())}),await a("Desativar fecha, recarrega e avisa",async()=>{await C(t,N,"Desativar");const r=await t.findByRole("dialog",{name:/Desativar o departamento/});await o.click(d(r).getByRole("button",{name:"Desativar"})),await e(await t.findByText("Departamento desativado.")).toBeInTheDocument(),await l(()=>e(t.queryByRole("dialog")).not.toBeInTheDocument()),await e((await t.findAllByText("Desativado")).length).toBeGreaterThan(0)}),await s()}},b={name:"Desativar: erro do servidor na gaveta",parameters:{jornada:{...c,respostas:{[ka]:{status:500,corpo:{erro:"falhou ao gravar"}}}}},play:async({canvasElement:n})=>{const a=i(n);await C(a,N,"Desativar");const t=d(await a.findByRole("dialog",{name:/Desativar o departamento/}));await o.click(t.getByRole("button",{name:"Desativar"})),await e(await t.findByText("O servidor teve um problema ao desativar o departamento. Tente de novo em instantes.")).toBeInTheDocument(),await e(t.queryByText(/falhou ao gravar/)).not.toBeInTheDocument(),await e(a.getByRole("dialog")).toBeInTheDocument(),await s()}},A={name:"Reativar: erro acima do cartão",parameters:{jornada:{...c,respostas:{[m]:{status:200,corpo:Pa},[ka]:{status:500,corpo:{erro:"falhou ao gravar"}}}}},play:async({canvasElement:n})=>{const a=i(n);await C(a,"Mais ações de FGTS · Saque-aniversário","Reativar");const t=await a.findByRole("alert");await e(t).toHaveTextContent("O servidor teve um problema ao reativar o departamento. Tente de novo em instantes."),await e(t.compareDocumentPosition(a.getByRole("region",{name:"Departamentos"}))&Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy(),await e(a.queryByRole("dialog")).not.toBeInTheDocument(),await s()}},ue=["Padrao","Editor","AvisoDeSaida","Novo","Carregando","SemRede","ErroDoServidor","NaoEncontrado","ErroAoSalvar","Vazio","ListaSemRede","ListaErroServidor","ListaSemPermissao","ListaCarregando","Desativar","DesativarErro","ReativarErro"];var L,_,q;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(q=(_=p.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var P,H,G;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(G=(H=w.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var M,j,V;B.parameters={...B.parameters,docs:{...(M=B.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(V=(j=B.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var J,U,W;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(W=(U=y.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var z,Q,K;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(K=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:K.source}}};var Y,Z,X;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(X=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:X.source}}};var $,aa,ea;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(ea=(aa=g.parameters)==null?void 0:aa.docs)==null?void 0:ea.source}}};var ta,na,oa;T.parameters={...T.parameters,docs:{...(ta=T.parameters)==null?void 0:ta.docs,source:{originalSource:`{
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
}`,...(oa=(na=T.parameters)==null?void 0:na.docs)==null?void 0:oa.source}}};var ra,ia,sa;D.parameters={...D.parameters,docs:{...(ra=D.parameters)==null?void 0:ra.docs,source:{originalSource:`{
  name: "Erro ao salvar: alerta no topo",
  args: {
    rotaInicial: EDITOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        "PUT /v1/departamentos/:id": {
          status: 409,
          corpo: {
            erro: "Já existe um departamento com este identificador."
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
      name: "Salvar alterações"
    }));
    const alerta = await tela.findByRole("alert");
    await expect(alerta).toHaveTextContent("Já existe um departamento com este identificador.");
    await waitFor(() => expect(alerta.compareDocumentPosition(tela.getByRole("tablist")) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy());
    await waitFor(() => expect(alerta.ownerDocument.activeElement).toBe(alerta.closest("[tabindex='-1']")));
    await semRotaSemFixture();
  }
}`,...(sa=(ia=D.parameters)==null?void 0:ia.docs)==null?void 0:sa.source}}};var ca,la,ma;R.parameters={...R.parameters,docs:{...(ca=R.parameters)==null?void 0:ca.docs,source:{originalSource:`{
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
}`,...(ma=(la=R.parameters)==null?void 0:la.docs)==null?void 0:ma.source}}};var da,ua,pa;E.parameters={...E.parameters,docs:{...(da=E.parameters)==null?void 0:da.docs,source:{originalSource:`{
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
}`,...(pa=(ua=E.parameters)==null?void 0:ua.docs)==null?void 0:pa.source}}};var wa,Ba,ya;I.parameters={...I.parameters,docs:{...(wa=I.parameters)==null?void 0:wa.docs,source:{originalSource:`{
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
}`,...(ya=(Ba=I.parameters)==null?void 0:Ba.docs)==null?void 0:ya.source}}};var va,xa,ga;S.parameters={...S.parameters,docs:{...(va=S.parameters)==null?void 0:va.docs,source:{originalSource:`{
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
}`,...(ga=(xa=S.parameters)==null?void 0:xa.docs)==null?void 0:ga.source}}};var Ta,Da,Ra;f.parameters={...f.parameters,docs:{...(Ta=f.parameters)==null?void 0:Ta.docs,source:{originalSource:`{
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
}`,...(Ra=(Da=f.parameters)==null?void 0:Da.docs)==null?void 0:Ra.source}}};var Ea,Ia,Sa;h.parameters={...h.parameters,docs:{...(Ea=h.parameters)==null?void 0:Ea.docs,source:{originalSource:`{
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
}`,...(Sa=(Ia=h.parameters)==null?void 0:Ia.docs)==null?void 0:Sa.source}}};var fa,ha,ba;b.parameters={...b.parameters,docs:{...(fa=b.parameters)==null?void 0:fa.docs,source:{originalSource:`{
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
}`,...(ba=(ha=b.parameters)==null?void 0:ha.docs)==null?void 0:ba.source}}};var Aa,Ca,Oa;A.parameters={...A.parameters,docs:{...(Aa=A.parameters)==null?void 0:Aa.docs,source:{originalSource:`{
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
}`,...(Oa=(Ca=A.parameters)==null?void 0:Ca.docs)==null?void 0:Oa.source}}};export{B as AvisoDeSaida,v as Carregando,h as Desativar,b as DesativarErro,w as Editor,D as ErroAoSalvar,g as ErroDoServidor,f as ListaCarregando,I as ListaErroServidor,S as ListaSemPermissao,E as ListaSemRede,T as NaoEncontrado,y as Novo,p as Padrao,A as ReativarErro,x as SemRede,R as Vazio,ue as __namedExportsOrder,de as default};
