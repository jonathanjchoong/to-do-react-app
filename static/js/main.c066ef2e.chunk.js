(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],{14:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),r=c.n(s),i=c(7),o=c.n(i);c(6);var a=function(e){return Object(n.jsxs)("form",{className:"todo-form",onSubmit:function(t){t.preventDefault(),e.onSubmit({id:"ID"+Date.now(),text:document.getElementById("taskbar").value,complete:"false"}),document.getElementById("taskbar").value=""},children:[Object(n.jsx)("input",{type:"text",id:"taskbar",name:"activity",placeholder:"Add a task here!"}),Object(n.jsx)("button",{className:"addButton",children:"add task"})]})},l=c(2),d=c(8);function u(e){return Object(n.jsx)("li",{id:e.id,complete:e.complete,children:e.value})}var j=function(e){var t=e.tasks.map((function(t,c){return Object(n.jsxs)("div",{children:[Object(n.jsx)(u,{id:t.id,value:t.text,complete:t.complete},t.id),Object(n.jsx)("button",{id:"removebutton",onClick:function(){return e.removeTasks(t.id)},children:"remove"}),"false"===t.complete?Object(n.jsx)("button",{id:"completebutton",onClick:function(){return e.completeTasks(t.id)},children:"complete"}):null]},c)}));return Object(n.jsx)("ul",{children:t})};var b=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),c=t[0],r=t[1],i=function(e){var t=Object(l.a)(c).filter((function(t){return t.id!==e}));r(t)},o=function(e){var t=Object(l.a)(c);t.find((function(t){return t.id===e})).complete="true",r(t)};return Object(n.jsxs)("div",{children:[Object(n.jsx)(a,{onSubmit:function(e){var t=[e].concat(Object(l.a)(c));r(t)}}),Object(n.jsxs)("div",{className:"to-do",children:[Object(n.jsx)("h2",{children:"Things To Do"}),Object(n.jsx)("div",{className:"activityList",children:Object(n.jsx)(j,{tasks:Object(l.a)(c).filter((function(e){return"true"!==e.complete})),removeTasks:i,completeTasks:o})})]}),Object(n.jsxs)("div",{className:"completed",children:[Object(n.jsx)("h2",{children:"Completed"}),Object(n.jsx)(j,{tasks:Object(l.a)(c).filter((function(e){return"true"===e.complete})),removeTasks:i,completeTasks:o})]})]})};var m=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("header",{children:Object(n.jsx)("h1",{children:"To-Do List"})}),Object(n.jsx)(b,{})]})};o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(m,{})}),document.getElementById("root"))},6:function(e,t,c){}},[[14,1,2]]]);
//# sourceMappingURL=main.c066ef2e.chunk.js.map