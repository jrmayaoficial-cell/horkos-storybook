import{j as e}from"./jsx-runtime-BUD7zGX8.js";import{P as u,R as v,A}from"./paleta-B-duPMKZ.js";import{P as f}from"./MiniBarras-lAL3wmyU.js";import"./iframe-C1QMfJ-9.js";import"./preload-helper-D6kgxu3v.js";const I={title:"Gráficos/ProporcaoBalao",component:f,args:{rotuloAcessivel:"Fila de revisão por situação (dados fictícios)",destaque:"ia",itens:[{chave:"dentro",rotulo:"Dentro do prazo",valor:64,cor:u},{chave:"ia",rotulo:"Aguardando IA",valor:23,cor:A},{chave:"fora",rotulo:"Fora do prazo",valor:9,cor:v}]},argTypes:{itens:{control:!1}},decorators:[g=>e.jsx("div",{className:"cartao",style:{maxWidth:520},children:e.jsx(g,{})})],parameters:{docs:{description:{component:"Barra de proporção com balão do valor no segmento em destaque (padrão: o maior). Vão branco de 3px entre segmentos e legenda em texto com valor e %. Dados fictícios."}}}},o={},r={name:"Destaque no maior (padrão)",args:{destaque:void 0}},a={args:{itens:[{chave:"a",rotulo:"Atendidas",valor:0,cor:u},{chave:"b",rotulo:"Perdidas",valor:0,cor:v}]}},D=["Padrao","DestaqueNoMaior","Zerado"];var s,t,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(c=(t=o.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var n,d,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Destaque no maior (padrão)",
  args: {
    destaque: undefined
  }
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var m,p,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    itens: [{
      chave: "a",
      rotulo: "Atendidas",
      valor: 0,
      cor: PRIMARIA
    }, {
      chave: "b",
      rotulo: "Perdidas",
      valor: 0,
      cor: RISCO
    }]
  }
}`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};export{r as DestaqueNoMaior,o as Padrao,a as Zerado,D as __namedExportsOrder,I as default};
