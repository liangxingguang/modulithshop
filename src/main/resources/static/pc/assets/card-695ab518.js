import{az as n,aC as p,P as d,aL as c,p as o,v as t,G as r,aR as s,b6 as l,D as i,A as y,E as u,x as m,H as f,aU as h,a_ as v}from"./index-21964c78.js";const b=n({header:{type:String,default:""},bodyStyle:{type:p([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),C=d({name:"ElCard"}),S=d({...C,props:b,setup(_){const a=c("card");return(e,g)=>(o(),t("div",{class:r([s(a).b(),s(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(o(),t("div",{key:0,class:r(s(a).e("header"))},[l(e.$slots,"header",{},()=>[i(y(e.header),1)])],2)):u("v-if",!0),m("div",{class:r([s(a).e("body"),e.bodyClass]),style:f(e.bodyStyle)},[l(e.$slots,"default")],6)],2))}});var w=h(S,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);const E=v(w);export{E};