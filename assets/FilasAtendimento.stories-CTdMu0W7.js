import{b as N}from"./dadosShell-BpcFcrpX.js";import{t as l,s as d,i as k,m as Za}from"./jornadaOperar-CCnVgK82.js";import{A as C,g as E,h as ja,T as _,j as Ja,e as ae}from"./ShellJornada-DOz9uM2T.js";import"./jsx-runtime-CEo06wvt.js";import"./iframe-DVaGrerc.js";import"./preload-helper-D6kgxu3v.js";import"./index-BEALldq7.js";import"./index-DfpIZROc.js";import"./v2-CBuWZhP8.js";import"./index-Ctu9A9u4.js";import"./api-CwvJBfED.js";import"./index-c6P9_18s.js";import"./marca-JlK6OYD8.js";import"./carregando-CO0SwyOL.js";import"./celulas-Ddd5ld11.js";/* empty css              */import"./CartaoKpi-CPSdukY9.js";import"./MiniBarras-D-NVWNi3.js";import"./cores-D-iLqYVd.js";import"./Login-Cope_TMD.js";import"./etapas-CjwTh5VZ.js";/* empty css                */const{expect:e,userEvent:s,waitFor:c,within:b}=__STORYBOOK_MODULE_TEST__,Te={title:"Jornadas/Filas de atendimento",...Za("/atendimento",'Jornada de Filas de atendimento (sem chamada) dentro do shell, papel admin atendendo: disponibilidade (offline, disponível, pausado), encerrar expediente, tabulação pendente, indicadores do dia, o interruptor "Avisos do navegador" (desligado, ligado, bloqueado e oculto no automático; o `Notification` do navegador é falso em cada cena, e a chegada de cliente que dispara a notificação é do `ChamadaProvider` real, coberta em `chamada.notificacao-fila.provider.test.tsx`) e a fila. **O que é encenado:** o contexto de chamada aqui é o `ProvedorChamadaEncenada` (`.storybook/mocks/chamada.tsx`), não o `ChamadaProvider` real. Ligar/desligar a disponibilidade, o modal de pausa (no Storybook sem motivo; no painel o motivo é obrigatório), encerrar o expediente e tabular (que conclui na hora, sem o formulário de tabulação) são encenações para a tela responder ao clique: os plays conferem que a TELA reflete cada estado, não o comportamento real da disponibilidade, da pausa nem da tabulação (API, SSE, distribuição da fila). Atender o próximo ou puxar um cliente não abre chamada: mostra o aviso de que a chamada ao vivo não é simulada.',"offline")};function m(n){return n.findByRole("switch",{name:"Disponível"})}async function ee(n){const a=b(await n.findByRole("region",{name:Ja})).getByRole("region",{name:"Concluídas"}),i=((await b(a).findByText(/^\d+ de \d+$/)).textContent??"").match(/^(\d+) de (\d+)$/);return await e(b(a).getByText(`${i[1]}/${i[2]}`)).toBeVisible(),{atendidas:Number(i[1]),total:Number(i[2])}}const Xa='Marque-se como "Disponível" pra atender.';async function q(n,t){await n.findAllByRole("heading",{name:t});const a=new Date().toLocaleDateString("pt-BR");return(await n.findAllByTitle(/^\d{2}\/\d{2}\/\d{4}, /)).filter(i=>{var r;return(r=i.getAttribute("title"))==null?void 0:r.startsWith(`${a}, `)}).length}const A={name:"Offline com fila",args:{cena:"offline"},play:async({canvasElement:n,step:t})=>{const a=l(n),o=await m(a);await e(o).not.toBeChecked(),await e(a.getByText("Offline")).toBeInTheDocument(),await t("o botão fica desabilitado com o motivo escrito ao lado",async()=>{await e(a.getByText("3 na fila")).toBeInTheDocument();const i=a.getByRole("button",{name:"Atender próximo"});await e(i).toBeDisabled();const r=a.getByText(Xa);await e(r).toBeVisible(),await e(i).toHaveAttribute("aria-describedby",r.id),await e(a.queryByText("Fila vazia")).not.toBeInTheDocument()}),await t("encenado: ligar a disponibilidade mostra disponível",async()=>{await s.click(o),await c(()=>e(o).toBeChecked()),await c(()=>e(a.queryByText("Offline")).not.toBeInTheDocument())}),await d()}},D={name:"Disponível com fila",args:{cena:"disponivel-com-fila"},play:async({canvasElement:n,step:t})=>{const a=l(n);let o={atendidas:-1,total:-1};await t("indicadores do dia e clientes na fila",async()=>{await e(await m(a)).toBeChecked(),o=await ee(a),await e(a.getByText("3 na fila")).toBeInTheDocument(),await s.click(a.getByRole("button",{name:/INSS · Consignado/})),await a.findByText("Joana Ribeiro Lago")}),await t("atender o próximo ou puxar um cliente avisa que a chamada não é simulada",async()=>{await s.click(a.getByRole("button",{name:"Atender próximo"})),await a.findByText(N);const[i]=a.getAllByRole("button",{name:/^Puxar /});await s.click(i),await e(a.getByText(N)).toBeInTheDocument(),await e(a.getByText("Nenhuma chamada em andamento")).toBeInTheDocument()}),await t("encenado: pausar vira pausado; voltar vira disponível",async()=>{await s.click(await m(a));const i=b(await a.findByRole("dialog"));await s.click(i.getByRole("button",{name:"Pausar"})),await a.findByText("Pausado"),await e(await m(a)).not.toBeChecked(),await s.click(await m(a)),await c(async()=>e(await m(a)).toBeChecked()),await c(()=>e(a.queryByText("Pausado")).not.toBeInTheDocument())}),await t("encenado: encerrar o expediente volta para offline",async()=>{await s.click(await m(a));const i=b(await a.findByRole("dialog"));await s.click(i.getByRole("button",{name:"Encerrar expediente"})),await a.findByText("Offline"),await e(await m(a)).not.toBeChecked()}),await t("o placar do dia bate com Chamadas realizadas e perdidas de hoje, abertas pelo menu",async()=>{const{atendidas:i,total:r}=o;await k(n,"Chamadas realizadas"),await c(async()=>e(await q(a,"Chamadas realizadas")).toBe(i)),await k(n,"Chamadas perdidas"),await c(async()=>e(await q(a,"Chamadas perdidas")).toBe(r-i))}),await t("o Painel de controle aberto pelo menu mostra a mesma operação ao vivo",async()=>{await k(n,"Dashboard"),await a.findByText(/online agora/),await e(a.queryByText("Ninguém online agora")).not.toBeInTheDocument()}),await d()}},R={args:{cena:"pausado"},play:async({canvasElement:n,step:t})=>{const a=l(n);await a.findByText("Pausado"),await e(await m(a)).not.toBeChecked(),await t("encenado: voltar da pausa mostra disponível",async()=>{await s.click(await m(a)),await c(async()=>e(await m(a)).toBeChecked())}),await d()}},S={name:"Tabulação pendente",args:{cena:"tabulacao-pendente"},play:async({canvasElement:n,step:t})=>{const a=l(n);await a.findByText("Chamada encerrada, conclua a tabulação para voltar a receber clientes."),await e(a.getByText("Ester Nunes Prado")).toBeInTheDocument(),await e(await m(a)).toBeDisabled(),await t("encenado: tabular conclui na hora e libera a disponibilidade",async()=>{await s.click(a.getByRole("button",{name:"Tabular"})),await c(()=>e(a.queryByRole("button",{name:"Tabular"})).not.toBeInTheDocument()),await c(async()=>e(await m(a)).toBeChecked())}),await d()}},Qa={conectado:!1,fila:{total:0,geral:0,departamentos:[],clientes:[]},roster:[],chamadasAtivas:[]},p={args:{chamada:Qa,limiteSemConexaoMs:6e5},play:async({canvasElement:n})=>{const t=l(n);await c(()=>e(n.querySelector("[data-testid=filas-esqueleto]")).not.toBeNull()),await e(t.getByText("conectando…")).toHaveClass("hk-sr-only"),await e(t.queryByText(_)).not.toBeInTheDocument(),await d()}},w={args:{chamada:Qa,limiteSemConexaoMs:0},play:async({canvasElement:n})=>{const t=l(n);await t.findByText(_),await s.click(t.getByRole("button",{name:ae})),await e(t.getByText(_)).toBeInTheDocument(),await d()}};function I(n,t={}){return()=>{const a=Object.getOwnPropertyDescriptor(window,"Notification"),o=Object.assign(function(){},{permission:n,requestPermission:async()=>t.resposta??n});return Object.defineProperty(window,"Notification",{configurable:!0,writable:!0,value:o}),t.preferenciaLigada?localStorage.setItem(E,"1"):localStorage.removeItem(E),()=>{a?Object.defineProperty(window,"Notification",a):Reflect.deleteProperty(window,"Notification"),localStorage.removeItem(E)}}}function F(n){return n.findByRole("switch",{name:ja})}const g={name:"Avisos do navegador desligados",args:{cena:"disponivel-com-fila"},beforeEach:I("default",{resposta:"granted"}),play:async({canvasElement:n,step:t})=>{const a=l(n),o=await F(a);await e(o).not.toBeChecked(),await e(a.queryByText(C)).not.toBeInTheDocument(),await t("ligar pede a permissão e, aceita, fica ligado",async()=>{await s.click(o),await c(()=>e(o).toBeChecked()),await e(localStorage.getItem(E)).toBe("1")}),await t("desligar apaga a preferência",async()=>{await s.click(o),await c(()=>e(o).not.toBeChecked()),await e(localStorage.getItem(E)).toBeNull()}),await d()}},x={name:"Avisos do navegador ligados",args:{cena:"disponivel-com-fila"},beforeEach:I("granted",{preferenciaLigada:!0}),play:async({canvasElement:n})=>{const t=l(n);await e(await F(t)).toBeChecked(),await e(t.queryByText(C)).not.toBeInTheDocument(),await d()}},y={name:"Avisos do navegador bloqueados",args:{cena:"disponivel-com-fila"},beforeEach:I("denied",{preferenciaLigada:!0}),play:async({canvasElement:n,step:t})=>{const a=l(n),o=await F(a);await e(o).not.toBeChecked(),await e(a.getByText(C)).toBeInTheDocument(),await t("ligar com a permissão negada volta a desligado com a explicação",async()=>{await s.click(o),await c(()=>e(o).not.toBeChecked()),await e(a.getByText(C)).toBeInTheDocument()}),await d()}},B={name:"Avisos do navegador no automático",args:{chamada:{estado:"disponivel",modo:"automatico"}},beforeEach:I("granted",{preferenciaLigada:!0}),play:async({canvasElement:n})=>{const t=l(n);await t.findByText(/Distribuição automática/),await e(t.queryByRole("switch",{name:ja})).not.toBeInTheDocument(),await d()}},Wa={id:"dep-inss",nome:"INSS · Consignado",setor:"Consignado",dentro_horario:!0},h={name:"Fila vazia",args:{chamada:{estado:"disponivel",disponivel:!0,meusDepartamentos:[Wa],fila:{total:0,geral:0,departamentos:[{id:"dep-inss",nome:"INSS · Consignado",total:0}],clientes:[]}}},play:async({canvasElement:n})=>{const t=l(n);await e(await t.findByRole("button",{name:"Fila vazia"})).toBeDisabled(),await e(t.getByText("0 na fila")).toBeInTheDocument(),await e(t.queryByText(Xa)).not.toBeInTheDocument(),await e(t.getByText("Nenhuma chamada em andamento")).toBeVisible(),await d()}},u={name:"Em chamada",args:{chamada:{estado:"em_atendimento",meusDepartamentos:[Wa],fila:{total:1,geral:0,departamentos:[{id:"dep-inss",nome:"INSS · Consignado",total:1}],clientes:[]},atendimento:{sessao_id:"ses_fic_ativa",token:"t",url:"wss://exemplo.invalid",cliente_nome:"Joana Ribeiro Lago"}}},play:async({canvasElement:n})=>{var r;const t=l(n);await t.findByText("Em atendimento");const a=n.ownerDocument.querySelector("[data-testid=atendimento-palco]");await e(a).toBeVisible(),await e(t.queryByText("Nenhuma chamada em andamento")).not.toBeInTheDocument(),await e(t.getByRole("button",{name:"Atender próximo"})).toBeDisabled(),await e(t.getByRole("button",{name:"Áudio e vídeo"})).toBeVisible();const o=(r=a.parentElement)==null?void 0:r.querySelector(".atd-filas");n.ownerDocument.defaultView.innerWidth>980?await e(Math.abs(a.getBoundingClientRect().top-o.getBoundingClientRect().top)).toBeLessThan(1):await e(a.getBoundingClientRect().top).toBeGreaterThanOrEqual(o.getBoundingClientRect().bottom),await d()}},f={name:"Em chamada e recolhida",args:u.args,play:async({canvasElement:n,step:t})=>{const a=l(n);await a.findByText("Em atendimento");const o=n.ownerDocument,i=o.querySelector("[data-testid=atendimento-palco]"),r=i.getBoundingClientRect().width,$a=o.defaultView.innerWidth>980;await t("recolher as filas dá a largura ao palco",async()=>{await s.click(await a.findByRole("button",{name:"Recolher filas"})),await e(await a.findByRole("button",{name:"Abrir filas"})).toHaveAttribute("aria-expanded","false"),await e(i).toBeVisible();const Ka=o.querySelector(".atd-filas"),Ya=o.querySelector(".atd-lado");await c(()=>{const T=i.getBoundingClientRect(),O=Ka.getBoundingClientRect();$a?(e(O.width).toBeLessThan(120),e(T.width).toBeGreaterThan(r+200),e(Math.abs(T.top-O.top)).toBeLessThan(1),e(Math.abs(Ya.getBoundingClientRect().left-T.left)).toBeLessThan(1)):e(T.top).toBeGreaterThanOrEqual(O.bottom)})}),await d()}},v={name:"Coluna recolhida e expandida",args:{cena:"disponivel-com-fila"},play:async({canvasElement:n,step:t})=>{const a=l(n),o=await a.findByRole("button",{name:"Recolher filas"});await e(o).toHaveAttribute("aria-expanded","true"),await t("recolher esconde as filas e deixa o chevron de abrir",async()=>{await s.click(o);const i=await a.findByRole("button",{name:"Abrir filas"});await e(i).toHaveAttribute("aria-expanded","false"),await e(a.queryByRole("button",{name:/INSS · Consignado/})).not.toBeInTheDocument(),await e(a.getByRole("region",{name:Ja})).toBeVisible();const r=i.getBoundingClientRect();await e(r.width).toBeGreaterThanOrEqual(44),await e(r.height).toBeGreaterThanOrEqual(44)}),await t("abrir volta as filas",async()=>{await s.click(a.getByRole("button",{name:"Abrir filas"})),await e(await a.findByRole("button",{name:/INSS · Consignado/})).toBeVisible(),await e(a.getByRole("button",{name:"Recolher filas"})).toHaveAttribute("aria-expanded","true")}),await d()}},Ae=["Offline","DisponivelComFila","Pausado","TabulacaoPendente","Carregando","Erro","AvisosDoNavegadorDesligados","AvisosDoNavegadorLigados","AvisosDoNavegadorBloqueados","AvisosDoNavegadorNoAutomatico","FilaVazia","EmChamada","EmChamadaERecolhida","ColunaRecolhida"];var L,P,M;A.parameters={...A.parameters,docs:{...(L=A.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "Offline com fila",
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
    await step("o botão fica desabilitado com o motivo escrito ao lado", async () => {
      await expect(tela.getByText("3 na fila")).toBeInTheDocument();
      const botao = tela.getByRole("button", {
        name: "Atender próximo"
      });
      await expect(botao).toBeDisabled();
      const motivo = tela.getByText(MOTIVO_OFFLINE);
      await expect(motivo).toBeVisible();
      await expect(botao).toHaveAttribute("aria-describedby", motivo.id);
      await expect(tela.queryByText("Fila vazia")).not.toBeInTheDocument();
    });
    await step("encenado: ligar a disponibilidade mostra disponível", async () => {
      await userEvent.click(toggle);
      await waitFor(() => expect(toggle).toBeChecked());
      await waitFor(() => expect(tela.queryByText("Offline")).not.toBeInTheDocument());
    });
    await semRotaSemFixture();
  }
}`,...(M=(P=A.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var V,H,G;D.parameters={...D.parameters,docs:{...(V=D.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(G=(H=D.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var z,U,j;R.parameters={...R.parameters,docs:{...(z=R.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(j=(U=R.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var J,X,Q;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(X=S.parameters)==null?void 0:X.docs)==null?void 0:Q.source}}};var W,$,K,Y,Z;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(K=($=p.parameters)==null?void 0:$.docs)==null?void 0:K.source},description:{story:'SSE ainda abrindo: esqueleto no lugar da lista; "conectando…" só para o leitor de tela.',...(Z=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};var aa,ea,ta,na,oa;w.parameters={...w.parameters,docs:{...(aa=w.parameters)==null?void 0:aa.docs,source:{originalSource:`{
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
}`,...(ta=(ea=w.parameters)==null?void 0:ea.docs)==null?void 0:ta.source},description:{story:'Passado o limite sem conexão: erro com "Tentar agora".',...(oa=(na=w.parameters)==null?void 0:na.docs)==null?void 0:oa.description}}};var ia,sa,ra,ca,la;g.parameters={...g.parameters,docs:{...(ia=g.parameters)==null?void 0:ia.docs,source:{originalSource:`{
  name: "Avisos do navegador desligados",
  args: {
    cena: "disponivel-com-fila"
  },
  beforeEach: simularNotificacao("default", {
    resposta: "granted"
  }),
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    const avisos = await interruptorDeAvisos(tela);
    await expect(avisos).not.toBeChecked();
    await expect(tela.queryByText(AVISO_BLOQUEADO)).not.toBeInTheDocument();
    await step("ligar pede a permissão e, aceita, fica ligado", async () => {
      await userEvent.click(avisos);
      await waitFor(() => expect(avisos).toBeChecked());
      await expect(localStorage.getItem(CHAVE_PREFERENCIA_FILA)).toBe("1");
    });
    await step("desligar apaga a preferência", async () => {
      await userEvent.click(avisos);
      await waitFor(() => expect(avisos).not.toBeChecked());
      await expect(localStorage.getItem(CHAVE_PREFERENCIA_FILA)).toBeNull();
    });
    await semRotaSemFixture();
  }
}`,...(ra=(sa=g.parameters)==null?void 0:sa.docs)==null?void 0:ra.source},description:{story:`Avisos do navegador desligados (nunca pediu permissão): ligar pede a
permissão no clique e, aceita, o interruptor fica ligado.`,...(la=(ca=g.parameters)==null?void 0:ca.docs)==null?void 0:la.description}}};var da,ma,ua,pa,wa;x.parameters={...x.parameters,docs:{...(da=x.parameters)==null?void 0:da.docs,source:{originalSource:`{
  name: "Avisos do navegador ligados",
  args: {
    cena: "disponivel-com-fila"
  },
  beforeEach: simularNotificacao("granted", {
    preferenciaLigada: true
  }),
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await interruptorDeAvisos(tela)).toBeChecked();
    await expect(tela.queryByText(AVISO_BLOQUEADO)).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(ua=(ma=x.parameters)==null?void 0:ma.docs)==null?void 0:ua.source},description:{story:"Preferência gravada e permissão concedida: abre ligado.",...(wa=(pa=x.parameters)==null?void 0:pa.docs)==null?void 0:wa.description}}};var ga,xa,ya,Ba,ha;y.parameters={...y.parameters,docs:{...(ga=y.parameters)==null?void 0:ga.docs,source:{originalSource:`{
  name: "Avisos do navegador bloqueados",
  args: {
    cena: "disponivel-com-fila"
  },
  beforeEach: simularNotificacao("denied", {
    preferenciaLigada: true
  }),
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    const avisos = await interruptorDeAvisos(tela);
    await expect(avisos).not.toBeChecked();
    await expect(tela.getByText(AVISO_BLOQUEADO)).toBeInTheDocument();
    await step("ligar com a permissão negada volta a desligado com a explicação", async () => {
      await userEvent.click(avisos);
      await waitFor(() => expect(avisos).not.toBeChecked());
      await expect(tela.getByText(AVISO_BLOQUEADO)).toBeInTheDocument();
    });
    await semRotaSemFixture();
  }
}`,...(ya=(xa=y.parameters)==null?void 0:xa.docs)==null?void 0:ya.source},description:{story:`O navegador bloqueou os avisos depois de ligados: abre desligado, com a
explicação, e ligar de novo não passa do bloqueio.`,...(ha=(Ba=y.parameters)==null?void 0:Ba.docs)==null?void 0:ha.description}}};var fa,va,Ea,ba,Ta;B.parameters={...B.parameters,docs:{...(fa=B.parameters)==null?void 0:fa.docs,source:{originalSource:`{
  name: "Avisos do navegador no automático",
  args: {
    chamada: {
      estado: "disponivel",
      modo: "automatico"
    }
  },
  beforeEach: simularNotificacao("granted", {
    preferenciaLigada: true
  }),
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await tela.findByText(/Distribuição automática/);
    await expect(tela.queryByRole("switch", {
      name: ROTULO_AVISOS_NAVEGADOR
    })).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(Ea=(va=B.parameters)==null?void 0:va.docs)==null?void 0:Ea.source},description:{story:"Distribuição automática: a notificação nunca sai, então o interruptor some.",...(Ta=(ba=B.parameters)==null?void 0:ba.docs)==null?void 0:Ta.description}}};var Aa,Da,Ra,Sa,Ca;h.parameters={...h.parameters,docs:{...(Aa=h.parameters)==null?void 0:Aa.docs,source:{originalSource:`{
  name: "Fila vazia",
  args: {
    chamada: {
      estado: "disponivel",
      disponivel: true,
      meusDepartamentos: [DEPARTAMENTO_INSS],
      fila: {
        total: 0,
        geral: 0,
        departamentos: [{
          id: "dep-inss",
          nome: "INSS · Consignado",
          total: 0
        }],
        clientes: []
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByRole("button", {
      name: "Fila vazia"
    })).toBeDisabled();
    await expect(tela.getByText("0 na fila")).toBeInTheDocument();
    await expect(tela.queryByText(MOTIVO_OFFLINE)).not.toBeInTheDocument();
    await expect(tela.getByText("Nenhuma chamada em andamento")).toBeVisible();
    await semRotaSemFixture();
  }
}`,...(Ra=(Da=h.parameters)==null?void 0:Da.docs)==null?void 0:Ra.source},description:{story:'Disponível, fora de chamada e sem ninguém nas filas dela: o botão vira "Fila vazia".',...(Ca=(Sa=h.parameters)==null?void 0:Sa.docs)==null?void 0:Ca.description}}};var Ia,Oa,ka,_a,Fa;u.parameters={...u.parameters,docs:{...(Ia=u.parameters)==null?void 0:Ia.docs,source:{originalSource:`{
  name: "Em chamada",
  args: {
    chamada: {
      estado: "em_atendimento",
      meusDepartamentos: [DEPARTAMENTO_INSS],
      fila: {
        total: 1,
        geral: 0,
        departamentos: [{
          id: "dep-inss",
          nome: "INSS · Consignado",
          total: 1
        }],
        clientes: []
      },
      atendimento: {
        sessao_id: "ses_fic_ativa",
        token: "t",
        url: "wss://exemplo.invalid",
        cliente_nome: "Joana Ribeiro Lago"
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await tela.findByText("Em atendimento");
    const palco = canvasElement.ownerDocument.querySelector("[data-testid=atendimento-palco]") as HTMLElement;
    await expect(palco).toBeVisible();
    await expect(tela.queryByText("Nenhuma chamada em andamento")).not.toBeInTheDocument();
    await expect(tela.getByRole("button", {
      name: "Atender próximo"
    })).toBeDisabled();
    await expect(tela.getByRole("button", {
      name: "Áudio e vídeo"
    })).toBeVisible();
    const filas = palco.parentElement?.querySelector(".atd-filas") as HTMLElement;
    const largo = canvasElement.ownerDocument.defaultView!.innerWidth > 980;
    if (largo) await expect(Math.abs(palco.getBoundingClientRect().top - filas.getBoundingClientRect().top)).toBeLessThan(1);else await expect(palco.getBoundingClientRect().top).toBeGreaterThanOrEqual(filas.getBoundingClientRect().bottom);
    await semRotaSemFixture();
  }
}`,...(ka=(Oa=u.parameters)==null?void 0:Oa.docs)==null?void 0:ka.source},description:{story:`Em chamada: o palco toma a área da direita (a 375, logo abaixo das filas) e
os números do dia e as preferências seguem na tela, sem remontar. O palco em
si não é simulado aqui: a área fica vazia.`,...(Fa=(_a=u.parameters)==null?void 0:_a.docs)==null?void 0:Fa.description}}};var Na,qa,La,Pa,Ma;f.parameters={...f.parameters,docs:{...(Na=f.parameters)==null?void 0:Na.docs,source:{originalSource:`{
  name: "Em chamada e recolhida",
  args: EmChamada.args,
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await tela.findByText("Em atendimento");
    const documento = canvasElement.ownerDocument;
    const palco = documento.querySelector("[data-testid=atendimento-palco]") as HTMLElement;
    const larguraAntes = palco.getBoundingClientRect().width;
    const largo = documento.defaultView!.innerWidth > 980;
    await step("recolher as filas dá a largura ao palco", async () => {
      await userEvent.click(await tela.findByRole("button", {
        name: "Recolher filas"
      }));
      await expect(await tela.findByRole("button", {
        name: "Abrir filas"
      })).toHaveAttribute("aria-expanded", "false");
      await expect(palco).toBeVisible();
      const filas = documento.querySelector(".atd-filas") as HTMLElement;
      const lado = documento.querySelector(".atd-lado") as HTMLElement;
      await waitFor(() => {
        const caixaPalco = palco.getBoundingClientRect();
        const caixaFilas = filas.getBoundingClientRect();
        if (largo) {
          expect(caixaFilas.width).toBeLessThan(120);
          expect(caixaPalco.width).toBeGreaterThan(larguraAntes + 200);
          expect(Math.abs(caixaPalco.top - caixaFilas.top)).toBeLessThan(1);
          expect(Math.abs(lado.getBoundingClientRect().left - caixaPalco.left)).toBeLessThan(1);
        } else {
          expect(caixaPalco.top).toBeGreaterThanOrEqual(caixaFilas.bottom);
        }
      });
    });
    await semRotaSemFixture();
  }
}`,...(La=(qa=f.parameters)==null?void 0:qa.docs)==null?void 0:La.source},description:{story:`Em chamada, recolher as filas estreita a coluna da esquerda e o palco
ganha a largura; os números do dia descem para baixo do palco.`,...(Ma=(Pa=f.parameters)==null?void 0:Pa.docs)==null?void 0:Ma.description}}};var Va,Ha,Ga,za,Ua;v.parameters={...v.parameters,docs:{...(Va=v.parameters)==null?void 0:Va.docs,source:{originalSource:`{
  name: "Coluna recolhida e expandida",
  args: {
    cena: "disponivel-com-fila"
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    const recolher = await tela.findByRole("button", {
      name: "Recolher filas"
    });
    await expect(recolher).toHaveAttribute("aria-expanded", "true");
    await step("recolher esconde as filas e deixa o chevron de abrir", async () => {
      await userEvent.click(recolher);
      const abrir = await tela.findByRole("button", {
        name: "Abrir filas"
      });
      await expect(abrir).toHaveAttribute("aria-expanded", "false");
      await expect(tela.queryByRole("button", {
        name: /INSS · Consignado/
      })).not.toBeInTheDocument();
      await expect(tela.getByRole("region", {
        name: TITULO_EMPRESA_HOJE
      })).toBeVisible();
      const caixa = abrir.getBoundingClientRect();
      await expect(caixa.width).toBeGreaterThanOrEqual(44);
      await expect(caixa.height).toBeGreaterThanOrEqual(44);
    });
    await step("abrir volta as filas", async () => {
      await userEvent.click(tela.getByRole("button", {
        name: "Abrir filas"
      }));
      await expect(await tela.findByRole("button", {
        name: /INSS · Consignado/
      })).toBeVisible();
      await expect(tela.getByRole("button", {
        name: "Recolher filas"
      })).toHaveAttribute("aria-expanded", "true");
    });
    await semRotaSemFixture();
  }
}`,...(Ga=(Ha=v.parameters)==null?void 0:Ha.docs)==null?void 0:Ga.source},description:{story:"Recolher e abrir a coluna de filas pelo chevron.",...(Ua=(za=v.parameters)==null?void 0:za.docs)==null?void 0:Ua.description}}};export{y as AvisosDoNavegadorBloqueados,g as AvisosDoNavegadorDesligados,x as AvisosDoNavegadorLigados,B as AvisosDoNavegadorNoAutomatico,p as Carregando,v as ColunaRecolhida,D as DisponivelComFila,u as EmChamada,f as EmChamadaERecolhida,w as Erro,h as FilaVazia,A as Offline,R as Pausado,S as TabulacaoPendente,Ae as __namedExportsOrder,Te as default};
