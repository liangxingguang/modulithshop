(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["activity-giftbag-list"],{"0774":function(t,i,a){"use strict";var e=a("1a3f"),n=a.n(e);n.a},"0d3b":function(t,i,a){var e=a("c86c");i=e(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */[data-v-7a3c151e]:export{theme_bg:#e93323}.m-coupon-item[data-v-7a3c151e]{width:%?710?%;height:%?448?%;background:#fff;box-shadow:0 0 %?4?% rgba(0,0,0,.16);opacity:1;border-radius:%?16?%;margin:%?24?% %?20?%;overflow:hidden}.m-activity-image[data-v-7a3c151e]{width:100%;height:%?328?%;background:transparent;opacity:1;border-radius:16px %?16?% 0 0}.m-activity-info[data-v-7a3c151e]{padding:%?16?% %?20?%}.m-activity-title[data-v-7a3c151e]{font-size:%?30?%;font-family:PingFang SC;font-weight:700;line-height:%?42?%;color:#002951;opacity:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.m-activity-tips[data-v-7a3c151e]{font-size:%?24?%;font-family:PingFang SC;font-weight:400;line-height:%?34?%;color:#002951;opacity:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:10px}.price-content-box[data-v-7a3c151e]{position:absolute;left:%?-35?%;text-align:center;width:%?220?%}.price-content-box uni-label[data-v-7a3c151e]{font-size:%?32?%}.closeRPK[data-v-7a3c151e]{width:%?50?%;height:%?50?%;position:absolute;left:50%;margin-left:%?-30?%;bottom:%?-80?%}.ap[data-v-7a3c151e]{color:red;font-size:16px;font-weight:700}',""]),t.exports=i},"1a3f":function(t,i,a){var e=a("0d3b");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("967d").default;n("1ad0c688",e,!0,{sourceMap:!1,shadowMode:!1})},"4da8":function(t,i,a){"use strict";a.d(i,"b",(function(){return e})),a.d(i,"c",(function(){return n})),a.d(i,"a",(function(){}));var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"page"},[a("v-uni-view",{staticClass:"m-coupon-list"},[t.giftbagList.length>0?[t._l(t.giftbagList,(function(i,e){return a("v-uni-navigator",{key:e,staticClass:"m-coupon-item",attrs:{url:"/activity/giftbag/detail?aid="+i.activity_id}},[a("v-uni-view",{staticClass:"m-activity-image"},[a("v-uni-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:i.activity_rule_json.giftbag.giftbag_image}})],1),a("v-uni-view",{staticClass:"m-activity-info"},[a("v-uni-view",{staticClass:"m-activity-title"},[a("v-uni-label",[t._v(t._s(i.activity_rule_json.giftbag.activity_bag_category))])],1),a("v-uni-view",{staticClass:"m-activity-tips"},[a("v-uni-label",[t._v(t._s(i.activity_name))]),a("v-uni-label",{staticClass:"gift-rule",staticStyle:{float:"right"}},[t._v(t._s(t.__(" 套餐价 "))),a("span",{staticClass:"ap"},[t._v(t._s(t.__("￥"))+t._s(i.activity_rule_json.giftbag.giftbag_amount))])])],1)],1)],1)})),a("v-uni-view",{staticClass:"m-loading-box"},[t.ispage1?[a("v-uni-view",{staticClass:"u-loadmore"},[a("v-uni-label",{staticClass:"u-loading"}),a("v-uni-text",{staticClass:"u-loadmore-tips"},[t._v(t._s(t.__("正在加载")))])],1)]:[a("v-uni-view",{staticClass:"u-loadmore u-loadmore-line"},[a("v-uni-text",{staticClass:"u-loadmore-tips"},[t._v(t._s(t.__("没有更多数据啦！")))])],1)]],2)]:a("v-uni-view",{staticClass:"m-nullcontent"},[a("v-uni-view",{staticClass:"m-nullpage-middle"},[a("v-uni-label",{staticClass:"iconfont icon-meiyougengduo"}),a("v-uni-view",{staticClass:"m-null-tip"},[a("v-uni-text",[t._v(t._s(t.__("亲~什么都没有")))])],1)],1)],1)],2)],1)},n=[]},"851a":function(t,i,a){"use strict";a.r(i);var e=a("4da8"),n=a("a8fc");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(i,t,(function(){return n[t]}))}(s);a("0774");var o=a("828b"),c=Object(o["a"])(n["default"],e["b"],e["c"],!1,null,"7a3c151e",null,!1,e["a"],void 0);i["default"]=c.exports},a8fc:function(t,i,a){"use strict";a.r(i);var e=a("f30b"),n=a.n(e);for(var s in e)["default"].indexOf(s)<0&&function(t){a.d(i,t,(function(){return e[t]}))}(s);i["default"]=n.a},f30b:function(t,i,a){"use strict";a("6a54");var e=a("f5bd").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,a("c223"),a("e966");var n=e(a("9b1b")),s=(e(a("c603")),a("8f59")),o={data:function(){return{options:{},ispage:!1,giftbagList:[],Coupons:[],flag:!0,Id:0,Code:"",index:0,needed_point:0,store_id:0,activity_state:1,page:1,isdata:!1}},computed:(0,s.mapState)(["Config","StateCode","notice","plantformInfo","shopInfo","userInfo","hasLogin"]),onLoad:function(t){uni.setNavigationBarTitle({title:this.__("礼包专区")}),this.setData({options:t});this.getGiftbaglist()},onReachBottom:function(){this.scrollbottom()},methods:(0,n.default)((0,n.default)({},(0,s.mapMutations)(["login","logout","getPlantformInfo","forceUserInfo","getUserInfo"])),{},{getGiftbaglist:function(){var t={activity_type_id:this.StateCode.ACTIVITY_TYPE_GIFTBAG,activity_state:this.activity_state,page:this.page},i=this;i.$.request({url:this.Config.URL.marketing.list,data:t,success:function(t,a,e,n){200==a&&t.items.length>0?(t.page>=t.total?i.setData({flag:!1,ispage:!1,giftbagList:i.giftbagList.concat(t.items)}):i.setData({flag:!0,ispage:!0,giftbagList:i.giftbagList.concat(t.items)}),i.setData({isdata:!0})):i.setData({flag:!1,ispage:!1,isdata:!1})},fail:function(t){i.setData({flag:!1,ispage:!1})}})},scrollbottom:function(t){if(this.flag){var i=this;i.setData({flag:!1}),clearTimeout(e);var a=this.post;a.curpage=parseInt(i.post.curpage)+1;var e=setTimeout((function(){i.setData({post:a}),i.GetPlist()}),500)}}})};i.default=o}}]);