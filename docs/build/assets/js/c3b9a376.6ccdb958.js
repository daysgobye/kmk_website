"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9030],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(r),f=o,d=m["".concat(c,".").concat(f)]||m[f]||l[f]||a;return r?n.createElement(d,p(p({ref:t},s),{},{components:r})):n.createElement(d,p({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var u=2;u<a;u++)p[u]=r[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2027:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return l}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),p=["components"],i={},c="Suporte",u={unversionedId:"ptBR/support",id:"ptBR/support",title:"Suporte",description:"Se voc\xea precisa de suporte com o KMK ou quer somente dizer oi, encontre-nos no",source:"@site/docs/02-ptBR/support.md",sourceDirName:"02-ptBR",slug:"/ptBR/support",permalink:"/kmk_website/docs/ptBR/support",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/02-ptBR/support.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Teclados Repartidos",permalink:"/kmk_website/docs/ptBR/split_keyboards"},next:{title:"Tapdance",permalink:"/kmk_website/docs/ptBR/tapdance"}},s={},l=[],m={toc:l};function f(e){var t=e.components,r=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"suporte"},"Suporte"),(0,a.kt)("p",null,"Se voc\xea precisa de suporte com o KMK ou quer somente dizer oi, encontre-nos no\ncanal ",(0,a.kt)("a",{parentName:"p",href:"https://matrix.to/#/#kmkfw:klar.sh"},"#kmkfw:klar.sh no Matrix"),". Este canal\ntem uma ponte no Discord\n",(0,a.kt)("a",{parentName:"p",href:"https://discordapp.com/widget?id=493256121075761173&theme=dark"},"aqui")," por\nconveni\xeancia."),(0,a.kt)("p",null,"Se voc\xea precisa de ajuda ou pretende abrir um bug report, se poss\xedvel forne\xe7a o\nhash SHA do ",(0,a.kt)("em",{parentName:"p"},"commit")," utilizado, o qual pode ser obtido executando este comando\nno REPL de seu controlador:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"from kmk.consts import KMK_RELEASE;  print(KMK_RELEASE)")))}f.isMDXComponent=!0}}]);