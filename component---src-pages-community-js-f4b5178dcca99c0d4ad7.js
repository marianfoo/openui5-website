(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"9GH6":function(e,t,a){"use strict";a.r(t);var n=a("zLVn"),l=a("q1tI"),r=a.n(l),c=a("a7gn"),i=a("nn5T"),m=a("vrFN"),o=a("Qs7Y"),s=a("ITHA"),u=a("hPyl"),E=a("i6OX"),v=a("F2aA"),f=a.n(v),d=a("dntC"),g=a("p5tM"),p=function(e){var t=e.title,a=e.description,n=e.url,l=e.date,c=e.location,i=e.cancelled;return r.a.createElement("div",{className:f.a.Event},r.a.createElement("div",{className:f.a.EventTitle},n?r.a.createElement(d.a,{href:n,target:"_blank",rel:"noopener"},t):t,i?" [CANCELLED]":null),r.a.createElement("div",{className:f.a.EventLocation},l+" / "+c),a?r.a.createElement("div",{className:f.a.EventDescription},r.a.createElement(g.a,{source:a})):null)};p.defaultProps={description:null,url:null,cancelled:!1};var y=p;t.default=function(e){var t=e.data,a=t.communityJson,v=a.title,f=a.channels,d=a.connect,g=t.allEventsJson;return r.a.createElement(c.a,null,r.a.createElement(m.a,{title:v}),r.a.createElement(i.a,null,r.a.createElement(o.a,{size:"1",style:{marginBottom:"var(--default-margin-half)"}},v),f.map((function(e,t,a){var c=e.title,i=e.items,m={justifyContent:"flex-start"};return t+1===a.length&&(m.marginBottom="calc(-1 * var(--default-margin-half))"),r.a.createElement(l.Fragment,{key:t},r.a.createElement(o.a,{size:"2",style:{marginBottom:"var(--default-margin-half)"}},c),r.a.createElement(s.a,{style:m},i.map((function(e,t){var a=e.icon,l=Object(n.a)(e,["icon"]);return r.a.createElement(s.b,{key:t,style:{flexBasis:"170px",marginRight:"var(--default-margin-half)",marginBottom:"var(--default-margin-half)"}},r.a.createElement(u.a,Object.assign({icon:function(){return r.a.createElement(E.a,{size:"120x120",src:a.publicURL})},align:"center"},l)))}))))}))),r.a.createElement(i.a,{color:"lightblue"},r.a.createElement(o.a,{size:"2",id:"events",style:{marginBottom:"var(--default-margin-half)"}},"Events"),r.a.createElement(s.a,{column:"1"},g.edges.map((function(e,t){var a=Object.assign({},e.node);return r.a.createElement(s.b,{key:t},r.a.createElement(y,a))})))),r.a.createElement(i.a,null,r.a.createElement(o.a,{size:"2",style:{marginBottom:"var(--default-margin-half)"}},d.title),r.a.createElement(s.a,{column:"3",justifyContent:"spaceBetween"},d.items.map((function(e,t){var a=e.icon,l=Object(n.a)(e,["icon"]);return r.a.createElement(s.b,{key:t},r.a.createElement(u.a,Object.assign({icon:function(){return r.a.createElement(E.a,{size:"96x96",src:a.publicURL})}},l)))})))))}},F2aA:function(e,t,a){e.exports={Event:"styles-module--Event--3TWD0",EventTitle:"styles-module--EventTitle--3BiB6",EventLocation:"styles-module--EventLocation--1yhR-",EventDescription:"styles-module--EventDescription--3WjY4"}}}]);
//# sourceMappingURL=component---src-pages-community-js-f4b5178dcca99c0d4ad7.js.map