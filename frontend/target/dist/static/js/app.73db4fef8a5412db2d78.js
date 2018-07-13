webpackJsonp([1],{"E1/q":function(t,e){},HMUl:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"title"},[this._v("Repayment Plan")]),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},r,!1,function(t){n("E1/q")},null,null).exports,o=n("/ocq"),i=n("mvHQ"),u=n.n(i),l=n("5dBV"),p=n.n(l),d={name:"RepayForm",data:function(){return{amount:null,interest:null,duration:null,date:null,errors:[],postResult:null}},methods:{checkForm:function(t){this.errors=[],this.amount?this.amount<0&&this.errors.push("Negative numbers not allowed as loan amount"):this.errors.push("Please provide a loan amount"),this.interest?this.interest<0&&this.errors.push("Negative numbers not allowed as interest rate"):this.errors.push("Please provide an interest rate"),this.duration?this.duration<0&&this.errors.push("Negative numbers not allowed as duration"):this.errors.push("Please provide a duration"),this.date?Date.parse(this.date)<new Date&&this.errors.push("Date cannot be today or in the past"):this.errors.push("Please provide a start date"),this.errors.length||(t.preventDefault(),this.calcPay()),t.preventDefault()},calcPay:function(){var t=this,e={loanAmount:this.amount,nominalRate:p()(this.interest).toFixed(2),duration:this.duration,startDate:new Date(this.date).toISOString()},n=u()(e);fetch("/generate-plan",{method:"POST",body:n,mode:"cors",headers:{Accept:"*/*","Content-type":"application/json; charset=UTF-8","X-Requested-With":"XMLHttpRequest"}}).then(function(t){if(t.ok)return t.json();throw new Error("Something went wrong, request failed with status "+t.status)}).then(function(e){t.postResult=e,t.$router.push({name:"Results",params:{postResult:t.postResult}})}).catch(function(t){console.log(t)})}}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form"},[n("form",{on:{submit:t.checkForm}},[t.errors.length?n("p",[n("b",[t._v("Please correct the following error(s):")]),t._v(" "),n("ul",t._l(t.errors,function(e){return n("li",[t._v(t._s(e))])}))]):t._e(),t._v(" "),n("p",[n("label",{attrs:{for:"amount"}},[t._v("Loan Amount (€)")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],attrs:{type:"number",name:"amount",id:"amount",placeholder:"0"},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}})]),t._v(" "),n("p",[n("label",{attrs:{for:"interest"}},[t._v("Nominal Interest Rate (%)")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.interest,expression:"interest"}],attrs:{type:"number",name:"interest",id:"interest",step:".01",placeholder:"0.00"},domProps:{value:t.interest},on:{input:function(e){e.target.composing||(t.interest=e.target.value)}}})]),t._v(" "),n("p",[n("label",{attrs:{for:"duration"}},[t._v("Duration (in months)")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.duration,expression:"duration"}],attrs:{type:"number",name:"duration",id:"duration",placeholder:"0"},domProps:{value:t.duration},on:{input:function(e){e.target.composing||(t.duration=e.target.value)}}})]),t._v(" "),n("p",[n("label",{attrs:{for:"date"}},[t._v("Start date of Repayment")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],attrs:{type:"date",name:"date",id:"date"},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}})]),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("input",{attrs:{type:"submit",value:"Submit"}})])}]};var v=n("VU/8")(d,m,!1,function(t){n("HMUl")},"data-v-b993d498",null).exports,c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-container"},[n("router-link",{staticClass:"back",attrs:{to:{name:"RepayForm"}}},[t._v("Back to form")]),t._v(" "),n("table",[t._m(0),t._v(" "),n("tbody",t._l(t.postResult,function(e){return n("tr",[n("td",[t._v(t._s(new Date(e.date).getDate())+"-"+t._s(new Date(e.date).getMonth()+1)+"-"+t._s(new Date(e.date).getFullYear()))]),t._v(" "),n("td",[t._v(t._s(e.borrowerPaymentAmount)+" €")]),t._v(" "),n("td",[t._v(t._s(e.principal)+"  €")]),t._v(" "),n("td",[t._v(t._s(e.interest)+" €")]),t._v(" "),n("td",[t._v(t._s(e.initialOutstandingPrincipal)+"  €")]),t._v(" "),n("td",[t._v(t._s(e.remainingOutstandingPrincipal)+"  €")])])}))])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Date")]),t._v(" "),n("th",[t._v("Annuity (Borrower Payment Amount)")]),t._v(" "),n("th",[t._v("Principal")]),t._v(" "),n("th",[t._v("Interest")]),t._v(" "),n("th",[t._v("Initial Outstanding Principal")]),t._v(" "),n("th",[t._v("Remaining Outstanding Principal")])])])}]};var h=n("VU/8")({name:"Results",props:["postResult"]},c,!1,function(t){n("xQvY")},"data-v-ba503b7a",null).exports;a.a.use(o.a);var _=new o.a({routes:[{path:"/",name:"RepayForm",component:v},{path:"/results",name:"Results",props:!0,component:h}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:_,components:{App:s},template:"<App/>"})},xQvY:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.73db4fef8a5412db2d78.js.map