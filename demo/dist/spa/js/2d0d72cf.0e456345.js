(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0d72cf"],{7660:function(o,t,e){"use strict";e.r(t);var l=function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("q-page",{staticClass:"row justify-center items-baseline qribbon-builder"},[e("q-card",{staticClass:"q-my-lg q-py-md flat bordered",staticStyle:{"max-width":"800px",width:"90%"}},[e("div",{staticClass:"ribbon-wrapper"},[e("q-ribbon",{staticClass:"border-radius",attrs:{position:"left",color:"#616161","background-color":"#e0e0e0"}},[o._v("QRibbon Builder")])],1),e("q-separator"),e("q-card-section",[e("q-ribbon",{staticClass:"q-pb-md",attrs:{position:o.getPosition,type:o.type,color:o.color,"background-color":o.backgroundColor,"leaf-color":o.leafColor,"leaf-position":o.leafPosition,size:o.full?"full":void 0,decoration:o.decoration}},[o._v("\n        "+o._s(o.content)+"\n      ")]),e("div",{staticClass:"row justify-around q-mt-lg gt-xs"},[e("div",{staticClass:"text-center"},[o._v("\n          Text Color\n          "),e("q-color",{attrs:{"no-header":"","no-footer":""},model:{value:o.color,callback:function(t){o.color=t},expression:"color"}})],1),e("div",{staticClass:"text-center"},[o._v("\n          Background Color\n          "),e("q-color",{attrs:{"no-header":"","no-footer":""},model:{value:o.backgroundColor,callback:function(t){o.backgroundColor=t},expression:"backgroundColor"}})],1),e("div",{staticClass:"text-center"},[o._v("\n          Leaf Color\n          "),e("q-color",{attrs:{"no-header":"","no-footer":""},model:{value:o.leafColor,callback:function(t){o.leafColor=t},expression:"leafColor"}})],1)]),e("div",{staticClass:"row justify-around q-mt-lg xs"},[e("q-input",{staticClass:"col-12 q-mt-md",attrs:{label:"Text Color"},scopedSlots:o._u([{key:"append",fn:function(){return[e("q-icon",{staticClass:"cursor-pointer",attrs:{name:"colorize"}},[e("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[e("q-color",{attrs:{"no-header":"","no-footer":""},model:{value:o.color,callback:function(t){o.color=t},expression:"color"}})],1)],1)]},proxy:!0}]),model:{value:o.color,callback:function(t){o.color=t},expression:"color"}}),e("q-input",{staticClass:"col-12",attrs:{label:"Background Color"},scopedSlots:o._u([{key:"append",fn:function(){return[e("q-icon",{staticClass:"cursor-pointer",attrs:{name:"colorize"}},[e("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[e("q-color",{attrs:{"no-header":"","no-footer":""},model:{value:o.backgroundColor,callback:function(t){o.backgroundColor=t},expression:"backgroundColor"}})],1)],1)]},proxy:!0}]),model:{value:o.backgroundColor,callback:function(t){o.backgroundColor=t},expression:"backgroundColor"}}),e("q-input",{staticClass:"col-12",attrs:{label:"Leaf Color"},scopedSlots:o._u([{key:"append",fn:function(){return[e("q-icon",{staticClass:"cursor-pointer",attrs:{name:"colorize"}},[e("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[e("q-color",{attrs:{"no-header":"","no-footer":""},model:{value:o.leafColor,callback:function(t){o.leafColor=t},expression:"leafColor"}})],1)],1)]},proxy:!0}]),model:{value:o.leafColor,callback:function(t){o.leafColor=t},expression:"leafColor"}})],1),e("div",{staticClass:"row justify-around"},[e("q-select",{staticClass:"col-xs-12",attrs:{label:"Type","map-options":"","emit-value":"",options:[{value:"horizontal",label:"Horizontal (Default)"},{value:"vertical",label:"Vertical"},{value:"corner",label:"Corner"}]},model:{value:o.type,callback:function(t){o.type=t},expression:"type"}}),e("q-select",{staticClass:"col-xs-12",attrs:{label:"Position","map-options":"","emit-value":"",options:o.positionOptions},model:{value:o.position,callback:function(t){o.position=t},expression:"position"}}),o.isCorner?o._e():e("q-select",{staticClass:"col-xs-12",attrs:{label:"Leaf Position","map-options":"","emit-value":"",options:o.leafPositionOptions},model:{value:o.leafPosition,callback:function(t){o.leafPosition=t},expression:"leafPosition"}}),o.isCorner?o._e():e("q-select",{staticClass:"col-xs-12",attrs:{label:"Decoration","map-options":"","emit-value":"",options:[{value:null,label:"Default"},{value:"rounded-in",label:"Rounded In"},{value:"rounded-out",label:"Rounded Out"},{value:"point-in",label:"Point In"},{value:"point-out",label:"Point Out"}]},model:{value:o.decoration,callback:function(t){o.decoration=t},expression:"decoration"}}),o.isCorner?o._e():e("q-checkbox",{staticClass:"q-pt-xs",attrs:{label:"Full?"},model:{value:o.full,callback:function(t){o.full=t},expression:"full"}})],1)],1),e("q-separator"),e("q-card-section",[e("q-input",{ref:"componentInput",staticClass:"col-12",attrs:{value:o.componentOutput,type:"textarea"},scopedSlots:o._u([{key:"prepend",fn:function(){return[e("q-icon",{attrs:{name:"file_copy"},on:{click:o.copyComponentText}})]},proxy:!0},{key:"append",fn:function(){return[e("q-icon",{attrs:{name:"refresh"},on:{click:o.reset}})]},proxy:!0}])})],1)],1)],1)},a=[];e("f751"),e("7514");function n(){return{positionVal:"left",leafPositionVal:"bottom",type:"horizontal",color:"#ffffff",backgroundColor:"#027BE3",leafColor:"",content:"My Ribbon",full:!1,decoration:null}}var i={name:"InteractiveDemo",computed:{positionOptions:function(){switch(this.type){case"corner":case"vertical":return this.full&&"vertical"===this.type?[{value:"left",label:"Left"},{value:"right",label:"Right"}]:[{value:"top-left",label:"Top Left"},{value:"top-right",label:"Top Right"},{value:"bottom-left",label:"Bottom Left"},{value:"bottom-right",label:"Bottom Right"}];default:return[{value:"left",label:"Left"},{value:"right",label:"Right"}]}},leafPositionOptions:function(){switch(this.type){case"vertical":return[{value:"left",label:"Left"},{value:"right",label:"Right"}];default:return[{value:"top",label:"Top"},{value:"bottom",label:"Bottom"}]}},leafPosition:{get:function(){return this.getLeafPosition},set:function(o){this.leafPositionVal=o}},position:{get:function(){return this.getPosition},set:function(o){this.positionVal=o}},getLeafPosition:function(){var o=this,t=this.leafPositionOptions,e=t.find(function(t){return console.log(t.value),t.value===o.leafPositionVal});return e?e.value:t[0].value},getPosition:function(){var o=this,t=this.positionOptions,e=t.find(function(t){return console.log(t.value),t.value===o.positionVal});return e?e.value:t[0].value},componentOutput:function(){var o=this.leafColor?' leaf-color="'.concat(this.leafColor,'"'):"",t="horizontal"===this.type?"":' type="'.concat(this.type,'"'),e=this.full?' size="full"':"",l=this.decoration?' decoration="'.concat(this.decoration,'"'):"";return"<q-ribbon".concat(t,' position="').concat(this.getPosition,'" color="').concat(this.color,'" background-color="').concat(this.backgroundColor,'" leaf-position="').concat(this.leafPosition,'"').concat(o).concat(e).concat(l,"></q-ribbon>")},isCorner:function(){return"corner"===this.type}},methods:{copyComponentText:function(){this.$refs.componentInput.select(),document.execCommand("copy"),this.$q.notify({message:"Component has been copied to clipboard.",color:"primary",position:"top",actions:[{icon:"close",color:"white"}],timeout:2e3})},reset:function(){Object.assign(this.$data,n())}},data:function(){return n()}},r=i,s=e("2877"),c=Object(s["a"])(r,l,a,!1,null,null,null);t["default"]=c.exports}}]);