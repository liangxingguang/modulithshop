import{P as S,e as x,f as A,g as D,o as $,i as L,t as R,T as n,n as q,p as m,v as _,x as t,y as c,z as v,D as h,A as i,E,G as I,O as V,U as M,F as B,C as F,X as N,V as T,W as z}from"./index-21964c78.js";import{E as P}from"./image-viewer-dd6920ac.js";import{E as U}from"./avatar-df481c73.js";import{a as j,r as G,b as H,d as O,e as W,f as X,g as J,h as K,i as Q}from"./sns-499bc694.js";import{_ as Y}from"./_plugin-vue_export-helper-c27b6911.js";import"./debounce-6ea0a711.js";const Z=S({setup(){const s=x();let o=A({storyItem:{},commenItems:[],userRow:{},comPage:1,comRows:20,isdata:!1,comment_content:"",relatedStory:[],dataContent:{}}),u=A({story_id:s.query.story_id||0});const{userInfo:w}=D();o.userRow=w;const p=()=>{j(u).then(r=>{if(r.status==200){let e=r.data;o.storyItem=e,f(),l()}else{n.error("您寻找的帖子不存在了!");return}})},k=()=>{G({story_category_id:0}).then(e=>{if(e.status==200){let y=e.data;o.relatedStory=y}})},l=()=>{let r={page:o.comPage,rows:o.comRows,story_id:u.story_id};H(r).then(e=>{if(e.status==200){let y=e.data;y.items&&y.items.length>0&&(o.commenItems=y.items,y.total>o.comPage?o.isdata=!0:o.isdata=!1)}})},g=()=>{if(!o.comment_content){n.error("请输入评论内容!");return}let r={story_id:u.story_id,comment_content:o.comment_content,comment_reply_id:0,comment_id:0,to_user_id:o.storyItem.user_id};O(r).then(e=>{if(e.status==200)e.data,n.success("评论成功"),l();else{n.error(e.msg);return}})},b=r=>{W({comment_id:r}).then(e=>{if(e.status==200)n.success("点赞成功"),p();else{n.error(e.msg);return}})},a=()=>{let r={story_id:u.story_id};X(r).then(e=>{if(e.status==200)n.success("点赞成功"),p();else{n.error(e.msg);return}})},f=()=>{let r={story_id:u.story_id,to_user_id:o.storyItem.user_id};J(r).then(e=>{e.status==200&&(o.dataContent=e.data)})},C=r=>{r?K({friend_id:o.storyItem.user_id}).then(e=>{e.status==200?(n.success("已取消关注"),p()):(console.log(e),n.error(e.msg))}):Q({friend_id:o.storyItem.user_id}).then(e=>{e.status==200?(n.success("关注成功"),p()):(console.log(e),n.error(e.msg))})};return $((r,e)=>{u.story_id=r.query.story_id,p()}),L(()=>{p(),k()}),{onSubmit:g,addLike:a,onCommentLike:b,follow:C,...R(o)}}});const d=s=>(T("data-v-2871a98c"),s=s(),z(),s),tt={class:"detail-container"},st=d(()=>t("input",{class:"story_id hide",id:"story_id",type:"text",value:"93680693"},null,-1)),et=d(()=>t("input",{class:"story_id hide",id:"user_id",type:"text",value:"10001"},null,-1)),ot={class:"toutiao-header"},at={class:"middlebar"},it={class:"middlebar-inner",style:{width:"1200px"}},rt={class:"middlebar-left"},nt={class:"chinese-tag"},lt={class:"text"},ct={class:"detail-content-wrapper"},dt={class:"detail-article-container"},ut=N('<div class="tools-wrapper hide" data-v-2871a98c><div data-v-2871a98c><div class="article-share-tool" data-v-2871a98c><div class="comment-block-anchor" data-v-2871a98c><i class="bui-icon icon-comment_anchor" data-v-2871a98c></i><span data-v-2871a98c>1</span></div><hr data-v-2871a98c><ul class="share-tools" data-v-2871a98c><li data-v-2871a98c><div class="article-repost" data-v-2871a98c><img src="https://test.shopsuite.cn/account/static/src/default/images/repost.png" class="repost-img" data-v-2871a98c><span data-v-2871a98c>转发</span></div></li><li data-v-2871a98c><div class="article-repost" data-v-2871a98c><img src="https://test.shopsuite.cn/account/static/src/default/images/weibo.png" class="repost-img" data-v-2871a98c><span data-v-2871a98c>微博</span></div></li><li data-v-2871a98c><div class="share-wx-wrapper" data-v-2871a98c><div class="article-repost" data-v-2871a98c><img src="https://test.shopsuite.cn/account/static/src/default/images/weix.png" class="repost-img" data-v-2871a98c><span data-v-2871a98c>微信</span></div><div class="wx-share-qrcode" style="display:none;" data-v-2871a98c><p data-v-2871a98c>微信扫一扫</p><div id="wx-qrcode" data-v-2871a98c></div></div></div></li></ul></div></div></div>',1),pt={class:"article-content",style:{width:"797px"}},mt={class:"article-meta"},_t=["src"],ht=["innerHTML"],yt={class:"content-action"},vt=d(()=>t("div",{class:"meta-info"},null,-1)),ft={class:"action-list"},gt=d(()=>t("i",{class:"bui-icon icon-favorite_line"},null,-1)),bt={id:"comment-area",class:"article-detail-comment"},wt={class:"comment-meta"},kt={class:"comment-number"},Ct={class:"number"},At={class:"main-input-area"},Et={class:"avatar"},It={class:"input-textarea"},Bt=["placeholder"],Ft={class:"input-footer"},St={class:"comment-list"},xt={id:"m-ul"},Dt={class:"comment-item"},$t={class:"comment-detail"},Lt={class:"user-info"},Rt={class:"create-time"},qt={class:"content"},Vt={class:"footer"},Mt=["title"],Nt={class:""},Tt=["onClick"],zt=d(()=>t("div",{class:"comment-reply-list",style:{display:"none"}},[t("div")],-1)),Pt={key:0,class:"load-more-comment",id:"load-more-comment"},Ut={type:"button",class:"more-comment"},jt={class:"media-info-wrapper"},Gt={class:"media-info-wrapper"},Ht={class:"media-info"},Ot={class:"user-info"},Wt={class:"user-name"},Xt=d(()=>t("i",{class:"bui-icon icon-add_small",id:"bui-icon-l",style:{"line-height":"22px"}},null,-1)),Jt={class:"text-follow",id:"follow"},Kt={class:"related-list"},Qt={class:"footer-feed-wrapper hide"},Yt={class:"footer-feed"},Zt={class:"subtitle"},ts=d(()=>t("div",{class:"feedbox-wrapper"},[t("div",{class:"feed-box"},[t("div",{class:"feed-list"},[t("div",{class:"single-mode"},[t("div",{class:"single-mode-lbox"},[t("a",{class:"img-wrap",style:{width:"158px",height:"102px"},href:"https://test.shopsuite.cn/account.php/sns/Story/get/story_id/3973972",target:"_blank",rel:"noopener noreferrer"},[t("video",{class:"",height:"100%",controls:"",width:"100%",tabindex:"2",mediatype:"video",src:"https://shopsuite.oss-accelerate.aliyuncs.com/sns/video/dy/3973972.mp4"})])]),t("div",{class:"single-mode-rbox"},[t("div",{class:"single-mode-rbox-inner"},[t("div",{class:"title-box"},[t("a",{class:"link",href:"https://test.shopsuite.cn/account.php/sns/Story/get/story_id/3973972",target:"_blank",rel:"noopener noreferrer"},"#解锁人脸运镜术 跟上时代的潮流")]),t("div",{class:"footer-bar"},[t("div",{class:"footer-bar-left"},[t("a",{class:"footer-bar-action tag tag-style-finance",href:"https://test.shopsuite.cn/account.php/sns/Story/lists/category_id/1001",target:"_blank",rel:"noopener noreferrer"},"美食"),t("a",{class:"footer-bar-action media-avatar",href:"https://test.shopsuite.cn/account.php/sns/Story/get/story_id/3973972",target:"_blank",rel:"noopener noreferrer"},[t("img",{src:"https://test.shopsuite.cn/image.php/shop/data/upload/media/user/10001/image/20181031/1540955548813603.jpg?t=1973558481"})]),t("a",{class:"footer-bar-action source",href:"https://test.shopsuite.cn/account.php/sns/Story/my/action/story/user_id/10001",target:"_blank",rel:"noopener noreferrer"}," demoadmin  "),t("span",{class:"footer-bar-action time"}," ⋅ 2020-08-08 18:37:02")])])])])]),t("div",{class:"single-mode"},[t("div",{class:"single-mode-lbox"},[t("a",{class:"img-wrap",style:{width:"158px",height:"102px"},href:"https://test.shopsuite.cn/account.php/sns/Story/get/story_id/8121103",target:"_blank",rel:"noopener noreferrer"},[t("video",{class:"",height:"100%",controls:"",width:"100%",tabindex:"2",mediatype:"video",src:"https://shopsuite.oss-accelerate.aliyuncs.com/sns/video/dy/8121103.mp4"})])]),t("div",{class:"single-mode-rbox"},[t("div",{class:"single-mode-rbox-inner"},[t("div",{class:"title-box"},[t("a",{class:"link",href:"https://test.shopsuite.cn/account.php/sns/Story/get/story_id/8121103",target:"_blank",rel:"noopener noreferrer"},"看完這一段還有人敢請我去唱跳節目嗎")]),t("div",{class:"footer-bar"},[t("div",{class:"footer-bar-left"},[t("a",{class:"footer-bar-action tag tag-style-finance",href:"https://test.shopsuite.cn/account.php/sns/Story/lists/category_id/1001",target:"_blank",rel:"noopener noreferrer"},"美食"),t("a",{class:"footer-bar-action media-avatar",href:"https://test.shopsuite.cn/account.php/sns/Story/get/story_id/8121103",target:"_blank",rel:"noopener noreferrer"},[t("img",{src:"https://test.shopsuite.cn/image.php/shop/data/upload/media/user/10001/image/20181031/1540955548813603.jpg?t=1973558481"})]),t("a",{class:"footer-bar-action source",href:"https://test.shopsuite.cn/account.php/sns/Story/my/action/story/user_id/10001",target:"_blank",rel:"noopener noreferrer"}," demoadmin  "),t("span",{class:"footer-bar-action time"}," ⋅ 2020-08-12 21:07:05")])])])])]),t("div",{class:"single-mode"},[t("div",{class:"single-mode-lbox"},[t("a",{class:"img-wrap",style:{width:"158px",height:"102px"},href:"https://test.shopsuite.cn/account.php/sns/Story/get/story_id/21836839",target:"_blank",rel:"noopener noreferrer"},[t("video",{class:"",height:"100%",controls:"",width:"100%",tabindex:"2",mediatype:"video",src:"https://shopsuite.oss-accelerate.aliyuncs.com/sns/video/dy/21836839.mp4"})])]),t("div",{class:"single-mode-rbox"},[t("div",{class:"single-mode-rbox-inner"},[t("div",{class:"title-box"},[t("a",{class:"link",href:"https://test.shopsuite.cn/account.php/sns/Story/get/story_id/21836839",target:"_blank",rel:"noopener noreferrer"},"#谭松韵 #表情包模仿秀 假期的最后一天")]),t("div",{class:"footer-bar"},[t("div",{class:"footer-bar-left"},[t("a",{class:"footer-bar-action tag tag-style-finance",href:"https://test.shopsuite.cn/account.php/sns/Story/lists/category_id/1001",target:"_blank",rel:"noopener noreferrer"},"美食"),t("a",{class:"footer-bar-action media-avatar",href:"https://test.shopsuite.cn/account.php/sns/Story/get/story_id/21836839",target:"_blank",rel:"noopener noreferrer"},[t("img",{src:"https://test.shopsuite.cn/image.php/shop/data/upload/media/user/10001/image/20181031/1540955548813603.jpg?t=1973558481"})]),t("a",{class:"footer-bar-action source",href:"https://test.shopsuite.cn/account.php/sns/Story/my/action/story/user_id/10001",target:"_blank",rel:"noopener noreferrer"}," demoadmin  "),t("span",{class:"footer-bar-action time"}," ⋅ 2020-10-08 20:53:06")])])])])])])])],-1)),ss=d(()=>t("div",{class:"toolbar hide"},[t("div",{class:"download shadow"}),t("ul",{class:"tool-container shadow"},[t("li",{class:"tool-item"})])],-1));function es(s,o,u,w,p,k){const l=q("router-link"),g=U,b=P;return m(),_("div",tt,[st,et,t("div",ot,[t("div",at,[t("div",it,[t("div",rt,[t("div",nt,[c(l,{to:{path:"/sns/story/lists"},rel:"noopener noreferrer"},{default:v(()=>[h(i(s.$t("首页")),1)]),_:1}),h(" / "),t("span",lt,i(s.$t("正文")),1)])])])])]),t("div",ct,[t("div",dt,[ut,t("div",pt,[t("h1",null,i(s.storyItem.story_title),1),t("div",mt,[t("span",null,i(s.storyItem.user_nickname),1),t("span",null,i(s.storyItem.story_time),1)]),s.storyItem.story_type==4?(m(),_("video",{key:0,class:"",style:{width:"100%",height:"100%"},controls:"",autoplay:"",tabindex:"2",mediatype:"video",src:s.storyItem.story_video},null,8,_t)):E("",!0),t("article",{class:"syl-page-article syl-device-pc syl-article-base tt-article-content",innerHTML:s.storyItem.story_content},null,8,ht),t("div",yt,[vt,t("div",ft,[t("div",{class:I(["action-item favorite",{active:s.storyItem.IsFabulous}]),onClick:o[0]||(o[0]=(...a)=>s.addLike&&s.addLike(...a))},[gt,t("span",null,i(s.dataContent.like_user_total)+i(s.$t("个收藏")),1)],2)])]),t("div",bt,[t("div",wt,[t("div",kt,[t("span",Ct,i(s.storyItem.story_comment_count),1),h(" "+i(s.$t("条评论")),1)])]),t("div",At,[t("div",Et,[c(g,{size:"small",src:s.userRow.user_avatar},null,8,["src"])]),t("div",It,[V(t("textarea",{"onUpdate:modelValue":o[1]||(o[1]=a=>s.comment_content=a),class:"comment-content",placeholder:s.$t("写下您的评论...")},null,8,Bt),[[M,s.comment_content]]),t("div",Ft,[t("button",{class:"submit-btn",type:"button",onClick:o[2]||(o[2]=(...a)=>s.onSubmit&&s.onSubmit(...a))},i(s.$t("评论")),1)])])]),t("div",St,[t("ul",xt,[(m(!0),_(B,null,F(s.commenItems,(a,f)=>(m(),_("li",{key:f},[t("div",Dt,[c(l,{class:"avatar",to:{path:"/sns/story/my",query:{user_id:a.user_id}}},{default:v(()=>[t("div",null,[c(g,{size:"small",src:a.user_avatar},null,8,["src"])])]),_:2},1032,["to"]),t("div",$t,[t("div",Lt,[c(l,{class:"name",to:{path:"/sns/story/my",query:{user_id:a.user_id}},rel:"noopener noreferrer"},{default:v(()=>[h(i(a.user_nickname),1)]),_:2},1032,["to"]),t("span",Rt,i(a.comment_time),1)]),t("p",qt,i(a.comment_content),1),t("div",Vt,[t("span",{class:"digg comment-41","data-isfabulous":"0",title:s.$t("点赞")},[t("text",Nt,i(a.comment_like_count),1),h("  "),t("i",{class:"bui-icon icon-thumbsup_line",onClick:C=>s.onCommentLike(a.comment_id)},null,8,Tt)],8,Mt)]),zt])])]))),128))])]),s.isdata?(m(),_("div",Pt,[t("button",Ut,i(s.$t("查看更多评论")),1)])):E("",!0)])]),t("div",jt,[t("div",Gt,[t("div",Ht,[t("div",Ot,[c(l,{class:"user-avatar",to:{path:"/sns/story/my",query:{user_id:s.storyItem.user_id}}},{default:v(()=>[c(b,{src:s.storyItem.user_avatar,alt:""},null,8,["src"])]),_:1},8,["to"]),t("div",Wt,[c(l,{class:"name",to:{path:"/sns/story/my",query:{user_id:s.storyItem.user_id}}},{default:v(()=>[h(i(s.storyItem.user_nickname),1)]),_:1},8,["to"]),t("div",{class:I(["user-subscribe-wrapper",{following:s.storyItem.IsFollow}]),onClick:o[3]||(o[3]=a=>s.follow(s.storyItem.IsFollow))},[Xt,t("span",Jt,i(s.storyItem.IsFollow?s.$t("已关注"):s.$t("关注")),1)],2)])]),t("ul",Kt,[(m(!0),_(B,null,F(s.storyItem.story_user_items,(a,f)=>(m(),_("li",{class:"related-list-item",key:f},[c(l,{to:{path:"/sns/story/get",query:{story_id:a.story_id}},style:{color:"#222"},rel:"noopener noreferrer"},{default:v(()=>[h(i(a.story_title),1)]),_:2},1032,["to"])]))),128))])])])])]),t("div",Qt,[t("div",null,[t("div",Yt,[t("p",Zt,i(s.$t("相关推荐")),1),ts])])])]),ss])}const cs=Y(Z,[["render",es],["__scopeId","data-v-2871a98c"]]);export{cs as default};
