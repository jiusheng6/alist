import{d as i,u,j as e,b6 as c,I as g,_ as p,N as d,bO as m,$ as o,b7 as h,aJ as a,B as s,X as $}from"./index.61f93fd1.js";import{a as f}from"./Layout.f0c500e2.js";import{L as b}from"./index.fd473fe5.js";import"./index.0c64b17e.js";import"./EncodingSelect.a06e5e33.js";import"./useUtil.347438fc.js";import"./api.b4ac4b7e.js";import"./index.7421985a.js";import"./FolderTree.8d4d7fda.js";const B=()=>{const t=i(),{refresh:n}=f(),{back:l}=u();return e($,{w:{"@initial":"$full","@md":"$lg"},p:"$8",spacing:"$3",alignItems:"start",get children(){return[e(c,{get children(){return t("home.input_password")}}),e(g,{type:"password",get value(){return p()},get background(){return d("$neutral3","$neutral2")()},onKeyDown:r=>{r.key==="Enter"&&n(!0)},onInput:r=>m(r.currentTarget.value)}),e(o,{w:"$full",justifyContent:"space-between",get children(){return[e(h,{fontSize:"$sm",color:"$neutral10",direction:{"@initial":"column","@sm":"row"},columnGap:"$1",get children(){return[e(a,{get children(){return t("global.have_account")}}),e(a,{color:"$info9",as:b,get href(){return`/@login?redirect=${encodeURIComponent(location.pathname)}`},get children(){return t("global.go_login")}})]}}),e(o,{spacing:"$2",get children(){return[e(s,{colorScheme:"neutral",onClick:l,get children(){return t("global.back")}}),e(s,{onClick:()=>n(!0),get children(){return t("global.ok")}})]}})]}})]}})};export{B as default};
