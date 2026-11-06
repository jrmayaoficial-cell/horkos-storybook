import{C as l,m as xa}from"./jornadaGestao-DHT83ETp.js";import{t as r,s as i}from"./jornadaOperar-CmWeJKgC.js";import"./ShellJornada-2dJvRXk3.js";import"./jsx-runtime-B7dY8ZKC.js";import"./iframe-Dr3SbXMm.js";import"./preload-helper-D6kgxu3v.js";import"./dadosShell-D4gKWzE_.js";import"./index-DxYZICoO.js";import"./index-XsrJo1A_.js";import"./v2-9UoCLKRC.js";import"./index-BJE_YuEh.js";import"./api-DeTcSHTh.js";import"./index-DqLvvGBd.js";import"./marca-BVn5hr6c.js";import"./carregando-BI6OXTmy.js";import"./celulas-CvIpzDFd.js";/* empty css              */import"./CartaoKpi-Dtcx1Yh_.js";import"./MiniBarras-tBIA7qMk.js";import"./cores-D-iLqYVd.js";import"./Login-X20zB-xh.js";import"./etapas-I5z5T4KK.js";/* empty css                */import"./ShellGestao-Du_KPRVQ.js";const{expect:e,userEvent:o,waitFor:ga,within:h}=__STORYBOOK_MODULE_TEST__,Ra=xa("/roteiros",'Jornada de roteiros dentro do shell: lista e editor. No editor, cada pergunta tem Subir e Descer (44 px, com o número da pergunta no nome) além do arraste; o índice e a régua do veredito ficam em seções recolhíveis (fechadas no celular). Com a carga falhando o editor não aparece (antes ficava no carregando para sempre); roteiro que não existe mostra "não encontrado" com Voltar; erro ao publicar aparece em frase, nunca o JSON da resposta, e o erro de uma pergunta aparece no cartão dela.'),u="GET /v1/roteiros/:id/:versao",f="POST /v1/roteiros",s="/roteiros/editar/rot_consignado_novo/3",Ma={title:"Jornadas/Roteiros",...Ra};function Ea(t){return[...t.ownerDocument.querySelectorAll(".roteiro-perguntas .pergunta-cabeca .pid")].map(a=>a.textContent)}function S(t){return[...t.ownerDocument.querySelectorAll(".roteiro-perguntas .pergunta-resumo")].map(a=>a.textContent)}const d={name:"Padrão: lista",play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByRole("region",{name:/Roteiros/})).toBeInTheDocument(),await e((await a.findAllByText(/contrato novo/)).length).toBeGreaterThan(0),await i()}},p={name:"Editor: subir, descer e publicar",args:{rotaInicial:s},play:async({canvasElement:t,step:a})=>{const n=r(t);await e(await n.findByRole("heading",{name:"Consignado · contrato novo",level:2})).toBeInTheDocument();const c=S(t);await a("Descer p1 troca com a seguinte",async()=>{await o.click(n.getByRole("button",{name:"Descer p1"})),await e(S(t)).toEqual([c[1],c[0],...c.slice(2)]),await e(Ea(t).slice(0,2)).toEqual(["p1","p2"])}),await a("Subir p2 desfaz a troca",async()=>{await o.click(n.getByRole("button",{name:"Subir p2"})),await e(S(t)).toEqual(c)}),await a("Primeira não sobe e última não desce",async()=>{await e(n.getByRole("button",{name:"Subir p1"})).toBeDisabled(),await e(n.getByRole("button",{name:"Descer p6"})).toBeDisabled()}),await a("Índice e régua do veredito abrem e fecham",async()=>{const m=n.getByRole("button",{name:"Ir para a pergunta"});m.getAttribute("aria-expanded")==="false"&&await o.click(m),await e(m).toHaveAttribute("aria-expanded","true");const O=n.getByRole("button",{name:"Como o roteiro vira veredito"});await o.click(O),await e(O).toHaveAttribute("aria-expanded","true"),await e(n.getByText("Aprova automático")).toBeVisible()}),await a("Expandir todas abre os cartões",async()=>{await o.click(n.getByRole("button",{name:"Expandir todas"})),await e(n.getByRole("button",{name:"Recolher todas"})).toBeInTheDocument()}),await a("Publicar cria a v4 e segue no editor",async()=>{await o.click(n.getByRole("button",{name:"Salvar como nova versão"})),await e(await n.findByText(/Publicado: rot_consignado_novo v4/)).toBeInTheDocument()}),await i()}},w={name:"Editor: aviso de saída",args:{rotaInicial:s},play:async({canvasElement:t,step:a})=>{const n=r(t),c=h(t.ownerDocument.body);await e(await n.findByRole("heading",{name:"Consignado · contrato novo",level:2})).toBeInTheDocument(),await a("Subir e descer de volta não conta como alteração: Voltar sai direto",async()=>{await o.click(n.getByRole("button",{name:"Descer p1"})),await o.click(n.getByRole("button",{name:"Subir p2"})),await o.click(n.getByRole("link",{name:"Voltar para Roteiros"})),await e(await n.findByRole("region",{name:/Roteiros/})).toBeInTheDocument(),await e(c.queryByText("Sair sem salvar?")).not.toBeInTheDocument()}),await a("Trocar a ordem e tentar sair pergunta, citando o roteiro",async()=>{await o.click((await n.findAllByRole("link",{name:/contrato novo/}))[0]),await e(await n.findByRole("heading",{name:"Consignado · contrato novo",level:2})).toBeInTheDocument(),await o.click(n.getByRole("button",{name:"Descer p1"})),await o.click(n.getByRole("link",{name:"Voltar para Roteiros"}));const m=h(await c.findByRole("dialog",{name:"Sair sem salvar?"}));await e(m.getByText(/alterações não salvas em Roteiro “Consignado · contrato novo”/)).toBeInTheDocument(),await o.click(m.getByRole("button",{name:"Continuar editando"})),await ga(()=>e(c.queryByRole("dialog",{name:"Sair sem salvar?"})).not.toBeInTheDocument()),await e(n.getByRole("heading",{name:"Consignado · contrato novo",level:2})).toBeInTheDocument()}),await a("Publicar e depois sair não pergunta",async()=>{await o.click(n.getByRole("button",{name:"Salvar como nova versão"})),await e(await n.findByText(/Publicado: rot_consignado_novo v4/)).toBeInTheDocument(),await o.click(n.getByRole("link",{name:"Voltar para Roteiros"})),await e(await n.findByRole("region",{name:/Roteiros/})).toBeInTheDocument(),await e(c.queryByText("Sair sem salvar?")).not.toBeInTheDocument()}),await i()}},v={name:"Editor: roteiro novo",args:{rotaInicial:"/roteiros/novo"},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText("Novo roteiro")).toBeInTheDocument(),await e(a.getByRole("button",{name:"Subir p1"})).toBeDisabled(),await e(a.getByRole("button",{name:"Descer p1"})).toBeDisabled(),await i()}},y={args:{rotaInicial:s},parameters:{jornada:{...l,pendurar:[u]}},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText(/Carregando o roteiro/)).toBeInTheDocument(),await e(a.queryByRole("button",{name:"Salvar como nova versão"})).not.toBeInTheDocument()}},B={name:"Erro de rede: sem editor",args:{rotaInicial:s},parameters:{jornada:{...l,semRede:[u]}},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText(/Não foi possível carregar o roteiro/)).toBeInTheDocument(),await e(a.queryByText(/Carregando o roteiro/)).not.toBeInTheDocument(),await e(a.queryByRole("button",{name:"Salvar como nova versão"})).not.toBeInTheDocument(),await o.click(a.getByRole("button",{name:"Tentar de novo"})),await e(await a.findByText(/Não foi possível carregar o roteiro/)).toBeInTheDocument(),await i()}},g={name:"Erro do servidor",args:{rotaInicial:s},parameters:{jornada:{...l,falhar:[u]}},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText(/O servidor teve um problema ao carregar o roteiro/)).toBeInTheDocument(),await e(a.queryByText(/api falsa/)).not.toBeInTheDocument(),await e(a.getByRole("button",{name:"Tentar de novo"})).toBeInTheDocument(),await e(a.getByRole("link",{name:"Voltar para Roteiros"})).toBeInTheDocument(),await i()}},x={name:"Erro: sem permissão",args:{rotaInicial:s},parameters:{jornada:{...l,respostas:{[u]:{status:403,corpo:{erro:"sem permissão"}}}}},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText(/não tem permissão para ver o roteiro/)).toBeInTheDocument(),await e(a.queryByRole("button",{name:"Tentar de novo"})).not.toBeInTheDocument(),await i()}},R={name:"Erro: não encontrado",args:{rotaInicial:"/roteiros/editar/rot_inexistente/1"},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText("Roteiro não encontrado.")).toBeInTheDocument(),await e(a.queryByRole("button",{name:"Tentar de novo"})).not.toBeInTheDocument(),await o.click(a.getByRole("button",{name:"Voltar à lista"})),await e(await a.findByRole("region",{name:/Roteiros/})).toBeInTheDocument(),await i()}},E={name:"Erro ao salvar: frase legível",args:{rotaInicial:s},parameters:{jornada:{...l,respostas:{[f]:{status:400,corpo:{detalhe:{campo:"perguntas",codigo:17}}}}}},play:async({canvasElement:t})=>{const a=r(t);await o.click(await a.findByRole("button",{name:"Salvar como nova versão"}));const n=await a.findByRole("alert");await e(n).toHaveTextContent("O servidor recusou o roteiro. Revise as perguntas e tente de novo."),await e(n.textContent).not.toMatch(/[{}]|codigo/),await i()}},T={name:"Erro ao salvar: no cartão da pergunta",args:{rotaInicial:s},parameters:{jornada:{...l,respostas:{[f]:{status:400,corpo:{erro:'p2: negativa ativa sem "mensagem", escreva o que a assistente fala no não'}}}}},play:async({canvasElement:t})=>{const a=r(t);await o.click(await a.findByRole("button",{name:"Salvar como nova versão"}));const n=await a.findByRole("alert");await e(n).toHaveTextContent(/p2: negativa ativa/),await ga(()=>e(n.closest(".pergunta-cartao")).not.toBeNull()),await e(h(n.closest(".pergunta-cartao")).getByText("p2",{selector:".pid"})).toBeInTheDocument(),await i()}},D={name:"Erro ao salvar: sem conexão",args:{rotaInicial:s},parameters:{jornada:{...l,semRede:[f]}},play:async({canvasElement:t})=>{const a=r(t);await o.click(await a.findByRole("button",{name:"Salvar como nova versão"})),await e(await a.findByRole("alert")).toHaveTextContent(/Sem conexão\. Seu roteiro continua aqui/),await e(a.getByRole("button",{name:"Salvar como nova versão"})).toBeEnabled(),await i()}},b={name:"Vazio: roteiro sem perguntas",args:{rotaInicial:s},parameters:{jornada:{...l,respostas:{[u]:{status:200,corpo:{id:"rot_consignado_novo",versao:3,convenio:"Consignado",produto:"contrato novo",perguntas:[]}}}}},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText("0 perguntas")).toBeInTheDocument(),await o.click(a.getByRole("button",{name:/Adicionar pergunta.*entra como p1/})),await e(a.getByRole("button",{name:"Subir p1"})).toBeDisabled(),await i()}},I={name:"Vazio: nenhum roteiro",parameters:{jornada:{...l,respostas:{"GET /v1/roteiros":{status:200,corpo:[]}}}},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText("Nenhum roteiro ainda")).toBeInTheDocument(),await i()}},Ka=["Padrao","Editor","AvisoDeSaida","Novo","Carregando","SemRede","ErroDoServidor","SemPermissao","NaoEncontrado","ErroAoSalvar","ErroDaPergunta","SemRedeAoSalvar","Vazio","ListaVazia"];var A,k,C;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Padrão: lista",
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByRole("region", {
      name: /Roteiros/
    })).toBeInTheDocument();
    await expect((await tela.findAllByText(/contrato novo/)).length).toBeGreaterThan(0);
    await semRotaSemFixture();
  }
}`,...(C=(k=d.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var _,q,V;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Editor: subir, descer e publicar",
  args: {
    rotaInicial: EDITOR
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByRole("heading", {
      name: "Consignado · contrato novo",
      level: 2
    })).toBeInTheDocument();
    const antes = resumos(canvasElement);
    await step("Descer p1 troca com a seguinte", async () => {
      await userEvent.click(tela.getByRole("button", {
        name: "Descer p1"
      }));
      await expect(resumos(canvasElement)).toEqual([antes[1], antes[0], ...antes.slice(2)]);
      await expect(ordem(canvasElement).slice(0, 2)).toEqual(["p1", "p2"]);
    });
    await step("Subir p2 desfaz a troca", async () => {
      await userEvent.click(tela.getByRole("button", {
        name: "Subir p2"
      }));
      await expect(resumos(canvasElement)).toEqual(antes);
    });
    await step("Primeira não sobe e última não desce", async () => {
      await expect(tela.getByRole("button", {
        name: "Subir p1"
      })).toBeDisabled();
      await expect(tela.getByRole("button", {
        name: "Descer p6"
      })).toBeDisabled();
    });
    await step("Índice e régua do veredito abrem e fecham", async () => {
      const indice = tela.getByRole("button", {
        name: "Ir para a pergunta"
      });
      if (indice.getAttribute("aria-expanded") === "false") await userEvent.click(indice);
      await expect(indice).toHaveAttribute("aria-expanded", "true");
      const regua = tela.getByRole("button", {
        name: "Como o roteiro vira veredito"
      });
      await userEvent.click(regua);
      await expect(regua).toHaveAttribute("aria-expanded", "true");
      await expect(tela.getByText("Aprova automático")).toBeVisible();
    });
    await step("Expandir todas abre os cartões", async () => {
      await userEvent.click(tela.getByRole("button", {
        name: "Expandir todas"
      }));
      await expect(tela.getByRole("button", {
        name: "Recolher todas"
      })).toBeInTheDocument();
    });
    await step("Publicar cria a v4 e segue no editor", async () => {
      await userEvent.click(tela.getByRole("button", {
        name: "Salvar como nova versão"
      }));
      await expect(await tela.findByText(/Publicado: rot_consignado_novo v4/)).toBeInTheDocument();
    });
    await semRotaSemFixture();
  }
}`,...(V=(q=p.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var N,P,F;w.parameters={...w.parameters,docs:{...(N=w.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Editor: aviso de saída",
  args: {
    rotaInicial: EDITOR
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    const pagina = within(canvasElement.ownerDocument.body);
    await expect(await tela.findByRole("heading", {
      name: "Consignado · contrato novo",
      level: 2
    })).toBeInTheDocument();
    await step("Subir e descer de volta não conta como alteração: Voltar sai direto", async () => {
      await userEvent.click(tela.getByRole("button", {
        name: "Descer p1"
      }));
      await userEvent.click(tela.getByRole("button", {
        name: "Subir p2"
      }));
      await userEvent.click(tela.getByRole("link", {
        name: "Voltar para Roteiros"
      }));
      await expect(await tela.findByRole("region", {
        name: /Roteiros/
      })).toBeInTheDocument();
      await expect(pagina.queryByText("Sair sem salvar?")).not.toBeInTheDocument();
    });
    await step("Trocar a ordem e tentar sair pergunta, citando o roteiro", async () => {
      await userEvent.click((await tela.findAllByRole("link", {
        name: /contrato novo/
      }))[0]);
      await expect(await tela.findByRole("heading", {
        name: "Consignado · contrato novo",
        level: 2
      })).toBeInTheDocument();
      await userEvent.click(tela.getByRole("button", {
        name: "Descer p1"
      }));
      await userEvent.click(tela.getByRole("link", {
        name: "Voltar para Roteiros"
      }));
      const modal = within(await pagina.findByRole("dialog", {
        name: "Sair sem salvar?"
      }));
      await expect(modal.getByText(/alterações não salvas em Roteiro “Consignado · contrato novo”/)).toBeInTheDocument();
      await userEvent.click(modal.getByRole("button", {
        name: "Continuar editando"
      }));
      await waitFor(() => expect(pagina.queryByRole("dialog", {
        name: "Sair sem salvar?"
      })).not.toBeInTheDocument());
      await expect(tela.getByRole("heading", {
        name: "Consignado · contrato novo",
        level: 2
      })).toBeInTheDocument();
    });
    await step("Publicar e depois sair não pergunta", async () => {
      await userEvent.click(tela.getByRole("button", {
        name: "Salvar como nova versão"
      }));
      await expect(await tela.findByText(/Publicado: rot_consignado_novo v4/)).toBeInTheDocument();
      await userEvent.click(tela.getByRole("link", {
        name: "Voltar para Roteiros"
      }));
      await expect(await tela.findByRole("region", {
        name: /Roteiros/
      })).toBeInTheDocument();
      await expect(pagina.queryByText("Sair sem salvar?")).not.toBeInTheDocument();
    });
    await semRotaSemFixture();
  }
}`,...(F=(P=w.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var j,G,J;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Editor: roteiro novo",
  args: {
    rotaInicial: "/roteiros/novo"
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Novo roteiro")).toBeInTheDocument();
    await expect(tela.getByRole("button", {
      name: "Subir p1"
    })).toBeDisabled();
    await expect(tela.getByRole("button", {
      name: "Descer p1"
    })).toBeDisabled();
    await semRotaSemFixture();
  }
}`,...(J=(G=v.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var H,z,L;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    rotaInicial: EDITOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      pendurar: [VERSAO]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/Carregando o roteiro/)).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: "Salvar como nova versão"
    })).not.toBeInTheDocument();
  }
}`,...(L=(z=y.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var U,M,K;B.parameters={...B.parameters,docs:{...(U=B.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "Erro de rede: sem editor",
  args: {
    rotaInicial: EDITOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      semRede: [VERSAO]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/Não foi possível carregar o roteiro/)).toBeInTheDocument();
    await expect(tela.queryByText(/Carregando o roteiro/)).not.toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: "Salvar como nova versão"
    })).not.toBeInTheDocument();
    await userEvent.click(tela.getByRole("button", {
      name: "Tentar de novo"
    }));
    await expect(await tela.findByText(/Não foi possível carregar o roteiro/)).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(K=(M=B.parameters)==null?void 0:M.docs)==null?void 0:K.source}}};var Y,Q,W;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "Erro do servidor",
  args: {
    rotaInicial: EDITOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      falhar: [VERSAO]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/O servidor teve um problema ao carregar o roteiro/)).toBeInTheDocument();
    await expect(tela.queryByText(/api falsa/)).not.toBeInTheDocument();
    await expect(tela.getByRole("button", {
      name: "Tentar de novo"
    })).toBeInTheDocument();
    await expect(tela.getByRole("link", {
      name: "Voltar para Roteiros"
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(W=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var X,Z,$;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: "Erro: sem permissão",
  args: {
    rotaInicial: EDITOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [VERSAO]: {
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
    await expect(await tela.findByText(/não tem permissão para ver o roteiro/)).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: "Tentar de novo"
    })).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...($=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var aa,ea,ta;R.parameters={...R.parameters,docs:{...(aa=R.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  name: "Erro: não encontrado",
  args: {
    rotaInicial: "/roteiros/editar/rot_inexistente/1"
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Roteiro não encontrado.")).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: "Tentar de novo"
    })).not.toBeInTheDocument();
    await userEvent.click(tela.getByRole("button", {
      name: "Voltar à lista"
    }));
    await expect(await tela.findByRole("region", {
      name: /Roteiros/
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(ta=(ea=R.parameters)==null?void 0:ea.docs)==null?void 0:ta.source}}};var na,oa,ra;E.parameters={...E.parameters,docs:{...(na=E.parameters)==null?void 0:na.docs,source:{originalSource:`{
  name: "Erro ao salvar: frase legível",
  args: {
    rotaInicial: EDITOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [PUBLICAR]: {
          status: 400,
          corpo: {
            detalhe: {
              campo: "perguntas",
              codigo: 17
            }
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await userEvent.click(await tela.findByRole("button", {
      name: "Salvar como nova versão"
    }));
    const alerta = await tela.findByRole("alert");
    await expect(alerta).toHaveTextContent("O servidor recusou o roteiro. Revise as perguntas e tente de novo.");
    await expect(alerta.textContent).not.toMatch(/[{}]|codigo/);
    await semRotaSemFixture();
  }
}`,...(ra=(oa=E.parameters)==null?void 0:oa.docs)==null?void 0:ra.source}}};var ia,sa,ca;T.parameters={...T.parameters,docs:{...(ia=T.parameters)==null?void 0:ia.docs,source:{originalSource:`{
  name: "Erro ao salvar: no cartão da pergunta",
  args: {
    rotaInicial: EDITOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [PUBLICAR]: {
          status: 400,
          corpo: {
            erro: "p2: negativa ativa sem \\"mensagem\\", escreva o que a assistente fala no não"
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await userEvent.click(await tela.findByRole("button", {
      name: "Salvar como nova versão"
    }));
    const alerta = await tela.findByRole("alert");
    await expect(alerta).toHaveTextContent(/p2: negativa ativa/);
    await waitFor(() => expect(alerta.closest(".pergunta-cartao")).not.toBeNull());
    await expect(within(alerta.closest(".pergunta-cartao") as HTMLElement).getByText("p2", {
      selector: ".pid"
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(ca=(sa=T.parameters)==null?void 0:sa.docs)==null?void 0:ca.source}}};var la,ma,ua;D.parameters={...D.parameters,docs:{...(la=D.parameters)==null?void 0:la.docs,source:{originalSource:`{
  name: "Erro ao salvar: sem conexão",
  args: {
    rotaInicial: EDITOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      semRede: [PUBLICAR]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await userEvent.click(await tela.findByRole("button", {
      name: "Salvar como nova versão"
    }));
    await expect(await tela.findByRole("alert")).toHaveTextContent(/Sem conexão\\. Seu roteiro continua aqui/);
    await expect(tela.getByRole("button", {
      name: "Salvar como nova versão"
    })).toBeEnabled();
    await semRotaSemFixture();
  }
}`,...(ua=(ma=D.parameters)==null?void 0:ma.docs)==null?void 0:ua.source}}};var da,pa,wa;b.parameters={...b.parameters,docs:{...(da=b.parameters)==null?void 0:da.docs,source:{originalSource:`{
  name: "Vazio: roteiro sem perguntas",
  args: {
    rotaInicial: EDITOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [VERSAO]: {
          status: 200,
          corpo: {
            id: "rot_consignado_novo",
            versao: 3,
            convenio: "Consignado",
            produto: "contrato novo",
            perguntas: []
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("0 perguntas")).toBeInTheDocument();
    await userEvent.click(tela.getByRole("button", {
      name: /Adicionar pergunta.*entra como p1/
    }));
    await expect(tela.getByRole("button", {
      name: "Subir p1"
    })).toBeDisabled();
    await semRotaSemFixture();
  }
}`,...(wa=(pa=b.parameters)==null?void 0:pa.docs)==null?void 0:wa.source}}};var va,ya,Ba;I.parameters={...I.parameters,docs:{...(va=I.parameters)==null?void 0:va.docs,source:{originalSource:`{
  name: "Vazio: nenhum roteiro",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        "GET /v1/roteiros": {
          status: 200,
          corpo: []
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Nenhum roteiro ainda")).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(Ba=(ya=I.parameters)==null?void 0:ya.docs)==null?void 0:Ba.source}}};export{w as AvisoDeSaida,y as Carregando,p as Editor,E as ErroAoSalvar,T as ErroDaPergunta,g as ErroDoServidor,I as ListaVazia,R as NaoEncontrado,v as Novo,d as Padrao,x as SemPermissao,B as SemRede,D as SemRedeAoSalvar,b as Vazio,Ka as __namedExportsOrder,Ma as default};
