(function(t){function e(e){for(var a,s,n=e[0],l=e[1],c=e[2],p=0,d=[];p<n.length;p++)s=n[p],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,n=1;n<r.length;n++){var l=r[n];0!==i[l]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=r[0]))}return t}var a={},i={app:0},o=[];function s(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=a,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(r,a,function(e){return t[e]}.bind(null,a));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/SocialMediaDashboard/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var u=l;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},3947:function(t,e,r){t.exports=r.p+"img/icon-down.69a5c77f.svg"},5417:function(t,e,r){t.exports=r.p+"img/icon-up.95f916a5.svg"},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-main",{staticClass:"py-5",class:t.value?"white--text":"text--darken-3",style:t.value?"background:#17202A":"background: white"},[r("v-layout",{attrs:{"justify-space-between":"","mt-3":"","px-5":"",wrap:""}},[r("div",[r("p",{staticClass:"mb-1 font-weight-bold",staticStyle:{"font-size":"30px"}},[t._v("Social Media Dashboard")]),r("p",{staticStyle:{"font-size":"14px"}},[t._v("Total Followers: 23.004")])]),r("div",{staticClass:"d-flex align-center"},[r("p",{staticClass:"mb-0 font-weight-bold"},[t._v("Dark Mode")]),r("v-switch",{staticClass:"ml-5",attrs:{color:"white"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)]),r("v-layout",{staticClass:"d-flex justify-space-around",attrs:{wrap:""}},t._l(t.items,(function(t,e){return r("CardSocial",{key:e,attrs:{item:t}})})),1),r("v-layout",{attrs:{"justify-space-between":"","mt-5":"","px-5":"",wrap:""}},[r("p",{staticClass:"mb-1 font-weight-bold",staticStyle:{"font-size":"30px"}},[t._v("Overview - Today")])]),r("v-layout",{staticClass:"d-flex justify-space-around",attrs:{wrap:""}},t._l(t.overviews,(function(t,e){return r("CardOverviewVue",{key:e,attrs:{overview:t}})})),1)],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"rounded-lg my-4",style:"border-top: 5px solid "+t.item.color+" ; width:260px",attrs:{elevation:"5"}},[a("v-card-text",{staticClass:"d-flex justify-center mt-3"},[t.item.url?a("img",{attrs:{src:r("8158"),height:"24px",width:"24px",alt:""}}):a("v-icon",{attrs:{color:t.item.color}},[t._v("mdi-"+t._s(t.item.icon))]),a("p",{staticClass:"ml-1 mb-0"},[t._v(t._s(t.item.nickname))])],1),a("v-card-text",{staticClass:"text-center"},[a("p",{staticClass:"font-weight-bold display-2"},[t._v(t._s(t.item.views))]),a("p",{staticClass:"font-weight-light",staticStyle:{"font-size":"14px"}},[t._v(t._s(t.item.subtitle))]),a("div",{staticClass:"d-flex justify-center align-center"},[t.item.up?a("img",{attrs:{src:r("5417"),height:"10px",width:"10px",alt:""}}):a("img",{attrs:{src:r("3947"),height:"10px",width:"10px",alt:""}}),a("p",{staticClass:"font-weight-bold ml-2 mt-0 mb-0",class:t.item.up?"green--text":"red--text"},[t._v(t._s(t.item.followers)+" Today")])])])],1)},n=[],l={props:["item"],setup:function(){}},c=l,u=r("2877"),p=r("6544"),d=r.n(p),v=r("b0af"),f=r("99d9"),m=r("132d"),w=Object(u["a"])(c,s,n,!1,null,null,null),b=w.exports;d()(w,{VCard:v["a"],VCardText:f["a"],VIcon:m["a"]});var h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"px-2 rounded-lg my-3",staticStyle:{width:"300px"},attrs:{elevation:"5"}},[a("v-card-text",{staticClass:"d-flex"},[a("p",{staticClass:"mb-0"},[t._v(t._s(t.overview.title))]),a("v-spacer"),t.overview.url?a("img",{attrs:{src:r("8158"),alt:"",height:"24px",width:"24px"}}):a("v-icon",{attrs:{color:t.overview.color}},[t._v("mdi-"+t._s(t.overview.icon))])],1),a("v-card-text",{staticClass:"d-flex"},[a("p",{staticClass:"display-1 font-weight-bold mb-0"},[t._v(t._s(t.overview.number))]),a("v-spacer"),a("div",{staticClass:"green-text d-flex align-center"},[t.overview.up?a("img",{attrs:{src:r("5417"),alt:"",height:"10px",width:"10px"}}):a("img",{attrs:{src:r("3947"),alt:"",height:"10px",width:"10px"}}),a("p",{staticClass:"ml-1 mb-0",class:t.overview.up?"green--text":"red--text"},[t._v(t._s(t.overview.porcent)+"%")])])],1)],1)},x=[],g={props:["overview"]},y=g,C=r("2fa4"),_=Object(u["a"])(y,h,x,!1,null,null,null),k=_.exports;d()(_,{VCard:v["a"],VCardText:f["a"],VIcon:m["a"],VSpacer:C["a"]});var O={name:"App",components:{CardSocial:b,CardOverviewVue:k},setup:function(t){var e=[{views:"1987",nickname:"@ChristianCode99",subtitle:"FOLLOWERS",icon:"facebook",followers:12,up:!0,color:"blue"},{views:"1044",nickname:"@christianCode99",subtitle:"FOLLOWERS",icon:"twitter",followers:90,up:!0,color:"#5DADE2"},{views:"11k",nickname:"@christianCode99",subtitle:"FOLLOWERS",url:!0,icon:"instagram",followers:1e3,up:!0,color:"yellow"},{views:"8239",nickname:"Christian_code",subtitle:"SUBCRIBERS",icon:"youtube",followers:144,up:!1,color:"red"}],r=[{title:"Page Views",icon:"facebook",number:87,up:!0,porcent:3,color:"blue"},{title:"Likes",icon:"facebook",number:52,up:!1,porcent:2,color:"blue"},{title:"Likes",number:5462,url:!0,up:!0,porcent:2257},{title:"Page Views",number:"52k",url:!0,up:!0,porcent:1375},{title:"Retweets",icon:"twitter",number:"117",up:!0,porcent:302,color:"#5DADE2"},{title:"Likes",icon:"twitter",number:507,up:!0,porcent:553,color:"#5DADE2"},{title:"Likes",icon:"youtube",number:107,up:!1,porcent:10,color:"red"},{title:"Total Views",icon:"youtube",number:1407,up:!1,porcent:12,color:"red"}],a=!1;return{items:e,value:a,overviews:r}}},S=O,j=(r("034f"),r("7496")),V=r("a722"),F=r("f6c4"),L=r("b73d"),E=Object(u["a"])(S,i,o,!1,null,null,null),P=E.exports;d()(E,{VApp:j["a"],VLayout:V["a"],VMain:F["a"],VSwitch:L["a"]});var D=r("2f62");a["default"].use(D["a"]);var T=new D["a"].Store({state:{},mutations:{},actions:{},modules:{}}),M=r("f309"),A=r("5e4e");a["default"].use(M["a"]);var R=new M["a"]({theme:{options:{customProperties:!0},themes:{light:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},lang:{locales:{es:A["a"]},current:"es"}}),z=(r("d5e8"),r("5363"),r("a6f4"));a["default"].use(z["a"]),a["default"].config.productionTip=!1,new a["default"]({store:T,vuetify:R,render:function(t){return t(P)}}).$mount("#app")},8158:function(t,e,r){t.exports=r.p+"img/icon-instagram.991487fe.svg"},"85ec":function(t,e,r){}});
//# sourceMappingURL=app.d74b810a.js.map