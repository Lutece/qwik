import{B as a}from"./q-4bc7de01.js";import{G as r}from"./q-2acb87dc.js";import{I as i}from"./q-d221e58a.js";import{Q as l,S as d,J as c}from"./q-c1d3cd99.js";import{$ as s,O as u,c as m,_ as p,N as y,Y as g,h as e,w as f,v as n}from"./q-3396b8e1.js";const v=t=>s("script",{dangerouslySetInnerHTML:`
  ((d, sentStats) => {
    const id = () => Math.round(Math.random() * Number.MAX_SAFE_INTEGER).toString(36);
    const pageId = id();
    const sessionId = (sessionStorage["q:sId"] = sessionStorage["q:sId"] || id());
    const now = Date.now();
    const sessionStart = parseInt((sessionStorage["q:sTs"] = sessionStorage["q:sTs"] || now), 10);
    const sessionOffset = now - sessionStart;
    const visitorId = (localStorage["q:vId"] = localStorage["q:vId"] || id());
    const qEvents = [];
    const loggedQrls = new Set();

    const send = () => {
      if (qEvents.length > 0) {
        fetch("https://cdn.builder.io/api/v1/track", {
          method: "POST",
          body: JSON.stringify({ events: qEvents }),
          keepalive: true,
        });
        qEvents.length = 0;
      }

    };

    const queue = (type, metadata) => {
      qEvents.push({
        type: type,
        data: {
          metadata: {
            url: location.href,
            pageId: pageId,
            sessionOffset: sessionOffset,
            ...metadata
          },
          ownerId: ${JSON.stringify(t.builderApiKey)},
          sessionId: sessionId,
          visitorId: visitorId
        },
      });
    };

    d.addEventListener("qsymbol", (ev) => {
      try {
        const detail = ev.detail;
        const qsymbol = detail?.symbol;
        console.debug('Symbol', qsymbol);
        if (qsymbol && !loggedQrls.has(qsymbol)) {
          loggedQrls.add(qsymbol);

          queue("qrl", {
            reqTime: Math.round(detail?.reqTime ?? -1),
            execTime: Math.round(performance.now()),
            qsymbol: qsymbol,
          });

          if (qEvents.length > 9) {
            send();
          }
        }
      } catch (e) {
        console.error(e);
      }
    });

    d.addEventListener("visibilitychange", () => {
      if (d.visibilityState === "hidden") {
        try {
          if (!sentStats) {
            sentStats = true;

            const metadata = {
              perf: [],
              ua: navigator.userAgent,
            };
            const entryTypes = ["navigation", "paint", "longtask"];

            if (performance.getEntriesByType) {
              for (const entryTypeName of entryTypes) {
                for (const entry of performance.getEntriesByType(entryTypeName)) {
                  metadata.perf.push(entry.toJSON());
                }
              }
            }

            if (navigator.connection) {
              metadata.conn = {};
              for (const n in navigator.connection) {
                if (navigator.connection[n] && typeof navigator.connection[n] !== "function") {
                  metadata.conn[n] = navigator.connection[n];
                }
              }
            }
            queue('qstats', metadata);
          }
          send();
        } catch (e) {
          console.error(e);
        }
      }
    });
  })(document);
`},null,null,3,"xh_0"),h=u(m(()=>p(()=>import("./q-57c4b05a.js"),["build/q-57c4b05a.js","build/q-3396b8e1.js","build/q-a7c0376c.js","build/q-c1d3cd99.js"]),"s_pTmg6TTZ2oo")),T=()=>{const t=y({headerMenuOpen:!1,sideMenuOpen:!1,theme:"auto"});return g(r,t),e(l,{children:[s("head",null,null,[s("meta",null,{charSet:"utf-8"},null,3,null),e(h,null,3,"eW_0"),e(d,null,3,"eW_1"),e(i,{get publicApiKey(){return"221smyuj5gl"},[n]:{publicApiKey:n}},3,"eW_2")],1,null),s("body",null,{class:f(o=>({"header-open":o.headerMenuOpen,"menu-open":o.sideMenuOpen}),[t])},[e(c,null,3,"eW_3"),e(v,{builderApiKey:a,[n]:{builderApiKey:n}},3,"eW_4")],1,null)]},1,"eW_5")};export{T as s_w5MYBhIX0cA};
