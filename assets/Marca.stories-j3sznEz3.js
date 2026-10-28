import{j as a}from"./jsx-runtime-CHIhdn7c.js";import{a as f,A as s}from"./marca-B96e-3MR.js";import"./iframe-Di8c_vSj.js";import"./preload-helper-D6kgxu3v.js";const k={title:"Marca/Anel e assinatura",component:f,args:{tamanho:48,estado:"validacao",cor:"#111C26"},argTypes:{estado:{control:"inline-radio",options:["validacao","lacrado","aberto"]},cor:{control:"color"}},parameters:{docs:{description:{component:"Os dois O de HORKOS são anéis. `validacao` leva o arco Proof de 90°; `lacrado` é fechado; `aberto` é tracejado. O viewBox é recortado ao anel, então `tamanho` é o diâmetro real."}}}},r={name:"Anel"},n={render:()=>a.jsx("div",{style:{display:"flex",gap:28,alignItems:"center"},children:["validacao","lacrado","aberto"].map(e=>a.jsxs("figure",{style:{margin:0,display:"grid",justifyItems:"center",gap:8},children:[a.jsx(f,{tamanho:56,estado:e,cor:"var(--ink-900)"}),a.jsx("figcaption",{className:"hk-mono",style:{fontSize:12},children:e})]},e))})},o={name:"AssinaturaHorkos",render:()=>a.jsxs("div",{style:{display:"grid",gap:16},children:[a.jsx("div",{style:{padding:20,background:"#fff",borderRadius:16},children:a.jsx(s,{tamanho:14})}),a.jsx("div",{style:{padding:20,background:"#fff",borderRadius:16},children:a.jsx(s,{tamanho:22})}),a.jsx("div",{style:{padding:20,background:"var(--preto)",borderRadius:16},children:a.jsx(s,{clara:!0,tamanho:18})})]}),parameters:{docs:{description:{story:"HORKOS (Sora 600) · divisor 1px · Confirma (Sora 400). Produto nunca em caixa alta, nunca em ciano, nunca maior que a marca. `clara` para fundo escuro."}}}},b=["AnelValidacao","Estados","Assinatura"];var i,d,t;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Anel"
}`,...(t=(d=r.parameters)==null?void 0:d.docs)==null?void 0:t.source}}};var c,l,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 28,
    alignItems: "center"
  }}>
      {(["validacao", "lacrado", "aberto"] as const).map(estado => <figure key={estado} style={{
      margin: 0,
      display: "grid",
      justifyItems: "center",
      gap: 8
    }}>
          <Anel tamanho={56} estado={estado} cor="var(--ink-900)" />
          <figcaption className="hk-mono" style={{
        fontSize: 12
      }}>{estado}</figcaption>
        </figure>)}
    </div>
}`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,u,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "AssinaturaHorkos",
  render: () => <div style={{
    display: "grid",
    gap: 16
  }}>
      <div style={{
      padding: 20,
      background: "#fff",
      borderRadius: 16
    }}><AssinaturaHorkos tamanho={14} /></div>
      <div style={{
      padding: 20,
      background: "#fff",
      borderRadius: 16
    }}><AssinaturaHorkos tamanho={22} /></div>
      <div style={{
      padding: 20,
      background: "var(--preto)",
      borderRadius: 16
    }}><AssinaturaHorkos clara tamanho={18} /></div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "HORKOS (Sora 600) · divisor 1px · Confirma (Sora 400). Produto nunca em caixa alta, nunca em ciano, nunca maior que a marca. \`clara\` para fundo escuro."
      }
    }
  }
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};export{r as AnelValidacao,o as Assinatura,n as Estados,b as __namedExportsOrder,k as default};
