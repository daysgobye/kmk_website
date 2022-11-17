"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5585],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),y=c(t),m=o,f=y["".concat(p,".").concat(m)]||y[m]||u[m]||a;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=y;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},5967:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={},p="Stringy Keymaps",c={unversionedId:"extension_stringy_keymaps",id:"extension_stringy_keymaps",title:"Stringy Keymaps",description:"Enables referring to keys by 'NAME' rather than KC.NAME.",source:"@site/docs/extension_stringy_keymaps.md",sourceDirName:".",slug:"/extension_stringy_keymaps",permalink:"/docs/extension_stringy_keymaps",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/extension_stringy_keymaps.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Status LEDs",permalink:"/docs/extension_statusled"},next:{title:"Extensions",permalink:"/docs/extensions"}},l={},u=[],y={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stringy-keymaps"},"Stringy Keymaps"),(0,a.kt)("p",null,"Enables referring to keys by ",(0,a.kt)("inlineCode",{parentName:"p"},"'NAME'")," rather than ",(0,a.kt)("inlineCode",{parentName:"p"},"KC.NAME"),"."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.extensions.stringy_keymaps import StringyKeymaps\n\n# Normal\n# keyboard.keymap = [[ KC.A, KC.B, KC.RESET ]]\n\n# Indexed\n# keyboard.keymap = [[ KC['A'], KC['B'], KC['RESET'] ]]\n\n# String names\nkeyboard.keymap = [[ 'A' , 'B', 'RESET' ]]\n\nstringyKeymaps = StringyKeymaps()\n\n# Enabling debug will show each replacement or failure.\n# This is recommended during the initial development of a keyboard.\n# stringyKeymaps.debug_enable = True\n\nkeyboard.extensions.append(stringyKeymaps)\n")),(0,a.kt)("p",null,"It should be noted that these are ",(0,a.kt)("strong",{parentName:"p"},"not")," ASCII. The string is ",(0,a.kt)("strong",{parentName:"p"},"not")," what\nwill be sent to the computer. The examples above have no functional difference."))}m.isMDXComponent=!0}}]);