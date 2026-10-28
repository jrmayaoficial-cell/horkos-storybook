import{t as m,s as l,d as T,m as C}from"./jornadaOperar-D7ZeOS19.js";import{T as d,R as I}from"./ShellJornada-BMJ4fpX0.js";import"./jsx-runtime-CqjonpNT.js";import"./iframe-DJrhfsQk.js";import"./preload-helper-D6kgxu3v.js";import"./index-9UivOglz.js";import"./index-BwsDp8T-.js";import"./marca-z0SsKRba.js";import"./carregando-BXT1e_OM.js";import"./dadosShell-BJlYo5ba.js";import"./index-DXvfoM1X.js";import"./v2-CZUD68ca.js";import"./index-DBwj-ecP.js";import"./api-Z9ulGFc_.js";import"./Login-DIYaNGVn.js";import"./celulas-DGaOaVoK.js";/* empty css              */import"./paleta-B-duPMKZ.js";import"./MiniBarras-CUX8X_xl.js";/* empty css                */const{expect:n,userEvent:b,waitFor:D}=__STORYBOOK_MODULE_TEST__,ta={title:"Jornadas/Acompanhar operação",...C("/operacao-ao-vivo","Jornada de Acompanhar operação dentro do shell, papel admin: roster de atendentes por status, chamadas ativas e as filas com os clientes aguardando e o tempo de espera. Fila e roster são uma fotografia fixa (sem SSE).")};async function F(t){const e=await t.findByRole("button",{name:/^Filas/});e.getAttribute("aria-expanded")!=="true"&&await b.click(e)}const s={name:"Padrão",play:async({canvasElement:t,step:e})=>{const a=m(t);await e("roster, chamada ativa e fila com espera",async()=>{await a.findByText("Ao vivo");for(const o of["Rafael Moura","Camila Teixeira","Diego Prado","Luana Fontes"])await n(a.getAllByText(o).length).toBeGreaterThan(0);await n(a.getByText("4 online de 5")).toBeInTheDocument(),await n(a.getAllByText("Em atendimento").length).toBeGreaterThan(0),await F(a),await a.findByText("Joana Ribeiro Lago"),await n(a.getByText("Marcos Vieira Tavares")).toBeInTheDocument(),await n(a.getByText("Sônia Pereira Brandão")).toBeInTheDocument()}),await e("a busca filtra a fila pelo nome do cliente",async()=>{const o=a.getByRole("textbox",{name:"Buscar cliente pelo nome"});await T(o,"joana"),await D(()=>n(a.queryByText("Marcos Vieira Tavares")).not.toBeInTheDocument()),await n(a.getByText("Joana Ribeiro Lago")).toBeInTheDocument(),await T(o,""),await a.findByText("Marcos Vieira Tavares")}),await l()}},c={args:{cena:"ao-vivo-vazio"},parameters:{jornada:{cenario:"operar-vazio"}},play:async({canvasElement:t})=>{const e=m(t);await e.findByText("Ao vivo"),await F(e),await e.findByText("Nenhum cliente aguardando em nenhuma fila agora."),await l()}},L={conectado:!1,fila:{total:0,geral:0,departamentos:[],clientes:[]},roster:[],chamadasAtivas:[]},i={args:{chamada:L,limiteSemConexaoMs:6e5},play:async({canvasElement:t})=>{const e=m(t);await e.findByText("Conectando…"),await D(()=>n(t.querySelector("[data-testid=operacao-esqueleto]")).not.toBeNull()),await n(e.queryByText(d)).not.toBeInTheDocument(),await l()}},r={name:"Sem conexão",args:{chamada:L,limiteSemConexaoMs:0},play:async({canvasElement:t,step:e})=>{const a=m(t);await a.findByText(d),await e("tentar agora pede a reconexão (evento online)",async()=>{let o=0;const p=()=>{o++};window.addEventListener("online",p),await b.click(a.getByRole("button",{name:I})),window.removeEventListener("online",p),await n(o).toBe(1),await a.findByText(d)}),await l()}},na=["Padrao","Vazio","Carregando","SemConexao"];var x,u,w;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Padrão",
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await step("roster, chamada ativa e fila com espera", async () => {
      await tela.findByText("Ao vivo");
      for (const nome of ["Rafael Moura", "Camila Teixeira", "Diego Prado", "Luana Fontes"]) {
        await expect(tela.getAllByText(nome).length).toBeGreaterThan(0);
      }
      await expect(tela.getByText("4 online de 5")).toBeInTheDocument();
      await expect(tela.getAllByText("Em atendimento").length).toBeGreaterThan(0);
      await abrirFilas(tela);
      await tela.findByText("Joana Ribeiro Lago");
      await expect(tela.getByText("Marcos Vieira Tavares")).toBeInTheDocument();
      await expect(tela.getByText("Sônia Pereira Brandão")).toBeInTheDocument();
    });
    await step("a busca filtra a fila pelo nome do cliente", async () => {
      const busca = tela.getByRole("textbox", {
        name: "Buscar cliente pelo nome"
      });
      await digitar(busca, "joana");
      await waitFor(() => expect(tela.queryByText("Marcos Vieira Tavares")).not.toBeInTheDocument());
      await expect(tela.getByText("Joana Ribeiro Lago")).toBeInTheDocument();
      await digitar(busca, "");
      await tela.findByText("Marcos Vieira Tavares");
    });
    await semRotaSemFixture();
  }
}`,...(w=(u=s.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};var y,B,g;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    cena: "ao-vivo-vazio"
  },
  parameters: {
    jornada: {
      cenario: "operar-vazio"
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await tela.findByText("Ao vivo");
    await abrirFilas(tela);
    await tela.findByText("Nenhum cliente aguardando em nenhuma fila agora.");
    await semRotaSemFixture();
  }
}`,...(g=(B=c.parameters)==null?void 0:B.docs)==null?void 0:g.source}}};var v,E,f,S,h;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    chamada: SEM_STREAM,
    limiteSemConexaoMs: 600_000
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await tela.findByText("Conectando…");
    await waitFor(() => expect(canvasElement.querySelector("[data-testid=operacao-esqueleto]")).not.toBeNull());
    await expect(tela.queryByText(TEXTO_SEM_CONEXAO_FILAS)).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(f=(E=i.parameters)==null?void 0:E.docs)==null?void 0:f.source},description:{story:'SSE ainda abrindo (dentro do limite de 15 s): esqueleto, sem afirmar "0 aguardando".',...(h=(S=i.parameters)==null?void 0:S.docs)==null?void 0:h.description}}};var A,_,R,O,M;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Sem conexão",
  args: {
    chamada: SEM_STREAM,
    limiteSemConexaoMs: 0
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await tela.findByText(TEXTO_SEM_CONEXAO_FILAS);
    await step("tentar agora pede a reconexão (evento online)", async () => {
      let disparos = 0;
      const contar = () => {
        disparos++;
      };
      window.addEventListener("online", contar);
      await userEvent.click(tela.getByRole("button", {
        name: ROTULO_TENTAR_AGORA
      }));
      window.removeEventListener("online", contar);
      await expect(disparos).toBe(1);
      await tela.findByText(TEXTO_SEM_CONEXAO_FILAS);
    });
    await semRotaSemFixture();
  }
}`,...(R=(_=r.parameters)==null?void 0:_.docs)==null?void 0:R.source},description:{story:'Passado o limite sem conexão: erro com "Tentar agora", que dispara o evento `online`.',...(M=(O=r.parameters)==null?void 0:O.docs)==null?void 0:M.description}}};export{i as Carregando,s as Padrao,r as SemConexao,c as Vazio,na as __namedExportsOrder,ta as default};
