_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"3Z9Z":function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),s=a("TSYQ"),o=a.n(s),c=a("q1tI"),l=a.n(c),i=a("vUet"),u=["xl","lg","md","sm","xs"],d=l.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,c=e.noGutters,d=e.as,f=void 0===d?"div":d,m=Object(n.a)(e,["bsPrefix","className","noGutters","as"]),b=Object(i.a)(a,"row"),p=b+"-cols",v=[];return u.forEach((function(e){var t,a=m[e];delete m[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"===typeof a?a.cols:a)&&v.push(""+p+r+"-"+t)})),l.a.createElement(f,Object(r.a)({ref:t},m,{className:o.a.apply(void 0,[s,b,c&&"no-gutters"].concat(v))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},t.a=d},"7vrA":function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),s=a("TSYQ"),o=a.n(s),c=a("q1tI"),l=a.n(c),i=a("vUet"),u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.fluid,c=e.as,u=void 0===c?"div":c,d=e.className,f=Object(n.a)(e,["bsPrefix","fluid","as","className"]),m=Object(i.a)(a,"container"),b="string"===typeof s?"-"+s:"-fluid";return l.a.createElement(u,Object(r.a)({ref:t},f,{className:o()(d,s?""+m+b:m)}))}));u.displayName="Container",u.defaultProps={fluid:!1},t.a=u},AC2I:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/layout/About",function(){return a("XLvC")}])},JI6e:function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),s=a("TSYQ"),o=a.n(s),c=a("q1tI"),l=a.n(c),i=a("vUet"),u=["xl","lg","md","sm","xs"],d=l.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,c=e.as,d=void 0===c?"div":c,f=Object(n.a)(e,["bsPrefix","className","as"]),m=Object(i.a)(a,"col"),b=[],p=[];return u.forEach((function(e){var t,a,r,n=f[e];if(delete f[e],"object"===typeof n&&null!=n){var s=n.span;t=void 0===s||s,a=n.offset,r=n.order}else t=n;var o="xs"!==e?"-"+e:"";t&&b.push(!0===t?""+m+o:""+m+o+"-"+t),null!=r&&p.push("order"+o+"-"+r),null!=a&&p.push("offset"+o+"-"+a)})),b.length||b.push(m),l.a.createElement(d,Object(r.a)({},f,{ref:t,className:o.a.apply(void 0,[s].concat(b,p))}))}));d.displayName="Col",t.a=d},Qetd:function(e,t,a){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},TSYQ:function(e,t,a){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)&&r.length){var o=n.apply(null,r);o&&e.push(o)}else if("object"===s)for(var c in r)a.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},Wzyw:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r).a.createContext(null);n.displayName="CardContext",t.a=n},XLvC:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),s=a("7vrA"),o=a("3Z9Z"),c=a("JI6e"),l=a("wx14"),i=a("zLVn"),u=a("TSYQ"),d=a.n(u),f=a("vUet"),m=a("YdCC"),b=function(e){return n.a.forwardRef((function(t,a){return n.a.createElement("div",Object(l.a)({},t,{ref:a,className:d()(t.className,e)}))}))},p=a("Wzyw"),v=n.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,s=e.variant,o=e.as,c=void 0===o?"img":o,u=Object(i.a)(e,["bsPrefix","className","variant","as"]),m=Object(f.a)(a,"card-img");return n.a.createElement(c,Object(l.a)({ref:t,className:d()(s?m+"-"+s:m,r)},u))}));v.displayName="CardImg",v.defaultProps={variant:null};var N=v,x=b("h5"),y=b("h6"),h=Object(m.a)("card-body"),j=Object(m.a)("card-title",{Component:x}),g=Object(m.a)("card-subtitle",{Component:y}),O=Object(m.a)("card-link",{Component:"a"}),w=Object(m.a)("card-text",{Component:"p"}),P=Object(m.a)("card-header"),C=Object(m.a)("card-footer"),I=Object(m.a)("card-img-overlay"),E=n.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,o=e.bg,c=e.text,u=e.border,m=e.body,b=e.children,v=e.as,N=void 0===v?"div":v,x=Object(i.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),y=Object(f.a)(a,"card"),j=Object(r.useMemo)((function(){return{cardHeaderBsPrefix:y+"-header"}}),[y]);return n.a.createElement(p.a.Provider,{value:j},n.a.createElement(N,Object(l.a)({ref:t},x,{className:d()(s,y,o&&"bg-"+o,c&&"text-"+c,u&&"border-"+u)}),m?n.a.createElement(h,null,b):b))}));E.displayName="Card",E.defaultProps={body:!1},E.Img=N,E.Title=j,E.Subtitle=g,E.Body=h,E.Link=O,E.Text=w,E.Header=P,E.Footer=C,E.ImgOverlay=I;var T=E,k=n.a.createElement;t.default=function(){return k(s.a,{className:"pt-5"},k(o.a,{className:"justify-content-center"},k(c.a,{md:"8"},k("h2",{className:"black py-5 text-center"},"About Me"),k("p",{className:"font-18 font-light black text-center"},"I have ",k("span",{className:"font-bold blue"},"Information Systems")," bachelor degree, studying about ",k("span",{className:"font-medium blue2"}," Software Development, and Business Process"),". Now I learning ",k("span",{className:"font-medium blue2"},"UI / UX Design "),"  for improving my software development. And have some skill as ",k("span",{className:"font-medium blue2"},"Video Editor"))),k(c.a,{md:"12",className:"justify-content-center my-5"},k("h2",{className:"black py-5 text-center"},"Skill I Have"),k(o.a,{className:"justify-content-center"},k(c.a,{md:"3"},k(T,{style:{minHeight:" 8rem"},className:"shadow-sm",border:"light"},k(T.Body,null,k(T.Title,{className:"blue text-center"},"Software Development"),k(T.Text,{className:"black2 text-center "},"Web app, HTML, Javascript, React JS, Codeigniter, PHP, Mysql, Node JS")))),k(c.a,{md:"3"},k(T,{style:{minHeight:" 8rem"},className:"shadow-sm",border:"light"},k(T.Body,null,k(T.Title,{className:"blue text-center"},"UI / UX Design"),k(T.Text,{className:"black2 text-center align-middle"},"Figma, Adobe XD,  Illustrator, Photoshop")))),k(c.a,{md:"3"},k(T,{style:{minHeight:" 8rem"},className:"shadow-sm",border:"light"},k(T.Body,null,k(T.Title,{className:"blue text-center"},"Video Editor"),k(T.Text,{className:"black2 text-center"},"Adobe After Effect, Premiere Pro"))))))))}},YdCC:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var r=a("wx14"),n=a("zLVn"),s=a("TSYQ"),o=a.n(s),c=/-(.)/g;var l=a("q1tI"),i=a.n(l),u=a("vUet"),d=function(e){return e[0].toUpperCase()+(t=e,t.replace(c,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function f(e,t){var a=void 0===t?{}:t,s=a.displayName,c=void 0===s?d(e):s,l=a.Component,f=a.defaultProps,m=i.a.forwardRef((function(t,a){var s=t.className,c=t.bsPrefix,d=t.as,f=void 0===d?l||"div":d,m=Object(n.a)(t,["className","bsPrefix","as"]),b=Object(u.a)(c,e);return i.a.createElement(f,Object(r.a)({ref:a,className:o()(s,b)},m))}));return m.defaultProps=f,m.displayName=c,m}},vUet:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a("wx14");var r=a("q1tI"),n=a.n(r),s=n.a.createContext({});s.Consumer,s.Provider;function o(e,t){var a=Object(r.useContext)(s);return e||a[t]||t}},wx14:function(e,t,a){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return r}))},zLVn:function(e,t,a){"use strict";function r(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}a.d(t,"a",(function(){return r}))}},[["AC2I",0,1]]]);