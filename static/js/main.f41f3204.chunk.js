(this.webpackJsonpfleeting=this.webpackJsonpfleeting||[]).push([[0],{14:function(e,t,r){},15:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),s=r(3),o=r.n(s),c=(r(14),r(4)),i=r(5),l=r(7),m=r(6),u=r(8),g=r(1),d=r.n(g);function f(e){return function(e){return e%400===0||e%100!==0&&e%4===0}(e)?366:365}function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Math.round(e*Math.pow(10,t))/Math.pow(10,t)}function p(){var e=d()(),t=d()().year(),r=d()("".concat(t,"-12-31"));return v(100*(f(t)-r.diff(e,"day",!0))/f(t))}function h(){var e=d()();return v(100*(86400-d()().endOf("day").diff(e,"second",!0))/86400)}function E(){var e=d()();return v(100*(604800-d()().endOf("week").diff(e,"second",!0))/604800)}r(15);function y(e){var t=e.progress;return n.a.createElement("div",{className:"block box"},n.a.createElement("div",{className:"content is-medium"},"Year Progress: ",n.a.createElement("strong",null,"".concat(t,"%"))),n.a.createElement("progress",{className:"progress is-info",value:"".concat(t),max:"100"},"".concat(t,"%")))}function k(e){var t=e.progress;return n.a.createElement("div",{className:"block box"},n.a.createElement("div",{className:"content is-medium"},"Day Progress: ",n.a.createElement("strong",null,"".concat(t,"%"))),n.a.createElement("progress",{className:"progress is-primary",value:"".concat(t),max:"100"},"".concat(t,"%")))}function b(e){var t=e.progress;return n.a.createElement("div",{className:"block box"},n.a.createElement("div",{className:"content is-medium"},"Current Week Progress: ",n.a.createElement("strong",null,"".concat(t,"%"))),n.a.createElement("progress",{className:"progress is-primary",value:"".concat(t),max:"100"},"".concat(t,"%")))}var w=function(e){function t(e){var r;return Object(c.a)(this,t),(r=Object(l.a)(this,Object(m.a)(t).call(this,e))).refresh=function(){var e=[p(),E(),h()],t=e[0],a=e[1],n=e[2];r.setState({yearProgress:t,weekProgress:a,dayProgress:n})},r.state={yearProgress:p(),weekProgress:E(),dayProgress:h()},r}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){setInterval(this.refresh,1e3)}},{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("h3",{className:"title is-large"},d()().year()," so far"),n.a.createElement("div",{className:"block"},n.a.createElement(y,{progress:this.state.yearProgress})),n.a.createElement(b,{progress:this.state.weekProgress}),n.a.createElement(k,{progress:this.state.dayProgress}))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,r){e.exports=r(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.f41f3204.chunk.js.map