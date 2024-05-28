import{az as ue,cA as se,aG as d,aH as q,aI as F,b$ as I,aD as h,P as X,bl as oe,aL as ie,r as ce,f as de,aJ as me,a7 as V,cx as E,aK as pe,aN as be,aP as fe,i as ve,cw as Ne,p as b,v as D,O as Y,aR as t,G as K,B as _,y as M,z as H,I as S,a as Ve,cB as he,J,E as W,cC as Ie,a4 as ye,aT as P,L as ge,aU as we,aY as Ee,aF as _e,aQ as Q,a_ as Se}from"./index-21964c78.js";import{v as j}from"./index-a2686495.js";const Pe=ue({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:se,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:l=>l===null||d(l)||["min","max"].includes(l),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:l=>l>=0&&l===Number.parseInt(`${l}`,10)},validateEvent:{type:Boolean,default:!0}}),Fe={[q]:(l,A)=>A!==l,blur:l=>l instanceof FocusEvent,focus:l=>l instanceof FocusEvent,[F]:l=>d(l)||I(l),[h]:l=>d(l)||I(l)},Ae=["aria-label","onKeydown"],ke=["aria-label","onKeydown"],xe=X({name:"ElInputNumber"}),Be=X({...xe,props:Pe,emits:Fe,setup(l,{expose:A,emit:c}){const r=l,{t:O}=oe(),m=ie("input-number"),v=ce(),u=de({currentValue:r.modelValue,userInput:null}),{formItem:f}=me(),U=V(()=>d(r.modelValue)&&r.modelValue<=r.min),G=V(()=>d(r.modelValue)&&r.modelValue>=r.max),Z=V(()=>{const e=$(r.step);return E(r.precision)?Math.max($(r.modelValue),e):(e>r.precision,r.precision)}),k=V(()=>r.controls&&r.controlsPosition==="right"),L=pe(),N=be(),x=V(()=>{if(u.userInput!==null)return u.userInput;let e=u.currentValue;if(I(e))return"";if(d(e)){if(Number.isNaN(e))return"";E(r.precision)||(e=e.toFixed(r.precision))}return e}),B=(e,n)=>{if(E(n)&&(n=Z.value),n===0)return Math.round(e);let a=String(e);const s=a.indexOf(".");if(s===-1||!a.replace(".","").split("")[s+n])return e;const g=a.length;return a.charAt(g-1)==="5"&&(a=`${a.slice(0,Math.max(0,g-1))}6`),Number.parseFloat(Number(a).toFixed(n))},$=e=>{if(I(e))return 0;const n=e.toString(),a=n.indexOf(".");let s=0;return a!==-1&&(s=n.length-a-1),s},R=(e,n=1)=>d(e)?B(e+r.step*n):u.currentValue,C=()=>{if(r.readonly||N.value||G.value)return;const e=Number(x.value)||0,n=R(e);y(n),c(F,u.currentValue)},T=()=>{if(r.readonly||N.value||U.value)return;const e=Number(x.value)||0,n=R(e,-1);y(n),c(F,u.currentValue)},z=(e,n)=>{const{max:a,min:s,step:o,precision:p,stepStrictly:g,valueOnClear:w}=r;a<s&&Ee("InputNumber","min should not be greater than max.");let i=Number(e);if(I(e)||Number.isNaN(i))return null;if(e===""){if(w===null)return null;i=_e(w)?{min:s,max:a}[w]:w}return g&&(i=B(Math.round(i/o)*o,p)),E(p)||(i=B(i,p)),(i>a||i<s)&&(i=i>a?a:s,n&&c(h,i)),i},y=(e,n=!0)=>{var a;const s=u.currentValue,o=z(e);if(!n){c(h,o);return}s!==o&&(u.userInput=null,c(h,o),c(q,o,s),r.validateEvent&&((a=f==null?void 0:f.validate)==null||a.call(f,"change").catch(p=>Q())),u.currentValue=o)},ee=e=>{u.userInput=e;const n=e===""?null:Number(e);c(F,n),y(n,!1)},ne=e=>{const n=e!==""?Number(e):"";(d(n)&&!Number.isNaN(n)||e==="")&&y(n),u.userInput=null},te=()=>{var e,n;(n=(e=v.value)==null?void 0:e.focus)==null||n.call(e)},ae=()=>{var e,n;(n=(e=v.value)==null?void 0:e.blur)==null||n.call(e)},re=e=>{c("focus",e)},le=e=>{var n;c("blur",e),r.validateEvent&&((n=f==null?void 0:f.validate)==null||n.call(f,"blur").catch(a=>Q()))};return fe(()=>r.modelValue,e=>{const n=z(u.userInput),a=z(e,!0);!d(n)&&(!n||n!==a)&&(u.currentValue=a,u.userInput=null)},{immediate:!0}),ve(()=>{var e;const{min:n,max:a,modelValue:s}=r,o=(e=v.value)==null?void 0:e.input;if(o.setAttribute("role","spinbutton"),Number.isFinite(a)?o.setAttribute("aria-valuemax",String(a)):o.removeAttribute("aria-valuemax"),Number.isFinite(n)?o.setAttribute("aria-valuemin",String(n)):o.removeAttribute("aria-valuemin"),o.setAttribute("aria-valuenow",u.currentValue||u.currentValue===0?String(u.currentValue):""),o.setAttribute("aria-disabled",String(N.value)),!d(s)&&s!=null){let p=Number(s);Number.isNaN(p)&&(p=null),c(h,p)}}),Ne(()=>{var e,n;const a=(e=v.value)==null?void 0:e.input;a==null||a.setAttribute("aria-valuenow",`${(n=u.currentValue)!=null?n:""}`)}),A({focus:te,blur:ae}),(e,n)=>(b(),D("div",{class:K([t(m).b(),t(m).m(t(L)),t(m).is("disabled",t(N)),t(m).is("without-controls",!e.controls),t(m).is("controls-right",t(k))]),onDragstart:n[1]||(n[1]=P(()=>{},["prevent"]))},[e.controls?Y((b(),D("span",{key:0,role:"button","aria-label":t(O)("el.inputNumber.decrease"),class:K([t(m).e("decrease"),t(m).is("disabled",t(U))]),onKeydown:_(T,["enter"])},[M(t(J),null,{default:H(()=>[t(k)?(b(),S(t(Ve),{key:0})):(b(),S(t(he),{key:1}))]),_:1})],42,Ae)),[[t(j),T]]):W("v-if",!0),e.controls?Y((b(),D("span",{key:1,role:"button","aria-label":t(O)("el.inputNumber.increase"),class:K([t(m).e("increase"),t(m).is("disabled",t(G))]),onKeydown:_(C,["enter"])},[M(t(J),null,{default:H(()=>[t(k)?(b(),S(t(Ie),{key:0})):(b(),S(t(ye),{key:1}))]),_:1})],42,ke)),[[t(j),C]]):W("v-if",!0),M(t(ge),{id:e.id,ref_key:"input",ref:v,type:"number",step:e.step,"model-value":t(x),placeholder:e.placeholder,readonly:e.readonly,disabled:t(N),size:t(L),max:e.max,min:e.min,name:e.name,label:e.label,"validate-event":!1,onWheel:n[0]||(n[0]=P(()=>{},["prevent"])),onKeydown:[_(P(C,["prevent"]),["up"]),_(P(T,["prevent"]),["down"])],onBlur:le,onFocus:re,onInput:ee,onChange:ne},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","label","onKeydown"])],34))}});var Ce=we(Be,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]]);const De=Se(Ce);export{De as E};