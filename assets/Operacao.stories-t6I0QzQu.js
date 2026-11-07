import{t as m,d as p,s as d,i as F,m as Fa}from"./jornadaOperar-s38zFs67.js";import"./ShellJornada-ByPwEQxC.js";import"./jsx-runtime-C-NnYQQj.js";import"./iframe-DEC6x2_9.js";import"./preload-helper-D6kgxu3v.js";import"./dadosShell-D7euqUo-.js";import"./index-Dz2FqD8L.js";import"./index-CmHu5Euv.js";import"./v2-CFLOXcvu.js";import"./index-CnB9h5a6.js";import"./api-C_qpy-2i.js";import"./index-DJSstCC2.js";import"./marca-BWkAzl1y.js";import"./carregando-CNp4uhvU.js";import"./celulas-DiU8SfVX.js";/* empty css              */import"./CartaoKpi-BS2LlUJ9.js";import"./MiniBarras-DTviKg-v.js";import"./cores-D-iLqYVd.js";import"./Login-xO3uyH8U.js";import"./etapas-CLsHaCEc.js";/* empty css                */const{expect:o,userEvent:r,waitFor:s,within:l}=__STORYBOOK_MODULE_TEST__,oe={title:"Jornadas/Operação",...Fa("/operacao","Jornada da Operação (fila de revisão) dentro do shell, papel admin: casos aguardando revisão de IA e de humano com sinais, SLA e posse; aprovar com ressalva, recusar e reencaminhar tiram o caso da fila, e o Painel de controle (pelo menu) mostra o mesmo total.")};async function y(t,e){const i=(await t.findByText(e)).closest("tr, .hk-lista-card");if(!i)throw new Error(`linha de ${e} não encontrada`);return i}async function w(t,e){return l(await t.findByRole("dialog",{name:`Decidir: ${e}`}))}const C=t=>new RegExp(`^(Decidir caso de )?${t}$`);async function u(t,e){await r.click(l(await y(t,e)).getByRole("button",{name:C(e)}))}const f=t=>t.queryByRole("dialog",{name:/^Decidir:/});async function P(t,e){const a=t.queryByRole("button",{name:/^Filtros/});if(!a)return r.click(t.getByRole("button",{name:e}));await r.click(a);const i=l(await t.findByRole("dialog",{name:"Filtros"}));await r.click(i.getByRole("button",{name:e})),await r.click(i.getByRole("button",{name:"Ver resultados"}))}function Ca(t){return[...t.querySelectorAll(".op-cliente-nome")].map(e=>e.textContent??"")}async function ka(t,e,a){const i=e.indexOf(a),n=e[i+1]??e[i-1],c=m(t),x=l(await y(c,n)).getByRole("button",{name:C(n)});await s(()=>o(t.ownerDocument.activeElement).toBe(x)),await o(f(c)).not.toBeInTheDocument(),await o(t.querySelector("[data-op-anuncio]")).toHaveTextContent(`Caso de ${a} decidido.`)}async function Sa(t,e,a,i){await u(t,e);const n=await w(t,e);await p(await n.findByRole("textbox"),i),await r.click(n.getByRole("button",{name:a})),await s(()=>o(t.queryByText(e)).not.toBeInTheDocument())}const T={name:"Padrão",play:async({canvasElement:t,step:e})=>{const a=m(t);await e("os 3 KPIs mostram os números do seed e IA + Humano soma Todas",async()=>{const i=l(t.querySelector(".op-kpis"));await s(()=>o(t.querySelector(".op-kpis")).toHaveTextContent(/Na fila\s*6\s*aguardando revisão/)),await o(i.getByText("Fora do SLA").closest(".op-kpi")).toHaveTextContent(/Fora do SLA\s*2/),await o(i.getByText("Mais antiga").closest(".op-kpi")).toHaveTextContent(/Mais antiga\s*9h20/);const n=async x=>{var S;return Number((S=(await a.findByRole("button",{name:x,hidden:!0})).textContent)==null?void 0:S.replace(/\D/g,""))},c=a.queryByRole("button",{name:/^Filtros/});c&&await r.click(c),await s(async()=>o(await n(/^Todas \d/)).toBe(6)),await o(await n(/^IA \d/)+await n(/^Humano \d/)).toBe(await n(/^Todas \d/)),c&&await r.click(a.getByRole("button",{name:"Ver resultados"}))}),await e("a ordem inicial é Esperando ↓",async()=>{await a.findByText("Gilberto Paes Andrade"),t.querySelector("table")&&await o(t.querySelector("th[aria-sort=descending]")).toHaveTextContent(/Esperando/)}),await e("a fila mostra os 6 casos, com sinais e os acima do SLA destacados",async()=>{await a.findByText("Gilberto Paes Andrade");for(const i of["Helena Duarte Campos","Bruno Assis Nogueira","Lúcia Fernandes Rego","Otávio Ramos Peixoto","Vera Lúcia Mattos"])await o(a.getByText(i)).toBeInTheDocument();await o(l(await y(a,"Bruno Assis Nogueira")).getByText(/fora do SLA/)).toBeInTheDocument(),await o(l(await y(a,"Helena Duarte Campos")).queryByText(/fora do SLA/)).not.toBeInTheDocument()}),await e("busca e canal filtram; limpar devolve todos",async()=>{await p(a.getByPlaceholderText("Buscar por nome ou referência"),"Otávio"),await s(()=>o(a.queryByText("Gilberto Paes Andrade")).not.toBeInTheDocument()),await o(a.getByText("Otávio Ramos Peixoto")).toBeInTheDocument(),await r.click(a.getByRole("button",{name:/^Limpar \(/})),await a.findByText("Gilberto Paes Andrade"),await P(a,/^Humano/),await s(()=>o(a.queryByText("Vera Lúcia Mattos")).not.toBeInTheDocument()),await o(a.getByText("Gilberto Paes Andrade")).toBeInTheDocument(),await P(a,/^Todas/),await a.findByText("Vera Lúcia Mattos")}),await e("aprovar sem observação pede justificativa; com observação o caso sai da fila",async()=>{await u(a,"Otávio Ramos Peixoto");const i=await w(a,"Otávio Ramos Peixoto");await r.click(await i.findByRole("button",{name:"Aprovar com ressalva"})),await i.findByText(/observação é obrigatória/),await p(i.getByRole("textbox"),"Dúvida sobre o banco esclarecida na gravação.");const n=Ca(t);await r.click(i.getByRole("button",{name:"Aprovar com ressalva"})),await s(()=>o(a.queryByText("Otávio Ramos Peixoto")).not.toBeInTheDocument()),await ka(t,n,"Otávio Ramos Peixoto")}),await e('ao abrir, o foco vai para a gaveta "Decidir: <cliente>"; Esc fecha e devolve o foco à linha',async()=>{await u(a,"Lúcia Fernandes Rego");const i=await a.findByRole("dialog",{name:"Decidir: Lúcia Fernandes Rego"});await s(()=>o(t.ownerDocument.activeElement).toBe(i)),await r.keyboard("{Escape}"),await s(()=>o(f(a)).not.toBeInTheDocument());const n=l(await y(a,"Lúcia Fernandes Rego")).getByRole("button",{name:C("Lúcia Fernandes Rego")});await s(()=>o(t.ownerDocument.activeElement).toBe(n))}),await e("recusar com o motivo tira o caso da fila",async()=>{await Sa(a,"Gilberto Paes Andrade","Recusar","Terceiro respondeu no lugar do cliente.")}),await e("reencaminhar com roteiro humano e departamento mostra a confirmação e tira o caso",async()=>{await u(a,"Helena Duarte Campos");const i=await w(a,"Helena Duarte Campos");await r.click(await i.findByRole("button",{name:"Reencaminhar para vídeo humano"}));const n=l(await a.findByRole("dialog",{name:"Reencaminhar para vídeo humano"}));await r.selectOptions(n.getByLabelText("Roteiro (modo humano)"),"rot_humano_inss|2"),await r.selectOptions(n.getByLabelText("Departamento"),"dep-inss"),await r.click(n.getByRole("button",{name:"Reencaminhar"})),await n.findByText("Nova sessão criada, vinculada à original."),await r.click(n.getByRole("button",{name:"Concluir"})),await s(()=>o(a.queryByText("Helena Duarte Campos")).not.toBeInTheDocument())}),await e("o Painel de controle, pelo menu, mostra o mesmo total da fila",async()=>{await F(t,/^Dashboard/),await a.findByText("de 3 aguardando revisão")}),await d()}},A={name:"KPIs: Na fila e Mais antiga",play:async({canvasElement:t,step:e})=>{const a=m(t),i=await a.findByRole("button",{name:"Na fila: 6. Mostrar todos"}),n=a.getByRole("button",{name:"Mais antiga: 9h20. Ir para a mais antiga"});await e("Fora do SLA não é botão e os dois atalhos têm alvo de 44 px",async()=>{await o(a.queryByRole("button",{name:/Fora do SLA/})).not.toBeInTheDocument();for(const c of[i,n]){const x=c.getBoundingClientRect();await o(Math.min(x.width,x.height)).toBeGreaterThanOrEqual(44)}}),await e("Na fila limpa a busca e mostra todos",async()=>{await a.findByText("Gilberto Paes Andrade"),await p(a.getByPlaceholderText("Buscar por nome ou referência"),"Otávio"),await s(()=>o(a.queryByText("Gilberto Paes Andrade")).not.toBeInTheDocument()),await r.click(i),await o(a.getByPlaceholderText("Buscar por nome ou referência")).toHaveValue(""),await a.findByText("Gilberto Paes Andrade"),await o(a.getByText("Vera Lúcia Mattos")).toBeInTheDocument()}),await e("Mais antiga limpa o canal e foca o caso que espera há mais tempo",async()=>{await P(a,/^IA/),await s(()=>o(a.queryByText("Gilberto Paes Andrade")).not.toBeInTheDocument()),await r.click(n),await a.findByText("Gilberto Paes Andrade");const c=t.querySelector("tbody tr, .hk-lista-card");await s(()=>o(c==null?void 0:c.contains(t.ownerDocument.activeElement)).toBe(!0)),await o(t.ownerDocument.activeElement).toHaveAttribute("aria-haspopup","dialog"),await o(f(a)).not.toBeInTheDocument()}),await d()}},I={parameters:{jornada:{cenario:"operar-vazio"}},play:async({canvasElement:t})=>{const e=m(t);await e.findByText("Fila vazia"),await F(t,/^Dashboard/),await e.findByText("de 0 aguardando revisão"),await d()}},q=["GET /v1/operacao"],O={parameters:{jornada:{cenario:"operar",falhar:[...q]}},play:async({canvasElement:t})=>{const e=m(t),a=l(await e.findByRole("alert"));await o(a.getByText("Não foi possível carregar a fila de operação.")).toBeInTheDocument(),await o(a.getByRole("button",{name:/Tentar de novo/})).toBeEnabled(),await o(e.getByRole("button",{name:"Atualizar fila"})).toBeEnabled(),await F(t,"Chamadas realizadas"),await e.findByText("Ester Nunes Prado"),await d([...q])}},B={name:"Sem permissão de revisar",parameters:{jornada:{cenario:"operar",sessao:{papel:"gerente",permissoes:{"operacao.ver":!0,"sessoes.ver":!0,"dossie.ver":!0}}}},play:async({canvasElement:t})=>{const e=m(t);await u(e,"Otávio Ramos Peixoto");const a=await w(e,"Otávio Ramos Peixoto");await a.findByText("Decidir este caso exige a permissão de revisar dossiê."),await o(a.queryByRole("button",{name:"Aprovar com ressalva"})).not.toBeInTheDocument(),await o(a.queryByRole("button",{name:"Recusar"})).not.toBeInTheDocument(),await o(a.queryByRole("button",{name:"Reencaminhar para vídeo humano"})).not.toBeInTheDocument(),await o(a.queryByRole("textbox")).not.toBeInTheDocument(),await o(a.getByRole("link",{name:/Abrir dossiê/})).toBeInTheDocument(),await d()}};async function k(t){const e=t.ownerDocument.defaultView;await s(()=>{const a=t.getBoundingClientRect();e.innerWidth>640?(o(a.width).toBeLessThanOrEqual(560),o(Math.abs(e.innerWidth-a.right)).toBeLessThanOrEqual(8),o(a.height).toBeGreaterThanOrEqual(e.innerHeight-16)):(o(Math.abs(a.bottom-e.innerHeight)).toBeLessThanOrEqual(1),o(a.height).toBeLessThanOrEqual(.92*e.innerHeight+.5)),o(t.scrollWidth).toBeLessThanOrEqual(t.clientWidth)})}const g={name:"Gaveta aberta",parameters:{jornada:{cenario:"padrao"}},play:async({canvasElement:t,step:e})=>{const a=m(t),i="Adriana Lopes Viana";await e("clicar na linha (fora do nome e do ↗) abre a gaveta, sem expandir a linha",async()=>{const n=await y(a,i),c=n.tagName==="TR"?n.querySelector(".hk-lista-pilula, td:nth-child(3)"):n;await r.click(c),await a.findByRole("dialog",{name:`Decidir: ${i}`}),await o(t.ownerDocument.querySelector(".hk-lista-detalhe")).toBeNull()}),await e("resumo no topo (referência, canal, score, fora do SLA), campo e os 3 botões",async()=>{const n=await w(a,i);await o(n.getByText(/^PROP-2026-/)).toBeInTheDocument(),await o(n.getByText("Assistente (IA)")).toBeInTheDocument(),await o(n.getByText(/fora do SLA/)).toBeInTheDocument(),await o(n.getByRole("textbox",{name:/Observação/})).toBeInTheDocument();for(const c of["Aprovar com ressalva","Reencaminhar para vídeo humano","Recusar"])await o(n.getByRole("button",{name:c})).toBeEnabled()}),await e("geometria: gaveta à direita até 560 px a partir de 641 px; folha inferior de 92dvh até 640 px",async()=>{await k(await a.findByRole("dialog",{name:`Decidir: ${i}`}))}),await d()}},h={name:"Gaveta: sair com observação",play:async({canvasElement:t,step:e})=>{const a=m(t);await u(a,"Otávio Ramos Peixoto");const i=await w(a,"Otávio Ramos Peixoto");await p(i.getByRole("textbox",{name:/Observação/}),"abc"),await e("Esc pede confirmação; Continuar editando mantém o texto",async()=>{await r.keyboard("{Escape}");const n=l(await a.findByRole("dialog",{name:"Descartar a observação?"}));await s(()=>o(t.ownerDocument.activeElement).toBe(n.getByRole("button",{name:"Continuar editando"}))),await r.click(n.getByRole("button",{name:"Continuar editando"})),await s(()=>o(a.queryByRole("dialog",{name:"Descartar a observação?"})).not.toBeInTheDocument()),await o(i.getByRole("textbox",{name:/Observação/})).toHaveValue("abc")}),await e("X pede confirmação; Descartar fecha a gaveta e o caso continua na fila",async()=>{await r.click(i.getByRole("button",{name:"Fechar"}));const n=l(await a.findByRole("dialog",{name:"Descartar a observação?"}));await r.click(n.getByRole("button",{name:"Descartar"})),await s(()=>o(f(a)).not.toBeInTheDocument()),await o(a.getByText("Otávio Ramos Peixoto")).toBeInTheDocument()}),await d()}},v=["POST /v1/sessoes/:id/revisao"],Pa=()=>new Promise(t=>setTimeout(t,50)),b={name:"Gaveta: erro ao decidir",parameters:{jornada:{cenario:"operar",falhar:[...v]}},play:async({canvasElement:t})=>{const e=m(t);await u(e,"Otávio Ramos Peixoto");const a=await w(e,"Otávio Ramos Peixoto");await p(a.getByRole("textbox",{name:/Observação/}),"Terceiro respondeu no lugar do cliente."),await r.click(a.getByRole("button",{name:"Recusar"})),await a.findByText("Erro interno do servidor (api falsa)"),await o(a.getByRole("textbox",{name:/Observação/})).toHaveValue("Terceiro respondeu no lugar do cliente."),await o(a.getByRole("button",{name:"Recusar"})).toBeEnabled(),await k(await e.findByRole("dialog",{name:"Decidir: Otávio Ramos Peixoto"})),await d([...v])}},R={name:"Gaveta: decidindo",parameters:{jornada:{cenario:"operar",pendurar:[...v]}},play:async({canvasElement:t})=>{const e=m(t);await u(e,"Otávio Ramos Peixoto");const a=await w(e,"Otávio Ramos Peixoto");await p(a.getByRole("textbox",{name:/Observação/}),"Dúvida sobre o banco esclarecida na gravação."),await r.click(a.getByRole("button",{name:"Aprovar com ressalva"})),await s(()=>o(a.getByRole("button",{name:/Recusar/})).toBeDisabled()),await o(a.getByRole("button",{name:/Reencaminhar/})).toBeDisabled(),await r.keyboard("{Escape}"),await Pa(),await o(e.getByRole("dialog",{name:"Decidir: Otávio Ramos Peixoto"})).toBeInTheDocument(),await o(e.queryByRole("dialog",{name:"Descartar a observação?"})).not.toBeInTheDocument(),await d([...v])}},L=["POST /v1/sessoes/:id/reencaminhar"],E={name:"Gaveta: reencaminhando",parameters:{jornada:{cenario:"operar",pendurar:[...L]}},play:async({canvasElement:t})=>{const e=m(t);await u(e,"Helena Duarte Campos");const a=await w(e,"Helena Duarte Campos");await r.click(await a.findByRole("button",{name:"Reencaminhar para vídeo humano"}));const i=await e.findByRole("dialog",{name:"Reencaminhar para vídeo humano"}),n=l(i);await r.selectOptions(n.getByLabelText("Roteiro (modo humano)"),"rot_humano_inss|2"),await r.click(n.getByRole("button",{name:"Reencaminhar"})),await s(()=>o(n.getByRole("button",{name:"Cancelar"})).toBeDisabled()),await r.keyboard("{Escape}"),await r.click(n.getByRole("button",{name:"Fechar"})),await Pa(),await o(e.getByRole("dialog",{name:"Reencaminhar para vídeo humano"})).toBeInTheDocument(),await o(e.getByRole("dialog",{name:"Decidir: Helena Duarte Campos"})).toBeInTheDocument(),await d([...L])}},D={name:"Gaveta: já decidido por outra pessoa",parameters:{jornada:{cenario:"operar",respostas:{[v[0]]:{status:409,corpo:{erro:"sessão já revisada por Marina Couto",codigo:"JA_REVISADA"}}}}},play:async({canvasElement:t})=>{const e=m(t);await u(e,"Otávio Ramos Peixoto");const a=await w(e,"Otávio Ramos Peixoto");await p(a.getByRole("textbox",{name:/Observação/}),"Terceiro respondeu no lugar do cliente."),await r.click(a.getByRole("button",{name:"Recusar"})),await a.findByText("Outra pessoa já decidiu este caso");for(const i of["Aprovar com ressalva","Reencaminhar para vídeo humano","Recusar"])await o(a.getByRole("button",{name:i})).toBeDisabled();await k(await e.findByRole("dialog",{name:"Decidir: Otávio Ramos Peixoto"})),await r.keyboard("{Escape}"),await s(()=>o(f(e)).not.toBeInTheDocument()),await o(e.queryByRole("dialog",{name:"Descartar a observação?"})).not.toBeInTheDocument(),await d([...v])}},ne=["Padrao","AtalhosDosKpis","Vazio","Erro","SemPermissaoDeRevisar","GavetaAberta","SairComObservacao","ErroAoDecidir","Decidindo","Reencaminhando","JaDecididoPorOutraPessoa"];var H,G,M;T.parameters={...T.parameters,docs:{...(H=T.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "Padrão",
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await step("os 3 KPIs mostram os números do seed e IA + Humano soma Todas", async () => {
      const kpis = within(canvasElement.querySelector(".op-kpis") as HTMLElement);
      await waitFor(() => expect(canvasElement.querySelector(".op-kpis")).toHaveTextContent(/Na fila\\s*6\\s*aguardando revisão/));
      await expect(kpis.getByText("Fora do SLA").closest(".op-kpi")).toHaveTextContent(/Fora do SLA\\s*2/);
      await expect(kpis.getByText("Mais antiga").closest(".op-kpi")).toHaveTextContent(/Mais antiga\\s*9h20/);
      // o segmentado fica na folha "Filtros" abaixo de 900 px: lido mesmo oculto
      const numero = async (nome: RegExp) => Number((await tela.findByRole("button", {
        name: nome,
        hidden: true
      })).textContent?.replace(/\\D/g, ""));
      const filtros = tela.queryByRole("button", {
        name: /^Filtros/
      });
      if (filtros) await userEvent.click(filtros);
      await waitFor(async () => expect(await numero(/^Todas \\d/)).toBe(6));
      await expect((await numero(/^IA \\d/)) + (await numero(/^Humano \\d/))).toBe(await numero(/^Todas \\d/));
      if (filtros) await userEvent.click(tela.getByRole("button", {
        name: "Ver resultados"
      }));
    });
    await step("a ordem inicial é Esperando ↓", async () => {
      await tela.findByText("Gilberto Paes Andrade");
      // nos cards (375) não há cabeçalho de coluna; a ordem é a mesma
      if (canvasElement.querySelector("table")) await expect(canvasElement.querySelector("th[aria-sort=descending]")).toHaveTextContent(/Esperando/);
    });
    await step("a fila mostra os 6 casos, com sinais e os acima do SLA destacados", async () => {
      await tela.findByText("Gilberto Paes Andrade");
      for (const cliente of ["Helena Duarte Campos", "Bruno Assis Nogueira", "Lúcia Fernandes Rego", "Otávio Ramos Peixoto", "Vera Lúcia Mattos"]) {
        await expect(tela.getByText(cliente)).toBeInTheDocument();
      }
      // o destaque é o rótulo "fora do SLA" na coluna de espera (o fundo e o
      // filete vermelhos acompanham a mesma condição, acima_sla)
      await expect(within(await linhaDe(tela, "Bruno Assis Nogueira")).getByText(/fora do SLA/)).toBeInTheDocument();
      await expect(within(await linhaDe(tela, "Helena Duarte Campos")).queryByText(/fora do SLA/)).not.toBeInTheDocument();
    });
    await step("busca e canal filtram; limpar devolve todos", async () => {
      await digitar(tela.getByPlaceholderText("Buscar por nome ou referência"), "Otávio");
      await waitFor(() => expect(tela.queryByText("Gilberto Paes Andrade")).not.toBeInTheDocument());
      await expect(tela.getByText("Otávio Ramos Peixoto")).toBeInTheDocument();
      await userEvent.click(tela.getByRole("button", {
        name: /^Limpar \\(/
      }));
      await tela.findByText("Gilberto Paes Andrade");
      await escolherCanal(tela, /^Humano/);
      await waitFor(() => expect(tela.queryByText("Vera Lúcia Mattos")).not.toBeInTheDocument());
      await expect(tela.getByText("Gilberto Paes Andrade")).toBeInTheDocument();
      await escolherCanal(tela, /^Todas/);
      await tela.findByText("Vera Lúcia Mattos");
    });
    await step("aprovar sem observação pede justificativa; com observação o caso sai da fila", async () => {
      await abrirCaso(tela, "Otávio Ramos Peixoto");
      const detalhe = await detalheDe(tela, "Otávio Ramos Peixoto");
      await userEvent.click(await detalhe.findByRole("button", {
        name: "Aprovar com ressalva"
      }));
      await detalhe.findByText(/observação é obrigatória/);
      await digitar(detalhe.getByRole("textbox"), "Dúvida sobre o banco esclarecida na gravação.");
      const ordemAntes = ordemDasLinhas(canvasElement);
      await userEvent.click(detalhe.getByRole("button", {
        name: "Aprovar com ressalva"
      }));
      await waitFor(() => expect(tela.queryByText("Otávio Ramos Peixoto")).not.toBeInTheDocument());
      await conferirFocoDepoisDeDecidir(canvasElement, ordemAntes, "Otávio Ramos Peixoto");
    });
    await step("ao abrir, o foco vai para a gaveta \\"Decidir: <cliente>\\"; Esc fecha e devolve o foco à linha", async () => {
      await abrirCaso(tela, "Lúcia Fernandes Rego");
      const gaveta = await tela.findByRole("dialog", {
        name: "Decidir: Lúcia Fernandes Rego"
      });
      await waitFor(() => expect(canvasElement.ownerDocument.activeElement).toBe(gaveta));
      await userEvent.keyboard("{Escape}");
      await waitFor(() => expect(gavetaAberta(tela)).not.toBeInTheDocument());
      const botao = within(await linhaDe(tela, "Lúcia Fernandes Rego")).getByRole("button", {
        name: nomeDoAbrir("Lúcia Fernandes Rego")
      });
      await waitFor(() => expect(canvasElement.ownerDocument.activeElement).toBe(botao));
    });
    await step("recusar com o motivo tira o caso da fila", async () => {
      await decidirCaso(tela, "Gilberto Paes Andrade", "Recusar", "Terceiro respondeu no lugar do cliente.");
    });
    await step("reencaminhar com roteiro humano e departamento mostra a confirmação e tira o caso", async () => {
      await abrirCaso(tela, "Helena Duarte Campos");
      const detalhe = await detalheDe(tela, "Helena Duarte Campos");
      await userEvent.click(await detalhe.findByRole("button", {
        name: "Reencaminhar para vídeo humano"
      }));
      const modal = within(await tela.findByRole("dialog", {
        name: "Reencaminhar para vídeo humano"
      }));
      await userEvent.selectOptions(modal.getByLabelText("Roteiro (modo humano)"), "rot_humano_inss|2");
      await userEvent.selectOptions(modal.getByLabelText("Departamento"), "dep-inss");
      await userEvent.click(modal.getByRole("button", {
        name: "Reencaminhar"
      }));
      await modal.findByText("Nova sessão criada, vinculada à original.");
      await userEvent.click(modal.getByRole("button", {
        name: "Concluir"
      }));
      await waitFor(() => expect(tela.queryByText("Helena Duarte Campos")).not.toBeInTheDocument());
    });
    await step("o Painel de controle, pelo menu, mostra o mesmo total da fila", async () => {
      await irPeloMenu(canvasElement, /^Dashboard/);
      await tela.findByText("de 3 aguardando revisão");
    });
    await semRotaSemFixture();
  }
}`,...(M=(G=T.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var N,j,V;A.parameters={...A.parameters,docs:{...(N=A.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "KPIs: Na fila e Mais antiga",
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    const naFila = await tela.findByRole("button", {
      name: "Na fila: 6. Mostrar todos"
    });
    const maisAntiga = tela.getByRole("button", {
      name: "Mais antiga: 9h20. Ir para a mais antiga"
    });
    await step("Fora do SLA não é botão e os dois atalhos têm alvo de 44 px", async () => {
      await expect(tela.queryByRole("button", {
        name: /Fora do SLA/
      })).not.toBeInTheDocument();
      for (const botao of [naFila, maisAntiga]) {
        const caixa = botao.getBoundingClientRect();
        await expect(Math.min(caixa.width, caixa.height)).toBeGreaterThanOrEqual(44);
      }
    });
    await step("Na fila limpa a busca e mostra todos", async () => {
      await tela.findByText("Gilberto Paes Andrade");
      await digitar(tela.getByPlaceholderText("Buscar por nome ou referência"), "Otávio");
      await waitFor(() => expect(tela.queryByText("Gilberto Paes Andrade")).not.toBeInTheDocument());
      await userEvent.click(naFila);
      await expect(tela.getByPlaceholderText("Buscar por nome ou referência")).toHaveValue("");
      await tela.findByText("Gilberto Paes Andrade");
      await expect(tela.getByText("Vera Lúcia Mattos")).toBeInTheDocument();
    });
    await step("Mais antiga limpa o canal e foca o caso que espera há mais tempo", async () => {
      await escolherCanal(tela, /^IA/);
      await waitFor(() => expect(tela.queryByText("Gilberto Paes Andrade")).not.toBeInTheDocument());
      await userEvent.click(maisAntiga);
      await tela.findByText("Gilberto Paes Andrade");
      const primeira = canvasElement.querySelector<HTMLElement>("tbody tr, .hk-lista-card");
      await waitFor(() => expect(primeira?.contains(canvasElement.ownerDocument.activeElement)).toBe(true));
      await expect(canvasElement.ownerDocument.activeElement).toHaveAttribute("aria-haspopup", "dialog");
      await expect(gavetaAberta(tela)).not.toBeInTheDocument();
    });
    await semRotaSemFixture();
  }
}`,...(V=(j=A.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var _,J,z;I.parameters={...I.parameters,docs:{...(_=I.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    jornada: {
      cenario: "operar-vazio"
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await tela.findByText("Fila vazia");
    await irPeloMenu(canvasElement, /^Dashboard/);
    await tela.findByText("de 0 aguardando revisão");
    await semRotaSemFixture();
  }
}`,...(z=(J=I.parameters)==null?void 0:J.docs)==null?void 0:z.source}}};var $,K,U;O.parameters={...O.parameters,docs:{...($=O.parameters)==null?void 0:$.docs,source:{originalSource:`{
  parameters: {
    jornada: {
      cenario: "operar",
      falhar: [...FALHAR]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    const erroCard = within(await tela.findByRole("alert"));
    await expect(erroCard.getByText("Não foi possível carregar a fila de operação.")).toBeInTheDocument();
    await expect(erroCard.getByRole("button", {
      name: /Tentar de novo/
    })).toBeEnabled();
    await expect(tela.getByRole("button", {
      name: "Atualizar fila"
    })).toBeEnabled();
    await irPeloMenu(canvasElement, "Chamadas realizadas");
    await tela.findByText("Ester Nunes Prado");
    await semRotaSemFixture([...FALHAR]);
  }
}`,...(U=(K=O.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var W,X,Y,Q,Z;B.parameters={...B.parameters,docs:{...(W=B.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "Sem permissão de revisar",
  parameters: {
    jornada: {
      cenario: "operar",
      sessao: {
        papel: "gerente",
        permissoes: {
          "operacao.ver": true,
          "sessoes.ver": true,
          "dossie.ver": true
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await abrirCaso(tela, "Otávio Ramos Peixoto");
    const detalhe = await detalheDe(tela, "Otávio Ramos Peixoto");
    await detalhe.findByText("Decidir este caso exige a permissão de revisar dossiê.");
    await expect(detalhe.queryByRole("button", {
      name: "Aprovar com ressalva"
    })).not.toBeInTheDocument();
    await expect(detalhe.queryByRole("button", {
      name: "Recusar"
    })).not.toBeInTheDocument();
    await expect(detalhe.queryByRole("button", {
      name: "Reencaminhar para vídeo humano"
    })).not.toBeInTheDocument();
    await expect(detalhe.queryByRole("textbox")).not.toBeInTheDocument();
    await expect(detalhe.getByRole("link", {
      name: /Abrir dossiê/
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(Y=(X=B.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:"B37 (teste de aceite de B19): gerente cujo grupo não tem `dossie.revisar`\nnem `sessoes.reencaminhar`. O painel abre só para leitura, com a frase e o ↗.",...(Z=(Q=B.parameters)==null?void 0:Q.docs)==null?void 0:Z.description}}};var aa,ea,ta,oa,na;g.parameters={...g.parameters,docs:{...(aa=g.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  name: "Gaveta aberta",
  parameters: {
    jornada: {
      cenario: "padrao"
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    const cliente = "Adriana Lopes Viana";
    await step("clicar na linha (fora do nome e do ↗) abre a gaveta, sem expandir a linha", async () => {
      const linha = await linhaDe(tela, cliente);
      const alvo = linha.tagName === "TR" ? linha.querySelector<HTMLElement>(".hk-lista-pilula, td:nth-child(3)")! : linha;
      await userEvent.click(alvo);
      await tela.findByRole("dialog", {
        name: \`Decidir: \${cliente}\`
      });
      await expect(canvasElement.ownerDocument.querySelector(".hk-lista-detalhe")).toBeNull();
    });
    await step("resumo no topo (referência, canal, score, fora do SLA), campo e os 3 botões", async () => {
      const gaveta = await detalheDe(tela, cliente);
      await expect(gaveta.getByText(/^PROP-2026-/)).toBeInTheDocument();
      await expect(gaveta.getByText("Assistente (IA)")).toBeInTheDocument();
      await expect(gaveta.getByText(/fora do SLA/)).toBeInTheDocument();
      await expect(gaveta.getByRole("textbox", {
        name: /Observação/
      })).toBeInTheDocument();
      for (const botao of ["Aprovar com ressalva", "Reencaminhar para vídeo humano", "Recusar"]) {
        await expect(gaveta.getByRole("button", {
          name: botao
        })).toBeEnabled();
      }
    });
    await step("geometria: gaveta à direita até 560 px a partir de 641 px; folha inferior de 92dvh até 640 px", async () => {
      await conferirGeometria(await tela.findByRole("dialog", {
        name: \`Decidir: \${cliente}\`
      }));
    });
    await semRotaSemFixture();
  }
}`,...(ta=(ea=g.parameters)==null?void 0:ea.docs)==null?void 0:ta.source},description:{story:`Referência visual da gaveta: o caso da Adriana (fora do SLA) aberto pelo
clique na linha (célula Score) ou no card, com o resumo no topo.`,...(na=(oa=g.parameters)==null?void 0:oa.docs)==null?void 0:na.description}}};var ia,ra,sa,ca,la;h.parameters={...h.parameters,docs:{...(ia=h.parameters)==null?void 0:ia.docs,source:{originalSource:`{
  name: "Gaveta: sair com observação",
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await abrirCaso(tela, "Otávio Ramos Peixoto");
    const gaveta = await detalheDe(tela, "Otávio Ramos Peixoto");
    await digitar(gaveta.getByRole("textbox", {
      name: /Observação/
    }), "abc");
    await step("Esc pede confirmação; Continuar editando mantém o texto", async () => {
      await userEvent.keyboard("{Escape}");
      const confirmacao = within(await tela.findByRole("dialog", {
        name: "Descartar a observação?"
      }));
      await waitFor(() => expect(canvasElement.ownerDocument.activeElement).toBe(confirmacao.getByRole("button", {
        name: "Continuar editando"
      })));
      await userEvent.click(confirmacao.getByRole("button", {
        name: "Continuar editando"
      }));
      await waitFor(() => expect(tela.queryByRole("dialog", {
        name: "Descartar a observação?"
      })).not.toBeInTheDocument());
      await expect(gaveta.getByRole("textbox", {
        name: /Observação/
      })).toHaveValue("abc");
    });
    await step("X pede confirmação; Descartar fecha a gaveta e o caso continua na fila", async () => {
      await userEvent.click(gaveta.getByRole("button", {
        name: "Fechar"
      }));
      const confirmacao = within(await tela.findByRole("dialog", {
        name: "Descartar a observação?"
      }));
      await userEvent.click(confirmacao.getByRole("button", {
        name: "Descartar"
      }));
      await waitFor(() => expect(gavetaAberta(tela)).not.toBeInTheDocument());
      await expect(tela.getByText("Otávio Ramos Peixoto")).toBeInTheDocument();
    });
    await semRotaSemFixture();
  }
}`,...(sa=(ra=h.parameters)==null?void 0:ra.docs)==null?void 0:sa.source},description:{story:"Sair com a observação digitada pede confirmação (Esc, X ou véu).",...(la=(ca=h.parameters)==null?void 0:ca.docs)==null?void 0:la.description}}};var ma,da,ua,wa,pa;b.parameters={...b.parameters,docs:{...(ma=b.parameters)==null?void 0:ma.docs,source:{originalSource:`{
  name: "Gaveta: erro ao decidir",
  parameters: {
    jornada: {
      cenario: "operar",
      falhar: [...DECIDIR]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await abrirCaso(tela, "Otávio Ramos Peixoto");
    const gaveta = await detalheDe(tela, "Otávio Ramos Peixoto");
    await digitar(gaveta.getByRole("textbox", {
      name: /Observação/
    }), "Terceiro respondeu no lugar do cliente.");
    await userEvent.click(gaveta.getByRole("button", {
      name: "Recusar"
    }));
    await gaveta.findByText("Erro interno do servidor (api falsa)");
    await expect(gaveta.getByRole("textbox", {
      name: /Observação/
    })).toHaveValue("Terceiro respondeu no lugar do cliente.");
    await expect(gaveta.getByRole("button", {
      name: "Recusar"
    })).toBeEnabled();
    await conferirGeometria(await tela.findByRole("dialog", {
      name: "Decidir: Otávio Ramos Peixoto"
    }));
    await semRotaSemFixture([...DECIDIR]);
  }
}`,...(ua=(da=b.parameters)==null?void 0:da.docs)==null?void 0:ua.source},description:{story:`Estado de erro ao decidir: a mensagem da API fica abaixo do campo, a gaveta
e o texto ficam, os botões voltam.`,...(pa=(wa=b.parameters)==null?void 0:wa.docs)==null?void 0:pa.description}}};var xa,ya,va,Ba,ga;R.parameters={...R.parameters,docs:{...(xa=R.parameters)==null?void 0:xa.docs,source:{originalSource:`{
  name: "Gaveta: decidindo",
  parameters: {
    jornada: {
      cenario: "operar",
      pendurar: [...DECIDIR]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await abrirCaso(tela, "Otávio Ramos Peixoto");
    const gaveta = await detalheDe(tela, "Otávio Ramos Peixoto");
    await digitar(gaveta.getByRole("textbox", {
      name: /Observação/
    }), "Dúvida sobre o banco esclarecida na gravação.");
    await userEvent.click(gaveta.getByRole("button", {
      name: "Aprovar com ressalva"
    }));
    await waitFor(() => expect(gaveta.getByRole("button", {
      name: /Recusar/
    })).toBeDisabled());
    await expect(gaveta.getByRole("button", {
      name: /Reencaminhar/
    })).toBeDisabled();
    await userEvent.keyboard("{Escape}");
    await esperarUmCiclo();
    await expect(tela.getByRole("dialog", {
      name: "Decidir: Otávio Ramos Peixoto"
    })).toBeInTheDocument();
    await expect(tela.queryByRole("dialog", {
      name: "Descartar a observação?"
    })).not.toBeInTheDocument();
    await semRotaSemFixture([...DECIDIR]);
  }
}`,...(va=(ya=R.parameters)==null?void 0:ya.docs)==null?void 0:va.source},description:{story:`Estado carregando: com a decisão sendo enviada, os botões ficam
desabilitados e Esc não fecha a gaveta.`,...(ga=(Ba=R.parameters)==null?void 0:Ba.docs)==null?void 0:ga.description}}};var ha,ba,Ra,Ea,Da;E.parameters={...E.parameters,docs:{...(ha=E.parameters)==null?void 0:ha.docs,source:{originalSource:`{
  name: "Gaveta: reencaminhando",
  parameters: {
    jornada: {
      cenario: "operar",
      pendurar: [...REENCAMINHAR]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await abrirCaso(tela, "Helena Duarte Campos");
    const gaveta = await detalheDe(tela, "Helena Duarte Campos");
    await userEvent.click(await gaveta.findByRole("button", {
      name: "Reencaminhar para vídeo humano"
    }));
    const dialogo = await tela.findByRole("dialog", {
      name: "Reencaminhar para vídeo humano"
    });
    const modal = within(dialogo);
    await userEvent.selectOptions(modal.getByLabelText("Roteiro (modo humano)"), "rot_humano_inss|2");
    await userEvent.click(modal.getByRole("button", {
      name: "Reencaminhar"
    }));
    await waitFor(() => expect(modal.getByRole("button", {
      name: "Cancelar"
    })).toBeDisabled());
    await userEvent.keyboard("{Escape}");
    await userEvent.click(modal.getByRole("button", {
      name: "Fechar"
    }));
    await esperarUmCiclo();
    await expect(tela.getByRole("dialog", {
      name: "Reencaminhar para vídeo humano"
    })).toBeInTheDocument();
    await expect(tela.getByRole("dialog", {
      name: "Decidir: Helena Duarte Campos"
    })).toBeInTheDocument();
    await semRotaSemFixture([...REENCAMINHAR]);
  }
}`,...(Ra=(ba=E.parameters)==null?void 0:ba.docs)==null?void 0:Ra.source},description:{story:`Reencaminhamento sendo enviado: Esc, X, véu e Cancelar não fecham o modal
nem a gaveta (fechar perderia o link e levaria a reenviar).`,...(Da=(Ea=E.parameters)==null?void 0:Ea.docs)==null?void 0:Da.description}}};var fa,Ta,Aa,Ia,Oa;D.parameters={...D.parameters,docs:{...(fa=D.parameters)==null?void 0:fa.docs,source:{originalSource:`{
  name: "Gaveta: já decidido por outra pessoa",
  parameters: {
    jornada: {
      cenario: "operar",
      respostas: {
        [DECIDIR[0]]: {
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
    await abrirCaso(tela, "Otávio Ramos Peixoto");
    const gaveta = await detalheDe(tela, "Otávio Ramos Peixoto");
    await digitar(gaveta.getByRole("textbox", {
      name: /Observação/
    }), "Terceiro respondeu no lugar do cliente.");
    await userEvent.click(gaveta.getByRole("button", {
      name: "Recusar"
    }));
    await gaveta.findByText("Outra pessoa já decidiu este caso");
    for (const botao of ["Aprovar com ressalva", "Reencaminhar para vídeo humano", "Recusar"]) {
      await expect(gaveta.getByRole("button", {
        name: botao
      })).toBeDisabled();
    }
    await conferirGeometria(await tela.findByRole("dialog", {
      name: "Decidir: Otávio Ramos Peixoto"
    }));
    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(gavetaAberta(tela)).not.toBeInTheDocument());
    await expect(tela.queryByRole("dialog", {
      name: "Descartar a observação?"
    })).not.toBeInTheDocument();
    await semRotaSemFixture([...DECIDIR]);
  }
}`,...(Aa=(Ta=D.parameters)==null?void 0:Ta.docs)==null?void 0:Aa.source},description:{story:`409 do POST /revisao: outra pessoa já decidiu. A gaveta avisa, trava os
botões, a fila é recarregada e Esc fecha sem pedir para descartar.`,...(Oa=(Ia=D.parameters)==null?void 0:Ia.docs)==null?void 0:Oa.description}}};export{A as AtalhosDosKpis,R as Decidindo,O as Erro,b as ErroAoDecidir,g as GavetaAberta,D as JaDecididoPorOutraPessoa,T as Padrao,E as Reencaminhando,h as SairComObservacao,B as SemPermissaoDeRevisar,I as Vazio,ne as __namedExportsOrder,oe as default};
