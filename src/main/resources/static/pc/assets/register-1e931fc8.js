import{P as te,g as S,u as oe,r as y,f as k,$ as l,dK as le,i as re,n as se,p as c,v as E,x as n,aR as e,y as r,z as a,D as f,A as d,I as h,E as C,G as ae,cs as F,aT as ie,F as ne,au as R,L as ue,K as de,V as pe,W as _e,T as p,ap as ce,at as me,e0 as fe}from"./index-21964c78.js";import{E as ge}from"./overlay-b290a267.js";import{_ as ye}from"./Index-a6110770.js";import{E as ve,a as he}from"./form-item-8d3c5b0e.js";import{E as xe}from"./checkbox-85319853.js";import{E as be}from"./image-viewer-dd6920ac.js";/* empty css               */import{_ as we}from"./Verify-05ba80f2.js";/* empty css              */import"./tag-b8b29d1f.js";import{a as Ve,E as ke}from"./select-ed2293fb.js";import"./scrollbar-c1d26490.js";import"./popper-251c4401.js";import{h as Ee}from"./helper-0ec263a7.js";import{_ as Ce}from"./_plugin-vue_export-helper-c27b6911.js";import"./refs-1278d799.js";import"./isUndefined-aa0326a0.js";import"./castArray-18b00898.js";import"./_baseClone-42b68cca.js";import"./_Uint8Array-4a48d71f.js";import"./_initCloneObject-dc96d043.js";import"./isEqual-3f4e7b62.js";import"./hasIn-54cf4aec.js";import"./flatten-3a6a3668.js";import"./debounce-6ea0a711.js";/* empty css             */import"./strings-b80b2625.js";import"./_baseIteratee-8f2ec951.js";import"./index-a2bc563c.js";import"./dayjs.min-8a7592b2.js";const M=b=>(pe("data-v-00d663bb"),b=b(),_e(),b),Ue={class:"login-container"},Ie={class:"square"},ze={class:"leftSquare"},Ae=["src"],Se={class:"rightSquare"},Fe=M(()=>n("div",{class:"errors-container"},null,-1)),Re={class:"login-header"},Me={href:"javascript:void(0)",class:"logo"},qe={style:{"margin-left":"65px"}},Be={style:{display:"none"}},De={class:"top-right text-left hide",style:{width:"409px"}},Ne={class:"login-footer text-right hidden"},Te=M(()=>n("div",{class:"info-links"},null,-1)),je=te({__name:"register",setup(b){const{afterRegister:q,setLogin:B}=S(),D=S(),N=oe(),T=y(""),v=y(!0),w=y(),U=y(60),_=y(),I=y();let z=y(""),g=y(!1);const t=k({user_account:"",password:"",verify_code:"",district_info:"",ureg_type:1,user_intl:"+86",user_province_id:"",user_city_id:"",user_county_id:"",isAgree:!1,is_verify:!1,rand_key:Math.floor(Math.random()*9e8)+1e8}),j=(s,o,u)=>{o=o+"",o===""?u(new Error(l("请输入账号"))):o.length<3||o.length>30?u(new Error(l("账号长度3 - 30"))):t.ureg_type&&t.ureg_type==1?Ee.tel(o,t.user_intl)?u():u(new Error(l("请输入正确的手机号"))):u()},L=k({user_account:[{required:!0,message:l("请输入账号"),trigger:"change"},{validator:j,trigger:"blur"}],password:[{required:!0,message:l("请输入密码"),trigger:"change"},{min:6,max:15,message:l("密码长度6 - 12"),trigger:"blur"}],verify_code:[{required:!0,message:l("请输入验证码"),trigger:"change"}]});k({});let $=()=>{let s={};if(!t.is_verify){p.error(l("请拖动滑块完成验证"));return}if(t.ureg_type==1){if(!t.user_account){p.error(l("请输入手机号"));return}s.mobile=t.user_intl+t.user_account,ce(s).then(o=>{o.status==200?p.success(l("验证码已经发送成功，请尽快输入验证码!")):p.error(o.msg)})}else if(t.ureg_type==2){if(!t.user_account){p.error(l("请输入邮箱号"));return}s.email=t.user_account,me(s).then(o=>{o.status==200?p.success(l("验证码已经发送成功，请尽快输入验证码!")):(v.value=!0,_.value=0,p.error(o.msg))})}else R({}).then(o=>{if(o.status==200)p.success(l("验证码已经发送成功，请尽快输入验证码!"));else{p.error(o.msg);return}});w.value||(_.value=U.value,v.value=!1,w.value=setInterval(()=>{_.value>0&&_.value<=U.value?(_.value--,console.log("count----",_)):(v.value=!0,clearInterval(w.value),w.value=null)},1e3))};const K=s=>{t.is_verify=s};let O=()=>{if(!t.is_verify){p.error(l("请拖动滑块完成验证"));return}if(!t.isAgree){p.error(l("请先同意用户协议"));return}let s={user_account:t.user_account,password:t.password,verify_code:t.verify_code,bind_type:t.ureg_type,rand_key:t.rand_key};t.ureg_type==1&&(s.user_account=t.user_intl+t.user_account,s.user_mobile=t.user_intl+t.user_account,s.verify_key=t.user_intl+t.user_account,s.user_email=""),fe(s).then(o=>{o.status==200?(q(o.data),B(!0),N.back(-1)):(console.log(l("注册失败")),v.value=!0,_.value=0,p.error(o.msg))})},A=()=>{R({rand_key:t.rand_key}).then(s=>{if(s){let o=new FileReader;o.onload=function(u){z.value=u.target.result},o.readAsDataURL(s)}})};le({config_key:"account_login_bg"}).then(s=>{s.status==200&&(T.value=s.data[0].config_value)});const P=async s=>{s&&await s.validate((o,u)=>{o?(O(),console.log(o)):console.log("error submit!",u)})},W=()=>{t.isAgree=!0,g.value=!1};return re(()=>{A()}),(s,o)=>{const u=se("router-link"),x=ue,m=ve,G=Ve,H=ke,J=we,V=de,Q=be,X=xe,Y=he,Z=ye,ee=ge;return c(),E(ne,null,[n("div",null,[n("div",Ue,[n("div",Ie,[n("div",ze,[n("img",{src:e(D).info.account_login_bg,style:{"border-radius":"10px 0px 0px 10px"}},null,8,Ae)]),n("div",Se,[Fe,r(Y,{class:"login-form",ref_key:"ruleFormRef",ref:I,rules:e(L),model:e(t),"label-width":"69px","label-position":"left",onSubmit:o[12]||(o[12]=ie(()=>{},["prevent"]))},{default:a(()=>[n("div",Re,[n("a",Me,[n("span",null,[r(u,{to:{path:"/login/login"}},{default:a(()=>[f(d(e(l)("账号登录")),1)]),_:1})]),n("span",qe,[r(u,{to:{path:"/login/register"}},{default:a(()=>[f(d(e(l)("新用户注册")),1)]),_:1})])]),n("p",Be,d(e(l)("登录到 ")),1)]),e(t).ureg_type==0?(c(),h(m,{key:0,style:{width:"409px",height:"45px"},label:e(l)(""),prop:"user_account"},{default:a(()=>[r(x,{style:{width:"409px",height:"45px","font-size":"16px"},modelValue:e(t).user_account,"onUpdate:modelValue":o[0]||(o[0]=i=>e(t).user_account=i),placeholder:e(l)("请输入账号")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])):e(t).ureg_type==1?(c(),h(m,{key:1,label:e(l)(""),prop:"user_account"},{default:a(()=>[r(x,{style:{width:"409px",height:"45px","font-size":"16px"},modelValue:e(t).user_account,"onUpdate:modelValue":o[2]||(o[2]=i=>e(t).user_account=i),modelModifiers:{number:!0},placeholder:e(l)("请输入手机号"),class:"input-with-select"},{prepend:a(()=>[r(H,{modelValue:e(t).user_intl,"onUpdate:modelValue":o[1]||(o[1]=i=>e(t).user_intl=i),placeholder:"Select",style:{width:"90px"}},{default:a(()=>[r(G,{label:"+86",value:"+86"})]),_:1},8,["modelValue"])]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])):e(t).ureg_type==2?(c(),h(m,{key:2,label:e(l)(""),prop:"user_account"},{default:a(()=>[r(x,{style:{width:"409px",height:"45px","font-size":"16px"},modelValue:e(t).user_account,"onUpdate:modelValue":o[3]||(o[3]=i=>e(t).user_account=i),placeholder:e(l)("请输入电子邮箱")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])):C("",!0),r(m,null,{default:a(()=>[r(J,{onUpdate:K,handlerWidth:"74"})]),_:1}),e(t).ureg_type?(c(),h(m,{key:3,class:"verify-code",label:e(l)(""),prop:"verify_code"},{default:a(()=>[r(x,{modelValue:e(t).verify_code,"onUpdate:modelValue":o[4]||(o[4]=i=>e(t).verify_code=i),placeholder:e(l)("请输入验证码"),style:{width:"61%","font-size":"16px"}},null,8,["modelValue","placeholder"]),e(v)?(c(),h(V,{key:0,class:"send-code",onClick:e($),type:"primary"},{default:a(()=>[f(d(e(l)("发送验证码")),1)]),_:1},8,["onClick"])):(c(),h(V,{key:1,class:"send-code",style:{"background-color":"#f5f5f5",color:"black"}},{default:a(()=>[f(d(e(_))+" s "+d(e(l)("后获取")),1)]),_:1}))]),_:1},8,["label"])):(c(),h(m,{key:4,class:"verify-code",label:e(l)(""),prop:"verify_code"},{default:a(()=>[r(x,{modelValue:e(t).verify_code,"onUpdate:modelValue":o[5]||(o[5]=i=>e(t).verify_code=i),placeholder:e(l)("请输入验证码"),style:{width:"409px","font-size":"16px"}},{append:a(()=>[r(V,{style:{padding:"0",width:"102px",display:"inherit"},onClick:e(A)},{default:a(()=>[r(Q,{class:"img-responsive",style:{height:"41px"},src:e(z),lazy:""},null,8,["src"])]),_:1},8,["onClick"])]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])),r(m,{label:e(l)(""),prop:"password",style:{"margin-top":"-13px"}},{default:a(()=>[r(x,{style:{width:"409px",height:"45px","font-size":"16px","margin-top":"24px"},modelValue:e(t).password,"onUpdate:modelValue":o[6]||(o[6]=i=>e(t).password=i),type:"password",autocomplete:"new-password",placeholder:e(l)("请设置6-12位字母、数字或符号密码")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(m,null,{default:a(()=>[r(V,{type:"primary",size:"large",style:{width:"409px",height:"45px","font-size":"21px"},"native-type":"submit",onClick:o[7]||(o[7]=i=>P(e(I)))},{default:a(()=>[f(d(e(l)("注册")),1)]),_:1})]),_:1}),r(m,{label:"",style:{color:"#fff","margin-bottom":"2px"}},{default:a(()=>[r(X,{label:e(l)("点击注册即代表您同意"),size:"large",modelValue:e(t).isAgree,"onUpdate:modelValue":o[8]||(o[8]=i=>e(t).isAgree=i)},null,8,["label","modelValue"]),n("a",{href:"javascript:void(0);",class:ae({agreement:e(t).isAgree}),title:"用户协议",onClick:o[9]||(o[9]=i=>F(g)?g.value=!0:g=!0)},d(e(l)("《用户服务协议》")),3)]),_:1}),n("div",De,[e(t).ureg_type!=1?(c(),E("a",{key:0,href:"javascript:void(0);",class:"mobile",onClick:o[10]||(o[10]=()=>{e(t).ureg_type=1,e(t).user_account="",e(t).password="",e(t).verify_code="",v.value=!0,_.value=0})},d(e(l)("手机注册")),1)):C("",!0),f("    "),e(t).ureg_type!=2?(c(),E("a",{key:1,href:"javascript:void(0);",class:"mobile",onClick:o[11]||(o[11]=()=>{e(t).ureg_type=2,e(t).user_account="",e(t).password="",e(t).verify_code="",v.value=!0,_.value=0})},d(e(l)("电子邮箱注册")),1)):C("",!0)]),n("div",Ne,[r(u,{to:{path:"/login/findpwd"}},{default:a(()=>[f(d(e(l)("登录遇到问题")),1)]),_:1}),f(" | "),r(u,{to:{path:"/login/login"}},{default:a(()=>[f(d(e(l)("我已注册，现在登录")),1)]),_:1}),Te])]),_:1},8,["rules","model"])])])])]),r(ee,{modelValue:e(g),"onUpdate:modelValue":o[13]||(o[13]=i=>F(g)?g.value=i:g=i),width:"947px",title:e(l)("用户注册协议和隐私政策"),draggable:""},{default:a(()=>[r(Z,{onUpdate:W})]),_:1},8,["modelValue","title"])],64)}}});const yt=Ce(je,[["__scopeId","data-v-00d663bb"]]);export{yt as default};
