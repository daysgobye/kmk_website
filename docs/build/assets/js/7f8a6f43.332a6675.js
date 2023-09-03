"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5464],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(y,i(i({ref:t},l),{},{components:n})):r.createElement(y,i({ref:t},l))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1840:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i="AS5013 (aka 'EasyPoint')",s={unversionedId:"easypoint",id:"easypoint",title:"AS5013 (aka 'EasyPoint')",description:"Module handles the AM5013 Two-dimensional magnetic position sensor with digital coordinates output",source:"@site/docs/easypoint.md",sourceDirName:".",slug:"/easypoint",permalink:"/docs/easypoint",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/easypoint.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dynamic Sequences",permalink:"/docs/dynamic_sequences"},next:{title:"AS5013 (aka 'EasyPoint')",permalink:"/docs/en/easypoint"}},p={},c=[{value:"Usage",id:"usage",level:3}],l={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"as5013-aka-easypoint"},"AS5013 (aka 'EasyPoint')"),(0,a.kt)("p",null,"Module handles the AM5013 Two-dimensional magnetic position sensor with digital coordinates output"),(0,a.kt)("p",null,"Product page: ",(0,a.kt)("a",{parentName:"p",href:"https://www.mouser.dk/ProductDetail/ams/AS5013-IQFT?qs=abmNkq9no6D3ApA%252BrWSMNQ%3D%3D"},"https://www.mouser.dk/ProductDetail/ams/AS5013-IQFT?qs=abmNkq9no6D3ApA%252BrWSMNQ%3D%3D")),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Declare I2C bus and add this module in your main class."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.modules.easypoint import Easypoint\nimport busio\n\ni2c = busio.I2C(scl=board.GP1, sda=board.GP0)\n\neasypoint = Easypoint(i2c, address=0x40)\nkeyboard.modules.append(easypoint)\n")),(0,a.kt)("p",null,"Further configuring the AS5013 involved x/y-offset, and deadzone."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"easypoint = Easypoint(i2c, address=0x40, y_offset=Y_OFFSET, x_offset=X_OFFSET, dead_x=DEAD_X, dead_y=DEAD_Y)\n")))}d.isMDXComponent=!0}}]);