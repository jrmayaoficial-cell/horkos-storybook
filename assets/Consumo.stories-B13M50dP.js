import{j as S}from"./jsx-runtime-LisX3rK8.js";import{q as me,s as le,H as I,u as ue,v as pe}from"./ShellJornada-Dgh5lNwl.js";import{C as i,a as de,m as we}from"./jornadaAdmin-CLLdLoBa.js";import{t as o,s as r}from"./jornadaOperar-KFe5MV34.js";import"./iframe-BdU_T5oy.js";import"./preload-helper-D6kgxu3v.js";import"./dadosShell-BcNk8iPy.js";import"./index-CgNm8H17.js";import"./index-Btzdtu00.js";import"./v2-CM7H6-dT.js";import"./index-CMRJCVye.js";import"./api-CwvJBfED.js";import"./index-BzbWG0gl.js";import"./marca-DxEKL4Wo.js";import"./carregando-D8G0VTz-.js";import"./celulas-Dr8LTnjB.js";/* empty css              */import"./CartaoKpi-R9o-Wt_g.js";import"./MiniBarras-D5N647Cu.js";import"./cores-D-iLqYVd.js";import"./Login-NjTeVjtw.js";import"./etapas-BWlkTKG-.js";/* empty css                */import"./ShellGestao-BptqWqVG.js";const{expect:a,userEvent:R,waitFor:xe,within:s}=__STORYBOOK_MODULE_TEST__,Be=we("/consumo",'Jornada de Consumo dentro do shell. Até 899 px cada mês é um cartão com as métricas em pares rótulo/valor; a partir de 900 px, a tabela de 12 meses. O cartão "Seu plano" tem a barra de minutos com valor e máximo, e a falha dele aparece no próprio cartão sem derrubar o mês a mês. Ano sem consumo diz "Sem consumo em <ano>" em vez de zeros.'),p="GET /v1/consumo-mensal",d="GET /v1/faturamento",m=new Date().getFullYear(),ze={title:"Jornadas/Consumo",...Be};async function u(t){await a((await t.findAllByText("Sessões concluídas")).length).toBeGreaterThan(0)}async function ce(t,e){await R.click(s(t.getByRole("group",{name:"Ano"})).getByRole("button",{name:String(e)}))}const w=I.getFullYear(),x={name:"Padrão (admin)",parameters:{jornada:i},play:async({canvasElement:t,step:e})=>{const n=o(t);await u(n);const l=await n.findByRole("progressbar",{name:"Minutos de Vera IA usados da franquia"});await a(l).toHaveAttribute("aria-valuemax"),await a(l).toHaveAttribute("aria-valuenow"),await a(n.queryByText("LLM (tokens E/S)")).not.toBeInTheDocument(),await a(n.getAllByRole("heading",{level:1}).length).toBeLessThanOrEqual(1),await e("Trocar o ano mostra o ano escolhido",async()=>{await ce(n,m-1),await a(await n.findByRole("heading",{name:`Consumo mês a mês · ${m-1}`})).toBeInTheDocument(),await u(n),await a(n.getAllByText("Dezembro").length).toBeGreaterThan(0)}),await r()}},B={name:"Padrão do ano corrente (hoje fixo em 15/08/2026)",decorators:[t=>S.jsx(le.Provider,{value:()=>I,children:S.jsx(t,{})})],parameters:{jornada:{...i,respostas:{[p]:{corpo:me(I)}}}},play:async({canvasElement:t,step:e})=>{const n=o(t);await u(n),await a(await n.findByRole("heading",{name:`Consumo mês a mês · ${w}`})).toBeInTheDocument();const l=s(n.getByRole("region",{name:"Seu plano, mês atual"}));for(const c of["Franquia","Cobrança até agora","Projeção","Licenças"])await a(await l.findByRole("heading",{level:3,name:c})).toBeInTheDocument();await e("Mês futuro mostra travessão e fica fora do gráfico",async()=>{await a(n.getAllByText("—").length).toBeGreaterThan(0);const c=n.getByRole("table",{name:`Sessões concluídas por mês, ${w}`});await a(s(c).getAllByRole("row")).toHaveLength(9),await a(s(c).queryByText(`Setembro de ${w}`)).not.toBeInTheDocument()}),await e("Trocar a série mostra chamadas realizadas",async()=>{const c=s(n.getByRole("group",{name:"Série do gráfico"}));await a(c.getByRole("button",{name:"Sessões concluídas"})).toHaveAttribute("aria-pressed","true"),await R.click(c.getByRole("button",{name:"Chamadas realizadas"})),await a(c.getByRole("button",{name:"Chamadas realizadas"})).toHaveAttribute("aria-pressed","true"),await a(n.getByRole("table",{name:`Chamadas realizadas por mês, ${w}`})).toBeInTheDocument()}),await a(n.getAllByText("1.437").length).toBeGreaterThan(0),await r()}},y={name:"Padrão do ano anterior: 12 meses",play:async({canvasElement:t})=>{const e=o(t);await u(e),await ce(e,m-1),await a(await e.findByRole("heading",{name:`Consumo mês a mês · ${m-1}`})).toBeInTheDocument();const n=await e.findByRole("table",{name:`Sessões concluídas por mês, ${m-1}`});await a(s(n).getAllByRole("row")).toHaveLength(13),await a(e.queryByText("—")).not.toBeInTheDocument(),await r()}},T={name:"Excedente de licença",parameters:{jornada:{...i,respostas:{[d]:{corpo:ue()}}}},play:async({canvasElement:t})=>{const e=o(t),n=s(await e.findByRole("region",{name:"Licenças"}));await a(n.getByText("22 de 20")).toBeInTheDocument(),await a(n.getByText("2 excedentes, cobradas na fatura")).toBeInTheDocument();const l=s(e.getByRole("region",{name:"Projeção"}));await a(l.getByText(/26\.847,60/)).toBeInTheDocument(),await r()}},E={name:"Padrão (super): métricas de custo e atalho para o Faturamento",parameters:{jornada:de},play:async({canvasElement:t})=>{const e=o(t);await u(e),await a(e.getAllByText("LLM (tokens E/S)").length).toBeGreaterThan(0),await a(await e.findByRole("button",{name:"Ajustar franquia no Faturamento"})).toBeInTheDocument(),await r()}},g={parameters:{jornada:{...i,pendurar:[p,d]}},play:async({canvasElement:t})=>{const e=o(t);await a(await e.findByText("Carregando o consumo mensal…")).toBeInTheDocument(),await a(e.getByText("Carregando o seu plano…")).toBeInTheDocument(),await a(e.queryByRole("button",{name:/Tentar de novo/})).not.toBeInTheDocument()}},h={name:"Vazio: ano sem consumo",parameters:{jornada:{...i,respostas:{[p]:{corpo:pe(m)}}}},play:async({canvasElement:t})=>{const e=o(t);await a(await e.findByText(`Sem consumo em ${m}.`)).toBeInTheDocument(),await a(e.queryByText("Sessões concluídas")).not.toBeInTheDocument(),await r()}},D={name:"Erro do servidor",parameters:{jornada:{...i,falhar:[p]}},play:async({canvasElement:t})=>{const e=o(t);await a(await e.findByText(/O servidor teve um problema ao carregar o consumo mensal/)).toBeInTheDocument(),await a(e.queryByText(/api falsa|HTTP 500/)).not.toBeInTheDocument(),await a(await e.findByRole("progressbar")).toBeInTheDocument(),await R.click(e.getByRole("button",{name:/Tentar de novo/})),await a(await e.findByText(/O servidor teve um problema ao carregar o consumo mensal/)).toBeInTheDocument(),await r()}},A={name:"Erro só no cartão Seu plano",parameters:{jornada:{...i,falhar:[d]}},play:async({canvasElement:t})=>{const e=o(t);await u(e);const n=s(e.getByRole("region",{name:"Seu plano, mês atual"}));await a(await n.findByText(/O servidor teve um problema ao carregar o seu plano/)).toBeInTheDocument(),await a(n.getByRole("button",{name:/Tentar de novo/})).toBeInTheDocument(),await r()}},v={name:"Sem rede",parameters:{jornada:{...i,semRede:[p,d]}},play:async({canvasElement:t})=>{const e=o(t);await a(await e.findByText(/Não foi possível carregar o consumo mensal. Verifique a conexão/)).toBeInTheDocument(),await a(await e.findByText(/Não foi possível carregar o seu plano. Verifique a conexão/)).toBeInTheDocument(),await xe(()=>a(e.getAllByRole("button",{name:/Tentar de novo/})).toHaveLength(2)),await r()}},f={name:"Erro: sem permissão (403)",parameters:{jornada:{...i,respostas:{[p]:{status:403,corpo:{erro:"proibido"}},[d]:{status:403,corpo:{erro:"proibido"}}}}},play:async({canvasElement:t})=>{const e=o(t);await a(await e.findByText("Seu usuário não tem permissão para ver o consumo mensal.")).toBeInTheDocument(),await a(e.queryByRole("button",{name:/Tentar de novo/})).not.toBeInTheDocument(),await a(e.queryByText(/o seu plano/)).not.toBeInTheDocument(),await r()}},$e=["Padrao","AnoCorrenteDataFixa","AnoAnterior","ExcedenteDeLicenca","SuperPadrao","Carregando","Vazio","ErroDoServidor","ErroDoPlano","SemRede","SemPermissao"];var O,b,N;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
      await escolherAno(tela, ANO - 1);
      await expect(await tela.findByRole("heading", {
        name: \`Consumo mês a mês · \${ANO - 1}\`
      })).toBeInTheDocument();
      await esperarMeses(tela);
      await expect(tela.getAllByText("Dezembro").length).toBeGreaterThan(0);
    });
    await semRotaSemFixture();
  }
}`,...(N=(b=x.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};var C,M,F;B.parameters={...B.parameters,docs:{...(C=B.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Padrão do ano corrente (hoje fixo em 15/08/2026)",
  decorators: [Historia => <RelogioDoConsumo.Provider value={() => HOJE_FIXO_CONSUMO}><Historia /></RelogioDoConsumo.Provider>],
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      respostas: {
        [MESES]: {
          corpo: consumoMensalAte(HOJE_FIXO_CONSUMO)
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await esperarMeses(tela);
    await expect(await tela.findByRole("heading", {
      name: \`Consumo mês a mês · \${ANO_FIXO}\`
    })).toBeInTheDocument();
    const plano = within(tela.getByRole("region", {
      name: "Seu plano, mês atual"
    }));
    for (const kpi of ["Franquia", "Cobrança até agora", "Projeção", "Licenças"]) {
      await expect(await plano.findByRole("heading", {
        level: 3,
        name: kpi
      })).toBeInTheDocument();
    }
    await step("Mês futuro mostra travessão e fica fora do gráfico", async () => {
      await expect(tela.getAllByText("—").length).toBeGreaterThan(0);
      const oculta = tela.getByRole("table", {
        name: \`Sessões concluídas por mês, \${ANO_FIXO}\`
      });
      await expect(within(oculta).getAllByRole("row")).toHaveLength(1 + 8);
      await expect(within(oculta).queryByText(\`Setembro de \${ANO_FIXO}\`)).not.toBeInTheDocument();
    });
    await step("Trocar a série mostra chamadas realizadas", async () => {
      const serie = within(tela.getByRole("group", {
        name: "Série do gráfico"
      }));
      await expect(serie.getByRole("button", {
        name: "Sessões concluídas"
      })).toHaveAttribute("aria-pressed", "true");
      await userEvent.click(serie.getByRole("button", {
        name: "Chamadas realizadas"
      }));
      await expect(serie.getByRole("button", {
        name: "Chamadas realizadas"
      })).toHaveAttribute("aria-pressed", "true");
      await expect(tela.getByRole("table", {
        name: \`Chamadas realizadas por mês, \${ANO_FIXO}\`
      })).toBeInTheDocument();
    });
    await expect(tela.getAllByText("1.437").length).toBeGreaterThan(0);
    await semRotaSemFixture();
  }
}`,...(F=(M=B.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var j,P,L;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Padrão do ano anterior: 12 meses",
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await esperarMeses(tela);
    await escolherAno(tela, ANO - 1);
    await expect(await tela.findByRole("heading", {
      name: \`Consumo mês a mês · \${ANO - 1}\`
    })).toBeInTheDocument();
    const oculta = await tela.findByRole("table", {
      name: \`Sessões concluídas por mês, \${ANO - 1}\`
    });
    await expect(within(oculta).getAllByRole("row")).toHaveLength(1 + 12);
    await expect(tela.queryByText("—")).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(L=(P=y.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var _,q,H;T.parameters={...T.parameters,docs:{...(_=T.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Excedente de licença",
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      respostas: {
        [PLANO]: {
          corpo: planoComExcedenteDeLicenca()
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    const licencas = within(await tela.findByRole("region", {
      name: "Licenças"
    }));
    await expect(licencas.getByText("22 de 20")).toBeInTheDocument();
    await expect(licencas.getByText("2 excedentes, cobradas na fatura")).toBeInTheDocument();
    const projecao = within(tela.getByRole("region", {
      name: "Projeção"
    }));
    await expect(projecao.getByText(/26\\.847,60/)).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(H=(q=T.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var z,$,J;E.parameters={...E.parameters,docs:{...(z=E.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(J=($=E.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var k,V,G;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(G=(V=g.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var X,U,Y;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Y=(U=h.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var K,Q,W;D.parameters={...D.parameters,docs:{...(K=D.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(W=(Q=D.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var Z,ee,ae;A.parameters={...A.parameters,docs:{...(Z=A.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ae=(ee=A.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ne,oe;v.parameters={...v.parameters,docs:{...(te=v.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(oe=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var re,se,ie;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ie=(se=f.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};export{y as AnoAnterior,B as AnoCorrenteDataFixa,g as Carregando,A as ErroDoPlano,D as ErroDoServidor,T as ExcedenteDeLicenca,x as Padrao,f as SemPermissao,v as SemRede,E as SuperPadrao,h as Vazio,$e as __namedExportsOrder,ze as default};
