import{t as o,s as r,m as U}from"./jornadaOperar-DoJW5foJ.js";import"./ShellJornada-BhmpHafi.js";import"./jsx-runtime-Bs_0p5zD.js";import"./iframe-DuQYyiCW.js";import"./preload-helper-D6kgxu3v.js";import"./dadosShell-DQKYzqPR.js";import"./index-NyezkBrm.js";import"./index-BGS7Qo4C.js";import"./v2-Ez4nyj0x.js";import"./index-D3ZqoiZi.js";import"./api-CwdEbqb0.js";import"./index-uCLBKUYa.js";import"./marca-0GV3HRL3.js";import"./carregando-DOTRDj5N.js";import"./celulas-lNODG2t2.js";/* empty css              */import"./MiniBarras-cCiWucG-.js";import"./paleta-B-duPMKZ.js";import"./Login-BakOtekO.js";/* empty css                */const{expect:a,userEvent:n,within:Y}=__STORYBOOK_MODULE_TEST__,D=U("/atendentes/101",'Jornada do atendente dentro do shell: edição em três abas (Perfil, Horários, Departamentos), perfil de leitura e cadastro. Atendente que não existe (404) mostra "não encontrado" com Voltar à lista; sem permissão (403) explica sem oferecer tentar; falha de rede ou do servidor mostra o erro com Tentar de novo.',null),i={cenario:"padrao"},x="GET /v1/atendentes/:id",Be={title:"Jornadas/Atendente",...D,parameters:{...D.parameters,jornada:i}},m={name:"Padrão",play:async({canvasElement:t,step:e})=>{const s=o(t);await a(await s.findByRole("heading",{name:"Rafael Moura"})).toBeInTheDocument();const c=Y(s.getByRole("tablist",{name:"Seções do atendente"}));await e("Horários mostra os dias da semana",async()=>{await n.click(c.getByRole("tab",{name:"Horários"})),await a(c.getByRole("tab",{name:"Horários"})).toHaveAttribute("aria-selected","true"),await a(await s.findByLabelText("Início, Segundas")).toBeInTheDocument()}),await e("Departamentos lista os vínculos",async()=>{await n.click(c.getByRole("tab",{name:"Departamentos"})),await a(await s.findByText("Departamentos vinculados")).toBeInTheDocument()}),await e("Perfil volta com a foto ou as iniciais",async()=>{await n.click(c.getByRole("tab",{name:"Perfil"})),await a(await s.findByRole("button",{name:"Salvar Alterações"})).toBeInTheDocument()}),await e("o ← volta para a lista",async()=>{await n.click(s.getByRole("link",{name:"Voltar para Atendentes"})),await a(await s.findByRole("region",{name:"Cadastro de atendentes"})).toBeInTheDocument()}),await r()}},l={args:{rotaInicial:"/atendentes/101/perfil"},play:async({canvasElement:t})=>{const e=o(t);await a(await e.findByRole("heading",{name:"Perfil do atendente"})).toBeInTheDocument(),await n.click(await e.findByRole("link",{name:"Editar vínculos"})),await a(await e.findByRole("heading",{name:"Rafael Moura"})).toBeInTheDocument(),await r()}},d={args:{rotaInicial:"/atendentes/novo"},play:async({canvasElement:t})=>{const e=o(t);await a(await e.findByRole("button",{name:"Criar atendente"})).toBeInTheDocument(),await a(e.getByRole("button",{name:"Horários"})).toBeDisabled(),await a(e.getByRole("button",{name:"Departamentos"})).toBeDisabled(),await n.click(e.getByRole("button",{name:"Perfil"})),await n.click(e.getByRole("button",{name:"Cancelar"})),await a(await e.findByRole("region",{name:"Cadastro de atendentes"})).toBeInTheDocument(),await r()}},p={parameters:{jornada:{...i,pendurar:[x]}},play:async({canvasElement:t})=>{const e=o(t);await a(await e.findByText("Carregando o atendente…")).toBeInTheDocument()}},u={name:"Vazio: sem departamentos",parameters:{jornada:{...i,respostas:{"GET /v1/departamentos":{status:200,corpo:[]}}}},play:async({canvasElement:t})=>{const e=o(t);await a(await e.findByRole("heading",{name:"Rafael Moura"})).toBeInTheDocument(),await n.click(e.getByRole("tab",{name:"Departamentos"})),await a(await e.findByText("nenhum departamento disponível")).toBeInTheDocument(),await a(e.getByText("nenhum vinculado ainda")).toBeInTheDocument(),await r()}},w={name:"Erro: não encontrado",args:{rotaInicial:"/atendentes/999"},play:async({canvasElement:t})=>{const e=o(t);await a(await e.findByText("Atendente não encontrado")).toBeInTheDocument(),await a(e.queryByRole("button",{name:"Tentar de novo"})).not.toBeInTheDocument(),await a(e.getByRole("button",{name:"Voltar à lista"})).toBeInTheDocument(),await r()}},B={name:"Erro de rede",parameters:{jornada:{...i,semRede:[x]}},play:async({canvasElement:t})=>{const e=o(t);await a(await e.findByText(/Não foi possível carregar o atendente/)).toBeInTheDocument(),await n.click(e.getByRole("button",{name:"Tentar de novo"})),await a(await e.findByText(/Não foi possível carregar o atendente/)).toBeInTheDocument(),await r()}},y={name:"Erro: sem permissão",parameters:{jornada:{...i,respostas:{[x]:{status:403,corpo:{erro:"sem permissão (api falsa)"}}}}},play:async({canvasElement:t})=>{const e=o(t);await a(await e.findByText("Seu usuário não tem permissão para ver o atendente.")).toBeInTheDocument(),await a(e.queryByRole("button",{name:"Tentar de novo"})).not.toBeInTheDocument(),await a(e.getByRole("link",{name:"Voltar para Atendentes"})).toBeInTheDocument(),await r()}},T={name:"Erro do servidor",parameters:{jornada:{...i,falhar:[x]}},play:async({canvasElement:t})=>{const e=o(t);await a(await e.findByText(/O servidor teve um problema ao carregar o atendente/)).toBeInTheDocument(),await a(e.queryByText(/api falsa/)).not.toBeInTheDocument(),await a(e.getByRole("button",{name:"Tentar de novo"})).toBeInTheDocument(),await r()}},ye=["Padrao","Perfil","Criar","Carregando","Vazio","NaoEncontrado","SemRede","SemPermissao","ErroDoServidor"];var R,f,v;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Padrão",
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByRole("heading", {
      name: "Rafael Moura"
    })).toBeInTheDocument();
    const abas = within(tela.getByRole("tablist", {
      name: "Seções do atendente"
    }));
    await step("Horários mostra os dias da semana", async () => {
      await userEvent.click(abas.getByRole("tab", {
        name: "Horários"
      }));
      await expect(abas.getByRole("tab", {
        name: "Horários"
      })).toHaveAttribute("aria-selected", "true");
      await expect(await tela.findByLabelText("Início, Segundas")).toBeInTheDocument();
    });
    await step("Departamentos lista os vínculos", async () => {
      await userEvent.click(abas.getByRole("tab", {
        name: "Departamentos"
      }));
      await expect(await tela.findByText("Departamentos vinculados")).toBeInTheDocument();
    });
    await step("Perfil volta com a foto ou as iniciais", async () => {
      await userEvent.click(abas.getByRole("tab", {
        name: "Perfil"
      }));
      await expect(await tela.findByRole("button", {
        name: "Salvar Alterações"
      })).toBeInTheDocument();
    });
    await step("o ← volta para a lista", async () => {
      await userEvent.click(tela.getByRole("link", {
        name: "Voltar para Atendentes"
      }));
      await expect(await tela.findByRole("region", {
        name: "Cadastro de atendentes"
      })).toBeInTheDocument();
    });
    await semRotaSemFixture();
  }
}`,...(v=(f=m.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var g,E,h;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    rotaInicial: "/atendentes/101/perfil"
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByRole("heading", {
      name: "Perfil do atendente"
    })).toBeInTheDocument();
    await userEvent.click(await tela.findByRole("link", {
      name: "Editar vínculos"
    }));
    await expect(await tela.findByRole("heading", {
      name: "Rafael Moura"
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(h=(E=l.parameters)==null?void 0:E.docs)==null?void 0:h.source}}};var I,b,S;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    rotaInicial: "/atendentes/novo"
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByRole("button", {
      name: "Criar atendente"
    })).toBeInTheDocument();
    await expect(tela.getByRole("button", {
      name: "Horários"
    })).toBeDisabled();
    await expect(tela.getByRole("button", {
      name: "Departamentos"
    })).toBeDisabled();
    await userEvent.click(tela.getByRole("button", {
      name: "Perfil"
    }));
    await userEvent.click(tela.getByRole("button", {
      name: "Cancelar"
    }));
    await expect(await tela.findByRole("region", {
      name: "Cadastro de atendentes"
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(S=(b=d.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var A,k,O;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    jornada: {
      ...PADRAO,
      pendurar: [ROTA]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Carregando o atendente…")).toBeInTheDocument();
  }
}`,...(O=(k=p.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var P,C,j;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Vazio: sem departamentos",
  parameters: {
    jornada: {
      ...PADRAO,
      respostas: {
        "GET /v1/departamentos": {
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
    await expect(await tela.findByRole("heading", {
      name: "Rafael Moura"
    })).toBeInTheDocument();
    await userEvent.click(tela.getByRole("tab", {
      name: "Departamentos"
    }));
    await expect(await tela.findByText("nenhum departamento disponível")).toBeInTheDocument();
    await expect(tela.getByText("nenhum vinculado ainda")).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(j=(C=u.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var F,H,V;w.parameters={...w.parameters,docs:{...(F=w.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Erro: não encontrado",
  args: {
    rotaInicial: "/atendentes/999"
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Atendente não encontrado")).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: "Tentar de novo"
    })).not.toBeInTheDocument();
    await expect(tela.getByRole("button", {
      name: "Voltar à lista"
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(V=(H=w.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var J,_,q;B.parameters={...B.parameters,docs:{...(J=B.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: "Erro de rede",
  parameters: {
    jornada: {
      ...PADRAO,
      semRede: [ROTA]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/Não foi possível carregar o atendente/)).toBeInTheDocument();
    await userEvent.click(tela.getByRole("button", {
      name: "Tentar de novo"
    }));
    await expect(await tela.findByText(/Não foi possível carregar o atendente/)).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(q=(_=B.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var M,N,z;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Erro: sem permissão",
  parameters: {
    jornada: {
      ...PADRAO,
      respostas: {
        [ROTA]: {
          status: 403,
          corpo: {
            erro: "sem permissão (api falsa)"
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Seu usuário não tem permissão para ver o atendente.")).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: "Tentar de novo"
    })).not.toBeInTheDocument();
    await expect(tela.getByRole("link", {
      name: "Voltar para Atendentes"
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(z=(N=y.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var G,L,K;T.parameters={...T.parameters,docs:{...(G=T.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "Erro do servidor",
  parameters: {
    jornada: {
      ...PADRAO,
      falhar: [ROTA]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/O servidor teve um problema ao carregar o atendente/)).toBeInTheDocument();
    await expect(tela.queryByText(/api falsa/)).not.toBeInTheDocument();
    await expect(tela.getByRole("button", {
      name: "Tentar de novo"
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(K=(L=T.parameters)==null?void 0:L.docs)==null?void 0:K.source}}};export{p as Carregando,d as Criar,T as ErroDoServidor,w as NaoEncontrado,m as Padrao,l as Perfil,y as SemPermissao,B as SemRede,u as Vazio,ye as __namedExportsOrder,Be as default};
