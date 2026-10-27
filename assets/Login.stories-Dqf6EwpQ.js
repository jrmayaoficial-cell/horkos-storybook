import{j as x}from"./jsx-runtime-BG4uI0fO.js";import{L as Y}from"./Login-Jy50asKP.js";import{M as G}from"./index-DOXfvOJv.js";import"./iframe-6s3UqoeO.js";import"./preload-helper-BqjOJQfC.js";import"./index-B9Urs5Zc.js";import"./index-We7-4c2k.js";import"./marca-BqbT7i5O.js";import"./carregando-DAWDePKN.js";import"./api-OBf8VTRj.js";const{expect:t,fireEvent:v,userEvent:o,waitFor:y,within:i}=__STORYBOOK_MODULE_TEST__,h="marina.alves@aurora.com.br",D="senha-ficticia-123";function w({cognito:e=!0,login:a}={}){const s=globalThis.fetch;return globalThis.fetch=async(n,U)=>{const g=typeof n=="string"?n:n instanceof URL?n.href:n.url;if(!g.includes("/v1/"))return s(n,U);const E=(J,K)=>new Response(JSON.stringify(K),{status:J,headers:{"Content-Type":"application/json"}});return g.includes("/v1/auth/config")?E(200,{cognito:e}):g.includes("/v1/auth/login")&&a?E(a.status,a.corpo):E(200,{ok:!0})},()=>{globalThis.fetch=s}}async function f(e){v.change(await e.findByLabelText("E-mail"),{target:{value:h}}),v.change(e.getByLabelText("Senha"),{target:{value:D}})}const ia={title:"Telas/Login",component:Y,decorators:[e=>x.jsx(G,{initialEntries:["/login"],children:x.jsx(e,{})})],beforeEach:()=>w(),parameters:{layout:"fullscreen",docs:{story:{inline:!1,height:"720px"},description:{component:"Tela de login do painel: rótulo acima com asterisco de obrigatório, ícone à esquerda, olho de mostrar senha e botão cheio. As chamadas `/v1/auth/*` respondem localmente; nenhuma API real é chamada e os dados são fictícios."}}}},r={},c={name:"Preenchido (senha visível)",play:async({canvasElement:e})=>{const a=i(e);await f(a),await o.click(a.getByRole("button",{name:"Mostrar senha"})),await t(a.getByLabelText("Senha")).toHaveAttribute("type","text"),await t(a.getByLabelText("Senha")).toHaveValue(D)}},l={name:"Erro de login",beforeEach:()=>w({login:{status:401,corpo:{erro:"e-mail ou senha inválidos"}}}),play:async({canvasElement:e})=>{const a=i(e);await f(a),await o.click(a.getByRole("button",{name:"Entrar"})),await t(await a.findByRole("alert")).toHaveTextContent("e-mail ou senha inválidos")}},m={name:"Primeiro acesso",beforeEach:()=>w({login:{status:200,corpo:{desafio:"NOVA_SENHA",sessao:"sessao-ficticia"}}}),play:async({canvasElement:e})=>{const a=i(e);await f(a),await o.click(a.getByRole("button",{name:"Entrar"}));const s=await a.findByRole("heading",{name:"Primeiro acesso"});await y(()=>t(s).toBeVisible(),{timeout:3e3})}},u={name:"Recuperação · pedir código",play:async({canvasElement:e})=>{const a=i(e);await o.click(await a.findByRole("button",{name:"Esqueci minha senha"})),v.change(await a.findByLabelText("E-mail"),{target:{value:h}})}},p={name:"Recuperação · código e nova senha",play:async({canvasElement:e})=>{const a=i(e);await o.click(await a.findByRole("button",{name:"Esqueci minha senha"})),v.change(await a.findByLabelText("E-mail"),{target:{value:h}}),await o.click(a.getByRole("button",{name:"Enviar código"})),await y(()=>t(a.getByLabelText("Código de verificação")).toBeVisible(),{timeout:3e3}),await y(()=>t(a.getByText(new RegExp(h))).toBeVisible(),{timeout:3e3})}},d={globals:{viewport:{value:"mobile1",isRotated:!1}}},sa=["Vazio","Preenchido","Erro","PrimeiroAcesso","Recuperacao","RecuperacaoCodigo","Celular"];var b,B,R;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(R=(B=r.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var T,L,A;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Preenchido (senha visível)",
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await preencher(canvas);
    await userEvent.click(canvas.getByRole("button", {
      name: "Mostrar senha"
    }));
    await expect(canvas.getByLabelText("Senha")).toHaveAttribute("type", "text");
    await expect(canvas.getByLabelText("Senha")).toHaveValue(SENHA);
  }
}`,...(A=(L=c.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var S,k,V;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Erro de login",
  beforeEach: () => instalarAuthFalsa({
    login: {
      status: 401,
      corpo: {
        erro: "e-mail ou senha inválidos"
      }
    }
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await preencher(canvas);
    await userEvent.click(canvas.getByRole("button", {
      name: "Entrar"
    }));
    await expect(await canvas.findByRole("alert")).toHaveTextContent("e-mail ou senha inválidos");
  }
}`,...(V=(k=l.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var F,P,H;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Primeiro acesso",
  beforeEach: () => instalarAuthFalsa({
    login: {
      status: 200,
      corpo: {
        desafio: "NOVA_SENHA",
        sessao: "sessao-ficticia"
      }
    }
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await preencher(canvas);
    await userEvent.click(canvas.getByRole("button", {
      name: "Entrar"
    }));
    // waitFor: .lg-modo entra de opacity 0 (login.css); em iframe em segundo
    // plano (página de docs) a animação demora e o toBeVisible imediato falhava
    const titulo = await canvas.findByRole("heading", {
      name: "Primeiro acesso"
    });
    await waitFor(() => expect(titulo).toBeVisible(), {
      timeout: 3000
    });
  }
}`,...(H=(P=m.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var _,C,M;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Recuperação · pedir código",
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(await canvas.findByRole("button", {
      name: "Esqueci minha senha"
    }));
    fireEvent.change(await canvas.findByLabelText("E-mail"), {
      target: {
        value: EMAIL
      }
    });
  }
}`,...(M=(C=u.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var O,N,j;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "Recuperação · código e nova senha",
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(await canvas.findByRole("button", {
      name: "Esqueci minha senha"
    }));
    fireEvent.change(await canvas.findByLabelText("E-mail"), {
      target: {
        value: EMAIL
      }
    });
    await userEvent.click(canvas.getByRole("button", {
      name: "Enviar código"
    }));
    await waitFor(() => expect(canvas.getByLabelText("Código de verificação")).toBeVisible(), {
      timeout: 3000
    });
    await waitFor(() => expect(canvas.getByText(new RegExp(EMAIL))).toBeVisible(), {
      timeout: 3000
    });
  }
}`,...(j=(N=p.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var q,I,z;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  }
}`,...(z=(I=d.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};export{d as Celular,l as Erro,c as Preenchido,m as PrimeiroAcesso,u as Recuperacao,p as RecuperacaoCodigo,r as Vazio,sa as __namedExportsOrder,ia as default};
