import{t as u,d as T,s as x,i as b,m as j}from"./jornadaOperar-qu3lmx3f.js";import"./ShellJornada-D6or9w_N.js";import"./jsx-runtime-CIMg3zCe.js";import"./iframe-sQhv-dP9.js";import"./preload-helper-D6kgxu3v.js";import"./dadosShell-DVjA70Zd.js";import"./index-Cca0CcRs.js";import"./index-BUBJGiik.js";import"./v2-QXom_1Mi.js";import"./index-C1SKTYOl.js";import"./api-DeTcSHTh.js";import"./index-KxmTJ2KI.js";import"./marca-JJvqtdKG.js";import"./carregando-Cu9nLz69.js";import"./celulas-DMaLRg05.js";/* empty css              */import"./MiniBarras-D1hOdhnB.js";import"./cores-D-iLqYVd.js";import"./Login-DFawTORA.js";import"./etapas-DD6roYoj.js";/* empty css                */const{expect:o,userEvent:r,waitFor:s,within:l}=__STORYBOOK_MODULE_TEST__,xa={title:"Jornadas/Operação",...j("/operacao","Jornada da Operação (fila de revisão) dentro do shell, papel admin: casos aguardando revisão de IA e de humano com sinais, SLA e posse; aprovar com ressalva, recusar e reencaminhar tiram o caso da fila, e o Painel de controle (pelo menu) mostra o mesmo total.")};async function p(e,t){const n=(await e.findByText(t)).closest("tr, .hk-lista-card");if(!n)throw new Error(`linha de ${t} não encontrada`);return n}async function f(e,t){const a=await p(e,t);return l(a.tagName==="TR"?a.nextElementSibling:a)}const z=e=>new RegExp(`^(Ver detalhes e decidir|Decidir caso de):? ${e}$`);async function m(e,t){await r.click(l(await p(e,t)).getByRole("button",{name:z(t)}))}async function g(e,t){const a=e.queryByRole("button",{name:/^Filtros/});if(!a)return r.click(e.getByRole("button",{name:t}));await r.click(a);const n=l(await e.findByRole("dialog",{name:"Filtros"}));await r.click(n.getByRole("button",{name:t})),await r.click(n.getByRole("button",{name:"Ver resultados"}))}function K(e){return[...e.querySelectorAll(".op-cliente-nome")].map(t=>t.textContent??"")}async function J(e,t,a){const n=t.indexOf(a),i=t[n+1]??t[n-1],c=u(e),d=l(await p(c,i)).getByRole("button",{name:z(i)});await s(()=>o(e.ownerDocument.activeElement).toBe(d)),await o(d).toHaveAttribute("aria-expanded","false"),await o(e.querySelector("[data-op-anuncio]")).toHaveTextContent(`Caso de ${a} decidido.`)}async function $(e,t,a,n){await m(e,t);const i=await f(e,t);await T(await i.findByRole("textbox"),n),await r.click(i.getByRole("button",{name:a})),await s(()=>o(e.queryByText(t)).not.toBeInTheDocument())}const y={name:"Padrão",play:async({canvasElement:e,step:t})=>{const a=u(e);await t("os 3 KPIs mostram os números do seed e IA + Humano soma Todas",async()=>{const n=l(e.querySelector(".op-kpis"));await s(()=>o(e.querySelector(".op-kpis")).toHaveTextContent(/Na fila\s*6\s*aguardando revisão/)),await o(n.getByText("Fora do SLA").closest(".op-kpi")).toHaveTextContent(/Fora do SLA\s*2/),await o(n.getByText("Mais antiga").closest(".op-kpi")).toHaveTextContent(/Mais antiga\s*9h20/);const i=async d=>{var E;return Number((E=(await a.findByRole("button",{name:d,hidden:!0})).textContent)==null?void 0:E.replace(/\D/g,""))},c=a.queryByRole("button",{name:/^Filtros/});c&&await r.click(c),await s(async()=>o(await i(/^Todas \d/)).toBe(6)),await o(await i(/^IA \d/)+await i(/^Humano \d/)).toBe(await i(/^Todas \d/)),c&&await r.click(a.getByRole("button",{name:"Ver resultados"}))}),await t("a ordem inicial é Esperando ↓",async()=>{await a.findByText("Gilberto Paes Andrade"),e.querySelector("table")&&await o(e.querySelector("th[aria-sort=descending]")).toHaveTextContent(/Esperando/)}),await t("a fila mostra os 6 casos, com sinais e os acima do SLA destacados",async()=>{await a.findByText("Gilberto Paes Andrade");for(const n of["Helena Duarte Campos","Bruno Assis Nogueira","Lúcia Fernandes Rego","Otávio Ramos Peixoto","Vera Lúcia Mattos"])await o(a.getByText(n)).toBeInTheDocument();await o(l(await p(a,"Bruno Assis Nogueira")).getByText(/fora do SLA/)).toBeInTheDocument(),await o(l(await p(a,"Helena Duarte Campos")).queryByText(/fora do SLA/)).not.toBeInTheDocument()}),await t("busca e canal filtram; limpar devolve todos",async()=>{await T(a.getByPlaceholderText("Buscar por nome ou referência"),"Otávio"),await s(()=>o(a.queryByText("Gilberto Paes Andrade")).not.toBeInTheDocument()),await o(a.getByText("Otávio Ramos Peixoto")).toBeInTheDocument(),await r.click(a.getByRole("button",{name:/^Limpar \(/})),await a.findByText("Gilberto Paes Andrade"),await g(a,/^Humano/),await s(()=>o(a.queryByText("Vera Lúcia Mattos")).not.toBeInTheDocument()),await o(a.getByText("Gilberto Paes Andrade")).toBeInTheDocument(),await g(a,/^Todas/),await a.findByText("Vera Lúcia Mattos")}),await t("aprovar sem observação pede justificativa; com observação o caso sai da fila",async()=>{await m(a,"Otávio Ramos Peixoto");const n=await f(a,"Otávio Ramos Peixoto");await r.click(await n.findByRole("button",{name:"Aprovar com ressalva"})),await n.findByText(/observação é obrigatória/),await T(n.getByRole("textbox"),"Dúvida sobre o banco esclarecida na gravação.");const i=K(e);await r.click(n.getByRole("button",{name:"Aprovar com ressalva"})),await s(()=>o(a.queryByText("Otávio Ramos Peixoto")).not.toBeInTheDocument()),await J(e,i,"Otávio Ramos Peixoto")}),await t('ao abrir pelo chevron, o foco vai para o título "Decidir: <cliente>"',async()=>{await m(a,"Lúcia Fernandes Rego"),await s(()=>o(e.ownerDocument.activeElement).toHaveTextContent("Decidir: Lúcia Fernandes Rego")),await m(a,"Lúcia Fernandes Rego")}),await t("recusar com o motivo tira o caso da fila",async()=>{await $(a,"Gilberto Paes Andrade","Recusar","Terceiro respondeu no lugar do cliente.")}),await t("reencaminhar com roteiro humano e departamento mostra a confirmação e tira o caso",async()=>{await m(a,"Helena Duarte Campos");const n=await f(a,"Helena Duarte Campos");await r.click(await n.findByRole("button",{name:"Reencaminhar para vídeo humano"}));const i=l(await a.findByRole("dialog"));await r.selectOptions(i.getByLabelText("Roteiro (modo humano)"),"rot_humano_inss|2"),await r.selectOptions(i.getByLabelText("Departamento"),"dep-inss"),await r.click(i.getByRole("button",{name:"Reencaminhar"})),await i.findByText("Nova sessão criada, vinculada à original."),await r.click(i.getByRole("button",{name:"Concluir"})),await s(()=>o(a.queryByText("Helena Duarte Campos")).not.toBeInTheDocument())}),await t("o Painel de controle, pelo menu, mostra o mesmo total da fila",async()=>{await b(e,/^Dashboard/),await a.findByText("de 3 aguardando revisão")}),await x()}},B={name:"KPIs: Na fila e Mais antiga",play:async({canvasElement:e,step:t})=>{const a=u(e),n=await a.findByRole("button",{name:"Na fila: 6. Mostrar todos"}),i=a.getByRole("button",{name:"Mais antiga: 9h20. Ir para a mais antiga"});await t("Fora do SLA não é botão e os dois atalhos têm alvo de 44 px",async()=>{await o(a.queryByRole("button",{name:/Fora do SLA/})).not.toBeInTheDocument();for(const c of[n,i]){const d=c.getBoundingClientRect();await o(Math.min(d.width,d.height)).toBeGreaterThanOrEqual(44)}}),await t("Na fila limpa a busca e mostra todos",async()=>{await a.findByText("Gilberto Paes Andrade"),await T(a.getByPlaceholderText("Buscar por nome ou referência"),"Otávio"),await s(()=>o(a.queryByText("Gilberto Paes Andrade")).not.toBeInTheDocument()),await r.click(n),await o(a.getByPlaceholderText("Buscar por nome ou referência")).toHaveValue(""),await a.findByText("Gilberto Paes Andrade"),await o(a.getByText("Vera Lúcia Mattos")).toBeInTheDocument()}),await t("Mais antiga limpa o canal e foca o caso que espera há mais tempo",async()=>{await g(a,/^IA/),await s(()=>o(a.queryByText("Gilberto Paes Andrade")).not.toBeInTheDocument()),await r.click(i),await a.findByText("Gilberto Paes Andrade");const c=e.querySelector("tbody tr, .hk-lista-card");await s(()=>o(c==null?void 0:c.contains(e.ownerDocument.activeElement)).toBe(!0)),await o(e.ownerDocument.activeElement).toHaveAttribute("aria-expanded","false")}),await x()}},h={parameters:{jornada:{cenario:"operar-vazio"}},play:async({canvasElement:e})=>{const t=u(e);await t.findByText("Fila vazia"),await b(e,/^Dashboard/),await t.findByText("de 0 aguardando revisão"),await x()}},R=["GET /v1/operacao"],v={parameters:{jornada:{cenario:"operar",falhar:[...R]}},play:async({canvasElement:e})=>{const t=u(e),a=l(await t.findByRole("alert"));await o(a.getByText("Não foi possível carregar a fila de operação.")).toBeInTheDocument(),await o(a.getByRole("button",{name:/Tentar de novo/})).toBeEnabled(),await o(t.getByRole("button",{name:"Atualizar fila"})).toBeEnabled(),await b(e,"Chamadas realizadas"),await t.findByText("Ester Nunes Prado"),await x([...R])}},w={name:"Sem permissão de revisar",parameters:{jornada:{cenario:"operar",sessao:{papel:"gerente",permissoes:{"operacao.ver":!0,"sessoes.ver":!0,"dossie.ver":!0}}}},play:async({canvasElement:e})=>{const t=u(e);await m(t,"Otávio Ramos Peixoto");const a=await f(t,"Otávio Ramos Peixoto");await a.findByText("Decidir este caso exige a permissão de revisar dossiê."),await o(a.queryByRole("button",{name:"Aprovar com ressalva"})).not.toBeInTheDocument(),await o(a.queryByRole("button",{name:"Recusar"})).not.toBeInTheDocument(),await o(a.queryByRole("button",{name:"Reencaminhar para vídeo humano"})).not.toBeInTheDocument(),await o(a.queryByRole("textbox")).not.toBeInTheDocument(),await o(a.getByRole("link",{name:/Abrir dossiê/})).toBeInTheDocument(),await x()}},ya=["Padrao","AtalhosDosKpis","Vazio","Erro","SemPermissaoDeRevisar"];var D,A,P;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Padrão",
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await step("os 3 KPIs mostram os números do seed e IA + Humano soma Todas", async () => {
      const kpis = within(canvasElement.querySelector(".op-kpis") as HTMLElement);
      await waitFor(() => expect(canvasElement.querySelector(".op-kpis")).toHaveTextContent(/Na fila\\s*6\\s*aguardando revisão/));
      await expect(kpis.getByText("Fora do SLA").closest(".op-kpi")).toHaveTextContent(/Fora do SLA\\s*2/);
      await expect(kpis.getByText("Mais antiga").closest(".op-kpi")).toHaveTextContent(/Mais antiga\\s*9h20/);
      // o segmentado fica na folha "Filtros" abaixo de 900 px: lido mesmo oculto
      const numero = async (nome: RegExp) => Number((await tela.findByRole("button", {
        name: nome,
        hidden: true
      })).textContent?.replace(/\\D/g, ""));
      const filtros = tela.queryByRole("button", {
        name: /^Filtros/
      });
      if (filtros) await userEvent.click(filtros);
      await waitFor(async () => expect(await numero(/^Todas \\d/)).toBe(6));
      await expect((await numero(/^IA \\d/)) + (await numero(/^Humano \\d/))).toBe(await numero(/^Todas \\d/));
      if (filtros) await userEvent.click(tela.getByRole("button", {
        name: "Ver resultados"
      }));
    });
    await step("a ordem inicial é Esperando ↓", async () => {
      await tela.findByText("Gilberto Paes Andrade");
      // nos cards (375) não há cabeçalho de coluna; a ordem é a mesma
      if (canvasElement.querySelector("table")) await expect(canvasElement.querySelector("th[aria-sort=descending]")).toHaveTextContent(/Esperando/);
    });
    await step("a fila mostra os 6 casos, com sinais e os acima do SLA destacados", async () => {
      await tela.findByText("Gilberto Paes Andrade");
      for (const cliente of ["Helena Duarte Campos", "Bruno Assis Nogueira", "Lúcia Fernandes Rego", "Otávio Ramos Peixoto", "Vera Lúcia Mattos"]) {
        await expect(tela.getByText(cliente)).toBeInTheDocument();
      }
      // o destaque é o rótulo "fora do SLA" na coluna de espera (o fundo e o
      // filete vermelhos acompanham a mesma condição, acima_sla)
      await expect(within(await linhaDe(tela, "Bruno Assis Nogueira")).getByText(/fora do SLA/)).toBeInTheDocument();
      await expect(within(await linhaDe(tela, "Helena Duarte Campos")).queryByText(/fora do SLA/)).not.toBeInTheDocument();
    });
    await step("busca e canal filtram; limpar devolve todos", async () => {
      await digitar(tela.getByPlaceholderText("Buscar por nome ou referência"), "Otávio");
      await waitFor(() => expect(tela.queryByText("Gilberto Paes Andrade")).not.toBeInTheDocument());
      await expect(tela.getByText("Otávio Ramos Peixoto")).toBeInTheDocument();
      await userEvent.click(tela.getByRole("button", {
        name: /^Limpar \\(/
      }));
      await tela.findByText("Gilberto Paes Andrade");
      await escolherCanal(tela, /^Humano/);
      await waitFor(() => expect(tela.queryByText("Vera Lúcia Mattos")).not.toBeInTheDocument());
      await expect(tela.getByText("Gilberto Paes Andrade")).toBeInTheDocument();
      await escolherCanal(tela, /^Todas/);
      await tela.findByText("Vera Lúcia Mattos");
    });
    await step("aprovar sem observação pede justificativa; com observação o caso sai da fila", async () => {
      await abrirCaso(tela, "Otávio Ramos Peixoto");
      const detalhe = await detalheDe(tela, "Otávio Ramos Peixoto");
      await userEvent.click(await detalhe.findByRole("button", {
        name: "Aprovar com ressalva"
      }));
      await detalhe.findByText(/observação é obrigatória/);
      await digitar(detalhe.getByRole("textbox"), "Dúvida sobre o banco esclarecida na gravação.");
      const ordemAntes = ordemDasLinhas(canvasElement);
      await userEvent.click(detalhe.getByRole("button", {
        name: "Aprovar com ressalva"
      }));
      await waitFor(() => expect(tela.queryByText("Otávio Ramos Peixoto")).not.toBeInTheDocument());
      await conferirFocoDepoisDeDecidir(canvasElement, ordemAntes, "Otávio Ramos Peixoto");
    });
    await step("ao abrir pelo chevron, o foco vai para o título \\"Decidir: <cliente>\\"", async () => {
      await abrirCaso(tela, "Lúcia Fernandes Rego");
      await waitFor(() => expect(canvasElement.ownerDocument.activeElement).toHaveTextContent("Decidir: Lúcia Fernandes Rego"));
      await abrirCaso(tela, "Lúcia Fernandes Rego");
    });
    await step("recusar com o motivo tira o caso da fila", async () => {
      await decidirCaso(tela, "Gilberto Paes Andrade", "Recusar", "Terceiro respondeu no lugar do cliente.");
    });
    await step("reencaminhar com roteiro humano e departamento mostra a confirmação e tira o caso", async () => {
      await abrirCaso(tela, "Helena Duarte Campos");
      const detalhe = await detalheDe(tela, "Helena Duarte Campos");
      await userEvent.click(await detalhe.findByRole("button", {
        name: "Reencaminhar para vídeo humano"
      }));
      const modal = within(await tela.findByRole("dialog"));
      await userEvent.selectOptions(modal.getByLabelText("Roteiro (modo humano)"), "rot_humano_inss|2");
      await userEvent.selectOptions(modal.getByLabelText("Departamento"), "dep-inss");
      await userEvent.click(modal.getByRole("button", {
        name: "Reencaminhar"
      }));
      await modal.findByText("Nova sessão criada, vinculada à original.");
      await userEvent.click(modal.getByRole("button", {
        name: "Concluir"
      }));
      await waitFor(() => expect(tela.queryByText("Helena Duarte Campos")).not.toBeInTheDocument());
    });
    await step("o Painel de controle, pelo menu, mostra o mesmo total da fila", async () => {
      await irPeloMenu(canvasElement, /^Dashboard/);
      await tela.findByText("de 3 aguardando revisão");
    });
    await semRotaSemFixture();
  }
}`,...(P=(A=y.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var F,I,C;B.parameters={...B.parameters,docs:{...(F=B.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "KPIs: Na fila e Mais antiga",
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    const naFila = await tela.findByRole("button", {
      name: "Na fila: 6. Mostrar todos"
    });
    const maisAntiga = tela.getByRole("button", {
      name: "Mais antiga: 9h20. Ir para a mais antiga"
    });
    await step("Fora do SLA não é botão e os dois atalhos têm alvo de 44 px", async () => {
      await expect(tela.queryByRole("button", {
        name: /Fora do SLA/
      })).not.toBeInTheDocument();
      for (const botao of [naFila, maisAntiga]) {
        const caixa = botao.getBoundingClientRect();
        await expect(Math.min(caixa.width, caixa.height)).toBeGreaterThanOrEqual(44);
      }
    });
    await step("Na fila limpa a busca e mostra todos", async () => {
      await tela.findByText("Gilberto Paes Andrade");
      await digitar(tela.getByPlaceholderText("Buscar por nome ou referência"), "Otávio");
      await waitFor(() => expect(tela.queryByText("Gilberto Paes Andrade")).not.toBeInTheDocument());
      await userEvent.click(naFila);
      await expect(tela.getByPlaceholderText("Buscar por nome ou referência")).toHaveValue("");
      await tela.findByText("Gilberto Paes Andrade");
      await expect(tela.getByText("Vera Lúcia Mattos")).toBeInTheDocument();
    });
    await step("Mais antiga limpa o canal e foca o caso que espera há mais tempo", async () => {
      await escolherCanal(tela, /^IA/);
      await waitFor(() => expect(tela.queryByText("Gilberto Paes Andrade")).not.toBeInTheDocument());
      await userEvent.click(maisAntiga);
      await tela.findByText("Gilberto Paes Andrade");
      const primeira = canvasElement.querySelector<HTMLElement>("tbody tr, .hk-lista-card");
      await waitFor(() => expect(primeira?.contains(canvasElement.ownerDocument.activeElement)).toBe(true));
      await expect(canvasElement.ownerDocument.activeElement).toHaveAttribute("aria-expanded", "false");
    });
    await semRotaSemFixture();
  }
}`,...(C=(I=B.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var L,S,q;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    jornada: {
      cenario: "operar-vazio"
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await tela.findByText("Fila vazia");
    await irPeloMenu(canvasElement, /^Dashboard/);
    await tela.findByText("de 0 aguardando revisão");
    await semRotaSemFixture();
  }
}`,...(q=(S=h.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var k,O,H;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    jornada: {
      cenario: "operar",
      falhar: [...FALHAR]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    const erroCard = within(await tela.findByRole("alert"));
    await expect(erroCard.getByText("Não foi possível carregar a fila de operação.")).toBeInTheDocument();
    await expect(erroCard.getByRole("button", {
      name: /Tentar de novo/
    })).toBeEnabled();
    await expect(tela.getByRole("button", {
      name: "Atualizar fila"
    })).toBeEnabled();
    await irPeloMenu(canvasElement, "Chamadas realizadas");
    await tela.findByText("Ester Nunes Prado");
    await semRotaSemFixture([...FALHAR]);
  }
}`,...(H=(O=v.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var M,G,N,V,_;w.parameters={...w.parameters,docs:{...(M=w.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Sem permissão de revisar",
  parameters: {
    jornada: {
      cenario: "operar",
      sessao: {
        papel: "gerente",
        permissoes: {
          "operacao.ver": true,
          "sessoes.ver": true,
          "dossie.ver": true
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await abrirCaso(tela, "Otávio Ramos Peixoto");
    const detalhe = await detalheDe(tela, "Otávio Ramos Peixoto");
    await detalhe.findByText("Decidir este caso exige a permissão de revisar dossiê.");
    await expect(detalhe.queryByRole("button", {
      name: "Aprovar com ressalva"
    })).not.toBeInTheDocument();
    await expect(detalhe.queryByRole("button", {
      name: "Recusar"
    })).not.toBeInTheDocument();
    await expect(detalhe.queryByRole("button", {
      name: "Reencaminhar para vídeo humano"
    })).not.toBeInTheDocument();
    await expect(detalhe.queryByRole("textbox")).not.toBeInTheDocument();
    await expect(detalhe.getByRole("link", {
      name: /Abrir dossiê/
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(N=(G=w.parameters)==null?void 0:G.docs)==null?void 0:N.source},description:{story:"B37 (teste de aceite de B19): gerente cujo grupo não tem `dossie.revisar`\nnem `sessoes.reencaminhar`. O painel abre só para leitura, com a frase e o ↗.",...(_=(V=w.parameters)==null?void 0:V.docs)==null?void 0:_.description}}};export{B as AtalhosDosKpis,v as Erro,y as Padrao,w as SemPermissaoDeRevisar,h as Vazio,ya as __namedExportsOrder,xa as default};
