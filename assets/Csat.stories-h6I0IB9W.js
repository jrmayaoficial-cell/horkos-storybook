import{g as q}from"./ShellJornada-BhmpHafi.js";import{C as o,m as J}from"./jornadaAdmin-Dcp0-fCf.js";import{t as r,s}from"./jornadaOperar-DoJW5foJ.js";import"./jsx-runtime-Bs_0p5zD.js";import"./iframe-DuQYyiCW.js";import"./preload-helper-D6kgxu3v.js";import"./dadosShell-DQKYzqPR.js";import"./index-NyezkBrm.js";import"./index-BGS7Qo4C.js";import"./v2-Ez4nyj0x.js";import"./index-D3ZqoiZi.js";import"./api-CwdEbqb0.js";import"./index-uCLBKUYa.js";import"./marca-0GV3HRL3.js";import"./carregando-DOTRDj5N.js";import"./celulas-lNODG2t2.js";/* empty css              */import"./MiniBarras-cCiWucG-.js";import"./paleta-B-duPMKZ.js";import"./Login-BakOtekO.js";/* empty css                */import"./ShellGestao-D_7LxVSx.js";const{expect:e,userEvent:w,waitFor:T}=__STORYBOOK_MODULE_TEST__,j=J("/csat","Jornada de CSAT dentro do shell: nota média, taxa de resposta, por canal, distribuição clicável que filtra as avaliações e a lista (cartões até 1023 px). Falha de carga diz o motivo em português, sem código; 403 diz quem acessa a página, sem Tentar de novo."),i="GET /v1/csat",sa={title:"Jornadas/CSAT",...j},m={name:"Padrão (admin)",parameters:{jornada:o},play:async({canvasElement:t,step:a})=>{const n=r(t);await e((await n.findAllByText("Joana Ribeiro")).length).toBeGreaterThan(0),await e(n.getAllByRole("heading",{level:1}).length).toBeLessThanOrEqual(1),await a("Filtrar por 2 estrelas e limpar",async()=>{const y=n.getByRole("button",{name:/^2 estrelas:/});await w.click(y),await T(()=>e(y).toHaveAttribute("aria-pressed","true")),await T(()=>e(n.queryAllByText("Joana Ribeiro")).toHaveLength(0)),await w.click(n.getAllByRole("button",{name:/Limpar filtro/})[0]),await e((await n.findAllByText("Joana Ribeiro")).length).toBeGreaterThan(0)}),await s()}},l={parameters:{jornada:{...o,pendurar:[i]}},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText("Carregando as avaliações…")).toBeInTheDocument(),await e(a.queryByRole("button",{name:/Tentar de novo/})).not.toBeInTheDocument()}},c={name:"Vazio: nenhuma avaliação no período",parameters:{jornada:{...o,respostas:{[i]:{corpo:q()}}}},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByRole("heading",{name:"Nenhuma avaliação nos últimos 30 dias"})).toBeInTheDocument(),await w.click(a.getByRole("button",{name:/Ver 90 dias/})),await e(await a.findByRole("heading",{name:"Nenhuma avaliação nos últimos 90 dias"})).toBeInTheDocument(),await s()}},p={name:"Erro do servidor",parameters:{jornada:{...o,falhar:[i]}},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText(/O servidor teve um problema ao carregar as avaliações/)).toBeInTheDocument(),await e(a.queryByText(/api falsa|HTTP 500/)).not.toBeInTheDocument(),await w.click(a.getByRole("button",{name:/Tentar de novo/})),await e(await a.findByText(/O servidor teve um problema ao carregar as avaliações/)).toBeInTheDocument(),await s()}},d={name:"Sem rede",parameters:{jornada:{...o,semRede:[i]}},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText(/Não foi possível carregar as avaliações. Verifique a conexão/)).toBeInTheDocument(),await e(a.getByRole("button",{name:/Tentar de novo/})).toBeInTheDocument(),await s()}},u={name:"Erro: sem permissão (403)",parameters:{jornada:{...o,respostas:{[i]:{status:403,corpo:{erro:"proibido"}}}}},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText("Apenas administradores e gerentes acessam esta página.")).toBeInTheDocument(),await e(a.queryByRole("button",{name:/Tentar de novo/})).not.toBeInTheDocument(),await s()}},ia=["Padrao","Carregando","Vazio","ErroDoServidor","SemRede","SemPermissao"];var x,B,v;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Padrão (admin)",
  parameters: {
    jornada: CENARIO_ADMIN
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await expect((await tela.findAllByText("Joana Ribeiro")).length).toBeGreaterThan(0);
    await expect(tela.getAllByRole("heading", {
      level: 1
    }).length).toBeLessThanOrEqual(1);
    await step("Filtrar por 2 estrelas e limpar", async () => {
      const duas = tela.getByRole("button", {
        name: /^2 estrelas:/
      });
      await userEvent.click(duas);
      await waitFor(() => expect(duas).toHaveAttribute("aria-pressed", "true"));
      await waitFor(() => expect(tela.queryAllByText("Joana Ribeiro")).toHaveLength(0));
      await userEvent.click(tela.getAllByRole("button", {
        name: /Limpar filtro/
      })[0]);
      await expect((await tela.findAllByText("Joana Ribeiro")).length).toBeGreaterThan(0);
    });
    await semRotaSemFixture();
  }
}`,...(v=(B=m.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var E,h,g;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      pendurar: [CSAT]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Carregando as avaliações…")).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: /Tentar de novo/
    })).not.toBeInTheDocument();
  }
}`,...(g=(h=l.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var R,D,A;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Vazio: nenhuma avaliação no período",
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      respostas: {
        [CSAT]: {
          corpo: respostaCsatVazia()
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByRole("heading", {
      name: "Nenhuma avaliação nos últimos 30 dias"
    })).toBeInTheDocument();
    await userEvent.click(tela.getByRole("button", {
      name: /Ver 90 dias/
    }));
    await expect(await tela.findByRole("heading", {
      name: "Nenhuma avaliação nos últimos 90 dias"
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(A=(D=c.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var f,I,b;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Erro do servidor",
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      falhar: [CSAT]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/O servidor teve um problema ao carregar as avaliações/)).toBeInTheDocument();
    await expect(tela.queryByText(/api falsa|HTTP 500/)).not.toBeInTheDocument();
    await userEvent.click(tela.getByRole("button", {
      name: /Tentar de novo/
    }));
    await expect(await tela.findByText(/O servidor teve um problema ao carregar as avaliações/)).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(b=(I=p.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var S,O,C;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Sem rede",
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      semRede: [CSAT]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/Não foi possível carregar as avaliações. Verifique a conexão/)).toBeInTheDocument();
    await expect(tela.getByRole("button", {
      name: /Tentar de novo/
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(C=(O=d.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var N,F,_;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Erro: sem permissão (403)",
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      respostas: {
        [CSAT]: {
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
    await expect(await tela.findByText("Apenas administradores e gerentes acessam esta página.")).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: /Tentar de novo/
    })).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(_=(F=u.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};export{l as Carregando,p as ErroDoServidor,m as Padrao,u as SemPermissao,d as SemRede,c as Vazio,ia as __namedExportsOrder,sa as default};
