import{$ as s,w as n,h as e,x as r}from"./q-3396b8e1.js";const a=t=>s("li",null,{class:"news-item"},[s("span",null,{class:"score"},n(l=>l.story.points,[t]),3,null),s("span",null,{class:"title"},t.story.url&&!t.story.url.startsWith("item?id=")?e(r,{children:[s("a",null,{href:n(l=>l.story.url,[t]),rel:"noreferrer",target:"_blank"},n(l=>l.story.title,[t]),3,null),s("span",null,{class:"host"},[" (",n(l=>l.story.domain,[t]),")"],3,null)]},3,"E0_9"):s("a",null,{href:n(l=>`/item/${l.story.id}`,[t])},n(l=>l.story.title,[t]),3,null),1,null),s("br",null,null,null,3,null),s("span",null,{class:"meta"},t.story.type!=="job"?e(r,{children:["by ",s("a",null,{href:n(l=>`/users/${l.story.user}`,[t])},n(l=>l.story.user,[t]),3,null)," ",n(l=>l.story.time_ago,[t])," ","|"," ",s("a",null,{href:n(l=>`/stories/${l.story.id}`,[t])},n(l=>l.story.comments_count?`${l.story.comments_count} comments`:"discuss",[t]),3,null)]},3,"E0_10"):s("a",null,{href:n(l=>`/stories/${l.story.id}`,[t])},n(l=>l.story.time_ago,[t]),3,null),1,null),t.story.type!=="link"&&e(r,{children:[" ",s("span",null,{class:"label"},n(l=>l.story.type,[t]),3,null)]},3,"E0_11")],1,"E0_12");export{a as s_9EHV5ofGnLw};