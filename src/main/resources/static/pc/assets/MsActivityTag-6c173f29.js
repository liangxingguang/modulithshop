import{u as o,f as n,t as s,p as i,v as g,x as f,A as p}from"./index-78223f15.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";const c={props:{typeId:{type:[String,Number],default:0}},setup(a){let e=a.typeId;o();let t=n({tagNameMap:{1101:"加价购",1102:"满赠",1103:"限时折扣",1104:"优惠套装",1105:"优惠券",1106:"拼团",1107:"满减",1140:"折上折",1131:"市场活动",1132:"组合套餐",1121:"幸运大抽奖",1122:"秒杀",1123:"拼团",1124:"砍价",1125:"一元购",1135:"单件折",1133:"多件折"},tagList:{1101:"tag-info",1102:"tag-info",1103:"tag-info",1104:"tag-info",1105:"tag-info",1106:"tag-info",1107:"tag-info",1140:"tag-info",1131:"tag-info",1132:"tag-info",1121:"tag-info",1122:"tag-info",1123:"tag-info",1124:"tag-info",1125:"tag-info",1135:"tag-info",1133:"tag-info"}});return console.log(t.tagNameMap[e]),{...s(t)}}};const r={class:"type-name-box"},d=["type"];function l(a,e,t,u,y,m){return i(),g("view",r,[f("text",{class:"tag tag-orange",type:a.tagList[t.typeId]},p(a.tagNameMap[t.typeId]),9,d)])}const x=_(c,[["render",l],["__scopeId","data-v-32acf7ab"]]);export{x as _};