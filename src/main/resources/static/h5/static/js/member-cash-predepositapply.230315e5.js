(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["member-cash-predepositapply"],{"008a":function(t,a,i){"use strict";var s=i("acaa"),e=i.n(s);e.a},"089f":function(t,a,i){"use strict";i.d(a,"b",(function(){return e})),i.d(a,"c",(function(){return n})),i.d(a,"a",(function(){return s}));var s={uniPopup:i("e7b4").default},e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"page"},[i("v-uni-view",{staticClass:"m-tab"},[i("v-uni-view",{staticClass:"m-navbar1"},[t.isMemDist?i("v-uni-view",{class:["m-navbar-item",1==t.tapindex?"m-navbar-item-on":""],on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.allOrders.apply(void 0,arguments)}}},[t._v(t._s(t.__("佣金提现")))]):t._e(),t.isECashCard?i("v-uni-view",{class:["m-navbar-item",2==t.tapindex?"m-navbar-item-on":""],on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toBePaid.apply(void 0,arguments)}}},[t._v(t._s(t.__("余额提现")))]):t._e()],1)],1),i("v-uni-view",{class:1==t.tapindex?"":"hide"},[i("v-uni-view",{staticClass:"topbg"},[i("v-uni-view",{staticClass:"topinfo"},[i("v-uni-view",[i("v-uni-label",[t._v(t._s(t.TotalPrice))])],1),i("v-uni-view",[t._v(t._s(t.__("可提现佣金(￥)")))])],1)],1),i("v-uni-view",{staticClass:"m-cells m-cells-form"},[i("v-uni-view",{staticClass:"m-cell"},[i("v-uni-view",{staticClass:"m-cell-hd"},[i("v-uni-label",{staticClass:"u-label"},[t._v(t._s(t.__("提现金额")))])],1),i("v-uni-view",{staticClass:"m-cell-bd"},[i("v-uni-input",{staticClass:"u-input",attrs:{type:"number",value:t.Price,placeholder:t.__("输入提现金额(需要大于:")+t.plantform_fx_withdraw_min_amount+")",maxlength:"6"},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.onInputPrice.apply(void 0,arguments)}}})],1),t.isPrice?t._e():i("v-uni-view",{staticClass:"m-cell-ft"},[i("v-uni-icon",{staticClass:"m-icon-warn",attrs:{type:"warn"}})],1)],1),i("v-uni-view",{staticClass:"m-cell",attrs:{hidden:"true"}},[i("v-uni-view",{staticClass:"m-cell-hd"},[i("v-uni-label",{staticClass:"u-label"},[t._v(t._s(t.__("微信号")))])],1),i("v-uni-view",{staticClass:"m-cell-bd"},[i("v-uni-input",{staticClass:"u-input",attrs:{type:"text",value:t.WXCode,placeholder:t.__("输入微信号"),maxlength:"20"},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.onInputWXcode.apply(void 0,arguments)}}})],1),t.isWXcode?t._e():i("v-uni-view",{staticClass:"m-cell-ft"},[i("v-uni-icon",{staticClass:"m-icon-warn",attrs:{type:"warn"}})],1)],1),i("v-uni-view",{staticClass:"m-cell"},[i("v-uni-view",{staticClass:"m-cell-hd"},[i("v-uni-label",{staticClass:"u-label"},[t._v(t._s(t.__("真实姓名")))])],1),i("v-uni-view",{staticClass:"m-cell-bd"},[i("v-uni-input",{staticClass:"u-input",attrs:{type:"text",value:t.UserRealName,placeholder:t.__("输入真实姓名"),maxlength:"20"},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.inputName.apply(void 0,arguments)}}})],1),t.isName?t._e():i("v-uni-view",{staticClass:"m-cell-ft"},[i("v-uni-icon",{staticClass:"m-icon-warn",attrs:{type:"warn"}})],1)],1),i("v-uni-view",{staticClass:"m-cell"},[i("v-uni-view",{staticClass:"m-cell-hd"},[i("v-uni-label",{staticClass:"u-label"},[t._v(t._s(t.__("手机号码")))])],1),i("v-uni-view",{staticClass:"m-cell-bd"},[i("v-uni-input",{staticClass:"u-input",attrs:{type:"number",value:t.UserPhone,placeholder:t.__("输入手机号码"),maxlength:"11"},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.onInputPhone.apply(void 0,arguments)}}})],1),t.isPhone?t._e():i("v-uni-view",{staticClass:"m-cell-ft"},[i("v-uni-icon",{staticClass:"m-icon-warn",attrs:{type:"warn"}})],1)],1),i("v-uni-view",{staticClass:"m-cell",attrs:{hidden:"true"}},[i("v-uni-view",{staticClass:"m-cell-hd"},[i("v-uni-label",{staticClass:"u-label"},[t._v(t._s(t.__("支付宝账号")))])],1),i("v-uni-view",{staticClass:"m-cell-bd"},[i("v-uni-input",{staticClass:"u-input",attrs:{value:t.AlipayAccount,placeholder:t.__("输入支付宝账号(选填)")},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.inputalipayAccount.apply(void 0,arguments)}}})],1),t.isalipayAccount?t._e():i("v-uni-view",{staticClass:"m-cell-ft"},[i("v-uni-icon",{staticClass:"m-icon-warn",attrs:{type:"warn"}})],1)],1),i("v-uni-view",{staticClass:"m-cell"},[i("v-uni-view",{staticClass:"m-cell-hd"},[i("v-uni-label",{staticClass:"u-label"},[t._v(t._s(t.__("银行名称")))])],1),i("v-uni-view",{staticClass:"m-cell-bd"},[i("v-uni-input",{staticClass:"u-input",attrs:{type:"text",value:t.BankName,placeholder:"如：上海农业银行七宝支行"},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.inputbankName.apply(void 0,arguments)}}})],1),t.isbankName?t._e():i("v-uni-view",{staticClass:"m-cell-ft"},[i("v-uni-icon",{staticClass:"m-icon-warn",attrs:{type:"warn"}})],1)],1),i("v-uni-view",{staticClass:"m-cell"},[i("v-uni-view",{staticClass:"m-cell-hd"},[i("v-uni-label",{staticClass:"u-label"},[t._v(t._s(t.__("银行卡号")))])],1),i("v-uni-view",{staticClass:"m-cell-bd"},[i("v-uni-input",{staticClass:"u-input",attrs:{type:"number",value:t.BankAccount,placeholder:t.__("输入银行卡号")},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.inputbankAccount.apply(void 0,arguments)}}})],1),t.isbankAccount?t._e():i("v-uni-view",{staticClass:"m-cell-ft"},[i("v-uni-icon",{staticClass:"m-icon-warn",attrs:{type:"warn"}})],1)],1)],1),i("v-uni-view",{staticClass:"m-text-box"},[i("v-uni-view",[i("v-uni-label",{staticClass:"iconfont icon-14052218"}),t._v(t._s(t.__("提现规则")))],1),i("v-uni-view",[i("v-uni-view",[t._v(t._s(t.__("粉丝在店铺内订单支付后你将会获得佣金收益，收益在订单支付后"))),i("v-uni-label",{staticStyle:{color:"red"}},[t._v(t._s(t.ValidDays))]),t._v(t._s(t.__("天可提现。订单若发生退款你将不会收到佣金收益。")))],1)],1)],1),i("v-uni-view",{staticClass:"btn_box"},[i("v-uni-button",{staticClass:"u-btn u-btn-default",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.submitdata.apply(void 0,arguments)}}},[t._v(t._s(t.__("申请提现")))])],1),t.isECashCard?i("v-uni-view",{staticClass:"btn_box"},[i("v-uni-button",{staticClass:"u-btn btn-line-primary",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.move.apply(void 0,arguments)}}},[t._v(t._s(t.__("转入余额")))])],1):t._e()],1),i("v-uni-view",{class:2==t.tapindex?"":"hide"},[i("v-uni-view",{staticClass:"topbg"},[i("v-uni-view",{staticClass:"topinfo"},[i("v-uni-view",[i("v-uni-label",[t._v(t._s(t.canUseCardCashAmount))])],1),i("v-uni-view",[t._v(t._s(t.__("可提现余额"))+"(￥)")])],1)],1),i("v-uni-view",{staticClass:"m-cells m-cells-form"},[i("v-uni-view",{staticClass:"m-cell"},[i("v-uni-view",{staticClass:"m-cell-hd"},[i("v-uni-label",{staticClass:"u-label"},[t._v(t._s(t.__("提现金额")))])],1),i("v-uni-view",{staticClass:"m-cell-bd"},[i("v-uni-input",{staticClass:"u-input",attrs:{type:"number",value:t.Price,placeholder:t.__("输入提现金额(需要大于:")+t.plantform_fx_withdraw_min_amount+")",maxlength:"6"},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.onInputPrice.apply(void 0,arguments)}}})],1),t.isPrice?t._e():i("v-uni-view",{staticClass:"m-cell-ft"},[i("v-uni-icon",{staticClass:"m-icon-warn",attrs:{type:"warn"}})],1)],1),i("v-uni-view",{staticClass:"m-cell",attrs:{hidden:"true"}},[i("v-uni-view",{staticClass:"m-cell-hd"},[i("v-uni-label",{staticClass:"u-label"},[t._v(t._s(t.__("微信号")))])],1),i("v-uni-view",{staticClass:"m-cell-bd"},[i("v-uni-input",{staticClass:"u-input",attrs:{type:"text",value:t.WXCode,placeholder:t.__("输入微信号"),maxlength:"20"},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.onInputWXcode.apply(void 0,arguments)}}})],1),t.isWXcode?t._e():i("v-uni-view",{staticClass:"m-cell-ft"},[i("v-uni-icon",{staticClass:"m-icon-warn",attrs:{type:"warn"}})],1)],1),i("v-uni-view",{staticClass:"m-cell"},[i("v-uni-view",{staticClass:"m-cell-hd"},[i("v-uni-label",{staticClass:"u-label"},[t._v(t._s(t.__("收款方式")))])],1),i("v-uni-view",{staticClass:"m-cell-bd"},[i("v-uni-picker",{attrs:{value:t.index,range:t.banklists,"range-key":"user_bank_card_address"},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.bindPickerChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.banklists[t.index]?t.banklists[t.index]["user_bank_card_address"]:t.__("请选择收款方式")))])],1)],1),t.isbankName?t._e():i("v-uni-view",{staticClass:"m-cell-ft"},[i("v-uni-icon",{staticClass:"m-icon-warn",attrs:{type:"warn"}})],1)],1),i("v-uni-view",{staticClass:"m-cell"},[i("v-uni-view",{staticClass:"m-cell-hd"},[i("v-uni-label",{staticClass:"u-label"},[t._v(t._s(t.__("真实姓名")))])],1),i("v-uni-view",{staticClass:"m-cell-bd"},[i("v-uni-input",{staticClass:"u-input",attrs:{type:"text",value:t.UserRealName,placeholder:t.__("输入真实姓名"),maxlength:"20"},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.inputName.apply(void 0,arguments)}}})],1),t.isName?t._e():i("v-uni-view",{staticClass:"m-cell-ft"},[i("v-uni-icon",{staticClass:"m-icon-warn",attrs:{type:"warn"}})],1)],1),i("v-uni-view",{staticClass:"m-cell"},[i("v-uni-view",{staticClass:"m-cell-hd"},[i("v-uni-label",{staticClass:"u-label"},[t._v(t._s(t.__("手机号码")))])],1),i("v-uni-view",{staticClass:"m-cell-bd"},[i("v-uni-input",{staticClass:"u-input",attrs:{type:"number",value:t.UserPhone,placeholder:t.__("输入手机号码"),maxlength:"11"},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.onInputPhone.apply(void 0,arguments)}}})],1),t.isPhone?t._e():i("v-uni-view",{staticClass:"m-cell-ft"},[i("v-uni-icon",{staticClass:"m-icon-warn",attrs:{type:"warn"}})],1)],1),i("v-uni-view",{staticClass:"m-cell",attrs:{hidden:"true"}},[i("v-uni-view",{staticClass:"m-cell-hd"},[i("v-uni-label",{staticClass:"u-label"},[t._v(t._s(t.__("支付宝账号")))])],1),i("v-uni-view",{staticClass:"m-cell-bd"},[i("v-uni-input",{staticClass:"u-input",attrs:{value:t.AlipayAccount,placeholder:t.__("输入支付宝账号(选填)")},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.inputalipayAccount.apply(void 0,arguments)}}})],1),t.isalipayAccount?t._e():i("v-uni-view",{staticClass:"m-cell-ft"},[i("v-uni-icon",{staticClass:"m-icon-warn",attrs:{type:"warn"}})],1)],1),i("v-uni-view",{staticClass:"m-cell"},[i("v-uni-view",{staticClass:"m-cell-hd"},[i("v-uni-label",{staticClass:"u-label"},[t._v(t._s(t.__("银行名称")))])],1),i("v-uni-view",{staticClass:"m-cell-bd"},[i("v-uni-input",{staticClass:"u-input",attrs:{type:"text",value:t.BankName,placeholder:t.__("如：上海农业银行七宝支行")},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.inputbankName.apply(void 0,arguments)}}})],1),t.isbankName?t._e():i("v-uni-view",{staticClass:"m-cell-ft"},[i("v-uni-icon",{staticClass:"m-icon-warn",attrs:{type:"warn"}})],1)],1),i("v-uni-view",{staticClass:"m-cell"},[i("v-uni-view",{staticClass:"m-cell-hd"},[i("v-uni-label",{staticClass:"u-label"},[t._v(t._s(t.__("银行卡号")))])],1),i("v-uni-view",{staticClass:"m-cell-bd"},[i("v-uni-input",{staticClass:"u-input",attrs:{type:"number",value:t.BankAccount,placeholder:t.__("输入银行卡号")},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.inputbankAccount.apply(void 0,arguments)}}})],1),t.isbankAccount?t._e():i("v-uni-view",{staticClass:"m-cell-ft"},[i("v-uni-icon",{staticClass:"m-icon-warn",attrs:{type:"warn"}})],1)],1),i("v-uni-view",{staticClass:"m-cell"},[i("v-uni-view",{staticClass:"m-cell-hd"},[i("v-uni-label",{staticClass:"u-label"},[t._v(t._s(t.__("备注")))])],1),i("v-uni-view",{staticClass:"m-cell-bd"},[i("v-uni-input",{staticClass:"u-input",attrs:{type:"text",value:t.withdraw_desc,placeholder:t.__("输入备注(选填)")},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.inputWithdrawDescAccount.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{staticClass:"m-cell"},[i("v-uni-view",{staticClass:"m-cell-hd"},[i("v-uni-label",{staticClass:"u-label"},[t._v(t._s(t.__("支付密码")))])],1),i("v-uni-view",{staticClass:"m-cell-bd"},[i("v-uni-input",{staticClass:"u-input",attrs:{type:"text",password:"true",value:t.password,placeholder:t.__("输入支付密码")},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.inputPasswordAccount.apply(void 0,arguments)}}})],1)],1)],1),i("v-uni-view",{staticClass:"m-text-box"},[i("v-uni-view",[i("v-uni-label",{staticClass:"iconfont icon-14052218"}),t._v(t._s(t.__("提现规则")))],1),i("v-uni-view",[i("v-uni-view",[t._v(t._s(t.__("提示:每月的"))),i("v-uni-label",{staticStyle:{color:"red","padding-left":"10rpx"}},[t._v(t._s(t.withdraw_monthday))]),t._v(t._s(t.__("可以申请提现，最低提现额度"))),i("v-uni-label",{staticStyle:{color:"red","padding-left":"10rpx"}},[t._v(t._s(t.plantform_fx_withdraw_min_amount))]),t._v("，"+t._s(t.__("商家营收余额需要买家确认收货后"))),i("v-uni-label",{staticStyle:{color:"red","padding-left":"10rpx"}},[t._v(t._s(t.withdraw_received_day))]),t._v(t._s(t.__("天才可以申请提现"))+"。")],1)],1)],1),i("v-uni-view",{staticClass:"btn_box"},[i("v-uni-button",{staticClass:"u-btn u-btn-default",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.ApplyToCash.apply(void 0,arguments)}}},[t._v(t._s(t.__("申请提现")))])],1)],1),i("uni-popup",{ref:"popup",attrs:{type:"center"}},[t.loaded?i("v-uni-view",{staticClass:"uni-banner",staticStyle:{background:"#FFFFFF"}},[i("v-uni-view",{style:"height: "+t.h+"px; width:700uxp;padding:50rpx;"},[i("v-uni-scroll-view",{style:"height: "+t.h+"px; ",attrs:{"scroll-y":"true"}},[i("wxParse",{attrs:{content:t.protocol_text}})],1)],1),i("v-uni-view",{staticStyle:{height:"50px","text-align":"center"}},[i("v-uni-view",{staticClass:"button-sp-area"},[i("v-uni-button",{staticClass:"mini-btn",attrs:{type:"default",size:"mini"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.disagree.apply(void 0,arguments)}}},[t._v(t._s(t.__("不同意")))]),i("v-uni-button",{staticClass:"mini-btn",staticStyle:{"margin-left":"100rpx"},attrs:{type:"warn",size:"mini"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.agree.apply(void 0,arguments)}}},[t._v(t._s(t.__("同意")))])],1)],1)],1):t._e()],1)],1)},n=[]},"6c2f":function(t,a,i){"use strict";i("7a82");var s=i("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,i("ac1f"),i("00b4"),i("e25e");var e=s(i("5530")),n=s(i("e7b4")),l=s(i("29fd")),c=i("26cb"),u={name:"predeposit",data:function(){return{TotalPrice:0,canUseCardCashAmount:0,Price:"",WXCode:"",UserPhone:"",inputPrice:"",UserRealName:"",AlipayAccount:"",BankAccount:"",BankName:"",isPrice:!0,inputWXcode:"",isWXcode:!0,inputPhone:"",ValidDays:0,isPhone:!0,isName:!0,isalipayAccount:!0,isbankAccount:!0,isbankName:!0,tapindex:2,CashType:0,isShow:!0,AllowWithdraw:!0,password:"",isECashCard:!0,isMemDist:!0,withdraw_desc:"",protocol_text:"",loaded:!1,h:0,banklists:[],index:9999,plantform_fx_withdraw_min_amount:"",withdraw_fee_rate:"",withdraw_received_day:"",withdraw_min_amount:"",withdraw_monthday:""}},components:{wxParse:l.default,uniPopup:n.default},computed:(0,c.mapState)(["Config","StateCode","notice","plantformInfo","shopInfo","userInfo","hasLogin"]),onLoad:function(t){uni.setNavigationBarTitle({title:this.__("提现申请")});var a=this;a.$.request({url:this.Config.URL.pay.asset,data:{},success:function(t,i,s,e){200==i&&(a.setData({TotalPrice:0,canUseCardCashAmount:t.user_money,ValidDays:"",AlipayAccount:"",BankAccount:"",BankName:"",UserPhone:"",UserRealName:"",WXCode:"",AllowWithdraw:""}),t.user_money>0?a.setData({isShow:!0}):a.setData({isShow:!1}))}}),t.tapindex&&this.setData({tapindex:t.tapindex}),this.setData({isECashCard:!1,isMemDist:!1});var i=this.$.getSystemInfoSync().windowHeight;this.setData({h:i-50-50-100}),this.getProtocal(),this.load(),this.getPlantformInfo((function(t){a.setData({plantform_fx_withdraw_min_amount:t.plantform_fx_withdraw_min_amount,withdraw_fee_rate:t.withdraw_fee_rate,withdraw_received_day:t.withdraw_received_day,withdraw_min_amount:t.withdraw_min_amount,withdraw_monthday:t.withdraw_monthday})}))},methods:(0,e.default)((0,e.default)({},(0,c.mapMutations)(["login","logout","getPlantformInfo","forceUserInfo","getUserInfo"])),{},{load:function(){var t=this;t.$.request({url:this.Config.URL.pay.list_user_bank,data:{},success:function(a,i,s,e){a.items.length>0&&t.setData({banklists:a.items})}})},onInputPrice:function(t){this.setData({Price:t.detail.value}),this.$.isNull(t.detail.value)?this.setData({isPrice:!1}):this.setData({isPrice:!0})},allOrders:function(){this.setData({tapindex:1,CashType:0})},toBePaid:function(){this.setData({tapindex:2,CashType:1})},onInputWXcode:function(t){this.setData({WXCode:t.detail.value}),this.$.isNull(t.detail.value)?this.setData({isWXcode:!1}):this.setData({isWXcode:!0})},onInputPhone:function(t){this.setData({UserPhone:t.detail.value}),this.$.isNull(t.detail.value)?this.setData({isPhone:!1}):/^1[23456789]\d{9}$/.test(t.detail.value)?this.setData({isPhone:!0}):this.setData({isPhone:!1})},inputWithdrawDescAccount:function(t){this.setData({withdraw_desc:t.detail.value})},inputName:function(t){this.setData({UserRealName:t.detail.value}),this.$.isNull(t.detail.value)?this.setData({isName:!1}):this.setData({isName:!0})},inputalipayAccount:function(t){this.setData({AlipayAccount:t.detail.value}),t.detail.value?/^0?(13[0-9]|15[012356789]|18[0123456789]|14[0123456789]|17[0123456789])[0-9]{8}$/.test(t.detail.value)||/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(t.detail.value)?this.setData({isalipayAccount:!0}):this.setData({isalipayAccount:!1}):this.setData({isalipayAccount:!0})},bindPickerChange:function(t){var a=t.target.value;this.index=a,this.UserRealName=this.banklists[a].user_bank_card_name,this.UserPhone=this.banklists[a].user_bank_card_mobile,this.BankAccount=this.banklists[a].user_bank_card_code,this.BankName=this.banklists[a].bank_name},inputPasswordAccount:function(t){this.setData({password:t.detail.value})},inputbankName:function(t){this.setData({BankName:t.detail.value})},inputbankAccount:function(t){this.setData({BankAccount:t.detail.value}),t.detail.value?/^\d{15,20}$/.test(t.detail.value)?this.setData({isbankAccount:!0}):this.setData({isbankAccount:!1}):this.setData({isalipayAccount:!0})},submitdata:function(){var t=this;if(0==this.CashType?t.$.isNull(this.Price)?this.setData({isPrice:!1}):parseInt(this.Price)<100||this.Price%100>0?(this.setData({isPrice:!1}),t.$.alert(t.__("亲~提现金额必须是100的整数倍才能提现哟！"))):this.setData({isPrice:!0}):this.setData({isPrice:!0}),t.$.isNull(this.WXCode)?this.setData({isWXcode:!1}):this.setData({isWXcode:!0}),t.$.isNull(this.UserPhone)?this.setData({isPhone:!1}):/^1[23456789]\d{9}$/.test(this.UserPhone)?this.setData({isPhone:!0}):this.setData({isPhone:!1}),t.$.isNull(this.UserRealName)?this.setData({isName:!1}):this.setData({isName:!0}),this.AlipayAccount?/^0?(13[0-9]|15[012356789]|18[0123456789]|14[0123456789]|17[0123456789])[0-9]{8}$/.test(this.AlipayAccount)||/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(this.AlipayAccount)||this.setData({isalipayAccount:!1}):this.setData({isalipayAccount:!0}),this.BankAccount?/^\d{15,20}$/.test(this.BankAccount)?this.setData({isbankAccount:!0}):this.setData({isbankAccount:!1}):this.setData({isbankAccount:!0}),this.BankAccount&&t.$.isNull(this.BankName)?this.setData({isbankName:!1}):this.setData({isbankName:!0}),this.isPrice&&this.isWXcode&&this.isPhone&&this.isName&&this.isbankAccount&&this.isalipayAccount&&this.isbankName){var a={withdraw_amount:this.Price,withdraw_mobile:this.UserPhone,withdraw_account_no:this.BankAccount,withdraw_account_name:this.UserRealName,withdraw_bank:this.BankName,password:this.password};t.$.request({url:this.Config.URL.pay.consume_withdraw_add,data:a,success:function(a,i,s,e){200==i?(t.$.showModal(t.__("已申请提现！")),setTimeout((function(){t.$.navigateBack(1,(function(){}))}),2e3)):t.$.showModal(s)}})}},ApplyToCash:function(){var t=this;if(0==this.CashType&&(t.$.isNull(this.Price)?this.setData({isPrice:!1}):parseInt(this.Price)<this.plantform_fx_withdraw_min_amount?(this.setData({isPrice:!1}),t.$.alert(t.__("亲~提现金额必须大于")+this.plantform_fx_withdraw_min_amount+t.__("才能提现哟！"))):this.setData({isPrice:!0})),t.$.isNull(this.WXCode)?this.setData({isWXcode:!1}):this.setData({isWXcode:!0}),t.$.isNull(this.UserPhone)?this.setData({isPhone:!1}):/^1[23456789]\d{9}$/.test(this.UserPhone)?this.setData({isPhone:!0}):this.setData({isPhone:!1}),t.$.isNull(this.UserRealName)?this.setData({isName:!1}):this.setData({isName:!0}),this.AlipayAccount?/^0?(13[0-9]|15[012356789]|18[0123456789]|14[0123456789]|17[0123456789])[0-9]{8}$/.test(this.AlipayAccount)||/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(this.AlipayAccount)||this.setData({isalipayAccount:!1}):this.setData({isalipayAccount:!0}),this.BankAccount?/^\d{15,20}$/.test(this.BankAccount)?this.setData({isbankAccount:!0}):this.setData({isbankAccount:!1}):this.setData({isbankAccount:!0}),this.BankAccount&&t.$.isNull(this.BankName)?this.setData({isbankName:!1}):this.setData({isbankName:!0}),this.isPhone&&this.isName&&this.isbankAccount&&this.isalipayAccount&&this.isbankName){var a={withdraw_amount:this.Price,withdraw_mobile:this.UserPhone,withdraw_account_no:this.BankAccount,withdraw_account_name:this.UserRealName,withdraw_bank:this.BankName,withdraw_desc:this.withdraw_desc,password:this.password};t.$.request({url:this.Config.URL.pay.consume_withdraw_add,data:a,success:function(a,i,s,e){200==i?(t.$.alert(t.__("已申请提现！")),setTimeout((function(){t.$.navigateBack(1,(function(){}))}),2e3)):t.$.showModal(s)}})}},move:function(){var t=this;if(0==this.CashType?t.$.isNull(this.Price)?this.setData({isPrice:!1}):parseInt(this.Price)<100||this.Price%100>0?(this.setData({isPrice:!1}),t.$.alert(t.__("亲~提现金额必须是100的整数倍才能提现哟！"))):this.setData({isPrice:!0}):this.setData({isPrice:!0}),this.isPrice){var a={userId:this.userInfo.user_id,totalBonusesCash:this.Price};t.$.xsr(t.$.makeUrl(userapi.CommisionToECash,a),(function(a){0==a.Code?(t.$.alert(t.__("已转入余额！")),setTimeout((function(){t.$.navigateBack(1,(function(){}))}),2e3)):t.$.alert(a.Msg)}))}},getProtocal:function(){var t=this;t.$.request({url:t.cf.URL.protocol,data:{protocols_key:"withdraw_protocols_description"},success:function(a,i,s,e){a.state||(t.protocol_text=a.document,t.loaded=!0,t.$refs.popup.open())}})},disagree:function(){uni.showModal({title:"",content:this.__("十分抱歉，若您不同意此协议，我们将无法为您提现"),cancelText:this.__("返回"),confirmText:this.__("我再想想"),success:function(t){t.confirm||t.cancel&&uni.navigateBack({delta:1})}})},agree:function(){var t=this;t.$.request({url:t.cf.URL.protocol,data:{protocols_key:"withdraw_protocols_description",state:1},success:function(a,i,s,e){t.$refs.popup.close()}})}})};a.default=u},ab86:function(t,a,i){"use strict";i.r(a);var s=i("6c2f"),e=i.n(s);for(var n in s)["default"].indexOf(n)<0&&function(t){i.d(a,t,(function(){return s[t]}))}(n);a["default"]=e.a},acaa:function(t,a,i){var s=i("db5e");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var e=i("4f06").default;e("5ba3ff57",s,!0,{sourceMap:!1,shadowMode:!1})},b2ad:function(t,a,i){"use strict";i.r(a);var s=i("089f"),e=i("ab86");for(var n in e)["default"].indexOf(n)<0&&function(t){i.d(a,t,(function(){return e[t]}))}(n);i("008a");var l=i("f0c5"),c=Object(l["a"])(e["default"],s["b"],s["c"],!1,null,"b18a30ec",null,!1,s["a"],void 0);a["default"]=c.exports},db5e:function(t,a,i){var s=i("24fb");a=s(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */[data-v-b18a30ec]:export{theme_bg:#e93323}.m-navbar1[data-v-b18a30ec]{background:#e93323;color:#fff;display:flex}.m-navbar-item[data-v-b18a30ec]{padding:%?20?% 0;font-size:%?24?%}.m-navbar-item[data-v-b18a30ec]:after{border:none}.m-navbar-item.m-navbar-item-on[data-v-b18a30ec]{color:#fff;background:#e93323;border-bottom:%?2?% solid #fff}\r\n/* .m-navbar-item.m-navbar-item-on::before {background: $default-skin-bg;content: " ";position: absolute;left: 0;bottom: 0;right: 0;height: 6rpx;border-bottom: 6rpx solid #fff;color: #CCCCCC;-webkit-transform-origin: 0 100%;transform-origin: 0 100%;-webkit-transform: scaleY(0.5);transform: scaleY(0.5);z-index: 3;} */\r\n/* .m-tab{position: fixed;width: 100%;top: var(--window-top);z-index: 2;} */.topbg[data-v-b18a30ec]{background-color:#e93323;padding-bottom:%?40?%}.topinfo[data-v-b18a30ec]{display:inline-block;width:100%;text-align:center;color:#fff;font-size:14px;margin-top:%?56?%;position:relative}.topinfo uni-label[data-v-b18a30ec]{font-size:56px}.m-text-box[data-v-b18a30ec]{font-size:%?24?%;box-sizing:border-box;padding:%?20?%;color:#888;line-height:%?40?%}.m-text-box uni-label[data-v-b18a30ec]{padding-right:%?10?%}.m-btn-box[data-v-b18a30ec]{padding-bottom:%?40?%}.m-btn-box-two[data-v-b18a30ec]{display:flex;justify-content:space-around}.m-btn-box-two .u-btn[data-v-b18a30ec]{width:45%}.m-cell[data-v-b18a30ec]{padding:%?15?% %?30?%}',""]),t.exports=a}}]);