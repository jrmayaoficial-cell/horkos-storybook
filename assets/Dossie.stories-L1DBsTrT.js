import{k as H,l as V,m as k,n as L,o as M,q as X,s as G,u as F,v as P}from"./ShellJornada-D6or9w_N.js";import{t as s,m as $}from"./jornadaOperar-qu3lmx3f.js";import"./jsx-runtime-CIMg3zCe.js";import"./iframe-sQhv-dP9.js";import"./preload-helper-D6kgxu3v.js";import"./dadosShell-DVjA70Zd.js";import"./index-Cca0CcRs.js";import"./index-BUBJGiik.js";import"./v2-QXom_1Mi.js";import"./index-C1SKTYOl.js";import"./api-DeTcSHTh.js";import"./index-KxmTJ2KI.js";import"./marca-JJvqtdKG.js";import"./carregando-Cu9nLz69.js";import"./celulas-DMaLRg05.js";/* empty css              */import"./MiniBarras-D1hOdhnB.js";import"./cores-D-iLqYVd.js";import"./Login-DFawTORA.js";import"./etapas-DD6roYoj.js";/* empty css                */const{expect:a,userEvent:p,waitFor:T}=__STORYBOOK_MODULE_TEST__,E="ses_fic_rev002",j="ses_fic_aba007",u=`GET /v1/sessoes/${E}/detalhe`,U=/[A-Z]{2,}_[A-Z0-9_]+/;function q(){const n=F().find(t=>t.sessao_id===E);if(!n)throw new Error(`sessão ${E} fora da fixture`);const e=P(n);return e.sessao.criada_por=null,e.sessao.encerramento="MOTIVO_NOVO_DA_API",e.score_identidade={total:null,indicadores:[],avisos:[]},e.veredito.sinais=[{codigo:"ROSTO_SEM_VIDA",severidade:"alta",descricao:"O rosto não variou entre os frames da sessão."},{codigo:"PALAVRA_NAO_VERIFICADA",severidade:"baixa",descricao:"A repetição da palavra sorteada não pôde ser conferida."},{codigo:"SINAL_QUE_O_PAINEL_NAO_CONHECE",severidade:"media",descricao:"Sinal novo da análise, ainda sem rótulo no painel."}],e}const ue={title:"Jornadas/Dossiê",...$(`/sessoes/${E}`,'Dossiê da sessão dentro do shell, papel admin: veredito, abas (Evidências, Transcrição, Antifraude, Auditoria), sinais de atenção, gravação, conferência visual e a lateral com cliente, contrato e processo. Estados: carregando (esqueleto), erro de rede com [Tentar de novo], sessão não encontrada e os vazios por seção (sem gravação, sem sinais de atenção) e os dados ausentes explicados ("Criada por" sem registro, Score de Identidade sem total, sinal sem rótulo vira "Sinal de atenção" com a descrição; código técnico nunca aparece, só no `title`). A gravação fictícia não tem arquivo de vídeo.',null)},i={name:"Padrão",play:async({canvasElement:n,step:e})=>{const t=s(n);await t.findByRole("heading",{name:"Veredito"}),await a(t.getByRole("region",{name:"Sinais de atenção"})).toBeInTheDocument(),await e("as abas informam a selecionada",async()=>{const o=t.getByRole("tab",{name:/Antifraude/});await p.click(o),await T(()=>a(o).toHaveAttribute("aria-selected","true")),await p.click(t.getByRole("tab",{name:"Evidências"}))}),await e("copiar o link do cliente tem nome acessível",async()=>{const[o]=t.getAllByRole("button",{name:"Copiar o link do cliente"});await p.click(o),await T(()=>a(t.getAllByRole("button",{name:"Link do cliente copiado"}).length).toBeGreaterThan(0))}),await e("os quadros da gravação têm texto alternativo",async()=>{await a(t.getAllByAltText(/^Quadro \d+ da gravação$/).length).toBeGreaterThan(0)})}},r={parameters:{jornada:{cenario:"operar",pendurar:[u]}},play:async({canvasElement:n})=>{const e=s(n);await a(await e.findByText("Carregando o dossiê")).toHaveAttribute("role","status")}},c={name:"Erro (rede)",parameters:{jornada:{cenario:"operar",semRede:[u]}},play:async({canvasElement:n})=>{const e=s(n);await a(await e.findByText(M)).toBeInTheDocument(),await a(e.getByRole("button",{name:"Tentar de novo"})).toBeInTheDocument()}},d={name:"Não encontrada",args:{rotaInicial:"/sessoes/ses_inexistente"},play:async({canvasElement:n})=>{const e=s(n);await a(await e.findByText("Sessão não encontrada")).toBeInTheDocument(),await a(e.getByRole("button",{name:"Voltar para Sessões"})).toBeInTheDocument()}},l={name:"Vazio (sem gravação e sem sinais)",args:{rotaInicial:`/sessoes/${j}`},play:async({canvasElement:n})=>{const e=s(n);await a(await e.findByText(X)).toBeInTheDocument(),await a(e.getByText(G)).toBeInTheDocument()}},m={name:"Dados ausentes e sinais novos",parameters:{jornada:{cenario:"operar",respostas:{[u]:{corpo:q()}}}},play:async({canvasElement:n,step:e})=>{const t=s(n);await t.findByRole("heading",{name:"Veredito"}),await e("'Criada por' sem dado explica a ausência",async()=>{await a(t.getByText(H,{exact:!1})).toBeInTheDocument()}),await e("sinal novo tem rótulo humano e o desconhecido vira 'Sinal de atenção' com a descrição",async()=>{const o=t.getByRole("region",{name:"Sinais de atenção"});await a(o).toHaveTextContent("Rosto sem sinal de vida"),await a(o).toHaveTextContent(V),await a(o).toHaveTextContent("Sinal novo da análise, ainda sem rótulo no painel.")}),await e("Score de Identidade sem total e motivo sem rótulo em texto de gente",async()=>{await p.click(t.getByRole("tab",{name:/Antifraude/})),await a(t.getByRole("region",{name:"Score de Identidade"})).toHaveTextContent(k),await a(t.getAllByText(L).length).toBeGreaterThan(0)}),await e("nenhum código técnico em SNAKE_CASE na tela",async()=>{await a((n.textContent??"").match(U)).toBeNull()})}},Te=["Padrao","Carregando","ErroDeRede","NaoEncontrada","Vazio","DadosAusentes"];var x,A,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(y=(A=i.parameters)==null?void 0:A.docs)==null?void 0:y.source}}};var g,v,w;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(w=(v=r.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var _,B,O;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(O=(B=c.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var S,D,I;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(I=(D=d.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var R,h,C;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(C=(h=l.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var f,N,b;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Dados ausentes e sinais novos",
  parameters: {
    jornada: {
      cenario: "operar",
      respostas: {
        [DETALHE]: {
          corpo: detalheComDadosAusentes()
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await tela.findByRole("heading", {
      name: "Veredito"
    });
    await step("'Criada por' sem dado explica a ausência", async () => {
      await expect(tela.getByText(TEXTO_CRIADA_POR_AUSENTE, {
        exact: false
      })).toBeInTheDocument();
    });
    await step("sinal novo tem rótulo humano e o desconhecido vira 'Sinal de atenção' com a descrição", async () => {
      const sinais = tela.getByRole("region", {
        name: "Sinais de atenção"
      });
      await expect(sinais).toHaveTextContent("Rosto sem sinal de vida");
      await expect(sinais).toHaveTextContent(ROTULO_SINAL_DESCONHECIDO);
      await expect(sinais).toHaveTextContent("Sinal novo da análise, ainda sem rótulo no painel.");
    });
    await step("Score de Identidade sem total e motivo sem rótulo em texto de gente", async () => {
      await userEvent.click(tela.getByRole("tab", {
        name: /Antifraude/
      }));
      await expect(tela.getByRole("region", {
        name: "Score de Identidade"
      })).toHaveTextContent(TEXTO_SEM_SCORE);
      await expect(tela.getAllByText(TEXTO_MOTIVO_NAO_DESCRITO).length).toBeGreaterThan(0);
    });
    await step("nenhum código técnico em SNAKE_CASE na tela", async () => {
      await expect((canvasElement.textContent ?? "").match(CODIGO_TECNICO)).toBeNull();
    });
  }
}`,...(b=(N=m.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};export{r as Carregando,m as DadosAusentes,c as ErroDeRede,d as NaoEncontrada,i as Padrao,l as Vazio,Te as __namedExportsOrder,ue as default};
