import{P as w,a4 as F,du as E,g as P,r as g,f as A,aP as J,$ as d,n as B,p as t,v as m,I as C,z as c,H as L,y as p,F as M,b6 as Z,x as j,J as k}from"./index-21964c78.js";import{E as K}from"./overlay-b290a267.js";import{E as b}from"./progress-e31fb86a.js";/* empty css             */import{C as x}from"./index-f12e260f.js";import{E as R}from"./index-958427bc.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";const W=w({components:{Plus:F,PictureFilled:E},props:{limit:{type:Number,default:1},index:{type:Number,default:0},fileType:{type:String,default:"png|jpg|jpeg|gif"},isslot:{type:Number,default:0},styleType:{type:String,default:"width:121px;height:121px;"},fileIamge:{type:String,default:""}},setup(e,n){const{token:h}=P();let y=g(x.URL.upload_file+"?material_type=image");const I={...n};let U=A({Authorization:`Bearer ${h}`}),l=A([]);J(()=>e.fileIamge,(a,o)=>{a&&a!==o&&l.push(a)}),e.fileIamge&&l.push(e.fileIamge);const f=A([]),s=g(""),r=g(!1),u=()=>{I.emit("change",l,e.index)};return{uploadUrl:y,fileList:f,headers:U,imageUrl:l,dialogImageUrl:s,dialogVisible:r,handlePictureCardPreview:a=>{s.value=a.url,r.value=!0},handleRemove:(a,o)=>{l=[],o.length>0&&o.forEach((i,v)=>{l.push(i.url)}),u()},beforeUpload:(a,o)=>{const i=a.name,v=i.substring(i.lastIndexOf(".")+1).toLowerCase();if(e.fileType&&e.fileType.indexOf(v)<0)return R({title:d("提示"),message:d("文件类型不合法，请上传")+e.fileType,type:"warning"}),!1},handleSuccess:(a,o,i)=>{if(a.status==200)o.url=a.data.url,e.limit==1?l[0]=a.data.url:l.push(a.data.url);else return!1;u()},handleExceed:a=>{R({title:d("提示"),message:d("超出最大上传数量!"),type:"warning"})}}}}),X="data:image/png;base64,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";const Y=["src"],N={key:1,style:{position:"relative",top:"-1px",left:"-1px"},src:X},O=["src"];function G(e,n,h,y,I,U){const l=B("Plus"),f=k,s=b,r=B("PictureFilled"),u=K;return t(),m(M,null,[e.limit>1?(t(),C(s,{key:0,action:e.uploadUrl,"auto-upload":!0,headers:e.headers,"show-file-list":!0,name:"upfile","list-type":"picture-card","on-preview":e.handlePictureCardPreview,"on-remove":e.handleRemove,"on-success":e.handleSuccess,"on-exceed":e.handleExceed,"before-upload":e.beforeUpload,limit:e.limit},{default:c(()=>[p(f,null,{default:c(()=>[p(l)]),_:1})]),_:1},8,["action","headers","on-preview","on-remove","on-success","on-exceed","before-upload","limit"])):(t(),C(s,{key:1,style:L(e.styleType),action:e.uploadUrl,"auto-upload":!0,headers:e.headers,"show-file-list":!1,name:"upfile","list-type":"picture-card","on-success":e.handleSuccess,"before-upload":e.beforeUpload,"on-remove":e.handleRemove},{default:c(()=>[e.imageUrl[0]?(t(),m("img",{key:0,src:e.imageUrl[0],class:"img-item"},null,8,Y)):(t(),m(M,{key:1},[e.isslot?Z(e.$slots,"default",{key:0},()=>[p(r)]):(t(),m("img",N))],64))]),_:3},8,["style","action","headers","on-success","before-upload","on-remove"])),p(u,{modelValue:e.dialogVisible,"onUpdate:modelValue":n[0]||(n[0]=T=>e.dialogVisible=T)},{default:c(()=>[j("img",{"w-full":"",src:e.dialogImageUrl,alt:"Preview Image"},null,8,O)]),_:1},8,["modelValue"])],64)}const oe=S(W,[["render",G]]);export{oe as _};
