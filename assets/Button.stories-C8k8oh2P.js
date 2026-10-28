import{j as e}from"./jsx-runtime-CHIhdn7c.js";import{B as r,I as o}from"./index-DBQFAicf.js";import"./iframe-Di8c_vSj.js";import"./preload-helper-D6kgxu3v.js";import"./index-BRNAEhnP.js";import"./marca-B96e-3MR.js";import"./carregando-BmiZ2oue.js";const{fn:F}=__STORYBOOK_MODULE_TEST__,K={title:"Componentes/Button",component:r,args:{children:"Salvar alterações",onClick:F()},argTypes:{variant:{control:"inline-radio",options:[void 0,"ghost"],description:"`ghost` = secundário (contorno); ausente = primário"},theme:{control:"inline-radio",options:[void 0,"negative"],description:"`negative` = destrutivo"},size:{control:"inline-radio",options:["small",void 0,"large"]},loading:{control:"boolean"},disabled:{control:"boolean"}},parameters:{docs:{description:{component:'Botão de texto (`.hk-btn`). Mantém a superfície de props do legado Teddy: `variant="ghost"` vira secundário e `theme="negative"` vira destrutivo (ghost = gatilho de contorno, sólido = confirmação). `loading` desabilita e mostra o `CarregandoHorkos` decorativo.'}}}},n={},t={args:{variant:"ghost",children:"Cancelar"}},i={name:"Destrutivo (gatilho)",args:{variant:"ghost",theme:"negative",children:"Excluir sessão"}},s={name:"Destrutivo (confirmação)",args:{theme:"negative",children:"Sim, excluir"}},c={args:{loading:!0,children:"Entrando…"}},l={args:{disabled:!0}},d={render:()=>e.jsx("div",{style:{display:"grid",gap:16},children:["small",void 0,"large"].map(a=>e.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(r,{size:a,children:"Primário"}),e.jsx(r,{size:a,variant:"ghost",children:"Secundário"}),e.jsx(r,{size:a,variant:"ghost",theme:"negative",children:"Excluir"}),e.jsx(r,{size:a,theme:"negative",children:"Sim, excluir"}),e.jsx(r,{size:a,loading:!0,children:"Salvando…"}),e.jsx(r,{size:a,disabled:!0,children:"Desabilitado"})]},a??"md"))})},m={name:"IconButton",render:()=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(o,{icon:"close","aria-label":"Fechar"}),e.jsx(o,{icon:"copy","aria-label":"Copiar"}),e.jsx(o,{icon:"trash-can","aria-label":"Excluir"}),e.jsx(o,{icon:"eye","aria-label":"Ver"}),e.jsx(o,{icon:"export-up-right-square","aria-label":"Abrir em nova aba"})]}),parameters:{docs:{description:{story:"Botão terciário só-ícone. `icon` aceita nomes legados Teddy (mapeados para Material Symbols) ou o nome Material direto. Sempre passe `aria-label`."}}}},L=["Primario","Secundario","DestrutivoGatilho","DestrutivoConfirmacao","Carregando","Desabilitado","Variantes","BotaoDeIcone"];var p,u,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,v,x;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    children: "Cancelar"
  }
}`,...(x=(v=t.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var b,B,y;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Destrutivo (gatilho)",
  args: {
    variant: "ghost",
    theme: "negative",
    children: "Excluir sessão"
  }
}`,...(y=(B=i.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var S,E,f;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Destrutivo (confirmação)",
  args: {
    theme: "negative",
    children: "Sim, excluir"
  }
}`,...(f=(E=s.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};var j,D,I;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    loading: true,
    children: "Entrando…"
  }
}`,...(I=(D=c.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var C,z,_;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(_=(z=l.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var T,M,O;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 16
  }}>
      {(["small", undefined, "large"] as const).map(size => <div key={size ?? "md"} style={{
      display: "flex",
      gap: 10,
      flexWrap: "wrap",
      alignItems: "center"
    }}>
          <Button size={size}>Primário</Button>
          <Button size={size} variant="ghost">Secundário</Button>
          <Button size={size} variant="ghost" theme="negative">Excluir</Button>
          <Button size={size} theme="negative">Sim, excluir</Button>
          <Button size={size} loading>Salvando…</Button>
          <Button size={size} disabled>Desabilitado</Button>
        </div>)}
    </div>
}`,...(O=(M=d.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var k,P,V;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "IconButton",
  render: () => <div style={{
    display: "flex",
    gap: 8
  }}>
      <IconButton icon="close" aria-label="Fechar" />
      <IconButton icon="copy" aria-label="Copiar" />
      <IconButton icon="trash-can" aria-label="Excluir" />
      <IconButton icon="eye" aria-label="Ver" />
      <IconButton icon="export-up-right-square" aria-label="Abrir em nova aba" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Botão terciário só-ícone. \`icon\` aceita nomes legados Teddy (mapeados para Material Symbols) ou o nome Material direto. Sempre passe \`aria-label\`."
      }
    }
  }
}`,...(V=(P=m.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};export{m as BotaoDeIcone,c as Carregando,l as Desabilitado,s as DestrutivoConfirmacao,i as DestrutivoGatilho,n as Primario,t as Secundario,d as Variantes,L as __namedExportsOrder,K as default};
