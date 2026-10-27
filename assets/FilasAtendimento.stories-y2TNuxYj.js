import{a as f}from"./dadosShell-Bt0g0ikW.js";import{t as d,s as m,i as T,m as W}from"./jornadaOperar-DBvmxNnp.js";import{T as h,R as K}from"./ShellJornada-tlbKPUgy.js";import"./jsx-runtime-hwOjxr5T.js";import"./iframe-BKUFfilm.js";import"./preload-helper-D6kgxu3v.js";import"./index-BzsMuCcw.js";import"./index-DQ_MpPP-.js";import"./v2-Dl74Zlh1.js";import"./index-CM13nfd8.js";import"./api-OBf8VTRj.js";import"./index-BDmM-NUw.js";import"./marca-B8cpbcT0.js";import"./carregando-ByRFPaQ5.js";import"./Login-CvKNESPF.js";import"./celulas-BjNqjaph.js";/* empty css              */import"./paleta-B-duPMKZ.js";import"./MiniBarras-Ds7pdgoB.js";/* empty css                */const{expect:e,userEvent:r,waitFor:c,within:E}=__STORYBOOK_MODULE_TEST__,Ba={title:"Jornadas/Filas de atendimento",...W("/atendimento","Jornada de Filas de atendimento (sem chamada) dentro do shell, papel admin atendendo: disponibilidade (offline, disponível, pausado), encerrar expediente, tabulação pendente, indicadores do dia e a fila. **O que é encenado:** o contexto de chamada aqui é o `ProvedorChamadaEncenada` (`.storybook/mocks/chamada.tsx`), não o `ChamadaProvider` real. Ligar/desligar a disponibilidade, o modal de pausa (no Storybook sem motivo; no painel o motivo é obrigatório), encerrar o expediente e tabular (que conclui na hora, sem o formulário de tabulação) são encenações para a tela responder ao clique: os plays conferem que a TELA reflete cada estado, não o comportamento real da disponibilidade, da pausa nem da tabulação (API, SSE, distribuição da fila). Atender o próximo ou puxar um cliente não abre chamada: mostra o aviso de que a chamada ao vivo não é simulada.","offline")};function i(n){return n.findByRole("switch",{name:"Disponível"})}async function Y(n){var l;const t=(await n.findByText("Empresa · hoje")).parentElement,a=[...(t==null?void 0:t.querySelectorAll(".painel-lateral-fato"))??[]].find($=>{var g;return(g=$.textContent)==null?void 0:g.startsWith("Concluídas")}),s=((l=a==null?void 0:a.querySelector("strong"))==null?void 0:l.textContent)??"",o=s.match(/^(\d+)\/(\d+)$/);return await e(o,`placar "${s}"`).not.toBeNull(),{atendidas:Number(o[1]),total:Number(o[2])}}async function v(n,t){await n.findAllByRole("heading",{name:t});const a=new Date().toLocaleDateString("pt-BR");return(await n.findAllByTitle(/^\d{2}\/\d{2}\/\d{4}, /)).filter(o=>{var l;return(l=o.getAttribute("title"))==null?void 0:l.startsWith(`${a}, `)}).length}const w={args:{cena:"offline"},play:async({canvasElement:n,step:t})=>{const a=d(n),s=await i(a);await e(s).not.toBeChecked(),await e(a.getByText("Offline")).toBeInTheDocument(),await t("encenado: ligar a disponibilidade mostra disponível",async()=>{await r.click(s),await c(()=>e(s).toBeChecked()),await c(()=>e(a.queryByText("Offline")).not.toBeInTheDocument())}),await m()}},y={name:"Disponível com fila",args:{cena:"disponivel-com-fila"},play:async({canvasElement:n,step:t})=>{const a=d(n);let s={atendidas:-1,total:-1};await t("indicadores do dia e clientes na fila",async()=>{await e(await i(a)).toBeChecked(),s=await Y(a),await e(a.getByText("3 na fila")).toBeInTheDocument(),await r.click(a.getByRole("button",{name:/INSS · Consignado/})),await a.findByText("Joana Ribeiro Lago")}),await t("atender o próximo ou puxar um cliente avisa que a chamada não é simulada",async()=>{await r.click(a.getByRole("button",{name:"Atender próximo"})),await a.findByText(f);const[o]=a.getAllByRole("button",{name:/^Puxar /});await r.click(o),await e(a.getByText(f)).toBeInTheDocument(),await e(a.getByText("Nenhuma chamada em andamento")).toBeInTheDocument()}),await t("encenado: pausar vira pausado; voltar vira disponível",async()=>{await r.click(await i(a));const o=E(await a.findByRole("dialog"));await r.click(o.getByRole("button",{name:"Pausar"})),await a.findByText("Pausado"),await e(await i(a)).not.toBeChecked(),await r.click(await i(a)),await c(async()=>e(await i(a)).toBeChecked()),await c(()=>e(a.queryByText("Pausado")).not.toBeInTheDocument())}),await t("encenado: encerrar o expediente volta para offline",async()=>{await r.click(await i(a));const o=E(await a.findByRole("dialog"));await r.click(o.getByRole("button",{name:"Encerrar expediente"})),await a.findByText("Offline"),await e(await i(a)).not.toBeChecked()}),await t("o placar do dia bate com Chamadas realizadas e perdidas de hoje, abertas pelo menu",async()=>{const{atendidas:o,total:l}=s;await T(n,"Chamadas realizadas"),await c(async()=>e(await v(a,"Chamadas realizadas")).toBe(o)),await T(n,"Chamadas perdidas"),await c(async()=>e(await v(a,"Chamadas perdidas")).toBe(l-o))}),await t("o Painel de controle aberto pelo menu mostra a mesma operação ao vivo",async()=>{await T(n,"Dashboard"),await a.findByText(/online agora/),await e(a.queryByText("Ninguém online agora")).not.toBeInTheDocument()}),await m()}},x={args:{cena:"pausado"},play:async({canvasElement:n,step:t})=>{const a=d(n);await a.findByText("Pausado"),await e(await i(a)).not.toBeChecked(),await t("encenado: voltar da pausa mostra disponível",async()=>{await r.click(await i(a)),await c(async()=>e(await i(a)).toBeChecked())}),await m()}},B={name:"Tabulação pendente",args:{cena:"tabulacao-pendente"},play:async({canvasElement:n,step:t})=>{const a=d(n);await a.findByText("Chamada encerrada, conclua a tabulação para voltar a receber clientes."),await e(a.getByText("Ester Nunes Prado")).toBeInTheDocument(),await e(await i(a)).toBeDisabled(),await t("encenado: tabular conclui na hora e libera a disponibilidade",async()=>{await r.click(a.getByRole("button",{name:"Tabular"})),await c(()=>e(a.queryByRole("button",{name:"Tabular"})).not.toBeInTheDocument()),await c(async()=>e(await i(a)).toBeChecked())}),await m()}},J={conectado:!1,fila:{total:0,geral:0,departamentos:[],clientes:[]},roster:[],chamadasAtivas:[]},u={args:{chamada:J,limiteSemConexaoMs:6e5},play:async({canvasElement:n})=>{const t=d(n);await c(()=>e(n.querySelector("[data-testid=filas-esqueleto]")).not.toBeNull()),await e(t.getByText("conectando…")).toHaveClass("hk-sr-only"),await e(t.queryByText(h)).not.toBeInTheDocument(),await m()}},p={args:{chamada:J,limiteSemConexaoMs:0},play:async({canvasElement:n})=>{const t=d(n);await t.findByText(h),await r.click(t.getByRole("button",{name:K})),await e(t.getByText(h)).toBeInTheDocument(),await m()}},Ta=["Offline","DisponivelComFila","Pausado","TabulacaoPendente","Carregando","Erro"];var b,C,D;w.parameters={...w.parameters,docs:{...(b=w.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    cena: "offline"
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    const toggle = await interruptor(tela);
    await expect(toggle).not.toBeChecked();
    await expect(tela.getByText("Offline")).toBeInTheDocument();
    await step("encenado: ligar a disponibilidade mostra disponível", async () => {
      await userEvent.click(toggle);
      await waitFor(() => expect(toggle).toBeChecked());
      await waitFor(() => expect(tela.queryByText("Offline")).not.toBeInTheDocument());
    });
    await semRotaSemFixture();
  }
}`,...(D=(C=w.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var S,k,A;y.parameters={...y.parameters,docs:{...(S=y.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Disponível com fila",
  args: {
    cena: "disponivel-com-fila"
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    let placar = {
      atendidas: -1,
      total: -1
    };
    await step("indicadores do dia e clientes na fila", async () => {
      await expect(await interruptor(tela)).toBeChecked();
      placar = await lerPlacar(tela);
      await expect(tela.getByText("3 na fila")).toBeInTheDocument();
      await userEvent.click(tela.getByRole("button", {
        name: /INSS · Consignado/
      }));
      await tela.findByText("Joana Ribeiro Lago");
    });
    await step("atender o próximo ou puxar um cliente avisa que a chamada não é simulada", async () => {
      await userEvent.click(tela.getByRole("button", {
        name: "Atender próximo"
      }));
      await tela.findByText(MSG_CHAMADA_NAO_SIMULADA);
      const [puxar] = tela.getAllByRole("button", {
        name: /^Puxar /
      });
      await userEvent.click(puxar);
      await expect(tela.getByText(MSG_CHAMADA_NAO_SIMULADA)).toBeInTheDocument();
      await expect(tela.getByText("Nenhuma chamada em andamento")).toBeInTheDocument();
    });
    await step("encenado: pausar vira pausado; voltar vira disponível", async () => {
      await userEvent.click(await interruptor(tela));
      const modal = within(await tela.findByRole("dialog"));
      await userEvent.click(modal.getByRole("button", {
        name: "Pausar"
      }));
      await tela.findByText("Pausado");
      await expect(await interruptor(tela)).not.toBeChecked();
      await userEvent.click(await interruptor(tela));
      await waitFor(async () => expect(await interruptor(tela)).toBeChecked());
      await waitFor(() => expect(tela.queryByText("Pausado")).not.toBeInTheDocument());
    });
    await step("encenado: encerrar o expediente volta para offline", async () => {
      await userEvent.click(await interruptor(tela));
      const modal = within(await tela.findByRole("dialog"));
      await userEvent.click(modal.getByRole("button", {
        name: "Encerrar expediente"
      }));
      await tela.findByText("Offline");
      await expect(await interruptor(tela)).not.toBeChecked();
    });
    await step("o placar do dia bate com Chamadas realizadas e perdidas de hoje, abertas pelo menu", async () => {
      const {
        atendidas,
        total
      } = placar;
      await irPeloMenu(canvasElement, "Chamadas realizadas");
      await waitFor(async () => expect(await itensDeHoje(tela, "Chamadas realizadas")).toBe(atendidas));
      await irPeloMenu(canvasElement, "Chamadas perdidas");
      await waitFor(async () => expect(await itensDeHoje(tela, "Chamadas perdidas")).toBe(total - atendidas));
    });
    await step("o Painel de controle aberto pelo menu mostra a mesma operação ao vivo", async () => {
      await irPeloMenu(canvasElement, "Dashboard");
      await tela.findByText(/online agora/);
      await expect(tela.queryByText("Ninguém online agora")).not.toBeInTheDocument();
    });
    await semRotaSemFixture();
  }
}`,...(A=(k=y.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var R,_,O;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    cena: "pausado"
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await tela.findByText("Pausado");
    await expect(await interruptor(tela)).not.toBeChecked();
    await step("encenado: voltar da pausa mostra disponível", async () => {
      await userEvent.click(await interruptor(tela));
      await waitFor(async () => expect(await interruptor(tela)).toBeChecked());
    });
    await semRotaSemFixture();
  }
}`,...(O=(_=x.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var I,F,M;B.parameters={...B.parameters,docs:{...(I=B.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Tabulação pendente",
  args: {
    cena: "tabulacao-pendente"
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await tela.findByText("Chamada encerrada, conclua a tabulação para voltar a receber clientes.");
    await expect(tela.getByText("Ester Nunes Prado")).toBeInTheDocument();
    await expect(await interruptor(tela)).toBeDisabled();
    await step("encenado: tabular conclui na hora e libera a disponibilidade", async () => {
      await userEvent.click(tela.getByRole("button", {
        name: "Tabular"
      }));
      await waitFor(() => expect(tela.queryByRole("button", {
        name: "Tabular"
      })).not.toBeInTheDocument());
      await waitFor(async () => expect(await interruptor(tela)).toBeChecked());
    });
    await semRotaSemFixture();
  }
}`,...(M=(F=B.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var P,q,N,L,H;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    chamada: SEM_STREAM,
    limiteSemConexaoMs: 600_000
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await waitFor(() => expect(canvasElement.querySelector("[data-testid=filas-esqueleto]")).not.toBeNull());
    await expect(tela.getByText("conectando…")).toHaveClass("hk-sr-only");
    await expect(tela.queryByText(TEXTO_SEM_CONEXAO_FILAS)).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(N=(q=u.parameters)==null?void 0:q.docs)==null?void 0:N.source},description:{story:'SSE ainda abrindo: esqueleto no lugar da lista; "conectando…" só para o leitor de tela.',...(H=(L=u.parameters)==null?void 0:L.docs)==null?void 0:H.description}}};var X,j,z,U,G;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    chamada: SEM_STREAM,
    limiteSemConexaoMs: 0
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await tela.findByText(TEXTO_SEM_CONEXAO_FILAS);
    await userEvent.click(tela.getByRole("button", {
      name: ROTULO_TENTAR_AGORA
    }));
    await expect(tela.getByText(TEXTO_SEM_CONEXAO_FILAS)).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(z=(j=p.parameters)==null?void 0:j.docs)==null?void 0:z.source},description:{story:'Passado o limite sem conexão: erro com "Tentar agora".',...(G=(U=p.parameters)==null?void 0:U.docs)==null?void 0:G.description}}};export{u as Carregando,y as DisponivelComFila,p as Erro,w as Offline,x as Pausado,B as TabulacaoPendente,Ta as __namedExportsOrder,Ba as default};
