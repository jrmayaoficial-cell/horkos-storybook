import{t as r,s as w,m as k}from"./jornadaOperar-DBvmxNnp.js";import"./ShellJornada-tlbKPUgy.js";import"./jsx-runtime-hwOjxr5T.js";import"./iframe-BKUFfilm.js";import"./preload-helper-D6kgxu3v.js";import"./index-BDmM-NUw.js";import"./index-DQ_MpPP-.js";import"./marca-B8cpbcT0.js";import"./carregando-ByRFPaQ5.js";import"./dadosShell-Bt0g0ikW.js";import"./index-BzsMuCcw.js";import"./v2-Dl74Zlh1.js";import"./index-CM13nfd8.js";import"./api-OBf8VTRj.js";import"./Login-CvKNESPF.js";import"./celulas-BjNqjaph.js";/* empty css              */import"./paleta-B-duPMKZ.js";import"./MiniBarras-Ds7pdgoB.js";/* empty css                */const{expect:t,fireEvent:R,userEvent:o,waitFor:p}=__STORYBOOK_MODULE_TEST__,u=k("/nova","Jornada de Nova sessão dentro do shell, papel admin: formulário com roteiros e departamentos fictícios; obrigatório vazio marca o campo e leva o foco a ele; o envio trava os campos e, com sucesso, mostra o link da sessão com Copiar link. Falha de rede e erro do servidor aparecem como texto legível no topo, com os dados mantidos.",null),X={title:"Jornadas/Nova sessão",...u,parameters:{...u.parameters,jornada:{}}};async function n(a){const e=await a.findByRole("button",{name:/Criar link|Criar e enviar/});return await p(()=>t(e).toBeEnabled()),e}function C(a){return a.placeholder==="DD/MM/AAAA"?"27/09/1999":a.placeholder==="000.000.000-00"?"106.365.814-46":"1500"}const l=a=>[...a.querySelectorAll('input[aria-invalid="true"]')];async function d(a){const e=a.ownerDocument;await o.click(await n(r(a))),await p(()=>t(l(e).length).toBeGreaterThan(0));for(const v of l(e))R.change(v,{target:{value:C(v)}});await p(()=>t(l(e)).toHaveLength(0))}const s={name:"Nova sessão",play:async({canvasElement:a})=>{const e=r(a);await d(a),await o.click(await n(e)),await t(await e.findByText("Sessão criada")).toBeInTheDocument(),await t(e.getByRole("button",{name:"Copiar link da sessão"})).toBeInTheDocument(),await w()}},i={parameters:{jornada:{respostas:{"POST /v1/sessoes":{status:400,corpo:{erro:"CPF inválido"}}}}},play:async({canvasElement:a})=>{const e=r(a);await o.click(await n(e)),await p(()=>t(a.ownerDocument.activeElement).toBe(l(a.ownerDocument)[0])),await d(a),await o.click(await n(e)),await t(await e.findByText(/Não foi possível criar a sessão\. Confira os campos e tente de novo\. Motivo: CPF inválido/)).toBeInTheDocument(),await w()}},c={name:"Erro de rede",parameters:{jornada:{semRede:["POST /v1/sessoes"]}},play:async({canvasElement:a})=>{const e=r(a);await d(a),await o.click(await n(e)),await t(await e.findByText(/Sem conexão com o servidor/)).toBeInTheDocument(),await w()}},m={parameters:{jornada:{pendurar:["POST /v1/sessoes"]}},play:async({canvasElement:a})=>{const e=r(a);await d(a),await o.click(await n(e)),await t(await e.findByRole("button",{name:/Criando/})).toBeDisabled(),await t(e.getByLabelText(/Nome completo \*/)).toBeDisabled()}},Z=["NovaSessao","Erro","SemRede","Enviando"];var E,x,y;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Nova sessão",
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await preencherObrigatorios(canvasElement);
    await userEvent.click(await botaoEnviar(tela));
    await expect(await tela.findByText("Sessão criada")).toBeInTheDocument();
    await expect(tela.getByRole("button", {
      name: "Copiar link da sessão"
    })).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var B,f,b;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
    await userEvent.click(await botaoEnviar(tela));
    await waitFor(() => expect(canvasElement.ownerDocument.activeElement).toBe(marcados(canvasElement.ownerDocument)[0]));
    await preencherObrigatorios(canvasElement);
    await userEvent.click(await botaoEnviar(tela));
    await expect(await tela.findByText(/Não foi possível criar a sessão\\. Confira os campos e tente de novo\\. Motivo: CPF inválido/)).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(b=(f=i.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var D,T,S;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
    await preencherObrigatorios(canvasElement);
    await userEvent.click(await botaoEnviar(tela));
    await expect(await tela.findByText(/Sem conexão com o servidor/)).toBeInTheDocument();
    await semRotaSemFixture();
  }
}`,...(S=(T=c.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var h,g,O;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    jornada: {
      pendurar: ["POST /v1/sessoes"]
    } satisfies OpcoesJornada
  },
  play: async ({
    canvasElement
  }) => {
    const tela = telaDe(canvasElement);
    await preencherObrigatorios(canvasElement);
    await userEvent.click(await botaoEnviar(tela));
    await expect(await tela.findByRole("button", {
      name: /Criando/
    })).toBeDisabled();
    await expect(tela.getByLabelText(/Nome completo \\*/)).toBeDisabled();
  }
}`,...(O=(g=m.parameters)==null?void 0:g.docs)==null?void 0:O.source}}};export{m as Enviando,i as Erro,s as NovaSessao,c as SemRede,Z as __namedExportsOrder,X as default};
