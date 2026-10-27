import{j as e}from"./jsx-runtime-BG4uI0fO.js";import{u as a,M as d}from"./blocks-z3NSnPgd.js";import{D as i,T as c}from"./amostras-CklqDKzW.js";import{C as s}from"./carregando-DAWDePKN.js";import"./iframe-6s3UqoeO.js";import"./preload-helper-BqjOJQfC.js";import"./index-We7-4c2k.js";function n(r){const o={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...a(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Fundamentos/Movimento"}),`
`,e.jsx(o.h1,{id:"movimento",children:"Movimento"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Uma curva só"}),": ",e.jsx(o.code,{children:"--mov-curva: cubic-bezier(.2, .8, .2, 1)"})," (definida em ",e.jsx(o.code,{children:"src/estilos.css"}),`, bloco "Animações"),
com durações de `,e.jsx(o.strong,{children:"150 a 300ms"}),` para interface. Loop só no loader e no ponto "ao vivo". Gráficos entram com
animações um pouco mais longas (420–650ms), uma vez, ao montar.`]}),`
`,e.jsx(i,{}),`
`,e.jsx(o.h2,{id:"keyframes-disponíveis",children:"Keyframes disponíveis"}),`
`,e.jsx(c,{colunas:["Keyframe","Uso"],linhas:[[e.jsx(o.code,{children:"hk-entrar"}),"conteúdo da rota e cards do Dashboard (opacidade + 6px)"],[e.jsxs(e.Fragment,{children:[e.jsx(o.code,{children:"hk-aparecer"})," / ",e.jsx(o.code,{children:"hk-sumir"})]}),"rótulos da sidebar, véus"],[e.jsx(o.code,{children:"hk-crescer-y"}),"mini-barras e pilhas do BarrasFoco"],[e.jsx(o.code,{children:"hk-crescer-x"}),"trilha da LinhaMeta e ProgressoSegmentado"],[e.jsx(o.code,{children:"hk-revelar-x"}),"ProporcaoBalao"],[e.jsx(o.code,{children:"hk-desenhar-arco"}),"Donut e Gauge"],[e.jsxs(e.Fragment,{children:[e.jsx(o.code,{children:"hk-anel-girar"})," / ",e.jsx(o.code,{children:"hk-anel-correr"})]}),"CarregandoHorkos"],[e.jsx(o.code,{children:"hk-shimmer"}),"skeleton"]]}),`
`,e.jsx(o.h2,{id:"movimento-reduzido",children:"Movimento reduzido"}),`
`,e.jsxs(o.p,{children:["Com ",e.jsx(o.code,{children:"prefers-reduced-motion: reduce"}),":"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["as animações de entrada e de gráfico são desligadas pelo bloco de media query de ",e.jsx(o.code,{children:"estilos.css"}),";"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:".hk-skeleton"})," para o brilho e fica cinza liso;"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"NumeroContado"})," mostra o valor final direto (sem contagem);"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"CarregandoHorkos"})," para de girar e só pulsa a opacidade (classe ",e.jsx(o.code,{children:"hk-carregando--sem-movimento"}),", aplicada pelo JS)."]}),`
`]}),`
`,e.jsxs(o.p,{children:[`Para conferir: no macOS, Ajustes do Sistema → Acessibilidade → Tela → Reduzir movimento; ou no DevTools,
Rendering → `,e.jsx(o.em,{children:"Emulate CSS media feature prefers-reduced-motion"}),"."]}),`
`,e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center",padding:20,background:"#fff",borderRadius:16,border:"1px solid var(--line-200)"},children:[e.jsx(s,{tamanho:"sm"}),e.jsx(s,{tamanho:"md"}),e.jsx(s,{tamanho:"lg"})]})]})}function p(r={}){const{wrapper:o}={...a(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(n,{...r})}):n(r)}export{p as default};
