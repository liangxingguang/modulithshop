import{_ as m}from"./Index-a993ead5.js";import{M as a,N as s,Q as n,e as u,f,i as c,t as _,p as d,I as l,E as g}from"./index-78223f15.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import"./overlay-46bc55b6.js";import"./refs-eab7d2f3.js";import"./isUndefined-aa0326a0.js";import"./Quick-61bf039b.js";import"./loading-9148d0db.js";/* empty css               */import"./input-number-dfa567a5.js";import"./index-799b1788.js";/* empty css              */import"./cascader-panel-78ede08c.js";import"./scrollbar-afb507b1.js";import"./checkbox-9b81128d.js";import"./isEqual-528f6bc1.js";import"./_Uint8Array-e95ddee1.js";import"./hasIn-61fe7d07.js";import"./flatten-011cba25.js";import"./radio-4fcd33f8.js";import"./rand-14326ce1.js";import"./strings-4bc551b5.js";import"./arrays-e667dc24.js";import"./cloneDeep-2e723db0.js";import"./_baseClone-95bc8770.js";import"./_initCloneObject-cfd68362.js";import"./popper-7ac694e5.js";import"./tag-c15f0a42.js";import"./index-b0526b91.js";import"./debounce-429b1daa.js";import"./main-0e4d3339.js";import"./row-4e1462a5.js";import"./constants-2604e35b.js";import"./col-4143b604.js";import"./Index-0c6f1015.js";import"./image-viewer-32b8c113.js";import"./product-c7ef5285.js";import"./index-97ee7e1c.js";import"./card-52925567.js";import"./tab-pane-b4182186.js";import"./index-089c6298.js";import"./carousel-item-92cdd9f7.js";import"./link-b90f23b3.js";async function y(t){return a({url:s.URL.page_index,method:"get",params:t})}const $=n({setup(){const t=u();let o=f({floor:{},status:!1,page_id:t.query.page_id});const i=()=>{y({page_id:o.page_id}).then(r=>{if(r.status==200){let p=r.data;p.floor&&(o.floor=p.floor,o.status=!0)}})};return c(()=>{i()}),{..._(o)}}});function h(t,o,i,r,p,k){const e=m;return t.status?(d(),l(e,{key:0,pageData:t.floor},null,8,["pageData"])):g("",!0)}const ft=x($,[["render",h]]);export{ft as default};