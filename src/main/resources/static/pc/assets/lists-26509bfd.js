import{ag as h,_ as w,f as L,i as N,t as T,a1 as F,T as m,$ as _,ax as I,ay as U,n as y,p as a,v as p,x as W,y as o,z as l,F as z,C as M,K as R,D as c,A as r,I as b,E as J,J as K}from"./index-21964c78.js";import{E as S}from"./overlay-b290a267.js";import{_ as j}from"./Edit-5d7d57c0.js";import{E as q}from"./empty-dc50944b.js";import{E as x}from"./row-d248ec80.js";/* empty css             */import{E as G}from"./col-d6038888.js";/* empty css               */import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";import"./refs-1278d799.js";import"./isUndefined-aa0326a0.js";import"./form-item-8d3c5b0e.js";import"./castArray-18b00898.js";import"./_baseClone-42b68cca.js";import"./_Uint8Array-4a48d71f.js";import"./_initCloneObject-dc96d043.js";import"./cascader-panel-e311c1a6.js";import"./scrollbar-c1d26490.js";import"./checkbox-85319853.js";import"./isEqual-3f4e7b62.js";import"./hasIn-54cf4aec.js";import"./flatten-3a6a3668.js";import"./radio-30ecb740.js";import"./rand-14326ce1.js";import"./strings-b80b2625.js";import"./arrays-e667dc24.js";import"./cloneDeep-9c8ed640.js";import"./popper-251c4401.js";import"./tag-b8b29d1f.js";import"./index-a2bc563c.js";import"./debounce-6ea0a711.js";/* empty css              */import"./select-ed2293fb.js";import"./_baseIteratee-8f2ec951.js";import"./constants-2604e35b.js";const O={name:"addressLists",components:{Edit:h,Delete:w},setup(){let e=L({addressLists:[],dialogVisible:!1,dialogTop:"10vh",isdata:!1,loading:!0,ud_id:0});const n=s=>{e.ud_id=s,e.dialogVisible=!0,console.log(999)};let u=()=>{F({}).then(s=>{s.status==200?(e.addressLists=s.data.items,e.isdata=!0):m.error(_("获取数据失败")),e.loading=!1})},d=s=>{e.dialogVisible=!1,u()},f=s=>{I({ud_id:s,ud_is_default:1}).then(i=>{i.status==200?(m.success(_(i.msg)),u()):m.error(_(i.msg)),e.loading=!1})},g=s=>{U({ud_id:s}).then(i=>{i.status==200?(m(_("删除成功")),u()):m.error(_("删除地址失败")),e.dialogVisible=!1})};return N(()=>{u()}),{...T(e),openWindow:n,update:d,removeAress:g,defaultAddress:f}}};const P={style:{"margin-top":"35px"}},Q={class:"btn-box"},X={key:0},Y={key:0,style:{color:"red"}},Z=["onClick"],ee={key:1};function te(e,n,u,d,f,g){const s=R,i=G,k=y("Edit"),E=K,V=y("Delete"),A=x,C=q,D=j,B=S;return a(),p("div",P,[W("div",Q,[o(s,{class:"operate-btn",size:"small",onClick:n[0]||(n[0]=t=>d.openWindow(0))},{default:l(()=>[c(r(e.$t("+添加收货地址")),1)]),_:1})]),e.addressLists.length?(a(),p("div",X,[(a(!0),p(z,null,M(e.addressLists,(t,$)=>(a(),b(A,{key:$,class:"address-container"},{default:l(()=>[o(i,{span:2},{default:l(()=>[c(r(t.ud_name),1)]),_:2},1024),o(i,{span:10},{default:l(()=>[c(r(t.district_info)+" "+r(t.ud_address),1)]),_:2},1024),o(i,{span:4},{default:l(()=>[c(r(t.ud_mobile),1)]),_:2},1024),o(i,{span:5},{default:l(()=>[t.ud_is_default==1?(a(),p("span",Y,r(e.$t("默认地址")),1)):(a(),p("span",{key:1,onClick:v=>d.defaultAddress(t.ud_id),style:{cursor:"pointer"}},r(e.$t("设为默认地址")),9,Z))]),_:2},1024),o(i,{span:3,style:{"text-align":"center"}},{default:l(()=>[o(E,{class:"edit-icon",onClick:v=>d.openWindow(t.ud_id)},{default:l(()=>[o(k)]),_:2},1032,["onClick"]),o(E,{class:"delete-icon",onClick:v=>d.removeAress(t.ud_id)},{default:l(()=>[o(V)]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128))])):(a(),p("div",ee,[o(C,{description:e.$t("暂无收货地址")},null,8,["description"])])),o(B,{modelValue:e.dialogVisible,"onUpdate:modelValue":n[2]||(n[2]=t=>e.dialogVisible=t),width:"700px",top:e.dialogTop,draggable:""},{default:l(()=>[e.dialogVisible?(a(),b(D,{key:0,onUpdate:d.update,uid:e.ud_id,onCancel:n[1]||(n[1]=t=>e.dialogVisible=!1)},null,8,["onUpdate","uid"])):J("",!0)]),_:1},8,["modelValue","top"])])}const ze=H(O,[["render",te],["__scopeId","data-v-888b0560"]]);export{ze as default};