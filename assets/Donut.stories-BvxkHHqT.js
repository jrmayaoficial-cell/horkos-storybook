import{j as o}from"./jsx-runtime-BUD7zGX8.js";import{P as S,A as j,S as E,R}from"./paleta-B-duPMKZ.js";import{D as y,n as I}from"./MiniBarras-lAL3wmyU.js";import"./iframe-C1QMfJ-9.js";import"./preload-helper-D6kgxu3v.js";const m=[{chave:"concluidas",rotulo:"Concluídas",valor:1840,cor:S},{chave:"sem-sucesso",rotulo:"Sem sucesso",valor:312,cor:j},{chave:"em-aberto",rotulo:"Em aberto",valor:148,cor:E},{chave:"expiradas",rotulo:"Expiradas",valor:61,cor:R}],D=m.reduce((a,c)=>a+c.valor,0),P={title:"Gráficos/Donut",component:y,args:{fatias:m,tamanho:118,espessura:12,vao:0},argTypes:{fatias:{control:!1},trilha:{control:"color"}},parameters:{docs:{description:{component:'Donut em SVG puro (stroke-dasharray). O centro aceita qualquer conteúdo; `numeroDoDonut` encolhe o número para caber no furo. `vao` abre um espaço branco entre segmentos. Texto acessível padrão: "Rótulo: n (p%)" de cada fatia. Dados fictícios.'}}}};function t({n:a}){const{texto:c,tamanho:b}=I(a);return o.jsxs(o.Fragment,{children:[o.jsx("strong",{style:{fontFamily:"var(--font-display)",fontSize:b,lineHeight:1,fontVariantNumeric:"tabular-nums"},children:c}),o.jsx("span",{style:{font:"var(--t-caption)",color:"var(--texto-2)"},children:"sessões"})]})}const r={args:{centro:o.jsx(t,{n:D})}},e={name:"Com vão (v2)",args:{vao:3,tamanho:160,espessura:16,centro:o.jsx(t,{n:D})}},n={name:"Número do centro em escala",render:()=>o.jsx("div",{style:{display:"flex",gap:20,flexWrap:"wrap"},children:[87,4210,28663,128400,125e4].map(a=>o.jsx(y,{fatias:[{chave:"a",valor:a*.7,cor:S},{chave:"b",valor:a*.3,cor:j}],centro:o.jsx(t,{n:a})},a))})},s={args:{fatias:m.map(a=>({...a,valor:0})),centro:o.jsx(t,{n:0})}},G=["Padrao","ComVao","NumerosGrandes","Vazio"];var l,p,i;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    centro: <Centro n={total} />
  }
}`,...(i=(p=r.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var u,d,v;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Com vão (v2)",
  args: {
    vao: 3,
    tamanho: 160,
    espessura: 16,
    centro: <Centro n={total} />
  }
}`,...(v=(d=e.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};var f,x,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Número do centro em escala",
  render: () => <div style={{
    display: "flex",
    gap: 20,
    flexWrap: "wrap"
  }}>
      {[87, 4210, 28663, 128400, 1250000].map(n => <Donut key={n} fatias={[{
      chave: "a",
      valor: n * 0.7,
      cor: PRIMARIA
    }, {
      chave: "b",
      valor: n * 0.3,
      cor: ACENTO
    }]} centro={<Centro n={n} />} />)}
    </div>
}`,...(h=(x=n.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var g,A,C;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    fatias: FATIAS.map(f => ({
      ...f,
      valor: 0
    })),
    centro: <Centro n={0} />
  }
}`,...(C=(A=s.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};export{e as ComVao,n as NumerosGrandes,r as Padrao,s as Vazio,G as __namedExportsOrder,P as default};
