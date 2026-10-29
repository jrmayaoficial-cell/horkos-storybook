import{j as e}from"./jsx-runtime-Bs_0p5zD.js";import{r as x}from"./iframe-DuQYyiCW.js";import{E as r,B as s,d as n,e as R,M as L,T as W,f as _}from"./index-uCLBKUYa.js";import"./preload-helper-D6kgxu3v.js";import"./index-BGS7Qo4C.js";import"./marca-0GV3HRL3.js";import"./carregando-DOTRDj5N.js";const Y={title:"Componentes/Feedback",component:r,args:{tipo:"nunca",titulo:"Nenhuma sessão ainda"},parameters:{docs:{description:{component:"Estados vazios, mensagens, modal e toast. Modal e Toast vão para o `<body>` (portal / posição fixa): abra pelo botão."}}}},i={name:"EmptyState",args:{children:"Crie a primeira sessão para enviar o convite ao cliente.",acao:e.jsx(s,{size:"small",children:"Nova sessão"})}},l={name:"EmptyState (quatro tipos)",render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:12},children:[e.jsx(r,{tipo:"nunca",titulo:"Nenhuma sessão ainda",children:"Crie a primeira sessão."}),e.jsx(r,{tipo:"filtro",titulo:"Nada com esses filtros",children:"Limpe os filtros para ver tudo."}),e.jsx(r,{tipo:"zerada",titulo:"Fila zerada",children:"Nenhum dossiê aguardando revisão."}),e.jsx(r,{tipo:"erro",titulo:"Não foi possível carregar",children:"Tente de novo em instantes."})]})},d={name:"InlineMessage",render:()=>e.jsxs("div",{style:{display:"grid",gap:10,maxWidth:560},children:[e.jsx(n,{intent:"informative",title:"Convite enviado",children:"O cliente recebe o link por SMS e e-mail."}),e.jsx(n,{intent:"positive",title:"Sessão concluída",children:"O dossiê está pronto."}),e.jsx(n,{intent:"notice",title:"Biometria abaixo do limite",children:"Revise as fotos antes de aprovar."}),e.jsx(n,{intent:"negative",title:"Falha na gravação",children:"A chamada não foi gravada."})]})};function V({inicial:o=!1}){const[a,t]=x.useState(o);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>t(!0),children:"Abrir modal"}),e.jsx(L,{isOpen:a,onClose:()=>t(!1),title:"Renomear departamento",description:"O nome aparece no convite do cliente.",children:e.jsxs("div",{style:{display:"grid",gap:16,minWidth:320},children:[e.jsx(W,{label:"Nome",defaultValue:"Crédito consignado"}),e.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"flex-end"},children:[e.jsx(s,{variant:"ghost",onClick:()=>t(!1),children:"Cancelar"}),e.jsx(s,{onClick:()=>t(!1),children:"Salvar"})]})]})})]})}const c={name:"Modal",render:()=>e.jsx(V,{}),parameters:{docs:{description:{story:"Esc e clique no véu fecham; foco entra no modal, fica preso nele e volta para quem abriu."}}}},m={name:"Modal (aberto)",render:()=>e.jsx(V,{inicial:!0}),parameters:{docs:{story:{inline:!1,height:"420px"}}}};function w(){const[o,a]=x.useState(!1),[t,f]=x.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"ghost",theme:"negative",onClick:()=>a(!0),children:"Excluir sessão"}),e.jsx(R,{isOpen:o,onClose:()=>a(!1),loading:t,title:"Excluir sessão?",confirmLabel:"Sim, excluir",onConfirm:()=>{f(!0),setTimeout(()=>{f(!1),a(!1)},1200)},children:"A gravação e o dossiê desta sessão serão apagados."})]})}const p={name:"ConfirmModal",render:()=>e.jsx(w,{})};function G(){const[o,a]=x.useState(null);return e.jsxs("div",{style:{display:"flex",gap:10},children:[e.jsx(s,{onClick:()=>a("sucesso"),children:"Toast de sucesso"}),e.jsx(s,{variant:"ghost",theme:"negative",onClick:()=>a("erro"),children:"Toast de erro"}),e.jsx(_,{aberto:o!=null,tom:o??"sucesso",onFechar:()=>a(null),titulo:o==="erro"?"Não foi possível salvar":"Alterações salvas",detalhe:o==="erro"?"Verifique a conexão e tente de novo.":"O departamento foi atualizado.",acao:o==="sucesso"?{rotulo:"Desfazer",onClick:()=>a(null)}:void 0})]})}const u={name:"Toast",render:()=>e.jsx(G,{}),parameters:{docs:{description:{story:"Canto inferior direito, fundo escuro; some em 6s (10s com ação)."}}}},Z=["EstadoVazio","EstadosVazios","Mensagens","ModalDecisao","ModalAberto","Confirmacao","Notificacao"];var g,v,h;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "EmptyState",
  args: {
    children: "Crie a primeira sessão para enviar o convite ao cliente.",
    acao: <Button size="small">Nova sessão</Button>
  }
}`,...(h=(v=i.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var E,y,j;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "EmptyState (quatro tipos)",
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 12
  }}>
      <EmptyState tipo="nunca" titulo="Nenhuma sessão ainda">Crie a primeira sessão.</EmptyState>
      <EmptyState tipo="filtro" titulo="Nada com esses filtros">Limpe os filtros para ver tudo.</EmptyState>
      <EmptyState tipo="zerada" titulo="Fila zerada">Nenhum dossiê aguardando revisão.</EmptyState>
      <EmptyState tipo="erro" titulo="Não foi possível carregar">Tente de novo em instantes.</EmptyState>
    </div>
}`,...(j=(y=l.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var C,M,S;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "InlineMessage",
  render: () => <div style={{
    display: "grid",
    gap: 10,
    maxWidth: 560
  }}>
      <InlineMessage intent="informative" title="Convite enviado">O cliente recebe o link por SMS e e-mail.</InlineMessage>
      <InlineMessage intent="positive" title="Sessão concluída">O dossiê está pronto.</InlineMessage>
      <InlineMessage intent="notice" title="Biometria abaixo do limite">Revise as fotos antes de aprovar.</InlineMessage>
      <InlineMessage intent="negative" title="Falha na gravação">A chamada não foi gravada.</InlineMessage>
    </div>
}`,...(S=(M=d.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var b,T,N;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Modal",
  render: () => <ModalDemo />,
  parameters: {
    docs: {
      description: {
        story: "Esc e clique no véu fecham; foco entra no modal, fica preso nele e volta para quem abriu."
      }
    }
  }
}`,...(N=(T=c.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var z,D,I;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Modal (aberto)",
  render: () => <ModalDemo inicial />,
  parameters: {
    docs: {
      story: {
        inline: false,
        height: "420px"
      }
    }
  }
}`,...(I=(D=m.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var A,k,O;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "ConfirmModal",
  render: () => <ConfirmDemo />
}`,...(O=(k=p.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var F,q,B;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Toast",
  render: () => <ToastDemo />,
  parameters: {
    docs: {
      description: {
        story: "Canto inferior direito, fundo escuro; some em 6s (10s com ação)."
      }
    }
  }
}`,...(B=(q=u.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};export{p as Confirmacao,i as EstadoVazio,l as EstadosVazios,d as Mensagens,m as ModalAberto,c as ModalDecisao,u as Notificacao,Z as __namedExportsOrder,Y as default};
