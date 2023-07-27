import{h as t,F as o,H as e,x as a}from"./q-3396b8e1.js";const c=[{text:"Qwik City",id:"qwik-city",level:1},{text:"High Level API Overview",id:"high-level-api-overview",level:2},{text:"Partytown",id:"partytown",level:2}],d={title:"Overview | Qwik City",meta:[],styles:[],links:[],frontmatter:{contributors:["manucorporat","strogonoff","youngboy","farukEncoded","brunocrosier","forresst","mhevery","adamdbradley"]}},h={title:"Overview | Qwik City",contributors:["manucorporat","strogonoff","youngboy","farukEncoded","brunocrosier","forresst","mhevery","adamdbradley"]};function r(n){const i=Object.assign({h1:"h1",a:"a",span:"span",p:"p",ul:"ul",li:"li",blockquote:"blockquote",strong:"strong",h2:"h2",code:"code"},n.components);return e(a,{children:[e(i.h1,{id:"qwik-city",children:[e(i.a,{"aria-hidden":"true",tabindex:"-1",href:"#qwik-city",children:e(i.span,{class:"icon icon-link"})}),"Qwik City"]}),`
`,e(i.p,{children:"While Qwik focuses on Component API, Qwik City contains API to support the component with common server focused features:"}),`
`,e(i.ul,{children:[`
`,e(i.li,{children:[e(i.a,{href:"/docs/routing/",children:"routing"}),": Define your application routes with directory based routing. (Supports both MPA and SPA routing models.)"]}),`
`,e(i.li,{children:[e(i.a,{href:"/docs/pages",children:"pages"}),": Render application pages, the main feature of an application."]}),`
`,e(i.li,{children:[e(i.a,{href:"/docs/layouts/",children:"layouts"}),": Define common shared page layouts to be reused across pages."]}),`
`,e(i.li,{children:[e(i.a,{href:"/docs/route-loader/",children:"loaders"}),": Fetch data on the server to be used by the component."]}),`
`,e(i.li,{children:[e(i.a,{href:"/docs/action/",children:"actions"}),": Provide a way for the component to request the server to perform an action."]}),`
`,e(i.li,{children:[e(i.a,{href:"/docs/endpoints/",children:"endpoints"}),": A way to define data endpoints for your RESTful API, GraphQL API, JSON, XML or reverse proxy."]}),`
`,e(i.li,{children:[e(i.a,{href:"/docs/middleware/",children:"middleware"}),": A centralized way to perform cross-cutting concerns such as authentication, security, caching, redirects, and logging."]}),`
`,e(i.li,{children:[e(i.a,{href:"/docs/server$/",children:"server$"}),": A simple way to execute logic on the server."]}),`
`,e(i.li,{children:[e(i.a,{href:"/docs/caching/",children:"cache"}),": Control caching of your content."]}),`
`,e(i.li,{children:[e(i.a,{href:"/docs/env-variables/",children:"env variables"}),": API to manage reading environment variables, commonly used for keys, in a platform independent way."]}),`
`,e(i.li,{children:"Supports both Server Side Rendering (SSR) for fully dynamic sites as well as Static Site Generation (SSG) to be hosted on static web servers and CDNs."}),`
`]}),`
`,e(i.blockquote,{children:[`
`,e(i.p,{children:"Qwik¹ City²"}),`
`,e(i.p,{children:[e(i.a,{href:"/docs/",children:e(i.strong,{children:"Qwik¹"})}),": Core framework, stable, primitives, component model."]}),`
`,e(i.p,{children:[e(i.a,{href:"/docs/routing/",children:e(i.strong,{children:"City²"})}),": Opinionated file-based router, middleware, endpoints, and data fetching and update."]}),`
`]}),`
`,e(i.p,{children:["We call it a ",e(i.strong,{children:"meta-framework"})," for Qwik. Qwik City is to Qwik, what ",e(i.a,{href:"https://nextjs.org/",children:"Next.js"})," is to React, what ",e(i.a,{href:"https://nuxt.com/",children:"Nuxt"})," is to Vue, ",e(i.a,{href:"https://kit.svelte.dev/",children:"SvelteKit"})," to Svelte and ",e(i.a,{href:"https://analogjs.org/",children:"Analog"})," is to Angular."]}),`
`,e(i.p,{children:["Qwik (core) and Qwik City (routing) solve problems at two layers of abstraction. ",e(i.strong,{children:"Qwik"}),", focuses on component and state management primitives, while Qwik City brings an ",e(i.strong,{children:"opinionated and performant way to build sites at scale"}),". We don't want to lock the ecosystem into a single correct way of building sites, in fact we encourage the community to build alternative solutions on top of Qwik."]}),`
`,e(i.blockquote,{children:[`
`,e(i.p,{children:"While Qwik City is full of useful functionality, thanks to Qwik's resumability and JavaScript streaming, there is no additional cost to the end user from Qwik City. (zero JavaScript);"}),`
`]}),`
`,e(i.p,{children:"Use Qwik City to build an e-commerce website, blog site, or any other website that needs routing, layouts, or data retrieval/updates. Qwik City is built on Qwik, and therefore Qwik City sites are resumable and only download the minimal amount of JavaScript with fine-grained lazy loading."}),`
`,e(i.h2,{id:"high-level-api-overview",children:[e(i.a,{"aria-hidden":"true",tabindex:"-1",href:"#high-level-api-overview",children:e(i.span,{class:"icon icon-link"})}),"High Level API Overview"]}),`
`,e(i.p,{children:["This table shows which file (",e(i.code,{children:"index.tsx"})," vs ",e(i.code,{children:"layout.tsx"}),") the respective feature should be implemented in."]}),`
`,e("img",{width:"100%",src:"/docs/qwikcity/routing-files.png"}),`
`,e(i.h2,{id:"partytown",children:[e(i.a,{"aria-hidden":"true",tabindex:"-1",href:"#partytown",children:e(i.span,{class:"icon icon-link"})}),"Partytown"]}),`
`,e(i.p,{children:["Qwik City also comes pre-integrated with ",e(i.a,{href:"https://partytown.builder.io",children:"Partytown"})," allowing you to execute your third-party code off the main thread."]})]})}function s(n={}){const{wrapper:i}=n.components||{};return i?e(i,Object.assign({},n,{children:e(r,n)})):r(n)}const u=()=>t(o,{children:t(s,{},3,null)},3,"_Ce2gpGO");export{u as default,h as frontmatter,d as head,c as headings};
