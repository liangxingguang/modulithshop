import{P as p,f,am as b,n as u,p as a,v as i,x as s,A as t,y as r,z as h,D as c,aR as l,E as m,V as y,W as g}from"./index-21964c78.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";const o=d=>(y("data-v-de8ecc22"),d=d(),g(),d),k={class:"n-frame"},$={class:"device-detail-area"},w={id:"changePassword",class:"click-row"},C={class:"font-img-item clearfix"},M=o(()=>s("em",{class:"fi-ico fa fa-cog"},null,-1)),I={class:"title-normal dis-inb"},S={class:"font-default"},V=o(()=>s("i",{class:"arrow_r"},null,-1)),N={class:"ada-btn-area"},B={id:"changePassword",class:"click-row"},E={class:"font-img-item clearfix"},P=o(()=>s("em",{class:"fi-ico fa fa-lock"},null,-1)),j={class:"title-normal dis-inb"},x={class:"font-default"},D=o(()=>s("i",{class:"arrow_r"},null,-1)),U={class:"ada-btn-area"},z={id:"changeEmail",class:"click-row hide"},A={class:"font-img-item clearfix"},R=o(()=>s("em",{class:"fi-ico fa fa-envelope-o"},null,-1)),T={class:"title-normal dis-inb"},W={id:"email_span_unbind",style:{display:"inline-block"}},q=o(()=>s("span",{class:"warning-tip"}," ",-1)),F={class:"color-active"},G={class:"font-default email-check",id:"email_bind",style:{display:"none"}},H={class:"font-default color-active",id:"email_unbind",style:{display:"block"}},J=o(()=>s("i",{class:"arrow_r"},null,-1)),K={class:"ada-btn-area"},L={id:"changeMobile",class:"click-row"},O={class:"font-img-item clearfix"},Q=o(()=>s("em",{class:"fi-ico fa fa-mobile"},null,-1)),X={class:"title-normal dis-inb"},Y={key:0},Z={key:1,id:"mobile_span_unbind"},ss=o(()=>s("span",{class:"warning-tip"}," ",-1)),es={class:"color-active"},ts={key:0,class:"font-default mobile-check",id:"mobile_bind",style:{display:"block"}},os={key:1,class:"font-default color-active",id:"mobile_unbind"},as=o(()=>s("i",{class:"arrow_r"},null,-1)),is={class:"ada-btn-area mobile-check"},ns={class:"hide n-btn btnChangeMobile fancybox",id:"mobile-manage","data-fancybox":"","data-type":"ajax","data-src":"https://test.shopsuite.cn/account.php/User_Security/manageMobile/_pjax/1"},cs={key:0},ls={key:1},ds=p({__name:"index",setup(d){const n=f({info:{}});return b().then(e=>{n.info=e.data}),(e,_s)=>{const _=u("router-link");return a(),i("div",k,[s("ul",$,[s("li",w,[s("div",C,[M,s("p",I,t(e.$t("实名认证")),1),s("p",S,t(e.$t("用于提升账号的安全性和信任级别。认证后的账号不能修改认证信息。")),1),V]),s("div",N,[r(_,{class:"n-btn",to:{path:"/member/security/certification"}},{default:h(()=>[c(t(e.$t("查看")),1)]),_:1})])]),s("li",B,[s("div",E,[P,s("p",j,t(e.$t("帐号密码")),1),s("p",x,t(e.$t("用于保护帐号信息和登录安全")),1),D]),s("div",U,[r(_,{class:"n-btn btnChangeMobile",id:"passwd-manage",to:{path:"/member/security/password"}},{default:h(()=>[c(t(e.$t("修改")),1)]),_:1})])]),s("li",z,[s("div",A,[R,s("p",T,[c(t(e.$t("安全邮箱"))+" ",1),s("span",W,[q,s("span",F,t(e.$t("未绑定")),1)])]),s("p",G,t(e.$t("安全邮箱可以用于登录帐号，重置密码或其他安全验证")),1),s("p",H,t(e.$t("安全邮箱将可用于登录帐号和重置密码，建议立即设置")),1),J]),s("div",K,[r(_,{class:"n-btn btnChangeMobile fancybox",id:"email-manage",to:{path:"/member/security/email"}},{default:h(()=>[c(t(e.$t("绑定")),1)]),_:1})])]),s("li",L,[s("div",O,[Q,s("p",X,[c(t(e.$t("安全手机"))+" ",1),l(n).info.user_mobile?(a(),i("span",Y,t(l(n).info.user_mobile),1)):m("",!0),l(n).info.user_mobile?m("",!0):(a(),i("span",Z,[ss,s("span",es,t(e.$t("绑定")),1)]))]),l(n).info.user_mobile?(a(),i("p",ts,t(e.$t("安全手机可以用于登录帐号，重置密码或其他安全验证")),1)):(a(),i("p",os,t(e.$t("安全手机将可用于登录帐号和重置密码，建议立即设置")),1)),as]),s("div",is,[s("a",ns,t(e.$t("修改")),1),r(_,{class:"n-btn btnChangeMobile fancybox",id:"email-manage",to:{path:"/member/security/phone"}},{default:h(()=>[l(n).info.user_mobile?(a(),i("span",ls,t(e.$t("修改")),1)):(a(),i("span",cs,t(e.$t("绑定")),1))]),_:1})])])])])}}});const ms=v(ds,[["__scopeId","data-v-de8ecc22"]]);export{ms as default};