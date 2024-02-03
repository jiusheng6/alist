import{cu as H,e as S,j as s,aT as R,ao as V,f as P,i as W,Y as K,bE as N,w as Y,u as G,d as X,a as J,b2 as Q,P as Z,r as E,o as T,aC as _,B as k,b4 as ee,n as te,X as ne}from"./index.61f93fd1.js";import{e as re,c as oe}from"./useUtil.347438fc.js";import{E as ae}from"./EncodingSelect.a06e5e33.js";import"./api.b4ac4b7e.js";function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?I(Object(n),!0).forEach(function(r){ie(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ce(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function ue(e,t){if(e==null)return{};var n=ce(e,t),r,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function se(e,t){return le(e)||fe(e,t)||de(e,t)||ge()}function le(e){if(Array.isArray(e))return e}function fe(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var n=[],r=!0,o=!1,a=void 0;try{for(var i=e[Symbol.iterator](),u;!(r=(u=i.next()).done)&&(n.push(u.value),!(t&&n.length===t));r=!0);}catch(c){o=!0,a=c}finally{try{!r&&i.return!=null&&i.return()}finally{if(o)throw a}}return n}}function de(e,t){if(!!e){if(typeof e=="string")return $(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $(e,t)}}function $(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ge(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?A(Object(n),!0).forEach(function(r){pe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function he(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(o,a){return a(o)},r)}}function g(e){return function t(){for(var n=this,r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return o.length>=e.length?e.apply(this,o):function(){for(var i=arguments.length,u=new Array(i),c=0;c<i;c++)u[c]=arguments[c];return t.apply(n,[].concat(o,u))}}}function y(e){return{}.toString.call(e).includes("Object")}function me(e){return!Object.keys(e).length}function h(e){return typeof e=="function"}function ve(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function be(e,t){return y(t)||l("changeType"),Object.keys(t).some(function(n){return!ve(e,n)})&&l("changeField"),t}function ye(e){h(e)||l("selectorType")}function we(e){h(e)||y(e)||l("handlerType"),y(e)&&Object.values(e).some(function(t){return!h(t)})&&l("handlersType")}function Oe(e){e||l("initialIsRequired"),y(e)||l("initialType"),me(e)&&l("initialContent")}function je(e,t){throw new Error(e[t]||e.default)}var Se={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},l=g(je)(Se),b={changes:be,selector:ye,handler:we,initial:Oe};function Pe(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};b.initial(e),b.handler(t);var n={current:e},r=g(Ie)(n,t),o=g(Te)(n),a=g(b.changes)(e),i=g(Ee)(n);function u(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(v){return v};return b.selector(f),f(n.current)}function c(f){he(r,o,a,i)(f)}return[u,c]}function Ee(e,t){return h(t)?t(e.current):t}function Te(e,t){return e.current=M(M({},e.current),t),t}function Ie(e,t,n){return h(t)?t(e.current):Object.keys(n).forEach(function(r){var o;return(o=t[r])===null||o===void 0?void 0:o.call(t,e.current[r])}),n}var Ce={create:Pe},$e={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs"}};function Ae(e){return function t(){for(var n=this,r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return o.length>=e.length?e.apply(this,o):function(){for(var i=arguments.length,u=new Array(i),c=0;c<i;c++)u[c]=arguments[c];return t.apply(n,[].concat(o,u))}}}function Me(e){return{}.toString.call(e).includes("Object")}function De(e){return e||D("configIsRequired"),Me(e)||D("configType"),e.urls?(Re(),{paths:{vs:e.urls.monacoBase}}):e}function Re(){console.warn(x.deprecation)}function xe(e,t){throw new Error(e[t]||e.default)}var x={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},D=Ae(xe)(x),qe={config:De},Le=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(o){return n.reduceRight(function(a,i){return i(a)},o)}};function q(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],q(e[n],t[n]))}),C(C({},e),t)}var Fe={type:"cancelation",msg:"operation is manually canceled"};function O(e){var t=!1,n=new Promise(function(r,o){e.then(function(a){return t?o(Fe):r(a)}),e.catch(o)});return n.cancel=function(){return t=!0},n}var ze=Ce.create({config:$e,isInitialized:!1,resolve:null,reject:null,monaco:null}),L=se(ze,2),m=L[0],w=L[1];function Be(e){var t=qe.config(e),n=t.monaco,r=ue(t,["monaco"]);w(function(o){return{config:q(o.config,r),monaco:n}})}function Ue(){var e=m(function(t){var n=t.monaco,r=t.isInitialized,o=t.resolve;return{monaco:n,isInitialized:r,resolve:o}});if(!e.isInitialized){if(w({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),O(j);if(window.monaco&&window.monaco.editor)return F(window.monaco),e.resolve(window.monaco),O(j);Le(He,We)(Ke)}return O(j)}function He(e){return document.body.appendChild(e)}function Ve(e){var t=document.createElement("script");return e&&(t.src=e),t}function We(e){var t=m(function(r){var o=r.config,a=r.reject;return{config:o,reject:a}}),n=Ve("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function Ke(){var e=m(function(n){var r=n.config,o=n.resolve,a=n.reject;return{config:r,resolve:o,reject:a}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){F(n),e.resolve(n)},function(n){e.reject(n)})}function F(e){m().monaco||w({monaco:e})}function Ne(){return m(function(e){var t=e.monaco;return t})}var j=new Promise(function(e,t){return w({resolve:e,reject:t})}),z={config:Be,init:Ue,__getMonacoInstance:Ne};z.config({paths:{vs:H}});let p;const Ye=e=>{const[t,n]=S(!0);return z.init().then(r=>{p=r,n(!1)}),s(R,{get loading(){return t()},get children(){return s(Ge,e)}})},Ge=e=>{let t,n,r;return V(()=>{n=p.editor.create(t,{value:e.value,theme:e.theme}),r=p.editor.createModel(e.value,e.language,e.path?p.Uri.parse(e.path):void 0),n.setModel(r),n.onDidChangeModelContent(()=>{var o;(o=e.onChange)==null||o.call(e,n.getValue())})}),P(()=>{n.setValue(e.value)}),P(()=>{p.editor.setTheme(e.theme)}),W(()=>{r&&r.dispose(),n&&n.dispose()}),s(K,{w:"$full",h:"70vh",ref(o){const a=t;typeof a=="function"?a(o):t=o}})};function Xe(e){const{colorMode:t}=N(),n=Y(()=>t()==="light"?"vs":"vs-dark"),{pathname:r}=G(),{isString:o,text:a}=oe(e.data),[i,u]=S("utf-8"),[c,f]=S(a(i())),v=X(),[B,U]=J(()=>Q.put("/fs/put",c(),{headers:{"File-Path":encodeURIComponent(r()),"Content-Type":e.contentType||"text/plain"}}));return P(Z(i,d=>{f(a(d)),console.log(c())})),s(ne,{w:"$full",alignItems:"start",spacing:"$2",pos:"relative",get children(){return[s(E,{when:!o,get children(){return s(ae,{get encoding(){return i()},setEncoding:u})}}),s(Ye,{get value(){return c()},get theme(){return n()},get path(){return T.obj.name},onChange:d=>{f(d)}}),s(E,{get when(){return _("write")||T.write},get children(){return s(k,{get loading(){return B()},onClick:async()=>{const d=await U();ee(d,()=>{te.success(v("global.save_success"))})},get children(){return v("global.save")}})}})]}})}const ke=()=>{const[e]=re();return s(R,{get loading(){return e.loading},get children(){return s(Xe,{get data(){var t;return(t=e())==null?void 0:t.content},get contentType(){var t;return(t=e())==null?void 0:t.contentType}})}})};export{ke as default};
