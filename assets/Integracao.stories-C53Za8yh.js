import{C as c,a as ea,m as ta}from"./jornadaAdmin-CEu4Iqj7.js";import{t as i,s,d as oa}from"./jornadaOperar-BXGi3LO3.js";import"./ShellJornada-CEvPgnxB.js";import"./jsx-runtime-5_h1ggUY.js";import"./iframe-DruNtuiI.js";import"./preload-helper-D6kgxu3v.js";import"./dadosShell-DtXMTPCY.js";import"./index-C-mb7IqI.js";import"./index-Di2eVLJq.js";import"./v2-84aqWlA8.js";import"./index-Bi4MUife.js";import"./api-CwdEbqb0.js";import"./index-DHkLSF23.js";import"./marca-CA0y2m0X.js";import"./carregando-BPTr5NIa.js";import"./celulas-D28WY2js.js";/* empty css              */import"./MiniBarras-B-RmbX_7.js";import"./paleta-CAXSK6uJ.js";import"./Login-BpKl7o1u.js";/* empty css                */import"./ShellGestao-DeGOnHqh.js";const{expect:e,userEvent:n,waitFor:na,within:m}=__STORYBOOK_MODULE_TEST__,ra=ta("/integracao","Jornada de Integração dentro do shell: abas API Keys, Webhooks, Documentação e Testar API (rolam por dentro a 375). Criar chave e salvar webhook saem uma vez só, mesmo com dois cliques; revogar ou excluir que falha deixa o modal aberto com o motivo; cada lista falha sozinha; 403 mostra o aviso de permissão; a Documentação mostra Tentar de novo em vez de carregar para sempre."),d="GET /v1/apikeys",g="GET /v1/webhooks",ia="GET /v1/campos-sessao",ka={title:"Jornadas/Integração",...ra};async function l(o,a){const t=m(await o.findByRole("tablist",{name:"Seções da integração"}));await n.click(t.getByRole("tab",{name:a})),await e(t.getByRole("tab",{name:a})).toHaveAttribute("aria-selected","true")}async function Z(o,a){const t=await o.findAllByRole("button",{name:`Mais ações de ${a}`});return await n.click(t[0]),m(await o.findByRole("menu"))}const u={name:"Padrão",play:async({canvasElement:o,step:a})=>{const t=i(o);await e((await t.findAllByText("ERP Aurora (produção)")).length).toBeGreaterThan(0),await e(t.getByRole("tabpanel")).toBeInTheDocument(),await a("Nova API key: cria e mostra a chave uma vez",async()=>{await n.click(t.getAllByRole("button",{name:/Nova API key/})[0]);const r=m(await t.findByRole("dialog"));await oa(r.getByRole("textbox",{name:/Nome/}),"Robô de conciliação"),await n.click(r.getByRole("button",{name:"1 ano"})),await e(r.getByRole("button",{name:"1 ano"})).toHaveAttribute("aria-pressed","true"),await n.click(r.getByRole("button",{name:"Gerar chave"})),await e(await r.findByText(/svk_N3w0_chave_completa/)).toBeInTheDocument(),await n.click(r.getByRole("button",{name:"Concluir"})),await e((await t.findAllByText("Robô de conciliação")).length).toBeGreaterThan(0)}),await a("Copiar tem nome com o que copia",async()=>{await n.click(t.getByRole("button",{name:"Copiar os headers de autenticação"}))}),await a("Revogar: confirma e a chave fica revogada",async()=>{const r=await Z(t,"Robô de conciliação");await n.click(r.getByRole("menuitem",{name:"Revogar"}));const aa=m(await t.findByRole("dialog"));await n.click(aa.getByRole("button",{name:"Revogar"})),await na(()=>e(t.queryByRole("dialog")).not.toBeInTheDocument())}),await a("Webhooks: lista e formulário com alternados",async()=>{await l(t,"Webhooks"),await e((await t.findAllByText("ERP Aurora")).length).toBeGreaterThan(0),await n.click(t.getAllByRole("button",{name:/Novo webhook/})[0]);const r=m(await t.findByRole("dialog"));await n.click(r.getByRole("button",{name:"GET"})),await e(r.getByRole("button",{name:"GET"})).toHaveAttribute("aria-pressed","true"),await n.click(r.getByRole("button",{name:"Cancelar"}))}),await a("Documentação: catálogo da empresa",async()=>{await l(t,"Documentação"),await e(await t.findByText("Dados do cliente")).toBeInTheDocument()}),await a("Testar API: rota escolhida com aria-pressed",async()=>{await l(t,"Testar API"),await n.click(await t.findByRole("button",{name:"Criar sessão"})),await e(t.getByRole("button",{name:"Criar sessão"})).toHaveAttribute("aria-pressed","true"),await n.click(t.getByRole("button",{name:"Enviar POST"})),await e(await t.findByText(/Cole uma API key válida/)).toBeInTheDocument()}),await s()}},p={name:"Super admin: empresa do topo",parameters:{jornada:ea},play:async({canvasElement:o})=>{const a=i(o);await e((await a.findAllByText("ERP Aurora (produção)")).length).toBeGreaterThan(0),await e(a.queryByText("Escolha a entidade no seletor do topo")).not.toBeInTheDocument(),await s()}},w={parameters:{jornada:{...c,pendurar:[d,g]}},play:async({canvasElement:o})=>{const a=i(o);await e(await a.findByText("Carregando as chaves…")).toBeInTheDocument(),await e(a.queryByText("Tentar de novo")).not.toBeInTheDocument()}},y={parameters:{jornada:{...c,respostas:{[d]:{corpo:[]},[g]:{corpo:[]}}}},play:async({canvasElement:o})=>{const a=i(o);await e(await a.findByText("Nenhuma chave ainda")).toBeInTheDocument(),await l(a,"Webhooks"),await e(await a.findByText("Nenhum webhook ainda")).toBeInTheDocument(),await s()}},B={name:"Erro do servidor nos webhooks: chaves continuam",parameters:{jornada:{...c,falhar:[g]}},play:async({canvasElement:o})=>{const a=i(o);await e((await a.findAllByText("ERP Aurora (produção)")).length).toBeGreaterThan(0),await l(a,"Webhooks"),await e(await a.findByText(/O servidor teve um problema ao carregar os webhooks/)).toBeInTheDocument(),await e(a.queryByText(/api falsa/)).not.toBeInTheDocument(),await e(a.getByRole("button",{name:/Tentar de novo/})).toBeInTheDocument(),await s()}},E={name:"Erro de rede nas chaves",parameters:{jornada:{...c,semRede:[d]}},play:async({canvasElement:o})=>{const a=i(o);await e(await a.findByText(/Não foi possível carregar as chaves. Verifique a conexão/)).toBeInTheDocument(),await n.click(a.getByRole("button",{name:/Tentar de novo/})),await e(await a.findByText(/Não foi possível carregar as chaves/)).toBeInTheDocument(),await s()}},x={name:"Erro: 404 nas chaves",parameters:{jornada:{...c,respostas:{[d]:{status:404,corpo:{erro:"rota não existe"}}}}},play:async({canvasElement:o})=>{const a=i(o);await e(await a.findByText(/O servidor não encontrou as chaves/)).toBeInTheDocument(),await e(a.queryByRole("button",{name:/Tentar de novo/})).not.toBeInTheDocument(),await s()}},v={name:"Erro: sem permissão (403)",parameters:{jornada:{...c,respostas:{[d]:{status:403,corpo:{erro:"proibido"}}}}},play:async({canvasElement:o})=>{const a=i(o);await e(await a.findByText(/não tem permissão para ver a integração/)).toBeInTheDocument(),await e(a.queryByRole("tablist")).not.toBeInTheDocument(),await s()}},h={name:"Erro ao revogar: modal fica com o motivo",parameters:{jornada:{...c,respostas:{"DELETE /v1/apikeys/:id":{status:409,corpo:{erro:"A chave está em uso por um lote em andamento."}}}}},play:async({canvasElement:o})=>{const a=i(o);await e((await a.findAllByText("ERP Aurora (produção)")).length).toBeGreaterThan(0);const t=await Z(a,"ERP Aurora (produção)");await n.click(t.getByRole("menuitem",{name:"Revogar"}));const r=m(await a.findByRole("dialog"));await n.click(r.getByRole("button",{name:"Revogar"})),await e(await r.findByText("A chave está em uso por um lote em andamento.")).toBeInTheDocument(),await e(a.getByRole("dialog")).toBeInTheDocument(),await n.click(r.getByRole("button",{name:"Cancelar"})),await s()}},T={name:"Documentação: catálogo sem rede",parameters:{jornada:{...c,semRede:[ia]}},play:async({canvasElement:o})=>{const a=i(o);await l(a,"Documentação"),await e(await a.findByText(/Não foi possível carregar o catálogo de campos/)).toBeInTheDocument(),await e(a.queryByText("Carregando catálogo…")).not.toBeInTheDocument(),await e(a.getByRole("button",{name:/Tentar de novo/})).toBeInTheDocument(),await s()}},Sa=["Padrao","Super","Carregando","Vazio","ErroDoServidor","SemRede","NaoEncontrado","SemPermissao","ErroAoRevogar","DocumentacaoComErro"];var R,b,D;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Padrão",
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await expect((await tela.findAllByText("ERP Aurora (produção)")).length).toBeGreaterThan(0);
    await expect(tela.getByRole("tabpanel")).toBeInTheDocument();
    await step("Nova API key: cria e mostra a chave uma vez", async () => {
      await userEvent.click(tela.getAllByRole("button", {
        name: /Nova API key/
      })[0]);
      const modal = within(await tela.findByRole("dialog"));
      await digitar(modal.getByRole("textbox", {
        name: /Nome/
      }), "Robô de conciliação");
      await userEvent.click(modal.getByRole("button", {
        name: "1 ano"
      }));
      await expect(modal.getByRole("button", {
        name: "1 ano"
      })).toHaveAttribute("aria-pressed", "true");
      await userEvent.click(modal.getByRole("button", {
        name: "Gerar chave"
      }));
      await expect(await modal.findByText(/svk_N3w0_chave_completa/)).toBeInTheDocument();
      await userEvent.click(modal.getByRole("button", {
        name: "Concluir"
      }));
      await expect((await tela.findAllByText("Robô de conciliação")).length).toBeGreaterThan(0);
    });
    await step("Copiar tem nome com o que copia", async () => {
      await userEvent.click(tela.getByRole("button", {
        name: "Copiar os headers de autenticação"
      }));
    });
    await step("Revogar: confirma e a chave fica revogada", async () => {
      const menu = await abrirMenuDe(tela, "Robô de conciliação");
      await userEvent.click(menu.getByRole("menuitem", {
        name: "Revogar"
      }));
      const modal = within(await tela.findByRole("dialog"));
      await userEvent.click(modal.getByRole("button", {
        name: "Revogar"
      }));
      await waitFor(() => expect(tela.queryByRole("dialog")).not.toBeInTheDocument());
    });
    await step("Webhooks: lista e formulário com alternados", async () => {
      await abrirAba(tela, "Webhooks");
      await expect((await tela.findAllByText("ERP Aurora")).length).toBeGreaterThan(0);
      await userEvent.click(tela.getAllByRole("button", {
        name: /Novo webhook/
      })[0]);
      const modal = within(await tela.findByRole("dialog"));
      await userEvent.click(modal.getByRole("button", {
        name: "GET"
      }));
      await expect(modal.getByRole("button", {
        name: "GET"
      })).toHaveAttribute("aria-pressed", "true");
      await userEvent.click(modal.getByRole("button", {
        name: "Cancelar"
      }));
    });
    await step("Documentação: catálogo da empresa", async () => {
      await abrirAba(tela, "Documentação");
      await expect(await tela.findByText("Dados do cliente")).toBeInTheDocument();
    });
    await step("Testar API: rota escolhida com aria-pressed", async () => {
      await abrirAba(tela, "Testar API");
      await userEvent.click(await tela.findByRole("button", {
        name: "Criar sessão"
      }));
      await expect(tela.getByRole("button", {
        name: "Criar sessão"
      })).toHaveAttribute("aria-pressed", "true");
      await userEvent.click(tela.getByRole("button", {
        name: "Enviar POST"
      }));
      await expect(await tela.findByText(/Cole uma API key válida/)).toBeInTheDocument();
    });
    await semRotaSemFixture();
  }
}`,...(D=(b=u.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var A,f,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Super admin: empresa do topo",
  parameters: {
    jornada: CENARIO_SUPER
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect((await tela.findAllByText("ERP Aurora (produção)")).length).toBeGreaterThan(0);
    await expect(tela.queryByText("Escolha a entidade no seletor do topo")).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(I=(f=p.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var k,S,C;w.parameters={...w.parameters,docs:{...(k=w.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      pendurar: [CHAVES, WEBHOOKS]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Carregando as chaves…")).toBeInTheDocument();
    await expect(tela.queryByText("Tentar de novo")).not.toBeInTheDocument();
  }
}`,...(C=(S=w.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var N,O,P;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      respostas: {
        [CHAVES]: {
          corpo: []
        },
        [WEBHOOKS]: {
          corpo: []
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Nenhuma chave ainda")).toBeInTheDocument();
    await abrirAba(tela, "Webhooks");
    await expect(await tela.findByText("Nenhum webhook ainda")).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(P=(O=y.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var _,G,q;B.parameters={...B.parameters,docs:{...(_=B.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Erro do servidor nos webhooks: chaves continuam",
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      falhar: [WEBHOOKS]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect((await tela.findAllByText("ERP Aurora (produção)")).length).toBeGreaterThan(0);
    await abrirAba(tela, "Webhooks");
    await expect(await tela.findByText(/O servidor teve um problema ao carregar os webhooks/)).toBeInTheDocument();
    await expect(tela.queryByText(/api falsa/)).not.toBeInTheDocument();
    await expect(tela.getByRole("button", {
      name: /Tentar de novo/
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(q=(G=B.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};var j,H,F;E.parameters={...E.parameters,docs:{...(j=E.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Erro de rede nas chaves",
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      semRede: [CHAVES]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/Não foi possível carregar as chaves. Verifique a conexão/)).toBeInTheDocument();
    await userEvent.click(tela.getByRole("button", {
      name: /Tentar de novo/
    }));
    await expect(await tela.findByText(/Não foi possível carregar as chaves/)).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(F=(H=E.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};var M,W,J;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Erro: 404 nas chaves",
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      respostas: {
        [CHAVES]: {
          status: 404,
          corpo: {
            erro: "rota não existe"
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/O servidor não encontrou as chaves/)).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: /Tentar de novo/
    })).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(J=(W=x.parameters)==null?void 0:W.docs)==null?void 0:J.source}}};var V,z,K;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "Erro: sem permissão (403)",
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      respostas: {
        [CHAVES]: {
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
    await expect(await tela.findByText(/não tem permissão para ver a integração/)).toBeInTheDocument();
    await expect(tela.queryByRole("tablist")).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(K=(z=v.parameters)==null?void 0:z.docs)==null?void 0:K.source}}};var L,U,Y;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "Erro ao revogar: modal fica com o motivo",
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      respostas: {
        "DELETE /v1/apikeys/:id": {
          status: 409,
          corpo: {
            erro: "A chave está em uso por um lote em andamento."
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect((await tela.findAllByText("ERP Aurora (produção)")).length).toBeGreaterThan(0);
    const menu = await abrirMenuDe(tela, "ERP Aurora (produção)");
    await userEvent.click(menu.getByRole("menuitem", {
      name: "Revogar"
    }));
    const modal = within(await tela.findByRole("dialog"));
    await userEvent.click(modal.getByRole("button", {
      name: "Revogar"
    }));
    await expect(await modal.findByText("A chave está em uso por um lote em andamento.")).toBeInTheDocument();
    await expect(tela.getByRole("dialog")).toBeInTheDocument();
    await userEvent.click(modal.getByRole("button", {
      name: "Cancelar"
    }));
    await semRotaSemFixture();
  }
}`,...(Y=(U=h.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var $,Q,X;T.parameters={...T.parameters,docs:{...($=T.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "Documentação: catálogo sem rede",
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      semRede: [CATALOGO]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await abrirAba(tela, "Documentação");
    await expect(await tela.findByText(/Não foi possível carregar o catálogo de campos/)).toBeInTheDocument();
    await expect(tela.queryByText("Carregando catálogo…")).not.toBeInTheDocument();
    await expect(tela.getByRole("button", {
      name: /Tentar de novo/
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(X=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};export{w as Carregando,T as DocumentacaoComErro,h as ErroAoRevogar,B as ErroDoServidor,x as NaoEncontrado,u as Padrao,v as SemPermissao,E as SemRede,p as Super,y as Vazio,Sa as __namedExportsOrder,ka as default};
