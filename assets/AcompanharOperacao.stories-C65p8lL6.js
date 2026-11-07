import{t as u,s as p,d as y,m as L}from"./jornadaOperar-KFe5MV34.js";import{T as w,e as q}from"./ShellJornada-Dgh5lNwl.js";import"./jsx-runtime-LisX3rK8.js";import"./iframe-BdU_T5oy.js";import"./preload-helper-D6kgxu3v.js";import"./dadosShell-BcNk8iPy.js";import"./index-CgNm8H17.js";import"./index-Btzdtu00.js";import"./v2-CM7H6-dT.js";import"./index-CMRJCVye.js";import"./api-CwvJBfED.js";import"./index-BzbWG0gl.js";import"./marca-DxEKL4Wo.js";import"./carregando-D8G0VTz-.js";import"./celulas-Dr8LTnjB.js";/* empty css              */import"./CartaoKpi-R9o-Wt_g.js";import"./MiniBarras-D5N647Cu.js";import"./cores-D-iLqYVd.js";import"./Login-NjTeVjtw.js";import"./etapas-BWlkTKG-.js";/* empty css                */const{expect:e,userEvent:r,waitFor:l,within:g}=__STORYBOOK_MODULE_TEST__,ra={title:"Jornadas/Acompanhar operação",...L("/operacao-ao-vivo","Jornada de Acompanhar operação dentro do shell, papel admin: roster de atendentes por status, chamadas ativas e as filas com os clientes aguardando e o tempo de espera. Fila e roster são uma fotografia fixa (sem SSE).")};async function H(i){const t=await i.findByRole("button",{name:/^Filas/});t.getAttribute("aria-expanded")!=="true"&&await r.click(t)}const m={name:"Padrão",play:async({canvasElement:i,step:t})=>{const a=u(i);await t("roster, chamada ativa e fila com espera",async()=>{await a.findByText("Ao vivo");for(const o of["Rafael Moura","Camila Teixeira","Diego Prado","Luana Fontes"])await e(a.getAllByText(o).length).toBeGreaterThan(0);await e(a.getByText("4 online de 5")).toBeInTheDocument(),await e(a.getAllByText("Em atendimento").length).toBeGreaterThan(0),await H(a),await a.findByText("Joana Ribeiro Lago"),await e(a.getByText("Marcos Vieira Tavares")).toBeInTheDocument(),await e(a.getByText("Sônia Pereira Brandão")).toBeInTheDocument()}),await t("os KPIs Aguardando, Maior espera e Online abrem a seção e levam o foco ao gatilho",async()=>{const o=g(a.getByRole("group",{name:"Resumo ao vivo"}));await e(o.getByRole("region",{name:"Online"})).toHaveTextContent("4 de 5");const n=a.getByRole("button",{name:/^Filas/});n.getAttribute("aria-expanded")==="true"&&await r.click(n),await e(n).toHaveAttribute("aria-expanded","false"),await r.click(o.getByRole("button",{name:/^Aguardando: .*Abrir Filas$/})),await l(()=>e(n).toHaveAttribute("aria-expanded","true")),await l(()=>e(n).toHaveFocus()),await r.click(o.getByRole("button",{name:/^Maior espera: .*Abrir Filas$/})),await e(n).toHaveAttribute("aria-expanded","true"),await r.click(o.getByRole("button",{name:/^Online: 4 de 5\. Abrir Ao vivo agora$/}));const x=a.getByRole("button",{name:/^Ao vivo agora/});await l(()=>e(x).toHaveFocus()),await e(x).toHaveAttribute("aria-expanded","true")}),await t("a busca filtra a fila pelo nome do cliente",async()=>{const o=a.getByRole("textbox",{name:"Buscar cliente pelo nome"});await y(o,"joana"),await l(()=>e(a.queryByText("Marcos Vieira Tavares")).not.toBeInTheDocument()),await e(a.getByText("Joana Ribeiro Lago")).toBeInTheDocument(),await y(o,""),await a.findByText("Marcos Vieira Tavares")}),await p()}},d={args:{cena:"ao-vivo-vazio"},parameters:{jornada:{cenario:"operar-vazio"}},play:async({canvasElement:i})=>{const t=u(i);await t.findByText("Ao vivo"),await H(t),await t.findByText("Nenhum cliente aguardando em nenhuma fila agora.");const a=g(t.getByRole("group",{name:"Resumo ao vivo"}));await e(a.getByRole("region",{name:"Aguardando"})).toHaveTextContent("0"),await e(a.getByRole("region",{name:"Maior espera"})).toHaveTextContent("—"),await p()}},I={conectado:!1,fila:{total:0,geral:0,departamentos:[],clientes:[]},roster:[],chamadasAtivas:[]},s={args:{chamada:I,limiteSemConexaoMs:6e5},play:async({canvasElement:i})=>{const t=u(i);await t.findByText("Conectando…"),await l(()=>e(i.querySelector("[data-testid=operacao-esqueleto]")).not.toBeNull()),await e(t.queryByText(w)).not.toBeInTheDocument(),await p()}},c={name:"Sem conexão",args:{chamada:I,limiteSemConexaoMs:0},play:async({canvasElement:i,step:t})=>{const a=u(i);await a.findByText(w),await t("sem stream e sem dados os KPIs mostram travessão, nunca zero",async()=>{const o=g(a.getByRole("group",{name:"Resumo ao vivo"}));for(const n of["Aguardando","Maior espera","Online"])await e(o.getByRole("region",{name:n})).toHaveTextContent("—");await e(o.queryAllByRole("button")).toEqual([])}),await t("tentar agora pede a reconexão (evento online)",async()=>{let o=0;const n=()=>{o++};window.addEventListener("online",n),await r.click(a.getByRole("button",{name:q})),window.removeEventListener("online",n),await e(o).toBe(1),await a.findByText(w)}),await p()}},sa=["Padrao","Vazio","Carregando","SemConexao"];var v,B,T;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
    await step("os KPIs Aguardando, Maior espera e Online abrem a seção e levam o foco ao gatilho", async () => {
      const resumo = within(tela.getByRole("group", {
        name: "Resumo ao vivo"
      }));
      await expect(resumo.getByRole("region", {
        name: "Online"
      })).toHaveTextContent("4 de 5");
      const filas = tela.getByRole("button", {
        name: /^Filas/
      });
      if (filas.getAttribute("aria-expanded") === "true") await userEvent.click(filas);
      await expect(filas).toHaveAttribute("aria-expanded", "false");
      await userEvent.click(resumo.getByRole("button", {
        name: /^Aguardando: .*Abrir Filas$/
      }));
      await waitFor(() => expect(filas).toHaveAttribute("aria-expanded", "true"));
      await waitFor(() => expect(filas).toHaveFocus());
      await userEvent.click(resumo.getByRole("button", {
        name: /^Maior espera: .*Abrir Filas$/
      }));
      await expect(filas).toHaveAttribute("aria-expanded", "true");
      await userEvent.click(resumo.getByRole("button", {
        name: /^Online: 4 de 5\\. Abrir Ao vivo agora$/
      }));
      const aoVivo = tela.getByRole("button", {
        name: /^Ao vivo agora/
      });
      await waitFor(() => expect(aoVivo).toHaveFocus());
      await expect(aoVivo).toHaveAttribute("aria-expanded", "true");
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
}`,...(T=(B=m.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var f,A,R;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
    const resumo = within(tela.getByRole("group", {
      name: "Resumo ao vivo"
    }));
    await expect(resumo.getByRole("region", {
      name: "Aguardando"
    })).toHaveTextContent("0");
    await expect(resumo.getByRole("region", {
      name: "Maior espera"
    })).toHaveTextContent("—");
    await semRotaSemFixture();
  }
}`,...(R=(A=d.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var E,b,h,S,F;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source},description:{story:'SSE ainda abrindo (dentro do limite de 15 s): esqueleto, sem afirmar "0 aguardando".',...(F=(S=s.parameters)==null?void 0:S.docs)==null?void 0:F.description}}};var O,M,_,C,D;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
    await step("sem stream e sem dados os KPIs mostram travessão, nunca zero", async () => {
      const resumo = within(tela.getByRole("group", {
        name: "Resumo ao vivo"
      }));
      for (const titulo of ["Aguardando", "Maior espera", "Online"]) {
        await expect(resumo.getByRole("region", {
          name: titulo
        })).toHaveTextContent("—");
      }
      await expect(resumo.queryAllByRole("button")).toEqual([]);
    });
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
}`,...(_=(M=c.parameters)==null?void 0:M.docs)==null?void 0:_.source},description:{story:'Passado o limite sem conexão: erro com "Tentar agora", que dispara o evento `online`.',...(D=(C=c.parameters)==null?void 0:C.docs)==null?void 0:D.description}}};export{s as Carregando,m as Padrao,c as SemConexao,d as Vazio,sa as __namedExportsOrder,ra as default};
