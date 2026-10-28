import{c as h,f as y}from"./folhaFiltros-D1ma2GcC.js";import{t as p,s as u,d as x,m as k}from"./jornadaOperar-D7ZeOS19.js";import"./ShellJornada-BMJ4fpX0.js";import"./jsx-runtime-CqjonpNT.js";import"./iframe-DJrhfsQk.js";import"./preload-helper-D6kgxu3v.js";import"./index-9UivOglz.js";import"./index-BwsDp8T-.js";import"./marca-z0SsKRba.js";import"./carregando-BXT1e_OM.js";import"./dadosShell-BJlYo5ba.js";import"./index-DXvfoM1X.js";import"./v2-CZUD68ca.js";import"./index-DBwj-ecP.js";import"./api-Z9ulGFc_.js";import"./Login-DIYaNGVn.js";import"./celulas-DGaOaVoK.js";/* empty css              */import"./paleta-B-duPMKZ.js";import"./MiniBarras-CUX8X_xl.js";/* empty css                */const{expect:o,userEvent:s,waitFor:C,within:v}=__STORYBOOK_MODULE_TEST__,aa={title:"Jornadas/Chamadas perdidas",...k("/chamadas-perdidas","Jornada de Chamadas perdidas dentro do shell, papel admin: um caso para cada motivo que a tela conhece, em pílula curta por tom com o texto longo no tooltip, e o tempo de espera formatado; período em segmented, chip Atendente e busca. Sem coluna Ações: a linha não navega.")},F=[["Conexão perdida","warning","cliente perdeu a conexão"],["Não entrou a tempo","warning","cliente não entrou a tempo"],["Atendente desistiu","risk","atendente desistiu antes do cliente entrar"],["Atribuição expirou","risk","atendente não aceitou a atribuição a tempo"],["Atribuição recusada","risk","atendente recusou a atribuição"],["Fora do horário","neutral","fora do horário de atendimento"]],r=["Renato Lacerda Pinto","Fabiana Couto Melo","Hugo Siqueira Dantas","Irene Batista Cruz","PROP-2026-00105","Wagner Toledo Reis"];async function i(n,t){await C(()=>{for(const a of r)t.includes(a)?o(n.getByText(a)).toBeInTheDocument():o(n.queryByText(a)).not.toBeInTheDocument()})}const c={name:"Padrão",play:async({canvasElement:n,step:t})=>{const a=p(n);await t("todos os motivos aparecem em pílula curta, com o tom e o texto longo",async()=>{await a.findByText("Renato Lacerda Pinto");for(const[e,S,w]of F){const m=a.getByText(e).closest(".hk-lista-pilula");await o(m).toHaveClass(`hk-lista-pilula--${S}`),await o(m).toHaveAttribute("title",w),await o(v(m).getByText(w)).toBeInTheDocument()}await i(a,r)}),await t("sem coluna Ações e a linha (ou o card, em 375) não navega",async()=>{await o(a.queryByRole("columnheader",{name:"Ações"})).not.toBeInTheDocument();const e=a.getByText("Renato Lacerda Pinto").closest("tr, .hk-lista-card");await o(v(e).queryByRole("button")).not.toBeInTheDocument(),await o(e).not.toHaveClass("hk-lista-linha--clicavel"),await o(e).not.toHaveClass("hk-lista-card--clicavel")}),await t("período filtra; todo o período devolve todas",async()=>{const e=await h(a);await s.click(e.getByRole("button",{name:"7 dias"})),await i(a,["Renato Lacerda Pinto","Fabiana Couto Melo","Hugo Siqueira Dantas","Irene Batista Cruz"]),await s.click(e.getByRole("button",{name:"Todo o período"})),await i(a,r),await y(a)}),await t("atendente filtra; todos os atendentes devolve todas",async()=>{const e=(await h(a)).getByRole("combobox",{name:"Atendente"});await s.selectOptions(e,"103"),await i(a,["Irene Batista Cruz"]),await s.selectOptions(e,""),await i(a,r),await y(a)}),await t("a busca filtra por nome; limpar devolve todas",async()=>{const e=a.getByPlaceholderText("Buscar por nome, referência ou sessão");await x(e,"wagner"),await i(a,["Wagner Toledo Reis"]),await x(e,""),await i(a,r)}),await u()}},l={parameters:{jornada:{cenario:"operar-vazio"}},play:async({canvasElement:n})=>{await p(n).findByText("Nenhuma chamada perdida no período"),await u()}},g=["GET /v1/atendimento/perdidas"],d={parameters:{jornada:{cenario:"operar",falhar:[...g]}},play:async({canvasElement:n})=>{const t=p(n);await t.findByText("Não foi possível carregar as chamadas perdidas."),await o(t.getByRole("button",{name:"Tentar de novo"})).toBeEnabled(),await u([...g])}},ea=["Padrao","Vazio","Erro"];var B,T,f;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "Padrão",
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await step("todos os motivos aparecem em pílula curta, com o tom e o texto longo", async () => {
      await tela.findByText("Renato Lacerda Pinto");
      for (const [curto, tom, longo] of MOTIVOS) {
        const pilula = tela.getByText(curto).closest(".hk-lista-pilula") as HTMLElement;
        await expect(pilula).toHaveClass(\`hk-lista-pilula--\${tom}\`);
        await expect(pilula).toHaveAttribute("title", longo);
        await expect(within(pilula).getByText(longo)).toBeInTheDocument();
      }
      await soAparecem(tela, TODAS);
    });
    await step("sem coluna Ações e a linha (ou o card, em 375) não navega", async () => {
      await expect(tela.queryByRole("columnheader", {
        name: "Ações"
      })).not.toBeInTheDocument();
      const linha = tela.getByText("Renato Lacerda Pinto").closest("tr, .hk-lista-card") as HTMLElement;
      await expect(within(linha).queryByRole("button")).not.toBeInTheDocument();
      await expect(linha).not.toHaveClass("hk-lista-linha--clicavel");
      await expect(linha).not.toHaveClass("hk-lista-card--clicavel");
    });
    await step("período filtra; todo o período devolve todas", async () => {
      const c = await controlesDaLista(tela);
      await userEvent.click(c.getByRole("button", {
        name: "7 dias"
      }));
      await soAparecem(tela, ["Renato Lacerda Pinto", "Fabiana Couto Melo", "Hugo Siqueira Dantas", "Irene Batista Cruz"]);
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
      await userEvent.selectOptions(atendente, "103");
      await soAparecem(tela, ["Irene Batista Cruz"]);
      await userEvent.selectOptions(atendente, "");
      await soAparecem(tela, TODAS);
      await fecharFolha(tela);
    });
    await step("a busca filtra por nome; limpar devolve todas", async () => {
      const busca = tela.getByPlaceholderText("Buscar por nome, referência ou sessão");
      await digitar(busca, "wagner");
      await soAparecem(tela, ["Wagner Toledo Reis"]);
      await digitar(busca, "");
      await soAparecem(tela, TODAS);
    });
    await semRotaSemFixture();
  }
}`,...(f=(T=c.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var E,A,R;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    jornada: {
      cenario: "operar-vazio"
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await tela.findByText("Nenhuma chamada perdida no período");
    await semRotaSemFixture();
  }
}`,...(R=(A=l.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var b,D,O;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
    await tela.findByText("Não foi possível carregar as chamadas perdidas.");
    await expect(tela.getByRole("button", {
      name: "Tentar de novo"
    })).toBeEnabled();
    await semRotaSemFixture([...FALHAR]);
  }
}`,...(O=(D=d.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};export{d as Erro,c as Padrao,l as Vazio,ea as __namedExportsOrder,aa as default};
