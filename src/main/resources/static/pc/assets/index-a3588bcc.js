import{Q as I,l as R,b as j,g as q,e as N,u as z,f as M,$ as d,r as D,i as W,t as H,O as L,eb as O,U as C,ec as G,b4 as J,am as K,a8 as Q,n as S,p as f,v as c,x as u,y as t,z as l,A as s,D as i,E as V,J as X,K as P,F as Y,C as Z,I as x,W as ee,X as te,L as oe}from"./index-78223f15.js";/* empty css               */import{a as ue,E as ae}from"./form-item-8b9adddb.js";import{_ as se}from"./Img-372f434f.js";/* empty css                       */import{E as le,a as ne}from"./checkbox-9b81128d.js";import{E as re}from"./cascader-panel-78ede08c.js";/* empty css              */import"./popper-7ac694e5.js";import"./tag-c15f0a42.js";import"./radio-4fcd33f8.js";import"./scrollbar-afb507b1.js";import{E as ie,a as me}from"./step-486a0d8a.js";/* empty css             */import{_ as pe}from"./addr-5e1cd51c.js";import{_ as de}from"./sigh-b4833e15.js";import{_ as fe}from"./yes-1a60a976.js";import{_ as ce}from"./_plugin-vue_export-helper-c27b6911.js";import"./castArray-c12d26ef.js";import"./_baseClone-95bc8770.js";import"./_Uint8Array-e95ddee1.js";import"./_initCloneObject-cfd68362.js";import"./overlay-46bc55b6.js";import"./refs-eab7d2f3.js";import"./isUndefined-aa0326a0.js";import"./progress-bb109638.js";import"./cloneDeep-2e723db0.js";import"./isEqual-528f6bc1.js";import"./index-97ee7e1c.js";import"./index-f7dfb3b1.js";import"./hasIn-61fe7d07.js";import"./flatten-011cba25.js";import"./rand-14326ce1.js";import"./strings-4bc551b5.js";import"./arrays-e667dc24.js";import"./index-b0526b91.js";import"./debounce-429b1daa.js";import"./index-089c6298.js";const ge=""+new URL("radio_check-5e7412f7.png",import.meta.url).href,_e=I({name:"index",components:{Location:R,ArrowRight:j},setup(){const e=q();N();const a=z(),o=M({active:1,userTypes:[],isLoading:!1,ifState:!1,areaList:[],form:{},rules:{company_name:[{required:!0,trigger:"blur",message:d("请输入企业全称")}],contacts_department:[{required:!0,trigger:"blur",message:d("请输入职位")}],contacts_name:[{required:!0,trigger:"blur",message:d("请输入联系人")}],contacts_phone:[{required:!0,trigger:"blur",message:d("请输入联系人电话")}],company_address:[{required:!0,trigger:"blur",message:d("请输入公司详细地址")}],type_ids:[{required:!0,trigger:"change",message:d("请选择公司类别")}],district_info:[{required:!0,trigger:"change",message:d("请选择公司地址")}]}}),k=D(),A=D(),w=D(""),h=r=>{o.form.company_business_license=r[0]},$=async r=>{r&&await r.validate((E,y)=>{if(E){if(o.form&&(o.form.type_ids=o.form.type_ids.toString()),!e.hasLogin){L.confirm(d("请先登录"),{confirmButtonText:d("确定"),cancelButtonText:d("取消"),dangerouslyUseHTMLString:!0,center:!0}).then(()=>{a.push({path:"/login/login"})});return}L.confirm(d("是否确认提交?"),{confirmButtonText:d("确定"),cancelButtonText:d("取消"),center:!0}).then(()=>{o.isLoading=!0,o.form.company_id?O(o.form).then(p=>{p.status==200?C.success(p.msg):C.error(p.msg),_()}):G(o.form).then(p=>{p.status==200?C.success(p.msg):C.error(p.msg),_()})})}})},B=async()=>{const{data:r}=await J({type_enable:1,size:500});o.userTypes=r.items},_=()=>{K({}).then(r=>{r.data?(o.form=Object.assign({},r.data),o.form.district_info=[r.data.company_province_id,r.data.company_city_id,r.data.company_county_id],r.data.type_ids.trim()&&(o.form.type_ids=r.data.type_ids.split(",").map(Number)),o.form.company_state==1?(o.active=2,o.ifState=!0):o.form.company_state==2?(o.active=3,o.ifState=!0):o.form.company_state==3&&(o.active=3),o.isLoading=!1):o.form={}})},v=()=>{o.ifState=!1};let g=r=>{let E=A.value.getCheckedNodes(),y=E[0].pathValues,p=E[0].pathLabels;o.form.district_info=y,o.form.company_province=p[0],o.form.company_city=p[1],o.form.company_county=p[2],o.form.company_province_id=y[0],o.form.company_city_id=y[1],o.form.company_county_id=y[2]};const m=()=>{Q({is_three:0}).then(r=>{o.areaList=r.data})};return W(()=>{B(),_(),m()}),{styleType:w,formRef:k,submitForm:$,changeWithdraw:v,areaCheng:g,getDistrictArea:m,getCompanyData:_,cascaderAddress:A,initTypes:B,imgChang:h,...H(o)}}});const b=e=>(ee("data-v-28a6e2ff"),e=e(),te(),e),ye={class:"center_column"},he={class:"container"},Ee={class:"breadcrumb clearfix"},Fe=b(()=>u("img",{src:pe,style:{width:"20px",height:"20px",position:"relative","margin-right":"10px"}},null,-1)),Be={class:"space-icon"},Ce=["title"],be={class:"container"},Ae={style:{width:"800px","min-height":"120px",margin:"0 auto"}},$e={key:0,class:"head-layout"},ve=b(()=>u("img",{style:{width:"62px",height:"62px","margin-right":"20px","margin-top":"20px"},src:ge},null,-1)),De={style:{color:"#aaaaaa"}},Ve={style:{"margin-top":"10px"}},ke={style:{color:"red","font-size":"14px"}},we={key:1,class:"head-layout"},Le=b(()=>u("img",{style:{width:"62px",height:"62px","margin-right":"20px","margin-top":"20px"},src:de},null,-1)),Se={style:{color:"#aaaaaa"}},Ue={style:{"margin-top":"10px"}},Te={style:{color:"red","font-size":"14px"}},Ie={key:2,class:"head-layout"},Re=b(()=>u("img",{style:{width:"62px",height:"62px","margin-right":"20px","margin-top":"10px"},src:fe},null,-1)),je={style:{color:"#aaaaaa"}},qe={style:{"margin-top":"10px"}},Ne={style:{display:"flex","justify-content":"center"}},ze={style:{"margin-top":"20px","padding-bottom":"20px","text-align":"center"}},Me={key:0},We={key:1},He={key:2},Oe={key:3},Ge={key:4};function Je(e,a,o,k,A,w){const h=S("router-link"),$=S("ArrowRight"),B=X,_=me,v=ie,g=oe,m=ae,r=re,E=le,y=ne,p=se,U=ue,F=P;return f(),c("div",ye,[u("div",he,[u("div",Ee,[Fe,t(h,{to:"/index",class:"home",title:e.$t("首页")},{default:l(()=>[i(s(e.$t("首页")),1)]),_:1},8,["title"]),u("span",Be,[t(B,null,{default:l(()=>[t($)]),_:1})]),u("span",{class:"home cur",title:e.$t("企业认证")},s(e.$t("企业认证")),9,Ce)])]),u("div",be,[u("div",Ae,[t(v,{active:e.active,"align-center":"","finish-status":"success"},{default:l(()=>[t(_,{title:e.$t("提交资料")},null,8,["title"]),t(_,{title:e.$t("等待审核")},null,8,["title"]),t(_,{title:e.$t("认证结果")},null,8,["title"])]),_:1},8,["active"]),e.form&&e.form.company_state==1&&e.ifState?(f(),c("div",$e,[ve,u("div",null,[u("h2",null,s(e.$t("您的请求已提交，请等待管理员审核")),1),u("div",De,[u("p",Ve,s(e.$t("审核结果将在24小时内以短信或邮件通知您")),1),u("p",null,[i(s(e.$t("审核期间，可以在个人中心的"))+" ",1),t(h,{to:{path:"/user/message/lists"}},{default:l(()=>[i(s(e.$t("消息中心")),1)]),_:1}),i(" "+s(e.$t("查看审核状态")),1)]),u("p",ke,s(e.$t("注：管理员完成审核前，如需修改企业信息，请点击下方“取消申请”按钮并重新提交申请信息")),1)])])])):V("",!0),e.form&&e.form.company_state==3?(f(),c("div",we,[Le,u("div",null,[u("h2",null,s(e.$t("审核未通过")),1),u("div",Se,[u("p",Ue,s(e.$t("驳回原因："))+s(e.form.company_review_remarks),1),u("p",null,[i(s(e.$t("可以在个人中心的"))+" ",1),t(h,{to:{path:"/user/message/lists"}},{default:l(()=>[i(s(e.$t("消息中心")),1)]),_:1}),i(" "+s(e.$t("查看审核结果")),1)]),u("p",Te,s(e.$t("注：请立即重新提交申请信息")),1)])])])):V("",!0),e.form&&e.form.company_state==2?(f(),c("div",Ie,[Re,u("div",null,[u("h2",null,s(e.$t("审核通过")),1),u("div",je,[u("p",qe,[i(s(e.$t("可以在个人中心的"))+" ",1),t(h,{to:{path:"/user/message/lists"}},{default:l(()=>[i(s(e.$t("消息中心")),1)]),_:1}),i(" "+s(e.$t("查看审核结果")),1)])])])])):V("",!0)]),u("div",Ne,[t(U,{ref:"formRef",disabled:e.ifState,"label-width":"110px",model:e.form,rules:e.rules,style:{width:"500px"}},{default:l(()=>[t(m,{label:e.$t("企业全称"),prop:"company_name"},{default:l(()=>[t(g,{modelValue:e.form.company_name,"onUpdate:modelValue":a[0]||(a[0]=n=>e.form.company_name=n),clearable:"",placeholder:e.$t("请输入企业全称")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(m,{label:e.$t("职位"),prop:"contacts_department"},{default:l(()=>[t(g,{modelValue:e.form.contacts_department,"onUpdate:modelValue":a[1]||(a[1]=n=>e.form.contacts_department=n),clearable:"",placeholder:e.$t("请输入职位")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(m,{label:e.$t("联系人"),prop:"contacts_name"},{default:l(()=>[t(g,{modelValue:e.form.contacts_name,"onUpdate:modelValue":a[2]||(a[2]=n=>e.form.contacts_name=n),clearable:"",placeholder:e.$t("请输入联系人")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(m,{label:e.$t("联系人电话"),prop:"contacts_phone"},{default:l(()=>[t(g,{modelValue:e.form.contacts_phone,"onUpdate:modelValue":a[3]||(a[3]=n=>e.form.contacts_phone=n),clearable:"",placeholder:e.$t("请输入联系人电话")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(m,{label:e.$t("联系人邮箱"),prop:"contacts_email"},{default:l(()=>[t(g,{modelValue:e.form.contacts_email,"onUpdate:modelValue":a[4]||(a[4]=n=>e.form.contacts_email=n),clearable:"",placeholder:e.$t("请输入联系人邮箱")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(m,{label:e.$t("省市区"),prop:"district_info"},{default:l(()=>[t(r,{ref:"cascaderAddress",modelValue:e.form.district_info,"onUpdate:modelValue":a[5]||(a[5]=n=>e.form.district_info=n),options:e.areaList,props:{label:"district_name",value:"district_id"},onChange:e.areaCheng,clearable:!0},null,8,["modelValue","options","onChange"])]),_:1},8,["label"]),t(m,{label:e.$t("公司详细地址"),prop:"company_address"},{default:l(()=>[t(g,{modelValue:e.form.company_address,"onUpdate:modelValue":a[6]||(a[6]=n=>e.form.company_address=n),clearable:"",placeholder:e.$t("请输入公司详细地址")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(m,{label:e.$t("纳税人识别号"),prop:"company_code"},{default:l(()=>[t(g,{modelValue:e.form.company_code,"onUpdate:modelValue":a[7]||(a[7]=n=>e.form.company_code=n),clearable:"",placeholder:e.$t("请输入纳税人识别号")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(m,{label:e.$t("企业类别"),prop:"type_ids"},{default:l(()=>[t(y,{modelValue:e.form.type_ids,"onUpdate:modelValue":a[8]||(a[8]=n=>e.form.type_ids=n)},{default:l(()=>[(f(!0),c(Y,null,Z(e.userTypes,(n,T)=>(f(),x(E,{key:T,label:n.type_id},{default:l(()=>[i(s(n.type_title),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),t(m,{label:e.$t("营业执照"),prop:"company_business_license"},{default:l(()=>[t(p,{styleType:e.styleType,fileIamge:e.form.company_business_license,limit:1,onChange:e.imgChang},null,8,["styleType","fileIamge","onChange"])]),_:1},8,["label"])]),_:1},8,["disabled","model","rules"])]),u("div",ze,[e.form&&e.form.company_state==1&&e.ifState?(f(),c("div",Me,[t(F,{type:"info",class:"content-right-bot bgj",onClick:e.changeWithdraw},{default:l(()=>[i(s(e.$t("取消申请")),1)]),_:1},8,["onClick"])])):e.form&&e.form.company_state==1&&!e.ifState?(f(),c("div",We,[t(F,{type:"warning",loading:e.isLoading,class:"content-right-bot bgj",onClick:a[9]||(a[9]=n=>e.submitForm(e.formRef))},{default:l(()=>[i(s(e.$t("重新提交")),1)]),_:1},8,["loading"])])):e.form&&e.form.company_state==2?(f(),c("div",He,[t(F,{type:"success",class:"content-right-bot bgj"},{default:l(()=>[i(s(e.$t("审核通过")),1)]),_:1})])):e.form&&e.form.company_state==3?(f(),c("div",Oe,[t(F,{type:"warning",loading:e.isLoading,class:"content-right-bot bgj",onClick:a[10]||(a[10]=n=>e.submitForm(e.formRef))},{default:l(()=>[i(s(e.$t("重新提交")),1)]),_:1},8,["loading"])])):(f(),c("div",Ge,[t(F,{type:"primary",loading:e.isLoading,class:"content-right-bot bgj",onClick:a[11]||(a[11]=n=>e.submitForm(e.formRef))},{default:l(()=>[i(s(e.$t("立即提交")),1)]),_:1},8,["loading"])]))])])])}const Lt=ce(_e,[["render",Je],["__scopeId","data-v-28a6e2ff"]]);export{Lt as default};
