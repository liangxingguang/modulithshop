import{bf as V,bg as ke,az as ve,aC as ie,bh as me,aG as J,P as ee,bi as fe,bj as Ie,bk as _e,bl as pe,aL as ge,bm as ze,r as I,bn as Le,b3 as Ce,a7 as m,aP as ue,aW as be,i as we,p as w,I as ce,y as c,z as L,x as b,G as d,aR as t,H as de,aT as Ee,E as C,J as O,bo as Se,v as x,F as Q,bp as xe,b as Ne,bq as Oe,br as Te,ak as Re,bs as Ae,bt as $e,C as Be,O as Ve,Y as Me,b6 as U,al as Ye,bu as Pe,aU as ye,bv as B,b4 as M,bw as Fe,a_ as he,bx as Xe,by as De,A as He,bz as We,bA as je,aF as Ke,bB as Ge,b5 as Ze}from"./index-21964c78.js";import{d as qe}from"./debounce-6ea0a711.js";const Ue=(r,f)=>{if(!V||!r||!f)return!1;const l=r.getBoundingClientRect();let s;return f instanceof Element?s=f.getBoundingClientRect():s={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},l.top<s.bottom&&l.bottom>s.top&&l.right>s.left&&l.left<s.right};var Je="Expected a function";function re(r,f,l){var s=!0,y=!0;if(typeof r!="function")throw new TypeError(Je);return ke(l)&&(s="leading"in l?!!l.leading:s,y="trailing"in l?!!l.trailing:y),qe(r,f,{leading:s,maxWait:f,trailing:y})}const Qe=ve({urlList:{type:ie(Array),default:()=>me([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7}}),ea={close:()=>!0,switch:r=>J(r),rotate:r=>J(r)},aa=["src"],ta=ee({name:"ElImageViewer"}),na=ee({...ta,props:Qe,emits:ea,setup(r,{expose:f,emit:l}){const s=r,y={CONTAIN:{name:"contain",icon:fe(Ie)},ORIGINAL:{name:"original",icon:fe(_e)}},{t:E}=pe(),i=ge("image-viewer"),{nextZIndex:ae}=ze(),T=I(),N=I([]),S=Le(),_=I(!0),p=I(s.initialIndex),g=Ce(y.CONTAIN),u=I({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),Y=m(()=>{const{urlList:a}=s;return a.length<=1}),A=m(()=>p.value===0),D=m(()=>p.value===s.urlList.length-1),te=m(()=>s.urlList[p.value]),ne=m(()=>[i.e("btn"),i.e("prev"),i.is("disabled",!s.infinite&&A.value)]),P=m(()=>[i.e("btn"),i.e("next"),i.is("disabled",!s.infinite&&D.value)]),se=m(()=>{const{scale:a,deg:n,offsetX:o,offsetY:h,enableTransition:z}=u.value;let v=o/a,k=h/a;switch(n%360){case 90:case-270:[v,k]=[k,-v];break;case 180:case-180:[v,k]=[-v,-k];break;case 270:case-90:[v,k]=[-k,v];break}const $={transform:`scale(${a}) rotate(${n}deg) translate(${v}px, ${k}px)`,transition:z?"transform .3s":""};return g.value.name===y.CONTAIN.name&&($.maxWidth=$.maxHeight="100%"),$}),H=m(()=>J(s.zIndex)?s.zIndex:ae());function R(){oe(),l("close")}function le(){const a=re(o=>{switch(o.code){case B.esc:s.closeOnPressEscape&&R();break;case B.space:G();break;case B.left:Z();break;case B.up:e("zoomIn");break;case B.right:q();break;case B.down:e("zoomOut");break}}),n=re(o=>{const h=o.deltaY||o.deltaX;e(h<0?"zoomIn":"zoomOut",{zoomRate:s.zoomRate,enableTransition:!1})});S.run(()=>{M(document,"keydown",a),M(document,"wheel",n)})}function oe(){S.stop()}function W(){_.value=!1}function j(a){_.value=!1,a.target.alt=E("el.image.error")}function K(a){if(_.value||a.button!==0||!T.value)return;u.value.enableTransition=!1;const{offsetX:n,offsetY:o}=u.value,h=a.pageX,z=a.pageY,v=re($=>{u.value={...u.value,offsetX:n+$.pageX-h,offsetY:o+$.pageY-z}}),k=M(document,"mousemove",v);M(document,"mouseup",()=>{k()}),a.preventDefault()}function F(){u.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function G(){if(_.value)return;const a=Fe(y),n=Object.values(y),o=g.value.name,z=(n.findIndex(v=>v.name===o)+1)%a.length;g.value=y[a[z]],F()}function X(a){const n=s.urlList.length;p.value=(a+n)%n}function Z(){A.value&&!s.infinite||X(p.value-1)}function q(){D.value&&!s.infinite||X(p.value+1)}function e(a,n={}){if(_.value)return;const{minScale:o,maxScale:h}=s,{zoomRate:z,rotateDeg:v,enableTransition:k}={zoomRate:s.zoomRate,rotateDeg:90,enableTransition:!0,...n};switch(a){case"zoomOut":u.value.scale>o&&(u.value.scale=Number.parseFloat((u.value.scale/z).toFixed(3)));break;case"zoomIn":u.value.scale<h&&(u.value.scale=Number.parseFloat((u.value.scale*z).toFixed(3)));break;case"clockwise":u.value.deg+=v,l("rotate",u.value.deg);break;case"anticlockwise":u.value.deg-=v,l("rotate",u.value.deg);break}u.value.enableTransition=k}return ue(te,()=>{be(()=>{const a=N.value[0];a!=null&&a.complete||(_.value=!0)})}),ue(p,a=>{F(),l("switch",a)}),we(()=>{var a,n;le(),(n=(a=T.value)==null?void 0:a.focus)==null||n.call(a)}),f({setActiveItem:X}),(a,n)=>(w(),ce(Pe,{to:"body",disabled:!a.teleported},[c(Ye,{name:"viewer-fade",appear:""},{default:L(()=>[b("div",{ref_key:"wrapper",ref:T,tabindex:-1,class:d(t(i).e("wrapper")),style:de({zIndex:t(H)})},[b("div",{class:d(t(i).e("mask")),onClick:n[0]||(n[0]=Ee(o=>a.hideOnClickModal&&R(),["self"]))},null,2),C(" CLOSE "),b("span",{class:d([t(i).e("btn"),t(i).e("close")]),onClick:R},[c(t(O),null,{default:L(()=>[c(t(Se))]),_:1})],2),C(" ARROW "),t(Y)?C("v-if",!0):(w(),x(Q,{key:0},[b("span",{class:d(t(ne)),onClick:Z},[c(t(O),null,{default:L(()=>[c(t(xe))]),_:1})],2),b("span",{class:d(t(P)),onClick:q},[c(t(O),null,{default:L(()=>[c(t(Ne))]),_:1})],2)],64)),C(" ACTIONS "),b("div",{class:d([t(i).e("btn"),t(i).e("actions")])},[b("div",{class:d(t(i).e("actions__inner"))},[c(t(O),{onClick:n[1]||(n[1]=o=>e("zoomOut"))},{default:L(()=>[c(t(Oe))]),_:1}),c(t(O),{onClick:n[2]||(n[2]=o=>e("zoomIn"))},{default:L(()=>[c(t(Te))]),_:1}),b("i",{class:d(t(i).e("actions__divider"))},null,2),c(t(O),{onClick:G},{default:L(()=>[(w(),ce(Re(t(g).icon)))]),_:1}),b("i",{class:d(t(i).e("actions__divider"))},null,2),c(t(O),{onClick:n[3]||(n[3]=o=>e("anticlockwise"))},{default:L(()=>[c(t(Ae))]),_:1}),c(t(O),{onClick:n[4]||(n[4]=o=>e("clockwise"))},{default:L(()=>[c(t($e))]),_:1})],2)],2),C(" CANVAS "),b("div",{class:d(t(i).e("canvas"))},[(w(!0),x(Q,null,Be(a.urlList,(o,h)=>Ve((w(),x("img",{ref_for:!0,ref:z=>N.value[h]=z,key:o,src:o,style:de(t(se)),class:d(t(i).e("img")),onLoad:W,onError:j,onMousedown:K},null,46,aa)),[[Me,h===p.value]])),128))],2),U(a.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var sa=ye(na,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]]);const la=he(sa),oa=ve({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:ie([String,Object])},previewSrcList:{type:ie(Array),default:()=>me([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7}}),ra={load:r=>r instanceof Event,error:r=>r instanceof Event,switch:r=>J(r),close:()=>!0,show:()=>!0},ia=["src","loading"],ua={key:0},ca=ee({name:"ElImage",inheritAttrs:!1}),da=ee({...ca,props:oa,emits:ra,setup(r,{emit:f}){const l=r;let s="";const{t:y}=pe(),E=ge("image"),i=Xe(),ae=De(),T=I(),N=I(!1),S=I(!0),_=I(!1),p=I(),g=I(),u=V&&"loading"in HTMLImageElement.prototype;let Y,A;const D=m(()=>[E.e("inner"),P.value&&E.e("preview"),S.value&&E.is("loading")]),te=m(()=>i.style),ne=m(()=>{const{fit:e}=l;return V&&e?{objectFit:e}:{}}),P=m(()=>{const{previewSrcList:e}=l;return Array.isArray(e)&&e.length>0}),se=m(()=>{const{previewSrcList:e,initialIndex:a}=l;let n=a;return a>e.length-1&&(n=0),n}),H=m(()=>l.loading==="eager"?!1:!u&&l.loading==="lazy"||l.lazy),R=()=>{V&&(S.value=!0,N.value=!1,T.value=l.src)};function le(e){S.value=!1,N.value=!1,f("load",e)}function oe(e){S.value=!1,N.value=!0,f("error",e)}function W(){Ue(p.value,g.value)&&(R(),F())}const j=Ze(W,200,!0);async function K(){var e;if(!V)return;await be();const{scrollContainer:a}=l;je(a)?g.value=a:Ke(a)&&a!==""?g.value=(e=document.querySelector(a))!=null?e:void 0:p.value&&(g.value=Ge(p.value)),g.value&&(Y=M(g,"scroll",j),setTimeout(()=>W(),100))}function F(){!V||!g.value||!j||(Y==null||Y(),g.value=void 0)}function G(e){if(e.ctrlKey){if(e.deltaY<0)return e.preventDefault(),!1;if(e.deltaY>0)return e.preventDefault(),!1}}function X(){P.value&&(A=M("wheel",G,{passive:!1}),s=document.body.style.overflow,document.body.style.overflow="hidden",_.value=!0,f("show"))}function Z(){A==null||A(),document.body.style.overflow=s,_.value=!1,f("close")}function q(e){f("switch",e)}return ue(()=>l.src,()=>{H.value?(S.value=!0,N.value=!1,F(),K()):R()}),we(()=>{H.value?K():R()}),(e,a)=>(w(),x("div",{ref_key:"container",ref:p,class:d([t(E).b(),e.$attrs.class]),style:de(t(te))},[N.value?U(e.$slots,"error",{key:0},()=>[b("div",{class:d(t(E).e("error"))},He(t(y)("el.image.error")),3)]):(w(),x(Q,{key:1},[T.value!==void 0?(w(),x("img",We({key:0},t(ae),{src:T.value,loading:e.loading,style:t(ne),class:t(D),onClick:X,onLoad:le,onError:oe}),null,16,ia)):C("v-if",!0),S.value?(w(),x("div",{key:1,class:d(t(E).e("wrapper"))},[U(e.$slots,"placeholder",{},()=>[b("div",{class:d(t(E).e("placeholder"))},null,2)])],2)):C("v-if",!0)],64)),t(P)?(w(),x(Q,{key:2},[_.value?(w(),ce(t(la),{key:0,"z-index":e.zIndex,"initial-index":t(se),infinite:e.infinite,"zoom-rate":e.zoomRate,"min-scale":e.minScale,"max-scale":e.maxScale,"url-list":e.previewSrcList,"hide-on-click-modal":e.hideOnClickModal,teleported:e.previewTeleported,"close-on-press-escape":e.closeOnPressEscape,onClose:Z,onSwitch:q},{default:L(()=>[e.$slots.viewer?(w(),x("div",ua,[U(e.$slots,"viewer")])):C("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","min-scale","max-scale","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):C("v-if",!0)],64)):C("v-if",!0)],6))}});var fa=ye(da,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]]);const pa=he(fa);export{pa as E,re as t};
