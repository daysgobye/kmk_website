"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7227],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),c=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),u=n,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||a;return r?o.createElement(k,i(i({ref:t},s),{},{components:r})):o.createElement(k,i({ref:t},s))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6812:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={},i="Economia de Energia",l={unversionedId:"ptBR/power",id:"ptBR/power",title:"Economia de Energia",description:"Este m\xf3dulo permite economizar energia, e \xe9 voltado para teclados bluetooth/com",source:"@site/docs/02-ptBR/power.md",sourceDirName:"02-ptBR",slug:"/ptBR/power",permalink:"/docs/ptBR/power",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/02-ptBR/power.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Portar para o KMK",permalink:"/docs/ptBR/porting_to_kmk"},next:{title:"RGB/Underglow/Neopixel",permalink:"/docs/ptBR/rgb"}},p={},c=[{value:"Keycodes",id:"keycodes",level:2},{value:"Economia Extra Opcional",id:"economia-extra-opcional",level:2}],s={toc:c},d="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"economia-de-energia"},"Economia de Energia"),(0,n.kt)("p",null,"Este m\xf3dulo permite economizar energia, e \xe9 voltado para teclados bluetooth/com\nbateria."),(0,n.kt)("h2",{id:"keycodes"},"Keycodes"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Tecla"),(0,n.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"KC.PS_TOG ")),(0,n.kt)("td",{parentName:"tr",align:null},"Muda a economia ligado/desligado")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"KC.PS_ON ")),(0,n.kt)("td",{parentName:"tr",align:null},"Liga a economia")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"KC.PS_OFF ")),(0,n.kt)("td",{parentName:"tr",align:null},"Desliga a economia")))),(0,n.kt)("h1",{id:"habilitando-a-extens\xe3o"},"Habilitando a Extens\xe3o"),(0,n.kt)("p",null,"Para ligar a economia b\xe1sica, isso \xe9 tudo o que \xe9 preciso:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.modules.power import Power\n\npower = Power()\n\nkeyboard.modules.append(power)\n\n")),(0,n.kt)("h2",{id:"economia-extra-opcional"},"Economia Extra Opcional"),(0,n.kt)("p",null,"Em placas com suporte, como a nice!nano, a energia pode ser cortada no VCC,\neconomizando energia extra se OLEDs ou RGBs est\xe3o instalados. Eles consomem\nenergia mesmo que estejam desligados, ent\xe3o isto os impede disso."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.modules.power import Power\n\n# Your kb.py may already have this set. If not, add it like this\n# import board\n# keyboard.powersave_pin = board.P0_13\npower = Power(powersave_pin=keyboard.powersave_pin)\n\nkeyboard.modules.append(power)\n\n")),(0,n.kt)("p",null,"Certifique-se que o pino \xe9 o correto para seu micro-controlador. O exemplo dado\nfoi para o nice!nano. Nem todos os micro-controladores t\xeam esta caracter\xedstica e\nela pode ser omitida se n\xe3o houver, simplesmente haver\xe1 menos economia de\nenergia."))}m.isMDXComponent=!0}}]);