import{Q as L,a0 as x,e as N,f as U,g as V,i as T,t as I,U as b,n as A,p as n,v as u,x as s,y as i,z as r,A as a,F as m,C as k,D as h,E as p,I as D,J as M,W as H,X as J}from"./index-78223f15.js";import{b as Q,d as W,a as X,E as G}from"./main-0e4d3339.js";import{E as K,a as O}from"./tab-pane-b4182186.js";import{E as Y}from"./pagination-fbb635bb.js";/* empty css              */import"./tag-c15f0a42.js";import"./select-0ae9fab1.js";import"./scrollbar-afb507b1.js";import"./popper-7ac694e5.js";import{E as Z}from"./empty-2b4f8712.js";import{E as ss}from"./image-viewer-32b8c113.js";/* empty css             */import{E as ts}from"./avatar-de081509.js";import{u as es,j as os,l as as,k as is}from"./sns-07a93d97.js";import{_ as ns}from"./_plugin-vue_export-helper-c27b6911.js";import"./strings-4bc551b5.js";import"./index-089c6298.js";import"./isEqual-528f6bc1.js";import"./_Uint8Array-e95ddee1.js";import"./debounce-429b1daa.js";import"./_baseIteratee-58952620.js";import"./hasIn-61fe7d07.js";import"./index-b0526b91.js";import"./isUndefined-aa0326a0.js";const us=L({components:{Delete:x},setup(){const t=N();let o=U({spaceInfo:{},storyRows:[],commentRows:[],collectRows:[],loading:!0,isdata:!0,activeName:"story",IsLoginUser:!1,userRow:{}}),d=U({page:t.query.page||1,size:t.query.size||36,total:1,user_id:t.query.user_id||0,sidx:"story_time",sord:"DESC"});const{userInfo:S}=V();o.userRow=S;const w=()=>{es({user_id:d.user_id}).then(l=>{l.status==200&&l.data?(o.spaceInfo=l.data,o.userRow&&o.userRow.user_id==d.user_id?o.IsLoginUser==!0:o.IsLoginUser==!1,console.log(o.userRow.user_id),console.log(l.data.user_id)):b.error("数据读取失败!")})},v=()=>{os(d).then(l=>{l.status==200?l.data.items&&l.data.items.length>0?(o.storyRows=l.data.items,d.total=l.data.records):o.isdata=!1:b.error("数据读取失败!")})},f=()=>{let l={page:d.page,size:d.size,user_id:d.user_id};as(l).then(c=>{c.status==200?c.data.items&&c.data.items.length>0?(o.commentRows=c.data.items,d.total=c.data.records):o.isdata=!1:b.error("数据读取失败!")})},F=()=>{let l={page:d.page,size:d.size,user_id:d.user_id};is(l).then(c=>{c.status==200?c.data.items&&c.data.items.length>0?(o.collectRows=c.data.items,d.total=c.data.records):o.isdata=!1:b.error("数据读取失败!")})},_=l=>{},C=()=>{d.page=1,d.size=36,o.isdata=!0,o.activeName=="story"?v():o.activeName=="collectstory"?F():f()};return T(()=>{w(),v()}),{handleClick:C,getUserStory:v,getListUserCollectStory:F,getListUserCommentStory:f,editFollows:_,...I(d),...I(o)}}});const y=t=>(H("data-v-55fbcbd0"),t=t(),J(),t),rs={class:"page-container"},ls={id:"root"},ds={class:""},cs={class:""},_s={class:"profile-header"},ps=y(()=>s("a",{href:"javascropt:void(0)"},[s("img",{class:"bg-header",src:"https://shopsuite.oss-accelerate.aliyuncs.com/media/user/10472/image/20210422/1619057326407633.png",alt:"背景"})],-1)),hs={href:"javascropt:void(0)"},ms={href:"javascropt:void(0)",class:"title"},ys={class:"name"},gs={id:"follows"},vs={id:"follows"},fs={class:"tab-container"},Fs={class:"profile-tabs"},Cs={class:"feed-box"},bs={class:"feed-list"},Bs={class:"normal no-image"},Es={class:"rbox-inner"},As={class:"title-box"},ks={class:"article-footer"},Ds={class:"y-left"},Ss={class:"lbtn comment",href:"javascropt:void(0)",target:"_blank"},ws={class:"lbtn"},zs={key:0,class:"y-right"},$s={key:0},Us=y(()=>s("div",{class:"lbox"},null,-1)),Is={class:"normal rbox"},js={class:"rbox-inner"},Rs={class:"title-box"},qs={class:"link",href:"javascropt:void(0)"},Ps={class:"article-footer"},Ls={class:"y-left"},xs={class:"lbtn",href:"javascropt:void(0)"},Ns={class:"lbtn comment",href:"javascropt:void(0)"},Vs={class:"lbtn"},Ts={class:"y-right"},Ms={class:"lbox"},Hs={key:1},Js={class:"sortPagiBar"},Qs={class:"bottom-pagination"},Ws={key:0},Xs={class:"normal no-image"},Gs={class:"rbox-inner"},Ks={class:"title-box"},Os={class:"article-footer"},Ys={class:"y-left"},Zs={class:"lbtn comment",href:"javascropt:void(0)",target:"_blank"},st={class:"lbtn"},tt={key:0,class:"y-right"},et=y(()=>s("div",{class:"lbox"},null,-1)),ot={class:"sortPagiBar"},at={class:"bottom-pagination"},it={class:"feed-box"},nt={class:"feed-list"},ut={key:0,class:"article-card"},rt={class:"normal no-image"},lt={class:"rbox-inner"},dt={class:"title-box"},ct={class:"article-footer"},_t={class:"y-left"},pt={class:"lbtn comment",href:"javascropt:void(0)"},ht={class:"lbtn"},mt={key:0,class:"y-right"},yt={key:0},gt=y(()=>s("div",{class:"lbox"},null,-1)),vt={class:"normal rbox"},ft={class:"rbox-inner"},Ft={class:"title-box"},Ct={class:"article-footer"},bt={class:"y-left"},Bt={class:"lbtn",href:"javascropt:void(0)"},Et={class:"lbtn comment",href:"javascropt:void(0)"},At={class:"lbtn"},kt={class:"y-right"},Dt=y(()=>s("div",{class:"lbox hide"},[s("a",{class:"img-wrap",href:"https://test.shopsuite.cn/account.php/sns/Story/get/story_id/93680697",target:"_blank"},[s("video",{class:"",style:{width:"100%",height:"100%"},controls:"true",mediatype:"video",src:"https://sc-1301365320.file.myqcloud.com/media/user/10001/image/20211026/1635249833545727.mp4"})])],-1)),St={key:1,class:"article-card"},wt={class:"normal no-image"},zt={class:"rbox-inner"},$t={class:"title-box"},Ut={class:"article-footer"},It={class:"y-left"},jt={class:"lbtn comment",href:"javascropt:void(0)"},Rt={class:"lbtn"},qt={key:0,class:"y-right"},Pt=y(()=>s("div",{class:"lbox"},null,-1)),Lt={key:1},xt={class:"sortPagiBar"},Nt={class:"bottom-pagination"},Vt={class:"right-sidebar"},Tt={class:"relation"},Mt={class:""},Ht={href:"javascropt:void(0)"},Jt={href:"javascropt:void(0)"},Qt=y(()=>s("p",{class:"intro-info"}," 简介： 朝夕相伴，独家新闻，热点资讯 ",-1)),Wt=y(()=>s("div",{class:"recent hide"},[s("h2",null,"近期最佳文章"),s("div",{class:"recent-list"},[s("ul",null,[s("li",null,[s("div",{class:"line image"},[s("a",{class:"lbox",href:"https://test.shopsuite.cn/account.php/sns/Story/get/story_id/4784098",target:"_blank",rel:"noopener noreferrer"},[s("video",{class:"",height:"100%",controls:"",width:"100%",tabindex:"2",mediatype:"video",src:"https://shopsuite.oss-accelerate.aliyuncs.com/sns/video/dy/4784098.mp4"})]),s("div",{class:"rbox"},[s("a",{title:"大弟，这龙虾还香吗？@威希弟",href:"https://test.shopsuite.cn/account.php/sns/Story/get/story_id/4784098",target:"_blank",rel:"noopener noreferrer"},"大弟，这龙虾还香吗？@威希弟"),s("span",null,"2评论")])])]),s("li",null,[s("div",{class:"line image"},[s("a",{class:"lbox",href:"https://test.shopsuite.cn/account.php/sns/Story/get/story_id/83419720",target:"_blank",rel:"noopener noreferrer"},[s("video",{class:"",height:"100%",controls:"",width:"100%",tabindex:"2",mediatype:"video",src:"https://shopsuite.oss-accelerate.aliyuncs.com/sns/video/dy/83419720.mp4"})]),s("div",{class:"rbox"},[s("a",{title:"巷陌烟火，雄奇江山，最美的风景在路上。10月1日至8日，八天八条线，央视新闻邀你 #坐着高铁看中国",href:"https://test.shopsuite.cn/account.php/sns/Story/get/story_id/83419720",target:"_blank",rel:"noopener noreferrer"},"巷陌烟火，雄奇江山，最美的风景在路上。10月1日至8日，八天八条线，央视新闻邀你 #坐着高铁看中国"),s("span",null,"2评论")])])]),s("li",null,[s("div",{class:"line image"},[s("a",{class:"lbox",href:"https://test.shopsuite.cn/account.php/sns/Story/get/story_id/7325464",target:"_blank",rel:"noopener noreferrer"},[s("video",{class:"",height:"100%",controls:"",width:"100%",tabindex:"2",mediatype:"video",src:"https://shopsuite.oss-accelerate.aliyuncs.com/sns/video/dy/7325464.mp4"})]),s("div",{class:"rbox"},[s("a",{title:"过程来了！上个视频有宝宝说我花",href:"https://test.shopsuite.cn/account.php/sns/Story/get/story_id/7325464",target:"_blank",rel:"noopener noreferrer"},"过程来了！上个视频有宝宝说我花"),s("span",null,"2评论")])])]),s("li",null,[s("div",{class:"line image"},[s("a",{class:"lbox",href:"https://test.shopsuite.cn/account.php/sns/Story/get/story_id/7253870",target:"_blank",rel:"noopener noreferrer"},[s("video",{class:"",height:"100%",controls:"",width:"100%",tabindex:"2",mediatype:"video",src:"https://shopsuite.oss-accelerate.aliyuncs.com/sns/video/dy/7253870.mp4"})]),s("div",{class:"rbox"},[s("a",{title:"#乘风破浪的姐姐",href:"https://test.shopsuite.cn/account.php/sns/Story/get/story_id/7253870",target:"_blank",rel:"noopener noreferrer"},"#乘风破浪的姐姐"),s("span",null,"1评论")])])]),s("li",null,[s("div",{class:"line image"},[s("a",{class:"lbox",href:"https://test.shopsuite.cn/account.php/sns/Story/get/story_id/35868464",target:"_blank",rel:"noopener noreferrer"},[s("video",{class:"",height:"100%",controls:"",width:"100%",tabindex:"2",mediatype:"video",src:"https://shopsuite.oss-accelerate.aliyuncs.com/sns/video/dy/35868464.mp4"})]),s("div",{class:"rbox"},[s("a",{title:"#脱口秀大会  #李雪琴 面临职场pua？？ #抖妹er放映厅",href:"https://test.shopsuite.cn/account.php/sns/Story/get/story_id/35868464",target:"_blank",rel:"noopener noreferrer"},"#脱口秀大会 #李雪琴 面临职场pua？？ #抖妹er放映厅"),s("span",null,"1评论")])])])])])],-1));function Xt(t,o,d,S,w,v){const f=ts,F=W,_=A("router-link"),C=A("Delete"),l=A("delete"),c=M,j=ss,z=Z,B=Y,E=K,R=O,q=X,P=G,$=Q;return n(),u("div",rs,[s("div",ls,[s("div",ds,[s("div",cs,[i($,{style:{background:"#f4f5f6"}},{default:r(()=>[i(F,{height:"252px",style:{"margin-bottom":"20px"}},{default:r(()=>[s("div",_s,[ps,s("div",null,[s("a",hs,[i(f,{class:"avatar",size:"large",src:t.spaceInfo.user_avatar},null,8,["src"])]),s("div",null,[s("a",ms,[s("span",ys,a(t.spaceInfo.user_nickname),1)])]),t.spaceInfo.IsFollow?(n(),u("div",{key:0,class:"btn-publish",style:{background:"#fff",color:"#222","border-color":"#222"},onClick:o[0]||(o[0]=e=>t.editFollows(0))},[s("span",gs,a(t.$t("取消关注")),1)])):(n(),u("div",{key:1,class:"btn-publish",onClick:o[1]||(o[1]=e=>t.editFollows(1))},[s("span",vs,a(t.$t("关注")),1)]))])])]),_:1}),i($,null,{default:r(()=>[i(q,{style:{"margin-right":"20px"}},{default:r(()=>[s("div",fs,[s("div",Fs,[i(R,{modelValue:t.activeName,"onUpdate:modelValue":o[14]||(o[14]=e=>t.activeName=e),class:"demo-tabs",onTabClick:t.handleClick},{default:r(()=>[i(E,{label:"文章",name:"story"},{default:r(()=>[s("div",Cs,[s("div",bs,[t.isdata?(n(!0),u(m,{key:0},k(t.storyRows,(e,g)=>(n(),u("div",{class:"article-card",key:g},[e.story_type==1?(n(),u(m,{key:0},[s("div",Bs,[s("div",Es,[s("div",As,[i(_,{class:"link",to:{path:"/sns/story/get",query:{story_id:e.story_id}}},{default:r(()=>[h(a(e.story_title),1)]),_:2},1032,["to"])]),s("div",ks,[s("div",Ds,[i(_,{class:"lbtn",to:{path:"/sns/story/get",query:{story_id:e.story_id}}},{default:r(()=>[h(a(e.story_collection_count)+a(t.$t("收藏"))+" ⋅",1)]),_:2},1032,["to"]),s("a",Ss," "+a(e.story_comment_count)+a(t.$t("评论"))+" ",1),s("span",ws,"⋅ "+a(e.story_time),1)]),t.IsLoginUser?(n(),u("div",zs,[e.story_enable?p("",!0):(n(),u("span",$s,a(t.$t("待审核")),1)),i(C,{style:{width:"1.3em",height:"1.3em","margin-right":"8px"}})])):p("",!0)])])]),Us],64)):p("",!0),e.story_type==2?(n(),u(m,{key:1},[s("div",Is,[s("div",js,[s("div",Rs,[s("a",qs,a(e.story_title),1)]),s("div",Ps,[s("div",Ls,[s("a",xs,a(e.story_collection_count)+a(t.$t("收藏"))+" ⋅",1),s("a",Ns," "+a(e.story_comment_count)+a(t.$t("评论"))+" ",1),s("span",Vs,"⋅ "+a(e.story_time),1)]),s("div",Ts,[i(c,{size:"50"},{default:r(()=>[i(l)]),_:1})])])])]),s("div",Ms,[i(_,{class:"img-wrap",to:{path:"/sns/story/get",query:{story_id:e.story_id}}},{default:r(()=>[i(j,{src:e.story_file[0],alt:""},null,8,["src"])]),_:2},1032,["to"])])],64)):p("",!0)]))),128)):(n(),u("div",Hs,[i(z,{description:"对不起，用户还没有发布文章!"})]))])]),s("div",Js,[s("div",Qs,[s("nav",null,[(n(),D(B,{currentPage:t.page,"onUpdate:currentPage":o[2]||(o[2]=e=>t.page=e),"page-size":t.size,"onUpdate:pageSize":o[3]||(o[3]=e=>t.size=e),"page-sizes":[36,72,108,144],small:!1,disabled:!1,background:!0,layout:"prev,pager,next,total,jumper",total:t.total,key:t.page,onSizeChange:o[4]||(o[4]=e=>{t.size==e,t.getUserStory()}),onCurrentChange:o[5]||(o[5]=e=>{t.page==e,t.getUserStory()})},null,8,["currentPage","page-size","total"]))])])])]),_:1}),i(E,{label:"评论",name:"commentstory"},{default:r(()=>[t.commentRows.length>0?(n(),u("div",Ws,[(n(!0),u(m,null,k(t.commentRows,(e,g)=>(n(),u("div",{class:"article-card",key:g},[s("div",Xs,[s("div",Gs,[s("div",Ks,[i(_,{class:"link",to:{path:"/sns/story/get",query:{story_id:e.story_id}}},{default:r(()=>[h(a(e.story_title||e.comment_content),1)]),_:2},1032,["to"])]),s("div",Os,[s("div",Ys,[i(_,{class:"lbtn",to:{path:"/sns/story/get",query:{story_id:e.story_id}}},{default:r(()=>[h(a(e.story_collection_count)+a(t.$t("收藏"))+" ⋅",1)]),_:2},1032,["to"]),s("a",Zs," "+a(e.story_comment_count)+a(t.$t("评论"))+" ",1),s("span",st,"⋅ "+a(e.story_time),1)]),e.story_title?p("",!0):(n(),u("div",tt,[s("span",null,a(t.$t("帖子已经删除")),1)]))])])]),et]))),128)),s("div",ot,[s("div",at,[s("nav",null,[(n(),D(B,{currentPage:t.page,"onUpdate:currentPage":o[6]||(o[6]=e=>t.page=e),"page-size":t.size,"onUpdate:pageSize":o[7]||(o[7]=e=>t.size=e),"page-sizes":[36,72,108,144],small:!1,disabled:!1,background:!0,layout:"prev,pager,next,total,jumper",total:t.total,key:t.page,onSizeChange:o[8]||(o[8]=e=>{t.size==e,t.getListUserCommentStory()}),onCurrentChange:o[9]||(o[9]=e=>{t.page==e,t.getListUserCommentStory()})},null,8,["currentPage","page-size","total"]))])])])])):p("",!0)]),_:1}),i(E,{label:"收藏",name:"collectstory"},{default:r(()=>[s("div",it,[s("div",nt,[t.collectRows?(n(!0),u(m,{key:0},k(t.collectRows,(e,g)=>(n(),u(m,{key:g},[e.story_title?(n(),u("div",ut,[e.story_type==1?(n(),u(m,{key:0},[s("div",rt,[s("div",lt,[s("div",dt,[i(_,{class:"link",to:{path:"/sns/story/get",query:{story_id:e.story_id}}},{default:r(()=>[h(a(e.story_title),1)]),_:2},1032,["to"])]),s("div",ct,[s("div",_t,[i(_,{class:"lbtn",to:{path:"/sns/story/get",query:{story_id:e.story_id}}},{default:r(()=>[h(a(e.story_collection_count)+a(t.$t("收藏"))+" ⋅",1)]),_:2},1032,["to"]),s("a",pt," "+a(e.story_comment_count)+a(t.$t("评论"))+" ",1),s("span",ht,"⋅ "+a(e.story_time),1)]),t.IsLoginUser?(n(),u("div",mt,[e.story_enable?p("",!0):(n(),u("span",yt,a(t.$t("待审核")),1)),i(C,{style:{width:"1.3em",height:"1.3em","margin-right":"8px"}})])):p("",!0)])])]),gt],64)):p("",!0),e.story_type==2?(n(),u(m,{key:1},[s("div",vt,[s("div",ft,[s("div",Ft,[i(_,{class:"link",to:{path:"/sns/story/get",query:{story_id:e.story_id}}},{default:r(()=>[h(a(e.story_title),1)]),_:2},1032,["to"])]),s("div",Ct,[s("div",bt,[s("a",Bt,a(e.story_collection_count)+a(t.$t("收藏"))+" ⋅",1),s("a",Et," "+a(e.story_comment_count)+a(t.$t("评论"))+" ",1),s("span",At,"⋅ "+a(e.story_time),1)]),s("div",kt,[i(c,{size:"50"},{default:r(()=>[i(l)]),_:1})])])])]),Dt],64)):p("",!0)])):(n(),u("div",St,[s("div",wt,[s("div",zt,[s("div",$t,[i(_,{class:"link",to:{path:"/sns/story/get",query:{story_id:e.story_id}}},{default:r(()=>[h(a(e.comment_content),1)]),_:2},1032,["to"])]),s("div",Ut,[s("div",It,[i(_,{class:"lbtn",to:{path:"/sns/story/get",query:{story_id:e.story_id}}},{default:r(()=>[h(a(e.story_collection_count)+a(t.$t("收藏"))+" ⋅",1)]),_:2},1032,["to"]),s("a",jt," "+a(e.story_comment_count)+a(t.$t("评论"))+" ",1),s("span",Rt,"⋅ "+a(e.story_time),1)]),e.story_title?p("",!0):(n(),u("div",qt,[s("span",null,a(t.$t("帖子已经删除")),1)]))])])]),Pt]))],64))),128)):(n(),u("div",Lt,[i(z,{description:"对不起，用户还没有发布文章!"})]))])]),s("div",xt,[s("div",Nt,[s("nav",null,[(n(),D(B,{currentPage:t.page,"onUpdate:currentPage":o[10]||(o[10]=e=>t.page=e),"page-size":t.size,"onUpdate:pageSize":o[11]||(o[11]=e=>t.size=e),"page-sizes":[36,72,108,144],small:!1,disabled:!1,background:!0,layout:"prev,pager,next,total,jumper",total:t.total,key:t.page,onSizeChange:o[12]||(o[12]=e=>{t.size==e,t.getListUserCollectStory()}),onCurrentChange:o[13]||(o[13]=e=>{t.page==e,t.getListUserCollectStory()})},null,8,["currentPage","page-size","total"]))])])])]),_:1})]),_:1},8,["modelValue","onTabClick"])])])]),_:1}),i(P,{width:"340px"},{default:r(()=>[s("div",Vt,[s("div",Tt,[s("dl",Mt,[s("dt",null,[s("a",Ht,[s("h3",null,a(t.spaceInfo.user_friend),1),s("p",null,a(t.$t("关注")),1)])]),s("dd",null,[s("a",Jt,[s("h3",null,a(t.spaceInfo.user_fans),1),s("p",null,a(t.$t("粉丝")),1)])])])]),Qt,Wt])]),_:1})]),_:1})]),_:1})])])])])}const fe=ns(us,[["render",Xt],["__scopeId","data-v-55fbcbd0"]]);export{fe as default};
