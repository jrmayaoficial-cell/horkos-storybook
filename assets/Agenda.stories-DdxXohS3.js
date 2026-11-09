import{t as d,s as u,m as y}from"./jornadaOperar-LcZWFG-x.js";import"./ShellJornada-8kfDBe3w.js";import"./jsx-runtime-BsO2-jW-.js";import"./iframe-6qGl2EVB.js";import"./preload-helper-D6kgxu3v.js";import"./dadosShell-BHjdb-Nm.js";import"./index-Q6NfAV-5.js";import"./index-DnJcPdT8.js";import"./v2-CYxomLkK.js";import"./index-eMXeSisO.js";import"./api-CwvJBfED.js";import"./index-QhBmMPum.js";import"./marca-B8tPJM_u.js";import"./carregando-BAF7tZg_.js";import"./celulas-BiCn5q_x.js";/* empty css              */import"./CartaoKpi-Cm8YdKKB.js";import"./MiniBarras-CryqdHNY.js";import"./cores-D-iLqYVd.js";import"./Login-DGTeEJrZ.js";import"./etapas-B82Qo7Am.js";/* empty css                */const{expect:n,userEvent:x}=__STORYBOOK_MODULE_TEST__,m=y("/agenda","Jornada da Agenda dentro do shell, papel atendente. A tela é prévia de layout, sem API: os compromissos de exemplo só existem no mês atual. Abaixo de 900 px a célula mostra o número e uma marca, e tocar num dia abre a lista daquele dia abaixo da grade; no desktop os compromissos ficam na própria célula.",null),E={sessao:{papel:"atendente"}},C={title:"Jornadas/Agenda",...m,parameters:{...m.parameters,jornada:E}},t={name:"Padrão",play:async({canvasElement:a})=>{const e=d(a);await n(await e.findByRole("button",{name:"Próximo mês"})).toBeInTheDocument(),await n(e.queryByText("Sem compromissos neste mês.")).not.toBeInTheDocument();const w=new Date().getDate();await x.click(e.getByRole("button",{name:new RegExp(`^${w} de .*compromisso`)})),await n(a.ownerDocument.querySelector(".agenda-dia-lista")).toHaveTextContent("Maria Integração"),await u()}},o={play:async({canvasElement:a})=>{const e=d(a);await x.click(await e.findByRole("button",{name:"Próximo mês"})),await n(await e.findByText("Sem compromissos neste mês.")).toBeInTheDocument(),await u()}},H=["Padrao","Vazio"];var s,r,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};export{t as Padrao,o as Vazio,H as __namedExportsOrder,C as default};
