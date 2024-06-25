import{Q as S,e as F,f as k,o as j,i as A,t as B,U as w,n as $,p as r,v as d,x as t,P,G as C,y as i,z as l,F as p,C as m,I as D,Y as N,D as u,A as o,E as f,W as V,X as U}from"./index-78223f15.js";import{v as R}from"./loading-9148d0db.js";import{E as M}from"./empty-2b4f8712.js";import{E as G}from"./pagination-fbb635bb.js";/* empty css              */import"./tag-c15f0a42.js";import"./select-0ae9fab1.js";import"./scrollbar-afb507b1.js";import"./popper-7ac694e5.js";import{E as Q}from"./image-viewer-32b8c113.js";import{c as T,s as W}from"./sns-07a93d97.js";import{_ as X}from"./_plugin-vue_export-helper-c27b6911.js";import"./isEqual-528f6bc1.js";import"./_Uint8Array-e95ddee1.js";import"./strings-4bc551b5.js";import"./debounce-429b1daa.js";import"./_baseIteratee-58952620.js";import"./hasIn-61fe7d07.js";import"./index-b0526b91.js";import"./isUndefined-aa0326a0.js";const Y=S({setup(){const s=F();let c=k({listsItems:[],categoryLists:[],loading:!0}),_=k({page:1,size:36,total:1,category_id:parseInt(s.query.category_id)||0});const b=()=>{T(_).then(n=>{if(n.status==200){let a=n.data.items;c.categoryLists=a}else w.error("数据读取失败!");c.loading=!1})},v=()=>{let n=_;n.category_id||delete n.category_id,W(n).then(a=>{if(a.status==200){let y=a.data;c.listsItems=y.items,_.total=y.records}else w.error("数据读取失败!");c.loading=!1})};return j((n,a)=>{_.category_id=parseInt(n.query.category_id)||0,_.page=1,v()}),A(()=>{b(),v()}),{getStoryLists:v,...B(_),...B(c)}}});const g=s=>(V("data-v-bc33d852"),s=s(),U(),s),H={class:"page-container"},J={id:"root"},K={class:"home-container"},O={class:"main-content",style:{"margin-top":"00px"}},Z={class:"left-container"},x={class:"ttp-feed-module"},tt={class:"main-nav-wrapper",style:{"margin-bottom":"8px"}},et={class:"feed-m-nav"},st={class:"feed-default-nav"},ot={role:"button","aria-label":"",tabindex:"0"},at={key:0,class:"feed-card-wrapper feed-card-article-wrapper sticky-cell"},rt={class:"feed-card-article no-cover"},dt={class:"feed-card-article-l"},it={class:"feed-card-footer-cmp"},ct={class:"left-tools"},lt={key:0,class:"feed-card-footer-tag-cmp"},nt={class:"feed-card-footer-cmp-author"},_t={class:"feed-card-footer-comment-cmp"},pt={href:"javascropt:void(0)"},ut={class:"feed-card-footer-time-cmp"},yt=g(()=>t("div",{class:"right-tools"},null,-1)),ft={key:0,class:"feed-card-wrapper feed-card-article-wrapper"},vt={class:"feed-card-article single-cover"},ht={class:"feed-card-article-r"},mt={class:"feed-card-cover"},gt={class:"feed-card-article-l"},bt={class:"feed-card-footer-cmp"},kt={class:"left-tools"},Bt={key:0,class:"feed-card-footer-tag-cmp"},wt={class:"feed-card-footer-cmp-author"},Ct={class:"feed-card-footer-comment-cmp"},Et={href:"javascropt:void(0)",target:"_blank",rel:"noopener"},qt={class:"feed-card-footer-time-cmp"},It={key:1,class:"feed-card-wrapper feed-card-article-wrapper visited"},zt={class:"feed-card-article multi-cover"},Lt={class:"feed-card-article-l"},St={class:"cover-list"},Ft={class:"feed-card-cover"},jt={class:"feed-card-footer-cmp"},At={class:"left-tools"},$t={class:"feed-card-footer-cmp-author"},Pt={class:"feed-card-footer-comment-cmp"},Dt={href:"javascropt:void(0)",target:"_blank",rel:"noopener"},Nt={class:"feed-card-footer-time-cmp"},Vt={key:2,class:"feed-card-wrapper feed-card-video-wrapper"},Ut={class:"feed-card-video-single"},Rt={class:"r-content"},Mt={class:"feed-video-item"},Gt={class:"feed-card-video-player-wrapper"},Qt={class:"video-placeholder"},Tt=["src"],Wt=g(()=>t("div",null,null,-1)),Xt={class:"l-content"},Yt={class:"title-wrapper"},Ht={class:"footer"},Jt={class:"feed-card-footer-cmp"},Kt={class:"left-tools"},Ot={class:"feed-card-footer-cmp-author"},Zt={class:"feed-card-footer-comment-cmp"},xt={href:"javascropt:void(0)",target:"_blank",rel:"noopener"},te={class:"feed-card-footer-time-cmp"},ee={class:"sortPagiBar"},se={class:"bottom-pagination"},oe={key:1},ae=N('<div class="right-container hide" data-v-bc33d852><div class="user-card login" data-v-bc33d852><a class="show-monitor" target="_blank" href="http://www.bashangcaoyuan.com" data-v-bc33d852><img src="https://p.shopsuite.cn/beijiangtianlu/image.php/shop/data/upload/media/user/10001/image/20210524/1621840086896838.jpg" alt="御道口" style="width:100%;" aria-hidden="false" tabindex="0" data-v-bc33d852></a></div></div><div class="toolbar" data-v-bc33d852></div>',2),re=g(()=>t("div",{class:"page-loading-overlay hide loaded"},[t("div",{class:"loader-2"})],-1));function de(s,c,_,b,v,n){const a=$("router-link"),y=Q,E=G,q=M,I=R;return r(),d("div",H,[t("div",J,[t("div",K,[P((r(),d("div",O,[t("div",Z,[t("div",null,[t("div",x,[t("div",tt,[t("div",et,[t("ul",st,[t("li",ot,[t("div",{class:C(["feed-default-nav-item",{active:!s.category_id}])},[i(a,{to:{path:"/sns/story/lists"}},{default:l(()=>[u(o(s.$t("全部")),1)]),_:1})],2)]),(r(!0),d(p,null,m(s.categoryLists,(e,h)=>(r(),d("li",{role:"button","aria-label":"",tabindex:"0",key:h},[t("div",{class:C(["feed-default-nav-item",{active:s.category_id==e.story_category_id}])},[i(a,{to:{path:"/sns/story/lists",query:{category_id:e.story_category_id}}},{default:l(()=>[u(o(e.story_category_name),1)]),_:2},1032,["to"])],2)]))),128))])])]),s.listsItems.length>0?(r(),d(p,{key:0},[(r(!0),d(p,null,m(s.listsItems,(e,h)=>(r(),d(p,{key:h},[e.story_type==1?(r(),d("div",at,[t("div",rt,[t("div",dt,[i(a,{to:{path:"/sns/story/get",query:{story_id:e.story_id}},rel:"noopener",class:"title",title:e.story_title},{default:l(()=>[t("h1",null,o(e.story_title),1)]),_:2},1032,["to","title"]),t("div",it,[t("div",ct,[e.story_is_top?(r(),d("div",lt,o(s.$t("置顶")),1)):f("",!0),t("div",nt,[i(a,{to:{path:"/sns/story/my",query:{user_id:e.user_id,action:s.story}},rel:"noopener"},{default:l(()=>[u(o(e.user_nickname),1)]),_:2},1032,["to"])]),t("div",_t,[t("a",pt,o(e.story_comment_count)+"评论",1)]),t("div",ut,o(e.story_time),1)]),yt])])])])):f("",!0),e.story_type==2?(r(),d(p,{key:1},[e.story_file.length==1?(r(),d("div",ft,[t("div",vt,[t("div",ht,[t("div",mt,[i(a,{to:{path:"/sns/story/get",query:{story_id:e.story_id}},rel:"noopener",title:e.story_title,"aria-hidden":"false",tabindex:"0"},{default:l(()=>[i(y,{src:e.story_file[0],alt:e.story_title,fit:"cover"},null,8,["src","alt"])]),_:2},1032,["to","title"])])]),t("div",gt,[i(a,{to:{path:"/sns/story/get",query:{story_id:e.story_id}},rel:"noopener",class:"title",title:e.story_title},{default:l(()=>[t("h1",null,o(e.story_title),1)]),_:2},1032,["to","title"]),t("div",bt,[t("div",kt,[e.story_is_top?(r(),d("div",Bt," 置顶 ")):f("",!0),t("div",wt,[i(a,{to:{path:"/sns/story/my",query:{user_id:e.user_id,action:"story"}},rel:"noopener"},{default:l(()=>[u(o(e.user_nickname),1)]),_:2},1032,["to"])]),t("div",Ct,[t("a",Et,o(e.story_comment_count)+"评论",1)]),t("div",qt,o(e.story_time),1)])])])])])):(r(),d("div",It,[t("div",zt,[t("div",Lt,[i(a,{to:{path:"/sns/story/get",query:{story_id:e.story_id}},rel:"noopener",class:"title",title:e.story_title},{default:l(()=>[t("h1",null,o(e.story_title),1)]),_:2},1032,["to","title"]),t("ul",St,[(r(!0),d(p,null,m(e.story_file,(z,L)=>(r(),d("li",{key:L},[t("div",Ft,[i(a,{to:{path:"/sns/story/get",query:{story_id:e.story_id}},rel:"noopener","aria-hidden":"true",tabindex:"-1"},{default:l(()=>[i(y,{src:z,"aria-hidden":"true",tabindex:"-1"},null,8,["src"])]),_:2},1032,["to"])])]))),128))]),t("div",jt,[t("div",At,[t("div",$t,[i(a,{to:{path:"/sns/story/my",query:{user_id:e.user_id,action:"story"}},rel:"noopener"},{default:l(()=>[u(o(e.user_nickname),1)]),_:2},1032,["to"])]),t("div",Pt,[t("a",Dt,o(e.story_comment_count)+"评论",1)]),t("div",Nt,o(e.story_time),1)])])])])]))],64)):f("",!0),e.story_type==4?(r(),d("div",Vt,[t("div",Ut,[t("div",Rt,[t("div",Mt,[t("div",Gt,[t("div",Qt,[t("video",{class:"",style:{width:"100%",height:"100%"},controls:"",tabindex:"2",mediatype:"video",src:e.story_video},null,8,Tt)]),Wt])])]),t("div",Xt,[t("div",Yt,[i(a,{class:"title",to:{path:"/sns/story/get",query:{story_id:e.story_id}},rel:"noopener"},{default:l(()=>[t("h1",null,o(e.story_title),1)]),_:2},1032,["to"])]),t("div",Ht,[t("div",Jt,[t("div",Kt,[t("div",Ot,[i(a,{to:{path:"/sns/story/my",query:{user_id:e.user_id,action:"story"}},rel:"noopener"},{default:l(()=>[u(o(e.user_nickname),1)]),_:2},1032,["to"])]),t("div",Zt,[t("a",xt,o(e.story_comment_count)+"评论",1)]),t("div",te,o(e.story_time),1)])])])])])])):f("",!0)],64))),128)),t("div",ee,[t("div",se,[t("nav",null,[(r(),D(E,{currentPage:s.page,"onUpdate:currentPage":c[0]||(c[0]=e=>s.page=e),"page-size":s.size,"onUpdate:pageSize":c[1]||(c[1]=e=>s.size=e),"page-sizes":[36,72,108,144],small:!1,disabled:!1,background:!0,layout:"prev,pager,next,total,jumper",total:s.total,key:s.page,onSizeChange:c[2]||(c[2]=e=>{s.size=e,s.getStoryLists()}),onCurrentChange:c[3]||(c[3]=e=>{s.page=e,s.getStoryLists()})},null,8,["currentPage","page-size","total"]))])])])],64)):(r(),d("div",oe,[i(q,{description:s.$t("对不起，对应分类下没有内容!")},null,8,["description"])]))])])]),ae])),[[I,s.loading]])])]),re])}const Ie=X(Y,[["render",de],["__scopeId","data-v-bc33d852"]]);export{Ie as default};
