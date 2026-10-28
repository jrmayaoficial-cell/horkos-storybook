import{c as p,f as u}from"./folhaFiltros-D1ma2GcC.js";import{t as x,s as h,m as S}from"./jornadaOperar-CIOJL8X9.js";import"./ShellJornada-Df5Yul5w.js";import"./jsx-runtime-CHIhdn7c.js";import"./iframe-Di8c_vSj.js";import"./preload-helper-D6kgxu3v.js";import"./index-DBQFAicf.js";import"./index-BRNAEhnP.js";import"./marca-B96e-3MR.js";import"./carregando-BmiZ2oue.js";import"./dadosShell-C2eEKAe3.js";import"./index-B0jM0W5X.js";import"./v2-U-k-l5ig.js";import"./index-BBgPVeAk.js";import"./api-jrAgcfWf.js";import"./Login-DY-zk1Bh.js";import"./celulas-BPu3DeAD.js";/* empty css              */import"./paleta-B-duPMKZ.js";import"./MiniBarras-7DzxpT03.js";/* empty css                */const{expect:t,userEvent:o,waitFor:O,within:w}=__STORYBOOK_MODULE_TEST__,X={title:"Jornadas/Chamadas realizadas",...S("/chamadas-realizadas","Jornada de Chamadas realizadas dentro do shell, papel admin: histórico no kit de listas com cliente, atendente, quando, duração, desfecho e análise (departamento e espera no seletor de colunas); período em segmented, chips Atendente e Tag, busca e paginação local de 25. O aviso de truncamento (200 linhas) é provado no teste unitário da página (paginas/chamadas/Chamadas.test.tsx), porque a fixture não chega a 200 sem mexer no mundo. As chamadas humanas das sessões do mundo (Rita, Gilberto, Otávio) têm o mesmo id, atendente e referência que em Sessões e na Operação; ninguém da fila ao vivo aparece como atendido, e as de hoje são as “atendidas” dos indicadores do dia.")},r=["Ester Nunes Prado","Luiz Carlos Amaral","Carla Menezes Duarte","Otávio Ramos Peixoto","Gilberto Paes Andrade","Rita Moreira Sampaio","Denise Araújo Costa","Fábio Nogueira Leal"];async function l(s,n){await O(()=>{for(const a of r)n.includes(a)?t(s.getByText(a)).toBeInTheDocument():t(s.queryByText(a)).not.toBeInTheDocument()})}const c={name:"Padrão",play:async({canvasElement:s,step:n})=>{const a=x(s);await n("a tabela mostra cliente, atendente, quando, duração, desfecho e análise, com paginação e sem aviso de truncamento",async()=>{await a.findByText("Ester Nunes Prado"),await l(a,r);for(const e of["Joana Ribeiro Lago","Marcos Vieira Tavares","Sônia Pereira Brandão","Paulo Henrique Sales"])await t(a.queryByText(e)).not.toBeInTheDocument();if(s.querySelector("table")){const e=a.getAllByRole("columnheader").map(R=>R.textContent);await t([["Cliente","Atendente","Quando","Duração","Desfecho","Análise","Ações"],["Cliente","Atendente","Quando","Desfecho","Ações"]]).toContainEqual(e)}await t(a.getByRole("navigation",{name:"Paginação"})).toHaveTextContent(`1–${r.length} de ${r.length}`),await t(a.queryByText(/Mostrando as/)).not.toBeInTheDocument()}),await n("departamento e espera entram pelo seletor de colunas (no celular o seletor não existe, B33)",async()=>{await t(a.queryByText("INSS · Consignado")).not.toBeInTheDocument();const e=a.queryByRole("button",{name:"Escolher colunas"});if(!e)return;await o.click(e);const i=w(await w(document.body).findByRole("dialog",{name:"Colunas da tabela"}));await o.click(i.getByRole("checkbox",{name:"Departamento"})),await o.click(i.getByRole("checkbox",{name:"Espera"})),await o.keyboard("{Escape}"),await t(a.getAllByText("INSS · Consignado").length).toBeGreaterThan(0),await t(a.getByRole("columnheader",{name:"Espera"})).toBeInTheDocument()}),await n("período filtra; todo o período devolve todas",async()=>{const e=await p(a);await o.click(e.getByRole("button",{name:"7 dias"})),await l(a,r.filter(i=>i!=="Fábio Nogueira Leal")),await o.click(e.getByRole("button",{name:"Todo o período"})),await l(a,r),await u(a)}),await n("atendente filtra; todos os atendentes devolve todas",async()=>{const e=(await p(a)).getByRole("combobox",{name:"Atendente"});await t(e.querySelectorAll("option").length).toBeGreaterThan(2),await o.selectOptions(e,"102"),await l(a,["Gilberto Paes Andrade","Rita Moreira Sampaio","Fábio Nogueira Leal"]),await o.selectOptions(e,""),await l(a,r),await u(a)}),await n("tag filtra; todas as tags devolve todas",async()=>{const e=await p(a),i=e.getByRole("combobox",{name:"Tag"});await o.selectOptions(i,"tag_suspeita"),await l(a,["Gilberto Paes Andrade"]),await t(e.getByRole("button",{name:"Limpar (1)"})).toBeInTheDocument(),await o.selectOptions(i,""),await l(a,r),await u(a)}),await n("o ↗ Ver dossiê de uma chamada abre o dossiê da mesma sessão",async()=>{const e=a.getByText("Carla Menezes Duarte").closest("tr, .hk-lista-card");await t(e).not.toBeNull(),await o.click(w(e).getByRole("button",{name:"Ver dossiê"})),await a.findByRole("heading",{level:1,name:"Dossiê da sessão"}),await t(await a.findByRole("heading",{level:1,name:/Carla Menezes Duarte/})).toBeInTheDocument(),await t(a.getAllByText(/PROP-2026-00491/).length).toBeGreaterThan(0)}),await h()}},d={parameters:{jornada:{cenario:"operar-vazio"}},play:async({canvasElement:s})=>{await x(s).findByText("Nenhuma chamada realizada no período"),await h()}},y=["GET /v1/atendimento/realizadas"],m={parameters:{jornada:{cenario:"operar",falhar:[...y]}},play:async({canvasElement:s})=>{const n=x(s);await n.findByText("Não foi possível carregar as chamadas realizadas."),await t(n.getByRole("button",{name:"Tentar de novo"})).toBeEnabled(),await h([...y])}},Z=["Padrao","Vazio","Erro"];var g,B,E;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Padrão",
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await step("a tabela mostra cliente, atendente, quando, duração, desfecho e análise, com paginação e sem aviso de truncamento", async () => {
      await tela.findByText("Ester Nunes Prado");
      await soAparecem(tela, TODAS);
      // a fila ao vivo e a chamada em andamento não são "realizadas"
      for (const naFila of ["Joana Ribeiro Lago", "Marcos Vieira Tavares", "Sônia Pereira Brandão", "Paulo Henrique Sales"]) {
        await expect(tela.queryByText(naFila)).not.toBeInTheDocument();
      }
      // B26: caixa larga (1280+) ou estreita (~1024), conforme a largura da story;
      // abaixo de 900 px são cards, sem cabeçalho de coluna (B33)
      if (canvasElement.querySelector("table")) {
        const cabecalhos = tela.getAllByRole("columnheader").map(th => th.textContent);
        const largas = ["Cliente", "Atendente", "Quando", "Duração", "Desfecho", "Análise", "Ações"];
        const estreitas = ["Cliente", "Atendente", "Quando", "Desfecho", "Ações"];
        await expect([largas, estreitas]).toContainEqual(cabecalhos);
      }
      await expect(tela.getByRole("navigation", {
        name: "Paginação"
      })).toHaveTextContent(\`1–\${TODAS.length} de \${TODAS.length}\`);
      await expect(tela.queryByText(/Mostrando as/)).not.toBeInTheDocument();
    });
    await step("departamento e espera entram pelo seletor de colunas (no celular o seletor não existe, B33)", async () => {
      await expect(tela.queryByText("INSS · Consignado")).not.toBeInTheDocument();
      const seletor = tela.queryByRole("button", {
        name: "Escolher colunas"
      });
      if (!seletor) return;
      await userEvent.click(seletor);
      const pop = within(await within(document.body).findByRole("dialog", {
        name: "Colunas da tabela"
      }));
      await userEvent.click(pop.getByRole("checkbox", {
        name: "Departamento"
      }));
      await userEvent.click(pop.getByRole("checkbox", {
        name: "Espera"
      }));
      await userEvent.keyboard("{Escape}");
      await expect(tela.getAllByText("INSS · Consignado").length).toBeGreaterThan(0);
      await expect(tela.getByRole("columnheader", {
        name: "Espera"
      })).toBeInTheDocument();
    });
    await step("período filtra; todo o período devolve todas", async () => {
      const c = await controlesDaLista(tela);
      await userEvent.click(c.getByRole("button", {
        name: "7 dias"
      }));
      await soAparecem(tela, TODAS.filter(c => c !== "Fábio Nogueira Leal"));
      await userEvent.click(c.getByRole("button", {
        name: "Todo o período"
      }));
      await soAparecem(tela, TODAS);
      await fecharFolha(tela);
    });
    await step("atendente filtra; todos os atendentes devolve todas", async () => {
      const atendente = (await controlesDaLista(tela)).getByRole("combobox", {
        name: "Atendente"
      });
      await expect(atendente.querySelectorAll("option").length).toBeGreaterThan(2);
      await userEvent.selectOptions(atendente, "102");
      await soAparecem(tela, ["Gilberto Paes Andrade", "Rita Moreira Sampaio", "Fábio Nogueira Leal"]);
      await userEvent.selectOptions(atendente, "");
      await soAparecem(tela, TODAS);
      await fecharFolha(tela);
    });
    await step("tag filtra; todas as tags devolve todas", async () => {
      const c = await controlesDaLista(tela);
      const tag = c.getByRole("combobox", {
        name: "Tag"
      });
      await userEvent.selectOptions(tag, "tag_suspeita");
      await soAparecem(tela, ["Gilberto Paes Andrade"]);
      await expect(c.getByRole("button", {
        name: "Limpar (1)"
      })).toBeInTheDocument();
      await userEvent.selectOptions(tag, "");
      await soAparecem(tela, TODAS);
      await fecharFolha(tela);
    });
    await step("o ↗ Ver dossiê de uma chamada abre o dossiê da mesma sessão", async () => {
      // Carla só existe como chamada atendida: a sessão dela mora no mundo
      const linha = tela.getByText("Carla Menezes Duarte").closest("tr, .hk-lista-card");
      await expect(linha).not.toBeNull();
      await userEvent.click(within(linha as HTMLElement).getByRole("button", {
        name: "Ver dossiê"
      }));
      await tela.findByRole("heading", {
        level: 1,
        name: "Dossiê da sessão"
      });
      await expect(await tela.findByRole("heading", {
        level: 1,
        name: /Carla Menezes Duarte/
      })).toBeInTheDocument();
      await expect(tela.getAllByText(/PROP-2026-00491/).length).toBeGreaterThan(0);
    });
    await semRotaSemFixture();
  }
}`,...(E=(B=c.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var T,f,b;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    jornada: {
      cenario: "operar-vazio"
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await tela.findByText("Nenhuma chamada realizada no período");
    await semRotaSemFixture();
  }
}`,...(b=(f=d.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var v,A,D;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
    await tela.findByText("Não foi possível carregar as chamadas realizadas.");
    await expect(tela.getByRole("button", {
      name: "Tentar de novo"
    })).toBeEnabled();
    await semRotaSemFixture([...FALHAR]);
  }
}`,...(D=(A=m.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};export{m as Erro,c as Padrao,d as Vazio,Z as __namedExportsOrder,X as default};
