"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3753],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>h});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(o),m=a,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||r;return o?n.createElement(h,i(i({ref:t},s),{},{components:o})):n.createElement(h,i({ref:t},s))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=o[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},2135:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=o(7462),a=(o(7294),o(3905));const r={},i="Getting Started",l={unversionedId:"en/Getting_Started",id:"en/Getting_Started",title:"Getting Started",description:"Life was like a box of chocolates. You never know what you're gonna get.",source:"@site/docs/en/Getting_Started.md",sourceDirName:"en",slug:"/en/Getting_Started",permalink:"/docs/en/Getting_Started",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/en/Getting_Started.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Documentation index",permalink:"/docs/en/"},next:{title:"OLED Display",permalink:"/docs/en/OLED_Display"}},p={},d=[{value:"TL;DR Quick start guide",id:"tldr-quick-start-guide",level:2},{value:"Now that you&#39;re up and running, you may want to go further...",id:"now-that-youre-up-and-running-you-may-want-to-go-further",level:2},{value:"You&#39;re extremely lucky and you have a fully supported keyboard",id:"youre-extremely-lucky-and-you-have-a-fully-supported-keyboard",level:3},{value:"You&#39;ve got another, maybe DIY, board and want to customize KMK for it",id:"youve-got-another-maybe-diy-board-and-want-to-customize-kmk-for-it",level:3},{value:"Pre-compiling KMK for faster boot times or microcontrollers with limited flash",id:"pre-compiling-kmk-for-faster-boot-times-or-microcontrollers-with-limited-flash",level:3},{value:"Additional help and support",id:"additional-help-and-support",level:2}],s={toc:d},u="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Life was like a box of chocolates. You never know what you're gonna get.")),(0,a.kt)("p",null,"KMK is a keyboard focused layer that sits on top of ",(0,a.kt)("a",{parentName:"p",href:"https://circuitpython.org/"},"CircuitPython"),". As such, it should work with most ",(0,a.kt)("a",{parentName:"p",href:"https://circuitpython.org/downloads"},"boards that support CircuitPython"),". KMK requires CircuitPython version 7.3 or above.\nKnown working and recommended devices can be found in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/Officially_Supported_Microcontrollers"},"list of officially supported microcontrollers")),(0,a.kt)("h2",{id:"tldr-quick-start-guide"},"TL;DR Quick start guide"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"To infinity and beyond!"),(0,a.kt)("ol",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://learn.adafruit.com/welcome-to-circuitpython/installing-circuitpython"},"Install CircuitPython version 7.3 or higher on your board"),". With most boards, it should be as easy as drag and dropping the firmware on the drive"),(0,a.kt)("li",{parentName:"ol"},"Get a ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/KMKfw/kmk_firmware/archive/refs/heads/master.zip"},"copy of KMK")," from the master branch "),(0,a.kt)("li",{parentName:"ol"},"Unzip it and copy the KMK folder and the boot.py file at the root of the USB drive corresponding to your board (often appearing as CIRCUITPY)"),(0,a.kt)("li",{parentName:"ol"},"Create a new ",(0,a.kt)("em",{parentName:"li"},"code.py")," or ",(0,a.kt)("em",{parentName:"li"},"main.py")," file in the same root directory (same level as boot.py) with the example content hereunder: "))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"IMPORTANT:"))," adapt the GP0 / GP1 pins to your specific board !"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"print(\"Starting\")\n\nimport board\n\nfrom kmk.kmk_keyboard import KMKKeyboard\nfrom kmk.keys import KC\nfrom kmk.scanners import DiodeOrientation\n\nkeyboard = KMKKeyboard()\n\nkeyboard.col_pins = (board.GP0,)\nkeyboard.row_pins = (board.GP1,)\nkeyboard.diode_orientation = DiodeOrientation.COL2ROW\n\nkeyboard.keymap = [\n    [KC.A,]\n]\n\nif __name__ == '__main__':\n    keyboard.go()\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"With a wire / paperclip / whatever, connect the pins you selected for col_pin and row_pin together.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"feather and keeboar example pins",src:o(670).Z,width:"640",height:"616"})),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},'If it prints the letter "a" (or a "Q" or ... depending on your keyboard layout), you\'re done!')),(0,a.kt)("h2",{id:"now-that-youre-up-and-running-you-may-want-to-go-further"},"Now that you're up and running, you may want to go further..."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This is your last chance. After this, there is no turning back. You take the blue pill\u2014the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill\u2014you stay in Wonderland, and I show you how deep the rabbit hole goes. Remember: all I'm offering is the truth. Nothing more.")),(0,a.kt)("h3",{id:"youre-extremely-lucky-and-you-have-a-fully-supported-keyboard"},"You're extremely lucky and you have a fully supported keyboard"),(0,a.kt)("p",null,'If your keyboard and microcontroller are officially supported, simply visit the page for your files, and dropping them on the root of the "flash drive".\nThose pages can be found in the repositories ',(0,a.kt)("a",{parentName:"p",href:"https://github.com/KMKfw/kmk_firmware/tree/master/boards"},"boards folder"),".\nYou will need the ",(0,a.kt)("inlineCode",{parentName:"p"},"kb.py")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"main.py"),". If you need more detailed instructions on how to customize the configuration settings and key mappings, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/config_and_keymap"},"config and keymap")," documentation."),(0,a.kt)("h3",{id:"youve-got-another-maybe-diy-board-and-want-to-customize-kmk-for-it"},"You've got another, maybe DIY, board and want to customize KMK for it"),(0,a.kt)("p",null,"First, be sure to understand how your device work, and particularly its specific matrix configuration. You can have a look at ",(0,a.kt)("a",{parentName:"p",href:"http://pcbheaven.com/wikipages/How_Key_Matrices_Works/"},"how key matrices work")," or read the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.qmk.fm/#/hand_wire"},"guide")," provided by the QMK team for handwired keyboards\nOnce you've got the gist of it:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To start customizing your ",(0,a.kt)("inlineCode",{parentName:"li"},"code.py"),"/",(0,a.kt)("inlineCode",{parentName:"li"},"main.py")," file, please refer to the ",(0,a.kt)("a",{parentName:"li",href:"/docs/config_and_keymap"},"config and keymap")," and ",(0,a.kt)("a",{parentName:"li",href:"/docs/keys"},"keys")," files respectively, which provide detailed instructions on how to modify the configuration settings and key mappings."),(0,a.kt)("li",{parentName:"ul"},"There's a ",(0,a.kt)("a",{parentName:"li",href:"/docs/keycodes"},"reference")," of the available keycodes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/international"},"International")," extension adds keys for non US layouts and ",(0,a.kt)("a",{parentName:"li",href:"/docs/media_keys"},"Media Keys")," adds keys for ... media")),(0,a.kt)("p",null,"And to go even further:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/sequences"},"Sequences")," are used for sending multiple keystrokes in a single action"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/layers"},"Layers")," can transform the whole way your keyboard is behaving with a single touch"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/holdtap"},"HoldTap")," allow you to customize the way a key behaves whether it is tapped or hold, and ",(0,a.kt)("a",{parentName:"li",href:"/docs/tapdance"},"TapDance")," depending on the number of times it is pressed")),(0,a.kt)("p",null,"Want to have fun features such as RGB, split keyboards and more? Check out what builtin ",(0,a.kt)("a",{parentName:"p",href:"/docs/modules"},"modules")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/extensions"},"extensions")," can do!\nYou can also get ideas from the various ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KMKfw/kmk_firmware/tree/master/user_keymaps"},"user examples")," that we provide and dig into our ",(0,a.kt)("a",{parentName:"p",href:"/docs/"},"documentation"),"."),(0,a.kt)("h3",{id:"pre-compiling-kmk-for-faster-boot-times-or-microcontrollers-with-limited-flash"},"Pre-compiling KMK for faster boot times or microcontrollers with limited flash"),(0,a.kt)("p",null,"There are two options:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"To compile KMK yourself you'll need to download and install the ",(0,a.kt)("a",{parentName:"li",href:"https://adafruit-circuit-python.s3.amazonaws.com/index.html?prefix=bin/mpy-cross/"},"compatible mpy-cross"),"\nfor your Operating System. Don't forget to add it to your PATH, test by running ",(0,a.kt)("inlineCode",{parentName:"li"},"mpy-cross")," from a shell (Powershell, Bash, Fish, etc). Once that's set up, run either ",(0,a.kt)("inlineCode",{parentName:"li"},"make compile")," (if you have ",(0,a.kt)("inlineCode",{parentName:"li"},"make"),") or ",(0,a.kt)("inlineCode",{parentName:"li"},"python util/compile.py"),"to generate the ",(0,a.kt)("inlineCode",{parentName:"li"},".mpy")," versions of KMK files. Then copy the whole compiled ",(0,a.kt)("inlineCode",{parentName:"li"},"kmk/")," directory to your keyboard.")),(0,a.kt)("p",null,"There are even more compile and copy make targets.\nPoweruser can compile KMK and additional libs, and then load the bytecode and keyboard code\nonto a keyboard in one go:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"make compile copy-compiled copy-board MPY_SOURCES='kmk/ lib/' BOARD='boards/someboard' MOUNTPOINT='/media/user/someboard'\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"To download a pre-compiled KMK go to ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/KMKfw/kmk_firmware/actions/workflows/compile.yml"},"Actions > Build on the KMK GitHub project page"),",\nclick on the latest build, and you'll find the download link at the bottom of the page under Artifacts. Unzip the download and place the contents in the ",(0,a.kt)("inlineCode",{parentName:"li"},"kmk/")," directory on your keyboard.")),(0,a.kt)("p",null,"On certain microcontrollers that will still not be enough of a size reduction to\nfit all of KMK onto the flash (nice!nano for example).\nYou can remove any optional parts of KMK you aren't using.\nStart by skipping ",(0,a.kt)("inlineCode",{parentName:"p"},"kmk/extensions"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"kmk/modules"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"kmk/quickpin")," and adding in only the files under those paths used in your keyboard (i.e. files that are imported in your ",(0,a.kt)("inlineCode",{parentName:"p"},"main.py")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"kb.py"),")."),(0,a.kt)("h2",{id:"additional-help-and-support"},"Additional help and support"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Roads? Where we're going we don't need roads.")),(0,a.kt)("p",null,"In case you need it, debugging help can be found on the ",(0,a.kt)("a",{parentName:"p",href:"/docs/debugging"},"debugging")," page."),(0,a.kt)("p",null,"For asynchronous support and chatter about KMK, ",(0,a.kt)("a",{parentName:"p",href:"https://kmkfw.zulipchat.com"},"join our Zulip\ncommunity"),"!"),(0,a.kt)("p",null,"If you ask for help in chat or open a bug report, if possible\nmake sure your copy of KMK is up-to-date.\nIn particular, swing by the Zulip chat ",(0,a.kt)("em",{parentName:"p"},"before")," opening a GitHub Issue about\nconfiguration, documentation, etc. concerns."))}c.isMDXComponent=!0},670:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/pins56-4c44f1ec8981d234229f1cf1d812b046.jpg"}}]);