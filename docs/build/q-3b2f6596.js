import{O as i,c as n,_ as p}from"./q-3396b8e1.js";import{t as a}from"./q-f56a1483.js";const c=i(n(()=>p(()=>import("./q-13656a77.js"),["build/q-13656a77.js","build/q-3396b8e1.js","build/q-c7f6ea02.js","build/q-bdac0aaf.js","build/q-26a98aba.js","build/q-2acb87dc.js","build/q-0a13b699.js","build/q-37848e60.js","build/q-c1d3cd99.js","build/q-a5eaa1e8.js","build/q-721453c0.js","build/q-82dbd22d.js","build/q-80595764.js","build/q-b2a06a1a.js","build/q-b7f2de3a.js","build/q-d05399d6.js","build/q-f56a1483.js"]),"s_ecs65giZetE")),l=r=>{const t=[];a.forEach(o=>t.push(...o.apps));for(let o=0;o<t.length;o++)if(t[o].id===r)return{app:JSON.parse(JSON.stringify(t[o])),prev:t[o-1],next:t[o+1]};return null},f=r=>{const t=JSON.parse(JSON.stringify(r)),o=`
import { renderToString, RenderOptions } from '@builder.io/qwik/server';
import { Root } from './root';

export default function (opts: RenderOptions) {
  return renderToString(<Root />, opts);
}
`,s=`
import App from './app';

export const Root = () => {
  return (
    <>
      <head>
        <title>Tutorial</title>
      </head>
      <body>
        <App />
      </body>
    </>
  );
};
`;return t.some(e=>e.code==="/root.tsx")||t.push({path:"/root.tsx",code:s,hidden:!0}),t.some(e=>e.code==="/entry.server.tsx")||t.push({path:"/entry.server.tsx",code:o,hidden:!0}),t},m=["Tutorial","Input","Output"],O=()=>{throw"Symbol removed by Qwik Optimizer, it can not be called from current platform"};export{m as PANELS,c as default,f as ensureDefaultFiles,l as getTutorial,O as onGet};
