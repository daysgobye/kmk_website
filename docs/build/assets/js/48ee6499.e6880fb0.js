"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4097],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||a;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1622:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),l=["components"],i={},u="Officially supported microcontrollers",p={unversionedId:"Officially_Supported_Microcontrollers",id:"Officially_Supported_Microcontrollers",title:"Officially supported microcontrollers",description:"While most CircuitPython devices are great for hand wired keyboards, most",source:"@site/docs/Officially_Supported_Microcontrollers.md",sourceDirName:".",slug:"/Officially_Supported_Microcontrollers",permalink:"/docs/Officially_Supported_Microcontrollers",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/Officially_Supported_Microcontrollers.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/Getting_Started"},next:{title:"Documentation index",permalink:"/docs/"}},c={},s=[{value:"nice!nano",id:"nicenano",level:2},{value:"Pre-compiling KMK for nice!nano",id:"pre-compiling-kmk-for-nicenano",level:3},{value:"ItsyBitsy M4 Express",id:"itsybitsy-m4-express",level:2},{value:"RP2040",id:"rp2040",level:2},{value:"Adafruit ItsyBitsy nRF52840 Express",id:"adafruit-itsybitsy-nrf52840-express",level:2},{value:"Other microcontrollers",id:"other-microcontrollers",level:2}],d={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"officially-supported-microcontrollers"},"Officially supported microcontrollers"),(0,a.kt)("p",null,"While most CircuitPython devices are great for hand wired keyboards, most\nkeyboards are designed to accept a Pro Micro. The boards listed below either\nare, or can be adapted to that pinout to use common keyboards already on the market."),(0,a.kt)("h2",{id:"nicenano"},"nice!nano"),(0,a.kt)("p",null,"Features include"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pro Micro pinout"),(0,a.kt)("li",{parentName:"ul"},"Both USB HID and Bluetooth support"),(0,a.kt)("li",{parentName:"ul"},"Can do Bluetooth split keyboards with no wires at all"),(0,a.kt)("li",{parentName:"ul"},"Has battery support including charging")),(0,a.kt)("p",null,"Downsides"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"$25 USD per microcontroller at most retailers")),(0,a.kt)("h3",{id:"pre-compiling-kmk-for-nicenano"},"Pre-compiling KMK for nice!nano"),(0,a.kt)("p",null,"nice!nano has limited flash memory which does not fit CircuitPython, adafruit-ble, and KMK by default. You will need to use pre-compiled KMK to get it to fit. Grab ",(0,a.kt)("a",{parentName:"p",href:"https://adafruit-circuit-python.s3.amazonaws.com/index.html?prefix=bin/mpy-cross/"},"compatible mpy-cross")," and run ",(0,a.kt)("inlineCode",{parentName:"p"},"make compile")," to generate ",(0,a.kt)("inlineCode",{parentName:"p"},".mpy")," version of KMK files before copying them over."),(0,a.kt)("p",null,"Common Retailers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://boardsource.xyz/store/5f4a1733bbaa5c635b83ed67"},"Boardsource")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nicekeyboards.com/nice-nano/"},"Nice Keyboards"))),(0,a.kt)("h2",{id:"itsybitsy-m4-express"},"ItsyBitsy M4 Express"),(0,a.kt)("p",null,"Features include"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Affordable at $15 USD"),(0,a.kt)("li",{parentName:"ul"},"Can run most features of KMK including RGB")),(0,a.kt)("p",null,"Downsides"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Needs adapted to work with Pro Micro pinout keyboards. Adapter can be found\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/KMKfw/kmk_firmware/tree/master/hardware"},"HERE"))),(0,a.kt)("p",null,"Common Retailers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.adafruit.com/product/3800"},"Adafruit"))),(0,a.kt)("h2",{id:"rp2040"},"RP2040"),(0,a.kt)("p",null,"Features include"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Very affordable"),(0,a.kt)("li",{parentName:"ul"},"Very powerful for the price")),(0,a.kt)("p",null,"Downsides"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Little support for keyboard kits")),(0,a.kt)("p",null,"Common Retailers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.adafruit.com/pico?src=raspberrypi"},"Adafruit")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.sparkfun.com/products/17829?src=raspberrypi"},"SparkFun"))),(0,a.kt)("h2",{id:"adafruit-itsybitsy-nrf52840-express"},"Adafruit ItsyBitsy nRF52840 Express"),(0,a.kt)("p",null,"Features include"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Both USB HID and Bluetooth support"),(0,a.kt)("li",{parentName:"ul"},"More affordable than the nice!nano at only $18")),(0,a.kt)("p",null,"Downsides"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Needs adapted to work with Pro Micro pinout keyboards. Adapter can be found\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/KMKfw/kmk_firmware/tree/master/hardware"},"HERE")),(0,a.kt)("li",{parentName:"ul"},"No battery support without addon board found\n",(0,a.kt)("a",{parentName:"li",href:"https://www.adafruit.com/product/2124"},"HERE")," ")),(0,a.kt)("p",null,"Common Retailers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.adafruit.com/product/4481"},"Adafruit"))),(0,a.kt)("h2",{id:"other-microcontrollers"},"Other microcontrollers"),(0,a.kt)("p",null,"What you'll need to have at minimum"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CircuitPython"),(0,a.kt)("li",{parentName:"ul"},"256KB of flash storage"),(0,a.kt)("li",{parentName:"ul"},"HID over USB and/or Bluetooth.")))}m.isMDXComponent=!0}}]);