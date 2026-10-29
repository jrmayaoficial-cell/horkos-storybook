import{h as O,i as b,j as k}from"./ShellJornada-Bk_yMwyO.js";import{t as o,m as N}from"./jornadaOperar-bAw7m3v_.js";import"./jsx-runtime-CnGeCed7.js";import"./iframe-TWammDK-.js";import"./preload-helper-D6kgxu3v.js";import"./dadosShell-Bl7FkIX8.js";import"./index-Be4RGSV8.js";import"./index-BG6Z0xWT.js";import"./v2-DPlIulHz.js";import"./index-Coq9CpY8.js";import"./api-CwdEbqb0.js";import"./index-DxMpz5Et.js";import"./marca-Bxw3C_az.js";import"./carregando-Cecq3Orn.js";import"./celulas-CN9Gpmx2.js";/* empty css              */import"./MiniBarras-Btaw0BA0.js";import"./paleta-CAXSK6uJ.js";import"./Login-qkThBxEk.js";/* empty css                */const{expect:a,userEvent:d,waitFor:p}=__STORYBOOK_MODULE_TEST__,_="ses_fic_rev002",V="ses_fic_aba007",I=`GET /v1/sessoes/${_}/detalhe`,ae={title:"Jornadas/Dossiê",...N(`/sessoes/${_}`,"Dossiê da sessão dentro do shell, papel admin: veredito, abas (Evidências, Transcrição, Antifraude, Auditoria), sinais de atenção, gravação, conferência visual e a lateral com cliente, contrato e processo. Estados: carregando (esqueleto), erro de rede com [Tentar de novo], sessão não encontrada e os vazios por seção (sem gravação, sem sinais de atenção). A gravação fictícia não tem arquivo de vídeo.",null)},s={name:"Padrão",play:async({canvasElement:t,step:e})=>{const n=o(t);await n.findByRole("heading",{name:"Veredito"}),await a(n.getByRole("region",{name:"Sinais de atenção"})).toBeInTheDocument(),await e("as abas informam a selecionada",async()=>{const r=n.getByRole("tab",{name:/Antifraude/});await d.click(r),await p(()=>a(r).toHaveAttribute("aria-selected","true")),await d.click(n.getByRole("tab",{name:"Evidências"}))}),await e("copiar o link do cliente tem nome acessível",async()=>{const[r]=n.getAllByRole("button",{name:"Copiar o link do cliente"});await d.click(r),await p(()=>a(n.getAllByRole("button",{name:"Link do cliente copiado"}).length).toBeGreaterThan(0))}),await e("os quadros da gravação têm texto alternativo",async()=>{await a(n.getAllByAltText(/^Quadro \d+ da gravação$/).length).toBeGreaterThan(0)})}},i={parameters:{jornada:{cenario:"operar",pendurar:[I]}},play:async({canvasElement:t})=>{const e=o(t);await a(await e.findByText("Carregando o dossiê")).toHaveAttribute("role","status")}},c={name:"Erro (rede)",parameters:{jornada:{cenario:"operar",semRede:[I]}},play:async({canvasElement:t})=>{const e=o(t);await a(await e.findByText(O)).toBeInTheDocument(),await a(e.getByRole("button",{name:"Tentar de novo"})).toBeInTheDocument()}},l={name:"Não encontrada",args:{rotaInicial:"/sessoes/ses_inexistente"},play:async({canvasElement:t})=>{const e=o(t);await a(await e.findByText("Sessão não encontrada")).toBeInTheDocument(),await a(e.getByRole("button",{name:"Voltar para Sessões"})).toBeInTheDocument()}},m={name:"Vazio (sem gravação e sem sinais)",args:{rotaInicial:`/sessoes/${V}`},play:async({canvasElement:t})=>{const e=o(t);await a(await e.findByText(b)).toBeInTheDocument(),await a(e.getByText(k)).toBeInTheDocument()}},te=["Padrao","Carregando","ErroDeRede","NaoEncontrada","Vazio"];var u,E,y;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Padrão",
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await tela.findByRole("heading", {
      name: "Veredito"
    });
    await expect(tela.getByRole("region", {
      name: "Sinais de atenção"
    })).toBeInTheDocument();
    await step("as abas informam a selecionada", async () => {
      const antifraude = tela.getByRole("tab", {
        name: /Antifraude/
      });
      await userEvent.click(antifraude);
      await waitFor(() => expect(antifraude).toHaveAttribute("aria-selected", "true"));
      await userEvent.click(tela.getByRole("tab", {
        name: "Evidências"
      }));
    });
    await step("copiar o link do cliente tem nome acessível", async () => {
      const [copiar] = tela.getAllByRole("button", {
        name: "Copiar o link do cliente"
      });
      await userEvent.click(copiar);
      await waitFor(() => expect(tela.getAllByRole("button", {
        name: "Link do cliente copiado"
      }).length).toBeGreaterThan(0));
    });
    await step("os quadros da gravação têm texto alternativo", async () => {
      await expect(tela.getAllByAltText(/^Quadro \\d+ da gravação$/).length).toBeGreaterThan(0);
    });
  }
}`,...(y=(E=s.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};var T,g,B;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    jornada: {
      cenario: "operar",
      pendurar: [DETALHE]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Carregando o dossiê")).toHaveAttribute("role", "status");
  }
}`,...(B=(g=i.parameters)==null?void 0:g.docs)==null?void 0:B.source}}};var w,x,v;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Erro (rede)",
  parameters: {
    jornada: {
      cenario: "operar",
      semRede: [DETALHE]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(TEXTO_ERRO_DOSSIE)).toBeInTheDocument();
    await expect(tela.getByRole("button", {
      name: "Tentar de novo"
    })).toBeInTheDocument();
  }
}`,...(v=(x=c.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var A,D,f;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Não encontrada",
  args: {
    rotaInicial: "/sessoes/ses_inexistente"
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Sessão não encontrada")).toBeInTheDocument();
    await expect(tela.getByRole("button", {
      name: "Voltar para Sessões"
    })).toBeInTheDocument();
  }
}`,...(f=(D=l.parameters)==null?void 0:D.docs)==null?void 0:f.source}}};var h,R,S;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Vazio (sem gravação e sem sinais)",
  args: {
    rotaInicial: \`/sessoes/\${ABANDONADA}\`
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(TEXTO_SEM_GRAVACAO)).toBeInTheDocument();
    await expect(tela.getByText(TEXTO_SEM_SINAIS)).toBeInTheDocument();
  }
}`,...(S=(R=m.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};export{i as Carregando,c as ErroDeRede,l as NaoEncontrada,s as Padrao,m as Vazio,te as __namedExportsOrder,ae as default};
