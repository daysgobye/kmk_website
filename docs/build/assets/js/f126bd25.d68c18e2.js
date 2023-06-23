"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6848],{3905:(e,x,n)=>{n.d(x,{Zo:()=>s,kt:()=>C});var o=n(7294);function r(e,x,n){return x in e?Object.defineProperty(e,x,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[x]=n,e}function t(e,x){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);x&&(o=o.filter((function(x){return Object.getOwnPropertyDescriptor(e,x).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var x=1;x<arguments.length;x++){var n=null!=arguments[x]?arguments[x]:{};x%2?t(Object(n),!0).forEach((function(x){r(e,x,n[x])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(x){Object.defineProperty(e,x,Object.getOwnPropertyDescriptor(n,x))}))}return e}function i(e,x){if(null==e)return{};var n,o,r=function(e,x){if(null==e)return{};var n,o,r={},t=Object.keys(e);for(o=0;o<t.length;o++)n=t[o],x.indexOf(n)>=0||(r[n]=e[n]);return r}(e,x);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)n=t[o],x.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),l=function(e){var x=o.useContext(d),n=x;return e&&(n="function"==typeof e?e(x):a(a({},x),e)),n},s=function(e){var x=l(e.components);return o.createElement(d.Provider,{value:x},e.children)},_="mdxType",c={inlineCode:"code",wrapper:function(e){var x=e.children;return o.createElement(o.Fragment,{},x)}},p=o.forwardRef((function(e,x){var n=e.components,r=e.mdxType,t=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),_=l(n),p=r,C=_["".concat(d,".").concat(p)]||_[p]||c[p]||t;return n?o.createElement(C,a(a({ref:x},s),{},{components:n})):o.createElement(C,a({ref:x},s))}));function C(e,x){var n=arguments,r=x&&x.mdxType;if("string"==typeof e||r){var t=n.length,a=new Array(t);a[0]=p;var i={};for(var d in x)hasOwnProperty.call(x,d)&&(i[d]=x[d]);i.originalType=e,i[_]="string"==typeof e?e:r,a[1]=i;for(var l=2;l<t;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7468:(e,x,n)=>{n.r(x),n.d(x,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>t,metadata:()=>i,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const t={},a="Encoder module",i={unversionedId:"en/encoder",id:"en/encoder",title:"Encoder module",description:"Add twist control to your keyboard! Volume, zoom, anything you want.",source:"@site/docs/en/encoder.md",sourceDirName:"en",slug:"/en/encoder",permalink:"/docs/en/encoder",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/en/encoder.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AS5013 (aka 'EasyPoint')",permalink:"/docs/easypoint"},next:{title:"Status LEDs",permalink:"/docs/en/extension_statusled"}},d={},l=[{value:"Enabling the extension",id:"enabling-the-extension",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Encoder divisor",id:"encoder-divisor",level:2},{value:"Handler methods overrides",id:"handler-methods-overrides",level:2},{value:"Connecting the encoder",id:"connecting-the-encoder",level:2},{value:"Full example (with 1 encoder)",id:"full-example-with-1-encoder",level:2}],s={toc:l},_="wrapper";function c(e){let{components:x,...n}=e;return(0,r.kt)(_,(0,o.Z)({},s,n,{components:x,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"encoder-module"},"Encoder module"),(0,r.kt)("p",null,"Add twist control to your keyboard! Volume, zoom, anything you want."),(0,r.kt)("p",null,"I2C encoder type has been tested with the Adafruit I2C QT Rotary Encoder with NeoPixel."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," If you have a ",(0,r.kt)("strong",{parentName:"p"},"split")," keyboard and encoders on ",(0,r.kt)("strong",{parentName:"p"},"both sides")," should work, it's currently necessary to use the encoder-scanner explained at the bottom of ",(0,r.kt)("a",{parentName:"p",href:"/docs/scanners"},"scanners docs"),"."),(0,r.kt)("h2",{id:"enabling-the-extension"},"Enabling the extension"),(0,r.kt)("p",null,"The constructor(",(0,r.kt)("inlineCode",{parentName:"p"},"EncoderHandler")," class) takes a list of encoders, each one defined as either:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a list of ",(0,r.kt)("inlineCode",{parentName:"li"},"pad_a")," pin, ",(0,r.kt)("inlineCode",{parentName:"li"},"pad_b")," pin, ",(0,r.kt)("inlineCode",{parentName:"li"},"button_pin")," and optionally a flag set to ",(0,r.kt)("inlineCode",{parentName:"li"},"True")," if you want encoder direction to be reversed;"),(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"busio.I2C"),", address and optionally a flag set to ",(0,r.kt)("inlineCode",{parentName:"li"},"True")," if you want it to be reversed.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"encoder_map"),' is modeled after the keymap and works the same way. It should have as many layers (key pressed on "turned left", key pressed on "turned right", key pressed on "knob pressed") as your keymap, and use ',(0,r.kt)("inlineCode",{parentName:"p"},"KC.NO")," keys for layers that you don't require any action. The encoder supports a velocity mode if you desire to make something for video or sound editing. "),(0,r.kt)("h2",{id:"how-to-use"},"How to use"),(0,r.kt)("p",null,"Here is all you need to use this module in your ",(0,r.kt)("inlineCode",{parentName:"p"},"main.py")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"code.py")," file."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Load the module: import encoder handler and add it to keyboard modules.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.modules.encoder import EncoderHandler\nencoder_handler = EncoderHandler()\nkeyboard.modules = [layers, holdtap, encoder_handler]\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Define the pins for each encoder: ",(0,r.kt)("inlineCode",{parentName:"li"},"pin_a"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"pin_b")," for rotations, ",(0,r.kt)("inlineCode",{parentName:"li"},"pin_button")," for the switch in the encoder. Set switch to ",(0,r.kt)("inlineCode",{parentName:"li"},"None")," if the encoder's button is handled differently (as a part of matrix for example) or not at all. If you want to invert the direction of the encoder, set the 4th (optional) parameter ",(0,r.kt)("inlineCode",{parentName:"li"},"is_inverted")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"True"),". 5th parameter is ",(0,r.kt)("a",{parentName:"li",href:"#encoder-resolution"},"encoder divisor")," (optional), it can be either ",(0,r.kt)("inlineCode",{parentName:"li"},"2")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"4"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Regular GPIO Encoder\nencoder_handler.pins = (\n    # regular direction encoder and a button\n    (board.GP17, board.GP15, board.GP14,), # encoder #1 \n    # reversed direction encoder with no button handling and divisor of 2\n    (board.GP3, board.GP5, None, True, 2,), # encoder #2\n    )\n")),(0,r.kt)("p",null,"Or in case you have an I2C encoder on a special PCB (e.g. Adafruit I2C QT Rotary Encoder), define I2C encoder as following."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# I2C Encoder\n\n# Setup i2c\nSDA = board.GP0\nSCL = board.GP1\ni2c = busio.I2C(SCL, SDA)\n\nencoder_handler.pins = ((i2c, 0x36, False), (encoder 2 definition), etc. )\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Define the mapping of keys to be called for each layer.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# You can optionally predefine combo keys as for your layout\nZoom_in = KC.LCTRL(KC.EQUAL)\nZoom_out = KC.LCTRL(KC.MINUS)\n\nencoder_handler.map = [ (( KC.VOLD, KC.VOLU, KC.MUTE), (encoder 2 definition), etc. ), # Layer 1\n                        ((Zoom_out, Zoom_in, KC.NO), (encoder 2 definition), etc. ), # Layer 2\n                        ((KC.A, KC.Z, KC.N1), (encoder 2 definition), etc. ), # Layer 3\n                        ((KC.NO, KC.NO, KC.NO), (encoder 2 definition), etc. ), # Layer 4\n                      ]\n")),(0,r.kt)("h2",{id:"encoder-divisor"},"Encoder divisor"),(0,r.kt)("p",null,"Depending on your encoder resolution, it may send 4 or 2 pulses (state changes) on every detent. This number is controlled by the ",(0,r.kt)("inlineCode",{parentName:"p"},"divisor")," property. By default the divisor is set to 4, but if your encoder only activates on every second detent (skips pulses), set the divisor to 2. If the encoder activates twice on every detent, set the value to 4."),(0,r.kt)("p",null,"You can change the default globally for all encoders ",(0,r.kt)("strong",{parentName:"p"},"before")," initializing the encoder pins (",(0,r.kt)("inlineCode",{parentName:"p"},"main.py")," file):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"encoder_handler.divisor = 2\nencoder_handler.pins = ( (board.GP14, board.GP15, None), (board.GP26, board.GP27, None), )\n")),(0,r.kt)("p",null,"Or if you have different types of encoders, set divisor for each encoder individually:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"encoder_handler.pins = (\n    (board.GP14, board.GP15, None, False, 4), \n    (board.GP26, board.GP27, None, False, 2),\n    (board.GP26, board.GP27, None ), # will be set to global default\n)\n")),(0,r.kt)("p",null,"This setting is equivalent to ",(0,r.kt)("inlineCode",{parentName:"p"},"divisor")," in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.circuitpython.org/en/latest/shared-bindings/rotaryio/index.html#rotaryio.IncrementalEncoder.divisor"},"rotaryio")," module.\nThe divisor of ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," for smooth encoders is not currently supported but you can use the divisor of ",(0,r.kt)("inlineCode",{parentName:"p"},"2")," for them without issues and any noticeable difference. "),(0,r.kt)("h2",{id:"handler-methods-overrides"},"Handler methods overrides"),(0,r.kt)("p",null,"Encoder methods ",(0,r.kt)("inlineCode",{parentName:"p"},"on_move_do")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"on_button_do")," can be overridden for complex use cases."),(0,r.kt)("h2",{id:"connecting-the-encoder"},"Connecting the encoder"),(0,r.kt)("p",null,"Most EC11, EC12 and similar encoders have a common pinout shown below. For EVQWGD001 horizontal roller encoder, the pins are ordered ",(0,r.kt)("inlineCode",{parentName:"p"},"Pin A"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Pin B"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Ground"),", and the fourth (furthest from the two switch pins) is not connected. This information is provided just for reference \u2014 always refer to the manufacturer datasheet for the correct pinout."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"            +----------+                \n Pin A  ----|          |                \n            |          |----- Ground    \n Ground ----|          |                \n            |          |----- Switch Pin\n Pin B  ----|          |                \n            +----------+                \n")),(0,r.kt)("p",null,"In this configuration the encoder push button has its own dedicated pin. If the button should instead be a part of the matrix, it needs to be wired to Column and Row like other switches instead of ground."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"full-example-with-1-encoder"},"Full example (with 1 encoder)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import board\n\nfrom kmk.kmk_keyboard import KMKKeyboard\nfrom kmk.consts import UnicodeMode\nfrom kmk.keys import KC\nfrom kmk.scanners import DiodeOrientation\nfrom kmk.modules.layers import Layers\nfrom kmk.modules.encoder import EncoderHandler\n\n\nkeyboard = KMKKeyboard()\nlayers = Layers()\nencoder_handler = EncoderHandler()\nkeyboard.modules = [layers, encoder_handler]\n\n\nkeyboard.col_pins = (\n    board.GP0, board.GP1, board.GP2, board.GP3, board.GP4, board.GP5,\n    board.GP6, board.GP7, board.GP8, board.GP9, board.GP10, board.GP11,\n    board.GP12, board.GP13,\n)\nkeyboard.row_pins = (board.GP28, board.GP27, board.GP22, board.GP26, board.GP21)\nkeyboard.diode_orientation = DiodeOrientation.COLUMNS\n\n# I2C example\n#import busio\n#SDA = board.GP0\n#SCL = board.GP1\n#i2c = busio.I2C(SCL, SDA)\n#encoder_handler.i2c = ((i2c, 0x36, False),)\n\n# encoder_handler.divisor = 2 # for encoders with more precision\nencoder_handler.pins = ((board.GP17, board.GP15, board.GP14, False),)\n\nkeyboard.tap_time = 250\nkeyboard.debug_enabled = False\n\n\n# Filler keys\n_______ = KC.TRNS\nxxxxxxx = KC.NO\ntbdtbd = KC.A\n\n\n# Layers\nLYR_STD, LYR_EXT, LYR_NUM, LYR_GAME = 0, 1, 2, 3\n\nTO_STD = KC.DF(LYR_STD)\nMT_EXT = KC.MO(LYR_EXT)\nTO_NUM = KC.MO(LYR_NUM)\nTO_GAME = KC.DF(LYR_GAME)\n\n\n# Keymap\n\nkeyboard.keymap = [\n    # Standard (ISO) Layer\n    [\n        KC.ESC , KC.N1  , KC.N2  , KC.N3  , KC.N4  , KC.N5  , KC.N6  , KC.N7  , KC.N8  , KC.N9  , KC.N0  , KC.MINS, KC.EQL , KC.BSPC,\n        KC.TAB , KC.Q   , KC.W   , KC.E   , KC.R   , KC.T   , KC.Y   , KC.U   , KC.I   , KC.O   , KC.P   , KC.LBRC, KC.RBRC, KC.DEL ,\n        xxxxxxx, KC.A   , KC.S   , KC.D   , KC.F   , KC.G   , KC.H   , KC.J   , KC.K   , KC.L   , KC.SCLN, KC.QUOT, KC.NUHS, xxxxxxx,\n        KC.LSFT, KC.NUBS, KC.Z   , KC.X   , KC.C   , KC.V   , KC.B   , KC.N   , KC.M   , KC.COMM, KC.DOT , KC.SLSH, KC.UP  , KC.ENT ,\n        KC.LCTL, KC.LGUI, xxxxxxx, KC.LALT, MT_EXT , xxxxxxx, KC.SPC , xxxxxxx, KC.RALT, TO_NUM , KC.RSFT, KC.LEFT, KC.DOWN, KC.RGHT,\n    ],\n    # Extra Keys Layer\n    [\n        TO_STD , KC.F1  , KC.F2  , KC.F3  , KC.F4  , KC.F5  , KC.F6  , KC.F7  , KC.F8  , KC.F9  , KC.F10 , KC.F11 , KC.F12 , KC.RESET,\n        _______, KC.N1  , KC.N2  , KC.N3  , KC.N4  , KC.N5  , KC.N6  , KC.N7  , KC.N8  , KC.N9  , KC.N0  , KC.MINS, KC.EQL , _______,\n        xxxxxxx, _______, _______, _______, _______, _______, _______, _______, _______, _______, _______, _______, _______, xxxxxxx,\n        KC.LSFT, _______, _______, _______, _______, _______, _______, _______, _______, _______, _______, _______, KC.PGUP, _______,\n        KC.LCTL, KC.LGUI, xxxxxxx, KC.LALT, MT_EXT , xxxxxxx, _______, xxxxxxx, _______, TO_NUM , _______, KC.HOME, KC.PGDN, KC.END ,\n    ],\n    # NumPad Layer\n    [\n        TO_STD , xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, KC.P7  , KC.P8  , KC.P9  , KC.PSLS, xxxxxxx, xxxxxxx, KC.BSPC,\n        xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, KC.P4  , KC.P5  , KC.P6  , KC.PAST, xxxxxxx, xxxxxxx, KC.DEL ,\n        xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, KC.LPRN, KC.P1  , KC.P2  , KC.P3  , KC.PPLS, xxxxxxx, xxxxxxx, xxxxxxx,\n        xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, KC.RPRN, KC.P0  , KC.PDOT, _______, KC.PMNS, xxxxxxx, xxxxxxx, KC.PENT,\n        xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, MT_EXT , xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, TO_NUM , xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx,\n    ],\n    # Gaming Layer\n    [\n        TO_STD , xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx,\n        xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx,\n        xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx,\n        xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx,\n        xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, MT_EXT , xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx, TO_NUM , xxxxxxx, xxxxxxx, xxxxxxx, xxxxxxx,\n    ],\n]\n\n# Rotary Encoder (1 encoder / 1 definition per layer)\nencoder_handler.map = [ ((KC.UP, KC.DOWN, KC.MUTE),), # Standard\n                        ((KC.VOLD, KC.VOLU, KC.MUTE),), # Extra\n                        ((KC.A, KC.Z, KC.N1),), # NumPad not yet properly configured\n                        ((KC.A, KC.Z, KC.N1),), # Gaming not yet properly configured\n                        ]\n\nif __name__ == "__main__":\n    keyboard.go()\n')))}c.isMDXComponent=!0}}]);