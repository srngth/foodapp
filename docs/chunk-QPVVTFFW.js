import{c as n}from "./chunk-J6ICYO4L.js";var g="ionKeyboardDidShow",p="ionKeyboardDidHide",b=150,r={},o={},s=!1,v=()=>{r={},o={},s=!1},k= e=>{if(n.getEngine())y(e);else{if(!e.visualViewport)return;o=c(e.visualViewport),e.visualViewport.onresize=()=>{K(e),l()||D(e)?a(e):d(e)&&i(e)}}},y= e=>{e.addEventListener("keyboardDidShow", t=>a(e,t)),e.addEventListener("keyboardDidHide",()=>i(e))},a=(e, t)=>{E(e,t),s=!0},i= e=>{u(e),s=!1},l=()=>{let e=(r.height-o.height)*o.scale;return!s&&r.width===o.width&&e>b},D= e=>s&&!d(e),d= e=>s&&o.height===e.innerHeight,E=(e, t)=>{let h=t?t.keyboardHeight:e.innerHeight-o.height,f=new CustomEvent(g,{detail:{keyboardHeight:h}});e.dispatchEvent(f)},u= e=>{let t=new CustomEvent(p);e.dispatchEvent(t)},K= e=>{r=Object.assign({},o),o=c(e.visualViewport)},c= e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale});export{g as a,p as b,v as c,k as d,a as e,i as f,l as g,D as h,d as i,K as j,c as k};
