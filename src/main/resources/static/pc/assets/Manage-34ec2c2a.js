import{Q as N,r as k,f as A,$ as c,w as h,U as B,O as D,p as s,v as p,x as _,A as r,y as l,z as u,G as U,D as E,F as $,I as q,E as v,L as R,K as T}from"./index-78223f15.js";import{E as G,a as J}from"./form-item-8b9adddb.js";/* empty css               *//* empty css              *//* empty css                    */import{E as M,a as S}from"./radio-4fcd33f8.js";import{b as z,c as L,d as K}from"./invoice-97ae25d1.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";const Q=N({props:{invoiceId:{type:Number,default:0}},setup(e,i){const f={...i},C=k();let n=A({user_invoice_id:0,invoice_title:"",invoice_company_code:"",invoice_phone:"",invoice_bankname:"",invoice_bankaccount:"",invoice_contact_mobile:"",invoice_contact_email:"",invoice_address:"",invoice_type:1,invoice_content:"",invoice_is_default:0,invoice_kind:1,invoice_is_company:"0",invoice_contact_name:""});const F=A({invoice_is_company:[{required:!0,message:c("请选择抬头类型"),trigger:"blur"}],invoice_title:[{required:!0,message:c("请输入发票抬头"),trigger:"blur"}],invoice_company_code:[{required:!0,message:c("请输入纳税人识别号"),trigger:"blur"}],invoice_phone:[{required:!0,message:c("请输入注册电话"),trigger:"blur"}],invoice_bankname:[{required:!0,message:c("请输入开户银行"),trigger:"blur"}],invoice_bankaccount:[{required:!0,message:c("请输入银行账号"),trigger:"blur"}]});let t=k(!1),m=k(!1);const b=o=>{n.invoice_type=o,o==2?(n.invoice_is_company="1",m.value=!0):m.value=!1,console.log(n.invoice_type)},d=o=>{console.log(o),n.invoice_is_company=o},y=o=>{o&&o.resetFields()},g=()=>{L(n).then(o=>{o.status==200?D.alert(c("修改成功!"),c("成功"),{confirmButtonText:c("确定"),center:!0,callback:V=>{f.emit("update",{})}}):B.error(o.mag),t.value=!1})},a=()=>{K(n).then(o=>{o.status==200?D.alert(c("添加成功!"),c("成功"),{confirmButtonText:c("确定"),center:!0,callback:V=>{f.emit("update",{})}}):B.error(o.mag),t.value=!1})},I=async o=>{o&&await o.validate((V,w)=>{V?(console.log("submit!"),t.value=!0,n.user_invoice_id?g():a()):console.log("error submit!",w)})};return h(()=>{n.user_invoice_id=e.invoiceId,e.invoiceId&&z({user_invoice_id:e.invoiceId}).then(o=>{o.status==200?(n.invoice_address=o.data.invoice_address,n.invoice_bankaccount=o.data.invoice_bankaccount,n.invoice_bankname=o.data.invoice_bankname,n.invoice_type=o.data.invoice_type,n.invoice_company_code=o.data.invoice_company_code,n.invoice_contact_email=o.data.invoice_contact_email,n.invoice_contact_mobile=o.data.invoice_contact_mobile,n.invoice_content=o.data.invoice_content,n.invoice_is_default=o.data.invoice_is_default,n.invoice_kind=o.data.invoice_kind,n.invoice_phone=o.data.invoice_phone,n.invoice_title=o.data.invoice_title,n.invoice_is_company=o.data.invoice_is_company?"1":"0",n.user_invoice_id=o.data.user_invoice_id,n.invoice_contact_name=o.data.invoice_contact_name):B.error(o.msg)})}),{selectCategory:b,changeSelectType:d,resetForm:y,submitForm:I,loading:t,form:n,rules:F,ruleFormRef:C,disabled:m}}});const j={class:"mod_box",id:"profile-manage"},H={class:"mod_box_hd"},P={class:"mod_box_edit"},W={class:"J_optionList options options-list clearfix"};function X(e,i,f,C,n,F){const t=G,m=M,b=S,d=R,y=T,g=J;return s(),p("div",j,[_("div",H,[_("h4",null,r(e.$t("编辑发票内容")),1)]),_("div",P,[l(g,{"label-position":"left",ref:"ruleFormRef",model:e.form,rules:e.rules,"label-width":"170px"},{default:u(()=>[l(t,{label:e.$t("发票类型"),prop:"invoice_title"},{default:u(()=>[_("ul",W,[_("li",{class:U(["J_option",{selected:e.form.invoice_type==1}]),onClick:i[0]||(i[0]=a=>e.selectCategory(1))},r(e.$t("普通发票")),3),_("li",{class:U(["J_option",{selected:e.form.invoice_type==2}]),onClick:i[1]||(i[1]=a=>e.selectCategory(2))},r(e.$t("增值税专用发票")),3)])]),_:1},8,["label"]),l(t,{label:e.$t("抬头类型"),prop:"invoice_is_company"},{default:u(()=>[l(b,{modelValue:e.form.invoice_is_company,"onUpdate:modelValue":i[2]||(i[2]=a=>e.form.invoice_is_company=a),onChange:e.changeSelectType},{default:u(()=>[l(m,{label:"0",disabled:e.disabled},{default:u(()=>[E(r(e.$t("个人")),1)]),_:1},8,["disabled"]),l(m,{label:"1"},{default:u(()=>[E(r(e.$t("企业")),1)]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1},8,["label"]),l(t,{label:e.$t("发票抬头"),prop:"invoice_title"},{default:u(()=>[l(d,{modelValue:e.form.invoice_title,"onUpdate:modelValue":i[3]||(i[3]=a=>e.form.invoice_title=a)},null,8,["modelValue"])]),_:1},8,["label"]),e.form.invoice_type==1?(s(),p($,{key:0},[e.form.invoice_is_company==1?(s(),q(t,{key:0,label:e.$t("纳税人识别号"),prop:"invoice_company_code"},{default:u(()=>[l(d,{modelValue:e.form.invoice_company_code,"onUpdate:modelValue":i[4]||(i[4]=a=>e.form.invoice_company_code=a)},null,8,["modelValue"])]),_:1},8,["label"])):v("",!0)],64)):(s(),p($,{key:1},[e.form.invoice_is_company==1?(s(),p($,{key:0},[l(t,{label:e.$t("纳税人识别号"),prop:"invoice_company_code"},{default:u(()=>[l(d,{modelValue:e.form.invoice_company_code,"onUpdate:modelValue":i[5]||(i[5]=a=>e.form.invoice_company_code=a)},null,8,["modelValue"])]),_:1},8,["label"]),l(t,{label:e.$t("注册电话"),prop:"invoice_phone"},{default:u(()=>[l(d,{modelValue:e.form.invoice_phone,"onUpdate:modelValue":i[6]||(i[6]=a=>e.form.invoice_phone=a)},null,8,["modelValue"])]),_:1},8,["label"]),l(t,{label:e.$t("注册地址"),prop:"invoice_address"},{default:u(()=>[l(d,{modelValue:e.form.invoice_address,"onUpdate:modelValue":i[7]||(i[7]=a=>e.form.invoice_address=a)},null,8,["modelValue"])]),_:1},8,["label"]),l(t,{label:e.$t("开户银行"),prop:"invoice_bankname"},{default:u(()=>[l(d,{modelValue:e.form.invoice_bankname,"onUpdate:modelValue":i[8]||(i[8]=a=>e.form.invoice_bankname=a)},null,8,["modelValue"])]),_:1},8,["label"]),l(t,{label:e.$t("银行账号"),prop:"invoice_bankaccount"},{default:u(()=>[l(d,{modelValue:e.form.invoice_bankaccount,"onUpdate:modelValue":i[9]||(i[9]=a=>e.form.invoice_bankaccount=a)},null,8,["modelValue"])]),_:1},8,["label"]),v("",!0),v("",!0)],64)):v("",!0)],64)),l(t,{label:e.$t("收票人邮箱"),prop:"invoice_contact_email"},{default:u(()=>[l(d,{modelValue:e.form.invoice_contact_email,"onUpdate:modelValue":i[12]||(i[12]=a=>e.form.invoice_contact_email=a)},null,8,["modelValue"])]),_:1},8,["label"]),l(t,null,{default:u(()=>[l(y,{type:"primary",onClick:i[13]||(i[13]=a=>e.submitForm(e.ruleFormRef)),loading:e.loading},{default:u(()=>[E(r(e.$t("保存")),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model","rules"])])])}const le=O(Q,[["render",X],["__scopeId","data-v-0641e5fa"]]);export{le as _};