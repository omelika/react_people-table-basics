(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{14:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(9),s=c.n(n),a=c(5),j=c(2),r=(c(14),c(1)),b=function(){return Object(r.jsx)("h1",{className:"title",children:"Page not found"})},l=c(8),i=c(4),h=c(0);var d=function(e){var t=e.person;return Object(r.jsxs)("tr",{className:"Person",children:[Object(r.jsx)("td",{children:t.name}),Object(r.jsx)("td",{children:t.sex}),Object(r.jsx)("td",{children:t.born}),Object(r.jsx)("td",{children:t.died}),Object(r.jsx)("td",{children:t.motherName}),Object(r.jsx)("td",{children:t.fatherName}),Object(r.jsx)("td",{children:t.slug})]})},o=function(e){var t=e.people;return Object(r.jsxs)("table",{className:"table",children:[Object(r.jsxs)("thead",{children:[Object(r.jsx)("th",{children:"name"}),Object(r.jsx)("th",{children:"sex"}),Object(r.jsx)("th",{children:"born"}),Object(r.jsx)("th",{children:"died"}),Object(r.jsx)("th",{children:"fatehrName"}),Object(r.jsx)("th",{children:"motherName"}),Object(r.jsx)("th",{children:"slug"})]}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsx)(d,{person:e},e.slug)}))})]})},O=function(){var e=Object(h.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(h.useEffect)((function(){fetch("".concat("https://mate-academy.github.io/react_people-table/api/people.json")).then((function(e){return e.json()})).then((function(e){var t=e.map((function(t){return Object(l.a)(Object(l.a)({},t),{},{mother:e.find((function(e){return t.motherName===e.name}))||null,father:e.find((function(e){return t.fatherName===e.name}))||null})}));n(t)}))}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"title",children:"People Page"}),Object(r.jsx)(o,{people:c})]})},x=(c(16),function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("nav",{className:"navbar is-fixed-top has-background-light",children:Object(r.jsx)("div",{className:"navbar-menu",children:Object(r.jsxs)("div",{className:"navbar-start",children:[Object(r.jsx)(a.b,{to:"/",className:"navbar-item",children:"Home page"}),Object(r.jsx)(a.b,{to:"people",className:"navbar-item",children:"People page"})]})})}),Object(r.jsxs)(j.d,{children:[Object(r.jsx)(j.b,{path:"/",element:Object(r.jsx)("h1",{children:"Home page"})}),Object(r.jsx)(j.b,{path:"/home",element:Object(r.jsx)(j.a,{to:"/"})}),Object(r.jsx)(j.b,{path:"people",element:Object(r.jsx)(O,{})}),Object(r.jsx)(j.b,{path:"*",element:Object(r.jsx)(b,{})})]})]})});s.a.render(Object(r.jsx)(a.a,{children:Object(r.jsx)(x,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.c814f9d5.chunk.js.map