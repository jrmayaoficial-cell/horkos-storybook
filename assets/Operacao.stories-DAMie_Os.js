import{t as w,i as f,s as h,d as T,m as G}from"./jornadaOperar-D7ZeOS19.js";import"./ShellJornada-BMJ4fpX0.js";import"./jsx-runtime-CqjonpNT.js";import"./iframe-DJrhfsQk.js";import"./preload-helper-D6kgxu3v.js";import"./index-9UivOglz.js";import"./index-BwsDp8T-.js";import"./marca-z0SsKRba.js";import"./carregando-BXT1e_OM.js";import"./dadosShell-BJlYo5ba.js";import"./index-DXvfoM1X.js";import"./v2-CZUD68ca.js";import"./index-DBwj-ecP.js";import"./api-Z9ulGFc_.js";import"./Login-DIYaNGVn.js";import"./celulas-DGaOaVoK.js";/* empty css              */import"./paleta-B-duPMKZ.js";import"./MiniBarras-CUX8X_xl.js";/* empty css                */const{expect:o,userEvent:r,waitFor:s,within:c}=__STORYBOOK_MODULE_TEST__,da={title:"Jornadas/Operação",...G("/operacao","Jornada da Operação (fila de revisão) dentro do shell, papel admin: casos aguardando revisão de IA e de humano com sinais, SLA e posse; aprovar com ressalva, recusar e reencaminhar tiram o caso da fila, e o Painel de controle (pelo menu) mostra o mesmo total.")};async function u(t,e){const n=(await t.findByText(e)).closest("tr, .hk-lista-card");if(!n)throw new Error(`linha de ${e} não encontrada`);return n}async function v(t,e){const a=await u(t,e);return c(a.tagName==="TR"?a.nextElementSibling:a)}const N=t=>new RegExp(`^(Ver detalhes e decidir|Decidir caso de):? ${t}$`);async function l(t,e){await r.click(c(await u(t,e)).getByRole("button",{name:N(e)}))}async function b(t,e){const a=t.queryByRole("button",{name:/^Filtros/});if(!a)return r.click(t.getByRole("button",{name:e}));await r.click(a);const n=c(await t.findByRole("dialog",{name:"Filtros"}));await r.click(n.getByRole("button",{name:e})),await r.click(n.getByRole("button",{name:"Ver resultados"}))}function _(t){return[...t.querySelectorAll(".op-cliente-nome")].map(e=>e.textContent??"")}async function V(t,e,a){const n=e.indexOf(a),i=e[n+1]??e[n-1],d=w(t),p=c(await u(d,i)).getByRole("button",{name:N(i)});await s(()=>o(t.ownerDocument.activeElement).toBe(p)),await o(p).toHaveAttribute("aria-expanded","false"),await o(t.querySelector("[data-op-anuncio]")).toHaveTextContent(`Caso de ${a} decidido.`)}async function z(t,e,a,n){await l(t,e);const i=await v(t,e);await T(await i.findByRole("textbox"),n),await r.click(i.getByRole("button",{name:a})),await s(()=>o(t.queryByText(e)).not.toBeInTheDocument())}const x={name:"Padrão",play:async({canvasElement:t,step:e})=>{const a=w(t);await e("os 3 KPIs mostram os números do seed e IA + Humano soma Todas",async()=>{const n=c(t.querySelector(".op-kpis"));await s(()=>o(t.querySelector(".op-kpis")).toHaveTextContent(/Na fila\s*6\s*aguardando revisão/)),await o(n.getByText("Fora do SLA").closest(".op-kpi")).toHaveTextContent(/Fora do SLA\s*2/),await o(n.getByText("Mais antiga").closest(".op-kpi")).toHaveTextContent(/Mais antiga\s*9h20/);const i=async p=>{var g;return Number((g=(await a.findByRole("button",{name:p,hidden:!0})).textContent)==null?void 0:g.replace(/\D/g,""))},d=a.queryByRole("button",{name:/^Filtros/});d&&await r.click(d),await s(async()=>o(await i(/^Todas \d/)).toBe(6)),await o(await i(/^IA \d/)+await i(/^Humano \d/)).toBe(await i(/^Todas \d/)),d&&await r.click(a.getByRole("button",{name:"Ver resultados"}))}),await e("a ordem inicial é Esperando ↓",async()=>{await a.findByText("Gilberto Paes Andrade"),t.querySelector("table")&&await o(t.querySelector("th[aria-sort=descending]")).toHaveTextContent(/Esperando/)}),await e("a fila mostra os 6 casos, com sinais e os acima do SLA destacados",async()=>{await a.findByText("Gilberto Paes Andrade");for(const n of["Helena Duarte Campos","Bruno Assis Nogueira","Lúcia Fernandes Rego","Otávio Ramos Peixoto","Vera Lúcia Mattos"])await o(a.getByText(n)).toBeInTheDocument();await o(c(await u(a,"Bruno Assis Nogueira")).getByText(/fora do SLA/)).toBeInTheDocument(),await o(c(await u(a,"Helena Duarte Campos")).queryByText(/fora do SLA/)).not.toBeInTheDocument()}),await e("busca e canal filtram; limpar devolve todos",async()=>{await T(a.getByPlaceholderText("Buscar por nome ou referência"),"Otávio"),await s(()=>o(a.queryByText("Gilberto Paes Andrade")).not.toBeInTheDocument()),await o(a.getByText("Otávio Ramos Peixoto")).toBeInTheDocument(),await r.click(a.getByRole("button",{name:/^Limpar \(/})),await a.findByText("Gilberto Paes Andrade"),await b(a,/^Humano/),await s(()=>o(a.queryByText("Vera Lúcia Mattos")).not.toBeInTheDocument()),await o(a.getByText("Gilberto Paes Andrade")).toBeInTheDocument(),await b(a,/^Todas/),await a.findByText("Vera Lúcia Mattos")}),await e("aprovar sem observação pede justificativa; com observação o caso sai da fila",async()=>{await l(a,"Otávio Ramos Peixoto");const n=await v(a,"Otávio Ramos Peixoto");await r.click(await n.findByRole("button",{name:"Aprovar com ressalva"})),await n.findByText(/observação é obrigatória/),await T(n.getByRole("textbox"),"Dúvida sobre o banco esclarecida na gravação.");const i=_(t);await r.click(n.getByRole("button",{name:"Aprovar com ressalva"})),await s(()=>o(a.queryByText("Otávio Ramos Peixoto")).not.toBeInTheDocument()),await V(t,i,"Otávio Ramos Peixoto")}),await e('ao abrir pelo chevron, o foco vai para o título "Decidir: <cliente>"',async()=>{await l(a,"Lúcia Fernandes Rego"),await s(()=>o(t.ownerDocument.activeElement).toHaveTextContent("Decidir: Lúcia Fernandes Rego")),await l(a,"Lúcia Fernandes Rego")}),await e("recusar com o motivo tira o caso da fila",async()=>{await z(a,"Gilberto Paes Andrade","Recusar","Terceiro respondeu no lugar do cliente.")}),await e("reencaminhar com roteiro humano e departamento mostra a confirmação e tira o caso",async()=>{await l(a,"Helena Duarte Campos");const n=await v(a,"Helena Duarte Campos");await r.click(await n.findByRole("button",{name:"Reencaminhar para vídeo humano"}));const i=c(await a.findByRole("dialog"));await r.selectOptions(i.getByLabelText("Roteiro (modo humano)"),"rot_humano_inss|2"),await r.selectOptions(i.getByLabelText("Departamento"),"dep-inss"),await r.click(i.getByRole("button",{name:"Reencaminhar"})),await i.findByText("Nova sessão criada, vinculada à original."),await r.click(i.getByRole("button",{name:"Concluir"})),await s(()=>o(a.queryByText("Helena Duarte Campos")).not.toBeInTheDocument())}),await e("o Painel de controle, pelo menu, mostra o mesmo total da fila",async()=>{await f(t,/^Dashboard/),await a.findByText("de 3 aguardando revisão")}),await h()}},y={parameters:{jornada:{cenario:"operar-vazio"}},play:async({canvasElement:t})=>{const e=w(t);await e.findByText("Fila vazia"),await f(t,/^Dashboard/),await e.findByText("de 0 aguardando revisão"),await h()}},R=["GET /v1/operacao"],B={parameters:{jornada:{cenario:"operar",falhar:[...R]}},play:async({canvasElement:t})=>{const e=w(t),a=c(await e.findByRole("alert"));await o(a.getByText("Não foi possível carregar a fila de operação.")).toBeInTheDocument(),await o(a.getByRole("button",{name:/Tentar de novo/})).toBeEnabled(),await o(e.getByRole("button",{name:"Atualizar fila"})).toBeEnabled(),await f(t,"Chamadas realizadas"),await e.findByText("Ester Nunes Prado"),await h([...R])}},m={name:"Sem permissão de revisar",parameters:{jornada:{cenario:"operar",sessao:{papel:"gerente",permissoes:{"operacao.ver":!0,"sessoes.ver":!0,"dossie.ver":!0}}}},play:async({canvasElement:t})=>{const e=w(t);await l(e,"Otávio Ramos Peixoto");const a=await v(e,"Otávio Ramos Peixoto");await a.findByText("Decidir este caso exige a permissão de revisar dossiê."),await o(a.queryByRole("button",{name:"Aprovar com ressalva"})).not.toBeInTheDocument(),await o(a.queryByRole("button",{name:"Recusar"})).not.toBeInTheDocument(),await o(a.queryByRole("button",{name:"Reencaminhar para vídeo humano"})).not.toBeInTheDocument(),await o(a.queryByRole("textbox")).not.toBeInTheDocument(),await o(a.getByRole("link",{name:/Abrir dossiê/})).toBeInTheDocument(),await h()}},ma=["Padrao","Vazio","Erro","SemPermissaoDeRevisar"];var D,E,A;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(A=(E=x.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var F,P,C;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(C=(P=y.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var L,I,S;B.parameters={...B.parameters,docs:{...(L=B.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(S=(I=B.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var k,O,q,H,M;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(q=(O=m.parameters)==null?void 0:O.docs)==null?void 0:q.source},description:{story:"B37 (teste de aceite de B19): gerente cujo grupo não tem `dossie.revisar`\nnem `sessoes.reencaminhar`. O painel abre só para leitura, com a frase e o ↗.",...(M=(H=m.parameters)==null?void 0:H.docs)==null?void 0:M.description}}};export{B as Erro,x as Padrao,m as SemPermissaoDeRevisar,y as Vazio,ma as __namedExportsOrder,da as default};
