(this["webpackJsonpchuck-norris-app"]=this["webpackJsonpchuck-norris-app"]||[]).push([[0],[,,,,,function(e,t,a){},,function(e,t,a){},,,,,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),o=a(8),s=a.n(o),i=c.a.createContext(),u=i.Provider,l=i.Consumer,m=a(1),f=a.n(m),p=a(3),h=a(4),d=function(e){var t=new Date(e);return Math.floor((new Date).getTime()/1e3/3600)-Math.floor(t.getTime()/1e3/3600)},g=(a(7),a(9)),v=a(11),E=a(10),b=(a(18),function(e){Object(v.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={genres:["fantasy","science fiction","novel","legend","criminal"]},e.wrapperRef=c.a.createRef(),e.onToggle=function(){e.wrapperRef.current.classList.toggle("is-nav-open")},e}return Object(g.a)(a,[{key:"render",value:function(){this.props.onGenreClick,this.state.genres;return c.a.createElement("div",{ref:this.wrapperRef,className:"wrapper"},c.a.createElement("div",{className:"side-bar"},c.a.createElement("div",{className:"side-bar-content"},c.a.createElement("span",{className:"head"},"Genres"),c.a.createElement("ul",{className:"head-list"})),c.a.createElement("i",{onClick:this.onToggle,className:"toggler fas fa-hamburger"})))}}]),a}(r.Component)),k=a(2),j=(a(5),function(e){var t=e.categories,a=e.disabled,n=Object(r.useState)(""),o=Object(k.a)(n,2),s=(o[0],o[1]),i=a?"category-disabled":"category";return c.a.createElement("div",{className:"categories-wrap"},t.map((function(e,t){return c.a.createElement("span",{key:t,id:i,onClick:function(e){return s(e.target.innerHTML)}},e)})))}),y=(a(19),function(e){var t=e.joke,a=t.id,n=t.value,r=t.hoursAgo;t.categories;return c.a.createElement("div",{className:"wrap-box"},c.a.createElement("div",{className:"joke-box"},c.a.createElement("span",{id:"secondary-text"},"ID: ",c.a.createElement("a",{href:"/"},a)),c.a.createElement("p",null,n),c.a.createElement("div",{className:"bottom-line"},c.a.createElement("div",{className:"secondary-text-wrap"},c.a.createElement("span",{id:"secondary-text"},"Last update: ",r," hours ago")),c.a.createElement(j,{categories:["animal","celebrity","dev","career"],disabled:!0}))),c.a.createElement("i",{className:"message-icon far fa-comment-alt"}),c.a.createElement("i",{className:"heart-icon far fa-heart",onClick:function(){}}))}),N=function(e){var t=e.handleChange,a=Object(r.useState)(""),n=Object(k.a)(a,2),o=n[0],s=n[1];return t=function(e){var t=e.target;s(t.value)},c.a.createElement("input",{className:"search-input",type:"search",placeholder:"Free text search...",value:o,onChange:t})},O=(n=function(e){var t=e.service,a=(e.onHandleClick,Object(r.useState)("")),n=Object(k.a)(a,2),o=n[0],s=n[1],i=Object(r.useState)(""),u=Object(k.a)(i,2),l=u[0],m=u[1],f=Object(r.useState)([]),p=Object(k.a)(f,2),h=p[0],d=p[1],g=Object(r.useState)(""),v=Object(k.a)(g,2),E=(v[0],v[1]),b=t.getCategories,O=t.getRandomJoke;t.getJokeByCategory,t.getJokeBySearch,Object(r.useEffect)((function(){console.log("componentDidMount"),x(),w()}),[]);var w=function(){b().then((function(e){return d(e.slice(0,8))}))},x=function(){O().then((function(e){console.log(e),s(e)}))};return c.a.createElement("div",{className:"jumbotron"},c.a.createElement("span",{id:"logo"},"MSI 2020"),c.a.createElement("h1",null,"Hey!"),c.a.createElement("h2",null,"Let\u2019s try to find a joke for you:"),c.a.createElement("div",{className:"form-check"},c.a.createElement("label",{className:"form-check-label"},c.a.createElement("input",{type:"radio",className:"form-check-input",name:"optionsRadios",id:"optionsRadios1",value:"random",onChange:function(e){return m(e.target.value)}}),c.a.createElement("span",null,"Random"))),c.a.createElement("div",{className:"form-check"},c.a.createElement("label",{className:"form-check-label"},c.a.createElement("input",{type:"radio",className:"form-check-input",name:"optionsRadios",id:"optionsRadios2",value:"categories",onChange:function(e){return m(e.target.value)}}),c.a.createElement("span",null,"From categories"))),"categories"===l&&c.a.createElement(j,{categories:h}),c.a.createElement("div",{className:"form-check"},c.a.createElement("label",{className:"form-check-label"},c.a.createElement("input",{type:"radio",className:"form-check-input",name:"optionsRadios",id:"optionsRadios3",value:"search",onChange:function(e){return m(e.target.value)}}),c.a.createElement("span",null,"Search"))),"search"===l&&c.a.createElement(N,{handleChange:function(e){return E(e)}}),c.a.createElement("button",{onClick:x},"Get a joke"),c.a.createElement(y,{joke:o}))},function(e){return c.a.createElement(l,null,(function(t){return c.a.createElement(n,Object.assign({},e,{service:t}))}))}),w=function(){return c.a.createElement("div",{className:"layout"},c.a.createElement(O,null),c.a.createElement(b,null))};s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u,{value:new function e(){var t=this;Object(h.a)(this,e),this._apiBase="https://api.chucknorris.io/jokes/",this.getResource=function(){var e=Object(p.a)(f.a.mark((function e(a){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._apiBase).concat(a));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._transformData=function(e){return{id:e.id,value:e.value,hoursAgo:d(e.updated_at),categories:e.categories,url:e.url,icon:e.icon_url}},this.getCategories=Object(p.a)(f.a.mark((function e(){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("categories");case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)}))),this.getRandomJoke=Object(p.a)(f.a.mark((function e(){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("random");case 2:return a=e.sent,e.abrupt("return",t._transformData(a));case 4:case"end":return e.stop()}}),e)}))),this.getJokeByCategory=function(){var e=Object(p.a)(f.a.mark((function e(a){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("random?category=".concat(a));case 2:return n=e.sent,e.abrupt("return",t._transformData(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getJokeBySearch=function(){var e=Object(p.a)(f.a.mark((function e(a){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("search?query=".concat(a));case 2:return n=e.sent,e.abrupt("return",t._transformData(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},c.a.createElement(w,null))),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.2013b7f8.chunk.js.map