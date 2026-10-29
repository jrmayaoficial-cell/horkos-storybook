function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{H as c,c as l,C as p,D as u,d,u as h}from"./blocks-_BxRhMsM.js";import{_ as E}from"./preload-helper-D6kgxu3v.js";import{R as t,r as _}from"./iframe-DuQYyiCW.js";import{renderElement as x,unmountElement as D}from"./react-18-B8PCvulg.js";import"./index-BGS7Qo4C.js";import"./jsx-runtime-Bs_0p5zD.js";const f=Object.freeze(Object.defineProperty({__proto__:null,MDXProvider:d,useMDXComponents:h},Symbol.toStringTag,{value:"Module"}));var v={code:p,a:l,...c},M=class extends _.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(r){let{showException:e}=this.props;e(r)}render(){let{hasError:r}=this.state,{children:e}=this.props;return r?null:t.createElement(t.Fragment,null,e)}},b=class{constructor(){this.render=async(r,e,o)=>{let n={...v,...e==null?void 0:e.components},s=u;return new Promise((a,m)=>{E(()=>Promise.resolve().then(()=>f),void 0,import.meta.url).then(({MDXProvider:i})=>x(t.createElement(M,{showException:m,key:Math.random()},t.createElement(i,{components:n},t.createElement(s,{context:r,docsParameter:e}))),o)).then(()=>a())})},this.unmount=r=>{D(r)}}};export{b as DocsRenderer,v as defaultComponents};
