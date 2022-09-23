"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3910],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(b,l(l({ref:t},u),{},{components:n})):r.createElement(b,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2862:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],i={},c="Pimoroni Trackball",s={unversionedId:"pimoroni_trackball",id:"pimoroni_trackball",title:"Pimoroni Trackball",description:"Module handles usage of Trackball Breakout by Pimoroni.",source:"@site/docs/pimoroni_trackball.md",sourceDirName:".",slug:"/pimoroni_trackball",permalink:"/docs/pimoroni_trackball",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/pimoroni_trackball.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Peg RGB Matrix",permalink:"/docs/peg_rgb_matrix"},next:{title:"Porting to KMK",permalink:"/docs/porting_to_kmk"}},u={},p=[{value:"Usage",id:"usage",level:3},{value:"Key inputs, other handler combinations",id:"key-inputs-other-handler-combinations",level:3},{value:"Backlight",id:"backlight",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pimoroni-trackball"},"Pimoroni Trackball"),(0,a.kt)("p",null,"Module handles usage of Trackball Breakout by Pimoroni."),(0,a.kt)("p",null,"Product page: ",(0,a.kt)("a",{parentName:"p",href:"https://shop.pimoroni.com/products/trackball-breakout"},"https://shop.pimoroni.com/products/trackball-breakout")),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Declare I2C bus and add this module in your main class."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.modules.pimoroni_trackball import Trackball, TrackballMode\nimport busio as io\n\ni2c = io.I2C(scl=board.D3, sda=board.D2)\ntrackball = Trackball(i2c)\nkeyboard.modules.append(trackball)\n")),(0,a.kt)("p",null,"Module will also work when you cannot use ",(0,a.kt)("inlineCode",{parentName:"p"},"busio")," and do ",(0,a.kt)("inlineCode",{parentName:"p"},"import bitbangio as io")," instead."),(0,a.kt)("h3",{id:"key-inputs-other-handler-combinations"},"Key inputs, other handler combinations"),(0,a.kt)("p",null,"If you have used this thing on a mobile device, you will know it excels at cursor movement"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"\nfrom kmk.modules.pimoroni_trackball import Trackball, TrackballMode, PointingHandler, KeyHandler, ScrollHandler, ScrollDirection\n\ntrackball = Trackball(i2c, mode=TrackballMode.MOUSE_MODE, handlers=[\n    # act like an encoder, input arrow keys\n    KeyHandler(KC.UP, KC.RIGHT, KC.DOWN, KC.LEFT, KC.ENTER), \n    # on layer 1 and above use the default pointing behavior\n    PointingHandler(),\n    # use ScrollDirection.NATURAL (default) or REVERSE to change the scrolling direction\n    ScrollHandler(scroll_direction=ScrollDirection.NATURAL)\n])\n\n# now you can use these KeyCodes:\n\nKC.TB_NEXT_HANDLER # rotates through available \nKC.TB_HANDLER(0) # activate KeyHandler \nKC.TB_HANDLER(1) # activate MouseHandler\n\n")),(0,a.kt)("h3",{id:"backlight"},"Backlight"),(0,a.kt)("p",null,"Setup backlight color using below commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"trackball.set_rgbw(r, g, b, w)\ntrackball.set_red(brightness)\ntrackball.set_green(brightness)\ntrackball.set_blue(brightness)\ntrackball.set_white(brightness)\n")),(0,a.kt)("p",null,"This module exposes one keycode ",(0,a.kt)("inlineCode",{parentName:"p"},"TB_MODE"),", which on hold switches between ",(0,a.kt)("inlineCode",{parentName:"p"},"MOUSE_MODE")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"SCROLL_MODE"),".\nTo choose the default mode, pass it in ",(0,a.kt)("inlineCode",{parentName:"p"},"Trackball")," constructor."))}m.isMDXComponent=!0}}]);