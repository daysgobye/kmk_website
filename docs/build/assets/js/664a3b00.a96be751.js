"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3917],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(a),u=r,k=s["".concat(d,".").concat(u)]||s[u]||m[u]||o;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=s;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},6905:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return m}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),l=["components"],i={},d="Camadas",c={unversionedId:"ptBR/layers",id:"ptBR/layers",title:"Camadas",description:"O m\xf3dulo de camadas acrescenta teclas para acessar outras camadas. Ele pode ser",source:"@site/docs/02-ptBR/layers.md",sourceDirName:"02-ptBR",slug:"/ptBR/layers",permalink:"/kmk_website/docs/ptBR/layers",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/02-ptBR/layers.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"kmkpython_vs_circuitpython",permalink:"/kmk_website/docs/ptBR/kmkpython_vs_circuitpython"},next:{title:"LED (Luz de Fundo Monocor)",permalink:"/kmk_website/docs/ptBR/led"}},p={},m=[{value:"Keycodes",id:"keycodes",level:2}],s={toc:m};function u(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"camadas"},"Camadas"),(0,o.kt)("p",null,"O m\xf3dulo de camadas acrescenta teclas para acessar outras camadas. Ele pode ser\nacrescentado \xe0 lista de extens\xf5es."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.modules.layers import Layers\nkeyboard.modules.append(Layers())\n")),(0,o.kt)("h2",{id:"keycodes"},"Keycodes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Tecla"),(0,o.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"KC.DF(layer)")),(0,o.kt)("td",{parentName:"tr",align:null},"Troca a camada padr\xe3o")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"KC.MO(layer)")),(0,o.kt)("td",{parentName:"tr",align:null},"Ativa a camada momentaneamente, desativa quando solta")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"KC.LM(layer, mod)")),(0,o.kt)("td",{parentName:"tr",align:null},"Como ",(0,o.kt)("inlineCode",{parentName:"td"},"MO(layer)")," ,as com ",(0,o.kt)("inlineCode",{parentName:"td"},"mod")," ativo")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"KC.LT(layer, kc)")),(0,o.kt)("td",{parentName:"tr",align:null},"Ativa a camada momentaneamente se segurada, envia ",(0,o.kt)("inlineCode",{parentName:"td"},"kc")," se tocada")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"KC.TG(layer)")),(0,o.kt)("td",{parentName:"tr",align:null},"Habilita a camada se estiver ativa, desativa caso contr\xe1rio (",(0,o.kt)("em",{parentName:"td"},"toggle"),")")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"KC.TO(layer)")),(0,o.kt)("td",{parentName:"tr",align:null},"Ativa a camada, desativando todas as outras")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"KC.TT(layer)")),(0,o.kt)("td",{parentName:"tr",align:null},"Ativa a camada momentaneamente se segurada, troca se tocada repetidamente")))))}u.isMDXComponent=!0}}]);