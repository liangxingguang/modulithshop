import{cN as U,cO as be,cP as ve,cQ as me,cA as J,aD as V,aF as A,aG as K,aE as z,bC as I,a7 as h,cx as G,aN as fe,aJ as P,aP as Z,aQ as j,aW as X,aZ as Y,r as D,ce as E,b_ as pe,cR as H,aK as Q,b$ as ke,aM as _,P as L,bL as ee,aL as O,p as C,I as ae,z as le,x as W,G as x,aR as u,O as $,v as y,cs as w,aT as N,cS as F,b6 as M,F as he,D as ne,A as te,E as T,ak as oe,aU as R,H as ge,az as xe,aC as Ce,bM as ye,t as Se,a_ as Le,c1 as se}from"./index-21964c78.js";import{i as Be}from"./isEqual-3f4e7b62.js";import{i as Ee,h as Ie}from"./hasIn-54cf4aec.js";import{f as $e}from"./flatten-3a6a3668.js";function we(e,a,n){switch(n.length){case 0:return e.call(a);case 1:return e.call(a,n[0]);case 2:return e.call(a,n[0],n[1]);case 3:return e.call(a,n[0],n[1],n[2])}return e.apply(a,n)}var Ne=800,Fe=16,Ve=Date.now;function ze(e){var a=0,n=0;return function(){var l=Ve(),r=Fe-(l-n);if(n=l,r>0){if(++a>=Ne)return arguments[0]}else a=0;return e.apply(void 0,arguments)}}function Ge(e){return function(){return e}}var De=U?function(e,a){return U(e,"toString",{configurable:!0,enumerable:!1,value:Ge(a),writable:!0})}:Ee;const Te=De;var Pe=ze(Te);const Oe=Pe;var q=Math.max;function Me(e,a,n){return a=q(a===void 0?e.length-1:a,0),function(){for(var l=arguments,r=-1,d=q(l.length-a,0),c=Array(d);++r<d;)c[r]=l[a+r];r=-1;for(var t=Array(a+1);++r<a;)t[r]=l[r];return t[a]=n(c),we(e,this,t)}}function Re(e){return Oe(Me(e,void 0,$e),e+"")}function Ue(e,a,n){for(var l=-1,r=a.length,d={};++l<r;){var c=a[l],t=be(e,c);n(t,c)&&ve(d,me(c,e),t)}return d}function Ae(e,a){return Ue(e,a,function(n,l){return Ie(e,l)})}var Ke=Re(function(e,a){return e==null?{}:Ae(e,a)});const He=Ke,ue={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:J,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},ie={[V]:e=>A(e)||K(e)||z(e),change:e=>A(e)||K(e)||z(e)},B=Symbol("checkboxGroupContextKey"),Qe=({model:e,isChecked:a})=>{const n=I(B,void 0),l=h(()=>{var d,c;const t=(d=n==null?void 0:n.max)==null?void 0:d.value,m=(c=n==null?void 0:n.min)==null?void 0:c.value;return!G(t)&&e.value.length>=t&&!a.value||!G(m)&&e.value.length<=m&&a.value});return{isDisabled:fe(h(()=>(n==null?void 0:n.disabled.value)||l.value)),isLimitDisabled:l}},We=(e,{model:a,isLimitExceeded:n,hasOwnLabel:l,isDisabled:r,isLabeledByFormItem:d})=>{const c=I(B,void 0),{formItem:t}=P(),{emit:m}=Y();function o(s){var v,p;return s===e.trueLabel||s===!0?(v=e.trueLabel)!=null?v:!0:(p=e.falseLabel)!=null?p:!1}function f(s,v){m("change",o(s),v)}function k(s){if(n.value)return;const v=s.target;m("change",o(v.checked),s)}async function S(s){n.value||!l.value&&!r.value&&d.value&&(s.composedPath().some(b=>b.tagName==="LABEL")||(a.value=o([!1,e.falseLabel].includes(a.value)),await X(),f(a.value,s)))}const i=h(()=>(c==null?void 0:c.validateEvent)||e.validateEvent);return Z(()=>e.modelValue,()=>{i.value&&(t==null||t.validate("change").catch(s=>j()))}),{handleChange:k,onClickRoot:S}},qe=e=>{const a=D(!1),{emit:n}=Y(),l=I(B,void 0),r=h(()=>G(l)===!1),d=D(!1);return{model:h({get(){var t,m;return r.value?(t=l==null?void 0:l.modelValue)==null?void 0:t.value:(m=e.modelValue)!=null?m:a.value},set(t){var m,o;r.value&&E(t)?(d.value=((m=l==null?void 0:l.max)==null?void 0:m.value)!==void 0&&t.length>(l==null?void 0:l.max.value),d.value===!1&&((o=l==null?void 0:l.changeEvent)==null||o.call(l,t))):(n(V,t),a.value=t)}}),isGroup:r,isLimitExceeded:d}},Je=(e,a,{model:n})=>{const l=I(B,void 0),r=D(!1),d=h(()=>{const o=n.value;return z(o)?o:E(o)?pe(e.label)?o.map(H).some(f=>Be(f,e.label)):o.map(H).includes(e.label):o!=null?o===e.trueLabel:!!o}),c=Q(h(()=>{var o;return(o=l==null?void 0:l.size)==null?void 0:o.value}),{prop:!0}),t=Q(h(()=>{var o;return(o=l==null?void 0:l.size)==null?void 0:o.value})),m=h(()=>!!a.default||!ke(e.label));return{checkboxButtonSize:c,isChecked:d,isFocused:r,checkboxSize:t,hasOwnLabel:m}},Ze=(e,{model:a})=>{function n(){E(a.value)&&!a.value.includes(e.label)?a.value.push(e.label):a.value=e.trueLabel||!0}e.checked&&n()},re=(e,a)=>{const{formItem:n}=P(),{model:l,isGroup:r,isLimitExceeded:d}=qe(e),{isFocused:c,isChecked:t,checkboxButtonSize:m,checkboxSize:o,hasOwnLabel:f}=Je(e,a,{model:l}),{isDisabled:k}=Qe({model:l,isChecked:t}),{inputId:S,isLabeledByFormItem:i}=_(e,{formItemContext:n,disableIdGeneration:f,disableIdManagement:r}),{handleChange:s,onClickRoot:v}=We(e,{model:l,isLimitExceeded:d,hasOwnLabel:f,isDisabled:k,isLabeledByFormItem:i});return Ze(e,{model:l}),{inputId:S,isLabeledByFormItem:i,isChecked:t,isDisabled:k,isFocused:c,checkboxButtonSize:m,checkboxSize:o,hasOwnLabel:f,model:l,handleChange:s,onClickRoot:v}},je=["id","indeterminate","name","tabindex","disabled","true-value","false-value"],Xe=["id","indeterminate","disabled","value","name","tabindex"],Ye=L({name:"ElCheckbox"}),_e=L({...Ye,props:ue,emits:ie,setup(e){const a=e,n=ee(),{inputId:l,isLabeledByFormItem:r,isChecked:d,isDisabled:c,isFocused:t,checkboxSize:m,hasOwnLabel:o,model:f,handleChange:k,onClickRoot:S}=re(a,n),i=O("checkbox"),s=h(()=>[i.b(),i.m(m.value),i.is("disabled",c.value),i.is("bordered",a.border),i.is("checked",d.value)]),v=h(()=>[i.e("input"),i.is("disabled",c.value),i.is("checked",d.value),i.is("indeterminate",a.indeterminate),i.is("focus",t.value)]);return(p,b)=>(C(),ae(oe(!u(o)&&u(r)?"span":"label"),{class:x(u(s)),"aria-controls":p.indeterminate?p.controls:null,onClick:u(S)},{default:le(()=>[W("span",{class:x(u(v))},[p.trueLabel||p.falseLabel?$((C(),y("input",{key:0,id:u(l),"onUpdate:modelValue":b[0]||(b[0]=g=>w(f)?f.value=g:null),class:x(u(i).e("original")),type:"checkbox",indeterminate:p.indeterminate,name:p.name,tabindex:p.tabindex,disabled:u(c),"true-value":p.trueLabel,"false-value":p.falseLabel,onChange:b[1]||(b[1]=(...g)=>u(k)&&u(k)(...g)),onFocus:b[2]||(b[2]=g=>t.value=!0),onBlur:b[3]||(b[3]=g=>t.value=!1),onClick:b[4]||(b[4]=N(()=>{},["stop"]))},null,42,je)),[[F,u(f)]]):$((C(),y("input",{key:1,id:u(l),"onUpdate:modelValue":b[5]||(b[5]=g=>w(f)?f.value=g:null),class:x(u(i).e("original")),type:"checkbox",indeterminate:p.indeterminate,disabled:u(c),value:p.label,name:p.name,tabindex:p.tabindex,onChange:b[6]||(b[6]=(...g)=>u(k)&&u(k)(...g)),onFocus:b[7]||(b[7]=g=>t.value=!0),onBlur:b[8]||(b[8]=g=>t.value=!1),onClick:b[9]||(b[9]=N(()=>{},["stop"]))},null,42,Xe)),[[F,u(f)]]),W("span",{class:x(u(i).e("inner"))},null,2)],2),u(o)?(C(),y("span",{key:0,class:x(u(i).e("label"))},[M(p.$slots,"default"),p.$slots.default?T("v-if",!0):(C(),y(he,{key:0},[ne(te(p.label),1)],64))],2)):T("v-if",!0)]),_:3},8,["class","aria-controls","onClick"]))}});var ea=R(_e,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const aa=["name","tabindex","disabled","true-value","false-value"],la=["name","tabindex","disabled","value"],na=L({name:"ElCheckboxButton"}),ta=L({...na,props:ue,emits:ie,setup(e){const a=e,n=ee(),{isFocused:l,isChecked:r,isDisabled:d,checkboxButtonSize:c,model:t,handleChange:m}=re(a,n),o=I(B,void 0),f=O("checkbox"),k=h(()=>{var i,s,v,p;const b=(s=(i=o==null?void 0:o.fill)==null?void 0:i.value)!=null?s:"";return{backgroundColor:b,borderColor:b,color:(p=(v=o==null?void 0:o.textColor)==null?void 0:v.value)!=null?p:"",boxShadow:b?`-1px 0 0 0 ${b}`:void 0}}),S=h(()=>[f.b("button"),f.bm("button",c.value),f.is("disabled",d.value),f.is("checked",r.value),f.is("focus",l.value)]);return(i,s)=>(C(),y("label",{class:x(u(S))},[i.trueLabel||i.falseLabel?$((C(),y("input",{key:0,"onUpdate:modelValue":s[0]||(s[0]=v=>w(t)?t.value=v:null),class:x(u(f).be("button","original")),type:"checkbox",name:i.name,tabindex:i.tabindex,disabled:u(d),"true-value":i.trueLabel,"false-value":i.falseLabel,onChange:s[1]||(s[1]=(...v)=>u(m)&&u(m)(...v)),onFocus:s[2]||(s[2]=v=>l.value=!0),onBlur:s[3]||(s[3]=v=>l.value=!1),onClick:s[4]||(s[4]=N(()=>{},["stop"]))},null,42,aa)),[[F,u(t)]]):$((C(),y("input",{key:1,"onUpdate:modelValue":s[5]||(s[5]=v=>w(t)?t.value=v:null),class:x(u(f).be("button","original")),type:"checkbox",name:i.name,tabindex:i.tabindex,disabled:u(d),value:i.label,onChange:s[6]||(s[6]=(...v)=>u(m)&&u(m)(...v)),onFocus:s[7]||(s[7]=v=>l.value=!0),onBlur:s[8]||(s[8]=v=>l.value=!1),onClick:s[9]||(s[9]=N(()=>{},["stop"]))},null,42,la)),[[F,u(t)]]),i.$slots.default||i.label?(C(),y("span",{key:2,class:x(u(f).be("button","inner")),style:ge(u(r)?u(k):void 0)},[M(i.$slots,"default",{},()=>[ne(te(i.label),1)])],6)):T("v-if",!0)],2))}});var de=R(ta,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);const oa=xe({modelValue:{type:Ce(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:J,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}}),sa={[V]:e=>E(e),change:e=>E(e)},ua=L({name:"ElCheckboxGroup"}),ia=L({...ua,props:oa,emits:sa,setup(e,{emit:a}){const n=e,l=O("checkbox"),{formItem:r}=P(),{inputId:d,isLabeledByFormItem:c}=_(n,{formItemContext:r}),t=async o=>{a(V,o),await X(),a("change",o)},m=h({get(){return n.modelValue},set(o){t(o)}});return ye(B,{...He(Se(n),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:m,changeEvent:t}),Z(()=>n.modelValue,()=>{n.validateEvent&&(r==null||r.validate("change").catch(o=>j()))}),(o,f)=>{var k;return C(),ae(oe(o.tag),{id:u(d),class:x(u(l).b("group")),role:"group","aria-label":u(c)?void 0:o.label||"checkbox-group","aria-labelledby":u(c)?(k=u(r))==null?void 0:k.labelId:void 0},{default:le(()=>[M(o.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var ce=R(ia,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const va=Le(ea,{CheckboxButton:de,CheckboxGroup:ce});se(de);se(ce);export{va as E,Me as o,Oe as s};