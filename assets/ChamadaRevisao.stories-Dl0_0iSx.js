import{t,s as c,m as _}from"./jornadaOperar-CCnVgK82.js";import"./ShellJornada-DOz9uM2T.js";import"./jsx-runtime-CEo06wvt.js";import"./iframe-DVaGrerc.js";import"./preload-helper-D6kgxu3v.js";import"./dadosShell-BpcFcrpX.js";import"./index-BEALldq7.js";import"./index-DfpIZROc.js";import"./v2-CBuWZhP8.js";import"./index-Ctu9A9u4.js";import"./api-CwvJBfED.js";import"./index-c6P9_18s.js";import"./marca-JlK6OYD8.js";import"./carregando-CO0SwyOL.js";import"./celulas-Ddd5ld11.js";/* empty css              */import"./CartaoKpi-CPSdukY9.js";import"./MiniBarras-D-NVWNi3.js";import"./cores-D-iLqYVd.js";import"./Login-Cope_TMD.js";import"./etapas-CjwTh5VZ.js";/* empty css                */const{expect:e,userEvent:N}=__STORYBOOK_MODULE_TEST__,p=_("/chamadas-realizadas/ses_fic_rea03",'Jornada da revisão da própria chamada dentro do shell, papel atendente: resumo e questionário preenchido pela análise. Chamada que não existe (404) mostra "não encontrada" com Voltar; falha de rede ou do servidor mostra o erro com Tentar de novo; uma falha no polling mantém os dados na tela.',null),d={cenario:"operar",sessao:{papel:"atendente"}},l="GET /v1/atendimento/:id/analise",Z={title:"Jornadas/Revisão de chamada",...p,parameters:{...p.parameters,jornada:d}},o={name:"Padrão",play:async({canvasElement:n})=>{const a=t(n);await e(await a.findByRole("heading",{name:"Carla Menezes Duarte"})).toBeInTheDocument(),await e(a.getByText("Questionário do atendimento")).toBeInTheDocument(),await c()}},r={parameters:{jornada:{...d,pendurar:[l]}},play:async({canvasElement:n})=>{const a=t(n);await e(await a.findByText("Carregando a chamada")).toBeInTheDocument()}},s={name:"Erro: não encontrada",args:{rotaInicial:"/chamadas-realizadas/ses_que_nao_existe"},play:async({canvasElement:n})=>{const a=t(n);await e(await a.findByText("Chamada não encontrada")).toBeInTheDocument(),await e(a.queryByRole("button",{name:"Tentar de novo"})).not.toBeInTheDocument(),await e(a.getByRole("button",{name:"Voltar para Chamadas realizadas"})).toBeInTheDocument(),await c()}},m={name:"Erro de rede",parameters:{jornada:{...d,semRede:[l]}},play:async({canvasElement:n})=>{const a=t(n);await e(await a.findByText(/Não foi possível carregar a chamada/)).toBeInTheDocument(),await N.click(a.getByRole("button",{name:"Tentar de novo"})),await e(await a.findByText(/Não foi possível carregar a chamada/)).toBeInTheDocument(),await c()}},i={name:"Erro do servidor",parameters:{jornada:{...d,falhar:[l]}},play:async({canvasElement:n})=>{const a=t(n);await e(await a.findByRole("button",{name:"Tentar de novo"})).toBeInTheDocument(),await e(a.queryByText("Chamada não encontrada")).not.toBeInTheDocument(),await c()}},$=["Padrao","Carregando","NaoEncontrada","SemRede","ErroDoServidor"];var u,T,E;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Padrão",
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByRole("heading", {
      name: "Carla Menezes Duarte"
    })).toBeInTheDocument();
    await expect(tela.getByText("Questionário do atendimento")).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(E=(T=o.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var h,y,B;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    jornada: {
      ...ATENDENTE,
      pendurar: [ROTA]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Carregando a chamada")).toBeInTheDocument();
  }
}`,...(B=(y=r.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var w,x,D;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Erro: não encontrada",
  args: {
    rotaInicial: "/chamadas-realizadas/ses_que_nao_existe"
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Chamada não encontrada")).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: "Tentar de novo"
    })).not.toBeInTheDocument();
    await expect(tela.getByRole("button", {
      name: "Voltar para Chamadas realizadas"
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(D=(x=s.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var v,f,R;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Erro de rede",
  parameters: {
    jornada: {
      ...ATENDENTE,
      semRede: [ROTA]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/Não foi possível carregar a chamada/)).toBeInTheDocument();
    await userEvent.click(tela.getByRole("button", {
      name: "Tentar de novo"
    }));
    await expect(await tela.findByText(/Não foi possível carregar a chamada/)).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(R=(f=m.parameters)==null?void 0:f.docs)==null?void 0:R.source}}};var g,I,S;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Erro do servidor",
  parameters: {
    jornada: {
      ...ATENDENTE,
      falhar: [ROTA]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByRole("button", {
      name: "Tentar de novo"
    })).toBeInTheDocument();
    await expect(tela.queryByText("Chamada não encontrada")).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(S=(I=i.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};export{r as Carregando,i as ErroDoServidor,s as NaoEncontrada,o as Padrao,m as SemRede,$ as __namedExportsOrder,Z as default};
