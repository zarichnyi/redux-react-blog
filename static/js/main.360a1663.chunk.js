(this["webpackJsonpredux-react-blog"]=this["webpackJsonpredux-react-blog"]||[]).push([[0],{161:function(e,t,n){e.exports=n(174)},174:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(39),l=n.n(c),o=n(62),s=n(10),u=(n(169),n(194)),i=n(204),m=n(40),f=n.n(m),p=n(63),d="https://jsonplaceholder.typicode.com/posts/";function g(){return(g=Object(p.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(d);case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n.map((function(e){return e.views=0,e})));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b=n(27),O=n(11),y=n(205),E=n(200),S=n(202),h=n(193),w=n(201),v=n(195),j=n(175),I=n(203),N=n(198),J=n(192),x=n(199),C="https://jsonplaceholder.typicode.com/comments/";function k(){return(k=Object(p.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(C);case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var U=n(118),A=[],D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setComments":return Object(U.a)(t.comments);default:return e}},B=function(){var e=Object(s.b)(),t=Object(O.e)().articleID,n=Object(s.c)((function(e){return e.comments.filter((function(e){return e.postId===+t}))}));return Object(a.useEffect)((function(){(function(){return k.apply(this,arguments)})().then((function(t){return e(function(e){return{type:"setComments",comments:e}}(t))}))}),[e]),r.a.createElement(x.a.Group,null,n.map((function(e){return r.a.createElement(x.a,{key:e.id},r.a.createElement(x.a.Avatar,{as:"a",src:"https://react.semantic-ui.com/images/avatar/small/christian.jpg"}),r.a.createElement(x.a.Content,null,r.a.createElement(x.a.Author,{as:"a"},e.email),r.a.createElement(x.a.Text,null,e.body)))})))},V=n(129),z=[],T=function(e,t){return{type:"editTitle",id:e,title:t}},L=function(e){return{type:"filterNews",id:e}},F=function(e){return{type:"setNews",news:e}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setNews":return t.news;case"filterNews":return t.id&&JSON.parse(localStorage.getItem("news")).filter((function(e){return e.userId===t.id}))||JSON.parse(localStorage.getItem("news"));case"editTitle":var n=JSON.parse(localStorage.getItem("news")).map((function(e){return e.id!==t.id?Object(V.a)({},e):(e.title=t.title,e)}));return localStorage.setItem("news",JSON.stringify(n)),n;case"editBody":var a=JSON.parse(localStorage.getItem("news")).map((function(e){return e.id!==t.id?Object(V.a)({},e):(e.body=t.body,e)}));return localStorage.setItem("news",JSON.stringify(a)),a;case"deleteArticle":var r=JSON.parse(localStorage.getItem("news")).filter((function(e){return e.id!==t.id}));return localStorage.setItem("news",JSON.stringify(r)),r;case"addArticle":var c=JSON.parse(localStorage.getItem("news"));return c.unshift({userId:t.userId,id:t.articleId,title:t.title,body:t.body,views:0}),localStorage.setItem("news",JSON.stringify(c)),c;case"setViews":var l=JSON.parse(localStorage.getItem("news")).map((function(e){return e.id!==t.articleId?Object(V.a)({},e):(e.views=e.views+1,e)}));return localStorage.setItem("news",JSON.stringify(l)),l;case"sortByPopularity":var o=JSON.parse(localStorage.getItem("news")).sort((function(e,t){return t.views-e.views}));return localStorage.setItem("news",JSON.stringify(o)),o;case"latestNews":var s=JSON.parse(localStorage.getItem("news")).sort((function(e,n){return t.lastNewsToogler?e.id-n.id:n.id-e.id}));return localStorage.setItem("news",JSON.stringify(s)),s;default:return e}},P=function(){var e=Object(O.e)().articleID,t=Object(s.b)(),n=Object(s.c)((function(t){return t.news.find((function(t){return t.id===+e}))})),c=Object(a.useState)(!1),l=Object(b.a)(c,2),o=l[0],u=l[1],m=Object(a.useState)(""),f=Object(b.a)(m,2),p=f[0],d=f[1],g=Object(a.useState)(!1),y=Object(b.a)(g,2),E=y[0],S=y[1],h=Object(a.useState)(""),x=Object(b.a)(h,2),C=x[0],k=x[1],U=function(e){"Enter"===e.key&&p?(t(T(n.id,p)),t(L(JSON.parse(localStorage.getItem("choosenUser")))),u(!1),d("")):"Enter"===e.key&&C&&(t({type:"editBody",id:n.id,body:C}),t(L(JSON.parse(localStorage.getItem("choosenUser")))),S(!1),k("")),"Escape"===e.key&&(d(""),u(!1))},A=function(){p?(t(T(n.id,p)),t(L(JSON.parse(localStorage.getItem("choosenUser")))),u(!1),d("")):(u(!1),d(""))};return r.a.createElement(r.a.Fragment,null,n&&r.a.createElement(w.a,{style:{width:"100%"}},r.a.createElement(w.a.Content,null,r.a.createElement(v.a,{content:"Edit title",trigger:r.a.createElement(j.a,{size:"mini",icon:"edit outline",onClick:function(){return u(!o)}})}),r.a.createElement(v.a,{content:"Delete article",trigger:r.a.createElement(j.a,{size:"mini",icon:"delete",onClick:function(){t({type:"deleteArticle",id:n.id}),t(L(JSON.parse(localStorage.getItem("choosenUser"))))}})}),o?r.a.createElement(N.a,null,r.a.createElement(J.a,{defaultValue:n.title,onChange:function(e,t){return d(t.value)},onKeyDown:U,onBlur:A})):r.a.createElement(I.a,{as:"h2",style:{margin:0}},n.title)),r.a.createElement(w.a.Content,null,r.a.createElement(v.a,{content:"Edit body",trigger:r.a.createElement(j.a,{size:"mini",icon:"edit outline",onClick:function(){return S(!E)}})}),E?r.a.createElement(N.a,null,r.a.createElement(J.a,{defaultValue:n.body,onChange:function(e,t){return k(t.value)},onKeyDown:U,onBlur:A})):r.a.createElement(i.a,null,r.a.createElement(w.a.Content,{description:n.body})),r.a.createElement(w.a.Description,null,r.a.createElement(B,null)))))},K=function(){var e=Object(s.c)((function(e){return e.news})),t=Object(a.createRef)(),n=Object(s.b)(),c=Object(a.useState)(""),l=Object(b.a)(c,2),u=l[0],m=l[1];return r.a.createElement("div",{ref:t},r.a.createElement(y.a,{columns:2},r.a.createElement(y.a.Column,null,r.a.createElement(E.a,{link:!0},e.map((function(e){return r.a.createElement(E.a.Item,{as:o.b,to:"/news/".concat(e.id),key:e.id,onClick:function(){var t;t=e.id,u!==t&&(n({type:"setViews",articleId:t}),n(L(JSON.parse(localStorage.getItem("choosenUser"))))),m(""),m(e.id)}},r.a.createElement(i.a,null,r.a.createElement(y.a,{columns:"equal"},r.a.createElement(y.a.Column,{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement("span",null,e.title),r.a.createElement("span",{style:{color:"blue"}},r.a.createElement(S.a,{size:"mini"},r.a.createElement(S.a.Label,null,"Views"),r.a.createElement(S.a.Value,null,e.views)))))))})))),r.a.createElement(y.a.Column,{style:{zIndex:0}},r.a.createElement(h.a,{context:t,pushing:!0},r.a.createElement(O.a,{path:"/news/:articleID",component:P})))))},G=n(197),R=n(196),H="https://jsonplaceholder.typicode.com/users/";function M(){return(M=Object(p.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(H);case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Q=[],W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setUsers":return Object(U.a)(t.users);default:return e}},X=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.users.map((function(e){return{key:e.id,text:e.name,value:e.id}}))}));return t.unshift({key:0,text:"All",value:0}),Object(a.useEffect)((function(){(function(){return M.apply(this,arguments)})().then((function(t){return e(function(e){return{type:"setUsers",users:e}}(t))}))}),[e]),r.a.createElement(G.a,{compact:!0},r.a.createElement(R.a,{placeholder:"All",selection:!0,options:t,defaultValue:JSON.parse(localStorage.getItem("choosenUser")),onChange:function(t,n){e(L(n.value)),localStorage.setItem("choosenUser",JSON.stringify(n.value))}}))},Y=n(191),Z=function(){var e=Object(s.c)((function(e){return e.users.map((function(e){return{key:e.id,text:e.name,value:e.id}}))})),t=Object(a.useState)(!1),n=Object(b.a)(t,2),c=n[0],l=n[1],o=Object(a.useState)(""),m=Object(b.a)(o,2),f=m[0],p=m[1],d=Object(a.useState)(""),g=Object(b.a)(d,2),O=g[0],y=g[1],E=Object(a.useState)(1),S=Object(b.a)(E,2),h=S[0],w=S[1],v=Object(s.b)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{style:{marginLeft:40},onClick:function(){return l(!c)}},"Add article"),c&&r.a.createElement(u.a,{style:{zIndex:1,position:"absolute",top:"20vh",left:"10vw",height:"500px",width:"800px",border:"1px solid black",backgroundColor:"grey"}},r.a.createElement(i.a,{style:{backgroundColor:"grey"}},r.a.createElement(N.a,{onSubmit:function(e){e.preventDefault(),function(){var e,t,n,a;v((e=f,t=O,n=h,a=+Date.now(),{type:"addArticle",title:e,body:t,userId:n,articleId:a})),l(!c),p(""),y(""),w(1)}(),v(L(JSON.parse(localStorage.getItem("choosenUser"))))}},r.a.createElement(Y.a,{placeholder:"Title",required:!0,style:{margin:"20px 0",width:"100%"},value:f,onChange:function(e){return p(e.target.value)}}),r.a.createElement(J.a,{placeholder:"Body",required:!0,value:O,onChange:function(e){return y(e.target.value)}}),r.a.createElement(R.a,{name:"users",selection:!0,options:e,defaultValue:1,onChange:function(e,t){return w(t.value)},style:{margin:"0 10px"}}),r.a.createElement(j.a,{type:"submit",style:{margin:"20px 0"}},"Submit"),r.a.createElement(j.a,{onClick:function(){l(!c),p(""),y(""),w(1)},style:{margin:"0 10px"}},"Cancel")))))},$=function(){var e=Object(s.b)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{style:{marginLeft:40},onClick:function(){e({type:"sortByPopularity"}),e(L(JSON.parse(localStorage.getItem("choosenUser"))))}},"Popular News"))},_=function(){var e=Object(s.b)(),t=Object(a.useState)(!1),n=Object(b.a)(t,2),c=n[0],l=n[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{style:{marginLeft:40},onClick:function(){e(function(e){return{type:"latestNews",lastNewsToogler:e}}(c)),l(!c),e(L(JSON.parse(localStorage.getItem("choosenUser"))))}},c?"Oldest News":"Last News"))};var ee=function(){var e=Object(s.b)();return Object(a.useEffect)((function(){(function(){return g.apply(this,arguments)})().then((function(t){JSON.parse(localStorage.getItem("news"))?e(F(JSON.parse(localStorage.getItem("news")))):(e(F(t)),localStorage.setItem("news",JSON.stringify(t))),JSON.parse(localStorage.getItem("choosenUser"))&&e(L(JSON.parse(localStorage.getItem("choosenUser"))))}))}),[e]),r.a.createElement(u.a,null,r.a.createElement(i.a,null,r.a.createElement(X,null),r.a.createElement(Z,null),r.a.createElement($,null),r.a.createElement(_,null)),r.a.createElement(i.a,null,r.a.createElement(K,null)))},te=n(88),ne=Object(te.b)({news:q,comments:D,users:W}),ae=Object(te.c)(ne);l.a.render(r.a.createElement(o.a,null,r.a.createElement(s.a,{store:ae},r.a.createElement(ee,null))),document.getElementById("root"))}},[[161,1,2]]]);
//# sourceMappingURL=main.360a1663.chunk.js.map