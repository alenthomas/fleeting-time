(this.webpackJsonpfleeting=this.webpackJsonpfleeting||[]).push([[0],{14:function(e,r,t){},15:function(e,r,t){},16:function(e,r,t){"use strict";t.r(r);var a=t(0),n=t.n(a),s=t(3),o=t.n(s),c=(t(14),t(4)),i=t(5),l=t(7),m=t(6),u=t(8),g=t(1),d=t.n(g);function f(e){return function(e){return e%400===0||e%100!==0&&e%4===0}(e)?366:365}function v(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Math.round(e*Math.pow(10,r))/Math.pow(10,r)}function p(){var e=d()(),r=d()().year(),t=d()("".concat(r,"-12-31"));return v(100*(f(r)-t.diff(e,"day",!0))/f(r))}function h(){var e=d()();return v(100*(86400-d()().endOf("day").diff(e,"second",!0))/86400)}function E(){var e=d()();return v(100*(604800-d()().endOf("week").diff(e,"second",!0))/604800)}t(15);function y(e){var r=e.progress;return n.a.createElement("div",{className:"block box"},n.a.createElement("div",{className:"content is-medium"},"Year Progress: ",n.a.createElement("strong",null,"".concat(r,"%"))),n.a.createElement("progress",{className:"progress is-primary",value:"".concat(r),max:"100"},"".concat(r,"%")))}function k(e){var r=e.progress;return n.a.createElement("div",{className:"block box"},n.a.createElement("div",{className:"content is-medium"},"Day Progress: ",n.a.createElement("strong",null,"".concat(r,"%"))),n.a.createElement("progress",{className:"progress is-primary",value:"".concat(r),max:"100"},"".concat(r,"%")))}function b(e){var r=e.progress;return n.a.createElement("div",{className:"block box"},n.a.createElement("div",{className:"content is-medium"},"Current Week Progress: ",n.a.createElement("strong",null,"".concat(r,"%"))),n.a.createElement("progress",{className:"progress is-primary",value:"".concat(r),max:"100"},"".concat(r,"%")))}var w=function(e){function r(e){var t;return Object(c.a)(this,r),(t=Object(l.a)(this,Object(m.a)(r).call(this,e))).refresh=function(){var e=[p(),E(),h()],r=e[0],a=e[1],n=e[2];t.setState({yearProgress:r,weekProgress:a,dayProgress:n})},t.state={yearProgress:p(),weekProgress:E(),dayProgress:h()},t}return Object(u.a)(r,e),Object(i.a)(r,[{key:"componentDidMount",value:function(){setInterval(this.refresh,1e3)}},{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("h3",{className:"title is-large"},d()().year()," so far"),n.a.createElement("div",{className:"block"},n.a.createElement(y,{progress:this.state.yearProgress})),n.a.createElement(b,{progress:this.state.weekProgress}),n.a.createElement(k,{progress:this.state.dayProgress}))}}]),r}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,r,t){e.exports=t(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.0c3cee2b.chunk.js.map