"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1919],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=d(n),c=a,k=p["".concat(u,".").concat(c)]||p[c]||s[c]||o;return n?r.createElement(k,l(l({ref:t},m),{},{components:n})):r.createElement(k,l({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={},l="Mouse keys",i={unversionedId:"mouse_keys",id:"mouse_keys",title:"Mouse keys",description:"To enable mouse cursor and/or mouse buttons control from the keyboard add this",source:"@site/docs/mouse_keys.md",sourceDirName:".",slug:"/mouse_keys",permalink:"/docs/mouse_keys",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/mouse_keys.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Modules",permalink:"/docs/modules"},next:{title:"OneShot Keycodes",permalink:"/docs/oneshot"}},u={},d=[],m={toc:d},p="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mouse-keys"},"Mouse keys"),(0,a.kt)("p",null,"To enable mouse cursor and/or mouse buttons control from the keyboard add this\nmodule to list:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.modules.mouse_keys import MouseKeys\nkeyboard.modules.append(MouseKeys())\n")),(0,a.kt)("h1",{id:"keycodes"},"Keycodes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Keycode"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"KC.MB_LMB")),(0,a.kt)("td",{parentName:"tr",align:null},"Left mouse button")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"KC.MB_RMB")),(0,a.kt)("td",{parentName:"tr",align:null},"Right mouse button")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"KC.MB_MMB")),(0,a.kt)("td",{parentName:"tr",align:null},"Middle mouse button")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"KC.MB_BTN4")),(0,a.kt)("td",{parentName:"tr",align:null},"mouse button 4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"KC.MB_BTN5")),(0,a.kt)("td",{parentName:"tr",align:null},"mouse button 5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"KC.MW_UP")),(0,a.kt)("td",{parentName:"tr",align:null},"Mouse wheel up")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"KC.MW_DOWN"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"KC.MW_DN")),(0,a.kt)("td",{parentName:"tr",align:null},"Mouse wheel down")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"KC.MS_UP")),(0,a.kt)("td",{parentName:"tr",align:null},"Move mouse cursor up")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"KC.MS_DOWN"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"KC.MS_DN")),(0,a.kt)("td",{parentName:"tr",align:null},"Move mouse cursor down")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"KC.MS_LEFT"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"KC.MS_LT")),(0,a.kt)("td",{parentName:"tr",align:null},"Move mouse cursor left")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"KC.MS_RIGHT"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"KC.MS_RT")),(0,a.kt)("td",{parentName:"tr",align:null},"Move mouse cursor right")))))}s.isMDXComponent=!0}}]);