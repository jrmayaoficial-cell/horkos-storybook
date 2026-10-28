import{C as s,m as da}from"./jornadaGestao-BNxd9-GK.js";import{t as o,s as i}from"./jornadaOperar-D7ZeOS19.js";import"./ShellJornada-BMJ4fpX0.js";import"./jsx-runtime-CqjonpNT.js";import"./iframe-DJrhfsQk.js";import"./preload-helper-D6kgxu3v.js";import"./index-9UivOglz.js";import"./index-BwsDp8T-.js";import"./marca-z0SsKRba.js";import"./carregando-BXT1e_OM.js";import"./dadosShell-BJlYo5ba.js";import"./index-DXvfoM1X.js";import"./v2-CZUD68ca.js";import"./index-DBwj-ecP.js";import"./api-Z9ulGFc_.js";import"./Login-DIYaNGVn.js";import"./celulas-DGaOaVoK.js";/* empty css              */import"./paleta-B-duPMKZ.js";import"./MiniBarras-CUX8X_xl.js";/* empty css                */import"./ShellGestao-Bv6zAXUC.js";const{expect:e,userEvent:r,within:la}=__STORYBOOK_MODULE_TEST__,ua=da("/tags-e-decisao","Jornada de Tags e Motor de decisão dentro do shell. Tags: catálogo de tags principais e motivos, com a barra fixa (os dois botões secundários dividem a linha e o Salvar fica em largura total no celular). Motor: simulador, régua de faixas e deduções do motor de pontuação, com o histórico de versões. Carregando mostra esqueletos no lugar do texto; falha de carga diz o que foi (rede, servidor ou permissão) e só oferece Tentar de novo quando adianta; erro de ação nunca mostra detalhe técnico."),m="GET /v1/config/tags",l="GET /v1/config/decisao",pa="PUT /v1/config/tags",c="/motor-de-decisao",qa={title:"Jornadas/Tags e Motor",...ua},ga={versao:1,exigir_tag_no_encerramento:!0,regras:[],campos:[],tags:[]},u={name:"Tags: padrão",play:async({canvasElement:t,step:a})=>{const n=o(t);await e(await n.findByRole("region",{name:"REPROVADA"})).toBeInTheDocument(),await a("botões só de ícone dizem qual item mexem",async()=>{await e(n.getByRole("button",{name:"Remover a tag REPROVADA e seus motivos"})).toBeInTheDocument(),await e(n.getByRole("button",{name:"Remover o motivo Suspeita de fraude"})).toBeInTheDocument()}),await a("Adicionar motivo e salvar",async()=>{const d=la(n.getByRole("region",{name:"PENDENTE"}));await r.click(d.getByRole("button",{name:"Adicionar motivo"})),await e(d.getAllByLabelText("Motivo de PENDENTE")).toHaveLength(2),await r.click(n.getByRole("button",{name:"Salvar catálogo"})),await e(await n.findByText(/Vale para os encerramentos a partir de agora/)).toBeInTheDocument()}),await i()}},p={name:"Tags: carregando",parameters:{jornada:{...s,pendurar:[m]}},play:async({canvasElement:t})=>{const a=o(t);await e(await a.findByRole("status",{name:"Carregando as tags"})).toBeInTheDocument(),await e(a.queryByText("Carregando…")).not.toBeInTheDocument(),await e(a.queryByRole("button",{name:"Salvar catálogo"})).not.toBeInTheDocument()}},g={name:"Tags: erro de rede",parameters:{jornada:{...s,semRede:[m]}},play:async({canvasElement:t})=>{const a=o(t);await e(await a.findByText(/Não foi possível carregar as tags/)).toBeInTheDocument(),await e(a.queryByText(/Failed to fetch|HTTP \d+/)).not.toBeInTheDocument(),await r.click(a.getByRole("button",{name:"Tentar de novo"})),await e(await a.findByText(/Não foi possível carregar as tags/)).toBeInTheDocument(),await i()}},T={name:"Tags: erro do servidor",parameters:{jornada:{...s,falhar:[m]}},play:async({canvasElement:t})=>{const a=o(t);await e(await a.findByText(/O servidor teve um problema ao carregar as tags/)).toBeInTheDocument(),await e(a.queryByText(/api falsa/)).not.toBeInTheDocument(),await e(a.getByRole("button",{name:"Tentar de novo"})).toBeInTheDocument(),await i()}},y={name:"Tags: sem permissão",parameters:{jornada:{...s,respostas:{[m]:{status:403,corpo:{erro:"sem permissão"}}}}},play:async({canvasElement:t})=>{const a=o(t);await e(await a.findByText(/não tem permissão para ver as tags/)).toBeInTheDocument(),await e(a.queryByRole("button",{name:"Tentar de novo"})).not.toBeInTheDocument(),await i()}},w={name:"Tags: nenhuma tag",parameters:{jornada:{...s,respostas:{[m]:{status:200,corpo:{versao:1,min_principais:1,max_principais:1,tags:[]}}}}},play:async({canvasElement:t})=>{const a=o(t);await e(await a.findByText("Nenhuma tag cadastrada")).toBeInTheDocument(),await r.click(a.getByRole("button",{name:"Restaurar padrão"})),await e(await a.findByRole("region",{name:"REPROVADA"})).toBeInTheDocument(),await i()}},x={name:"Tags: erro ao salvar sem conexão",parameters:{jornada:{...s,semRede:[pa]}},play:async({canvasElement:t})=>{const a=o(t);await r.click(await a.findByRole("button",{name:"Salvar catálogo"}));const n=await a.findByRole("alert");await e(n).toHaveTextContent(/Sem conexão\. Suas tags continuam aqui/),await e(n.textContent).not.toMatch(/Failed to fetch/),await i()}},B={name:"Motor: padrão",args:{rotaInicial:c},play:async({canvasElement:t,step:a})=>{const n=o(t);await e(await n.findByRole("region",{name:"Motor de pontuação"})).toBeInTheDocument(),await a("deduções com nome do item nos controles",async()=>{await e(n.getByRole("checkbox",{name:"Dedução Segunda voz na ligação ligada"})).toBeChecked(),await e(n.getByRole("button",{name:"Remover a dedução Segunda voz na ligação"})).toBeInTheDocument(),await r.click(n.getByRole("button",{name:"Editar o limiar de Semelhança facial abaixo de 70"})),await r.click(n.getByRole("button",{name:"Concluir"}))}),await a("histórico de versões abre",async()=>{await r.click(n.getByRole("button",{name:"Histórico de versões"}));const d=la(await n.findByRole("dialog"));await e(await d.findByText("v12")).toBeInTheDocument(),await r.keyboard("{Escape}")}),await a("calibração por canal mostra as duas réguas",async()=>{await r.click(n.getByText("Calibração por canal (IA × Humano)")),await e(await n.findByText("Faixas — Humano")).toBeInTheDocument(),await e(n.getByRole("spinbutton",{name:"Pontos de Segunda voz na ligação no Humano"})).toBeInTheDocument()}),await i()}},E={name:"Motor: carregando",args:{rotaInicial:c},parameters:{jornada:{...s,pendurar:[l]}},play:async({canvasElement:t})=>{const a=o(t);await e(await a.findByRole("status",{name:"Carregando as regras do motor de decisão"})).toBeInTheDocument(),await e(a.queryByRole("button",{name:"Salvar regras"})).not.toBeInTheDocument()}},R={name:"Motor: erro de rede",args:{rotaInicial:c},parameters:{jornada:{...s,semRede:[l]}},play:async({canvasElement:t})=>{const a=o(t);await e(await a.findByText(/Não foi possível carregar as regras do motor/)).toBeInTheDocument(),await e(a.getByRole("button",{name:"Tentar de novo"})).toBeInTheDocument(),await i()}},v={name:"Motor: erro do servidor",args:{rotaInicial:c},parameters:{jornada:{...s,falhar:[l]}},play:async({canvasElement:t})=>{const a=o(t);await e(await a.findByText(/O servidor teve um problema ao carregar as regras do motor/)).toBeInTheDocument(),await e(a.queryByText(/api falsa/)).not.toBeInTheDocument(),await i()}},h={name:"Motor: sem permissão",args:{rotaInicial:c},parameters:{jornada:{...s,respostas:{[l]:{status:403,corpo:{erro:"sem permissão"}}}}},play:async({canvasElement:t})=>{const a=o(t);await e(await a.findByText(/não tem permissão para ver as regras do motor/)).toBeInTheDocument(),await e(a.queryByRole("button",{name:"Tentar de novo"})).not.toBeInTheDocument(),await i()}},D={name:"Motor: nenhuma regra",args:{rotaInicial:c},parameters:{jornada:{...s,respostas:{[l]:{status:200,corpo:ga}}}},play:async({canvasElement:t})=>{const a=o(t);await e(await a.findByText("Nenhuma regra cadastrada")).toBeInTheDocument(),await r.click(a.getByRole("button",{name:"Restaurar padrão"})),await e(await a.findByDisplayValue("Lipsync reprovado → reprovar")).toBeInTheDocument(),await e(a.getAllByRole("button",{name:"Subir (decide antes)"})).toHaveLength(2),await i()}},Ga=["Padrao","Carregando","SemRede","ErroDoServidor","SemPermissao","Vazio","ErroAoSalvar","MotorPadrao","MotorCarregando","MotorSemRede","MotorErroDoServidor","MotorSemPermissao","MotorVazio"];var I,S,O;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Tags: padrão",
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByRole("region", {
      name: "REPROVADA"
    })).toBeInTheDocument();
    await step("botões só de ícone dizem qual item mexem", async () => {
      await expect(tela.getByRole("button", {
        name: "Remover a tag REPROVADA e seus motivos"
      })).toBeInTheDocument();
      await expect(tela.getByRole("button", {
        name: "Remover o motivo Suspeita de fraude"
      })).toBeInTheDocument();
    });
    await step("Adicionar motivo e salvar", async () => {
      const cartao = within(tela.getByRole("region", {
        name: "PENDENTE"
      }));
      await userEvent.click(cartao.getByRole("button", {
        name: "Adicionar motivo"
      }));
      await expect(cartao.getAllByLabelText("Motivo de PENDENTE")).toHaveLength(2);
      await userEvent.click(tela.getByRole("button", {
        name: "Salvar catálogo"
      }));
      await expect(await tela.findByText(/Vale para os encerramentos a partir de agora/)).toBeInTheDocument();
    });
    await semRotaSemFixture();
  }
}`,...(O=(S=u.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var f,A,b;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Tags: carregando",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      pendurar: [TAGS]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByRole("status", {
      name: "Carregando as tags"
    })).toBeInTheDocument();
    await expect(tela.queryByText("Carregando…")).not.toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: "Salvar catálogo"
    })).not.toBeInTheDocument();
  }
}`,...(b=(A=p.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var M,_,C;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Tags: erro de rede",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      semRede: [TAGS]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/Não foi possível carregar as tags/)).toBeInTheDocument();
    await expect(tela.queryByText(/Failed to fetch|HTTP \\d+/)).not.toBeInTheDocument();
    await userEvent.click(tela.getByRole("button", {
      name: "Tentar de novo"
    }));
    await expect(await tela.findByText(/Não foi possível carregar as tags/)).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(C=(_=g.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var N,k,F;T.parameters={...T.parameters,docs:{...(N=T.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Tags: erro do servidor",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      falhar: [TAGS]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/O servidor teve um problema ao carregar as tags/)).toBeInTheDocument();
    await expect(tela.queryByText(/api falsa/)).not.toBeInTheDocument();
    await expect(tela.getByRole("button", {
      name: "Tentar de novo"
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(F=(k=T.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var q,G,P;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "Tags: sem permissão",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [TAGS]: {
          status: 403,
          corpo: {
            erro: "sem permissão"
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/não tem permissão para ver as tags/)).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: "Tentar de novo"
    })).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(P=(G=y.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var j,V,H;w.parameters={...w.parameters,docs:{...(j=w.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Tags: nenhuma tag",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [TAGS]: {
          status: 200,
          corpo: {
            versao: 1,
            min_principais: 1,
            max_principais: 1,
            tags: []
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Nenhuma tag cadastrada")).toBeInTheDocument();
    await userEvent.click(tela.getByRole("button", {
      name: "Restaurar padrão"
    }));
    await expect(await tela.findByRole("region", {
      name: "REPROVADA"
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(H=(V=w.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var z,J,L;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Tags: erro ao salvar sem conexão",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      semRede: [SALVAR_TAGS]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await userEvent.click(await tela.findByRole("button", {
      name: "Salvar catálogo"
    }));
    const alerta = await tela.findByRole("alert");
    await expect(alerta).toHaveTextContent(/Sem conexão\\. Suas tags continuam aqui/);
    await expect(alerta.textContent).not.toMatch(/Failed to fetch/);
    await semRotaSemFixture();
  }
}`,...(L=(J=x.parameters)==null?void 0:J.docs)==null?void 0:L.source}}};var U,Z,K;B.parameters={...B.parameters,docs:{...(U=B.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "Motor: padrão",
  args: {
    rotaInicial: ROTA_MOTOR
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByRole("region", {
      name: "Motor de pontuação"
    })).toBeInTheDocument();
    await step("deduções com nome do item nos controles", async () => {
      await expect(tela.getByRole("checkbox", {
        name: "Dedução Segunda voz na ligação ligada"
      })).toBeChecked();
      await expect(tela.getByRole("button", {
        name: "Remover a dedução Segunda voz na ligação"
      })).toBeInTheDocument();
      await userEvent.click(tela.getByRole("button", {
        name: "Editar o limiar de Semelhança facial abaixo de 70"
      }));
      await userEvent.click(tela.getByRole("button", {
        name: "Concluir"
      }));
    });
    await step("histórico de versões abre", async () => {
      await userEvent.click(tela.getByRole("button", {
        name: "Histórico de versões"
      }));
      const caixa = within(await tela.findByRole("dialog"));
      await expect(await caixa.findByText("v12")).toBeInTheDocument();
      await userEvent.keyboard("{Escape}");
    });
    await step("calibração por canal mostra as duas réguas", async () => {
      await userEvent.click(tela.getByText("Calibração por canal (IA × Humano)"));
      await expect(await tela.findByText("Faixas — Humano")).toBeInTheDocument();
      await expect(tela.getByRole("spinbutton", {
        name: "Pontos de Segunda voz na ligação no Humano"
      })).toBeInTheDocument();
    });
    await semRotaSemFixture();
  }
}`,...(K=(Z=B.parameters)==null?void 0:Z.docs)==null?void 0:K.source}}};var Y,Q,W;E.parameters={...E.parameters,docs:{...(Y=E.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "Motor: carregando",
  args: {
    rotaInicial: ROTA_MOTOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      pendurar: [MOTOR]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByRole("status", {
      name: "Carregando as regras do motor de decisão"
    })).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: "Salvar regras"
    })).not.toBeInTheDocument();
  }
}`,...(W=(Q=E.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var X,$,aa;R.parameters={...R.parameters,docs:{...(X=R.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: "Motor: erro de rede",
  args: {
    rotaInicial: ROTA_MOTOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      semRede: [MOTOR]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/Não foi possível carregar as regras do motor/)).toBeInTheDocument();
    await expect(tela.getByRole("button", {
      name: "Tentar de novo"
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(aa=($=R.parameters)==null?void 0:$.docs)==null?void 0:aa.source}}};var ea,ta,na;v.parameters={...v.parameters,docs:{...(ea=v.parameters)==null?void 0:ea.docs,source:{originalSource:`{
  name: "Motor: erro do servidor",
  args: {
    rotaInicial: ROTA_MOTOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      falhar: [MOTOR]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/O servidor teve um problema ao carregar as regras do motor/)).toBeInTheDocument();
    await expect(tela.queryByText(/api falsa/)).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(na=(ta=v.parameters)==null?void 0:ta.docs)==null?void 0:na.source}}};var oa,ra,sa;h.parameters={...h.parameters,docs:{...(oa=h.parameters)==null?void 0:oa.docs,source:{originalSource:`{
  name: "Motor: sem permissão",
  args: {
    rotaInicial: ROTA_MOTOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [MOTOR]: {
          status: 403,
          corpo: {
            erro: "sem permissão"
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/não tem permissão para ver as regras do motor/)).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: "Tentar de novo"
    })).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(sa=(ra=h.parameters)==null?void 0:ra.docs)==null?void 0:sa.source}}};var ia,ca,ma;D.parameters={...D.parameters,docs:{...(ia=D.parameters)==null?void 0:ia.docs,source:{originalSource:`{
  name: "Motor: nenhuma regra",
  args: {
    rotaInicial: ROTA_MOTOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [MOTOR]: {
          status: 200,
          corpo: MOTOR_CLASSICO_VAZIO
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Nenhuma regra cadastrada")).toBeInTheDocument();
    await userEvent.click(tela.getByRole("button", {
      name: "Restaurar padrão"
    }));
    await expect(await tela.findByDisplayValue("Lipsync reprovado → reprovar")).toBeInTheDocument();
    await expect(tela.getAllByRole("button", {
      name: "Subir (decide antes)"
    })).toHaveLength(2);
    await semRotaSemFixture();
  }
}`,...(ma=(ca=D.parameters)==null?void 0:ca.docs)==null?void 0:ma.source}}};export{p as Carregando,x as ErroAoSalvar,T as ErroDoServidor,E as MotorCarregando,v as MotorErroDoServidor,B as MotorPadrao,h as MotorSemPermissao,R as MotorSemRede,D as MotorVazio,u as Padrao,y as SemPermissao,g as SemRede,w as Vazio,Ga as __namedExportsOrder,qa as default};
