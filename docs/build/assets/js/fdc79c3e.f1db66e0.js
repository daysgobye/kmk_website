"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5546],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),N=p(n),u=r,c=N["".concat(o,".").concat(u)]||N[u]||k[u]||l;return n?a.createElement(c,i(i({ref:e},m),{},{components:n})):a.createElement(c,i({ref:e},m))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=N;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},3100:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return k}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],d={},o="Keycodes Internacionais",p={unversionedId:"ptBR/international",id:"ptBR/international",title:"Keycodes Internacionais",description:"A extens\xe3o internacional acrescenta teclas para teclados n\xe3o-americanos. Ela",source:"@site/docs/02-ptBR/international.md",sourceDirName:"02-ptBR",slug:"/ptBR/international",permalink:"/kmk_website/docs/ptBR/international",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/02-ptBR/international.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Teclados Artesanais",permalink:"/kmk_website/docs/ptBR/handwiring"},next:{title:"Vis\xe3o Geral das Teclas",permalink:"/kmk_website/docs/ptBR/keycodes"}},m={},k=[{value:"Keycodes",id:"keycodes",level:2}],N={toc:k};function u(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},N,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"keycodes-internacionais"},"Keycodes Internacionais"),(0,l.kt)("p",null,"A extens\xe3o internacional acrescenta teclas para teclados n\xe3o-americanos. Ela\npode ser acrescentada \xe0 lista de exce\xe7\xf5es."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.extensions.international import International\nkeyboard.extensions.append(International())\n")),(0,l.kt)("h2",{id:"keycodes"},"Keycodes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Tecla"),(0,l.kt)("th",{parentName:"tr",align:null},"Alternativo"),(0,l.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.NONUS_HASH")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.NUHS")),(0,l.kt)("td",{parentName:"tr",align:null},"Non-US ",(0,l.kt)("inlineCode",{parentName:"td"},"#")," e ",(0,l.kt)("inlineCode",{parentName:"td"},"~"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.NONUS_BSLASH")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.NUBS")),(0,l.kt)("td",{parentName:"tr",align:null},"Non-US ",(0,l.kt)("inlineCode",{parentName:"td"},"\\")," e ",(0,l.kt)("code",null,"|"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.INT1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.RO")),(0,l.kt)("td",{parentName:"tr",align:null},"JIS ",(0,l.kt)("inlineCode",{parentName:"td"},"\\")," e ",(0,l.kt)("code",null,"|"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.INT2")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.KANA")),(0,l.kt)("td",{parentName:"tr",align:null},"JIS Katakana/Hiragana")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.INT3")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.JYEN")),(0,l.kt)("td",{parentName:"tr",align:null},"JIS ",(0,l.kt)("inlineCode",{parentName:"td"},"\xa5"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.INT4")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.HENK")),(0,l.kt)("td",{parentName:"tr",align:null},"JIS Henkan")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.INT5")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.MHEN")),(0,l.kt)("td",{parentName:"tr",align:null},"JIS Muhenkan")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.INT6")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"JIS Numpad ",(0,l.kt)("inlineCode",{parentName:"td"},","))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.INT7")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"7 Internacional")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.INT8")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"8 Internacional")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.INT9")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"9 Internacional")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.LANG1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.HAEN")),(0,l.kt)("td",{parentName:"tr",align:null},"Hangul/English")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.LANG2")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.HANJ")),(0,l.kt)("td",{parentName:"tr",align:null},"Hanja")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.LANG3")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"JIS Katakana")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.LANG4")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"JIS Hiragana")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.LANG5")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"JIS Zenkaku/Hankaku")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.LANG6")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Linguagem 6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.LANG7")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Linguagem 7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.LANG8")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Linguagem 8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.LANG9")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Linguagem 9")))))}u.isMDXComponent=!0}}]);