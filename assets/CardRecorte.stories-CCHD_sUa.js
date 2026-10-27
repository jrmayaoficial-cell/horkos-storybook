import{j as o}from"./jsx-runtime-BUD7zGX8.js";import{C as s,a as m,b as p,N as h,c as x,L as C,B as j}from"./v2-CUED6Ccf.js";import{M as v}from"./MiniBarras-lAL3wmyU.js";import{M as f}from"./index-4jL4Xbgq.js";import"./iframe-C1QMfJ-9.js";import"./preload-helper-D6kgxu3v.js";import"./index-BbhoXcyi.js";const u=r=>r.toLocaleString("pt-BR"),y={title:"Componentes v2/CardRecorte",component:s,args:{canto:"superior-direito",controle:null,children:null},argTypes:{canto:{control:"inline-radio",options:["superior-direito","superior-esquerdo"]},controle:{control:!1},children:{control:!1}},decorators:[r=>o.jsx(f,{children:o.jsx("div",{style:{maxWidth:420},children:o.jsx(r,{})})})],parameters:{docs:{description:{component:"Card com recorte (raio invertido) num canto, onde encaixa o controle (botão circular ↗ ou chip). O recorte é máscara CSS; o controle fica fora do elemento mascarado. No Dashboard, no máximo 3 cards com recorte."}}}},a={render:r=>o.jsxs(s,{...r,className:"cartao dash-card dash-card--com-recorte",controle:o.jsx(C,{para:"/sessoes",icone:"arrow_outward",rotulo:"Abrir sessões",tamanho:44}),children:[o.jsx(m,{icone:"today",titulo:"Hoje",direita:o.jsx(p,{children:"16 OUT"})}),o.jsxs("div",{className:"dash-hero-linha",children:[o.jsxs("div",{className:"dash-hero",children:[o.jsx(h,{valor:142,formatar:u,tamanho:"hero"}),o.jsx("span",{className:"dash-hero-rotulo",children:"sessões criadas hoje"})]}),o.jsx(v,{rotuloAcessivel:"Sessões criadas nos últimos 7 dias",valores:[96,120,88,134,110,127,142],rotulos:["qui","sex","sáb","dom","seg","ter","hoje"]})]}),o.jsx(x,{delta:15,texto:"+12%",rotulo:"vs ontem (127)"})]})},e={args:{canto:"superior-esquerdo"},render:r=>o.jsxs(s,{...r,className:"cartao dash-card dash-card--com-recorte dash-card--azul",controle:o.jsx(j,{icone:"more_horiz",rotulo:"Mais ações",tamanho:44}),children:[o.jsx("div",{style:{paddingLeft:48},children:o.jsx(m,{icone:"timer",titulo:"Tempo médio",sub:"da criação à conclusão"})}),o.jsx(h,{valor:38,formatar:u,menor:" min",tamanho:"kpi"})]})},M=["SuperiorDireito","SuperiorEsquerdo"];var t,i,c;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => <CardRecorte {...args} className="cartao dash-card dash-card--com-recorte" controle={<LinkCirculo para="/sessoes" icone="arrow_outward" rotulo="Abrir sessões" tamanho={44} />}>
      <CabecalhoCard icone="today" titulo="Hoje" direita={<Chip>16 OUT</Chip>} />
      <div className="dash-hero-linha">
        <div className="dash-hero">
          <NumeroContado valor={142} formatar={fmt} tamanho="hero" />
          <span className="dash-hero-rotulo">sessões criadas hoje</span>
        </div>
        <MiniBarras rotuloAcessivel="Sessões criadas nos últimos 7 dias" valores={[96, 120, 88, 134, 110, 127, 142]} rotulos={["qui", "sex", "sáb", "dom", "seg", "ter", "hoje"]} />
      </div>
      <ChipVariacao delta={15} texto="+12%" rotulo="vs ontem (127)" />
    </CardRecorte>
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var n,d,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    canto: "superior-esquerdo"
  },
  render: args => <CardRecorte {...args} className="cartao dash-card dash-card--com-recorte dash-card--azul" controle={<BotaoCirculo icone="more_horiz" rotulo="Mais ações" tamanho={44} />}>
      <div style={{
      paddingLeft: 48
    }}>
        <CabecalhoCard icone="timer" titulo="Tempo médio" sub="da criação à conclusão" />
      </div>
      <NumeroContado valor={38} formatar={fmt} menor=" min" tamanho="kpi" />
    </CardRecorte>
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};export{a as SuperiorDireito,e as SuperiorEsquerdo,M as __namedExportsOrder,y as default};
