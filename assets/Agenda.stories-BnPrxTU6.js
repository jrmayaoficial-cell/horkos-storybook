import{t as d,s as u,m as y}from"./jornadaOperar-D7ZeOS19.js";import"./ShellJornada-BMJ4fpX0.js";import"./jsx-runtime-CqjonpNT.js";import"./iframe-DJrhfsQk.js";import"./preload-helper-D6kgxu3v.js";import"./index-9UivOglz.js";import"./index-BwsDp8T-.js";import"./marca-z0SsKRba.js";import"./carregando-BXT1e_OM.js";import"./dadosShell-BJlYo5ba.js";import"./index-DXvfoM1X.js";import"./v2-CZUD68ca.js";import"./index-DBwj-ecP.js";import"./api-Z9ulGFc_.js";import"./Login-DIYaNGVn.js";import"./celulas-DGaOaVoK.js";/* empty css              */import"./paleta-B-duPMKZ.js";import"./MiniBarras-CUX8X_xl.js";/* empty css                */const{expect:n,userEvent:x}=__STORYBOOK_MODULE_TEST__,s=y("/agenda","Jornada da Agenda dentro do shell, papel atendente. A tela é prévia de layout, sem API: os compromissos de exemplo só existem no mês atual. Abaixo de 900 px a célula mostra o número e uma marca, e tocar num dia abre a lista daquele dia abaixo da grade; no desktop os compromissos ficam na própria célula.",null),E={sessao:{papel:"atendente"}},M={title:"Jornadas/Agenda",...s,parameters:{...s.parameters,jornada:E}},t={name:"Padrão",play:async({canvasElement:a})=>{const e=d(a);await n(await e.findByRole("button",{name:"Próximo mês"})).toBeInTheDocument(),await n(e.queryByText("Sem compromissos neste mês.")).not.toBeInTheDocument();const w=new Date().getDate();await x.click(e.getByRole("button",{name:new RegExp(`^${w} de .*compromisso`)})),await n(a.ownerDocument.querySelector(".agenda-dia-lista")).toHaveTextContent("Maria Integração"),await u()}},o={play:async({canvasElement:a})=>{const e=d(a);await x.click(await e.findByRole("button",{name:"Próximo mês"})),await n(await e.findByText("Sem compromissos neste mês.")).toBeInTheDocument(),await u()}},z=["Padrao","Vazio"];var m,r,i;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Padrão",
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByRole("button", {
      name: "Próximo mês"
    })).toBeInTheDocument();
    await expect(tela.queryByText("Sem compromissos neste mês.")).not.toBeInTheDocument();
    const hoje = new Date().getDate();
    await userEvent.click(tela.getByRole("button", {
      name: new RegExp(\`^\${hoje} de .*compromisso\`)
    }));
    await expect(canvasElement.ownerDocument.querySelector(".agenda-dia-lista")).toHaveTextContent("Maria Integração");
    await semRotaSemFixture();
  }
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await userEvent.click(await tela.findByRole("button", {
      name: "Próximo mês"
    }));
    await expect(await tela.findByText("Sem compromissos neste mês.")).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};export{t as Padrao,o as Vazio,z as __namedExportsOrder,M as default};
