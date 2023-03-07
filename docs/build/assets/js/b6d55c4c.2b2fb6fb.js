"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5585],{3905:(e,n,t)=>{t.d(n,{Zo:()=>y,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},y=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,y=s(e,["components","mdxType","originalType","parentName"]),c=l(t),u=a,d=c["".concat(p,".").concat(u)]||c[u]||m[u]||o;return t?r.createElement(d,i(i({ref:n},y),{},{components:t})):r.createElement(d,i({ref:n},y))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5967:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const o={},i="Stringy Keymaps",s={unversionedId:"extension_stringy_keymaps",id:"extension_stringy_keymaps",title:"Stringy Keymaps",description:"Enables referring to keys by 'NAME' rather than KC.NAME.\\",source:"@site/docs/extension_stringy_keymaps.md",sourceDirName:".",slug:"/extension_stringy_keymaps",permalink:"/docs/extension_stringy_keymaps",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/extension_stringy_keymaps.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Status LEDs",permalink:"/docs/extension_statusled"},next:{title:"Extensions",permalink:"/docs/extensions"}},p={},l=[],y={toc:l},c="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stringy-keymaps"},"Stringy Keymaps"),(0,a.kt)("p",null,"Enables referring to keys by ",(0,a.kt)("inlineCode",{parentName:"p"},"'NAME'")," rather than ",(0,a.kt)("inlineCode",{parentName:"p"},"KC.NAME"),".\\\nThis extension allows for a seamless integration of both string-based key references and standard keycodes."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.extensions.stringy_keymaps import StringyKeymaps\n\n# Normal\n# keyboard.keymap = [[ KC.A, KC.B, KC.RESET ]]\n\n# Indexed\n# keyboard.keymap = [[ KC['A'], KC['B'], KC['RESET'] ]]\n\n# String names mixed with normal keycodes\n# keyboard.keymap = [[ 'A' , KC.B, KC.RESET ]]\n\n# String names\nkeyboard.keymap = [[ 'A' , 'B', 'RESET' ]]\n\nstringyKeymaps = StringyKeymaps()\n\n# Enabling debug will show each replacement or failure.\n# This is recommended during the initial development of a keyboard.\n# stringyKeymaps.debug_enable = True\n\nkeyboard.extensions.append(stringyKeymaps)\n")),(0,a.kt)("p",null,"It should be noted that these are ",(0,a.kt)("strong",{parentName:"p"},"not")," ASCII. The string is ",(0,a.kt)("strong",{parentName:"p"},"not")," what\nwill be sent to the computer. The examples above have no functional difference."),(0,a.kt)("p",null,"When utilizing argumented keys, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"KC.MO(layer)"),", it's not possible to use a string like ",(0,a.kt)("inlineCode",{parentName:"p"},"'MO(layer)'")," instead employ the standard notation of e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"KC.MO(1)")," in your keymap."))}m.isMDXComponent=!0}}]);