import{j as e}from"./jsx-runtime-CdzB93mq.js";import{A as l,S as r}from"./paleta-B-duPMKZ.js";import{T as o}from"./MiniBarras-Bzn24ooa.js";import"./iframe-BKGMgeEb.js";import"./preload-helper-D6kgxu3v.js";const v={title:"Gráficos/TabelaAcessivel",component:o,args:{rotulo:"Sessões por canal (dados fictícios)",categorias:["seg","ter","qua"],series:[{nome:"IA",valores:[120,98,143]},{nome:"Humano",valores:[40,52,37]}]},parameters:{docs:{description:{component:"Tabela visualmente oculta com o mesmo dado do gráfico: o desenho não é lido por leitor de tela, então a tabela é a alternativa textual (WCAG 1.1.1)."}}}},a={name:"Oculta e visível para inspeção",render:()=>e.jsxs("div",{style:{display:"grid",gap:10},children:[e.jsxs("p",{style:{margin:0,font:"var(--t-body)",color:"var(--texto-2)"},children:["A tabela é visualmente oculta (",e.jsx("code",{className:"hk-mono",children:".hk-sr-only"}),"): só o leitor de tela a encontra. Abaixo, a mesma tabela com a classe removida para inspeção."]}),e.jsx(o,{rotulo:"Sessões por canal (dados fictícios)",categorias:["seg","ter","qua"],series:[{nome:"IA",valores:[120,98,143],cor:l},{nome:"Humano",valores:[40,52,37],cor:r}]}),e.jsxs("div",{className:"tabela-visivel-demo",children:[e.jsx("style",{children:".tabela-visivel-demo .hk-sr-only{position:static!important;width:auto!important;height:auto!important;clip:auto!important;overflow:visible!important;white-space:normal!important;margin:0!important} .tabela-visivel-demo table{border-collapse:collapse;font:var(--t-body)} .tabela-visivel-demo th,.tabela-visivel-demo td{border:1px solid var(--line-200);padding:6px 10px;text-align:left} .tabela-visivel-demo caption{text-align:left;font:var(--t-label);padding-bottom:6px}"}),e.jsx(o,{rotulo:"Sessões por canal (dados fictícios)",categorias:["seg","ter","qua"],series:[{nome:"IA",valores:[120,98,143]},{nome:"Humano",valores:[40,52,37]}]})]})]})},b=["Inspecao"];var t,s,i;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Oculta e visível para inspeção",
  render: () => <div style={{
    display: "grid",
    gap: 10
  }}>
      <p style={{
      margin: 0,
      font: "var(--t-body)",
      color: "var(--texto-2)"
    }}>
        A tabela é visualmente oculta (<code className="hk-mono">.hk-sr-only</code>): só o leitor de tela a encontra. Abaixo, a mesma tabela com a classe removida para inspeção.
      </p>
      <TabelaAcessivel rotulo="Sessões por canal (dados fictícios)" categorias={["seg", "ter", "qua"]} series={[{
      nome: "IA",
      valores: [120, 98, 143],
      cor: ACENTO
    }, {
      nome: "Humano",
      valores: [40, 52, 37],
      cor: SUAVE
    }]} />
      <div className="tabela-visivel-demo">
        <style>{".tabela-visivel-demo .hk-sr-only{position:static!important;width:auto!important;height:auto!important;clip:auto!important;overflow:visible!important;white-space:normal!important;margin:0!important} .tabela-visivel-demo table{border-collapse:collapse;font:var(--t-body)} .tabela-visivel-demo th,.tabela-visivel-demo td{border:1px solid var(--line-200);padding:6px 10px;text-align:left} .tabela-visivel-demo caption{text-align:left;font:var(--t-label);padding-bottom:6px}"}</style>
        <TabelaAcessivel rotulo="Sessões por canal (dados fictícios)" categorias={["seg", "ter", "qua"]} series={[{
        nome: "IA",
        valores: [120, 98, 143]
      }, {
        nome: "Humano",
        valores: [40, 52, 37]
      }]} />
      </div>
    </div>
}`,...(i=(s=a.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};export{a as Inspecao,b as __namedExportsOrder,v as default};
