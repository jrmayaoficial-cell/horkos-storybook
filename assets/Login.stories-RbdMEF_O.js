import{Q as l,S as g,p as y}from"./ShellJornada-DOz9uM2T.js";import"./jsx-runtime-CEo06wvt.js";import"./iframe-DVaGrerc.js";import"./preload-helper-D6kgxu3v.js";import"./dadosShell-BpcFcrpX.js";import"./index-BEALldq7.js";import"./index-DfpIZROc.js";import"./v2-CBuWZhP8.js";import"./index-Ctu9A9u4.js";import"./api-CwvJBfED.js";import"./index-c6P9_18s.js";import"./marca-JlK6OYD8.js";import"./carregando-CO0SwyOL.js";import"./celulas-Ddd5ld11.js";/* empty css              */import"./CartaoKpi-CPSdukY9.js";import"./MiniBarras-D-NVWNi3.js";import"./cores-D-iLqYVd.js";import"./Login-Cope_TMD.js";import"./etapas-CjwTh5VZ.js";/* empty css                */const{expect:p,fireEvent:o,userEvent:v,within:h}=__STORYBOOK_MODULE_TEST__,Q={title:"Jornadas/Login",component:g,args:{rotaInicial:"/login"},beforeEach:()=>y(),parameters:{layout:"fullscreen",controls:{disable:!0},docs:{story:{inline:!1,height:"720px"},description:{component:`Porta de entrada das jornadas: o login de verdade (paginas/Login.tsx) ligado ao shell. Qualquer e-mail com senha entra como admin e cai no Dashboard, de onde o menu lateral leva às outras jornadas. A senha "${l}" mostra o erro de credencial. As chamadas \`/v1/*\` respondem de uma API falsa em memória; nenhuma API real é chamada e os dados são fictícios.`}}}};async function u(a,e){o.change(await a.findByLabelText("E-mail"),{target:{value:"marina.alves@example.com"}}),o.change(a.getByLabelText("Senha"),{target:{value:e}}),await v.click(a.getByRole("button",{name:"Entrar"}))}const n={name:"Login",play:async({canvasElement:a})=>{const e=h(a);await u(e,"senha-ficticia-123"),await p(await e.findByRole("heading",{name:"Dashboard"},{timeout:5e3})).toBeTruthy()}},t={name:"Senha errada",play:async({canvasElement:a})=>{const e=h(a);await u(e,l),await p(await e.findByText(/e-mail ou senha inválidos/i)).toBeTruthy()}},k=["Login","SenhaErrada"];var r,i,s;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "Login",
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await entrarCom(canvas, "senha-ficticia-123");
    // entrou: o shell aparece com o Dashboard
    await expect(await canvas.findByRole("heading", {
      name: "Dashboard"
    }, {
      timeout: 5000
    })).toBeTruthy();
  }
}`,...(s=(i=n.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var m,c,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Senha errada",
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await entrarCom(canvas, SENHA_ERRADA);
    await expect(await canvas.findByText(/e-mail ou senha inválidos/i)).toBeTruthy();
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};export{n as Login,t as SenhaErrada,k as __namedExportsOrder,Q as default};
