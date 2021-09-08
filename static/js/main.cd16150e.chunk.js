(this["webpackJsonpsd-0x-project-react-context-hooks-starwars-datatable-filters"]=this["webpackJsonpsd-0x-project-react-context-hooks-starwars-datatable-filters"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(4),o=a.n(l),u=(a(2),Object(r.createContext)());function i(){var e=Object(r.useContext)(u),t=e.data,a=e.isLoading;return n.a.createElement("div",null,n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"name"),n.a.createElement("th",null,"rotation_period"),n.a.createElement("th",null,"orbital_period"),n.a.createElement("th",null,"diameter"),n.a.createElement("th",null,"climate"),n.a.createElement("th",null,"gravity"),n.a.createElement("th",null,"terrain"),n.a.createElement("th",null,"surface_water"),n.a.createElement("th",null,"population"),n.a.createElement("th",null,"films"),n.a.createElement("th",null,"created"),n.a.createElement("th",null,"edited"),n.a.createElement("th",null,"url"))),n.a.createElement("tbody",null,a?"Loading the Planets":t.map((function(e){return n.a.createElement("tr",{key:e.name},n.a.createElement("td",null,e.name),n.a.createElement("td",null,e.rotation_period),n.a.createElement("td",null,e.orbital_period),n.a.createElement("td",null,e.diameter),n.a.createElement("td",null,e.climate),n.a.createElement("td",null,e.gravity),n.a.createElement("td",null,e.terrain),n.a.createElement("td",null,e.surface_water),n.a.createElement("td",null,e.population),n.a.createElement("td",null,e.films),n.a.createElement("td",null,e.created),n.a.createElement("td",null,e.edited),n.a.createElement("td",null,e.url))})))))}function c(){var e=Object(r.useContext)(u),t=e.q,a=e.setQ;return n.a.createElement("div",null,n.a.createElement("input",{className:"InputA","data-testid":"name-filter",type:"text",placeholder:"search on",value:t,onChange:function(e){var t=e.target.value;a(t)}}))}var s=a(1);var m=function(e){var t=e.children,a=Object(r.useState)([]),l=Object(s.a)(a,2),o=l[0],i=l[1],c=Object(r.useState)([]),m=Object(s.a)(c,2),p=m[0],d=m[1],f=Object(r.useState)([]),E=Object(s.a)(f,2),b=E[0],h=E[1],F=Object(r.useState)(""),g=Object(s.a)(F,2),v=g[0],_=g[1],j=Object(r.useState)("population"),O=Object(s.a)(j,2),w=O[0],q=O[1],C=Object(r.useState)("maior que"),x=Object(s.a)(C,2),y=x[0],k=x[1],S=Object(r.useState)(""),N=Object(s.a)(S,2),L=N[0],D=N[1],R=Object(r.useState)(!1),B=Object(s.a)(R,2),I=B[0],A=B[1];function J(){if(""!==v){var e=o.filter((function(e){return e.name.toLowerCase().includes(v.toLowerCase())}));i(e)}else A(!0),fetch("https://swapi-trybe.herokuapp.com/api/planets/").then((function(e){return e.json()})).then((function(e){return i(e.results)})),A(!1)}return Object(r.useEffect)((function(){A(!0),fetch("https://swapi-trybe.herokuapp.com/api/planets/").then((function(e){return e.json()})).then((function(e){return i(e.results)})),A(!1)}),[]),Object(r.useEffect)((function(){J()}),[v]),Object(r.useEffect)((function(){p.coluna;"igual a"===p.range&&i(o.filter((function(e){return parseFloat(e.val)===parseFloat(p.number)}))),console.log(p.coluna)}),[p]),console.log(o),Object(r.useEffect)((function(){console.log(b)}),[b]),n.a.createElement(u.Provider,{value:{data:o,isLoading:I,q:v,setQ:_,column:w,setColumn:q,range:y,setRange:k,number:L,setNumber:D,Filter:function(){"population"===w&&"igual a"===y&&i(o.filter((function(e){return parseFloat(e.population)===parseFloat(L)}))),"population"===w&&"maior que"===y&&i(o.filter((function(e){return parseFloat(e.population)>parseFloat(L)}))),"population"===w&&"menor que"===y?i(o.filter((function(e){return parseFloat(e.population)<parseFloat(L)}))):0===L.length&&J(),"orbital_period"===w&&"igual a"===y&&i(o.filter((function(e){return parseFloat(e.orbital_period)===parseFloat(L)}))),"orbital_period"===w&&"maior que"===y&&i(o.filter((function(e){return parseFloat(e.orbital_period)>parseFloat(L)}))),"orbital_period"===w&&"menor que"===y?i(o.filter((function(e){return parseFloat(e.orbital_period)<parseFloat(L)}))):0===L.length&&J(),"diameter"===w&&"igual a"===y&&i(o.filter((function(e){return parseFloat(e.diameter)===parseFloat(L)}))),"diameter"===w&&"maior que"===y&&i(o.filter((function(e){return parseFloat(e.diameter)>parseFloat(L)}))),"diameter"===w&&"menor que"===y?i(o.filter((function(e){return parseFloat(e.diameter)<parseFloat(L)}))):0===L.length&&J(),"rotation_period"===w&&"igual a"===y&&i(o.filter((function(e){return parseFloat(e.rotation_period)===parseFloat(L)}))),"rotation_period"===w&&"maior que"===y&&i(o.filter((function(e){return parseFloat(e.rotation_period)>parseFloat(L)}))),"rotation_period"===w&&"menor que"===y?i(o.filter((function(e){return parseFloat(e.rotation_period)<parseFloat(L)}))):0===L.length&&J(),"surface_water"===w&&"igual a"===y&&i(o.filter((function(e){return parseFloat(e.surface_water)===parseFloat(L)}))),"surface_water"===w&&"maior que"===y&&i(o.filter((function(e){return parseFloat(e.surface_water)>parseFloat(L)}))),"surface_water"===w&&"menor que"===y?i(o.filter((function(e){return parseFloat(e.surface_water)<parseFloat(L)}))):0===L.length&&J()},deleted:b,setDeleted:h,filtered:p,setFiltered:d}},t)};function p(){var e=Object(r.useContext)(u),t=e.column,a=e.setColumn,l=e.range,o=e.setRange,i=e.number,c=e.setNumber,s=e.Filter,m=(e.deleted,e.setDeleted),p=(e.filtered,e.setFiltered);return n.a.createElement("div",null,n.a.createElement("label",{className:"box",htmlFor:"select-input"},"Filtrar por Colunas",n.a.createElement("select",{className:"box select",name:"select",value:t,onChange:function(e){var t=e.target.value;a(t)},"data-testid":"column-filter"},n.a.createElement("option",{value:"population"},"population"),n.a.createElement("option",{value:"orbital_period"},"orbital_period"),n.a.createElement("option",{value:"diameter"},"diameter"),n.a.createElement("option",{value:"rotation_period"},"rotation_period"),n.a.createElement("option",{value:"surface_water"},"surface_water"))),n.a.createElement("label",{htmlFor:"select-input-Range"},"Faixa de Valor",n.a.createElement("select",{name:"select-Range",value:l,onChange:function(e){var t=e.target.value;o(t)},"data-testid":"comparison-filter"},n.a.createElement("option",{value:"maior que"},"maior que"),n.a.createElement("option",{value:"menor que"},"menor que"),n.a.createElement("option",{value:"igual a"},"igual a"))),n.a.createElement("input",{className:"Input","data-testid":"input-filter",type:"number",placeholder:"number",value:i,onChange:function(e){var t=e.target.value;c(t)}}),n.a.createElement("button",{className:"ButtonS","data-testid":"button-filter",type:"button",onClick:function(){return p({coluna:t,range:l,number:i})}},"Adicionar Filtro"),n.a.createElement("button",{className:"ButtonD","data-testid":"button-filter",type:"button",onClick:function(){return m([{column:t,range:l,number:i,Filter:s}])}},"Delete"))}var d=function(){return n.a.createElement(m,null,n.a.createElement("div",null,n.a.createElement(c,null),n.a.createElement(p,null),n.a.createElement(i,null)))};o.a.render(n.a.createElement(d,null),document.getElementById("root"))},2:function(e,t,a){},5:function(e,t,a){e.exports=a(10)}},[[5,1,2]]]);
//# sourceMappingURL=main.cd16150e.chunk.js.map