import{az as pe,aC as S,bh as W,dl as V,aB as G,ae as he,cA as be,aH as ye,aG as U,aD as _,P as oe,bC as q,dm as Ve,cd as we,aK as xe,aL as Ce,aM as _e,r as E,a7 as u,ce as T,b_ as J,bi as D,aF as X,aP as ge,p as c,v,F as H,C as Ie,G as m,aR as o,y as Y,z as Q,O as Z,I as w,ak as x,Y as ee,E as N,J as ae,H as k,A as Se,aU as Ee,bv as C,bU as le,a_ as Te}from"./index-21964c78.js";const De=pe({modelValue:{type:Number,default:0},id:{type:String,default:void 0},lowThreshold:{type:Number,default:2},highThreshold:{type:Number,default:4},max:{type:Number,default:5},colors:{type:S([Array,Object]),default:()=>W(["","",""])},voidColor:{type:String,default:""},disabledVoidColor:{type:String,default:""},icons:{type:S([Array,Object]),default:()=>[V,V,V]},voidIcon:{type:G,default:()=>he},disabledVoidIcon:{type:G,default:()=>V},disabled:Boolean,allowHalf:Boolean,showText:Boolean,showScore:Boolean,textColor:{type:String,default:""},texts:{type:S(Array),default:()=>W(["Extremely bad","Disappointed","Fair","Satisfied","Surprise"])},scoreTemplate:{type:String,default:"{value}"},size:be,label:{type:String,default:void 0},clearable:{type:Boolean,default:!1}}),He={[ye]:p=>U(p),[_]:p=>U(p)},Ne=["id","aria-label","aria-labelledby","aria-valuenow","aria-valuetext","aria-valuemax"],ke=["onMousemove","onClick"],Me=oe({name:"ElRate"}),Be=oe({...Me,props:De,emits:He,setup(p,{expose:te,emit:h}){const e=p;function g(a,l){const t=n=>J(n),i=Object.keys(l).map(n=>+n).filter(n=>{const y=l[n];return(t(y)?y.excluded:!1)?a<n:a<=n}).sort((n,y)=>n-y),b=l[i[0]];return t(b)&&b.value||b}const M=q(Ve,void 0),B=q(we,void 0),se=xe(),r=Ce("rate"),{inputId:re,isLabeledByFormItem:A}=_e(e,{formItemContext:B}),s=E(e.modelValue),I=E(-1),f=E(!0),ne=u(()=>[r.b(),r.m(se.value)]),d=u(()=>e.disabled||(M==null?void 0:M.disabled)),ue=u(()=>r.cssVarBlock({"void-color":e.voidColor,"disabled-void-color":e.disabledVoidColor,"fill-color":F.value})),P=u(()=>{let a="";return e.showScore?a=e.scoreTemplate.replace(/\{\s*value\s*\}/,d.value?`${e.modelValue}`:`${s.value}`):e.showText&&(a=e.texts[Math.ceil(s.value)-1]),a}),z=u(()=>e.modelValue*100-Math.floor(e.modelValue)*100),ie=u(()=>T(e.colors)?{[e.lowThreshold]:e.colors[0],[e.highThreshold]:{value:e.colors[1],excluded:!0},[e.max]:e.colors[2]}:e.colors),F=u(()=>{const a=g(s.value,ie.value);return J(a)?"":a}),ce=u(()=>{let a="";return d.value?a=`${z.value}%`:e.allowHalf&&(a="50%"),{color:F.value,width:a}}),O=u(()=>{let a=T(e.icons)?[...e.icons]:{...e.icons};return a=D(a),T(a)?{[e.lowThreshold]:a[0],[e.highThreshold]:{value:a[1],excluded:!0},[e.max]:a[2]}:a}),de=u(()=>g(e.modelValue,O.value)),j=u(()=>d.value?X(e.disabledVoidIcon)?e.disabledVoidIcon:D(e.disabledVoidIcon):X(e.voidIcon)?e.voidIcon:D(e.voidIcon)),fe=u(()=>g(s.value,O.value));function K(a){const l=d.value&&z.value>0&&a-1<e.modelValue&&a>e.modelValue,t=e.allowHalf&&f.value&&a-.5<=s.value&&a>s.value;return l||t}function L(a){e.clearable&&a===e.modelValue&&(a=0),h(_,a),e.modelValue!==a&&h("change",a)}function ve(a){d.value||(e.allowHalf&&f.value?L(s.value):L(a))}function me(a){if(d.value)return;let l=s.value;const t=a.code;return t===C.up||t===C.right?(e.allowHalf?l+=.5:l+=1,a.stopPropagation(),a.preventDefault()):(t===C.left||t===C.down)&&(e.allowHalf?l-=.5:l-=1,a.stopPropagation(),a.preventDefault()),l=l<0?0:l,l=l>e.max?e.max:l,h(_,l),h("change",l),l}function R(a,l){if(!d.value){if(e.allowHalf&&l){let t=l.target;le(t,r.e("item"))&&(t=t.querySelector(`.${r.e("icon")}`)),(t.clientWidth===0||le(t,r.e("decimal")))&&(t=t.parentNode),f.value=l.offsetX*2<=t.clientWidth,s.value=f.value?a-.5:a}else s.value=a;I.value=a}}function $(){d.value||(e.allowHalf&&(f.value=e.modelValue!==Math.floor(e.modelValue)),s.value=e.modelValue,I.value=-1)}return ge(()=>e.modelValue,a=>{s.value=a,f.value=e.modelValue!==Math.floor(e.modelValue)}),e.modelValue||h(_,0),te({setCurrentValue:R,resetCurrentValue:$}),(a,l)=>{var t;return c(),v("div",{id:o(re),class:m([o(ne),o(r).is("disabled",o(d))]),role:"slider","aria-label":o(A)?void 0:a.label||"rating","aria-labelledby":o(A)?(t=o(B))==null?void 0:t.labelId:void 0,"aria-valuenow":s.value,"aria-valuetext":o(P)||void 0,"aria-valuemin":"0","aria-valuemax":a.max,tabindex:"0",style:k(o(ue)),onKeydown:me},[(c(!0),v(H,null,Ie(a.max,(i,b)=>(c(),v("span",{key:b,class:m(o(r).e("item")),onMousemove:n=>R(i,n),onMouseleave:$,onClick:n=>ve(i)},[Y(o(ae),{class:m([o(r).e("icon"),{hover:I.value===i},o(r).is("active",i<=s.value)])},{default:Q(()=>[K(i)?N("v-if",!0):(c(),v(H,{key:0},[Z((c(),w(x(o(fe)),null,null,512)),[[ee,i<=s.value]]),Z((c(),w(x(o(j)),null,null,512)),[[ee,!(i<=s.value)]])],64)),K(i)?(c(),v(H,{key:1},[(c(),w(x(o(j)),{class:m([o(r).em("decimal","box")])},null,8,["class"])),Y(o(ae),{style:k(o(ce)),class:m([o(r).e("icon"),o(r).e("decimal")])},{default:Q(()=>[(c(),w(x(o(de))))]),_:1},8,["style","class"])],64)):N("v-if",!0)]),_:2},1032,["class"])],42,ke))),128)),a.showText||a.showScore?(c(),v("span",{key:0,class:m(o(r).e("text")),style:k({color:a.textColor})},Se(o(P)),7)):N("v-if",!0)],46,Ne)}}});var Ae=Ee(Be,[["__file","/home/runner/work/element-plus/element-plus/packages/components/rate/src/rate.vue"]]);const Fe=Te(Ae);export{Fe as E};
