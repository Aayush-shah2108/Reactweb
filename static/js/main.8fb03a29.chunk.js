(this["webpackJsonptodos-list"]=this["webpackJsonptodos-list"]||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(17),l=a.n(s),r=(a(25),a(11)),o=a(20),i=(a(26),a(8)),b=a(0);var d=function(e){return Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)(i.b,{className:"navbar-brand",to:"/",children:"Today's List"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(b.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.b,{className:"nav-link",to:"/about",children:"About Us"})})]}),Object(b.jsxs)("form",{className:"d-flex",children:[Object(b.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(b.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})]})]})})},j=function(){return Object(b.jsx)("footer",{className:"bg-dark text-light",children:Object(b.jsx)("p",{className:"text-center",children:"Copyright \xa9 All rights reserverd by Aayush shah"})})},u=function(e){var t=e.todo,a=e.onDelete;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:null===t||void 0===t?void 0:t.title}),Object(b.jsx)("p",{children:null===t||void 0===t?void 0:t.desc}),Object(b.jsx)("button",{className:"btn btn-sm btn-danger",onClick:function(){a(t)},children:"Delete"})]})},m=function(e){return Object(b.jsxs)("div",{className:"container my-3",style:{minHeight:"70vh",margin:"40px auto"},children:[Object(b.jsx)("h3",{className:"text-center my-3",children:"Today list"}),0===e.todos.length?"no list to display":e.todos.map((function(t){return Object(b.jsx)(u,{todo:t,onDelete:e.onDelete},t.sno)}))]})},h=function(e){var t=e.addTodo,a=Object(n.useState)(""),c=Object(r.a)(a,2),s=c[0],l=c[1],o=Object(n.useState)(""),i=Object(r.a)(o,2),d=i[0],j=i[1];return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h3",{className:"text-center",children:"Add Todo"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s?d?(t(s,d),l(""),j("")):alert("Desc can't be empty"):alert("Title can't be empty")},children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Title"}),Object(b.jsx)("input",{type:"text",value:s,onChange:function(e){l(e.target.value)},className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"Desc"}),Object(b.jsx)("input",{type:"description",value:d,onChange:function(e){j(e.target.value)},className:"form-control",id:"exampleInputPassword1"})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-success",children:"Add"})]})]})},x=a(2),O=function(){return Object(b.jsx)("div",{children:"About us"})};var p=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=function(e){u(l.filter((function(t){return t!==e}))),localStorage.setItem("todos",JSON.stringify(l))},a=function(e,t){var a={sno:0===l.length?0:l[l.length-1].sno+1,title:e,desc:t};u([].concat(Object(o.a)(l),[a])),console.log(a)},c=Object(n.useState)(e),s=Object(r.a)(c,2),l=s[0],u=s[1];return Object(n.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(l))}),[l]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(i.a,{children:[Object(b.jsx)(d,{}),Object(b.jsxs)(x.c,{children:[Object(b.jsx)(x.a,{exact:!0,path:"/",render:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{addTodo:a}),Object(b.jsx)(m,{todos:l,onDelete:t})]})}}),Object(b.jsx)(x.a,{exact:!0,path:"/about",children:Object(b.jsx)(O,{})})]}),Object(b.jsx)(j,{})]})})},g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,34)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),s(e),l(e)}))};l.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),g()}},[[33,1,2]]]);
//# sourceMappingURL=main.8fb03a29.chunk.js.map