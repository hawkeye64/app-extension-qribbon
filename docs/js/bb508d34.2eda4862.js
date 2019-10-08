(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["bb508d34"],{"0960":function(t,o,e){"use strict";e.r(o);var r=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("q-page",{staticClass:"row justify-center"},[e("q-card",{staticClass:"q-my-lg q-pa-md flat bordered",staticStyle:{height:"90px",width:"75%"}},[e("q-select",{attrs:{options:[{value:"all",label:"All Examples"},{value:"horizontal",label:"Horizontal (Default)"},{value:"vertical",label:"Vertical"},{value:"corner",label:"Corner"}],label:"Display Examples",filled:"",multiple:"","use-chips":"","stack-label":"","emit-value":""},model:{value:t.exampleTypes,callback:function(o){t.exampleTypes=o},expression:"exampleTypes"}})],1),e("q-card",{directives:[{name:"show",rawName:"v-show",value:t.exampleTypeHas("horizontal"),expression:"exampleTypeHas('horizontal')"}],staticClass:"q-my-lg q-py-md flat bordered",staticStyle:{width:"75%"}},[e("div",{staticClass:"ribbon-wrapper"},[e("q-ribbon",{staticClass:"border-radius",attrs:{color:"#616161","background-color":"#e0e0e0"}},[t._v('QRibbon (type="horizontal")')])],1),e("q-separator",{staticClass:"q-mb-lg"}),e("div",{staticClass:"box-ribbon-wrapper q-py-md"},[e("div",{staticClass:"flex justify-between"},[e("q-ribbon",{staticClass:"q-pb-md",attrs:{"leaf-position":"top",decoration:"point-in"}},[t._v("Left Ribbon")]),e("q-ribbon",{staticClass:"q-pb-md cursor-pointer",attrs:{"leaf-position":"top",decoration:"point-out",position:"right"}},[t._v("\n          QMenu QRibbon\n          "),e("q-menu",{attrs:{anchor:"center left",self:"top right"}},[e("q-list",{staticStyle:{"min-width":"100px"},attrs:{dense:""}},[e("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[e("q-item-section",[t._v("Open...")])],1),e("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[e("q-item-section",[t._v("New")])],1),e("q-separator"),e("q-item",{attrs:{clickable:""}},[e("q-item-section",[t._v("Preferences")]),e("q-item-section",{attrs:{side:""}},[e("q-icon",{attrs:{name:"keyboard_arrow_right"}})],1),e("q-menu",{attrs:{anchor:"top right",self:"top left"}},[e("q-list",t._l(3,(function(o){return e("q-item",{key:o,attrs:{dense:"",clickable:""}},[e("q-item-section",[t._v("Submenu Label")]),e("q-item-section",{attrs:{side:""}},[e("q-icon",{attrs:{name:"keyboard_arrow_right"}})],1),e("q-menu",{attrs:{"auto-close":"",anchor:"top right",self:"top left"}},[e("q-list",t._l(3,(function(o){return e("q-item",{key:o,attrs:{dense:"",clickable:""}},[e("q-item-section",[t._v("3rd level Label")])],1)})),1)],1)],1)})),1)],1)],1),e("q-separator"),e("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[e("q-item-section",[t._v("Quit")])],1)],1)],1)],1)],1),e("div",{staticClass:"flex justify-between"},[e("q-ribbon",{staticClass:"q-pb-md",attrs:{decoration:"point-in","background-color":"secondary",inline:""}},[t._v("Quasar Color (secondary)")]),e("q-ribbon",{staticClass:"q-pb-md",attrs:{position:"right","background-color":"red-5","leaf-color":"purple-3",inline:""}},[t._v("Quasar Color (red-5)")])],1),e("q-toolbar",{staticClass:"q-pb-md qribbon"},[e("q-ribbon",{attrs:{position:"left",color:"rgba(0,0,0,.58)","background-color":"#c0c0c0","leaf-color":"#a0a0a0","leaf-position":"bottom",decoration:"rounded-out"}},[e("q-toolbar-title",{staticClass:"example-title"},[t._v("\n            QToolbar / QRibbon with QToolBarTitle\n          ")])],1)],1),e("q-ribbon",{staticClass:"q-pb-md border-radius",attrs:{glow:""}},[t._v("With border radius - GLOWING!")]),e("q-ribbon",{staticClass:"q-pb-md border-radius",attrs:{glow:"","glow-speed":4,"glow-iteration-count":"5"}},[t._v("Glow 5 times for 4 seconds each")]),e("q-ribbon",{staticClass:"q-pb-md",attrs:{color:"red","background-color":"yellow",decoration:"point-out"}},[t._v("Hippy Ribbon")]),e("q-ribbon",{staticClass:"q-pb-md",attrs:{color:"white","background-color":"#FF0000"}},[t._v("Auto shade the leaf by passing CSS color (e.g. #FF0000)")]),e("q-ribbon",{staticClass:"q-pb-md"},[e("q-icon",{attrs:{name:"home"}})],1),e("div",{staticClass:"flex justify-between"},[e("q-ribbon",{staticClass:"q-pb-md",attrs:{inline:""}},[t._v("Inline Left Ribbon")]),e("q-ribbon",{staticClass:"q-pb-md",attrs:{position:"right","leaf-position":"top",decoration:"rounded-in",inline:"",glow:""}},[t._v("Inline Right Ribbon")])],1),e("q-ribbon",{staticClass:"q-pb-md",attrs:{position:"right",decoration:"rounded-out"}},[t._v("Right Ribbon")]),e("q-ribbon",{staticClass:"q-pb-md qribbon-avatar",attrs:{position:"right",decoration:"rounded-out"}},[e("q-avatar",[e("img",{attrs:{src:"https://cdn.quasar.dev/img/avatar.png"}})])],1),e("q-ribbon",{staticClass:"q-pb-md",attrs:{color:"purple","leaf-color":"purple","background-color":"orange",position:"right"}},[t._v("Hippy Ribbon")]),e("q-ribbon",{staticClass:"q-pb-md",attrs:{color:"yellow","leaf-color":"blue","background-color":"green",position:"right"}},[t._v("Different Leaf Color - Hippy Ribbon")]),e("q-ribbon",{staticClass:"q-pb-md text-center border-radius-top",attrs:{size:"full"}},[t._v("Full Ribbon (.text-center) with border-radius")]),e("q-ribbon",{staticClass:"q-pb-md",attrs:{size:"full"}},[e("marquee",[t._v("Let's Marquee!")])],1),e("q-ribbon",{staticClass:"q-pb-md text-right q-mt-md",attrs:{"leaf-position":"top",size:"full","leaf-color":"green",color:"green","background-color":"yellow",glow:""}},[t._v("Full Inverted Hippy Ribbon (.text-right)")])],1)],1),e("q-card",{directives:[{name:"show",rawName:"v-show",value:t.exampleTypeHas("vertical"),expression:"exampleTypeHas('vertical')"}],staticClass:"q-my-lg q-py-md flat bordered",staticStyle:{width:"75%"}},[e("div",{staticClass:"ribbon-wrapper"},[e("q-ribbon",{staticClass:"border-radius",attrs:{color:"#616161","background-color":"#e0e0e0"}},[t._v('QRibbon (type="vertical")')])],1),e("q-separator",{staticClass:"q-mb-lg"}),e("div",{staticClass:"box-ribbon-wrapper q-py-md"},[e("div",{staticClass:"ribbon-wrapper"},[e("q-ribbon",{attrs:{type:"vertical",position:"top-left","leaf-position":"right",glow:""}},[t._v("Top Down Ribbon")])],1),e("div",{staticClass:"ribbon-wrapper"},[e("q-ribbon",{attrs:{type:"vertical",position:"bottom-left","leaf-position":"left",glow:""}},[t._v("Bottom Up Ribbon")])],1),e("div",{staticClass:"ribbon-wrapper move-50"},[e("q-ribbon",{attrs:{type:"vertical",position:"top-left","leaf-position":"right",decoration:"point-in"}},[t._v("Top Down Ribbon")])],1),e("div",{staticClass:"ribbon-wrapper move-50"},[e("q-ribbon",{attrs:{type:"vertical",position:"bottom-left","leaf-position":"left",decoration:"point-out"}},[t._v("Bottom Up Ribbon")])],1),e("div",{staticClass:"ribbon-wrapper move-100"},[e("q-ribbon",{attrs:{type:"vertical",position:"top-left","leaf-position":"right",decoration:"rounded-in"}},[t._v("Top Down Ribbon")])],1),e("div",{staticClass:"ribbon-wrapper move-100"},[e("q-ribbon",{attrs:{type:"vertical",position:"bottom-left","leaf-position":"left",decoration:"rounded-out"}},[t._v("Bottom Up Ribbon")])],1),e("div",{staticClass:"ribbon-wrapper"},[e("q-ribbon",{staticClass:"text-center",attrs:{type:"vertical",position:"right",size:"full","leaf-position":"left"}},[t._v("Full Ribbon (.text-center)")])],1)])],1),e("q-card",{directives:[{name:"show",rawName:"v-show",value:t.exampleTypeHas("corner"),expression:"exampleTypeHas('corner')"}],staticClass:"q-my-lg q-pt-md flat bordered",staticStyle:{width:"75%"}},[e("div",{staticClass:"ribbon-wrapper"},[e("q-ribbon",{staticClass:"border-radius",attrs:{color:"#616161","background-color":"#e0e0e0"}},[t._v('QRibbon (type="corner")')])],1),e("q-separator"),e("q-card-section",[e("div",{staticClass:"box-ribbon-wrapper"},[e("q-ribbon",{attrs:{position:"top-left",type:"corner",glow:""}},[t._v("Glow Top Left")]),e("q-ribbon",{staticClass:"github-text",attrs:{position:"top-right",type:"corner",color:"white","background-color":"#5b5e63"}},[e("a",{attrs:{href:"https://github.com/quasarframework/app-extension-qribbon",target:"_blank"}},[t._v("FORK ME ON GITHUB!")])]),e("q-ribbon",{staticClass:"qribbon-bottom",attrs:{position:"bottom-left",type:"corner"}},[e("span",{staticClass:"rotate-270"},[t._v("Bottom Left")])]),e("q-ribbon",{staticClass:"qribbon-bottom",attrs:{position:"bottom-right",type:"corner"}},[t._v("Bottom Right")])],1)])],1)],1)},a=[],i=(e("6762"),e("2fdb"),e("cff9")),s={name:"PageIndex",methods:{exampleTypeHas:function(t){return this.exampleTypes.includes(t)||this.exampleTypes.includes("all")}},data:function(){return{template:i["a"],exampleTypes:["all"]}}},n=s,l=(e("460c"),e("2877")),b=Object(l["a"])(n,r,a,!1,null,null,null);o["default"]=b.exports},"460c":function(t,o,e){"use strict";var r=e("67b9"),a=e.n(r);a.a},"67b9":function(t,o,e){},cff9:function(t,o,e){"use strict";o["a"]="QRibbon (@quasar/qribbon)\r\n===\r\n\r\n> Please note, this is currently a work-in-progress (WIP).\r\n\r\nQRibbon is a [Quasar App Extension](https://quasar.dev/app-extensions/introduction). It allows you to display ribbons on your page.\r\n\r\n# Install\r\nTo add this App Extension to your Quasar application, run the following (in your Quasar app folder):\r\n```\r\nquasar ext add @quasar/qribbon\r\n```\r\n\r\n# Uninstall\r\nTo remove this App Extension from your Quasar application, run the following (in your Quasar app folder):\r\n```\r\nquasar ext remove @quasar/qribbon\r\n```\r\n\r\n# Describe\r\nYou can use `quasar describe QRibbon`\r\n\r\n# Source\r\nCan be found [here](https://github.com/quasarframework/app-extension-qribbon/).\r\n\r\n# Docs\r\nCan be found [here](https://quasarframework.github.io/app-extension-qribbon/).\r\n\r\n# Examples\r\nCan be found [here](https://quasarframework.github.io/app-extension-qribbon/examples).\r\n\r\n# Interactive Demo / QRibbon Builder\r\nCan be found [here](https://quasarframework.github.io/app-extension-qribbon/builder).\r\n\r\n# Demo (source) Project\r\nCan be found [here](https://github.com/quasarframework/app-extension-qribbon/tree/master/demo).\r\n"}}]);