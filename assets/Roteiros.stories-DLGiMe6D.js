import{C as i,m as re}from"./jornadaGestao-0qp-OTX8.js";import{t as r,s}from"./jornadaOperar-CJh3C-oI.js";import"./ShellJornada-uKs72R7z.js";import"./jsx-runtime-C5Uvr8eJ.js";import"./iframe-BrTkHCwr.js";import"./preload-helper-D6kgxu3v.js";import"./dadosShell-0Jawewt5.js";import"./index-CYEdgZu8.js";import"./index-CYXoxrc2.js";import"./v2-C87VGJur.js";import"./index-ByghV1rB.js";import"./api-CwvJBfED.js";import"./index-B4-6t8uq.js";import"./marca-BKCu1-f2.js";import"./carregando-pfZ1ABbu.js";import"./celulas-BCaaKaG9.js";/* empty css              */import"./CartaoKpi-BrEulX6u.js";import"./MiniBarras-Crr0CigX.js";import"./cores-D-iLqYVd.js";import"./Login-DuNN5UQS.js";import"./etapas-BQAHtn_2.js";/* empty css                */import"./ShellGestao-CARJfSPT.js";const{expect:e,userEvent:o,waitFor:j,within:m}=__STORYBOOK_MODULE_TEST__,ie=re("/roteiros",'Jornada de roteiros dentro do shell: lista e editor. No editor, cada pergunta tem Subir e Descer (44 px, com o número da pergunta no nome) além do arraste; o índice e a régua do veredito ficam em seções recolhíveis (fechadas no celular). Com a carga falhando o editor não aparece (antes ficava no carregando para sempre); roteiro que não existe mostra "não encontrado" com Voltar; erro ao publicar aparece em frase, nunca o JSON da resposta, e o erro de uma pergunta aparece no cartão dela.'),p="GET /v1/roteiros/:id/:versao",P="POST /v1/roteiros",l="/roteiros/editar/rot_consignado_novo/3",Ve={title:"Jornadas/Roteiros",...ie};function se(t){return[...t.ownerDocument.querySelectorAll(".roteiro-perguntas .pergunta-cabeca .pid")].map(a=>a.textContent)}function L(t){return[...t.ownerDocument.querySelectorAll(".roteiro-perguntas .pergunta-resumo")].map(a=>a.textContent)}const v={name:"Padrão: lista",play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByRole("region",{name:/Roteiros/})).toBeInTheDocument(),await e((await a.findAllByText(/contrato novo/)).length).toBeGreaterThan(0),await s()}},w={name:"Editor: subir, descer e publicar",args:{rotaInicial:l},play:async({canvasElement:t,step:a})=>{const n=r(t);await e(await n.findByRole("heading",{name:"Consignado · contrato novo",level:2})).toBeInTheDocument();const c=L(t);await a("Descer p1 troca com a seguinte",async()=>{await o.click(n.getByRole("button",{name:"Descer p1"})),await e(L(t)).toEqual([c[1],c[0],...c.slice(2)]),await e(se(t).slice(0,2)).toEqual(["p1","p2"])}),await a("Subir p2 desfaz a troca",async()=>{await o.click(n.getByRole("button",{name:"Subir p2"})),await e(L(t)).toEqual(c)}),await a("Primeira não sobe e última não desce",async()=>{await e(n.getByRole("button",{name:"Subir p1"})).toBeDisabled(),await e(n.getByRole("button",{name:"Descer p6"})).toBeDisabled()}),await a("Índice e régua do veredito abrem e fecham",async()=>{const u=n.getByRole("button",{name:"Ir para a pergunta"});u.getAttribute("aria-expanded")==="false"&&await o.click(u),await e(u).toHaveAttribute("aria-expanded","true");const F=n.getByRole("button",{name:"Como o roteiro vira veredito"});await o.click(F),await e(F).toHaveAttribute("aria-expanded","true"),await e(n.getByText("Aprova automático")).toBeVisible()}),await a("Expandir todas abre os cartões",async()=>{await o.click(n.getByRole("button",{name:"Expandir todas"})),await e(n.getByRole("button",{name:"Recolher todas"})).toBeInTheDocument()}),await a("Publicar cria a v4 e segue no editor",async()=>{await o.click(n.getByRole("button",{name:"Salvar como nova versão"})),await e(await n.findByText(/Publicado: rot_consignado_novo v4/)).toBeInTheDocument()}),await s()}},y={name:"Editor: aviso de saída",args:{rotaInicial:l},play:async({canvasElement:t,step:a})=>{const n=r(t),c=m(t.ownerDocument.body);await e(await n.findByRole("heading",{name:"Consignado · contrato novo",level:2})).toBeInTheDocument(),await a("Subir e descer de volta não conta como alteração: Voltar sai direto",async()=>{await o.click(n.getByRole("button",{name:"Descer p1"})),await o.click(n.getByRole("button",{name:"Subir p2"})),await o.click(n.getByRole("link",{name:"Voltar para Roteiros"})),await e(await n.findByRole("region",{name:/Roteiros/})).toBeInTheDocument(),await e(c.queryByText("Sair sem salvar?")).not.toBeInTheDocument()}),await a("Trocar a ordem e tentar sair pergunta, citando o roteiro",async()=>{await o.click((await n.findAllByRole("link",{name:/contrato novo/}))[0]),await e(await n.findByRole("heading",{name:"Consignado · contrato novo",level:2})).toBeInTheDocument(),await o.click(n.getByRole("button",{name:"Descer p1"})),await o.click(n.getByRole("link",{name:"Voltar para Roteiros"}));const u=m(await c.findByRole("dialog",{name:"Sair sem salvar?"}));await e(u.getByText(/alterações não salvas em Roteiro “Consignado · contrato novo”/)).toBeInTheDocument(),await o.click(u.getByRole("button",{name:"Continuar editando"})),await j(()=>e(c.queryByRole("dialog",{name:"Sair sem salvar?"})).not.toBeInTheDocument()),await e(n.getByRole("heading",{name:"Consignado · contrato novo",level:2})).toBeInTheDocument()}),await a("Publicar e depois sair não pergunta",async()=>{await o.click(n.getByRole("button",{name:"Salvar como nova versão"})),await e(await n.findByText(/Publicado: rot_consignado_novo v4/)).toBeInTheDocument(),await o.click(n.getByRole("link",{name:"Voltar para Roteiros"})),await e(await n.findByRole("region",{name:/Roteiros/})).toBeInTheDocument(),await e(c.queryByText("Sair sem salvar?")).not.toBeInTheDocument()}),await s()}},B={name:"Editor: roteiro novo",args:{rotaInicial:"/roteiros/novo"},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText("Novo roteiro")).toBeInTheDocument(),await e(a.getByRole("button",{name:"Subir p1"})).toBeDisabled(),await e(a.getByRole("button",{name:"Descer p1"})).toBeDisabled(),await s()}},g={args:{rotaInicial:l},parameters:{jornada:{...i,pendurar:[p]}},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText(/Carregando o roteiro/)).toBeInTheDocument(),await e(a.queryByRole("button",{name:"Salvar como nova versão"})).not.toBeInTheDocument()}},x={name:"Erro de rede: sem editor",args:{rotaInicial:l},parameters:{jornada:{...i,semRede:[p]}},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText(/Não foi possível carregar o roteiro/)).toBeInTheDocument(),await e(a.queryByText(/Carregando o roteiro/)).not.toBeInTheDocument(),await e(a.queryByRole("button",{name:"Salvar como nova versão"})).not.toBeInTheDocument(),await o.click(a.getByRole("button",{name:"Tentar de novo"})),await e(await a.findByText(/Não foi possível carregar o roteiro/)).toBeInTheDocument(),await s()}},E={name:"Erro do servidor",args:{rotaInicial:l},parameters:{jornada:{...i,falhar:[p]}},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText(/O servidor teve um problema ao carregar o roteiro/)).toBeInTheDocument(),await e(a.queryByText(/api falsa/)).not.toBeInTheDocument(),await e(a.getByRole("button",{name:"Tentar de novo"})).toBeInTheDocument(),await e(a.getByRole("link",{name:"Voltar para Roteiros"})).toBeInTheDocument(),await s()}},T={name:"Erro: sem permissão",args:{rotaInicial:l},parameters:{jornada:{...i,respostas:{[p]:{status:403,corpo:{erro:"sem permissão"}}}}},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText(/não tem permissão para ver o roteiro/)).toBeInTheDocument(),await e(a.queryByRole("button",{name:"Tentar de novo"})).not.toBeInTheDocument(),await s()}},R={name:"Erro: não encontrado",args:{rotaInicial:"/roteiros/editar/rot_inexistente/1"},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText("Roteiro não encontrado.")).toBeInTheDocument(),await e(a.queryByRole("button",{name:"Tentar de novo"})).not.toBeInTheDocument(),await o.click(a.getByRole("button",{name:"Voltar à lista"})),await e(await a.findByRole("region",{name:/Roteiros/})).toBeInTheDocument(),await s()}},b={name:"Erro ao salvar: frase legível",args:{rotaInicial:l},parameters:{jornada:{...i,respostas:{[P]:{status:400,corpo:{detalhe:{campo:"perguntas",codigo:17}}}}}},play:async({canvasElement:t})=>{const a=r(t);await o.click(await a.findByRole("button",{name:"Salvar como nova versão"}));const n=await a.findByRole("alert");await e(n).toHaveTextContent("O servidor recusou o roteiro. Revise as perguntas e tente de novo."),await e(n.textContent).not.toMatch(/[{}]|codigo/),await s()}},D={name:"Erro ao salvar: no cartão da pergunta",args:{rotaInicial:l},parameters:{jornada:{...i,respostas:{[P]:{status:400,corpo:{erro:'p2: negativa ativa sem "mensagem", escreva o que a assistente fala no não'}}}}},play:async({canvasElement:t})=>{const a=r(t);await o.click(await a.findByRole("button",{name:"Salvar como nova versão"}));const n=await a.findByRole("alert");await e(n).toHaveTextContent(/p2: negativa ativa/),await j(()=>e(n.closest(".pergunta-cartao")).not.toBeNull()),await e(m(n.closest(".pergunta-cartao")).getByText("p2",{selector:".pid"})).toBeInTheDocument(),await s()}},I={name:"Erro ao salvar: sem conexão",args:{rotaInicial:l},parameters:{jornada:{...i,semRede:[P]}},play:async({canvasElement:t})=>{const a=r(t);await o.click(await a.findByRole("button",{name:"Salvar como nova versão"})),await e(await a.findByRole("alert")).toHaveTextContent(/Sem conexão\. Seu roteiro continua aqui/),await e(a.getByRole("button",{name:"Salvar como nova versão"})).toBeEnabled(),await s()}},f={name:"Vazio: roteiro sem perguntas",args:{rotaInicial:l},parameters:{jornada:{...i,respostas:{[p]:{status:200,corpo:{id:"rot_consignado_novo",versao:3,convenio:"Consignado",produto:"contrato novo",perguntas:[]}}}}},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText("0 perguntas")).toBeInTheDocument(),await o.click(a.getByRole("button",{name:/Adicionar pergunta.*entra como p1/})),await e(a.getByRole("button",{name:"Subir p1"})).toBeDisabled(),await s()}},S={name:"Vazio: nenhum roteiro",parameters:{jornada:{...i,respostas:{"GET /v1/roteiros":{status:200,corpo:[]}}}},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText("Nenhum roteiro ainda")).toBeInTheDocument(),await s()}},d="GET /v1/roteiros",ce="DELETE /v1/roteiros/:id/:versao",le="POST /v1/roteiros/:id/:versao/restaurar",te=[{id:"rot_consignado_novo",versao:3,rotulo:"Consignado · contrato novo",origem:"painel",perguntas:6,arquivado:!1,modo:"IA",criado_por:"Marina Costa",criado_em:"2026-09-02T12:00:00Z"},{id:"rot_portabilidade",versao:1,rotulo:"Portabilidade de consignado",origem:"painel",perguntas:5,arquivado:!0,modo:"IA",criado_por:"Marina Costa",criado_em:"2026-08-02T12:00:00Z"}];async function ne(t){const a=r(t),[n]=await a.findAllByRole("button",{name:"Mais ações de Consignado · contrato novo v3"});await o.click(n);const c=await a.findByRole("menu");return await o.click(m(c).getByRole("menuitem",{name:"Arquivar"})),a.findByRole("dialog",{name:"Arquivar roteiro?"})}async function oe(t){const a=r(t);await o.click(await a.findByRole("button",{name:/^Arquivados/}));const[n]=await a.findAllByRole("button",{name:"Restaurar Portabilidade de consignado v1"});return n}const h={name:"Erro: lista sem conexão",parameters:{jornada:{...i,semRede:[d]}},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText("Não foi possível carregar os roteiros. Verifique a conexão e tente de novo.")).toBeVisible(),await e(a.getByRole("button",{name:"Tentar de novo"})).toBeVisible(),await e(a.getByText("Lista indisponível no momento")).toBeInTheDocument()}},A={name:"Erro: servidor na lista",parameters:{jornada:{...i,falhar:[d]}},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText("O servidor teve um problema ao carregar os roteiros. Tente de novo em instantes.")).toBeVisible(),await e(a.queryByText(/HTTP|api falsa/)).not.toBeInTheDocument(),await e(a.getByRole("button",{name:"Tentar de novo"})).toBeVisible()}},O={name:"Erro: sem permissão para a lista",parameters:{jornada:{...i,respostas:{[d]:{status:403,corpo:{erro:"seu perfil não tem esta permissão"}}}}},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText("Seu usuário não tem permissão para ver os roteiros.")).toBeVisible(),await e(a.queryByRole("button",{name:"Tentar de novo"})).not.toBeInTheDocument()}},q={name:"Vazio: nenhum roteiro arquivado",play:async({canvasElement:t})=>{const a=r(t);await o.click(await a.findByRole("button",{name:/^Arquivados/}));const n=await a.findByText("Nenhum roteiro arquivado");await e(n).toBeVisible(),await e(n.parentElement).not.toHaveTextContent(/Arquivados/),await e(a.queryByRole("button",{name:"Limpar"})).not.toBeInTheDocument(),await s()}},C={name:"Carregando: lista",parameters:{jornada:{...i,pendurar:[d]}},play:async({canvasElement:t})=>{const a=r(t);await e(await a.findByText("Carregando…")).toBeVisible(),await e(a.getByText("Carregando roteiros…")).toBeInTheDocument(),await e(a.queryByText(/contrato novo/)).not.toBeInTheDocument(),await e(a.queryByRole("button",{name:"Tentar de novo"})).not.toBeInTheDocument()}},k={name:"Arquivar: confirma e avisa",play:async({canvasElement:t})=>{const a=r(t),n=await ne(t);await e(n).toHaveTextContent("Arquivar “Consignado · contrato novo”?"),await e(n).not.toHaveTextContent("rot_consignado_novo"),await o.click(m(n).getByRole("button",{name:"Arquivar"})),await e(await a.findByText("Roteiro arquivado. As sessões antigas continuam íntegras.")).toBeVisible(),await j(()=>e(a.queryByRole("dialog",{name:"Arquivar roteiro?"})).not.toBeInTheDocument()),await s()}},V={name:"Arquivar: erro do servidor no diálogo",parameters:{jornada:{...i,falhar:[ce]}},play:async({canvasElement:t})=>{const a=await ne(t);await o.click(m(a).getByRole("button",{name:"Arquivar"})),await e(await m(a).findByText("O servidor teve um problema ao arquivar o roteiro. Tente de novo em instantes.")).toBeVisible(),await e(a).not.toHaveTextContent(/api falsa|Erro interno/)}},_={name:"Restaurar: volta para os ativos",parameters:{jornada:{...i,respostas:{[d]:{status:200,corpo:te}}}},play:async({canvasElement:t})=>{const a=r(t);await o.click(await oe(t)),await e(await a.findByText("Roteiro restaurado.")).toBeVisible()}},N={name:"Restaurar: erro do servidor visível",parameters:{jornada:{...i,respostas:{[d]:{status:200,corpo:te}},falhar:[le]}},play:async({canvasElement:t})=>{const a=r(t);await o.click(await oe(t));const n=await a.findByText("O servidor teve um problema ao restaurar o roteiro. Tente de novo em instantes.");await e(n).toBeVisible(),await e(a.queryByText(/api falsa|Erro interno/)).not.toBeInTheDocument()}},_e=["Padrao","Editor","AvisoDeSaida","Novo","Carregando","SemRede","ErroDoServidor","SemPermissao","NaoEncontrado","ErroAoSalvar","ErroDaPergunta","SemRedeAoSalvar","Vazio","ListaVazia","ListaSemRede","ListaErroServidor","ListaSemPermissao","ListaArquivadosVazio","ListaCarregando","Arquivar","ArquivarErro","Restaurar","RestaurarErro"];var G,H,J;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "Padrão: lista",
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByRole("region", {
      name: /Roteiros/
    })).toBeInTheDocument();
    await expect((await tela.findAllByText(/contrato novo/)).length).toBeGreaterThan(0);
    await semRotaSemFixture();
  }
}`,...(J=(H=v.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var z,U,M;w.parameters={...w.parameters,docs:{...(z=w.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Editor: subir, descer e publicar",
  args: {
    rotaInicial: EDITOR
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByRole("heading", {
      name: "Consignado · contrato novo",
      level: 2
    })).toBeInTheDocument();
    const antes = resumos(canvasElement);
    await step("Descer p1 troca com a seguinte", async () => {
      await userEvent.click(tela.getByRole("button", {
        name: "Descer p1"
      }));
      await expect(resumos(canvasElement)).toEqual([antes[1], antes[0], ...antes.slice(2)]);
      await expect(ordem(canvasElement).slice(0, 2)).toEqual(["p1", "p2"]);
    });
    await step("Subir p2 desfaz a troca", async () => {
      await userEvent.click(tela.getByRole("button", {
        name: "Subir p2"
      }));
      await expect(resumos(canvasElement)).toEqual(antes);
    });
    await step("Primeira não sobe e última não desce", async () => {
      await expect(tela.getByRole("button", {
        name: "Subir p1"
      })).toBeDisabled();
      await expect(tela.getByRole("button", {
        name: "Descer p6"
      })).toBeDisabled();
    });
    await step("Índice e régua do veredito abrem e fecham", async () => {
      const indice = tela.getByRole("button", {
        name: "Ir para a pergunta"
      });
      if (indice.getAttribute("aria-expanded") === "false") await userEvent.click(indice);
      await expect(indice).toHaveAttribute("aria-expanded", "true");
      const regua = tela.getByRole("button", {
        name: "Como o roteiro vira veredito"
      });
      await userEvent.click(regua);
      await expect(regua).toHaveAttribute("aria-expanded", "true");
      await expect(tela.getByText("Aprova automático")).toBeVisible();
    });
    await step("Expandir todas abre os cartões", async () => {
      await userEvent.click(tela.getByRole("button", {
        name: "Expandir todas"
      }));
      await expect(tela.getByRole("button", {
        name: "Recolher todas"
      })).toBeInTheDocument();
    });
    await step("Publicar cria a v4 e segue no editor", async () => {
      await userEvent.click(tela.getByRole("button", {
        name: "Salvar como nova versão"
      }));
      await expect(await tela.findByText(/Publicado: rot_consignado_novo v4/)).toBeInTheDocument();
    });
    await semRotaSemFixture();
  }
}`,...(M=(U=w.parameters)==null?void 0:U.docs)==null?void 0:M.source}}};var Q,Z,K;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "Editor: aviso de saída",
  args: {
    rotaInicial: EDITOR
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    const pagina = within(canvasElement.ownerDocument.body);
    await expect(await tela.findByRole("heading", {
      name: "Consignado · contrato novo",
      level: 2
    })).toBeInTheDocument();
    await step("Subir e descer de volta não conta como alteração: Voltar sai direto", async () => {
      await userEvent.click(tela.getByRole("button", {
        name: "Descer p1"
      }));
      await userEvent.click(tela.getByRole("button", {
        name: "Subir p2"
      }));
      await userEvent.click(tela.getByRole("link", {
        name: "Voltar para Roteiros"
      }));
      await expect(await tela.findByRole("region", {
        name: /Roteiros/
      })).toBeInTheDocument();
      await expect(pagina.queryByText("Sair sem salvar?")).not.toBeInTheDocument();
    });
    await step("Trocar a ordem e tentar sair pergunta, citando o roteiro", async () => {
      await userEvent.click((await tela.findAllByRole("link", {
        name: /contrato novo/
      }))[0]);
      await expect(await tela.findByRole("heading", {
        name: "Consignado · contrato novo",
        level: 2
      })).toBeInTheDocument();
      await userEvent.click(tela.getByRole("button", {
        name: "Descer p1"
      }));
      await userEvent.click(tela.getByRole("link", {
        name: "Voltar para Roteiros"
      }));
      const modal = within(await pagina.findByRole("dialog", {
        name: "Sair sem salvar?"
      }));
      await expect(modal.getByText(/alterações não salvas em Roteiro “Consignado · contrato novo”/)).toBeInTheDocument();
      await userEvent.click(modal.getByRole("button", {
        name: "Continuar editando"
      }));
      await waitFor(() => expect(pagina.queryByRole("dialog", {
        name: "Sair sem salvar?"
      })).not.toBeInTheDocument());
      await expect(tela.getByRole("heading", {
        name: "Consignado · contrato novo",
        level: 2
      })).toBeInTheDocument();
    });
    await step("Publicar e depois sair não pergunta", async () => {
      await userEvent.click(tela.getByRole("button", {
        name: "Salvar como nova versão"
      }));
      await expect(await tela.findByText(/Publicado: rot_consignado_novo v4/)).toBeInTheDocument();
      await userEvent.click(tela.getByRole("link", {
        name: "Voltar para Roteiros"
      }));
      await expect(await tela.findByRole("region", {
        name: /Roteiros/
      })).toBeInTheDocument();
      await expect(pagina.queryByText("Sair sem salvar?")).not.toBeInTheDocument();
    });
    await semRotaSemFixture();
  }
}`,...(K=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:K.source}}};var Y,W,X;B.parameters={...B.parameters,docs:{...(Y=B.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "Editor: roteiro novo",
  args: {
    rotaInicial: "/roteiros/novo"
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Novo roteiro")).toBeInTheDocument();
    await expect(tela.getByRole("button", {
      name: "Subir p1"
    })).toBeDisabled();
    await expect(tela.getByRole("button", {
      name: "Descer p1"
    })).toBeDisabled();
    await semRotaSemFixture();
  }
}`,...(X=(W=B.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var $,aa,ea;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    rotaInicial: EDITOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      pendurar: [VERSAO]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/Carregando o roteiro/)).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: "Salvar como nova versão"
    })).not.toBeInTheDocument();
  }
}`,...(ea=(aa=g.parameters)==null?void 0:aa.docs)==null?void 0:ea.source}}};var ta,na,oa;x.parameters={...x.parameters,docs:{...(ta=x.parameters)==null?void 0:ta.docs,source:{originalSource:`{
  name: "Erro de rede: sem editor",
  args: {
    rotaInicial: EDITOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      semRede: [VERSAO]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/Não foi possível carregar o roteiro/)).toBeInTheDocument();
    await expect(tela.queryByText(/Carregando o roteiro/)).not.toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: "Salvar como nova versão"
    })).not.toBeInTheDocument();
    await userEvent.click(tela.getByRole("button", {
      name: "Tentar de novo"
    }));
    await expect(await tela.findByText(/Não foi possível carregar o roteiro/)).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(oa=(na=x.parameters)==null?void 0:na.docs)==null?void 0:oa.source}}};var ra,ia,sa;E.parameters={...E.parameters,docs:{...(ra=E.parameters)==null?void 0:ra.docs,source:{originalSource:`{
  name: "Erro do servidor",
  args: {
    rotaInicial: EDITOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      falhar: [VERSAO]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/O servidor teve um problema ao carregar o roteiro/)).toBeInTheDocument();
    await expect(tela.queryByText(/api falsa/)).not.toBeInTheDocument();
    await expect(tela.getByRole("button", {
      name: "Tentar de novo"
    })).toBeInTheDocument();
    await expect(tela.getByRole("link", {
      name: "Voltar para Roteiros"
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(sa=(ia=E.parameters)==null?void 0:ia.docs)==null?void 0:sa.source}}};var ca,la,ma;T.parameters={...T.parameters,docs:{...(ca=T.parameters)==null?void 0:ca.docs,source:{originalSource:`{
  name: "Erro: sem permissão",
  args: {
    rotaInicial: EDITOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [VERSAO]: {
          status: 403,
          corpo: {
            erro: "sem permissão"
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText(/não tem permissão para ver o roteiro/)).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: "Tentar de novo"
    })).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(ma=(la=T.parameters)==null?void 0:la.docs)==null?void 0:ma.source}}};var ua,da,pa;R.parameters={...R.parameters,docs:{...(ua=R.parameters)==null?void 0:ua.docs,source:{originalSource:`{
  name: "Erro: não encontrado",
  args: {
    rotaInicial: "/roteiros/editar/rot_inexistente/1"
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Roteiro não encontrado.")).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: "Tentar de novo"
    })).not.toBeInTheDocument();
    await userEvent.click(tela.getByRole("button", {
      name: "Voltar à lista"
    }));
    await expect(await tela.findByRole("region", {
      name: /Roteiros/
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(pa=(da=R.parameters)==null?void 0:da.docs)==null?void 0:pa.source}}};var va,wa,ya;b.parameters={...b.parameters,docs:{...(va=b.parameters)==null?void 0:va.docs,source:{originalSource:`{
  name: "Erro ao salvar: frase legível",
  args: {
    rotaInicial: EDITOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [PUBLICAR]: {
          status: 400,
          corpo: {
            detalhe: {
              campo: "perguntas",
              codigo: 17
            }
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
      name: "Salvar como nova versão"
    }));
    const alerta = await tela.findByRole("alert");
    await expect(alerta).toHaveTextContent("O servidor recusou o roteiro. Revise as perguntas e tente de novo.");
    await expect(alerta.textContent).not.toMatch(/[{}]|codigo/);
    await semRotaSemFixture();
  }
}`,...(ya=(wa=b.parameters)==null?void 0:wa.docs)==null?void 0:ya.source}}};var Ba,ga,xa;D.parameters={...D.parameters,docs:{...(Ba=D.parameters)==null?void 0:Ba.docs,source:{originalSource:`{
  name: "Erro ao salvar: no cartão da pergunta",
  args: {
    rotaInicial: EDITOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [PUBLICAR]: {
          status: 400,
          corpo: {
            erro: "p2: negativa ativa sem \\"mensagem\\", escreva o que a assistente fala no não"
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
      name: "Salvar como nova versão"
    }));
    const alerta = await tela.findByRole("alert");
    await expect(alerta).toHaveTextContent(/p2: negativa ativa/);
    await waitFor(() => expect(alerta.closest(".pergunta-cartao")).not.toBeNull());
    await expect(within(alerta.closest(".pergunta-cartao") as HTMLElement).getByText("p2", {
      selector: ".pid"
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(xa=(ga=D.parameters)==null?void 0:ga.docs)==null?void 0:xa.source}}};var Ea,Ta,Ra;I.parameters={...I.parameters,docs:{...(Ea=I.parameters)==null?void 0:Ea.docs,source:{originalSource:`{
  name: "Erro ao salvar: sem conexão",
  args: {
    rotaInicial: EDITOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      semRede: [PUBLICAR]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await userEvent.click(await tela.findByRole("button", {
      name: "Salvar como nova versão"
    }));
    await expect(await tela.findByRole("alert")).toHaveTextContent(/Sem conexão\\. Seu roteiro continua aqui/);
    await expect(tela.getByRole("button", {
      name: "Salvar como nova versão"
    })).toBeEnabled();
    await semRotaSemFixture();
  }
}`,...(Ra=(Ta=I.parameters)==null?void 0:Ta.docs)==null?void 0:Ra.source}}};var ba,Da,Ia;f.parameters={...f.parameters,docs:{...(ba=f.parameters)==null?void 0:ba.docs,source:{originalSource:`{
  name: "Vazio: roteiro sem perguntas",
  args: {
    rotaInicial: EDITOR
  },
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [VERSAO]: {
          status: 200,
          corpo: {
            id: "rot_consignado_novo",
            versao: 3,
            convenio: "Consignado",
            produto: "contrato novo",
            perguntas: []
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("0 perguntas")).toBeInTheDocument();
    await userEvent.click(tela.getByRole("button", {
      name: /Adicionar pergunta.*entra como p1/
    }));
    await expect(tela.getByRole("button", {
      name: "Subir p1"
    })).toBeDisabled();
    await semRotaSemFixture();
  }
}`,...(Ia=(Da=f.parameters)==null?void 0:Da.docs)==null?void 0:Ia.source}}};var fa,Sa,ha;S.parameters={...S.parameters,docs:{...(fa=S.parameters)==null?void 0:fa.docs,source:{originalSource:`{
  name: "Vazio: nenhum roteiro",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        "GET /v1/roteiros": {
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
    await expect(await tela.findByText("Nenhum roteiro ainda")).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(ha=(Sa=S.parameters)==null?void 0:Sa.docs)==null?void 0:ha.source}}};var Aa,Oa,qa;h.parameters={...h.parameters,docs:{...(Aa=h.parameters)==null?void 0:Aa.docs,source:{originalSource:`{
  name: "Erro: lista sem conexão",
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
    await expect(await tela.findByText("Não foi possível carregar os roteiros. Verifique a conexão e tente de novo.")).toBeVisible();
    await expect(tela.getByRole("button", {
      name: "Tentar de novo"
    })).toBeVisible();
    await expect(tela.getByText("Lista indisponível no momento")).toBeInTheDocument();
  }
}`,...(qa=(Oa=h.parameters)==null?void 0:Oa.docs)==null?void 0:qa.source}}};var Ca,ka,Va;A.parameters={...A.parameters,docs:{...(Ca=A.parameters)==null?void 0:Ca.docs,source:{originalSource:`{
  name: "Erro: servidor na lista",
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
    await expect(await tela.findByText("O servidor teve um problema ao carregar os roteiros. Tente de novo em instantes.")).toBeVisible();
    await expect(tela.queryByText(/HTTP|api falsa/)).not.toBeInTheDocument();
    await expect(tela.getByRole("button", {
      name: "Tentar de novo"
    })).toBeVisible();
  }
}`,...(Va=(ka=A.parameters)==null?void 0:ka.docs)==null?void 0:Va.source}}};var _a,Na,La;O.parameters={...O.parameters,docs:{...(_a=O.parameters)==null?void 0:_a.docs,source:{originalSource:`{
  name: "Erro: sem permissão para a lista",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [LISTA]: {
          status: 403,
          corpo: {
            erro: "seu perfil não tem esta permissão"
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Seu usuário não tem permissão para ver os roteiros.")).toBeVisible();
    await expect(tela.queryByRole("button", {
      name: "Tentar de novo"
    })).not.toBeInTheDocument();
  }
}`,...(La=(Na=O.parameters)==null?void 0:Na.docs)==null?void 0:La.source}}};var ja,Pa,Fa;q.parameters={...q.parameters,docs:{...(ja=q.parameters)==null?void 0:ja.docs,source:{originalSource:`{
  name: "Vazio: nenhum roteiro arquivado",
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await userEvent.click(await tela.findByRole("button", {
      name: /^Arquivados/
    }));
    const titulo = await tela.findByText("Nenhum roteiro arquivado");
    await expect(titulo).toBeVisible();
    await expect(titulo.parentElement).not.toHaveTextContent(/Arquivados/);
    await expect(tela.queryByRole("button", {
      name: "Limpar"
    })).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(Fa=(Pa=q.parameters)==null?void 0:Pa.docs)==null?void 0:Fa.source}}};var Ga,Ha,Ja;C.parameters={...C.parameters,docs:{...(Ga=C.parameters)==null?void 0:Ga.docs,source:{originalSource:`{
  name: "Carregando: lista",
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
    await expect(await tela.findByText("Carregando…")).toBeVisible();
    await expect(tela.getByText("Carregando roteiros…")).toBeInTheDocument();
    await expect(tela.queryByText(/contrato novo/)).not.toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: "Tentar de novo"
    })).not.toBeInTheDocument();
  }
}`,...(Ja=(Ha=C.parameters)==null?void 0:Ha.docs)==null?void 0:Ja.source}}};var za,Ua,Ma;k.parameters={...k.parameters,docs:{...(za=k.parameters)==null?void 0:za.docs,source:{originalSource:`{
  name: "Arquivar: confirma e avisa",
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    const dialogo = await abrirArquivarNaLista(canvasElement);
    await expect(dialogo).toHaveTextContent("Arquivar “Consignado · contrato novo”?");
    await expect(dialogo).not.toHaveTextContent("rot_consignado_novo");
    await userEvent.click(within(dialogo).getByRole("button", {
      name: "Arquivar"
    }));
    await expect(await tela.findByText("Roteiro arquivado. As sessões antigas continuam íntegras.")).toBeVisible();
    await waitFor(() => expect(tela.queryByRole("dialog", {
      name: "Arquivar roteiro?"
    })).not.toBeInTheDocument());
    await semRotaSemFixture();
  }
}`,...(Ma=(Ua=k.parameters)==null?void 0:Ua.docs)==null?void 0:Ma.source}}};var Qa,Za,Ka;V.parameters={...V.parameters,docs:{...(Qa=V.parameters)==null?void 0:Qa.docs,source:{originalSource:`{
  name: "Arquivar: erro do servidor no diálogo",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      falhar: [ARQUIVAR]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const dialogo = await abrirArquivarNaLista(canvasElement);
    await userEvent.click(within(dialogo).getByRole("button", {
      name: "Arquivar"
    }));
    await expect(await within(dialogo).findByText("O servidor teve um problema ao arquivar o roteiro. Tente de novo em instantes.")).toBeVisible();
    await expect(dialogo).not.toHaveTextContent(/api falsa|Erro interno/);
  }
}`,...(Ka=(Za=V.parameters)==null?void 0:Za.docs)==null?void 0:Ka.source}}};var Ya,Wa,Xa;_.parameters={..._.parameters,docs:{...(Ya=_.parameters)==null?void 0:Ya.docs,source:{originalSource:`{
  name: "Restaurar: volta para os ativos",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [LISTA]: {
          status: 200,
          corpo: COM_ARQUIVADO
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await userEvent.click(await botaoRestaurarNaLista(canvasElement));
    await expect(await tela.findByText("Roteiro restaurado.")).toBeVisible();
  }
}`,...(Xa=(Wa=_.parameters)==null?void 0:Wa.docs)==null?void 0:Xa.source}}};var $a,ae,ee;N.parameters={...N.parameters,docs:{...($a=N.parameters)==null?void 0:$a.docs,source:{originalSource:`{
  name: "Restaurar: erro do servidor visível",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [LISTA]: {
          status: 200,
          corpo: COM_ARQUIVADO
        }
      },
      falhar: [RESTAURAR]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await userEvent.click(await botaoRestaurarNaLista(canvasElement));
    const alerta = await tela.findByText("O servidor teve um problema ao restaurar o roteiro. Tente de novo em instantes.");
    await expect(alerta).toBeVisible();
    await expect(tela.queryByText(/api falsa|Erro interno/)).not.toBeInTheDocument();
  }
}`,...(ee=(ae=N.parameters)==null?void 0:ae.docs)==null?void 0:ee.source}}};export{k as Arquivar,V as ArquivarErro,y as AvisoDeSaida,g as Carregando,w as Editor,b as ErroAoSalvar,D as ErroDaPergunta,E as ErroDoServidor,q as ListaArquivadosVazio,C as ListaCarregando,A as ListaErroServidor,O as ListaSemPermissao,h as ListaSemRede,S as ListaVazia,R as NaoEncontrado,B as Novo,v as Padrao,_ as Restaurar,N as RestaurarErro,T as SemPermissao,x as SemRede,I as SemRedeAoSalvar,f as Vazio,_e as __namedExportsOrder,Ve as default};
