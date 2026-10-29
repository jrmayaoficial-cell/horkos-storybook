import{c as k}from"./ShellJornada-BhmpHafi.js";import{C as r,a as $,m as U}from"./jornadaAdmin-Dcp0-fCf.js";import{t as o,s}from"./jornadaOperar-DoJW5foJ.js";import"./jsx-runtime-Bs_0p5zD.js";import"./iframe-DuQYyiCW.js";import"./preload-helper-D6kgxu3v.js";import"./dadosShell-DQKYzqPR.js";import"./index-NyezkBrm.js";import"./index-BGS7Qo4C.js";import"./v2-Ez4nyj0x.js";import"./index-D3ZqoiZi.js";import"./api-CwdEbqb0.js";import"./index-uCLBKUYa.js";import"./marca-0GV3HRL3.js";import"./carregando-DOTRDj5N.js";import"./celulas-lNODG2t2.js";/* empty css              */import"./MiniBarras-cCiWucG-.js";import"./paleta-B-duPMKZ.js";import"./Login-BakOtekO.js";/* empty css                */import"./ShellGestao-D_7LxVSx.js";const{expect:a,userEvent:G,waitFor:Y,within:K}=__STORYBOOK_MODULE_TEST__,Q=U("/consumo",'Jornada de Consumo dentro do shell. Até 899 px cada mês é um cartão com as métricas em pares rótulo/valor; a partir de 900 px, a tabela de 12 meses. O cartão "Seu plano" tem a barra de minutos com valor e máximo, e a falha dele aparece no próprio cartão sem derrubar o mês a mês. Ano sem consumo diz "Sem consumo em <ano>" em vez de zeros.'),m="GET /v1/consumo-mensal",T="GET /v1/faturamento",B=new Date().getFullYear(),Ee={title:"Jornadas/Consumo",...Q};async function x(t){await a((await t.findAllByText("Sessões concluídas")).length).toBeGreaterThan(0)}const i={name:"Padrão (admin)",parameters:{jornada:r},play:async({canvasElement:t,step:e})=>{const n=o(t);await x(n);const E=await n.findByRole("progressbar",{name:"Minutos de Vera IA usados da franquia"});await a(E).toHaveAttribute("aria-valuemax"),await a(E).toHaveAttribute("aria-valuenow"),await a(n.queryByText("LLM (tokens E/S)")).not.toBeInTheDocument(),await a(n.getAllByRole("heading",{level:1}).length).toBeLessThanOrEqual(1),await e("Trocar o ano mostra o ano escolhido",async()=>{await G.selectOptions(n.getByLabelText("Ano"),String(B-1)),await a(await n.findByRole("heading",{name:`Consumo mês a mês · ${B-1}`})).toBeInTheDocument(),await x(n),await a(n.getAllByText("Dezembro").length).toBeGreaterThan(0)}),await s()}},c={name:"Padrão (super): métricas de custo e atalho para o Faturamento",parameters:{jornada:$},play:async({canvasElement:t})=>{const e=o(t);await x(e),await a(e.getAllByText("LLM (tokens E/S)").length).toBeGreaterThan(0),await a(await e.findByRole("button",{name:"Ajustar franquia no Faturamento"})).toBeInTheDocument(),await s()}},l={parameters:{jornada:{...r,pendurar:[m,T]}},play:async({canvasElement:t})=>{const e=o(t);await a(await e.findByText("Carregando o consumo mensal…")).toBeInTheDocument(),await a(e.getByText("Carregando o seu plano…")).toBeInTheDocument(),await a(e.queryByRole("button",{name:/Tentar de novo/})).not.toBeInTheDocument()}},u={name:"Vazio: ano sem consumo",parameters:{jornada:{...r,respostas:{[m]:{corpo:k(B)}}}},play:async({canvasElement:t})=>{const e=o(t);await a(await e.findByText(`Sem consumo em ${B}.`)).toBeInTheDocument(),await a(e.queryByText("Sessões concluídas")).not.toBeInTheDocument(),await s()}},p={name:"Erro do servidor",parameters:{jornada:{...r,falhar:[m]}},play:async({canvasElement:t})=>{const e=o(t);await a(await e.findByText(/O servidor teve um problema ao carregar o consumo mensal/)).toBeInTheDocument(),await a(e.queryByText(/api falsa|HTTP 500/)).not.toBeInTheDocument(),await a(await e.findByRole("progressbar")).toBeInTheDocument(),await G.click(e.getByRole("button",{name:/Tentar de novo/})),await a(await e.findByText(/O servidor teve um problema ao carregar o consumo mensal/)).toBeInTheDocument(),await s()}},d={name:"Erro só no cartão Seu plano",parameters:{jornada:{...r,falhar:[T]}},play:async({canvasElement:t})=>{const e=o(t);await x(e);const n=K(e.getByRole("region",{name:"Seu plano, mês atual"}));await a(await n.findByText(/O servidor teve um problema ao carregar o seu plano/)).toBeInTheDocument(),await a(n.getByRole("button",{name:/Tentar de novo/})).toBeInTheDocument(),await s()}},w={name:"Sem rede",parameters:{jornada:{...r,semRede:[m,T]}},play:async({canvasElement:t})=>{const e=o(t);await a(await e.findByText(/Não foi possível carregar o consumo mensal. Verifique a conexão/)).toBeInTheDocument(),await a(await e.findByText(/Não foi possível carregar o seu plano. Verifique a conexão/)).toBeInTheDocument(),await Y(()=>a(e.getAllByRole("button",{name:/Tentar de novo/})).toHaveLength(2)),await s()}},y={name:"Erro: sem permissão (403)",parameters:{jornada:{...r,respostas:{[m]:{status:403,corpo:{erro:"proibido"}},[T]:{status:403,corpo:{erro:"proibido"}}}}},play:async({canvasElement:t})=>{const e=o(t);await a(await e.findByText("Seu usuário não tem permissão para ver o consumo mensal.")).toBeInTheDocument(),await a(e.queryByRole("button",{name:/Tentar de novo/})).not.toBeInTheDocument(),await a(e.queryByText(/o seu plano/)).not.toBeInTheDocument(),await s()}},he=["Padrao","SuperPadrao","Carregando","Vazio","ErroDoServidor","ErroDoPlano","SemRede","SemPermissao"];var h,v,D;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Padrão (admin)",
  parameters: {
    jornada: CENARIO_ADMIN
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await esperarMeses(tela);
    const barra = await tela.findByRole("progressbar", {
      name: "Minutos de Vera IA usados da franquia"
    });
    await expect(barra).toHaveAttribute("aria-valuemax");
    await expect(barra).toHaveAttribute("aria-valuenow");
    await expect(tela.queryByText("LLM (tokens E/S)")).not.toBeInTheDocument();
    await expect(tela.getAllByRole("heading", {
      level: 1
    }).length).toBeLessThanOrEqual(1);
    await step("Trocar o ano mostra o ano escolhido", async () => {
      await userEvent.selectOptions(tela.getByLabelText("Ano"), String(ANO - 1));
      await expect(await tela.findByRole("heading", {
        name: \`Consumo mês a mês · \${ANO - 1}\`
      })).toBeInTheDocument();
      await esperarMeses(tela);
      await expect(tela.getAllByText("Dezembro").length).toBeGreaterThan(0);
    });
    await semRotaSemFixture();
  }
}`,...(D=(v=i.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var g,S,I;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Padrão (super): métricas de custo e atalho para o Faturamento",
  parameters: {
    jornada: CENARIO_SUPER
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await esperarMeses(tela);
    await expect(tela.getAllByText("LLM (tokens E/S)").length).toBeGreaterThan(0);
    await expect(await tela.findByRole("button", {
      name: "Ajustar franquia no Faturamento"
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(I=(S=c.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var f,A,R;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      pendurar: [MESES, PLANO]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Carregando o consumo mensal…")).toBeInTheDocument();
    await expect(tela.getByText("Carregando o seu plano…")).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: /Tentar de novo/
    })).not.toBeInTheDocument();
  }
}`,...(R=(A=l.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var b,O,N;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Vazio: ano sem consumo",
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      respostas: {
        [MESES]: {
          corpo: consumoMensalVazio(ANO)
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(\`Sem consumo em \${ANO}.\`)).toBeInTheDocument();
    await expect(tela.queryByText("Sessões concluídas")).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(N=(O=u.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var M,q,C;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Erro do servidor",
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      falhar: [MESES]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/O servidor teve um problema ao carregar o consumo mensal/)).toBeInTheDocument();
    await expect(tela.queryByText(/api falsa|HTTP 500/)).not.toBeInTheDocument();
    await expect(await tela.findByRole("progressbar")).toBeInTheDocument();
    await userEvent.click(tela.getByRole("button", {
      name: /Tentar de novo/
    }));
    await expect(await tela.findByText(/O servidor teve um problema ao carregar o consumo mensal/)).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(C=(q=p.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};var P,L,j;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Erro só no cartão Seu plano",
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      falhar: [PLANO]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await esperarMeses(tela);
    const plano = within(tela.getByRole("region", {
      name: "Seu plano, mês atual"
    }));
    await expect(await plano.findByText(/O servidor teve um problema ao carregar o seu plano/)).toBeInTheDocument();
    await expect(plano.getByRole("button", {
      name: /Tentar de novo/
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(j=(L=d.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var _,F,V;w.parameters={...w.parameters,docs:{...(_=w.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Sem rede",
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      semRede: [MESES, PLANO]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/Não foi possível carregar o consumo mensal. Verifique a conexão/)).toBeInTheDocument();
    await expect(await tela.findByText(/Não foi possível carregar o seu plano. Verifique a conexão/)).toBeInTheDocument();
    await waitFor(() => expect(tela.getAllByRole("button", {
      name: /Tentar de novo/
    })).toHaveLength(2));
    await semRotaSemFixture();
  }
}`,...(V=(F=w.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var z,H,J;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Erro: sem permissão (403)",
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      respostas: {
        [MESES]: {
          status: 403,
          corpo: {
            erro: "proibido"
          }
        },
        [PLANO]: {
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
    await expect(await tela.findByText("Seu usuário não tem permissão para ver o consumo mensal.")).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: /Tentar de novo/
    })).not.toBeInTheDocument();
    await expect(tela.queryByText(/o seu plano/)).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(J=(H=y.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};export{l as Carregando,d as ErroDoPlano,p as ErroDoServidor,i as Padrao,y as SemPermissao,w as SemRede,c as SuperPadrao,u as Vazio,he as __namedExportsOrder,Ee as default};
