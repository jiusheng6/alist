!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,i=[],c=!0,u=!1;try{for(t=t.call(e);!(c=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);c=!0);}catch(a){u=!0,o=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy.49230c4c.js","./index-legacy.84acabec.js","./index-legacy.eebed302.js"],(function(n,t){"use strict";var r,o,i,c,u,a,l,s,m,g,d,f,p,h,b,v,y,$,z,E,j,A,S,w,C,k,I,x,O,L,T,P,R,G,_,U,D,M,B,N,Y,V,W,X,q,H,F,J,K,Q,Z,ee,ne,te,re,oe,ie,ce,ue,ae,le,se,me,ge,de,fe;return{setters:[function(e){r=e.j,o=e.x,i=e.X,c=e.w,u=e.a1,a=e.a2,l=e.b5,s=e.V,m=e.U,g=e.u,d=e.d,f=e.L,p=e.D,h=e.C,b=e.r,v=e.ab,y=e.b6,$=e.e,z=e.b7,E=e.$,j=e.Y,A=e.a7,S=e.J,w=e.K,C=e.b8,k=e.b9,I=e.ba,x=e.al,O=e.N,L=e.aP,T=e.bb,P=e.bc,R=e.n,G=e.bd,_=e.be,U=e.bf,D=e.bg,M=e.bh,B=e.bi,N=e.a6,Y=e.bj,V=e.aG,W=e.bk,X=e.bl,q=e.bm},function(e){H=e.d,F=e.e,J=e.f,K=e.g,Q=e.h,Z=e.i,ee=e.j,ne=e.k,te=e.l,re=e.m,oe=e.c,ie=e.n,ce=e.o,ue=e.b},function(e){ae=e.A,le=e.d,se=e.e,me=e.f,ge=e.g,de=e.h,fe=e.i}],execute:function(){var pe=n("G",function(e){return e[e.SINGLE=0]="SINGLE",e[e.SITE=1]="SITE",e[e.STYLE=2]="STYLE",e[e.PREVIEW=3]="PREVIEW",e[e.GLOBAL=4]="GLOBAL",e[e.ARIA2=5]="ARIA2",e[e.INDEX=6]="INDEX",e[e.SSO=7]="SSO",e}(pe||{})),he=n("F",function(e){return e[e.PUBLIC=0]="PUBLIC",e[e.PRIVATE=1]="PRIVATE",e[e.READONLY=2]="READONLY",e[e.DEPRECATED=3]="DEPRECATED",e}(he||{})),be=function(e){var n=c((function(){if(!u.is_admin(a())){if(void 0===e.role)return!1;if(e.role===l.GENERAL&&!u.is_general(a()))return!1}return!0}));return r(m,{get fallback(){return r(ve,e)},get children(){return[r(s,{get when(){return!n()},children:null}),r(s,{get when(){return e.children},get children(){return r(ye,e)}})]}})},ve=function(e){var n=g().pathname,t=d(),o=function(){return n()===e.to};return r(ae,{get cancelBase(){return e.to.startsWith("http")},display:"flex",as:f,get href(){return e.to},onClick:function(n){if(we(),e.refresh){var t;null===(t=n.stopPropagation)||void 0===t||t.call(n);var r=e.to;r.startsWith("http")||(r=p(r)),window.open(r,"_self")}},w:"$full",alignItems:"center",get _hover(){return{bgColor:o()?"$info4":h(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return o()?"$info4":""},get color(){return o()?"$info11":""},get external(){return e.external},get children(){return[r(b,{get when(){return e.icon},get children(){return r(v,{mr:"$2",get as(){return e.icon}})}}),r(y,{get children(){return t(e.title)}})]}})},ye=function(n){var t=g().pathname,o=e($(t().includes(n.to)),2),i=o[0],c=o[1],u=d();return r(j,{w:"$full",get children(){return[r(z,{justifyContent:"space-between",onClick:function(){c(!i())},w:"$full",alignItems:"center",get _hover(){return{bgColor:h()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[r(E,{get children(){return[r(b,{get when(){return n.icon},get children(){return r(v,{mr:"$2",get as(){return n.icon}})}}),r(y,{get children(){return u(n.title)}})]}}),r(v,{as:le,get transform(){return i()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),r(b,{get when(){return i()},get children(){return r(j,{pl:"$2",get children(){return r($e,{get items(){return n.children}})}})}})]}})},$e=function(e){return r(i,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return r(o,{get each(){return e.items},children:function(e){return r(be,e)}})}})};var ze=S((function(){return w((function(){return t.import("./Common-legacy.ad46eb16.js")}),void 0)})),Ee=[{title:"manage.sidemenu.profile",icon:H,to:"/@manage",role:l.GUEST,component:S((function(){return w((function(){return t.import("./Profile-legacy.47e4d44b.js")}),void 0)}))},{title:"manage.sidemenu.settings",icon:F,to:"/@manage/settings",children:[{title:"manage.sidemenu.site",icon:J,to:"/@manage/settings/site",component:function(){return r(ze,{get group(){return pe.SITE}})}},{title:"manage.sidemenu.style",icon:K,to:"/@manage/settings/style",component:function(){return r(ze,{get group(){return pe.STYLE}})}},{title:"manage.sidemenu.preview",icon:Q,to:"/@manage/settings/preview",component:function(){return r(ze,{get group(){return pe.PREVIEW}})}},{title:"manage.sidemenu.global",icon:Z,to:"/@manage/settings/global",component:function(){return r(ze,{get group(){return pe.GLOBAL}})}},{title:"manage.sidemenu.sso",icon:C,to:"/@manage/settings/sso",component:function(){return r(ze,{get group(){return pe.SSO}})}},{title:"manage.sidemenu.other",icon:ee,to:"/@manage/settings/other",component:S((function(){return w((function(){return t.import("./Other-legacy.b690b7e3.js")}),void 0)}))}]},{title:"manage.sidemenu.tasks",icon:function(e){return A({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},e)},to:"/@manage/tasks",children:[{title:"manage.sidemenu.aria2",icon:ne,to:"/@manage/tasks/aria2",component:S((function(){return w((function(){return t.import("./Aria2-legacy.4accfafd.js")}),void 0)}))},{title:"manage.sidemenu.qbit",icon:se,to:"/@manage/tasks/qbit",component:S((function(){return w((function(){return t.import("./Qbit-legacy.0dfffe5e.js")}),void 0)}))},{title:"manage.sidemenu.upload",icon:te,to:"/@manage/tasks/upload",component:S((function(){return w((function(){return t.import("./Upload-legacy.4f27e262.js")}),void 0)}))},{title:"manage.sidemenu.copy",icon:k,to:"/@manage/tasks/copy",component:S((function(){return w((function(){return t.import("./Copy-legacy.c63bd8a6.js")}),void 0)}))}]},{title:"manage.sidemenu.users",icon:re,to:"/@manage/users",component:S((function(){return w((function(){return t.import("./Users-legacy.ce34fbf6.js")}),void 0)}))},{title:"manage.sidemenu.storages",icon:me,to:"/@manage/storages",component:S((function(){return w((function(){return t.import("./Storages-legacy.74ebf8b1.js")}),void 0)}))},{title:"manage.sidemenu.metas",icon:function(e){return A({a:{viewBox:"0 0 24 24"},c:'<path d="M5.385 6.136c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-1.438 2.63c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.465-2.63c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.499-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm-1.088 5.592c.794 0 1.438-.654 1.438-1.461s-.644-1.461-1.438-1.461-1.438.654-1.438 1.461.643 1.461 1.438 1.461zm5.464-5.592c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111S11.4 7.247 12 7.247s1.088-.498 1.088-1.111zm.35-4.675c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461S11.206 0 12 0s1.438.654 1.438 1.461zm-.35 0C13.088.848 12.6.35 12 .35s-1.088.498-1.088 1.111S11.4 2.572 12 2.572s1.088-.498 1.088-1.111zm.35 8.806c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.499 1.088-1.111zm4.376-4.131c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939 1.461c.794 0 1.438-.654 1.438-1.461s-.644-1.461-1.438-1.461-1.438.654-1.438 1.461.644 1.461 1.438 1.461zm-4.027 1.209c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.643-1.461-1.438-1.461zm4.027 0c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zM3.947 12.857a1.45 1.45 0 00-1.438 1.461c0 .807.644 1.461 1.438 1.461s1.438-.654 1.438-1.461a1.45 1.45 0 00-1.438-1.461zm5.465 1.5c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.655 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zM12 12.896c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.464 1.461c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.655 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939-1.461c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zM3.947 16.948c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.465 1.5c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm4.376 0c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm.35 4.091c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111S11.4 23.65 12 23.65s1.088-.498 1.088-1.111zm4.376-4.091c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939-1.461c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461z"/>'},e)},to:"/@manage/metas",component:S((function(){return w((function(){return t.import("./Metas-legacy.cc703024.js")}),void 0)}))},{title:"manage.sidemenu.indexes",icon:oe,to:"/@manage/indexes",component:S((function(){return w((function(){return t.import("./indexes-legacy.8b309857.js")}),void 0)}))},{title:"manage.sidemenu.backup-restore",to:"/@manage/backup-restore",icon:ge,component:S((function(){return w((function(){return t.import("./backup-restore-legacy.814664b1.js")}),void 0)}))},{title:"manage.sidemenu.about",icon:ie,to:"/@manage/about",role:l.GUEST,component:S((function(){return w((function(){return t.import("./About-legacy.a50ef840.js")}),void 0)}))},{title:"manage.sidemenu.docs",icon:de,to:"https://alist.nn.ci",role:l.GUEST,external:!0},{title:"manage.sidemenu.home",icon:I,to:"/",role:l.GUEST,refresh:!0}],je=x(),Ae=je.isOpen,Se=je.onOpen,we=je.onClose,Ce=function(){var e=d(),n=g().to;return r(j,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return O("$background","$neutral2")()},get children(){return[r(z,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[r(E,{spacing:"$2",get children(){return[r(L,{"aria-label":"menu",get icon(){return r(fe,{})},display:{"@sm":"none"},onClick:Se,size:"sm"}),r(y,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:function(){n("/@manage")},get children(){return e("manage.title")}})]}}),r(E,{spacing:"$1",get children(){return r(L,{"aria-label":"logout",get icon(){return r(T,{})},onClick:function(){P(),R.success(e("manage.logout_success")),n("/@login?redirect=".concat(encodeURIComponent(location.pathname)))},size:"sm"})}})]}}),r(G,{get opened(){return Ae()},placement:"left",onClose:we,get children(){return[r(_,{}),r(U,{get children(){return[r(D,{}),r(M,{color:"$info9",get children(){return e("manage.title")}}),r(B,{get children(){return[r($e,{items:Ee}),r(N,{get children(){return r(E,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[r(Y,{}),r(V,{})]}})}})]}})]}})]}})]}})},ke=[{to:"/storages/add",component:S((function(){return w((function(){return t.import("./AddOrEdit-legacy.5e67f564.js")}),void 0)}))},{to:"/storages/edit/:id",component:S((function(){return w((function(){return t.import("./AddOrEdit-legacy.5e67f564.js")}),void 0)}))},{to:"/users/add",component:S((function(){return w((function(){return t.import("./AddOrEdit-legacy.1e8d5ddd.js")}),void 0)}))},{to:"/users/edit/:id",component:S((function(){return w((function(){return t.import("./AddOrEdit-legacy.1e8d5ddd.js")}),void 0)}))},{to:"/metas/add",component:S((function(){return w((function(){return t.import("./AddOrEdit-legacy.045522d8.js")}),void 0)}))},{to:"/metas/edit/:id",component:S((function(){return w((function(){return t.import("./AddOrEdit-legacy.045522d8.js")}),void 0)}))},{to:"/2fa",component:S((function(){return w((function(){return t.import("./2fa-legacy.455b2034.js")}),void 0)}))},{to:"/messenger",component:S((function(){return w((function(){return t.import("./Messenger-legacy.0838603b.js")}),void 0)}))}],Ie=function(e){return ce(e.title),r(N,{h:"$full",get children(){return r(y,{get children(){return e.title}})}})},xe=function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return n.forEach((function(n){n.children?e(n.children,t):t.push({to:W(n.to,"/@manage"),component:n.component||function(){return r(Ie,{get title(){return n.title},get to(){return n.to||"empty"}})}})})),t}(Ee).concat(ke),Oe=Object.freeze(Object.defineProperty({__proto__:null,default:function(){var e=d();return ue((function(){return e("manage.title")})),r(j,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[r(Ce,{}),r(z,{w:"$full",h:"calc(100vh - 64px)",get children(){return[r(j,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return O("$background","$neutral2")()},overflowY:"auto",get children(){return[r($e,{items:Ee}),r(N,{get children(){return r(E,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[r(Y,{}),r(V,{})]}})}})]}}),r(j,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return r(X,{get children(){return r(o,{each:xe,children:function(e){return r(q,{get path(){return e.to},get component(){return e.component}})}})}})}})]}})]}})}},Symbol.toStringTag,{value:"Module"}));n("i",Oe)}}}))}();
