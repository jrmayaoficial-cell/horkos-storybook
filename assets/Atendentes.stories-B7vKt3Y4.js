import{t as D,d as y,s as q,m as A}from"./jornadaOperar-B3jNrmYm.js";import"./ShellJornada-DILarbfX.js";import"./jsx-runtime-BUD7zGX8.js";import"./iframe-C1QMfJ-9.js";import"./preload-helper-D6kgxu3v.js";import"./index-C8gnXhhc.js";import"./index-BbhoXcyi.js";import"./marca-BT2lv8yj.js";import"./carregando-CHDG19BM.js";import"./dadosShell-C1AgSo37.js";import"./index-Crig0FLC.js";import"./v2-CUED6Ccf.js";import"./index-4jL4Xbgq.js";import"./api-OBf8VTRj.js";import"./Login-DKROyO0_.js";import"./celulas-DazGG6IU.js";/* empty css              */import"./paleta-B-duPMKZ.js";import"./MiniBarras-lAL3wmyU.js";/* empty css                */const{expect:t,userEvent:r,waitFor:l,within:p}=__STORYBOOK_MODULE_TEST__,v=A("/atendentes","Jornada de Atendentes dentro do shell: roster ao vivo e, abaixo, a lista no padrão de Sessões (docs/redesign/12, cartão A), com busca, seletor de colunas, segmentado Todos · Ativos · Convite pendente · Desativados com contagem, Situação (convite que não saiu, devolvido, desativado) e o ⋯ por linha. O ⋯ só oferece o que o usuário pode fazer: sem `atendentes.gerir` ele some e fica só o ↗ do perfil. Abaixo de 900 px a lista vira cards.",null),Q={title:"Jornadas/Atendentes",...v,parameters:{...v.parameters,jornada:{cenario:"padrao"}}};async function c(i){return p(await i.findByRole("region",{name:"Cadastro de atendentes"}))}function s(i,n){return p(i.getByRole("group",{name:"Situação dos atendentes"})).getByRole("button",{name:new RegExp(`^${n}\\b`)})}const w=i=>{var n;return Number(((n=/(\d+)\s*$/.exec(i.textContent??""))==null?void 0:n[1])??NaN)};async function B(i,n){await r.click((await c(i)).getByRole("button",{name:`Mais ações de ${n}`}));const a=await i.findByRole("menu"),e=p(a).getAllByRole("menuitem").map(o=>{var u;return((u=o.querySelector(".hk-pop-item-texto"))==null?void 0:u.textContent)??""});return{menu:p(a),itens:e}}const d={name:"Atendentes",play:async({canvasElement:i,step:n})=>{const a=D(i);await n("a lista abre em Todos, e os segmentos somam Todos",async()=>{await(await c(a)).findByText("Rafael Moura"),await l(()=>t(w(s(a,"Todos"))).toBe(6)),await t(s(a,"Todos")).toHaveAttribute("aria-pressed","true");const e=["Ativos","Convite pendente","Desativados"].map(o=>w(s(a,o)));await t(e).toEqual([3,2,1]),await t(e.reduce((o,u)=>o+u,0)).toBe(w(s(a,"Todos")))}),await n("Convite pendente mostra só quem nunca entrou, com o motivo do convite",async()=>{await r.click(s(a,"Convite pendente"));const e=await c(a);await l(()=>t(e.queryByText("Rafael Moura")).not.toBeInTheDocument()),await t(e.getByText("Luana Fontes")).toBeInTheDocument(),await t(e.getByText("Bianca Serrano")).toBeInTheDocument(),await t(e.getAllByText("convite não saiu").length).toBeGreaterThan(0),await t(e.getAllByText("e-mail devolvido").length).toBeGreaterThan(0)}),await n("o ⋯ de quem nunca entrou: Editar, Reenviar convite e Desativar (admin não exclui)",async()=>{const{itens:e}=await B(a,"Luana Fontes");await t(e).toEqual(["Editar","Reenviar convite","Desativar"]),await r.click(a.getByRole("menuitem",{name:/Reenviar convite/})),await a.findByText("Convite reenviado")}),await n("o ⋯ de um desativado oferece Reativar e não Reenviar",async()=>{await r.click(s(a,"Desativados"));const e=await c(a);await l(()=>t(e.queryByText("Luana Fontes")).not.toBeInTheDocument()),await t(e.getByText("Otávio Lins")).toBeInTheDocument();const{itens:o}=await B(a,"Otávio Lins");await t(o).toEqual(["Editar","Reativar"]),await r.keyboard("{Escape}"),await l(()=>t(a.queryByRole("menu")).not.toBeInTheDocument())}),await n("a busca filtra pelo identificador e o vazio oferece Limpar",async()=>{await r.click(s(a,"Todos"));const e=await c(a);await y(e.getByRole("searchbox",{name:"Buscar por nome, e-mail ou identificador"}),"ATD-033"),await l(()=>t(e.queryByText("Rafael Moura")).not.toBeInTheDocument()),await t(e.getByText("Diego Prado")).toBeInTheDocument(),await y(e.getByRole("searchbox",{name:"Buscar por nome, e-mail ou identificador"}),"ninguém com este nome"),await e.findByText("Nenhum atendente com esta busca"),await r.click(e.getByRole("button",{name:"Limpar"})),await e.findByText("Rafael Moura")}),await q()}},m={name:"Sem permissão de gerir",parameters:{jornada:{cenario:"padrao",sessao:{papel:"gerente",permissoes:{"atendentes.ver":!0,"operacao.ver":!0,"sessoes.ver":!0}}}},play:async({canvasElement:i,step:n})=>{const a=D(i),e=o=>o.queryByRole("button",{name:"Abrir perfil de Rafael Moura"})??o.getByRole("link",{name:"Rafael Moura"});await n("nenhuma linha tem ⋯ nem Novo atendente; o acesso ao perfil continua",async()=>{const o=await c(a);await o.findByText("Rafael Moura"),await t(o.queryAllByRole("button",{name:/^Mais ações de/})).toEqual([]),await t(o.queryByRole("button",{name:/Novo atendente/})).not.toBeInTheDocument(),await t(e(o)).toBeInTheDocument()}),await n("o ↗ (ou o nome, no celular) abre o perfil do atendente",async()=>{await r.click(e(await c(a))),await a.findByRole("heading",{name:"Perfil do atendente"})}),await q()}},V=["Atendentes","SemPermissaoDeGerir"];var x,g,T;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Atendentes",
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await step("a lista abre em Todos, e os segmentos somam Todos", async () => {
      await (await lista(tela)).findByText("Rafael Moura");
      await waitFor(() => expect(contagem(segmento(tela, "Todos"))).toBe(6));
      await expect(segmento(tela, "Todos")).toHaveAttribute("aria-pressed", "true");
      const partes = ["Ativos", "Convite pendente", "Desativados"].map(r => contagem(segmento(tela, r)));
      await expect(partes).toEqual([3, 2, 1]);
      await expect(partes.reduce((a, b) => a + b, 0)).toBe(contagem(segmento(tela, "Todos")));
    });
    await step("Convite pendente mostra só quem nunca entrou, com o motivo do convite", async () => {
      await userEvent.click(segmento(tela, "Convite pendente"));
      const l = await lista(tela);
      await waitFor(() => expect(l.queryByText("Rafael Moura")).not.toBeInTheDocument());
      await expect(l.getByText("Luana Fontes")).toBeInTheDocument();
      await expect(l.getByText("Bianca Serrano")).toBeInTheDocument();
      await expect(l.getAllByText("convite não saiu").length).toBeGreaterThan(0);
      await expect(l.getAllByText("e-mail devolvido").length).toBeGreaterThan(0);
    });
    await step("o ⋯ de quem nunca entrou: Editar, Reenviar convite e Desativar (admin não exclui)", async () => {
      const {
        itens
      } = await abrirMenu(tela, "Luana Fontes");
      await expect(itens).toEqual(["Editar", "Reenviar convite", "Desativar"]);
      await userEvent.click(tela.getByRole("menuitem", {
        name: /Reenviar convite/
      }));
      await tela.findByText("Convite reenviado");
    });
    await step("o ⋯ de um desativado oferece Reativar e não Reenviar", async () => {
      await userEvent.click(segmento(tela, "Desativados"));
      const l = await lista(tela);
      await waitFor(() => expect(l.queryByText("Luana Fontes")).not.toBeInTheDocument());
      await expect(l.getByText("Otávio Lins")).toBeInTheDocument();
      const {
        itens
      } = await abrirMenu(tela, "Otávio Lins");
      await expect(itens).toEqual(["Editar", "Reativar"]);
      await userEvent.keyboard("{Escape}");
      await waitFor(() => expect(tela.queryByRole("menu")).not.toBeInTheDocument());
    });
    await step("a busca filtra pelo identificador e o vazio oferece Limpar", async () => {
      await userEvent.click(segmento(tela, "Todos"));
      const l = await lista(tela);
      await digitar(l.getByRole("searchbox", {
        name: "Buscar por nome, e-mail ou identificador"
      }), "ATD-033");
      await waitFor(() => expect(l.queryByText("Rafael Moura")).not.toBeInTheDocument());
      await expect(l.getByText("Diego Prado")).toBeInTheDocument();
      await digitar(l.getByRole("searchbox", {
        name: "Buscar por nome, e-mail ou identificador"
      }), "ninguém com este nome");
      await l.findByText("Nenhum atendente com esta busca");
      await userEvent.click(l.getByRole("button", {
        name: "Limpar"
      }));
      await l.findByText("Rafael Moura");
    });
    await semRotaSemFixture();
  }
}`,...(T=(g=d.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var f,R,E,b,h;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Sem permissão de gerir",
  parameters: {
    jornada: {
      cenario: "padrao",
      sessao: {
        papel: "gerente",
        permissoes: {
          "atendentes.ver": true,
          "operacao.ver": true,
          "sessoes.ver": true
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);

    // tabela: o ↗ da linha; abaixo de 900 px (cards) não há ↗, abre pelo nome
    const abrirPerfil = (l: Awaited<ReturnType<typeof lista>>) => l.queryByRole("button", {
      name: "Abrir perfil de Rafael Moura"
    }) ?? l.getByRole("link", {
      name: "Rafael Moura"
    });
    await step("nenhuma linha tem ⋯ nem Novo atendente; o acesso ao perfil continua", async () => {
      const l = await lista(tela);
      await l.findByText("Rafael Moura");
      await expect(l.queryAllByRole("button", {
        name: /^Mais ações de/
      })).toEqual([]);
      await expect(l.queryByRole("button", {
        name: /Novo atendente/
      })).not.toBeInTheDocument();
      await expect(abrirPerfil(l)).toBeInTheDocument();
    });
    await step("o ↗ (ou o nome, no celular) abre o perfil do atendente", async () => {
      await userEvent.click(abrirPerfil(await lista(tela)));
      await tela.findByRole("heading", {
        name: "Perfil do atendente"
      });
    });
    await semRotaSemFixture();
  }
}`,...(E=(R=m.parameters)==null?void 0:R.docs)==null?void 0:E.source},description:{story:"Gerente cujo grupo vê atendentes mas não gere (sem `atendentes.gerir`).",...(h=(b=m.parameters)==null?void 0:b.docs)==null?void 0:h.description}}};export{d as Atendentes,m as SemPermissaoDeGerir,V as __namedExportsOrder,Q as default};
