(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesub-subsite-subsitelist"],{"179a":function(t,e,i){"use strict";i.r(e);var n=i("61d5"),s=i("67e0");for(var r in s)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(r);i("c247");var c=i("f0c5"),o=Object(c["a"])(s["default"],n["b"],n["c"],!1,null,"4db9cfdf",null,!1,n["a"],void 0);e["default"]=o.exports},"35d5":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.select-city-wrap[data-v-6a590c1d]{position:relative;padding:0 %?30?%;background-color:#fff}.select-city .index[data-v-6a590c1d]{position:absolute;right:0;bottom:%?20?%;z-index:999;color:#2f9bfe;font-size:%?32?%}.select-city .index .index-item[data-v-6a590c1d]{width:%?40?%;height:%?42?%;line-height:%?42?%;text-align:center}.select-city .section[data-v-6a590c1d]{margin-bottom:%?19?%}.select-city .section .city-title[data-v-6a590c1d]{color:#333;font-size:%?28?%;margin-bottom:%?28?%}.select-city .section .letter[data-v-6a590c1d]{width:%?44?%;height:%?44?%;color:#fff;border-radius:100%;background-color:#2f9bfe;font-size:%?28?%;line-height:%?44?%;text-align:center;margin-bottom:%?30?%}.select-city .section .city-list[data-v-6a590c1d]{display:flex;flex-wrap:wrap}.select-city .section .city-list .city-item[data-v-6a590c1d]{width:%?190?%;height:%?55?%;margin-right:%?36?%;margin-bottom:%?28?%;line-height:%?55?%;text-align:center;border:1px solid #dcdcdc;border-radius:%?6?%;color:#999;font-size:%?28?%}.select-city .section .city-list .city-item.active[data-v-6a590c1d]{background-color:#d5ebff;border-color:#2f9bfe;color:#2f9bfe}',""]),t.exports=e},"39ad":function(t,e,i){var n=i("b596");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("4f06").default;s("26cb6223",n,!0,{sourceMap:!1,shadowMode:!1})},4933:function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=n(i("3835")),r={props:{citys:{type:Array,default:function(){return[]}},hotCitys:{type:Array,default:function(){return[]}},subsite_current:{type:Object,default:function(){return{}}}},data:function(){return{windowHeight:"",scrollIntoId:"F",current:this.subsite_current.subsite_name}},mounted:function(){var t=this;this.getSystemInfo(),setTimeout((function(){t.current=t.subsite_current.subsite_name}),400)},methods:{getSystemInfo:function(){var t=this;uni.getSystemInfo().then((function(e){var i=(0,s.default)(e,2),n=(i[0],i[1]);t.windowHeight="".concat(n.windowHeight,"px")}))},scrollTo:function(t){this.scrollIntoId="#"===t?"current":t},onSelect:function(t){this.current=t.subsite_name,this.$emit("input",t),this.$emit("on-select",t)}}};e.default=r},"61d5":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ss-select-city",{attrs:{citys:t.subsiteIndexRows,hotCitys:t.hotCitys,subsite_current:t.subsite_current},on:{"on-select":function(e){arguments[0]=e=t.$handleEvent(e),t.onSelectSubsite.apply(void 0,arguments)}}})},s=[]},"67e0":function(t,e,i){"use strict";i.r(e);var n=i("cfe9"),s=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=s.a},8529:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"select-city-wrap"},[i("v-uni-view",{staticClass:"select-city"},[i("v-uni-view",{staticClass:"index"},[i("v-uni-view",{staticClass:"index-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.scrollTo("#")}}},[t._v("#")]),t._l(t.citys,(function(e){return i("v-uni-view",{key:e.letter,staticClass:"index-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.scrollTo(e.letter)}}},[t._v(t._s(e.letter))])}))],2),i("v-uni-scroll-view",{style:{height:t.windowHeight},attrs:{"scroll-into-view":t.scrollIntoId,"scroll-y":!0,"scroll-with-animation":!0}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"section",attrs:{id:"current"}},[i("v-uni-view",{staticClass:"city-title"},[t._v(t._s(t.__("当前城市")))]),i("v-uni-view",{staticClass:"city-list"},[i("v-uni-view",{staticClass:"city-item"},[t._v(t._s(t.current))])],1)],1),t.hotCitys.length?i("v-uni-view",{staticClass:"section",attrs:{id:"hot"}},[i("v-uni-view",{staticClass:"city-title"},[t._v(t._s(t.__("热门城市")))]),i("v-uni-view",{staticClass:"city-list"},t._l(t.hotCitys,(function(e,n){return i("v-uni-view",{key:n,staticClass:"city-item",class:{active:t.current===e.subsite_name},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onSelect(e)}}},[t._v(t._s(e.subsite_name))])})),1)],1):t._e(),t._l(t.citys,(function(e){return i("v-uni-view",{key:e.letter,staticClass:"section",attrs:{id:e.letter}},[i("v-uni-view",{staticClass:"letter"},[t._v(t._s(e.letter))]),i("v-uni-view",{staticClass:"city-list"},t._l(e.list,(function(e,n){return i("v-uni-view",{key:n,staticClass:"city-item",class:{active:t.current===e.subsite_name},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onSelect(e)}}},[t._v(t._s(e.subsite_name))])})),1)],1)}))],2)],1)],1)],1)},s=[]},"99bd4":function(t,e,i){"use strict";var n=i("d422"),s=i.n(n);s.a},b596:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.page[data-v-4db9cfdf]{position:absolute;top:0;left:0;width:100%;min-height:100%;background-size:cover!important;background-position:top!important}',""]),t.exports=e},c247:function(t,e,i){"use strict";var n=i("39ad"),s=i.n(n);s.a},cfe9:function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=n(i("5530")),r=n(i("fb5e")),c=i("26cb"),o={data:function(){return{options:{},hotCitys:[],subsite_current:{},subsiteIndexRows:[]}},computed:(0,c.mapState)(["Config","StateCode","notice","plantformInfo","shopInfo","userInfo","hasLogin"]),components:{ssSelectCity:r.default},onLoad:function(t){uni.setNavigationBarTitle({title:this.__("选择分站")});this.getSubsiteList(),this.$set(this.subsite_current,"subsite_name",this.$.getStorageSync("site_name")),this.$set(this.subsite_current,"subsite_id",this.$.getStorageSync("site_id"))},methods:(0,s.default)((0,s.default)({},(0,c.mapMutations)(["login","logout","getPlantformInfo","forceUserInfo","getUserInfo","showCartNum"])),{},{getSubsiteList:function(){var t=this,e=t.$.getStorageSync("site_id")?t.$.getStorageSync("site_id"):0;t.$.request({url:t.Config.URL.subsite_list,data:{ss_site_id:e},ajaxCache:{timeout:t.Config.CACHE_EXPIRE},success:function(e,i,n,s){t.$set(t.subsite_current,"subsite_name",e.subsite_current_row["subsite_name"]),t.$set(t.subsite_current,"subsite_id",e.subsite_current_row["subsite_id"]),t.setData({subsite_current:e.subsite_current_row}),t.setData({subsiteIndexRows:e.citys}),t.setData({hotCitys:e.subsite_hot_rows})}})},onSelectSubsite:function(t){this.notice.postNotificationName("RefreshSubsite",t),this.$.backpage()}})};e.default=o},d422:function(t,e,i){var n=i("35d5");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("4f06").default;s("db12a052",n,!0,{sourceMap:!1,shadowMode:!1})},d474:function(t,e,i){"use strict";i.r(e);var n=i("4933"),s=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=s.a},fb5e:function(t,e,i){"use strict";i.r(e);var n=i("8529"),s=i("d474");for(var r in s)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(r);i("99bd4");var c=i("f0c5"),o=Object(c["a"])(s["default"],n["b"],n["c"],!1,null,"6a590c1d",null,!1,n["a"],void 0);e["default"]=o.exports}}]);