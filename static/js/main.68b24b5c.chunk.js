(this["webpackJsonpreddit-client"]=this["webpackJsonpreddit-client"]||[]).push([[0],{22:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){},33:function(t,e,n){},40:function(t,e,n){},60:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(7),i=n.n(r),s=(n(29),n(30),n(5)),d=(n(31),n(1)),o=function(t){var e,n=t.title,c=t.author,a=t.score,r=t.selftext,i=t.url,s=t.media;if(!n)return null;switch(i[8]){case"i":e=Object(d.jsx)("img",{alt:n,src:i,className:"image"});break;case"v":e=Object(d.jsx)("iframe",{className:"video",width:"560",height:"315",src:s.reddit_video.fallback_url,frameborder:"0",autoplay:!0,allowfullscreen:!0});break;default:e=null}return Object(d.jsxs)("div",{"data-test":"cardComponent",className:"card-component",children:[Object(d.jsx)("h3",{"data-test":"componentTitle",className:"card-title",children:n}),r&&Object(d.jsx)("p",{className:"text-body",children:r}),i&&e,Object(d.jsxs)("p",{"data-test":"componentPost",children:["Author: ",c,". Score: ",a,"."]})]})},u=(n(33),n(2)),l=(n(40),n(4)),j="CLICK",b="getPosts",f="getSubredditTitles",h="GET_PAGE_TITLE",p=n(24),m=Object(l.c)({menuClicked:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case j:return e.payload;default:return t}},getPosts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case b:return e.payload;default:return t}},getSubredditTitles:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case f:return e.payload;default:return t}},getPageTitle:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/r/ASX_bets/",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case h:return e.payload;default:return t}}}),O=[p.a],v=l.a.apply(void 0,O)(l.d)(m,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()),x=n(6),g=n.n(x),N=n(12),_=n(13),C=n.n(_),y="https://www.reddit.com",T=function(t){return function(){var e=Object(N.a)(g.a.mark((function e(n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("".concat(y).concat(t)).then((function(t){n({type:b,payload:t.data.data.children})})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=function(){return function(){var t=Object(N.a)(g.a.mark((function t(e){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.get("".concat(y,"/subreddits.json")).then((function(t){e({type:f,payload:t.data.data.children})})).catch((function(t){console.log(t)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},k=function(t){return{type:"CLICK",payload:!t}},E=function(t){return{type:"GET_PAGE_TITLE",payload:t}},S=function(t){var e=Object(u.d)((function(t){return t.menuClicked})),n=t.subredditTitle,c=t.url;if(!n)return null;return Object(d.jsx)("div",{"data-test":"subredditComponent",className:"subreddit-title-container",onClick:function(t){v.dispatch(E(c)),v.dispatch(T("".concat(c,".json")))},children:Object(d.jsx)("h4",{"data-test":"subredditTitle",className:e?"nav-subreddit-title":"subreddit-title",children:n})})};var P=Object(u.b)((function(t){return{redditPosts:t.redditPosts}}),{fetchSubredditTitles:w})((function(t){var e=Object(u.d)((function(t){return t.getPosts})),n=Object(u.d)((function(t){return t.getSubredditTitles}));return Object(d.jsxs)("div",{"data-test":"cardContainerComponent",className:"card-container-component",children:[Object(d.jsx)("div",{"data-test":"subredditConatiner",className:"subreddit-container",children:n.map((function(t,e){var n={subredditTitle:t.data.display_name_prefixed,url:t.data.url};return Object(d.jsx)(S,Object(s.a)({},n),e)}))}),e.length>0&&Object(d.jsx)("div",{"data-test":"cardsContainer",className:"cards-container",children:e.map((function(t,e){var n=t.data,c={title:n.title,author:n.author,score:n.score,selftext:n.selftext,url:n.url,media:n.media};return Object(d.jsx)(o,Object(s.a)({},c),e)}))})]})})),A=(n(22),function(t){var e=Object(u.d)((function(t){return t.getSubredditTitles})),n=Object(u.d)((function(t){return t.menuClicked})),c=Object(u.c)();return Object(d.jsx)("ul",{className:t.click?"nav-menu active":"nav-menu",children:e.map((function(t,e){var a={subredditTitle:t.data.display_name_prefixed,url:t.data.url};return Object(d.jsx)("li",{className:"nav-item",onClick:function(){return c(k(n))},children:Object(d.jsx)("div",{className:"nav-links",children:Object(d.jsx)(S,Object(s.a)({},a),e)})})}))})}),I=function(){var t="/r/ASX_bets/",e=Object(u.d)((function(t){return t.menuClicked})),n=Object(u.c)(),c=Object(u.d)((function(t){return t.getPageTitle}));return Object(d.jsxs)("div",{"data-test":"headerComponent",className:"header-container",children:[Object(d.jsxs)("div",{className:"title-container",children:[Object(d.jsxs)("h1",{className:"title",onClick:function(){e||(v.dispatch(E(t)),v.dispatch(T("".concat(t,".json"))))},children:[c,Object(d.jsxs)("span",{className:"browser",children:[" Viewer lite ",Object(d.jsx)("i",{className:"fab fa-reddit-alien"})]})]}),Object(d.jsx)("div",{className:"menu-icon",onClick:function(){return n(k(e))},children:Object(d.jsx)("i",{className:e?"fas fa-times":"fas fa-bars"})})]}),Object(d.jsx)(A,{"data-test":"mobileMenu",className:"mobileMenu",click:e,onClick:function(){return n(k(e))}})]})};var L=Object(u.b)((function(t){return{posts:t.posts}}),{fetchPosts:T})((function(t){return Object(d.jsxs)("div",{"data-test":"appComponent",className:"App",id:"App",children:[Object(d.jsx)(I,{}),Object(d.jsx)(P,{})]})})),X=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),r(t),i(t)}))};v.dispatch(w()),v.dispatch(T("/r/ASX_bets.json")),i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(u.a,{store:v,children:Object(d.jsx)(L,{})})}),document.getElementById("root")),X()}},[[60,1,2]]]);
//# sourceMappingURL=main.68b24b5c.chunk.js.map