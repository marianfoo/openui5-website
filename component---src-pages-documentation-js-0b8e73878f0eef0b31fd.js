(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"7u6j":function(e,t,n){e.exports={Button:"styles-module--Button--2uSNj",size_2:"styles-module--size_2--2Wg4X",size_1:"styles-module--size_1--3hYIb",color_transparent:"styles-module--color_transparent--vCCa3",mod_download:"styles-module--mod_download--mqdT0",Button__icon:"styles-module--Button__icon--23uSL",Button__version:"styles-module--Button__version--2FXvE"}},ITHA:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n("u6S6"),l=n.n(a),o=n("q1tI"),s=n.n(o),c=n("TSYQ"),r=n.n(c),i=n("KJBU"),u=n.n(i),m=(n("SGh4"),function(e){var t=e.column,n=e.style,a=e.justifyContent,o=e.children;return s.a.createElement("div",{className:r()(u.a.List,t?u.a["column_"+t]:null,a?u.a["justifyContent_"+l()(a)]:null),style:n},o)});m.defaultProps={column:null,justifyContent:null,style:null};var d=function(e){var t=e.style,n=e.children;return s.a.createElement("div",{className:u.a.ListItem,style:t},n)};d.defaultProps={style:null}},KJBU:function(e,t,n){e.exports={List:"styles-module--List--2A3GI",ListItem:"styles-module--ListItem--GVdTX",justifyContent_spaceBetween:"styles-module--justifyContent_spaceBetween--1-p-6",column_1:"styles-module--column_1--lo9jP",column_2:"styles-module--column_2--2FpOU",column_3:"styles-module--column_3--1v7Zb"}},KiqP:function(e,t,n){e.exports={Documentation:"styles-module--Documentation--1aMdi",Documentation__col1:"styles-module--Documentation__col1--3tLO9",Documentation__col2:"styles-module--Documentation__col2--3B60j",Documentation__title:"styles-module--Documentation__title--2NyE_",Documentation__text:"styles-module--Documentation__text--12q27"}},bbkN:function(e,t,n){e.exports={Icon:"styles-module--Icon--IgQVY",size_96x96:"styles-module--size_96x96--1w07_",size_120x120:"styles-module--size_120x120--1QYU_"}},i6OX:function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a),o=n("TSYQ"),s=n.n(o),c=n("bbkN"),r=n.n(c),i=(n("SGh4"),function(e){var t=e.size,n=e.src,a=e.alt,o=e.style,c=e.imgStyle;return l.a.createElement("div",{className:s()(r.a.Icon,r.a["size_"+t]),style:o},l.a.createElement("img",{src:n,alt:a,style:c}))});i.defaultProps={size:"96x96",alt:null,style:null,imgStyle:null},t.a=i},mnx0:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),o=n("nn5T"),s=n("vrFN"),c=n("KiqP"),r=n.n(c),i=n("dntC"),u=n("ww3E"),m=function(){return l.a.createElement("div",{className:r.a.Documentation},l.a.createElement("div",{className:r.a.Documentation__col1},l.a.createElement("div",{className:r.a.Documentation__title},"The Demo Kit is the central place to understand and learn OpenUI5"),l.a.createElement("div",{className:r.a.Documentation__text},"It contains the official ",l.a.createElement(i.a,{href:"https://openui5.hana.ondemand.com/#/topic",target:"_blank",rel:"noopener"},"documentation"),",  ",l.a.createElement(i.a,{href:"https://openui5.hana.ondemand.com/#/api",target:"_blank",rel:"noopener"},"the API Reference"),",  as well as ",l.a.createElement(i.a,{href:"https://openui5.hana.ondemand.com/#/controls",target:"_blank",rel:"noopener"},"code samples")," for many UI controls to demonstrate their use."),l.a.createElement(u.a,{href:"https://openui5.hana.ondemand.com/",rel:"noopener",target:"_blank",size:"2"},"Browse Demo Kit")),l.a.createElement("div",{className:r.a.Documentation__col2}))},d=n("Qs7Y"),_=n("ITHA"),p=n("hPyl"),y=n("i6OX");t.default=function(e){var t=e.data,n=t.documentationJson,a=t.allLinksJson;return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{title:n.title}),l.a.createElement(o.a,null,l.a.createElement(d.a,{size:"1"},n.title)),l.a.createElement(o.a,{color:"lightblue"},l.a.createElement(m,null)),l.a.createElement(o.a,null,l.a.createElement(_.a,{column:"3"},a.edges.map((function(e,t){var n=e.node,a=n.title,o=n.icon,s=n.links;return l.a.createElement(_.b,{key:t},l.a.createElement(p.a,{type:"documentation",title:a,icon:function(){return l.a.createElement(y.a,{size:"96x96",src:o.publicURL})}}),l.a.createElement(_.a,{column:"1"},s.map((function(e,t){return l.a.createElement(_.b,{key:t},l.a.createElement(p.a,Object.assign({type:"article"},e)))}))))})))),l.a.createElement(o.a,{color:"lightblue"},l.a.createElement(d.a,{size:"3",style:{marginBottom:"calc(var(--default-margin)/4)"}},l.a.createElement(i.a,{href:"https://openui5.hana.ondemand.com/#/topic/5982a9734748474aa8d4af9c3d8f31c0"},"OpenUI5 vs SAPUI5")),l.a.createElement("div",{style:{maxWidth:"700px"}},'OpenUI5 is the open source version of SAPUI5, a JavaScript UI library maintained by SAP. Since OpenUI5 shares the same core as SAPUI5, we often refer to both simply as "UI5".')))}},ww3E:function(e,t,n){"use strict";var a=n("zLVn"),l=n("q1tI"),o=n.n(l),s=n("TSYQ"),c=n.n(s),r=n("7u6j"),i=n.n(r),u=(n("SGh4"),function(e){var t=e.children,n=e.size,l=e.href,s=(e.target,Object(a.a)(e,["children","size","href","target"]));return o.a.createElement("a",Object.assign({className:c()(i.a.Button,n?i.a["size_"+n]:null),href:l},s),t)});u.defaultProps={size:"1",target:null,rel:"noopener noreferrer"},t.a=u}}]);
//# sourceMappingURL=component---src-pages-documentation-js-0b8e73878f0eef0b31fd.js.map