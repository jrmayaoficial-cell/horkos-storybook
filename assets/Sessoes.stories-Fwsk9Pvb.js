import{S as p,p as u}from"./ShellJornada-D6or9w_N.js";import"./jsx-runtime-CIMg3zCe.js";import"./iframe-sQhv-dP9.js";import"./preload-helper-D6kgxu3v.js";import"./dadosShell-DVjA70Zd.js";import"./index-Cca0CcRs.js";import"./index-BUBJGiik.js";import"./v2-QXom_1Mi.js";import"./index-C1SKTYOl.js";import"./api-DeTcSHTh.js";import"./index-KxmTJ2KI.js";import"./marca-JJvqtdKG.js";import"./carregando-Cu9nLz69.js";import"./celulas-DMaLRg05.js";/* empty css              */import"./MiniBarras-D1hOdhnB.js";import"./cores-D-iLqYVd.js";import"./Login-DFawTORA.js";import"./etapas-DD6roYoj.js";/* empty css                */const{expect:a,waitFor:S,within:h}=__STORYBOOK_MODULE_TEST__,J={title:"Jornadas/Sessões",component:p,args:{rotaInicial:"/sessoes"},beforeEach:()=>u(),parameters:{layout:"fullscreen",controls:{disable:!0},docs:{story:{inline:!1,height:"720px"},description:{component:'Jornada de Sessões dentro do shell, papel admin: lista com status variados e sessões aguardando revisão; clicar abre o dossiê (/sessoes/:id) com cliente, evidências e os botões de revisão (Recusar exige observação). Voltar retorna à lista. Os selos de Status e Resultado aparecem sempre inteiros: texto longo ("Entradas esgotadas", "Pendente veredito IA") quebra em duas linhas dentro do selo, nunca com reticências. As chamadas `/v1/*` respondem de uma API falsa em memória (`src/paginas/stories/apiFalsa.ts`); nenhuma API real é chamada e os dados são fictícios.'}}}},f=["Entradas esgotadas","Pendente veredito IA"];function r(e){return e.scrollWidth>e.clientWidth+1}const o={name:"Sessões",play:async({canvasElement:e,step:n})=>{const m=h(e.ownerDocument.body);await n("os selos longos de Status e Resultado aparecem inteiros, sem reticências",async()=>{for(const t of f){const s=await S(()=>m.getAllByText(t),{timeout:4e3});for(const d of s)await a(r(d)).toBe(!1)}}),await n("nenhum selo da lista é cortado",async()=>{const t=[...e.ownerDocument.querySelectorAll(".hk-lista-pilula")];await a(t.length).toBeGreaterThan(0),await a(t.filter(r).map(s=>s.textContent)).toEqual([])})}},P=["Sessoes"];var i,l,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};export{o as Sessoes,P as __namedExportsOrder,J as default};
