(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["activity-smashgoldeneggs-list"],{"08be":function(t,i,a){var e=a("4158");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("967d").default;n("e740f444",e,!0,{sourceMap:!1,shadowMode:!1})},"0cac":function(t,i,a){var e=a("a35c");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("967d").default;n("739698f2",e,!0,{sourceMap:!1,shadowMode:!1})},"10f8":function(t,i,a){"use strict";a.r(i);var e=a("1f48"),n=a("a922");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(i,t,(function(){return n[t]}))}(s);a("b7b6");var r=a("828b"),o=Object(r["a"])(n["default"],e["b"],e["c"],!1,null,"3033b981",null,!1,e["a"],void 0);i["default"]=o.exports},"1f48":function(t,i,a){"use strict";a.d(i,"b",(function(){return e})),a.d(i,"c",(function(){return n})),a.d(i,"a",(function(){}));var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",[a("v-uni-view",{staticClass:"m-product-all"},[a("v-uni-view",{staticClass:"m-tab"},[a("v-uni-view",{staticClass:"m-navbar"},[a("v-uni-view",{class:"m-navbar-item "+(1==t.tapindex?"m-navbar-item-on":""),on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.groupLists.apply(void 0,arguments)}}},[t._v(t._s(t.__("进行中")))]),a("v-uni-view",{class:"m-navbar-item "+(2==t.tapindex?"m-navbar-item-on":""),on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toBeGroupLists.apply(void 0,arguments)}}},[t._v(t._s(t.__("即将开始")))])],1)],1),a("v-uni-view",{class:1==t.tapindex?"":"hide",staticStyle:{"font-size":"28rpx"}},[t.pdlist.length>0?a("v-uni-scroll-view",{staticClass:"m-orderlist",staticStyle:{width:"100%",height:"100%",position:"absolute","padding-top":"80rpx","box-sizing":"border-box"},attrs:{"scroll-y":"true"},on:{scrolltolower:function(i){arguments[0]=i=t.$handleEvent(i),t.scrollbottom.apply(void 0,arguments)}}},[t._l(t.pdlist,(function(i,e){return[a("v-uni-navigator",{key:e+"_0",staticClass:"m-product-item m-product-GP",attrs:{url:(2==i.activity_type?"/activity/smashgoldeneggs/detail?activity_id=":"/activity/luckydraw/detail?activity_id=")+i.activity_id}},[a("v-uni-view",{staticClass:"m-product-img"},[a("v-uni-image",{attrs:{"lazy-load":!0,src:i.activity_rule.lottery_image}})],1),a("v-uni-view",{staticClass:"m-product-info"},[a("v-uni-view",{staticClass:"m-product-name"},[a("v-uni-label",[a("v-uni-text",{staticClass:"u-tuan-label"},[t._v(t._s(2==i.activity_type?"砸":"幸"))]),t._v(t._s(i.activity_name))],1),a("v-uni-view",{staticClass:"groupNumber"})],1),a("v-uni-view",{staticClass:"m-product-price",staticStyle:{"font-size":"38rpx"}},[a("v-uni-label",[a("day-countdown",{attrs:{timer:i.activity_endtime,Type:1}})],1),a("v-uni-button",{staticClass:"u-btn u-btn-default"},[t._v(t._s(t.__("立即参与")))])],1)],1)],1)]})),a("v-uni-view",{staticClass:"m-loading-box"},[t.ispage?[a("v-uni-view",{staticClass:"u-loadmore"},[a("v-uni-label",{staticClass:"u-loading"}),a("v-uni-text",{staticClass:"u-loadmore-tips"},[t._v(t._s(t.__("正在加载")))])],1)]:[a("v-uni-view",{staticClass:"u-loadmore u-loadmore-line"},[a("v-uni-text",{staticClass:"u-loadmore-tips"},[t._v(t._s(t.__("没有更多数据啦！")))])],1)]],2)],2):a("v-uni-view",{staticClass:"m-nullpage",attrs:{redirect:"true"}},[a("v-uni-view",{staticClass:"m-nullpage-middle"},[a("v-uni-view",{staticClass:"m-null-tip"},[a("v-uni-text",[t._v(t._s(t.__("亲，活动正在准备中~")))])],1)],1)],1)],1),a("v-uni-view",{class:2==t.tapindex?"":"hide",staticStyle:{"font-size":"28rpx"}},[t.fglist.length>0?a("v-uni-scroll-view",{staticClass:"m-orderlist",staticStyle:{width:"100%",height:"100%",position:"absolute","padding-top":"66rpx","box-sizing":"border-box"},attrs:{"scroll-y":"true"},on:{scrolltolower:function(i){arguments[0]=i=t.$handleEvent(i),t.scrollbottomtwo.apply(void 0,arguments)}}},[t._l(t.fglist,(function(i,e){return[a("v-uni-view",{key:e+"_0",staticClass:"m-product-item m-product-GP"},[a("v-uni-view",{staticClass:"m-product-img"},[a("v-uni-image",{attrs:{"lazy-load":!0,src:i.activity_rule.product_image}})],1),a("v-uni-view",{staticClass:"m-product-info"},[a("v-uni-view",{staticClass:"m-product-name"},[a("v-uni-label",[a("v-uni-text",{staticClass:"u-tuan-label"},[t._v("拼")]),t._v(t._s(i.activity_rule.item_name))],1),a("v-uni-view",{staticClass:"groupNumber"},[a("day-countdown",{attrs:{timer:i.activity_endtime,Type:0}})],1)],1),a("v-uni-view",{staticClass:"m-product-price"},[a("v-uni-label",[t._v(t._s(t.__("￥")))]),t._v(t._s(i.activity_rule.group_sale_price)),a("v-uni-label",{staticClass:"u-del-price"},[t._v(t._s(t.__("￥"))+t._s(i.activity_rule.item_unit_price))]),a("v-uni-button",{staticClass:"u-btn u-btn-default",staticStyle:{background:"#bdbdbd"}},[t._v(t._s(t.__("立即开团")))])],1)],1)],1)]})),a("v-uni-view",{staticClass:"m-loading-box"},[t.ispage1?[a("v-uni-view",{staticClass:"u-loadmore"},[a("v-uni-label",{staticClass:"u-loading"}),a("v-uni-text",{staticClass:"u-loadmore-tips"},[t._v(t._s(t.__("正在加载")))])],1)]:[a("v-uni-view",{staticClass:"u-loadmore u-loadmore-line"},[a("v-uni-text",{staticClass:"u-loadmore-tips"},[t._v(t._s(t.__("没有更多数据啦！")))])],1)]],2)],2):a("v-uni-view",{staticClass:"m-nullpage",attrs:{redirect:"true"}},[a("v-uni-view",{staticClass:"m-nullpage-middle"},[a("v-uni-view",{staticClass:"m-null-tip"},[a("v-uni-text",[t._v(t._s(t.__("亲，活动正在准备中~")))])],1)],1)],1)],1)],1)],1)},n=[]},"3b67":function(t,i,a){"use strict";a("6a54");var e=a("f5bd").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,a("bf0f"),a("2797"),a("5c47"),a("a1c1"),a("c223"),a("e966");var n=e(a("9b1b")),s=e(a("c603")),r=e(a("9147")),o=a("8f59"),u={data:function(){return{viewtype:0,pdlist:[],fglist:[],flag:!0,ispage:!0,scposition:"",page:1,istop:!1,isdata:!1,tapindex:1,activity_state:1}},components:{dayCountdown:r.default},computed:(0,o.mapState)(["Config","StateCode","notice","plantformInfo","shopInfo","userInfo","hasLogin"]),onLoad:function(t){uni.setNavigationBarTitle({title:this.__("抽奖活动")}),this.InitData()},methods:(0,n.default)((0,n.default)({},(0,o.mapMutations)(["login","logout","getPlantformInfo","forceUserInfo","getUserInfo"])),{},{InitData:function(){var t=this;t.setData({pdlist:[]});var i={activity_type_id:this.StateCode.ACTIVITY_TYPE_LOTTERY,activity_state:this.activity_state,page:this.page};s.default.request({url:this.Config.URL.store.activity,data:i,success:function(i,a,e,n){if(200==a&&i.items.length>0){var s=(new Date).getTime();i.items.forEach((function(t,a){var e=new Date(t.activity_endtime.replace(/-/g,"/")).getTime();i.items[a].Time=e-s})),i.page>=i.total?t.setData({flag:!1,ispage:!1,isdata:!0,pdlist:t.pdlist.concat(i.items)}):t.setData({flag:!0,ispage:!0,isdata:!0,pdlist:t.pdlist.concat(i.items)})}else t.setData({flag:!1,ispage:!1,isdata:!1})}})},groupLists:function(){this.setData({tapindex:1,page:1,rows:10,orderlist:[],activity_state:this.StateCode.ACTIVITY_STATE_NORMAL}),this.InitData()},toBeGroupLists:function(){this.setData({tapindex:2,page:1,rows:10,orderlist:[],activity_state:this.StateCode.ACTIVITY_STATE_WAITING}),this.InitPaging()},InitPaging:function(){var t={store_id:this.shopInfo.store_id,activity_type_id:this.StateCode.ACTIVITY_TYPE_GROUPBOOKING,activity_state:this.activity_state,page:this.page},i=this;s.default.request({url:this.Config.URL.store.activity,data:t,success:function(t,a,e,n){if(200==a&&t.items.length>0){var s=(new Date).getTime();t.items.forEach((function(i,a){var e=new Date(i.activity_endtime.replace(/-/g,"/")).getTime();t.items[a].Time=e-s})),t.page>=t.total?i.setData({flag:!1,ispage:!1,isdata:!0,fglist:i.fglist.concat(t.items)}):i.setData({flag:!0,ispage:!0,isdata:!0,fglist:i.fglist.concat(t.items)})}else i.setData({flag:!1,ispage:!1,isdata:!1})}})},viewType:function(t){0==this.viewtype?this.setData({viewtype:1}):this.setData({viewtype:0})},scrollbottom:function(t){var i=this;if(this.flag){t.setData({flag:!1}),clearTimeout(a);var a=setTimeout((function(){i.setData({page:parseInt(i.page)+1}),i.activity_state==i.StateCode.ACTIVITY_STATE_NORMAL&&this.InitData(),i.activity_state==i.StateCode.ACTIVITY_STATE_WAITING&&this.InitPaging()}),500)}},returnTop:function(){this.setData({scposition:0})}})};i.default=u},4158:function(t,i,a){var e=a("c86c");i=e(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-countdown[data-v-fe549e7a]{padding:%?2?% 0;flex-wrap:nowrap;justify-content:center}.uni-countdown-splitor[data-v-fe549e7a]{width:auto!important;justify-content:center;line-height:%?44?%;padding:0 %?5?%}.uni-countdown-numbers[data-v-fe549e7a]{line-height:%?44?%;width:auto!important;padding:0 %?10?%;justify-content:center;height:%?44?%;border-radius:%?8?%;margin:0 %?5?%;border:1px solid #000;font-size:%?22?%}',""]),t.exports=i},"847b":function(t,i,a){"use strict";a.d(i,"b",(function(){return e})),a.d(i,"c",(function(){return n})),a.d(i,"a",(function(){}));var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-label",[t._v(t._s(0==t.Type?t.__("距开始"):t.__("仅剩"))+t._s(t.d)+t._s(t.__("天"))+t._s(t.h)+":"+t._s(t.i)+":"+t._s(t.s))])},n=[]},"86e3":function(t,i,a){"use strict";a.r(i);var e=a("aff2"),n=a.n(e);for(var s in e)["default"].indexOf(s)<0&&function(t){a.d(i,t,(function(){return e[t]}))}(s);i["default"]=n.a},9147:function(t,i,a){"use strict";a.r(i);var e=a("847b"),n=a("86e3");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(i,t,(function(){return n[t]}))}(s);a("bb1b");var r=a("828b"),o=Object(r["a"])(n["default"],e["b"],e["c"],!1,null,"fe549e7a",null,!1,e["a"],void 0);i["default"]=o.exports},a35c:function(t,i,a){var e=a("c86c");i=e(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */[data-v-3033b981]:export{theme_bg:#e93323}\r\n/*全部商品 start*/.groupNumber[data-v-3033b981]{position:absolute;bottom:0;left:0;font-size:%?24?%;color:#db384c;background:#fbebeb;text-align:center;padding:0 %?10?%}.groupNumber .icon-icon[data-v-3033b981]{font-size:%?24?%;display:inline}.groupNumber uni-text[data-v-3033b981]{color:#ffc001;margin:0 %?2?%}.progressBarBox[data-v-3033b981]{position:absolute;right:0;bottom:0;color:#888;font-size:%?24?%;margin-right:%?20?%}.u-progressBar[data-v-3033b981]{display:inline-block;width:%?140?%;height:%?20?%;background-color:#d5d5d5;border-radius:%?20?%;overflow:hidden}.u-progressBar-cont[data-v-3033b981]{height:%?20?%;background-color:#ffc001}.m-product-price .u-btn[data-v-3033b981]{padding:0;margin:0 %?20?%;width:%?160?%;float:right;font-size:%?24?%;line-height:%?50?%;margin-top:%?10?%}.m-product-GP[data-v-3033b981]{height:%?232?%}.m-product-GP .m-product-img[data-v-3033b981]{height:%?223?%;width:%?223?%}.m-product-GP .m-product-price[data-v-3033b981]{line-height:%?80?%;margin-top:%?5?%}.m-product-GP .m-product-info[data-v-3033b981]{height:%?232?%;width:%?518?%}.u-del-price[data-v-3033b981]{color:#888;font-size:%?20?%;text-decoration:line-through}\r\n/*全部商品 end*/\r\n/*顶部提示*/.u-toptip[data-v-3033b981]{height:%?60?%}.u-toptip .u-loadmore[data-v-3033b981]{margin-top:0;margin-bottom:0;position:relative;top:%?20?%}\r\n/*顶部提示*/.m-navbar-item[data-v-3033b981]{padding:%?20?% 0;font-size:%?24?%}.m-navbar-item[data-v-3033b981]:after{border:none}.m-navbar-item.m-navbar-item-on[data-v-3033b981]{background-color:#fff;color:#db384c}.m-navbar-item.m-navbar-item-on[data-v-3033b981]::before{content:" ";position:absolute;left:0;bottom:0;right:0;height:%?6?%;border-bottom:%?6?% solid #db384c;color:#ccc;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5);z-index:3}.m-tab[data-v-3033b981]{position:fixed;width:100%;top:var(--window-top);z-index:999}',""]),t.exports=i},a922:function(t,i,a){"use strict";a.r(i);var e=a("3b67"),n=a.n(e);for(var s in e)["default"].indexOf(s)<0&&function(t){a.d(i,t,(function(){return e[t]}))}(s);i["default"]=n.a},aff2:function(t,i,a){"use strict";a("6a54"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,a("64aa"),a("5c47"),a("2c10"),a("e966");var e={name:"day-countdown",props:{bgrColor:{type:String,default:"#FFFFFF"},borderColor:{type:String,default:"#000000"},fontColor:{type:String,value:"#000000"},splitorColor:{type:String,default:"#000000"},timer:{type:String,default:""},Type:{type:Number,default:0}},data:function(){return{setTime:null,d:"00",h:"00",i:"00",s:"00",leftTime:0}},created:function(t){var i=this.timer.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2})$/);if(null==i)return!1;var a=parseInt(i[1]);if(a<1e3)return!1;var e=parseInt(i[2]),n=parseInt(i[3]),s=parseInt(i[4]);if(s<0||s>24)return!1;var r=parseInt(i[5]);if(r<0||r>60)return!1;var o=parseInt(i[6]);if(o<0||o>60)return!1;var u=new Date(a,e-1,n,s,r,o);this.leftTime=u,this.countDown(this),this.setInterValFunc(this)},beforeDestroy:function(){clearInterval(this.setTime)},methods:{setInterValFunc:function(t){this.setTime=setInterval((function(){t.countDown(t)}),1e3)},countDown:function(t){var i=t.leftTime-new Date;if(i>0)var a=parseInt(i/1e3/60/60/24,10),e=parseInt(i/1e3/60/60%24,10),n=parseInt(i/1e3/60%60,10),s=parseInt(i/1e3%60,10);else a=0,e=0,n=0,s=0;a<10&&(a="0"+a),e<10&&(e="0"+e),n<10&&(n="0"+n),s<10&&(s="0"+s),t.d=a,t.h=e,t.i=n,t.s=s}}};i.default=e},b7b6:function(t,i,a){"use strict";var e=a("0cac"),n=a.n(e);n.a},bb1b:function(t,i,a){"use strict";var e=a("08be"),n=a.n(e);n.a}}]);