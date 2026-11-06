import{s as u,t as r,m as La}from"./jornadaOperar-BdAIGCIC.js";import{C as A,i as Ia}from"./ShellJornada-D-peWuGd.js";import"./jsx-runtime-QefsGvVP.js";import"./iframe-C55Pa0Sl.js";import"./preload-helper-D6kgxu3v.js";import"./dadosShell-AcLNeeYM.js";import"./index-B0lqomwj.js";import"./index-Ci4iLD9v.js";import"./v2-DnZAwx-i.js";import"./index-BV2uSZem.js";import"./api-DeTcSHTh.js";import"./index-lEDuBR7W.js";import"./marca-DMRGkCqi.js";import"./carregando-D5W0zsYz.js";import"./celulas-Dk3hBIkz.js";/* empty css              */import"./MiniBarras-CIG3rbZ8.js";import"./cores-D-iLqYVd.js";import"./Login-9buva6Cs.js";import"./etapas-Bb0VYDqs.js";/* empty css                */const{expect:t,fireEvent:d,userEvent:o,waitFor:m}=__STORYBOOK_MODULE_TEST__,P=La("/nova","Jornada de Nova sessão dentro do shell, papel admin: formulário em cinco etapas (Canal, Cliente, Contrato, Adicionais, Revisão) com roteiros e departamentos fictícios; Continuar com obrigatório vazio marca o campo, diz quantos faltam e leva o foco a ele; o envio na Revisão trava a barra e, com sucesso, mostra o link da sessão com Copiar link. Falha de rede e erro do servidor aparecem como texto legível no topo, com os dados mantidos.",null),ne={title:"Jornadas/Nova sessão",...P,beforeEach:e=>{const a=P.beforeEach(e),n=Ia();return()=>{n(),a()}},parameters:{...P.parameters,jornada:{}}};async function D(e){const a=await e.findByRole("button",{name:/^Continuar/});return await m(()=>t(a).not.toHaveAttribute("aria-disabled")),a}async function p(e,a){await m(()=>t(e.getByRole("heading",{level:2})).toHaveTextContent(a))}async function s(e,a){await o.click(await D(e)),await p(e,a)}const Fa=[[/Referência externa/,"PROP-25050815"],[/mãe/i,"Maria Neide Souza"],[/Nome completo/,"Matheus Vinicius Lima"],[/^CPF/,"106.365.814-46"],[/nascimento/i,"27/09/1999"],[/^Banco/,"Banco do Brasil"],[/Prazo/i,"84"]];function Ha(e){var i,l,I;const a=((I=(l=(i=e.labels)==null?void 0:i[0])==null?void 0:l.textContent)==null?void 0:I.trim())??"",n=Fa.find(([Aa])=>Aa.test(a));return n?n[1]:e.placeholder==="DD/MM/AAAA"?"27/09/1999":"1500"}const h=e=>[...e.querySelectorAll('input[aria-invalid="true"]')];async function c(e,a){const n=e.ownerDocument,i=r(e);await o.click(await D(i)),await m(()=>t(h(n).length).toBeGreaterThan(0));for(const l of h(n))d.change(l,{target:{value:Ha(l)}});await m(()=>t(h(n)).toHaveLength(0)),await s(i,a)}async function L(e){const a=r(e);await s(a,/Quem vai confirmar/),await c(e,/O que será confirmado/),await c(e,/Dados adicionais/),await s(a,/Revise antes de criar/)}const S=e=>e.findByRole("button",{name:/Criar link|Criar e enviar/}),ka=["Canal","Cliente","Contrato","Dados adicionais"],w={name:"Nova sessão",play:async({canvasElement:e})=>{const a=r(e);await L(e);for(const i of ka)await t(a.getByRole("button",{name:`Editar etapa ${i}`})).toBeInTheDocument();(await S(a)).focus(),await o.keyboard("{Enter}"),await t(await a.findByText("Sessão criada")).toBeInTheDocument(),await t(a.getByRole("button",{name:"Copiar link da sessão"})).toBeInTheDocument(),await u()}},g={parameters:{jornada:{respostas:{"POST /v1/sessoes":{status:400,corpo:{erro:"CPF inválido"}}}}},play:async({canvasElement:e})=>{const a=r(e),n=e.ownerDocument;await s(a,/Quem vai confirmar/),await o.click(await D(a)),await m(()=>t(n.activeElement).toBe(h(n)[0])),await t(await a.findByText(/^Falta corrigir \d+ campos?:/)).toBeInTheDocument(),await c(e,/O que será confirmado/),await c(e,/Dados adicionais/),await s(a,/Revise antes de criar/),await o.click(await S(a)),await t(await a.findByText(/Não foi possível criar a sessão\. Confira os campos e tente de novo\. Motivo: CPF inválido/)).toBeInTheDocument(),await u()}},T={name:"Erro de rede",parameters:{jornada:{semRede:["POST /v1/sessoes"]}},play:async({canvasElement:e})=>{const a=r(e);await L(e),await o.click(await S(a)),await t(await a.findByText(/Sem conexão com o servidor/)).toBeInTheDocument(),await u()}},C={parameters:{jornada:{pendurar:["POST /v1/sessoes"]}},play:async({canvasElement:e})=>{const a=r(e);await L(e),await o.click(await S(a)),await t(await a.findByRole("button",{name:/Criando/})).toBeDisabled(),await t(a.getByRole("button",{name:/^Voltar/})).toBeDisabled()}},b={name:"Roteiros carregando",parameters:{jornada:{pendurar:["GET /v1/roteiros"]}},play:async({canvasElement:e})=>{const a=r(e);await t(await a.findByText("Carregando roteiros…")).toBeInTheDocument(),await t(a.getByRole("button",{name:/^Continuar/})).toHaveAttribute("aria-disabled","true")}},R={name:"Roteiros com falha",parameters:{jornada:{falhar:["GET /v1/roteiros"]}},play:async({canvasElement:e})=>{const a=r(e),n=await a.findByRole("alert");await t(n).toHaveTextContent(/carregar os roteiros/),await t(a.getByRole("button",{name:"Tentar de novo"})).toBeInTheDocument(),await t(a.getByRole("button",{name:/^Continuar/})).toHaveAttribute("aria-disabled","true")}},v={name:"Dados adicionais e Revisão",play:async({canvasElement:e})=>{const a=r(e);await s(a,/Quem vai confirmar/),await c(e,/O que será confirmado/),await c(e,/Dados adicionais/);const n=a.getByRole("button",{name:/^Contato/});await t(n).toHaveAttribute("aria-expanded","false"),await o.click(n),await t(n).toHaveAttribute("aria-expanded","true"),d.change(a.getByRole("textbox",{name:/E-mail/}),{target:{value:"cliente@exemplo.com"}}),await m(()=>t(n).toHaveTextContent("1 de")),await o.click(n),await t(n).toHaveAttribute("aria-expanded","false"),await o.click(a.getByRole("button",{name:"Pular etapa"})),await p(a,/Revise antes de criar/),await t(a.getByRole("region",{name:"Dados adicionais"})).toHaveTextContent("Contato (1)"),await o.click(a.getByRole("button",{name:"Editar etapa Cliente"})),await p(a,/Quem vai confirmar/),await o.click(a.getByRole("button",{name:/Voltar à revisão/})),await p(a,/Revise antes de criar/),await u()}},E={name:"Canal humano",play:async({canvasElement:e})=>{const a=r(e);await D(a),await o.click(a.getByRole("radio",{name:/Atendente humano/}));const n=await a.findByLabelText(/Roteiro \(condução humana\)/),i=[...n.options].find(l=>l.value&&!l.disabled);d.change(n,{target:{value:i.value}}),await s(a,/Quem vai confirmar/),await c(e,/O que será confirmado/),await c(e,/Dados adicionais/),await s(a,/Revise antes de criar/),await t(a.getByRole("region",{name:"Canal"})).toHaveTextContent("Atendente humano"),await o.click(await a.findByRole("button",{name:"Criar e enviar para a fila"})),await t(await a.findByText("Sessão criada")).toBeInTheDocument(),await u()}},x={name:"Voltar mantém os dados",play:async({canvasElement:e})=>{const a=r(e);await s(a,/Quem vai confirmar/);const n=a.getByLabelText(/Nome completo \*/);await o.type(n,"Ana Lima"),await o.click(a.getByRole("button",{name:/^Voltar/})),await p(a,/Como a chamada acontece/),await s(a,/Quem vai confirmar/),await t(a.getByLabelText(/Nome completo \*/).value).toBe("Ana Lima")}},y={name:"CPF inválido",play:async({canvasElement:e})=>{const a=r(e);await s(a,/Quem vai confirmar/);const n=a.getByLabelText(/^CPF/);await o.type(n,"10636581447"),await o.tab(),await t(await a.findByText("CPF inválido. Confira os números.")).toBeInTheDocument()}};async function Pa(e){const a=r(e);await s(a,/Quem vai confirmar/),await c(e,/O que será confirmado/),await c(e,/Dados adicionais/);const n=a.getByRole("button",{name:/^Endereço/});return await o.click(n),await t(n).toHaveAttribute("aria-expanded","true"),a}const B={name:"CEP preenche o endereço",play:async({canvasElement:e})=>{const a=await Pa(e),n=a.getByLabelText(/^Logradouro/);d.change(n,{target:{value:"Rua do operador"}}),d.change(a.getByLabelText(/^CEP/),{target:{value:A.encontrado}}),await t(await a.findByText("Buscando endereço…")).toBeInTheDocument(),await m(()=>t(a.getByLabelText(/^Bairro/).value).toBe("Bela Vista")),await t(a.getByLabelText(/^Cidade/).value).toBe("São Paulo"),await t(n.value).toBe("Rua do operador"),await t(a.getByText(/Endereço preenchido pelo CEP/)).toBeInTheDocument(),await t(a.getByRole("button",{name:/^Endereço/})).toHaveTextContent("5 de"),await u()}},f={name:"CEP não encontrado",play:async({canvasElement:e})=>{const a=await Pa(e),n=a.getByLabelText(/^CEP/);d.change(n,{target:{value:A.inexistente}}),await t(await a.findByText("CEP não encontrado, preencha à mão")).toBeInTheDocument(),d.change(n,{target:{value:A.foraDoAr}}),await t(await a.findByText("Buscando endereço…")).toBeInTheDocument(),await t(await a.findByText("CEP não encontrado, preencha à mão")).toBeInTheDocument();const i=a.getByLabelText(/^Cidade/);d.change(i,{target:{value:"Poconé"}}),await m(()=>t(i.value).toBe("Poconé")),await o.click(a.getByRole("button",{name:"Pular etapa"})),await p(a,/Revise antes de criar/),await t(a.getByRole("region",{name:"Dados adicionais"})).toHaveTextContent("Endereço (2)"),await u()}},oe=["NovaSessao","Erro","SemRede","Enviando","RoteirosCarregando","RoteirosComFalha","DadosAdicionais","FluxoHumano","VoltarMantemDados","CpfInvalido","CepPreenche","CepNaoEncontrado"];var F,H,k,O,V;w.parameters={...w.parameters,docs:{...(F=w.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(k=(H=w.parameters)==null?void 0:H.docs)==null?void 0:k.source},description:{story:`Fluxo feliz do canal IA: Revisão com um Editar por bloco, e só Enter com o
foco no botão final cria.`,...(V=(O=w.parameters)==null?void 0:O.docs)==null?void 0:V.description}}};var M,_,N;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(N=(_=g.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var Q,q,j;T.parameters={...T.parameters,docs:{...(Q=T.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(j=(q=T.parameters)==null?void 0:q.docs)==null?void 0:j.source}}};var J,z,G;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(G=(z=C.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var U,$,K;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(K=($=b.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};var Y,W,X;R.parameters={...R.parameters,docs:{...(Y=R.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(X=(W=R.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Z,aa,ea,ta,na;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ea=(aa=v.parameters)==null?void 0:aa.docs)==null?void 0:ea.source},description:{story:`Grupos de "Dados adicionais" nascem recolhidos; abrir, preencher, fechar e
pular mantêm o que foi digitado, e a Revisão conta por grupo.`,...(na=(ta=v.parameters)==null?void 0:ta.docs)==null?void 0:na.description}}};var oa,ra,ia,sa,ca;E.parameters={...E.parameters,docs:{...(oa=E.parameters)==null?void 0:oa.docs,source:{originalSource:`{
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
}`,...(ia=(ra=E.parameters)==null?void 0:ra.docs)==null?void 0:ia.source},description:{story:'Canal humano: roteiro de condução humana e botão final "enviar para a fila".',...(ca=(sa=E.parameters)==null?void 0:sa.docs)==null?void 0:ca.description}}};var la,da,ma,ua,pa;x.parameters={...x.parameters,docs:{...(la=x.parameters)==null?void 0:la.docs,source:{originalSource:`{
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
}`,...(ma=(da=x.parameters)==null?void 0:da.docs)==null?void 0:ma.source},description:{story:"Voltar não valida e mantém o que foi digitado na etapa anterior.",...(pa=(ua=x.parameters)==null?void 0:ua.docs)==null?void 0:pa.description}}};var wa,va,Ea,xa,ya;y.parameters={...y.parameters,docs:{...(wa=y.parameters)==null?void 0:wa.docs,source:{originalSource:`{
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
}`,...(Ea=(va=y.parameters)==null?void 0:va.docs)==null?void 0:Ea.source},description:{story:"CPF com dígito errado reclama ao sair do campo, sem esperar o Continuar.",...(ya=(xa=y.parameters)==null?void 0:xa.docs)==null?void 0:ya.description}}};var Ba,fa,ga,Ta,Ca;B.parameters={...B.parameters,docs:{...(Ba=B.parameters)==null?void 0:Ba.docs,source:{originalSource:`{
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
}`,...(ga=(fa=B.parameters)==null?void 0:fa.docs)==null?void 0:ga.source},description:{story:`CEP completo busca no ViaCEP (falso), mostra "Buscando" e preenche só o
que está vazio: a rua digitada antes pelo operador fica.`,...(Ca=(Ta=B.parameters)==null?void 0:Ta.docs)==null?void 0:Ca.description}}};var ba,Ra,ha,Da,Sa;f.parameters={...f.parameters,docs:{...(ba=f.parameters)==null?void 0:ba.docs,source:{originalSource:`{
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
}`,...(ha=(Ra=f.parameters)==null?void 0:Ra.docs)==null?void 0:ha.source},description:{story:`CEP inexistente e serviço fora do ar: aviso que não bloqueia, e o
endereço segue preenchível à mão.`,...(Sa=(Da=f.parameters)==null?void 0:Da.docs)==null?void 0:Sa.description}}};export{f as CepNaoEncontrado,B as CepPreenche,y as CpfInvalido,v as DadosAdicionais,C as Enviando,g as Erro,E as FluxoHumano,w as NovaSessao,b as RoteirosCarregando,R as RoteirosComFalha,T as SemRede,x as VoltarMantemDados,oe as __namedExportsOrder,ne as default};
