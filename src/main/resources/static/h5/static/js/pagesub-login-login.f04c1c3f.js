(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesub-login-login"],{"226b":function(t,e,i){"use strict";i.r(e);var o=i("636d"),n=i("8776");for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("b05a");var s=i("828b"),c=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,"67f59353",null,!1,o["a"],void 0);e["default"]=c.exports},"636d":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"login"},[t.loadFlag&&t.isMpWeixin&&t.wechatConnectAuto&&!t.isAuthorizationed?i("v-uni-view",{staticClass:"auth-pop"},[t.wechatConnectBox?i("v-uni-view",{staticClass:"auth-box"},[i("v-uni-image",{attrs:{src:"https://static.shopsuite.cn/xcxfile/appicon/shield.png"}}),i("v-uni-label",[t._v(t._s(t.__("新用户注册")))]),i("v-uni-view",{},[i("v-uni-button",{staticClass:"avatar-wrapper",attrs:{"open-type":"chooseAvatar"},on:{chooseavatar:function(e){arguments[0]=e=t.$handleEvent(e),t.onChooseAvatar.apply(void 0,arguments)}}},[i("v-uni-image",{staticClass:"avatar",attrs:{src:t.userAvatar?t.userAvatar:"/static/images/user_no_avatar.png"}})],1),i("v-uni-view",{staticClass:"m-cells m-cells-form"},[i("v-uni-view",{staticClass:"m-cell"},[i("v-uni-view",{staticClass:"m-cell-hd"},[i("v-uni-label",{staticClass:"u-label"},[t._v(t._s(t.__("昵称")))])],1),i("v-uni-view",{staticClass:"m-cell-bd"},[i("v-uni-input",{staticClass:"weui-input",attrs:{type:"nickname",placeholder:t.__("请输入昵称")},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.bindblur.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.bindinput.apply(void 0,arguments)}}})],1)],1)],1)],1),i("v-uni-view",{staticClass:"btn-row",staticStyle:{"margin-top":"40rpx",padding:"10rpx 20rpx"}},[i("v-uni-checkbox-group",{on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onChangeProtocol.apply(void 0,arguments)}}},[i("v-uni-label",[i("v-uni-checkbox",{attrs:{checked:t.protocolChecked,value:"1"}})],1),i("v-uni-label",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showProtocol("reg_protocols_description")}}},[t._v(t._s(t.__("同意"))+t._s(t.__("《用户协议》")))])],1)],1),i("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getUserProfile.apply(void 0,arguments)}}},[t._v(t._s(t.__("一键注册")))])],1):t._e()],1):t._e(),!t.loadFlag||t.isMpWeixin&&t.wechatConnectAuto&&!t.isAuthorizationed?t._e():i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"header"},[i("v-uni-image",{attrs:{src:t.logo}})],1),i("v-uni-view",{staticClass:"main"},[1==t.bind_type?i("wInput",{attrs:{type:"text",isShowIntl:!0,placeholder:t.__("请输入手机号码")},on:{intl:function(e){arguments[0]=e=t.$handleEvent(e),t.intlChange.apply(void 0,arguments)}},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}}):t._e(),2==t.bind_type||3==t.bind_type?i("wInput",{attrs:{type:"text",placeholder:t.__("请输入账号")},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}}):t._e(),i("wInput",{attrs:{type:"password",placeholder:t.__("请输入密码"),isShowPass:!0},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),i("v-uni-view",{staticClass:"footer"},[i("v-uni-text",{staticClass:"cuIcon",class:t.showAgree?"cuIcon-radiobox":"cuIcon-round",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isShowAgree.apply(void 0,arguments)}}}),i("v-uni-text",{staticStyle:{margin:"0 0 0 2px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isShowAgree.apply(void 0,arguments)}}},[t._v(t._s(t.__("登录即代表您已同意")))]),i("v-uni-navigator",{attrs:{url:"/member/member/protocol?id=reg_protocols_description","open-type":"navigate"}},[t._v("《"+t._s(t.__("服务协议"))+"》")]),t._v(t._s(t.__("和"))),i("v-uni-navigator",{attrs:{url:"/member/member/protocol?id=pr_protocols_description","open-type":"navigate"}},[t._v("《"+t._s(t.__("隐私政策"))+"》")])],1),i("wButton",{staticClass:"wbutton",attrs:{text:t.__("登 录"),rotate:t.isRotate},nativeOn:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bindLogin()}}}),i("v-uni-view",{staticClass:"other_login cuIcon"},[t._l(t.providerList,(function(e){return"apple"!==e.value?i("v-uni-view",{key:e.value,staticClass:"login_icon"},[i("v-uni-view",{staticClass:"cuIcon-item"},[i("v-uni-image",{attrs:{src:e.image},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.h5_oauth(e.value)}}})],1)],1):t._e()})),t.loadFlag&&t.isMpH5Weixin?i("v-uni-view",{staticClass:"login_icon"},[i("v-uni-view",{staticClass:"cuIcon-item"},[i("v-uni-image",{attrs:{src:"/static/images/login/weixin.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onChangeBindType(5)}}})],1)],1):t._e(),i("v-uni-view",{staticClass:"login_icon"},[i("v-uni-view",{staticClass:"cuIcon-item"},[i("v-uni-image",{attrs:{src:"/static/images/login/phone.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onChangeBindType(1)}}})],1)],1),i("v-uni-view",{staticClass:"login_icon"},[i("v-uni-view",{staticClass:"cuIcon-item"},[i("v-uni-navigator",{attrs:{url:"/pagesub/login/sms","open-type":"navigate"}},[i("v-uni-image",{attrs:{src:"/static/images/login/sms.png"}})],1)],1)],1),t._e()],2),i("v-uni-view",{staticClass:"footer"},[i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onChangeBindType(3)}}},[t._v(t._s(t.__("账号密码登录")))]),i("v-uni-text",[t._v("|")]),i("v-uni-navigator",{attrs:{url:"/pagesub/login/forget","open-type":"navigate"}},[t._v(t._s(t.__("找回密码")))]),i("v-uni-text",[t._v("|")]),i("v-uni-navigator",{attrs:{url:"/pagesub/login/register","open-type":"navigate"}},[t._v(t._s(t.__("注册账号")))])],1)],1)],1)},n=[]},8776:function(t,e,i){"use strict";i.r(e);var o=i("e358"),n=i.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a},a39c:function(t,e,i){var o=i("c86c");e=o(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */[data-v-67f59353]:export{theme_bg:#e93323}.content[data-v-67f59353]{display:flex;flex-direction:column;justify-content:center\r\n  /* margin-top: 128rpx; */}\r\n/* 头部 logo */.header[data-v-67f59353]{width:%?161?%;height:%?161?%;box-shadow:%?0?% %?0?% %?60?% %?0?% rgba(0,0,0,.1);border-radius:50%;background-color:#e93323;\r\n  /*\r\n  margin-top: 80rpx;\r\n  margin-bottom: 60rpx;\r\n   */margin-top:%?40?%;margin-bottom:%?20?%;margin-left:auto;margin-right:auto}.header uni-image[data-v-67f59353]{width:%?161?%;height:%?161?%;border-radius:50%}\r\n/* 主体 */.main[data-v-67f59353]{display:flex;flex-direction:column;padding-left:%?70?%;padding-right:%?70?%}.tips[data-v-67f59353]{color:#999;font-size:%?28?%;margin-top:%?64?%;margin-left:%?48?%}\r\n/* 登录按钮 */.wbutton[data-v-67f59353]{margin-top:%?70?%}\r\n/* 其他登录方式 */.other_login[data-v-67f59353]{display:flex;flex-direction:row;justify-content:center;align-items:center;margin-top:%?80?%;text-align:center}.login_icon[data-v-67f59353]{border:none;font-size:%?64?%;margin:0 %?40?% 0 %?40?%;color:rgba(0,0,0,.7)}.wechat_color[data-v-67f59353]{color:#83dc42}.weibo_color[data-v-67f59353]{color:#f9221d}.github_color[data-v-67f59353]{color:#24292e}\r\n/* 底部 */.footer[data-v-67f59353]{display:flex;flex-direction:row;justify-content:center;align-items:center;font-size:%?28?%;margin-top:%?64?%;color:rgba(0,0,0,.7);text-align:center;height:%?40?%;line-height:%?40?%}.footer uni-text[data-v-67f59353]{font-size:%?24?%;margin-left:%?15?%;margin-right:%?15?%}.cuIcon-item[data-v-67f59353]{font-size:%?64?%}.cuIcon-item uni-image[data-v-67f59353]{width:%?64?%;height:%?64?%}\r\n/* common/authorization-info.wxss */.auth-pop[data-v-67f59353]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);display:flex;justify-content:center;align-items:center;text-align:center;flex-wrap:wrap;z-index:999}.auth-box[data-v-67f59353]{width:%?600?%;background-color:#fff;border-radius:%?24?%;box-sizing:border-box;padding:%?110?% %?60?%;box-shadow:0 %?10?% %?30?% rgba(0,0,0,.5)}.auth-box uni-image[data-v-67f59353]{width:%?112?%;height:%?112?%}.auth-box uni-label[data-v-67f59353]{font-size:%?32?%;color:#333;margin:%?20?% 0;display:inline-block;width:100%}.auth-box uni-text[data-v-67f59353]{font-size:%?24?%;color:#666}.auth-box uni-button[data-v-67f59353]{margin-top:%?80?%}.btn-row[data-v-67f59353]{margin-top:50px;padding:0}.btn-row uni-label[data-v-67f59353]{font-size:%?32?%;color:#333;margin:%?20?% 0;display:inline;width:100%}.avatar-wrapper[data-v-67f59353]{padding:0;width:%?112?%!important;height:%?112?%!important;border-radius:%?16?%;margin-top:%?80?%;margin-bottom:%?80?%}.avatar[data-v-67f59353]{display:block;width:%?112?%;height:%?112?%}.footer[data-v-67f59353]{font-size:12px}.footer .cuIcon[data-v-67f59353]{font-size:14px;margin:0}',""]),t.exports=e},b05a:function(t,e,i){"use strict";var o=i("cf3a"),n=i.n(o);n.a},cf3a:function(t,e,i){var o=i("a39c");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("967d").default;n("20357d31",o,!0,{sourceMap:!1,shadowMode:!1})},e358:function(t,e,i){"use strict";i("6a54");var o=i("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("5ef2"),i("aa9c"),i("d4b5");var n=o(i("fcf3")),a=o(i("9b1b")),s=o(i("2634")),c=o(i("2fdc")),r=o(i("de2f")),u=o(i("626e")),l=o(i("1685")),d=i("8f59"),g={data:function(){return{loadFlag:!1,options:{},connect:{},providerList:[],hasProvider:!1,logo:"",account:"",password:"",positionTop:0,protocolChecked:!1,wechatConnectBox:!1,wechatConnectAuto:!1,isAuthorizationed:!1,isMpWeixin:!1,wxwork:0,isMpToutiao:!1,plusOauthWeixin:{},bind_type:3,isMpH5Weixin:!1,code:"",user_intl:"",system:"",platform:"",client_info:"{}",data:{},userAvatar:"",userNickname:"",showAgree:!1,isRotate:!1}},components:{wInput:r.default,wButton:u.default},computed:(0,d.mapState)(["Config","StateCode","notice","plantformInfo","shopInfo","userInfo","hasLogin","forcedLoginState"]),onLoad:function(t){var e=this;return(0,c.default)((0,s.default)().mark((function i(){var o,n;return(0,s.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:return o=e,uni.setNavigationBarTitle({title:e.__("登录")}),i.next=4,e.$onLaunched;case 4:e.getPlantformInfo((function(t){e.logo=t.site_mobile_logo,e.wechatConnectAuto=!!t.wechat_connect_auto})),o.setData({options:t}),uni.getSystemInfo({success:function(t){e.system=t.system,e.platform=t.platform},fail:function(t){},complete:function(){}}),o.$.isWeixin()?(o.isMpH5Weixin=o.$.isWeixin(),t.code?(e.code=t.code,o.wechatMpH5Login(t.code)):o.wechatConnectAuto&&o.weixin_h5_oauth("weixin")):(n=l.default.get("ukey"),n||(n=o.$.getStorageSync("ukey")),n&&o.$.request({url:e.Config.URL.userInfo,data:{perm_key:n},success:function(t,e,i,a){if(200==e){o.$.setStorageSync("ukey",n);o.toMain(t)}else o.logout()},fail:function(t,e){o.logout()}})),e.initPosition(),e.onChangeBindType(1),o.loadFlag=!0;case 11:case"end":return i.stop()}}),i)})))()},onBackPress:function(){},methods:(0,a.default)((0,a.default)({},(0,d.mapMutations)(["login","logout","getPlantformInfo","forceUserInfo","getUserInfo"])),{},{bindblur:function(t){this.userNickname=t.detail.value},bindinput:function(t){this.userNickname=t.detail.value},onChooseAvatar:function(t){var e=this,i=t.detail.avatarUrl;e.$.showLoading({title:"加载中"}),e.$.uploadFile({url:e.Config.URL.upload,method:"POST",filePath:i,name:"upfile",success:function(t){e.$.hideLoading();var i=e.$.parseJSON(t.data);if(200==i.status){var o=i.data.file_url;e.setData({userAvatar:o})}else e.$.alert(i.msg)},fail:function(t){e.$.hideLoading()},complete:function(t){e.$.hideLoading()}})},onChangeBindType:function(t){return this.bind_type=t,2==this.bind_type&&(uni.setNavigationBarTitle({title:this.__("电子邮箱登录")}),this.$.showToast({icon:"none",title:this.__("请输入电子邮箱")})),1==this.bind_type&&(uni.setNavigationBarTitle({title:this.__("手机号登录")}),this.$.showToast({icon:"none",title:this.__("请输入手机号")})),3==this.bind_type&&(uni.setNavigationBarTitle({title:this.__("账号登录")}),this.$.showToast({icon:"none",title:this.__("请输入账号密码")})),4==this.bind_type&&(this.wechatConnectAuto=!0,uni.setNavigationBarTitle({title:this.__("微信登录")}),this.wechatMpLogin()),5==this.bind_type&&(this.weixin_h5_oauth("weixin"),uni.setNavigationBarTitle({title:this.__("微信登录")})),6==this.bind_type&&uni.setNavigationBarTitle({title:this.__("微信登录")}),this.bind_type},intlChange:function(t){this.user_intl=t},initProvider:function(){var t=this;t.$.request({url:t.Config.URL.connect,data:{},success:function(e,i,o,n){if(200==i){t.connect=e;var a=e.filters;if(console.info(a),t.$.ifUniApp())plus.oauth.getServices((function(e){if(e&&e.length){for(var i=0;i<e.length;i++)~a.indexOf(e[i]["id"])&&("weixin"==e[i]["id"]?t.$.isWeixin()&&t.providerList.push({value:e[i]["id"],image:"/static/images/login/"+e[i]["id"]+".png"}):t.providerList.push({value:e[i]["id"],image:"/static/images/login/"+e[i]["id"]+".png"})),"weixin"==e[i]["id"]&&(t.plusOauthWeixin=e[i]);t.hasProvider=!0}}),(function(t){alert("获取分享服务列表失败："+t.message)}));else{for(var s=e.items,c=0;c<s.length;c++)~a.indexOf(s[c]["id"])&&("weixin"==s[c]["id"]?t.$.isWeixin()&&t.providerList.push({value:s[c]["id"],image:"/static/images/login/"+s[c]["id"]+".png"}):t.providerList.push({value:s[c]["id"],image:"/static/images/login/"+s[c]["id"]+".png"})),"weixin"==s[c]["id"]&&(t.plusOauthWeixin=s[c]);t.hasProvider=!0}}},fail:function(){},complete:function(){}})},initPosition:function(){this.positionTop=this.$.getSystemInfoSync().windowHeight-100},bindLogin:function(){var t=this;if(this.isRotate)return!1;if(t.isRotate=!0,setTimeout((function(){t.isRotate=!1}),2e3),1==t.bind_type&&!t.$.tel(this.account,this.user_intl))return uni.showToast({icon:"none",position:"bottom",title:t.__("手机号不正确")}),!1;var e={username:this.account,password:this.password,client_info:t.client_info};if(1==t.bind_type&&(e.username=this.user_intl+this.account),!this.showAgree)return t.$.confirm(t.__("请先阅读并同意《隐私政策》")),void uni.showToast({icon:"none",title:t.__("请先阅读并同意《隐私政策》")});e.user_account=e.username,e.encrypt=!1,t.$.request({url:this.Config.URL.login,method:"POST",data:e,success:function(e,i,o,n){if(200==i){var a=t.$.setStorageSync("ukey",e.token);l.default.set("ukey",a),t.toMain(e)}else o=o||t.__("用户账号或密码不正确"),t.$.showToast({icon:"none",title:o})},fail:function(e,i){t.$.showToast({icon:"none",title:t.__("登录有误，请重试")})}})},oauth:function(t){var e=this;if("fb"==t){var i=uni.requireNativePlugin("sn-facebook");i.isLoggedIn();i.logout((function(t){console.info("---------------------"),i.loginWithParams({permissions:["email","public_profile"],fields:"id, name, email, picture"},(function(t){var i=uni.getStorageSync("activity_id");1==t.result?e.$.request({url:e.Config.URL.do_app_login,type:"POST",dataType:"json",data:{bind_name:"fb",code:t.data.token,activity_id:i,openId:t.data.userId,nickName:t.data.name,authResponse:JSON.stringify(t["data"]),client_info:e.client_info},success:function(t,i,o,n){if(console.info(t),200==i){e.$.setStorageSync("ukey",t.token);l.default.set("uid",t.user_id),l.default.set("ukey",t.key),e.toMain(t)}else e.$.showToast({icon:"none",title:e.__("登录失败！")})}}):e.$.showToast({icon:"none",title:e.__("登录失败！")})}))}))}else if("google"==t){console.info("google init");var o=uni.requireNativePlugin("JY-GoogleSignin");o.jy_init({client_id:e.connect.google_app_id},(function(t){console.info("google init ok")})),o.jy_startLogin((function(t){console.info(t),"0"==t.errorCode?e.$.request({url:e.Config.URL.do_app_login,type:"POST",dataType:"json",data:{bind_name:"google",code:t.data.idToken,openId:t.data.userId,user_email:t.data.email,nickName:t.data.fullName,avatarUrl:t.data.photoUrl,authResponse:JSON.stringify(t["data"]),client_info:e.client_info},success:function(t,i,o,n){if(console.info(t),200==i){e.$.setStorageSync("ukey",t.token);l.default.set("uid",t.user_id),l.default.set("ukey",t.key),e.toMain(t)}else e.$.showToast({icon:"none",title:e.__("登录失败！")})}}):e.$.showToast({icon:"none",title:e.__("登录失败！")})}))}else"sms"==t?this.sms_oauth(t):e.$.login({provider:t,success:function(i){e.$.getUserInfo({provider:t,success:function(i){if("getUserInfo:ok"==i.errMsg){var o=i.userInfo;o.bind_name=t,o.code=o.openId,o.source_store_id=e.$.getStorageSync("source_store_id"),o.source_user_id=e.$.getStorageSync("source_user_id"),o.source_ucc_code=e.$.getStorageSync("source_ucc_code"),o.client_info=e.client_info;var n=uni.getStorageSync("activity_id");o.activity_id=n,e.$.request({url:e.Config.URL.do_app_login,data:o,success:function(t,i,o,n){if(200!=i)return e.$.showModal({title:"提示",content:"无法登录，请重试！",showCancel:!1}),void e.$.navigateBack();e.$.setStorageSync("ukey",t.token);e.toMain(t)},fail:function(){},complete:function(){}})}}})},fail:function(t){console.error("授权登录失败："+JSON.stringify(t))}})},plus_oauth:function(t){var e=this;function i(){var t=e.plusOauthWeixin;t.authResult?t.getUserInfo((function(t){var i=t.target,o=i.userInfo;o.bind_name="weixin",o.code=o.openid,o.source_store_id=e.$.getStorageSync("source_store_id"),o.source_user_id=e.$.getStorageSync("source_user_id"),o.source_ucc_code=e.$.getStorageSync("source_ucc_code"),o.client_info=e.client_info;var n=uni.getStorageSync("activity_id");o.activity_id=n,e.$.request({url:e.Config.URL.do_app_login,data:o,success:function(t,i,o,n){if(200!=i)return e.$.showModal({title:"提示",content:"无法登录，请重试！",showCancel:!1}),void e.$.navigateBack();e.$.setStorageSync("ukey",t.token);e.toMain(t)},fail:function(){},complete:function(){}})}),(function(t){alert("获取用户信息失败："+t.message+" - "+t.code)})):alert("未登录授权！")}(function(){var t=e.plusOauthWeixin;t.authResult?i():t.login((function(t){i()}),(function(t){alert("登录认证失败！")}))})()},h5_oauth:function(t){"fb"==t?this.fb_oauth(t):"google"==t?this.google_oauth(t):"weixin"==t?this.weixin_h5_oauth(t):"sms"==t?this.sms_oauth(t):"qq"==t&&this.qq_oauth(t)},weixin_h5_oauth:function(t){var e=this,i=l.default.get("ukey");if(i||(i=e.$.getStorageSync("ukey")),i)e.$.request({url:this.Config.URL.userInfo,data:{perm_key:i},success:function(t,o,n,a){if(200==o){e.$.setStorageSync("ukey",i);t["as"]=l.default.get("as"),e.toMain(t)}else e.logout()},fail:function(t,i){e.logout()}});else if("pagesub/login/login"==getCurrentPages()[getCurrentPages().length-1].route||"/pagesub/login/login"==getCurrentPages()[getCurrentPages().length-1].route){if(getCurrentPages().length>1){var o=getCurrentPages()[getCurrentPages().length-2];o&&(e.$.setStorageSync("pre_route",o.route),o.options&&e.$.setStorageSync("pre_options",o.options))}if(e.$.isQyWeixin())window.location.href=e.Config.URL.wx.mplogin+"&wxwork=1&callback="+encodeURIComponent(e.Config.CONFIG.base_url+"/h5/pagesub/login/login");else{var n=e.Config.CONFIG.base_url+"/h5/pagesub/login/login";location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+e.plantformInfo.wechat_app_id+"&redirect_uri="+encodeURIComponent(n)+"&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect"}}else{o=getCurrentPages()[getCurrentPages().length-1];if(o&&(e.$.setStorageSync("pre_route",o.route),o.options&&e.$.setStorageSync("pre_options",o.options)),e.$.isQyWeixin())window.location.href=e.Config.URL.wx.mplogin+"&wxwork=1&callback="+encodeURIComponent(e.Config.CONFIG.base_url+"/h5/pagesub/login/login");else{var a=e.Config.CONFIG.base_url+"/h5/pagesub/login/login";location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+e.plantformInfo.wechat_app_id+"&redirect_uri="+encodeURIComponent(a)+"&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect"}}},wechatMpH5Login:function(t){var e=uni.getStorageSync("activity_id"),i=this;i.$.request({url:i.Config.URL.wx.checkMpH5Login,data:{code:t,activity_id:e,wxwork:i.wxwork,source_store_id:i.$.getStorageSync("source_store_id"),source_user_id:i.$.getStorageSync("source_user_id"),source_ucc_code:i.$.getStorageSync("source_ucc_code"),client_info:i.client_info},method:"GET",success:function(t,e,o,n){var a=i.$.setStorageSync("ukey",t.token);l.default.set("ukey",a),i.toMain(t)}})},wechatMpLogin:function(t){var e=this.$.login;if(this.wxwork)e=wx.qy.login,wx.getSetting({success:function(t){t.authSetting["scope.userInfo"]?(that.setData({isAuthorizationed:!1}),e({success:function(t){that.$.login({success:function(e){var i=uni.getStorageSync("activity_id");that.$.request({url:that.Config.URL.wx.checkAppLogin,data:{qy_code:t.code,code:e.code,wxwork:that.wxwork,activity_id:i,source_store_id:that.$.getStorageSync("source_store_id"),source_user_id:that.$.getStorageSync("source_user_id"),source_ucc_code:that.$.getStorageSync("source_ucc_code"),client_info:that.client_info},success:function(t,e,i,o){if(200==e){that.setData({isAuthorizationed:!0});that.$.setStorageSync("ukey",t.token);that.toMain(t)}else that.setData({isAuthorizationed:!1})},fail:function(){},complete:function(){}})}})}})):e({success:function(t){that.$.login({success:function(e){var i=uni.getStorageSync("activity_id");that.$.request({url:that.Config.URL.wx.checkAppLogin,data:{qy_code:t.code,code:e.code,wxwork:that.wxwork,activity_id:i,source_store_id:that.$.getStorageSync("source_store_id"),source_user_id:that.$.getStorageSync("source_user_id"),source_ucc_code:that.$.getStorageSync("source_ucc_code"),client_info:that.client_info},success:function(t,e,i,o){if(200==e){that.setData({isAuthorizationed:!0});that.$.setStorageSync("ukey",t.token);that.toMain(t)}else that.setData({isAuthorizationed:!1})},fail:function(){},complete:function(){}})}})}})}});else{var i=this;wx.getSetting({success:function(t){t.authSetting["scope.userInfo"]?(i.setData({isAuthorizationed:!1}),e({success:function(t){var e=uni.getStorageSync("activity_id");i.$.request({url:i.Config.URL.wx.checkAppLogin,data:{code:t.code,wxwork:i.wxwork,activity_id:e,source_store_id:i.$.getStorageSync("source_store_id"),source_user_id:i.$.getStorageSync("source_user_id"),source_ucc_code:i.$.getStorageSync("source_ucc_code"),client_info:i.client_info},success:function(t,e,o,n){if(200==e){i.setData({isAuthorizationed:!0});i.$.setStorageSync("ukey",t.token);i.toMain(t)}else i.setData({isAuthorizationed:!1}),i.setData({wechatConnectBox:!0})},fail:function(){},complete:function(){}})}})):e({success:function(t){var e=uni.getStorageSync("activity_id");i.$.request({url:i.Config.URL.wx.checkAppLogin,data:{code:t.code,wxwork:i.wxwork,activity_id:e,source_store_id:i.$.getStorageSync("source_store_id"),source_user_id:i.$.getStorageSync("source_user_id"),source_ucc_code:i.$.getStorageSync("source_ucc_code"),client_info:i.client_info},success:function(t,e,o,n){if(200==e){i.setData({isAuthorizationed:!0});i.$.setStorageSync("ukey",t.token);i.toMain(t)}else i.setData({isAuthorizationed:!1}),i.setData({wechatConnectBox:!0})},fail:function(){},complete:function(){}})}})}})}},weibo_oauth:function(t){},qq_oauth:function(t){var e=this.$.getStorageSync("pre_route"),i=this.$.getStorageSync("pre_options"),o=(this.cf.CONFIG.base_url,"");e&&(o="/"+this.$.createUrl(e,i),o="?jump="+encodeURIComponent(o));var n=this.connect.qq_url;setTimeout((function(){window.location.href=n}),100)},fb_oauth:function(t){var e=this;FB.login((function(t){console.info(t.authResponse),t.authResponse?(console.log("Welcome!  Fetching your information.... "),FB.api("/me",(function(i){console.log("Good to see you, "+i.name+".");var o=uni.getStorageSync("activity_id");e.$.request({url:e.Config.URL.do_app_login,type:"POST",dataType:"json",data:{bind_name:"fb",activity_id:o,code:t["authResponse"]["accessToken"],openId:t["authResponse"]["userID"],nickName:i.name,authResponse:JSON.stringify(t["authResponse"])},success:function(t,i,o,n){if(console.info(t),200==i){e.$.setStorageSync("ukey",t.token);l.default.set("uid",t.user_id),l.default.set("ukey",t.key),e.toMain(t)}else e.$.showToast({icon:"none",title:e.__("登录失败！")})}})}))):e.$.showToast({icon:"none",title:e.__("User cancelled login or did not fully authorize.")})}))},google_oauth:function(t){var e=this.$.getStorageSync("pre_route"),i=this.$.getStorageSync("pre_options"),o=(this.cf.CONFIG.base_url,"");e&&(o="/"+this.$.createUrl(e,i),o="?jump="+encodeURIComponent(o));var n=this.connect.google_url;setTimeout((function(){window.location.href=n}),100)},sms_oauth:function(t){this.$.gopage("/pagesub/login/sms")},toMain:function(t){var e=this;e.$.request({url:this.Config.URL.userInfo,success:function(i,o,n,a){if(t=Object.assign(t,i),e.login(t),t.im&&e.plantformInfo.chat_global&&e.$Socket.connectserver(t.im),e.notice.postNotificationName("RefreshCart",0),2==t.user_state&&e.$.toActive(),e.forcedLoginState)e.$.reLaunch({url:"/pages/index/member"});else{if(e.$.isWeixin()){var s=e.$.getStorageSync("pre_route"),c=e.$.getStorageSync("pre_options");if(s){var r="/"+e.$.createUrl(s,c);e.$.gotopage(r)}else e.$.gotopage("/pages/index/member");return}if("pagesub/login/login"==getCurrentPages()[getCurrentPages().length-1].route||"/pagesub/login/login"==getCurrentPages()[getCurrentPages().length-1].route)if(getCurrentPages().length>1){var u=getCurrentPages()[getCurrentPages().length-2];if("pagesub/login/login"==u.route||"/pagesub/login/login"==u.route)e.$.switchTab({url:"/pages/index/member"});else if(u.refreshData)u.refreshData(u.options),e.$.navigateBack();else if(u.onLoad)u.onLoad(u.options),e.$.navigateBack();else{var l="/"+e.$.createUrl(u.route,u.options);e.$.gotopage(l)}}else e.$.switchTab({url:"/pages/index/member"});else{u=getCurrentPages()[getCurrentPages().length-1];"pagesub/login/login"==u.route||"/pagesub/login/login"==u.route?e.$.switchTab({url:"/pages/index/member"}):u.onLoad&&u.onLoad(u.options)}}}})},getUserProfile:function(t){var e=this;wx.getUserProfile({desc:"获取你的昵称、头像、地区及性别",success:function(t){console.log(t),e.data.userInfo=t.userInfo,e.data.userInfo.avatarUrl=e.userAvatar,e.data.userInfo.nickName=e.userNickname,e.bindGetUserInfo({detail:e.data})},fail:function(t){return console.log("获取失败: ",t),e.$.switchTab({url:"/pages/index/index"}),!1}})},bindGetUserInfo:function(t){var e=this;if(this.protocolChecked){var i=e.$.login;if(this.wxwork){if(i=wx.qy.login,"getUserInfo:ok"==t.detail.errMsg){e.setData({isAuthorizationed:!1});var o=e.$.parseJSON(t.detail.rawData);i({success:function(i){e.$.login({success:function(n){n.code,e.wxwork,o.nickName,o.gender,o.avatarUrl,o.country,o.city,o.province;var a=encodeURIComponent(t.detail.encryptedData),s=encodeURIComponent(t.detail.iv),c=n.code,r=uni.getStorageSync("activity_id");e.$.request({url:e.Config.URL.wx.applogin,data:{qy_code:i.code,code:c,activity_id:r,wxwork:e.wxwork,encryptedData:a,iv:s,source_store_id:e.$.getStorageSync("source_store_id"),source_user_id:e.$.getStorageSync("source_user_id"),source_ucc_code:e.$.getStorageSync("source_ucc_code"),client_info:e.client_info,user_info:t.detail.userInfo},success:function(t,i,o,n){if(200!=i)return e.$.showModal({title:"提示",content:"无法登录，请重试！",showCancel:!1}),void e.$.navigateBack();e.$.setStorageSync("ukey",t.token);e.toMain(t)},fail:function(){},complete:function(){}})}})}})}}else if("getUserInfo:ok"==t.detail.errMsg){e.setData({isAuthorizationed:!1});o=e.$.parseJSON(t.detail.rawData);i({success:function(i){i.code,e.wxwork,o.nickName,o.gender,o.avatarUrl,o.country,o.city,o.province;var n=encodeURIComponent(t.detail.encryptedData),a=encodeURIComponent(t.detail.iv),s=i.code,c=uni.getStorageSync("activity_id");e.$.request({url:e.Config.URL.wx.applogin,data:{code:s,encryptedData:n,iv:a,activity_id:c,source_store_id:e.$.getStorageSync("source_store_id"),source_user_id:e.$.getStorageSync("source_user_id"),source_ucc_code:e.$.getStorageSync("source_ucc_code"),client_info:e.client_info,user_info:t.detail.userInfo},success:function(t,i,o,n){if(200!=i)return e.$.showModal({title:"提示",content:"无法登录，请重试！",showCancel:!1}),void e.$.navigateBack();e.$.setStorageSync("ukey",t.token);e.toMain(t)},fail:function(){},complete:function(){}})}})}}else this.$.showModal({title:this.__("提示"),content:this.__("请先阅读并同意用户协议"),showCancel:!1})},onChangeProtocol:function(t){var e=t.detail.value;e.length>0?this.protocolChecked=!0:this.protocolChecked=!1},showProtocol:function(t){uni.navigateTo({url:"/member/member/protocol?id="+t})},startLogin:function(){if(this.isRotate)return!1;console.info(this.account),console.info((0,n.default)(this.account)),""!=this.account.length?this.password.length<5?uni.showToast({icon:"none",position:"bottom",title:"密码不正确"}):(console.log("登录成功"),_this.isRotate=!0,setTimeout((function(){_this.isRotate=!1}),3e3)):uni.showToast({icon:"none",position:"bottom",title:"用户名不能为空"})},jy_facebookShareUrl:function(){var t=uni.requireNativePlugin("JY-FaceBookAppEvents");t.jy_facebookShareUrl({shareUrl:"http://www.baidu.com",sharePic:"随便写"},(function(t){uni.showToast({icon:"none",title:JSON.stringify(t)})}))},isShowAgree:function(){this.showAgree=!this.showAgree}})};e.default=g}}]);