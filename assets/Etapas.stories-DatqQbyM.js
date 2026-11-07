import{j as o}from"./jsx-runtime-D6nutFwx.js";import{r}from"./iframe-BdhfGGq3.js";import{E as j}from"./etapas-Bursdox5.js";import{C as P,B as T}from"./v2-DJ9t81kF.js";import"./preload-helper-D6kgxu3v.js";import"./index-tw-FhkDn.js";import"./index-QiNlZTMk.js";const{expect:t,userEvent:l,waitFor:w,within:B}=__STORYBOOK_MODULE_TEST__,i=[{id:"chamada",rotulo:"Como a chamada acontece"},{id:"cliente",rotulo:"Cliente"},{id:"contrato",rotulo:"Contrato"},{id:"adicionais",rotulo:"Dados adicionais",opcional:!0},{id:"revisao",rotulo:"Revisão"}],A={chamada:"call",cliente:"person",contrato:"description",adicionais:"list_alt",revisao:"fact_check"};function O({inicial:e,visitadasIniciais:a,comErro:m=[]}){const[c,E]=r.useState(e),[V,_]=r.useState(()=>new Set([...a,e])),h=r.useRef(null),C=r.useRef(!1),s=i.findIndex(n=>n.id===c);r.useEffect(()=>{var n,d;if(!C.current){C.current=!0;return}(d=(n=h.current)==null?void 0:n.querySelector("h2"))==null||d.focus()},[c]);function y(n){_(d=>new Set(d).add(n)),E(n)}return o.jsxs("div",{className:"cartao",style:{display:"grid",gap:20},children:[o.jsx(j,{rotulo:"Etapas da nova sessão",etapas:i,atual:c,visitadas:V,comErro:new Set(m),aoIrPara:y}),o.jsx("div",{ref:h,children:o.jsx(P,{focavel:!0,icone:A[c],titulo:i[s].rotulo})}),o.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[s>0&&o.jsx(T,{tom:"contorno",onClick:()=>y(i[s-1].id),children:"Voltar"}),s<i.length-1&&o.jsx(T,{tom:"azul",onClick:()=>y(i[s+1].id),children:"Continuar"})]})]})}const U={title:"Componentes/Etapas",component:O,parameters:{docs:{description:{component:'Indicador de etapas: contagem em texto, barra e lista. A etapa atual leva `aria-current="step"`; só as visitadas viram botão. Até 899 px a lista some e ficam a contagem e a barra. O estado (concluída, com erro, opcional) vai em texto para o leitor de tela; cor nunca é o único sinal.'}}}};function g(e){const a=e.querySelector(".hk-etapas-lista");return!!a&&getComputedStyle(a).display!=="none"}const x=e=>e.getByRole("heading",{level:2}),u={name:"Padrão",args:{inicial:"chamada",visitadasIniciais:[]},play:async({canvasElement:e})=>{const a=B(e);await t(a.getByText("Etapa 1 de 5 · Como a chamada acontece")).toBeInTheDocument(),await t(x(a)).not.toHaveFocus(),await l.click(a.getByRole("button",{name:"Continuar"})),await t(a.getByText("Etapa 2 de 5 · Cliente")).toBeInTheDocument(),await w(()=>t(x(a)).toHaveFocus()),g(e)?await l.click(a.getByRole("button",{name:"Como a chamada acontece (concluída)"})):await l.click(a.getByRole("button",{name:"Voltar"})),await t(a.getByText("Etapa 1 de 5 · Como a chamada acontece")).toBeInTheDocument(),await w(()=>t(x(a)).toHaveFocus())}},p={name:"Com erro",args:{inicial:"contrato",visitadasIniciais:["chamada","cliente"],comErro:["cliente"]},play:async({canvasElement:e})=>{const a=B(e);await t(a.getByText("Etapa 3 de 5 · Contrato")).toBeInTheDocument(),await t(e.querySelector(".hk-etapas-item--erro")).toHaveTextContent("Cliente"),g(e)&&(await l.click(a.getByRole("button",{name:"Cliente (com erro)"})),await t(a.getByText("Etapa 2 de 5 · Cliente")).toBeInTheDocument())}},v={name:"Todas visitadas",args:{inicial:"revisao",visitadasIniciais:["chamada","cliente","contrato","adicionais"]},play:async({canvasElement:e})=>{const a=B(e);if(await t(a.getByText("Etapa 5 de 5 · Revisão")).toBeInTheDocument(),await t(a.queryByRole("button",{name:"Continuar"})).toBeNull(),!g(e))return;const m=B(a.getByRole("navigation",{name:"Etapas da nova sessão"}));await t(m.getAllByRole("button")).toHaveLength(4);for(const[c,E]of["Como a chamada acontece (concluída)","Cliente (concluída)","Contrato (concluída)","Dados adicionais (concluída, opcional)"].entries())await l.click(m.getByRole("button",{name:E})),await t(a.getByText(new RegExp(`^Etapa ${c+1} de 5`))).toBeInTheDocument(),await w(()=>t(x(a)).toHaveFocus())}},W=["Padrao","ComErro","TodasVisitadas"];var f,R,D;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Padrão",
  args: {
    inicial: "chamada",
    visitadasIniciais: []
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Etapa 1 de 5 · Como a chamada acontece")).toBeInTheDocument();
    await expect(titulo(canvas)).not.toHaveFocus();
    await userEvent.click(canvas.getByRole("button", {
      name: "Continuar"
    }));
    await expect(canvas.getByText("Etapa 2 de 5 · Cliente")).toBeInTheDocument();
    await waitFor(() => expect(titulo(canvas)).toHaveFocus());
    if (listaVisivel(canvasElement)) {
      await userEvent.click(canvas.getByRole("button", {
        name: "Como a chamada acontece (concluída)"
      }));
    } else {
      await userEvent.click(canvas.getByRole("button", {
        name: "Voltar"
      }));
    }
    await expect(canvas.getByText("Etapa 1 de 5 · Como a chamada acontece")).toBeInTheDocument();
    await waitFor(() => expect(titulo(canvas)).toHaveFocus());
  }
}`,...(D=(R=u.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var I,b,S;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Com erro",
  args: {
    inicial: "contrato",
    visitadasIniciais: ["chamada", "cliente"],
    comErro: ["cliente"]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Etapa 3 de 5 · Contrato")).toBeInTheDocument();
    await expect(canvasElement.querySelector(".hk-etapas-item--erro")).toHaveTextContent("Cliente");
    if (!listaVisivel(canvasElement)) return;
    await userEvent.click(canvas.getByRole("button", {
      name: "Cliente (com erro)"
    }));
    await expect(canvas.getByText("Etapa 2 de 5 · Cliente")).toBeInTheDocument();
  }
}`,...(S=(b=p.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var k,F,H;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "Todas visitadas",
  args: {
    inicial: "revisao",
    visitadasIniciais: ["chamada", "cliente", "contrato", "adicionais"]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Etapa 5 de 5 · Revisão")).toBeInTheDocument();
    await expect(canvas.queryByRole("button", {
      name: "Continuar"
    })).toBeNull();
    if (!listaVisivel(canvasElement)) return;
    const nav = within(canvas.getByRole("navigation", {
      name: "Etapas da nova sessão"
    }));
    await expect(nav.getAllByRole("button")).toHaveLength(4);
    for (const [i, nome] of ["Como a chamada acontece (concluída)", "Cliente (concluída)", "Contrato (concluída)", "Dados adicionais (concluída, opcional)"].entries()) {
      await userEvent.click(nav.getByRole("button", {
        name: nome
      }));
      await expect(canvas.getByText(new RegExp(\`^Etapa \${i + 1} de 5\`))).toBeInTheDocument();
      await waitFor(() => expect(titulo(canvas)).toHaveFocus());
    }
  }
}`,...(H=(F=v.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};export{p as ComErro,u as Padrao,v as TodasVisitadas,W as __namedExportsOrder,U as default};
