import{O as o,c as e,_ as t}from"./q-3396b8e1.js";const r=o(e(()=>t(()=>import("./q-ab8cf7e9.js"),["build/q-ab8cf7e9.js","build/q-3396b8e1.js"]),"s_9DA6AmfJib4")),l=`
.card {
  border-radius: 5px;
  vertical-align: top;
  display: inline-block;
  border: 1px solid grey;
  width: 200px;
  margin: .5em;
}

.title {
  background-color: lightgray;
  padding: 0.5em;
  border-bottom: 1px solid black;
}

/* Fallback for slot named "title" */
.title:empty::before {
  content: 'Fallback title';
  color: red;
}

.body {
  padding: 0.5em;
}

/* Fallback for slot named "body" */
.body:empty::before {
  content: 'Fallback body';
  color: orange;
}
`,d=o(e(()=>t(()=>import("./q-ab8cf7e9.js"),["build/q-ab8cf7e9.js","build/q-3396b8e1.js"]),"s_RGwL8Xmvhx8")),i=`
.card {
  border-radius: 5px;
  vertical-align: top;
  display: inline-block;
  border: 1px solid grey;
  width: 200px;
  margin: .5em;
}

.title {
  background-color: lightgray;
  padding: 0.5em;
  border-bottom: 1px solid black;
}

/* Add the right CSS selector here to make a fallback for slot named "title" */
q\\:title {
  content: 'Fallback title';
  color: red;
}

.body {
  padding: 0.5em;
}

/* Add the right CSS selector here to make a fallback for slot named "body" */
q\\:body {
  content: 'Fallback body';
  color: orange;
}
`;export{l as C,i as a,d as b,r as c};
