import{ac as z,bw as p,w as h,j as t,$ as w,r as s,B as i,aP as S,x as d}from"./index.61f93fd1.js";import{l as $,m as k}from"./index.fd473fe5.js";const b=P=>{var m;const e=z({maxShowPage:4,defaultPageSize:30,defaultCurrent:1,hideOnSinglePage:!0},P),[n,g]=p({pageSize:e.defaultPageSize,current:e.defaultCurrent});(m=e.setResetCallback)==null||m.call(e,()=>{g("current",e.defaultCurrent)});const a=h(()=>Math.ceil(e.total/n.pageSize)),f=h(()=>{const r=n.current,c=Math.max(2,r-Math.floor(e.maxShowPage/2));return Array.from({length:r-c},(C,u)=>c+u)}),x=h(()=>{const r=n.current,c=Math.min(a()-1,r+Math.floor(e.maxShowPage/2));return Array.from({length:c-r},(C,u)=>r+1+u)}),o={"@initial":"sm","@md":"md"},l=r=>{var c;g("current",r),(c=e.onChange)==null||c.call(e,r)};return t(s,{get when(){return!e.hideOnSinglePage||a()>1},get children(){return t(w,{spacing:"$1",get children(){return[t(s,{get when(){return n.current!==1},get children(){return[t(i,{size:o,get colorScheme(){return e.colorScheme},onClick:()=>{l(1)},px:"$3",children:"1"}),t(S,{size:o,get icon(){return t($,{})},"aria-label":"Previous",get colorScheme(){return e.colorScheme},onClick:()=>{l(n.current-1)},w:"2rem !important"})]}}),t(d,{get each(){return f()},children:r=>t(i,{size:o,get colorScheme(){return e.colorScheme},onClick:()=>{l(r)},px:r>10?"$2_5":"$3",children:r})}),t(i,{size:o,get colorScheme(){return e.colorScheme},variant:"solid",get px(){return n.current>10?"$2_5":"$3"},get children(){return n.current}}),t(d,{get each(){return x()},children:r=>t(i,{size:o,get colorScheme(){return e.colorScheme},onClick:()=>{l(r)},px:r>10?"$2_5":"$3",children:r})}),t(s,{get when(){return n.current!==a()},get children(){return[t(S,{size:o,get icon(){return t(k,{})},"aria-label":"Next",get colorScheme(){return e.colorScheme},onClick:()=>{l(n.current+1)},w:"2rem !important"}),t(i,{size:o,get colorScheme(){return e.colorScheme},onClick:()=>{l(a())},get px(){return a()>10?"$2_5":"$3"},get children(){return a()}})]}})]}})}})};export{b as P};
