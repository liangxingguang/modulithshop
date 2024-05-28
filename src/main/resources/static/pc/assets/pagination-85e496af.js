import{az as A,aB as V,P as z,bl as j,a7 as y,p as g,v as P,A as q,I as B,z as G,ak as Y,aR as a,J as ee,aU as U,bC as oe,aC as ae,bh as ne,cz as te,aL as K,r as x,aP as R,y as se,F as ie,C as re,G as _,x as Q,L as ue,w as ce,E as O,d9 as ge,da as Z,db as pe,B as de,aZ as fe,bM as be,aQ as ve,bW as T,aG as L,bp as me,b as Pe,a_ as Ce}from"./index-21964c78.js";import{a as he,E as ye}from"./select-ed2293fb.js";import{i as ze}from"./isEqual-3f4e7b62.js";const le=Symbol("elPaginationKey"),_e=A({disabled:Boolean,currentPage:{type:Number,default:1},prevText:{type:String},prevIcon:{type:V}}),ke={click:e=>e instanceof MouseEvent},Se=["disabled","aria-label","aria-disabled"],Ne={key:0},xe=z({name:"ElPaginationPrev"}),Ee=z({...xe,props:_e,emits:ke,setup(e){const o=e,{t}=j(),p=y(()=>o.disabled||o.currentPage<=1);return(r,u)=>(g(),P("button",{type:"button",class:"btn-prev",disabled:a(p),"aria-label":r.prevText||a(t)("el.pagination.prev"),"aria-disabled":a(p),onClick:u[0]||(u[0]=f=>r.$emit("click",f))},[r.prevText?(g(),P("span",Ne,q(r.prevText),1)):(g(),B(a(ee),{key:1},{default:G(()=>[(g(),B(Y(r.prevIcon)))]),_:1}))],8,Se))}});var we=U(Ee,[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/prev.vue"]]);const $e=A({disabled:Boolean,currentPage:{type:Number,default:1},pageCount:{type:Number,default:50},nextText:{type:String},nextIcon:{type:V}}),Be=["disabled","aria-label","aria-disabled"],Te={key:0},Me=z({name:"ElPaginationNext"}),Ie=z({...Me,props:$e,emits:["click"],setup(e){const o=e,{t}=j(),p=y(()=>o.disabled||o.currentPage===o.pageCount||o.pageCount===0);return(r,u)=>(g(),P("button",{type:"button",class:"btn-next",disabled:a(p),"aria-label":r.nextText||a(t)("el.pagination.next"),"aria-disabled":a(p),onClick:u[0]||(u[0]=f=>r.$emit("click",f))},[r.nextText?(g(),P("span",Te,q(r.nextText),1)):(g(),B(a(ee),{key:1},{default:G(()=>[(g(),B(Y(r.nextIcon)))]),_:1}))],8,Be))}});var Le=U(Ie,[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/next.vue"]]);const H=()=>oe(le,{}),qe=A({pageSize:{type:Number,required:!0},pageSizes:{type:ae(Array),default:()=>ne([10,20,30,40,50,100])},popperClass:{type:String},disabled:Boolean,teleported:Boolean,size:{type:String,values:te}}),Ae=z({name:"ElPaginationSizes"}),je=z({...Ae,props:qe,emits:["page-size-change"],setup(e,{emit:o}){const t=e,{t:p}=j(),r=K("pagination"),u=H(),f=x(t.pageSize);R(()=>t.pageSizes,(d,C)=>{if(!ze(d,C)&&Array.isArray(d)){const c=d.includes(t.pageSize)?t.pageSize:t.pageSizes[0];o("page-size-change",c)}}),R(()=>t.pageSize,d=>{f.value=d});const h=y(()=>t.pageSizes);function E(d){var C;d!==f.value&&(f.value=d,(C=u.handleSizeChange)==null||C.call(u,Number(d)))}return(d,C)=>(g(),P("span",{class:_(a(r).e("sizes"))},[se(a(ye),{"model-value":f.value,disabled:d.disabled,"popper-class":d.popperClass,size:d.size,teleported:d.teleported,"validate-event":!1,onChange:E},{default:G(()=>[(g(!0),P(ie,null,re(a(h),c=>(g(),B(a(he),{key:c,value:c,label:c+a(p)("el.pagination.pagesize")},null,8,["value","label"]))),128))]),_:1},8,["model-value","disabled","popper-class","size","teleported"])],2))}});var Fe=U(je,[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/sizes.vue"]]);const Ke=A({size:{type:String,values:te}}),Ue=["disabled"],We=z({name:"ElPaginationJumper"}),De=z({...We,props:Ke,setup(e){const{t:o}=j(),t=K("pagination"),{pageCount:p,disabled:r,currentPage:u,changeEvent:f}=H(),h=x(),E=y(()=>{var c;return(c=h.value)!=null?c:u==null?void 0:u.value});function d(c){h.value=c?+c:""}function C(c){c=Math.trunc(+c),f==null||f(c),h.value=void 0}return(c,k)=>(g(),P("span",{class:_(a(t).e("jump")),disabled:a(r)},[Q("span",{class:_([a(t).e("goto")])},q(a(o)("el.pagination.goto")),3),se(a(ue),{size:c.size,class:_([a(t).e("editor"),a(t).is("in-pagination")]),min:1,max:a(p),disabled:a(r),"model-value":a(E),"validate-event":!1,label:a(o)("el.pagination.page"),type:"number","onUpdate:modelValue":d,onChange:C},null,8,["size","class","max","disabled","model-value","label"]),Q("span",{class:_([a(t).e("classifier")])},q(a(o)("el.pagination.pageClassifier")),3)],10,Ue))}});var Je=U(De,[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/jumper.vue"]]);const Oe=A({total:{type:Number,default:1e3}}),Ve=["disabled"],Re=z({name:"ElPaginationTotal"}),Ge=z({...Re,props:Oe,setup(e){const{t:o}=j(),t=K("pagination"),{disabled:p}=H();return(r,u)=>(g(),P("span",{class:_(a(t).e("total")),disabled:a(p)},q(a(o)("el.pagination.total",{total:r.total})),11,Ve))}});var He=U(Ge,[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/total.vue"]]);const Qe=A({currentPage:{type:Number,default:1},pageCount:{type:Number,required:!0},pagerCount:{type:Number,default:7},disabled:Boolean}),Ze=["onKeyup"],Xe=["aria-current","aria-label","tabindex"],Ye=["tabindex","aria-label"],ea=["aria-current","aria-label","tabindex"],aa=["tabindex","aria-label"],na=["aria-current","aria-label","tabindex"],ta=z({name:"ElPaginationPager"}),sa=z({...ta,props:Qe,emits:["change"],setup(e,{emit:o}){const t=e,p=K("pager"),r=K("icon"),{t:u}=j(),f=x(!1),h=x(!1),E=x(!1),d=x(!1),C=x(!1),c=x(!1),k=y(()=>{const n=t.pagerCount,s=(n-1)/2,i=Number(t.currentPage),N=Number(t.pageCount);let S=!1,w=!1;N>n&&(i>n-s&&(S=!0),i<N-s&&(w=!0));const $=[];if(S&&!w){const b=N-(n-2);for(let I=b;I<N;I++)$.push(I)}else if(!S&&w)for(let b=2;b<n;b++)$.push(b);else if(S&&w){const b=Math.floor(n/2)-1;for(let I=i-b;I<=i+b;I++)$.push(I)}else for(let b=2;b<N;b++)$.push(b);return $}),v=y(()=>["more","btn-quickprev",r.b(),p.is("disabled",t.disabled)]),W=y(()=>["more","btn-quicknext",r.b(),p.is("disabled",t.disabled)]),M=y(()=>t.disabled?-1:0);ce(()=>{const n=(t.pagerCount-1)/2;f.value=!1,h.value=!1,t.pageCount>t.pagerCount&&(t.currentPage>t.pagerCount-n&&(f.value=!0),t.currentPage<t.pageCount-n&&(h.value=!0))});function D(n=!1){t.disabled||(n?E.value=!0:d.value=!0)}function J(n=!1){n?C.value=!0:c.value=!0}function F(n){const s=n.target;if(s.tagName.toLowerCase()==="li"&&Array.from(s.classList).includes("number")){const i=Number(s.textContent);i!==t.currentPage&&o("change",i)}else s.tagName.toLowerCase()==="li"&&Array.from(s.classList).includes("more")&&l(n)}function l(n){const s=n.target;if(s.tagName.toLowerCase()==="ul"||t.disabled)return;let i=Number(s.textContent);const N=t.pageCount,S=t.currentPage,w=t.pagerCount-2;s.className.includes("more")&&(s.className.includes("quickprev")?i=S-w:s.className.includes("quicknext")&&(i=S+w)),Number.isNaN(+i)||(i<1&&(i=1),i>N&&(i=N)),i!==S&&o("change",i)}return(n,s)=>(g(),P("ul",{class:_(a(p).b()),onClick:l,onKeyup:de(F,["enter"])},[n.pageCount>0?(g(),P("li",{key:0,class:_([[a(p).is("active",n.currentPage===1),a(p).is("disabled",n.disabled)],"number"]),"aria-current":n.currentPage===1,"aria-label":a(u)("el.pagination.currentPage",{pager:1}),tabindex:a(M)}," 1 ",10,Xe)):O("v-if",!0),f.value?(g(),P("li",{key:1,class:_(a(v)),tabindex:a(M),"aria-label":a(u)("el.pagination.prevPages",{pager:n.pagerCount-2}),onMouseenter:s[0]||(s[0]=i=>D(!0)),onMouseleave:s[1]||(s[1]=i=>E.value=!1),onFocus:s[2]||(s[2]=i=>J(!0)),onBlur:s[3]||(s[3]=i=>C.value=!1)},[(E.value||C.value)&&!n.disabled?(g(),B(a(ge),{key:0})):(g(),B(a(Z),{key:1}))],42,Ye)):O("v-if",!0),(g(!0),P(ie,null,re(a(k),i=>(g(),P("li",{key:i,class:_([[a(p).is("active",n.currentPage===i),a(p).is("disabled",n.disabled)],"number"]),"aria-current":n.currentPage===i,"aria-label":a(u)("el.pagination.currentPage",{pager:i}),tabindex:a(M)},q(i),11,ea))),128)),h.value?(g(),P("li",{key:2,class:_(a(W)),tabindex:a(M),"aria-label":a(u)("el.pagination.nextPages",{pager:n.pagerCount-2}),onMouseenter:s[4]||(s[4]=i=>D()),onMouseleave:s[5]||(s[5]=i=>d.value=!1),onFocus:s[6]||(s[6]=i=>J()),onBlur:s[7]||(s[7]=i=>c.value=!1)},[(d.value||c.value)&&!n.disabled?(g(),B(a(pe),{key:0})):(g(),B(a(Z),{key:1}))],42,aa)):O("v-if",!0),n.pageCount>1?(g(),P("li",{key:3,class:_([[a(p).is("active",n.currentPage===n.pageCount),a(p).is("disabled",n.disabled)],"number"]),"aria-current":n.currentPage===n.pageCount,"aria-label":a(u)("el.pagination.currentPage",{pager:n.pageCount}),tabindex:a(M)},q(n.pageCount),11,na)):O("v-if",!0)],42,Ze))}});var ia=U(sa,[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/pager.vue"]]);const m=e=>typeof e!="number",ra=A({pageSize:Number,defaultPageSize:Number,total:Number,pageCount:Number,pagerCount:{type:Number,validator:e=>L(e)&&Math.trunc(e)===e&&e>4&&e<22&&e%2===1,default:7},currentPage:Number,defaultCurrentPage:Number,layout:{type:String,default:["prev","pager","next","jumper","->","total"].join(", ")},pageSizes:{type:ae(Array),default:()=>ne([10,20,30,40,50,100])},popperClass:{type:String,default:""},prevText:{type:String,default:""},prevIcon:{type:V,default:()=>me},nextText:{type:String,default:""},nextIcon:{type:V,default:()=>Pe},teleported:{type:Boolean,default:!0},small:Boolean,background:Boolean,disabled:Boolean,hideOnSinglePage:Boolean}),la={"update:current-page":e=>L(e),"update:page-size":e=>L(e),"size-change":e=>L(e),"current-change":e=>L(e),"prev-click":e=>L(e),"next-click":e=>L(e)},X="ElPagination";var oa=z({name:X,props:ra,emits:la,setup(e,{emit:o,slots:t}){const{t:p}=j(),r=K("pagination"),u=fe().vnode.props||{},f="onUpdate:currentPage"in u||"onUpdate:current-page"in u||"onCurrentChange"in u,h="onUpdate:pageSize"in u||"onUpdate:page-size"in u||"onSizeChange"in u,E=y(()=>{if(m(e.total)&&m(e.pageCount)||!m(e.currentPage)&&!f)return!1;if(e.layout.includes("sizes")){if(m(e.pageCount)){if(!m(e.total)&&!m(e.pageSize)&&!h)return!1}else if(!h)return!1}return!0}),d=x(m(e.defaultPageSize)?10:e.defaultPageSize),C=x(m(e.defaultCurrentPage)?1:e.defaultCurrentPage),c=y({get(){return m(e.pageSize)?d.value:e.pageSize},set(l){m(e.pageSize)&&(d.value=l),h&&(o("update:page-size",l),o("size-change",l))}}),k=y(()=>{let l=0;return m(e.pageCount)?m(e.total)||(l=Math.max(1,Math.ceil(e.total/c.value))):l=e.pageCount,l}),v=y({get(){return m(e.currentPage)?C.value:e.currentPage},set(l){let n=l;l<1?n=1:l>k.value&&(n=k.value),m(e.currentPage)&&(C.value=n),f&&(o("update:current-page",n),o("current-change",n))}});R(k,l=>{v.value>l&&(v.value=l)});function W(l){v.value=l}function M(l){c.value=l;const n=k.value;v.value>n&&(v.value=n)}function D(){e.disabled||(v.value-=1,o("prev-click",v.value))}function J(){e.disabled||(v.value+=1,o("next-click",v.value))}function F(l,n){l&&(l.props||(l.props={}),l.props.class=[l.props.class,n].join(" "))}return be(le,{pageCount:k,disabled:y(()=>e.disabled),currentPage:v,changeEvent:W,handleSizeChange:M}),()=>{var l,n;if(!E.value)return ve(X,p("el.pagination.deprecationWarning")),null;if(!e.layout||e.hideOnSinglePage&&k.value<=1)return null;const s=[],i=[],N=T("div",{class:r.e("rightwrapper")},i),S={prev:T(we,{disabled:e.disabled,currentPage:v.value,prevText:e.prevText,prevIcon:e.prevIcon,onClick:D}),jumper:T(Je,{size:e.small?"small":"default"}),pager:T(ia,{currentPage:v.value,pageCount:k.value,pagerCount:e.pagerCount,onChange:W,disabled:e.disabled}),next:T(Le,{disabled:e.disabled,currentPage:v.value,pageCount:k.value,nextText:e.nextText,nextIcon:e.nextIcon,onClick:J}),sizes:T(Fe,{pageSize:c.value,pageSizes:e.pageSizes,popperClass:e.popperClass,disabled:e.disabled,teleported:e.teleported,size:e.small?"small":"default"}),slot:(n=(l=t==null?void 0:t.default)==null?void 0:l.call(t))!=null?n:null,total:T(He,{total:m(e.total)?0:e.total})},w=e.layout.split(",").map(b=>b.trim());let $=!1;return w.forEach(b=>{if(b==="->"){$=!0;return}$?i.push(S[b]):s.push(S[b])}),F(s[0],r.is("first")),F(s[s.length-1],r.is("last")),$&&i.length>0&&(F(i[0],r.is("first")),F(i[i.length-1],r.is("last")),s.push(N)),T("div",{class:[r.b(),r.is("background",e.background),{[r.m("small")]:e.small}]},s)}}});const pa=Ce(oa);export{pa as E};