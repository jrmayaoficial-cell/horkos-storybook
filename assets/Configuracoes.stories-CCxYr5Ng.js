import{C as g,a as H,m as M}from"./jornadaAdmin-l5bZ8oNo.js";import{t as s,s as m}from"./jornadaOperar-awlPWmQ0.js";import"./ShellJornada-Di3w4DJF.js";import"./jsx-runtime-DHFgevzS.js";import"./iframe-CoO5izVS.js";import"./preload-helper-D6kgxu3v.js";import"./dadosShell-DQdJRrAJ.js";import"./index-R5VWsdK6.js";import"./index-Bmj1Jk4g.js";import"./v2-DbvoSbvx.js";import"./index-DwHrWNtt.js";import"./api-DeTcSHTh.js";import"./index-Bw16n4GD.js";import"./marca-D4usss2f.js";import"./carregando-BOfDbj33.js";import"./celulas-7lDkBQNb.js";/* empty css              */import"./CartaoKpi-DuGTjShI.js";import"./MiniBarras-DnVU4NhH.js";import"./cores-D-iLqYVd.js";import"./Login-DyIh3DPx.js";import"./etapas-C78J9lLx.js";/* empty css                */import"./ShellGestao-Csc5K-7H.js";const{expect:t,userEvent:i,waitFor:x,within:E}=__STORYBOOK_MODULE_TEST__,V=M("/configuracoes","Jornada de Configurações (admin) dentro do shell: abas com sombra nas bordas quando há mais abas e a ativa sempre visível; abas só de administrador com cadeado e texto para leitor de tela. Alteração não salva: o bloco do pai ganha um ponto na aba e a barra diz onde mudou; um cartão com estado próprio (Motivos de pausa) pergunta antes de trocar de aba."),va={title:"Jornadas/Configurações",...V},L="GET /v1/config/provedores",G="GET /v1/config/agente",J=["Parceiros de IA","Agente","Link do cliente","Atendimento humano","Análise","Área de risco","Palavra aleatória","Campos"],r=(o,e)=>o.findByRole("tab",{name:new RegExp(`^${e}`)});async function j(o){const e=o.querySelector(".config-abas"),a=e==null?void 0:e.querySelector('[role="tab"][aria-selected="true"]');await x(()=>{const n=e.getBoundingClientRect(),c=a.getBoundingClientRect();t(c.left).toBeGreaterThanOrEqual(n.left-1),t(c.right).toBeLessThanOrEqual(n.right+1)})}async function y(){await t(document.documentElement.scrollWidth).toBeLessThanOrEqual(document.documentElement.clientWidth)}const l={name:"Padrão",play:async({canvasElement:o,step:e})=>{const a=s(o);await e("abas só de administrador têm texto para leitor de tela",async()=>{await t((await r(a,"Parceiros de IA")).textContent).toContain("somente administradores")});for(const n of J)await e(`aba ${n}: fica ativa e a tela não rola para os lados`,async()=>{const c=await r(a,n);await i.click(c),await x(()=>t(c).toHaveAttribute("aria-selected","true")),await j(o),await y()});await m()}},d={name:"Alteração não salva",play:async({canvasElement:o,step:e})=>{const a=s(o);await e("mudar um motivo de pausa e trocar de aba pergunta antes",async()=>{await i.click(await r(a,"Atendimento humano")),await i.click(await a.findByRole("button",{name:"Remover o motivo Almoço"})),await i.click(await r(a,"Agente"));const n=E(await a.findByRole("dialog"));await t(n.getByText("Descartar alterações em Motivos de pausa?")).toBeInTheDocument(),await t(n.getByRole("button",{name:"Continuar editando"})).toHaveFocus()}),await e("Continuar editando fica na aba com o motivo removido",async()=>{await i.click(E(a.getByRole("dialog")).getByRole("button",{name:"Continuar editando"})),await x(()=>t(a.queryByRole("dialog")).not.toBeInTheDocument()),await t(await r(a,"Atendimento humano")).toHaveAttribute("aria-selected","true"),await t(a.queryByRole("button",{name:"Remover o motivo Almoço"})).not.toBeInTheDocument(),await t((await r(a,"Atendimento humano")).textContent).toContain("alterações não salvas"),await j(o)}),await m()}},u={parameters:{jornada:H},play:async({canvasElement:o,step:e})=>{const a=s(o);await e("o super vê a retenção de gravações, que o admin não vê",async()=>{await i.click(await r(a,"Link do cliente")),await t(await a.findByRole("heading",{name:"Retenção e arquivamento de gravações"})).toBeInTheDocument(),await t(a.getByText("só o super admin vê")).toBeInTheDocument(),await y()}),await m()}},p={parameters:{jornada:{...g,pendurar:[L]}},play:async({canvasElement:o})=>{const e=s(o),a=await e.findByText(/Carregando as configurações/);await t(a.closest('[role="status"]')).toHaveAttribute("aria-live","polite"),await t(e.queryByRole("button",{name:/Salvar configurações/})).not.toBeInTheDocument()}},w={name:"Bloco com falha",parameters:{jornada:{...g,falhar:[G]}},play:async({canvasElement:o,step:e})=>{const a=s(o);await e("a aba Agente avisa que não carregou e o bloco fica fora do salvar",async()=>{const n=await r(a,"Agente");await x(()=>t(n.textContent).toContain("não carregou")),await i.click(n),await t(await a.findByText(/O servidor teve um problema ao carregar o comportamento do agente/)).toBeInTheDocument(),await t(a.getByText(/Não será salvo: Agente/)).toBeInTheDocument(),await t(a.getByRole("button",{name:/Tentar de novo/})).toBeInTheDocument(),await y()}),await m()}},v={name:"Sem rede",parameters:{jornada:{...g,semRede:[L]}},play:async({canvasElement:o})=>{const e=s(o);await t(await e.findByText(/Não foi possível carregar as configurações/)).toBeInTheDocument(),await t(e.getByRole("button",{name:/Tentar de novo/})).toBeInTheDocument(),await t(e.queryByRole("button",{name:/Salvar configurações/})).not.toBeInTheDocument(),await m()}},xa=["Padrao","AlteracaoNaoSalva","Super","Carregando","BlocoComFalha","SemRede"];var B,b,R;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
    const texto = await tela.findByText(/Carregando as configurações/);
    await expect(texto.closest('[role="status"]')).toHaveAttribute("aria-live", "polite");
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
}`,...(_=(k=v.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};export{d as AlteracaoNaoSalva,w as BlocoComFalha,p as Carregando,l as Padrao,v as SemRede,u as Super,xa as __namedExportsOrder,va as default};
