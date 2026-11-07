import{t as i,s,d as l,m as ue}from"./jornadaOperar-KFe5MV34.js";import{P as pe,k as we,l as j,m as ye,n as Be,o as G}from"./ShellJornada-Dgh5lNwl.js";import"./jsx-runtime-LisX3rK8.js";import"./iframe-BdU_T5oy.js";import"./preload-helper-D6kgxu3v.js";import"./dadosShell-BcNk8iPy.js";import"./index-CgNm8H17.js";import"./index-Btzdtu00.js";import"./v2-CM7H6-dT.js";import"./index-CMRJCVye.js";import"./api-CwvJBfED.js";import"./index-BzbWG0gl.js";import"./marca-DxEKL4Wo.js";import"./carregando-D8G0VTz-.js";import"./celulas-Dr8LTnjB.js";/* empty css              */import"./CartaoKpi-R9o-Wt_g.js";import"./MiniBarras-D5N647Cu.js";import"./cores-D-iLqYVd.js";import"./Login-NjTeVjtw.js";import"./etapas-BWlkTKG-.js";/* empty css                */const{expect:e,userEvent:o,waitFor:d,within:m}=__STORYBOOK_MODULE_TEST__,V=ue("/atendentes/101",'Jornada do atendente dentro do shell: edição em três abas (Perfil, Horários, Departamentos), perfil de leitura e cadastro. Atendente que não existe (404) mostra "não encontrado" com Voltar à lista; sem permissão (403) explica sem oferecer tentar; falha de rede ou do servidor mostra o erro com Tentar de novo.',null),c={cenario:"padrao"},u="GET /v1/atendentes/:id",Ve={title:"Jornadas/Atendente",...V,parameters:{...V.parameters,jornada:c}},p={name:"Padrão",play:async({canvasElement:t,step:a})=>{const n=i(t);await e(await n.findByRole("heading",{name:"Rafael Moura"})).toBeInTheDocument();const r=m(n.getByRole("tablist",{name:"Seções do atendente"}));await a("Horários mostra os dias da semana",async()=>{await o.click(r.getByRole("tab",{name:"Horários"})),await e(r.getByRole("tab",{name:"Horários"})).toHaveAttribute("aria-selected","true"),await e(await n.findByLabelText("Início, Segundas")).toBeInTheDocument()}),await a("Departamentos lista os vínculos",async()=>{await o.click(r.getByRole("tab",{name:"Departamentos"})),await e(await n.findByText("Departamentos vinculados")).toBeInTheDocument()}),await a("Perfil volta com a foto ou as iniciais",async()=>{await o.click(r.getByRole("tab",{name:"Perfil"})),await e(await n.findByRole("button",{name:"Salvar Alterações"})).toBeInTheDocument()}),await a("o ← volta para a lista",async()=>{await o.click(n.getByRole("link",{name:"Voltar para Atendentes"})),await e(await n.findByRole("region",{name:"Cadastro de atendentes"})).toBeInTheDocument()}),await s()}},w={args:{rotaInicial:"/atendentes/101/perfil"},play:async({canvasElement:t})=>{const a=i(t);await e(await a.findByRole("heading",{name:"Perfil do atendente"})).toBeInTheDocument(),await o.click(await a.findByRole("link",{name:"Editar vínculos"})),await e(await a.findByRole("heading",{name:"Rafael Moura"})).toBeInTheDocument(),await s()}},y={args:{rotaInicial:"/atendentes/novo"},play:async({canvasElement:t})=>{const a=i(t);await e(await a.findByRole("button",{name:"Criar atendente"})).toBeInTheDocument(),await e(a.getByRole("button",{name:"Horários"})).toBeDisabled(),await e(a.getByRole("button",{name:"Departamentos"})).toBeDisabled(),await o.click(a.getByRole("button",{name:"Perfil"})),await o.click(a.getByRole("button",{name:"Cancelar"})),await e(await a.findByRole("region",{name:"Cadastro de atendentes"})).toBeInTheDocument(),await s()}},B={parameters:{jornada:{...c,pendurar:[u]}},play:async({canvasElement:t})=>{const a=i(t);await e(await a.findByText("Carregando o atendente…")).toBeInTheDocument()}},g={name:"Vazio: sem departamentos",parameters:{jornada:{...c,respostas:{"GET /v1/departamentos":{status:200,corpo:[]}}}},play:async({canvasElement:t})=>{const a=i(t);await e(await a.findByRole("heading",{name:"Rafael Moura"})).toBeInTheDocument(),await o.click(a.getByRole("tab",{name:"Departamentos"})),await e(await a.findByText("nenhum departamento disponível")).toBeInTheDocument(),await e(a.getByText("nenhum vinculado ainda")).toBeInTheDocument(),await s()}},v={name:"Erro: não encontrado",args:{rotaInicial:"/atendentes/999"},play:async({canvasElement:t})=>{const a=i(t);await e(await a.findByText("Atendente não encontrado")).toBeInTheDocument(),await e(a.queryByRole("button",{name:"Tentar de novo"})).not.toBeInTheDocument(),await e(a.getByRole("button",{name:"Voltar à lista"})).toBeInTheDocument(),await s()}},R={name:"Erro de rede",parameters:{jornada:{...c,semRede:[u]}},play:async({canvasElement:t})=>{const a=i(t);await e(await a.findByText(/Não foi possível carregar o atendente/)).toBeInTheDocument(),await o.click(a.getByRole("button",{name:"Tentar de novo"})),await e(await a.findByText(/Não foi possível carregar o atendente/)).toBeInTheDocument(),await s()}},x={name:"Erro: sem permissão",parameters:{jornada:{...c,respostas:{[u]:{status:403,corpo:{erro:"sem permissão (api falsa)"}}}}},play:async({canvasElement:t})=>{const a=i(t);await e(await a.findByText("Seu usuário não tem permissão para ver o atendente.")).toBeInTheDocument(),await e(a.queryByRole("button",{name:"Tentar de novo"})).not.toBeInTheDocument(),await e(a.getByRole("link",{name:"Voltar para Atendentes"})).toBeInTheDocument(),await s()}},T={name:"Erro do servidor",parameters:{jornada:{...c,falhar:[u]}},play:async({canvasElement:t})=>{const a=i(t);await e(await a.findByText(/O servidor teve um problema ao carregar o atendente/)).toBeInTheDocument(),await e(a.queryByText(/api falsa/)).not.toBeInTheDocument(),await e(a.getByRole("button",{name:"Tentar de novo"})).toBeInTheDocument(),await s()}},ce="POST /v1/atendentes/:id/promover",me="POST /v1/atendentes/:id/gerar-senha",ge="POST /v1/padroes-horario";async function L(t){const a=i(t);return await e(await a.findByRole("heading",{name:"Rafael Moura"})).toBeInTheDocument(),await o.click(a.getByRole("button",{name:"Promover a usuário do painel"})),m(await a.findByRole("dialog",{name:G}))}async function le(t){const a=i(t);return await e(await a.findByRole("heading",{name:"Rafael Moura"})).toBeInTheDocument(),await o.click(a.getByRole("tab",{name:"Horários"})),await o.click(await a.findByRole("button",{name:"Novo padrão"})),m(await a.findByRole("dialog",{name:j}))}const E={name:"Promover a usuário do painel",parameters:{jornada:{...c,respostas:{[ce]:{status:200,corpo:{ok:!0}}}}},play:async({canvasElement:t,step:a})=>{const n=i(t),r=await L(t);await a("sem perfil escolhido, Promover fica bloqueado",async()=>{await e(r.getByRole("button",{name:"Promover"})).toHaveAttribute("aria-disabled","true")}),await a("Admin escolhido promove e leva para a Equipe",async()=>{await o.click(await r.findByRole("button",{name:/^Admin/})),await e(r.getByRole("button",{name:/^Admin/})).toHaveAttribute("aria-pressed","true"),await o.click(r.getByRole("button",{name:"Promover"})),await e(await n.findByText("Rafael Moura agora é usuário do painel.")).toBeInTheDocument(),await d(()=>e(n.queryByRole("dialog",{name:G})).not.toBeInTheDocument())}),await s()}},D={name:"Promover: erro da API",parameters:{jornada:{...c,respostas:{[ce]:{status:400,corpo:{erro:"grupo de permissão não encontrado nesta empresa"}}}}},play:async({canvasElement:t})=>{const a=await L(t);await o.click(await a.findByRole("button",{name:/^Admin/})),await o.click(a.getByRole("button",{name:"Promover"})),await e(await a.findByText("Grupo de permissão não encontrado nesta empresa.")).toBeInTheDocument(),await e(i(t).getByRole("dialog",{name:G})).toBeInTheDocument(),await s()}},f={name:"Promover: grupos não carregam",parameters:{jornada:{...c,falhar:["GET /v1/grupos-permissao"]}},play:async({canvasElement:t})=>{const a=await L(t);await e(await a.findByText(/O servidor teve um problema ao carregar os grupos de permissão/)).toBeInTheDocument(),await e(a.getByRole("button",{name:"Tentar de novo"})).toBeInTheDocument(),await o.click(a.getByRole("button",{name:/^Admin/})),await e(a.getByRole("button",{name:"Promover"})).not.toHaveAttribute("aria-disabled","true"),await s()}},h={name:"Novo padrão de horário",parameters:{jornada:{...c,respostas:{[ge]:{status:201,corpo:{id:40}}}}},play:async({canvasElement:t,step:a})=>{const n=i(t),r=await le(t);await a("sem nome, o padrão não é criado",async()=>{await o.click(r.getByRole("button",{name:"Criar novo padrão"})),await e(await r.findByText("Dê um nome para o padrão")).toBeInTheDocument()}),await a("com nome, cria e fica escolhido",async()=>{await o.type(r.getByRole("textbox",{name:/^Nome/}),"Plantão"),await o.click(r.getByRole("button",{name:"Criar novo padrão"})),await d(()=>e(n.queryByRole("dialog",{name:j})).not.toBeInTheDocument());const de=m(n.getByRole("group",{name:"Padrão de horário"}));await e(de.getByRole("button",{name:/^Plantão/})).toHaveAttribute("aria-pressed","true")}),await s()}},b={name:"Novo padrão: descartar",play:async({canvasElement:t,step:a})=>{const n=i(t),r=await le(t);await o.type(r.getByRole("textbox",{name:/^Nome/}),"Rascunho"),await a("Esc com texto pergunta antes de fechar",async()=>{await o.keyboard("{Escape}"),await o.click(await n.findByRole("button",{name:"Continuar editando"})),await e(n.getByRole("dialog",{name:j})).toBeInTheDocument()}),await a("Descartar fecha a gaveta",async()=>{await o.keyboard("{Escape}"),await e(await n.findByRole("dialog",{name:ye})).toBeInTheDocument(),await o.click(n.getByRole("button",{name:"Descartar"})),await d(()=>e(n.queryByRole("dialog",{name:j})).not.toBeInTheDocument())}),await s()}},I={name:"Horários: preset escolhido",play:async({canvasElement:t})=>{const a=i(t);await e(await a.findByRole("heading",{name:"Rafael Moura"})).toBeInTheDocument(),await o.click(a.getByRole("tab",{name:"Horários"}));const n=m(await a.findByRole("group",{name:"Padrão de horário"}));await e(n.getByRole("button",{name:/^Dias úteis/})).toHaveAttribute("aria-pressed","true"),await o.click(n.getByRole("button",{name:/^Todos os dias/})),await e(n.getByRole("button",{name:/^Todos os dias/})).toHaveAttribute("aria-pressed","true"),await e(n.getByRole("button",{name:/^Dias úteis/})).toHaveAttribute("aria-pressed","false"),await e(a.getByRole("button",{name:"Salvar Alterações"})).toBeEnabled(),await s()}},A={name:"Gerar nova senha",parameters:{jornada:{...c,respostas:{[me]:{status:200,corpo:{email:"rafael@exemplo.com",senha:"Temp-4821-xk"}}}}},play:async({canvasElement:t})=>{const a=i(t);await e(await a.findByRole("heading",{name:"Rafael Moura"})).toBeInTheDocument(),await o.click(a.getByRole("button",{name:"Gerar nova senha"})),await o.click(await a.findByRole("button",{name:"Gerar senha"}));const n=m(await a.findByRole("dialog",{name:"Senha temporária gerada"}));await e(n.getByText("Temp-4821-xk")).toBeInTheDocument();const[r]=n.getAllByRole("button",{name:"Fechar"}).slice(-1);await o.click(r),await d(()=>e(a.queryByRole("dialog",{name:"Senha temporária gerada"})).not.toBeInTheDocument()),await s()}},P={name:"Gerar nova senha: erro do servidor",parameters:{jornada:{...c,falhar:[me]}},play:async({canvasElement:t})=>{const a=i(t);await e(await a.findByRole("heading",{name:"Rafael Moura"})).toBeInTheDocument(),await o.click(a.getByRole("button",{name:"Gerar nova senha"})),await o.click(await a.findByRole("button",{name:"Gerar senha"})),await e(await a.findByText(we.servidor)).toBeInTheDocument(),await e(a.queryByText(/api falsa/)).not.toBeInTheDocument(),await s()}},M="/atendentes/101/perfil",q="GET /v1/departamentos",ve="POST /v1/atendentes";async function _(t){const a=i(t);return await e(await a.findByRole("heading",{name:"Perfil do atendente"})).toBeInTheDocument(),{tela:a,secao:m(await a.findByRole("region",{name:"Departamentos"}))}}const S={name:"Perfil: departamentos não carregam",args:{rotaInicial:M},parameters:{jornada:{...c,falhar:[q]}},play:async({canvasElement:t})=>{const{tela:a,secao:n}=await _(t);await e(await n.findByText(/O servidor teve um problema ao carregar os departamentos/)).toBeInTheDocument(),await e(n.getByRole("button",{name:"Tentar de novo"})).toBeInTheDocument(),await e(n.queryByText("Nenhum departamento vinculado.")).not.toBeInTheDocument(),await e(a.queryByText(/api falsa/)).not.toBeInTheDocument(),await s()}},O={name:"Perfil: departamentos carregando",args:{rotaInicial:M},parameters:{jornada:{...c,pendurar:[q]}},play:async({canvasElement:t})=>{const{secao:a}=await _(t);await e(a.getByRole("status")).toHaveTextContent("Carregando os departamentos…"),await e(a.queryByText("Nenhum departamento vinculado.")).not.toBeInTheDocument()}},k={name:"Perfil: sem departamentos",args:{rotaInicial:M},parameters:{jornada:{...c,respostas:{[q]:{status:200,corpo:[]}}}},play:async({canvasElement:t})=>{const{secao:a}=await _(t);await e(await a.findByText("Nenhum departamento vinculado.")).toBeInTheDocument(),await e(a.queryByRole("button",{name:"Tentar de novo"})).not.toBeInTheDocument(),await s()}},H={name:"Perfil: atendente desativado",args:{rotaInicial:M},parameters:{jornada:{...c,respostas:{[u]:{status:200,corpo:{...Be()[0],ativo:!1}}}}},play:async({canvasElement:t})=>{const{tela:a,secao:n}=await _(t);await e(a.getByText("desativado")).toHaveClass("hk-status","hk-status--risk"),await e(a.queryByRole("button",{name:/Baixar relatório/})).not.toBeInTheDocument(),await e(a.queryByRole("button",{name:/Deslogar/})).not.toBeInTheDocument(),await e(await n.findByText("INSS · Consignado")).toHaveClass("hk-status","hk-status--petrol"),await s()}};async function Re(t){const a=i(t);return await e(await a.findByRole("button",{name:"Criar atendente"})).toBeInTheDocument(),await l(a.getByLabelText(/^Nome completo/),"Paula Reis"),await l(a.getByLabelText(/^E-mail/),"paula.reis@example.com"),await l(a.getByLabelText(/^Identificador/),"ATD-014"),await l(a.getByLabelText(/^Senha/),"Exemplo123"),a}const C={name:"Criar: identificador já usado",args:{rotaInicial:"/atendentes/novo"},parameters:{jornada:{...c,respostas:{[ve]:{status:409,corpo:{erro:"identificador já usado nesta empresa"}}}}},play:async({canvasElement:t,step:a})=>{const n=await Re(t),r=n.getByLabelText(/^Identificador/);await a("o 409 diz a frase do servidor e leva o foco ao Identificador",async()=>{await o.click(n.getByRole("button",{name:"Criar atendente"})),await e(await n.findByText("Identificador já usado nesta empresa.")).toBeInTheDocument(),await d(()=>e(r).toHaveFocus()),await e(r).toHaveAttribute("aria-invalid","true"),await e(n.getByLabelText(/^Nome completo/)).toHaveValue("Paula Reis")}),await a("editar o Identificador tira a marca de inválido",async()=>{await l(r,"ATD-099"),await e(r).not.toHaveAttribute("aria-invalid")}),await s()}},N={name:"Criar: mostrar senha",args:{rotaInicial:"/atendentes/novo"},play:async({canvasElement:t})=>{const a=i(t);await e(await a.findByRole("button",{name:"Criar atendente"})).toBeInTheDocument();const n=a.getByLabelText(/^Senha/);await o.click(n),await o.tab();const r=a.getByRole("button",{name:"Mostrar senha"});await e(r).toHaveFocus(),await e(r).toHaveAttribute("aria-pressed","false"),await o.keyboard("{Enter}"),await e(r).toHaveAttribute("aria-pressed","true"),await e(n).toHaveAttribute("type","text"),await s()}},xe=Array.from({length:7},(t,a)=>({id:`dep-${a+1}`,nome:`Departamento ${a+1}`,setor:"Consignado",ativo:!0,atendentes:[pe.rafael]})),F={name:"Departamentos: paginação",parameters:{jornada:{...c,respostas:{[q]:{status:200,corpo:xe}}}},play:async({canvasElement:t})=>{const a=i(t);await e(await a.findByRole("heading",{name:"Rafael Moura"})).toBeInTheDocument(),await o.click(a.getByRole("tab",{name:"Departamentos"}));const n=m(await a.findByRole("navigation",{name:"Páginas de Departamentos vinculados"}));await e(n.getByRole("button",{name:"Página 1"})).toHaveAttribute("aria-current","page"),await e(a.getByText("Departamento 5")).toBeInTheDocument(),await e(a.queryByText("Departamento 6")).not.toBeInTheDocument(),await o.click(n.getByRole("button",{name:"Próxima página"})),await e(n.getByRole("button",{name:"Página 2"})).toHaveAttribute("aria-current","page"),await e(await a.findByText("Departamento 7")).toBeInTheDocument(),await e(a.queryByText("Departamento 1")).not.toBeInTheDocument(),await s()}},Je=["Padrao","Perfil","Criar","Carregando","Vazio","NaoEncontrado","SemRede","SemPermissao","ErroDoServidor","Promover","PromoverErro","PromoverGruposErro","NovoPadrao","NovoPadraoDescartar","PresetsAtivo","GerarSenha","GerarSenhaErro","PerfilErroDepartamentos","PerfilDepartamentosCarregando","PerfilDepartamentosVazio","PerfilDesativado","CriarErro","CriarMostrarSenha","DepartamentosPaginacao"];var J,U,z;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: "Padrão",
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByRole("heading", {
      name: "Rafael Moura"
    })).toBeInTheDocument();
    const abas = within(tela.getByRole("tablist", {
      name: "Seções do atendente"
    }));
    await step("Horários mostra os dias da semana", async () => {
      await userEvent.click(abas.getByRole("tab", {
        name: "Horários"
      }));
      await expect(abas.getByRole("tab", {
        name: "Horários"
      })).toHaveAttribute("aria-selected", "true");
      await expect(await tela.findByLabelText("Início, Segundas")).toBeInTheDocument();
    });
    await step("Departamentos lista os vínculos", async () => {
      await userEvent.click(abas.getByRole("tab", {
        name: "Departamentos"
      }));
      await expect(await tela.findByText("Departamentos vinculados")).toBeInTheDocument();
    });
    await step("Perfil volta com a foto ou as iniciais", async () => {
      await userEvent.click(abas.getByRole("tab", {
        name: "Perfil"
      }));
      await expect(await tela.findByRole("button", {
        name: "Salvar Alterações"
      })).toBeInTheDocument();
    });
    await step("o ← volta para a lista", async () => {
      await userEvent.click(tela.getByRole("link", {
        name: "Voltar para Atendentes"
      }));
      await expect(await tela.findByRole("region", {
        name: "Cadastro de atendentes"
      })).toBeInTheDocument();
    });
    await semRotaSemFixture();
  }
}`,...(z=(U=p.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var $,K,X;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    rotaInicial: "/atendentes/101/perfil"
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByRole("heading", {
      name: "Perfil do atendente"
    })).toBeInTheDocument();
    await userEvent.click(await tela.findByRole("link", {
      name: "Editar vínculos"
    }));
    await expect(await tela.findByRole("heading", {
      name: "Rafael Moura"
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(X=(K=w.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Y,Q,W;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    rotaInicial: "/atendentes/novo"
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByRole("button", {
      name: "Criar atendente"
    })).toBeInTheDocument();
    await expect(tela.getByRole("button", {
      name: "Horários"
    })).toBeDisabled();
    await expect(tela.getByRole("button", {
      name: "Departamentos"
    })).toBeDisabled();
    await userEvent.click(tela.getByRole("button", {
      name: "Perfil"
    }));
    await userEvent.click(tela.getByRole("button", {
      name: "Cancelar"
    }));
    await expect(await tela.findByRole("region", {
      name: "Cadastro de atendentes"
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(W=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var Z,aa,ea;B.parameters={...B.parameters,docs:{...(Z=B.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  parameters: {
    jornada: {
      ...PADRAO,
      pendurar: [ROTA]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Carregando o atendente…")).toBeInTheDocument();
  }
}`,...(ea=(aa=B.parameters)==null?void 0:aa.docs)==null?void 0:ea.source}}};var ta,na,oa;g.parameters={...g.parameters,docs:{...(ta=g.parameters)==null?void 0:ta.docs,source:{originalSource:`{
  name: "Vazio: sem departamentos",
  parameters: {
    jornada: {
      ...PADRAO,
      respostas: {
        "GET /v1/departamentos": {
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
    await expect(await tela.findByRole("heading", {
      name: "Rafael Moura"
    })).toBeInTheDocument();
    await userEvent.click(tela.getByRole("tab", {
      name: "Departamentos"
    }));
    await expect(await tela.findByText("nenhum departamento disponível")).toBeInTheDocument();
    await expect(tela.getByText("nenhum vinculado ainda")).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(oa=(na=g.parameters)==null?void 0:na.docs)==null?void 0:oa.source}}};var ra,ia,sa;v.parameters={...v.parameters,docs:{...(ra=v.parameters)==null?void 0:ra.docs,source:{originalSource:`{
  name: "Erro: não encontrado",
  args: {
    rotaInicial: "/atendentes/999"
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Atendente não encontrado")).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: "Tentar de novo"
    })).not.toBeInTheDocument();
    await expect(tela.getByRole("button", {
      name: "Voltar à lista"
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(sa=(ia=v.parameters)==null?void 0:ia.docs)==null?void 0:sa.source}}};var ca,ma,la;R.parameters={...R.parameters,docs:{...(ca=R.parameters)==null?void 0:ca.docs,source:{originalSource:`{
  name: "Erro de rede",
  parameters: {
    jornada: {
      ...PADRAO,
      semRede: [ROTA]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/Não foi possível carregar o atendente/)).toBeInTheDocument();
    await userEvent.click(tela.getByRole("button", {
      name: "Tentar de novo"
    }));
    await expect(await tela.findByText(/Não foi possível carregar o atendente/)).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(la=(ma=R.parameters)==null?void 0:ma.docs)==null?void 0:la.source}}};var da,ua,pa;x.parameters={...x.parameters,docs:{...(da=x.parameters)==null?void 0:da.docs,source:{originalSource:`{
  name: "Erro: sem permissão",
  parameters: {
    jornada: {
      ...PADRAO,
      respostas: {
        [ROTA]: {
          status: 403,
          corpo: {
            erro: "sem permissão (api falsa)"
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Seu usuário não tem permissão para ver o atendente.")).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: "Tentar de novo"
    })).not.toBeInTheDocument();
    await expect(tela.getByRole("link", {
      name: "Voltar para Atendentes"
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(pa=(ua=x.parameters)==null?void 0:ua.docs)==null?void 0:pa.source}}};var wa,ya,Ba;T.parameters={...T.parameters,docs:{...(wa=T.parameters)==null?void 0:wa.docs,source:{originalSource:`{
  name: "Erro do servidor",
  parameters: {
    jornada: {
      ...PADRAO,
      falhar: [ROTA]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/O servidor teve um problema ao carregar o atendente/)).toBeInTheDocument();
    await expect(tela.queryByText(/api falsa/)).not.toBeInTheDocument();
    await expect(tela.getByRole("button", {
      name: "Tentar de novo"
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(Ba=(ya=T.parameters)==null?void 0:ya.docs)==null?void 0:Ba.source}}};var ga,va,Ra;E.parameters={...E.parameters,docs:{...(ga=E.parameters)==null?void 0:ga.docs,source:{originalSource:`{
  name: "Promover a usuário do painel",
  parameters: {
    jornada: {
      ...PADRAO,
      respostas: {
        [PROMOVER]: {
          status: 200,
          corpo: {
            ok: true
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
    const gaveta = await abrirPromover(canvasElement);
    await step("sem perfil escolhido, Promover fica bloqueado", async () => {
      await expect(gaveta.getByRole("button", {
        name: "Promover"
      })).toHaveAttribute("aria-disabled", "true");
    });
    await step("Admin escolhido promove e leva para a Equipe", async () => {
      await userEvent.click(await gaveta.findByRole("button", {
        name: /^Admin/
      }));
      await expect(gaveta.getByRole("button", {
        name: /^Admin/
      })).toHaveAttribute("aria-pressed", "true");
      await userEvent.click(gaveta.getByRole("button", {
        name: "Promover"
      }));
      await expect(await tela.findByText("Rafael Moura agora é usuário do painel.")).toBeInTheDocument();
      await waitFor(() => expect(tela.queryByRole("dialog", {
        name: TITULO_PROMOVER
      })).not.toBeInTheDocument());
    });
    await semRotaSemFixture();
  }
}`,...(Ra=(va=E.parameters)==null?void 0:va.docs)==null?void 0:Ra.source}}};var xa,Ta,Ea;D.parameters={...D.parameters,docs:{...(xa=D.parameters)==null?void 0:xa.docs,source:{originalSource:`{
  name: "Promover: erro da API",
  parameters: {
    jornada: {
      ...PADRAO,
      respostas: {
        [PROMOVER]: {
          status: 400,
          corpo: {
            erro: "grupo de permissão não encontrado nesta empresa"
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const gaveta = await abrirPromover(canvasElement);
    await userEvent.click(await gaveta.findByRole("button", {
      name: /^Admin/
    }));
    await userEvent.click(gaveta.getByRole("button", {
      name: "Promover"
    }));
    await expect(await gaveta.findByText("Grupo de permissão não encontrado nesta empresa.")).toBeInTheDocument();
    await expect(telaDe(canvasElement).getByRole("dialog", {
      name: TITULO_PROMOVER
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(Ea=(Ta=D.parameters)==null?void 0:Ta.docs)==null?void 0:Ea.source}}};var Da,fa,ha;f.parameters={...f.parameters,docs:{...(Da=f.parameters)==null?void 0:Da.docs,source:{originalSource:`{
  name: "Promover: grupos não carregam",
  parameters: {
    jornada: {
      ...PADRAO,
      falhar: ["GET /v1/grupos-permissao"]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const gaveta = await abrirPromover(canvasElement);
    await expect(await gaveta.findByText(/O servidor teve um problema ao carregar os grupos de permissão/)).toBeInTheDocument();
    await expect(gaveta.getByRole("button", {
      name: "Tentar de novo"
    })).toBeInTheDocument();
    await userEvent.click(gaveta.getByRole("button", {
      name: /^Admin/
    }));
    await expect(gaveta.getByRole("button", {
      name: "Promover"
    })).not.toHaveAttribute("aria-disabled", "true");
    await semRotaSemFixture();
  }
}`,...(ha=(fa=f.parameters)==null?void 0:fa.docs)==null?void 0:ha.source}}};var ba,Ia,Aa;h.parameters={...h.parameters,docs:{...(ba=h.parameters)==null?void 0:ba.docs,source:{originalSource:`{
  name: "Novo padrão de horário",
  parameters: {
    jornada: {
      ...PADRAO,
      respostas: {
        [CRIAR_PADRAO]: {
          status: 201,
          corpo: {
            id: 40
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
    const gaveta = await abrirNovoPadrao(canvasElement);
    await step("sem nome, o padrão não é criado", async () => {
      await userEvent.click(gaveta.getByRole("button", {
        name: "Criar novo padrão"
      }));
      await expect(await gaveta.findByText("Dê um nome para o padrão")).toBeInTheDocument();
    });
    await step("com nome, cria e fica escolhido", async () => {
      await userEvent.type(gaveta.getByRole("textbox", {
        name: /^Nome/
      }), "Plantão");
      await userEvent.click(gaveta.getByRole("button", {
        name: "Criar novo padrão"
      }));
      await waitFor(() => expect(tela.queryByRole("dialog", {
        name: TITULO_NOVO_PADRAO
      })).not.toBeInTheDocument());
      const grupo = within(tela.getByRole("group", {
        name: "Padrão de horário"
      }));
      await expect(grupo.getByRole("button", {
        name: /^Plantão/
      })).toHaveAttribute("aria-pressed", "true");
    });
    await semRotaSemFixture();
  }
}`,...(Aa=(Ia=h.parameters)==null?void 0:Ia.docs)==null?void 0:Aa.source}}};var Pa,Sa,Oa;b.parameters={...b.parameters,docs:{...(Pa=b.parameters)==null?void 0:Pa.docs,source:{originalSource:`{
  name: "Novo padrão: descartar",
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    const gaveta = await abrirNovoPadrao(canvasElement);
    await userEvent.type(gaveta.getByRole("textbox", {
      name: /^Nome/
    }), "Rascunho");
    await step("Esc com texto pergunta antes de fechar", async () => {
      await userEvent.keyboard("{Escape}");
      await userEvent.click(await tela.findByRole("button", {
        name: "Continuar editando"
      }));
      await expect(tela.getByRole("dialog", {
        name: TITULO_NOVO_PADRAO
      })).toBeInTheDocument();
    });
    await step("Descartar fecha a gaveta", async () => {
      await userEvent.keyboard("{Escape}");
      await expect(await tela.findByRole("dialog", {
        name: TITULO_DESCARTAR_PADRAO
      })).toBeInTheDocument();
      await userEvent.click(tela.getByRole("button", {
        name: "Descartar"
      }));
      await waitFor(() => expect(tela.queryByRole("dialog", {
        name: TITULO_NOVO_PADRAO
      })).not.toBeInTheDocument());
    });
    await semRotaSemFixture();
  }
}`,...(Oa=(Sa=b.parameters)==null?void 0:Sa.docs)==null?void 0:Oa.source}}};var ka,Ha,Ca;I.parameters={...I.parameters,docs:{...(ka=I.parameters)==null?void 0:ka.docs,source:{originalSource:`{
  name: "Horários: preset escolhido",
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByRole("heading", {
      name: "Rafael Moura"
    })).toBeInTheDocument();
    await userEvent.click(tela.getByRole("tab", {
      name: "Horários"
    }));
    const grupo = within(await tela.findByRole("group", {
      name: "Padrão de horário"
    }));
    // sem horário salvo, o atendente começa em dias úteis
    await expect(grupo.getByRole("button", {
      name: /^Dias úteis/
    })).toHaveAttribute("aria-pressed", "true");
    await userEvent.click(grupo.getByRole("button", {
      name: /^Todos os dias/
    }));
    await expect(grupo.getByRole("button", {
      name: /^Todos os dias/
    })).toHaveAttribute("aria-pressed", "true");
    await expect(grupo.getByRole("button", {
      name: /^Dias úteis/
    })).toHaveAttribute("aria-pressed", "false");
    await expect(tela.getByRole("button", {
      name: "Salvar Alterações"
    })).toBeEnabled();
    await semRotaSemFixture();
  }
}`,...(Ca=(Ha=I.parameters)==null?void 0:Ha.docs)==null?void 0:Ca.source}}};var Na,Fa,ja;A.parameters={...A.parameters,docs:{...(Na=A.parameters)==null?void 0:Na.docs,source:{originalSource:`{
  name: "Gerar nova senha",
  parameters: {
    jornada: {
      ...PADRAO,
      respostas: {
        [GERAR_SENHA]: {
          status: 200,
          corpo: {
            email: "rafael@exemplo.com",
            senha: "Temp-4821-xk"
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByRole("heading", {
      name: "Rafael Moura"
    })).toBeInTheDocument();
    await userEvent.click(tela.getByRole("button", {
      name: "Gerar nova senha"
    }));
    await userEvent.click(await tela.findByRole("button", {
      name: "Gerar senha"
    }));
    const dialogo = within(await tela.findByRole("dialog", {
      name: "Senha temporária gerada"
    }));
    await expect(dialogo.getByText("Temp-4821-xk")).toBeInTheDocument();
    // o X do topo também se chama Fechar: o do rodapé é o último
    const [fecharRodape] = dialogo.getAllByRole("button", {
      name: "Fechar"
    }).slice(-1);
    await userEvent.click(fecharRodape);
    await waitFor(() => expect(tela.queryByRole("dialog", {
      name: "Senha temporária gerada"
    })).not.toBeInTheDocument());
    await semRotaSemFixture();
  }
}`,...(ja=(Fa=A.parameters)==null?void 0:Fa.docs)==null?void 0:ja.source}}};var Ma,qa,_a;P.parameters={...P.parameters,docs:{...(Ma=P.parameters)==null?void 0:Ma.docs,source:{originalSource:`{
  name: "Gerar nova senha: erro do servidor",
  parameters: {
    jornada: {
      ...PADRAO,
      falhar: [GERAR_SENHA]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByRole("heading", {
      name: "Rafael Moura"
    })).toBeInTheDocument();
    await userEvent.click(tela.getByRole("button", {
      name: "Gerar nova senha"
    }));
    await userEvent.click(await tela.findByRole("button", {
      name: "Gerar senha"
    }));
    await expect(await tela.findByText(FRASES_GERAR_SENHA_ATENDENTE.servidor)).toBeInTheDocument();
    await expect(tela.queryByText(/api falsa/)).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(_a=(qa=P.parameters)==null?void 0:qa.docs)==null?void 0:_a.source}}};var Ga,La,Va;S.parameters={...S.parameters,docs:{...(Ga=S.parameters)==null?void 0:Ga.docs,source:{originalSource:`{
  name: "Perfil: departamentos não carregam",
  args: {
    rotaInicial: PERFIL
  },
  parameters: {
    jornada: {
      ...PADRAO,
      falhar: [DEPARTAMENTOS]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const {
      tela,
      secao
    } = await abrirPerfil(canvasElement);
    await expect(await secao.findByText(/O servidor teve um problema ao carregar os departamentos/)).toBeInTheDocument();
    await expect(secao.getByRole("button", {
      name: "Tentar de novo"
    })).toBeInTheDocument();
    await expect(secao.queryByText("Nenhum departamento vinculado.")).not.toBeInTheDocument();
    await expect(tela.queryByText(/api falsa/)).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(Va=(La=S.parameters)==null?void 0:La.docs)==null?void 0:Va.source}}};var Ja,Ua,za;O.parameters={...O.parameters,docs:{...(Ja=O.parameters)==null?void 0:Ja.docs,source:{originalSource:`{
  name: "Perfil: departamentos carregando",
  args: {
    rotaInicial: PERFIL
  },
  parameters: {
    jornada: {
      ...PADRAO,
      pendurar: [DEPARTAMENTOS]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const {
      secao
    } = await abrirPerfil(canvasElement);
    await expect(secao.getByRole("status")).toHaveTextContent("Carregando os departamentos…");
    await expect(secao.queryByText("Nenhum departamento vinculado.")).not.toBeInTheDocument();
  }
}`,...(za=(Ua=O.parameters)==null?void 0:Ua.docs)==null?void 0:za.source}}};var $a,Ka,Xa;k.parameters={...k.parameters,docs:{...($a=k.parameters)==null?void 0:$a.docs,source:{originalSource:`{
  name: "Perfil: sem departamentos",
  args: {
    rotaInicial: PERFIL
  },
  parameters: {
    jornada: {
      ...PADRAO,
      respostas: {
        [DEPARTAMENTOS]: {
          status: 200,
          corpo: []
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const {
      secao
    } = await abrirPerfil(canvasElement);
    await expect(await secao.findByText("Nenhum departamento vinculado.")).toBeInTheDocument();
    await expect(secao.queryByRole("button", {
      name: "Tentar de novo"
    })).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(Xa=(Ka=k.parameters)==null?void 0:Ka.docs)==null?void 0:Xa.source}}};var Ya,Qa,Wa;H.parameters={...H.parameters,docs:{...(Ya=H.parameters)==null?void 0:Ya.docs,source:{originalSource:`{
  name: "Perfil: atendente desativado",
  args: {
    rotaInicial: PERFIL
  },
  parameters: {
    jornada: {
      ...PADRAO,
      respostas: {
        [ROTA]: {
          status: 200,
          corpo: {
            ...atendentesIniciais()[0],
            ativo: false
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const {
      tela,
      secao
    } = await abrirPerfil(canvasElement);
    await expect(tela.getByText("desativado")).toHaveClass("hk-status", "hk-status--risk");
    await expect(tela.queryByRole("button", {
      name: /Baixar relatório/
    })).not.toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: /Deslogar/
    })).not.toBeInTheDocument();
    await expect(await secao.findByText("INSS · Consignado")).toHaveClass("hk-status", "hk-status--petrol");
    await semRotaSemFixture();
  }
}`,...(Wa=(Qa=H.parameters)==null?void 0:Qa.docs)==null?void 0:Wa.source}}};var Za,ae,ee;C.parameters={...C.parameters,docs:{...(Za=C.parameters)==null?void 0:Za.docs,source:{originalSource:`{
  name: "Criar: identificador já usado",
  args: {
    rotaInicial: "/atendentes/novo"
  },
  parameters: {
    jornada: {
      ...PADRAO,
      respostas: {
        [CRIAR]: {
          status: 409,
          corpo: {
            erro: "identificador já usado nesta empresa"
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = await preencherCriar(canvasElement);
    const identificador = tela.getByLabelText(/^Identificador/);
    await step("o 409 diz a frase do servidor e leva o foco ao Identificador", async () => {
      await userEvent.click(tela.getByRole("button", {
        name: "Criar atendente"
      }));
      await expect(await tela.findByText("Identificador já usado nesta empresa.")).toBeInTheDocument();
      await waitFor(() => expect(identificador).toHaveFocus());
      await expect(identificador).toHaveAttribute("aria-invalid", "true");
      await expect(tela.getByLabelText(/^Nome completo/)).toHaveValue("Paula Reis");
    });
    await step("editar o Identificador tira a marca de inválido", async () => {
      await digitar(identificador, "ATD-099");
      await expect(identificador).not.toHaveAttribute("aria-invalid");
    });
    await semRotaSemFixture();
  }
}`,...(ee=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:ee.source}}};var te,ne,oe;N.parameters={...N.parameters,docs:{...(te=N.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: "Criar: mostrar senha",
  args: {
    rotaInicial: "/atendentes/novo"
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByRole("button", {
      name: "Criar atendente"
    })).toBeInTheDocument();
    const senha = tela.getByLabelText(/^Senha/);
    await userEvent.click(senha);
    await userEvent.tab();
    const mostrar = tela.getByRole("button", {
      name: "Mostrar senha"
    });
    await expect(mostrar).toHaveFocus();
    await expect(mostrar).toHaveAttribute("aria-pressed", "false");
    await userEvent.keyboard("{Enter}");
    await expect(mostrar).toHaveAttribute("aria-pressed", "true");
    await expect(senha).toHaveAttribute("type", "text");
    await semRotaSemFixture();
  }
}`,...(oe=(ne=N.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var re,ie,se;F.parameters={...F.parameters,docs:{...(re=F.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: "Departamentos: paginação",
  parameters: {
    jornada: {
      ...PADRAO,
      respostas: {
        [DEPARTAMENTOS]: {
          status: 200,
          corpo: MUITOS_DEPARTAMENTOS
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByRole("heading", {
      name: "Rafael Moura"
    })).toBeInTheDocument();
    await userEvent.click(tela.getByRole("tab", {
      name: "Departamentos"
    }));
    const paginas = within(await tela.findByRole("navigation", {
      name: "Páginas de Departamentos vinculados"
    }));
    await expect(paginas.getByRole("button", {
      name: "Página 1"
    })).toHaveAttribute("aria-current", "page");
    await expect(tela.getByText("Departamento 5")).toBeInTheDocument();
    await expect(tela.queryByText("Departamento 6")).not.toBeInTheDocument();
    await userEvent.click(paginas.getByRole("button", {
      name: "Próxima página"
    }));
    await expect(paginas.getByRole("button", {
      name: "Página 2"
    })).toHaveAttribute("aria-current", "page");
    await expect(await tela.findByText("Departamento 7")).toBeInTheDocument();
    await expect(tela.queryByText("Departamento 1")).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(se=(ie=F.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};export{B as Carregando,y as Criar,C as CriarErro,N as CriarMostrarSenha,F as DepartamentosPaginacao,T as ErroDoServidor,A as GerarSenha,P as GerarSenhaErro,v as NaoEncontrado,h as NovoPadrao,b as NovoPadraoDescartar,p as Padrao,w as Perfil,O as PerfilDepartamentosCarregando,k as PerfilDepartamentosVazio,H as PerfilDesativado,S as PerfilErroDepartamentos,I as PresetsAtivo,E as Promover,D as PromoverErro,f as PromoverGruposErro,x as SemPermissao,R as SemRede,g as Vazio,Je as __namedExportsOrder,Ve as default};
