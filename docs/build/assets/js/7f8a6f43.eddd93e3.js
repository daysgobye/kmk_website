"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5464],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),y=o,m=u["".concat(c,".").concat(y)]||u[y]||d[y]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},1840:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={},i="AS5013 (aka 'EasyPoint')",s={unversionedId:"easypoint",id:"easypoint",title:"AS5013 (aka 'EasyPoint')",description:"Module handles the AM5013 Two-dimensional magnetic position sensor with digital coordinates output",source:"@site/docs/easypoint.md",sourceDirName:".",slug:"/easypoint",permalink:"/docs/easypoint",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/easypoint.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dynamic Sequences",permalink:"/docs/dynamic_sequences"},next:{title:"Documentation index",permalink:"/docs/en/"}},c={},p=[{value:"Usage",id:"usage",level:3}],l={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"as5013-aka-easypoint"},"AS5013 (aka 'EasyPoint')"),(0,o.kt)("p",null,"Module handles the AM5013 Two-dimensional magnetic position sensor with digital coordinates output"),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Declare I2C bus and add this module in your main class."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.modules.easypoint import Easypoint\nimport busio\n\ni2c = busio.I2C(scl=board.GP1, sda=board.GP0)\n\neasypoint = Easypoint(i2c, address=0x40)\nkeyboard.modules.append(easypoint)\n")),(0,o.kt)("p",null,"Further configuring the AS5013 involved x/y-offset, and deadzone."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"easypoint = Easypoint(i2c, address=0x40, y_offset=Y_OFFSET, x_offset=X_OFFSET, dead_x=DEAD_X, dead_y=DEAD_Y)\n")))}d.isMDXComponent=!0}}]);