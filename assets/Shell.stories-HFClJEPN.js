import{j as a}from"./jsx-runtime-BUD7zGX8.js";import{r as j}from"./iframe-C1QMfJ-9.js";import{i as b,p as S,M as y,P as C,T as E}from"./dadosShell-C1AgSo37.js";import{C as M}from"./composicoes-CnvovHBf.js";import{M as P}from"./index-4jL4Xbgq.js";import"./preload-helper-D6kgxu3v.js";import"./index-Crig0FLC.js";import"./index-BbhoXcyi.js";import"./v2-CUED6Ccf.js";import"./api-OBf8VTRj.js";import"./index-C8gnXhhc.js";import"./marca-BT2lv8yj.js";import"./carregando-CHDG19BM.js";/* empty css              */import"./paleta-B-duPMKZ.js";import"./MiniBarras-lAL3wmyU.js";function R({colapsadaInicial:s=!1,mobile:t=!1}){const[i,g]=j.useState(s),l=S();return a.jsxs("div",{className:"hk-shell",style:{"--menu-w":t?"0px":i?"96px":"272px",minHeight:"100vh"},children:[!t&&a.jsx(y,{...l,colapsada:i,aoAlternar:()=>g(v=>!v)}),a.jsx("div",{className:"hk-shell-corpo",children:a.jsxs(C,{children:[a.jsx(E,{...l,mobile:t,titulo:"Painel de controle",buscarSessoes:!0,acompanhar:!0,superAdmin:!1}),a.jsx("main",{className:"conteudo",children:a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:16,maxWidth:960},children:a.jsx(M,{})})})]})})]})}const B={title:"Shell/Menu lateral e topo",component:R,decorators:[s=>a.jsx(P,{initialEntries:["/painel-de-controle"],children:a.jsx(s,{})})],beforeEach:()=>b(),parameters:{layout:"fullscreen",docs:{story:{inline:!1,height:"720px"},description:{component:"MenuLateral (sidebar flutuante, recolhível para trilho de 72px) e TopoPagina (título, trilha, busca ⌘K, Nova sessão, chip do usuário) com dados fictícios de um admin. No Storybook, `useChamada()` vem de um contexto falso (`.storybook/mocks/chamada.tsx`) e as chamadas `/v1/*` respondem localmente; nenhuma API real é chamada."}}}},e={},o={args:{colapsadaInicial:!0}},r={args:{mobile:!0},globals:{viewport:{value:"mobile1",isRotated:!1}}},G=["Expandido","Recolhido","Celular"];var n,c,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,d,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    colapsadaInicial: true
  }
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var h,x,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    mobile: true
  },
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  }
}`,...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};export{r as Celular,e as Expandido,o as Recolhido,G as __namedExportsOrder,B as default};
