import{P as D,u as $,f as I,g,h as S,dK as N,dT as z,t as A,n as v,p as u,v as d,y as o,z as s,x as t,A as a,D as c,F as V,C as L,V as M,W as R}from"./index-21964c78.js";import{b as T,d as U,a as j,c as q}from"./main-34db54b3.js";import{E as H}from"./link-8dfac441.js";/* empty css               */import{E as J,a as K,b as P}from"./dropdown-item-212eb578.js";import"./popper-251c4401.js";import"./scrollbar-c1d26490.js";import{_ as W}from"./_plugin-vue_export-helper-c27b6911.js";import"./castArray-18b00898.js";import"./refs-1278d799.js";import"./isUndefined-aa0326a0.js";const G=D({setup(){const e=$();let r=I({userRow:{},hasLogin:!1,config_key:"",configInfo:[],footerNav:[],info:{}});const{getUserInfo:_,resetAll:p,logout:h}=g();S(async()=>{console.log("*******onBeforeMount******");try{await _().then(()=>{console.info(2222)})}catch(i){console.error("错误拦截:",i),await p()}});const f=g();let l=()=>{h(),e.push({path:"/index"})};return N({config_key:r.config_key}).then(i=>{i.status==200&&(r.configInfo=i.data)}),z({}).then(i=>{i.status==200&&(r.footerNav=i.data.shopBaseSiteNav)}),{counter:f,logouts:l,...A(r)}}});const n=e=>(M("data-v-101259e8"),e=e(),R(),e),O={class:"page-body boxed-container skin-ss user-info-navbar-skin-ss horizontal-menu-skin-ss",style:{background:`url(https://test.shopsuite.cn/account/static/src/default/images/main-background.jpg)\r
        no-repeat center fixed`}},Q={class:"navbar horizontal-menu"},X={class:"navbar-inner"},Y={class:"navbar-brand",style:{"padding-left":"0"}},Z=["src"],tt=["src"],et=n(()=>t("div",{class:"nav navbar-mobile"},[t("div",{class:"mobile-menu-toggle"},[t("a",{href:"#","data-toggle":"settings-pane","data-animate":"true"},[t("i",{class:"linecons-cog"})]),t("a",{href:"#","data-toggle":"user-info-menu-horizontal"},[t("i",{class:"fa-bell-o"}),t("span",{class:"badge badge-success"},"7")]),t("a",{href:"#","data-toggle":"mobile-menu-horizontal"},[t("i",{class:"fa-bars"})])])],-1)),ot=n(()=>t("div",{class:"navbar-mobile-clear"},null,-1)),st={class:"navbar-nav"},nt={class:"opened has-sub"},at=n(()=>t("i",{class:"icon-pingtai1"},null,-1)),lt={class:"title"},it=n(()=>t("i",{class:"icon-usercenter"},null,-1)),ct={class:"title"},rt=n(()=>t("i",{class:"icon-zhifu"},null,-1)),ut={class:"title"},dt=n(()=>t("i",{class:"icon-pengyouquan"},null,-1)),_t={class:"title"},pt={class:"nav nav-userinfo navbar-right"},ht={class:"search-form hide"},ft={method:"get",action:"https://test.shopsuite.cn/account.php/sns/Story/lists"},mt=n(()=>t("input",{type:"hidden",name:"mdu",value:"sns"},null,-1)),gt=n(()=>t("input",{type:"hidden",name:"ctl",value:"Story"},null,-1)),vt=n(()=>t("input",{type:"hidden",name:"met",value:"lists"},null,-1)),bt=["placeholder"],yt=n(()=>t("button",{type:"submit",class:"btn btn-link"},[t("i",{class:"fa-search"})],-1)),kt={class:"dropdown xs-left"},wt=n(()=>t("i",{class:"fa-envelope-o",style:{"margin-top":"35px"}},null,-1)),Et={class:"dropdown user-profile",style:{padding:"0 20px"}},Ft={class:"el-dropdown-link"},xt=n(()=>t("i",{class:"fa-angle-down"},null,-1)),Ct={id:"footer-menu-box"},Bt={class:"col-sm-12"},Dt={class:"footer-menu-list"},$t={class:"text-center",style:{"line-height":"25px"}},It=n(()=>t("br",null,null,-1)),St={href:"https://beian.miit.gov.cn",target:"_blank"};function Nt(e,r,_,p,h,f){const l=v("router-link"),i=J,b=K,y=P,k=U,w=v("router-view"),E=j,F=H,x=q,C=T;return u(),d("div",O,[o(C,null,{default:s(()=>[o(k,null,{default:s(()=>[t("nav",Q,[t("div",X,[t("div",Y,[o(l,{to:{path:"/index"},class:"logo"},{default:s(()=>[t("img",{src:e.counter.info.logo_code,width:"80",alt:"",class:"hidden-xs"},null,8,Z),t("img",{src:e.counter.info.logo_code,width:"80",alt:"",class:"visible-xs"},null,8,tt)]),_:1})]),et,ot,t("ul",st,[t("li",nt,[o(l,{to:{path:"/Index"}},{default:s(()=>[at,t("span",lt,a(e.$t("商城首页")),1)]),_:1})]),t("li",null,[o(l,{to:{path:"/member/user/account"}},{default:s(()=>[it,t("span",ct,a(e.$t("用户中心")),1)]),_:1})]),t("li",null,[o(l,{to:{path:"/member/pay/index"}},{default:s(()=>[rt,t("span",ut,a(e.$t("支付中心")),1)]),_:1})]),t("li",null,[o(l,{to:{path:"/sns/story/lists"}},{default:s(()=>[dt,t("span",_t,a(e.$t("社交资讯")),1)]),_:1})])]),t("ul",pt,[t("li",ht,[t("form",ft,[mt,gt,vt,t("input",{type:"text",name:"story_index",class:"form-control search-field",placeholder:e.$t("请输入搜索内容")},null,8,bt),yt])]),t("li",kt,[o(l,{to:{path:"/member/user/message"},class:"notification-icon J_msg_menu"},{default:s(()=>[wt]),_:1})]),t("li",Et,[o(y,{trigger:"click",style:{margin:"35px auto"}},{dropdown:s(()=>[o(b,null,{default:s(()=>[o(i,{class:"clearfix"},{default:s(()=>[o(l,{to:{path:"/member/user/account"}},{default:s(()=>[c(a(e.$t("账号设置")),1)]),_:1})]),_:1}),o(i,{class:"clearfix",onClick:e.logouts},{default:s(()=>[c(a(e.$t("退出")),1)]),_:1},8,["onClick"])]),_:1})]),default:s(()=>[t("span",Ft,[c(a(e.counter.userInfo.user_nickname)+" ",1),xt])]),_:1})])])])])]),_:1}),o(E,null,{default:s(()=>[o(w)]),_:1}),o(x,{height:"300px"},{default:s(()=>[t("div",Ct,[t("div",Bt,[t("ul",Dt,[t("li",null,[o(l,{to:{path:"/index"}},{default:s(()=>[c(a(e.info.name),1)]),_:1})]),(u(!0),d(V,null,L(e.footerNav,(m,B)=>(u(),d("li",{key:B},[o(F,{href:m.nav_url},{default:s(()=>[c(a(m.nav_title),1)]),_:2},1032,["href"])]))),128))])]),t("p",$t,[c(a(e.counter.info.statistics_code)+a(e.counter.info.copyright)+" ",1),It,t("a",St,a(e.counter.info.icp_number),1)])])]),_:1})]),_:1})])}const Jt=W(G,[["render",Nt],["__scopeId","data-v-101259e8"]]);export{Jt as default};
