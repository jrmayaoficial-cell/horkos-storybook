import{j as o}from"./jsx-runtime-BUD7zGX8.js";import{r as M}from"./iframe-C1QMfJ-9.js";import{d as e,b as m,B as r,L as u,e as x,f as I,S as R}from"./v2-CUED6Ccf.js";import{M as T}from"./index-4jL4Xbgq.js";import"./preload-helper-D6kgxu3v.js";import"./index-BbhoXcyi.js";const{fn:N}=__STORYBOOK_MODULE_TEST__,G={title:"Componentes v2/Botões e chips",component:e,args:{children:"Nova sessão",icone:"add",tom:"azul",tamanho:"md",onClick:N()},argTypes:{tom:{control:"inline-radio",options:["azul","preto","cinza","contorno","perigo"],description:"`azul` é o nome do papel de ação (Petrol 700), não a cor azul"},tamanho:{control:"inline-radio",options:["md","sm"]},icone:{control:"text",description:"nome do Material Symbols Rounded"}},decorators:[a=>o.jsx(T,{children:o.jsx(a,{})})],parameters:{docs:{description:{component:"Pílulas de ação (48/40px), botões circulares de card (44/36px) e chips de filtro/período do v2."}}}},n={name:"BotaoPilula"},i={name:"BotaoPilula (tons e tamanhos)",render:()=>o.jsx("div",{style:{display:"grid",gap:14},children:["md","sm"].map(a=>o.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap"},children:[o.jsx(e,{tamanho:a,tom:"azul",icone:"add",children:"Nova sessão"}),o.jsx(e,{tamanho:a,tom:"preto",icone:"download",children:"Exportar"}),o.jsx(e,{tamanho:a,tom:"cinza",icone:"list",children:"Sessões"}),o.jsx(e,{tamanho:a,tom:"contorno",icone:"monitoring",children:"Acompanhar"}),o.jsx(e,{tamanho:a,tom:"perigo",icone:"delete",children:"Excluir"}),o.jsx(e,{tamanho:a,tom:"azul",disabled:!0,children:"Desabilitado"})]},a))})},s={name:"LinkPilula",render:()=>o.jsxs("div",{style:{display:"flex",gap:10},children:[o.jsx(x,{para:"/nova",icone:"add",children:"Nova sessão"}),o.jsx(x,{para:"/operacao-ao-vivo",tom:"contorno",icone:"monitoring",children:"Acompanhar"})]}),parameters:{docs:{description:{story:"Mesmo visual do BotaoPilula, mas é navegação (`<Link>` do react-router)."}}}},t={name:"BotaoCirculo e LinkCirculo",render:()=>o.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap"},children:[o.jsx(r,{icone:"arrow_outward",rotulo:"Abrir"}),o.jsx(r,{icone:"more_horiz",rotulo:"Mais ações",tamanho:36}),o.jsx(r,{icone:"notifications",rotulo:"Avisos",ponto:!0}),o.jsx("span",{style:{padding:8,background:"var(--preto)",borderRadius:999,display:"inline-flex"},children:o.jsx(r,{icone:"arrow_outward",rotulo:"Abrir (escuro)",escuro:!0})}),o.jsx(u,{para:"/sessoes",icone:"arrow_outward",rotulo:"Abrir sessões",tamanho:44}),o.jsx(u,{para:"/relatorios",icone:"arrow_outward",rotulo:"Abrir relatórios",azul:!0})]}),parameters:{docs:{description:{story:'`rotulo` vira `aria-label` e `title`. Ícones de "abrir" (↗) giram 45° no hover.'}}}};function V(){const[a,p]=M.useState("7");return o.jsx(I,{rotulo:"Período",valor:a,aoMudar:p,opcoes:[{valor:"7",texto:"Últimos 7 dias"},{valor:"14",texto:"Últimos 14 dias"},{valor:"30",texto:"Últimos 30 dias"}]})}const l={name:"ChipFiltro",render:()=>o.jsx(V,{}),parameters:{docs:{description:{story:"Pílula branca com seta; por baixo é um `<select>` nativo (teclado, leitor de tela e mobile de graça)."}}}};function W(){const[a,p]=M.useState("7d");return o.jsx(R,{rotulo:"Período",valor:a,aoMudar:p,opcoes:[{valor:"hoje",texto:"Hoje"},{valor:"7d",texto:"7 dias"},{valor:"30d",texto:"30 dias"}]})}const c={name:"Segmentado",render:()=>o.jsx(W,{}),parameters:{docs:{description:{story:"Faixa de opções com a ativa em pílula escura, anunciada como pressionada (`aria-pressed`)."}}}},d={name:"Chip",render:()=>o.jsxs("div",{style:{display:"flex",gap:8},children:[o.jsx(m,{children:"HOJE"}),o.jsx(m,{tom:"cinza",children:"14 DIAS"}),o.jsx(m,{tom:"preto",children:"AO VIVO"})]})},Q=["Pilula","PilulaTons","PilulaLink","Circulos","Filtro","Segmentos","Chips"];var h,v,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "BotaoPilula"
}`,...(g=(v=n.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var P,y,j;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "BotaoPilula (tons e tamanhos)",
  render: () => <div style={{
    display: "grid",
    gap: 14
  }}>
      {(["md", "sm"] as const).map(tamanho => <div key={tamanho} style={{
      display: "flex",
      gap: 10,
      flexWrap: "wrap"
    }}>
          <BotaoPilula tamanho={tamanho} tom="azul" icone="add">Nova sessão</BotaoPilula>
          <BotaoPilula tamanho={tamanho} tom="preto" icone="download">Exportar</BotaoPilula>
          <BotaoPilula tamanho={tamanho} tom="cinza" icone="list">Sessões</BotaoPilula>
          <BotaoPilula tamanho={tamanho} tom="contorno" icone="monitoring">Acompanhar</BotaoPilula>
          <BotaoPilula tamanho={tamanho} tom="perigo" icone="delete">Excluir</BotaoPilula>
          <BotaoPilula tamanho={tamanho} tom="azul" disabled>Desabilitado</BotaoPilula>
        </div>)}
    </div>
}`,...(j=(y=i.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var C,B,b;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "LinkPilula",
  render: () => <div style={{
    display: "flex",
    gap: 10
  }}>
      <LinkPilula para="/nova" icone="add">Nova sessão</LinkPilula>
      <LinkPilula para="/operacao-ao-vivo" tom="contorno" icone="monitoring">Acompanhar</LinkPilula>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Mesmo visual do BotaoPilula, mas é navegação (\`<Link>\` do react-router)."
      }
    }
  }
}`,...(b=(B=s.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var f,S,w;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "BotaoCirculo e LinkCirculo",
  render: () => <div style={{
    display: "flex",
    gap: 12,
    alignItems: "center",
    flexWrap: "wrap"
  }}>
      <BotaoCirculo icone="arrow_outward" rotulo="Abrir" />
      <BotaoCirculo icone="more_horiz" rotulo="Mais ações" tamanho={36} />
      <BotaoCirculo icone="notifications" rotulo="Avisos" ponto />
      <span style={{
      padding: 8,
      background: "var(--preto)",
      borderRadius: 999,
      display: "inline-flex"
    }}>
        <BotaoCirculo icone="arrow_outward" rotulo="Abrir (escuro)" escuro />
      </span>
      <LinkCirculo para="/sessoes" icone="arrow_outward" rotulo="Abrir sessões" tamanho={44} />
      <LinkCirculo para="/relatorios" icone="arrow_outward" rotulo="Abrir relatórios" azul />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "\`rotulo\` vira \`aria-label\` e \`title\`. Ícones de \\"abrir\\" (↗) giram 45° no hover."
      }
    }
  }
}`,...(w=(S=t.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var E,k,A;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "ChipFiltro",
  render: () => <FiltroDemo />,
  parameters: {
    docs: {
      description: {
        story: "Pílula branca com seta; por baixo é um \`<select>\` nativo (teclado, leitor de tela e mobile de graça)."
      }
    }
  }
}`,...(A=(k=l.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var L,_,z;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "Segmentado",
  render: () => <SegmentadoDemo />,
  parameters: {
    docs: {
      description: {
        story: "Faixa de opções com a ativa em pílula escura, anunciada como pressionada (\`aria-pressed\`)."
      }
    }
  }
}`,...(z=(_=c.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var F,D,O;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Chip",
  render: () => <div style={{
    display: "flex",
    gap: 8
  }}>
      <Chip>HOJE</Chip>
      <Chip tom="cinza">14 DIAS</Chip>
      <Chip tom="preto">AO VIVO</Chip>
    </div>
}`,...(O=(D=d.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};export{d as Chips,t as Circulos,l as Filtro,n as Pilula,s as PilulaLink,i as PilulaTons,c as Segmentos,Q as __namedExportsOrder,G as default};
