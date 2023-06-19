"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1203],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>s});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,s=u["".concat(o,".").concat(c)]||u[c]||k[c]||l;return n?a.createElement(s,i(i({ref:t},m),{},{components:n})):a.createElement(s,i({ref:t},m))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[u]="string"==typeof e?e:r,i[1]=d;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9582:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={},i="Teclas de M\xeddia",d={unversionedId:"ptBR/media_keys",id:"ptBR/media_keys",title:"Teclas de M\xeddia",description:"A extens\xe3o de teclas de m\xeddia acrescenta teclas para controles comuns de",source:"@site/docs/02-ptBR/media_keys.md",sourceDirName:"02-ptBR",slug:"/ptBR/media_keys",permalink:"/docs/ptBR/media_keys",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/02-ptBR/media_keys.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LED (Luz de Fundo Monocor)",permalink:"/docs/ptBR/led"},next:{title:"M\xf3dulos",permalink:"/docs/ptBR/modules"}},o={},p=[{value:"Keycodes",id:"keycodes",level:2}],m={toc:p},u="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"teclas-de-m\xeddia"},"Teclas de M\xeddia"),(0,r.kt)("p",null,"A extens\xe3o de teclas de m\xeddia acrescenta teclas para controles comuns de\nm\xeddia. Ela pode ser adicionada \xe0 lista de extens\xf5es."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.extensions.media_keys import MediaKeys\nkeyboard.extensions.append(MediaKeys())\n")),(0,r.kt)("h2",{id:"keycodes"},"Keycodes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Tecla"),(0,r.kt)("th",{parentName:"tr",align:null},"Alternativa"),(0,r.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.AUDIO_MUTE")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.MUTE")),(0,r.kt)("td",{parentName:"tr",align:null},"Mudo")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.AUDIO_VOL_UP")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.VOLU")),(0,r.kt)("td",{parentName:"tr",align:null},"Aumenta o Volume")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.AUDIO_VOL_DOWN")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.VOLD")),(0,r.kt)("td",{parentName:"tr",align:null},"Aumenta o Volume")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.BRIGHTESS_UP")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.BRIU")),(0,r.kt)("td",{parentName:"tr",align:null},"Aumentar o brilho")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.BRIGHTNESS_DOWN")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.BRID")),(0,r.kt)("td",{parentName:"tr",align:null},"Diminuir o brilho")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.MEDIA_NEXT_TRACK")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.MNXT")),(0,r.kt)("td",{parentName:"tr",align:null},"Faixa Seguinte (Windows)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.MEDIA_PREV_TRACK")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.MPRV")),(0,r.kt)("td",{parentName:"tr",align:null},"Faixa Anterior (Windows)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.MEDIA_STOP")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.MSTP")),(0,r.kt)("td",{parentName:"tr",align:null},"Stop Faixa (Windows)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.MEDIA_PLAY_PAUSE")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.MPLY")),(0,r.kt)("td",{parentName:"tr",align:null},"Tocar/Pausar Faixa")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.MEDIA_EJECT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.EJCT")),(0,r.kt)("td",{parentName:"tr",align:null},"Ejetar (macOS)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.MEDIA_FAST_FORWARD")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.MFFD")),(0,r.kt)("td",{parentName:"tr",align:null},"Faixa Seguinte (macOS)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.MEDIA_REWIND")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.MRWD")),(0,r.kt)("td",{parentName:"tr",align:null},"Faixa Anterior (macOS)")))))}k.isMDXComponent=!0}}]);