import{S as p,p as u}from"./ShellJornada-2dJvRXk3.js";import"./jsx-runtime-B7dY8ZKC.js";import"./iframe-Dr3SbXMm.js";import"./preload-helper-D6kgxu3v.js";import"./dadosShell-D4gKWzE_.js";import"./index-DxYZICoO.js";import"./index-XsrJo1A_.js";import"./v2-9UoCLKRC.js";import"./index-BJE_YuEh.js";import"./api-DeTcSHTh.js";import"./index-DqLvvGBd.js";import"./marca-BVn5hr6c.js";import"./carregando-BI6OXTmy.js";import"./celulas-CvIpzDFd.js";/* empty css              */import"./CartaoKpi-Dtcx1Yh_.js";import"./MiniBarras-tBIA7qMk.js";import"./cores-D-iLqYVd.js";import"./Login-X20zB-xh.js";import"./etapas-I5z5T4KK.js";/* empty css                */const{expect:a,waitFor:S,within:h}=__STORYBOOK_MODULE_TEST__,P={title:"Jornadas/Sessões",component:p,args:{rotaInicial:"/sessoes"},beforeEach:()=>u(),parameters:{layout:"fullscreen",controls:{disable:!0},docs:{story:{inline:!1,height:"720px"},description:{component:'Jornada de Sessões dentro do shell, papel admin: lista com status variados e sessões aguardando revisão; clicar abre o dossiê (/sessoes/:id) com cliente, evidências e os botões de revisão (Recusar exige observação). Voltar retorna à lista. Os selos de Status e Resultado aparecem sempre inteiros: texto longo ("Entradas esgotadas", "Pendente veredito IA") quebra em duas linhas dentro do selo, nunca com reticências. As chamadas `/v1/*` respondem de uma API falsa em memória (`src/paginas/stories/apiFalsa.ts`); nenhuma API real é chamada e os dados são fictícios.'}}}},f=["Entradas esgotadas","Pendente veredito IA"];function r(e){return e.scrollWidth>e.clientWidth+1}const o={name:"Sessões",play:async({canvasElement:e,step:n})=>{const m=h(e.ownerDocument.body);await n("os selos longos de Status e Resultado aparecem inteiros, sem reticências",async()=>{for(const t of f){const s=await S(()=>m.getAllByText(t),{timeout:4e3});for(const d of s)await a(r(d)).toBe(!1)}}),await n("nenhum selo da lista é cortado",async()=>{const t=[...e.ownerDocument.querySelectorAll(".hk-lista-pilula")];await a(t.length).toBeGreaterThan(0),await a(t.filter(r).map(s=>s.textContent)).toEqual([])})}},k=["Sessoes"];var i,l,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Sessões",
  play: async ({
    canvasElement,
    step
  }) => {
    const tela = within(canvasElement.ownerDocument.body);
    await step("os selos longos de Status e Resultado aparecem inteiros, sem reticências", async () => {
      for (const texto of SELOS_LONGOS) {
        const selos = await waitFor(() => tela.getAllByText(texto), {
          timeout: 4000
        });
        for (const selo of selos) await expect(seloCortado(selo)).toBe(false);
      }
    });
    await step("nenhum selo da lista é cortado", async () => {
      const selos = [...canvasElement.ownerDocument.querySelectorAll<HTMLElement>(".hk-lista-pilula")];
      await expect(selos.length).toBeGreaterThan(0);
      await expect(selos.filter(seloCortado).map(s => s.textContent)).toEqual([]);
    });
  }
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};export{o as Sessoes,k as __namedExportsOrder,P as default};
