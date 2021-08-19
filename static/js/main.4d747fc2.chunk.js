(this.webpackJsonpclima=this.webpackJsonpclima||[]).push([[0],{18:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a.n(c),s=a(9),i=a.n(s),r=(a(18),a(4)),l=a.n(r),d=a(7),o=a(3),j=a(1),u=function(e){var t=e.titulo;return Object(j.jsx)("nav",{children:Object(j.jsx)("div",{className:"nav-wrapper indigo darken-5",children:Object(j.jsx)("a",{href:"#!",className:"brand-logo",children:t})})})},b=a(6),O=a(5),m=function(e){var t=e.mensaje;return Object(j.jsx)("p",{className:"red darken-5 error",children:t})},x=function(e){var t=e.busqueda,a=e.guardarBusqueda,n=e.guardarConsultar,s=Object(c.useState)(!1),i=Object(o.a)(s,2),r=i[0],l=i[1],d=t.ciudad,u=t.pais,x=function(e){a(Object(O.a)(Object(O.a)({},t),{},Object(b.a)({},e.target.name,e.target.value)))};return Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==d.trim()&&""!==u.trim()?(l(!1),n(!0)):l(!0)},children:[r?Object(j.jsx)(m,{mensaje:"Ambos campos son obligatorios"}):null,Object(j.jsxs)("div",{className:"input-field col s12",children:[Object(j.jsx)("input",{type:"text",name:"ciudad",id:"ciudad",value:d,onChange:x}),Object(j.jsx)("label",{htmlFor:"ciudad",children:"Ciudad: "})]}),Object(j.jsxs)("div",{className:"input-field col s12",children:[Object(j.jsxs)("select",{name:"pais",id:"pais",value:u,onChange:x,children:[Object(j.jsx)("option",{value:"",children:" Seleccione un pa\xeds "}),Object(j.jsx)("option",{value:"DE",children:"Alemania"}),Object(j.jsx)("option",{value:"BE",children:"Belgica"}),Object(j.jsx)("option",{value:"ES",children:"Espa\xf1a"}),Object(j.jsx)("option",{value:"FR",children:"Francia"}),Object(j.jsx)("option",{value:"GB",children:"Gran Breta\xf1a"}),Object(j.jsx)("option",{value:"IT",children:"Italia"}),Object(j.jsx)("option",{value:"CH",children:"Suiza"})]}),Object(j.jsx)("label",{htmlFor:"pais",children:"Pa\xeds: "})]}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"submit",value:"Buscar Clima",className:"waves-effect waves-light btn-large btn-block yellow accent-4 input-field col s12"})})]})},h=function(e){var t=e.resultado,a=t.name,c=t.main;if(!a)return null;var n=273.15;return Object(j.jsx)("div",{className:"card-panel white col s12",children:Object(j.jsxs)("div",{className:"black-text",children:[Object(j.jsxs)("h2",{children:["El clima en ",a," es de: "]}),Object(j.jsxs)("p",{className:"temperatura",children:[parseFloat(c.temp-n,10).toFixed(2)," \xbaC "]}),Object(j.jsxs)("p",{children:["Temperatura M\xe1xima:",parseFloat(c.temp_max-n,10).toFixed(2)," ",Object(j.jsx)("span",{children:" \u2103 "})]}),Object(j.jsxs)("p",{children:["Humedad: ",c.humidity," %"]}),Object(j.jsxs)("p",{children:["Temperatura Minima:",parseFloat(c.temp_min-n,10).toFixed(2)," ",Object(j.jsx)("span",{children:" \u2103 "})]})]})})},p="da1b2b293687420fea212e2b0350f9a4";var v=function(){var e,t=Object(c.useState)({ciudad:"",pais:""}),a=Object(o.a)(t,2),n=a[0],s=a[1],i=Object(c.useState)(!1),r=Object(o.a)(i,2),b=r[0],O=r[1],v=Object(c.useState)({}),f=Object(o.a)(v,2),g=f[0],N=f[1],w=Object(c.useState)(!1),y=Object(o.a)(w,2),C=y[0],S=y[1],F=n.ciudad,k=n.pais;return Object(c.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t,a,c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!b){e.next=14;break}return t=p,a="https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=".concat(F,",").concat(k,"&appid=").concat(t),e.next=5,fetch(a);case 5:return c=e.sent,e.next=8,c.json();case 8:n=e.sent,console.log(n),console.log(c),N(n),O(!1),"404"===n.cod?S(!0):S(!1);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[b]),e=C?Object(j.jsx)(m,{mensaje:"No hay resultados. No tenemos registrada una ciudad con ese nombre."}):Object(j.jsx)(h,{resultado:g}),Object(j.jsxs)(c.Fragment,{children:[Object(j.jsx)(u,{titulo:"Previsi\xf3n del tiempo, insertando Ciudad y Pa\xeds"}),Object(j.jsx)("div",{className:"contenedor-form",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col m6 s12",children:Object(j.jsx)(x,{busqueda:n,guardarBusqueda:s,guardarConsultar:O})}),Object(j.jsx)("div",{className:"col m6 s12",children:e})]})})})]})},f=function(e){var t=e.busqueda,a=e.guardarBusqueda,n=e.guardarConsultar,s=Object(c.useState)(!1),i=Object(o.a)(s,2),r=i[0],l=i[1],d=t.latitud,u=t.longitud,x=function(e){a(Object(O.a)(Object(O.a)({},t),{},Object(b.a)({},e.target.name,e.target.value)))};return Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==d.trim()&&""!==u.trim()?(l(!1),n(!0)):l(!0)},children:[r?Object(j.jsx)(m,{mensaje:"Ambos campos son obligatorios"}):null,Object(j.jsxs)("div",{className:"input-field col s12",children:[Object(j.jsx)("input",{type:"text",name:"latitud",id:"latitud",value:d,onChange:x,placeholder:"41.520"}),Object(j.jsx)("label",{htmlFor:"latitud",children:"Latitud: "})]}),Object(j.jsxs)("div",{className:"input-field col s12",children:[Object(j.jsx)("input",{type:"text",name:"longitud",id:"longitud",value:u,onChange:x,placeholder:"2.15042"}),Object(j.jsx)("label",{htmlFor:"longitud",children:"Longitud: "})]}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"submit",value:"Buscar Clima",className:"waves-effect waves-light btn-large btn-block yellow accent-4 input-field col s12"})})]})};var g=function(){var e,t=Object(c.useState)({latitud:"",longitud:""}),a=Object(o.a)(t,2),n=a[0],s=a[1],i=Object(c.useState)(!1),r=Object(o.a)(i,2),b=r[0],O=r[1],x=Object(c.useState)({}),v=Object(o.a)(x,2),g=v[0],N=v[1],w=Object(c.useState)(!1),y=Object(o.a)(w,2),C=y[0],S=y[1],F=n.latitud,k=n.longitud;return Object(c.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t,a,c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!b){e.next=13;break}return t=p,a="http://api.openweathermap.org/data/2.5/weather?lat=".concat(F,"&lon=").concat(k,"&appid=").concat(t),e.next=5,fetch(a);case 5:return c=e.sent,e.next=8,c.json();case 8:n=e.sent,console.log(n),N(n),O(!1),"404"===n.cod?S(!0):S(!1);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[b]),e=C?Object(j.jsx)(m,{mensaje:"No hay resultados. No tenemos registrada una ciudad con ese nombre."}):Object(j.jsx)(h,{resultado:g}),Object(j.jsxs)(c.Fragment,{children:[Object(j.jsx)(u,{titulo:"Previsi\xf3n del tiempo, insertando Latitud y Longitud"}),Object(j.jsx)("div",{className:"contenedor-form",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col m6 s12",children:Object(j.jsx)(f,{busqueda:n,guardarBusqueda:s,guardarConsultar:O})}),Object(j.jsx)("div",{className:"col m6 s12",children:e})]})})})]})},N=function(e){var t=e.busqueda,a=e.guardarBusqueda,n=e.guardarConsultar,s=Object(c.useState)(!1),i=Object(o.a)(s,2),r=i[0],l=i[1],d=t.id;return Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==d.trim()?(l(!1),n(!0)):l(!0)},children:[r?Object(j.jsx)(m,{mensaje:"El Id de la ciudad no es correcta"}):null,Object(j.jsxs)("div",{className:"input-field col s12",children:[Object(j.jsx)("input",{type:"text",name:"id",id:"id",value:d,onChange:function(e){a(Object(O.a)(Object(O.a)({},t),{},Object(b.a)({},e.target.name,e.target.value)))},placeholder:"Ex: Id Barcelona es  3128760"}),Object(j.jsx)("label",{htmlFor:"ciudad",children:"ID: "})]}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"submit",value:"Buscar Clima",className:"waves-effect waves-light btn-large btn-block yellow accent-4 input-field col s12"})})]})},w=a(10),y=a(11),C=a(12),S=a(13),F=function(e){var t=e.resultado,a=t.cod,c=t.city,n=t.list;if(!a)return null;return Object(j.jsx)("div",{className:"card-panel white col s12",children:Object(j.jsxs)("div",{className:"black-text",children:[Object(j.jsxs)("h2",{children:["El clima en ",c.name," es de: "]}),Object(j.jsx)("div",{children:n.slice(0,9).map((function(e){return Object(j.jsxs)("p",{children:[Object(j.jsx)(w.a,{className:"icon"})," ",e.dt_txt.slice(10,16)," ","h ",Object(j.jsx)(y.a,{className:"icon"}),parseFloat(e.main.temp-273.15,10).toFixed(2)," \xbaC ",Object(j.jsx)(C.a,{className:"icon"}),e.main.humidity,"% ",Object(j.jsx)(S.a,{className:"icon"}),e.weather[0].description]},e.dt_txt)}))})]})})};var k=function(){var e,t=Object(c.useState)({id:""}),a=Object(o.a)(t,2),n=a[0],s=a[1],i=Object(c.useState)(!1),r=Object(o.a)(i,2),b=r[0],O=r[1],x=Object(c.useState)({}),h=Object(o.a)(x,2),v=h[0],f=h[1],g=Object(c.useState)(!1),w=Object(o.a)(g,2),y=w[0],C=w[1],S=n.id;return Object(c.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t,a,c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!b){e.next=13;break}return t=p,a="http://api.openweathermap.org/data/2.5/forecast?id=".concat(S,"&appid=").concat(t),e.next=5,fetch(a);case 5:return c=e.sent,e.next=8,c.json();case 8:n=e.sent,console.log(n),f(n),O(!1),"404"===n.cod?C(!0):C(!1);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[b]),e=y?Object(j.jsx)(m,{mensaje:"No hay resultados. No tenemos registrada una ciudad con ese id."}):Object(j.jsx)(F,{resultado:v}),Object(j.jsxs)(c.Fragment,{children:[Object(j.jsx)(u,{titulo:"Previsi\xf3n del tiempo de las pr\xf3ximas 24 horas, insertando ID Ciudad"}),Object(j.jsx)("div",{className:"contenedor-form",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col m6 s12",children:Object(j.jsx)(N,{busqueda:n,guardarBusqueda:s,guardarConsultar:O})}),Object(j.jsx)("div",{className:"col m6 s12",children:e})]})})})]})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,22)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};i.a.render(Object(j.jsxs)(n.a.StrictMode,{children:[Object(j.jsx)(v,{}),Object(j.jsx)(g,{}),Object(j.jsx)(k,{})]}),document.getElementById("root")),B()}},[[21,1,2]]]);
//# sourceMappingURL=main.4d747fc2.chunk.js.map