import{u as V,r as d,o as A,c as J,a as v,h as D,S as n,b as O,d as i,e as r,f as t,t as _,w as h,g as B,v as U,n as x,F as y,i as F,j as I,k as j,l as E,m as P,p as q}from"./index-UM1VD24g.js";const R=t("h1",null,[t("a",{href:"#"},"ONLINE TODO LIST")],-1),H={class:"todo_sm"},K={href:"#"},Q={class:"conatiner todoListPage vhContainer"},W={class:"todoList_Content"},X={class:"inputBox"},Y=t("i",{class:"fa fa-plus"},null,-1),Z=[Y],tt={key:0,class:"todoList_nolist"},et=t("div",{class:"d-flex justify-content-center align-items-center"},[t("p",{class:"text-center"},"目前尚無待辦事項"),t("div",{class:"todoList_nolist_image"})],-1),ot=[et],st={key:1,class:"todoList_list"},at={class:"todoList_tab"},nt={class:"todoList_items"},it={class:"todoList_itemdiv"},rt={class:"todoList_label"},lt=["onUpdate:modelValue","onClick"],ct=["onClick"],ut=t("i",{class:"fa fa-times"},null,-1),dt=[ut],ht={class:"todoList_statistics"},ft={key:0},mt={key:1},vt={__name:"TodosComponent",setup(w){const m=V(),a=d(""),k=d("未提供"),l=d([]),g=d(""),C=d(""),c=d("all"),f=d("");A(async()=>{await b()});const L=J(()=>c.value=="true"?l.value.filter(e=>e.status):c.value=="false"?l.value.filter(e=>!e.status):l.value),p=e=>{c.value=e},$=async()=>{g.value=l.value.filter(e=>e.status),C.value=l.value.filter(e=>!e.status)},M=async()=>{document.cookie="userTodo=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/",n.fire({title:"登出成功",icon:"success",confirmButtonText:"關閉",confirmButtonColor:"#3085d6",timer:1500}),setTimeout(()=>{m.push({name:"login"})},3e3)},b=async()=>{if(a.value=document.cookie.replace(/(?:(?:^|.*;\s*)userTodo\s*\=\s*([^;]*).*$)|^.*$/,"$1"),a.value)try{const e=await v.get(`${D}`,{headers:{Authorization:a.value}});e.data.status==!0&&(k.value=e.data.nickname,await u())}catch{n.fire({title:"登入失效",icon:"error",text:"請重新登入",confirmButtonText:"關閉",confirmButtonColor:"#808080",timer:1500}),setTimeout(()=>{document.cookie="userTodo=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/",m.push({name:"login"})},3e3)}else n.fire({title:"登入失效",icon:"error",text:"請重新登入",confirmButtonText:"關閉",confirmButtonColor:"#808080",timer:1500}),setTimeout(()=>{document.cookie="userTodo=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/",m.push({name:"login"})},3e3)},u=async()=>{try{const e=await v.get(`${O}`,{headers:{Authorization:a.value}});l.value=e.data.data,$()}catch{document.cookie="userTodo=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/",n.fire({title:"登入失效",icon:"error",text:"請重新登入",confirmButtonText:"關閉",confirmButtonColor:"#808080",timer:1500}),setTimeout(()=>{document.cookie="userTodo=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/",m.push({name:"login"})},3e3)}},z=async()=>{if(!(!f.value||!a.value))try{const e=j;(await v.post(`${e}`,{content:f.value},{headers:{Authorization:a.value}})).data.status==!0&&n.fire({title:"新增成功",icon:"success",confirmButtonText:"關閉",confirmButtonColor:"#808080",timer:1500}),f.value="",await u()}catch{n.fire({title:"新增失敗",icon:"error",text:"請重新新增",confirmButtonText:"關閉",confirmButtonColor:"#808080",timer:1500}),f.value="",await u()}},G=async e=>{if(a.value)try{const s=E(e),o=await v.delete(`${s}`,{headers:{Authorization:a.value}});o.data.status==!0&&n.fire({title:o.data.message,icon:"success",confirmButtonText:"關閉",confirmButtonColor:"#808080",timer:1500}),await u()}catch{n.fire({title:"刪除失敗",icon:"error",text:"請重新切換",confirmButtonText:"關閉",confirmButtonColor:"#808080",timer:1500}),await u()}},N=async e=>{if(a.value)try{const s=P(e),o=await v.patch(`${s}`,{},{headers:{Authorization:a.value}});o.data.status==!0&&n.fire({title:o.data.message,icon:"success",confirmButtonText:"關閉",confirmButtonColor:"#808080",timer:1500}),await u()}catch{n.fire({title:"狀態更新失敗!",icon:"error",text:"請重新切換",confirmButtonText:"關閉",confirmButtonColor:"#808080",timer:1500}),await u()}};return(e,s)=>(i(),r(y,null,[t("nav",null,[R,t("ul",null,[t("li",H,[t("a",K,[t("span",null,_(k.value)+"的代辦事項",1)])]),t("li",null,[t("a",{href:"#",onClick:h(M,["prevent"])},"登出")])])]),t("div",Q,[t("div",W,[t("div",X,[B(t("input",{"onUpdate:modelValue":s[0]||(s[0]=o=>f.value=o),type:"text",placeholder:"請輸入待辦事項",required:""},null,512),[[U,f.value]]),t("a",{href:"#",onClick:h(z,["prevent"])},Z)]),l.value.length==0?(i(),r("div",tt,ot)):(i(),r("div",st,[t("ul",at,[t("li",null,[t("a",{href:"#",class:x({active:c.value=="all"}),onClick:s[1]||(s[1]=h(o=>p("all"),["prevent"]))}," 全部 ",2)]),t("li",null,[t("a",{href:"#",class:x({active:c.value=="false"}),onClick:s[2]||(s[2]=h(o=>p("false"),["prevent"]))}," 待完成 ",2)]),t("li",null,[t("a",{href:"#",class:x({active:c.value=="true"}),onClick:s[3]||(s[3]=h(o=>p("true"),["prevent"]))}," 已完成 ",2)])]),t("div",nt,[t("div",it,[(i(!0),r(y,null,F(L.value,(o,S)=>(i(),r("ul",{class:"todoList_item",key:S},[t("li",null,[t("label",rt,[B(t("input",{class:"todoList_input",type:"checkbox","onUpdate:modelValue":T=>o.status=T,onClick:h(T=>N(o.id),["prevent"])},null,8,lt),[[I,o.status]]),t("span",null,_(o.content),1)]),t("a",{href:"#",onClick:h(T=>G(o.id),["prevent"])},dt,8,ct)])]))),128))]),t("div",ht,[c.value=="true"?(i(),r("p",ft,_(g.value.length)+" 個已完成項目",1)):(i(),r("p",mt,_(C.value.length)+" 個待完成項目",1))])])]))])])],64))}},_t={id:"todoListPage",class:"bg-half"},Tt={__name:"TodosView",setup(w){return(m,a)=>(i(),r("div",_t,[q(vt)]))}};export{Tt as default};