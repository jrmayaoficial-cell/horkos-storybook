import{C as x,m as U}from"./jornadaGestao-beo2QLky.js";import{t as m,s as u}from"./jornadaOperar-BXGi3LO3.js";import"./ShellJornada-CEvPgnxB.js";import"./jsx-runtime-5_h1ggUY.js";import"./iframe-DruNtuiI.js";import"./preload-helper-D6kgxu3v.js";import"./dadosShell-DtXMTPCY.js";import"./index-C-mb7IqI.js";import"./index-Di2eVLJq.js";import"./v2-84aqWlA8.js";import"./index-Bi4MUife.js";import"./api-CwdEbqb0.js";import"./index-DHkLSF23.js";import"./marca-CA0y2m0X.js";import"./carregando-BPTr5NIa.js";import"./celulas-D28WY2js.js";/* empty css              */import"./MiniBarras-B-RmbX_7.js";import"./paleta-CAXSK6uJ.js";import"./Login-BpKl7o1u.js";/* empty css                */import"./ShellGestao-DeGOnHqh.js";const{expect:a,userEvent:n,waitFor:z,within:i}=__STORYBOOK_MODULE_TEST__,J=U("/usuarios",'Jornada da Equipe dentro do shell: lista de usuários com o ⋯ por linha, edição com perfil de acesso, grupo e ajustes individuais (o que difere do grupo leva o selo "ajuste"), e a aba Permissionamento com os grupos. Lista e grupos com falha dizem o que houve e oferecem Tentar de novo.'),E="GET /v1/usuarios",L="GET /v1/grupos-permissao",pe={title:"Jornadas/Equipe",...J},l={name:"Padrão",play:async({canvasElement:o,step:e})=>{const t=m(o);await a((await t.findAllByText("Bruno Siqueira")).length).toBeGreaterThan(0),await e("Editar de Bruno Siqueira abre o modal com o perfil de acesso",async()=>{await n.click(t.getByRole("button",{name:"Mais ações de Bruno Siqueira"}));const r=i(await t.findByRole("menu"));await n.click(r.getByRole("menuitem",{name:/Editar/}));const s=await t.findByRole("dialog");await a(s).toHaveTextContent("Editar usuário"),await a(await i(s).findByRole("group",{name:"Perfil de acesso"})).toBeInTheDocument()}),await e("Ajustes individuais mostra o selo ajuste no que difere do grupo",async()=>{const r=i(t.getByRole("dialog"));await n.click(await r.findByRole("button",{name:/^Ajustes individuais/})),await a((await r.findAllByText("ajuste")).length).toBeGreaterThan(0),await a(r.getByRole("button",{name:"Ocultar ajustes individuais"})).toBeInTheDocument()}),await u()}},d={name:"Permissionamento: grupos",play:async({canvasElement:o})=>{const e=m(o),t=i(await e.findByRole("group",{name:"Visão da equipe"}));await n.click(t.getByRole("button",{name:"Permissionamento"})),await a(await e.findByText("2 grupos de permissão")).toBeInTheDocument(),await u()}},p={name:"Permissionamento: editar grupo",play:async({canvasElement:o,step:e})=>{const t=m(o),r=i(await t.findByRole("group",{name:"Visão da equipe"}));await n.click(r.getByRole("button",{name:"Permissionamento"})),await n.click((await t.findAllByRole("button",{name:"Editar Supervisão"}))[0]);const s=i(await t.findByRole("dialog"));await e("a matriz agrupa as ações por módulo, com o nome do módulo como legenda",async()=>{await a(s.getByText("Editar grupo: Supervisão")).toBeInTheDocument();const c=s.getByRole("group",{name:"Sessões"});await a(c.tagName).toBe("FIELDSET"),await a(c.querySelector("legend")).toHaveTextContent("Sessões"),await a(s.getByRole("group",{name:"Atendentes"})).toBeInTheDocument()}),await e("marcar uma permissão e salvar fecha o modal",async()=>{const c=i(s.getByRole("group",{name:"Sessões"})).getByRole("checkbox",{name:"Revisar sessões"});await a(c).not.toBeChecked(),await n.click(c),await a(c).toBeChecked(),await n.click(s.getByRole("button",{name:"Salvar grupo"})),await z(()=>a(t.queryByRole("dialog")).not.toBeInTheDocument())}),await u()}},w={parameters:{jornada:{...x,pendurar:[E]}},play:async({canvasElement:o})=>{const e=m(o);await a(await e.findByText("Carregando usuários…")).toBeInTheDocument(),await a(e.getByText("Carregando…")).toBeInTheDocument()}},g={name:"Erro: lista de usuários",parameters:{jornada:{...x,falhar:[E]}},play:async({canvasElement:o})=>{const e=m(o);await a(await e.findByText(/Não foi possível carregar os usuários/)).toBeInTheDocument(),await a(e.getByText("Lista indisponível no momento")).toBeInTheDocument(),await a(e.getByRole("button",{name:/Tentar de novo/})).toBeInTheDocument(),await u()}},B={name:"Erro de rede: grupos de permissão",parameters:{jornada:{...x,semRede:[L]}},play:async({canvasElement:o})=>{const e=m(o),t=i(await e.findByRole("group",{name:"Visão da equipe"}));await n.click(t.getByRole("button",{name:"Permissionamento"})),await a(await e.findByText("Não foi possível carregar os grupos de permissão. Verifique a conexão e tente de novo.")).toBeInTheDocument(),await n.click(e.getByRole("button",{name:/Tentar de novo/})),await a(await e.findByText(/Não foi possível carregar os grupos de permissão/)).toBeInTheDocument(),await u()}},y={name:"Vazio: nenhum usuário",parameters:{jornada:{...x,respostas:{[E]:{status:200,corpo:[]}}}},play:async({canvasElement:o})=>{const e=m(o);await a(await e.findByText("Nenhum usuário ainda")).toBeInTheDocument(),await u()}},we=["Padrao","Permissionamento","EditarGrupo","Carregando","Erro","ErroGrupos","Vazio"];var v,T,R;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Padrão",
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await expect((await tela.findAllByText("Bruno Siqueira")).length).toBeGreaterThan(0);
    await step("Editar de Bruno Siqueira abre o modal com o perfil de acesso", async () => {
      await userEvent.click(tela.getByRole("button", {
        name: "Mais ações de Bruno Siqueira"
      }));
      const menu = within(await tela.findByRole("menu"));
      await userEvent.click(menu.getByRole("menuitem", {
        name: /Editar/
      }));
      const dialogo = await tela.findByRole("dialog");
      await expect(dialogo).toHaveTextContent("Editar usuário");
      await expect(await within(dialogo).findByRole("group", {
        name: "Perfil de acesso"
      })).toBeInTheDocument();
    });
    await step("Ajustes individuais mostra o selo ajuste no que difere do grupo", async () => {
      const modal = within(tela.getByRole("dialog"));
      await userEvent.click(await modal.findByRole("button", {
        name: /^Ajustes individuais/
      }));
      await expect((await modal.findAllByText("ajuste")).length).toBeGreaterThan(0);
      await expect(modal.getByRole("button", {
        name: "Ocultar ajustes individuais"
      })).toBeInTheDocument();
    });
    await semRotaSemFixture();
  }
}`,...(R=(T=l.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var f,h,S;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Permissionamento: grupos",
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    const visao = within(await tela.findByRole("group", {
      name: "Visão da equipe"
    }));
    await userEvent.click(visao.getByRole("button", {
      name: "Permissionamento"
    }));
    await expect(await tela.findByText("2 grupos de permissão")).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(S=(h=d.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var D,I,O;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Permissionamento: editar grupo",
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    const visao = within(await tela.findByRole("group", {
      name: "Visão da equipe"
    }));
    await userEvent.click(visao.getByRole("button", {
      name: "Permissionamento"
    }));
    await userEvent.click((await tela.findAllByRole("button", {
      name: "Editar Supervisão"
    }))[0]);
    const dialogo = within(await tela.findByRole("dialog"));
    await step("a matriz agrupa as ações por módulo, com o nome do módulo como legenda", async () => {
      await expect(dialogo.getByText("Editar grupo: Supervisão")).toBeInTheDocument();
      const sessoes = dialogo.getByRole("group", {
        name: "Sessões"
      });
      await expect(sessoes.tagName).toBe("FIELDSET");
      await expect(sessoes.querySelector("legend")).toHaveTextContent("Sessões");
      await expect(dialogo.getByRole("group", {
        name: "Atendentes"
      })).toBeInTheDocument();
    });
    await step("marcar uma permissão e salvar fecha o modal", async () => {
      const revisar = within(dialogo.getByRole("group", {
        name: "Sessões"
      })).getByRole("checkbox", {
        name: "Revisar sessões"
      });
      await expect(revisar).not.toBeChecked();
      await userEvent.click(revisar);
      await expect(revisar).toBeChecked();
      await userEvent.click(dialogo.getByRole("button", {
        name: "Salvar grupo"
      }));
      await waitFor(() => expect(tela.queryByRole("dialog")).not.toBeInTheDocument());
    });
    await semRotaSemFixture();
  }
}`,...(O=(I=p.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var b,k,A;w.parameters={...w.parameters,docs:{...(b=w.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      pendurar: [USUARIOS]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Carregando usuários…")).toBeInTheDocument();
    await expect(tela.getByText("Carregando…")).toBeInTheDocument();
  }
}`,...(A=(k=w.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var q,P,j;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "Erro: lista de usuários",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      falhar: [USUARIOS]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/Não foi possível carregar os usuários/)).toBeInTheDocument();
    await expect(tela.getByText("Lista indisponível no momento")).toBeInTheDocument();
    await expect(tela.getByRole("button", {
      name: /Tentar de novo/
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(j=(P=g.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var C,F,G;B.parameters={...B.parameters,docs:{...(C=B.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Erro de rede: grupos de permissão",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      semRede: [GRUPOS]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    const visao = within(await tela.findByRole("group", {
      name: "Visão da equipe"
    }));
    await userEvent.click(visao.getByRole("button", {
      name: "Permissionamento"
    }));
    await expect(await tela.findByText("Não foi possível carregar os grupos de permissão. Verifique a conexão e tente de novo.")).toBeInTheDocument();
    await userEvent.click(tela.getByRole("button", {
      name: /Tentar de novo/
    }));
    await expect(await tela.findByText(/Não foi possível carregar os grupos de permissão/)).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(G=(F=B.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var N,_,V;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Vazio: nenhum usuário",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [USUARIOS]: {
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
    await expect(await tela.findByText("Nenhum usuário ainda")).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(V=(_=y.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};export{w as Carregando,p as EditarGrupo,g as Erro,B as ErroGrupos,l as Padrao,d as Permissionamento,y as Vazio,we as __namedExportsOrder,pe as default};
