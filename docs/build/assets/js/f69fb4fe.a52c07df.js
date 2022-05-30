"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3910],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return b}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),b=o,d=m["".concat(c,".").concat(b)]||m[b]||u[b]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2862:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={},c="Pimoroni Trackball",p={unversionedId:"pimoroni_trackball",id:"pimoroni_trackball",title:"Pimoroni Trackball",description:"Module handles usage of Trackball Breakout by Pimoroni.",source:"@site/docs/pimoroni_trackball.md",sourceDirName:".",slug:"/pimoroni_trackball",permalink:"/kmk_website/docs/pimoroni_trackball",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/pimoroni_trackball.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Peg RGB Matrix",permalink:"/kmk_website/docs/peg_rgb_matrix"},next:{title:"Porting to KMK",permalink:"/kmk_website/docs/porting_to_kmk"}},s={},u=[{value:"Usage",id:"usage",level:3}],m={toc:u};function b(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pimoroni-trackball"},"Pimoroni Trackball"),(0,a.kt)("p",null,"Module handles usage of Trackball Breakout by Pimoroni."),(0,a.kt)("p",null,"Product page: ",(0,a.kt)("a",{parentName:"p",href:"https://shop.pimoroni.com/products/trackball-breakout"},"https://shop.pimoroni.com/products/trackball-breakout")),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Declare I2C bus and add this module in your main class."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.modules.pimoroni_trackball import Trackball, TrackballMode\nimport busio as io\n\ni2c = io.I2C(scl=board.D3, sda=board.D2)\ntrackball = Trackball(i2c, mode=TrackballMode.MOUSE_MODE)\nkeyboard.modules.append(trackball)\n")),(0,a.kt)("p",null,"Module will also work when you cannot use ",(0,a.kt)("inlineCode",{parentName:"p"},"busio")," and do ",(0,a.kt)("inlineCode",{parentName:"p"},"import bitbangio as io")," instead."),(0,a.kt)("p",null,"Setup backlight color using below commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"trackball.set_rgbw(r, g, b, w)\ntrackball.set_red(brightness)\ntrackball.set_green(brightness)\ntrackball.set_blue(brightness)\ntrackball.set_white(brightness)\n")),(0,a.kt)("p",null,"This module exposes one keycode ",(0,a.kt)("inlineCode",{parentName:"p"},"TB_MODE"),", which on hold switches between ",(0,a.kt)("inlineCode",{parentName:"p"},"MOUSE_MODE")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"SCROLL_MODE"),".\nTo choose the default mode, pass it in ",(0,a.kt)("inlineCode",{parentName:"p"},"Trackball")," constructor."))}b.isMDXComponent=!0}}]);