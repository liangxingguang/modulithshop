import{P as y,u as z,e as B,f as v,i as b,t as g,n as E,p as n,v as l,x as s,A as i,G as d,F as k,C as L,I as S,y as u,z as m,D as $,K as P,V as I,W as J}from"./index-21964c78.js";import{E as V}from"./pagination-85e496af.js";/* empty css              */import"./tag-b8b29d1f.js";import"./select-ed2293fb.js";import"./scrollbar-c1d26490.js";import"./popper-251c4401.js";/* empty css               */import{E as q}from"./image-viewer-dd6920ac.js";import{i as w}from"./order-09ce62cc.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";import"./isEqual-3f4e7b62.js";import"./_Uint8Array-4a48d71f.js";import"./strings-b80b2625.js";import"./debounce-6ea0a711.js";import"./_baseIteratee-8f2ec951.js";import"./hasIn-54cf4aec.js";import"./index-a2bc563c.js";import"./isUndefined-aa0326a0.js";const N=y({name:"comment",setup(){const t=z();B();let e=v({commentLists:[],total:1,yes:0,no:0,order_item_evaluation_status:0}),r=v({page:1,size:10}),p=()=>{w(r).then(a=>{a.status==200&&(e.commentLists=a.data.items,e.total=a.data.records,e.yes=a.data.yes,e.no=a.data.no)})},_=()=>{let a={page:r.page,size:r.size};e.order_item_evaluation_status&&(a.order_item_evaluation_status=e.order_item_evaluation_status),t.push({path:"/user/order/comment",query:a})};return b(()=>{p()}),{toLists:_,...g(e),...g(r)}}});const R=t=>(I("data-v-7ab90192"),t=t(),J(),t),U={class:"center_column col-xs-12 col-sm-12"},A={class:"uc-box uc-main-box"},T={class:"uc-content-box"},j={class:"box-hd"},G={class:"title"},K={class:"more clearfix"},M={class:"filter-list J_addrType"},W={class:"box-bd"},H={class:"zss-goods-list-wrap"},O={class:"zss-goods-list clearfix"},Q={class:"figure figure-img"},X={class:"title"},Y={href:"https://test.shopsuite.cn/Product/detail/item_id/419"},Z={class:"price"},x=R(()=>s("p",{class:"rank"},"0人评价",-1)),tt={class:"actions"},st={class:"sortPagiBar"},et={class:"bottom-pagination"};function ot(t,e,r,p,_,a){const f=q,c=E("router-link"),h=P,C=V;return n(),l("div",U,[s("div",A,[s("div",T,[s("div",j,[s("h1",G,i(t.$t("商品评价")),1),s("div",K,[s("ul",M,[s("li",{class:d(["first",{active:!t.order_item_evaluation_status}])},[s("a",{href:"JavaScript:void(0)",onClick:e[0]||(e[0]=()=>{t.order_item_evaluation_status=0,t.toLists()})},i(t.$t("待评价商品（"))+i(t.no)+"）",1)],2),s("li",{class:d({active:t.order_item_evaluation_status==1})},[s("a",{href:"JavaScript:void(0)",onClick:e[1]||(e[1]=()=>{t.order_item_evaluation_status=1,t.toLists()})},i(t.$t("已评价商品（"))+i(t.yes)+"）",1)],2),s("li",{class:d({active:t.order_item_evaluation_status==2})},[s("a",{href:"JavaScript:void(0)",onClick:e[2]||(e[2]=()=>{t.order_item_evaluation_status=2,t.toLists()})},i(t.$t("评价失效商品")),1)],2)])])]),s("div",W,[s("div",H,[s("ul",O,[(n(!0),l(k,null,L(t.commentLists,(o,F)=>(n(),l("li",{class:"zss-goods-item col-xs-6 col-sm-6 col-md-4",key:F},[s("div",Q,[u(c,{to:{path:"/product/detail",query:{item_id:o.item_id}},target:"_blank"},{default:m(()=>[u(f,{src:o.order_item_image},null,8,["src"])]),_:2},1032,["to"])]),s("h3",X,[s("a",Y,i(o.item_name),1)]),s("p",Z,"￥"+i(o.item_unit_price),1),x,s("div",tt,[u(c,{to:{path:"/User/Comment/manage",query:{item_id:o.item_id,order_id:o.order_id,product_id:o.product_id}}},{default:m(()=>[u(h,{type:"danger"},{default:m(()=>[$(i(t.$t("去评价")),1)]),_:1})]),_:2},1032,["to"])])]))),128))])])])])]),s("div",st,[s("div",et,[s("nav",null,[(n(),S(C,{currentPage:t.page,"onUpdate:currentPage":e[3]||(e[3]=o=>t.page=o),"page-size":t.size,"onUpdate:pageSize":e[4]||(e[4]=o=>t.size=o),"page-sizes":[10,20,30,40],small:!1,disabled:!1,background:!0,layout:"prev,pager,next,total,jumper",total:t.total,key:t.page,onSizeChange:e[5]||(e[5]=o=>{t.size=o,t.toLists()}),onCurrentChange:e[6]||(e[6]=o=>{t.page=o,t.toLists()})},null,8,["currentPage","page-size","total"]))])])])])}const Bt=D(N,[["render",ot],["__scopeId","data-v-7ab90192"]]);export{Bt as default};
