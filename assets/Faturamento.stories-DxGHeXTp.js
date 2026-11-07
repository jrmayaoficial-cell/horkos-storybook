import{N as ra,O as sa}from"./ShellJornada-Dgh5lNwl.js";import{C as l,a as u,m as ia}from"./jornadaAdmin-CLLdLoBa.js";import{t as o,s,d as oa}from"./jornadaOperar-KFe5MV34.js";import"./jsx-runtime-LisX3rK8.js";import"./iframe-BdU_T5oy.js";import"./preload-helper-D6kgxu3v.js";import"./dadosShell-BcNk8iPy.js";import"./index-CgNm8H17.js";import"./index-Btzdtu00.js";import"./v2-CM7H6-dT.js";import"./index-CMRJCVye.js";import"./api-CwvJBfED.js";import"./index-BzbWG0gl.js";import"./marca-DxEKL4Wo.js";import"./carregando-D8G0VTz-.js";import"./celulas-Dr8LTnjB.js";/* empty css              */import"./CartaoKpi-R9o-Wt_g.js";import"./MiniBarras-D5N647Cu.js";import"./cores-D-iLqYVd.js";import"./Login-NjTeVjtw.js";import"./etapas-BWlkTKG-.js";/* empty css                */import"./ShellGestao-BptqWqVG.js";const{expect:e,userEvent:i,waitFor:v,within:ma}=__STORYBOOK_MODULE_TEST__,ca=ia("/faturamento",'Jornada de Faturamento dentro do shell. O admin vê só a Fatura, sem abas; o super tem 6 abas em pílula (Fatura, Simulador, Preços e margem, Ferramentas, Extrato do mês, Mês a mês) com 44 px até 899 px. A recarga depois de salvar não desmonta o formulário; a falha de carga e a falha de ação ficam em canais separados ("Fechar mês anterior" com erro mostra o aviso ao lado do botão); o erro do simulador aparece abaixo dos campos sem apagá-los.'),d="GET /v1/faturamento",la="POST /v1/faturamento/fechar",ua="GET /v1/faturamento/simulador",da="GET /v1/faturamento/ferramentas",pa="GET /v1/faturamento/extrato",ja={title:"Jornadas/Faturamento",...ca};async function c(n){await e(await n.findByText("Cobrança até agora")).toBeInTheDocument()}async function r(n,a){const t=await n.findByRole("tab",{name:a});await i.click(t),await v(()=>e(t).toHaveAttribute("aria-selected","true"))}const p={name:"Padrão (admin)",parameters:{jornada:l},play:async({canvasElement:n})=>{const a=o(n);await c(a),await e(a.getAllByRole("heading",{name:"Faturamento"})).toHaveLength(1),await e(a.getByRole("heading",{level:1,name:"Faturamento"})).toBeInTheDocument(),await e(a.getByText(/^competência .* · corte no fuso de Brasília$/).tagName).toBe("P"),await e(a.getByRole("heading",{level:2,name:"Faturas fechadas"})).toBeInTheDocument(),await e(a.getByText("22 ativos de 20 inclusos")).toBeInTheDocument(),await e(a.getByText("2 excedentes")).toBeInTheDocument();const t=a.getByRole("button",{name:/^Ver fatura de /});await i.click(t),await e(await a.findByRole("button",{name:/^Esconder fatura de /})).toHaveAttribute("aria-expanded","true"),await e(a.getByRole("button",{name:/^Imprimir fatura de /})).toHaveTextContent("Imprimir"),await i.click(a.getByRole("button",{name:/^Esconder fatura de /})),await e(a.getByRole("button",{name:/^Ver fatura de /})).toHaveAttribute("aria-expanded","false"),await e(a.queryByRole("tablist",{name:"Seções do faturamento"})).not.toBeInTheDocument(),await e(a.queryByRole("button",{name:"Fechar mês anterior"})).not.toBeInTheDocument(),await e(a.queryByText("Custo e lucro (só super)")).not.toBeInTheDocument(),await s()}},w={name:"Padrão (super): abas, plano e fechar o mês",parameters:{jornada:u},play:async({canvasElement:n,step:a})=>{const t=o(n);await c(t),await e(t.getAllByRole("tab")).toHaveLength(6),await a("Salvar plano: o formulário fica montado",async()=>{const m=t.getByLabelText("Minutos de Vera IA");await oa(m,"20000"),await i.click(t.getByRole("button",{name:"Salvar plano"})),await e(await t.findByText("Plano salvo.")).toBeInTheDocument(),await e(t.getByLabelText("Minutos de Vera IA")).toBe(m)}),await a("Fechar mês anterior: a fatura nova entra na lista",async()=>{const m=t.getAllByRole("button",{name:/^Ver fatura de /}).length;await i.click(t.getByRole("button",{name:"Fechar mês anterior"})),await v(()=>e(t.getAllByRole("button",{name:/^Ver fatura de /}).length).toBe(m+1))}),await a("Abas do super: cada uma abre",async()=>{await r(t,"Simulador"),await e(await t.findByText("1. O que o cliente consome")).toBeInTheDocument(),await r(t,"Preços e margem"),await e(await t.findByText("Vera IA · custo, preço e margem por minuto")).toBeInTheDocument(),await r(t,"Ferramentas"),await e(await t.findByText("Consultar fornecedores agora")).toBeInTheDocument(),await r(t,"Extrato do mês"),await e((await t.findAllByText("Chamada com a Vera IA")).length).toBeGreaterThan(0),await r(t,"Mês a mês"),await e(t.queryByText("Carregando os fechamentos")).not.toBeInTheDocument(),await v(()=>e(t.queryByRole("alert")).not.toBeInTheDocument()),await r(t,"Fatura"),await c(t)}),await s()}},B={name:"Simulador (super)",parameters:{jornada:u},play:async({canvasElement:n})=>{const a=o(n);await r(a,"Simulador");const t=await a.findByLabelText("Minutos de Vera IA");await oa(t,"12000"),await e(await a.findByText("3. A proposta")).toBeInTheDocument(),await i.click(a.getByRole("button",{name:"Por propostas"})),await e(a.getByRole("button",{name:"Por propostas"})).toHaveAttribute("aria-pressed","true"),await s()}},y={name:"Erro ao fechar o mês: aviso ao lado do botão",parameters:{jornada:{...u,respostas:{[la]:{status:409,corpo:{erro:"A competência anterior já está fechada."}}}}},play:async({canvasElement:n})=>{const a=o(n);await c(a),await i.click(a.getByRole("button",{name:"Fechar mês anterior"}));const t=await a.findByText("A competência anterior já está fechada.");await e(t.closest('[role="alert"]')).not.toBeNull(),await e(a.getByRole("region",{name:"Faturas fechadas"})).toContainElement(t),await e(a.getByRole("button",{name:"Salvar plano"})).toBeInTheDocument(),await e(a.getByText("Cobrança até agora")).toBeInTheDocument(),await s()}},x={name:"Erro do simulador: alerta abaixo dos campos",parameters:{jornada:{...u,falhar:[ua]}},play:async({canvasElement:n})=>{const a=o(n);await r(a,"Simulador");const t=await a.findByLabelText("Minutos de Vera IA"),m=await a.findByText(/Não foi possível simular com estes valores agora/);await e(m.closest('[role="alert"]')).not.toBeNull(),await e(a.queryByText(/api falsa/)).not.toBeInTheDocument(),await e(a.getByLabelText("Minutos de Vera IA")).toBe(t),await i.type(t,"0"),await v(()=>e(a.queryByText(/Não foi possível simular com estes valores agora/)).not.toBeInTheDocument()),await s()}},f={parameters:{jornada:{...l,pendurar:[d]}},play:async({canvasElement:n})=>{const a=o(n);await e(await a.findByText("Carregando o faturamento…")).toBeInTheDocument(),await e(a.queryByRole("button",{name:/Tentar de novo/})).not.toBeInTheDocument()}},T={name:"Vazio: nenhuma fatura fechada",parameters:{jornada:{...l,respostas:{[d]:{corpo:{...ra(sa(),!1),faturas:[]}}}}},play:async({canvasElement:n})=>{const a=o(n);await c(a),await e(a.getByText(/nenhuma fatura fechada ainda/)).toBeInTheDocument(),await e(a.queryByRole("button",{name:/^Ver fatura de /})).not.toBeInTheDocument(),await e(a.queryByRole("button",{name:/Tentar de novo/})).not.toBeInTheDocument(),await s()}},E={name:"Erro do servidor",parameters:{jornada:{...l,falhar:[d]}},play:async({canvasElement:n})=>{const a=o(n);await e(await a.findByText(/O servidor teve um problema ao carregar o faturamento/)).toBeInTheDocument(),await e(a.queryByText(/api falsa/)).not.toBeInTheDocument(),await i.click(a.getByRole("button",{name:/Tentar de novo/})),await e(await a.findByText(/O servidor teve um problema ao carregar o faturamento/)).toBeInTheDocument(),await s()}},h={name:"Sem rede",parameters:{jornada:{...l,semRede:[d]}},play:async({canvasElement:n})=>{const a=o(n);await e(await a.findByText(/Não foi possível carregar o faturamento. Verifique a conexão/)).toBeInTheDocument(),await e(a.getByRole("button",{name:/Tentar de novo/})).toBeInTheDocument(),await s()}},g={name:"Erro: sem permissão (403)",parameters:{jornada:{...l,respostas:{[d]:{status:403,corpo:{erro:"seu perfil não tem esta permissão"}}}}},play:async({canvasElement:n})=>{const a=o(n);await e(await a.findByText("Seu usuário não tem permissão para ver o faturamento.")).toBeInTheDocument(),await e(a.queryByRole("button",{name:/Tentar de novo/})).not.toBeInTheDocument(),await s()}},b={name:"Subabas do super com falha de carga",parameters:{jornada:{...u,falhar:[da],semRede:[pa]}},play:async({canvasElement:n})=>{const a=o(n);await c(a),await r(a,"Ferramentas"),await e(await a.findByText(/O servidor teve um problema ao carregar o consumo de ferramentas/)).toBeInTheDocument(),await r(a,"Extrato do mês");const t=ma(a.getByRole("tabpanel"));await e(await t.findByText(/Não foi possível carregar o extrato do mês. Verifique a conexão/)).toBeInTheDocument(),await e(t.getByRole("button",{name:/Tentar de novo/})).toBeInTheDocument(),await s()}},La=["Padrao","SuperPadrao","Simulador","ErroAoFecharMes","ErroDoSimulador","Carregando","Vazio","ErroDoServidor","SemRede","SemPermissao","SubabasComErro"];var I,R,A;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Padrão (admin)",
  parameters: {
    jornada: CENARIO_ADMIN
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await esperarFatura(tela);
    await expect(tela.getAllByRole("heading", {
      name: "Faturamento"
    })).toHaveLength(1);
    await expect(tela.getByRole("heading", {
      level: 1,
      name: "Faturamento"
    })).toBeInTheDocument();
    await expect(tela.getByText(/^competência .* · corte no fuso de Brasília$/).tagName).toBe("P");
    await expect(tela.getByRole("heading", {
      level: 2,
      name: "Faturas fechadas"
    })).toBeInTheDocument();
    await expect(tela.getByText("22 ativos de 20 inclusos")).toBeInTheDocument();
    await expect(tela.getByText("2 excedentes")).toBeInTheDocument();
    const ver = tela.getByRole("button", {
      name: /^Ver fatura de /
    });
    await userEvent.click(ver);
    await expect(await tela.findByRole("button", {
      name: /^Esconder fatura de /
    })).toHaveAttribute("aria-expanded", "true");
    await expect(tela.getByRole("button", {
      name: /^Imprimir fatura de /
    })).toHaveTextContent("Imprimir");
    await userEvent.click(tela.getByRole("button", {
      name: /^Esconder fatura de /
    }));
    await expect(tela.getByRole("button", {
      name: /^Ver fatura de /
    })).toHaveAttribute("aria-expanded", "false");
    await expect(tela.queryByRole("tablist", {
      name: "Seções do faturamento"
    })).not.toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: "Fechar mês anterior"
    })).not.toBeInTheDocument();
    await expect(tela.queryByText("Custo e lucro (só super)")).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(A=(R=p.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var D,S,F;w.parameters={...w.parameters,docs:{...(D=w.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Padrão (super): abas, plano e fechar o mês",
  parameters: {
    jornada: CENARIO_SUPER
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await esperarFatura(tela);
    await expect(tela.getAllByRole("tab")).toHaveLength(6);
    await step("Salvar plano: o formulário fica montado", async () => {
      const minutos = tela.getByLabelText("Minutos de Vera IA");
      await digitar(minutos, "20000");
      await userEvent.click(tela.getByRole("button", {
        name: "Salvar plano"
      }));
      await expect(await tela.findByText("Plano salvo.")).toBeInTheDocument();
      await expect(tela.getByLabelText("Minutos de Vera IA")).toBe(minutos);
    });
    await step("Fechar mês anterior: a fatura nova entra na lista", async () => {
      const antes = tela.getAllByRole("button", {
        name: /^Ver fatura de /
      }).length;
      await userEvent.click(tela.getByRole("button", {
        name: "Fechar mês anterior"
      }));
      await waitFor(() => expect(tela.getAllByRole("button", {
        name: /^Ver fatura de /
      }).length).toBe(antes + 1));
    });
    await step("Abas do super: cada uma abre", async () => {
      await abrirAba(tela, "Simulador");
      await expect(await tela.findByText("1. O que o cliente consome")).toBeInTheDocument();
      await abrirAba(tela, "Preços e margem");
      await expect(await tela.findByText("Vera IA · custo, preço e margem por minuto")).toBeInTheDocument();
      await abrirAba(tela, "Ferramentas");
      await expect(await tela.findByText("Consultar fornecedores agora")).toBeInTheDocument();
      await abrirAba(tela, "Extrato do mês");
      await expect((await tela.findAllByText("Chamada com a Vera IA")).length).toBeGreaterThan(0);
      await abrirAba(tela, "Mês a mês");
      await expect(tela.queryByText("Carregando os fechamentos")).not.toBeInTheDocument();
      await waitFor(() => expect(tela.queryByRole("alert")).not.toBeInTheDocument());
      await abrirAba(tela, "Fatura");
      await esperarFatura(tela);
    });
    await semRotaSemFixture();
  }
}`,...(F=(S=w.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var N,O,C;B.parameters={...B.parameters,docs:{...(N=B.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Simulador (super)",
  parameters: {
    jornada: CENARIO_SUPER
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await abrirAba(tela, "Simulador");
    const minutos = await tela.findByLabelText("Minutos de Vera IA");
    await digitar(minutos, "12000");
    await expect(await tela.findByText("3. A proposta")).toBeInTheDocument();
    await userEvent.click(tela.getByRole("button", {
      name: "Por propostas"
    }));
    await expect(tela.getByRole("button", {
      name: "Por propostas"
    })).toHaveAttribute("aria-pressed", "true");
    await semRotaSemFixture();
  }
}`,...(C=(O=B.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var P,V,q;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Erro ao fechar o mês: aviso ao lado do botão",
  parameters: {
    jornada: {
      ...CENARIO_SUPER,
      respostas: {
        [FECHAR]: {
          status: 409,
          corpo: {
            erro: "A competência anterior já está fechada."
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await esperarFatura(tela);
    await userEvent.click(tela.getByRole("button", {
      name: "Fechar mês anterior"
    }));
    const alerta = await tela.findByText("A competência anterior já está fechada.");
    await expect(alerta.closest('[role="alert"]')).not.toBeNull();
    await expect(tela.getByRole("region", {
      name: "Faturas fechadas"
    })).toContainElement(alerta);
    await expect(tela.getByRole("button", {
      name: "Salvar plano"
    })).toBeInTheDocument();
    await expect(tela.getByText("Cobrança até agora")).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(q=(V=y.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var M,j,L;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Erro do simulador: alerta abaixo dos campos",
  parameters: {
    jornada: {
      ...CENARIO_SUPER,
      falhar: [SIMULAR]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await abrirAba(tela, "Simulador");
    const minutos = await tela.findByLabelText("Minutos de Vera IA");
    const alerta = await tela.findByText(/Não foi possível simular com estes valores agora/);
    await expect(alerta.closest('[role="alert"]')).not.toBeNull();
    await expect(tela.queryByText(/api falsa/)).not.toBeInTheDocument();
    await expect(tela.getByLabelText("Minutos de Vera IA")).toBe(minutos);
    await userEvent.type(minutos, "0");
    await waitFor(() => expect(tela.queryByText(/Não foi possível simular com estes valores agora/)).not.toBeInTheDocument());
    await semRotaSemFixture();
  }
}`,...(L=(j=x.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var _,k,H;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      pendurar: [PAINEL]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Carregando o faturamento…")).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: /Tentar de novo/
    })).not.toBeInTheDocument();
  }
}`,...(H=(k=f.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};var J,U,G;T.parameters={...T.parameters,docs:{...(J=T.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: "Vazio: nenhuma fatura fechada",
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      respostas: {
        [PAINEL]: {
          corpo: {
            ...painelFaturamento(estadoFaturamento(), false),
            faturas: []
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await esperarFatura(tela);
    await expect(tela.getByText(/nenhuma fatura fechada ainda/)).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: /^Ver fatura de /
    })).not.toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: /Tentar de novo/
    })).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(G=(U=T.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var z,X,$;E.parameters={...E.parameters,docs:{...(z=E.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Erro do servidor",
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      falhar: [PAINEL]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/O servidor teve um problema ao carregar o faturamento/)).toBeInTheDocument();
    await expect(tela.queryByText(/api falsa/)).not.toBeInTheDocument();
    await userEvent.click(tela.getByRole("button", {
      name: /Tentar de novo/
    }));
    await expect(await tela.findByText(/O servidor teve um problema ao carregar o faturamento/)).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...($=(X=E.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var K,Y,Q;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "Sem rede",
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      semRede: [PAINEL]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/Não foi possível carregar o faturamento. Verifique a conexão/)).toBeInTheDocument();
    await expect(tela.getByRole("button", {
      name: /Tentar de novo/
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(Q=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Q.source}}};var W,Z,aa;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "Erro: sem permissão (403)",
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      respostas: {
        [PAINEL]: {
          status: 403,
          corpo: {
            erro: "seu perfil não tem esta permissão"
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Seu usuário não tem permissão para ver o faturamento.")).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: /Tentar de novo/
    })).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(aa=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:aa.source}}};var ea,ta,na;b.parameters={...b.parameters,docs:{...(ea=b.parameters)==null?void 0:ea.docs,source:{originalSource:`{
  name: "Subabas do super com falha de carga",
  parameters: {
    jornada: {
      ...CENARIO_SUPER,
      falhar: [FERRAMENTAS],
      semRede: [EXTRATO]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await esperarFatura(tela);
    await abrirAba(tela, "Ferramentas");
    await expect(await tela.findByText(/O servidor teve um problema ao carregar o consumo de ferramentas/)).toBeInTheDocument();
    await abrirAba(tela, "Extrato do mês");
    const painel = within(tela.getByRole("tabpanel"));
    await expect(await painel.findByText(/Não foi possível carregar o extrato do mês. Verifique a conexão/)).toBeInTheDocument();
    await expect(painel.getByRole("button", {
      name: /Tentar de novo/
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(na=(ta=b.parameters)==null?void 0:ta.docs)==null?void 0:na.source}}};export{f as Carregando,y as ErroAoFecharMes,E as ErroDoServidor,x as ErroDoSimulador,p as Padrao,g as SemPermissao,h as SemRede,B as Simulador,b as SubabasComErro,w as SuperPadrao,T as Vazio,La as __namedExportsOrder,ja as default};
