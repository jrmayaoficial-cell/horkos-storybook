import{a as f}from"./dadosShell-B7uAMCCg.js";import{t as s,s as d,i as h,m as K}from"./jornadaOperar-DnM_97LJ.js";import{T,R as W}from"./ShellJornada-CN9tp1L6.js";import"./jsx-runtime-CdzB93mq.js";import"./iframe-BKGMgeEb.js";import"./preload-helper-D6kgxu3v.js";import"./index-BqljjbDN.js";import"./index-eFEaWYF1.js";import"./v2-DI6xq20e.js";import"./index-CaeZHtbs.js";import"./api-OBf8VTRj.js";import"./index-DZarQCaT.js";import"./marca-CNPFSJG6.js";import"./carregando-ui94QYik.js";import"./Login-CuFDKoqu.js";import"./celulas-BPeQsapR.js";/* empty css              */import"./paleta-B-duPMKZ.js";import"./MiniBarras-Bzn24ooa.js";/* empty css                */const{expect:e,userEvent:r,waitFor:l,within:E}=__STORYBOOK_MODULE_TEST__,Ba={title:"Jornadas/Filas de atendimento",...K("/atendimento","Jornada de Filas de atendimento (sem chamada) dentro do shell, papel admin atendendo: disponibilidade (offline, disponível, pausado), encerrar expediente, tabulação pendente, indicadores do dia e a fila. **O que é encenado:** o contexto de chamada aqui é o `ProvedorChamadaEncenada` (`.storybook/mocks/chamada.tsx`), não o `ChamadaProvider` real. Ligar/desligar a disponibilidade, o modal de pausa (no Storybook sem motivo; no painel o motivo é obrigatório), encerrar o expediente e tabular (que conclui na hora, sem o formulário de tabulação) são encenações para a tela responder ao clique: os plays conferem que a TELA reflete cada estado, não o comportamento real da disponibilidade, da pausa nem da tabulação (API, SSE, distribuição da fila). Atender o próximo ou puxar um cliente não abre chamada: mostra o aviso de que a chamada ao vivo não é simulada.","offline")};function o(n){return n.findByRole("switch",{name:"Disponível"})}async function Y(n){var p;const t=(await n.findByText("Empresa · hoje")).parentElement,a=[...(t==null?void 0:t.querySelectorAll(".painel-lateral-fato"))??[]].find($=>{var g;return(g=$.textContent)==null?void 0:g.startsWith("Concluídas")}),c=((p=a==null?void 0:a.querySelector("strong"))==null?void 0:p.textContent)??"",i=c.match(/^(\d+)\/(\d+)$/);return await e(i,`placar "${c}"`).not.toBeNull(),{atendidas:Number(i[1]),total:Number(i[2])}}function v(n){const t=`${new Date().toLocaleDateString("pt-BR")},`;return n.getAllByRole("row").filter(a=>(a.textContent??"").includes(t)).length}const w={args:{cena:"offline"},play:async({canvasElement:n,step:t})=>{const a=s(n),c=await o(a);await e(c).not.toBeChecked(),await e(a.getByText("Offline")).toBeInTheDocument(),await t("encenado: ligar a disponibilidade mostra disponível",async()=>{await r.click(c),await l(()=>e(c).toBeChecked()),await l(()=>e(a.queryByText("Offline")).not.toBeInTheDocument())}),await d()}},y={name:"Disponível com fila",args:{cena:"disponivel-com-fila"},play:async({canvasElement:n,step:t})=>{const a=s(n);let c={atendidas:-1,total:-1};await t("indicadores do dia e clientes na fila",async()=>{await e(await o(a)).toBeChecked(),c=await Y(a),await e(a.getByText("3 na fila")).toBeInTheDocument(),await r.click(a.getByRole("button",{name:/INSS · Consignado/})),await a.findByText("Joana Ribeiro Lago")}),await t("atender o próximo ou puxar um cliente avisa que a chamada não é simulada",async()=>{await r.click(a.getByRole("button",{name:"Atender próximo"})),await a.findByText(f);const[i]=a.getAllByRole("button",{name:/^Puxar /});await r.click(i),await e(a.getByText(f)).toBeInTheDocument(),await e(a.getByText("Nenhuma chamada em andamento")).toBeInTheDocument()}),await t("encenado: pausar vira pausado; voltar vira disponível",async()=>{await r.click(await o(a));const i=E(await a.findByRole("dialog"));await r.click(i.getByRole("button",{name:"Pausar"})),await a.findByText("Pausado"),await e(await o(a)).not.toBeChecked(),await r.click(await o(a)),await l(async()=>e(await o(a)).toBeChecked()),await l(()=>e(a.queryByText("Pausado")).not.toBeInTheDocument())}),await t("encenado: encerrar o expediente volta para offline",async()=>{await r.click(await o(a));const i=E(await a.findByRole("dialog"));await r.click(i.getByRole("button",{name:"Encerrar expediente"})),await a.findByText("Offline"),await e(await o(a)).not.toBeChecked()}),await t("o placar do dia bate com Chamadas realizadas e perdidas de hoje, abertas pelo menu",async()=>{const{atendidas:i,total:p}=c;await h(n,"Chamadas realizadas"),await a.findByRole("columnheader",{name:"Análise"}),await l(()=>e(v(a)).toBe(i)),await h(n,"Chamadas perdidas"),await a.findByRole("columnheader",{name:"Motivo"}),await l(()=>e(v(a)).toBe(p-i))}),await t("o Painel de controle aberto pelo menu mostra a mesma operação ao vivo",async()=>{await h(n,"Dashboard"),await a.findByText(/online agora/),await e(a.queryByText("Ninguém online agora")).not.toBeInTheDocument()}),await d()}},x={args:{cena:"pausado"},play:async({canvasElement:n,step:t})=>{const a=s(n);await a.findByText("Pausado"),await e(await o(a)).not.toBeChecked(),await t("encenado: voltar da pausa mostra disponível",async()=>{await r.click(await o(a)),await l(async()=>e(await o(a)).toBeChecked())}),await d()}},B={name:"Tabulação pendente",args:{cena:"tabulacao-pendente"},play:async({canvasElement:n,step:t})=>{const a=s(n);await a.findByText("Chamada encerrada, conclua a tabulação para voltar a receber clientes."),await e(a.getByText("Ester Nunes Prado")).toBeInTheDocument(),await e(await o(a)).toBeDisabled(),await t("encenado: tabular conclui na hora e libera a disponibilidade",async()=>{await r.click(a.getByRole("button",{name:"Tabular"})),await l(()=>e(a.queryByRole("button",{name:"Tabular"})).not.toBeInTheDocument()),await l(async()=>e(await o(a)).toBeChecked())}),await d()}},z={conectado:!1,fila:{total:0,geral:0,departamentos:[],clientes:[]},roster:[],chamadasAtivas:[]},m={args:{chamada:z,limiteSemConexaoMs:6e5},play:async({canvasElement:n})=>{const t=s(n);await l(()=>e(n.querySelector("[data-testid=filas-esqueleto]")).not.toBeNull()),await e(t.getByText("conectando…")).toHaveClass("hk-sr-only"),await e(t.queryByText(T)).not.toBeInTheDocument(),await d()}},u={args:{chamada:z,limiteSemConexaoMs:0},play:async({canvasElement:n})=>{const t=s(n);await t.findByText(T),await r.click(t.getByRole("button",{name:W})),await e(t.getByText(T)).toBeInTheDocument(),await d()}},ha=["Offline","DisponivelComFila","Pausado","TabulacaoPendente","Carregando","Erro"];var b,D,S;w.parameters={...w.parameters,docs:{...(b=w.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(S=(D=w.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var C,k,A;y.parameters={...y.parameters,docs:{...(C=y.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
      await tela.findByRole("columnheader", {
        name: "Análise"
      });
      await waitFor(() => expect(linhasDeHoje(tela)).toBe(atendidas));
      await irPeloMenu(canvasElement, "Chamadas perdidas");
      await tela.findByRole("columnheader", {
        name: "Motivo"
      });
      await waitFor(() => expect(linhasDeHoje(tela)).toBe(total - atendidas));
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
}`,...(O=(_=x.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var I,M,F;B.parameters={...B.parameters,docs:{...(I=B.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(F=(M=B.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var P,q,N,L,H;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(N=(q=m.parameters)==null?void 0:q.docs)==null?void 0:N.source},description:{story:'SSE ainda abrindo: esqueleto no lugar da lista; "conectando…" só para o leitor de tela.',...(H=(L=m.parameters)==null?void 0:L.docs)==null?void 0:H.description}}};var X,j,U,G,J;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(U=(j=u.parameters)==null?void 0:j.docs)==null?void 0:U.source},description:{story:'Passado o limite sem conexão: erro com "Tentar agora".',...(J=(G=u.parameters)==null?void 0:G.docs)==null?void 0:J.description}}};export{m as Carregando,y as DisponivelComFila,u as Erro,w as Offline,x as Pausado,B as TabulacaoPendente,ha as __namedExportsOrder,Ba as default};
