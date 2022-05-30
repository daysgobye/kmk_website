"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9906],{3905:function(e,n,a){a.d(n,{Zo:function(){return d},kt:function(){return u}});var o=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function t(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,o,r=function(e,n){if(null==e)return{};var a,o,r={},t=Object.keys(e);for(o=0;o<t.length;o++)a=t[o],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)a=t[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=o.createContext({}),c=function(e){var n=o.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},d=function(e){var n=c(e.components);return o.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},l=o.forwardRef((function(e,n){var a=e.components,r=e.mdxType,t=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=c(a),u=r,k=l["".concat(p,".").concat(u)]||l[u]||m[u]||t;return a?o.createElement(k,i(i({ref:n},d),{},{components:a})):o.createElement(k,i({ref:n},d))}));function u(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var t=a.length,i=new Array(t);i[0]=l;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<t;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}l.displayName="MDXCreateElement"},1613:function(e,n,a){a.r(n),a.d(n,{assets:function(){return d},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var o=a(7462),r=a(3366),t=(a(7294),a(3905)),i=["components"],s={},p="Portar para o KMK",c={unversionedId:"ptBR/porting_to_kmk",id:"ptBR/porting_to_kmk",title:"Portar para o KMK",description:"Portar uma placa para o KMK \xe9 bastante simples, e segue o seguinte formato-base:",source:"@site/docs/02-ptBR/porting_to_kmk.md",sourceDirName:"02-ptBR",slug:"/ptBR/porting_to_kmk",permalink:"/kmk_website/docs/ptBR/porting_to_kmk",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/02-ptBR/porting_to_kmk.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Teclas de Mouse",permalink:"/kmk_website/docs/ptBR/mouse_keys"},next:{title:"Economia de Energia",permalink:"/kmk_website/docs/ptBR/power"}},d={},m=[{value:"REQUERIDO",id:"requerido",level:2},{value:"Pinos Adicionais para Extens\xf5es",id:"pinos-adicionais-para-extens\xf5es",level:2},{value:"Keymaps",id:"keymaps",level:2},{value:"Mais Informa\xe7\xe3o",id:"mais-informa\xe7\xe3o",level:2}],l={toc:m};function u(e){var n=e.components,a=(0,r.Z)(e,i);return(0,t.kt)("wrapper",(0,o.Z)({},l,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"portar-para-o-kmk"},"Portar para o KMK"),(0,t.kt)("p",null,"Portar uma placa para o KMK \xe9 bastante simples, e segue o seguinte formato-base:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"import board\n\nfrom kmk.kmk_keyboard import KMKKeyboard as _KMKKeyboard\nfrom kmk.scanners import DiodeOrientation\n{EXTENSIONS_IMPORT}\n\nclass KMKKeyboard(_KMKKeyboard):\n{REQUIRED}\n    extensions = []\n\n")),(0,t.kt)("h2",{id:"requerido"},"REQUERIDO"),(0,t.kt)("p",null,"Isto \xe9 projetado para ser substitu\xeddo com os pinos de defini\xe7\xe3o de seu teclado.\nLinhas, colunas e dire\xe7\xe3o dos diodos (se houver) devem ser definidas dessa\nforma:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"    row_pins = [board.p0_31, board.p0_29, board.p0_02, board.p1_15]\n    col_pins = [board.p0_22, board.p0_24, board.p1_00, board.p0_11, board.p1_04]\n    diode_orientation = DiodeOrientation.COL2ROW\n")),(0,t.kt)("h2",{id:"pinos-adicionais-para-extens\xf5es"},"Pinos Adicionais para Extens\xf5es"),(0,t.kt)("p",null,"KMK inclui extens\xf5es embutidas para RGB e teclados repartidos, e para economia\nde energia. Se estes s\xe3o aplic\xe1veis ao seu teclado/micro-controlador, os pinos\ndevem ser acrescentados aqui. Remeta \xe0s instru\xe7\xf5es na respectiva p\xe1gina de\nextens\xf5es sobre como adicion\xe1-los. Se n\xe3o pretende adicionar extens\xf5es, mantenha\na lista vazia como mostrado."),(0,t.kt)("h1",{id:"mapeamento-coordenado"},"Mapeamento Coordenado"),(0,t.kt)("p",null,"Se seu teclado n\xe3o \xe9 eletricamente constru\xeddo como um quadrado (apesar que a\nmaioria \xe9), voc\xea pode fornecer o mapeamento diretamente. Um exemplo disso \xe9 o\nteclado ",(0,t.kt)("a",{parentName:"p",href:"https://github.com/foostan/crkbd"},"Corne"),". Ele tem 12 colunas para 3\nlinhas, e 6 colunas para a linha inferior. Teclados repartidos s\xe3o contados pelo\ntotal, n\xe3o por parte separada. Isto seria mais ou menos assim:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.scanners import intify_coordinate as ic\n\n    coord_mapping = []\n    coord_mapping.extend(ic(0, x, 6) for x in range(6))\n    coord_mapping.extend(ic(4, x, 6) for x in range(6))\n    coord_mapping.extend(ic(1, x, 6) for x in range(6))\n    coord_mapping.extend(ic(5, x, 6) for x in range(6))\n    coord_mapping.extend(ic(2, x, 6) for x in range(6))\n    coord_mapping.extend(ic(6, x, 6) for x in range(6))\n    # And now, to handle R3, which at this point is down to just six keys\n    coord_mapping.extend(ic(3, x, 6) for x in range(3, 6))\n    coord_mapping.extend(ic(7, x, 6) for x in range(0, 3))\n")),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"intify_coordinate")," \xe9 a maneira tradicional de gerar posi\xe7\xf5es-chave.\nAqui est\xe1 uma vers\xe3o equivalente, talvez visualmente mais explicativa:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"coord_mapping = [\n 0,  1,  2,  3,  4,  5,  24, 25, 26, 27, 28, 29,\n 6,  7,  8,  9, 10, 11,  30, 31, 32, 33, 34, 35,\n12, 13, 14, 15, 16, 17,  36, 37, 38, 39, 40, 41,\n            21, 22, 23,  42, 43, 44,\n]\n")),(0,t.kt)("h2",{id:"keymaps"},"Keymaps"),(0,t.kt)("p",null,"Mapas de teclas (",(0,t.kt)("em",{parentName:"p"},"keymap"),") s\xe3o organizados com listas de listas. Keycodes s\xe3o\nadicionados para cada tecla de cada camada. Veja ",(0,t.kt)("a",{parentName:"p",href:"/kmk_website/docs/keycodes"},"keycodes")," para\nmais detalhes sobre que keycodes est\xe3o dispon\xedveis. Se usar camadas ou outras\nextens\xf5es, remeta tamb\xe9m \xe0 p\xe1gina de extens\xf5es para keycodes adicionais."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"from kb import KMKKeyboard\nfrom kmk.keys import KC\n\nkeyboard = KMKKeyboard()\n\nkeyboard.keymap = [\n    [KC.A, KC.B],\n    [KC.C, KC.D],\n]\n\nif __name__ == '__main__':\n    keyboard.go()\n")),(0,t.kt)("h2",{id:"mais-informa\xe7\xe3o"},"Mais Informa\xe7\xe3o"),(0,t.kt)("p",null,"Mais informa\xe7\xe3o pode ser vista ",(0,t.kt)("a",{parentName:"p",href:"/kmk_website/docs/config_and_keymap"},"aqui")))}u.isMDXComponent=!0}}]);