import{j as e}from"./jsx-runtime-CnGeCed7.js";import{u as a,M as t}from"./blocks-Cfn8irFH.js";import{G as r}from"./amostras-D3BjhD7H.js";import"./iframe-TWammDK-.js";import"./preload-helper-D6kgxu3v.js";import"./index-BG6Z0xWT.js";function s(n){const o={code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Fundamentos/Cores"}),`
`,e.jsx(o.h1,{id:"cores",children:"Cores"}),`
`,e.jsxs(o.p,{children:["Os valores abaixo são lidos de ",e.jsx(o.code,{children:"src/ds/tokens.css"}),` no momento em que a página abre. Cada amostra mostra o contraste
contra branco e contra `,e.jsx(o.code,{children:"--texto"})," (",e.jsx(o.code,{children:"#111C26"}),"), com o nível WCAG: ",e.jsx(o.strong,{children:"AA"})," pede 4,5:1 para texto normal; ",e.jsx(o.strong,{children:"3:1"}),` basta para
texto grande (≥ 24px, ou ≥ 18,66px em negrito) e para bordas e ícones de controle (WCAG 1.4.11).`]}),`
`,e.jsx(o.h2,{id:"petrol",children:"Petrol"}),`
`,e.jsxs(o.p,{children:["Cor da marca. ",e.jsx(o.code,{children:"--petrol-700"})," é a ação primária; ",e.jsx(o.code,{children:"--petrol-600"}),` é o hover dela (o 800 e o 900 ficam a 1,1:1 do 700 e o
hover não se via).`]}),`
`,e.jsx(r,{tokens:[["--petrol-900","destaque escuro (--preto)"],"--petrol-800",["--petrol-700","ação primária (--acao)"],["--petrol-600","hover da ação (--acao-hover)"],"--petrol-500","--petrol-300",["--petrol-200","texto secundário no escuro"],"--petrol-100",["--petrol-050","fundo suave da ação"]]}),`
`,e.jsx(o.h2,{id:"proof",children:"Proof"}),`
`,e.jsxs(o.p,{children:["Acento teal da prova. Preenchimento apenas; texto usa ",e.jsx(o.code,{children:"--proof-deep"})," ou ",e.jsx(o.code,{children:"--proof-darker"}),"."]}),`
`,e.jsx(r,{tokens:[["--proof","preenchimento (--acento)"],["--proof-deep","texto / linha fina"],"--proof-darker",["--proof-bg","fundo (--acento-suave)"],"--proof-border"]}),`
`,e.jsx(o.h2,{id:"ink-linhas-e-superfícies-neutras",children:"Ink, linhas e superfícies neutras"}),`
`,e.jsx(r,{tokens:[["--ink-900","texto principal (--texto)"],"--ink-800","--ink-700",["--ink-600","texto secundário (--texto-2)"],"--ink-500",["--ink-400","placeholder, desabilitado"],"--line-300","--line-200",["--line-campo","borda de campo editável (3:1)"],"--surface-2","--surface-alt",["--canvas","fundo da página"],"--canvas-deep","--white"]}),`
`,e.jsx(o.h2,{id:"semânticas",children:"Semânticas"}),`
`,e.jsxs(o.p,{children:["Cada família tem quatro papéis: ",e.jsx(o.strong,{children:"base"})," (ícone, ponto), ",e.jsx(o.strong,{children:"fill"})," (preenchimento sólido com texto branco), ",e.jsx(o.strong,{children:"text"}),`
(texto sobre fundo claro) e `,e.jsx(o.strong,{children:"bg/border"})," (caixas de mensagem e status)."]}),`
`,e.jsx(r,{tokens:["--success","--success-fill","--success-text","--success-bg","--success-border","--warning","--warning-fill","--warning-text","--warning-bg","--warning-border","--risk","--risk-fill","--risk-text","--risk-bg","--risk-border"]}),`
`,e.jsx(o.h2,{id:"violeta-e-azul",children:"Violeta e azul"}),`
`,e.jsx(r,{tokens:[["--violet-700",'texto de "em atendimento"'],["--violet-500","destaque do roster"],"--violet-200","--violet-050",["--blue","SÓ link, foco e IA"],["--focus-ring","anel de foco"]]}),`
`,e.jsx(o.h2,{id:"papéis-v2",children:"Papéis v2"}),`
`,e.jsxs(o.p,{children:["Os componentes v2 usam ",e.jsx(o.strong,{children:"papéis"}),`, não a paleta direto. Os nomes vêm da referência (Moneed); os valores apontam para a
paleta HORKOS.`]}),`
`,e.jsx(r,{tokens:[["--acao","ação primária"],["--acao-hover","hover da ação"],["--acao-suave","fundo de card/linha da ação"],["--acento","acento (preenchimento)"],["--acento-suave","fundo do acento"],["--preto","destaque escuro, tile herói"],["--preto-hover","hover no escuro"],["--preto-trilha","trilha de gauge no escuro"],["--texto","texto"],["--texto-2","texto secundário"],["--texto-inverso-2","texto secundário no escuro"],["--linha","divisória"],["--linha-suave","borda suave"],["--linha-controle","borda de controle"],"--verde","--verde-icone","--verde-suave","--vermelho","--vermelho-texto","--vermelho-suave","--ambar","--ambar-suave"]}),`
`,e.jsx(o.h2,{id:"superfícies",children:"Superfícies"}),`
`,e.jsx(r,{tokens:[["--fundo","= --surface-page"],["--sup-card","= --surface-block"],"--sup-card-2",["--sup-interna","= --surface-inset"],"--sup-cinza"]}),`
`,e.jsx(o.h2,{id:"série-de-gráfico",children:"Série de gráfico"}),`
`,e.jsxs(o.p,{children:["Espelhada em ",e.jsx(o.code,{children:"src/graficos/paleta.ts"})," (o echarts pinta em canvas e não lê ",e.jsx(o.code,{children:"var()"}),"); o teste ",e.jsx(o.code,{children:"paleta.test.ts"}),` falha se
os dois divergirem. Ordem de uso: 1 → 6; `,e.jsx(o.code,{children:"--chart-rest"}),' é "fora de foco / restante".']}),`
`,e.jsx(r,{tokens:["--chart-1","--chart-2","--chart-3","--chart-4","--chart-5","--chart-6","--chart-rest"]})]})}function x(n={}){const{wrapper:o}={...a(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(s,{...n})}):s(n)}export{x as default};
