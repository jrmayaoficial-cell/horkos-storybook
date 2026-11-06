import{C as g,a as M,m as H}from"./jornadaAdmin-D0apoEtS.js";import{t as s,s as m}from"./jornadaOperar-BdAIGCIC.js";import"./ShellJornada-D-peWuGd.js";import"./jsx-runtime-QefsGvVP.js";import"./iframe-C55Pa0Sl.js";import"./preload-helper-D6kgxu3v.js";import"./dadosShell-AcLNeeYM.js";import"./index-B0lqomwj.js";import"./index-Ci4iLD9v.js";import"./v2-DnZAwx-i.js";import"./index-BV2uSZem.js";import"./api-DeTcSHTh.js";import"./index-lEDuBR7W.js";import"./marca-DMRGkCqi.js";import"./carregando-D5W0zsYz.js";import"./celulas-Dk3hBIkz.js";/* empty css              */import"./MiniBarras-CIG3rbZ8.js";import"./cores-D-iLqYVd.js";import"./Login-9buva6Cs.js";import"./etapas-Bb0VYDqs.js";/* empty css                */import"./ShellGestao-bT-PtA1H.js";const{expect:t,userEvent:i,waitFor:x,within:E}=__STORYBOOK_MODULE_TEST__,V=H("/configuracoes","Jornada de Configurações (admin) dentro do shell: abas com sombra nas bordas quando há mais abas e a ativa sempre visível; abas só de administrador com cadeado e texto para leitor de tela. Alteração não salva: o bloco do pai ganha um ponto na aba e a barra diz onde mudou; um cartão com estado próprio (Motivos de pausa) pergunta antes de trocar de aba."),wa={title:"Jornadas/Configurações",...V},L="GET /v1/config/provedores",G="GET /v1/config/agente",J=["Parceiros de IA","Agente","Link do cliente","Atendimento humano","Análise","Área de risco","Palavra aleatória","Campos"],r=(n,a)=>n.findByRole("tab",{name:new RegExp(`^${a}`)});async function j(n){const a=n.querySelector(".config-abas"),e=a==null?void 0:a.querySelector('[role="tab"][aria-selected="true"]');await x(()=>{const o=a.getBoundingClientRect(),c=e.getBoundingClientRect();t(c.left).toBeGreaterThanOrEqual(o.left-1),t(c.right).toBeLessThanOrEqual(o.right+1)})}async function y(){await t(document.documentElement.scrollWidth).toBeLessThanOrEqual(document.documentElement.clientWidth)}const l={name:"Padrão",play:async({canvasElement:n,step:a})=>{const e=s(n);await a("abas só de administrador têm texto para leitor de tela",async()=>{await t((await r(e,"Parceiros de IA")).textContent).toContain("somente administradores")});for(const o of J)await a(`aba ${o}: fica ativa e a tela não rola para os lados`,async()=>{const c=await r(e,o);await i.click(c),await x(()=>t(c).toHaveAttribute("aria-selected","true")),await j(n),await y()});await m()}},d={name:"Alteração não salva",play:async({canvasElement:n,step:a})=>{const e=s(n);await a("mudar um motivo de pausa e trocar de aba pergunta antes",async()=>{await i.click(await r(e,"Atendimento humano")),await i.click(await e.findByRole("button",{name:"Remover o motivo Almoço"})),await i.click(await r(e,"Agente"));const o=E(await e.findByRole("dialog"));await t(o.getByText("Descartar alterações em Motivos de pausa?")).toBeInTheDocument(),await t(o.getByRole("button",{name:"Continuar editando"})).toHaveFocus()}),await a("Continuar editando fica na aba com o motivo removido",async()=>{await i.click(E(e.getByRole("dialog")).getByRole("button",{name:"Continuar editando"})),await x(()=>t(e.queryByRole("dialog")).not.toBeInTheDocument()),await t(await r(e,"Atendimento humano")).toHaveAttribute("aria-selected","true"),await t(e.queryByRole("button",{name:"Remover o motivo Almoço"})).not.toBeInTheDocument(),await t((await r(e,"Atendimento humano")).textContent).toContain("alterações não salvas"),await j(n)}),await m()}},u={parameters:{jornada:M},play:async({canvasElement:n,step:a})=>{const e=s(n);await a("o super vê a retenção de gravações, que o admin não vê",async()=>{await i.click(await r(e,"Link do cliente")),await t(await e.findByRole("heading",{name:"Retenção e arquivamento de gravações"})).toBeInTheDocument(),await t(e.getByText("só o super admin vê")).toBeInTheDocument(),await y()}),await m()}},p={parameters:{jornada:{...g,pendurar:[L]}},play:async({canvasElement:n})=>{const a=s(n);await t(await a.findByRole("status",{name:/Carregando as configurações/})).toBeInTheDocument(),await t(a.queryByRole("button",{name:/Salvar configurações/})).not.toBeInTheDocument()}},w={name:"Bloco com falha",parameters:{jornada:{...g,falhar:[G]}},play:async({canvasElement:n,step:a})=>{const e=s(n);await a("a aba Agente avisa que não carregou e o bloco fica fora do salvar",async()=>{const o=await r(e,"Agente");await x(()=>t(o.textContent).toContain("não carregou")),await i.click(o),await t(await e.findByText(/O servidor teve um problema ao carregar o comportamento do agente/)).toBeInTheDocument(),await t(e.getByText(/Não será salvo: Agente/)).toBeInTheDocument(),await t(e.getByRole("button",{name:/Tentar de novo/})).toBeInTheDocument(),await y()}),await m()}},v={name:"Sem rede",parameters:{jornada:{...g,semRede:[L]}},play:async({canvasElement:n})=>{const a=s(n);await t(await a.findByText(/Não foi possível carregar as configurações/)).toBeInTheDocument(),await t(a.getByRole("button",{name:/Tentar de novo/})).toBeInTheDocument(),await t(a.queryByRole("button",{name:/Salvar configurações/})).not.toBeInTheDocument(),await m()}},va=["Padrao","AlteracaoNaoSalva","Super","Carregando","BlocoComFalha","SemRede"];var B,b,R;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "Padrão",
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await step("abas só de administrador têm texto para leitor de tela", async () => {
      await expect((await abaPorNome(tela, "Parceiros de IA")).textContent).toContain("somente administradores");
    });
    for (const nome of ABAS) {
      await step(\`aba \${nome}: fica ativa e a tela não rola para os lados\`, async () => {
        const aba = await abaPorNome(tela, nome);
        await userEvent.click(aba);
        await waitFor(() => expect(aba).toHaveAttribute("aria-selected", "true"));
        await abaAtivaVisivel(canvasElement);
        await semRolagemLateral();
      });
    }
    await semRotaSemFixture();
  }
}`,...(R=(b=l.parameters)==null?void 0:b.docs)==null?void 0:R.source}}};var A,f,h;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Alteração não salva",
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await step("mudar um motivo de pausa e trocar de aba pergunta antes", async () => {
      await userEvent.click(await abaPorNome(tela, "Atendimento humano"));
      await userEvent.click(await tela.findByRole("button", {
        name: "Remover o motivo Almoço"
      }));
      await userEvent.click(await abaPorNome(tela, "Agente"));
      const modal = within(await tela.findByRole("dialog"));
      await expect(modal.getByText("Descartar alterações em Motivos de pausa?")).toBeInTheDocument();
      await expect(modal.getByRole("button", {
        name: "Continuar editando"
      })).toHaveFocus();
    });
    await step("Continuar editando fica na aba com o motivo removido", async () => {
      await userEvent.click(within(tela.getByRole("dialog")).getByRole("button", {
        name: "Continuar editando"
      }));
      await waitFor(() => expect(tela.queryByRole("dialog")).not.toBeInTheDocument());
      await expect(await abaPorNome(tela, "Atendimento humano")).toHaveAttribute("aria-selected", "true");
      await expect(tela.queryByRole("button", {
        name: "Remover o motivo Almoço"
      })).not.toBeInTheDocument();
      await expect((await abaPorNome(tela, "Atendimento humano")).textContent).toContain("alterações não salvas");
      await abaAtivaVisivel(canvasElement);
    });
    await semRotaSemFixture();
  }
}`,...(h=(f=d.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var T,D,I;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    jornada: CENARIO_SUPER
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await step("o super vê a retenção de gravações, que o admin não vê", async () => {
      await userEvent.click(await abaPorNome(tela, "Link do cliente"));
      await expect(await tela.findByRole("heading", {
        name: "Retenção e arquivamento de gravações"
      })).toBeInTheDocument();
      await expect(tela.getByText("só o super admin vê")).toBeInTheDocument();
      await semRolagemLateral();
    });
    await semRotaSemFixture();
  }
}`,...(I=(D=u.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var C,S,N;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      pendurar: [PROVEDORES]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByRole("status", {
      name: /Carregando as configurações/
    })).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: /Salvar configurações/
    })).not.toBeInTheDocument();
  }
}`,...(N=(S=p.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var O,F,P;w.parameters={...w.parameters,docs:{...(O=w.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "Bloco com falha",
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      falhar: [AGENTE]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await step("a aba Agente avisa que não carregou e o bloco fica fora do salvar", async () => {
      const aba = await abaPorNome(tela, "Agente");
      await waitFor(() => expect(aba.textContent).toContain("não carregou"));
      await userEvent.click(aba);
      await expect(await tela.findByText(/O servidor teve um problema ao carregar o comportamento do agente/)).toBeInTheDocument();
      await expect(tela.getByText(/Não será salvo: Agente/)).toBeInTheDocument();
      await expect(tela.getByRole("button", {
        name: /Tentar de novo/
      })).toBeInTheDocument();
      await semRolagemLateral();
    });
    await semRotaSemFixture();
  }
}`,...(P=(F=w.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var q,k,_;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "Sem rede",
  parameters: {
    jornada: {
      ...CENARIO_ADMIN,
      semRede: [PROVEDORES]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/Não foi possível carregar as configurações/)).toBeInTheDocument();
    await expect(tela.getByRole("button", {
      name: /Tentar de novo/
    })).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: /Salvar configurações/
    })).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(_=(k=v.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};export{d as AlteracaoNaoSalva,w as BlocoComFalha,p as Carregando,l as Padrao,v as SemRede,u as Super,va as __namedExportsOrder,wa as default};
