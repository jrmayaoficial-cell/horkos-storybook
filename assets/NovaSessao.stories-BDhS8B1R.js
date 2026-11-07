import{j as Oa}from"./jsx-runtime-C-NnYQQj.js";import{t as r,i as H,s as u,m as qa}from"./jornadaOperar-s38zFs67.js";import{C as I,i as Ma}from"./ShellJornada-ByPwEQxC.js";import{S as Na}from"./ShellGestao-Jyjqqx0w.js";import"./iframe-DEC6x2_9.js";import"./preload-helper-D6kgxu3v.js";import"./dadosShell-D7euqUo-.js";import"./index-Dz2FqD8L.js";import"./index-CmHu5Euv.js";import"./v2-CFLOXcvu.js";import"./index-CnB9h5a6.js";import"./api-C_qpy-2i.js";import"./index-DJSstCC2.js";import"./marca-BWkAzl1y.js";import"./carregando-CNp4uhvU.js";import"./celulas-DiU8SfVX.js";/* empty css              */import"./CartaoKpi-BS2LlUJ9.js";import"./MiniBarras-DTviKg-v.js";import"./cores-D-iLqYVd.js";import"./Login-xO3uyH8U.js";import"./etapas-CLsHaCEc.js";/* empty css                */const{expect:n,fireEvent:l,userEvent:o,waitFor:c}=__STORYBOOK_MODULE_TEST__,P=qa("/nova",'Jornada de Nova sessão dentro do shell, papel admin: formulário em cinco etapas (Canal, Cliente, Contrato, Adicionais, Revisão) com roteiros e departamentos fictícios; Continuar com obrigatório vazio marca o campo, diz quantos faltam e leva o foco a ele; o envio na Revisão trava a barra e, com sucesso, mostra o link da sessão com Copiar link. Falha de rede e erro do servidor aparecem como texto legível no topo, com os dados mantidos. Sair com dado digitado e não criado pergunta "Sair sem salvar?"; abrir e sair sem mexer, ou digitar e apagar, não pergunta.',null),ue={title:"Jornadas/Nova sessão",...P,beforeEach:e=>{const a=P.beforeEach(e),t=Ma();return()=>{t(),a()}},parameters:{...P.parameters,jornada:{}}};async function S(e){const a=await e.findByRole("button",{name:/^Continuar/});return await c(()=>n(a).not.toHaveAttribute("aria-disabled")),a}async function p(e,a){await c(()=>n(e.getByRole("heading",{level:2})).toHaveTextContent(a))}async function s(e,a){await o.click(await S(e)),await p(e,a)}const Qa=[[/Referência externa/,"PROP-25050815"],[/mãe/i,"Maria Neide Souza"],[/Nome completo/,"Matheus Vinicius Lima"],[/^CPF/,"106.365.814-46"],[/nascimento/i,"27/09/1999"],[/^Banco/,"Banco do Brasil"],[/Prazo/i,"84"]];function Va(e){var i,d,F;const a=((F=(d=(i=e.labels)==null?void 0:i[0])==null?void 0:d.textContent)==null?void 0:F.trim())??"",t=Qa.find(([ka])=>ka.test(a));return t?t[1]:e.placeholder==="DD/MM/AAAA"?"27/09/1999":"1500"}const D=e=>[...e.querySelectorAll('input[aria-invalid="true"]')];async function m(e,a){const t=e.ownerDocument,i=r(e);await o.click(await S(i)),await c(()=>n(D(t).length).toBeGreaterThan(0));for(const d of D(t))l.change(d,{target:{value:Va(d)}});await c(()=>n(D(t)).toHaveLength(0)),await s(i,a)}async function L(e){const a=r(e);await s(a,/Quem vai confirmar/),await m(e,/O que será confirmado/),await m(e,/Dados adicionais/),await s(a,/Revise antes de criar/)}const A=e=>e.findByRole("button",{name:/Criar link|Criar e enviar/}),_a=["Canal","Cliente","Contrato","Dados adicionais"],w={name:"Nova sessão",play:async({canvasElement:e})=>{const a=r(e);await L(e);for(const i of _a)await n(a.getByRole("button",{name:`Editar etapa ${i}`})).toBeInTheDocument();(await A(a)).focus(),await o.keyboard("{Enter}"),await n(await a.findByText("Sessão criada")).toBeInTheDocument(),await n(a.getByRole("button",{name:"Copiar link da sessão"})).toBeInTheDocument(),await u()}},f={parameters:{jornada:{respostas:{"POST /v1/sessoes":{status:400,corpo:{erro:"CPF inválido"}}}}},play:async({canvasElement:e})=>{const a=r(e),t=e.ownerDocument;await s(a,/Quem vai confirmar/),await o.click(await S(a)),await c(()=>n(t.activeElement).toBe(D(t)[0])),await n(await a.findByText(/^Falta corrigir \d+ campos?:/)).toBeInTheDocument(),await m(e,/O que será confirmado/),await m(e,/Dados adicionais/),await s(a,/Revise antes de criar/),await o.click(await A(a)),await n(await a.findByText(/Não foi possível criar a sessão\. Confira os campos e tente de novo\. Motivo: CPF inválido/)).toBeInTheDocument(),await u()}},T={name:"Erro de rede",parameters:{jornada:{semRede:["POST /v1/sessoes"]}},play:async({canvasElement:e})=>{const a=r(e);await L(e),await o.click(await A(a)),await n(await a.findByText(/Sem conexão com o servidor/)).toBeInTheDocument(),await u()}},b={parameters:{jornada:{pendurar:["POST /v1/sessoes"]}},play:async({canvasElement:e})=>{const a=r(e);await L(e),await o.click(await A(a)),await n(await a.findByRole("button",{name:/Criando/})).toBeDisabled(),await n(a.getByRole("button",{name:/^Voltar/})).toBeDisabled()}},h={name:"Roteiros carregando",parameters:{jornada:{pendurar:["GET /v1/roteiros"]}},play:async({canvasElement:e})=>{const a=r(e);await n(await a.findByText("Carregando roteiros…")).toBeInTheDocument(),await n(a.getByRole("button",{name:/^Continuar/})).toHaveAttribute("aria-disabled","true")}},C={name:"Roteiros com falha",parameters:{jornada:{falhar:["GET /v1/roteiros"]}},play:async({canvasElement:e})=>{const a=r(e),t=await a.findByRole("alert");await n(t).toHaveTextContent(/carregar os roteiros/),await n(a.getByRole("button",{name:"Tentar de novo"})).toBeInTheDocument(),await n(a.getByRole("button",{name:/^Continuar/})).toHaveAttribute("aria-disabled","true")}},v={name:"Dados adicionais e Revisão",play:async({canvasElement:e})=>{const a=r(e);await s(a,/Quem vai confirmar/),await m(e,/O que será confirmado/),await m(e,/Dados adicionais/);const t=a.getByRole("button",{name:/^Contato/});await n(t).toHaveAttribute("aria-expanded","false"),await o.click(t),await n(t).toHaveAttribute("aria-expanded","true"),l.change(a.getByRole("textbox",{name:/E-mail/}),{target:{value:"cliente@exemplo.com"}}),await c(()=>n(t).toHaveTextContent("1 de")),await o.click(t),await n(t).toHaveAttribute("aria-expanded","false"),await o.click(a.getByRole("button",{name:"Pular etapa"})),await p(a,/Revise antes de criar/),await n(a.getByRole("region",{name:"Dados adicionais"})).toHaveTextContent("Contato (1)"),await o.click(a.getByRole("button",{name:"Editar etapa Cliente"})),await p(a,/Quem vai confirmar/),await o.click(a.getByRole("button",{name:/Voltar à revisão/})),await p(a,/Revise antes de criar/),await u()}},x={name:"Canal humano",play:async({canvasElement:e})=>{const a=r(e);await S(a),await o.click(a.getByRole("radio",{name:/Atendente humano/}));const t=await a.findByLabelText(/Roteiro \(condução humana\)/),i=[...t.options].find(d=>d.value&&!d.disabled);l.change(t,{target:{value:i.value}}),await s(a,/Quem vai confirmar/),await m(e,/O que será confirmado/),await m(e,/Dados adicionais/),await s(a,/Revise antes de criar/),await n(a.getByRole("region",{name:"Canal"})).toHaveTextContent("Atendente humano"),await o.click(await a.findByRole("button",{name:"Criar e enviar para a fila"})),await n(await a.findByText("Sessão criada")).toBeInTheDocument(),await u()}},E={name:"Aviso de saída",render:e=>Oa.jsx(Na,{rotaInicial:e.rotaInicial}),play:async({canvasElement:e,step:a})=>{const t=r(e);await s(t,/Quem vai confirmar/),await a("Digitar o nome e sair pelo menu pergunta, citando a Nova sessão",async()=>{l.change(t.getByLabelText(/Nome completo \*/),{target:{value:"Ana Lima"}}),await H(e,/^Dashboard/),await c(()=>n(t.queryByRole("dialog",{name:"Menu"})).not.toBeInTheDocument());const i=await t.findByRole("dialog",{name:"Sair sem salvar?"});await n(i).toHaveTextContent(/alterações não salvas em Nova sessão/),await o.click(t.getByRole("button",{name:"Continuar editando"})),await c(()=>n(t.queryByRole("dialog",{name:"Sair sem salvar?"})).not.toBeInTheDocument()),await n(t.getByLabelText(/Nome completo \*/).value).toBe("Ana Lima")}),await a("Apagar o que digitou e sair pelo menu não pergunta",async()=>{l.change(t.getByLabelText(/Nome completo \*/),{target:{value:""}}),await H(e,/^Dashboard/),await c(()=>n(t.queryByRole("heading",{level:2,name:/Quem vai confirmar/})).not.toBeInTheDocument()),await n(t.queryByRole("dialog",{name:"Sair sem salvar?"})).not.toBeInTheDocument()})}},R={name:"Voltar mantém os dados",play:async({canvasElement:e})=>{const a=r(e);await s(a,/Quem vai confirmar/);const t=a.getByLabelText(/Nome completo \*/);await o.type(t,"Ana Lima"),await o.click(a.getByRole("button",{name:/^Voltar/})),await p(a,/Como a chamada acontece/),await s(a,/Quem vai confirmar/),await n(a.getByLabelText(/Nome completo \*/).value).toBe("Ana Lima")}},y={name:"CPF inválido",play:async({canvasElement:e})=>{const a=r(e);await s(a,/Quem vai confirmar/);const t=a.getByLabelText(/^CPF/);await o.type(t,"10636581447"),await o.tab(),await n(await a.findByText("CPF inválido. Confira os números.")).toBeInTheDocument()}};async function Ha(e){const a=r(e);await s(a,/Quem vai confirmar/),await m(e,/O que será confirmado/),await m(e,/Dados adicionais/);const t=a.getByRole("button",{name:/^Endereço/});return await o.click(t),await n(t).toHaveAttribute("aria-expanded","true"),a}const g={name:"CEP preenche o endereço",play:async({canvasElement:e})=>{const a=await Ha(e),t=a.getByLabelText(/^Logradouro/);l.change(t,{target:{value:"Rua do operador"}}),l.change(a.getByLabelText(/^CEP/),{target:{value:I.encontrado}}),await n(await a.findByText("Buscando endereço…")).toBeInTheDocument(),await c(()=>n(a.getByLabelText(/^Bairro/).value).toBe("Bela Vista")),await n(a.getByLabelText(/^Cidade/).value).toBe("São Paulo"),await n(t.value).toBe("Rua do operador"),await n(a.getByText(/Endereço preenchido pelo CEP/)).toBeInTheDocument(),await n(a.getByRole("button",{name:/^Endereço/})).toHaveTextContent("5 de"),await u()}},B={name:"CEP não encontrado",play:async({canvasElement:e})=>{const a=await Ha(e),t=a.getByLabelText(/^CEP/);l.change(t,{target:{value:I.inexistente}}),await n(await a.findByText("CEP não encontrado, preencha à mão")).toBeInTheDocument(),l.change(t,{target:{value:I.foraDoAr}}),await n(await a.findByText("Buscando endereço…")).toBeInTheDocument(),await n(await a.findByText("CEP não encontrado, preencha à mão")).toBeInTheDocument();const i=a.getByLabelText(/^Cidade/);l.change(i,{target:{value:"Poconé"}}),await c(()=>n(i.value).toBe("Poconé")),await o.click(a.getByRole("button",{name:"Pular etapa"})),await p(a,/Revise antes de criar/),await n(a.getByRole("region",{name:"Dados adicionais"})).toHaveTextContent("Endereço (2)"),await u()}},pe=["NovaSessao","Erro","SemRede","Enviando","RoteirosCarregando","RoteirosComFalha","DadosAdicionais","FluxoHumano","AvisoDeSaida","VoltarMantemDados","CpfInvalido","CepPreenche","CepNaoEncontrado"];var k,O,q,M,N;w.parameters={...w.parameters,docs:{...(k=w.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "Nova sessão",
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await irAteRevisao(canvasElement);
    for (const etapa of ETAPAS_DA_REVISAO) {
      await expect(tela.getByRole("button", {
        name: \`Editar etapa \${etapa}\`
      })).toBeInTheDocument();
    }
    const criar = await botaoCriar(tela);
    criar.focus();
    await userEvent.keyboard("{Enter}");
    await expect(await tela.findByText("Sessão criada")).toBeInTheDocument();
    await expect(tela.getByRole("button", {
      name: "Copiar link da sessão"
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(q=(O=w.parameters)==null?void 0:O.docs)==null?void 0:q.source},description:{story:`Fluxo feliz do canal IA: Revisão com um Editar por bloco, e só Enter com o
foco no botão final cria.`,...(N=(M=w.parameters)==null?void 0:M.docs)==null?void 0:N.description}}};var Q,V,_;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  parameters: {
    jornada: {
      respostas: {
        "POST /v1/sessoes": {
          status: 400,
          corpo: {
            erro: "CPF inválido"
          }
        }
      }
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    const doc = canvasElement.ownerDocument;
    await continuar(tela, /Quem vai confirmar/);
    await userEvent.click(await botaoContinuar(tela));
    await waitFor(() => expect(doc.activeElement).toBe(marcados(doc)[0]));
    await expect(await tela.findByText(/^Falta corrigir \\d+ campos?:/)).toBeInTheDocument();
    await preencherEtapa(canvasElement, /O que será confirmado/);
    await preencherEtapa(canvasElement, /Dados adicionais/);
    await continuar(tela, /Revise antes de criar/);
    await userEvent.click(await botaoCriar(tela));
    await expect(await tela.findByText(/Não foi possível criar a sessão\\. Confira os campos e tente de novo\\. Motivo: CPF inválido/)).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(_=(V=f.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var j,G,J;T.parameters={...T.parameters,docs:{...(j=T.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Erro de rede",
  parameters: {
    jornada: {
      semRede: ["POST /v1/sessoes"]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await irAteRevisao(canvasElement);
    await userEvent.click(await botaoCriar(tela));
    await expect(await tela.findByText(/Sem conexão com o servidor/)).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(J=(G=T.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var z,U,$;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: {
    jornada: {
      pendurar: ["POST /v1/sessoes"]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await irAteRevisao(canvasElement);
    await userEvent.click(await botaoCriar(tela));
    await expect(await tela.findByRole("button", {
      name: /Criando/
    })).toBeDisabled();
    await expect(tela.getByRole("button", {
      name: /^Voltar/
    })).toBeDisabled();
  }
}`,...($=(U=b.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var K,Y,W;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "Roteiros carregando",
  parameters: {
    jornada: {
      pendurar: ["GET /v1/roteiros"]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await expect(await tela.findByText("Carregando roteiros…")).toBeInTheDocument();
    await expect(tela.getByRole("button", {
      name: /^Continuar/
    })).toHaveAttribute("aria-disabled", "true");
  }
}`,...(W=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:W.source}}};var X,Z,aa;C.parameters={...C.parameters,docs:{...(X=C.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: "Roteiros com falha",
  parameters: {
    jornada: {
      falhar: ["GET /v1/roteiros"]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    const alerta = await tela.findByRole("alert");
    await expect(alerta).toHaveTextContent(/carregar os roteiros/);
    await expect(tela.getByRole("button", {
      name: "Tentar de novo"
    })).toBeInTheDocument();
    await expect(tela.getByRole("button", {
      name: /^Continuar/
    })).toHaveAttribute("aria-disabled", "true");
  }
}`,...(aa=(Z=C.parameters)==null?void 0:Z.docs)==null?void 0:aa.source}}};var ea,ta,na,oa,ia;v.parameters={...v.parameters,docs:{...(ea=v.parameters)==null?void 0:ea.docs,source:{originalSource:`{
  name: "Dados adicionais e Revisão",
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await continuar(tela, /Quem vai confirmar/);
    await preencherEtapa(canvasElement, /O que será confirmado/);
    await preencherEtapa(canvasElement, /Dados adicionais/);
    const contato = tela.getByRole("button", {
      name: /^Contato/
    });
    await expect(contato).toHaveAttribute("aria-expanded", "false");
    await userEvent.click(contato);
    await expect(contato).toHaveAttribute("aria-expanded", "true");
    fireEvent.change(tela.getByRole("textbox", {
      name: /E-mail/
    }), {
      target: {
        value: "cliente@exemplo.com"
      }
    });
    await waitFor(() => expect(contato).toHaveTextContent("1 de"));
    await userEvent.click(contato);
    await expect(contato).toHaveAttribute("aria-expanded", "false");
    await userEvent.click(tela.getByRole("button", {
      name: "Pular etapa"
    }));
    await esperarEtapa(tela, /Revise antes de criar/);
    await expect(tela.getByRole("region", {
      name: "Dados adicionais"
    })).toHaveTextContent("Contato (1)");
    await userEvent.click(tela.getByRole("button", {
      name: "Editar etapa Cliente"
    }));
    await esperarEtapa(tela, /Quem vai confirmar/);
    await userEvent.click(tela.getByRole("button", {
      name: /Voltar à revisão/
    }));
    await esperarEtapa(tela, /Revise antes de criar/);
    await semRotaSemFixture();
  }
}`,...(na=(ta=v.parameters)==null?void 0:ta.docs)==null?void 0:na.source},description:{story:`Grupos de "Dados adicionais" nascem recolhidos; abrir, preencher, fechar e
pular mantêm o que foi digitado, e a Revisão conta por grupo.`,...(ia=(oa=v.parameters)==null?void 0:oa.docs)==null?void 0:ia.description}}};var ra,sa,ca,la,ma;x.parameters={...x.parameters,docs:{...(ra=x.parameters)==null?void 0:ra.docs,source:{originalSource:`{
  name: "Canal humano",
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await botaoContinuar(tela);
    await userEvent.click(tela.getByRole("radio", {
      name: /Atendente humano/
    }));
    const roteiro = await tela.findByLabelText<HTMLSelectElement>(/Roteiro \\(condução humana\\)/);
    const opcao = [...roteiro.options].find(o => o.value && !o.disabled)!;
    fireEvent.change(roteiro, {
      target: {
        value: opcao.value
      }
    });
    await continuar(tela, /Quem vai confirmar/);
    await preencherEtapa(canvasElement, /O que será confirmado/);
    await preencherEtapa(canvasElement, /Dados adicionais/);
    await continuar(tela, /Revise antes de criar/);
    await expect(tela.getByRole("region", {
      name: "Canal"
    })).toHaveTextContent("Atendente humano");
    await userEvent.click(await tela.findByRole("button", {
      name: "Criar e enviar para a fila"
    }));
    await expect(await tela.findByText("Sessão criada")).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(ca=(sa=x.parameters)==null?void 0:sa.docs)==null?void 0:ca.source},description:{story:'Canal humano: roteiro de condução humana e botão final "enviar para a fila".',...(ma=(la=x.parameters)==null?void 0:la.docs)==null?void 0:ma.description}}};var da,ua,pa,wa,va;E.parameters={...E.parameters,docs:{...(da=E.parameters)==null?void 0:da.docs,source:{originalSource:`{
  name: "Aviso de saída",
  render: args => <ShellGestao rotaInicial={args.rotaInicial} />,
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = telaDe(canvasElement);
    await continuar(tela, /Quem vai confirmar/);
    await step("Digitar o nome e sair pelo menu pergunta, citando a Nova sessão", async () => {
      fireEvent.change(tela.getByLabelText(/Nome completo \\*/), {
        target: {
          value: "Ana Lima"
        }
      });
      await irPeloMenu(canvasElement, /^Dashboard/);
      // Abaixo de 900 px o menu é uma gaveta: espera ela fechar antes de clicar no aviso.
      await waitFor(() => expect(tela.queryByRole("dialog", {
        name: "Menu"
      })).not.toBeInTheDocument());
      const modal = await tela.findByRole("dialog", {
        name: "Sair sem salvar?"
      });
      await expect(modal).toHaveTextContent(/alterações não salvas em Nova sessão/);
      await userEvent.click(tela.getByRole("button", {
        name: "Continuar editando"
      }));
      await waitFor(() => expect(tela.queryByRole("dialog", {
        name: "Sair sem salvar?"
      })).not.toBeInTheDocument());
      await expect(tela.getByLabelText<HTMLInputElement>(/Nome completo \\*/).value).toBe("Ana Lima");
    });
    await step("Apagar o que digitou e sair pelo menu não pergunta", async () => {
      fireEvent.change(tela.getByLabelText(/Nome completo \\*/), {
        target: {
          value: ""
        }
      });
      await irPeloMenu(canvasElement, /^Dashboard/);
      await waitFor(() => expect(tela.queryByRole("heading", {
        level: 2,
        name: /Quem vai confirmar/
      })).not.toBeInTheDocument());
      await expect(tela.queryByRole("dialog", {
        name: "Sair sem salvar?"
      })).not.toBeInTheDocument();
    });
  }
}`,...(pa=(ua=E.parameters)==null?void 0:ua.docs)==null?void 0:pa.source},description:{story:`Voltar não valida e mantém o que foi digitado na etapa anterior.
Aviso de saída no roteador de dados (o de produção): o ShellGestao é a casca
com createMemoryRouter, a única em que o "Sair sem salvar?" segura o menu.`,...(va=(wa=E.parameters)==null?void 0:wa.docs)==null?void 0:va.description}}};var xa,Ea,ya;R.parameters={...R.parameters,docs:{...(xa=R.parameters)==null?void 0:xa.docs,source:{originalSource:`{
  name: "Voltar mantém os dados",
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await continuar(tela, /Quem vai confirmar/);
    const nome = tela.getByLabelText<HTMLInputElement>(/Nome completo \\*/);
    await userEvent.type(nome, "Ana Lima");
    await userEvent.click(tela.getByRole("button", {
      name: /^Voltar/
    }));
    await esperarEtapa(tela, /Como a chamada acontece/);
    await continuar(tela, /Quem vai confirmar/);
    await expect(tela.getByLabelText<HTMLInputElement>(/Nome completo \\*/).value).toBe("Ana Lima");
  }
}`,...(ya=(Ea=R.parameters)==null?void 0:Ea.docs)==null?void 0:ya.source}}};var ga,Ba,fa,Ta,ba;y.parameters={...y.parameters,docs:{...(ga=y.parameters)==null?void 0:ga.docs,source:{originalSource:`{
  name: "CPF inválido",
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await continuar(tela, /Quem vai confirmar/);
    const cpf = tela.getByLabelText<HTMLInputElement>(/^CPF/);
    await userEvent.type(cpf, "10636581447");
    await userEvent.tab();
    await expect(await tela.findByText("CPF inválido. Confira os números.")).toBeInTheDocument();
  }
}`,...(fa=(Ba=y.parameters)==null?void 0:Ba.docs)==null?void 0:fa.source},description:{story:"CPF com dígito errado reclama ao sair do campo, sem esperar o Continuar.",...(ba=(Ta=y.parameters)==null?void 0:Ta.docs)==null?void 0:ba.description}}};var ha,Ca,Ra,Da,Sa;g.parameters={...g.parameters,docs:{...(ha=g.parameters)==null?void 0:ha.docs,source:{originalSource:`{
  name: "CEP preenche o endereço",
  play: async ({
    canvasElement
  }) => {
    const tela = await abrirEndereco(canvasElement);
    const logradouro = tela.getByLabelText<HTMLInputElement>(/^Logradouro/);
    fireEvent.change(logradouro, {
      target: {
        value: "Rua do operador"
      }
    });
    fireEvent.change(tela.getByLabelText<HTMLInputElement>(/^CEP/), {
      target: {
        value: CEPS_FALSOS.encontrado
      }
    });
    await expect(await tela.findByText("Buscando endereço…")).toBeInTheDocument();
    await waitFor(() => expect(tela.getByLabelText<HTMLInputElement>(/^Bairro/).value).toBe("Bela Vista"));
    await expect(tela.getByLabelText<HTMLInputElement>(/^Cidade/).value).toBe("São Paulo");
    await expect(logradouro.value).toBe("Rua do operador");
    await expect(tela.getByText(/Endereço preenchido pelo CEP/)).toBeInTheDocument();
    await expect(tela.getByRole("button", {
      name: /^Endereço/
    })).toHaveTextContent("5 de");
    await semRotaSemFixture();
  }
}`,...(Ra=(Ca=g.parameters)==null?void 0:Ca.docs)==null?void 0:Ra.source},description:{story:`CEP completo busca no ViaCEP (falso), mostra "Buscando" e preenche só o
que está vazio: a rua digitada antes pelo operador fica.`,...(Sa=(Da=g.parameters)==null?void 0:Da.docs)==null?void 0:Sa.description}}};var Aa,Pa,Ia,La,Fa;B.parameters={...B.parameters,docs:{...(Aa=B.parameters)==null?void 0:Aa.docs,source:{originalSource:`{
  name: "CEP não encontrado",
  play: async ({
    canvasElement
  }) => {
    const tela = await abrirEndereco(canvasElement);
    const cep = tela.getByLabelText<HTMLInputElement>(/^CEP/);
    fireEvent.change(cep, {
      target: {
        value: CEPS_FALSOS.inexistente
      }
    });
    await expect(await tela.findByText("CEP não encontrado, preencha à mão")).toBeInTheDocument();
    fireEvent.change(cep, {
      target: {
        value: CEPS_FALSOS.foraDoAr
      }
    });
    await expect(await tela.findByText("Buscando endereço…")).toBeInTheDocument();
    await expect(await tela.findByText("CEP não encontrado, preencha à mão")).toBeInTheDocument();
    const cidade = tela.getByLabelText<HTMLInputElement>(/^Cidade/);
    fireEvent.change(cidade, {
      target: {
        value: "Poconé"
      }
    });
    await waitFor(() => expect(cidade.value).toBe("Poconé"));
    await userEvent.click(tela.getByRole("button", {
      name: "Pular etapa"
    }));
    await esperarEtapa(tela, /Revise antes de criar/);
    await expect(tela.getByRole("region", {
      name: "Dados adicionais"
    })).toHaveTextContent("Endereço (2)");
    await semRotaSemFixture();
  }
}`,...(Ia=(Pa=B.parameters)==null?void 0:Pa.docs)==null?void 0:Ia.source},description:{story:`CEP inexistente e serviço fora do ar: aviso que não bloqueia, e o
endereço segue preenchível à mão.`,...(Fa=(La=B.parameters)==null?void 0:La.docs)==null?void 0:Fa.description}}};export{E as AvisoDeSaida,B as CepNaoEncontrado,g as CepPreenche,y as CpfInvalido,v as DadosAdicionais,b as Enviando,f as Erro,x as FluxoHumano,w as NovaSessao,h as RoteirosCarregando,C as RoteirosComFalha,T as SemRede,R as VoltarMantemDados,pe as __namedExportsOrder,ue as default};
