webpackJsonp([0],{DvNa:function(e,t){},Gzr6:function(e,t){},HEIu:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view"),this._v(" "),t("div",[this._v(this._s(this.a))])],1)},staticRenderFns:[]};var i=n("VU/8")({name:"App",data:function(){return{a:4}},methods:{}},a,!1,function(e){n("Gzr6")},null,null).exports,r=n("/ocq"),o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"how"},[n("h4",[e._v("router跳转")]),e._v(" "),e._l(e.msg,function(t,s){return n("div",{key:s,staticClass:"button"},[n("router-link",{attrs:{to:"/a/"+t.id}},[e._v("详情")])],1)})],2)},staticRenderFns:[]};var l=[{id:1,name:"哈哈1"},{id:2,name:"哈哈2"},{id:3,name:"哈哈3"},{id:4,name:"哈哈4"}],c={name:"HelloWorld",components:{How:n("VU/8")({name:"how",data:function(){return{msg:[{name:"txt",id:1},{name:"hhl",id:1}]}},methods:{}},o,!1,function(e){n("HEIu")},null,null).exports},data:function(){return{msg:"",user:l,message:"页面加载于 "+(new Date).toLocaleString(),seen:!0}},methods:{reverseMessage:function(){console.log("测试"),this.message=this.message.split("").reverse().join("")}}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("How"),e._v(" "),n("div",{staticClass:"model"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.msg,expression:"msg"}],attrs:{type:"text",placeholder:"请输入如"},domProps:{value:e.msg},on:{input:function(t){t.target.composing||(e.msg=t.target.value)}}}),e._v(" "),n("div",{staticClass:"test"},[e._v(e._s(e.msg))])]),e._v(" "),n("div",{staticClass:"bind"},[n("span",{attrs:{title:e.message}},[e._v("动态绑定的提示信息！")])]),e._v(" "),n("div",{staticClass:"if"},[e.seen?n("p",[e._v("现在你看到我了")]):e._e()]),e._v(" "),n("div",{staticClass:"item"},[n("ul",e._l(e.user,function(t){return n("li",[n("div",{staticClass:"li-1"},[e._v(e._s(t.id))]),e._v(" "),n("div",{staticClass:"li-2"},[e._v(e._s(t.name))])])}),0)]),e._v(" "),n("div",{staticClass:"click"},[n("p",[e._v(e._s(e.message))]),e._v(" "),n("button",{on:{click:e.reverseMessage}},[e._v("点击")])])],1)},staticRenderFns:[]};var v=n("VU/8")(c,u,!1,function(e){n("DvNa")},"data-v-0b28a784",null).exports,d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"a"},[n("h4",[e._v("测试")]),e._v("\n  "+e._s(e.msg)+"\n  "),e._l(e.msg,function(t){return n("div",[n("span",[e._v(e._s(t.id))]),e._v(" "),n("span",[e._v(e._s(t.name))])])})],2)},staticRenderFns:[]};var m=n("VU/8")({name:"A",data:function(){return{msg:[]}},methods:{},created:function(){}},d,!1,function(e){n("tgJy")},null,null).exports;s.a.use(r.a);var _=new r.a({mode:"history",routes:[{path:"/",name:"HelloWorld",component:v},{path:"/a/:id",name:"a",component:m}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:_,components:{App:i},template:"<App/>"})},tgJy:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.fec79b93f6f6a3f5bfff.js.map