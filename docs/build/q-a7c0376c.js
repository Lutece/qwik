import{$ as t}from"./q-3396b8e1.js";const r="theme-preference",o=()=>{const e=`
        document.firstElementChild
            .setAttribute('data-theme',
                localStorage.getItem('${r}') ??
                (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
            )`;return t("script",{dangerouslySetInnerHTML:e},null,null,3,"XY_0")};export{o as T,r as t};
