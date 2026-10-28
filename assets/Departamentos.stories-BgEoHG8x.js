import{C as c,m as K}from"./jornadaGestao-BNxd9-GK.js";import{t as r,s as i,d as Y}from"./jornadaOperar-D7ZeOS19.js";import"./ShellJornada-BMJ4fpX0.js";import"./jsx-runtime-CqjonpNT.js";import"./iframe-DJrhfsQk.js";import"./preload-helper-D6kgxu3v.js";import"./index-9UivOglz.js";import"./index-BwsDp8T-.js";import"./marca-z0SsKRba.js";import"./carregando-BXT1e_OM.js";import"./dadosShell-BJlYo5ba.js";import"./index-DXvfoM1X.js";import"./v2-CZUD68ca.js";import"./index-DBwj-ecP.js";import"./api-Z9ulGFc_.js";import"./Login-DIYaNGVn.js";import"./celulas-DGaOaVoK.js";/* empty css              */import"./paleta-B-duPMKZ.js";import"./MiniBarras-CUX8X_xl.js";/* empty css                */import"./ShellGestao-Bv6zAXUC.js";const{expect:e,userEvent:o,waitFor:T,within:X}=__STORYBOOK_MODULE_TEST__,Z=K("/departamentos",'Jornada de departamentos dentro do shell: lista e editor em sete abas (Geral, Horários, Atendentes, Fila de espera, Plano de fundo, Questionário, Transferência). Com a carga do editor falhando o formulário não aparece (antes ele abria vazio e o Salvar criava um departamento novo); departamento que não existe mostra "não encontrado" com Voltar; erro ao salvar aparece no topo, com alerta.'),g="GET /v1/departamentos",l="/departamentos/dep-inss",Ta={title:"Jornadas/Departamentos",...Z},m={name:"Padrão",play:async({canvasElement:n})=>{const a=r(n);await e(await a.findByRole("region",{name:"Departamentos"})).toBeInTheDocument(),await e((await a.findAllByText("INSS · Consignado")).length).toBeGreaterThan(0),await i()}},d={name:"Editor: sete abas",args:{rotaInicial:l},play:async({canvasElement:n,step:a})=>{const t=r(n);await e(await t.findByRole("heading",{name:"INSS · Consignado",level:1})).toBeInTheDocument();const s=X(t.getByRole("tablist",{name:"Seções do departamento"}));await e(s.getAllByRole("tab")).toHaveLength(7),await a("Horários: campos de hora com nome e remover intervalo",async()=>{await o.click(s.getByRole("tab",{name:"Horários"})),await e(t.getByLabelText("Início do intervalo 1, Sábado")).toBeInTheDocument(),await o.click(t.getByRole("button",{name:"Remover intervalo 1 de Sábado"})),await e(t.queryByLabelText("Início do intervalo 1, Sábado")).not.toBeInTheDocument(),await o.click(t.getByRole("button",{name:"Abrir o atendimento de Sábado"})),await e(t.getByLabelText("Fim do intervalo 1, Sábado")).toBeInTheDocument()}),await a("Atendentes: contagem na aba",async()=>{await o.click(s.getByRole("tab",{name:/^Atendentes \(3\)/})),await e(await t.findByRole("textbox",{name:"Buscar atendente por nome"})).toBeInTheDocument()});for(const E of[/^Fila de espera/,/^Plano de fundo/,/^Questionário/,/^Transferência/,/^Geral/])await o.click(s.getByRole("tab",{name:E})),await e(s.getByRole("tab",{name:E})).toHaveAttribute("aria-selected","true");await a("Salvar volta à lista",async()=>{await o.click(t.getByRole("button",{name:"Salvar alterações"})),await e(await t.findByRole("region",{name:"Departamentos"})).toBeInTheDocument()}),await i()}},p={name:"Editor: novo departamento",args:{rotaInicial:"/departamentos/novo"},play:async({canvasElement:n,step:a})=>{const t=r(n);await e(await t.findByRole("heading",{name:"Novo departamento",level:1})).toBeInTheDocument(),await Y(t.getByRole("textbox",{name:/Nome/}),"BRB · Banco de Brasília"),await a("fundo obrigatório sem padrão marca a aba com erro",async()=>{await o.click(t.getByRole("tab",{name:"Plano de fundo"})),await o.click(t.getByRole("checkbox",{name:/Fundo obrigatório/})),await o.click(t.getByRole("button",{name:"Criar departamento"})),await e(await t.findByRole("alert")).toHaveTextContent(/Fundo obrigatório precisa de um padrão/),await e(t.getByRole("tab",{name:"Plano de fundo (com erro)"})).toHaveAttribute("aria-selected","true")}),await a("corrigido, cria e volta à lista",async()=>{await o.click(t.getByRole("checkbox",{name:/Fundo obrigatório/})),await o.click(t.getByRole("button",{name:"Criar departamento"})),await e((await t.findAllByText("BRB · Banco de Brasília")).length).toBeGreaterThan(0)}),await i()}},u={args:{rotaInicial:l},parameters:{jornada:{...c,pendurar:[g]}},play:async({canvasElement:n})=>{const a=r(n);await e(await a.findByText(/Carregando o departamento/)).toBeInTheDocument(),await e(a.queryByRole("button",{name:/Salvar|Criar departamento/})).not.toBeInTheDocument()}},B={name:"Erro de rede: sem formulário",args:{rotaInicial:l},parameters:{jornada:{...c,semRede:[g]}},play:async({canvasElement:n})=>{const a=r(n);await e(await a.findByText(/Não foi possível carregar o departamento/)).toBeInTheDocument(),await e(a.queryByRole("button",{name:/Salvar|Criar departamento/})).not.toBeInTheDocument(),await e(a.queryByRole("tablist")).not.toBeInTheDocument(),await o.click(a.getByRole("button",{name:"Tentar de novo"})),await e(await a.findByText(/Não foi possível carregar o departamento/)).toBeInTheDocument(),await i()}},w={name:"Erro do servidor",args:{rotaInicial:l},parameters:{jornada:{...c,falhar:[g]}},play:async({canvasElement:n})=>{const a=r(n);await e(await a.findByText(/O servidor teve um problema ao carregar o departamento/)).toBeInTheDocument(),await e(a.queryByText(/api falsa/)).not.toBeInTheDocument(),await e(a.getByRole("link",{name:"Voltar para Departamentos"})).toBeInTheDocument(),await i()}},y={name:"Erro: não encontrado",args:{rotaInicial:"/departamentos/dep-inexistente"},play:async({canvasElement:n})=>{const a=r(n);await e(await a.findByText("Departamento não encontrado.")).toBeInTheDocument(),await e(a.queryByRole("button",{name:"Tentar de novo"})).not.toBeInTheDocument(),await o.click(a.getByRole("button",{name:"Voltar à lista"})),await e(await a.findByRole("region",{name:"Departamentos"})).toBeInTheDocument(),await i()}},x={name:"Erro ao salvar: alerta no topo",args:{rotaInicial:l},parameters:{jornada:{...c,respostas:{"PUT /v1/departamentos/:id":{status:409,corpo:{erro:"Já existe um departamento com este identificador."}}}}},play:async({canvasElement:n})=>{const a=r(n);await o.click(await a.findByRole("button",{name:"Salvar alterações"}));const t=await a.findByRole("alert");await e(t).toHaveTextContent("Já existe um departamento com este identificador."),await T(()=>e(t.compareDocumentPosition(a.getByRole("tablist"))&Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()),await T(()=>e(t.ownerDocument.activeElement).toBe(t.closest("[tabindex='-1']"))),await i()}},v={name:"Vazio: nenhum departamento",parameters:{jornada:{...c,respostas:{[g]:{status:200,corpo:[]}}}},play:async({canvasElement:n})=>{const a=r(n);await e(await a.findByText("Nenhum departamento ainda")).toBeInTheDocument(),await i()}},ba=["Padrao","Editor","Novo","Carregando","SemRede","ErroDoServidor","NaoEncontrado","ErroAoSalvar","Vazio"];var b,R,I;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(I=(R=m.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var D,f,h;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(h=(f=d.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var S,O,A;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(A=(O=p.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var k,F,N;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(N=(F=u.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var C,L,_;B.parameters={...B.parameters,docs:{...(C=B.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(_=(L=B.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var G,P,H;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(H=(P=w.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var q,J,j;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(j=(J=y.parameters)==null?void 0:J.docs)==null?void 0:j.source}}};var V,z,U;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(U=(z=x.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};var M,Q,W;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(W=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};export{u as Carregando,d as Editor,x as ErroAoSalvar,w as ErroDoServidor,y as NaoEncontrado,p as Novo,m as Padrao,B as SemRede,v as Vazio,ba as __namedExportsOrder,Ta as default};
