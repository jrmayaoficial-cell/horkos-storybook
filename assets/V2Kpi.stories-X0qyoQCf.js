import{j as a}from"./jsx-runtime-Bbiqkd5w.js";import{r as S}from"./iframe-CHDCLwKA.js";import{C as n,G as m,L as A}from"./CartaoKpi-BYT2Nziu.js";import{j,k as D}from"./v2-CKyo1J37.js";import"./preload-helper-D6kgxu3v.js";import"./index-XuxhtG-B.js";import"./index-DpnZhMMf.js";const{expect:i,fn:I,userEvent:R,within:s}=__STORYBOOK_MODULE_TEST__,$={title:"Componentes v2/KPI e chips",component:n,args:{icone:"inbox",titulo:"Na fila",valor:"1.284",nota:"aguardando revisão"},parameters:{docs:{description:{component:"Cartão de KPI do DS: `section` nomeada pelo título, número grande, nota e, se houver ação, o cartão inteiro vira botão. `GradeKpis` organiza os cartões (padrão: auto-fit de 220 px; compacta: 3 colunas mesmo a 375). `LinhasKpi` lista pares rótulo/valor. `ChipAlternar` é o chip de filtro de multisseleção, com `aria-pressed`."}}}},c={name:"CartaoKpi",render:o=>a.jsx("div",{style:{maxWidth:320},children:a.jsx(n,{...o})}),play:async({canvasElement:o})=>{const e=s(o);await i(e.getByRole("region",{name:"Na fila"})).toBeInTheDocument(),await i(e.getByText("1.284")).toBeInTheDocument()}},d={name:"Estados: carregando, sem valor, atenção, risco e ação",args:{acao:void 0},render:()=>{const o=I();return a.jsxs(m,{children:[a.jsx(n,{icone:"inbox",titulo:"Carregando",carregando:!0,nota:"aguardando revisão"}),a.jsx(n,{icone:"inbox",titulo:"Sem valor",nota:"resumo fora do ar"}),a.jsx(n,{icone:"badge",titulo:"Licenças",valor:"22 de 20",tom:"atencao",nota:"atendentes ativos de licenças inclusas",children:a.jsx("span",{style:{display:"flex",marginTop:8},children:a.jsx(j,{tom:"warning",children:"2 excedentes, cobradas na fatura"})})}),a.jsx(n,{icone:"timer_off",titulo:"Fora do SLA",valor:"7",tom:"risco",nota:"prazo de 8h úteis"}),a.jsx(n,{icone:"hourglass_bottom",titulo:"Mais antiga",valor:"3h 12min",nota:"esperando em horas úteis",acao:{rotulo:"Mais antiga: 3h 12min. Ir para a mais antiga",aoClicar:o}})]})},play:async({canvasElement:o})=>{const e=s(o);await i(s(e.getByRole("region",{name:"Sem valor"})).getByText("—")).toBeInTheDocument(),await i(e.getByRole("region",{name:"Carregando"})).toHaveAttribute("aria-busy","true"),await i(s(e.getByRole("region",{name:"Licenças"})).getByText("2 excedentes, cobradas na fatura")).toBeInTheDocument();const r=e.getByRole("button",{name:"Mais antiga: 3h 12min. Ir para a mais antiga"});await R.click(r),await i(r).toBeInTheDocument()}},p={name:"GradeKpis compacta e LinhasKpi",render:()=>a.jsxs("div",{style:{display:"grid",gap:16},children:[a.jsxs(m,{compacta:!0,children:[a.jsx(n,{icone:"inbox",titulo:"Aguardando",valor:"3",nota:"em 2 filas"}),a.jsx(n,{icone:"schedule",titulo:"Maior espera",valor:"3:49"}),a.jsx(n,{icone:"group",titulo:"Online",valor:"4 de 5"})]}),a.jsxs(m,{children:[a.jsx(n,{icone:"receipt_long",titulo:"Mês corrente",valor:"R$ 26.847,60",children:a.jsx(A,{linhas:[["Franquia","R$ 25.000,00"],["Licenças de usuário",a.jsxs(a.Fragment,{children:["22 ativos de 20 inclusos ",a.jsx(j,{tom:"warning",children:"2 excedentes"})]})]]})}),a.jsx(n,{icone:"payments",titulo:"Projeção",valor:"R$ 26.847,60",nivel:3})]})]}),play:async({canvasElement:o})=>{const e=s(o);await i(e.getByRole("heading",{level:3,name:"Projeção"})).toBeInTheDocument(),await i(e.getAllByRole("term").map(r=>r.textContent)).toEqual(["Franquia","Licenças de usuário"])}},L=[{chave:"livre",texto:"Disponível",tom:"sucesso",total:2},{chave:"ocupado",texto:"Em atendimento",tom:"violeta",total:1},{chave:"tabulacao",texto:"Em tabulação",tom:"acao",total:1},{chave:"pausa",texto:"Pausado",tom:"atencao",total:0},{chave:"offline",texto:"Offline",tom:"neutro",total:3}];function G(){const[o,e]=S.useState(new Set(["offline"])),r=t=>e(T=>{const l=new Set(T);return l.has(t)?l.delete(t):l.add(t),l});return a.jsx("div",{role:"group","aria-label":"Filtrar por status",style:{display:"flex",flexWrap:"wrap",gap:8},children:L.map(t=>a.jsxs(D,{ativo:!o.has(t.chave),tom:t.tom,zerado:t.total===0,aoAlternar:()=>r(t.chave),children:[t.total," ",t.texto]},t.chave))})}const u={name:"ChipAlternar",render:()=>a.jsx(G,{}),play:async({canvasElement:o})=>{const e=s(o),r=e.getByRole("button",{name:"3 Offline"});await i(r).toHaveAttribute("aria-pressed","false"),await R.click(r),await i(r).toHaveAttribute("aria-pressed","true");const t=e.getByRole("button",{name:"0 Pausado"});await i(getComputedStyle(t).opacity).toBe("1"),await i(t.getBoundingClientRect().height).toBeGreaterThanOrEqual(window.innerWidth<900?44:32)}},k=["Cartao","Estados","Grade","Chips"];var g,x,h;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "CartaoKpi",
  render: args => <div style={{
    maxWidth: 320
  }}><CartaoKpi {...args} /></div>,
  play: async ({
    canvasElement
  }) => {
    const tela = within(canvasElement);
    await expect(tela.getByRole("region", {
      name: "Na fila"
    })).toBeInTheDocument();
    await expect(tela.getByText("1.284")).toBeInTheDocument();
  }
}`,...(h=(x=c.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var v,y,f;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Estados: carregando, sem valor, atenção, risco e ação",
  args: {
    acao: undefined
  },
  render: () => {
    const aoClicar = fn();
    return <GradeKpis>
        <CartaoKpi icone="inbox" titulo="Carregando" carregando nota="aguardando revisão" />
        <CartaoKpi icone="inbox" titulo="Sem valor" nota="resumo fora do ar" />
        <CartaoKpi icone="badge" titulo="Licenças" valor="22 de 20" tom="atencao" nota="atendentes ativos de licenças inclusas">
          <span style={{
          display: "flex",
          marginTop: 8
        }}><StatusPilula tom="warning">2 excedentes, cobradas na fatura</StatusPilula></span>
        </CartaoKpi>
        <CartaoKpi icone="timer_off" titulo="Fora do SLA" valor="7" tom="risco" nota="prazo de 8h úteis" />
        <CartaoKpi icone="hourglass_bottom" titulo="Mais antiga" valor="3h 12min" nota="esperando em horas úteis" acao={{
        rotulo: "Mais antiga: 3h 12min. Ir para a mais antiga",
        aoClicar
      }} />
      </GradeKpis>;
  },
  play: async ({
    canvasElement
  }) => {
    const tela = within(canvasElement);
    await expect(within(tela.getByRole("region", {
      name: "Sem valor"
    })).getByText("—")).toBeInTheDocument();
    await expect(tela.getByRole("region", {
      name: "Carregando"
    })).toHaveAttribute("aria-busy", "true");
    await expect(within(tela.getByRole("region", {
      name: "Licenças"
    })).getByText("2 excedentes, cobradas na fatura")).toBeInTheDocument();
    const botao = tela.getByRole("button", {
      name: "Mais antiga: 3h 12min. Ir para a mais antiga"
    });
    await userEvent.click(botao);
    await expect(botao).toBeInTheDocument();
  }
}`,...(f=(y=d.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var w,E,B;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "GradeKpis compacta e LinhasKpi",
  render: () => <div style={{
    display: "grid",
    gap: 16
  }}>
      <GradeKpis compacta>
        <CartaoKpi icone="inbox" titulo="Aguardando" valor="3" nota="em 2 filas" />
        <CartaoKpi icone="schedule" titulo="Maior espera" valor="3:49" />
        <CartaoKpi icone="group" titulo="Online" valor="4 de 5" />
      </GradeKpis>
      <GradeKpis>
        <CartaoKpi icone="receipt_long" titulo="Mês corrente" valor="R$ 26.847,60">
          <LinhasKpi linhas={[["Franquia", "R$ 25.000,00"], ["Licenças de usuário", <>22 ativos de 20 inclusos <StatusPilula tom="warning">2 excedentes</StatusPilula></>]]} />
        </CartaoKpi>
        <CartaoKpi icone="payments" titulo="Projeção" valor="R$ 26.847,60" nivel={3} />
      </GradeKpis>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const tela = within(canvasElement);
    await expect(tela.getByRole("heading", {
      level: 3,
      name: "Projeção"
    })).toBeInTheDocument();
    await expect(tela.getAllByRole("term").map(t => t.textContent)).toEqual(["Franquia", "Licenças de usuário"]);
  }
}`,...(B=(E=p.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var C,b,K;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "ChipAlternar",
  render: () => <FiltroDeChips />,
  play: async ({
    canvasElement
  }) => {
    const tela = within(canvasElement);
    const offline = tela.getByRole("button", {
      name: "3 Offline"
    });
    await expect(offline).toHaveAttribute("aria-pressed", "false");
    await userEvent.click(offline);
    await expect(offline).toHaveAttribute("aria-pressed", "true");
    const pausado = tela.getByRole("button", {
      name: "0 Pausado"
    });
    await expect(getComputedStyle(pausado).opacity).toBe("1");
    await expect(pausado.getBoundingClientRect().height).toBeGreaterThanOrEqual(window.innerWidth < 900 ? 44 : 32);
  }
}`,...(K=(b=u.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};export{c as Cartao,u as Chips,d as Estados,p as Grade,k as __namedExportsOrder,$ as default};
