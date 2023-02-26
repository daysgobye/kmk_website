"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6108],{3905:(e,n,o)=>{o.d(n,{Zo:()=>l,kt:()=>y});var r=o(7294);function t(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function a(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?a(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function s(e,n){if(null==e)return{};var o,r,t=function(e,n){if(null==e)return{};var o,r,t={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var p=r.createContext({}),d=function(e){var n=r.useContext(p),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},l=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var o=e.components,t=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=d(o),u=t,y=m["".concat(p,".").concat(u)]||m[u]||c[u]||a;return o?r.createElement(y,i(i({ref:n},l),{},{components:o})):r.createElement(y,i({ref:n},l))}));function y(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=o.length,i=new Array(a);i[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[m]="string"==typeof e?e:t,i[1]=s;for(var d=2;d<a;d++)i[d]=o[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},5915:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=o(7462),t=(o(7294),o(3905));const a={},i="Porting to KMK",s={unversionedId:"porting_to_kmk",id:"porting_to_kmk",title:"Porting to KMK",description:"Porting a board to KMK is quite simple, and follows this base format.",source:"@site/docs/porting_to_kmk.md",sourceDirName:".",slug:"/porting_to_kmk",permalink:"/docs/porting_to_kmk",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/porting_to_kmk.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pimoroni Trackball",permalink:"/docs/pimoroni_trackball"},next:{title:"Power(save)",permalink:"/docs/power"}},p={},d=[{value:"REQUIRED",id:"required",level:2},{value:"Additional pins for extensions",id:"additional-pins-for-extensions",level:2},{value:"Find your coord mapping",id:"find-your-coord-mapping",level:3},{value:"Keymaps",id:"keymaps",level:2},{value:"More information",id:"more-information",level:2}],l={toc:d},m="wrapper";function c(e){let{components:n,...o}=e;return(0,t.kt)(m,(0,r.Z)({},l,o,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"porting-to-kmk"},"Porting to KMK"),(0,t.kt)("p",null,"Porting a board to KMK is quite simple, and follows this base format."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"import board\n\nfrom kmk.kmk_keyboard import KMKKeyboard as _KMKKeyboard\nfrom kmk.scanners import DiodeOrientation\n{EXTENSIONS_IMPORT}\n\nclass KMKKeyboard(_KMKKeyboard):\n{REQUIRED}\n    extensions = []\n\n")),(0,t.kt)("h2",{id:"required"},"REQUIRED"),(0,t.kt)("p",null,"This is designed to be replaced with the defining pins of your keyboard. Rows,\ncolumns and the diode direction (if any), should be defined like this"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"    row_pins = [board.p0_31, board.p0_29, board.p0_02, board.p1_15]\n    col_pins = [board.p0_22, board.p0_24, board.p1_00, board.p0_11, board.p1_04]\n    diode_orientation = DiodeOrientation.COL2ROW\n")),(0,t.kt)("h2",{id:"additional-pins-for-extensions"},"Additional pins for extensions"),(0,t.kt)("p",null,"KMK includes built in extensions for RGB and split keyboards, and powersave. If\nthese are applicable on your keyboard/microcontroller, the pins should be added\nhere. Refer to the instructions on the respective extensions page on how to add\nthem. If not adding any extensions, leave this as an empty list as shown."),(0,t.kt)("h1",{id:"coord-mapping"},"Coord mapping"),(0,t.kt)("p",null,"If your keyboard is not built electrically as a square (though most are), you can\nprovide a mapping directly. An example of this is the\n",(0,t.kt)("a",{parentName:"p",href:"https://github.com/foostan/crkbd"},"Corne"),". That has 12 columns for 3 rows, and 6\ncolumns for the bottom row. Split keyboards count as the total keyboard, not per\nside, the right side being offset by the number of keys on the left side, as if\nthe rows were stacked.\nThat would look like this"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.scanners import intify_coordinate as ic\n\n    coord_mapping = []\n    coord_mapping.extend(ic(0, x, 6) for x in range(6))\n    coord_mapping.extend(ic(4, x, 6) for x in range(6))\n    coord_mapping.extend(ic(1, x, 6) for x in range(6))\n    coord_mapping.extend(ic(5, x, 6) for x in range(6))\n    coord_mapping.extend(ic(2, x, 6) for x in range(6))\n    coord_mapping.extend(ic(6, x, 6) for x in range(6))\n    # And now, to handle R3, which at this point is down to just six keys\n    coord_mapping.extend(ic(3, x, 6) for x in range(3, 6))\n    coord_mapping.extend(ic(7, x, 6) for x in range(0, 3))\n")),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"intify_coordinate")," is the traditional way to generate key positions.\nHere's an equivalent, maybe visually more explanatory version:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"coord_mapping = [\n 0,  1,  2,  3,  4,  5,  24, 25, 26, 27, 28, 29,\n 6,  7,  8,  9, 10, 11,  30, 31, 32, 33, 34, 35,\n12, 13, 14, 15, 16, 17,  36, 37, 38, 39, 40, 41,\n            21, 22, 23,  42, 43, 44,\n]\n")),(0,t.kt)("p",null,"Note: Not all numbers are necessarily used ! The keyboard assumes\n",(0,t.kt)("inlineCode",{parentName:"p"},"number of line * number of rows")," keys. Some of the possible keys might not be\nused. For example a keyboard with 60 keys might have 8 rows, 8 cols, allowing\n64 total combinations -- hence 64 keys. 4 numbers will then not be used for keys\nin the ",(0,t.kt)("inlineCode",{parentName:"p"},"coord_mapping")," (might be anyone of them depending of the wiring)."),(0,t.kt)("h3",{id:"find-your-coord-mapping"},"Find your coord mapping"),(0,t.kt)("p",null,"The following code will help you setup your ",(0,t.kt)("inlineCode",{parentName:"p"},"coord_mapping")," by having every key\nsend its corresponding number. Use it after your pins and module definition\nto define both ",(0,t.kt)("inlineCode",{parentName:"p"},"keyboard.coord_mapping")," and ",(0,t.kt)("inlineCode",{parentName:"p"},"keyboard.keymap"),"."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.handlers.sequences import simple_key_sequence\nfrom kmk.keys import KC\n\n# *2 for split keyboards, which will typically manage twice the number of keys\n# of one side. Having this N too large will have no impact (maybe slower boot..)\nN = len(keyboard.col_pins) * len(keyboard.row_pins) * 2\n\nkeyboard.coord_mapping = list(range(N))\n\nlayer = []\n\nfor i in range(N):\n    c, r = divmod(i, 100)\n    d, u = divmod(r, 10)\n    layer.append(\n        simple_key_sequence(\n            (\n                getattr(KC, 'N' + str(c)),\n                getattr(KC, 'N' + str(d)),\n                getattr(KC, 'N' + str(u)),\n                KC.SPC,\n            )\n        )\n    )\nkeyboard.keymap = [layer]\n\nif __name__ == '__main__':\n    keyboard.go()\n")),(0,t.kt)("h2",{id:"keymaps"},"Keymaps"),(0,t.kt)("p",null,"Keymaps are organized as a list of lists. Keycodes are added for every key on\neach layer. See ",(0,t.kt)("a",{parentName:"p",href:"/docs/keycodes"},"keycodes")," for more details on what keycodes are\navailable. If using layers or other extensions, also refer to the extensions\npage for additional keycodes."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"from kb import KMKKeyboard\nfrom kmk.keys import KC\n\nkeyboard = KMKKeyboard()\n\nkeyboard.keymap = [\n    [KC.A, KC.B],\n    [KC.C, KC.D],\n]\n\nif __name__ == '__main__':\n    keyboard.go()\n")),(0,t.kt)("h2",{id:"more-information"},"More information"),(0,t.kt)("p",null,"More information on keymaps can be found ",(0,t.kt)("a",{parentName:"p",href:"/docs/config_and_keymap"},"here")))}c.isMDXComponent=!0}}]);