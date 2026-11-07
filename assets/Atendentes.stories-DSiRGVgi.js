import{t as D,d as v,s as A,m as q}from"./jornadaOperar-s38zFs67.js";import"./ShellJornada-ByPwEQxC.js";import"./jsx-runtime-C-NnYQQj.js";import"./iframe-DEC6x2_9.js";import"./preload-helper-D6kgxu3v.js";import"./dadosShell-D7euqUo-.js";import"./index-Dz2FqD8L.js";import"./index-CmHu5Euv.js";import"./v2-CFLOXcvu.js";import"./index-CnB9h5a6.js";import"./api-C_qpy-2i.js";import"./index-DJSstCC2.js";import"./marca-BWkAzl1y.js";import"./carregando-CNp4uhvU.js";import"./celulas-DiU8SfVX.js";/* empty css              */import"./CartaoKpi-BS2LlUJ9.js";import"./MiniBarras-DTviKg-v.js";import"./cores-D-iLqYVd.js";import"./Login-xO3uyH8U.js";import"./etapas-CLsHaCEc.js";/* empty css                */const{expect:t,userEvent:r,waitFor:m,within:p}=__STORYBOOK_MODULE_TEST__,y=q("/atendentes","Jornada de Atendentes dentro do shell: roster ao vivo e, abaixo, a lista no padrão de Sessões (docs/redesign/12, cartão A), com busca, seletor de colunas, segmentado Todos · Ativos · Convite pendente · Desativados com contagem, Situação (convite que não saiu, devolvido, desativado) e o ⋯ por linha. O ⋯ só oferece o que o usuário pode fazer: sem `atendentes.gerir` ele some e fica só o ↗ do perfil. Abaixo de 900 px a lista vira cards.",null),W={title:"Jornadas/Atendentes",...y,parameters:{...y.parameters,jornada:{cenario:"padrao"}}};async function s(i){return p(await i.findByRole("region",{name:"Cadastro de atendentes"}))}function c(i,o){return p(i.getByRole("group",{name:"Situação dos atendentes"})).getByRole("button",{name:new RegExp(`^${o}\\b`)})}const w=i=>{var o;return Number(((o=/(\d+)\s*$/.exec(i.textContent??""))==null?void 0:o[1])??NaN)};async function x(i,o){await r.click((await s(i)).getByRole("button",{name:`Mais ações de ${o}`}));const a=await i.findByRole("menu"),e=p(a).getAllByRole("menuitem").map(n=>{var l;return((l=n.querySelector(".hk-pop-item-texto"))==null?void 0:l.textContent)??""});return{menu:p(a),itens:e}}const d={name:"Atendentes",play:async({canvasElement:i,step:o})=>{const a=D(i);await o("Ao vivo agora abre e fecha e lembra a escolha; a introdução fica no sub do cadastro",async()=>{const e=await a.findByRole("button",{name:/^Ao vivo agora/}),n=e.getAttribute("aria-expanded");await r.click(e),await m(()=>t(e.getAttribute("aria-expanded")).not.toBe(n)),await t(localStorage.getItem("atendentes.secao.aoVivo")).toBe(n==="true"?"0":"1"),e.getAttribute("aria-expanded")==="true"&&await r.click(e),await t(e).toHaveAttribute("aria-expanded","false"),await t(await s(a).then(l=>l.getByText(/^Atendentes trabalham só a fila de atendimento humano/))).toBeInTheDocument()}),await o("a lista abre em Todos, e os segmentos somam Todos",async()=>{await(await s(a)).findByText("Rafael Moura"),await m(()=>t(w(c(a,"Todos"))).toBe(6)),await t(c(a,"Todos")).toHaveAttribute("aria-pressed","true");const e=["Ativos","Convite pendente","Desativados"].map(n=>w(c(a,n)));await t(e).toEqual([3,2,1]),await t(e.reduce((n,l)=>n+l,0)).toBe(w(c(a,"Todos")))}),await o("Convite pendente mostra só quem nunca entrou, com o motivo do convite",async()=>{await r.click(c(a,"Convite pendente"));const e=await s(a);await m(()=>t(e.queryByText("Rafael Moura")).not.toBeInTheDocument()),await t(e.getByText("Luana Fontes")).toBeInTheDocument(),await t(e.getByText("Bianca Serrano")).toBeInTheDocument(),await t(e.getAllByText("convite não saiu").length).toBeGreaterThan(0),await t(e.getAllByText("e-mail devolvido").length).toBeGreaterThan(0)}),await o("o ⋯ de quem nunca entrou: Editar, Reenviar convite e Desativar (admin não exclui)",async()=>{const{itens:e}=await x(a,"Luana Fontes");await t(e).toEqual(["Editar","Reenviar convite","Desativar"]),await r.click(a.getByRole("menuitem",{name:/Reenviar convite/})),await a.findByText("Convite reenviado")}),await o("o ⋯ de um desativado oferece Reativar e não Reenviar",async()=>{await r.click(c(a,"Desativados"));const e=await s(a);await m(()=>t(e.queryByText("Luana Fontes")).not.toBeInTheDocument()),await t(e.getByText("Otávio Lins")).toBeInTheDocument();const{itens:n}=await x(a,"Otávio Lins");await t(n).toEqual(["Editar","Reativar"]),await r.keyboard("{Escape}"),await m(()=>t(a.queryByRole("menu")).not.toBeInTheDocument())}),await o("a busca filtra pelo identificador e o vazio oferece Limpar",async()=>{await r.click(c(a,"Todos"));const e=await s(a);await v(e.getByRole("searchbox",{name:"Buscar por nome, e-mail ou identificador"}),"ATD-033"),await m(()=>t(e.queryByText("Rafael Moura")).not.toBeInTheDocument()),await t(e.getByText("Diego Prado")).toBeInTheDocument(),await v(e.getByRole("searchbox",{name:"Buscar por nome, e-mail ou identificador"}),"ninguém com este nome"),await e.findByText("Nenhum atendente com esta busca"),await r.click(e.getByRole("button",{name:"Limpar"})),await e.findByText("Rafael Moura")}),await A()}},u={name:"Sem permissão de gerir",parameters:{jornada:{cenario:"padrao",sessao:{papel:"gerente",permissoes:{"atendentes.ver":!0,"operacao.ver":!0,"sessoes.ver":!0}}}},play:async({canvasElement:i,step:o})=>{const a=D(i),e=n=>n.queryByRole("button",{name:"Abrir perfil de Rafael Moura"})??n.getByRole("link",{name:"Rafael Moura"});await o("nenhuma linha tem ⋯ nem Novo atendente; o acesso ao perfil continua",async()=>{const n=await s(a);await n.findByText("Rafael Moura"),await t(n.queryAllByRole("button",{name:/^Mais ações de/})).toEqual([]),await t(n.queryByRole("button",{name:/Novo atendente/})).not.toBeInTheDocument(),await t(e(n)).toBeInTheDocument()}),await o("o ↗ (ou o nome, no celular) abre o perfil do atendente",async()=>{await r.click(e(await s(a))),await a.findByRole("heading",{name:"Perfil do atendente"})}),await A()}},X=["Atendentes","SemPermissaoDeGerir"];var B,g,f;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "Atendentes",
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await step("Ao vivo agora abre e fecha e lembra a escolha; a introdução fica no sub do cadastro", async () => {
      const aoVivo = await tela.findByRole("button", {
        name: /^Ao vivo agora/
      });
      const antes = aoVivo.getAttribute("aria-expanded");
      await userEvent.click(aoVivo);
      await waitFor(() => expect(aoVivo.getAttribute("aria-expanded")).not.toBe(antes));
      await expect(localStorage.getItem("atendentes.secao.aoVivo")).toBe(antes === "true" ? "0" : "1");
      if (aoVivo.getAttribute("aria-expanded") === "true") await userEvent.click(aoVivo);
      await expect(aoVivo).toHaveAttribute("aria-expanded", "false");
      await expect(await lista(tela).then(l => l.getByText(/^Atendentes trabalham só a fila de atendimento humano/))).toBeInTheDocument();
    });
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
}`,...(f=(g=d.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var T,b,R,h,E;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(R=(b=u.parameters)==null?void 0:b.docs)==null?void 0:R.source},description:{story:"Gerente cujo grupo vê atendentes mas não gere (sem `atendentes.gerir`).",...(E=(h=u.parameters)==null?void 0:h.docs)==null?void 0:E.description}}};export{d as Atendentes,u as SemPermissaoDeGerir,X as __namedExportsOrder,W as default};
