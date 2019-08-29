(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["d37bdcfc"],{"45ab":function(e){e.exports=JSON.parse('{"type":"component","props":{"type":{"type":"String","desc":"Tells the component which type of ribbon is to be used","default":"horizontal","values":["horizontal","corner","vertical"],"examples":["type=\\"horizontal\\"","type=\\"vertical\\""]},"position":{"type":"String","desc":"Tells the component which position is to be used. If `horizontal`, then only `left` or `right` are applicable. Otherwise, the remaining positions can be used with `vertical` or `corner`","default":"`left` or `top-left`","values":["left","right","full","top left","top right","bottom left","bottom right"],"examples":["position=\\"left\\"","position=\\"top right\\""]},"color":{"type":"String","desc":"Set the text color using any CSS color, Quasar Color or CSS var pointing to a color","default":"white","examples":["color=\\"orange-8\\"","color=\\"--blue-grey-6\\""]},"background-color":{"type":"String","desc":"Set the background color using any CSS color, Quasar Color or CSS var pointing to a color","default":"#027BE3","examples":["background-color=\\"orange-8\\"","background-color=\\"--blue-grey-6\\""]},"leaf-color":{"type":"String","desc":"CSS Color for the leaf","default":"Auto-shaded based on `background-color`","examples":["leaf-color=\\"#6A687A\\"","leaf-color=\\"#536271\\""]},"leaf-position":{"type":"String","desc":"For `horizontal` use `top` or `bottom`, for `vertical` use `left` or `right`","default":"`bottom` or `left`","values":["top","bottom","left","right"],"examples":["leaf-position=\\"bottom\\"","leaf-position=\\"left\\""]},"size":{"type":"String","desc":"Use `full` to full the container","default":"null","values":["null","full"],"examples":["size=\\"full\\""]},"decoration":{"type":"String","desc":"The type of decoration to use with the ribbon. Cannot be used with `corner` type ribbon","default":"null","values":["null","rounded-in","rounded-out","point-in","point-out"],"examples":["decoration=\\"rounded-in\\"","decoration=\\"point-out\\""]},"inline":{"type":"Boolean","desc":"Used when 2 QRibbons are required to be inline (on left and right along the same X axis). Both QRibbon\'s must be wrapped with the following: `<div class=\\"flex justify-between\\"></div>`"},"glow":{"type":"Boolean","desc":"Add a moving glow to the ribbon"},"glow-speed":{"type":"Number","desc":"The duration (in seconds) it takes for the animation to complete","default":"1.5","examples":[":glow-speed=\\"3\\"",":glow-speed=\\"1.75\\""]},"glow-iteration-count":{"type":"String","desc":"A number or string representing how many times the animation will run","default":"infinite","examples":["glow-iteration-count=\\"infinite\\"","glow-iteration-count=\\"10\\""]}},"slots":{"default":{"desc":"Any content can be entered into the default slot and it will show in the ribbon"}}}')},"8b24":function(e,o,t){"use strict";t.r(o);var n=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("q-page",{staticClass:"row justify-center"},[t("q-card",{staticClass:"q-my-lg q-pt-md flat bordered",staticStyle:{width:"75%"}},[t("q-card-section",[t("q-markdown",{attrs:{src:e.template}}),t("component-api",{attrs:{title:"QRibbon API",json:e.json}}),t("q-markdown",[e._v("\n# Donate\nIf you appreciate the work that went into this App Extension, please consider [donating to Quasar](https://donate.quasar.dev).\n\n---\nThis page created with [QMarkdown](https://quasarframework.github.io/app-extension-qmarkdown), another great Quasar App Extension.\n    ")]),t("q-page-scroller",{attrs:{position:"bottom-right","scroll-offset":150,offset:[18,18]}},[t("q-btn",{attrs:{fab:"",icon:"keyboard_arrow_up",color:"primary"}})],1)],1)],1)],1)},a=[],r=t("cff9"),i=t("45ab"),s={name:"PageIndex",data:function(){return{template:r["a"],json:i}}},l=s,p=t("2877"),u=Object(p["a"])(l,n,a,!1,null,null,null);o["default"]=u.exports},cff9:function(e,o,t){"use strict";o["a"]="QRibbon (@quasar/qribbon)\n===\n\n> Please note, this is currently a work-in-progress (WIP).\n\nQRibbon is a [Quasar App Extension](https://quasar.dev/app-extensions/introduction). It allows you to display ribbons on your page.\n\n# Install\nTo add this App Extension to your Quasar application, run the following (in your Quasar app folder):\n```\nquasar ext add @quasar/qribbon\n```\n\n# Uninstall\nTo remove this App Extension from your Quasar application, run the following (in your Quasar app folder):\n```\nquasar ext remove @quasar/qribbon\n```\n\n# Describe\nYou can use `quasar describe QRibbon`\n\n# Source\nCan be found [here](https://github.com/quasarframework/app-extension-qribbon/).\n\n# Docs\nCan be found [here](https://quasarframework.github.io/app-extension-qribbon/).\n\n# Examples\nCan be found [here](https://quasarframework.github.io/app-extension-qribbon/examples).\n\n# Interactive Demo / QRibbon Builder\nCan be found [here](https://quasarframework.github.io/app-extension-qribbon/builder).\n\n# Demo (source) Project\nCan be found [here](https://github.com/quasarframework/app-extension-qribbon/tree/master/demo).\n"}}]);