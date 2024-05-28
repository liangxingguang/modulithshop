import{az as S,aU as g,P as z,bN as R,bO as $,J as L,bo as A,aV as y,a7 as n,r as h,aL as I,bl as B,aO as D,n as i,p as o,I as T,y as l,z as d,O as N,x as w,bz as P,aT as O,G as s,v as t,b6 as f,A as H,E as r,Y as U,al as V,bu as q,a_ as F}from"./index-21964c78.js";import{d as M,a as G,u as J}from"./overlay-b290a267.js";const Y=S({...M,direction:{type:String,default:"rtl",values:["ltr","rtl","ttb","btt"]},size:{type:[String,Number],default:"30%"},withHeader:{type:Boolean,default:!0},modalFade:{type:Boolean,default:!0},headerAriaLevel:{type:String,default:"2"}}),j=G,K=z({name:"ElDrawer",components:{ElOverlay:R,ElFocusTrap:$,ElIcon:L,Close:A},inheritAttrs:!1,props:Y,emits:j,setup(e,{slots:a}){y({scope:"el-drawer",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/drawer.html#slots"},n(()=>!!a.title)),y({scope:"el-drawer",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/drawer.html#attributes",type:"Attribute"},n(()=>!!e.customClass));const u=h(),b=h(),c=I("drawer"),{t:v}=B(),p=n(()=>e.direction==="rtl"||e.direction==="ltr"),m=n(()=>D(e.size));return{...J(e,u),drawerRef:u,focusStartRef:b,isHorizontal:p,drawerSize:m,ns:c,t:v}}}),Q=["aria-label","aria-labelledby","aria-describedby"],W=["id","aria-level"],X=["aria-label"],Z=["id"];function _(e,a,u,b,c,v){const p=i("close"),m=i("el-icon"),C=i("el-focus-trap"),k=i("el-overlay");return o(),T(q,{to:"body",disabled:!e.appendToBody},[l(V,{name:e.ns.b("fade"),onAfterEnter:e.afterEnter,onAfterLeave:e.afterLeave,onBeforeLeave:e.beforeLeave,persisted:""},{default:d(()=>[N(l(k,{mask:e.modal,"overlay-class":e.modalClass,"z-index":e.zIndex,onClick:e.onModalClick},{default:d(()=>[l(C,{loop:"",trapped:e.visible,"focus-trap-el":e.drawerRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:d(()=>[w("div",P({ref:"drawerRef","aria-modal":"true","aria-label":e.title||void 0,"aria-labelledby":e.title?void 0:e.titleId,"aria-describedby":e.bodyId},e.$attrs,{class:[e.ns.b(),e.direction,e.visible&&"open",e.customClass],style:e.isHorizontal?"width: "+e.drawerSize:"height: "+e.drawerSize,role:"dialog",onClick:a[1]||(a[1]=O(()=>{},["stop"]))}),[w("span",{ref:"focusStartRef",class:s(e.ns.e("sr-focus")),tabindex:"-1"},null,2),e.withHeader?(o(),t("header",{key:0,class:s(e.ns.e("header"))},[e.$slots.title?f(e.$slots,"title",{key:1},()=>[r(" DEPRECATED SLOT ")]):f(e.$slots,"header",{key:0,close:e.handleClose,titleId:e.titleId,titleClass:e.ns.e("title")},()=>[e.$slots.title?r("v-if",!0):(o(),t("span",{key:0,id:e.titleId,role:"heading","aria-level":e.headerAriaLevel,class:s(e.ns.e("title"))},H(e.title),11,W))]),e.showClose?(o(),t("button",{key:2,"aria-label":e.t("el.drawer.close"),class:s(e.ns.e("close-btn")),type:"button",onClick:a[0]||(a[0]=(...E)=>e.handleClose&&e.handleClose(...E))},[l(m,{class:s(e.ns.e("close"))},{default:d(()=>[l(p)]),_:1},8,["class"])],10,X)):r("v-if",!0)],2)):r("v-if",!0),e.rendered?(o(),t("div",{key:1,id:e.bodyId,class:s(e.ns.e("body"))},[f(e.$slots,"default")],10,Z)):r("v-if",!0),e.$slots.footer?(o(),t("div",{key:2,class:s(e.ns.e("footer"))},[f(e.$slots,"footer")],2)):r("v-if",!0)],16,Q)]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])]),_:3},8,["mask","overlay-class","z-index","onClick"]),[[U,e.visible]])]),_:3},8,["name","onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"])}var x=g(K,[["render",_],["__file","/home/runner/work/element-plus/element-plus/packages/components/drawer/src/drawer.vue"]]);const ae=F(x);export{ae as E};
