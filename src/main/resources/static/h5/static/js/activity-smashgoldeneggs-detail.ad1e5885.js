(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["activity-smashgoldeneggs-detail"],{"06f8":function(t,a,e){"use strict";e("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("a9e3"),e("ac1f"),e("466d"),e("e25e");var i={name:"day-countdown",props:{bgrColor:{type:String,default:"#FFFFFF"},borderColor:{type:String,default:"#000000"},fontColor:{type:String,value:"#000000"},splitorColor:{type:String,default:"#000000"},timer:{type:String,default:""},Type:{type:Number,default:0}},data:function(){return{setTime:null,d:"00",h:"00",i:"00",s:"00",leftTime:0}},created:function(t){var a=this.timer.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2})$/);if(null==a)return!1;var e=parseInt(a[1]);if(e<1e3)return!1;var i=parseInt(a[2]),n=parseInt(a[3]),s=parseInt(a[4]);if(s<0||s>24)return!1;var o=parseInt(a[5]);if(o<0||o>60)return!1;var r=parseInt(a[6]);if(r<0||r>60)return!1;var c=new Date(e,i-1,n,s,o,r);this.leftTime=c,this.countDown(this),this.setInterValFunc(this)},beforeDestroy:function(){clearInterval(this.setTime)},methods:{setInterValFunc:function(t){this.setTime=setInterval((function(){t.countDown(t)}),1e3)},countDown:function(t){var a=t.leftTime-new Date;if(a>0)var e=parseInt(a/1e3/60/60/24,10),i=parseInt(a/1e3/60/60%24,10),n=parseInt(a/1e3/60%60,10),s=parseInt(a/1e3%60,10);else e=0,i=0,n=0,s=0;e<10&&(e="0"+e),i<10&&(i="0"+i),n<10&&(n="0"+n),s<10&&(s="0"+s),t.d=e,t.h=i,t.i=n,t.s=s}}};a.default=i},"237c":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */[data-v-affe0aa6]:export{theme_bg:#e93323}uni-page-body[data-v-affe0aa6]{background:url(https://static.shopsuite.cn/xcxfile/appicon/smashingEggs-bg.png) top no-repeat #cb1944;background-size:cover;box-sizing:border-box}body.?%PAGE?%[data-v-affe0aa6]{background:url(https://static.shopsuite.cn/xcxfile/appicon/smashingEggs-bg.png) top no-repeat #cb1944;background-size:cover}.activity-outdated[data-v-affe0aa6]{position:absolute;width:100%;height:100%;background:#f8f8f8}.box[data-v-affe0aa6]{margin:0 %?30?% %?30?%}.remainingcount[data-v-affe0aa6]{position:relative;margin-top:%?435?%;color:#ff0;font-size:%?36?%;text-align:center;font-weight:700}.egg-box[data-v-affe0aa6]{margin-top:%?120?%;text-align:center;position:relative}.egg[data-v-affe0aa6]{width:%?230?%;display:inline-block}.egg uni-image[data-v-affe0aa6]{width:100%}.hammer[data-v-affe0aa6]{position:absolute;width:%?150?%;height:%?150?%;background:url(https://static.shopsuite.cn/xcxfile/appicon/Hammer.png) top no-repeat;background-size:cover;z-index:5}.egg-top[data-v-affe0aa6]{margin-bottom:%?22?%}.winner-box[data-v-affe0aa6]{background:#fee39f;position:relative;padding-bottom:%?20?%;margin-top:%?130?%}.winner-title[data-v-affe0aa6]{text-align:center;color:#e93323;font-size:%?28?%;line-height:%?70?%;height:%?70?%;font-weight:700}.winner-img[data-v-affe0aa6]{width:%?150?%;position:absolute;left:%?-12?%;top:%?8?%}.winner-list[data-v-affe0aa6]{max-height:%?300?%;border:1px solid #e93323;margin:0 %?20?%;overflow:scroll;position:relative}.m-winner-item[data-v-affe0aa6]{height:%?50?%;color:#e93323;font-size:%?26?%;line-height:%?50?%;padding-left:%?30?%;box-sizing:border-box}.m-winner-item[data-v-affe0aa6]:nth-child(odd){background:#fad97c}.m-winner-item[data-v-affe0aa6]:nth-child(even){background:#fee39f}.prize-name[data-v-affe0aa6]{position:absolute;left:%?380?%}.rule-box[data-v-affe0aa6]{background:#fee39f;position:relative;margin-top:%?20?%;padding:%?70?% %?30?% %?30?%;font-size:%?26?%;line-height:%?40?%;color:#e93323}.mskprize[data-v-affe0aa6]{position:fixed;height:100%;width:100%;background-color:rgba(0,0,0,.7);z-index:5;top:0;left:0;display:flex;justify-content:center;align-items:center;color:#fff;text-align:center}.mskshare[data-v-affe0aa6]{position:fixed;height:100%;width:100%;background-color:rgba(0,0,0,.7);z-index:5;top:0;left:0}.share-oncemore[data-v-affe0aa6]{width:%?700?%;margin:0 auto}.share-text[data-v-affe0aa6]{margin:0 auto;font-size:%?40?%;line-height:%?80?%;color:#fff;text-align:center;margin-top:45%}.m-result-box[data-v-affe0aa6]{width:%?500?%;height:%?600?%;background:#db384b;position:relative;border-radius:%?20?%}.m-result-cancel[data-v-affe0aa6]{position:absolute;right:%?25?%;top:%?15?%;font-size:%?36?%}.m-success-text[data-v-affe0aa6]{line-height:%?80?%;margin-top:%?50?%;font-size:%?30?%}.m-success-img[data-v-affe0aa6]{width:%?250?%;height:%?250?%;background:#fff;margin:0 auto}.m-success-name[data-v-affe0aa6]{color:#ffac33;font-size:%?26?%;line-height:%?50?%;height:%?50?%}.m-success-bottom[data-v-affe0aa6]{position:absolute;bottom:%?40?%;line-height:%?65?%;font-size:%?28?%;display:flex;justify-content:center;width:100%}.succes-continue[data-v-affe0aa6]{height:%?65?%;width:%?200?%;background:#ffca3a;display:inline-block;border-radius:%?5?%}.succes-checkprice[data-v-affe0aa6]{height:%?65?%;width:%?200?%;background:#fff;color:#000;display:inline-block;border-radius:%?5?%;margin-right:%?30?%}.m-failimg-bg[data-v-affe0aa6]{width:%?350?%;height:%?350?%;border-radius:%?175?%;background-color:hsla(0,0%,100%,.1);margin:%?40?% auto %?20?%;padding:%?50?%;box-sizing:border-box}.m-fail-img[data-v-affe0aa6]{width:100%;height:100%;border-radius:%?150?%;background-color:hsla(0,0%,100%,.2)}.m-fail-name[data-v-affe0aa6]{font-size:%?26?%;line-height:%?50?%}.m-fail-button[data-v-affe0aa6]{width:%?300?%;height:%?65?%;line-height:%?65?%;position:absolute;bottom:%?40?%;background:#ffca3a;border-radius:%?5?%;font-size:%?28?%;left:%?100?%}.red-dot[data-v-affe0aa6]{width:%?20?%;height:%?20?%;border-radius:%?10?%;background:#e93323;position:fixed;bottom:%?220?%;right:%?20?%;z-index:5}.u-tap-btn[data-v-affe0aa6]{position:fixed;right:%?20?%;bottom:%?40?%}.u-go-home[data-v-affe0aa6]{border-radius:100%;width:%?80?%;height:%?80?%;border:1px solid #eee;font-size:%?20?%;text-align:center;background-color:#fff;box-shadow:0 %?4?% %?8?% rgba(0,0,0,.35);z-index:2;opacity:.8;line-height:%?80?%;margin-bottom:%?20?%}.u-go-home .iconfont[data-v-affe0aa6]{font-size:%?36?%}.move1[data-v-affe0aa6]{position:relative;animation:mymove1-data-v-affe0aa6 1s;-webkit-animation:mymove1-data-v-affe0aa6 1s reverse}@keyframes mymove1-data-v-affe0aa6{from{left:0}to{left:%?230?%}}@-webkit-keyframes mymove1-data-v-affe0aa6{from{left:0}to{left:%?230?%}}.move2[data-v-affe0aa6]{position:relative;animation:mymove2-data-v-affe0aa6 1s reverse;-webkit-animation:mymove2-data-v-affe0aa6 1s reverse}@keyframes mymove2-data-v-affe0aa6{from{top:0;left:0}to{top:%?285?%;left:%?115?%}}@-webkit-keyframes mymove2-data-v-affe0aa6{from{top:0;left:0}to{top:%?285?%;left:%?115?%}}.move3[data-v-affe0aa6]{position:relative;animation:mymove3-data-v-affe0aa6 1s reverse;-webkit-animation:mymove3-data-v-affe0aa6 1s reverse}@keyframes mymove3-data-v-affe0aa6{from{bottom:0;left:0}to{bottom:%?285?%;left:%?115?%}}@-webkit-keyframes mymove3-data-v-affe0aa6{from{bottom:0;left:0}to{bottom:%?285?%;left:%?115?%}}.move4[data-v-affe0aa6]{position:relative;animation:mymove4-data-v-affe0aa6 1s reverse;-webkit-animation:mymove4-data-v-affe0aa6 1s reverse}@keyframes mymove4-data-v-affe0aa6{from{right:0}to{right:%?230?%}}@-webkit-keyframes mymove4-data-v-affe0aa6{from{right:0}to{right:%?230?%}}.move5[data-v-affe0aa6]{position:relative;animation:mymove5-data-v-affe0aa6 1s reverse;-webkit-animation:mymove5-data-v-affe0aa6 1s reverse}@keyframes mymove5-data-v-affe0aa6{from{right:0}to{right:%?230?%}}@-webkit-keyframes mymove5-data-v-affe0aa6{from{right:0}to{right:%?230?%}}',""]),t.exports=a},"307b":function(t,a,e){"use strict";e.r(a);var i=e("b3c1"),n=e("5788");for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(s);e("7acb");var o=e("f0c5"),r=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"fe549e7a",null,!1,i["a"],void 0);a["default"]=r.exports},"316c":function(t,a,e){"use strict";e.r(a);var i=e("d865"),n=e.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(s);a["default"]=n.a},5788:function(t,a,e){"use strict";e.r(a);var i=e("06f8"),n=e.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(s);a["default"]=n.a},6218:function(t,a,e){"use strict";var i=e("9414"),n=e.n(i);n.a},"7acb":function(t,a,e){"use strict";var i=e("9a641"),n=e.n(i);n.a},9414:function(t,a,e){var i=e("237c");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("1e14183b",i,!0,{sourceMap:!1,shadowMode:!1})},"9a641":function(t,a,e){var i=e("ab62");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("e740f444",i,!0,{sourceMap:!1,shadowMode:!1})},a7f9:function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[t.isPage?[t.outdated?e("v-uni-view",{staticClass:"box"},[e("v-uni-view",{staticClass:"remainingcount"},[t._v("您还有"+t._s(t.RemainingCount)+"次机会")]),e("v-uni-view",{staticClass:"egg-box"},[e("v-uni-view",{staticClass:"hammer",attrs:{animation:"(animationData)"}}),e("v-uni-view",{staticClass:"egg-top"},[e("v-uni-view",{staticClass:"egg (move?'move1':'')",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.knock.apply(void 0,arguments)}}},[e("v-uni-image",{attrs:{"lazy-load":!0,src:t.ImgPath+"goldenEggs"+(1==t.selectImg?"-1":"")+".png",mode:"widthFix","data-num":1}})],1),e("v-uni-view",{staticClass:"egg (move?'move2':'')",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.knock.apply(void 0,arguments)}}},[e("v-uni-image",{attrs:{"lazy-load":!0,src:t.ImgPath+"goldenEggs"+(2==t.selectImg?"-1":"")+".png",mode:"widthFix","data-num":2}})],1)],1),e("v-uni-view",{staticClass:"egg-bottom"},[e("v-uni-view",{staticClass:"egg (move?'move3':'')",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.knock.apply(void 0,arguments)}}},[e("v-uni-image",{attrs:{"lazy-load":!0,src:t.ImgPath+"goldenEggs"+(3==t.selectImg?"-1":"")+".png",mode:"widthFix","data-num":3}})],1),e("v-uni-view",{staticClass:"egg (move?'move4':'')",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.knock.apply(void 0,arguments)}}},[e("v-uni-image",{attrs:{"lazy-load":!0,src:t.ImgPath+"goldenEggs"+(4==t.selectImg?"-1":"")+".png",mode:"widthFix","data-num":4}})],1),e("v-uni-view",{staticClass:"egg (move?'move5':'')",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.knock.apply(void 0,arguments)}}},[e("v-uni-image",{attrs:{"lazy-load":!0,src:t.ImgPath+"goldenEggs"+(5==t.selectImg?"-1":"")+".png",mode:"widthFix","data-num":5}})],1)],1)],1),e("v-uni-view",{staticClass:"winner-box"},[e("v-uni-view",{staticClass:"winner-title"},[t._v("本期中奖名单")]),e("v-uni-image",{staticClass:"winner-img",attrs:{"lazy-load":!0,src:t.ImgPath+"tip-1.png",mode:"widthFix"}}),e("v-uni-view",{staticClass:"winner-list"},[t.DrawInfo.winner_rows.items.length>0?[e("v-uni-swiper",{staticClass:"m-luckylist",attrs:{autoplay:"true",interval:"4000",duration:"2000",vertical:"false",circular:"true"}},t._l(t.rows,(function(a,i){return e("v-uni-swiper-item",{key:i},[t._l(t.DrawInfo.winner_rows.items,(function(a,n){return[n>=5*i&&n<=5*(i+1)?e("v-uni-view",{key:n+"_0",staticClass:"m-winner-item "},[t._v(t._s(a.user_nickname)+"砸中"),e("v-uni-label",{staticClass:"prize-name"},[t._v(t._s(a.awards_name))])],1):t._e()]}))],2)})),1)]:e("v-uni-view",{staticClass:"m-winner-item",staticStyle:{background:"#FEE39F"}},[t._v("暂无中奖名单数据")])],2)],1),e("v-uni-view",{staticClass:"rule-box"},[e("v-uni-image",{staticClass:"winner-img",attrs:{"lazy-load":!0,src:t.ImgPath+"tip-2.png",mode:"widthFix"}}),e("v-uni-rich-text",{attrs:{nodes:t.drawdesc}})],1)],1):e("v-uni-view",{staticClass:"activity-outdated"},[e("v-uni-view",{staticClass:"m-nullcontent"},[e("v-uni-view",{staticClass:"m-nullpage-middle"},[e("v-uni-label",{staticClass:"iconfont icon-meiyougengduo"}),e("v-uni-view",{staticClass:"m-null-tip"},[e("v-uni-text",[t._v("亲~您来晚了哦")]),e("v-uni-text",[t._v("该砸金蛋活动已经失效啦~")])],1)],1)],1)],1)]:t._e(),e("v-uni-view",{staticClass:"u-tap-btn"},[e("v-uni-navigator",{staticClass:"u-go-home",attrs:{url:"/member/member/prize?category=2"}},[e("v-uni-view",{staticClass:"iconfont icon-iconcanjiahuodong01"})],1),e("v-uni-view",{staticClass:"red-dot"}),e("v-uni-navigator",{staticClass:"u-go-home",attrs:{url:"/pages/index/index","open-type":"switchTab"}},[e("v-uni-view",{staticClass:"iconfont icon-shouyeshouye",staticStyle:{"font-size":"50rpx"}})],1)],1),t.clickmsk?e("v-uni-view",{staticClass:"mskprize",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.cancelprize.apply(void 0,arguments)}}},[t.PrizeResult.index>=0?e("v-uni-view",{staticClass:"m-result-box bounceIn animated",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.nothing.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"m-result-cancel",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.cancelprize.apply(void 0,arguments)}}},[t._v("✕")]),e("v-uni-view",{staticClass:"m-success-text"},[t._v("恭喜你获得了")]),e("v-uni-image",{staticClass:"m-success-img",attrs:{"lazy-load":!0,src:t.PrizeResult.awards_image}}),e("v-uni-view",{staticClass:"m-success-name"},[t._v(t._s(t.PrizeResult.prize))]),e("v-uni-view",{staticClass:"m-success-name"},[t._v(t._s(t.PrizeResult.awards_title))]),e("v-uni-view",{staticClass:"m-success-bottom"},[e("v-uni-navigator",{staticClass:"succes-checkprice",attrs:{url:"/member/member/prize?category=2"}},[t._v("查看奖品")]),e("v-uni-view",{staticClass:"succes-continue",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.cancelprize.apply(void 0,arguments)}}},[t._v("继续抽奖")])],1)],1):e("v-uni-view",{staticClass:"m-result-box wobble animated",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.nothing.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"m-result-cancel",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.cancelprize.apply(void 0,arguments)}}},[t._v("✕")]),e("v-uni-view",{staticClass:"m-failimg-bg"},[e("v-uni-image",{staticClass:"m-fail-img",attrs:{"lazy-load":!0,src:"https://static.shopsuite.cn/xcxfile/appicon/img/nothing.png"}})],1),e("v-uni-view",{staticClass:"m-fail-name"},[t._v(t._s(t.DrawInfo.LosingDesc))]),e("v-uni-view",{staticClass:"m-fail-button",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.cancelprize.apply(void 0,arguments)}}},[t._v("继续抽奖")])],1)],1):t._e(),t.clickshare?e("v-uni-view",{staticClass:"mskshare",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.cancelshare.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"share-text"},[e("v-uni-view",[t._v("你今天已经没有砸蛋机会了")]),e("v-uni-view",[t._v("分享给好友或者群聊")]),e("v-uni-view",[t._v("将额外获得"),e("v-uni-label",[t._v(t._s(t.DrawInfo.IncreasementFromShare)+"次")]),t._v("砸蛋机会")],1),e("v-uni-button",{staticClass:"u-btn u-btn-default",attrs:{"open-type":"share"}},[t._v("分享给好友")])],1)],1):t._e()],2)},n=[]},ab62:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-countdown[data-v-fe549e7a]{padding:%?2?% 0;flex-wrap:nowrap;justify-content:center}.uni-countdown-splitor[data-v-fe549e7a]{width:auto!important;justify-content:center;line-height:%?44?%;padding:0 %?5?%}.uni-countdown-numbers[data-v-fe549e7a]{line-height:%?44?%;width:auto!important;padding:0 %?10?%;justify-content:center;height:%?44?%;border-radius:%?8?%;margin:0 %?5?%;border:1px solid #000;font-size:%?22?%}',""]),t.exports=a},b3c1:function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-label",[t._v(t._s(0==t.Type?t.__("距开始"):t.__("仅剩"))+t._s(t.d)+t._s(t.__("天"))+t._s(t.h)+":"+t._s(t.i)+":"+t._s(t.s))])},n=[]},d0e6:function(t,a,e){"use strict";e.r(a);var i=e("a7f9"),n=e("316c");for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(s);e("6218");var o=e("f0c5"),r=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"affe0aa6",null,!1,i["a"],void 0);a["default"]=r.exports},d865:function(t,a,e){"use strict";e("7a82");var i=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("e25e"),e("14d9"),e("ac1f"),e("5319");var n=i(e("5530")),s=i(e("4e4b")),o=i(e("307b")),r=e("26cb"),c={data:function(){return{options:{},click:!1,clickmsk:!1,clickshare:!1,drawdesc:[],DrawInfo:{},RemainingCount:0,PrizeResult:{},rows:[],Coupons:[],isCancelSuccess:!0,isCancel:!0,CouponAmount:0,user_is_new:0,isPage:!1,outdated:!1,ImgPath:"",animationData:{},selectImg:0,move:!1,activity_id:0}},components:{dayCountdown:o.default},computed:(0,r.mapState)(["Config","StateCode","notice","plantformInfo","shopInfo","userInfo","hasLogin"]),onLoad:function(t){uni.setNavigationBarTitle({title:this.__("砸金蛋")});var a=this;a.setData({activity_id:t.activity_id||0,options:t}),s.default.isNull(this.userInfo)?this.getUserInfo((function(){a.setData({user_is_new:this.userInfo.user_is_new,CouponAmount:this.userInfo.CouponAmount}),a.initData()}),t.uid):a.initData()},onShow:function(){var t=s.default.createAnimation({duration:500,timingFunction:"ease"});this.animation=t,this.animation.top(0).left(0).step(),this.setData({animationData:this.animation.export()})},methods:(0,n.default)((0,n.default)({},(0,r.mapMutations)(["login","logout","getPlantformInfo","forceUserInfo","getUserInfo"])),{},{knock:function(t){if(!this.click){if(this.setData({click:!0}),this.RemainingCount>0)this.getPosition();else if(0==this.RemainingCount)return void this.setData({clickshare:!0});this.animation.top(t.changedTouches[0].pageY-375).left(t.changedTouches[0].pageX-75).step(),this.setData({animationData:this.animation.export()}),setTimeout(function(){this.animation.translateX(-25).rotate(-120).step(),this.setData({animationData:this.animation.export()})}.bind(this),500),setTimeout(function(){this.animation.translateX(25).rotate(60).step(),this.setData({animationData:this.animation.export()})}.bind(this),1e3),setTimeout(function(){this.setData({selectImg:t.target.dataset.num})}.bind(this),1200)}},onShareAppMessage:function(){var t=this;return this.setData({clickshare:!1,click:!1}),{title:"我已经中奖啦，你也赶紧来砸金蛋吧~",desc:"幸运砸金蛋，快来参与吧~",path:"/activity/smashgoldeneggs/smashgoldeneggs?uid="+this.userInfo.user_id,success:function(a){t.sharefriend()}}},sharefriend:function(){var t=this;s.default.xsr1(s.default.makeUrl(activityapi.ShareLuckyDraw,{Category:2}),(function(a){0==a.Code&&null!=a.Info&&(t.setData({RemainingCount:t.RemainingCount}),t.initData())}))},initData:function(){var t=this,a={activity_type:2,activity_type_id:this.StateCode.ACTIVITY_TYPE_LOTTERY,activity_id:this.activity_id};s.default.request({url:this.Config.URL.user.listsLottery,data:a,success:function(a,e,i,n){if(t.setData({isPage:!0,ImgPath:t.plantformInfo.AppIconPath}),200==e){if(t.setData({DrawInfo:a,RemainingCount:a.remaining_count,outdated:a.outdated,activity_id:a.activity_id}),t.DrawInfo.winner_rows.items.length>0){for(var o=t.DrawInfo.winner_rows.items.length%5>0?parseInt(t.DrawInfo.winner_rows.items.length/5+1):t.DrawInfo.winner_rows.items.length/5,r=[],c=0;c<o;c++)r.push(c);t.setData({rows:r})}s.default.isNull(a.activity_rule.activity_intro)&&(this.drawdesc=a.activity_rule.activity_intro.replace(/\\/g,"").replace(/<img/g,'<img style="display:none;"'),this.setData({drawdesc:drawdesc}))}else t.setData({outdated:!1})}})},getPosition:function(){var t={activity_id:this.activity_id},a=this;s.default.request({url:this.Config.URL.user.doLottery,data:t,success:function(t,e,i,n){200==e?(a.setData({PrizeResult:t}),setTimeout((function(){a.setData({clickmsk:!0})}),2e3)):(s.default.alert("抽奖失败"),a.setData({click:!1}))}})},cancelprize:function(){this.animation.top(0).left(0).translateX(0).rotate(0).step(),this.setData({clickmsk:!1,selectImg:0,animationData:this.animation.export(),move:!0});var t=this;setTimeout((function(){t.setData({move:!1})}),1e3),setTimeout((function(){t.setData({click:!1})}),1200),this.initData()},cancelshare:function(){this.setData({clickshare:!1}),this.setData({prize:-1,times:0,click:!1})},nothing:function(){},doReceive:function(){this.cancel(),this.userReceiveCoupon()},cancel:function(){this.setData({isCancel:!1})},cancelsuccess:function(){this.setData({isCancelSuccess:!0})},innertouch:function(){},userReceiveCoupon:function(){var t={activity_id:this.activity_id,activity_type:2,activity_type_id:this.StateCode.ACTIVITY_TYPE_LOTTERY},a=this;s.default.request({url:this.Config.URL.user.listsLotteryHistory,data:t,success:function(t,e,i,n){200==e?a.setData({isCancelSuccess:!1,Coupons:t.items}):s.default.alert(i)}})}})};a.default=c}}]);