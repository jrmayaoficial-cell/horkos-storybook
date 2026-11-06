import{t as n,s as f,m as G}from"./jornadaOperar-CdWB5P_D.js";import"./ShellJornada-ggS-LG-j.js";import"./jsx-runtime-CJdfzO1q.js";import"./iframe-DSB827HF.js";import"./preload-helper-D6kgxu3v.js";import"./dadosShell-C3t6IDDB.js";import"./index-DK3eqEis.js";import"./index-zfdEPtc7.js";import"./v2-S2RE6p5R.js";import"./index-VjnMxz39.js";import"./api-CwdEbqb0.js";import"./index-DP2vJt5U.js";import"./marca-C9K9x3uD.js";import"./carregando-BectR68V.js";import"./celulas-BiRcaXwa.js";/* empty css              */import"./MiniBarras-MtYykder.js";import"./cores-D-iLqYVd.js";import"./Login-Da6oaM7E.js";import"./etapas-DGzwxBPF.js";/* empty css                */const{expect:t,fireEvent:M,userEvent:r,waitFor:i}=__STORYBOOK_MODULE_TEST__,T=G("/nova","Jornada de Nova sessão dentro do shell, papel admin: formulário em cinco etapas (Canal, Cliente, Contrato, Adicionais, Revisão) com roteiros e departamentos fictícios; Continuar com obrigatório vazio marca o campo, diz quantos faltam e leva o foco a ele; o envio na Revisão trava a barra e, com sucesso, mostra o link da sessão com Copiar link. Falha de rede e erro do servidor aparecem como texto legível no topo, com os dados mantidos.",null),pa={title:"Jornadas/Nova sessão",...T,parameters:{...T.parameters,jornada:{}}};async function B(a){const e=await a.findByRole("button",{name:/^Continuar/});return await i(()=>t(e).not.toHaveAttribute("aria-disabled")),e}async function Q(a,e){await i(()=>t(a.getByRole("heading",{level:2})).toHaveTextContent(e))}async function s(a,e){await r.click(await B(a)),await Q(a,e)}function z(a){return a.placeholder==="DD/MM/AAAA"?"27/09/1999":a.placeholder==="000.000.000-00"?"106.365.814-46":"1500"}const w=a=>[...a.querySelectorAll('input[aria-invalid="true"]')];async function v(a,e){const o=a.ownerDocument,E=n(a);await r.click(await B(E)),await i(()=>t(w(o).length).toBeGreaterThan(0));for(const R of w(o))M.change(R,{target:{value:z(R)}});await i(()=>t(w(o)).toHaveLength(0)),await s(E,e)}async function x(a){const e=n(a);await s(e,/Quem vai confirmar/),await v(a,/O que será confirmado/),await v(a,/Dados adicionais/),await s(e,/Revise antes de criar/)}const y=a=>a.findByRole("button",{name:/Criar link|Criar e enviar/}),c={name:"Nova sessão",play:async({canvasElement:a})=>{const e=n(a);await x(a),await r.click(await y(e)),await t(await e.findByText("Sessão criada")).toBeInTheDocument(),await t(e.getByRole("button",{name:"Copiar link da sessão"})).toBeInTheDocument(),await f()}},m={parameters:{jornada:{respostas:{"POST /v1/sessoes":{status:400,corpo:{erro:"CPF inválido"}}}}},play:async({canvasElement:a})=>{const e=n(a),o=a.ownerDocument;await s(e,/Quem vai confirmar/),await r.click(await B(e)),await i(()=>t(o.activeElement).toBe(w(o)[0])),await t(await e.findByText(/^Falta corrigir \d+ campos?:/)).toBeInTheDocument(),await v(a,/O que será confirmado/),await v(a,/Dados adicionais/),await s(e,/Revise antes de criar/),await r.click(await y(e)),await t(await e.findByText(/Não foi possível criar a sessão\. Confira os campos e tente de novo\. Motivo: CPF inválido/)).toBeInTheDocument(),await f()}},l={name:"Erro de rede",parameters:{jornada:{semRede:["POST /v1/sessoes"]}},play:async({canvasElement:a})=>{const e=n(a);await x(a),await r.click(await y(e)),await t(await e.findByText(/Sem conexão com o servidor/)).toBeInTheDocument(),await f()}},d={parameters:{jornada:{pendurar:["POST /v1/sessoes"]}},play:async({canvasElement:a})=>{const e=n(a);await x(a),await r.click(await y(e)),await t(await e.findByRole("button",{name:/Criando/})).toBeDisabled(),await t(e.getByRole("button",{name:/^Voltar/})).toBeDisabled()}},p={name:"Roteiros carregando",parameters:{jornada:{pendurar:["GET /v1/roteiros"]}},play:async({canvasElement:a})=>{const e=n(a);await t(await e.findByText("Carregando roteiros…")).toBeInTheDocument(),await t(e.getByRole("button",{name:/^Continuar/})).toHaveAttribute("aria-disabled","true")}},u={name:"Roteiros com falha",parameters:{jornada:{falhar:["GET /v1/roteiros"]}},play:async({canvasElement:a})=>{const e=n(a),o=await e.findByRole("alert");await t(o).toHaveTextContent(/carregar os roteiros/),await t(e.getByRole("button",{name:"Tentar de novo"})).toBeInTheDocument(),await t(e.getByRole("button",{name:/^Continuar/})).toHaveAttribute("aria-disabled","true")}},ua=["NovaSessao","Erro","SemRede","Enviando","RoteirosCarregando","RoteirosComFalha"];var b,C,D;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Nova sessão",
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await irAteRevisao(canvasElement);
    await userEvent.click(await botaoCriar(tela));
    await expect(await tela.findByText("Sessão criada")).toBeInTheDocument();
    await expect(tela.getByRole("button", {
      name: "Copiar link da sessão"
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(D=(C=c.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var g,h,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(S=(h=m.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var O,k,A;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(A=(k=l.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var F,I,j;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(j=(I=d.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var P,H,J;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(J=(H=p.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var N,_,q;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(q=(_=u.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};export{d as Enviando,m as Erro,c as NovaSessao,p as RoteirosCarregando,u as RoteirosComFalha,l as SemRede,ua as __namedExportsOrder,pa as default};
