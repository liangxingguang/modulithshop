import{b3 as q,r as E,b4 as te,i as M,aY as oe,b5 as se,P as Q,aL as ae,a7 as ne,p as l,I as F,z as r,aR as k,v as p,H as le,G as $,aT as ie,b6 as re,y as c,J as j,b7 as ce,E as V,al as ue,aU as _e,a_ as de,b8 as pe,u as J,g as T,e as K,o as Y,f as C,N as ge,w as W,t as X,a6 as me,x as t,F as b,C as I,A as u,D as A,b9 as fe,ba as O,l as he,s as ve,c as Ae,q as be,$ as ke,h as ye,j as we,k as Se,bb as Ce,n as D}from"./index-21964c78.js";import{E as G}from"./link-8dfac441.js";import{a as Ie}from"./index-7c4df64c.js";import{V as Z}from"./vue-qr-74c08ca5.js";import{_ as z}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as Ee}from"./index-540d85c2.js";import{E as Be}from"./image-viewer-dd6920ac.js";import{E as Ne}from"./overlay-b290a267.js";/* empty css             */import{E as Le,a as Fe,b as Ve}from"./sub-menu-77e2fda5.js";/* empty css                */import"./popper-251c4401.js";const $e={visibilityHeight:{type:Number,default:200},target:{type:String,default:""},right:{type:Number,default:40},bottom:{type:Number,default:40}},Te={click:e=>e instanceof MouseEvent},Ue=(e,n,s)=>{const o=q(),f=q(),v=E(!1),_=()=>{o.value&&(v.value=o.value.scrollTop>=e.visibilityHeight)},h=a=>{var g;(g=o.value)==null||g.scrollTo({top:0,behavior:"smooth"}),n("click",a)},d=se(_,300,!0);return te(f,"scroll",d),M(()=>{var a;f.value=document,o.value=document.documentElement,e.target&&(o.value=(a=document.querySelector(e.target))!=null?a:void 0,o.value||oe(s,`target does not exist: ${e.target}`),f.value=o.value),_()}),{visible:v,handleClick:h}},ee="ElBacktop",Pe=Q({name:ee}),Re=Q({...Pe,props:$e,emits:Te,setup(e,{emit:n}){const s=e,o=ae("backtop"),{handleClick:f,visible:v}=Ue(s,n,ee),_=ne(()=>({right:`${s.right}px`,bottom:`${s.bottom}px`}));return(h,d)=>(l(),F(ue,{name:`${k(o).namespace.value}-fade-in`},{default:r(()=>[k(v)?(l(),p("div",{key:0,style:le(k(_)),class:$(k(o).b()),onClick:d[0]||(d[0]=ie((...a)=>k(f)&&k(f)(...a),["stop"]))},[re(h.$slots,"default",{},()=>[c(k(j),{class:$(k(o).e("icon"))},{default:r(()=>[c(k(ce))]),_:1},8,["class"])])],6)):V("v-if",!0)]),_:3},8,["name"]))}});var xe=_e(Re,[["__file","/home/runner/work/element-plus/element-plus/packages/components/backtop/src/backtop.vue"]]);const De=de(xe);const Me={nam:"footer",components:{PhoneFilled:pe,VueQr:Z},setup(){const e=J();E("1");const n=T(),{goUrl:s}=T(),o=K();let f=E("");f.value=o.name,Y((a,g)=>{f.value=a.name});let v=C({footerLink:[],footerNav:[],appSrc:ge.fileBasePath+"/h5"});W(()=>{const a=n.getIndexLayout;a.footer_article&&(v.footerNav=a.footer_article)});let _=()=>{const a=n.getIndexLayout;a.footer_article&&(v.footerNav=a.footer_article)},h=a=>{s(a,e)};const d=()=>{if(!n.hasLogin){me.confirm($t("请先登录"),{confirmButtonText:$t("确定"),cancelButtonText:$t("取消"),dangerouslyUseHTMLString:!0,center:!0}).then(()=>{e.push({path:"/login/login"})});return}Ie(10001)};return M(()=>{_()}),{counter:n,imChat:d,gotoUrl:h,...X(v)}}},Qe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAXNSR0IArs4c6QAAAqNJREFUSEu9lt+LVVUUxz+fc7GHEqMk05B06mV86aHJQNMIDMUMigjKkKj+A6WHBH2ISER6FyWKqIfCB0EICjJScKAigoLox0M/QCowzRJ8iHO+sc/cme69zjjduY7rcZ2z12evvdb+ri3zWBKBrTTNdnQzcAewHPgT+JVkkqr6EHhf/edq4UqgOS3JTpL9wJ3AB+gnwE/AeeDm1t80D6Lbgb/Rg8ARtZkt6KywJLeQvA5sQw8Ah9ULc+0qyY3A8yQvA1+ju9Szg/9fAUuynOQkIPq4+uN8Rz39PckKkveAMfQhtZzCjPXBktxAcqY9It2s/v5/QT3ApSQfASvQe9VS29b6YXV9CN2JblJ/HhbUA7yV5DTJV3Y6z1wBS3I3yXfow041wkiWZJyk1G+Lerovs9T1UXS1VfXISJSexanrI92YO2ZgSTok59AX1OPXDJbcR/Ipept6vq1Zko3dxvgFuIhuVC8tFJqkNMkkUK7EXehT6jGTLCE5BWz4r0e9X/18BNh6ks961n+BbiiwfSSv9AX2msNA95umKZ1SNK/n9i0CDCYL7CKw7DrA/iqwIkdrrwPs+wI7Bjy56LDk3dIg95B8CVSL2I2X0Ynpe/YYyVvdGRV0bERtXENSyjOlvbpPfXVGiJPcBEwAtVqUfyRL8gBN8yj6ErpO/faqk3okWlGmun6znWtVNdYnxKMGHlyfZBXJDyRH7XT2LBjWfQStaasxxyRP05xoJVDH1T8WBEsyQfIOMN7Npsysp9VvprNLXR9A96LPqm9P+4eqWZtRUibD6oFjK0N3b+tLdgFPkBy005nydW1Y2O0kv81T3wvoi+obg/8NBWs33jRldKwfCPQx+lzXd069PNuGhoclK2ma19BtreokJ6iq3b2vqLky/xdo50jsuF1XpwAAAABJRU5ErkJggg==",ze=""+new URL("subscribe_code-12cc0fec.jpg",import.meta.url).href,He=""+new URL("service_code-0eb55ec9.jpg",import.meta.url).href,qe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAfCAYAAAAbW8YEAAAAAXNSR0IArs4c6QAAAoFJREFUSEvt1TlvFDEUB/D/c8F9dBQUEQUVX4D7WNuzR0IITVBqCkok6PgOIESFhPgCoQmEcGVsb0DcaGsKkBASVNuQbDaAWPkhh1m02uzuzAQtVaacsd/Pz89+Q1rrm8x8AYDA8B9PRLdIa/2BmfcP3/sjENHHgI5474tENPRMmdkLIebpf2XY6awLnZyc3FSv10cajcbnWq32K+/Cc6Na62PMPA1gL4CvRDRljHmeB86FRlF00nv/AMD2DqTJzKPOuWdZ4cyo1voUMwdwW4/gTSHEWBzHT7PAmVAppSSi+wnYBFAHsA/AJwB7ksxXAJy21lbT4FS0C1wGMArgCoAKgDkhxNWOLc8ED0SVUhrALICtAJaJqBIOjVLqYRu11o5LKU8QUXgXar3CzOPOOdcv476oUioCcC8BG0KIShzHL0KgbjR5dxxAgHcA+C6EGI/j2PaCe6JSytChArgFQIOZy865l+0AvdDwLblOj9owgDPWWtMNr0G11iVmvpuASwDK1tpXnRP7oWFMFEVHvfcB3gngRwLHfTuSUqoMIICbASwRUckY87p7pYPQMFZKeYSIHrdhZp5wzs234/zNVEpZIaKZBFz03peq1eqbXjVJQ5MaHwYQ4F0hYyI6a4x5svqn6ahF2PuQ4SIzF51zb/udvixoEvcQMwcowD8BFEKpVlGl1A0AFwF8A1C01r4bdMGzoiFGoVA4KIQI8G5mvu6cu9zOdATAeQDTxpj3aR0lD5okdYCIzrVardsLCwtfUjvSems6aOEb6MCy5q1pakdKO0T9em+WeWuaQ55JG5lm3a2NK5N2ZeYAjBHRrDFmIuu2/uvpnQJwjYguGWPu5EV/A4f2SiOADezNAAAAAElFTkSuQmCC";const je={id:"footer-main"},Je={class:"container"},Ke={class:"footer-menu-wrap"},Ye={class:"footer-menu"},We={class:"title"},Xe={class:"right-info"},Oe={class:"tel"},Ge=t("img",{src:Qe},null,-1),Ze={class:"time"},et={class:"code-wrap"},tt={class:"wx"},ot=["alt"],st={class:"name"},at={class:"wap"},nt=["alt"],lt={class:"name"},it={class:"footer-link"},rt=["href","target"],ct=t("span",{class:"link-split"},"|",-1),ut={class:"copyright"},_t={href:"https://beian.miit.gov.cn",target:"_blank"},dt=["href"],pt=t("div",{class:"footer-bar"},null,-1),gt=t("img",{src:qe,width:"20",height:"20"},null,-1);function mt(e,n,s,o,f,v){const _=G,h=De;return l(),p(b,null,[t("footer",je,[t("div",Je,[t("div",Ke,[t("ul",Ye,[(l(!0),p(b,null,I(e.footerNav,(d,a)=>(l(),p("li",{key:a},[t("div",null,[t("a",We,u(d.cat_name),1)]),t("ul",null,[(l(!0),p(b,null,I(d.items,(g,y)=>(l(),p("li",{key:y},[c(_,{class:"sub",href:"javascript:void(0)",onClick:B=>o.gotoUrl(g.link)},{default:r(()=>[A(u(g.title),1)]),_:2},1032,["onClick"])]))),128))])]))),128))])]),t("div",Xe,[t("div",Oe,[Ge,A(u(o.counter.info.site_tel),1)]),t("div",Ze,u(e.$t("周一至周日"))+"08:00-18:00",1),t("div",et,[t("div",tt,[t("img",{class:"img",src:ze,alt:e.$t("公众号")},null,8,ot),t("p",st,u(e.$t("公众号")),1)]),t("div",at,[t("img",{class:"img",src:He,alt:e.$t("服务号")},null,8,nt),t("p",lt,u(e.$t("服务号")),1)])])])]),t("div",it,[(l(!0),p(b,null,I(e.footerLink,(d,a)=>(l(),p(b,{key:a},[t("a",{class:"link-name",href:d.nav_url,target:d.nav_target_blank==1?"_blank":""},u(d.nav_title),9,rt),ct],64))),128))]),t("div",ut,[t("p",null,[A(u(o.counter.info.copyright)+" ",1),t("a",_t,u(o.counter.info.icp_number),1)]),t("p",null,[t("a",{href:"https://www.beian.gov.cn/portal/registerSystemInfo?recordcode="+o.counter.info.site_icp_num,target:"_blank"},u(o.counter.info.site_icp_number),9,dt)]),t("p",null,u(o.counter.info.site_company_name),1)]),pt]),c(h,{right:100,bottom:90,class:"go-top"},{default:r(()=>[gt]),_:1})],64)}const to=z(Me,[["render",mt]]),ft=Q({setup(){let e=C({});const n=s=>{fe(s)};return e=O(),{Lang:e,selectLange:n}}});const ht={class:"mi-dialog__wrapper site-select-regions"},vt={"aria-modal":"true",class:"mi-dialog"},At={class:"mi-dialog__body"},bt={class:"mi-dialog__inner"},kt={class:"tips"},yt={class:"links clearfix"},wt=["onClick"],St=["alt","src"];function Ct(e,n,s,o,f,v){return l(),p("div",ht,[t("div",vt,[t("div",At,[t("div",bt,[t("div",null,[t("p",kt,u(e.$t("请选择语言")),1),t("div",yt,[(l(!0),p(b,null,I(e.Lang.items,(_,h)=>(l(),p("a",{key:h,href:"javascript:void(0);",onClick:d=>e.selectLange(h)},[t("img",{style:{width:"20px",height:"14px","margin-right":"5px"},alt:_.label,src:_.img},null,8,St),A(u(_.label),1)],8,wt))),128))])])])])])])}const It=z(ft,[["render",Ct],["__scopeId","data-v-67f4a8ba"]]),Et={name:"header",components:{Location:he,Search:ve,VueQr:Z,CaretBottom:Ae,QuestionFilled:be},setup(){J();const e=E("1"),n=K();C({});let s=C({dialogVisiblePop:!1,hasLogin:!1,loading:!1,isTopImg:!0,userRow:{},cart_count:0,label:ke("商品"),searchIndex:0,keywords:"",key_type:n.query.key_type||1,path:"/product/lists",isShow:!1,headerNav:[],productCategoryNav:[],isHome:!1,default_site_row:"",dialogVisible:!1,subsite_hot_rows:[],subsite_current_row:{},citys:[],isSubsite:!1,search_hot_words:[],search_history_words:[],suggest_search_words:{},current_label:"zh-CN",current_img:"https://static.shopsuite.cn/shopsuite/flags/square/5322affbc4d56.png",routeUrl:"",customSite:[],currentSite:[],isSite:!1,current_language:"中文",loginBtnIsCheck:!1}),o=E("");o.value=n.name,Y((i,L)=>{s.routeUrl=i.path,o.value=i.name,o.value!="index"&&(s.isHome=!1)});const f=()=>{let i=C({});i=O();let L=Ce();for(let S in i.items)i.items[S].lang==L&&(s.current_label=i.items[S].label,s.current_img=i.items[S].img)},{getUserInfo:v,resetAll:_,setCustomSite:h,logout:d,setCartNum:a}=T();ye(async()=>{console.log("*******onBeforeMount******");try{await v().then(()=>{console.info(2222)})}catch(i){console.error("错误拦截:",i),await _()}});const g=T();let y=()=>{d()},B=()=>{const i=g.getIndexLayout;i.page_pc_nav.length>0&&(s.headerNav=i.page_pc_nav),i.category_nav.length>0&&(s.productCategoryNav=i.category_nav)};W(()=>{const i=g.getIndexLayout;i.page_pc_nav.length>0&&(s.headerNav=i.page_pc_nav),i.category_nav.length>0&&(s.productCategoryNav=i.category_nav),document.title=="undefined"&&(document.title=g.info.site_name),s.loginBtnIsCheck=s.routeUrl=="/login/login",s.current_language=localStorage.getItem("current_language")||"中文"});const U=()=>{s.isSubsite=!0},N=()=>{s.isSubsite=!1},P=()=>{localStorage.setItem("pop_pc_enable","1")},R=(i,L,S,H,Qt,zt)=>{H?window.location.href="//"+H:(h(i,L,S),location.reload())},x=()=>{s.isTopImg=!1,localStorage.setItem("isTopImg","1")},m=()=>{s.isSite=!0},w=()=>{s.isSite=!1};return M(()=>{s.routeUrl=n.path,f(),B(),g.info.index_pop_pc_enable&&g.info.index_pop_pc_img&&!localStorage.getItem("pop_pc_enable")&&(s.dialogVisiblePop=!0),localStorage.getItem("isTopImg")&&(s.isTopImg=!1)}),{activeIndex:e,counter:g,logouts:y,closePop:P,getHeader:we,showSubsite:U,hideSubsite:N,setSiteId:R,hideTopImg:x,showSite:m,hideSite:w,getCustomSite:Se,...X(s)}}},Bt={id:"top-wrapper"},Nt={class:"top-container"},Lt={class:"top-left"},Ft={key:0},Vt=["href"],Tt={key:1},Ut={class:"top-right"},Pt={key:0},Rt={key:1},xt={class:"top-nav"},Dt={class:"pop-pc"};function Mt(e,n,s,o,f,v){const _=D("router-link"),h=D("block"),d=Le,a=Fe,g=Ve,y=D("QuestionFilled"),B=j,U=It,N=Ne,P=Be,R=G,x=Ee;return l(),p(b,null,[t("div",Bt,[t("div",Nt,[t("div",Lt,[e.$route.path!="/index"?(l(),F(_,{key:0,to:"/",class:"top-nav"},{default:r(()=>[A(u(e.$t("返回首页")),1)]),_:1})):V("",!0),c(g,{"default-active":o.activeIndex,class:"el-menu-demo",mode:"horizontal",ellipsis:!1},{default:r(()=>[(l(!0),p(b,null,I(e.headerNav,(m,w)=>(l(),p(b,{key:w},[m.nav_position==0?(l(),p(b,{key:0},[m.nav_dropdown_menu?(l(),F(d,{key:0,index:w+2},{title:r(()=>[A(u(m.nav_title),1)]),default:r(()=>[c(h,{innerHTML:m.nav_dropdown_menu},null,8,["innerHTML"])]),_:2},1032,["index"])):(l(),F(a,{key:1,index:w+2},{default:r(()=>[m.nav_url?(l(),p("span",Ft,[t("a",{href:m.nav_url,alt:"",class:""},u(m.nav_title),9,Vt)])):(l(),p("span",Tt,u(m.nav_title),1))]),_:2},1032,["index"]))],64)):V("",!0)],64))),128))]),_:1},8,["default-active"]),V("",!0)]),t("div",Ut,[o.counter.hasLogin?(l(),p("div",Rt,[c(g,{"text-color":"#FFFFFF","default-active":o.activeIndex,class:"el-menu-demo",mode:"horizontal",ellipsis:!1},{default:r(()=>[c(d,{index:"1"},{title:r(()=>[A(u(o.counter.userInfo.user_nickname),1)]),default:r(()=>[c(a,{index:"1-1"},{default:r(()=>[c(_,{style:{color:"#fff !important"},to:"/user/mine/index",alt:"",class:""},{default:r(()=>[A(u(e.$t("个人中心")),1)]),_:1})]),_:1}),c(a,{index:"1-2",onClick:o.logouts},{default:r(()=>[A(u(e.$t("退出")),1)]),_:1},8,["onClick"])]),_:1})]),_:1},8,["default-active"])])):(l(),p("div",Pt,[c(_,{to:"/login/login",class:$(["top-nav",e.loginBtnIsCheck?"header-register":"header-login"])},{default:r(()=>[A(u(e.$t("登录")),1)]),_:1},8,["class"]),c(_,{to:"/login/register",class:$(["top-nav",e.loginBtnIsCheck?"header-login":"header-register"])},{default:r(()=>[A(u(e.$t("注册")),1)]),_:1},8,["class"])])),t("div",xt,[c(_,{to:"/article/lists?article_id=125",alt:"",class:""},{default:r(()=>[c(B,{class:"help-btn"},{default:r(()=>[c(y)]),_:1})]),_:1})])])])]),c(N,{modelValue:e.dialogVisible,"onUpdate:modelValue":n[2]||(n[2]=m=>e.dialogVisible=m),width:"840px",draggable:""},{default:r(()=>[c(U,{onCancel:n[1]||(n[1]=m=>e.dialogVisible=!1)})]),_:1},8,["modelValue"]),c(N,{modelValue:e.dialogVisiblePop,"onUpdate:modelValue":n[3]||(n[3]=m=>e.dialogVisiblePop=m),draggable:"",onClose:o.closePop},{default:r(()=>[t("div",Dt,[c(R,{href:o.counter.info.index_pop_pc_url},{default:r(()=>[c(P,{src:o.counter.info.index_pop_pc_img},null,8,["src"])]),_:1},8,["href"])])]),_:1},8,["modelValue","onClose"]),c(x)],64)}const oo=z(Et,[["render",Mt]]);export{It as _,oo as a,to as b};
