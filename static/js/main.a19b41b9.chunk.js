(this.webpackJsonpfleeting=this.webpackJsonpfleeting||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(3),s=t.n(a),i=(t(13),t(4)),c=t(5),l=t(7),u=t(6),d=t(1),f=t.n(d);function h(e){return function(e){return e%400===0||e%100!==0&&e%4===0}(e)?366:365}function g(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Math.round(e*Math.pow(10,n))/Math.pow(10,n)}function m(){var e=f()(),n=f()().endOf("year");return g(100*(h(e.year())-n.diff(e,"day",!0))/h(e.year()))}function v(){var e=f()();return g(100*(86400-f()().endOf("day").diff(e,"second",!0))/86400)}function p(){var e=f()();return g(100*(604800-f()().endOf("week").diff(e,"second",!0))/604800)}function w(){var e=f()(),n=f()().endOf("month");return g(100*(f()().daysInMonth()-n.diff(e,"day",!0))/f()().daysInMonth())}t(14);function y(e){var n=e.progress,t=void 0===n?0:n,r=e.name,a=void 0===r?"year":r,s=e.className,i=void 0===s?"":s;return o.a.createElement("div",{className:"block box ".concat(i)},o.a.createElement("div",{className:"content is-medium"},"".concat(a.charAt(0).toUpperCase()+a.slice(1)," Progress:")," ",o.a.createElement("strong",null,"".concat(t,"%"))),o.a.createElement("progress",{className:"progress is-primary",value:"".concat(t),max:"100"},"".concat(t,"%")))}var k=function(e){Object(l.a)(t,e);var n=Object(u.a)(t);function t(e){var r;return Object(i.a)(this,t),(r=n.call(this,e)).refresh=function(){var e=[m(),w(),p(),v()],n=e[0],t=e[1],o=e[2],a=e[3];r.setState({yearProgress:n,monthProgress:t,weekProgress:o,dayProgress:a})},r.state={yearProgress:m(),monthProgress:w(),weekProgress:p(),dayProgress:v()},r}return Object(c.a)(t,[{key:"componentDidMount",value:function(){setInterval(this.refresh,1e3)}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("h3",{className:"title is-large"},f()().year()," so far"),o.a.createElement(y,{progress:this.state.yearProgress,name:"year",className:"year"}),o.a.createElement(y,{progress:this.state.monthProgress,name:"month",className:"month"}),o.a.createElement(y,{progress:this.state.weekProgress,name:"week",className:"week"}),o.a.createElement(y,{progress:this.state.dayProgress,name:"day",className:"day"}))}}]),t}(o.a.Component),b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(o.a.createElement(k,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/fleeting-time",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/fleeting-time","/service-worker.js");b?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):P(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):P(n,e)}))}}()},8:function(e,n,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.a19b41b9.chunk.js.map