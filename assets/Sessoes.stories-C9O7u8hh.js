import{S as re,c as ie,p as ce}from"./ShellJornada-Bkj0Xxti.js";import{t as r,s as m}from"./jornadaOperar-mBuU30eY.js";import"./jsx-runtime-D6nutFwx.js";import"./iframe-BdhfGGq3.js";import"./preload-helper-D6kgxu3v.js";import"./dadosShell-DZF5DUm8.js";import"./index-d_Xefzb7.js";import"./index-tw-FhkDn.js";import"./v2-DJ9t81kF.js";import"./index-QiNlZTMk.js";import"./api-C_qpy-2i.js";import"./index-D5YPr2wh.js";import"./marca-BWEkpmVo.js";import"./carregando-DuBGuGCv.js";import"./celulas-DpVvjcXG.js";/* empty css              */import"./CartaoKpi-Bfp8hLNM.js";import"./MiniBarras-CHfVUMKT.js";import"./cores-D-iLqYVd.js";import"./Login-nUUU2UMU.js";import"./etapas-Bursdox5.js";/* empty css                */const{configure:A,expect:o,getConfig:le,userEvent:d,waitFor:u,within:w}=__STORYBOOK_MODULE_TEST__,me=4e3;function oe(e){const a=typeof e=="string"?e:e instanceof URL?e.href:e.url;return new URL(a,window.location.origin)}function pe(e){const a=oe(e);return a.pathname==="/v1/sessoes"&&a.searchParams.has("de")}function de(e){const a=oe(e);return a.pathname==="/v1/sessoes"&&!a.searchParams.has("de")}const b={total:0};function ue(){b.total=0;const e=globalThis.fetch,a=(t,n)=>(de(t)&&(b.total+=1),e(t,n));return globalThis.fetch=a,()=>{globalThis.fetch===a&&(globalThis.fetch=e)}}function we(e){if(!e)return()=>{};const a=globalThis.fetch,t=async(n,s)=>pe(n)?new Response(JSON.stringify({erro:"Erro interno do servidor (story)"}),{status:500,headers:{"Content-Type":"application/json"}}):a(n,s);return globalThis.fetch=t,()=>{globalThis.fetch===t&&(globalThis.fetch=a)}}const p=[];function xe(){const e=HTMLAnchorElement.prototype.click;return p.length=0,HTMLAnchorElement.prototype.click=function(){if(this.download){p.push(this.download);return}e.call(this)},()=>{HTMLAnchorElement.prototype.click=e,p.length=0}}const He={title:"Jornadas/Sessões",component:re,args:{rotaInicial:"/sessoes"},beforeEach:({parameters:e})=>{const a=le().asyncUtilTimeout;A({asyncUtilTimeout:me});const t=ce(e.jornada??{}),n=ue(),s=we(e.exportacao),i=xe();return()=>{try{i(),s(),n()}finally{A({asyncUtilTimeout:a}),t()}}},parameters:{layout:"fullscreen",controls:{disable:!0},docs:{story:{inline:!1,height:"720px"},description:{component:'Jornada de Sessões dentro do shell, papel admin: lista com status variados e sessões aguardando revisão; clicar abre o dossiê (/sessoes/:id) com cliente, evidências e os botões de revisão (Recusar exige observação). Voltar retorna à lista. Os selos de Status e Resultado aparecem sempre inteiros: texto longo ("Entradas esgotadas", "Pendente veredito IA") quebra em duas linhas dentro do selo, nunca com reticências. "Exportar CSV" (no celular, "Exportar") abre a gaveta de exportação com o período. As stories de estado mostram carregando, vazio, vazio de filtro, erro do servidor, sem rede, gerente sem permissão de exportar, exportação com sucesso e exportação com erro. As chamadas `/v1/*` respondem de uma API falsa em memória (`src/paginas/stories/apiFalsa.ts`); nenhuma API real é chamada e os dados são fictícios.'}}}},x=["Entradas esgotadas","Pendente veredito IA"],S="GET /v1/sessoes",ge="GET /v1/sessoes/contagens",ne=/^Exportar( CSV)?$/,ye=/^sessoes-horkos-tudo-\d{4}-\d{2}-\d{2}\.csv$/,he=/Failed to fetch|HTTP \d{3}|Erro interno/;function O(e){return e.scrollWidth>e.clientWidth+1}async function Ee(e){const a=e.getAnimations().filter(t=>{var n;return((n=t.effect)==null?void 0:n.getComputedTiming().endTime)!==1/0});await Promise.all(a.map(t=>t.finished.catch(()=>{})))}async function c(e){var i;const a=e.ownerDocument;await Ee(a);const t=((i=a.defaultView)==null?void 0:i.innerWidth)??0;await o(a.documentElement.scrollWidth).toBeLessThanOrEqual(t+1);const s=[...a.querySelectorAll("main > *, main > * > *, [role='dialog']")].filter(l=>l.getBoundingClientRect().right>t+1).map(l=>l.className||l.tagName);await o(s).toEqual([])}async function D(e){await o(e.ownerDocument.body.textContent??"").not.toMatch(he)}async function se(e){const a=r(e),t=await a.findByRole("button",{name:ne});await d.click(t);const n=await a.findByRole("dialog",{name:"Exportar CSV"});return{abridor:t,gaveta:w(n)}}const g={name:"Sessões",play:async({canvasElement:e,step:a})=>{const t=w(e.ownerDocument.body);await a("os selos longos de Status e Resultado aparecem inteiros, sem reticências",async()=>{for(const n of x){const s=await u(()=>t.getAllByText(n),{timeout:4e3});for(const i of s)await o(O(i)).toBe(!1)}}),await a("nenhum selo da lista é cortado",async()=>{const n=[...e.ownerDocument.querySelectorAll(".hk-lista-pilula")];await o(n.length).toBeGreaterThan(0),await o(n.filter(O).map(s=>s.textContent)).toEqual([])})}},y={parameters:{jornada:{pendurar:[S]}},play:async({canvasElement:e})=>{const a=r(e);await o(await a.findByText("Carregando sessões…")).toBeInTheDocument(),await o(a.queryByRole("alert")).not.toBeInTheDocument(),await c(e)}},h={name:"Vazio: nenhuma sessão ainda",parameters:{jornada:{respostas:{[S]:{corpo:[],headers:{"X-Total-Count":"0"}},[ge]:{corpo:ie([])}}}},play:async({canvasElement:e})=>{const t=await r(e).findByRole("heading",{name:"Nenhuma sessão ainda"}),n=w(t.closest("section")??e);await o(n.getByRole("link",{name:"Nova sessão"})).toBeInTheDocument(),await c(e),await m()}},E={name:"Vazio de filtro",args:{rotaInicial:"/sessoes?busca=ninguem-com-este-nome"},play:async({canvasElement:e})=>{const a=r(e);await o(await a.findByText("Nenhuma sessão com estes filtros")).toBeInTheDocument(),await c(e),await d.click(a.getByRole("button",{name:"Limpar filtros"})),await u(()=>o(a.queryByText("Nenhuma sessão com estes filtros")).not.toBeInTheDocument()),await o((await a.findAllByText(x[0])).length).toBeGreaterThan(0),await m()}},T={name:"Erro do servidor",parameters:{jornada:{falhar:[S]}},play:async({canvasElement:e})=>{const t=await r(e).findByRole("alert");await o(t).toHaveTextContent("O servidor teve um problema ao carregar as sessões. Tente de novo em instantes."),await o(w(t).getByRole("button",{name:"Tentar de novo"})).toBeInTheDocument(),await D(e),await c(e),await m()}},f={name:"Erro de rede",parameters:{jornada:{semRede:[S]}},play:async({canvasElement:e})=>{const a=r(e),t=await a.findByRole("alert");await o(t).toHaveTextContent("Não foi possível carregar as sessões. Verifique a conexão e tente de novo.");const n=b.total;await o(n).toBeGreaterThan(0),await d.click(w(t).getByRole("button",{name:"Tentar de novo"})),await u(()=>o(b.total).toBeGreaterThan(n)),await o(await a.findByText(/Não foi possível carregar as sessões/)).toBeInTheDocument(),await D(e),await c(e),await m()}},v={name:"Sem permissão de exportar",parameters:{jornada:{sessao:{papel:"gerente",permissoes:{"sessoes.ver":!0,"dossie.ver":!0}}}},play:async({canvasElement:e})=>{const a=r(e);await o((await a.findAllByText(x[0])).length).toBeGreaterThan(0),await o(a.queryByRole("button",{name:ne})).not.toBeInTheDocument(),await c(e),await m()}},B={name:"Exportar CSV",play:async({canvasElement:e,step:a})=>{var l;const t=r(e);await o((await t.findAllByText(x[0])).length).toBeGreaterThan(0);const{abridor:n,gaveta:s}=await se(e),i=((l=n.textContent)==null?void 0:l.replace("download","").trim())??"";await a("a gaveta abre com o período e cabe na largura",async()=>{await o(s.getByRole("group",{name:"Período"})).toBeInTheDocument(),await o(s.getByRole("button",{name:"Tudo"})).toHaveAttribute("aria-pressed","true"),await c(e)}),await a("Exportar baixa o arquivo do período, fecha a gaveta e devolve o foco ao botão que abriu",async()=>{await d.click(s.getByRole("button",{name:"Exportar"})),await u(()=>o(t.queryByRole("dialog",{name:"Exportar CSV"})).not.toBeInTheDocument()),await o(p).toHaveLength(1),await o(p[0]).toMatch(ye),await u(()=>o(t.getByRole("button",{name:i})).toHaveFocus())}),await m()}},R={name:"Exportar CSV com erro do servidor",parameters:{exportacao:"servidor"},play:async({canvasElement:e})=>{const a=r(e);await o((await a.findAllByText(x[0])).length).toBeGreaterThan(0);const{gaveta:t}=await se(e);await d.click(t.getByRole("button",{name:"Este mês"})),await d.click(t.getByRole("button",{name:"Exportar"})),await o(await t.findByText("O servidor teve um problema ao buscar as sessões. Tente de novo em instantes.")).toBeInTheDocument(),await o(a.getByRole("dialog",{name:"Exportar CSV"})).toBeInTheDocument(),await o(t.getByRole("button",{name:"Exportar"})).toBeEnabled(),await o(p).toEqual([]),await D(e),await c(e),await m()}},je=["Sessoes","Carregando","Vazio","VazioDeFiltro","Erro","SemRede","SemPermissaoExportar","Exportar","ExportarComErro"];var C,L,I;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Sessões",
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = within(canvasElement.ownerDocument.body);
    await step("os selos longos de Status e Resultado aparecem inteiros, sem reticências", async () => {
      for (const texto of SELOS_LONGOS) {
        const selos = await waitFor(() => tela.getAllByText(texto), {
          timeout: 4000
        });
        for (const selo of selos) await expect(seloCortado(selo)).toBe(false);
      }
    });
    await step("nenhum selo da lista é cortado", async () => {
      const selos = [...canvasElement.ownerDocument.querySelectorAll<HTMLElement>(".hk-lista-pilula")];
      await expect(selos.length).toBeGreaterThan(0);
      await expect(selos.filter(seloCortado).map(s => s.textContent)).toEqual([]);
    });
  }
}`,...(I=(L=g.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var _,F,N;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    jornada: {
      pendurar: [ROTA_LISTA]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Carregando sessões…")).toBeInTheDocument();
    await expect(tela.queryByRole("alert")).not.toBeInTheDocument();
    await semRolagemLateral(canvasElement);
  }
}`,...(N=(F=y.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var V,q,G;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "Vazio: nenhuma sessão ainda",
  parameters: {
    jornada: {
      respostas: {
        [ROTA_LISTA]: {
          corpo: [],
          headers: {
            "X-Total-Count": "0"
          }
        },
        [ROTA_CONTAGENS]: {
          corpo: contagensDe([])
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
    await semRolagemLateral(canvasElement);
    await semRotaSemFixture();
  }
}`,...(G=(q=h.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var k,P,z;E.parameters={...E.parameters,docs:{...(k=E.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "Vazio de filtro",
  args: {
    rotaInicial: "/sessoes?busca=ninguem-com-este-nome"
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Nenhuma sessão com estes filtros")).toBeInTheDocument();
    await semRolagemLateral(canvasElement);
    await userEvent.click(tela.getByRole("button", {
      name: "Limpar filtros"
    }));
    await waitFor(() => expect(tela.queryByText("Nenhuma sessão com estes filtros")).not.toBeInTheDocument());
    await expect((await tela.findAllByText(SELOS_LONGOS[0])).length).toBeGreaterThan(0);
    await semRotaSemFixture();
  }
}`,...(z=(P=E.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var H,j,J;T.parameters={...T.parameters,docs:{...(H=T.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "Erro do servidor",
  parameters: {
    jornada: {
      falhar: [ROTA_LISTA]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    const alerta = await tela.findByRole("alert");
    await expect(alerta).toHaveTextContent("O servidor teve um problema ao carregar as sessões. Tente de novo em instantes.");
    await expect(within(alerta).getByRole("button", {
      name: "Tentar de novo"
    })).toBeInTheDocument();
    await semTextoCru(canvasElement);
    await semRolagemLateral(canvasElement);
    await semRotaSemFixture();
  }
}`,...(J=(j=T.parameters)==null?void 0:j.docs)==null?void 0:J.source}}};var M,U,X;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Erro de rede",
  parameters: {
    jornada: {
      semRede: [ROTA_LISTA]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    const alerta = await tela.findByRole("alert");
    await expect(alerta).toHaveTextContent("Não foi possível carregar as sessões. Verifique a conexão e tente de novo.");
    const buscasAntes = buscasDaLista.total;
    await expect(buscasAntes).toBeGreaterThan(0);
    await userEvent.click(within(alerta).getByRole("button", {
      name: "Tentar de novo"
    }));
    await waitFor(() => expect(buscasDaLista.total).toBeGreaterThan(buscasAntes));
    await expect(await tela.findByText(/Não foi possível carregar as sessões/)).toBeInTheDocument();
    await semTextoCru(canvasElement);
    await semRolagemLateral(canvasElement);
    await semRotaSemFixture();
  }
}`,...(X=(U=f.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var W,Q,$;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "Sem permissão de exportar",
  parameters: {
    jornada: {
      sessao: {
        papel: "gerente",
        permissoes: {
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
    await expect((await tela.findAllByText(SELOS_LONGOS[0])).length).toBeGreaterThan(0);
    await expect(tela.queryByRole("button", {
      name: ABRIDOR_EXPORTAR
    })).not.toBeInTheDocument();
    await semRolagemLateral(canvasElement);
    await semRotaSemFixture();
  }
}`,...($=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:$.source}}};var K,Y,Z;B.parameters={...B.parameters,docs:{...(K=B.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "Exportar CSV",
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await expect((await tela.findAllByText(SELOS_LONGOS[0])).length).toBeGreaterThan(0);
    const {
      abridor,
      gaveta
    } = await abrirExportar(canvasElement);
    const nomeAbridor = abridor.textContent?.replace("download", "").trim() ?? "";
    await step("a gaveta abre com o período e cabe na largura", async () => {
      await expect(gaveta.getByRole("group", {
        name: "Período"
      })).toBeInTheDocument();
      await expect(gaveta.getByRole("button", {
        name: "Tudo"
      })).toHaveAttribute("aria-pressed", "true");
      await semRolagemLateral(canvasElement);
    });
    await step("Exportar baixa o arquivo do período, fecha a gaveta e devolve o foco ao botão que abriu", async () => {
      await userEvent.click(gaveta.getByRole("button", {
        name: "Exportar"
      }));
      await waitFor(() => expect(tela.queryByRole("dialog", {
        name: "Exportar CSV"
      })).not.toBeInTheDocument());
      await expect(baixados).toHaveLength(1);
      await expect(baixados[0]).toMatch(ARQUIVO_EXPORTADO);
      await waitFor(() => expect(tela.getByRole("button", {
        name: nomeAbridor
      })).toHaveFocus());
    });
    await semRotaSemFixture();
  }
}`,...(Z=(Y=B.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,te;R.parameters={...R.parameters,docs:{...(ee=R.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: "Exportar CSV com erro do servidor",
  parameters: {
    exportacao: "servidor" satisfies ModoExportacao
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect((await tela.findAllByText(SELOS_LONGOS[0])).length).toBeGreaterThan(0);
    const {
      gaveta
    } = await abrirExportar(canvasElement);
    await userEvent.click(gaveta.getByRole("button", {
      name: "Este mês"
    }));
    await userEvent.click(gaveta.getByRole("button", {
      name: "Exportar"
    }));
    await expect(await gaveta.findByText("O servidor teve um problema ao buscar as sessões. Tente de novo em instantes.")).toBeInTheDocument();
    await expect(tela.getByRole("dialog", {
      name: "Exportar CSV"
    })).toBeInTheDocument();
    await expect(gaveta.getByRole("button", {
      name: "Exportar"
    })).toBeEnabled();
    await expect(baixados).toEqual([]);
    await semTextoCru(canvasElement);
    await semRolagemLateral(canvasElement);
    await semRotaSemFixture();
  }
}`,...(te=(ae=R.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};export{y as Carregando,T as Erro,B as Exportar,R as ExportarComErro,v as SemPermissaoExportar,f as SemRede,g as Sessoes,h as Vazio,E as VazioDeFiltro,je as __namedExportsOrder,He as default};
