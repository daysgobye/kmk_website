"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5464],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||l[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1840:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={},c="AS5013 (aka 'EasyPoint')",u={unversionedId:"easypoint",id:"easypoint",title:"AS5013 (aka 'EasyPoint')",description:"Module handles the AM5013 Two-dimensional magnetic position sensor with digital coordinates output",source:"@site/docs/easypoint.md",sourceDirName:".",slug:"/easypoint",permalink:"/kmk_website/docs/easypoint",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/easypoint.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dynamic Sequences",permalink:"/kmk_website/docs/dynamic_sequences"},next:{title:"Encoder module",permalink:"/kmk_website/docs/encoder"}},p={},l=[{value:"Usage",id:"usage",level:3}],d={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"as5013-aka-easypoint"},"AS5013 (aka 'EasyPoint')"),(0,a.kt)("p",null,"Module handles the AM5013 Two-dimensional magnetic position sensor with digital coordinates output"),(0,a.kt)("p",null,"Product page: ",(0,a.kt)("a",{parentName:"p",href:"https://www.mouser.dk/ProductDetail/ams/AS5013-IQFT?qs=abmNkq9no6D3ApA%252BrWSMNQ%3D%3D"},"https://www.mouser.dk/ProductDetail/ams/AS5013-IQFT?qs=abmNkq9no6D3ApA%252BrWSMNQ%3D%3D")),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Declare I2C bus and add this module in your main class."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.modules.easypoint import Easypoint\nimport busio as io\n\ni2c = busio.I2C(scl=board.GP1, sda=board.GP0)\n\neasypoint = Easypoint(i2c, address=0x40)\nkeyboard.modules.append(easypoint)\n")),(0,a.kt)("p",null,"Further configuring the AS5013 involved x/y-offset, and deadzone."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"easypoint = Easypoint(i2c, address=0x40, y_offset=Y_OFFSET, x_offset=X_OFFSET, dead_x=DEAD_X, dead_y=DEAD_Y)\n")))}m.isMDXComponent=!0}}]);