"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8813],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),d=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=d(r),c=n,k=m["".concat(p,".").concat(c)]||m[c]||s[c]||o;return r?a.createElement(k,l(l({ref:t},u),{},{components:r})):a.createElement(k,l({ref:t},u))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:n,l[1]=i;for(var d=2;d<o;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5518:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=r(7462),n=(r(7294),r(3905));const o={},l="Teclas de Mouse",i={unversionedId:"ptBR/mouse_keys",id:"ptBR/mouse_keys",title:"Teclas de Mouse",description:"Para habilitar as teclas de mouse e/ou cursor para o teclado, adicione este",source:"@site/docs/02-ptBR/mouse_keys.md",sourceDirName:"02-ptBR",slug:"/ptBR/mouse_keys",permalink:"/docs/ptBR/mouse_keys",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/02-ptBR/mouse_keys.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"M\xf3dulos",permalink:"/docs/ptBR/modules"},next:{title:"Portar para o KMK",permalink:"/docs/ptBR/porting_to_kmk"}},p={},d=[],u={toc:d},m="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"teclas-de-mouse"},"Teclas de Mouse"),(0,n.kt)("p",null,"Para habilitar as teclas de mouse e/ou cursor para o teclado, adicione este\nm\xf3dulo \xe0 lista:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.modules.mouse_keys import MouseKeys\nkeyboard.modules.append(MouseKeys())\n")),(0,n.kt)("h1",{id:"keycodes"},"Keycodes"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Keycode"),(0,n.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"MB_LMB")),(0,n.kt)("td",{parentName:"tr",align:null},"Bot\xe3o esquerdo do mouse")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"MB_RMB")),(0,n.kt)("td",{parentName:"tr",align:null},"Bot\xe3o direito do mouse")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"MB_MMB")),(0,n.kt)("td",{parentName:"tr",align:null},"Bot\xe3o do meio do mouse")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"MW_UP")),(0,n.kt)("td",{parentName:"tr",align:null},"Rolar o scroll para cima")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"MW_DOWN"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"MW_DN")),(0,n.kt)("td",{parentName:"tr",align:null},"Rolar o scroll para baixo")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"MS_UP")),(0,n.kt)("td",{parentName:"tr",align:null},"Mover o cursor do mouse para cima")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"MS_DOWN"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"MS_DN")),(0,n.kt)("td",{parentName:"tr",align:null},"Mover o cursor do mouse para baixo")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"MS_LEFT"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"MS_LT")),(0,n.kt)("td",{parentName:"tr",align:null},"Mover o cursor do mouse para a esquerdax")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"MS_RIGHT"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"MS_RT")),(0,n.kt)("td",{parentName:"tr",align:null},"Mover o cursor do mouse para a direita")))))}s.isMDXComponent=!0}}]);