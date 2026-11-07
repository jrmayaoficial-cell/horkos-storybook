import{q as Me,s as Ue,u as Pe,v as je,w as Xe,x as h,y as Je,z as $e,B as ze,D as We,E as Qe,F as Ke}from"./ShellJornada-Bkj0Xxti.js";import{t as d,d as R,m as Ze}from"./jornadaOperar-mBuU30eY.js";import"./jsx-runtime-D6nutFwx.js";import"./iframe-BdhfGGq3.js";import"./preload-helper-D6kgxu3v.js";import"./dadosShell-DZF5DUm8.js";import"./index-d_Xefzb7.js";import"./index-tw-FhkDn.js";import"./v2-DJ9t81kF.js";import"./index-QiNlZTMk.js";import"./api-C_qpy-2i.js";import"./index-D5YPr2wh.js";import"./marca-BWEkpmVo.js";import"./carregando-DuBGuGCv.js";import"./celulas-DpVvjcXG.js";/* empty css              */import"./CartaoKpi-Bfp8hLNM.js";import"./MiniBarras-CHfVUMKT.js";import"./cores-D-iLqYVd.js";import"./Login-nUUU2UMU.js";import"./etapas-Bursdox5.js";/* empty css                */const{expect:a,userEvent:c,waitFor:l,within:i}=__STORYBOOK_MODULE_TEST__,_="ses_fic_rev002",Ye="ses_fic_aba007",q=`GET /v1/sessoes/${_}/detalhe`,ea=/[A-Z]{2,}_[A-Z0-9_]+/;function aa(){const o=Qe().find(t=>t.sessao_id===_);if(!o)throw new Error(`sessão ${_} fora da fixture`);const e=Ke(o);return e.sessao.criada_por=null,e.sessao.encerramento="MOTIVO_NOVO_DA_API",e.score_identidade={total:null,indicadores:[],avisos:[]},e.veredito.sinais=[{codigo:"ROSTO_SEM_VIDA",severidade:"alta",descricao:"O rosto não variou entre os frames da sessão."},{codigo:"PALAVRA_NAO_VERIFICADA",severidade:"baixa",descricao:"A repetição da palavra sorteada não pôde ser conferida."},{codigo:"SINAL_QUE_O_PAINEL_NAO_CONHECE",severidade:"media",descricao:"Sinal novo da análise, ainda sem rótulo no painel."}],e}const Aa={title:"Jornadas/Dossiê",...Ze(`/sessoes/${_}`,'Dossiê da sessão dentro do shell, papel admin: veredito, abas (Evidências, Transcrição, Antifraude, Auditoria), sinais de atenção, gravação, conferência visual e a lateral com cliente, contrato e processo. Estados: carregando (esqueleto), erro de rede com [Tentar de novo], sessão não encontrada e os vazios por seção (sem gravação, sem sinais de atenção) e os dados ausentes explicados ("Criada por" sem registro, Score de Identidade sem total, sinal sem rótulo vira "Sinal de atenção" com a descrição; código técnico nunca aparece, só no `title`). A gravação fictícia não tem arquivo de vídeo.',null)},f={name:"Padrão",play:async({canvasElement:o,step:e})=>{const t=d(o);await t.findByRole("heading",{name:"Veredito"}),await a(t.getByRole("region",{name:"Sinais de atenção"})).toBeInTheDocument(),await e("as abas informam a selecionada",async()=>{const n=t.getByRole("tab",{name:/Antifraude/});await c.click(n),await l(()=>a(n).toHaveAttribute("aria-selected","true")),await c.click(t.getByRole("tab",{name:"Evidências"}))}),await e("copiar o link do cliente tem nome acessível",async()=>{const[n]=t.getAllByRole("button",{name:"Copiar o link do cliente"});await c.click(n),await l(()=>a(t.getAllByRole("button",{name:"Link do cliente copiado"}).length).toBeGreaterThan(0))}),await e("os quadros da gravação têm texto alternativo",async()=>{await a(t.getAllByAltText(/^Quadro \d+ da gravação$/).length).toBeGreaterThan(0)})}},ta=1100,oa=44;function r(o){if(!o)throw new Error("elemento da disposição não encontrado");return o.getBoundingClientRect()}const x={name:"Disposição",play:async({canvasElement:o,step:e})=>{const n=await d(o).findByRole("region",{name:"Veredito"});await i(n).findByRole("button",{name:/Recusar/});const m=o.ownerDocument.defaultView,s=n.closest(".dossie-primeira-linha"),p=s==null?void 0:s.querySelector(".dossie-primeira-linha-lateral"),V=n.querySelector(".dossie-veredito-score"),k=n.querySelector(".dossie-veredito-texto"),N=n.querySelector(".dossie-revisao-acoes"),H=n.querySelector(".dossie-revisao-botoes"),He=i(H).getByText("Revisão do analista:"),b=i(H).getAllByRole("button");m.innerWidth>ta?(await e("primeira linha lado a lado: Veredito com ~60% da linha e a coluna à direita",async()=>{const u=r(n).width/r(s).width;await a(u).toBeGreaterThan(.56),await a(u).toBeLessThan(.62),await a(r(p).left).toBeGreaterThanOrEqual(r(n).right),await a(Math.abs(r(p).top-r(n).top)).toBeLessThanOrEqual(1)}),await e("anel à esquerda do texto do Veredito",async()=>{await a(r(V).right).toBeLessThanOrEqual(r(k).left)}),await e('"Revisão do analista:" e os botões alinhados à direita do card',async()=>{const u=r(b[b.length-1]);await a(Math.abs(r(N).right-u.right)).toBeLessThanOrEqual(2),await a(r(He).left).toBeGreaterThan(r(N).left+8);for(const Fe of b)await a(Math.abs(r(Fe).top-u.top)).toBeLessThanOrEqual(2)})):(await e("tudo empilhado: Veredito, depois a coluna; anel acima do texto",async()=>{await a(r(p).top).toBeGreaterThanOrEqual(r(n).bottom),await a(r(V).bottom).toBeLessThanOrEqual(r(k).top)}),await e("botões do rodapé com alvo de toque de 44 px",async()=>{for(const u of b)await a(r(u).height).toBeGreaterThanOrEqual(oa)}))}},A={parameters:{jornada:{cenario:"operar",pendurar:[q]}},play:async({canvasElement:o})=>{const e=d(o);await a(await e.findByText("Carregando o dossiê")).toHaveAttribute("role","status")}},O={name:"Erro (rede)",parameters:{jornada:{cenario:"operar",semRede:[q]}},play:async({canvasElement:o})=>{const e=d(o);await a(await e.findByText(Xe)).toBeInTheDocument(),await a(e.getByRole("button",{name:"Tentar de novo"})).toBeInTheDocument()}},I={name:"Não encontrada",args:{rotaInicial:"/sessoes/ses_inexistente"},play:async({canvasElement:o})=>{const e=d(o);await a(await e.findByText("Sessão não encontrada")).toBeInTheDocument(),await a(e.getByRole("button",{name:"Voltar para Sessões"})).toBeInTheDocument()}},S={name:"Vazio (sem gravação e sem sinais)",args:{rotaInicial:`/sessoes/${Ye}`},play:async({canvasElement:o})=>{const e=d(o);await a(await e.findByText(ze)).toBeInTheDocument(),await a(e.getByText(We)).toBeInTheDocument()}},C={name:"Dados ausentes e sinais novos",parameters:{jornada:{cenario:"operar",respostas:{[q]:{corpo:aa()}}}},play:async({canvasElement:o,step:e})=>{const t=d(o);await t.findByRole("heading",{name:"Veredito"}),await e("'Criada por' sem dado explica a ausência",async()=>{await a(t.getByText(Me,{exact:!1})).toBeInTheDocument()}),await e("sinal novo tem rótulo humano e o desconhecido vira 'Sinal de atenção' com a descrição",async()=>{const n=t.getByRole("region",{name:"Sinais de atenção"});await a(n).toHaveTextContent("Rosto sem sinal de vida"),await a(n).toHaveTextContent(Ue),await a(n).toHaveTextContent("Sinal novo da análise, ainda sem rótulo no painel.")}),await e("Score de Identidade sem total e motivo sem rótulo em texto de gente",async()=>{await c.click(t.getByRole("tab",{name:/Antifraude/})),await a(t.getByRole("region",{name:"Score de Identidade"})).toHaveTextContent(Pe),await a(t.getAllByText(je).length).toBeGreaterThan(0)}),await e("nenhum código técnico em SNAKE_CASE na tela",async()=>{await a((o.textContent??"").match(ea)).toBeNull()})}},G="POST /v1/sessoes/:id/revisao",D="Recusar sessão";async function w(o){const e=await o.findByRole("region",{name:"Veredito"}),t=await i(e).findByRole("button",{name:/Recusar/});await c.click(t);const n=await o.findByRole("dialog",{name:D});return{veredito:e,abridor:t,gaveta:n}}async function L(o){const e=o.ownerDocument.defaultView;await l(()=>{const t=o.getBoundingClientRect();e.innerWidth>640?(a(t.width).toBeLessThanOrEqual(560),a(Math.abs(e.innerWidth-t.right)).toBeLessThanOrEqual(8),a(t.height).toBeGreaterThanOrEqual(e.innerHeight-16)):(a(Math.abs(t.bottom-e.innerHeight)).toBeLessThanOrEqual(1),a(t.height).toBeLessThanOrEqual(.92*e.innerHeight+.5)),a(o.scrollWidth).toBeLessThanOrEqual(o.clientWidth)})}async function na(o){for(const e of["Confirmar","Cancelar"])await a(i(o).getByRole("button",{name:e}).getBoundingClientRect().height).toBeGreaterThanOrEqual(44)}const E={name:"Gaveta de decisão",play:async({canvasElement:o,step:e})=>{const t=d(o),{veredito:n,gaveta:m}=await w(t);await e("o card não expande: sem campo nem formulário dentro do Veredito",async()=>{await a(n.contains(m)).toBe(!1),await a(i(n).queryByRole("textbox")).toBeNull(),await a(i(n).getByRole("button",{name:/Aprovar com ressalva/})).toBeInTheDocument()}),await e("resumo no topo (nome, PROP, score, veredito), campo e os botões",async()=>{const s=i(m);await a(s.getByText("Bruno Assis Nogueira")).toBeInTheDocument(),await a(s.getByText("PROP-2026-00477")).toBeInTheDocument(),await a(s.getByText(/^score \d+$/)).toBeInTheDocument(),await a(s.getByText(/veredito: REVISAR/)).toBeInTheDocument(),await a(s.getByRole("textbox",{name:/Observação/})).toBeInTheDocument(),await a(s.getByRole("button",{name:"Confirmar"})).toBeDisabled(),await a(s.getByRole("button",{name:"Cancelar"})).toBeEnabled(),await na(m)}),await e("geometria: gaveta à direita até 560 px a partir de 641 px; folha inferior de 92dvh até 640 px",async()=>{await L(m)})}},v={name:"Gaveta: decidir",play:async({canvasElement:o})=>{const e=d(o),{veredito:t,gaveta:n}=await w(e);await R(i(n).getByRole("textbox",{name:/Observação/}),"Cliente não confirmou a parcela."),await c.click(i(n).getByRole("button",{name:"Confirmar"})),await l(()=>a(e.queryByRole("dialog",{name:D})).not.toBeInTheDocument()),await a(await i(t).findByText(/RECUSADA/)).toBeInTheDocument(),await l(()=>a(o.ownerDocument.activeElement).toBe(t.querySelector(".dossie-revisao")))}},g={name:"Gaveta: sair com observação",play:async({canvasElement:o,step:e})=>{const t=d(o),{abridor:n,gaveta:m}=await w(t),s=i(m).getByRole("textbox",{name:/Observação/});await R(s,"abc"),await e("Esc pede confirmação; Continuar editando mantém o texto",async()=>{await c.keyboard("{Escape}");const p=i(await t.findByRole("dialog",{name:h}));await c.click(p.getByRole("button",{name:"Continuar editando"})),await l(()=>a(t.queryByRole("dialog",{name:h})).not.toBeInTheDocument()),await a(s).toHaveValue("abc")}),await e("X pede confirmação; Descartar fecha a gaveta e o foco volta ao botão",async()=>{await c.click(i(m).getByRole("button",{name:"Fechar"}));const p=i(await t.findByRole("dialog",{name:h}));await c.click(p.getByRole("button",{name:"Descartar"})),await l(()=>a(t.queryByRole("dialog",{name:D})).not.toBeInTheDocument()),await l(()=>a(o.ownerDocument.activeElement).toBe(n))})}},y={name:"Gaveta: erro ao decidir",parameters:{jornada:{cenario:"operar",semRede:[G]}},play:async({canvasElement:o})=>{const e=d(o),{gaveta:t}=await w(e),n=i(t).getByRole("textbox",{name:/Observação/});await R(n,"Terceiro respondeu no lugar do cliente."),await c.click(i(t).getByRole("button",{name:"Confirmar"})),await i(t).findByText(Je),await a(n).toHaveValue("Terceiro respondeu no lugar do cliente."),await a(i(t).getByRole("button",{name:"Confirmar"})).toBeEnabled(),await L(t)}},B={name:"Gaveta: decidindo",parameters:{jornada:{cenario:"operar",pendurar:[G]}},play:async({canvasElement:o})=>{const e=d(o),{gaveta:t}=await w(e);await R(i(t).getByRole("textbox",{name:/Observação/}),"Dúvida sobre o banco esclarecida."),await c.click(i(t).getByRole("button",{name:"Confirmar"})),await l(()=>a(i(t).getByRole("button",{name:/Confirmar/})).toBeDisabled()),await a(i(t).getByRole("button",{name:"Cancelar"})).toBeDisabled(),await c.keyboard("{Escape}"),await new Promise(n=>setTimeout(n,50)),await a(e.getByRole("dialog",{name:D})).toBeInTheDocument(),await a(e.queryByRole("dialog",{name:h})).not.toBeInTheDocument()}},T={name:"Gaveta: já decidida por outra pessoa",parameters:{jornada:{cenario:"operar",respostas:{[G]:{status:409,corpo:{erro:"sessão já revisada por Marina Couto",codigo:"JA_REVISADA"}}}}},play:async({canvasElement:o})=>{const e=d(o),{gaveta:t}=await w(e);await R(i(t).getByRole("textbox",{name:/Observação/}),"Terceiro respondeu no lugar do cliente."),await c.click(i(t).getByRole("button",{name:"Confirmar"})),await i(t).findByText($e),await a(i(t).getByRole("button",{name:"Confirmar"})).toBeDisabled(),await L(t),await c.keyboard("{Escape}"),await l(()=>a(e.queryByRole("dialog",{name:D})).not.toBeInTheDocument()),await a(e.queryByRole("dialog",{name:h})).not.toBeInTheDocument()}},Oa=["Padrao","Disposicao","Carregando","ErroDeRede","NaoEncontrada","Vazio","DadosAusentes","GavetaDecisaoDossie","GavetaDossieDecidir","GavetaDossieSairComObservacao","GavetaDossieErro","GavetaDossieDecidindo","GavetaDossieJaDecidida"];var F,M,U;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(U=(M=f.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var P,j,X,J,$;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Disposição",
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    const veredito = await tela.findByRole("region", {
      name: "Veredito"
    });
    await within(veredito).findByRole("button", {
      name: /Recusar/
    });
    const janela = canvasElement.ownerDocument.defaultView!;
    const linha = veredito.closest(".dossie-primeira-linha");
    const lateral = linha?.querySelector(".dossie-primeira-linha-lateral");
    const anel = veredito.querySelector(".dossie-veredito-score");
    const texto = veredito.querySelector(".dossie-veredito-texto");
    const faixa = veredito.querySelector(".dossie-revisao-acoes");
    const grupo = veredito.querySelector(".dossie-revisao-botoes");
    const rotulo = within(grupo as HTMLElement).getByText("Revisão do analista:");
    const botoes = within(grupo as HTMLElement).getAllByRole("button");
    if (janela.innerWidth > LARGURA_EMPILHADA) {
      await step("primeira linha lado a lado: Veredito com ~60% da linha e a coluna à direita", async () => {
        const proporcao = caixa(veredito).width / caixa(linha).width;
        await expect(proporcao).toBeGreaterThan(0.56);
        await expect(proporcao).toBeLessThan(0.62);
        await expect(caixa(lateral).left).toBeGreaterThanOrEqual(caixa(veredito).right);
        await expect(Math.abs(caixa(lateral).top - caixa(veredito).top)).toBeLessThanOrEqual(1);
      });
      await step("anel à esquerda do texto do Veredito", async () => {
        await expect(caixa(anel).right).toBeLessThanOrEqual(caixa(texto).left);
      });
      await step("\\"Revisão do analista:\\" e os botões alinhados à direita do card", async () => {
        const ultimo = caixa(botoes[botoes.length - 1]);
        await expect(Math.abs(caixa(faixa).right - ultimo.right)).toBeLessThanOrEqual(2);
        await expect(caixa(rotulo).left).toBeGreaterThan(caixa(faixa).left + 8);
        for (const botao of botoes) await expect(Math.abs(caixa(botao).top - ultimo.top)).toBeLessThanOrEqual(2);
      });
    } else {
      await step("tudo empilhado: Veredito, depois a coluna; anel acima do texto", async () => {
        await expect(caixa(lateral).top).toBeGreaterThanOrEqual(caixa(veredito).bottom);
        await expect(caixa(anel).bottom).toBeLessThanOrEqual(caixa(texto).top);
      });
      await step("botões do rodapé com alvo de toque de 44 px", async () => {
        for (const botao of botoes) await expect(caixa(botao).height).toBeGreaterThanOrEqual(ALVO_TOQUE);
      });
    }
  }
}`,...(X=(j=x.parameters)==null?void 0:j.docs)==null?void 0:X.source},description:{story:`Disposição do Dossiê: a partir de 1101 px, Veredito (~60%) e a coluna de
Sinais/Confiança lado a lado, anel à esquerda do texto e o grupo "Revisão do
analista:" + botões alinhado à direita do card; até 1100 px tudo empilhado e
os botões do rodapé com alvo de toque de 44 px.`,...($=(J=x.parameters)==null?void 0:J.docs)==null?void 0:$.description}}};var z,W,Q;A.parameters={...A.parameters,docs:{...(z=A.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(Q=(W=A.parameters)==null?void 0:W.docs)==null?void 0:Q.source}}};var K,Z,Y;O.parameters={...O.parameters,docs:{...(K=O.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Y=(Z=O.parameters)==null?void 0:Z.docs)==null?void 0:Y.source}}};var ee,ae,te;I.parameters={...I.parameters,docs:{...(ee=I.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(ae=I.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var oe,ne,ie;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ie=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var re,se,ce;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ce=(se=C.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var de,le,me,pe,ue;E.parameters={...E.parameters,docs:{...(de=E.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: "Gaveta de decisão",
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    const {
      veredito,
      gaveta
    } = await abrirRecusar(tela);
    await step("o card não expande: sem campo nem formulário dentro do Veredito", async () => {
      await expect(veredito.contains(gaveta)).toBe(false);
      await expect(within(veredito).queryByRole("textbox")).toBeNull();
      await expect(within(veredito).getByRole("button", {
        name: /Aprovar com ressalva/
      })).toBeInTheDocument();
    });
    await step("resumo no topo (nome, PROP, score, veredito), campo e os botões", async () => {
      const g = within(gaveta);
      await expect(g.getByText("Bruno Assis Nogueira")).toBeInTheDocument();
      await expect(g.getByText("PROP-2026-00477")).toBeInTheDocument();
      await expect(g.getByText(/^score \\d+$/)).toBeInTheDocument();
      await expect(g.getByText(/veredito: REVISAR/)).toBeInTheDocument();
      await expect(g.getByRole("textbox", {
        name: /Observação/
      })).toBeInTheDocument();
      await expect(g.getByRole("button", {
        name: "Confirmar"
      })).toBeDisabled();
      await expect(g.getByRole("button", {
        name: "Cancelar"
      })).toBeEnabled();
      await conferirAlvos(gaveta);
    });
    await step("geometria: gaveta à direita até 560 px a partir de 641 px; folha inferior de 92dvh até 640 px", async () => {
      await conferirGeometria(gaveta);
    });
  }
}`,...(me=(le=E.parameters)==null?void 0:le.docs)==null?void 0:me.source},description:{story:`Referência visual da gaveta do Dossiê: ✕ Recusar abre "Recusar sessão" fora
do card, com o resumo do caso no topo, a observação, Confirmar e Cancelar.`,...(ue=(pe=E.parameters)==null?void 0:pe.docs)==null?void 0:ue.description}}};var we,xe,Ee,ve,ge;v.parameters={...v.parameters,docs:{...(we=v.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: "Gaveta: decidir",
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    const {
      veredito,
      gaveta
    } = await abrirRecusar(tela);
    await digitar(within(gaveta).getByRole("textbox", {
      name: /Observação/
    }), "Cliente não confirmou a parcela.");
    await userEvent.click(within(gaveta).getByRole("button", {
      name: "Confirmar"
    }));
    await waitFor(() => expect(tela.queryByRole("dialog", {
      name: RECUSAR
    })).not.toBeInTheDocument());
    await expect(await within(veredito).findByText(/RECUSADA/)).toBeInTheDocument();
    await waitFor(() => expect(canvasElement.ownerDocument.activeElement).toBe(veredito.querySelector(".dossie-revisao")));
  }
}`,...(Ee=(xe=v.parameters)==null?void 0:xe.docs)==null?void 0:Ee.source},description:{story:`Decidir na gaveta: ela fecha, o status do Veredito vira a decisão e o foco
vai para o status.`,...(ge=(ve=v.parameters)==null?void 0:ve.docs)==null?void 0:ge.description}}};var ye,Be,Te,he,Re;g.parameters={...g.parameters,docs:{...(ye=g.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  name: "Gaveta: sair com observação",
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    const {
      abridor,
      gaveta
    } = await abrirRecusar(tela);
    const campo = within(gaveta).getByRole("textbox", {
      name: /Observação/
    });
    await digitar(campo, "abc");
    await step("Esc pede confirmação; Continuar editando mantém o texto", async () => {
      await userEvent.keyboard("{Escape}");
      const confirmacao = within(await tela.findByRole("dialog", {
        name: TITULO_DESCARTAR
      }));
      await userEvent.click(confirmacao.getByRole("button", {
        name: "Continuar editando"
      }));
      await waitFor(() => expect(tela.queryByRole("dialog", {
        name: TITULO_DESCARTAR
      })).not.toBeInTheDocument());
      await expect(campo).toHaveValue("abc");
    });
    await step("X pede confirmação; Descartar fecha a gaveta e o foco volta ao botão", async () => {
      await userEvent.click(within(gaveta).getByRole("button", {
        name: "Fechar"
      }));
      const confirmacao = within(await tela.findByRole("dialog", {
        name: TITULO_DESCARTAR
      }));
      await userEvent.click(confirmacao.getByRole("button", {
        name: "Descartar"
      }));
      await waitFor(() => expect(tela.queryByRole("dialog", {
        name: RECUSAR
      })).not.toBeInTheDocument());
      await waitFor(() => expect(canvasElement.ownerDocument.activeElement).toBe(abridor));
    });
  }
}`,...(Te=(Be=g.parameters)==null?void 0:Be.docs)==null?void 0:Te.source},description:{story:`Sair com a observação digitada pede confirmação (Esc ou X); Descartar fecha
e o foco volta ao ✕ Recusar.`,...(Re=(he=g.parameters)==null?void 0:he.docs)==null?void 0:Re.description}}};var De,be,fe,Ae,Oe;y.parameters={...y.parameters,docs:{...(De=y.parameters)==null?void 0:De.docs,source:{originalSource:`{
  name: "Gaveta: erro ao decidir",
  parameters: {
    jornada: {
      cenario: "operar",
      semRede: [DECIDIR]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    const {
      gaveta
    } = await abrirRecusar(tela);
    const campo = within(gaveta).getByRole("textbox", {
      name: /Observação/
    });
    await digitar(campo, "Terceiro respondeu no lugar do cliente.");
    await userEvent.click(within(gaveta).getByRole("button", {
      name: "Confirmar"
    }));
    await within(gaveta).findByText(TEXTO_ERRO_REVISAO);
    await expect(campo).toHaveValue("Terceiro respondeu no lugar do cliente.");
    await expect(within(gaveta).getByRole("button", {
      name: "Confirmar"
    })).toBeEnabled();
    await conferirGeometria(gaveta);
  }
}`,...(fe=(be=y.parameters)==null?void 0:be.docs)==null?void 0:fe.source},description:{story:"Estado de erro: a falha da API fica na gaveta, com o texto e Confirmar de volta.",...(Oe=(Ae=y.parameters)==null?void 0:Ae.docs)==null?void 0:Oe.description}}};var Ie,Se,Ce,_e,qe;B.parameters={...B.parameters,docs:{...(Ie=B.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  name: "Gaveta: decidindo",
  parameters: {
    jornada: {
      cenario: "operar",
      pendurar: [DECIDIR]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    const {
      gaveta
    } = await abrirRecusar(tela);
    await digitar(within(gaveta).getByRole("textbox", {
      name: /Observação/
    }), "Dúvida sobre o banco esclarecida.");
    await userEvent.click(within(gaveta).getByRole("button", {
      name: "Confirmar"
    }));
    await waitFor(() => expect(within(gaveta).getByRole("button", {
      name: /Confirmar/
    })).toBeDisabled());
    await expect(within(gaveta).getByRole("button", {
      name: "Cancelar"
    })).toBeDisabled();
    await userEvent.keyboard("{Escape}");
    await new Promise(r => setTimeout(r, 50));
    await expect(tela.getByRole("dialog", {
      name: RECUSAR
    })).toBeInTheDocument();
    await expect(tela.queryByRole("dialog", {
      name: TITULO_DESCARTAR
    })).not.toBeInTheDocument();
  }
}`,...(Ce=(Se=B.parameters)==null?void 0:Se.docs)==null?void 0:Ce.source},description:{story:`Estado carregando: com a decisão sendo enviada, os botões ficam travados e
Esc não fecha a gaveta.`,...(qe=(_e=B.parameters)==null?void 0:_e.docs)==null?void 0:qe.description}}};var Ge,Le,Ve,ke,Ne;T.parameters={...T.parameters,docs:{...(Ge=T.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  name: "Gaveta: já decidida por outra pessoa",
  parameters: {
    jornada: {
      cenario: "operar",
      respostas: {
        [DECIDIR]: {
          status: 409,
          corpo: {
            erro: "sessão já revisada por Marina Couto",
            codigo: "JA_REVISADA"
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    const {
      gaveta
    } = await abrirRecusar(tela);
    await digitar(within(gaveta).getByRole("textbox", {
      name: /Observação/
    }), "Terceiro respondeu no lugar do cliente.");
    await userEvent.click(within(gaveta).getByRole("button", {
      name: "Confirmar"
    }));
    await within(gaveta).findByText(TITULO_JA_DECIDIDA);
    await expect(within(gaveta).getByRole("button", {
      name: "Confirmar"
    })).toBeDisabled();
    await conferirGeometria(gaveta);
    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(tela.queryByRole("dialog", {
      name: RECUSAR
    })).not.toBeInTheDocument());
    await expect(tela.queryByRole("dialog", {
      name: TITULO_DESCARTAR
    })).not.toBeInTheDocument();
  }
}`,...(Ve=(Le=T.parameters)==null?void 0:Le.docs)==null?void 0:Ve.source},description:{story:`409 do POST /revisao: outra pessoa já decidiu. A gaveta avisa, trava os
botões e Esc fecha sem pedir para descartar.`,...(Ne=(ke=T.parameters)==null?void 0:ke.docs)==null?void 0:Ne.description}}};export{A as Carregando,C as DadosAusentes,x as Disposicao,O as ErroDeRede,E as GavetaDecisaoDossie,B as GavetaDossieDecidindo,v as GavetaDossieDecidir,y as GavetaDossieErro,T as GavetaDossieJaDecidida,g as GavetaDossieSairComObservacao,I as NaoEncontrada,f as Padrao,S as Vazio,Oa as __namedExportsOrder,Aa as default};
