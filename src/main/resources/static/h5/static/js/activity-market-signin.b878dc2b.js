(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["activity-market-signin"],{"06f8":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("ac1f"),i("466d"),i("e25e");var a={name:"day-countdown",props:{bgrColor:{type:String,default:"#FFFFFF"},borderColor:{type:String,default:"#000000"},fontColor:{type:String,value:"#000000"},splitorColor:{type:String,default:"#000000"},timer:{type:String,default:""},Type:{type:Number,default:0}},data:function(){return{setTime:null,d:"00",h:"00",i:"00",s:"00",leftTime:0}},created:function(t){var e=this.timer.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2})$/);if(null==e)return!1;var i=parseInt(e[1]);if(i<1e3)return!1;var a=parseInt(e[2]),n=parseInt(e[3]),s=parseInt(e[4]);if(s<0||s>24)return!1;var r=parseInt(e[5]);if(r<0||r>60)return!1;var u=parseInt(e[6]);if(u<0||u>60)return!1;var o=new Date(i,a-1,n,s,r,u);this.leftTime=o,this.countDown(this),this.setInterValFunc(this)},beforeDestroy:function(){clearInterval(this.setTime)},methods:{setInterValFunc:function(t){this.setTime=setInterval((function(){t.countDown(t)}),1e3)},countDown:function(t){var e=t.leftTime-new Date;if(e>0)var i=parseInt(e/1e3/60/60/24,10),a=parseInt(e/1e3/60/60%24,10),n=parseInt(e/1e3/60%60,10),s=parseInt(e/1e3%60,10);else i=0,a=0,n=0,s=0;i<10&&(i="0"+i),a<10&&(a="0"+a),n<10&&(n="0"+n),s<10&&(s="0"+s),t.d=i,t.h=a,t.i=n,t.s=s}}};e.default=a},2646:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */[data-v-6d9389a7]:export{theme_bg:#e93323}.m-activity-item[data-v-6d9389a7]{width:100%;height:%?240?%;margin-bottom:%?20?%;background:#fff}.m-activity-img[data-v-6d9389a7]{padding:%?20?%;width:%?260?%;height:%?200?%;float:left}.m-activity-info[data-v-6d9389a7]{width:%?450?%;height:100%;float:left;padding:%?20?%;box-sizing:border-box}.m-activity-name[data-v-6d9389a7]{font-size:16px;margin-bottom:%?40?%;margin-top:%?10?%;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.gray[data-v-6d9389a7]{font-size:%?35?%;color:grey;display:inline-block}.m-activity-time[data-v-6d9389a7]{margin-left:%?10?%;margin-right:%?20?%;font-size:%?26?%;color:#888}.btn_box[data-v-6d9389a7]{padding-top:%?20?%}.u-label[data-v-6d9389a7]{width:%?100?%}',""]),t.exports=e},"26ca":function(t,e,i){"use strict";var a=i("e6b8"),n=i.n(a);n.a},2929:function(t,e,i){"use strict";i.r(e);var a=i("520b"),n=i("ad2f");for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("26ca");var r=i("f0c5"),u=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"6d9389a7",null,!1,a["a"],void 0);e["default"]=u.exports},"307b":function(t,e,i){"use strict";i.r(e);var a=i("b3c1"),n=i("5788");for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("7acb");var r=i("f0c5"),u=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"fe549e7a",null,!1,a["a"],void 0);e["default"]=u.exports},"520b":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"m-activity-item"},[i("v-uni-image",{staticClass:"m-activity-img",attrs:{src:"EventMainPic",mode:"aspectFill"}}),i("v-uni-view",{staticClass:"m-activity-info"},[i("v-uni-view",{staticClass:"m-activity-name"},[t._v(t._s(t.Title))]),i("v-uni-label",{staticClass:"iconfont icon-shijian gray"}),i("v-uni-label",{staticClass:"m-activity-time"},[t._v(t._s(t.EventTime))])],1)],1),i("v-uni-view",{staticClass:"m-cells m-cells-form"},[i("v-uni-view",{staticClass:"m-cell"},[i("v-uni-view",{staticClass:"m-cell-hd"},[i("v-uni-label",{staticClass:"u-label"},[t._v(t._s(t.__("姓名"))+"：")])],1),i("v-uni-view",{staticClass:"m-cell-bd"},[i("v-uni-input",{staticClass:"u-input",attrs:{type:"text",placeholder:t.__("请输入姓名")},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputname.apply(void 0,arguments)}}})],1),t.isName?t._e():i("v-uni-view",{staticClass:"m-cell-ft"},[i("v-uni-icon",{staticClass:"m-icon-warn",attrs:{type:"warn"}})],1)],1),i("v-uni-view",{staticClass:"m-cell"},[i("v-uni-view",{staticClass:"m-cell-hd"},[i("v-uni-label",{staticClass:"u-label"},[t._v(t._s(t.__("电话"))+"：")])],1),i("v-uni-view",{staticClass:"m-cell-bd"},[i("v-uni-input",{staticClass:"u-input",attrs:{type:"number",placeholder:t.__("请输入电话")},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputphone.apply(void 0,arguments)}}})],1),t.isPhone?t._e():i("v-uni-view",{staticClass:"m-cell-ft"},[i("v-uni-icon",{staticClass:"m-icon-warn",attrs:{type:"warn"}})],1)],1),i("v-uni-view",{staticClass:"m-cell"},[i("v-uni-view",{staticClass:"m-cell-hd"},[i("v-uni-label",{staticClass:"u-label"},[t._v(t._s(t.__("公司"))+"：")])],1),i("v-uni-view",{staticClass:"m-cell-bd"},[i("v-uni-input",{staticClass:"u-input",attrs:{type:"text",placeholder:t.__("请输入公司名称")},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputfirm.apply(void 0,arguments)}}})],1),t.isFirm?t._e():i("v-uni-view",{staticClass:"m-cell-ft"},[i("v-uni-icon",{staticClass:"m-icon-warn",attrs:{type:"warn"}})],1)],1),i("v-uni-view",{staticClass:"m-cell"},[i("v-uni-view",{staticClass:"m-cell-hd"},[i("v-uni-label",{staticClass:"u-label"},[t._v(t._s(t.__("职位"))+"：")])],1),i("v-uni-view",{staticClass:"m-cell-bd"},[i("v-uni-input",{staticClass:"u-input",attrs:{type:"text",placeholder:t.__("请输入职位")},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputjob.apply(void 0,arguments)}}})],1),t.isJob?t._e():i("v-uni-view",{staticClass:"m-cell-ft"},[i("v-uni-icon",{staticClass:"m-icon-warn",attrs:{type:"warn"}})],1)],1)],1),i("v-uni-view",{staticClass:"btn_box"},[i("v-uni-form",{attrs:{"report-submit":"true"},on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.signinnow.apply(void 0,arguments)}}},[i("v-uni-button",{staticClass:"u-btn u-btn-default",attrs:{formType:"submit"}},[t._v(t._s("activity"==t.source?t.__("立即报名"):t.__("立即签到")))])],1)],1)],1)},n=[]},5788:function(t,e,i){"use strict";i.r(e);var a=i("06f8"),n=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},"7acb":function(t,e,i){"use strict";var a=i("9a641"),n=i.n(a);n.a},"9a641":function(t,e,i){var a=i("ab62");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("e740f444",a,!0,{sourceMap:!1,shadowMode:!1})},a1fe:function(t,e,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=a(i("5530")),r=a(i("4e4b")),u=a(i("307b")),o=i("26cb"),l={data:function(){return{EventMainPic:"",Title:"",EventTime:"",EventId:"",UserName:"",UserPhone:"",UserCompany:"",UserPosition:"",formId:"",isPhone:!0,isName:!0,isFirm:!0,isJob:!0,source:"",isTmplMsg:!0}},components:{dayCountdown:u.default},computed:(0,o.mapState)(["Config","StateCode","notice","plantformInfo","shopInfo","userInfo","hasLogin"]),onLoad:function(t){if(console.info(t),t.source==this.StateCode.MARKRTING_ACTIVITY_JOIN){var e=r.default.parseJSON(t.val);this.setData({EventMainPic:e.img,Title:e.title,EventTime:e.time,EventId:e.id,source:t.source}),wx.setNavigationBarTitle({title:e.title+r.default.__("报名页")})}else if(t.source==this.StateCode.MARKRTING_ACTIVITY_JOIN_BY_QRCODE){var i=this;r.default.isNull(this.userInfo)?this.getUserInfo((function(e){e&&(i.setData({EventId:t.eventId,source:t.source}),i.initData())}),t.uid):(i.setData({EventId:t.eventId,source:t.source}),i.initData())}},methods:(0,s.default)((0,s.default)({},(0,o.mapMutations)(["login","logout","getPlantformInfo","forceUserInfo","getUserInfo"])),{},{initData:function(){var t={activity_id:this.EventId},e=this;e.$.request({url:e.Config.URL.user.getMarketing,data:t,success:function(t,i,a,n){200==i?(e.setData({EventMainPic:t.activity_rule.activity_image,Title:t.activity_name}),wx.setNavigationBarTitle({title:e.Title+r.default.__("报名页")})):r.default.alert("出错啦")}})},inputname:function(t){this.setData({UserName:t.detail.value}),r.default.isNull(t.detail.value)?this.setData({isName:!1}):this.setData({isName:!0})},inputphone:function(t){this.setData({UserPhone:t.detail.value}),r.default.isNull(t.detail.value)?this.setData({isPhone:!1}):this.setData({isPhone:!0})},inputfirm:function(t){this.setData({UserCompany:t.detail.value}),r.default.isNull(t.detail.value)?this.setData({isFirm:!1}):this.setData({isFirm:!0})},inputjob:function(t){this.setData({UserPosition:t.detail.value}),r.default.isNull(t.detail.value)?this.setData({isJob:!1}):this.setData({isJob:!0})},signinnow:function(t){if(r.default.isNull(this.UserName)&&this.setData({isName:!1}),r.default.isNull(this.UserPhone)&&this.setData({isPhone:!1}),r.default.isNull(this.UserCompany)&&this.setData({isFirm:!1}),r.default.isNull(this.UserPosition)&&this.setData({isJob:!1}),this.setData({formId:t.detail.formId}),this.isName&&this.isPhone&&this.isJob&&this.isFirm){var e={activity_id:this.EventId,user_name:this.UserName,user_phone:this.UserPhone,user_company:this.UserCompany,user_position:this.UserPosition},i=this;i.$.request({url:i.Config.URL.user.doMarketing,data:e,success:function(t,e,a,s){200==e?t.type==i.StateCode.MARKRTING_ACTIVITY_JOIN?(i.isTmplMsg&&i.sendMessage(),r.default.alert(r.default.__("报名成功！")),setTimeout((function(){r.default.navigateBack(1,(function(){}))}),1e3)):t.type==i.StateCode.MARKRTING_ACTIVITY_JOIN_BY_QRCODE&&(r.default.alert(r.default.__("签到成功！")),setTimeout((function(){wx.navigateTo({url:"../activitycheckin/activitycheckin?eventId="+n.EventId})}),1e3)):r.default.alert(a)}})}},sendMessage:function(){}})};e.default=l},ab62:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-countdown[data-v-fe549e7a]{padding:%?2?% 0;flex-wrap:nowrap;justify-content:center}.uni-countdown-splitor[data-v-fe549e7a]{width:auto!important;justify-content:center;line-height:%?44?%;padding:0 %?5?%}.uni-countdown-numbers[data-v-fe549e7a]{line-height:%?44?%;width:auto!important;padding:0 %?10?%;justify-content:center;height:%?44?%;border-radius:%?8?%;margin:0 %?5?%;border:1px solid #000;font-size:%?22?%}',""]),t.exports=e},ad2f:function(t,e,i){"use strict";i.r(e);var a=i("a1fe"),n=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},b3c1:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-label",[t._v(t._s(0==t.Type?t.__("距开始"):t.__("仅剩"))+t._s(t.d)+t._s(t.__("天"))+t._s(t.h)+":"+t._s(t.i)+":"+t._s(t.s))])},n=[]},e6b8:function(t,e,i){var a=i("2646");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("cd301c8a",a,!0,{sourceMap:!1,shadowMode:!1})}}]);