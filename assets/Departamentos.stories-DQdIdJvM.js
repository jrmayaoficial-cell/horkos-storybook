import{C as m,m as ea}from"./jornadaGestao-CuqGN6pp.js";import{t as i,d as aa,i as ta,s as l}from"./jornadaOperar-s38zFs67.js";import"./ShellJornada-ByPwEQxC.js";import"./jsx-runtime-C-NnYQQj.js";import"./iframe-DEC6x2_9.js";import"./preload-helper-D6kgxu3v.js";import"./dadosShell-D7euqUo-.js";import"./index-Dz2FqD8L.js";import"./index-CmHu5Euv.js";import"./v2-CFLOXcvu.js";import"./index-CnB9h5a6.js";import"./api-C_qpy-2i.js";import"./index-DJSstCC2.js";import"./marca-BWkAzl1y.js";import"./carregando-CNp4uhvU.js";import"./celulas-DiU8SfVX.js";/* empty css              */import"./CartaoKpi-BS2LlUJ9.js";import"./MiniBarras-DTviKg-v.js";import"./cores-D-iLqYVd.js";import"./Login-xO3uyH8U.js";import"./etapas-CLsHaCEc.js";/* empty css                */import"./ShellGestao-Jyjqqx0w.js";const{expect:e,userEvent:o,waitFor:s,within:R}=__STORYBOOK_MODULE_TEST__,na=ea("/departamentos",'Jornada de departamentos dentro do shell: lista e editor em sete abas (Geral, Horários, Atendentes, Fila de espera, Plano de fundo, Questionário, Transferência). Com a carga do editor falhando o formulário não aparece (antes ele abria vazio e o Salvar criava um departamento novo); departamento que não existe mostra "não encontrado" com Voltar; erro ao salvar aparece no topo, com alerta. Sair do editor com alteração não salva (Voltar, Cancelar, menu) pergunta "Sair sem salvar?" citando o departamento; abrir e sair sem mexer, ou salvar e sair, não pergunta.'),E="GET /v1/departamentos",c="/departamentos/dep-inss",fa={title:"Jornadas/Departamentos",...na},d={name:"Padrão",play:async({canvasElement:n})=>{const t=i(n);await e(await t.findByRole("region",{name:"Departamentos"})).toBeInTheDocument(),await e((await t.findAllByText("INSS · Consignado")).length).toBeGreaterThan(0),await l()}},p={name:"Editor: sete abas",args:{rotaInicial:c},play:async({canvasElement:n,step:t})=>{const a=i(n);await e(await a.findByRole("heading",{name:"INSS · Consignado",level:1})).toBeInTheDocument();const r=R(a.getByRole("tablist",{name:"Seções do departamento"}));await e(r.getAllByRole("tab")).toHaveLength(7),await t("Horários: campos de hora com nome e remover intervalo",async()=>{await o.click(r.getByRole("tab",{name:"Horários"})),await e(a.getByLabelText("Início do intervalo 1, Sábado")).toBeInTheDocument(),await o.click(a.getByRole("button",{name:"Remover intervalo 1 de Sábado"})),await e(a.queryByLabelText("Início do intervalo 1, Sábado")).not.toBeInTheDocument(),await o.click(a.getByRole("button",{name:"Abrir o atendimento de Sábado"})),await e(a.getByLabelText("Fim do intervalo 1, Sábado")).toBeInTheDocument()}),await t("Atendentes: contagem na aba",async()=>{await o.click(r.getByRole("tab",{name:/^Atendentes \(3\)/})),await e(await a.findByRole("textbox",{name:"Buscar atendente por nome"})).toBeInTheDocument()});for(const D of[/^Fila de espera/,/^Plano de fundo/,/^Questionário/,/^Transferência/,/^Geral/])await o.click(r.getByRole("tab",{name:D})),await e(r.getByRole("tab",{name:D})).toHaveAttribute("aria-selected","true");await t("Salvar volta à lista",async()=>{await o.click(a.getByRole("button",{name:"Salvar alterações"})),await e(await a.findByRole("region",{name:"Departamentos"})).toBeInTheDocument()}),await l()}},u={name:"Editor: aviso de saída",args:{rotaInicial:c},play:async({canvasElement:n,step:t})=>{const a=i(n);await e(await a.findByRole("heading",{name:"INSS · Consignado",level:1})).toBeInTheDocument(),await t("Abrir e voltar sem mexer sai direto",async()=>{await o.click(a.getByRole("link",{name:"Voltar para Departamentos"})),await e(await a.findByRole("region",{name:"Departamentos"})).toBeInTheDocument(),await e(a.queryByText("Sair sem salvar?")).not.toBeInTheDocument()}),await t("Mudar o nome e Cancelar pergunta, citando o departamento",async()=>{await o.click((await a.findAllByRole("link",{name:/INSS · Consignado/}))[0]),await e(await a.findByRole("heading",{name:"INSS · Consignado",level:1})).toBeInTheDocument(),await aa(a.getByRole("textbox",{name:/Nome/}),"INSS · Benefícios"),await o.click(a.getByRole("button",{name:"Cancelar"}));const r=R(await a.findByRole("dialog",{name:"Sair sem salvar?"}));await e(r.getByText(/alterações não salvas em Departamento “INSS · Consignado”/)).toBeInTheDocument(),await o.click(r.getByRole("button",{name:"Continuar editando"})),await s(()=>e(a.queryByRole("dialog",{name:"Sair sem salvar?"})).not.toBeInTheDocument()),await e(a.getByRole("textbox",{name:/Nome/})).toHaveValue("INSS · Benefícios")}),await t("Sair pelo menu (gaveta no celular) pergunta e o foco fica no aviso",async()=>{await ta(n,"Departamentos");const r=await a.findByRole("dialog",{name:"Sair sem salvar?"});await s(()=>e(a.queryByRole("dialog",{name:"Menu"})).not.toBeInTheDocument()),await s(()=>e(r).toContainElement(n.ownerDocument.activeElement)),await e(n.ownerDocument.activeElement).toHaveTextContent("Continuar editando"),await o.click(R(r).getByRole("button",{name:"Continuar editando"})),await s(()=>e(a.queryByRole("dialog",{name:"Sair sem salvar?"})).not.toBeInTheDocument()),await e(a.getByRole("textbox",{name:/Nome/})).toHaveValue("INSS · Benefícios")}),await t("Salvar e sair não pergunta",async()=>{await o.click(a.getByRole("button",{name:"Salvar alterações"})),await e(await a.findByRole("region",{name:"Departamentos"})).toBeInTheDocument(),await e(a.queryByText("Sair sem salvar?")).not.toBeInTheDocument()}),await l()}},B={name:"Editor: novo departamento",args:{rotaInicial:"/departamentos/novo"},play:async({canvasElement:n,step:t})=>{const a=i(n);await e(await a.findByRole("heading",{name:"Novo departamento",level:1})).toBeInTheDocument(),await aa(a.getByRole("textbox",{name:/Nome/}),"BRB · Banco de Brasília"),await t("fundo obrigatório sem padrão marca a aba com erro",async()=>{await o.click(a.getByRole("tab",{name:"Plano de fundo"})),await o.click(a.getByRole("checkbox",{name:/Fundo obrigatório/})),await o.click(a.getByRole("button",{name:"Criar departamento"})),await e(await a.findByRole("alert")).toHaveTextContent(/Fundo obrigatório precisa de um padrão/),await e(a.getByRole("tab",{name:"Plano de fundo (com erro)"})).toHaveAttribute("aria-selected","true")}),await t("corrigido, cria e volta à lista",async()=>{await o.click(a.getByRole("checkbox",{name:/Fundo obrigatório/})),await o.click(a.getByRole("button",{name:"Criar departamento"})),await e((await a.findAllByText("BRB · Banco de Brasília")).length).toBeGreaterThan(0)}),await l()}},w={args:{rotaInicial:c},parameters:{jornada:{...m,pendurar:[E]}},play:async({canvasElement:n})=>{const t=i(n);await e(await t.findByText(/Carregando o departamento/)).toBeInTheDocument(),await e(t.queryByRole("button",{name:/Salvar|Criar departamento/})).not.toBeInTheDocument()}},y={name:"Erro de rede: sem formulário",args:{rotaInicial:c},parameters:{jornada:{...m,semRede:[E]}},play:async({canvasElement:n})=>{const t=i(n);await e(await t.findByText(/Não foi possível carregar o departamento/)).toBeInTheDocument(),await e(t.queryByRole("button",{name:/Salvar|Criar departamento/})).not.toBeInTheDocument(),await e(t.queryByRole("tablist")).not.toBeInTheDocument(),await o.click(t.getByRole("button",{name:"Tentar de novo"})),await e(await t.findByText(/Não foi possível carregar o departamento/)).toBeInTheDocument(),await l()}},x={name:"Erro do servidor",args:{rotaInicial:c},parameters:{jornada:{...m,falhar:[E]}},play:async({canvasElement:n})=>{const t=i(n);await e(await t.findByText(/O servidor teve um problema ao carregar o departamento/)).toBeInTheDocument(),await e(t.queryByText(/api falsa/)).not.toBeInTheDocument(),await e(t.getByRole("link",{name:"Voltar para Departamentos"})).toBeInTheDocument(),await l()}},g={name:"Erro: não encontrado",args:{rotaInicial:"/departamentos/dep-inexistente"},play:async({canvasElement:n})=>{const t=i(n);await e(await t.findByText("Departamento não encontrado.")).toBeInTheDocument(),await e(t.queryByRole("button",{name:"Tentar de novo"})).not.toBeInTheDocument(),await o.click(t.getByRole("button",{name:"Voltar à lista"})),await e(await t.findByRole("region",{name:"Departamentos"})).toBeInTheDocument(),await l()}},v={name:"Erro ao salvar: alerta no topo",args:{rotaInicial:c},parameters:{jornada:{...m,respostas:{"PUT /v1/departamentos/:id":{status:409,corpo:{erro:"Já existe um departamento com este identificador."}}}}},play:async({canvasElement:n})=>{const t=i(n);await o.click(await t.findByRole("button",{name:"Salvar alterações"}));const a=await t.findByRole("alert");await e(a).toHaveTextContent("Já existe um departamento com este identificador."),await s(()=>e(a.compareDocumentPosition(t.getByRole("tablist"))&Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()),await s(()=>e(a.ownerDocument.activeElement).toBe(a.closest("[tabindex='-1']"))),await l()}},T={name:"Vazio: nenhum departamento",parameters:{jornada:{...m,respostas:{[E]:{status:200,corpo:[]}}}},play:async({canvasElement:n})=>{const t=i(n);await e(await t.findByText("Nenhum departamento ainda")).toBeInTheDocument(),await l()}},Ca=["Padrao","Editor","AvisoDeSaida","Novo","Carregando","SemRede","ErroDoServidor","NaoEncontrado","ErroAoSalvar","Vazio"];var I,S,b;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Padrão",
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByRole("region", {
      name: "Departamentos"
    })).toBeInTheDocument();
    await expect((await tela.findAllByText("INSS · Consignado")).length).toBeGreaterThan(0);
    await semRotaSemFixture();
  }
}`,...(b=(S=d.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var h,f,C;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Editor: sete abas",
  args: {
    rotaInicial: EDITOR
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByRole("heading", {
      name: "INSS · Consignado",
      level: 1
    })).toBeInTheDocument();
    const abas = within(tela.getByRole("tablist", {
      name: "Seções do departamento"
    }));
    await expect(abas.getAllByRole("tab")).toHaveLength(7);
    await step("Horários: campos de hora com nome e remover intervalo", async () => {
      await userEvent.click(abas.getByRole("tab", {
        name: "Horários"
      }));
      await expect(tela.getByLabelText("Início do intervalo 1, Sábado")).toBeInTheDocument();
      await userEvent.click(tela.getByRole("button", {
        name: "Remover intervalo 1 de Sábado"
      }));
      await expect(tela.queryByLabelText("Início do intervalo 1, Sábado")).not.toBeInTheDocument();
      await userEvent.click(tela.getByRole("button", {
        name: "Abrir o atendimento de Sábado"
      }));
      await expect(tela.getByLabelText("Fim do intervalo 1, Sábado")).toBeInTheDocument();
    });
    await step("Atendentes: contagem na aba", async () => {
      await userEvent.click(abas.getByRole("tab", {
        name: /^Atendentes \\(3\\)/
      }));
      await expect(await tela.findByRole("textbox", {
        name: "Buscar atendente por nome"
      })).toBeInTheDocument();
    });
    for (const nome of [/^Fila de espera/, /^Plano de fundo/, /^Questionário/, /^Transferência/, /^Geral/]) {
      await userEvent.click(abas.getByRole("tab", {
        name: nome
      }));
      await expect(abas.getByRole("tab", {
        name: nome
      })).toHaveAttribute("aria-selected", "true");
    }
    await step("Salvar volta à lista", async () => {
      await userEvent.click(tela.getByRole("button", {
        name: "Salvar alterações"
      }));
      await expect(await tela.findByRole("region", {
        name: "Departamentos"
      })).toBeInTheDocument();
    });
    await semRotaSemFixture();
  }
}`,...(C=(f=p.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var N,k,A;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Editor: aviso de saída",
  args: {
    rotaInicial: EDITOR
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByRole("heading", {
      name: "INSS · Consignado",
      level: 1
    })).toBeInTheDocument();
    await step("Abrir e voltar sem mexer sai direto", async () => {
      await userEvent.click(tela.getByRole("link", {
        name: "Voltar para Departamentos"
      }));
      await expect(await tela.findByRole("region", {
        name: "Departamentos"
      })).toBeInTheDocument();
      await expect(tela.queryByText("Sair sem salvar?")).not.toBeInTheDocument();
    });
    await step("Mudar o nome e Cancelar pergunta, citando o departamento", async () => {
      await userEvent.click((await tela.findAllByRole("link", {
        name: /INSS · Consignado/
      }))[0]);
      await expect(await tela.findByRole("heading", {
        name: "INSS · Consignado",
        level: 1
      })).toBeInTheDocument();
      await digitar(tela.getByRole("textbox", {
        name: /Nome/
      }), "INSS · Benefícios");
      await userEvent.click(tela.getByRole("button", {
        name: "Cancelar"
      }));
      const modal = within(await tela.findByRole("dialog", {
        name: "Sair sem salvar?"
      }));
      await expect(modal.getByText(/alterações não salvas em Departamento “INSS · Consignado”/)).toBeInTheDocument();
      await userEvent.click(modal.getByRole("button", {
        name: "Continuar editando"
      }));
      await waitFor(() => expect(tela.queryByRole("dialog", {
        name: "Sair sem salvar?"
      })).not.toBeInTheDocument());
      await expect(tela.getByRole("textbox", {
        name: /Nome/
      })).toHaveValue("INSS · Benefícios");
    });
    await step("Sair pelo menu (gaveta no celular) pergunta e o foco fica no aviso", async () => {
      await irPeloMenu(canvasElement, "Departamentos");
      const aviso = await tela.findByRole("dialog", {
        name: "Sair sem salvar?"
      });
      await waitFor(() => expect(tela.queryByRole("dialog", {
        name: "Menu"
      })).not.toBeInTheDocument());
      await waitFor(() => expect(aviso).toContainElement(canvasElement.ownerDocument.activeElement as HTMLElement));
      await expect(canvasElement.ownerDocument.activeElement).toHaveTextContent("Continuar editando");
      await userEvent.click(within(aviso).getByRole("button", {
        name: "Continuar editando"
      }));
      await waitFor(() => expect(tela.queryByRole("dialog", {
        name: "Sair sem salvar?"
      })).not.toBeInTheDocument());
      await expect(tela.getByRole("textbox", {
        name: /Nome/
      })).toHaveValue("INSS · Benefícios");
    });
    await step("Salvar e sair não pergunta", async () => {
      await userEvent.click(tela.getByRole("button", {
        name: "Salvar alterações"
      }));
      await expect(await tela.findByRole("region", {
        name: "Departamentos"
      })).toBeInTheDocument();
      await expect(tela.queryByText("Sair sem salvar?")).not.toBeInTheDocument();
    });
    await semRotaSemFixture();
  }
}`,...(A=(k=u.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var O,F,q;B.parameters={...B.parameters,docs:{...(O=B.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "Editor: novo departamento",
  args: {
    rotaInicial: "/departamentos/novo"
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByRole("heading", {
      name: "Novo departamento",
      level: 1
    })).toBeInTheDocument();
    await digitar(tela.getByRole("textbox", {
      name: /Nome/
    }), "BRB · Banco de Brasília");
    await step("fundo obrigatório sem padrão marca a aba com erro", async () => {
      await userEvent.click(tela.getByRole("tab", {
        name: "Plano de fundo"
      }));
      await userEvent.click(tela.getByRole("checkbox", {
        name: /Fundo obrigatório/
      }));
      await userEvent.click(tela.getByRole("button", {
        name: "Criar departamento"
      }));
      await expect(await tela.findByRole("alert")).toHaveTextContent(/Fundo obrigatório precisa de um padrão/);
      await expect(tela.getByRole("tab", {
        name: "Plano de fundo (com erro)"
      })).toHaveAttribute("aria-selected", "true");
    });
    await step("corrigido, cria e volta à lista", async () => {
      await userEvent.click(tela.getByRole("checkbox", {
        name: /Fundo obrigatório/
      }));
      await userEvent.click(tela.getByRole("button", {
        name: "Criar departamento"
      }));
      await expect((await tela.findAllByText("BRB · Banco de Brasília")).length).toBeGreaterThan(0);
    });
    await semRotaSemFixture();
  }
}`,...(q=(F=B.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var H,L,P;w.parameters={...w.parameters,docs:{...(H=w.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    rotaInicial: EDITOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      pendurar: [LISTA]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/Carregando o departamento/)).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: /Salvar|Criar departamento/
    })).not.toBeInTheDocument();
  }
}`,...(P=(L=w.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var _,G,V;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Erro de rede: sem formulário",
  args: {
    rotaInicial: EDITOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      semRede: [LISTA]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/Não foi possível carregar o departamento/)).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: /Salvar|Criar departamento/
    })).not.toBeInTheDocument();
    await expect(tela.queryByRole("tablist")).not.toBeInTheDocument();
    await userEvent.click(tela.getByRole("button", {
      name: "Tentar de novo"
    }));
    await expect(await tela.findByText(/Não foi possível carregar o departamento/)).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(V=(G=y.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var J,j,M;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: "Erro do servidor",
  args: {
    rotaInicial: EDITOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      falhar: [LISTA]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/O servidor teve um problema ao carregar o departamento/)).toBeInTheDocument();
    await expect(tela.queryByText(/api falsa/)).not.toBeInTheDocument();
    await expect(tela.getByRole("link", {
      name: "Voltar para Departamentos"
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(M=(j=x.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var z,U,Q;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Erro: não encontrado",
  args: {
    rotaInicial: "/departamentos/dep-inexistente"
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Departamento não encontrado.")).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: "Tentar de novo"
    })).not.toBeInTheDocument();
    await userEvent.click(tela.getByRole("button", {
      name: "Voltar à lista"
    }));
    await expect(await tela.findByRole("region", {
      name: "Departamentos"
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(Q=(U=g.parameters)==null?void 0:U.docs)==null?void 0:Q.source}}};var W,K,Y;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "Erro ao salvar: alerta no topo",
  args: {
    rotaInicial: EDITOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        "PUT /v1/departamentos/:id": {
          status: 409,
          corpo: {
            erro: "Já existe um departamento com este identificador."
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
      name: "Salvar alterações"
    }));
    const alerta = await tela.findByRole("alert");
    await expect(alerta).toHaveTextContent("Já existe um departamento com este identificador.");
    await waitFor(() => expect(alerta.compareDocumentPosition(tela.getByRole("tablist")) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy());
    await waitFor(() => expect(alerta.ownerDocument.activeElement).toBe(alerta.closest("[tabindex='-1']")));
    await semRotaSemFixture();
  }
}`,...(Y=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var X,Z,$;T.parameters={...T.parameters,docs:{...(X=T.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: "Vazio: nenhum departamento",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [LISTA]: {
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
    await expect(await tela.findByText("Nenhum departamento ainda")).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...($=(Z=T.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};export{u as AvisoDeSaida,w as Carregando,p as Editor,v as ErroAoSalvar,x as ErroDoServidor,g as NaoEncontrado,B as Novo,d as Padrao,y as SemRede,T as Vazio,Ca as __namedExportsOrder,fa as default};
