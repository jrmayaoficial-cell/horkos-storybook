import{C as s,m as de}from"./jornadaGestao-BhU6zLQF.js";import{t as o,s as i}from"./jornadaOperar-bAw7m3v_.js";import"./ShellJornada-Bk_yMwyO.js";import"./jsx-runtime-CnGeCed7.js";import"./iframe-TWammDK-.js";import"./preload-helper-D6kgxu3v.js";import"./dadosShell-Bl7FkIX8.js";import"./index-Be4RGSV8.js";import"./index-BG6Z0xWT.js";import"./v2-DPlIulHz.js";import"./index-Coq9CpY8.js";import"./api-CwdEbqb0.js";import"./index-DxMpz5Et.js";import"./marca-Bxw3C_az.js";import"./carregando-Cecq3Orn.js";import"./celulas-CN9Gpmx2.js";/* empty css              */import"./MiniBarras-Btaw0BA0.js";import"./paleta-CAXSK6uJ.js";import"./Login-qkThBxEk.js";/* empty css                */import"./ShellGestao-BWXVhdy9.js";const{expect:a,userEvent:r,waitFor:we,within:ve}=__STORYBOOK_MODULE_TEST__,ye=de("/roteiros",'Jornada de roteiros dentro do shell: lista e editor. No editor, cada pergunta tem Subir e Descer (44 px, com o número da pergunta no nome) além do arraste; o índice e a régua do veredito ficam em seções recolhíveis (fechadas no celular). Com a carga falhando o editor não aparece (antes ficava no carregando para sempre); roteiro que não existe mostra "não encontrado" com Voltar; erro ao publicar aparece em frase, nunca o JSON da resposta, e o erro de uma pergunta aparece no cartão dela.'),l="GET /v1/roteiros/:id/:versao",S="POST /v1/roteiros",c="/roteiros/editar/rot_consignado_novo/3",Ge={title:"Jornadas/Roteiros",...ye};function Be(t){return[...t.ownerDocument.querySelectorAll(".roteiro-perguntas .pergunta-cabeca .pid")].map(e=>e.textContent)}function I(t){return[...t.ownerDocument.querySelectorAll(".roteiro-perguntas .pergunta-resumo")].map(e=>e.textContent)}const p={name:"Padrão: lista",play:async({canvasElement:t})=>{const e=o(t);await a(await e.findByRole("region",{name:/Roteiros/})).toBeInTheDocument(),await a((await e.findAllByText(/contrato novo/)).length).toBeGreaterThan(0),await i()}},u={name:"Editor: subir, descer e publicar",args:{rotaInicial:c},play:async({canvasElement:t,step:e})=>{const n=o(t);await a(await n.findByRole("heading",{name:"Consignado · contrato novo",level:2})).toBeInTheDocument();const m=I(t);await e("Descer p1 troca com a seguinte",async()=>{await r.click(n.getByRole("button",{name:"Descer p1"})),await a(I(t)).toEqual([m[1],m[0],...m.slice(2)]),await a(Be(t).slice(0,2)).toEqual(["p1","p2"])}),await e("Subir p2 desfaz a troca",async()=>{await r.click(n.getByRole("button",{name:"Subir p2"})),await a(I(t)).toEqual(m)}),await e("Primeira não sobe e última não desce",async()=>{await a(n.getByRole("button",{name:"Subir p1"})).toBeDisabled(),await a(n.getByRole("button",{name:"Descer p6"})).toBeDisabled()}),await e("Índice e régua do veredito abrem e fecham",async()=>{const b=n.getByRole("button",{name:"Ir para a pergunta"});b.getAttribute("aria-expanded")==="false"&&await r.click(b),await a(b).toHaveAttribute("aria-expanded","true");const f=n.getByRole("button",{name:"Como o roteiro vira veredito"});await r.click(f),await a(f).toHaveAttribute("aria-expanded","true"),await a(n.getByText("Aprova automático")).toBeVisible()}),await e("Expandir todas abre os cartões",async()=>{await r.click(n.getByRole("button",{name:"Expandir todas"})),await a(n.getByRole("button",{name:"Recolher todas"})).toBeInTheDocument()}),await e("Publicar cria a v4 e segue no editor",async()=>{await r.click(n.getByRole("button",{name:"Salvar como nova versão"})),await a(await n.findByText(/Publicado: rot_consignado_novo v4/)).toBeInTheDocument()}),await i()}},d={name:"Editor: roteiro novo",args:{rotaInicial:"/roteiros/novo"},play:async({canvasElement:t})=>{const e=o(t);await a(await e.findByText("Novo roteiro")).toBeInTheDocument(),await a(e.getByRole("button",{name:"Subir p1"})).toBeDisabled(),await a(e.getByRole("button",{name:"Descer p1"})).toBeDisabled(),await i()}},w={args:{rotaInicial:c},parameters:{jornada:{...s,pendurar:[l]}},play:async({canvasElement:t})=>{const e=o(t);await a(await e.findByText(/Carregando o roteiro/)).toBeInTheDocument(),await a(e.queryByRole("button",{name:"Salvar como nova versão"})).not.toBeInTheDocument()}},v={name:"Erro de rede: sem editor",args:{rotaInicial:c},parameters:{jornada:{...s,semRede:[l]}},play:async({canvasElement:t})=>{const e=o(t);await a(await e.findByText(/Não foi possível carregar o roteiro/)).toBeInTheDocument(),await a(e.queryByText(/Carregando o roteiro/)).not.toBeInTheDocument(),await a(e.queryByRole("button",{name:"Salvar como nova versão"})).not.toBeInTheDocument(),await r.click(e.getByRole("button",{name:"Tentar de novo"})),await a(await e.findByText(/Não foi possível carregar o roteiro/)).toBeInTheDocument(),await i()}},y={name:"Erro do servidor",args:{rotaInicial:c},parameters:{jornada:{...s,falhar:[l]}},play:async({canvasElement:t})=>{const e=o(t);await a(await e.findByText(/O servidor teve um problema ao carregar o roteiro/)).toBeInTheDocument(),await a(e.queryByText(/api falsa/)).not.toBeInTheDocument(),await a(e.getByRole("button",{name:"Tentar de novo"})).toBeInTheDocument(),await a(e.getByRole("link",{name:"Voltar para Roteiros"})).toBeInTheDocument(),await i()}},B={name:"Erro: sem permissão",args:{rotaInicial:c},parameters:{jornada:{...s,respostas:{[l]:{status:403,corpo:{erro:"sem permissão"}}}}},play:async({canvasElement:t})=>{const e=o(t);await a(await e.findByText(/não tem permissão para ver o roteiro/)).toBeInTheDocument(),await a(e.queryByRole("button",{name:"Tentar de novo"})).not.toBeInTheDocument(),await i()}},g={name:"Erro: não encontrado",args:{rotaInicial:"/roteiros/editar/rot_inexistente/1"},play:async({canvasElement:t})=>{const e=o(t);await a(await e.findByText("Roteiro não encontrado.")).toBeInTheDocument(),await a(e.queryByRole("button",{name:"Tentar de novo"})).not.toBeInTheDocument(),await r.click(e.getByRole("button",{name:"Voltar à lista"})),await a(await e.findByRole("region",{name:/Roteiros/})).toBeInTheDocument(),await i()}},E={name:"Erro ao salvar: frase legível",args:{rotaInicial:c},parameters:{jornada:{...s,respostas:{[S]:{status:400,corpo:{detalhe:{campo:"perguntas",codigo:17}}}}}},play:async({canvasElement:t})=>{const e=o(t);await r.click(await e.findByRole("button",{name:"Salvar como nova versão"}));const n=await e.findByRole("alert");await a(n).toHaveTextContent("O servidor recusou o roteiro. Revise as perguntas e tente de novo."),await a(n.textContent).not.toMatch(/[{}]|codigo/),await i()}},x={name:"Erro ao salvar: no cartão da pergunta",args:{rotaInicial:c},parameters:{jornada:{...s,respostas:{[S]:{status:400,corpo:{erro:'p2: negativa ativa sem "mensagem", escreva o que a assistente fala no não'}}}}},play:async({canvasElement:t})=>{const e=o(t);await r.click(await e.findByRole("button",{name:"Salvar como nova versão"}));const n=await e.findByRole("alert");await a(n).toHaveTextContent(/p2: negativa ativa/),await we(()=>a(n.closest(".pergunta-cartao")).not.toBeNull()),await a(ve(n.closest(".pergunta-cartao")).getByText("p2",{selector:".pid"})).toBeInTheDocument(),await i()}},R={name:"Erro ao salvar: sem conexão",args:{rotaInicial:c},parameters:{jornada:{...s,semRede:[S]}},play:async({canvasElement:t})=>{const e=o(t);await r.click(await e.findByRole("button",{name:"Salvar como nova versão"})),await a(await e.findByRole("alert")).toHaveTextContent(/Sem conexão\. Seu roteiro continua aqui/),await a(e.getByRole("button",{name:"Salvar como nova versão"})).toBeEnabled(),await i()}},T={name:"Vazio: roteiro sem perguntas",args:{rotaInicial:c},parameters:{jornada:{...s,respostas:{[l]:{status:200,corpo:{id:"rot_consignado_novo",versao:3,convenio:"Consignado",produto:"contrato novo",perguntas:[]}}}}},play:async({canvasElement:t})=>{const e=o(t);await a(await e.findByText("0 perguntas")).toBeInTheDocument(),await r.click(e.getByRole("button",{name:/Adicionar pergunta.*entra como p1/})),await a(e.getByRole("button",{name:"Subir p1"})).toBeDisabled(),await i()}},D={name:"Vazio: nenhum roteiro",parameters:{jornada:{...s,respostas:{"GET /v1/roteiros":{status:200,corpo:[]}}}},play:async({canvasElement:t})=>{const e=o(t);await a(await e.findByText("Nenhum roteiro ainda")).toBeInTheDocument(),await i()}},Je=["Padrao","Editor","Novo","Carregando","SemRede","ErroDoServidor","SemPermissao","NaoEncontrado","ErroAoSalvar","ErroDaPergunta","SemRedeAoSalvar","Vazio","ListaVazia"];var h,O,A;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(A=(O=p.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var C,_,k;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(k=(_=u.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var N,q,V;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(V=(q=d.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var P,j,F;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(F=(j=w.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var G,J,H;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(H=(J=v.parameters)==null?void 0:J.docs)==null?void 0:H.source}}};var z,L,U;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(U=(L=y.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var M,K,Y;B.parameters={...B.parameters,docs:{...(M=B.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(Y=(K=B.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var Q,W,X;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(X=(W=g.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Z,$,ee;E.parameters={...E.parameters,docs:{...(Z=E.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=($=E.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,te,ne;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ne=(te=x.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var oe,re,ie;R.parameters={...R.parameters,docs:{...(oe=R.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ie=(re=R.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var se,ce,le;T.parameters={...T.parameters,docs:{...(se=T.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(le=(ce=T.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var me,pe,ue;D.parameters={...D.parameters,docs:{...(me=D.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ue=(pe=D.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};export{w as Carregando,u as Editor,E as ErroAoSalvar,x as ErroDaPergunta,y as ErroDoServidor,D as ListaVazia,g as NaoEncontrado,d as Novo,p as Padrao,B as SemPermissao,v as SemRede,R as SemRedeAoSalvar,T as Vazio,Je as __namedExportsOrder,Ge as default};
