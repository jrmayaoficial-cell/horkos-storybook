import{Y as fa}from"./ShellJornada-8kfDBe3w.js";import{a as p,m as ha}from"./jornadaAdmin-MkcH1AsN.js";import{t as c,d as l,s as m}from"./jornadaOperar-LcZWFG-x.js";import"./jsx-runtime-BsO2-jW-.js";import"./iframe-6qGl2EVB.js";import"./preload-helper-D6kgxu3v.js";import"./dadosShell-BHjdb-Nm.js";import"./index-Q6NfAV-5.js";import"./index-DnJcPdT8.js";import"./v2-CYxomLkK.js";import"./index-eMXeSisO.js";import"./api-CwvJBfED.js";import"./index-QhBmMPum.js";import"./marca-B8tPJM_u.js";import"./carregando-BAF7tZg_.js";import"./celulas-BiCn5q_x.js";/* empty css              */import"./CartaoKpi-Cm8YdKKB.js";import"./MiniBarras-CryqdHNY.js";import"./cores-D-iLqYVd.js";import"./Login-DGTeEJrZ.js";import"./etapas-B82Qo7Am.js";/* empty css                */import"./ShellGestao-D5V2sw7G.js";const Ca="00.000.000/0002-00",S="12.ABC.345/01DE-35",Da={id:"emp-ipe",nome:"Ipê Crédito",cnpj:S,contato:"Marina Lopes",telefone:"(61) 3300-4400",endereco:"SCS Quadra 2, Bloco C, Asa Sul, Brasília - DF, 70302-000",email_cobranca:"financeiro@ipecredito.com.br",usuarios:2,sessoes:48,criada_em:"2026-09-01T12:00:00Z"};function Ia(){return[...fa(),Da]}const{expect:e,userEvent:i,waitFor:s,within:u}=__STORYBOOK_MODULE_TEST__,q=ha("/empresas",'Jornada de Empresas (só super admin) dentro do shell: lista em cartões até 899 px com o e-mail longo quebrando dentro do cartão, Nova empresa e Editar na gaveta lateral (folha inferior até 640, rodapé preso), com o foco no Nome. CNPJ (numérico ou alfanumérico), telefone e e-mail são conferidos antes de enviar; fechar com alteração pede "Descartar as alterações?"; durante o envio a gaveta não fecha. Salvar sai uma vez só; a falha aparece no topo do formulário sem fechar a gaveta; 403 diz que só o super admin acessa e esconde "Nova empresa".'),w="GET /v1/empresas",P="POST /v1/empresas",Na="PUT /v1/empresas/:id",Aa=640,Sa=44,Pa=12,Oa=2e3,ka="financeiro.cobranca.consignado.parceiros@borealconsignados-regional.com.br",ie={title:"Jornadas/Empresas",...q,parameters:{...q.parameters,jornada:p}};async function d(n){await e((await n.findAllByText("Boreal Consignados")).length).toBeGreaterThan(0)}async function O(n){await i.click(n.getAllByRole("button",{name:/Nova empresa/})[0]);const a=await n.findByRole("dialog");return await e(a).toHaveClass("op-gaveta"),a}async function y(n){const a=u(await O(n));return await l(a.getByRole("textbox",{name:/Nome da empresa/}),"Cerrado Promotora"),a}async function k(n){const a=u(n).getByRole("textbox",{name:/Nome da empresa/});await s(()=>e(n.ownerDocument.activeElement).toBe(a))}async function qa(n){const a=n.ownerDocument.defaultView,t=a.innerWidth,o=n.getAnimations({subtree:!0}).map(r=>r.finished.catch(()=>{}));await Promise.race([Promise.all(o),new Promise(r=>setTimeout(r,Oa))]);for(const r of n.querySelectorAll("*")){const B=r.getBoundingClientRect();B.width!==0&&await e(B.right).toBeLessThanOrEqual(t+.5)}for(const r of n.querySelectorAll("form button"))await e(r.getBoundingClientRect().height).toBeGreaterThanOrEqual(Sa);for(const r of n.querySelectorAll("label, label span:not([aria-hidden]), input, p, button"))await e(parseFloat(a.getComputedStyle(r).fontSize)).toBeGreaterThanOrEqual(Pa)}const x={name:"Padrão",play:async({canvasElement:n,step:a})=>{const t=c(n);await d(t),await e(t.getAllByText(ka).length).toBeGreaterThan(0),await a("Nova empresa: cria e entra na lista",async()=>{const o=await y(t);await i.click(o.getByRole("button",{name:"Criar empresa"})),await s(()=>e(t.queryByRole("dialog")).not.toBeInTheDocument()),await e(await t.findByText("Empresa criada.")).toBeInTheDocument(),await e((await t.findAllByText("Cerrado Promotora")).length).toBeGreaterThan(0)}),await a("Editar: abre com os dados e cancela sem alteração (fecha direto)",async()=>{await i.click(t.getByRole("button",{name:"Editar Boreal Consignados"}));const o=u(await t.findByRole("dialog"));await e(o.getByRole("textbox",{name:/Nome da empresa/})).toHaveValue("Boreal Consignados"),await i.click(o.getByRole("button",{name:"Cancelar"})),await s(()=>e(t.queryByRole("dialog")).not.toBeInTheDocument())}),await m()}},g={name:"Erro ao salvar: motivo no topo do formulário",parameters:{jornada:{...p,respostas:{[P]:{status:403,corpo:{erro:"apenas o super admin"}}}}},play:async({canvasElement:n})=>{const a=c(n);await d(a);const t=await y(a);await i.click(t.getByRole("button",{name:"Criar empresa"}));const o=await t.findByRole("alert");await s(()=>e(o).toHaveTextContent("Apenas o super admin altera empresas.")),await e(o).not.toHaveTextContent("apenas o super admin"),await e(a.getByRole("dialog")).toBeInTheDocument(),await i.click(t.getByRole("button",{name:"Cancelar"})),await i.click(await a.findByRole("button",{name:"Descartar"})),await s(()=>e(a.queryByRole("dialog")).not.toBeInTheDocument()),await m()}},v={parameters:{jornada:{...p,pendurar:[w]}},play:async({canvasElement:n})=>{const a=c(n);await e(await a.findByText("Carregando empresas…")).toBeInTheDocument(),await e(a.queryByRole("button",{name:/Tentar de novo/})).not.toBeInTheDocument()}},E={parameters:{jornada:{...p,respostas:{[w]:{corpo:[]}}}},play:async({canvasElement:n})=>{const a=c(n);await e(await a.findByText("Nenhuma empresa ainda")).toBeInTheDocument(),await m()}},R={name:"Erro do servidor",parameters:{jornada:{...p,falhar:[w]}},play:async({canvasElement:n})=>{const a=c(n);await e(await a.findByText(/O servidor teve um problema ao carregar as empresas/)).toBeInTheDocument(),await e(a.queryByText(/api falsa/)).not.toBeInTheDocument(),await i.click(a.getByRole("button",{name:/Tentar de novo/})),await e(await a.findByText(/O servidor teve um problema ao carregar as empresas/)).toBeInTheDocument(),await m()}},T={name:"Sem rede",parameters:{jornada:{...p,semRede:[w]}},play:async({canvasElement:n})=>{const a=c(n);await e(await a.findByText(/Não foi possível carregar as empresas. Verifique a conexão/)).toBeInTheDocument(),await e(a.getByRole("button",{name:/Tentar de novo/})).toBeInTheDocument(),await m()}},b={name:"Erro: sem permissão (403)",parameters:{jornada:{...p,respostas:{[w]:{status:403,corpo:{erro:"proibido"}}}}},play:async({canvasElement:n})=>{const a=c(n);await e(await a.findByText("Apenas o super admin acessa esta página.")).toBeInTheDocument(),await e(a.queryByRole("button",{name:/Tentar de novo/})).not.toBeInTheDocument(),await e(a.queryByRole("button",{name:/Nova empresa/})).not.toBeInTheDocument(),await e(n.ownerDocument.querySelector(".hk-lista-barra-mobile")).toBeNull(),await m()}},f={name:"Nova empresa na gaveta",play:async({canvasElement:n,step:a})=>{const t=c(n);await d(t);const o=await O(t),r=u(o);await k(o),await a("preenche os seis campos com CNPJ alfanumérico e cria",async()=>{await l(r.getByRole("textbox",{name:/Nome da empresa/}),"Cerrado Promotora"),await l(r.getByRole("textbox",{name:/CNPJ/}),"12abc34501de35"),await l(r.getByRole("textbox",{name:/Contato/}),"Lúcia Prado"),await l(r.getByRole("textbox",{name:/Telefone/}),"(62) 99876-5432"),await l(r.getByRole("textbox",{name:/Endereço/}),"Av. Goiás, 100, Centro, Goiânia - GO"),await l(r.getByRole("textbox",{name:/E-mail de cobrança/}),"cobranca@cerrado.com.br"),await i.click(r.getByRole("button",{name:"Criar empresa"})),await s(()=>e(t.queryByRole("dialog")).not.toBeInTheDocument()),await e(await t.findByText("Empresa criada.")).toBeInTheDocument(),await e((await t.findAllByText(S)).length).toBeGreaterThan(0)}),await m()}},h={name:"Nova empresa na gaveta: medidas (folha até 640)",play:async({canvasElement:n})=>{const a=c(n);await d(a);const t=await O(a);await k(t),n.ownerDocument.defaultView.innerWidth<=Aa&&await e(t).toHaveClass("hk-modal--folha"),await qa(t);const r=u(t).getByRole("textbox",{name:/E-mail de cobrança/});r.scrollIntoView({block:"nearest"});const B=t.querySelector(".emp-gaveta-rodape");await s(()=>e(r.getBoundingClientRect().bottom).toBeLessThanOrEqual(B.getBoundingClientRect().top+.5)),await i.click(u(t).getByRole("button",{name:"Cancelar"})),await s(()=>e(a.queryByRole("dialog")).not.toBeInTheDocument())}},C={name:"Editar empresa com CNPJ antigo",parameters:{jornada:{...p,respostas:{[w]:{corpo:Ia()},[Na]:{corpo:{ok:!0}}}}},play:async({canvasElement:n})=>{const a=c(n);await d(a),await e((await a.findAllByText(S)).length).toBeGreaterThan(0);const t=a.getByRole("button",{name:"Editar Boreal Consignados"});await i.click(t);const o=await a.findByRole("dialog"),r=u(o);await e(o).toHaveClass("op-gaveta"),await k(o),await e(r.getByRole("textbox",{name:/CNPJ/})).toHaveValue(Ca),await i.clear(r.getByRole("textbox",{name:/Contato/})),await l(r.getByRole("textbox",{name:/Contato/}),"Ana Ribeiro"),await i.click(r.getByRole("button",{name:"Salvar"})),await s(()=>e(a.queryByRole("dialog")).not.toBeInTheDocument()),await e(await a.findByText("Empresa atualizada.")).toBeInTheDocument(),await s(()=>e(n.ownerDocument.activeElement).toHaveAttribute("aria-label","Editar Boreal Consignados")),await m()}},D={name:"Descartar as alterações",play:async({canvasElement:n,step:a})=>{const t=c(n);await d(t);const o=await y(t);await a("Cancelar com alteração pergunta, com Continuar editando focado",async()=>{await i.click(o.getByRole("button",{name:"Cancelar"})),await e(await t.findByText("Descartar as alterações?")).toBeInTheDocument(),await s(()=>e(n.ownerDocument.activeElement).toHaveTextContent("Continuar editando")),await i.click(t.getByRole("button",{name:"Continuar editando"})),await s(()=>e(t.queryByText("Descartar as alterações?")).not.toBeInTheDocument()),await e(o.getByRole("textbox",{name:/Nome da empresa/})).toHaveValue("Cerrado Promotora")}),await a("Esc com alteração também pergunta; Descartar fecha",async()=>{await i.keyboard("{Escape}"),await e(await t.findByText("Descartar as alterações?")).toBeInTheDocument(),await i.click(t.getByRole("button",{name:"Descartar"})),await s(()=>e(t.queryByRole("dialog")).not.toBeInTheDocument())}),await m()}},I={name:"CNPJ, telefone e e-mail inválidos",play:async({canvasElement:n})=>{const a=c(n);await d(a);const t=await y(a);await l(t.getByRole("textbox",{name:/CNPJ/}),"11.222.333/0001-82"),await l(t.getByRole("textbox",{name:/Telefone/}),"90000-0000"),await l(t.getByRole("textbox",{name:/E-mail de cobrança/}),"financeiro@boreal"),await i.click(t.getByRole("button",{name:"Criar empresa"})),await e(await t.findByText("CNPJ inválido. Confira os caracteres.")).toBeInTheDocument(),await e(t.getByText("Inclua o DDD.")).toBeInTheDocument(),await e(t.getByText("E-mail em formato inválido.")).toBeInTheDocument();const o=t.getByRole("textbox",{name:/CNPJ/});await e(o).toHaveAttribute("aria-invalid","true"),await s(()=>e(n.ownerDocument.activeElement).toBe(o)),await e(a.getByRole("dialog")).toBeInTheDocument()}},N={name:"Erro do servidor ao salvar",parameters:{jornada:{...p,falhar:[P]}},play:async({canvasElement:n})=>{const a=c(n);await d(a);const t=await y(a);await i.click(t.getByRole("button",{name:"Criar empresa"}));const o=await t.findByRole("alert");await s(()=>e(o).toHaveTextContent("Não foi possível salvar a empresa. Tente de novo.")),await e(o).not.toHaveTextContent(/api falsa/),await e(t.getByRole("button",{name:"Criar empresa"})).toBeEnabled(),await e(a.getByRole("dialog")).toBeInTheDocument(),await m()}},A={name:"Salvar sem rede",parameters:{jornada:{...p,semRede:[P]}},play:async({canvasElement:n})=>{const a=c(n);await d(a);const t=await y(a);await i.click(t.getByRole("button",{name:"Criar empresa"})),await e(await t.findByText("Não deu para confirmar se a alteração foi salva. Recarregue a lista antes de tentar de novo.")).toBeInTheDocument(),await e(t.queryByRole("button",{name:"Criar empresa"})).not.toBeInTheDocument(),await i.click(t.getByRole("button",{name:"Recarregar lista"})),await s(()=>e(a.queryByRole("dialog")).not.toBeInTheDocument()),await d(a),await m()}},se=["Padrao","ErroAoSalvar","Carregando","Vazio","ErroDoServidor","SemRede","SemPermissao","NovaEmpresaGaveta","NovaEmpresaGaveta375","EditarEmpresa","DescartarAlteracoes","CnpjInvalido","ErroAoSalvarServidor","SalvarSemRede"];var L,F,_;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "Padrão",
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await esperarLista(tela);
    await expect(tela.getAllByText(EMAIL_LONGO).length).toBeGreaterThan(0);
    await step("Nova empresa: cria e entra na lista", async () => {
      const modal = await abrirNova(tela);
      await userEvent.click(modal.getByRole("button", {
        name: "Criar empresa"
      }));
      await waitFor(() => expect(tela.queryByRole("dialog")).not.toBeInTheDocument());
      await expect(await tela.findByText("Empresa criada.")).toBeInTheDocument();
      await expect((await tela.findAllByText("Cerrado Promotora")).length).toBeGreaterThan(0);
    });
    await step("Editar: abre com os dados e cancela sem alteração (fecha direto)", async () => {
      await userEvent.click(tela.getByRole("button", {
        name: "Editar Boreal Consignados"
      }));
      const modal = within(await tela.findByRole("dialog"));
      await expect(modal.getByRole("textbox", {
        name: /Nome da empresa/
      })).toHaveValue("Boreal Consignados");
      await userEvent.click(modal.getByRole("button", {
        name: "Cancelar"
      }));
      await waitFor(() => expect(tela.queryByRole("dialog")).not.toBeInTheDocument());
    });
    await semRotaSemFixture();
  }
}`,...(_=(F=x.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};var J,G,j;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: "Erro ao salvar: motivo no topo do formulário",
  // o 403 que a API manda de fato (soSuper, api/src/auth.ts:231-238); as
  // rotas de empresas não mandam 409 (api/src/index.ts:1878-1921)
  parameters: {
    jornada: {
      ...CENARIO_SUPER,
      respostas: {
        [CRIAR]: {
          status: 403,
          corpo: {
            erro: "apenas o super admin"
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await esperarLista(tela);
    const modal = await abrirNova(tela);
    await userEvent.click(modal.getByRole("button", {
      name: "Criar empresa"
    }));
    const alerta = await modal.findByRole("alert");
    await waitFor(() => expect(alerta).toHaveTextContent("Apenas o super admin altera empresas."));
    await expect(alerta).not.toHaveTextContent("apenas o super admin");
    await expect(tela.getByRole("dialog")).toBeInTheDocument();
    await userEvent.click(modal.getByRole("button", {
      name: "Cancelar"
    }));
    await userEvent.click(await tela.findByRole("button", {
      name: "Descartar"
    }));
    await waitFor(() => expect(tela.queryByRole("dialog")).not.toBeInTheDocument());
    await semRotaSemFixture();
  }
}`,...(j=(G=g.parameters)==null?void 0:G.docs)==null?void 0:j.source}}};var H,U,V;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    jornada: {
      ...CENARIO_SUPER,
      pendurar: [LISTA]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Carregando empresas…")).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: /Tentar de novo/
    })).not.toBeInTheDocument();
  }
}`,...(V=(U=v.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var M,z,W;E.parameters={...E.parameters,docs:{...(M=E.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    jornada: {
      ...CENARIO_SUPER,
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
    await expect(await tela.findByText("Nenhuma empresa ainda")).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(W=(z=E.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var Z,Y,K;R.parameters={...R.parameters,docs:{...(Z=R.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: "Erro do servidor",
  parameters: {
    jornada: {
      ...CENARIO_SUPER,
      falhar: [LISTA]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/O servidor teve um problema ao carregar as empresas/)).toBeInTheDocument();
    await expect(tela.queryByText(/api falsa/)).not.toBeInTheDocument();
    await userEvent.click(tela.getByRole("button", {
      name: /Tentar de novo/
    }));
    await expect(await tela.findByText(/O servidor teve um problema ao carregar as empresas/)).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(K=(Y=R.parameters)==null?void 0:Y.docs)==null?void 0:K.source}}};var Q,X,$;T.parameters={...T.parameters,docs:{...(Q=T.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "Sem rede",
  parameters: {
    jornada: {
      ...CENARIO_SUPER,
      semRede: [LISTA]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/Não foi possível carregar as empresas. Verifique a conexão/)).toBeInTheDocument();
    await expect(tela.getByRole("button", {
      name: /Tentar de novo/
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...($=(X=T.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var aa,ea,ta;b.parameters={...b.parameters,docs:{...(aa=b.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  name: "Erro: sem permissão (403)",
  parameters: {
    jornada: {
      ...CENARIO_SUPER,
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
    await expect(await tela.findByText("Apenas o super admin acessa esta página.")).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: /Tentar de novo/
    })).not.toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: /Nova empresa/
    })).not.toBeInTheDocument();
    await expect(canvasElement.ownerDocument.querySelector(".hk-lista-barra-mobile")).toBeNull();
    await semRotaSemFixture();
  }
}`,...(ta=(ea=b.parameters)==null?void 0:ea.docs)==null?void 0:ta.source}}};var na,oa,ra;f.parameters={...f.parameters,docs:{...(na=f.parameters)==null?void 0:na.docs,source:{originalSource:`{
  name: "Nova empresa na gaveta",
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await esperarLista(tela);
    const dialogo = await abrirGaveta(tela);
    const gaveta = within(dialogo);
    await focoNoNome(dialogo);
    await step("preenche os seis campos com CNPJ alfanumérico e cria", async () => {
      await digitar(gaveta.getByRole("textbox", {
        name: /Nome da empresa/
      }), "Cerrado Promotora");
      await digitar(gaveta.getByRole("textbox", {
        name: /CNPJ/
      }), "12abc34501de35");
      await digitar(gaveta.getByRole("textbox", {
        name: /Contato/
      }), "Lúcia Prado");
      await digitar(gaveta.getByRole("textbox", {
        name: /Telefone/
      }), "(62) 99876-5432");
      await digitar(gaveta.getByRole("textbox", {
        name: /Endereço/
      }), "Av. Goiás, 100, Centro, Goiânia - GO");
      await digitar(gaveta.getByRole("textbox", {
        name: /E-mail de cobrança/
      }), "cobranca@cerrado.com.br");
      await userEvent.click(gaveta.getByRole("button", {
        name: "Criar empresa"
      }));
      await waitFor(() => expect(tela.queryByRole("dialog")).not.toBeInTheDocument());
      await expect(await tela.findByText("Empresa criada.")).toBeInTheDocument();
      await expect((await tela.findAllByText(CNPJ_ALFANUMERICO)).length).toBeGreaterThan(0);
    });
    await semRotaSemFixture();
  }
}`,...(ra=(oa=f.parameters)==null?void 0:oa.docs)==null?void 0:ra.source}}};var ia,sa,ca;h.parameters={...h.parameters,docs:{...(ia=h.parameters)==null?void 0:ia.docs,source:{originalSource:`{
  name: "Nova empresa na gaveta: medidas (folha até 640)",
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await esperarLista(tela);
    const dialogo = await abrirGaveta(tela);
    await focoNoNome(dialogo);
    const janela = canvasElement.ownerDocument.defaultView as Window;
    if (janela.innerWidth <= LARGURA_FOLHA) await expect(dialogo).toHaveClass("hk-modal--folha");
    await medirGaveta(dialogo);
    // o rodapé grudado não cobre o último campo depois de rolar até ele
    const ultimo = within(dialogo).getByRole("textbox", {
      name: /E-mail de cobrança/
    });
    ultimo.scrollIntoView({
      block: "nearest"
    });
    const rodape = dialogo.querySelector(".emp-gaveta-rodape") as HTMLElement;
    await waitFor(() => expect(ultimo.getBoundingClientRect().bottom).toBeLessThanOrEqual(rodape.getBoundingClientRect().top + 0.5));
    await userEvent.click(within(dialogo).getByRole("button", {
      name: "Cancelar"
    }));
    await waitFor(() => expect(tela.queryByRole("dialog")).not.toBeInTheDocument());
  }
}`,...(ca=(sa=h.parameters)==null?void 0:sa.docs)==null?void 0:ca.source}}};var la,ma,da;C.parameters={...C.parameters,docs:{...(la=C.parameters)==null?void 0:la.docs,source:{originalSource:`{
  name: "Editar empresa com CNPJ antigo",
  parameters: {
    jornada: {
      ...CENARIO_SUPER,
      respostas: {
        [LISTA]: {
          corpo: empresasOnda12()
        },
        [ATUALIZAR]: {
          corpo: {
            ok: true
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await esperarLista(tela);
    await expect((await tela.findAllByText(CNPJ_ALFANUMERICO)).length).toBeGreaterThan(0);
    const lapis = tela.getByRole("button", {
      name: "Editar Boreal Consignados"
    });
    await userEvent.click(lapis);
    const dialogo = await tela.findByRole("dialog");
    const gaveta = within(dialogo);
    await expect(dialogo).toHaveClass("op-gaveta");
    await focoNoNome(dialogo);
    await expect(gaveta.getByRole("textbox", {
      name: /CNPJ/
    })).toHaveValue(CNPJ_LEGADO_INVALIDO);
    // o CNPJ antigo não passa no dígito, mas não trava a troca do contato
    await userEvent.clear(gaveta.getByRole("textbox", {
      name: /Contato/
    }));
    await digitar(gaveta.getByRole("textbox", {
      name: /Contato/
    }), "Ana Ribeiro");
    await userEvent.click(gaveta.getByRole("button", {
      name: "Salvar"
    }));
    await waitFor(() => expect(tela.queryByRole("dialog")).not.toBeInTheDocument());
    await expect(await tela.findByText("Empresa atualizada.")).toBeInTheDocument();
    await waitFor(() => expect(canvasElement.ownerDocument.activeElement).toHaveAttribute("aria-label", "Editar Boreal Consignados"));
    await semRotaSemFixture();
  }
}`,...(da=(ma=C.parameters)==null?void 0:ma.docs)==null?void 0:da.source}}};var pa,ua,wa;D.parameters={...D.parameters,docs:{...(pa=D.parameters)==null?void 0:pa.docs,source:{originalSource:`{
  name: "Descartar as alterações",
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await esperarLista(tela);
    const modal = await abrirNova(tela);
    await step("Cancelar com alteração pergunta, com Continuar editando focado", async () => {
      await userEvent.click(modal.getByRole("button", {
        name: "Cancelar"
      }));
      await expect(await tela.findByText("Descartar as alterações?")).toBeInTheDocument();
      await waitFor(() => expect(canvasElement.ownerDocument.activeElement).toHaveTextContent("Continuar editando"));
      await userEvent.click(tela.getByRole("button", {
        name: "Continuar editando"
      }));
      await waitFor(() => expect(tela.queryByText("Descartar as alterações?")).not.toBeInTheDocument());
      await expect(modal.getByRole("textbox", {
        name: /Nome da empresa/
      })).toHaveValue("Cerrado Promotora");
    });
    await step("Esc com alteração também pergunta; Descartar fecha", async () => {
      await userEvent.keyboard("{Escape}");
      await expect(await tela.findByText("Descartar as alterações?")).toBeInTheDocument();
      await userEvent.click(tela.getByRole("button", {
        name: "Descartar"
      }));
      await waitFor(() => expect(tela.queryByRole("dialog")).not.toBeInTheDocument());
    });
    await semRotaSemFixture();
  }
}`,...(wa=(ua=D.parameters)==null?void 0:ua.docs)==null?void 0:wa.source}}};var ya,Ba,xa;I.parameters={...I.parameters,docs:{...(ya=I.parameters)==null?void 0:ya.docs,source:{originalSource:`{
  name: "CNPJ, telefone e e-mail inválidos",
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await esperarLista(tela);
    const modal = await abrirNova(tela);
    await digitar(modal.getByRole("textbox", {
      name: /CNPJ/
    }), "11.222.333/0001-82");
    await digitar(modal.getByRole("textbox", {
      name: /Telefone/
    }), "90000-0000");
    await digitar(modal.getByRole("textbox", {
      name: /E-mail de cobrança/
    }), "financeiro@boreal");
    await userEvent.click(modal.getByRole("button", {
      name: "Criar empresa"
    }));
    await expect(await modal.findByText("CNPJ inválido. Confira os caracteres.")).toBeInTheDocument();
    await expect(modal.getByText("Inclua o DDD.")).toBeInTheDocument();
    await expect(modal.getByText("E-mail em formato inválido.")).toBeInTheDocument();
    const cnpj = modal.getByRole("textbox", {
      name: /CNPJ/
    });
    await expect(cnpj).toHaveAttribute("aria-invalid", "true");
    await waitFor(() => expect(canvasElement.ownerDocument.activeElement).toBe(cnpj));
    await expect(tela.getByRole("dialog")).toBeInTheDocument();
  }
}`,...(xa=(Ba=I.parameters)==null?void 0:Ba.docs)==null?void 0:xa.source}}};var ga,va,Ea;N.parameters={...N.parameters,docs:{...(ga=N.parameters)==null?void 0:ga.docs,source:{originalSource:`{
  name: "Erro do servidor ao salvar",
  parameters: {
    jornada: {
      ...CENARIO_SUPER,
      falhar: [CRIAR]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await esperarLista(tela);
    const modal = await abrirNova(tela);
    await userEvent.click(modal.getByRole("button", {
      name: "Criar empresa"
    }));
    const alerta = await modal.findByRole("alert");
    await waitFor(() => expect(alerta).toHaveTextContent("Não foi possível salvar a empresa. Tente de novo."));
    await expect(alerta).not.toHaveTextContent(/api falsa/);
    await expect(modal.getByRole("button", {
      name: "Criar empresa"
    })).toBeEnabled();
    await expect(tela.getByRole("dialog")).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(Ea=(va=N.parameters)==null?void 0:va.docs)==null?void 0:Ea.source}}};var Ra,Ta,ba;A.parameters={...A.parameters,docs:{...(Ra=A.parameters)==null?void 0:Ra.docs,source:{originalSource:`{
  name: "Salvar sem rede",
  parameters: {
    jornada: {
      ...CENARIO_SUPER,
      semRede: [CRIAR]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await esperarLista(tela);
    const modal = await abrirNova(tela);
    await userEvent.click(modal.getByRole("button", {
      name: "Criar empresa"
    }));
    await expect(await modal.findByText("Não deu para confirmar se a alteração foi salva. Recarregue a lista antes de tentar de novo.")).toBeInTheDocument();
    await expect(modal.queryByRole("button", {
      name: "Criar empresa"
    })).not.toBeInTheDocument();
    await userEvent.click(modal.getByRole("button", {
      name: "Recarregar lista"
    }));
    await waitFor(() => expect(tela.queryByRole("dialog")).not.toBeInTheDocument());
    await esperarLista(tela);
    await semRotaSemFixture();
  }
}`,...(ba=(Ta=A.parameters)==null?void 0:Ta.docs)==null?void 0:ba.source}}};export{v as Carregando,I as CnpjInvalido,D as DescartarAlteracoes,C as EditarEmpresa,g as ErroAoSalvar,N as ErroAoSalvarServidor,R as ErroDoServidor,f as NovaEmpresaGaveta,h as NovaEmpresaGaveta375,x as Padrao,A as SalvarSemRede,b as SemPermissao,T as SemRede,E as Vazio,se as __namedExportsOrder,ie as default};
