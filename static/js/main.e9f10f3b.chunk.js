(this.webpackJsonpfleeting=this.webpackJsonpfleeting||[]).push([[0],{14:function(e,r,t){},15:function(e,r,t){},16:function(e,r,t){"use strict";t.r(r);var n=t(0),a=t.n(n),s=t(3),o=t.n(s),c=(t(14),t(4)),l=t(5),i=t(7),u=t(6),g=t(8),m=t(1),f=t.n(m);function d(e){return function(e){return e%400===0||e%100!==0&&e%4===0}(e)?366:365}function p(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Math.round(e*Math.pow(10,r))/Math.pow(10,r)}function v(){var e=f()(),r=f()().year(),t=f()("".concat(r,"-12-31"));return p(100*(d(r)-t.diff(e,"day",!0))/d(r))}function h(){var e=f()();return p(100*(86400-f()().endOf("day").diff(e,"second",!0))/86400)}function E(){var e=f()();return p(100*(604800-f()().endOf("week").diff(e,"second",!0))/604800)}t(15);function y(e){var r=e.progress;return a.a.createElement("div",{className:"progress year-progress"},a.a.createElement("div",null,"Year Progress: ",a.a.createElement("strong",null,"".concat(r,"%"))),a.a.createElement("progress",{className:"progress",value:"".concat(r),max:"100"},"".concat(r,"%")))}function w(e){var r=e.progress;return a.a.createElement("div",{className:"progress day-progress"},a.a.createElement("div",null,"Day Progress: ",a.a.createElement("strong",null,"".concat(r,"%"))),a.a.createElement("progress",{className:"progress",value:"".concat(r),max:"100"},"".concat(r,"%")))}function k(e){var r=e.progress;return a.a.createElement("div",{className:"progress week-progress"},a.a.createElement("div",null,"Current Week Progress: ",a.a.createElement("strong",null,"".concat(r,"%"))),a.a.createElement("progress",{className:"progress",value:"".concat(r),max:"100"},"".concat(r,"%")))}var P=function(e){function r(e){var t;return Object(c.a)(this,r),(t=Object(i.a)(this,Object(u.a)(r).call(this,e))).refresh=function(){var e=[v(),E(),h()],r=e[0],n=e[1],a=e[2];t.setState({yearProgress:r,weekProgress:n,dayProgress:a})},t.state={yearProgress:v(),weekProgress:E(),dayProgress:h()},t}return Object(g.a)(r,e),Object(l.a)(r,[{key:"componentDidMount",value:function(){setInterval(this.refresh,1e3)}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("h3",null,f()().year()," so far"),a.a.createElement(y,{progress:this.state.yearProgress}),a.a.createElement(k,{progress:this.state.weekProgress}),a.a.createElement(w,{progress:this.state.dayProgress}))}}]),r}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,r,t){e.exports=t(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.e9f10f3b.chunk.js.map