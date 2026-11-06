import{b as k}from"./dadosShell-DVjA70Zd.js";import{t as l,s as d,i as D,m as Ta}from"./jornadaOperar-qu3lmx3f.js";import{A as T,e as B,g as fa,T as b,d as Aa}from"./ShellJornada-D6or9w_N.js";import"./jsx-runtime-CIMg3zCe.js";import"./iframe-sQhv-dP9.js";import"./preload-helper-D6kgxu3v.js";import"./index-Cca0CcRs.js";import"./index-BUBJGiik.js";import"./v2-QXom_1Mi.js";import"./index-C1SKTYOl.js";import"./api-DeTcSHTh.js";import"./index-KxmTJ2KI.js";import"./marca-JJvqtdKG.js";import"./carregando-Cu9nLz69.js";import"./celulas-DMaLRg05.js";/* empty css              */import"./MiniBarras-D1hOdhnB.js";import"./cores-D-iLqYVd.js";import"./Login-DFawTORA.js";import"./etapas-DD6roYoj.js";/* empty css                */const{expect:t,userEvent:r,waitFor:c,within:O}=__STORYBOOK_MODULE_TEST__,Ja={title:"Jornadas/Filas de atendimento",...Ta("/atendimento",'Jornada de Filas de atendimento (sem chamada) dentro do shell, papel admin atendendo: disponibilidade (offline, disponível, pausado), encerrar expediente, tabulação pendente, indicadores do dia, o interruptor "Avisos do navegador" (desligado, ligado, bloqueado e oculto no automático; o `Notification` do navegador é falso em cada cena, e a chegada de cliente que dispara a notificação é do `ChamadaProvider` real, coberta em `chamada.notificacao-fila.provider.test.tsx`) e a fila. **O que é encenado:** o contexto de chamada aqui é o `ProvedorChamadaEncenada` (`.storybook/mocks/chamada.tsx`), não o `ChamadaProvider` real. Ligar/desligar a disponibilidade, o modal de pausa (no Storybook sem motivo; no painel o motivo é obrigatório), encerrar o expediente e tabular (que conclui na hora, sem o formulário de tabulação) são encenações para a tela responder ao clique: os plays conferem que a TELA reflete cada estado, não o comportamento real da disponibilidade, da pausa nem da tabulação (API, SSE, distribuição da fila). Atender o próximo ou puxar um cliente não abre chamada: mostra o aviso de que a chamada ao vivo não é simulada.',"offline")};function s(n){return n.findByRole("switch",{name:"Disponível"})}async function Da(n){var m;const e=(await n.findByText("Empresa · hoje")).parentElement,a=[...(e==null?void 0:e.querySelectorAll(".painel-lateral-fato"))??[]].find(ha=>{var C;return(C=ha.textContent)==null?void 0:C.startsWith("Concluídas")}),o=((m=a==null?void 0:a.querySelector("strong"))==null?void 0:m.textContent)??"",i=o.match(/^(\d+)\/(\d+)$/);return await t(i,`placar "${o}"`).not.toBeNull(),{atendidas:Number(i[1]),total:Number(i[2])}}async function I(n,e){await n.findAllByRole("heading",{name:e});const a=new Date().toLocaleDateString("pt-BR");return(await n.findAllByTitle(/^\d{2}\/\d{2}\/\d{4}, /)).filter(i=>{var m;return(m=i.getAttribute("title"))==null?void 0:m.startsWith(`${a}, `)}).length}const v={args:{cena:"offline"},play:async({canvasElement:n,step:e})=>{const a=l(n),o=await s(a);await t(o).not.toBeChecked(),await t(a.getByText("Offline")).toBeInTheDocument(),await e("encenado: ligar a disponibilidade mostra disponível",async()=>{await r.click(o),await c(()=>t(o).toBeChecked()),await c(()=>t(a.queryByText("Offline")).not.toBeInTheDocument())}),await d()}},f={name:"Disponível com fila",args:{cena:"disponivel-com-fila"},play:async({canvasElement:n,step:e})=>{const a=l(n);let o={atendidas:-1,total:-1};await e("indicadores do dia e clientes na fila",async()=>{await t(await s(a)).toBeChecked(),o=await Da(a),await t(a.getByText("3 na fila")).toBeInTheDocument(),await r.click(a.getByRole("button",{name:/INSS · Consignado/})),await a.findByText("Joana Ribeiro Lago")}),await e("atender o próximo ou puxar um cliente avisa que a chamada não é simulada",async()=>{await r.click(a.getByRole("button",{name:"Atender próximo"})),await a.findByText(k);const[i]=a.getAllByRole("button",{name:/^Puxar /});await r.click(i),await t(a.getByText(k)).toBeInTheDocument(),await t(a.getByText("Nenhuma chamada em andamento")).toBeInTheDocument()}),await e("encenado: pausar vira pausado; voltar vira disponível",async()=>{await r.click(await s(a));const i=O(await a.findByRole("dialog"));await r.click(i.getByRole("button",{name:"Pausar"})),await a.findByText("Pausado"),await t(await s(a)).not.toBeChecked(),await r.click(await s(a)),await c(async()=>t(await s(a)).toBeChecked()),await c(()=>t(a.queryByText("Pausado")).not.toBeInTheDocument())}),await e("encenado: encerrar o expediente volta para offline",async()=>{await r.click(await s(a));const i=O(await a.findByRole("dialog"));await r.click(i.getByRole("button",{name:"Encerrar expediente"})),await a.findByText("Offline"),await t(await s(a)).not.toBeChecked()}),await e("o placar do dia bate com Chamadas realizadas e perdidas de hoje, abertas pelo menu",async()=>{const{atendidas:i,total:m}=o;await D(n,"Chamadas realizadas"),await c(async()=>t(await I(a,"Chamadas realizadas")).toBe(i)),await D(n,"Chamadas perdidas"),await c(async()=>t(await I(a,"Chamadas perdidas")).toBe(m-i))}),await e("o Painel de controle aberto pelo menu mostra a mesma operação ao vivo",async()=>{await D(n,"Dashboard"),await a.findByText(/online agora/),await t(a.queryByText("Ninguém online agora")).not.toBeInTheDocument()}),await d()}},E={args:{cena:"pausado"},play:async({canvasElement:n,step:e})=>{const a=l(n);await a.findByText("Pausado"),await t(await s(a)).not.toBeChecked(),await e("encenado: voltar da pausa mostra disponível",async()=>{await r.click(await s(a)),await c(async()=>t(await s(a)).toBeChecked())}),await d()}},h={name:"Tabulação pendente",args:{cena:"tabulacao-pendente"},play:async({canvasElement:n,step:e})=>{const a=l(n);await a.findByText("Chamada encerrada, conclua a tabulação para voltar a receber clientes."),await t(a.getByText("Ester Nunes Prado")).toBeInTheDocument(),await t(await s(a)).toBeDisabled(),await e("encenado: tabular conclui na hora e libera a disponibilidade",async()=>{await r.click(a.getByRole("button",{name:"Tabular"})),await c(()=>t(a.queryByRole("button",{name:"Tabular"})).not.toBeInTheDocument()),await c(async()=>t(await s(a)).toBeChecked())}),await d()}},Ea={conectado:!1,fila:{total:0,geral:0,departamentos:[],clientes:[]},roster:[],chamadasAtivas:[]},p={args:{chamada:Ea,limiteSemConexaoMs:6e5},play:async({canvasElement:n})=>{const e=l(n);await c(()=>t(n.querySelector("[data-testid=filas-esqueleto]")).not.toBeNull()),await t(e.getByText("conectando…")).toHaveClass("hk-sr-only"),await t(e.queryByText(b)).not.toBeInTheDocument(),await d()}},u={args:{chamada:Ea,limiteSemConexaoMs:0},play:async({canvasElement:n})=>{const e=l(n);await e.findByText(b),await r.click(e.getByRole("button",{name:Aa})),await t(e.getByText(b)).toBeInTheDocument(),await d()}};function A(n,e={}){return()=>{const a=Object.getOwnPropertyDescriptor(window,"Notification"),o=Object.assign(function(){},{permission:n,requestPermission:async()=>e.resposta??n});return Object.defineProperty(window,"Notification",{configurable:!0,writable:!0,value:o}),e.preferenciaLigada?localStorage.setItem(B,"1"):localStorage.removeItem(B),()=>{a?Object.defineProperty(window,"Notification",a):Reflect.deleteProperty(window,"Notification"),localStorage.removeItem(B)}}}function S(n){return n.findByRole("switch",{name:fa})}const w={name:"Avisos do navegador desligados",args:{cena:"disponivel-com-fila"},beforeEach:A("default",{resposta:"granted"}),play:async({canvasElement:n,step:e})=>{const a=l(n),o=await S(a);await t(o).not.toBeChecked(),await t(a.queryByText(T)).not.toBeInTheDocument(),await e("ligar pede a permissão e, aceita, fica ligado",async()=>{await r.click(o),await c(()=>t(o).toBeChecked()),await t(localStorage.getItem(B)).toBe("1")}),await e("desligar apaga a preferência",async()=>{await r.click(o),await c(()=>t(o).not.toBeChecked()),await t(localStorage.getItem(B)).toBeNull()}),await d()}},y={name:"Avisos do navegador ligados",args:{cena:"disponivel-com-fila"},beforeEach:A("granted",{preferenciaLigada:!0}),play:async({canvasElement:n})=>{const e=l(n);await t(await S(e)).toBeChecked(),await t(e.queryByText(T)).not.toBeInTheDocument(),await d()}},g={name:"Avisos do navegador bloqueados",args:{cena:"disponivel-com-fila"},beforeEach:A("denied",{preferenciaLigada:!0}),play:async({canvasElement:n,step:e})=>{const a=l(n),o=await S(a);await t(o).not.toBeChecked(),await t(a.getByText(T)).toBeInTheDocument(),await e("ligar com a permissão negada volta a desligado com a explicação",async()=>{await r.click(o),await c(()=>t(o).not.toBeChecked()),await t(a.getByText(T)).toBeInTheDocument()}),await d()}},x={name:"Avisos do navegador no automático",args:{chamada:{estado:"disponivel",modo:"automatico"}},beforeEach:A("granted",{preferenciaLigada:!0}),play:async({canvasElement:n})=>{const e=l(n);await e.findByText(/Distribuição automática/),await t(e.queryByRole("switch",{name:fa})).not.toBeInTheDocument(),await d()}},Qa=["Offline","DisponivelComFila","Pausado","TabulacaoPendente","Carregando","Erro","AvisosDoNavegadorDesligados","AvisosDoNavegadorLigados","AvisosDoNavegadorBloqueados","AvisosDoNavegadorNoAutomatico"];var R,_,N;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(N=(_=v.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var F,q,P;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(P=(q=f.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};var L,M,U;E.parameters={...E.parameters,docs:{...(L=E.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(U=(M=E.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var V,j,H;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(H=(j=h.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var X,G,z,J,Q;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(z=(G=p.parameters)==null?void 0:G.docs)==null?void 0:z.source},description:{story:'SSE ainda abrindo: esqueleto no lugar da lista; "conectando…" só para o leitor de tela.',...(Q=(J=p.parameters)==null?void 0:J.docs)==null?void 0:Q.description}}};var $,W,K,Y,Z;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(K=(W=u.parameters)==null?void 0:W.docs)==null?void 0:K.source},description:{story:'Passado o limite sem conexão: erro com "Tentar agora".',...(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};var aa,ea,ta,na,oa;w.parameters={...w.parameters,docs:{...(aa=w.parameters)==null?void 0:aa.docs,source:{originalSource:`{
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
}`,...(ta=(ea=w.parameters)==null?void 0:ea.docs)==null?void 0:ta.source},description:{story:`Avisos do navegador desligados (nunca pediu permissão): ligar pede a
permissão no clique e, aceita, o interruptor fica ligado.`,...(oa=(na=w.parameters)==null?void 0:na.docs)==null?void 0:oa.description}}};var ia,ra,sa,ca,la;y.parameters={...y.parameters,docs:{...(ia=y.parameters)==null?void 0:ia.docs,source:{originalSource:`{
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
}`,...(sa=(ra=y.parameters)==null?void 0:ra.docs)==null?void 0:sa.source},description:{story:"Preferência gravada e permissão concedida: abre ligado.",...(la=(ca=y.parameters)==null?void 0:ca.docs)==null?void 0:la.description}}};var da,ma,pa,ua,wa;g.parameters={...g.parameters,docs:{...(da=g.parameters)==null?void 0:da.docs,source:{originalSource:`{
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
}`,...(pa=(ma=g.parameters)==null?void 0:ma.docs)==null?void 0:pa.source},description:{story:`O navegador bloqueou os avisos depois de ligados: abre desligado, com a
explicação, e ligar de novo não passa do bloqueio.`,...(wa=(ua=g.parameters)==null?void 0:ua.docs)==null?void 0:wa.description}}};var ya,ga,xa,Ba,va;x.parameters={...x.parameters,docs:{...(ya=x.parameters)==null?void 0:ya.docs,source:{originalSource:`{
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
}`,...(xa=(ga=x.parameters)==null?void 0:ga.docs)==null?void 0:xa.source},description:{story:"Distribuição automática: a notificação nunca sai, então o interruptor some.",...(va=(Ba=x.parameters)==null?void 0:Ba.docs)==null?void 0:va.description}}};export{g as AvisosDoNavegadorBloqueados,w as AvisosDoNavegadorDesligados,y as AvisosDoNavegadorLigados,x as AvisosDoNavegadorNoAutomatico,p as Carregando,f as DisponivelComFila,u as Erro,v as Offline,E as Pausado,h as TabulacaoPendente,Qa as __namedExportsOrder,Ja as default};
