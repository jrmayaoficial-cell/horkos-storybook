import{j as a}from"./jsx-runtime-hwOjxr5T.js";import{a as I,A as K,b as U,E as Y,g as G,h as e,i as p,N as H,P as v,j as o,c as g}from"./v2-Dl74Zlh1.js";import"./iframe-BKUFfilm.js";import"./preload-helper-D6kgxu3v.js";import"./index-DQ_MpPP-.js";import"./index-CM13nfd8.js";const{fn:J}=__STORYBOOK_MODULE_TEST__,Q=u=>u.toLocaleString("pt-BR"),ra={title:"Componentes v2/Dados do card",component:I,args:{icone:"bar_chart",titulo:"Volume por dia",sub:"últimos 14 dias · 1.284 sessões criadas"},argTypes:{corIcone:{control:"color"}},decorators:[u=>a.jsx("div",{className:"cartao",style:{maxWidth:520},children:a.jsx(u,{})})],parameters:{docs:{description:{component:"Peças que montam os cards do Dashboard: cabeçalho, números, variação, metas, progresso, status e os estados de carregando/erro."}}}},r={name:"CabecalhoCard",args:{direita:a.jsx(U,{children:"142 em 24h"})}},s={name:"Numero e NumeroContado",render:()=>a.jsxs("div",{style:{display:"grid",gap:16},children:[a.jsx(p,{valor:"1.284",tamanho:"hero"}),a.jsx(p,{valor:"92",menor:"%",tamanho:"kpi"}),a.jsx(p,{valor:"38",menor:" min",tamanho:"sm"}),a.jsx(H,{valor:28663,formatar:Q,tamanho:"kpi"})]}),parameters:{docs:{description:{story:"A parte menor fica em 0,5em, peso 500, mesma baseline. `NumeroContado` conta até o valor em ~600ms (direto com movimento reduzido); o leitor de tela ouve só o valor final."}}}},t={name:"ChipVariacao",render:()=>a.jsxs("div",{style:{display:"grid",gap:10},children:[a.jsx(g,{delta:12,texto:"+12%",rotulo:"vs ontem (118)"}),a.jsx(g,{delta:-8,texto:"−8%",rotulo:"vs semana passada"}),a.jsx(g,{delta:0,texto:"0%",rotulo:"sem variação"})]})},n={name:"LinhaMeta",render:()=>a.jsxs("div",{style:{display:"grid",gap:8},children:[a.jsx(e,{titulo:"Taxa de sucesso",valor:"92%",pct:92}),a.jsx(e,{titulo:"Biometria aprovada",valor:"78%",pct:78,cor:"var(--acento)",nota:"meta 85%"}),a.jsx(e,{titulo:"Abandono",valor:"6%",pct:6,cor:"var(--vermelho)"}),a.jsx(e,{titulo:"Sem dado",valor:"—",pct:null})]})},i={name:"ProgressoSegmentado",render:()=>a.jsxs("div",{style:{display:"grid",gap:16},children:[a.jsx(v,{rotulo:"Fila de revisão",pct:55}),a.jsx(v,{rotulo:"Sem dado",pct:null}),a.jsx("div",{style:{padding:20,background:"var(--preto)",borderRadius:16},children:a.jsx(v,{rotulo:"Meta do dia",pct:72,escuro:!0,valor:"72 de 100"})})]})},d={name:"StatusPilula",render:()=>a.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[a.jsx(o,{tom:"success",children:"Concluída"}),a.jsx(o,{tom:"warning",children:"Aguardando"}),a.jsx(o,{tom:"risk",children:"Sem sucesso"}),a.jsx(o,{tom:"neutral",children:"Rascunho"})]})},l={name:"AvataresEmpilhados",render:()=>a.jsx(K,{rotulo:"Atendentes online",nomes:["Ana Souza","Bruno Lima","Carla Dias","Diego Reis","Elisa Prado","Fábio Melo"]})},m={name:"EsqueletoCard",render:()=>a.jsx(G,{linhas:3}),parameters:{docs:{description:{story:"Só visual (`aria-hidden`): o aviso de carregando é um por região, feito por quem monta a tela."}}}},c={name:"ErroCard",render:()=>a.jsx(Y,{texto:"Não foi possível carregar o volume.",aoTentar:J()})},sa=["Cabecalho","Numeros","Variacao","Metas","Progresso","Status","Avatares","Esqueleto","Erro"];var h,x,S;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "CabecalhoCard",
  args: {
    direita: <Chip>142 em 24h</Chip>
  }
}`,...(S=(x=r.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var C,j,E;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Numero e NumeroContado",
  render: () => <div style={{
    display: "grid",
    gap: 16
  }}>
      <Numero valor="1.284" tamanho="hero" />
      <Numero valor="92" menor="%" tamanho="kpi" />
      <Numero valor="38" menor=" min" tamanho="sm" />
      <NumeroContado valor={28663} formatar={fmt} tamanho="kpi" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "A parte menor fica em 0,5em, peso 500, mesma baseline. \`NumeroContado\` conta até o valor em ~600ms (direto com movimento reduzido); o leitor de tela ouve só o valor final."
      }
    }
  }
}`,...(E=(j=s.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var y,P,f;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "ChipVariacao",
  render: () => <div style={{
    display: "grid",
    gap: 10
  }}>
      <ChipVariacao delta={12} texto="+12%" rotulo="vs ontem (118)" />
      <ChipVariacao delta={-8} texto="−8%" rotulo="vs semana passada" />
      <ChipVariacao delta={0} texto="0%" rotulo="sem variação" />
    </div>
}`,...(f=(P=t.parameters)==null?void 0:P.docs)==null?void 0:f.source}}};var b,N,A;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "LinhaMeta",
  render: () => <div style={{
    display: "grid",
    gap: 8
  }}>
      <LinhaMeta titulo="Taxa de sucesso" valor="92%" pct={92} />
      <LinhaMeta titulo="Biometria aprovada" valor="78%" pct={78} cor="var(--acento)" nota="meta 85%" />
      <LinhaMeta titulo="Abandono" valor="6%" pct={6} cor="var(--vermelho)" />
      <LinhaMeta titulo="Sem dado" valor="—" pct={null} />
    </div>
}`,...(A=(N=n.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var M,L,q;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "ProgressoSegmentado",
  render: () => <div style={{
    display: "grid",
    gap: 16
  }}>
      <ProgressoSegmentado rotulo="Fila de revisão" pct={55} />
      <ProgressoSegmentado rotulo="Sem dado" pct={null} />
      <div style={{
      padding: 20,
      background: "var(--preto)",
      borderRadius: 16
    }}>
        <ProgressoSegmentado rotulo="Meta do dia" pct={72} escuro valor="72 de 100" />
      </div>
    </div>
}`,...(q=(L=i.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var D,R,V;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "StatusPilula",
  render: () => <div style={{
    display: "flex",
    gap: 8,
    flexWrap: "wrap"
  }}>
      <StatusPilula tom="success">Concluída</StatusPilula>
      <StatusPilula tom="warning">Aguardando</StatusPilula>
      <StatusPilula tom="risk">Sem sucesso</StatusPilula>
      <StatusPilula tom="neutral">Rascunho</StatusPilula>
    </div>
}`,...(V=(R=d.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var _,k,T;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "AvataresEmpilhados",
  render: () => <AvataresEmpilhados rotulo="Atendentes online" nomes={["Ana Souza", "Bruno Lima", "Carla Dias", "Diego Reis", "Elisa Prado", "Fábio Melo"]} />
}`,...(T=(k=l.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var B,F,O;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "EsqueletoCard",
  render: () => <EsqueletoCard linhas={3} />,
  parameters: {
    docs: {
      description: {
        story: "Só visual (\`aria-hidden\`): o aviso de carregando é um por região, feito por quem monta a tela."
      }
    }
  }
}`,...(O=(F=m.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var w,z,W;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "ErroCard",
  render: () => <ErroCard texto="Não foi possível carregar o volume." aoTentar={fn()} />
}`,...(W=(z=c.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};export{l as Avatares,r as Cabecalho,c as Erro,m as Esqueleto,n as Metas,s as Numeros,i as Progresso,d as Status,t as Variacao,sa as __namedExportsOrder,ra as default};
