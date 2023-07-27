import{h as s,F as r,H as n,x as c}from"./q-3396b8e1.js";const a=[{text:"🧪 Insights",id:"-insights",level:1},{text:"Architecture",id:"architecture",level:2},{text:"<Insights> component",id:"insights-component",level:2},{text:"Vite integration",id:"vite-integration",level:2}],d={title:"🧪 Insights | Qwik Labs",meta:[],styles:[],links:[],frontmatter:{contributors:["mhevery","gioboa"]}},h={title:"🧪 Insights | Qwik Labs",contributors:["mhevery","gioboa"]};function i(l){const e=Object.assign({h1:"h1",a:"a",span:"span",p:"p",strong:"strong",code:"code",h2:"h2",ul:"ul",li:"li",blockquote:"blockquote",div:"div",pre:"pre"},l.components);return n(c,{children:[n(e.h1,{id:"-insights",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#-insights",children:n(e.span,{class:"icon icon-link"})}),"🧪 Insights"]}),`
`,n(e.p,{children:[n(e.strong,{children:"Stage:"})," ",n(e.code,{children:"prototyping"})]}),`
`,n(e.p,{children:"Insights allow your application to collect real user usage information to optimize the creation of bundles. By observing real user behavior, the Qwik build system can then do a better job of placing symbols, which are used together, into the same chunk, thus minimizing the waterfall effect that could occur if there are too many small files needing to be downloaded."}),`
`,n(e.h2,{id:"architecture",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#architecture",children:n(e.span,{class:"icon icon-link"})}),"Architecture"]}),`
`,n(e.p,{children:"The optimization consists of these parts:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["A ",n(e.code,{children:"<Insights>"})," component which collects real user usage data."]}),`
`,n(e.li,{children:"A registered application inside the builder.io database."}),`
`,n(e.li,{children:"A qwikVite configuration to load real user usage data during the build process."}),`
`]}),`
`,n(e.blockquote,{children:[`
`,n(e.p,{children:[`NOTE:
To try this new feature please drop a message inside the `,n(e.a,{href:"https://qwik.builder.io/chat",children:"Qwik Discord server"}),`
Currently Insights info are hosted into builder database. This information are about the execution of symbols/chunks in the application.
The implementation of the service is open-source and you have the choice to use ours or host your own.
(Please note, this may become a paid service in the future.)`]}),`
`]}),`
`,n(e.h2,{id:"insights-component",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#insights-component",children:n(e.span,{class:"icon icon-link"})}),n(e.code,{children:"<Insights>"})," component"]}),`
`,n(e.p,{children:["The ",n(e.code,{children:"<Insights>"})," component should be added to your ",n(e.code,{children:"root.tsx"})," file."]}),`
`,n(e.div,{"data-rehype-pretty-code-fragment":"",children:n(e.pre,{"data-language":"typescript","data-theme":"default",children:n(e.code,{"data-language":"typescript","data-theme":"default",children:[n(e.span,{class:"line",children:n(e.span,{style:{color:"#6A9955"},children:"// ..."})}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#C586C0"},children:"import"}),n(e.span,{style:{color:"#D4D4D4"},children:" { "}),n(e.span,{style:{color:"#9CDCFE"},children:"Insights"}),n(e.span,{style:{color:"#D4D4D4"},children:" } "}),n(e.span,{style:{color:"#C586C0"},children:"from"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#CE9178"},children:"'@builder.io/qwik-labs'"}),n(e.span,{style:{color:"#D4D4D4"},children:";"})]}),`
`,n(e.span,{class:"line",children:" "}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#C586C0"},children:"export"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#C586C0"},children:"default"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#DCDCAA"},children:"component$"}),n(e.span,{style:{color:"#D4D4D4"},children:"(() "}),n(e.span,{style:{color:"#569CD6"},children:"=>"}),n(e.span,{style:{color:"#D4D4D4"},children:" {"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"  "}),n(e.span,{style:{color:"#6A9955"},children:"// ..."})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"  "}),n(e.span,{style:{color:"#C586C0"},children:"return"}),n(e.span,{style:{color:"#D4D4D4"},children:" ("})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"    <"}),n(e.span,{style:{color:"#4EC9B0"},children:"QwikCityProvider"}),n(e.span,{style:{color:"#D4D4D4"},children:">"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"      <"}),n(e.span,{style:{color:"#4EC9B0"},children:"head"}),n(e.span,{style:{color:"#D4D4D4"},children:">"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"        "}),n(e.span,{style:{color:"#6A9955"},children:"// ..."})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"        <"}),n(e.span,{style:{color:"#9CDCFE"},children:"Insights"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"          "}),n(e.span,{style:{color:"#9CDCFE"},children:"publicApiKey"}),n(e.span,{style:{color:"#D4D4D4"},children:"={({})."}),n(e.span,{style:{color:"#9CDCFE"},children:"PUBLIC_QWIK_INSIGHTS_KEY"}),n(e.span,{style:{color:"#D4D4D4"},children:"}"})]}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#D4D4D4"},children:"        />"})}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"      </"}),n(e.span,{style:{color:"#9CDCFE"},children:"head"}),n(e.span,{style:{color:"#D4D4D4"},children:">"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"      <"}),n(e.span,{style:{color:"#9CDCFE"},children:"body"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#9CDCFE"},children:"lang"}),n(e.span,{style:{color:"#D4D4D4"},children:"="}),n(e.span,{style:{color:"#CE9178"},children:'"en"'}),n(e.span,{style:{color:"#D4D4D4"},children:">"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"        "}),n(e.span,{style:{color:"#6A9955"},children:"// ..."})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"      </"}),n(e.span,{style:{color:"#9CDCFE"},children:"body"}),n(e.span,{style:{color:"#D4D4D4"},children:">"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"    </"}),n(e.span,{style:{color:"#9CDCFE"},children:"QwikCityProvider"}),n(e.span,{style:{color:"#D4D4D4"},children:">"})]}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#D4D4D4"},children:"  );"})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#D4D4D4"},children:"});"})})]})})}),`
`,n(e.p,{children:["You can get ",n(e.code,{children:"PUBLIC_QWIK_INSIGHTS_KEY"})," by asking it in inside the ",n(e.a,{href:"https://qwik.builder.io/chat",children:"Qwik Discord server"})]}),`
`,n(e.p,{children:["The ",n(e.code,{children:"<Insights>"})," component collects this data:"]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Timing information of symbols."}),`
`,n(e.li,{children:["The ",n(e.code,{children:"pathname"})," part of the URL."]}),`
`,n(e.li,{children:"Random sessionID which identifies which symbol loads came from the same browser session."}),`
`]}),`
`,n(e.p,{children:["NOTE: The ",n(e.code,{children:"<Insights>"})," component does not collect any user identifiable information."]}),`
`,n(e.p,{children:"The information collected is sent to builder.io database for storage."}),`
`,n(e.h2,{id:"vite-integration",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#vite-integration",children:n(e.span,{class:"icon icon-link"})}),"Vite integration"]}),`
`,n(e.p,{children:"Once the application is running for a while and it collects sufficient information on symbol usage, the stats can be used to improve the bundles of the future version of the application. This is done by connecting the vite build with Insights like so:"}),`
`,n(e.p,{children:["file: ",n(e.code,{children:"vite.config.js"})]}),`
`,n(e.div,{"data-rehype-pretty-code-fragment":"",children:n(e.pre,{"data-language":"typescript","data-theme":"default",children:n(e.code,{"data-language":"typescript","data-theme":"default",children:[n(e.span,{class:"line",children:n(e.span,{style:{color:"#6A9955"},children:"//.."})}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#C586C0"},children:"import"}),n(e.span,{style:{color:"#D4D4D4"},children:" { "}),n(e.span,{style:{color:"#9CDCFE"},children:"defineConfig"}),n(e.span,{style:{color:"#D4D4D4"},children:", "}),n(e.span,{style:{color:"#9CDCFE"},children:"loadEnv"}),n(e.span,{style:{color:"#D4D4D4"},children:" } "}),n(e.span,{style:{color:"#C586C0"},children:"from"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#CE9178"},children:"'vite'"}),n(e.span,{style:{color:"#D4D4D4"},children:";"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#C586C0"},children:"import"}),n(e.span,{style:{color:"#D4D4D4"},children:" { "}),n(e.span,{style:{color:"#9CDCFE"},children:"insightsEntryStrategy"}),n(e.span,{style:{color:"#D4D4D4"},children:" } "}),n(e.span,{style:{color:"#C586C0"},children:"from"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#CE9178"},children:"'@builder.io/qwik-labs/vite'"}),n(e.span,{style:{color:"#D4D4D4"},children:";"})]}),`
`,n(e.span,{class:"line",children:" "}),`
`,n(e.span,{class:"line",children:" "}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#C586C0"},children:"export"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#C586C0"},children:"default"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#DCDCAA"},children:"defineConfig"}),n(e.span,{style:{color:"#D4D4D4"},children:"("}),n(e.span,{style:{color:"#569CD6"},children:"async"}),n(e.span,{style:{color:"#D4D4D4"},children:" () "}),n(e.span,{style:{color:"#569CD6"},children:"=>"}),n(e.span,{style:{color:"#D4D4D4"},children:" {"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"  "}),n(e.span,{style:{color:"#C586C0"},children:"return"}),n(e.span,{style:{color:"#D4D4D4"},children:" {"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"    "}),n(e.span,{style:{color:"#9CDCFE"},children:"plugins:"}),n(e.span,{style:{color:"#D4D4D4"},children:" ["})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"      "}),n(e.span,{style:{color:"#DCDCAA"},children:"qwikVite"}),n(e.span,{style:{color:"#D4D4D4"},children:"({"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"        "}),n(e.span,{style:{color:"#9CDCFE"},children:"entryStrategy:"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#C586C0"},children:"await"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#DCDCAA"},children:"insightsEntryStrategy"}),n(e.span,{style:{color:"#D4D4D4"},children:"({"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"          "}),n(e.span,{style:{color:"#9CDCFE"},children:"publicApiKey:"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#DCDCAA"},children:"loadEnv"}),n(e.span,{style:{color:"#D4D4D4"},children:"("}),n(e.span,{style:{color:"#CE9178"},children:"''"}),n(e.span,{style:{color:"#D4D4D4"},children:", "}),n(e.span,{style:{color:"#CE9178"},children:"'.'"}),n(e.span,{style:{color:"#D4D4D4"},children:", "}),n(e.span,{style:{color:"#CE9178"},children:"''"}),n(e.span,{style:{color:"#D4D4D4"},children:")."}),n(e.span,{style:{color:"#4FC1FF"},children:"PUBLIC_QWIK_INSIGHTS_KEY"}),n(e.span,{style:{color:"#D4D4D4"},children:","})]}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#D4D4D4"},children:"        }),"})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#D4D4D4"},children:"      }), "})}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"      "}),n(e.span,{style:{color:"#6A9955"},children:"//..."})]}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#D4D4D4"},children:"    ],"})}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"    "}),n(e.span,{style:{color:"#6A9955"},children:"// ..."})]}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#D4D4D4"},children:"  };"})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#D4D4D4"},children:"});"})})]})})})]})}function o(l={}){const{wrapper:e}=l.components||{};return e?n(e,Object.assign({},l,{children:n(i,l)})):i(l)}const D=()=>s(r,{children:s(o,{},3,null)},3,"-T4CbCOG");export{D as default,h as frontmatter,d as head,a as headings};
