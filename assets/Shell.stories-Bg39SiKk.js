import{j as t}from"./jsx-runtime-Bbiqkd5w.js";import{r as C}from"./iframe-CHDCLwKA.js";import{i as F,p as M,M as P,P as _,T as H}from"./dadosShell-CgSTafaH.js";import{T as L}from"./index-DY3h9vDP.js";import{C as N}from"./composicoes-BW80ApP4.js";import{M as O}from"./index-DpnZhMMf.js";import"./preload-helper-D6kgxu3v.js";import"./index-gwdxwssV.js";import"./index-XuxhtG-B.js";import"./v2-CKyo1J37.js";import"./api-CwvJBfED.js";import"./carregando-C8CQKI18.js";import"./marca-DP-91ssU.js";/* empty css              */import"./cores-D-iLqYVd.js";import"./MiniBarras-Bt1bMKDG.js";const{expect:o,userEvent:n,waitFor:m,within:u}=__STORYBOOK_MODULE_TEST__;function q({colapsadaInicial:l=!1,mobile:s=!1,comCampo:c=!1}){const[a,r]=C.useState(l),d=M();return t.jsxs("div",{className:"hk-shell",style:{"--menu-w":s?"0px":a?"96px":"272px",minHeight:"100vh"},children:[!s&&t.jsx(P,{...d,colapsada:a,aoAlternar:()=>r(e=>!e)}),t.jsx("div",{className:"hk-shell-corpo",children:t.jsxs(_,{children:[t.jsx(H,{...d,mobile:s,titulo:"Painel de controle",buscarSessoes:!0,acompanhar:!0,superAdmin:!1}),t.jsxs("main",{className:"conteudo",children:[c&&t.jsx("div",{style:{maxWidth:360,marginBottom:16},children:t.jsx(L,{label:"Anotação rápida"})}),t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:16,maxWidth:960},children:t.jsx(N,{})})]})]})})]})}const ne={title:"Shell/Menu lateral e topo",component:q,decorators:[l=>t.jsx(O,{initialEntries:["/painel-de-controle"],children:t.jsx(l,{})})],beforeEach:()=>F(),parameters:{layout:"fullscreen",docs:{story:{inline:!1,height:"720px"},description:{component:"MenuLateral (sidebar flutuante, recolhível para trilho de 72px) e TopoPagina (título, trilha, busca ⌘K, Nova sessão, chip do usuário) com dados fictícios de um admin. No Storybook, `useChamada()` vem de um contexto falso (`.storybook/mocks/chamada.tsx`) e as chamadas `/v1/*` respondem localmente; nenhuma API real é chamada."}}}},h={},w={args:{colapsadaInicial:!0}},x={args:{mobile:!0},globals:{viewport:{value:"mobile1",isRotated:!1}}},p={name:"Atalhos de teclado (?)",args:{comCampo:!0},play:async({canvasElement:l,step:s})=>{const c=l.ownerDocument,a=u(c.body),r=()=>a.queryByRole("dialog",{name:"Atalhos de teclado"}),d=()=>a.getAllByRole("button",{name:/Buscar/}).find(e=>{const i=getComputedStyle(e);return e.offsetParent!==null&&i.visibility!=="hidden"&&i.pointerEvents!=="none"});await a.findByRole("heading",{name:"Painel de controle",level:1}),await s("? fora de campo abre o painel e Esc fecha devolvendo o foco",async()=>{const e=d();e.focus(),await n.keyboard("?");const i=await a.findByRole("dialog",{name:"Atalhos de teclado"});await o(u(i).getByText("Buscar sessões e páginas")).toBeInTheDocument(),await o(u(i).getByText("Mostrar estes atalhos")).toBeInTheDocument(),await n.keyboard("?"),await o(a.getAllByRole("dialog",{name:"Atalhos de teclado"})).toHaveLength(1),await n.keyboard("{Escape}"),await m(()=>o(r()).not.toBeInTheDocument()),await o(c.activeElement).toBe(e)}),await s("? digitado num campo é texto, não abre o painel",async()=>{const e=a.getByRole("textbox",{name:"Anotação rápida"});await n.click(e),await n.keyboard("?"),await o(e).toHaveValue("?"),await o(r()).not.toBeInTheDocument(),e.blur()}),await s("a paleta oferece Atalhos de teclado e Enter abre o painel",async()=>{const e=d();await n.click(e);const i=await a.findByRole("combobox",{name:"Buscar"});await n.type(i,"atalhos"),await o(await a.findByRole("option",{name:/Atalhos de teclado/})).toBeInTheDocument(),await n.keyboard("{Enter}");const y=await a.findByRole("dialog",{name:"Atalhos de teclado"});await m(()=>o(y).toContainElement(c.activeElement)),await m(()=>o(a.queryByRole("combobox",{name:"Buscar"})).not.toBeInTheDocument()),await n.click(u(y).getByRole("button",{name:"Fechar"})),await m(()=>o(r()).not.toBeInTheDocument()),await m(()=>o(c.activeElement).toBe(e))})}},se=["Expandido","Recolhido","Celular","AtalhosDeTeclado"];var b,B,g;h.parameters={...h.parameters,docs:{...(b=h.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(g=(B=h.parameters)==null?void 0:B.docs)==null?void 0:g.source}}};var f,E,v;w.parameters={...w.parameters,docs:{...(f=w.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    colapsadaInicial: true
  }
}`,...(v=(E=w.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var T,R,A;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    mobile: true
  },
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  }
}`,...(A=(R=x.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var k,D,I,S,j;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "Atalhos de teclado (?)",
  args: {
    comCampo: true
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const doc = canvasElement.ownerDocument;
    const tela = within(doc.body);
    const painel = () => tela.queryByRole("dialog", {
      name: "Atalhos de teclado"
    });
    const botaoBusca = () => tela.getAllByRole("button", {
      name: /Buscar/
    }).find(b => {
      const estilo = getComputedStyle(b);
      return b.offsetParent !== null && estilo.visibility !== "hidden" && estilo.pointerEvents !== "none";
    })!;
    await tela.findByRole("heading", {
      name: "Painel de controle",
      level: 1
    });
    await step("? fora de campo abre o painel e Esc fecha devolvendo o foco", async () => {
      const busca = botaoBusca();
      busca.focus();
      await userEvent.keyboard("?");
      const dialogo = await tela.findByRole("dialog", {
        name: "Atalhos de teclado"
      });
      await expect(within(dialogo).getByText("Buscar sessões e páginas")).toBeInTheDocument();
      await expect(within(dialogo).getByText("Mostrar estes atalhos")).toBeInTheDocument();
      await userEvent.keyboard("?");
      await expect(tela.getAllByRole("dialog", {
        name: "Atalhos de teclado"
      })).toHaveLength(1);
      await userEvent.keyboard("{Escape}");
      await waitFor(() => expect(painel()).not.toBeInTheDocument());
      await expect(doc.activeElement).toBe(busca);
    });
    await step("? digitado num campo é texto, não abre o painel", async () => {
      const campo = tela.getByRole("textbox", {
        name: "Anotação rápida"
      });
      await userEvent.click(campo);
      await userEvent.keyboard("?");
      await expect(campo).toHaveValue("?");
      await expect(painel()).not.toBeInTheDocument();
      campo.blur();
    });
    await step("a paleta oferece Atalhos de teclado e Enter abre o painel", async () => {
      const busca = botaoBusca();
      await userEvent.click(busca);
      const campoBusca = await tela.findByRole("combobox", {
        name: "Buscar"
      });
      await userEvent.type(campoBusca, "atalhos");
      await expect(await tela.findByRole("option", {
        name: /Atalhos de teclado/
      })).toBeInTheDocument();
      await userEvent.keyboard("{Enter}");
      const dialogo = await tela.findByRole("dialog", {
        name: "Atalhos de teclado"
      });
      await waitFor(() => expect(dialogo).toContainElement(doc.activeElement as HTMLElement));
      await waitFor(() => expect(tela.queryByRole("combobox", {
        name: "Buscar"
      })).not.toBeInTheDocument());
      await userEvent.click(within(dialogo).getByRole("button", {
        name: "Fechar"
      }));
      await waitFor(() => expect(painel()).not.toBeInTheDocument());
      await waitFor(() => expect(doc.activeElement).toBe(busca));
    });
  }
}`,...(I=(D=p.parameters)==null?void 0:D.docs)==null?void 0:I.source},description:{story:`"?" abre o painel; com ele aberto o "?" não reabre nem fecha; Esc fecha e
devolve o foco; dentro de campo o "?" é texto; a paleta também abre o painel.`,...(j=(S=p.parameters)==null?void 0:S.docs)==null?void 0:j.description}}};export{p as AtalhosDeTeclado,x as Celular,h as Expandido,w as Recolhido,se as __namedExportsOrder,ne as default};
