import{t as c,s as T}from"./jornadaOperar-BSpzphu5.js";import{S as U,p as H}from"./ShellJornada-dQtjvzoK.js";import"./jsx-runtime-BxkmYOhx.js";import"./iframe-CvwGTwxb.js";import"./preload-helper-D6kgxu3v.js";import"./dadosShell-CdtDdZjS.js";import"./index-Bk9tc66v.js";import"./index-C7gLAnno.js";import"./v2-BKgx1C0D.js";import"./index-B_TEXOCW.js";import"./api-CwvJBfED.js";import"./index-BxX8puOH.js";import"./marca-IZ8R_8pg.js";import"./carregando-CLNuqGFU.js";import"./celulas-BKlXq2YF.js";/* empty css              */import"./CartaoKpi-D8GTFk0D.js";import"./MiniBarras-CuGgzhOK.js";import"./cores-D-iLqYVd.js";import"./Login-RcCxCUCc.js";import"./etapas-DMOYpc72.js";/* empty css                */const{configure:B,expect:o,getConfig:z,userEvent:J,waitFor:q,within:w}=__STORYBOOK_MODULE_TEST__,M=4e3;function k(e){if(!e)return()=>{};const a=globalThis.fetch;let t=!1;const n=async(r,i)=>{const s=typeof r=="string"?r:r instanceof URL?r.href:r.url;return!(new URL(s,window.location.origin).pathname===e)||t?a(r,i):(t=!0,new Response(JSON.stringify({erro:"Erro interno do servidor (story)"}),{status:500,headers:{"Content-Type":"application/json"}}))};return globalThis.fetch=n,()=>{globalThis.fetch===n&&(globalThis.fetch=a)}}const ye={title:"Jornadas/Painel de controle",component:U,args:{rotaInicial:"/painel-de-controle"},beforeEach:({parameters:e})=>{const a=z().asyncUtilTimeout;B({asyncUtilTimeout:M});const t=H(e.jornada??{}),n=k(e.falharNaPrimeira);return()=>{try{n()}finally{B({asyncUtilTimeout:a}),t()}}},parameters:{layout:"fullscreen",controls:{disable:!0},docs:{story:{inline:!1,height:"720px"},description:{component:'Jornada do Dashboard dentro do shell (MenuLateral + TopoPagina), papel admin: indicadores do dia, gráficos, fila e roster ao vivo com dados fictícios. Os itens Sessões, Nova sessão e Atendentes do menu navegam sem sair do shell. As stories de estado mostram carregando, o erro em um card só (os outros seguem com dado e "Tentar de novo" recupera), sem rede e a empresa sem nenhuma sessão. As chamadas `/v1/*` respondem de uma API falsa em memória (`src/paginas/stories/apiFalsa.ts`); nenhuma API real é chamada e os dados são fictícios.'}}}},g="GET /v1/estatisticas",N="GET /v1/operacao/resumo",P="GET /v1/indicadores-do-dia",y="Não foi possível carregar a fila de revisão.",G=/Failed to fetch|HTTP \d{3}|Erro interno|Falhou ao carregar/;async function V(e){const a=e.getAnimations().filter(t=>{var n;return((n=t.effect)==null?void 0:n.getComputedTiming().endTime)!==1/0});await Promise.all(a.map(t=>t.finished.catch(()=>{})))}async function l(e){var i;const a=e.ownerDocument;await V(a);const t=((i=a.defaultView)==null?void 0:i.innerWidth)??0;await o(a.documentElement.scrollWidth).toBeLessThanOrEqual(t+1);const r=[...a.querySelectorAll("main > *, main > * > *, main .dash-slot")].filter(s=>s.getBoundingClientRect().right>t+1).map(s=>s.className||s.tagName);await o(r).toEqual([])}async function W(e){const t=[...e.ownerDocument.querySelectorAll(".dash-card .hk-erro-card")].filter(n=>{var i;const r=(i=n.closest(".dash-card"))==null?void 0:i.getBoundingClientRect();return[...n.querySelectorAll("*")].some(s=>r&&s.getBoundingClientRect().right>r.right+1)});await o(t.map(n=>n.textContent)).toEqual([])}async function b(e){await o(e.ownerDocument.body.textContent??"").not.toMatch(G)}const m={name:"Painel de controle",play:async({canvasElement:e})=>{const a=c(e),t=w(await a.findByRole("region",{name:"Hoje"}));await o(await t.findByText("sessões criadas hoje")).toBeInTheDocument(),await o(await a.findByRole("region",{name:"Fora do SLA"})).toBeInTheDocument(),await q(()=>o(a.queryByText("Carregando…")).not.toBeInTheDocument()),await o(a.queryByRole("alert")).not.toBeInTheDocument(),await l(e),await T()}},d={parameters:{jornada:{pendurar:[g,N,P]}},play:async({canvasElement:e})=>{const a=c(e);await o(await a.findByText("Carregando…")).toBeInTheDocument(),await o(a.getByRole("region",{name:"Hoje"})).toBeInTheDocument(),await o(a.queryByText("sessões criadas hoje")).not.toBeInTheDocument(),await o(a.queryByRole("alert")).not.toBeInTheDocument(),await l(e)}},u={name:"Erro em um card",parameters:{falharNaPrimeira:"/v1/operacao/resumo"},play:async({canvasElement:e,step:a})=>{const t=c(e),n=w(await t.findByRole("region",{name:"Fora do SLA"}));await a("só a fila de revisão mostra o erro; os números de hoje chegam",async()=>{await o(await n.findByText(y)).toBeInTheDocument();const r=w(t.getByRole("region",{name:"Hoje"}));await o(await r.findByText("sessões criadas hoje")).toBeInTheDocument(),await o(t.getAllByRole("alert")).toHaveLength(1),await b(e),await l(e)}),await a("Tentar de novo troca o erro pelo dado",async()=>{await J.click(n.getByRole("button",{name:"Tentar de novo"})),await q(()=>o(n.queryByText(y)).not.toBeInTheDocument()),await o(t.queryByRole("alert")).not.toBeInTheDocument()}),await T()}},p={name:"Erro de rede",parameters:{jornada:{semRede:[g,N,P]}},play:async({canvasElement:e})=>{const a=c(e);await o(await a.findByText("Não foi possível carregar os números de hoje.")).toBeInTheDocument(),await o(await a.findByText(y)).toBeInTheDocument(),await o((await a.findAllByText("Não foi possível carregar as chamadas do dia.")).length).toBeGreaterThan(0),await W(e),await b(e),await l(e),await T()}},h={name:"Vazio: nenhuma sessão ainda",parameters:{jornada:{respostas:{[g]:{corpo:{por_status:{}}}}}},play:async({canvasElement:e})=>{const a=c(e),t=await a.findByRole("heading",{name:"Nenhuma sessão ainda"}),n=w(t.closest("section")??e);await o(n.getByRole("link",{name:"Nova sessão"})).toBeInTheDocument(),await o(a.queryByRole("region",{name:"Hoje"})).not.toBeInTheDocument(),await l(e),await T()}},ge=["PainelDeControle","Carregando","ErroEmUmCard","SemRede","Vazio"];var f,R,x;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Painel de controle",
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    const hoje = within(await tela.findByRole("region", {
      name: "Hoje"
    }));
    await expect(await hoje.findByText("sessões criadas hoje")).toBeInTheDocument();
    await expect(await tela.findByRole("region", {
      name: "Fora do SLA"
    })).toBeInTheDocument();
    await waitFor(() => expect(tela.queryByText("Carregando…")).not.toBeInTheDocument());
    await expect(tela.queryByRole("alert")).not.toBeInTheDocument();
    await semRolagemLateral(canvasElement);
    await semRotaSemFixture();
  }
}`,...(x=(R=m.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};var E,D,I;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    jornada: {
      pendurar: [ROTA_ESTATISTICAS, ROTA_RESUMO, ROTA_INDICADORES]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Carregando…")).toBeInTheDocument();
    await expect(tela.getByRole("region", {
      name: "Hoje"
    })).toBeInTheDocument();
    await expect(tela.queryByText("sessões criadas hoje")).not.toBeInTheDocument();
    await expect(tela.queryByRole("alert")).not.toBeInTheDocument();
    await semRolagemLateral(canvasElement);
  }
}`,...(I=(D=d.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var A,v,S;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Erro em um card",
  parameters: {
    falharNaPrimeira: "/v1/operacao/resumo"
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    const sla = within(await tela.findByRole("region", {
      name: "Fora do SLA"
    }));
    await step("só a fila de revisão mostra o erro; os números de hoje chegam", async () => {
      await expect(await sla.findByText(ERRO_FILA)).toBeInTheDocument();
      const hoje = within(tela.getByRole("region", {
        name: "Hoje"
      }));
      await expect(await hoje.findByText("sessões criadas hoje")).toBeInTheDocument();
      await expect(tela.getAllByRole("alert")).toHaveLength(1);
      await semTextoCru(canvasElement);
      await semRolagemLateral(canvasElement);
    });
    await step("Tentar de novo troca o erro pelo dado", async () => {
      await userEvent.click(sla.getByRole("button", {
        name: "Tentar de novo"
      }));
      await waitFor(() => expect(sla.queryByText(ERRO_FILA)).not.toBeInTheDocument());
      await expect(tela.queryByRole("alert")).not.toBeInTheDocument();
    });
    await semRotaSemFixture();
  }
}`,...(S=(v=u.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var O,j,C;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "Erro de rede",
  parameters: {
    jornada: {
      semRede: [ROTA_ESTATISTICAS, ROTA_RESUMO, ROTA_INDICADORES]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Não foi possível carregar os números de hoje.")).toBeInTheDocument();
    await expect(await tela.findByText(ERRO_FILA)).toBeInTheDocument();
    await expect((await tela.findAllByText("Não foi possível carregar as chamadas do dia.")).length).toBeGreaterThan(0);
    await errosDentroDosCards(canvasElement);
    await semTextoCru(canvasElement);
    await semRolagemLateral(canvasElement);
    await semRotaSemFixture();
  }
}`,...(C=(j=p.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var F,_,L;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Vazio: nenhuma sessão ainda",
  parameters: {
    jornada: {
      respostas: {
        [ROTA_ESTATISTICAS]: {
          corpo: {
            por_status: {}
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    const titulo = await tela.findByRole("heading", {
      name: "Nenhuma sessão ainda"
    });
    const vazio = within(titulo.closest("section") ?? canvasElement);
    await expect(vazio.getByRole("link", {
      name: "Nova sessão"
    })).toBeInTheDocument();
    await expect(tela.queryByRole("region", {
      name: "Hoje"
    })).not.toBeInTheDocument();
    await semRolagemLateral(canvasElement);
    await semRotaSemFixture();
  }
}`,...(L=(_=h.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};export{d as Carregando,u as ErroEmUmCard,m as PainelDeControle,p as SemRede,h as Vazio,ge as __namedExportsOrder,ye as default};
