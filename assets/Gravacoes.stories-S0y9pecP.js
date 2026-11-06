import{C as o,m as C}from"./jornadaAdmin-D2U3W1Lr.js";import{t as r,s,d as F}from"./jornadaOperar-qu3lmx3f.js";import"./ShellJornada-D6or9w_N.js";import"./jsx-runtime-CIMg3zCe.js";import"./iframe-sQhv-dP9.js";import"./preload-helper-D6kgxu3v.js";import"./dadosShell-DVjA70Zd.js";import"./index-Cca0CcRs.js";import"./index-BUBJGiik.js";import"./v2-QXom_1Mi.js";import"./index-C1SKTYOl.js";import"./api-DeTcSHTh.js";import"./index-KxmTJ2KI.js";import"./marca-JJvqtdKG.js";import"./carregando-Cu9nLz69.js";import"./celulas-DMaLRg05.js";/* empty css              */import"./MiniBarras-D1hOdhnB.js";import"./cores-D-iLqYVd.js";import"./Login-DFawTORA.js";import"./etapas-DD6roYoj.js";/* empty css                */import"./ShellGestao-Cu2cfElu.js";const{expect:e,userEvent:_,waitFor:j}=__STORYBOOK_MODULE_TEST__,L=C("/gravacoes",'Jornada de Gravações dentro do shell: tabela a partir de 900 px e cartões abaixo, com Assistir e o menu ⋯ a 44 px no cartão. A busca filtra por referência; a falha de carga diz o motivo em português, sem "HTTP 403", e 403 não oferece Tentar de novo.'),i="GET /v1/gravacoes",T="CONSIGNADO-INSS-REFINANCIAMENTO-2026-000981",ia={title:"Jornadas/Gravações",...L},m={name:"Padrão",parameters:{jornada:o},play:async({canvasElement:t,step:a})=>{const n=r(t);await e((await n.findAllByText(T)).length).toBeGreaterThan(0),await e(n.getByRole("link",{name:"Assistir PRP-58213"})).toBeInTheDocument(),await a("Buscar sem resultado e limpar",async()=>{await F(n.getByRole("searchbox",{name:"Buscar gravação"}),"nada-assim"),await e(await n.findByText("Nenhuma gravação com esta busca")).toBeInTheDocument(),await _.click(n.getByRole("button",{name:/Limpar/})),await j(()=>e(n.getAllByText(T).length).toBeGreaterThan(0))}),await s()}},c={parameters:{jornada:{...o,pendurar:[i]}},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText("Carregando gravações…")).toBeInTheDocument(),await e(a.queryByRole("button",{name:/Tentar de novo/})).not.toBeInTheDocument()}},p={parameters:{jornada:{...o,respostas:{[i]:{corpo:[]}}}},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText("Nenhuma gravação ainda")).toBeInTheDocument(),await s()}},l={name:"Erro do servidor",parameters:{jornada:{...o,falhar:[i]}},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText(/O servidor teve um problema ao carregar as gravações/)).toBeInTheDocument(),await e(a.queryByText(/api falsa|HTTP 500/)).not.toBeInTheDocument(),await _.click(a.getByRole("button",{name:/Tentar de novo/})),await e(await a.findByText(/O servidor teve um problema ao carregar as gravações/)).toBeInTheDocument(),await s()}},d={name:"Sem rede",parameters:{jornada:{...o,semRede:[i]}},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText(/Não foi possível carregar as gravações. Verifique a conexão/)).toBeInTheDocument(),await e(a.getByRole("button",{name:/Tentar de novo/})).toBeInTheDocument(),await s()}},u={name:"Erro: sem permissão (403)",parameters:{jornada:{...o,respostas:{[i]:{status:403,corpo:{erro:"proibido"}}}}},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText("Seu usuário não tem permissão para ver as gravações.")).toBeInTheDocument(),await e(a.queryByText(/HTTP 403/)).not.toBeInTheDocument(),await e(a.queryByRole("button",{name:/Tentar de novo/})).not.toBeInTheDocument(),await s()}},ma=["Padrao","Carregando","Vazio","ErroDoServidor","SemRede","SemPermissao"];var x,B,y;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Padrão",
  parameters: {
    jornada: CENARIO_ADMIN
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await expect((await tela.findAllByText(LONGA)).length).toBeGreaterThan(0);
    await expect(tela.getByRole("link", {
      name: "Assistir PRP-58213"
    })).toBeInTheDocument();
    await step("Buscar sem resultado e limpar", async () => {
      await digitar(tela.getByRole("searchbox", {
        name: "Buscar gravação"
      }), "nada-assim");
      await expect(await tela.findByText("Nenhuma gravação com esta busca")).toBeInTheDocument();
      await userEvent.click(tela.getByRole("button", {
        name: /Limpar/
      }));
      await waitFor(() => expect(tela.getAllByText(LONGA).length).toBeGreaterThan(0));
    });
    await semRotaSemFixture();
  }
}`,...(y=(B=m.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var w,v,g;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      pendurar: [LISTA]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Carregando gravações…")).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: /Tentar de novo/
    })).not.toBeInTheDocument();
  }
}`,...(g=(v=c.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var E,I,D;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      respostas: {
        [LISTA]: {
          corpo: []
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Nenhuma gravação ainda")).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(D=(I=p.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var h,f,A;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Erro do servidor",
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      falhar: [LISTA]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/O servidor teve um problema ao carregar as gravações/)).toBeInTheDocument();
    await expect(tela.queryByText(/api falsa|HTTP 500/)).not.toBeInTheDocument();
    await userEvent.click(tela.getByRole("button", {
      name: /Tentar de novo/
    }));
    await expect(await tela.findByText(/O servidor teve um problema ao carregar as gravações/)).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(A=(f=l.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var R,S,N;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Sem rede",
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      semRede: [LISTA]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/Não foi possível carregar as gravações. Verifique a conexão/)).toBeInTheDocument();
    await expect(tela.getByRole("button", {
      name: /Tentar de novo/
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(N=(S=d.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var O,b,P;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "Erro: sem permissão (403)",
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      respostas: {
        [LISTA]: {
          status: 403,
          corpo: {
            erro: "proibido"
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Seu usuário não tem permissão para ver as gravações.")).toBeInTheDocument();
    await expect(tela.queryByText(/HTTP 403/)).not.toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: /Tentar de novo/
    })).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(P=(b=u.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};export{c as Carregando,l as ErroDoServidor,m as Padrao,u as SemPermissao,d as SemRede,p as Vazio,ma as __namedExportsOrder,ia as default};
