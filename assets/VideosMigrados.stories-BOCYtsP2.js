import{C as c,m as P}from"./jornadaAdmin-CyvUDi_g.js";import{t as i,s as m,d as g}from"./jornadaOperar-D7ZeOS19.js";import"./ShellJornada-BMJ4fpX0.js";import"./jsx-runtime-CqjonpNT.js";import"./iframe-DJrhfsQk.js";import"./preload-helper-D6kgxu3v.js";import"./index-9UivOglz.js";import"./index-BwsDp8T-.js";import"./marca-z0SsKRba.js";import"./carregando-BXT1e_OM.js";import"./dadosShell-BJlYo5ba.js";import"./index-DXvfoM1X.js";import"./v2-CZUD68ca.js";import"./index-DBwj-ecP.js";import"./api-Z9ulGFc_.js";import"./Login-DIYaNGVn.js";import"./celulas-DGaOaVoK.js";/* empty css              */import"./paleta-B-duPMKZ.js";import"./MiniBarras-CUX8X_xl.js";/* empty css                */import"./ShellGestao-Bv6zAXUC.js";const{expect:e,userEvent:r,waitFor:T,within:G}=__STORYBOOK_MODULE_TEST__,M=P("/videos-migrados","Jornada de Vídeos migrados dentro do shell: acervo, origem, busca no servidor e a lista (cartões até 899 px). Restaurar sai uma vez só por vídeo e só o cartão clicado fica ocupado; o aviso é anunciado por leitor de tela; a busca antiga que chega atrasada não pisa na atual; falha de carga mostra o motivo com Tentar de novo quando adianta."),l="GET /v1/videos-migrados",$="POST /v1/videos-migrados/:id/restaurar",s="Juliana Ferreira Campos",ya={title:"Jornadas/Vídeos migrados",...M};async function x(o){await e((await o.findAllByText(s)).length).toBeGreaterThan(0)}const d={name:"Padrão",play:async({canvasElement:o,step:a})=>{const t=i(o);await x(t),await e(await t.findByText("Acervo")).toBeInTheDocument(),await a("Restaurar: pede uma vez e anuncia o aviso",async()=>{const n=t.getByRole("button",{name:`Restaurar o vídeo de ${s}`});await r.click(n);const J=await t.findByText(/Restauração pedida/);await e(J.closest('[role="status"]')).toHaveAttribute("aria-live","polite"),await T(()=>e(t.queryByRole("button",{name:`Restaurar o vídeo de ${s}`})).not.toBeInTheDocument())}),await a("Origem: IA filtra no servidor",async()=>{const n=G(t.getByRole("group",{name:"Origem dos vídeos"}));await r.click(n.getByRole("button",{name:"IA"})),await e(n.getByRole("button",{name:"IA"})).toHaveAttribute("aria-pressed","true"),await e((await t.findAllByText("Fernanda Rocha")).length).toBeGreaterThan(0),await T(()=>e(t.queryAllByText(s)).toHaveLength(0)),await r.click(n.getByRole("button",{name:"Tudo"})),await x(t)}),await a("Busca: só o que casa",async()=>{await g(t.getByRole("searchbox",{name:"Buscar vídeo"}),"Carlos"),await T(()=>e(t.queryAllByText(s)).toHaveLength(0)),await e((await t.findAllByText("Carlos Eduardo Lima")).length).toBeGreaterThan(0),await g(t.getByRole("searchbox",{name:"Buscar vídeo"}),""),await x(t)}),await a("Contratação abre e fecha",async()=>{const n=t.getAllByRole("button",{name:"Ver a contratação"})[0];await r.click(n),await e((await t.findAllByText("Consignado INSS")).length).toBeGreaterThan(0),await r.click(t.getAllByRole("button",{name:"Esconder a contratação"})[0])}),await m()}},u={parameters:{jornada:{...c,pendurar:[l]}},play:async({canvasElement:o})=>{const a=i(o);await e(await a.findByText("Carregando vídeos…")).toBeInTheDocument(),await e(a.queryByRole("button",{name:/Tentar de novo/})).not.toBeInTheDocument()}},p={parameters:{jornada:{...c,respostas:{[l]:{corpo:{total:0,videos:[]}}}}},play:async({canvasElement:o})=>{const a=i(o);await e(await a.findByText("O acervo ainda não chegou")).toBeInTheDocument(),await m()}},w={name:"Erro do servidor",parameters:{jornada:{...c,falhar:[l]}},play:async({canvasElement:o})=>{const a=i(o);await e(await a.findByText(/O servidor teve um problema ao carregar os vídeos migrados/)).toBeInTheDocument(),await e(a.queryByText(/api falsa/)).not.toBeInTheDocument(),await r.click(a.getByRole("button",{name:/Tentar de novo/})),await e(await a.findByText(/O servidor teve um problema/)).toBeInTheDocument(),await m()}},y={name:"Sem rede",parameters:{jornada:{...c,semRede:[l]}},play:async({canvasElement:o})=>{const a=i(o);await e(await a.findByText(/Não foi possível carregar os vídeos migrados. Verifique a conexão/)).toBeInTheDocument(),await e(a.getByRole("button",{name:/Tentar de novo/})).toBeInTheDocument(),await m()}},v={name:"Erro: sem permissão (403)",parameters:{jornada:{...c,respostas:{[l]:{status:403,corpo:{erro:"proibido"}}}}},play:async({canvasElement:o})=>{const a=i(o);await e(await a.findByText(/não tem permissão para ver os vídeos migrados/)).toBeInTheDocument(),await e(a.queryByRole("button",{name:/Tentar de novo/})).not.toBeInTheDocument(),await m()}},B={name:"Erro ao restaurar: aviso sem texto técnico",parameters:{jornada:{...c,respostas:{[$]:{status:502,corpo:{erro:'HTTP 502 {"code":"SlowDown"}'}}}}},play:async({canvasElement:o})=>{const a=i(o);await x(a),await r.click(a.getByRole("button",{name:`Restaurar o vídeo de ${s}`})),await e(await a.findByText("Não foi possível restaurar o vídeo. Tente de novo.")).toBeInTheDocument(),await e(a.queryByText(/SlowDown/)).not.toBeInTheDocument(),await e(a.getByRole("button",{name:`Restaurar o vídeo de ${s}`})).not.toHaveAttribute("aria-busy"),await m()}},va=["Padrao","Carregando","Vazio","ErroDoServidor","SemRede","SemPermissao","ErroAoRestaurar"];var R,E,D;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Padrão",
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await esperarLista(tela);
    await expect(await tela.findByText("Acervo")).toBeInTheDocument();
    await step("Restaurar: pede uma vez e anuncia o aviso", async () => {
      const botao = tela.getByRole("button", {
        name: \`Restaurar o vídeo de \${ARQUIVADO}\`
      });
      await userEvent.click(botao);
      const aviso = await tela.findByText(/Restauração pedida/);
      await expect(aviso.closest('[role="status"]')).toHaveAttribute("aria-live", "polite");
      await waitFor(() => expect(tela.queryByRole("button", {
        name: \`Restaurar o vídeo de \${ARQUIVADO}\`
      })).not.toBeInTheDocument());
    });
    await step("Origem: IA filtra no servidor", async () => {
      const origem = within(tela.getByRole("group", {
        name: "Origem dos vídeos"
      }));
      await userEvent.click(origem.getByRole("button", {
        name: "IA"
      }));
      await expect(origem.getByRole("button", {
        name: "IA"
      })).toHaveAttribute("aria-pressed", "true");
      await expect((await tela.findAllByText("Fernanda Rocha")).length).toBeGreaterThan(0);
      await waitFor(() => expect(tela.queryAllByText(ARQUIVADO)).toHaveLength(0));
      await userEvent.click(origem.getByRole("button", {
        name: "Tudo"
      }));
      await esperarLista(tela);
    });
    await step("Busca: só o que casa", async () => {
      await digitar(tela.getByRole("searchbox", {
        name: "Buscar vídeo"
      }), "Carlos");
      await waitFor(() => expect(tela.queryAllByText(ARQUIVADO)).toHaveLength(0));
      await expect((await tela.findAllByText("Carlos Eduardo Lima")).length).toBeGreaterThan(0);
      await digitar(tela.getByRole("searchbox", {
        name: "Buscar vídeo"
      }), "");
      await esperarLista(tela);
    });
    await step("Contratação abre e fecha", async () => {
      const abrir = tela.getAllByRole("button", {
        name: "Ver a contratação"
      })[0];
      await userEvent.click(abrir);
      await expect((await tela.findAllByText("Consignado INSS")).length).toBeGreaterThan(0);
      await userEvent.click(tela.getAllByRole("button", {
        name: "Esconder a contratação"
      })[0]);
    });
    await semRotaSemFixture();
  }
}`,...(D=(E=d.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var A,h,I;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      pendurar: [LISTA]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Carregando vídeos…")).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: /Tentar de novo/
    })).not.toBeInTheDocument();
  }
}`,...(I=(h=u.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var b,f,S;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      respostas: {
        [LISTA]: {
          corpo: {
            total: 0,
            videos: []
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("O acervo ainda não chegou")).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(S=(f=p.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var O,C,q;w.parameters={...w.parameters,docs:{...(O=w.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "Erro do servidor",
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      falhar: [LISTA]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/O servidor teve um problema ao carregar os vídeos migrados/)).toBeInTheDocument();
    await expect(tela.queryByText(/api falsa/)).not.toBeInTheDocument();
    await userEvent.click(tela.getByRole("button", {
      name: /Tentar de novo/
    }));
    await expect(await tela.findByText(/O servidor teve um problema/)).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(q=(C=w.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};var N,L,F;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Sem rede",
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      semRede: [LISTA]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/Não foi possível carregar os vídeos migrados. Verifique a conexão/)).toBeInTheDocument();
    await expect(tela.getByRole("button", {
      name: /Tentar de novo/
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(F=(L=y.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var V,_,k;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "Erro: sem permissão (403)",
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
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
    await expect(await tela.findByText(/não tem permissão para ver os vídeos migrados/)).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: /Tentar de novo/
    })).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(k=(_=v.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var j,H,U;B.parameters={...B.parameters,docs:{...(j=B.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Erro ao restaurar: aviso sem texto técnico",
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      respostas: {
        [RESTAURAR]: {
          status: 502,
          corpo: {
            erro: "HTTP 502 {\\"code\\":\\"SlowDown\\"}"
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
    await userEvent.click(tela.getByRole("button", {
      name: \`Restaurar o vídeo de \${ARQUIVADO}\`
    }));
    await expect(await tela.findByText("Não foi possível restaurar o vídeo. Tente de novo.")).toBeInTheDocument();
    await expect(tela.queryByText(/SlowDown/)).not.toBeInTheDocument();
    await expect(tela.getByRole("button", {
      name: \`Restaurar o vídeo de \${ARQUIVADO}\`
    })).not.toHaveAttribute("aria-busy");
    await semRotaSemFixture();
  }
}`,...(U=(H=B.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};export{u as Carregando,B as ErroAoRestaurar,w as ErroDoServidor,d as Padrao,v as SemPermissao,y as SemRede,p as Vazio,va as __namedExportsOrder,ya as default};
