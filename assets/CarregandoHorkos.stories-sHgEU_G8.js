import{j as o}from"./jsx-runtime-CdzB93mq.js";import{B as d}from"./index-DZarQCaT.js";import{C as a}from"./carregando-ui94QYik.js";import"./iframe-BKGMgeEb.js";import"./preload-helper-D6kgxu3v.js";import"./index-eFEaWYF1.js";import"./marca-CNPFSJG6.js";const I={title:"Marca/CarregandoHorkos",component:a,args:{tamanho:"md",rotulo:"Carregando",decorativo:!1},argTypes:{tamanho:{control:"inline-radio",options:["sm","md","lg"]}},parameters:{docs:{description:{component:'Loader da marca: o anel do logo girando com o segmento Proof correndo. `sm` 18px, `md` 40px, `lg` 72px (com texto visível). `role="status"` com texto para leitor de tela; `decorativo` tira os dois quando o controle já anuncia o estado (botão "Entrando…"). Com `prefers-reduced-motion: reduce` o anel para e só pulsa a opacidade.'}}}},e={},r={render:()=>o.jsxs("div",{style:{display:"flex",gap:32,alignItems:"center"},children:[o.jsx(a,{tamanho:"sm"}),o.jsx(a,{tamanho:"md"}),o.jsx(a,{tamanho:"lg",rotulo:"Carregando sessões"})]})},n={name:"Movimento reduzido",render:()=>o.jsxs("div",{style:{display:"flex",gap:32,alignItems:"center"},children:[o.jsx(a,{tamanho:"sm",className:"hk-carregando--sem-movimento"}),o.jsx(a,{tamanho:"md",className:"hk-carregando--sem-movimento"}),o.jsx(a,{tamanho:"lg",className:"hk-carregando--sem-movimento",rotulo:"Carregando sessões"})]}),parameters:{docs:{description:{story:"Simula a classe que o componente aplica quando o sistema pede movimento reduzido: sem giro, só pulso de opacidade."}}}},s={name:"Dentro de botão (decorativo)",render:()=>o.jsxs("div",{style:{display:"flex",gap:10},children:[o.jsx(d,{loading:!0,children:"Entrando…"}),o.jsx(d,{loading:!0,variant:"ghost",children:"Atualizando…"})]})},t={name:"Sobre fundo escuro",render:()=>o.jsxs("div",{style:{padding:24,background:"var(--preto)",borderRadius:16,color:"#fff",display:"flex",gap:24,alignItems:"center"},children:[o.jsx(a,{tamanho:"md"}),o.jsx(a,{tamanho:"lg",rotulo:"Conectando"})]})},q=["Padrao","Tamanhos","MovimentoReduzido","NoBotao","NoEscuro"];var m,i,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,p,g;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 32,
    alignItems: "center"
  }}>
      <CarregandoHorkos tamanho="sm" />
      <CarregandoHorkos tamanho="md" />
      <CarregandoHorkos tamanho="lg" rotulo="Carregando sessões" />
    </div>
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var u,x,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Movimento reduzido",
  render: () => <div style={{
    display: "flex",
    gap: 32,
    alignItems: "center"
  }}>
      <CarregandoHorkos tamanho="sm" className="hk-carregando--sem-movimento" />
      <CarregandoHorkos tamanho="md" className="hk-carregando--sem-movimento" />
      <CarregandoHorkos tamanho="lg" className="hk-carregando--sem-movimento" rotulo="Carregando sessões" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Simula a classe que o componente aplica quando o sistema pede movimento reduzido: sem giro, só pulso de opacidade."
      }
    }
  }
}`,...(h=(x=n.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var v,f,y;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Dentro de botão (decorativo)",
  render: () => <div style={{
    display: "flex",
    gap: 10
  }}>
      <Button loading>Entrando…</Button>
      <Button loading variant="ghost">Atualizando…</Button>
    </div>
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var C,k,j;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Sobre fundo escuro",
  render: () => <div style={{
    padding: 24,
    background: "var(--preto)",
    borderRadius: 16,
    color: "#fff",
    display: "flex",
    gap: 24,
    alignItems: "center"
  }}>
      <CarregandoHorkos tamanho="md" />
      <CarregandoHorkos tamanho="lg" rotulo="Conectando" />
    </div>
}`,...(j=(k=t.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};export{n as MovimentoReduzido,s as NoBotao,t as NoEscuro,e as Padrao,r as Tamanhos,q as __namedExportsOrder,I as default};
