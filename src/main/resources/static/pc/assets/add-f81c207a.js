import{P as q,a4 as D,e as R,u as U,g as w,f as E,r as T,$ as a,i as A,T as V,t as L,a6 as $,n as S,p as F,v as y,y as r,z as o,x as i,A as d,E as M,aT as N,D as C,F as z,C as P,I as K,K as O,L as j}from"./index-21964c78.js";import{a as G,E as H}from"./form-item-8d3c5b0e.js";import{_ as J}from"./Img-77e61dbf.js";/* empty css              */import"./tag-b8b29d1f.js";import{a as Q,E as W}from"./select-ed2293fb.js";import"./scrollbar-c1d26490.js";import"./popper-251c4401.js";import{E as X}from"./image-viewer-dd6920ac.js";import{E as Y}from"./row-d248ec80.js";/* empty css               */import{E as Z}from"./col-d6038888.js";import{k as x,l as ee}from"./order-09ce62cc.js";import{_ as re}from"./_plugin-vue_export-helper-c27b6911.js";import"./castArray-18b00898.js";import"./_baseClone-42b68cca.js";import"./_Uint8Array-4a48d71f.js";import"./_initCloneObject-dc96d043.js";import"./overlay-b290a267.js";import"./refs-1278d799.js";import"./isUndefined-aa0326a0.js";import"./progress-e31fb86a.js";import"./cloneDeep-9c8ed640.js";import"./isEqual-3f4e7b62.js";/* empty css             */import"./index-f12e260f.js";import"./index-958427bc.js";import"./strings-b80b2625.js";import"./debounce-6ea0a711.js";import"./_baseIteratee-8f2ec951.js";import"./hasIn-54cf4aec.js";import"./index-a2bc563c.js";import"./constants-2604e35b.js";const te=q({components:{Plus:D},setup(){const e=R(),t=U(),v=w();let l=E({order_id:e.query.order_id,order_item_id:e.query.order_item_id,orderItem:{can_refund_amount:""},upload_img:[],reasonList:[],loading:!0,imageUrl:[],limit:4});const B=T(),p=E({return_reason_id:"",return_refund_amount:"",return_item_num:"",return_tel:"",return_buyer_message:"",return_item_image:"",order_id:e.query.order_id,order_item_id:e.query.order_item_id}),f=E({return_reason_id:[{required:!0,message:a("请选择退款原因"),trigger:"change"}],return_refund_amount:[{required:!0,message:a("请输入退款金额"),trigger:"blur"}],return_item_num:[{required:!0,message:a("请输入退货数量"),trigger:"blur"}],return_buyer_message:[{required:!0,message:a("请输入您的补充描述,有助于商家更好的处理售后问题"),trigger:"blur"}]}),g=async s=>{s&&await s.validate((m,b)=>{m?(console.log("submit!"),$.confirm(a("是否确认?"),{confirmButtonText:a("确定"),cancelButtonText:a("取消"),center:!0}).then(()=>{l.upload_img&&(p.return_item_image=l.upload_img.toString()),ee(p).then(n=>{n.status==200?$.alert(a("提交成功，请等待商家审核!"),a("成功"),{confirmButtonText:a("确定"),center:!0,callback:_=>{t.push({path:"/user/return/get",query:{return_id:n.data.return_id}})}}):V.error(n.msg)})})):console.log("error submit!",b)})},c=s=>{l.upload_img.push(s[1])};return A(()=>{let s={order_id:l.order_id,order_item_id:l.order_item_id};x(s).then(m=>{m.status==200?(l.orderItem=m.data,l.reasonList=m.data.return_reason_list):V.error(m.msg),l.loading=!1})}),{ruleFormRef:B,ruleForm:p,rules:f,counter:v,imgChang:c,submitForm:g,...L(l)}}});const oe={class:"col-xs-12 col-sm-12"},ue={class:"change_fon"},ne={key:0,class:"goods_layout"},le={class:"inside_column_first"},ae={class:"inside_column_second"},se={class:"inside_column_thirdly"},me={class:"change_refund_fon"},ie={class:"return_refund_amount_style"};function de(e,t,v,l,B,p){const f=Z,g=O,c=S("router-link"),s=Y,m=X,b=Q,h=W,n=H,_=j,I=J,k=G;return F(),y("div",oe,[r(s,null,{default:o(()=>[r(f,{span:12},{default:o(()=>[i("div",ue,d(e.$t("退款商品")),1)]),_:1}),r(f,{span:12,align:"right"},{default:o(()=>[r(c,{to:{path:"/user/order/detail",query:{order_id:e.order_id}}},{default:o(()=>[r(g,{class:"back_btn"},{default:o(()=>[C(d(e.$t("返回订单")),1)]),_:1})]),_:1},8,["to"])]),_:1})]),_:1}),e.orderItem?(F(),y("div",ne,[r(m,{src:e.orderItem.order_item_image,fit:"fit",class:"change_img",alt:e.orderItem.order_item_image},null,8,["src","alt"]),i("div",null,[i("div",le,d(e.orderItem.item_name),1),i("div",ae,d(e.$t("商品编号："))+d(e.orderItem.product_id),1),i("div",se,"￥"+d(e.orderItem.can_refund_amount),1)])])):M("",!0),i("div",me,d(e.$t("退款信息")),1),i("div",null,[r(k,{model:e.ruleForm,rules:e.rules,ref:"ruleFormRef",onSubmit:t[6]||(t[6]=N(()=>{},["prevent"]))},{default:o(()=>[r(n,{label:e.$t("退款原因:"),prop:"reason"},{default:o(()=>[r(h,{modelValue:e.ruleForm.return_reason_id,"onUpdate:modelValue":t[0]||(t[0]=u=>e.ruleForm.return_reason_id=u),placeholder:e.$t("请选择退款原因")},{default:o(()=>[(F(!0),y(z,null,P(e.reasonList,(u,_e)=>(F(),K(b,{label:u.return_reason_name,value:u.return_reason_id},null,8,["label","value"]))),256))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),i("div",ie,[r(n,{label:e.$t("退款金额:"),prop:"return_refund_amount"},{default:o(()=>[r(_,{modelValue:e.ruleForm.return_refund_amount,"onUpdate:modelValue":t[1]||(t[1]=u=>e.ruleForm.return_refund_amount=u)},null,8,["modelValue"])]),_:1},8,["label"]),r(n,{label:e.$t("退货数量:"),prop:"return_item_num"},{default:o(()=>[r(_,{modelValue:e.ruleForm.return_item_num,"onUpdate:modelValue":t[2]||(t[2]=u=>e.ruleForm.return_item_num=u)},null,8,["modelValue"])]),_:1},8,["label"])]),r(n,{label:e.$t("联系方式:"),prop:"return_tel"},{default:o(()=>[r(_,{modelValue:e.ruleForm.return_tel,"onUpdate:modelValue":t[3]||(t[3]=u=>e.ruleForm.return_tel=u)},null,8,["modelValue"])]),_:1},8,["label"]),r(n,{label:e.$t("补充描述:"),prop:"return_buyer_message"},{default:o(()=>[r(_,{type:"textarea",modelValue:e.ruleForm.return_buyer_message,"onUpdate:modelValue":t[4]||(t[4]=u=>e.ruleForm.return_buyer_message=u),placeholder:e.$t("请输入您的补充描述,有助于商家更好的处理售后问题")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(n,{label:"","label-width":"80px"},{default:o(()=>[r(I,{limit:"3",fileIamge:e.upload_img,index:e.index,onChange:e.imgChang},null,8,["fileIamge","index","onChange"])]),_:1}),r(n,null,{default:o(()=>[r(g,{type:"primary",size:"medium","native-type":"submit",onClick:t[5]||(t[5]=u=>e.submitForm(e.ruleFormRef))},{default:o(()=>[C(d(e.$t("申请退货")),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])])])}const He=re(te,[["render",de],["__scopeId","data-v-dadbe016"]]);export{He as default};
