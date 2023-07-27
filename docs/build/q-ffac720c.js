import{h as s,F as o,H as e,x as t}from"./q-3396b8e1.js";import{C as r}from"./q-5fedfe40.js";const D=[{text:"Endpoints",id:"endpoints",level:1},{text:"Create a reverse proxy using a fetch",id:"create-a-reverse-proxy-using-a-fetch",level:2},{text:"Create a stream response manually",id:"create-a-stream-response-manually",level:2},{text:"Endpoint vs server$",id:"endpoint-vs-server",level:2}],h={title:"Endpoints | QwikCity",meta:[],styles:[],links:[],frontmatter:{contributors:["adamdbradley","manucorporat","mhevery","hamatoyogi"]}},p={title:"Endpoints | QwikCity",contributors:["adamdbradley","manucorporat","mhevery","hamatoyogi"]};function c(n){const l=Object.assign({h1:"h1",a:"a",span:"span",p:"p",code:"code",div:"div",pre:"pre",blockquote:"blockquote",h2:"h2"},n.components);return e(t,{children:[e(l.h1,{id:"endpoints",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#endpoints",children:e(l.span,{class:"icon icon-link"})}),"Endpoints"]}),`
`,e(l.p,{children:["A ",e(l.a,{href:"/docs/middleware",children:"middleware function"})," that returns a response is called an endpoint. Endpoints are useful for returning data such as  RESTful API, GraphQL API, JSON, XML, reverse proxy or any other time of API where you need to control all aspects of the HTTP response. Returning a response (using ",e(l.code,{children:"json"})," for example) will stop the execution of subsequent middleware functions past this point in the middleware chain."]}),`
`,e(l.p,{children:["All endpoints receive an ",e(l.a,{href:"/docs/middleware/#requestevent",children:e(l.code,{children:"RequestEvent"})})," API for controlling the response of the endpoint."]}),`
`,e(l.p,{children:["For example, when navigating to ",e(l.code,{children:"/greet/"})," URL this endpoint will return ",e(l.code,{children:'{"hello":"world"}'}),"."]}),`
`,e(l.p,{children:["File: ",e(l.code,{children:"src/routes/greet/index.tsx"})]}),`
`,e(r,{src:"/src/routes/demo/qwikcity/middleware/json/index.tsx",children:e(l.div,{"data-rehype-pretty-code-fragment":"",children:e(l.pre,{"data-language":"tsx","data-theme":"default",children:e(l.code,{"data-language":"tsx","data-theme":"default",children:[e(l.span,{class:"line",children:[e(l.span,{style:{color:"#C586C0"},children:"import"}),e(l.span,{style:{color:"#D4D4D4"},children:" { "}),e(l.span,{style:{color:"#C586C0"},children:"type"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#9CDCFE"},children:"RequestHandler"}),e(l.span,{style:{color:"#D4D4D4"},children:" } "}),e(l.span,{style:{color:"#C586C0"},children:"from"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#CE9178"},children:"'@builder.io/qwik-city'"}),e(l.span,{style:{color:"#D4D4D4"},children:";"})]}),`
`,e(l.span,{class:"line",children:" "}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#C586C0"},children:"export"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#569CD6"},children:"const"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#DCDCAA"},children:"onGet"}),e(l.span,{style:{color:"#D4D4D4"},children:": "}),e(l.span,{style:{color:"#4EC9B0"},children:"RequestHandler"}),e(l.span,{style:{color:"#D4D4D4"},children:" = "}),e(l.span,{style:{color:"#569CD6"},children:"async"}),e(l.span,{style:{color:"#D4D4D4"},children:" ({ "}),e(l.span,{style:{color:"#9CDCFE"},children:"json"}),e(l.span,{style:{color:"#D4D4D4"},children:" }) "}),e(l.span,{style:{color:"#569CD6"},children:"=>"}),e(l.span,{style:{color:"#D4D4D4"},children:" {"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"  "}),e(l.span,{style:{color:"#DCDCAA"},children:"json"}),e(l.span,{style:{color:"#D4D4D4"},children:"("}),e(l.span,{style:{color:"#B5CEA8"},children:"200"}),e(l.span,{style:{color:"#D4D4D4"},children:", { "}),e(l.span,{style:{color:"#9CDCFE"},children:"hello:"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#CE9178"},children:"'world'"}),e(l.span,{style:{color:"#D4D4D4"},children:" });"})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#D4D4D4"},children:"};"})})]})})})}),`
`,e(l.blockquote,{children:[`
`,e(l.p,{children:["Sending a response is what differentiates an endpoint from a middleware. Sending a response (using ",e(l.code,{children:"json()"})," for example) will therefore implicitly halt the middleware chain."]}),`
`]}),`
`,e(l.h2,{id:"create-a-reverse-proxy-using-a-fetch",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#create-a-reverse-proxy-using-a-fetch",children:e(l.span,{class:"icon icon-link"})}),"Create a reverse proxy using a fetch"]}),`
`,e(l.p,{children:["A reverse proxy can be created by using the ",e(l.code,{children:"fetch()"})," method to make a request to another server, and then using the ",e(l.code,{children:"send()"})," method to send the response back to the client."]}),`
`,e(r,{src:"/src/routes/demo/qwikcity/middleware/proxy/index.tsx",children:e(l.div,{"data-rehype-pretty-code-fragment":"",children:e(l.pre,{"data-language":"tsx","data-theme":"default",children:e(l.code,{"data-language":"tsx","data-theme":"default",children:[e(l.span,{class:"line",children:[e(l.span,{style:{color:"#C586C0"},children:"import"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#C586C0"},children:"type"}),e(l.span,{style:{color:"#D4D4D4"},children:" { "}),e(l.span,{style:{color:"#9CDCFE"},children:"RequestHandler"}),e(l.span,{style:{color:"#D4D4D4"},children:" } "}),e(l.span,{style:{color:"#C586C0"},children:"from"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#CE9178"},children:"'@builder.io/qwik-city'"}),e(l.span,{style:{color:"#D4D4D4"},children:";"})]}),`
`,e(l.span,{class:"line",children:" "}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#C586C0"},children:"export"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#569CD6"},children:"const"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#DCDCAA"},children:"onGet"}),e(l.span,{style:{color:"#D4D4D4"},children:": "}),e(l.span,{style:{color:"#4EC9B0"},children:"RequestHandler"}),e(l.span,{style:{color:"#D4D4D4"},children:" = "}),e(l.span,{style:{color:"#569CD6"},children:"async"}),e(l.span,{style:{color:"#D4D4D4"},children:" ({ "}),e(l.span,{style:{color:"#9CDCFE"},children:"send"}),e(l.span,{style:{color:"#D4D4D4"},children:", "}),e(l.span,{style:{color:"#9CDCFE"},children:"url"}),e(l.span,{style:{color:"#D4D4D4"},children:" }) "}),e(l.span,{style:{color:"#569CD6"},children:"=>"}),e(l.span,{style:{color:"#D4D4D4"},children:" {"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"  "}),e(l.span,{style:{color:"#569CD6"},children:"const"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#4FC1FF"},children:"response"}),e(l.span,{style:{color:"#D4D4D4"},children:" = "}),e(l.span,{style:{color:"#C586C0"},children:"await"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#DCDCAA"},children:"fetch"}),e(l.span,{style:{color:"#D4D4D4"},children:"("})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"    "}),e(l.span,{style:{color:"#569CD6"},children:"new"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#DCDCAA"},children:"URL"}),e(l.span,{style:{color:"#D4D4D4"},children:"("}),e(l.span,{style:{color:"#CE9178"},children:"'/demo/qwikcity/middleware/json/'"}),e(l.span,{style:{color:"#D4D4D4"},children:", "}),e(l.span,{style:{color:"#9CDCFE"},children:"url"}),e(l.span,{style:{color:"#D4D4D4"},children:")"})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#D4D4D4"},children:"  );"})}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"  "}),e(l.span,{style:{color:"#DCDCAA"},children:"send"}),e(l.span,{style:{color:"#D4D4D4"},children:"("}),e(l.span,{style:{color:"#9CDCFE"},children:"response"}),e(l.span,{style:{color:"#D4D4D4"},children:");"})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#D4D4D4"},children:"};"})})]})})})}),`
`,e(l.h2,{id:"create-a-stream-response-manually",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#create-a-stream-response-manually",children:e(l.span,{class:"icon icon-link"})}),"Create a stream response manually"]}),`
`,e(l.p,{children:["Endpoints can manually write to the HTTP response stream, using the ",e(l.code,{children:"getWritableStream()"})," method. This can be useful for creating a streaming endpoint, such as a server-sent events endpoint."]}),`
`,e(r,{src:"/src/routes/demo/qwikcity/middleware/getWritableStream/index.tsx",children:e(l.div,{"data-rehype-pretty-code-fragment":"",children:e(l.pre,{"data-language":"tsx","data-theme":"default",children:e(l.code,{"data-language":"tsx","data-theme":"default",children:[e(l.span,{class:"line",children:[e(l.span,{style:{color:"#C586C0"},children:"import"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#C586C0"},children:"type"}),e(l.span,{style:{color:"#D4D4D4"},children:" { "}),e(l.span,{style:{color:"#9CDCFE"},children:"RequestHandler"}),e(l.span,{style:{color:"#D4D4D4"},children:" } "}),e(l.span,{style:{color:"#C586C0"},children:"from"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#CE9178"},children:"'@builder.io/qwik-city'"}),e(l.span,{style:{color:"#D4D4D4"},children:";"})]}),`
`,e(l.span,{class:"line",children:" "}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#C586C0"},children:"export"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#569CD6"},children:"const"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#DCDCAA"},children:"onGet"}),e(l.span,{style:{color:"#D4D4D4"},children:": "}),e(l.span,{style:{color:"#4EC9B0"},children:"RequestHandler"}),e(l.span,{style:{color:"#D4D4D4"},children:" = "}),e(l.span,{style:{color:"#569CD6"},children:"async"}),e(l.span,{style:{color:"#D4D4D4"},children:" ("}),e(l.span,{style:{color:"#9CDCFE"},children:"requestEvent"}),e(l.span,{style:{color:"#D4D4D4"},children:") "}),e(l.span,{style:{color:"#569CD6"},children:"=>"}),e(l.span,{style:{color:"#D4D4D4"},children:" {"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"  "}),e(l.span,{style:{color:"#569CD6"},children:"const"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#4FC1FF"},children:"writableStream"}),e(l.span,{style:{color:"#D4D4D4"},children:" = "}),e(l.span,{style:{color:"#9CDCFE"},children:"requestEvent"}),e(l.span,{style:{color:"#D4D4D4"},children:"."}),e(l.span,{style:{color:"#DCDCAA"},children:"getWritableStream"}),e(l.span,{style:{color:"#D4D4D4"},children:"();"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"  "}),e(l.span,{style:{color:"#569CD6"},children:"const"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#4FC1FF"},children:"writer"}),e(l.span,{style:{color:"#D4D4D4"},children:" = "}),e(l.span,{style:{color:"#9CDCFE"},children:"writableStream"}),e(l.span,{style:{color:"#D4D4D4"},children:"."}),e(l.span,{style:{color:"#DCDCAA"},children:"getWriter"}),e(l.span,{style:{color:"#D4D4D4"},children:"();"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"  "}),e(l.span,{style:{color:"#569CD6"},children:"const"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#4FC1FF"},children:"encoder"}),e(l.span,{style:{color:"#D4D4D4"},children:" = "}),e(l.span,{style:{color:"#569CD6"},children:"new"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#DCDCAA"},children:"TextEncoder"}),e(l.span,{style:{color:"#D4D4D4"},children:"();"})]}),`
`,e(l.span,{class:"line",children:" "}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"  "}),e(l.span,{style:{color:"#9CDCFE"},children:"writer"}),e(l.span,{style:{color:"#D4D4D4"},children:"."}),e(l.span,{style:{color:"#DCDCAA"},children:"write"}),e(l.span,{style:{color:"#D4D4D4"},children:"("}),e(l.span,{style:{color:"#9CDCFE"},children:"encoder"}),e(l.span,{style:{color:"#D4D4D4"},children:"."}),e(l.span,{style:{color:"#DCDCAA"},children:"encode"}),e(l.span,{style:{color:"#D4D4D4"},children:"("}),e(l.span,{style:{color:"#CE9178"},children:"'Hello World'"}),e(l.span,{style:{color:"#D4D4D4"},children:"));"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"  "}),e(l.span,{style:{color:"#C586C0"},children:"await"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#DCDCAA"},children:"wait"}),e(l.span,{style:{color:"#D4D4D4"},children:"("}),e(l.span,{style:{color:"#B5CEA8"},children:"100"}),e(l.span,{style:{color:"#D4D4D4"},children:");"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"  "}),e(l.span,{style:{color:"#9CDCFE"},children:"writer"}),e(l.span,{style:{color:"#D4D4D4"},children:"."}),e(l.span,{style:{color:"#DCDCAA"},children:"write"}),e(l.span,{style:{color:"#D4D4D4"},children:"("}),e(l.span,{style:{color:"#9CDCFE"},children:"encoder"}),e(l.span,{style:{color:"#D4D4D4"},children:"."}),e(l.span,{style:{color:"#DCDCAA"},children:"encode"}),e(l.span,{style:{color:"#D4D4D4"},children:"("}),e(l.span,{style:{color:"#CE9178"},children:"'After 100ms'"}),e(l.span,{style:{color:"#D4D4D4"},children:"));"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"  "}),e(l.span,{style:{color:"#C586C0"},children:"await"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#DCDCAA"},children:"wait"}),e(l.span,{style:{color:"#D4D4D4"},children:"("}),e(l.span,{style:{color:"#B5CEA8"},children:"100"}),e(l.span,{style:{color:"#D4D4D4"},children:");"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"  "}),e(l.span,{style:{color:"#9CDCFE"},children:"writer"}),e(l.span,{style:{color:"#D4D4D4"},children:"."}),e(l.span,{style:{color:"#DCDCAA"},children:"write"}),e(l.span,{style:{color:"#D4D4D4"},children:"("}),e(l.span,{style:{color:"#9CDCFE"},children:"encoder"}),e(l.span,{style:{color:"#D4D4D4"},children:"."}),e(l.span,{style:{color:"#DCDCAA"},children:"encode"}),e(l.span,{style:{color:"#D4D4D4"},children:"("}),e(l.span,{style:{color:"#CE9178"},children:"'After 200ms'"}),e(l.span,{style:{color:"#D4D4D4"},children:"));"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"  "}),e(l.span,{style:{color:"#C586C0"},children:"await"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#DCDCAA"},children:"wait"}),e(l.span,{style:{color:"#D4D4D4"},children:"("}),e(l.span,{style:{color:"#B5CEA8"},children:"100"}),e(l.span,{style:{color:"#D4D4D4"},children:");"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"  "}),e(l.span,{style:{color:"#9CDCFE"},children:"writer"}),e(l.span,{style:{color:"#D4D4D4"},children:"."}),e(l.span,{style:{color:"#DCDCAA"},children:"write"}),e(l.span,{style:{color:"#D4D4D4"},children:"("}),e(l.span,{style:{color:"#9CDCFE"},children:"encoder"}),e(l.span,{style:{color:"#D4D4D4"},children:"."}),e(l.span,{style:{color:"#DCDCAA"},children:"encode"}),e(l.span,{style:{color:"#D4D4D4"},children:"("}),e(l.span,{style:{color:"#CE9178"},children:"'END'"}),e(l.span,{style:{color:"#D4D4D4"},children:"));"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"  "}),e(l.span,{style:{color:"#9CDCFE"},children:"writer"}),e(l.span,{style:{color:"#D4D4D4"},children:"."}),e(l.span,{style:{color:"#DCDCAA"},children:"close"}),e(l.span,{style:{color:"#D4D4D4"},children:"();"})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#D4D4D4"},children:"};"})}),`
`,e(l.span,{class:"line",children:" "}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#569CD6"},children:"const"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#DCDCAA"},children:"wait"}),e(l.span,{style:{color:"#D4D4D4"},children:" = ("}),e(l.span,{style:{color:"#9CDCFE"},children:"ms"}),e(l.span,{style:{color:"#D4D4D4"},children:": "}),e(l.span,{style:{color:"#4EC9B0"},children:"number"}),e(l.span,{style:{color:"#D4D4D4"},children:") "}),e(l.span,{style:{color:"#569CD6"},children:"=>"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#569CD6"},children:"new"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#4EC9B0"},children:"Promise"}),e(l.span,{style:{color:"#D4D4D4"},children:"(("}),e(l.span,{style:{color:"#9CDCFE"},children:"resolve"}),e(l.span,{style:{color:"#D4D4D4"},children:") "}),e(l.span,{style:{color:"#569CD6"},children:"=>"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#DCDCAA"},children:"setTimeout"}),e(l.span,{style:{color:"#D4D4D4"},children:"("}),e(l.span,{style:{color:"#9CDCFE"},children:"resolve"}),e(l.span,{style:{color:"#D4D4D4"},children:", "}),e(l.span,{style:{color:"#9CDCFE"},children:"ms"}),e(l.span,{style:{color:"#D4D4D4"},children:"));"})]})]})})})}),`
`,e(l.h2,{id:"endpoint-vs-server",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#endpoint-vs-server",children:e(l.span,{class:"icon icon-link"})}),"Endpoint vs ",e(l.code,{children:"server$"})]}),`
`,e(l.p,{children:"Endpoints are low level APIs that give developers full control over the HTTP response. They are only recommended when you need to create an API to be consumed by an external entity such as a mobile app or a third-party service."}),`
`,e(l.p,{children:["The ",e(l.a,{href:"/docs/server$/",children:e(l.code,{children:"server$"})})," functions are usually a better option when you need to run some code on the server and return a response back to the app. The ",e(l.code,{children:"server$"})," are strongly typed and provides a more convenient API for returning data."]})]})}function a(n={}){const{wrapper:l}=n.components||{};return l?e(l,Object.assign({},n,{children:e(c,n)})):c(n)}const y=()=>s(o,{children:s(a,{},3,null)},3,"ECNh6XKX");export{y as default,p as frontmatter,h as head,D as headings};