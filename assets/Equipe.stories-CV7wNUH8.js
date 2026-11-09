import{C as d,m as oe}from"./jornadaGestao-CLyC2Kwj.js";import{t as l,d as w,s as m}from"./jornadaOperar-BSpzphu5.js";import"./ShellJornada-dQtjvzoK.js";import"./jsx-runtime-BxkmYOhx.js";import"./iframe-CvwGTwxb.js";import"./preload-helper-D6kgxu3v.js";import"./dadosShell-CdtDdZjS.js";import"./index-Bk9tc66v.js";import"./index-C7gLAnno.js";import"./v2-BKgx1C0D.js";import"./index-B_TEXOCW.js";import"./api-CwvJBfED.js";import"./index-BxX8puOH.js";import"./marca-IZ8R_8pg.js";import"./carregando-CLNuqGFU.js";import"./celulas-BKlXq2YF.js";/* empty css              */import"./CartaoKpi-D8GTFk0D.js";import"./MiniBarras-CuGgzhOK.js";import"./cores-D-iLqYVd.js";import"./Login-RcCxCUCc.js";import"./etapas-DMOYpc72.js";/* empty css                */import"./ShellGestao-BC58C0k_.js";const{expect:a,userEvent:r,waitFor:p,within:s}=__STORYBOOK_MODULE_TEST__,ne=oe("/usuarios",'Jornada da Equipe dentro do shell: lista de usuários com o ⋯ por linha, edição com perfil de acesso, grupo e ajustes individuais (o que difere do grupo leva o selo "ajuste"), e a aba Permissionamento com os grupos. Lista e grupos com falha dizem o que houve e oferecem Tentar de novo.'),L="GET /v1/usuarios",H="GET /v1/grupos-permissao",J="POST /v1/usuarios",ae="Descartar o novo usuário?";async function g(o,e=!0){await o.findAllByText("Bruno Siqueira"),await r.click(o.getAllByRole("button",{name:/Novo usuário/})[0]);const t=await o.findByRole("dialog",{name:"Novo usuário"});return e&&await s(t).findByRole("button",{name:/^Supervisão/}),t}async function _(o){const e=s(o);await w(e.getByLabelText(/^Nome completo/),"Ana Lima"),await w(e.getByLabelText(/^E-mail/),"ana.lima@exemplo.com"),await w(e.getByLabelText(/^Senha/),"Senha1234")}function ie(o){const e=globalThis.fetch,t=(n,i)=>{const c=typeof n=="string"?n:n instanceof URL?n.href:n.url;return((i==null?void 0:i.method)??"GET")==="POST"&&/\/v1\/usuarios(\?|$)/.test(c)&&(o.total+=1),e(n,i)};return globalThis.fetch=t,()=>{globalThis.fetch===t&&(globalThis.fetch=e)}}async function V(o){await o.findAllByText("Bruno Siqueira"),await r.click(o.getByRole("button",{name:"Mais ações de Bruno Siqueira"}));const e=s(await o.findByRole("menu"));await r.click(e.getByRole("menuitem",{name:/Editar/}));const t=await o.findByRole("dialog",{name:"Editar usuário"});return await s(t).findByRole("button",{name:/^Supervisão/}),t}async function ee(o){await a(document.documentElement.scrollWidth).toBeLessThanOrEqual(window.innerWidth);const e=o.getBoundingClientRect().right+.5,t=[...o.querySelectorAll("*")].filter(n=>n.getBoundingClientRect().right>e);await a(t.map(n=>n.className||n.tagName)).toEqual([])}async function te(o){const e=s(await o.findByRole("group",{name:"Visão da equipe"}));await r.click(e.getByRole("button",{name:"Permissionamento"}))}const Ne={title:"Jornadas/Equipe",...ne},x={name:"Padrão",play:async({canvasElement:o,step:e})=>{const t=l(o);await a((await t.findAllByText("Bruno Siqueira")).length).toBeGreaterThan(0),await e("Editar de Bruno Siqueira abre a gaveta com o perfil de acesso",async()=>{const n=await V(t);await a(await s(n).findByRole("group",{name:"Perfil de acesso"})).toBeInTheDocument()}),await e("Ajustes individuais é disclosure (aria-expanded) e mostra o selo ajuste no que difere do grupo",async()=>{const n=s(t.getByRole("dialog",{name:"Editar usuário"})),i=await n.findByRole("button",{name:"Ajustes individuais"});await a(i).toHaveAttribute("aria-expanded","false"),await r.click(i),await a(i).toHaveAttribute("aria-expanded","true"),await a((await n.findAllByText("ajuste")).length).toBeGreaterThan(0)}),await m()}},E={name:"Permissionamento: grupos",play:async({canvasElement:o})=>{const e=l(o),t=s(await e.findByRole("group",{name:"Visão da equipe"}));await r.click(t.getByRole("button",{name:"Permissionamento"})),await a(await e.findByText("2 grupos de permissão")).toBeInTheDocument(),await m()}},h={name:"Permissionamento: editar grupo",play:async({canvasElement:o,step:e})=>{const t=l(o),n=s(await t.findByRole("group",{name:"Visão da equipe"}));await r.click(n.getByRole("button",{name:"Permissionamento"})),await r.click((await t.findAllByRole("button",{name:"Editar Supervisão"}))[0]);const i=s(await t.findByRole("dialog"));await e("a matriz agrupa as ações por módulo, com o nome do módulo como legenda",async()=>{await a(i.getByText("Editar grupo: Supervisão")).toBeInTheDocument();const c=i.getByRole("group",{name:"Sessões"});await a(c.tagName).toBe("FIELDSET"),await a(c.querySelector("legend")).toHaveTextContent("Sessões"),await a(i.getByRole("group",{name:"Atendentes"})).toBeInTheDocument()}),await e("marcar uma permissão e salvar fecha o modal",async()=>{const c=s(i.getByRole("group",{name:"Sessões"})).getByRole("checkbox",{name:"Revisar sessões"});await a(c).not.toBeChecked(),await r.click(c),await a(c).toBeChecked(),await r.click(i.getByRole("button",{name:"Salvar grupo"})),await p(()=>a(t.queryByRole("dialog")).not.toBeInTheDocument())}),await m()}},R={parameters:{jornada:{...d,pendurar:[L]}},play:async({canvasElement:o})=>{const e=l(o);await a(await e.findByText("Carregando usuários…")).toBeInTheDocument(),await a(e.getByText("Carregando…")).toBeInTheDocument()}},b={name:"Erro: lista de usuários",parameters:{jornada:{...d,falhar:[L]}},play:async({canvasElement:o})=>{const e=l(o);await a(await e.findByText("O servidor teve um problema ao carregar os usuários. Tente de novo em instantes.")).toBeInTheDocument(),await a(e.queryByText(/HTTP 500/)).not.toBeInTheDocument(),await a(e.getByText("Lista indisponível no momento")).toBeInTheDocument(),await a(e.getByRole("button",{name:/Tentar de novo/})).toBeInTheDocument(),await m()}},T={name:"Erro de rede: grupos de permissão",parameters:{jornada:{...d,semRede:[H]}},play:async({canvasElement:o})=>{const e=l(o),t=s(await e.findByRole("group",{name:"Visão da equipe"}));await r.click(t.getByRole("button",{name:"Permissionamento"})),await a(await e.findByText("Não foi possível carregar os grupos de permissão. Verifique a conexão e tente de novo.")).toBeInTheDocument(),await r.click(e.getByRole("button",{name:/Tentar de novo/})),await a(await e.findByText(/Não foi possível carregar os grupos de permissão/)).toBeInTheDocument(),await m()}},f={name:"Vazio: nenhum usuário",parameters:{jornada:{...d,respostas:{[L]:{status:200,corpo:[]}}}},play:async({canvasElement:o})=>{const e=l(o);await a(await e.findByText("Nenhum usuário ainda")).toBeInTheDocument(),await m()}},S={name:"Novo usuário: criar",play:async({canvasElement:o,step:e})=>{const t=l(o),n=await g(t),i=s(n);await e("a gaveta traz o Perfil de acesso com rótulo visível e os grupos com descrição",async()=>{await a(i.getByText("Perfil de acesso",{selector:"[aria-hidden='true']"})).toBeVisible(),await a(i.getByRole("button",{name:/^Supervisão/})).toHaveTextContent("Acompanha a operação e revisa sessões."),await a(i.getByRole("button",{name:/^Admin/})).toHaveAttribute("aria-pressed","false")}),await e("Mostrar senha alterna o tipo do campo",async()=>{const c=i.getByRole("button",{name:"Mostrar senha"});await r.click(c),await a(c).toHaveAttribute("aria-pressed","true"),await a(i.getByLabelText(/^Senha/)).toHaveAttribute("type","text")}),await e("preencher, escolher Supervisão e criar fecha a gaveta e a pessoa entra na lista",async()=>{await _(n),await r.click(i.getByRole("button",{name:/^Supervisão/})),await r.click(i.getByRole("button",{name:"Criar usuário"})),await p(()=>a(t.queryByRole("dialog",{name:"Novo usuário"})).not.toBeInTheDocument()),await a((await t.findAllByText("Ana Lima")).length).toBeGreaterThan(0)}),await m()}},D={name:"Novo usuário: e-mail já cadastrado (409)",parameters:{jornada:{...d,respostas:{[J]:{status:409,corpo:{erro:"já existe usuário com esse e-mail"}}}}},play:async({canvasElement:o})=>{const e=l(o),t=await g(e),n=s(t);await _(t),await r.click(n.getByRole("button",{name:"Criar usuário"})),await a(await n.findByText("Já existe usuário com esse e-mail.")).toBeInTheDocument();const i=n.getByLabelText(/^E-mail/);await p(()=>a(i).toHaveFocus()),await a(i).toHaveAttribute("aria-invalid","true"),await a(e.getByRole("dialog",{name:"Novo usuário"})).toBeInTheDocument(),await m()}},I={name:"Novo usuário: descartar o que foi digitado",play:async({canvasElement:o,step:e})=>{const t=l(o),n=await g(t),i=s(n);await e("só trocar o perfil e fechar não pede descarte",async()=>{await r.click(i.getByRole("button",{name:/^Admin/})),await r.keyboard("{Escape}"),await p(()=>a(t.queryByRole("dialog",{name:"Novo usuário"})).not.toBeInTheDocument())}),await e("com nome digitado, Esc pede 'Descartar o novo usuário?' com foco em Continuar editando",async()=>{const c=s(await g(t));await w(c.getByLabelText(/^Nome completo/),"Ana"),await r.keyboard("{Escape}");const u=await t.findByRole("dialog",{name:ae});await a(s(u).getByRole("button",{name:"Continuar editando"})).toHaveFocus(),await r.click(s(u).getByRole("button",{name:"Descartar"})),await p(()=>a(t.queryByRole("dialog",{name:"Novo usuário"})).not.toBeInTheDocument())}),await m()}},A={name:"Novo usuário: sem rede ao criar",parameters:{jornada:{...d,semRede:[J]}},play:async({canvasElement:o})=>{const e=l(o),t=await g(e),n=s(t);await _(t),await r.click(n.getByRole("button",{name:"Criar usuário"})),await a(await n.findByText(/O usuário pode ter sido criado: confira a lista antes de tentar de novo/)).toBeInTheDocument(),await a(n.getByRole("button",{name:"Criar usuário"})).toBeEnabled(),await a(n.getByLabelText(/^Nome completo/)).toHaveValue("Ana Lima"),await m()}},N={name:"Novo usuário: enviando (um POST só)",parameters:{jornada:{...d,pendurar:[J]}},play:async({canvasElement:o})=>{const e=l(o),t={total:0},n=ie(t);try{const i=await g(e),c=s(i);await _(i);const u=c.getByRole("button",{name:"Criar usuário"});await r.dblClick(u);const B=await c.findByRole("button",{name:"Criando…"});await a(B).toBeDisabled(),await a(B).toHaveAttribute("aria-busy","true"),await a(c.getByRole("button",{name:"Cancelar"})).toBeDisabled(),await r.keyboard("{Escape}"),await a(e.getByRole("dialog",{name:"Novo usuário"})).toBeInTheDocument(),await a(e.queryByRole("dialog",{name:ae})).not.toBeInTheDocument(),await a(t.total).toBe(1)}finally{n()}await m()}},k={name:"Novo usuário: grupos com erro",parameters:{jornada:{...d,falhar:[H]}},play:async({canvasElement:o})=>{const e=l(o),t=await g(e,!1),n=s(t);await a(await n.findByText(/O servidor teve um problema ao carregar os grupos de permissão/)).toBeInTheDocument();const i=n.getByRole("button",{name:"Criar usuário"});await a(i).toBeDisabled(),await a(i.getAttribute("aria-describedby")).toBeTruthy(),await a(n.getByRole("button",{name:"Tentar de novo"})).toBeInTheDocument(),await a(n.getByRole("button",{name:/^Admin/})).toBeInTheDocument(),await m()}},C={name:"Novo usuário: super escolhe a empresa",parameters:{jornada:{...d,sessao:{papel:"super"}}},play:async({canvasElement:o})=>{const e=l(o);await r.click((await e.findAllByRole("button",{name:/Novo usuário/}))[0]);const t=await e.findByRole("dialog",{name:"Novo usuário"}),n=s(t);await a(await n.findByText("Escolha a empresa acima para ver os grupos de permissão dela.")).toBeInTheDocument(),await r.click(await n.findByRole("button",{name:"Boreal Consignados"})),await a(await n.findByRole("button",{name:/^Supervisão/})).toBeInTheDocument(),await a(n.getByRole("button",{name:/^Super admin/})).toBeInTheDocument(),await m()}},O={name:"Sem permissão: lista de usuários (403)",parameters:{jornada:{...d,respostas:{[L]:{status:403,corpo:{erro:"apenas administradores"}}}}},play:async({canvasElement:o})=>{const e=l(o);await a(await e.findByText("Apenas administradores acessam esta página.")).toBeInTheDocument(),await a(e.queryByRole("button",{name:/Tentar de novo/})).not.toBeInTheDocument(),await m()}},q={name:"Permissionamento: nenhum grupo",parameters:{jornada:{...d,respostas:{[H]:{status:200,corpo:[]}}}},play:async({canvasElement:o})=>{const e=l(o);await te(e),await a((await e.findAllByRole("button",{name:/Novo grupo/})).length).toBeGreaterThan(0),await m()}},F={name:"Permissionamento: novo grupo",play:async({canvasElement:o,step:e})=>{const t=l(o);await te(t),await t.findByText("2 grupos de permissão"),await r.click(t.getAllByRole("button",{name:/Novo grupo/})[0]),await t.findByRole("dialog",{name:"Novo grupo de permissão"}),await e("abrir e fechar sem mexer não pede descarte",async()=>{await r.keyboard("{Escape}"),await p(()=>a(t.queryByRole("dialog",{name:"Novo grupo de permissão"})).not.toBeInTheDocument())}),await e("só a matriz marcada já pede descarte",async()=>{await r.click(t.getAllByRole("button",{name:/Novo grupo/})[0]);const n=s(await t.findByRole("dialog",{name:"Novo grupo de permissão"}));await r.click(s(n.getByRole("group",{name:"Sessões"})).getByRole("checkbox",{name:"Revisar sessões"})),await r.keyboard("{Escape}");const i=await t.findByRole("dialog",{name:"Descartar o grupo?"});await r.click(s(i).getByRole("button",{name:"Continuar editando"})),await w(n.getByRole("textbox",{name:/^Nome do grupo/}),"Plantão"),await r.click(n.getByRole("button",{name:"Salvar grupo"})),await p(()=>a(t.queryByRole("dialog",{name:"Novo grupo de permissão"})).not.toBeInTheDocument())}),await m()}},G={name:"Novo usuário: grupos carregando",parameters:{jornada:{...d,pendurar:[H]}},play:async({canvasElement:o})=>{const e=l(o),t=await g(e,!1),n=s(t);await a(await n.findByText("Carregando os grupos…")).toBeInTheDocument(),await a(n.getByRole("button",{name:"Criar usuário"})).toBeDisabled()}},P={name:"Editar usuário: sem mudança",play:async({canvasElement:o,step:e})=>{const t=l(o),n=await V(t),i=s(n);await e("abrir sem mexer deixa Salvar desabilitado; e-mail igual com outra caixa continua limpo",async()=>{await a(i.getByRole("button",{name:"Salvar"})).toBeDisabled();const c=i.getByLabelText(/^E-mail/);await r.clear(c),await w(c,"Bruno.Siqueira@example.com"),await a(i.getByRole("button",{name:"Salvar"})).toBeDisabled()}),await e("Esc sem mudança fecha direto, sem pedir descarte",async()=>{await r.keyboard("{Escape}"),await p(()=>a(t.queryByRole("dialog",{name:"Editar usuário"})).not.toBeInTheDocument()),await a(document.body.style.overflow).toBe("")}),await m()}},j={name:"Editar usuário: confirmação por cima",play:async({canvasElement:o,step:e})=>{const t=l(o),n=await V(t),i=s(n),c={total:0},u=globalThis.fetch,B=(y,v)=>(((v==null?void 0:v.method)??"GET").toUpperCase()==="PUT"&&(c.total+=1),u(y,v));globalThis.fetch=B;try{await e("trocar o e-mail e Salvar abre a confirmação por cima; nada vai ao servidor",async()=>{const y=i.getByLabelText(/^E-mail/);await r.clear(y),await w(y,"bruno.novo@example.com"),await r.click(i.getByRole("button",{name:"Salvar"})),await t.findByRole("dialog",{name:"Trocar o e-mail de acesso?"}),await a(t.getByRole("dialog",{name:"Editar usuário"})).toBeInTheDocument(),await a(c.total).toBe(0)}),await e("Esc fecha só a confirmação e o e-mail digitado fica",async()=>{await r.keyboard("{Escape}"),await p(()=>a(t.queryByRole("dialog",{name:"Trocar o e-mail de acesso?"})).not.toBeInTheDocument()),await a(i.getByLabelText(/^E-mail/)).toHaveValue("bruno.novo@example.com"),await a(document.body.style.overflow).toBe("hidden")}),await e("sem rolagem lateral na gaveta",async()=>{await ee(n)}),await e("confirmar troca o e-mail, fecha as duas e solta o body",async()=>{await r.click(i.getByRole("button",{name:"Salvar"}));const y=s(await t.findByRole("dialog",{name:"Trocar o e-mail de acesso?"}));await r.click(y.getByRole("button",{name:"Trocar e-mail"})),await p(()=>a(t.queryByRole("dialog",{name:"Editar usuário"})).not.toBeInTheDocument()),await a(c.total).toBe(1),await a(await t.findByText("E-mail de acesso trocado para bruno.novo@example.com.")).toBeInTheDocument(),await a(document.body.style.overflow).toBe("")})}finally{globalThis.fetch===B&&(globalThis.fetch=u)}await m()}},U={name:"Editar usuário: senha temporária",parameters:{jornada:{...d,respostas:{"GET /v1/auth/config":{status:200,corpo:{cognito:!0}}}}},play:async({canvasElement:o,step:e})=>{const t=l(o),n=await V(t),i=s(n);await e("a seção Senha avisa que a atual deixa de valer; Redefinir senha pede confirmação por cima",async()=>{const c=s(i.getByRole("region",{name:"Senha"}));await a(c.getByText("A senha atual deixa de valer na hora.")).toBeInTheDocument(),await r.click(c.getByRole("button",{name:"Redefinir senha"}));const u=s(await t.findByRole("dialog",{name:"Gerar senha temporária?"}));await r.click(u.getByRole("button",{name:"Gerar senha"}))}),await e("a senha gerada aparece por cima da gaveta, com copiar de 48px e sem rolagem lateral",async()=>{const c=await t.findByRole("dialog",{name:"Senha temporária gerada"}),u=s(c);await a(u.getByText("SENHA-FICTICIA")).toBeInTheDocument(),await a(u.getByText("bruno.siqueira@example.com")).toBeInTheDocument(),await a(u.getByRole("button",{name:"copiar"}).getBoundingClientRect().height).toBeGreaterThanOrEqual(44),await ee(c),await r.click(u.getAllByRole("button",{name:"Fechar"}).at(-1)),await p(()=>a(t.queryByRole("dialog",{name:"Senha temporária gerada"})).not.toBeInTheDocument()),await a(t.getByRole("dialog",{name:"Editar usuário"})).toBeInTheDocument(),await a(document.body.style.overflow).toBe("hidden")}),await e("Cancelar fecha a gaveta e solta o body",async()=>{await r.click(i.getByRole("button",{name:"Cancelar"})),await p(()=>a(t.queryByRole("dialog",{name:"Editar usuário"})).not.toBeInTheDocument()),await a(document.body.style.overflow).toBe("")}),await m()}},ke=["Padrao","Permissionamento","EditarGrupo","Carregando","Erro","ErroGrupos","Vazio","NovoUsuario","NovoUsuarioErro","NovoUsuarioDescartar","NovoUsuarioSemRede","NovoUsuarioEnviando","NovoUsuarioGruposErro","NovoUsuarioSuper","SemPermissao","PermissionamentoVazio","GrupoNovo","GruposCarregando","EditarSemMudanca","EditarConfirmacao","SenhaGerada"];var z,M,W;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Padrão",
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await expect((await tela.findAllByText("Bruno Siqueira")).length).toBeGreaterThan(0);
    await step("Editar de Bruno Siqueira abre a gaveta com o perfil de acesso", async () => {
      const gaveta = await abrirEdicaoDoBruno(tela);
      await expect(await within(gaveta).findByRole("group", {
        name: "Perfil de acesso"
      })).toBeInTheDocument();
    });
    await step("Ajustes individuais é disclosure (aria-expanded) e mostra o selo ajuste no que difere do grupo", async () => {
      const gaveta = within(tela.getByRole("dialog", {
        name: "Editar usuário"
      }));
      const ajustes = await gaveta.findByRole("button", {
        name: "Ajustes individuais"
      });
      await expect(ajustes).toHaveAttribute("aria-expanded", "false");
      await userEvent.click(ajustes);
      await expect(ajustes).toHaveAttribute("aria-expanded", "true");
      await expect((await gaveta.findAllByText("ajuste")).length).toBeGreaterThan(0);
    });
    await semRotaSemFixture();
  }
}`,...(W=(M=x.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var K,Y,$;E.parameters={...E.parameters,docs:{...(K=E.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "Permissionamento: grupos",
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    const visao = within(await tela.findByRole("group", {
      name: "Visão da equipe"
    }));
    await userEvent.click(visao.getByRole("button", {
      name: "Permissionamento"
    }));
    await expect(await tela.findByText("2 grupos de permissão")).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...($=(Y=E.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var Q,X,Z;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "Permissionamento: editar grupo",
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    const visao = within(await tela.findByRole("group", {
      name: "Visão da equipe"
    }));
    await userEvent.click(visao.getByRole("button", {
      name: "Permissionamento"
    }));
    await userEvent.click((await tela.findAllByRole("button", {
      name: "Editar Supervisão"
    }))[0]);
    const dialogo = within(await tela.findByRole("dialog"));
    await step("a matriz agrupa as ações por módulo, com o nome do módulo como legenda", async () => {
      await expect(dialogo.getByText("Editar grupo: Supervisão")).toBeInTheDocument();
      const sessoes = dialogo.getByRole("group", {
        name: "Sessões"
      });
      await expect(sessoes.tagName).toBe("FIELDSET");
      await expect(sessoes.querySelector("legend")).toHaveTextContent("Sessões");
      await expect(dialogo.getByRole("group", {
        name: "Atendentes"
      })).toBeInTheDocument();
    });
    await step("marcar uma permissão e salvar fecha o modal", async () => {
      const revisar = within(dialogo.getByRole("group", {
        name: "Sessões"
      })).getByRole("checkbox", {
        name: "Revisar sessões"
      });
      await expect(revisar).not.toBeChecked();
      await userEvent.click(revisar);
      await expect(revisar).toBeChecked();
      await userEvent.click(dialogo.getByRole("button", {
        name: "Salvar grupo"
      }));
      await waitFor(() => expect(tela.queryByRole("dialog")).not.toBeInTheDocument());
    });
    await semRotaSemFixture();
  }
}`,...(Z=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var aa,ea,ta;R.parameters={...R.parameters,docs:{...(aa=R.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      pendurar: [USUARIOS]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Carregando usuários…")).toBeInTheDocument();
    await expect(tela.getByText("Carregando…")).toBeInTheDocument();
  }
}`,...(ta=(ea=R.parameters)==null?void 0:ea.docs)==null?void 0:ta.source}}};var oa,na,ia;b.parameters={...b.parameters,docs:{...(oa=b.parameters)==null?void 0:oa.docs,source:{originalSource:`{
  name: "Erro: lista de usuários",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      falhar: [USUARIOS]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    // P1/A9 (cartão 10): frase de textoDaFalha, sem o status cru
    await expect(await tela.findByText("O servidor teve um problema ao carregar os usuários. Tente de novo em instantes.")).toBeInTheDocument();
    await expect(tela.queryByText(/HTTP 500/)).not.toBeInTheDocument();
    await expect(tela.getByText("Lista indisponível no momento")).toBeInTheDocument();
    await expect(tela.getByRole("button", {
      name: /Tentar de novo/
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(ia=(na=b.parameters)==null?void 0:na.docs)==null?void 0:ia.source}}};var ra,sa,ca;T.parameters={...T.parameters,docs:{...(ra=T.parameters)==null?void 0:ra.docs,source:{originalSource:`{
  name: "Erro de rede: grupos de permissão",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      semRede: [GRUPOS]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    const visao = within(await tela.findByRole("group", {
      name: "Visão da equipe"
    }));
    await userEvent.click(visao.getByRole("button", {
      name: "Permissionamento"
    }));
    await expect(await tela.findByText("Não foi possível carregar os grupos de permissão. Verifique a conexão e tente de novo.")).toBeInTheDocument();
    await userEvent.click(tela.getByRole("button", {
      name: /Tentar de novo/
    }));
    await expect(await tela.findByText(/Não foi possível carregar os grupos de permissão/)).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(ca=(sa=T.parameters)==null?void 0:sa.docs)==null?void 0:ca.source}}};var la,ma,ua;f.parameters={...f.parameters,docs:{...(la=f.parameters)==null?void 0:la.docs,source:{originalSource:`{
  name: "Vazio: nenhum usuário",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [USUARIOS]: {
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
    await expect(await tela.findByText("Nenhum usuário ainda")).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(ua=(ma=f.parameters)==null?void 0:ma.docs)==null?void 0:ua.source}}};var da,pa,ga;S.parameters={...S.parameters,docs:{...(da=S.parameters)==null?void 0:da.docs,source:{originalSource:`{
  name: "Novo usuário: criar",
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    const gaveta = await abrirNovoUsuario(tela);
    const g = within(gaveta);
    await step("a gaveta traz o Perfil de acesso com rótulo visível e os grupos com descrição", async () => {
      await expect(g.getByText("Perfil de acesso", {
        selector: "[aria-hidden='true']"
      })).toBeVisible();
      await expect(g.getByRole("button", {
        name: /^Supervisão/
      })).toHaveTextContent("Acompanha a operação e revisa sessões.");
      await expect(g.getByRole("button", {
        name: /^Admin/
      })).toHaveAttribute("aria-pressed", "false");
    });
    await step("Mostrar senha alterna o tipo do campo", async () => {
      const olho = g.getByRole("button", {
        name: "Mostrar senha"
      });
      await userEvent.click(olho);
      await expect(olho).toHaveAttribute("aria-pressed", "true");
      await expect(g.getByLabelText(/^Senha/)).toHaveAttribute("type", "text");
    });
    await step("preencher, escolher Supervisão e criar fecha a gaveta e a pessoa entra na lista", async () => {
      await preencherNovo(gaveta);
      await userEvent.click(g.getByRole("button", {
        name: /^Supervisão/
      }));
      await userEvent.click(g.getByRole("button", {
        name: "Criar usuário"
      }));
      await waitFor(() => expect(tela.queryByRole("dialog", {
        name: "Novo usuário"
      })).not.toBeInTheDocument());
      await expect((await tela.findAllByText("Ana Lima")).length).toBeGreaterThan(0);
    });
    await semRotaSemFixture();
  }
}`,...(ga=(pa=S.parameters)==null?void 0:pa.docs)==null?void 0:ga.source}}};var wa,ya,Ba;D.parameters={...D.parameters,docs:{...(wa=D.parameters)==null?void 0:wa.docs,source:{originalSource:`{
  name: "Novo usuário: e-mail já cadastrado (409)",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [CRIAR]: {
          status: 409,
          corpo: {
            erro: "já existe usuário com esse e-mail"
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    const gaveta = await abrirNovoUsuario(tela);
    const g = within(gaveta);
    await preencherNovo(gaveta);
    await userEvent.click(g.getByRole("button", {
      name: "Criar usuário"
    }));
    // decisão b (10a): a frase do servidor sai com inicial maiúscula e ponto
    await expect(await g.findByText("Já existe usuário com esse e-mail.")).toBeInTheDocument();
    const email = g.getByLabelText(/^E-mail/);
    await waitFor(() => expect(email).toHaveFocus());
    await expect(email).toHaveAttribute("aria-invalid", "true");
    await expect(tela.getByRole("dialog", {
      name: "Novo usuário"
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(Ba=(ya=D.parameters)==null?void 0:ya.docs)==null?void 0:Ba.source}}};var va,xa,Ea;I.parameters={...I.parameters,docs:{...(va=I.parameters)==null?void 0:va.docs,source:{originalSource:`{
  name: "Novo usuário: descartar o que foi digitado",
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    const gaveta = await abrirNovoUsuario(tela);
    const g = within(gaveta);
    await step("só trocar o perfil e fechar não pede descarte", async () => {
      await userEvent.click(g.getByRole("button", {
        name: /^Admin/
      }));
      await userEvent.keyboard("{Escape}");
      await waitFor(() => expect(tela.queryByRole("dialog", {
        name: "Novo usuário"
      })).not.toBeInTheDocument());
    });
    await step("com nome digitado, Esc pede 'Descartar o novo usuário?' com foco em Continuar editando", async () => {
      const outra = within(await abrirNovoUsuario(tela));
      await digitar(outra.getByLabelText(/^Nome completo/), "Ana");
      await userEvent.keyboard("{Escape}");
      const confirmar = await tela.findByRole("dialog", {
        name: DESCARTAR_NOVO
      });
      await expect(within(confirmar).getByRole("button", {
        name: "Continuar editando"
      })).toHaveFocus();
      await userEvent.click(within(confirmar).getByRole("button", {
        name: "Descartar"
      }));
      await waitFor(() => expect(tela.queryByRole("dialog", {
        name: "Novo usuário"
      })).not.toBeInTheDocument());
    });
    await semRotaSemFixture();
  }
}`,...(Ea=(xa=I.parameters)==null?void 0:xa.docs)==null?void 0:Ea.source}}};var ha,Ra,ba;A.parameters={...A.parameters,docs:{...(ha=A.parameters)==null?void 0:ha.docs,source:{originalSource:`{
  name: "Novo usuário: sem rede ao criar",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      semRede: [CRIAR]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    const gaveta = await abrirNovoUsuario(tela);
    const g = within(gaveta);
    await preencherNovo(gaveta);
    await userEvent.click(g.getByRole("button", {
      name: "Criar usuário"
    }));
    await expect(await g.findByText(/O usuário pode ter sido criado: confira a lista antes de tentar de novo/)).toBeInTheDocument();
    await expect(g.getByRole("button", {
      name: "Criar usuário"
    })).toBeEnabled();
    await expect(g.getByLabelText(/^Nome completo/)).toHaveValue("Ana Lima");
    await semRotaSemFixture();
  }
}`,...(ba=(Ra=A.parameters)==null?void 0:Ra.docs)==null?void 0:ba.source}}};var Ta,fa,Sa;N.parameters={...N.parameters,docs:{...(Ta=N.parameters)==null?void 0:Ta.docs,source:{originalSource:`{
  name: "Novo usuário: enviando (um POST só)",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      pendurar: [CRIAR]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    const contagem = {
      total: 0
    };
    const restaurar = contarCriacoes(contagem);
    try {
      const gaveta = await abrirNovoUsuario(tela);
      const g = within(gaveta);
      await preencherNovo(gaveta);
      const criar = g.getByRole("button", {
        name: "Criar usuário"
      });
      await userEvent.dblClick(criar);
      const enviando = await g.findByRole("button", {
        name: "Criando…"
      });
      await expect(enviando).toBeDisabled();
      await expect(enviando).toHaveAttribute("aria-busy", "true");
      await expect(g.getByRole("button", {
        name: "Cancelar"
      })).toBeDisabled();
      await userEvent.keyboard("{Escape}");
      await expect(tela.getByRole("dialog", {
        name: "Novo usuário"
      })).toBeInTheDocument();
      await expect(tela.queryByRole("dialog", {
        name: DESCARTAR_NOVO
      })).not.toBeInTheDocument();
      await expect(contagem.total).toBe(1);
    } finally {
      restaurar();
    }
    await semRotaSemFixture();
  }
}`,...(Sa=(fa=N.parameters)==null?void 0:fa.docs)==null?void 0:Sa.source}}};var Da,Ia,Aa;k.parameters={...k.parameters,docs:{...(Da=k.parameters)==null?void 0:Da.docs,source:{originalSource:`{
  name: "Novo usuário: grupos com erro",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      falhar: [GRUPOS]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    const gaveta = await abrirNovoUsuario(tela, false);
    const g = within(gaveta);
    await expect(await g.findByText(/O servidor teve um problema ao carregar os grupos de permissão/)).toBeInTheDocument();
    const criar = g.getByRole("button", {
      name: "Criar usuário"
    });
    await expect(criar).toBeDisabled();
    await expect(criar.getAttribute("aria-describedby")).toBeTruthy();
    await expect(g.getByRole("button", {
      name: "Tentar de novo"
    })).toBeInTheDocument();
    await expect(g.getByRole("button", {
      name: /^Admin/
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(Aa=(Ia=k.parameters)==null?void 0:Ia.docs)==null?void 0:Aa.source}}};var Na,ka,Ca;C.parameters={...C.parameters,docs:{...(Na=C.parameters)==null?void 0:Na.docs,source:{originalSource:`{
  name: "Novo usuário: super escolhe a empresa",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      sessao: {
        papel: "super"
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await userEvent.click((await tela.findAllByRole("button", {
      name: /Novo usuário/
    }))[0]);
    const gaveta = await tela.findByRole("dialog", {
      name: "Novo usuário"
    });
    const g = within(gaveta);
    await expect(await g.findByText("Escolha a empresa acima para ver os grupos de permissão dela.")).toBeInTheDocument();
    await userEvent.click(await g.findByRole("button", {
      name: "Boreal Consignados"
    }));
    await expect(await g.findByRole("button", {
      name: /^Supervisão/
    })).toBeInTheDocument();
    await expect(g.getByRole("button", {
      name: /^Super admin/
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(Ca=(ka=C.parameters)==null?void 0:ka.docs)==null?void 0:Ca.source}}};var Oa,qa,Fa;O.parameters={...O.parameters,docs:{...(Oa=O.parameters)==null?void 0:Oa.docs,source:{originalSource:`{
  name: "Sem permissão: lista de usuários (403)",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [USUARIOS]: {
          status: 403,
          corpo: {
            erro: "apenas administradores"
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Apenas administradores acessam esta página.")).toBeInTheDocument();
    await expect(tela.queryByRole("button", {
      name: /Tentar de novo/
    })).not.toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(Fa=(qa=O.parameters)==null?void 0:qa.docs)==null?void 0:Fa.source}}};var Ga,Pa,ja;q.parameters={...q.parameters,docs:{...(Ga=q.parameters)==null?void 0:Ga.docs,source:{originalSource:`{
  name: "Permissionamento: nenhum grupo",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        [GRUPOS]: {
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
    await abrirPermissionamento(tela);
    await expect((await tela.findAllByRole("button", {
      name: /Novo grupo/
    })).length).toBeGreaterThan(0);
    await semRotaSemFixture();
  }
}`,...(ja=(Pa=q.parameters)==null?void 0:Pa.docs)==null?void 0:ja.source}}};var Ua,La,Ha;F.parameters={...F.parameters,docs:{...(Ua=F.parameters)==null?void 0:Ua.docs,source:{originalSource:`{
  name: "Permissionamento: novo grupo",
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await abrirPermissionamento(tela);
    await tela.findByText("2 grupos de permissão");
    await userEvent.click(tela.getAllByRole("button", {
      name: /Novo grupo/
    })[0]);
    await tela.findByRole("dialog", {
      name: "Novo grupo de permissão"
    });
    await step("abrir e fechar sem mexer não pede descarte", async () => {
      await userEvent.keyboard("{Escape}");
      await waitFor(() => expect(tela.queryByRole("dialog", {
        name: "Novo grupo de permissão"
      })).not.toBeInTheDocument());
    });
    await step("só a matriz marcada já pede descarte", async () => {
      await userEvent.click(tela.getAllByRole("button", {
        name: /Novo grupo/
      })[0]);
      const outra = within(await tela.findByRole("dialog", {
        name: "Novo grupo de permissão"
      }));
      await userEvent.click(within(outra.getByRole("group", {
        name: "Sessões"
      })).getByRole("checkbox", {
        name: "Revisar sessões"
      }));
      await userEvent.keyboard("{Escape}");
      const confirmar = await tela.findByRole("dialog", {
        name: "Descartar o grupo?"
      });
      await userEvent.click(within(confirmar).getByRole("button", {
        name: "Continuar editando"
      }));
      await digitar(outra.getByRole("textbox", {
        name: /^Nome do grupo/
      }), "Plantão");
      await userEvent.click(outra.getByRole("button", {
        name: "Salvar grupo"
      }));
      await waitFor(() => expect(tela.queryByRole("dialog", {
        name: "Novo grupo de permissão"
      })).not.toBeInTheDocument());
    });
    await semRotaSemFixture();
  }
}`,...(Ha=(La=F.parameters)==null?void 0:La.docs)==null?void 0:Ha.source}}};var _a,Va,Ja;G.parameters={...G.parameters,docs:{...(_a=G.parameters)==null?void 0:_a.docs,source:{originalSource:`{
  name: "Novo usuário: grupos carregando",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      pendurar: [GRUPOS]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    const gaveta = await abrirNovoUsuario(tela, false);
    const g = within(gaveta);
    await expect(await g.findByText("Carregando os grupos…")).toBeInTheDocument();
    await expect(g.getByRole("button", {
      name: "Criar usuário"
    })).toBeDisabled();
  }
}`,...(Ja=(Va=G.parameters)==null?void 0:Va.docs)==null?void 0:Ja.source}}};var za,Ma,Wa;P.parameters={...P.parameters,docs:{...(za=P.parameters)==null?void 0:za.docs,source:{originalSource:`{
  name: "Editar usuário: sem mudança",
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    const gaveta = await abrirEdicaoDoBruno(tela);
    const g = within(gaveta);
    await step("abrir sem mexer deixa Salvar desabilitado; e-mail igual com outra caixa continua limpo", async () => {
      await expect(g.getByRole("button", {
        name: "Salvar"
      })).toBeDisabled();
      const email = g.getByLabelText(/^E-mail/);
      await userEvent.clear(email);
      await digitar(email, "Bruno.Siqueira@example.com");
      await expect(g.getByRole("button", {
        name: "Salvar"
      })).toBeDisabled();
    });
    await step("Esc sem mudança fecha direto, sem pedir descarte", async () => {
      await userEvent.keyboard("{Escape}");
      await waitFor(() => expect(tela.queryByRole("dialog", {
        name: "Editar usuário"
      })).not.toBeInTheDocument());
      await expect(document.body.style.overflow).toBe("");
    });
    await semRotaSemFixture();
  }
}`,...(Wa=(Ma=P.parameters)==null?void 0:Ma.docs)==null?void 0:Wa.source}}};var Ka,Ya,$a;j.parameters={...j.parameters,docs:{...(Ka=j.parameters)==null?void 0:Ka.docs,source:{originalSource:`{
  name: "Editar usuário: confirmação por cima",
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    const gaveta = await abrirEdicaoDoBruno(tela);
    const g = within(gaveta);
    const puts = {
      total: 0
    };
    const anterior = globalThis.fetch;
    const embrulho = ((entrada: RequestInfo | URL, opcoes?: RequestInit) => {
      if ((opcoes?.method ?? "GET").toUpperCase() === "PUT") puts.total += 1;
      return anterior(entrada, opcoes);
    }) as typeof fetch;
    globalThis.fetch = embrulho;
    try {
      await step("trocar o e-mail e Salvar abre a confirmação por cima; nada vai ao servidor", async () => {
        const email = g.getByLabelText(/^E-mail/);
        await userEvent.clear(email);
        await digitar(email, "bruno.novo@example.com");
        await userEvent.click(g.getByRole("button", {
          name: "Salvar"
        }));
        await tela.findByRole("dialog", {
          name: "Trocar o e-mail de acesso?"
        });
        await expect(tela.getByRole("dialog", {
          name: "Editar usuário"
        })).toBeInTheDocument();
        await expect(puts.total).toBe(0);
      });
      await step("Esc fecha só a confirmação e o e-mail digitado fica", async () => {
        await userEvent.keyboard("{Escape}");
        await waitFor(() => expect(tela.queryByRole("dialog", {
          name: "Trocar o e-mail de acesso?"
        })).not.toBeInTheDocument());
        await expect(g.getByLabelText(/^E-mail/)).toHaveValue("bruno.novo@example.com");
        await expect(document.body.style.overflow).toBe("hidden");
      });
      await step("sem rolagem lateral na gaveta", async () => {
        await semRolagemLateral(gaveta);
      });
      await step("confirmar troca o e-mail, fecha as duas e solta o body", async () => {
        await userEvent.click(g.getByRole("button", {
          name: "Salvar"
        }));
        const confirmacao = within(await tela.findByRole("dialog", {
          name: "Trocar o e-mail de acesso?"
        }));
        await userEvent.click(confirmacao.getByRole("button", {
          name: "Trocar e-mail"
        }));
        await waitFor(() => expect(tela.queryByRole("dialog", {
          name: "Editar usuário"
        })).not.toBeInTheDocument());
        await expect(puts.total).toBe(1);
        await expect(await tela.findByText("E-mail de acesso trocado para bruno.novo@example.com.")).toBeInTheDocument();
        await expect(document.body.style.overflow).toBe("");
      });
    } finally {
      if (globalThis.fetch === embrulho) globalThis.fetch = anterior;
    }
    await semRotaSemFixture();
  }
}`,...($a=(Ya=j.parameters)==null?void 0:Ya.docs)==null?void 0:$a.source}}};var Qa,Xa,Za;U.parameters={...U.parameters,docs:{...(Qa=U.parameters)==null?void 0:Qa.docs,source:{originalSource:`{
  name: "Editar usuário: senha temporária",
  parameters: {
    jornada: {
      ...CENARIO_GESTAO,
      respostas: {
        "GET /v1/auth/config": {
          status: 200,
          corpo: {
            cognito: true
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    const gaveta = await abrirEdicaoDoBruno(tela);
    const g = within(gaveta);
    await step("a seção Senha avisa que a atual deixa de valer; Redefinir senha pede confirmação por cima", async () => {
      const secao = within(g.getByRole("region", {
        name: "Senha"
      }));
      await expect(secao.getByText("A senha atual deixa de valer na hora.")).toBeInTheDocument();
      await userEvent.click(secao.getByRole("button", {
        name: "Redefinir senha"
      }));
      const confirmacao = within(await tela.findByRole("dialog", {
        name: "Gerar senha temporária?"
      }));
      await userEvent.click(confirmacao.getByRole("button", {
        name: "Gerar senha"
      }));
    });
    await step("a senha gerada aparece por cima da gaveta, com copiar de 48px e sem rolagem lateral", async () => {
      const dialogo = await tela.findByRole("dialog", {
        name: "Senha temporária gerada"
      });
      const d = within(dialogo);
      await expect(d.getByText("SENHA-FICTICIA")).toBeInTheDocument();
      await expect(d.getByText("bruno.siqueira@example.com")).toBeInTheDocument();
      await expect(d.getByRole("button", {
        name: "copiar"
      }).getBoundingClientRect().height).toBeGreaterThanOrEqual(44);
      await semRolagemLateral(dialogo);
      await userEvent.click(d.getAllByRole("button", {
        name: "Fechar"
      }).at(-1) as HTMLElement);
      await waitFor(() => expect(tela.queryByRole("dialog", {
        name: "Senha temporária gerada"
      })).not.toBeInTheDocument());
      await expect(tela.getByRole("dialog", {
        name: "Editar usuário"
      })).toBeInTheDocument();
      await expect(document.body.style.overflow).toBe("hidden");
    });
    await step("Cancelar fecha a gaveta e solta o body", async () => {
      await userEvent.click(g.getByRole("button", {
        name: "Cancelar"
      }));
      await waitFor(() => expect(tela.queryByRole("dialog", {
        name: "Editar usuário"
      })).not.toBeInTheDocument());
      await expect(document.body.style.overflow).toBe("");
    });
    await semRotaSemFixture();
  }
}`,...(Za=(Xa=U.parameters)==null?void 0:Xa.docs)==null?void 0:Za.source}}};export{R as Carregando,j as EditarConfirmacao,h as EditarGrupo,P as EditarSemMudanca,b as Erro,T as ErroGrupos,F as GrupoNovo,G as GruposCarregando,S as NovoUsuario,I as NovoUsuarioDescartar,N as NovoUsuarioEnviando,D as NovoUsuarioErro,k as NovoUsuarioGruposErro,A as NovoUsuarioSemRede,C as NovoUsuarioSuper,x as Padrao,E as Permissionamento,q as PermissionamentoVazio,O as SemPermissao,U as SenhaGerada,f as Vazio,ke as __namedExportsOrder,Ne as default};
