(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(n,t,e){n.exports=e(56)},56:function(n,t,e){"use strict";e.r(t);var a=e(0),i=e.n(a),r=e(4),o=e.n(r),c=e(6),u=e.n(c),s=e(17),l=e(18),d=e(19),p=e(24),f=e(20),m=e(25),h=e(2),g=e(3);function v(){var n=Object(h.a)(["\n    display: block;\n    margin: 0 auto;\n    width: auto;\n    "]);return v=function(){return n},n}function b(){var n=Object(h.a)(["\n    width:70px;\n    height: 30px;\n    font-family: Helvetica, sans-serif;\n    font-size: 16px;\n    border: none;\n    outline: none;\n    border-radius: 10%;\n    cursor: pointer;\n    "]);return b=function(){return n},n}function w(){var n=Object(h.a)(["\n    margin-top: 20px;\n    display: flex;\n    justify-content: space-between;\n    opacity: 0.8;\n    &:hover{\n        opacity: 1;\n    }\n    "]);return w=function(){return n},n}function x(){var n=Object(h.a)(["\n    width: 150px;\n    height: 100px;\n    margin-bottom: 10px;\n    "]);return x=function(){return n},n}function j(){var n=Object(h.a)(["\n    font-family: Helvetica, sans-serif;\n    font-size: 16px;\n    font-weight: 300;\n    "]);return j=function(){return n},n}function y(){var n=Object(h.a)(["\n    width: auto;\n    height: auto;\n    display: flex;\n    flex-direction: column;\n    margin: 10px;\n    align-items: center;\n    "]);return y=function(){return n},n}function E(){var n=Object(h.a)(["\n    width: auto;\n    height: auto;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    "]);return E=function(){return n},n}var O={Box:g.a.div(E()),Wrapper:g.a.div(y()),Description:g.a.div(j()),Picture:g.a.img(x()),Buttons:g.a.div(w()),Button:g.a.button(b()),Image:g.a.img(v())},k=e(23),B=e.n(k).a.create({baseURL:"https://rickandmortyapi.com/api/",headers:{Accept:"application/json","Content-Type":"application/json"}}),I=function(n){function t(n){var e;return Object(l.a)(this,t),(e=Object(p.a)(this,Object(f.a)(t).call(this,n))).state={users:[],loading:!0},e.componentDidMount=Object(s.a)(u.a.mark(function n(){var t,a;return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,B.get("character/?page=".concat(e.id));case 2:t=n.sent,a=t.data.results.map(function(n){return i.a.createElement(O.Wrapper,null,i.a.createElement(O.Picture,{src:n.image}),i.a.createElement(O.Description,null,n.name))}),e.setState({users:a,loading:!1});case 5:case"end":return n.stop()}},n)})),e.inceaseId=function(){e.setState({loading:!0}),e.id++,e.id>1&&e.componentDidMount()},e.reduceId=function(){e.setState({loading:!0}),e.id--,e.id>=1&&e.componentDidMount()},e.id=1,e}return Object(m.a)(t,n),Object(d.a)(t,[{key:"render",value:function(){var n;return n=this.state.loading?i.a.createElement(O.Image,{src:"./images/loading.gif"}):i.a.createElement(O.Box,null,this.state.users),i.a.createElement("div",null,n,i.a.createElement(O.Buttons,null,i.a.createElement(O.Button,{onClick:this.reduceId,disabled:1===this.id},"Prev"),i.a.createElement(O.Button,{onClick:this.inceaseId,disabled:25===this.id},"Next")))}}]),t}(i.a.Component),D=function(n){return i.a.createElement("div",null,i.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.f24180ad.chunk.js.map