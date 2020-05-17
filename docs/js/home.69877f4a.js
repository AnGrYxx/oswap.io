(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"61d0":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[s("div",{staticClass:"container-sm px-3"},[s("Box",{staticClass:"d-flex"},[s("div",{staticClass:"flex-auto"},[s("label",{staticClass:"d-block",attrs:{for:"input"}},[t._v(" Input "),s("LabelBalance",{attrs:{asset:t.inputAsset},on:{select:t.selectAmount}})],1),s("InputAmount",{attrs:{id:"input",asset:t.inputAsset},on:{change:t.updateOutputAmount},model:{value:t.inputAmount,callback:function(e){t.inputAmount=e},expression:"inputAmount"}})],1),s("div",{staticClass:"text-right mt-4 d-flex"},[s("a",{staticClass:"ml-2 p-2 color-gray-6",on:{click:t.switchAssets}},[s("Icon",{attrs:{name:"switch"}})],1),s("ButtonSelectToken",{attrs:{default:"base",not:t.outputAsset},model:{value:t.inputAsset,callback:function(e){t.inputAsset=e},expression:"inputAsset"}})],1)]),s("Box",{staticClass:"d-flex"},[s("div",{staticClass:"flex-auto"},[s("label",{staticClass:"d-block",attrs:{for:"output"}},[t._v("Output")]),s("InputAmount",{attrs:{id:"output",asset:t.outputAsset},on:{change:t.updateInputAmount},model:{value:t.outputAmount,callback:function(e){t.outputAmount=e},expression:"outputAmount"}})],1),s("div",{staticClass:"text-right mt-4 d-flex"},[s("a",{staticClass:"ml-2 p-2 color-gray-6",on:{click:t.switchAssets}},[s("Icon",{attrs:{name:"switch"}})],1),s("ButtonSelectToken",{attrs:{not:t.inputAsset},model:{value:t.outputAsset,callback:function(e){t.outputAsset=e},expression:"outputAsset"}})],1)]),"send"===t.$route.name?s("Box",[s("label",{staticClass:"d-block",attrs:{for:"to"}},[t._v("Recipient address")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.to,expression:"to"}],staticClass:"form-control input-amount border-0 p-0",attrs:{id:"to",type:"text",autocomplete:"off",placeholder:"FAB6TH7I..."},domProps:{value:t.to},on:{input:function(e){e.target.composing||(t.to=e.target.value)}}})]):t._e(),t.rate?s("Box",[s("p",{staticClass:"text-white float-right m-0"},[t._v(" 1 "),s("Ticker",{attrs:{asset:t.outputAsset}}),t._v(" = "+t._s(t.rate)+" "),s("Ticker",{attrs:{asset:t.inputAsset}})],1),s("label",{attrs:{for:"to"}},[t._v("Exchange rate")])]):t._e(),s("div",{staticClass:"text-center mb-4"},[s("button",{staticClass:"btn-submit px-6 rounded-2 mb-4",attrs:{type:"submit",disabled:!t.inputAsset||!t.outputAsset||!t.inputAmount||!t.outputAmount}},["send"===t.$route.name?[t._v("Send")]:[t._v("Swap")]],2)])],1)])},u=[],o=(s("b0c0"),s("b680"),s("acd8"),s("96cf"),s("1da1")),i=(s("4160"),s("d81d"),s("d3b7"),s("3ca3"),s("159b"),s("ddb0"),s("d4ec")),a=s("bee2"),r=function(){function t(e){Object(i["a"])(this,t),this.pools=e}return Object(a["a"])(t,[{key:"init",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.pools.map((function(t){return t.init()})),t.next=3,Promise.all(e);case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"hasLiquidity",value:function(){return this.pools.forEach((function(t){if(!t.hasLiquidity())return!1})),!0}},{key:"getAmountBought",value:function(t,e){var s=0;while(this.pools[s])t=this.pools[s].getAmountBought(t,e),e=this.pools[s].asset0===e?this.pools[s].asset1:this.pools[s].asset0,s++;return t}},{key:"getAmountSold",value:function(t,e){var s=this.pools.length-1;while(this.pools[s])t=this.pools[s].getAmountSold(t,e),e=this.pools[s].asset0===e?this.pools[s].asset1:this.pools[s].asset0,s--;return t}}]),t}(),c=s("152f"),p=function(){function t(e,s,n){Object(i["a"])(this,t),this.routes=[],this.factory=e,this.inputAsset=s,this.outputAsset=n}return Object(a["a"])(t,[{key:"getRoute",value:function(t){var e,s=this,n=0;return this.routes.forEach((function(u,o){var i=u.getAmountBought(t,s.inputAsset);i>n&&(n=i,e=u)})),e}},{key:"getAmountBought",value:function(t){var e=this,s=0;return this.routes.forEach((function(n,u){var o=n.getAmountBought(t,e.inputAsset);o>s&&(s=o)})),s}},{key:"getAmountSold",value:function(t){var e=this,s=0;return this.routes.forEach((function(n,u){var o=n.getAmountSold(t,e.outputAsset);(!s||o<s&&o>0)&&(s=o)})),s}},{key:"init",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,s,n,u,o=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.factory.getPoolsByPair(this.inputAsset,this.outputAsset),e.forEach((function(t){return o.routes.push(o.toRoute([t]))})),"base"!==this.inputAsset&&"base"!==this.outputAsset&&(s=this.factory.getPoolsByPair(this.inputAsset,"base"),n=this.factory.getPoolsByPair("base",this.outputAsset),s&&n&&s.forEach((function(t){n.forEach((function(e){o.routes.push(o.toRoute([t,e]))}))}))),u=this.routes.map((function(t){return t.init()})),t.next=6,Promise.all(u);case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"toRoute",value:function(t){var e=this,s=t.map((function(t){var s=e.factory.pools[t];return new c["a"](t,[s.asset0,s.asset1])}));return new r(s)}}]),t}(),h=(s("99af"),s("90a9")),l=function(){function t(e,s){Object(i["a"])(this,t),this.pools=e,this.pairs=s}return Object(a["a"])(t,[{key:"getPoolsByPair",value:function(t,e){var s=Object(h["m"])(t)>Object(h["m"])(e),n=s?t:e,u=s?e:t,o=this.pairs["".concat(n,"_").concat(u)];return o&&o.pools?o.pools:[]}}]),t}(),m={data:function(){return{trade:!1,inputAsset:"",outputAsset:"",inputAmount:"",outputAmount:"",to:this.$route.query.to,rate:0}},watch:{inputAsset:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e,s){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e===s){t.next=4;break}return t.next=3,this.init();case 3:this.updateOutputAmount();case 4:case"end":return t.stop()}}),t,this)})));function e(e,s){return t.apply(this,arguments)}return e}(),outputAsset:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e,s){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e===s){t.next=4;break}return t.next=3,this.init();case 3:this.updateOutputAmount();case 4:case"end":return t.stop()}}),t,this)})));function e(e,s){return t.apply(this,arguments)}return e}()},methods:{updateRate:function(){if(this.inputAsset&&this.outputAsset){var t=this.$store.state.settings.assets,e=Object(h["n"])(this.inputAmount,t[this.inputAsset].decimals),s=Object(h["n"])(this.outputAmount,t[this.outputAsset].decimals),n=parseFloat((e/s).toFixed(6));this.rate=n<=0||n===1/0?0:n}else this.rate=0},selectAmount:function(t){this.inputAmount=t,this.updateOutputAmount()},switchAssets:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.inputAsset,this.inputAsset=this.outputAsset,this.outputAsset=e,this.outputAmount="",this.inputAmount="",t.next=7,this.init();case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),init:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.inputAsset&&this.outputAsset){t.next=2;break}return t.abrupt("return");case 2:return e=this.$store.state.settings,s=new l(e.pools,e.pairs),this.trade=new p(s,this.inputAsset,this.outputAsset),t.next=7,this.trade.init();case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),handleSubmit:function(){var t={},e=this.trade.getRoute(this.inputAmount),s=e.pools[0].address;this.to&&"send"===this.$route.name&&(t.to=this.to),e.pools[1]&&(t.to_aa=e.pools[1].address),location.href=Object(h["g"])(s,t,this.inputAmount,this.inputAsset)},updateOutputAmount:function(){this.inputAsset&&this.outputAsset&&(this.inputAmount&&(this.outputAmount=this.trade.getAmountBought(this.inputAmount)||""),this.updateRate())},updateInputAmount:function(){this.inputAsset&&this.outputAsset&&(this.outputAmount&&(this.inputAmount=this.trade.getAmountSold(this.outputAmount)||""),this.updateRate())}}},f=m,A=s("2877"),d=Object(A["a"])(f,n,u,!1,null,null,null);e["default"]=d.exports},d81d:function(t,e,s){"use strict";var n=s("23e7"),u=s("b727").map,o=s("d039"),i=s("1dde"),a=i("map"),r=a&&!o((function(){[].map.call({length:-1,0:1},(function(t){throw t}))}));n({target:"Array",proto:!0,forced:!a||!r},{map:function(t){return u(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=home.69877f4a.js.map