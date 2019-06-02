(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["bb508d34"],{"0960":function(t,o,e){"use strict";e.r(o);var r=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("q-page",{staticClass:"row justify-center"},[e("q-card",{staticClass:"q-my-lg q-pa-md flat bordered",staticStyle:{height:"90px",width:"75%"}},[e("q-select",{attrs:{options:[{value:"all",label:"All Examples"},{value:"horizontal",label:"Horizontal (Default)"},{value:"vertical",label:"Vertical"},{value:"corner",label:"Corner"}],label:"Display Examples",filled:"",multiple:"","use-chips":"","stack-label":"","emit-value":""},model:{value:t.exampleTypes,callback:function(o){t.exampleTypes=o},expression:"exampleTypes"}})],1),e("q-card",{directives:[{name:"show",rawName:"v-show",value:t.exampleTypeHas("horizontal"),expression:"exampleTypeHas('horizontal')"}],staticClass:"q-my-lg q-py-md flat bordered",staticStyle:{width:"75%"}},[e("div",{staticClass:"ribbon-wrapper"},[e("q-ribbon",{staticClass:"border-radius",attrs:{color:"#616161","background-color":"#e0e0e0"}},[t._v('QRibbon (type="horizontal")')])],1),e("q-separator",{staticClass:"q-mb-lg"}),e("div",{staticClass:"box-ribbon-wrapper q-py-md"},[e("div",{staticClass:"ribbon-wrapper"},[e("q-ribbon",{attrs:{"leaf-position":"top",decoration:"point-in"}},[t._v("Left Ribbon (default)")])],1),e("div",{staticClass:"ribbon-wrapper"},[e("q-ribbon",{staticClass:"border-radius"},[t._v("With border radius")])],1),e("div",{staticClass:"ribbon-wrapper"},[e("q-ribbon",{attrs:{color:"red","background-color":"yellow",decoration:"point-out"}},[t._v("Hippy Ribbon")])],1),e("div",{staticClass:"ribbon-wrapper"},[e("q-ribbon",{attrs:{color:"white","background-color":"#FF0000"}},[t._v("Auto shade the leaf by passing CSS color (e.g. #FF0000)")])],1),e("div",{staticClass:"ribbon-wrapper"},[e("q-ribbon",[e("q-icon",{attrs:{name:"home"}})],1)],1),e("div",{staticClass:"ribbon-wrapper"},[e("q-ribbon",[t._v("Inline Left Ribbon")]),e("q-ribbon",{attrs:{position:"right","leaf-position":"top",decoration:"rounded-in"}},[t._v("Inline Right Ribbon")])],1),e("div",{staticClass:"ribbon-wrapper"},[e("q-ribbon",{attrs:{position:"right",decoration:"rounded-out"}},[t._v("Right Ribbon")])],1),e("div",{staticClass:"ribbon-wrapper avatar"},[e("q-ribbon",{attrs:{position:"right"}},[e("q-avatar",[e("img",{attrs:{src:"https://cdn.quasar.dev/img/avatar.png"}})])],1)],1),e("div",{staticClass:"ribbon-wrapper"},[e("q-ribbon",{attrs:{color:"purple","leaf-color":"purple","background-color":"orange",position:"right"}},[t._v("Hippy Ribbon")])],1),e("div",{staticClass:"ribbon-wrapper"},[e("q-ribbon",{attrs:{color:"yellow","leaf-color":"blue","background-color":"green",position:"right"}},[t._v("Different Leaf Color - Hippy Ribbon")])],1),e("div",{staticClass:"ribbon-wrapper"},[e("q-ribbon",{staticClass:"text-center",attrs:{size:"full"}},[t._v("Full Ribbon (.text-center)")])],1),e("div",{staticClass:"ribbon-wrapper"},[e("q-ribbon",{attrs:{size:"full"}},[e("marquee",[t._v("Let's Marquee!")])],1)],1),e("div",{staticClass:"ribbon-wrapper"},[e("q-ribbon",{staticClass:"text-right q-mt-md",attrs:{"leaf-position":"top",size:"full","leaf-color":"green",color:"green","background-color":"yellow"}},[t._v("Full Inverted Hippy Ribbon (.text-right)")])],1)])],1),e("q-card",{directives:[{name:"show",rawName:"v-show",value:t.exampleTypeHas("vertical"),expression:"exampleTypeHas('vertical')"}],staticClass:"q-my-lg q-py-md flat bordered",staticStyle:{width:"75%"}},[e("div",{staticClass:"ribbon-wrapper"},[e("q-ribbon",{staticClass:"border-radius",attrs:{color:"#616161","background-color":"#e0e0e0"}},[t._v('QRibbon (type="vertical")')])],1),e("q-separator",{staticClass:"q-mb-lg"}),e("div",{staticClass:"box-ribbon-wrapper q-py-md"},[e("div",{staticClass:"ribbon-wrapper"},[e("q-ribbon",{attrs:{type:"vertical",position:"top-left","leaf-position":"right"}},[t._v("Top Down Ribbon")])],1),e("div",{staticClass:"ribbon-wrapper"},[e("q-ribbon",{attrs:{type:"vertical",position:"bottom-left","leaf-position":"left"}},[t._v("Bottom Up Ribbon")])],1),e("div",{staticClass:"ribbon-wrapper move-50"},[e("q-ribbon",{attrs:{type:"vertical",position:"top-left","leaf-position":"right",decoration:"point-in"}},[t._v("Top Down Ribbon")])],1),e("div",{staticClass:"ribbon-wrapper move-50"},[e("q-ribbon",{attrs:{type:"vertical",position:"bottom-left","leaf-position":"left",decoration:"point-out"}},[t._v("Bottom Up Ribbon")])],1),e("div",{staticClass:"ribbon-wrapper move-100"},[e("q-ribbon",{attrs:{type:"vertical",position:"top-left","leaf-position":"right",decoration:"rounded-in"}},[t._v("Top Down Ribbon")])],1),e("div",{staticClass:"ribbon-wrapper move-100"},[e("q-ribbon",{attrs:{type:"vertical",position:"bottom-left","leaf-position":"left",decoration:"rounded-out"}},[t._v("Bottom Up Ribbon")])],1),e("div",{staticClass:"ribbon-wrapper"},[e("q-ribbon",{staticClass:"text-center",attrs:{type:"vertical",position:"right",size:"full","leaf-position":"left"}},[t._v("Full Ribbon (.text-center)")])],1)])],1),e("q-card",{directives:[{name:"show",rawName:"v-show",value:t.exampleTypeHas("corner"),expression:"exampleTypeHas('corner')"}],staticClass:"q-my-lg q-pt-md flat bordered",staticStyle:{width:"75%"}},[e("div",{staticClass:"ribbon-wrapper"},[e("q-ribbon",{staticClass:"border-radius",attrs:{color:"#616161","background-color":"#e0e0e0"}},[t._v('QRibbon (type="corner")')])],1),e("q-separator"),e("q-card-section",[e("div",{staticClass:"box-ribbon-wrapper"},[e("q-ribbon",{attrs:{position:"top-left",type:"corner"}},[t._v("Top Left")]),e("q-ribbon",{staticClass:"github-text",attrs:{position:"top-right",type:"corner",color:"white","background-color":"#5b5e63"}},[e("a",{attrs:{href:"#"}},[t._v("FORK ME ON GITHUB!")])]),e("q-ribbon",{staticClass:"qribbon-bottom",attrs:{position:"bottom-left",type:"corner"}},[e("span",{staticClass:"rotate-270"},[t._v("Bottom Left")])]),e("q-ribbon",{staticClass:"qribbon-bottom",attrs:{position:"bottom-right",type:"corner"}},[t._v("Bottom Right")])],1)])],1)],1)},i=[],a=(e("6762"),e("2fdb"),e("cff9")),n={name:"PageIndex",methods:{exampleTypeHas:function(t){return this.exampleTypes.includes(t)||this.exampleTypes.includes("all")}},data:function(){return{template:a["a"],exampleTypes:["all"]}}},s=n,l=(e("460c"),e("2877")),b=Object(l["a"])(s,r,i,!1,null,null,null);o["default"]=b.exports},"460c":function(t,o,e){"use strict";var r=e("67b9"),i=e.n(r);i.a},"67b9":function(t,o,e){},cff9:function(t,o,e){"use strict";o["a"]="QRibbon\n===\n\n> Please note, this is currently a work-in-progress (WIP).\n\nQRibbon is a [Quasar App Extension](https://quasar.dev/app-extensions/introduction). It allows you to display ribbons on your page.\n\n# Install\nTo add this App Extension to your Quasar application, run the following (in your Quasar app folder):\n```\nquasar ext add qribbon\n```\n\n# Uninstall\nTo remove this App Extension from your Quasar application, run the following (in your Quasar app folder):\n```\nquasar ext remove qribbon\n```\n\n# Describe\nYou can use `quasar describe QRibbon` (to be implemented before QRibbon v1 release)\n\n# Source\nCan be found [here](https://github.com/webnoob/app-extension-qribbon/).\n\n# Docs\nCan be found [here](https://webnoob.github.io/app-extension-qribbon/demo/dist/spa/#/).\n\n# Examples\nCan be found [here](https://webnoob.github.io/app-extension-qribbon/demo/dist/spa/#/examples).\n\n# Interactive Demo / QRibbon Builder\nCan be found [here](https://webnoob.github.io/app-extension-qribbon/demo/dist/spa/#/builder).\n\n# Demo (source) Project\nCan be found [here](https://github.com/webnoob/app-extension-qribbon/tree/master/demo).\n\n# QRibbon API\n\n## Vue Properties\n\n| Vue Property | Type | Description |\n| --- | --- | --- |\n| type | String | Defaults to `horizontal`. Acceptable options are `horizontal`, `corner`, `vertical` |\n| position | String | Acceptable strings are: <br/> Type==`horizontal`: `left`, `right`, `full`<br/> Type==`corner`or`vertical`: `top left`, `top right`, `bottom left`, `bottom right` |\n| color | Array | CSS Color for the text |\n| background-color | String | CSS Color for the background |\n| leaf-color | Boolean | CSS Color for the leaf |\n| leaf-position | String | Acceptable strings are: <br/> Type==`horizontal`: `top`, `bottom`<br/> Type==`vertical`: `left`, `right` |\n| size | String | Acceptable options are `full` to fill the container or empty for default. |\n| decoration | String | Defaults to nothing. Cannot be used with `corner` type ribbon. Acceptable options are `rounded-in`, `rounded-out`, `point-in`, `point-out`. |\n\n## Vue Slots\n| Slot Name | Description |\n| --- | --- |\n| default | Any content can be entered into the default slot and it will show in the ribbon. |\n\n---\nThis page created with [QMarkdown](https://quasarframework.github.io/app-extension-qmarkdown), another great Quasar App Extension.\n"}}]);