"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2866],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(n),h=i,f=s["".concat(u,".").concat(h)]||s[h]||p[h]||o;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6005:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={},u="BLE HID",c={unversionedId:"ble_hid",id:"ble_hid",title:"BLE HID",description:"Bluetooth connections help clean up the wire mess!",source:"@site/docs/ble_hid.md",sourceDirName:".",slug:"/ble_hid",permalink:"/kmk_website/docs/ble_hid",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/ble_hid.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ADNS9800",permalink:"/kmk_website/docs/adns9800"},next:{title:"boot.py",permalink:"/kmk_website/docs/boot"}},d={},p=[{value:"CircuitPython",id:"circuitpython",level:2},{value:"Enabling BLE",id:"enabling-ble",level:2},{value:"Changing the advertise name",id:"changing-the-advertise-name",level:2}],s={toc:p};function h(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ble-hid"},"BLE HID"),(0,o.kt)("p",null,"Bluetooth connections help clean up the wire mess!"),(0,o.kt)("h2",{id:"circuitpython"},"CircuitPython"),(0,o.kt)("p",null,"If not running KMKPython, this does require the adafruit_ble library from Adafruit.\nThis can be downloaded\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/adafruit/Adafruit_CircuitPython_BLE/tree/master/adafruit_ble"},"here"),".\nIt is part of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/adafruit/Adafruit_CircuitPython_Bundle"},"Adafruit CircuitPython Bundle"),'.\nSimply put this in the "root" of your CircuitPython device. If unsure, it\'s the folder with main.py in it, and should be the first folder you see when you open the device.'),(0,o.kt)("h2",{id:"enabling-ble"},"Enabling BLE"),(0,o.kt)("p",null,'To enable BLE hid, change the keyboard.go(). By default, the advertised name\nwill be the name of the "flash drive". By default this is CIRCUITPY'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.hid import HIDModes\n\nif __name__ == '__main__':\n    keyboard.go(hid_type=HIDModes.BLE)\n")),(0,o.kt)("h2",{id:"changing-the-advertise-name"},"Changing the advertise name"),(0,o.kt)("p",null,"There are two ways to change the advertising name. The first would be to\n",(0,o.kt)("a",{parentName:"p",href:"https://learn.adafruit.com/welcome-to-circuitpython/the-circuitpy-drive"},"change the name of the drive"),".\nThe second would be to change the keyboard.go() like this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"if __name__ == '__main__':\n    keyboard.go(hid_type=HIDModes.BLE, ble_name='KMKeyboard')\n")))}h.isMDXComponent=!0}}]);