import{t as B,d as T,s as x,m as M}from"./jornadaOperar-CCnVgK82.js";import{F as k}from"./ShellJornada-DOz9uM2T.js";import"./jsx-runtime-CEo06wvt.js";import"./iframe-DVaGrerc.js";import"./preload-helper-D6kgxu3v.js";import"./dadosShell-BpcFcrpX.js";import"./index-BEALldq7.js";import"./index-DfpIZROc.js";import"./v2-CBuWZhP8.js";import"./index-Ctu9A9u4.js";import"./api-CwvJBfED.js";import"./index-c6P9_18s.js";import"./marca-JlK6OYD8.js";import"./carregando-CO0SwyOL.js";import"./celulas-Ddd5ld11.js";/* empty css              */import"./CartaoKpi-CPSdukY9.js";import"./MiniBarras-D-NVWNi3.js";import"./cores-D-iLqYVd.js";import"./Login-Cope_TMD.js";import"./etapas-CjwTh5VZ.js";/* empty css                */const{expect:a,userEvent:r,waitFor:m,within:w}=__STORYBOOK_MODULE_TEST__,g=M("/atendentes","Jornada de Atendentes dentro do shell: roster ao vivo e, abaixo, a lista no padrão de Sessões (docs/redesign/12, cartão A), com busca, seletor de colunas, segmentado Todos · Ativos · Convite pendente · Desativados com contagem, Situação (convite que não saiu, devolvido, desativado) e o ⋯ por linha. O ⋯ só oferece o que o usuário pode fazer: sem `atendentes.gerir` ele some e fica só o ↗ do perfil. Abaixo de 900 px a lista vira cards.",null),te={title:"Jornadas/Atendentes",...g,parameters:{...g.parameters,jornada:{cenario:"padrao"}}};async function s(i){return w(await i.findByRole("region",{name:"Cadastro de atendentes"}))}function c(i,n){return w(i.getByRole("group",{name:"Situação dos atendentes"})).getByRole("button",{name:new RegExp(`^${n}\\b`)})}const v=i=>{var n;return Number(((n=/(\d+)\s*$/.exec(i.textContent??""))==null?void 0:n[1])??NaN)};async function y(i,n){await r.click((await s(i)).getByRole("button",{name:`Mais ações de ${n}`}));const t=await i.findByRole("menu"),e=w(t).getAllByRole("menuitem").map(o=>{var l;return((l=o.querySelector(".hk-pop-item-texto"))==null?void 0:l.textContent)??""});return{menu:w(t),itens:e}}const u={name:"Atendentes",play:async({canvasElement:i,step:n})=>{const t=B(i);await n("Ao vivo agora abre e fecha e lembra a escolha; a introdução fica no sub do cadastro",async()=>{const e=await t.findByRole("button",{name:/^Ao vivo agora/}),o=e.getAttribute("aria-expanded");await r.click(e),await m(()=>a(e.getAttribute("aria-expanded")).not.toBe(o)),await a(localStorage.getItem("atendentes.secao.aoVivo")).toBe(o==="true"?"0":"1"),e.getAttribute("aria-expanded")==="true"&&await r.click(e),await a(e).toHaveAttribute("aria-expanded","false"),await a(await s(t).then(l=>l.getByText(/^Atendentes trabalham só a fila de atendimento humano/))).toBeInTheDocument()}),await n("a lista abre em Todos, e os segmentos somam Todos",async()=>{await(await s(t)).findByText("Rafael Moura"),await m(()=>a(v(c(t,"Todos"))).toBe(6)),await a(c(t,"Todos")).toHaveAttribute("aria-pressed","true");const e=["Ativos","Convite pendente","Desativados"].map(o=>v(c(t,o)));await a(e).toEqual([3,2,1]),await a(e.reduce((o,l)=>o+l,0)).toBe(v(c(t,"Todos")))}),await n("Convite pendente mostra só quem nunca entrou, com o motivo do convite",async()=>{await r.click(c(t,"Convite pendente"));const e=await s(t);await m(()=>a(e.queryByText("Rafael Moura")).not.toBeInTheDocument()),await a(e.getByText("Luana Fontes")).toBeInTheDocument(),await a(e.getByText("Bianca Serrano")).toBeInTheDocument(),await a(e.getAllByText("convite não saiu").length).toBeGreaterThan(0),await a(e.getAllByText("e-mail devolvido").length).toBeGreaterThan(0)}),await n("o ⋯ de quem nunca entrou: Editar, Reenviar convite e Desativar (admin não exclui)",async()=>{const{itens:e}=await y(t,"Luana Fontes");await a(e).toEqual(["Editar","Reenviar convite","Desativar"]),await r.click(t.getByRole("menuitem",{name:/Reenviar convite/})),await t.findByText("Convite reenviado")}),await n("o ⋯ de um desativado oferece Reativar e não Reenviar",async()=>{await r.click(c(t,"Desativados"));const e=await s(t);await m(()=>a(e.queryByText("Luana Fontes")).not.toBeInTheDocument()),await a(e.getByText("Otávio Lins")).toBeInTheDocument();const{itens:o}=await y(t,"Otávio Lins");await a(o).toEqual(["Editar","Reativar"]),await r.keyboard("{Escape}"),await m(()=>a(t.queryByRole("menu")).not.toBeInTheDocument())}),await n("a busca filtra pelo identificador e o vazio oferece Limpar",async()=>{await r.click(c(t,"Todos"));const e=await s(t);await T(e.getByRole("searchbox",{name:"Buscar por nome, e-mail ou identificador"}),"ATD-033"),await m(()=>a(e.queryByText("Rafael Moura")).not.toBeInTheDocument()),await a(e.getByText("Diego Prado")).toBeInTheDocument(),await T(e.getByRole("searchbox",{name:"Buscar por nome, e-mail ou identificador"}),"ninguém com este nome"),await e.findByText("Nenhum atendente com esta busca"),await r.click(e.getByRole("button",{name:"Limpar"})),await e.findByText("Rafael Moura")}),await x()}},d={name:"Sem permissão de gerir",parameters:{jornada:{cenario:"padrao",sessao:{papel:"gerente",permissoes:{"atendentes.ver":!0,"operacao.ver":!0,"sessoes.ver":!0}}}},play:async({canvasElement:i,step:n})=>{const t=B(i),e=o=>o.queryByRole("button",{name:"Abrir perfil de Rafael Moura"})??o.getByRole("link",{name:"Rafael Moura"});await n("nenhuma linha tem ⋯ nem Novo atendente; o acesso ao perfil continua",async()=>{const o=await s(t);await o.findByText("Rafael Moura"),await a(o.queryAllByRole("button",{name:/^Mais ações de/})).toEqual([]),await a(o.queryByRole("button",{name:/Novo atendente/})).not.toBeInTheDocument(),await a(e(o)).toBeInTheDocument()}),await n("o ↗ (ou o nome, no celular) abre o perfil do atendente",async()=>{await r.click(e(await s(t))),await t.findByRole("heading",{name:"Perfil do atendente"})}),await x()}},p={name:"Reenviar convite: erro do servidor",parameters:{jornada:{cenario:"padrao",respostas:{"POST /v1/atendentes/:id/reenviar-convite":{status:502,corpo:{erro:"getaddrinfo ENOTFOUND email-smtp.sa-east-1.amazonaws.com",aviso:"SMTP 554: Message rejected"}}}}},play:async({canvasElement:i})=>{const n=B(i);await r.click(c(n,"Convite pendente")),await(await s(n)).findByText("Luana Fontes"),await y(n,"Luana Fontes"),await r.click(n.getByRole("menuitem",{name:/Reenviar convite/})),await a(await n.findByText("Convite não reenviado")).toBeInTheDocument(),await a(n.getByText(k.servidor)).toBeInTheDocument(),await a(n.queryByText(/getaddrinfo|SMTP 554/)).not.toBeInTheDocument(),await a(n.queryByText("Convite reenviado")).not.toBeInTheDocument(),await x()}},ne=["Atendentes","SemPermissaoDeGerir","ReenviarConviteErro"];var f,R,E;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(E=(R=u.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var h,b,D,A,I;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(D=(b=d.parameters)==null?void 0:b.docs)==null?void 0:D.source},description:{story:"Gerente cujo grupo vê atendentes mas não gere (sem `atendentes.gerir`).",...(I=(A=d.parameters)==null?void 0:A.docs)==null?void 0:I.description}}};var q,F,S;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "Reenviar convite: erro do servidor",
  parameters: {
    jornada: {
      cenario: "padrao",
      respostas: {
        "POST /v1/atendentes/:id/reenviar-convite": {
          status: 502,
          corpo: {
            erro: "getaddrinfo ENOTFOUND email-smtp.sa-east-1.amazonaws.com",
            aviso: "SMTP 554: Message rejected"
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await userEvent.click(segmento(tela, "Convite pendente"));
    await (await lista(tela)).findByText("Luana Fontes");
    await abrirMenu(tela, "Luana Fontes");
    await userEvent.click(tela.getByRole("menuitem", {
      name: /Reenviar convite/
    }));
    await expect(await tela.findByText("Convite não reenviado")).toBeInTheDocument();
    await expect(tela.getByText(FRASES_REENVIAR_CONVITE_ATENDENTE.servidor)).toBeInTheDocument();
    await expect(tela.queryByText(/getaddrinfo|SMTP 554/)).not.toBeInTheDocument();
    await expect(tela.queryByText("Convite reenviado")).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(S=(F=p.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};export{u as Atendentes,p as ReenviarConviteErro,d as SemPermissaoDeGerir,ne as __namedExportsOrder,te as default};
