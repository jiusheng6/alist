import{j as e,a4 as O,ab as _,ae as y,o as i,X as l,b6 as T,aJ as I,av as h,by as P,bJ as x,d as b,w as d,bK as $,ai as L,af as k,B as m,ag as S,x as A,ah as D,bL as v,r as g,$ as f,bG as j,C as V,bM as R,J as o,K as a,bH as M,bN as C,e as z,aM as F,Q as B,R as W,at as H}from"./index.61f93fd1.js";import{b as w,a as X}from"./useUtil.347438fc.js";import{g as J,O as u}from"./icon.6cdc3f0e.js";import{n as U}from"./index.fd473fe5.js";import{T as G}from"./Layout.f0c500e2.js";const K=r=>e(l,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[e(O,{boxSize:"$20",get fallback(){return e(_,{get color(){return y()},boxSize:"$20",get as(){return J(i.obj)}})},get src(){return i.obj.thumb}}),e(l,{spacing:"$2",get children(){return[e(T,{size:"lg",css:{wordBreak:"break-all"},get children(){return i.obj.name}}),e(I,{color:"$neutral10",size:"sm",get children(){return[h(()=>P(i.obj.size))," \xB7 ",h(()=>x(i.obj.modified))]}})]}}),e(l,{spacing:"$2",get children(){return r.children}})]}}),E=()=>{const r=b(),n=d(()=>$(i.obj.name)),{currentObjLink:s}=w();return e(g,{get when(){return n().length},get children(){return e(L,{get children(){return[e(k,{as:m,colorScheme:"success",get rightIcon(){return e(_,{as:U})},get children(){return r("home.preview.open_with")}}),e(S,{get children(){return e(A,{get each(){return n()},children:t=>e(D,{as:"a",target:"_blank",get href(){return v(t.value,{raw_url:i.raw_url,name:i.obj.name,d_url:s(!0)})},get children(){return t.key}})})}})]}})}})},p=r=>{const n=b(),{copyCurrentRawLink:s}=X();return e(K,{get children(){return[e(f,{spacing:"$2",get children(){return[e(m,{colorScheme:"accent",onClick:()=>s(!0),get children(){return n("home.toolbar.copy_link")}}),e(m,{as:"a",get href(){return i.raw_url},target:"_blank",get children(){return n("home.preview.download")}})]}}),e(g,{get when(){return r.openWith},get children(){return e(E,{})}})]}})},N=Object.freeze(Object.defineProperty({__proto__:null,Download:p,default:p},Symbol.toStringTag,{value:"Module"})),Q=r=>{const{currentObjLink:n}=w(),s=d(()=>v(r.scheme,{raw_url:i.raw_url,name:i.obj.name,d_url:n(!0)}));return e(R,{w:"$full",h:"70vh",get children(){return[e(j.iframe,{w:"$full",h:"$full",get src(){return s()}}),e(_,{pos:"absolute",right:"$2",bottom:"$10","aria-label":"Open in new tab",as:G,onClick:()=>{window.open(s(),"_blank")},cursor:"pointer",rounded:"$md",get bgColor(){return V()},p:"$1",boxSize:"$7"})]}})},q=r=>()=>e(Q,{scheme:r}),Y=[{name:"HTML render",exts:["html"],component:o(()=>a(()=>import("./html.7d2e707f.js"),["assets/html.7d2e707f.js","assets/index.61f93fd1.js","assets/index.0fc6025d.css","assets/useUtil.347438fc.js","assets/api.b4ac4b7e.js","assets/EncodingSelect.a06e5e33.js"]))},{name:"Aliyun Video Previewer",type:u.VIDEO,provider:/^Aliyundrive(Open)?$/,component:o(()=>a(()=>import("./aliyun_video.1ef5b87d.js"),["assets/aliyun_video.1ef5b87d.js","assets/index.61f93fd1.js","assets/index.0fc6025d.css","assets/useUtil.347438fc.js","assets/api.b4ac4b7e.js","assets/icon.6cdc3f0e.js","assets/index.0c64b17e.js","assets/index.fd473fe5.js","assets/Layout.f0c500e2.js","assets/EncodingSelect.a06e5e33.js","assets/index.7421985a.js","assets/FolderTree.8d4d7fda.js","assets/video_box.caff53bc.js"]))},{name:"Markdown",type:u.TEXT,component:o(()=>a(()=>import("./markdown.67997fe3.js"),["assets/markdown.67997fe3.js","assets/index.61f93fd1.js","assets/index.0fc6025d.css","assets/useUtil.347438fc.js","assets/api.b4ac4b7e.js","assets/EncodingSelect.a06e5e33.js"]))},{name:"Markdown with word wrap",type:u.TEXT,component:o(()=>a(()=>import("./markdown_with_word_wrap.837d3db6.js"),["assets/markdown_with_word_wrap.837d3db6.js","assets/index.61f93fd1.js","assets/index.0fc6025d.css","assets/useUtil.347438fc.js","assets/api.b4ac4b7e.js","assets/EncodingSelect.a06e5e33.js"]))},{name:"Url Open",exts:["url"],component:o(()=>a(()=>import("./url.d9e05f1a.js"),["assets/url.d9e05f1a.js","assets/index.61f93fd1.js","assets/index.0fc6025d.css","assets/useUtil.347438fc.js","assets/api.b4ac4b7e.js","assets/icon.6cdc3f0e.js","assets/index.0c64b17e.js","assets/index.fd473fe5.js","assets/Layout.f0c500e2.js","assets/EncodingSelect.a06e5e33.js","assets/index.7421985a.js","assets/FolderTree.8d4d7fda.js"]))},{name:"Text Editor",type:u.TEXT,exts:["url"],component:o(()=>a(()=>import("./text-editor.b3004697.js"),["assets/text-editor.b3004697.js","assets/index.61f93fd1.js","assets/index.0fc6025d.css","assets/useUtil.347438fc.js","assets/api.b4ac4b7e.js","assets/EncodingSelect.a06e5e33.js"]))},{name:"Image",type:u.IMAGE,component:o(()=>a(()=>import("./image.a497007b.js"),["assets/image.a497007b.js","assets/index.61f93fd1.js","assets/index.0fc6025d.css","assets/ImageWithError.b6660c62.js"]))},{name:"Video",type:u.VIDEO,component:o(()=>a(()=>import("./video.fe24b75b.js"),["assets/video.fe24b75b.js","assets/index.61f93fd1.js","assets/index.0fc6025d.css","assets/useUtil.347438fc.js","assets/api.b4ac4b7e.js","assets/icon.6cdc3f0e.js","assets/index.0c64b17e.js","assets/index.fd473fe5.js","assets/Layout.f0c500e2.js","assets/EncodingSelect.a06e5e33.js","assets/index.7421985a.js","assets/FolderTree.8d4d7fda.js","assets/video_box.caff53bc.js"]))},{name:"Audio",type:u.AUDIO,component:o(()=>a(()=>import("./audio.97e42c72.js"),["assets/audio.97e42c72.js","assets/audio.e5b5af14.css","assets/index.61f93fd1.js","assets/index.0fc6025d.css","assets/useUtil.347438fc.js","assets/api.b4ac4b7e.js","assets/icon.6cdc3f0e.js","assets/index.0c64b17e.js","assets/index.fd473fe5.js","assets/Layout.f0c500e2.js","assets/EncodingSelect.a06e5e33.js","assets/index.7421985a.js","assets/FolderTree.8d4d7fda.js"]))},{name:"Ipa",exts:["ipa","tipa"],component:o(()=>a(()=>import("./ipa.6cecbcff.js"),["assets/ipa.6cecbcff.js","assets/index.61f93fd1.js","assets/index.0fc6025d.css","assets/useUtil.347438fc.js","assets/api.b4ac4b7e.js","assets/icon.6cdc3f0e.js","assets/index.0c64b17e.js","assets/index.fd473fe5.js","assets/Layout.f0c500e2.js","assets/EncodingSelect.a06e5e33.js","assets/index.7421985a.js","assets/FolderTree.8d4d7fda.js"]))},{name:"Plist",exts:["plist"],component:o(()=>a(()=>import("./plist.1682b4a2.js"),["assets/plist.1682b4a2.js","assets/index.61f93fd1.js","assets/index.0fc6025d.css","assets/useUtil.347438fc.js","assets/api.b4ac4b7e.js","assets/icon.6cdc3f0e.js","assets/index.0c64b17e.js","assets/index.fd473fe5.js","assets/Layout.f0c500e2.js","assets/EncodingSelect.a06e5e33.js","assets/index.7421985a.js","assets/FolderTree.8d4d7fda.js"]))},{name:"Aliyun Office Previewer",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/^Aliyundrive(Share)?$/,component:o(()=>a(()=>import("./aliyun_office.d587e210.js"),["assets/aliyun_office.d587e210.js","assets/index.61f93fd1.js","assets/index.0fc6025d.css"]))}],Z=r=>{const n=[];return Y.forEach(t=>{var c;t.provider&&!t.provider.test(r.provider)||(t.type===r.type||t.exts==="*"||((c=t.exts)==null?void 0:c.includes(M(r.name).toLowerCase())))&&n.push({name:t.name,component:t.component})}),C(r.name).forEach(t=>{n.push({name:t.key,component:q(t.value)})}),n.push({name:"Download",component:o(()=>a(()=>Promise.resolve().then(()=>N),void 0))}),n},ee=()=>{const r=d(()=>Z({...i.obj,provider:i.provider})),[n,s]=z(r()[0]);return e(g,{get when(){return r().length>1},get fallback(){return e(p,{openWith:!0})},get children(){return e(l,{w:"$full",spacing:"$2",get children(){return[e(f,{w:"$full",spacing:"$2",get children(){return[e(F,{alwaysShowBorder:!0,get value(){return n().name},onChange:t=>{s(r().find(c=>c.name===t))},get options(){return r().map(t=>({value:t.name}))}}),e(E,{})]}}),e(B,{get fallback(){return e(W,{})},get children(){return e(H,{get component(){return n().component}})}})]}})}})},ie=Object.freeze(Object.defineProperty({__proto__:null,default:ee},Symbol.toStringTag,{value:"Module"}));export{K as F,ie as a};
