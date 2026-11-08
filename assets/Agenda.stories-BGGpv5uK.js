import{t as d,s as u,m as y}from"./jornadaOperar-CCnVgK82.js";import"./ShellJornada-DOz9uM2T.js";import"./jsx-runtime-CEo06wvt.js";import"./iframe-DVaGrerc.js";import"./preload-helper-D6kgxu3v.js";import"./dadosShell-BpcFcrpX.js";import"./index-BEALldq7.js";import"./index-DfpIZROc.js";import"./v2-CBuWZhP8.js";import"./index-Ctu9A9u4.js";import"./api-CwvJBfED.js";import"./index-c6P9_18s.js";import"./marca-JlK6OYD8.js";import"./carregando-CO0SwyOL.js";import"./celulas-Ddd5ld11.js";/* empty css              */import"./CartaoKpi-CPSdukY9.js";import"./MiniBarras-D-NVWNi3.js";import"./cores-D-iLqYVd.js";import"./Login-Cope_TMD.js";import"./etapas-CjwTh5VZ.js";/* empty css                */const{expect:n,userEvent:x}=__STORYBOOK_MODULE_TEST__,m=y("/agenda","Jornada da Agenda dentro do shell, papel atendente. A tela é prévia de layout, sem API: os compromissos de exemplo só existem no mês atual. Abaixo de 900 px a célula mostra o número e uma marca, e tocar num dia abre a lista daquele dia abaixo da grade; no desktop os compromissos ficam na própria célula.",null),E={sessao:{papel:"atendente"}},C={title:"Jornadas/Agenda",...m,parameters:{...m.parameters,jornada:E}},t={name:"Padrão",play:async({canvasElement:a})=>{const e=d(a);await n(await e.findByRole("button",{name:"Próximo mês"})).toBeInTheDocument(),await n(e.queryByText("Sem compromissos neste mês.")).not.toBeInTheDocument();const w=new Date().getDate();await x.click(e.getByRole("button",{name:new RegExp(`^${w} de .*compromisso`)})),await n(a.ownerDocument.querySelector(".agenda-dia-lista")).toHaveTextContent("Maria Integração"),await u()}},o={play:async({canvasElement:a})=>{const e=d(a);await x.click(await e.findByRole("button",{name:"Próximo mês"})),await n(await e.findByText("Sem compromissos neste mês.")).toBeInTheDocument(),await u()}},H=["Padrao","Vazio"];var s,r,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
