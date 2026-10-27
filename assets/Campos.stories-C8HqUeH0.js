import{j as e}from"./jsx-runtime-CdzB93mq.js";import{r as $}from"./iframe-BKGMgeEb.js";import{T as m,b as J,S as i,C as u,R as x,c as b}from"./index-DZarQCaT.js";import"./preload-helper-D6kgxu3v.js";import"./index-eFEaWYF1.js";import"./marca-CNPFSJG6.js";import"./carregando-ui94QYik.js";const ae={title:"Componentes/Campos",component:m,args:{label:"Nome do cliente",placeholder:"Como está no documento"},decorators:[a=>e.jsx("div",{style:{maxWidth:380},children:e.jsx(a,{})})],parameters:{docs:{description:{component:"Rótulo sempre acima; a mensagem (ajuda ou erro) cresce embaixo sem empurrar o layout. Borda de campo editável em `--line-campo` (3,39:1)."}}}},r={},o={args:{helperText:"Usado no dossiê e no convite.",optional:!0}},s={args:{error:"Informe o nome completo.",required:!0,defaultValue:"Ana"}},t={name:"Prefixo e sufixo",render:()=>e.jsxs("div",{style:{display:"grid",gap:14},children:[e.jsx(m,{label:"Valor do contrato",prefixo:"R$",placeholder:"0,00",inputMode:"decimal"}),e.jsx(m,{label:"Taxa ao mês",sufixo:"%",placeholder:"1,99",inputMode:"decimal"})]})},n={args:{label:"Senha",type:"password",defaultValue:"segredo-de-teste"}},l={name:"Máscara (CPF)",args:{label:"CPF",mask:"999.999.999-99",placeholder:"000.000.000-00",inputMode:"numeric"}},c={name:"TextArea",render:()=>e.jsx(J,{label:"Observação",helperText:"Aparece só para a equipe.",rows:4})},N=["AC","AL","AM","BA","CE","DF","ES","GO","MA","MG","PR","RJ","SP"].map(a=>({label:a,value:a})),d={name:"Select",render:()=>e.jsxs("div",{style:{display:"grid",gap:14},children:[e.jsx(i,{label:"Canal",options:[{label:"IA",value:"ia"},{label:"Humano",value:"humano"}],helperText:"Até 7 opções: select nativo."}),e.jsx(i,{label:"UF",options:N,helperText:"Mais de 7 opções: combobox com busca."}),e.jsx(i,{label:"Departamento",options:[{label:"Crédito",value:1}],error:"Escolha um departamento."})]})};function W(){const[a,_]=$.useState(!0);return e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx(u,{label:"Enviar convite por e-mail",defaultChecked:!0}),e.jsx(u,{label:"Exigir biometria facial"}),e.jsx(x,{name:"canal",label:"Atendimento por IA",defaultChecked:!0}),e.jsx(x,{name:"canal",label:"Atendimento humano"}),e.jsx(b,{label:"Gravar a chamada",checked:a,onCheckedChange:_}),e.jsx(b,{label:"Desabilitado",checked:!1,disabled:!0})]})}const p={name:"Checkbox, Radio e Toggle",render:()=>e.jsx(W,{})},re=["Texto","ComAjuda","ComErro","PrefixoESufixo","Senha","MascaraCpf","AreaDeTexto","Selecao","Controles"];var g,h,C;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(C=(h=r.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var S,f,A;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    helperText: "Usado no dossiê e no convite.",
    optional: true
  }
}`,...(A=(f=o.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var v,T,j;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    error: "Informe o nome completo.",
    required: true,
    defaultValue: "Ana"
  }
}`,...(j=(T=s.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var E,M,y;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Prefixo e sufixo",
  render: () => <div style={{
    display: "grid",
    gap: 14
  }}>
      <TextInput label="Valor do contrato" prefixo="R$" placeholder="0,00" inputMode="decimal" />
      <TextInput label="Taxa ao mês" sufixo="%" placeholder="1,99" inputMode="decimal" />
    </div>
}`,...(y=(M=t.parameters)==null?void 0:M.docs)==null?void 0:y.source}}};var F,k,P;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: "Senha",
    type: "password",
    defaultValue: "segredo-de-teste"
  }
}`,...(P=(k=n.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var R,D,I;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Máscara (CPF)",
  args: {
    label: "CPF",
    mask: "999.999.999-99",
    placeholder: "000.000.000-00",
    inputMode: "numeric"
  }
}`,...(I=(D=l.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var U,V,q;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "TextArea",
  render: () => <TextArea label="Observação" helperText="Aparece só para a equipe." rows={4} />
}`,...(q=(V=c.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var w,O,G;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Select",
  render: () => <div style={{
    display: "grid",
    gap: 14
  }}>
      <Select label="Canal" options={[{
      label: "IA",
      value: "ia"
    }, {
      label: "Humano",
      value: "humano"
    }]} helperText="Até 7 opções: select nativo." />
      <Select label="UF" options={UFS} helperText="Mais de 7 opções: combobox com busca." />
      <Select label="Departamento" options={[{
      label: "Crédito",
      value: 1
    }]} error="Escolha um departamento." />
    </div>
}`,...(G=(O=d.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var B,H,L;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "Checkbox, Radio e Toggle",
  render: () => <ControlesDemo />
}`,...(L=(H=p.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};export{c as AreaDeTexto,o as ComAjuda,s as ComErro,p as Controles,l as MascaraCpf,t as PrefixoESufixo,d as Selecao,n as Senha,r as Texto,re as __namedExportsOrder,ae as default};
