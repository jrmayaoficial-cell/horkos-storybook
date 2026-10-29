import{j as e}from"./jsx-runtime-5_h1ggUY.js";import{a as o}from"./index-DHkLSF23.js";import"./iframe-DruNtuiI.js";import"./preload-helper-D6kgxu3v.js";import"./index-Di2eVLJq.js";import"./marca-CA0y2m0X.js";import"./carregando-BPTr5NIa.js";const i=["neutral","green","gold","red","purple","azure","violet"],j={title:"Componentes/Badge",component:o,args:{children:"Concluída",color:"green"},argTypes:{color:{control:"select",options:i,description:"nome legado Teddy → tom HORKOS (green→success, gold/orange→warning, red→risk, purple/blue→petrol, azure→proof, violet→violet)"},emphasis:{control:"inline-radio",options:[void 0,"low"],description:"`low` = etiqueta neutra retangular (`.hk-tag`)"}},parameters:{docs:{description:{component:"Família Status (pílula `.hk-status--*`). Use texto sempre: a cor nunca é a única pista."}}}},r={},a={render:()=>e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx(o,{color:"neutral",children:"Rascunho"}),e.jsx(o,{color:"green",children:"Concluída"}),e.jsx(o,{color:"gold",children:"Aguardando cliente"}),e.jsx(o,{color:"red",children:"Sem sucesso"}),e.jsx(o,{color:"purple",children:"Em andamento"}),e.jsx(o,{color:"azure",children:"Validada por IA"}),e.jsx(o,{color:"violet",children:"Em atendimento"}),e.jsx(o,{emphasis:"low",children:"etiqueta"})]})},v=["Padrao","Tons"];var n,s,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(d=(s=r.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var l,t,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 8,
    flexWrap: "wrap"
  }}>
      <Badge color="neutral">Rascunho</Badge>
      <Badge color="green">Concluída</Badge>
      <Badge color="gold">Aguardando cliente</Badge>
      <Badge color="red">Sem sucesso</Badge>
      <Badge color="purple">Em andamento</Badge>
      <Badge color="azure">Validada por IA</Badge>
      <Badge color="violet">Em atendimento</Badge>
      <Badge emphasis="low">etiqueta</Badge>
    </div>
}`,...(c=(t=a.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};export{r as Padrao,a as Tons,v as __namedExportsOrder,j as default};
