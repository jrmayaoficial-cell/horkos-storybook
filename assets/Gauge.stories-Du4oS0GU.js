import{j as a}from"./jsx-runtime-CHIhdn7c.js";import{G as o,f as m}from"./MiniBarras-7DzxpT03.js";import"./iframe-Di8c_vSj.js";import"./preload-helper-D6kgxu3v.js";const g={title:"Gráficos/Gauge",component:o,args:{valor:92,max:100,rotulo:"Taxa de sucesso",tema:"claro",largura:180,espessura:14,alca:!1},argTypes:{cor:{control:"color"},trilha:{control:"color"},tema:{control:"inline-radio",options:["claro","escuro"]}},parameters:{docs:{description:{component:'Semicírculo em SVG. `tema="escuro"` dentro do tile preto; `alca` põe o círculo branco na ponta do arco. Sem linha de meta (decisão de PO).'}}}},r={},e={render:()=>a.jsxs("div",{style:{display:"flex",gap:24,flexWrap:"wrap",alignItems:"flex-end"},children:[a.jsx("div",{className:"cartao",style:{margin:0},children:a.jsx(o,{valor:92,rotulo:"Taxa de sucesso"})}),a.jsx("div",{className:"cartao",style:{margin:0},children:a.jsx(o,{valor:38,max:60,rotulo:"Tempo médio",formatar:i=>`${m(i)} min`,cor:"var(--acento)"})}),a.jsx("div",{style:{padding:24,background:"var(--preto)",borderRadius:16},children:a.jsx(o,{valor:78,rotulo:"Taxa de sucesso",tema:"escuro",cor:"var(--acento)",largura:210,espessura:16,alca:!0})})]})},f=["Padrao","Variacoes"];var s,t,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(n=(t=r.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var c,l,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 24,
    flexWrap: "wrap",
    alignItems: "flex-end"
  }}>
      <div className="cartao" style={{
      margin: 0
    }}>
        <Gauge valor={92} rotulo="Taxa de sucesso" />
      </div>
      <div className="cartao" style={{
      margin: 0
    }}>
        <Gauge valor={38} max={60} rotulo="Tempo médio" formatar={v => \`\${fmtInteiro(v)} min\`} cor="var(--acento)" />
      </div>
      <div style={{
      padding: 24,
      background: "var(--preto)",
      borderRadius: 16
    }}>
        <Gauge valor={78} rotulo="Taxa de sucesso" tema="escuro" cor="var(--acento)" largura={210} espessura={16} alca />
      </div>
    </div>
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};export{r as Padrao,e as Variacoes,f as __namedExportsOrder,g as default};
