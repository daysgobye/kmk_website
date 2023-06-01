"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9180],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),y=d(a),u=r,c=y["".concat(s,".").concat(u)]||y[u]||m[u]||l;return a?n.createElement(c,o(o({ref:t},p),{},{components:a})):n.createElement(c,o({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[y]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5300:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={},o="Layers",i={unversionedId:"layers",id:"layers",title:"Layers",description:"Layers module adds keys for accessing other layers. It can simply be added to",source:"@site/docs/layers.md",sourceDirName:".",slug:"/layers",permalink:"/docs/layers",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/layers.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"KMKPython",permalink:"/docs/kmkpython_vs_circuitpython"},next:{title:"LED (Mono color backlight)",permalink:"/docs/led"}},s={},d=[{value:"Keycodes",id:"keycodes",level:2},{value:"Custom HoldTap Behavior",id:"custom-holdtap-behavior",level:2},{value:"Working with Layers",id:"working-with-layers",level:2},{value:"Using Combo Layers",id:"using-combo-layers",level:2},{value:"Using Multiple Base Layers",id:"using-multiple-base-layers",level:3},{value:"Example Code",id:"example-code",level:2},{value:"Advanced Example",id:"advanced-example",level:2}],p={toc:d},y="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(y,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"layers"},"Layers"),(0,r.kt)("p",null,"Layers module adds keys for accessing other layers. It can simply be added to\nthe extensions list."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.modules.layers import Layers\nkeyboard.modules.append(Layers())\n")),(0,r.kt)("h2",{id:"keycodes"},"Keycodes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.DF(layer)")),(0,r.kt)("td",{parentName:"tr",align:null},"Switches the default layer until the next time the keyboard powers off")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.MO(layer)")),(0,r.kt)("td",{parentName:"tr",align:null},"Momentarily activates layer, switches off when you let go")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.LM(layer, mod)")),(0,r.kt)("td",{parentName:"tr",align:null},"As ",(0,r.kt)("inlineCode",{parentName:"td"},"MO(layer)")," but with ",(0,r.kt)("inlineCode",{parentName:"td"},"mod")," active")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.LT(layer, kc)")),(0,r.kt)("td",{parentName:"tr",align:null},"Momentarily activates layer if held, sends kc if tapped")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.TG(layer)")),(0,r.kt)("td",{parentName:"tr",align:null},"Toggles the layer (enables it if not active, and vice versa)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.TO(layer)")),(0,r.kt)("td",{parentName:"tr",align:null},"Activates layer and deactivates all other layers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.TT(layer)")),(0,r.kt)("td",{parentName:"tr",align:null},"Momentarily activates layer if held, toggles it if tapped repeatedly")))),(0,r.kt)("h2",{id:"custom-holdtap-behavior"},"Custom HoldTap Behavior"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"KC.TT")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"KC.LT")," use the same heuristic to determine taps and holds as\nHoldTap. Check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/holdtap"},"HoldTap doc")," to find out more."),(0,r.kt)("h2",{id:"working-with-layers"},"Working with Layers"),(0,r.kt)("p",null,"When starting out, care should be taken when working with layers, since it's possible to lock\nyourself to a layer with no way of returning to the base layer short of unplugging your\nkeyboard. This is especially easy to do when using the ",(0,r.kt)("inlineCode",{parentName:"p"},"KC.TO()")," keycode, which deactivates\nall other layers in the stack."),(0,r.kt)("p",null,"Some helpful guidelines to keep in mind as you design your layers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Only reference higher-numbered layers from a given layer"),(0,r.kt)("li",{parentName:"ul"},"Leave keys as ",(0,r.kt)("inlineCode",{parentName:"li"},"KC.TRNS")," in higher layers when they would overlap with a layer-switch")),(0,r.kt)("h2",{id:"using-combo-layers"},"Using Combo Layers"),(0,r.kt)("p",null,"Combo Layers allow you to activate a corresponding layer based on the activation of 2 or more other layers.\nThe advantage of using Combo layers is that when you release one of the layer keys, it stays on whatever layer is still being held.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/docs/combo_layers"},"combo layers documentation")," for more information on it's function and to see examples."),(0,r.kt)("h3",{id:"using-multiple-base-layers"},"Using Multiple Base Layers"),(0,r.kt)("p",null,"In some cases, you may want to have more than one base layer (for instance you want to use\nboth QWERTY and Dvorak layouts, or you have a custom gamepad that can switch between\ndifferent games). In this case, best practice is to have these layers be the lowest, i.e.\ndefined first in your keymap. These layers are mutually-exclusive, so treat changing default\nlayers with ",(0,r.kt)("inlineCode",{parentName:"p"},"KC.DF()")," the same way that you would treat using ",(0,r.kt)("inlineCode",{parentName:"p"},"KC.TO()")),(0,r.kt)("h2",{id:"example-code"},"Example Code"),(0,r.kt)("p",null,"For our example, let's take a simple 3x3 macropad with two layers as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.modules.layers import Layers\nkeyboard.modules.append(Layers())\n\n# Layer Keys\nMOMENTARY = KC.MO(1)\nMOD_LAYER = KC.LM(1, KC.RCTL)\nLAYER_TAP = KC.LT(1, KC.END, prefer_hold=True, tap_interrupted=False, tap_time=250) # any tap longer than 250ms will be interpreted as a hold\n\nkeyboard.keymap = [\n    # Base layer\n    [\n        KC.NO,  KC.UP,  KC.NO,  \n        KC.LEFT,KC.DOWN,KC.RGHT,\n        MOMENTARY, LAYER_TAP, MOD_LAYER,\n    ],\n\n    # Function Layer\n    [\n        KC.F1,  KC.F2,  KC.F3,\n        KC.F4,  KC.F5,  KC.F6,\n        KC.TRNS,KC.TRNS,KC.TRNS,    \n    ],\n]\n")),(0,r.kt)("h2",{id:"advanced-example"},"Advanced Example"),(0,r.kt)("p",null,'A common question is: "How do I change RGB background based on my active layer?"\nHere is ',(0,r.kt)("em",{parentName:"p"},"one")," (simple) way of many to go about it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.modules.layers import Layers as _Layers\nfrom kmk.extensions.rgb import RGB\n\nrgb = RGB(...) # your RGB configuration goes here\nkeyboard.extensions.append(rgb)\n\nclass Layers(_Layers):\n    last_top_layer = 0\n    hues = (4, 20, 69)\n    \n    def after_hid_send(self, keyboard):\n        if keyboard.active_layers[0] != self.last_top_layer:\n            self.last_top_layer = keyboard.active_layers[0]\n            rgb.set_hsv_fill(self.hues[self.last_top_layer], 255, 255)\n\nkeyboard.modules.append(Layers())\n")))}m.isMDXComponent=!0}}]);