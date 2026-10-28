import{t,s as i,m as _}from"./jornadaOperar-CIOJL8X9.js";import"./ShellJornada-Df5Yul5w.js";import"./jsx-runtime-CHIhdn7c.js";import"./iframe-Di8c_vSj.js";import"./preload-helper-D6kgxu3v.js";import"./index-DBQFAicf.js";import"./index-BRNAEhnP.js";import"./marca-B96e-3MR.js";import"./carregando-BmiZ2oue.js";import"./dadosShell-C2eEKAe3.js";import"./index-B0jM0W5X.js";import"./v2-U-k-l5ig.js";import"./index-BBgPVeAk.js";import"./api-jrAgcfWf.js";import"./Login-DY-zk1Bh.js";import"./celulas-BPu3DeAD.js";/* empty css              */import"./paleta-B-duPMKZ.js";import"./MiniBarras-7DzxpT03.js";/* empty css                */const{expect:e,userEvent:N}=__STORYBOOK_MODULE_TEST__,p=_("/chamadas-realizadas/ses_fic_rea03",'Jornada da revisão da própria chamada dentro do shell, papel atendente: resumo e questionário preenchido pela análise. Chamada que não existe (404) mostra "não encontrada" com Voltar; falha de rede ou do servidor mostra o erro com Tentar de novo; uma falha no polling mantém os dados na tela.',null),d={cenario:"operar",sessao:{papel:"atendente"}},l="GET /v1/atendimento/:id/analise",W={title:"Jornadas/Revisão de chamada",...p,parameters:{...p.parameters,jornada:d}},o={name:"Padrão",play:async({canvasElement:n})=>{const a=t(n);await e(await a.findByRole("heading",{name:"Carla Menezes Duarte"})).toBeInTheDocument(),await e(a.getByText("Questionário do atendimento")).toBeInTheDocument(),await i()}},r={parameters:{jornada:{...d,pendurar:[l]}},play:async({canvasElement:n})=>{const a=t(n);await e(await a.findByText("Carregando a chamada")).toBeInTheDocument()}},s={name:"Erro: não encontrada",args:{rotaInicial:"/chamadas-realizadas/ses_que_nao_existe"},play:async({canvasElement:n})=>{const a=t(n);await e(await a.findByText("Chamada não encontrada")).toBeInTheDocument(),await e(a.queryByRole("button",{name:"Tentar de novo"})).not.toBeInTheDocument(),await e(a.getByRole("button",{name:"Voltar para Chamadas realizadas"})).toBeInTheDocument(),await i()}},m={name:"Erro de rede",parameters:{jornada:{...d,semRede:[l]}},play:async({canvasElement:n})=>{const a=t(n);await e(await a.findByText(/Não foi possível carregar a chamada/)).toBeInTheDocument(),await N.click(a.getByRole("button",{name:"Tentar de novo"})),await e(await a.findByText(/Não foi possível carregar a chamada/)).toBeInTheDocument(),await i()}},c={name:"Erro do servidor",parameters:{jornada:{...d,falhar:[l]}},play:async({canvasElement:n})=>{const a=t(n);await e(await a.findByRole("button",{name:"Tentar de novo"})).toBeInTheDocument(),await e(a.queryByText("Chamada não encontrada")).not.toBeInTheDocument(),await i()}},X=["Padrao","Carregando","NaoEncontrada","SemRede","ErroDoServidor"];var u,T,E;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(R=(f=m.parameters)==null?void 0:f.docs)==null?void 0:R.source}}};var g,I,S;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(S=(I=c.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};export{r as Carregando,c as ErroDoServidor,s as NaoEncontrada,o as Padrao,m as SemRede,X as __namedExportsOrder,W as default};
