import{_ as U}from"./index-076df689.js";import{a5 as L,s as q,ai as M,a0 as x,b as N,dW as z,e as T,u as W,g as H,f as y,r as P,$ as g,a9 as j,o as G,t as A,U as F,n as B,p as d,v as h,x as t,y as s,z as l,A as o,D as p,E as w,I as J,F as b,C as K,J as X,W as O,X as Q,L as Y,K as Z}from"./index-78223f15.js";import{a as ee,E as te}from"./form-item-8b9adddb.js";/* empty css               *//* empty css              */import{_ as oe}from"./Img-372f434f.js";import{E as se}from"./rate-332fd2dd.js";import{E as ie}from"./link-b90f23b3.js";/* empty css             */import{S as ne}from"./index-97ee7e1c.js";import{a as le,d as ae}from"./article-7585aa04.js";import{_ as re}from"./addr-5e1cd51c.js";import{_ as ce}from"./_plugin-vue_export-helper-c27b6911.js";import"./castArray-c12d26ef.js";import"./_baseClone-95bc8770.js";import"./_Uint8Array-e95ddee1.js";import"./_initCloneObject-cfd68362.js";import"./overlay-46bc55b6.js";import"./refs-eab7d2f3.js";import"./isUndefined-aa0326a0.js";import"./progress-bb109638.js";import"./cloneDeep-2e723db0.js";import"./isEqual-528f6bc1.js";import"./index-f7dfb3b1.js";const _e={name:"pressCenter",components:{Plus:L,Search:q,Edit:M,Delete:x,ArrowRight:N,WindPower:z},setup(){const e=T();W();const r=H();let a=y({articleInfo:{},article_id:0,total:0,commentUsers:[{user_avatar:"",user_nickname:"",comment_is_top:1,commValue:5,comment_content:"",commImages:[],comment_time:""}]});const n=P();let f=y({article_id:e.query.article_id||0,comment_id:0,user_id_to:0,comment_reply_id:0,comment_content:"",comment_scores:0,comment_image:[]});const k=y({comment_content:[{required:!0,message:g("请输入最少8个字的评价"),trigger:"blur"},{min:8,message:g("请输入最少8个字的评价"),trigger:"blur"}]});let c=y({article_id:0,page:1,size:10,sidx:"comment_is_top",sord:"DESC"});const u=()=>{c.article_id=a.article_id,le(c).then(i=>{let _=i.data;i.status==200?(a.articleInfo=_,a.commentUsers=_.comment.items,a.total=_.comment.records):F.error(g("获取数据失败")),a.loading=!1})},v=()=>{if(console.log(f),!f.comment_scores){F.error(g("请选择文章星级!"));return}ae(f).then(i=>{i.status==200?(F.success(g("添加评论成功")),n.value.resetFields(),u()):F.error(i.msg)})},E=async i=>{i&&await i.validate((_,I)=>{_?(console.log("submit!"),v()):console.log("error submit!",I)})},C=i=>{f.comment_image=i};return j(async()=>{a.article_id=e.query.article_id,u()}),G((i,_)=>{a.article_id=i.query.article_id,u()}),{StateCode:ne,...A(c),...A(a),getArticle:u,submitForm:E,imgChang:C,counter:r,ruleForm:f,ruleFormRef:n,rules:k}}};const D=e=>(O("data-v-88168a28"),e=e(),Q(),e),me={id:"page-container"},ue={class:"container"},de={class:"breadcrumb clearfix"},pe=D(()=>t("img",{src:re,style:{width:"20px",height:"20px",position:"relative","margin-right":"10px"}},null,-1)),fe={class:"space-icon"},he={class:"space-icon"},ge={class:"home cur"},ve={class:"ex-pc-whole"},ye={class:"ex-pc-content"},Fe={class:"ex-pc-left"},Ee={class:"pc-left-content"},Ce={class:"pc-left-title sc-medium"},Ie={class:"pc-left-tag"},ke={key:0},Ae={key:1},Be={class:"article_content"},we=["innerHTML"],be={style:{width:"747px"}},De={class:"left-synthesis-title"},Re={key:0,class:"no-login-box"},Ve={style:{display:"flex","align-items":"center"}},$e={class:"synthesis-grade-fon"},Se={class:"left-synthesis-foot"},Ue={style:{display:"flex","flex-direction":"row-reverse"}},Le={class:"sc-medium"},qe={class:"synthesis-foot-notice"},Me={class:"ex-pc-right"},xe={class:"pc-right-title"},Ne=D(()=>t("div",{class:"pc-right-xian"},null,-1)),ze={class:"sc-medium"},Te={class:"right-li-sty"},We={class:"right-li-title"},He={class:"right-li-time"};function Pe(e,r,a,n,f,k){const c=B("router-link"),u=B("ArrowRight"),v=X,E=ie,C=se,i=te,_=oe,I=Y,R=Z,V=ee,$=U;return d(),h(b,null,[t("div",me,[t("div",ue,[t("div",de,[pe,s(c,{to:"/index",class:"home",title:e.$t("返回首页")},{default:l(()=>[p(o(e.$t("首页")),1)]),_:1},8,["title"]),t("span",fe,[s(v,null,{default:l(()=>[s(u)]),_:1})]),s(c,{to:"/article/lists",class:"home",title:e.$t("文章列表")},{default:l(()=>[p(o(e.$t("文章列表")),1)]),_:1},8,["title"]),t("span",he,[s(v,null,{default:l(()=>[s(u)]),_:1})]),t("span",ge,o(e.articleInfo.article_title),1)])]),t("div",ve,[t("div",ye,[t("div",Fe,[t("div",Ee,[t("div",Ce,o(e.articleInfo.article_title),1),t("div",Ie,[t("span",null,o(e.articleInfo.article_add_time)+"   ",1),e.articleInfo.article_is_original?(d(),h("span",ke,[p(o(e.$t("来源: "))+" ",1),s(E,{href:e.articleInfo.article_url,target:"_blank",type:"primary",style:{"font-size":"16px"}},{default:l(()=>[p(o(e.articleInfo.article_source),1)]),_:1},8,["href"]),p("   ")])):w("",!0),e.articleInfo.user_nickname?(d(),h("span",Ae,o(e.$t("编写: "))+o(e.articleInfo.user_nickname),1)):w("",!0)]),t("div",Be,[t("p",{innerHTML:e.articleInfo.article_content},null,8,we)])]),t("div",be,[t("div",De,o(e.$t("综合评分")),1),n.counter.hasLogin?(d(),J(V,{key:1,class:"form-inline",ref:"ruleFormRef",rules:n.rules,model:n.ruleForm},{default:l(()=>[s(i,{label:"",prop:"comment_scores"},{default:l(()=>[t("div",Ve,[s(C,{style:{position:"relative",top:"1px"},modelValue:n.ruleForm.comment_scores,"onUpdate:modelValue":r[0]||(r[0]=m=>n.ruleForm.comment_scores=m)},null,8,["modelValue"]),t("div",$e,o(n.ruleForm.comment_scores)+o(e.$t("分")),1)])]),_:1}),t("div",Se,[s(i,{label:"",prop:"comment_image"},{default:l(()=>[s(_,{limit:4,onChange:n.imgChang},null,8,["onChange"])]),_:1}),s(i,{label:"",prop:"comment_content",class:"comment_content"},{default:l(()=>[s(I,{class:"comment_area",modelValue:n.ruleForm.comment_content,"onUpdate:modelValue":r[1]||(r[1]=m=>n.ruleForm.comment_content=m),rows:3,type:"textarea",placeholder:e.$t("请输入最少8个字的评价")},null,8,["modelValue","placeholder"])]),_:1}),t("div",Ue,[s(R,{class:"synthesis-foot-btn",onClick:r[2]||(r[2]=m=>n.submitForm(n.ruleFormRef))},{default:l(()=>[t("span",Le,o(e.$t("提交")),1)]),_:1}),t("div",qe,o(e.$t("注: 恶意评论或重复提交相同内容者将直接删除账号")),1)])])]),_:1},8,["rules","model"])):(d(),h("div",Re,[s(c,{to:"/login/login",class:"js-login"},{default:l(()=>[p(o(e.$t("登录")),1)]),_:1}),p(o(e.$t("后参与评论")),1)]))])]),t("div",Me,[t("div",xe,[Ne,t("span",ze,o(e.$t("相关推荐")),1)]),t("div",null,[t("ul",null,[(d(!0),h(b,null,K(e.articleInfo.popular_articles,(m,S)=>(d(),h("li",{key:S},[s(c,{to:{path:"/article/detail",query:{article_id:m.article_id}}},{default:l(()=>[t("div",Te,[t("div",We,o(m.article_title),1),t("div",He,"("+o(m.article_add_time)+")",1)])]),_:2},1032,["to"])]))),128))])])])])])]),s($,{keywords:e.articleInfo.article_seo_keywords,description:e.articleInfo.article_seo_description,title:e.articleInfo.article_title},null,8,["keywords","description","title"])],64)}const ft=ce(_e,[["render",Pe],["__scopeId","data-v-88168a28"]]);export{ft as default};