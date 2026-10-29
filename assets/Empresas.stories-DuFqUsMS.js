import{a as r,m as V}from"./jornadaAdmin-CVeaWri0.js";import{t as s,s as m,d as z}from"./jornadaOperar-bAw7m3v_.js";import"./ShellJornada-Bk_yMwyO.js";import"./jsx-runtime-CnGeCed7.js";import"./iframe-TWammDK-.js";import"./preload-helper-D6kgxu3v.js";import"./dadosShell-Bl7FkIX8.js";import"./index-Be4RGSV8.js";import"./index-BG6Z0xWT.js";import"./v2-DPlIulHz.js";import"./index-Coq9CpY8.js";import"./api-CwdEbqb0.js";import"./index-DxMpz5Et.js";import"./marca-Bxw3C_az.js";import"./carregando-Cecq3Orn.js";import"./celulas-CN9Gpmx2.js";/* empty css              */import"./MiniBarras-Btaw0BA0.js";import"./paleta-CAXSK6uJ.js";import"./Login-qkThBxEk.js";/* empty css                */import"./ShellGestao-BWXVhdy9.js";const{expect:t,userEvent:o,waitFor:T,within:F}=__STORYBOOK_MODULE_TEST__,x=V("/empresas","Jornada de Empresas (só super admin) dentro do shell: lista em cartões até 899 px com o e-mail longo quebrando dentro do cartão, Nova empresa e Editar no modal (tela inteira a 640, rodapé preso). Salvar sai uma vez só; a falha aparece no topo do formulário sem fechar o modal; 403 diz que só o super admin acessa."),c="GET /v1/empresas",H="POST /v1/empresas",M="financeiro.cobranca.consignado.parceiros@borealconsignados-regional.com.br",ya={title:"Jornadas/Empresas",...x,parameters:{...x.parameters,jornada:r}};async function G(e){await t((await e.findAllByText("Boreal Consignados")).length).toBeGreaterThan(0)}async function U(e){await o.click(e.getAllByRole("button",{name:/Nova empresa/})[0]);const a=F(await e.findByRole("dialog"));return await z(a.getByRole("textbox",{name:/Nome da empresa/}),"Cerrado Promotora"),a}const l={name:"Padrão",play:async({canvasElement:e,step:a})=>{const n=s(e);await G(n),await t(n.getAllByText(M).length).toBeGreaterThan(0),await a("Nova empresa: cria e entra na lista",async()=>{const i=await U(n);await o.click(i.getByRole("button",{name:"Criar empresa"})),await T(()=>t(n.queryByRole("dialog")).not.toBeInTheDocument()),await t((await n.findAllByText("Cerrado Promotora")).length).toBeGreaterThan(0)}),await a("Editar: abre com os dados e cancela",async()=>{await o.click(n.getByRole("button",{name:"Editar Boreal Consignados"}));const i=F(await n.findByRole("dialog"));await t(i.getByRole("textbox",{name:/Nome da empresa/})).toHaveValue("Boreal Consignados"),await o.click(i.getByRole("button",{name:"Cancelar"})),await T(()=>t(n.queryByRole("dialog")).not.toBeInTheDocument())}),await m()}},p={name:"Erro ao salvar: motivo no topo do formulário",parameters:{jornada:{...r,respostas:{[H]:{status:409,corpo:{erro:"Já existe uma empresa com este CNPJ."}}}}},play:async({canvasElement:e})=>{const a=s(e);await G(a);const n=await U(a);await o.click(n.getByRole("button",{name:"Criar empresa"}));const i=await n.findByRole("alert");await T(()=>t(i).toHaveTextContent("Já existe uma empresa com este CNPJ.")),await t(a.getByRole("dialog")).toBeInTheDocument(),await o.click(n.getByRole("button",{name:"Cancelar"})),await m()}},d={parameters:{jornada:{...r,pendurar:[c]}},play:async({canvasElement:e})=>{const a=s(e);await t(await a.findByText("Carregando empresas…")).toBeInTheDocument(),await t(a.queryByRole("button",{name:/Tentar de novo/})).not.toBeInTheDocument()}},u={parameters:{jornada:{...r,respostas:{[c]:{corpo:[]}}}},play:async({canvasElement:e})=>{const a=s(e);await t(await a.findByText("Nenhuma empresa ainda")).toBeInTheDocument(),await m()}},w={name:"Erro do servidor",parameters:{jornada:{...r,falhar:[c]}},play:async({canvasElement:e})=>{const a=s(e);await t(await a.findByText(/O servidor teve um problema ao carregar as empresas/)).toBeInTheDocument(),await t(a.queryByText(/api falsa/)).not.toBeInTheDocument(),await o.click(a.getByRole("button",{name:/Tentar de novo/})),await t(await a.findByText(/O servidor teve um problema ao carregar as empresas/)).toBeInTheDocument(),await m()}},y={name:"Sem rede",parameters:{jornada:{...r,semRede:[c]}},play:async({canvasElement:e})=>{const a=s(e);await t(await a.findByText(/Não foi possível carregar as empresas. Verifique a conexão/)).toBeInTheDocument(),await t(a.getByRole("button",{name:/Tentar de novo/})).toBeInTheDocument(),await m()}},B={name:"Erro: sem permissão (403)",parameters:{jornada:{...r,respostas:{[c]:{status:403,corpo:{erro:"proibido"}}}}},play:async({canvasElement:e})=>{const a=s(e);await t(await a.findByText("Apenas o super admin acessa esta página.")).toBeInTheDocument(),await t(a.queryByRole("button",{name:/Tentar de novo/})).not.toBeInTheDocument(),await m()}},Ba=["Padrao","ErroAoSalvar","Carregando","Vazio","ErroDoServidor","SemRede","SemPermissao"];var E,g,v;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
      await expect((await tela.findAllByText("Cerrado Promotora")).length).toBeGreaterThan(0);
    });
    await step("Editar: abre com os dados e cancela", async () => {
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
}`,...(v=(g=l.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var R,f,h;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Erro ao salvar: motivo no topo do formulário",
  parameters: {
    jornada: {
      ...CENARIO_SUPER,
      respostas: {
        [CRIAR]: {
          status: 409,
          corpo: {
            erro: "Já existe uma empresa com este CNPJ."
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
    await waitFor(() => expect(alerta).toHaveTextContent("Já existe uma empresa com este CNPJ."));
    await expect(tela.getByRole("dialog")).toBeInTheDocument();
    await userEvent.click(modal.getByRole("button", {
      name: "Cancelar"
    }));
    await semRotaSemFixture();
  }
}`,...(h=(f=p.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var I,S,b;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(b=(S=d.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var D,C,A;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(A=(C=u.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var N,O,P;w.parameters={...w.parameters,docs:{...(N=w.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(P=(O=w.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var _,J,q;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(q=(J=y.parameters)==null?void 0:J.docs)==null?void 0:q.source}}};var L,j,k;B.parameters={...B.parameters,docs:{...(L=B.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
    await semRotaSemFixture();
  }
}`,...(k=(j=B.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};export{d as Carregando,p as ErroAoSalvar,w as ErroDoServidor,l as Padrao,B as SemPermissao,y as SemRede,u as Vazio,Ba as __namedExportsOrder,ya as default};
