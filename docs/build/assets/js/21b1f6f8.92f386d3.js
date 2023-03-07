"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6688],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function L(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",S={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},O=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,m=L(e,["components","mdxType","originalType","parentName"]),p=s(n),O=r,d=p["".concat(l,".").concat(O)]||p[O]||S[O]||a;return n?o.createElement(d,i(i({ref:t},m),{},{components:n})):o.createElement(d,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=O;var L={};for(var l in t)hasOwnProperty.call(t,l)&&(L[l]=t[l]);L.originalType=e,L[p]="string"==typeof e?e:r,i[1]=L;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}O.displayName="MDXCreateElement"},3626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>S,frontMatter:()=>a,metadata:()=>L,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={},i="OneShot Keycodes",L={unversionedId:"oneshot",id:"oneshot",title:"OneShot Keycodes",description:"OneShot keys or sticky keys enable you to have keys that keep staying pressed",source:"@site/docs/oneshot.md",sourceDirName:".",slug:"/oneshot",permalink:"/docs/oneshot",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/oneshot.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mouse keys",permalink:"/docs/mouse_keys"},next:{title:"Peg Oled Display",permalink:"/docs/peg_oled_display"}},l={},s=[{value:"Enable OneShot Keys",id:"enable-oneshot-keys",level:2},{value:"Keycodes",id:"keycodes",level:2},{value:"Custom OneShot Behavior",id:"custom-oneshot-behavior",level:2},{value:"OneShot Modifier Combinations",id:"oneshot-modifier-combinations",level:2}],m={toc:s},p="wrapper";function S(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"oneshot-keycodes"},"OneShot Keycodes"),(0,r.kt)("p",null,"OneShot keys or sticky keys enable you to have keys that keep staying pressed\nfor a certain time or until another key is pressed and released.\nIf the timeout expires or other keys are pressed, and the sticky key wasn't\nreleased, it is handled as a regular key hold."),(0,r.kt)("h2",{id:"enable-oneshot-keys"},"Enable OneShot Keys"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.modules.oneshot import OneShot\noneshot = OneShot()\n# optional: set a custom tap timeout in ms (default: 1000ms)\n# oneshot.tap_time = 1500\nkeyboard.modules.append(oneshot)\n")),(0,r.kt)("h2",{id:"keycodes"},"Keycodes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Keycode"),(0,r.kt)("th",{parentName:"tr",align:null},"Aliases"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.OS(KC.ANY)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.ONESHOT")),(0,r.kt)("td",{parentName:"tr",align:null},"make a sticky version of ",(0,r.kt)("inlineCode",{parentName:"td"},"KC.ANY"))))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"KC.ONESHOT")," accepts any valid key code as argument, including modifiers and KMK\ninternal keys like momentary layer shifts."),(0,r.kt)("h2",{id:"custom-oneshot-behavior"},"Custom OneShot Behavior"),(0,r.kt)("p",null,"The full OneShot signature is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"KC.OS(\n    KC.TAP, # the sticky keycode\n    tap_time=None # length of the tap timeout in milliseconds\n    )\n")),(0,r.kt)("h2",{id:"oneshot-modifier-combinations"},"OneShot Modifier Combinations"),(0,r.kt)("p",null,"The OneShot module by default cannot apply two OneShot modifiers to another key. To get around this you can use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/combos"},"Combos")," module. Below is a minimal example that allows for multiple OneShot modifiers to apply to the next key pressed. In this example you can tap either of the OneShot keys then tap the other and finally tap ",(0,r.kt)("inlineCode",{parentName:"p"},"p")," and that will send ",(0,r.kt)("inlineCode",{parentName:"p"},"ctrl+shift+p"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.modules.combos import Chord, Combos\nfrom kmk.modules.oneshot import OneShot\n\noneshot = OneShot()\nkeyboard.modules.append(oneshot)\n\nOS_LCTL = KC.OS(KC.LCTL, tap_time=None)\nOS_LSFT = KC.OS(KC.LSFT, tap_time=None)\nOS_LCTL_LSFT = KC.OS(KC.LCTL(OS_LSFT), tap_time=None)\n\ncombos = Combos()\nkeyboard.modules.append(combos)\n\ncombos.combos = [\n    Chord((OS_LCTL, OS_LSFT), OS_LCTL_LSFT, timeout=1000),\n]\n\nkeyboard.keymap = [[OS_LSFT, OS_LCTL, KC.P]]\n")),(0,r.kt)("p",null,"Below is the complete list of OneShot and Chords you need to allow any combination of modifiers (left modifiers only)."),(0,r.kt)("blockquote",null,(0,r.kt)("details",null,(0,r.kt)("summary",null,"Long code chunk (click to load)"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre"},"```python\nOS_LCTL = KC.OS(KC.LCTL, tap_time=None)\nOS_LSFT = KC.OS(KC.LSFT, tap_time=None)\nOS_LGUI = KC.OS(KC.LGUI, tap_time=None)\nOS_LALT = KC.OS(KC.LALT, tap_time=None)\n\nOS_LCTL_LSFT = KC.OS(KC.LCTL(OS_LSFT), tap_time=None)\nOS_LCTL_LALT = KC.OS(KC.LCTL(OS_LALT), tap_time=None)\nOS_LCTL_LGUI = KC.OS(KC.LCTL(OS_LGUI), tap_time=None)\nOS_LSFT_LALT = KC.OS(KC.LSFT(OS_LALT), tap_time=None)\nOS_LSFT_LGUI = KC.OS(KC.LSFT(OS_LGUI), tap_time=None)\nOS_LALT_LGUI = KC.OS(KC.LALT(OS_LGUI), tap_time=None)\n\nOS_LCTL_LSFT_LGUI = KC.OS(KC.LCTL(KC.LSFT(OS_LGUI)), tap_time=None)\nOS_LCTL_LSFT_LALT = KC.OS(KC.LCTL(KC.LSFT(OS_LALT)), tap_time=None)\nOS_LCTL_LALT_LGUI = KC.OS(KC.LCTL(KC.LALT(OS_LGUI)), tap_time=None)\nOS_LSFT_LALT_LGUI = KC.OS(KC.LSFT(KC.LALT(OS_LGUI)), tap_time=None)\n\nOS_LCTL_LSFT_LALT_LGUI = KC.OS(KC.LCTL(KC.LSFT(KC.LALT(OS_LGUI))), tap_time=None)\n\ncombos.combos = [\n    Chord((OS_LCTL, OS_LSFT), OS_LCTL_LSFT, timeout=1000),\n    Chord((OS_LCTL, OS_LALT), OS_LCTL_LALT, timeout=1000),\n    Chord((OS_LCTL, OS_LGUI), OS_LCTL_LGUI, timeout=1000),\n    Chord((OS_LSFT, OS_LALT), OS_LSFT_LALT, timeout=1000),\n    Chord((OS_LSFT, OS_LGUI), OS_LSFT_LGUI, timeout=1000),\n    Chord((OS_LALT, OS_LGUI), OS_LALT_LGUI, timeout=1000),\n\n    Chord((OS_LCTL, OS_LSFT, OS_LGUI), OS_LCTL_LSFT_LGUI, timeout=1000),\n    Chord((OS_LCTL, OS_LSFT, OS_LALT), OS_LCTL_LSFT_LALT, timeout=1000),\n    Chord((OS_LCTL, OS_LALT, OS_LGUI), OS_LCTL_LALT_LGUI, timeout=1000),\n    Chord((OS_LSFT, OS_LALT, OS_LGUI), OS_LSFT_LALT_LGUI, timeout=1000),\n\n    Chord((OS_LCTL, OS_LSFT, OS_LALT, OS_LGUI), OS_LCTL_LSFT_LALT_LGUI, timeout=1000),\n]\n```\n")))))}S.isMDXComponent=!0}}]);