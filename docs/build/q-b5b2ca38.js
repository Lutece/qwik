import{h as o,F as s,H as t,x as a}from"./q-3396b8e1.js";const l={title:"useStore | Tutorial",meta:[],styles:[],links:[],frontmatter:{contributors:["manucorporat","adamdbradley","mhevery"]}},h={title:"useStore | Tutorial",contributors:["manucorporat","adamdbradley","mhevery"]};function r(n){const e=Object.assign({p:"p",a:"a",code:"code",ol:"ol",li:"li",blockquote:"blockquote",strong:"strong"},n.components);return t(a,{children:[t(e.p,{children:["Use ",t(e.a,{href:"/docs/components/state/#usestore",children:t(e.code,{children:"useStore()"})})," to store the state of the component. The store's purpose is to:"]}),`
`,t(e.ol,{children:[`
`,t(e.li,{children:"store the state of the component"}),`
`,t(e.li,{children:"present the state as a proxy that can observe read/writes to the store"}),`
`,t(e.li,{children:"serialize the state of the store into JSON on application pause."}),`
`,t(e.li,{children:"observe which properties of the store are used in a component template and create subscriptions to the store. The subscriptions are then used to automatically update the component template if a store changes."}),`
`]}),`
`,t(e.p,{children:["Stores are declared inside the component's function using the ",t(e.a,{href:"/docs/components/state/#usestore",children:t(e.code,{children:"useStore()"})})," function. Wrap the ",t(e.code,{children:"github"})," assignment in the ",t(e.code,{children:"useStore(...)"})," function call to create a store."]}),`
`,t(e.blockquote,{children:[`
`,t(e.p,{children:[t(e.strong,{children:"NOTE"}),`
In this example, the store never changes. Therefore there is no way to observe automatic template re-rendering. In the next example, we will add a listener to the `,t(e.code,{children:"<input>"})," to demonstrate automatic template re-rendering."]}),`
`]})]})}function c(n={}){const{wrapper:e}=n.components||{};return e?t(e,Object.assign({},n,{children:t(r,n)})):r(n)}const d=()=>o(s,{children:o(c,{},3,null)},3,"ubyz9dm-");export{d as default,h as frontmatter,l as head};
