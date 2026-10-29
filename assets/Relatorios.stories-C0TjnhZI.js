import{n as ye,o as Be}from"./ShellJornada-CEvPgnxB.js";import{C as r,a as ue,m as xe}from"./jornadaAdmin-CEu4Iqj7.js";import{t as n,s,i as Te}from"./jornadaOperar-BXGi3LO3.js";import"./jsx-runtime-5_h1ggUY.js";import"./iframe-DruNtuiI.js";import"./preload-helper-D6kgxu3v.js";import"./dadosShell-DtXMTPCY.js";import"./index-C-mb7IqI.js";import"./index-Di2eVLJq.js";import"./v2-84aqWlA8.js";import"./index-Bi4MUife.js";import"./api-CwdEbqb0.js";import"./index-DHkLSF23.js";import"./marca-CA0y2m0X.js";import"./carregando-BPTr5NIa.js";import"./celulas-D28WY2js.js";/* empty css              */import"./MiniBarras-B-RmbX_7.js";import"./paleta-CAXSK6uJ.js";import"./Login-BpKl7o1u.js";/* empty css                */import"./ShellGestao-DeGOnHqh.js";const{expect:a,spyOn:De,userEvent:m,waitFor:g,within:de}=__STORYBOOK_MODULE_TEST__,he=xe("/relatorios","Jornada de Relatórios dentro do shell: filtros de período, agrupamento e canal, KPIs, funil, IA × Humano, acompanhante em outro aparelho, evolução e a lista por período (cartões até 1023 px). Falha de carga diz o motivo em português, sem código; 403 e 404 não oferecem Tentar de novo. Exportar PDF trava o segundo clique e mostra o erro com Tentar de novo."),l="GET /v1/relatorios",Ee="GET /v1/relatorios.pdf",we=/HTTP \d{3}|api falsa|Failed to fetch|\(/,f=Be("30d",Date.now()),Ue={title:"Jornadas/Relatórios",...he};async function Ie(t,e,o){const c=t.queryByRole("group",{name:"Período"});if(c){await m.click(de(c).getByRole("button",{name:e}));return}await m.selectOptions(t.getByLabelText("Período"),o)}async function p(t){const e=t.ownerDocument.querySelector("main.conteudo");await a(e).not.toBeNull(),await g(()=>a(e.scrollWidth).toBeLessThanOrEqual(e.clientWidth))}async function i(t,e){return t.findByRole("heading",{name:e})}const u={name:"Padrão (admin)",parameters:{jornada:r},play:async({canvasElement:t,step:e})=>{const o=n(t);for(const c of["Criadas","Resultado","Do link à aprovação","IA × Humano","Acompanhante em outro aparelho","Evolução","Por período"])await a(await i(o,c)).toBeInTheDocument();await a(o.getAllByRole("heading",{level:1}).length).toBeLessThanOrEqual(1),await p(t),await e("Trocar o período para 90 dias",async()=>{await Ie(o,"90 dias","90d"),await a(await o.findByText(/sessões criadas por semana/)).toBeInTheDocument(),await a(o.getByText(/mais recente primeiro/)).toBeInTheDocument()}),await e("Canal IA esconde o acompanhante",async()=>{await m.selectOptions(o.getByLabelText("Canal"),"IA"),await g(()=>a(o.queryByRole("heading",{name:"Acompanhante em outro aparelho"})).not.toBeInTheDocument()),await a(o.getByRole("heading",{name:"Criadas"})).toBeInTheDocument()}),await p(t),await s()}},d={name:"Aberto pelo menu a partir do Painel",args:{rotaInicial:"/painel-de-controle"},parameters:{jornada:r},play:async({canvasElement:t})=>{const e=n(t);await Te(t,"Relatórios"),await a(await i(e,"Por período")).toBeInTheDocument(),await a(e.queryByText("Tela fora do Storybook")).not.toBeInTheDocument(),await s()}},w={name:"Super com empresa",parameters:{jornada:ue},play:async({canvasElement:t})=>{const e=n(t);await a(await i(e,"Criadas")).toBeInTheDocument(),await s()}},y={name:"Super sem empresa",parameters:{jornada:{...ue,sessao:{papel:"super",empresaAtiva:""}}},play:async({canvasElement:t})=>{const e=n(t);await a(await i(e,"Escolha a empresa")).toBeInTheDocument(),await a(e.queryByRole("button",{name:"Exportar PDF"})).not.toBeInTheDocument()}},B={parameters:{jornada:{...r,pendurar:[l]}},play:async({canvasElement:t})=>{const e=n(t);await a(await e.findByText("Carregando relatórios…")).toBeInTheDocument(),await a(e.queryByRole("button",{name:/Tentar de novo/})).not.toBeInTheDocument()}},x={name:"Vazio: nenhuma sessão no período",parameters:{jornada:{...r,respostas:{[l]:{corpo:ye(f.de,f.ate)}}}},play:async({canvasElement:t})=>{const e=n(t);await a(await i(e,"Nenhuma sessão no período")).toBeInTheDocument(),await a(e.queryByRole("heading",{name:"Por período"})).not.toBeInTheDocument(),await a(e.getByLabelText("Canal")).toBeInTheDocument(),await a(e.queryByRole("group",{name:"Período"})??e.getByLabelText("Período")).toBeInTheDocument(),await p(t),await s()}},T={name:"Erro do servidor",parameters:{jornada:{...r,falhar:[l]}},play:async({canvasElement:t})=>{const e=n(t),o="O servidor teve um problema ao carregar os relatórios. Tente de novo em instantes.";await a(await e.findByText(o)).toBeInTheDocument(),await a(e.queryByText(we)).not.toBeInTheDocument(),await m.click(e.getByRole("button",{name:/Tentar de novo/})),await a(await e.findByText(o)).toBeInTheDocument(),await p(t),await s()}},D={name:"Sem rede",parameters:{jornada:{...r,semRede:[l]}},play:async({canvasElement:t})=>{const e=n(t);await a(await e.findByText("Não foi possível carregar os relatórios. Verifique a conexão e tente de novo.")).toBeInTheDocument(),await a(e.getByRole("button",{name:/Tentar de novo/})).toBeInTheDocument(),await a(e.queryByText(we)).not.toBeInTheDocument(),await s()}},h={name:"Erro: não encontrado (404)",parameters:{jornada:{...r,respostas:{[l]:{status:404,corpo:{erro:"x"}}}}},play:async({canvasElement:t})=>{const e=n(t);await a(await e.findByText("O servidor não encontrou os relatórios. Recarregue a página e, se continuar, fale com o suporte.")).toBeInTheDocument(),await a(e.queryByRole("button",{name:/Tentar de novo/})).not.toBeInTheDocument(),await s()}},E={name:"Erro: sem permissão (403)",parameters:{jornada:{...r,respostas:{[l]:{status:403,corpo:{erro:"proibido"}}}}},play:async({canvasElement:t})=>{const e=n(t);await a(await i(e,"Sem acesso aos relatórios")).toBeInTheDocument(),await a(e.getByText("Seu usuário não tem permissão para ver os relatórios. Fale com o administrador da empresa.")).toBeInTheDocument(),await a(e.queryByRole("button",{name:"Exportar PDF"})).not.toBeInTheDocument(),await a(e.queryByRole("button",{name:/Tentar de novo/})).not.toBeInTheDocument(),await s()}},I={name:"Erro no PDF",parameters:{jornada:{...r,falhar:[Ee]}},play:async({canvasElement:t})=>{const e=n(t);await i(e,"Criadas"),await m.click(e.getByRole("button",{name:"Exportar PDF"}));const o=await e.findByRole("alert");await a(o).toHaveTextContent("Não foi possível gerar o PDF. Tente de novo."),await a(e.getByRole("heading",{name:"Criadas"})).toBeInTheDocument(),await m.click(de(o).getByRole("button",{name:/Tentar de novo/})),await g(()=>a(o).not.toBeInTheDocument()),await a(t.ownerDocument.activeElement).toBe(e.getByRole("button",{name:/Gerando PDF|Exportar PDF/}));const c=await e.findByRole("alert");await a(c).not.toBe(o),await a(c).toHaveTextContent("Não foi possível gerar o PDF."),await p(t),await s()}};function ve(t){return t.mock.calls.filter(([e])=>String(e instanceof Request?e.url:e).includes("/v1/relatorios.pdf")).length}const v={name:"PDF gerado",parameters:{jornada:r},play:async({canvasElement:t})=>{const e=n(t);await i(e,"Criadas");const o=De(globalThis,"fetch");try{await m.click(e.getByRole("button",{name:"Exportar PDF"}));const c=e.getByRole("button",{name:"Gerando PDF"});await a(c).toHaveAttribute("aria-disabled","true"),await m.click(c),await a(await e.findByText("PDF gerado.")).toBeInTheDocument(),await a(e.getByText(/Resumo executivo de/)).toBeInTheDocument(),await a(ve(o)).toBe(1),await a(e.queryByRole("alert")).not.toBeInTheDocument()}finally{o.mockRestore()}await s()}},R={name:"Com acompanhante em outro aparelho",parameters:{jornada:r},play:async({canvasElement:t})=>{const e=n(t),o=(await i(e,"Acompanhante em outro aparelho")).closest("section");await a(o).not.toBeNull(),await m.selectOptions(e.getByLabelText("Canal"),"HUMANO"),await a(await i(e,"Acompanhante em outro aparelho")).toBeInTheDocument(),await s()}},Xe=["Padrao","PeloMenu","SuperComEmpresa","SuperSemEmpresa","Carregando","Vazio","ErroDoServidor","SemRede","NaoEncontrado","SemPermissao","ErroNoPdf","PdfGerado","ComAcompanhante"];var A,P,b;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Padrão (admin)",
  parameters: {
    jornada: CENARIO_ADMIN
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    for (const nome of ["Criadas", "Resultado", "Do link à aprovação", "IA × Humano", "Acompanhante em outro aparelho", "Evolução", "Por período"]) {
      await expect(await cabecalho(tela, nome)).toBeInTheDocument();
    }
    await expect(tela.getAllByRole("heading", {
      level: 1
    }).length).toBeLessThanOrEqual(1);
    await semVazamento(canvasElement);
    await step("Trocar o período para 90 dias", async () => {
      await escolherPeriodo(tela, "90 dias", "90d");
      await expect(await tela.findByText(/sessões criadas por semana/)).toBeInTheDocument();
      await expect(tela.getByText(/mais recente primeiro/)).toBeInTheDocument();
    });
    await step("Canal IA esconde o acompanhante", async () => {
      await userEvent.selectOptions(tela.getByLabelText("Canal"), "IA");
      await waitFor(() => expect(tela.queryByRole("heading", {
        name: "Acompanhante em outro aparelho"
      })).not.toBeInTheDocument());
      await expect(tela.getByRole("heading", {
        name: "Criadas"
      })).toBeInTheDocument();
    });
    await semVazamento(canvasElement);
    await semRotaSemFixture();
  }
}`,...(b=(P=u.parameters)==null?void 0:P.docs)==null?void 0:b.source}}};var S,C,F;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Aberto pelo menu a partir do Painel",
  args: {
    rotaInicial: "/painel-de-controle"
  },
  parameters: {
    jornada: CENARIO_ADMIN
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await irPeloMenu(canvasElement, "Relatórios");
    await expect(await cabecalho(tela, "Por período")).toBeInTheDocument();
    await expect(tela.queryByText("Tela fora do Storybook")).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(F=(C=d.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var N,O,q;w.parameters={...w.parameters,docs:{...(N=w.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Super com empresa",
  parameters: {
    jornada: CENARIO_SUPER
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await cabecalho(tela, "Criadas")).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(q=(O=w.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var _,j,L;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Super sem empresa",
  parameters: {
    jornada: {
      ...CENARIO_SUPER,
      sessao: {
        papel: "super",
        empresaAtiva: ""
      }
    } as OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await cabecalho(tela, "Escolha a empresa")).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: "Exportar PDF"
    })).not.toBeInTheDocument();
  }
}`,...(L=(j=y.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var M,k,V;B.parameters={...B.parameters,docs:{...(M=B.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      pendurar: [REL]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Carregando relatórios…")).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: /Tentar de novo/
    })).not.toBeInTheDocument();
  }
}`,...(V=(k=B.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var z,H,J;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Vazio: nenhuma sessão no período",
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      respostas: {
        [REL]: {
          corpo: relatorioVazio(JANELA_30_DIAS.de, JANELA_30_DIAS.ate)
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await cabecalho(tela, "Nenhuma sessão no período")).toBeInTheDocument();
    await expect(tela.queryByRole("heading", {
      name: "Por período"
    })).not.toBeInTheDocument();
    await expect(tela.getByLabelText("Canal")).toBeInTheDocument();
    await expect(tela.queryByRole("group", {
      name: "Período"
    }) ?? tela.getByLabelText("Período")).toBeInTheDocument();
    await semVazamento(canvasElement);
    await semRotaSemFixture();
  }
}`,...(J=(H=x.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var G,U,X;T.parameters={...T.parameters,docs:{...(G=T.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "Erro do servidor",
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      falhar: [REL]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    const frase = "O servidor teve um problema ao carregar os relatórios. Tente de novo em instantes.";
    await expect(await tela.findByText(frase)).toBeInTheDocument();
    await expect(tela.queryByText(TEXTO_TECNICO)).not.toBeInTheDocument();
    await userEvent.click(tela.getByRole("button", {
      name: /Tentar de novo/
    }));
    await expect(await tela.findByText(frase)).toBeInTheDocument();
    await semVazamento(canvasElement);
    await semRotaSemFixture();
  }
}`,...(X=(U=T.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var K,W,Y;D.parameters={...D.parameters,docs:{...(K=D.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "Sem rede",
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      semRede: [REL]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Não foi possível carregar os relatórios. Verifique a conexão e tente de novo.")).toBeInTheDocument();
    await expect(tela.getByRole("button", {
      name: /Tentar de novo/
    })).toBeInTheDocument();
    await expect(tela.queryByText(TEXTO_TECNICO)).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(Y=(W=D.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var Q,Z,$;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "Erro: não encontrado (404)",
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      respostas: {
        [REL]: {
          status: 404,
          corpo: {
            erro: "x"
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("O servidor não encontrou os relatórios. Recarregue a página e, se continuar, fale com o suporte.")).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: /Tentar de novo/
    })).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...($=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,te;E.parameters={...E.parameters,docs:{...(ee=E.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: "Erro: sem permissão (403)",
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      respostas: {
        [REL]: {
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
    await expect(await cabecalho(tela, "Sem acesso aos relatórios")).toBeInTheDocument();
    await expect(tela.getByText("Seu usuário não tem permissão para ver os relatórios. Fale com o administrador da empresa.")).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: "Exportar PDF"
    })).not.toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: /Tentar de novo/
    })).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(te=(ae=E.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var oe,ne,re;I.parameters={...I.parameters,docs:{...(oe=I.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: "Erro no PDF",
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      falhar: [PDF]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await cabecalho(tela, "Criadas");
    await userEvent.click(tela.getByRole("button", {
      name: "Exportar PDF"
    }));
    const alerta = await tela.findByRole("alert");
    await expect(alerta).toHaveTextContent("Não foi possível gerar o PDF. Tente de novo.");
    await expect(tela.getByRole("heading", {
      name: "Criadas"
    })).toBeInTheDocument();
    await userEvent.click(within(alerta).getByRole("button", {
      name: /Tentar de novo/
    }));
    await waitFor(() => expect(alerta).not.toBeInTheDocument());
    await expect(canvasElement.ownerDocument.activeElement).toBe(tela.getByRole("button", {
      name: /Gerando PDF|Exportar PDF/
    }));
    const novoAlerta = await tela.findByRole("alert");
    await expect(novoAlerta).not.toBe(alerta);
    await expect(novoAlerta).toHaveTextContent("Não foi possível gerar o PDF.");
    await semVazamento(canvasElement);
    await semRotaSemFixture();
  }
}`,...(re=(ne=I.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var se,ce,ie;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: "PDF gerado",
  parameters: {
    jornada: CENARIO_ADMIN
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await cabecalho(tela, "Criadas");
    const espiao = spyOn(globalThis, "fetch");
    try {
      await userEvent.click(tela.getByRole("button", {
        name: "Exportar PDF"
      }));
      const ocupado = tela.getByRole("button", {
        name: "Gerando PDF"
      });
      await expect(ocupado).toHaveAttribute("aria-disabled", "true");
      await userEvent.click(ocupado);
      await expect(await tela.findByText("PDF gerado.")).toBeInTheDocument();
      await expect(tela.getByText(/Resumo executivo de/)).toBeInTheDocument();
      await expect(pedidosDoPdf(espiao)).toBe(1);
      await expect(tela.queryByRole("alert")).not.toBeInTheDocument();
    } finally {
      espiao.mockRestore();
    }
    await semRotaSemFixture();
  }
}`,...(ie=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var me,le,pe;R.parameters={...R.parameters,docs:{...(me=R.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: "Com acompanhante em outro aparelho",
  parameters: {
    jornada: CENARIO_ADMIN
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    const card = (await cabecalho(tela, "Acompanhante em outro aparelho")).closest("section") as HTMLElement;
    await expect(card).not.toBeNull();
    await userEvent.selectOptions(tela.getByLabelText("Canal"), "HUMANO");
    await expect(await cabecalho(tela, "Acompanhante em outro aparelho")).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(pe=(le=R.parameters)==null?void 0:le.docs)==null?void 0:pe.source}}};export{B as Carregando,R as ComAcompanhante,T as ErroDoServidor,I as ErroNoPdf,h as NaoEncontrado,u as Padrao,v as PdfGerado,d as PeloMenu,E as SemPermissao,D as SemRede,w as SuperComEmpresa,y as SuperSemEmpresa,x as Vazio,Xe as __namedExportsOrder,Ue as default};
