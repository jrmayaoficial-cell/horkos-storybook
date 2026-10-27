import{j as s}from"./jsx-runtime-hwOjxr5T.js";import{P as d,C as m}from"./paleta-B-duPMKZ.js";import{M as r}from"./MiniBarras-Ds7pdgoB.js";import"./iframe-BKUFfilm.js";import"./preload-helper-D6kgxu3v.js";const g={title:"Gráficos/MiniBarras",component:r,args:{rotuloAcessivel:"Sessões criadas nos últimos 7 dias (dados fictícios)",valores:[96,120,88,134,110,127,142],rotulos:["qui","sex","sáb","dom","seg","ter","hoje"],altura:44},argTypes:{cor:{control:"color"}}},o={},a={render:()=>s.jsxs("div",{style:{display:"flex",gap:32,alignItems:"flex-end"},children:[s.jsx(r,{rotuloAcessivel:"Sessões criadas nos últimos 7 dias",valores:[96,120,88,134,110,127,142],rotulos:["qui","sex","sáb","dom","seg","ter","hoje"]}),s.jsx(r,{rotuloAcessivel:"Sessões concluídas nos últimos 7 dias",valores:[70,92,61,101,84,99,64],cor:d,altura:56}),s.jsx(r,{rotuloAcessivel:"Chamadas perdidas",valores:[3,1,0,4,2,5,1],cor:m})]}),parameters:{docs:{description:{story:"Sparkline em colunas: só a última (hoje) colorida, o resto cinza. Mínimo de 10% de altura para a coluna não sumir."}}}},j=["Padrao","Variacoes"];var e,i,t;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:"{}",...(t=(i=o.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};var l,n,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 32,
    alignItems: "flex-end"
  }}>
      <MiniBarras rotuloAcessivel="Sessões criadas nos últimos 7 dias" valores={[96, 120, 88, 134, 110, 127, 142]} rotulos={["qui", "sex", "sáb", "dom", "seg", "ter", "hoje"]} />
      <MiniBarras rotuloAcessivel="Sessões concluídas nos últimos 7 dias" valores={[70, 92, 61, 101, 84, 99, 64]} cor={PRIMARIA} altura={56} />
      <MiniBarras rotuloAcessivel="Chamadas perdidas" valores={[3, 1, 0, 4, 2, 5, 1]} cor={CHART_4} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Sparkline em colunas: só a última (hoje) colorida, o resto cinza. Mínimo de 10% de altura para a coluna não sumir."
      }
    }
  }
}`,...(c=(n=a.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};export{o as Padrao,a as Variacoes,j as __namedExportsOrder,g as default};
