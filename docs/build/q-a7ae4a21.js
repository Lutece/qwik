import{e as x,f as h,h as u,R as C,i as y,j as B,B as g}from"./q-b4025d6c.js";import{l as v,a as P,f as p,G as S,N as $,i as d,$ as m,h as b,v as _,w as r,P as w,c as i,_ as n}from"./q-3396b8e1.js";const E=x,R=()=>{const[e,t,l]=v();return{"--flex-dir":l.flexDir,"--flex-dir-tablet":h(t,l,e,{stackedStyle:l.flexDir,desktopStyle:"row"})}},T=()=>{const[e,t,l]=v();return`
        @media (max-width: ${u(t,l,e,"medium")}px) {
          .${t.builderBlock.id}-breakpoints {
            flex-direction: var(--flex-dir-tablet);
            align-items: stretch;
          }

          .${t.builderBlock.id}-breakpoints > .builder-column {
            width: var(--column-width-tablet) !important;
            margin-left: var(--column-margin-left-tablet) !important;
          }
        }

        @media (max-width: ${u(t,l,e,"small")}px) {
          .${t.builderBlock.id}-breakpoints {
            flex-direction: var(--flex-dir);
            align-items: stretch;
          }

          .${t.builderBlock.id}-breakpoints > .builder-column {
            width: var(--column-width-mobile) !important;
            margin-left: var(--column-margin-left-mobile) !important;
          }
        },
      `},z=e=>{P(),p(i(()=>n(()=>Promise.resolve().then(()=>a),void 0),"s_s7JLZz7MCCQ"));const t=S(g),l=$({cols:e.columns||[],flexDir:e.stackColumnsAt==="never"?"row":e.reverseColumnsWhenStacked?"column-reverse":"column",gutterSize:typeof e.space=="number"?e.space||0:20,stackAt:e.stackColumnsAt||"tablet"}),k=d(i(()=>n(()=>Promise.resolve().then(()=>a),void 0),"s_adFEq2RWT9s",[t,e,l])),c=d(i(()=>n(()=>Promise.resolve().then(()=>a),void 0),"s_nBtMPbzd1Wc",[t,e,l]));return m("div",null,{class:r(s=>`builder-columns ${s.builderBlock.id}-breakpoints div-Columns`,[e],'`builder-columns ${p0.builderBlock.id}-breakpoints`+" div-Columns"'),style:r(s=>s.value,[k],"p0.value")},[b(C,{get styles(){return c.value},[_]:{styles:r(s=>s.value,[c],"p0.value")}},3,"c0_0"),(e.columns||[]).map(function(s,o){return m("div",{style:y(e,l,t,o)},{class:"builder-column div-Columns-2"},b(B,{get blocks(){return s.blocks},path:`component.options.columns.${o}.blocks`,get parent(){return e.builderBlock.id},styleProp:{flexGrow:"1"},[_]:{blocks:w(s,"blocks"),parent:r(f=>f.builderBlock.id,[e],"p0.builderBlock.id")}},3,"c0_1"),1,o)})],1,"c0_2")},a=Object.freeze(Object.defineProperty({__proto__:null,s_7yLj4bxdI6c:z,s_adFEq2RWT9s:R,s_nBtMPbzd1Wc:T,s_s7JLZz7MCCQ:E},Symbol.toStringTag,{value:"Module"}));export{z as s_7yLj4bxdI6c,R as s_adFEq2RWT9s,T as s_nBtMPbzd1Wc,E as s_s7JLZz7MCCQ};
