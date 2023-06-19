"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1230],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(a),y=o,m=u["".concat(p,".").concat(y)]||u[y]||c[y]||l;return a?n.createElement(m,r(r({ref:t},s),{},{components:a})):n.createElement(m,r({ref:t},s))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,r[1]=i;for(var d=2;d<l;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},5106:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(7462),o=(a(7294),a(3905));const l={},r="Peg Oled Display",i={unversionedId:"en/peg_oled_display",id:"en/peg_oled_display",title:"Peg Oled Display",description:"To use this you need to make some changes to your kb.py as well as you main.py I will break it into two sections for you.",source:"@site/docs/en/peg_oled_display.md",sourceDirName:"en",slug:"/en/peg_oled_display",permalink:"/docs/en/peg_oled_display",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/en/peg_oled_display.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OneShot Keycodes",permalink:"/docs/en/oneshot"},next:{title:"Peg RGB Matrix",permalink:"/docs/en/peg_rgb_matrix"}},p={},d=[{value:"What you can and cant do",id:"what-you-can-and-cant-do",level:3},{value:"Can do",id:"can-do",level:4},{value:"Cant do yet / on the way",id:"cant-do-yet--on-the-way",level:4},{value:"Required Libs",id:"required-libs",level:2},{value:"kb.py",id:"kbpy",level:2},{value:"Main.py",id:"mainpy",level:2},{value:"Config",id:"config",level:3},{value:"Photos",id:"photos",level:3},{value:"Preparing the images",id:"preparing-the-images",level:3},{value:"Text",id:"text",level:3},{value:"Note",id:"note",level:3},{value:"Text example",id:"text-example",level:3}],s={toc:d},u="wrapper";function c(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"peg-oled-display"},"Peg Oled Display"),(0,o.kt)("p",null,"To use this you need to make some changes to your kb.py as well as you main.py I will break it into two sections for you. "),(0,o.kt)("h3",{id:"what-you-can-and-cant-do"},"What you can and cant do"),(0,o.kt)("h4",{id:"can-do"},"Can do"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Display images"),(0,o.kt)("li",{parentName:"ul"},"Display text"),(0,o.kt)("li",{parentName:"ul"},"Set images or text to react to your layer")),(0,o.kt)("h4",{id:"cant-do-yet--on-the-way"},"Cant do yet / on the way"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"React to battery percentage"),(0,o.kt)("li",{parentName:"ul"},"React to WPM ")),(0,o.kt)("h2",{id:"required-libs"},"Required Libs"),(0,o.kt)("p",null,"You need these frozen into your circuitpython or in a lib folder at the root of your drive."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/adafruit/Adafruit_CircuitPython_DisplayIO_SSD1306"},"Adafruit_CircuitPython_DisplayIO_SSD1306")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/adafruit/Adafruit_CircuitPython_Display_Text"},"Adafruit_CircuitPython_Display_Text")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/adafruit/Adafruit_CircuitPython_Bundle/releases/download/20220415/adafruit-circuitpython-bundle-7.x-mpy-20220415.zip"},"Download .mpy versions from Adafruit_CircuitPython_Bundle"))),(0,o.kt)("h2",{id:"kbpy"},"kb.py"),(0,o.kt)("p",null,"Your chosen board may already have these changes done If not you will need to add them."),(0,o.kt)("p",null,'You need to add SCL and SDA to your keyboard. The pins the oled are connected to on your controller may not be called "SCL"and "SDA" they could be "GP21" and "GP13" for example. The best way to find out what they are is look at the boards pinout.'),(0,o.kt)("p",null,"Make this change to your ",(0,o.kt)("inlineCode",{parentName:"p"},"kb.py")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"    SCL=board.SCL\n    SDA=board.SDA\n")),(0,o.kt)("h2",{id:"mainpy"},"Main.py"),(0,o.kt)("p",null,"These are the changes that need to be made / added to your main.py"),(0,o.kt)("h3",{id:"config"},"Config"),(0,o.kt)("p",null,"No matter how you are going to use the oled you need this part (in ",(0,o.kt)("inlineCode",{parentName:"p"},"main.py"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"    from kmk.extensions.peg_oled_Display import Oled,OledDisplayMode,OledReactionType,OledData\n    keyboard = KMKKeyboard()\n    # ... Other oled code\n    keyboard.extensions.append(oled_ext) \n\n")),(0,o.kt)("h3",{id:"photos"},"Photos"),(0,o.kt)("p",null,"So the config for photos is quite simple. Getting the photos maybe not so much. I will explain."),(0,o.kt)("p",null,"Oled takes 2-3 arguments "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"OledData",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"OledData can take image ",(0,o.kt)("strong",{parentName:"li"},"or")," corner_one, corner_two, corner_three and corner_four"),(0,o.kt)("li",{parentName:"ul"},"Every item in OledData has 2 fields "),(0,o.kt)("li",{parentName:"ul"},"0: This is the reaction type right now it can be OledReactionType.LAYER or OledReactionType.STATIC"),(0,o.kt)("li",{parentName:"ul"},"1: An array of the items you want to show for the reaction. In this example 4 images to switch on the 4 layers"))),(0,o.kt)("li",{parentName:"ol"},'To display called as "toDisplay=OledDisplayMode.TXT" this takes a OledDisplayMode TXT or IMG.',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This tells the extension to load images or text."))),(0,o.kt)("li",{parentName:"ol"},'Flip called as "flip= Boolean" this will simply flip your display.')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'oled_ext = Oled(OledData(image={0:OledReactionType.LAYER,1:["1.bmp","2.bmp","1.bmp","2.bmp"]}),toDisplay=OledDisplayMode.IMG,flip=False)\n')),(0,o.kt)("p",null,'In this code example we are saying to react to the layer change and load a image filed named "1.bmp" for layer one and "2.bmp" for layer two and so on.'),(0,o.kt)("h3",{id:"preparing-the-images"},"Preparing the images"),(0,o.kt)("p",null,"So you need to include all the images in your circuitpython drive in the root along side main.py"),(0,o.kt)("p",null,'Your images need to be 128x32px and should only be black and white. After you have made your image you can save as a "monochrome bmp" this will save you a lot of space.'),(0,o.kt)("h3",{id:"text"},"Text"),(0,o.kt)("p",null,"Ok now we get into something that looks a lot more complicated but we will get though it."),(0,o.kt)("p",null,"Almost everything is the same We swap toDisplay to TXT and there are more items in the OledData Class, lets get into that."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Top left"),(0,o.kt)("li",{parentName:"ol"},"Top right"),(0,o.kt)("li",{parentName:"ol"},"Bottom left"),(0,o.kt)("li",{parentName:"ol"},"Bottom right")),(0,o.kt)("p",null,"After that is the same as the previous example. Each one has two fields 0:the reaction type. 1:what to display"),(0,o.kt)("p",null,'In this code we will always display the word "layer" in the top left corner of the screen then the other 3 corners will swap depending on the layer. '),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'oled_ext = Oled(\n    OledData(\n        corner_one={0:OledReactionType.STATIC,1:["layer"]},\n        corner_two={0:OledReactionType.LAYER,1:["1","2","3","4"]},\n        corner_three={0:OledReactionType.LAYER,1:["base","raise","lower","adjust"]},\n        corner_four={0:OledReactionType.LAYER,1:["qwerty","nums","shifted","leds"]}\n        ),\n        toDisplay=OledDisplayMode.TXT,flip=False)\n')),(0,o.kt)("h3",{id:"note"},"Note"),(0,o.kt)("p",null,"Your oled data can be a variable as shown below with images."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'oled_display_data=OledData(image={0:OledReactionType.LAYER,1:["1.bmp","2.bmp","1.bmp","2.bmp"]})\n\noled_ext = Oled(oled_display_data,toDisplay=OledDisplayMode.IMG,flip=False)\n')),(0,o.kt)("h3",{id:"text-example"},"Text example"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://boardsource.imgix.net/a4f155e0-bc83-11ec-a4ed-79d542ba3127.gif",alt:"example"})))}c.isMDXComponent=!0}}]);