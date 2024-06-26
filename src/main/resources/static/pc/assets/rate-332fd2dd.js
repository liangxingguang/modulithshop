import{aC as pe,aF as E,bl as R,dq as V,aE as W,ag as he,cE as be,aK as ye,aJ as q,aG as g,Q as oe,bG as J,dr as Ve,ch as we,aN as xe,aO as Ce,aP as ge,r as _,a7 as u,ci as T,c2 as U,bm as N,aI as X,aS as Ie,p as c,v,F as D,C as Se,G as m,aU as o,y as Q,z as Y,P as Z,I as w,an as x,Z as ee,E as H,J as ae,H as k,A as Ee,aX as _e,bz as C,bY as le,b1 as Te}from"./index-78223f15.js";const Ne=pe({modelValue:{type:Number,default:0},id:{type:String,default:void 0},lowThreshold:{type:Number,default:2},highThreshold:{type:Number,default:4},max:{type:Number,default:5},colors:{type:E([Array,Object]),default:()=>R(["","",""])},voidColor:{type:String,default:""},disabledVoidColor:{type:String,default:""},icons:{type:E([Array,Object]),default:()=>[V,V,V]},voidIcon:{type:W,default:()=>he},disabledVoidIcon:{type:W,default:()=>V},disabled:Boolean,allowHalf:Boolean,showText:Boolean,showScore:Boolean,textColor:{type:String,default:""},texts:{type:E(Array),default:()=>R(["Extremely bad","Disappointed","Fair","Satisfied","Surprise"])},scoreTemplate:{type:String,default:"{value}"},size:be,label:{type:String,default:void 0},clearable:{type:Boolean,default:!1}}),De={[ye]:p=>q(p),[g]:p=>q(p)},He=["id","aria-label","aria-labelledby","aria-valuenow","aria-valuetext","aria-valuemax"],ke=["onMousemove","onClick"],Me=oe({name:"ElRate"}),Be=oe({...Me,props:Ne,emits:De,setup(p,{expose:te,emit:h}){const e=p;function I(a,l){const t=n=>U(n),i=Object.keys(l).map(n=>+n).filter(n=>{const y=l[n];return(t(y)?y.excluded:!1)?a<n:a<=n}).sort((n,y)=>n-y),b=l[i[0]];return t(b)&&b.value||b}const M=J(Ve,void 0),B=J(we,void 0),se=xe(),r=Ce("rate"),{inputId:re,isLabeledByFormItem:P}=ge(e,{formItemContext:B}),s=_(e.modelValue),S=_(-1),f=_(!0),ne=u(()=>[r.b(),r.m(se.value)]),d=u(()=>e.disabled||(M==null?void 0:M.disabled)),ue=u(()=>r.cssVarBlock({"void-color":e.voidColor,"disabled-void-color":e.disabledVoidColor,"fill-color":F.value})),A=u(()=>{let a="";return e.showScore?a=e.scoreTemplate.replace(/\{\s*value\s*\}/,d.value?`${e.modelValue}`:`${s.value}`):e.showText&&(a=e.texts[Math.ceil(s.value)-1]),a}),z=u(()=>e.modelValue*100-Math.floor(e.modelValue)*100),ie=u(()=>T(e.colors)?{[e.lowThreshold]:e.colors[0],[e.highThreshold]:{value:e.colors[1],excluded:!0},[e.max]:e.colors[2]}:e.colors),F=u(()=>{const a=I(s.value,ie.value);return U(a)?"":a}),ce=u(()=>{let a="";return d.value?a=`${z.value}%`:e.allowHalf&&(a="50%"),{color:F.value,width:a}}),O=u(()=>{let a=T(e.icons)?[...e.icons]:{...e.icons};return a=N(a),T(a)?{[e.lowThreshold]:a[0],[e.highThreshold]:{value:a[1],excluded:!0},[e.max]:a[2]}:a}),de=u(()=>I(e.modelValue,O.value)),j=u(()=>d.value?X(e.disabledVoidIcon)?e.disabledVoidIcon:N(e.disabledVoidIcon):X(e.voidIcon)?e.voidIcon:N(e.voidIcon)),fe=u(()=>I(s.value,O.value));function K(a){const l=d.value&&z.value>0&&a-1<e.modelValue&&a>e.modelValue,t=e.allowHalf&&f.value&&a-.5<=s.value&&a>s.value;return l||t}function $(a){e.clearable&&a===e.modelValue&&(a=0),h(g,a),e.modelValue!==a&&h("change",a)}function ve(a){d.value||(e.allowHalf&&f.value?$(s.value):$(a))}function me(a){if(d.value)return;let l=s.value;const t=a.code;return t===C.up||t===C.right?(e.allowHalf?l+=.5:l+=1,a.stopPropagation(),a.preventDefault()):(t===C.left||t===C.down)&&(e.allowHalf?l-=.5:l-=1,a.stopPropagation(),a.preventDefault()),l=l<0?0:l,l=l>e.max?e.max:l,h(g,l),h("change",l),l}function G(a,l){if(!d.value){if(e.allowHalf&&l){let t=l.target;le(t,r.e("item"))&&(t=t.querySelector(`.${r.e("icon")}`)),(t.clientWidth===0||le(t,r.e("decimal")))&&(t=t.parentNode),f.value=l.offsetX*2<=t.clientWidth,s.value=f.value?a-.5:a}else s.value=a;S.value=a}}function L(){d.value||(e.allowHalf&&(f.value=e.modelValue!==Math.floor(e.modelValue)),s.value=e.modelValue,S.value=-1)}return Ie(()=>e.modelValue,a=>{s.value=a,f.value=e.modelValue!==Math.floor(e.modelValue)}),e.modelValue||h(g,0),te({setCurrentValue:G,resetCurrentValue:L}),(a,l)=>{var t;return c(),v("div",{id:o(re),class:m([o(ne),o(r).is("disabled",o(d))]),role:"slider","aria-label":o(P)?void 0:a.label||"rating","aria-labelledby":o(P)?(t=o(B))==null?void 0:t.labelId:void 0,"aria-valuenow":s.value,"aria-valuetext":o(A)||void 0,"aria-valuemin":"0","aria-valuemax":a.max,tabindex:"0",style:k(o(ue)),onKeydown:me},[(c(!0),v(D,null,Se(a.max,(i,b)=>(c(),v("span",{key:b,class:m(o(r).e("item")),onMousemove:n=>G(i,n),onMouseleave:L,onClick:n=>ve(i)},[Q(o(ae),{class:m([o(r).e("icon"),{hover:S.value===i},o(r).is("active",i<=s.value)])},{default:Y(()=>[K(i)?H("v-if",!0):(c(),v(D,{key:0},[Z((c(),w(x(o(fe)),null,null,512)),[[ee,i<=s.value]]),Z((c(),w(x(o(j)),null,null,512)),[[ee,!(i<=s.value)]])],64)),K(i)?(c(),v(D,{key:1},[(c(),w(x(o(j)),{class:m([o(r).em("decimal","box")])},null,8,["class"])),Q(o(ae),{style:k(o(ce)),class:m([o(r).e("icon"),o(r).e("decimal")])},{default:Y(()=>[(c(),w(x(o(de))))]),_:1},8,["style","class"])],64)):H("v-if",!0)]),_:2},1032,["class"])],42,ke))),128)),a.showText||a.showScore?(c(),v("span",{key:0,class:m(o(r).e("text")),style:k({color:a.textColor})},Ee(o(A)),7)):H("v-if",!0)],46,He)}}});var Pe=_e(Be,[["__file","/home/runner/work/element-plus/element-plus/packages/components/rate/src/rate.vue"]]);const Fe=Te(Pe);export{Fe as E};