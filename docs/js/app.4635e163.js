(function(t){function e(e){for(var r,s,u=e[0],o=e[1],i=e[2],f=0,p=[];f<u.length;f++)s=u[f],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);l&&l(e);while(p.length)p.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,u=1;u<n.length;u++){var o=n[u];0!==a[o]&&(r=!1)}r&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},c=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=e,u=u.slice();for(var i=0;i<u.length;i++)e(u[i]);var l=o;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"02d1":function(t,e,n){},"28cf":function(t,e,n){"use strict";var r=n("68bc"),a=n.n(r);a.a},"30ae":function(t,e,n){"use strict";var r=n("4278"),a=n.n(r);a.a},4278:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("5c96"),c=n.n(a),s=(n("0fae"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("site-header"),n("main-content",{staticClass:"main"})],1)}),u=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-header",{staticClass:"header"},[n("target-input",{staticClass:"input"})],1)},i=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-autocomplete",{attrs:{"popper-class":"my-autocomplete","fetch-suggestions":t.querySearch,"trigger-on-focus":!1,placeholder:"Введите группу или фамилию преподавателя",clearable:""},on:{select:t.handleSelect},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.item;return[n("div",{staticClass:"name"},[t._v(" "+t._s(r.name)+" ")])]}}]),model:{value:t.target,callback:function(e){t.target=e},expression:"target"}})},f=[],p=(n("4de4"),n("c975"),n("b0c0"),n("96cf"),n("1da1"));n("99af"),n("d3b7");function d(){return h.apply(this,arguments)}function h(){return h=Object(p["a"])(regeneratorRuntime.mark((function t(){var e,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://edu.sfu-kras.ru/api/timetable/groups");case 3:return e=t.sent,t.next=6,fetch("https://edu.sfu-kras.ru/api/timetable/teachers");case 6:return n=t.sent,t.next=9,e.json();case 9:return r=t.sent,t.t0=r,t.next=13,n.json();case 13:return t.t1=t.sent,t.abrupt("return",t.t0.concat.call(t.t0,t.t1));case 17:t.prev=17,t.t2=t["catch"](0),console.log(t.t2);case 20:case"end":return t.stop()}}),t,null,[[0,17]])}))),h.apply(this,arguments)}function g(t){return v.apply(this,arguments)}function v(){return v=Object(p["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://edu.sfu-kras.ru/api/timetable/get&target=".concat(e));case 3:return n=t.sent,t.next=6,n.json();case 6:return r=t.sent,t.abrupt("return",r);case 10:t.prev=10,t.t0=t["catch"](0),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])}))),v.apply(this,arguments)}var b={name:"TargetInput",data:function(){return{target:"",groups:[]}},mounted:function(){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:t.groups=e.sent,localStorage.target&&(console.log("test"),t.target=localStorage.target,t.loadData());case 4:case"end":return e.stop()}}),e)})))()},methods:{querySearch:function(t,e){var n=this.groups,r=t?n.filter(this.createFilter(t)):n;e(r)},createFilter:function(t){return function(e){return 0===e.name.toLowerCase().indexOf(t.toLowerCase())}},handleSelect:function(t){this.target=t.name,localStorage.target=this.target,console.log(localStorage.target),window.eventBus.$emit("selectTarget",t.name)},loadData:function(){window.eventBus.$emit("selectTarget",localStorage.target)}}},m=b,y=(n("28cf"),n("2877")),_=Object(y["a"])(m,l,f,!1,null,null,null),j=_.exports,w={name:"Header",components:{"target-input":j}},k=w,x=(n("30ae"),Object(y["a"])(k,o,i,!1,null,"f2c41e90",null)),C=x.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isSelected?n("el-main",{staticClass:"main-content"},[n("el-tabs",[n("el-tab-pane",{attrs:{label:t.getWeekTab(t.currentWeek)}},t._l(6,(function(e){return n("day",{key:e,staticClass:"day-item",attrs:{date:t.calcDate(e),subjects:t.setSubjects(t.currentWeek)[e-1]}})})),1),n("el-tab-pane",{attrs:{label:t.getWeekTab(!t.currentWeek)}},t._l(6,(function(e){return n("day",{key:e,staticClass:"day-item",attrs:{date:t.calcDate(e+7),subjects:t.setSubjects(!t.currentWeek)[e-1]}})})),1)],1)],1):t._e()},O=[],D=["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],M=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];function W(t){var e=t.getDate(),n=t.getMonth(),r=t.getFullYear();n++;var a=Math.floor((14-n)/12),c=r+4800-a,s=n+12*a-3,u=e+Math.floor((153*s+2)/5)+365*c+Math.floor(c/4)-Math.floor(c/100)+Math.floor(c/400)-32045,o=(u+31741-u%7)%146097%36524%1461,i=Math.floor(o/1460),l=(o-i)%365+i,f=Math.floor(l/7)+1;return f<10&&(f="0"+f),f%2==0?1:2}function T(t){return D[t]}function $(t){return M[t]}function R(t,e){var n=new Date(t);return n.setDate(n.getDate()+e),n}function P(t,e){0==e&&(e=7);var n=new Date(t);return n.setDate(n.getDate()-e),n}function E(t,e){return t.filter((function(t){return t.week==e}))}function B(t){for(var e=[],n=function(n){e.push(t.filter((function(t){if(t.day==n)return t})))},r=1;r<=6;r++)n(r);return e}var F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"day-content"},[n("div",{staticClass:"subject-heading"},[n("div",[t._v(" "+t._s(t.date.getDate())+" "+t._s(t.month)+" ")]),n("div",{staticClass:"day"},[t._v(" "+t._s(t.day)+" ")])]),t._l(t.subjects,(function(t,e){return n("subject",{key:e,attrs:{subject:t.subject,teacher:t.teacher,time:t.time,type:t.type,place:t.place}})})),0==t.subjects.length?n("div",{staticClass:"no-lessons"},[t._v(" Сегодня занятий нет ")]):t._e()],2)},q=[],J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"subject-container"},[n("div",{staticClass:"heading container"},[n("h4",{staticClass:"subject"},[t._v(" "+t._s(t.subject)+" ")]),n("span",{staticClass:"type"},[t._v(" "+t._s(t.type)+" ")])]),n("div",{staticClass:"footer"},[n("span",{staticClass:"place container"},[t._v(t._s(t.place))]),t.teacher?n("span",{staticClass:"teacher container"},[t._v(" "+t._s(t.teacher)+" ")]):t._e(),n("span",{staticClass:"time container"},[t._v(t._s(t.time))])])])},L=[],A={name:"Subject",props:["time","subject","type","teacher","place"]},H=A,I=(n("e127"),Object(y["a"])(H,J,L,!1,null,"0efb6321",null)),Y=I.exports,z={components:{subject:Y},props:["date","subjects"],computed:{month:function(){return $(this.date.getMonth())},day:function(){return T(this.date.getDay())}}},G=z,K=(n("9e42"),Object(y["a"])(G,F,q,!1,null,"f34ae312",null)),N=K.exports,Q={name:"MainContent",components:{day:N},data:function(){return{target:{},isSelected:!1,currentDate:null,currentWeek:null}},computed:{weekStart:function(){return P(this.currentDate,this.currentDate.getDay())}},mounted:function(){var t=this;window.eventBus.$on("selectTarget",function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g(n);case 2:t.target=e.sent,t.isSelected=!0;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),this.currentDate=new Date,this.currentWeek=this.getCurrentWeek()},methods:{calcDate:function(t){return R(this.weekStart,t)},getCurrentWeek:function(){return 1!=W(this.currentDate)},setSubjects:function(t){return B(E(this.target.timetable,t?2:1))},getWeekTab:function(t){return t?"Чётная":"Нечётная"}}},U=Q,V=(n("bda6"),Object(y["a"])(U,S,O,!1,null,null,null)),X=V.exports,Z={name:"App",components:{"site-header":C,"main-content":X}},tt=Z,et=(n("5c0b"),Object(y["a"])(tt,s,u,!1,null,null,null)),nt=et.exports;r["default"].config.productionTip=!1,r["default"].use(c.a),window.eventBus=new r["default"],new r["default"]({render:function(t){return t(nt)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"68bc":function(t,e,n){},"82e1":function(t,e,n){},"9c0c":function(t,e,n){},"9e42":function(t,e,n){"use strict";var r=n("02d1"),a=n.n(r);a.a},bda6:function(t,e,n){"use strict";var r=n("82e1"),a=n.n(r);a.a},dbf6:function(t,e,n){},e127:function(t,e,n){"use strict";var r=n("dbf6"),a=n.n(r);a.a}});
//# sourceMappingURL=app.4635e163.js.map