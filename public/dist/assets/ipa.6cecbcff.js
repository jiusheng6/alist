import{d as c,e as r,j as e,$ as p,B as n,a$ as u,cw as g,o as a,cv as f}from"./index.61f93fd1.js";import{b as d}from"./useUtil.347438fc.js";import{F as h}from"./File.c74e60b4.js";import"./api.b4ac4b7e.js";import"./icon.6cdc3f0e.js";import"./index.0c64b17e.js";import"./index.fd473fe5.js";import"./Layout.f0c500e2.js";import"./EncodingSelect.a06e5e33.js";import"./index.7421985a.js";import"./FolderTree.8d4d7fda.js";const U=()=>{const t=c(),[o,i]=r(!1),[s,l]=r(!1),{currentObjLink:m}=d();return e(h,{get children(){return e(p,{spacing:"$2",get children(){return[e(n,{as:"a",get href(){return`itms-services://?action=download-manifest&url=${u}/i/${g(encodeURIComponent(a.raw_url)+"/"+f(encodeURIComponent(a.obj.name)))}.plist`},onClick:()=>{i(!0)},get children(){return t(`home.preview.${o()?"installing":"install"}`)}}),e(n,{as:"a",colorScheme:"primary",get href(){return"apple-magnifier://install?url="+encodeURIComponent(m(!0))},onClick:()=>{l(!0)},get children(){return t(`home.preview.${s()?"tr-installing":"tr-install"}`)}})]}})}})};export{U as default};
