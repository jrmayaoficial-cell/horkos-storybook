import{j as a}from"./jsx-runtime-CnGeCed7.js";import{P as E,A as D,S as b,C as R}from"./paleta-CAXSK6uJ.js";import{B as j}from"./MiniBarras-Btaw0BA0.js";import{a as V}from"./v2-DPlIulHz.js";import"./iframe-TWammDK-.js";import"./preload-helper-D6kgxu3v.js";import"./index-BG6Z0xWT.js";import"./index-Coq9CpY8.js";const O=["dom","seg","ter","qua","qui","sex","sáb"];function m(o=14){const i=new Date(2026,9,16);return Array.from({length:o},(B,e)=>{const r=new Date(i);r.setDate(i.getDate()-(o-1-e));const y=(r.getDay()===0||r.getDay()===6?40:95)+e*37%31,M=8+e*13%11,F=e>=o-2?18+e:e*7%5,_=e===o-1;return{chave:r.toISOString().slice(0,10),rotulo:_?"hoje":String(r.getDate()).padStart(2,"0"),rotuloLongo:`${O[r.getDay()]}, ${r.toLocaleDateString("pt-BR",{day:"2-digit",month:"short"})}`,valores:[y,M,F]}})}const q=[{nome:"Concluídas",cor:E,corSuave:"var(--petrol-300)"},{nome:"Sem sucesso",cor:D,corSuave:"var(--proof-border)"},{nome:"Em aberto",cor:b,hachura:!0}],G={title:"Gráficos/BarrasFoco",component:j,args:{colunas:m(),segmentos:q,rotuloAcessivel:"Sessões por dia, últimos 14 dias (dados fictícios)",altura:260,media:!0,larguraMinima:16,preencher:!1},argTypes:{colunas:{control:!1},segmentos:{control:!1}},decorators:[o=>a.jsx("div",{className:"cartao",style:{maxWidth:760},children:a.jsx(o,{})})],parameters:{docs:{description:{component:'Colunas cinzas; só a coluna em foco ganha cor (segmentos empilhados de baixo para cima, hachura para "em aberto") e o tooltip escuro com a data. O foco começa no último dia e muda com hover, toque ou setas ←/→ (clique no gráfico e use o teclado). Uma tabela oculta repete os valores para leitor de tela. Dados fictícios.'}}}},s={render:o=>a.jsxs(a.Fragment,{children:[a.jsx(V,{icone:"bar_chart",titulo:"Volume por dia",sub:"últimos 14 dias · dados fictícios"}),a.jsx(j,{...o})]})},n={name:"Fora de foco em cinza",args:{segmentos:[{nome:"Concluídas",cor:E},{nome:"Sem sucesso",cor:D},{nome:"Em aberto",cor:b,hachura:!0}]}},t={name:"Série única, sem média",args:{media:!1,segmentos:[{nome:"Chamadas",cor:R}],colunas:m(7).map(o=>({...o,valores:[o.valores[0]]})),rotuloAcessivel:"Chamadas por dia, últimos 7 dias (dados fictícios)",larguraMinima:40}},c={name:"Largura de celular (rola)",args:{larguraMinima:40,colunas:m(30),rotuloAcessivel:"Sessões por dia, últimos 30 dias (dados fictícios)"},decorators:[o=>a.jsx("div",{style:{maxWidth:340},children:a.jsx(o,{})})],parameters:{docs:{description:{story:"Com `larguraMinima` maior que o espaço, o gráfico rola na horizontal e abre no fim (hoje)."}}}},$=["Empilhado","SemCorSuave","SerieUnica","Celular"];var l,d,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <>
      <CabecalhoCard icone="bar_chart" titulo="Volume por dia" sub="últimos 14 dias · dados fictícios" />
      <BarrasFoco {...args} />
    </>
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var p,g,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Fora de foco em cinza",
  args: {
    segmentos: [{
      nome: "Concluídas",
      cor: PRIMARIA
    }, {
      nome: "Sem sucesso",
      cor: ACENTO
    }, {
      nome: "Em aberto",
      cor: SUAVE,
      hachura: true
    }]
  }
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var S,f,x;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Série única, sem média",
  args: {
    media: false,
    segmentos: [{
      nome: "Chamadas",
      cor: CHART_4
    }],
    colunas: colunasDoVolume(7).map(c => ({
      ...c,
      valores: [c.valores[0]]
    })),
    rotuloAcessivel: "Chamadas por dia, últimos 7 dias (dados fictícios)",
    larguraMinima: 40
  }
}`,...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var A,v,C;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Largura de celular (rola)",
  args: {
    larguraMinima: 40,
    colunas: colunasDoVolume(30),
    rotuloAcessivel: "Sessões por dia, últimos 30 dias (dados fictícios)"
  },
  decorators: [Story => <div style={{
    maxWidth: 340
  }}><Story /></div>],
  parameters: {
    docs: {
      description: {
        story: "Com \`larguraMinima\` maior que o espaço, o gráfico rola na horizontal e abre no fim (hoje)."
      }
    }
  }
}`,...(C=(v=c.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};export{c as Celular,s as Empilhado,n as SemCorSuave,t as SerieUnica,$ as __namedExportsOrder,G as default};
