(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(t,e,r){},18:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),a=r(3),i=r.n(a),c=(r(16),r(6)),u=r(4),l=r(5),s=r(1);r(17);function f(){f=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(_){u=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var a=e&&e.prototype instanceof p?e:p,i=Object.create(a.prototype),c=new N(o||[]);return n(i,"_invoke",{value:x(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=l;var h={};function p(){}function m(){}function d(){}var v={};u(v,a,function(){return this});var y=Object.getPrototypeOf,g=y&&y(y(k([])));g&&g!==e&&r.call(g,a)&&(v=g);var b=d.prototype=p.prototype=Object.create(v);function w(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var o;n(this,"_invoke",{value:function(n,a){function i(){return new e(function(o,i){!function n(o,a,i,c){var u=s(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(f).then(function(t){l.value=t,i(l)},function(t){return n("throw",t,i,c)})}c(u.arg)}(n,a,o,i)})}return o=o?o.then(i,i):i()}})}function x(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return S()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function k(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return m.prototype=d,n(b,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:m,configurable:!0}),m.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(E.prototype),u(E.prototype,i,function(){return this}),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},w(b),u(b,c,"Generator"),u(b,a,function(){return this}),u(b,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var h=function(){var t=Object(n.useState)(["","",""]),e=Object(s.a)(t,2),r=e[0],a=e[1],i=Object(n.useState)(null),h=Object(s.a)(i,2),p=h[0],m=h[1],d=Object(n.useState)([!1,!1,!1]),v=Object(s.a)(d,2),y=v[0],g=v[1],b=function(t,e){var n=Object(l.a)(r);n[e]=t.target.value,a(n)},w=function(){var t=Object(u.a)(f().mark(function t(e){var n,o;return f().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.next=3,fetch("https://practest-server.herokuapp.com/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({topics:r})});case 3:return n=t.sent,t.next=6,n.json();case 6:o=t.sent,console.log(o),m(o);case 9:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return o.a.createElement("div",null,o.a.createElement("div",{className:"header bg-dark py-5"},o.a.createElement("h1",{className:"text-white text-center display-1",style:{fontFamily:"'Roboto', sans-serif",fontWeight:"bold"}},"Practest"),o.a.createElement("h6",{className:"text-white text-center",style:{fontFamily:"'Roboto', sans-serif",fontWeight:"bold"}},"GPT-3 Powered Practice Tests")),o.a.createElement("div",{className:"container-fluid px-5"},o.a.createElement("div",{style:{margin:"20px"}},o.a.createElement("p",{className:"text-center"},"Enter topics from your notes in the boxes below to generate a quiz using the topics.")),o.a.createElement("form",{onSubmit:w},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"topic1"},"Topic 1"),o.a.createElement("input",{type:"text",className:"form-control",id:"topic1",value:r[0],onChange:function(t){return b(t,0)}})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"topic2"},"Topic 2"),o.a.createElement("input",{type:"text",className:"form-control",id:"topic2",value:r[1],onChange:function(t){return b(t,1)}})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"topic3"},"Topic 3"),o.a.createElement("input",{type:"text",className:"form-control",id:"topic3",value:r[2],onChange:function(t){return b(t,2)}})),o.a.createElement("div",{className:"text-center mt-3"},o.a.createElement("button",{type:"submit",className:"btn btn-primary mt-4",style:{backgroundColor:"#008CBA",borderColor:"#008CBA",color:"#fff",borderRadius:"5px",padding:"10px 20px",fontWeight:"bold",fontSize:"1rem"}},"Generate Quiz")))),p&&o.a.createElement("div",{className:"container mt-5 mx-auto px-3"},Object.keys(p).map(function(t){var e=p[t];return o.a.createElement("div",{key:t},o.a.createElement("h5",null,e.question),o.a.createElement("ul",null,e.choices.map(function(r,n){var a=["A","B","C","D","E"][n]===e.answer,i="answer-choice ".concat(y[t-1]?a?"correct":"incorrect":"");return o.a.createElement("li",{key:n,className:i,onClick:function(){g(function(e){var r=Object(c.a)({},e);return r[t-1]=!0,r}),a||alert(e.explanation)}},r)})))})))},p=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,19)).then(function(e){var r=e.getCLS,n=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;r(t),n(t),o(t),a(t),i(t)})};i.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null))),p()},7:function(t,e,r){t.exports=r(18)}},[[7,1,2]]]);
//# sourceMappingURL=main.61da7183.chunk.js.map