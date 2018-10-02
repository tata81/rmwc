webpackJsonp([6],{194:function(e,a,t){"use strict";function n(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function s(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?e:a}function c(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}Object.defineProperty(a,"__esModule",{value:!0}),t.d(a,"attributes",function(){return E});var o=t(0),l=t.n(o),r=t(31),m=t(224),p=t(227),u=(t.n(p),t(225)),i=(t.n(u),function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}()),E={},k=function(e){function a(e){n(this,a);var t=s(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.state={},t}return c(a,e),i(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("h1",null,"Icon Buttons"),l.a.createElement("blockquote",null,l.a.createElement("p",null,"Icon buttons allow users to take actions, and make choices, with a single tap.")),l.a.createElement("ul",null,l.a.createElement("li",null,"Module ",l.a.createElement("strong",null,"@rmwc/icon-button")),l.a.createElement("li",null,"Import styles:",l.a.createElement("ul",null,l.a.createElement("li",null,"import ",l.a.createElement("strong",null,"'@material/icon-button/dist/mdc.icon-button.css'"),";"))),l.a.createElement("li",null,"MDC Docs: ",l.a.createElement("a",{href:"https://material.io/develop/web/components/buttons/icon-buttons/"},"https://material.io/develop/web/components/buttons/icon-buttons/"))),l.a.createElement("h2",null,"Basic Usage"),l.a.createElement("p",null,l.a.createElement("code",null,"IconButton")," inherits from the ",l.a.createElement("code",null,"Icon")," component and can be passed icons in the same way."),l.a.createElement("div",{className:"example render-with-code"},l.a.createElement("div",{className:"run"},l.a.createElement(r.a,{icon:"star",label:"Rate this!"}),l.a.createElement(r.a,{icon:"https://www2.le.ac.uk/departments/law/images/twitter-follow-us-icon","aria-label":"Tweet it!"})),l.a.createElement("div",{className:"source"},l.a.createElement("pre",{className:"language-jsx"},l.a.createElement("code",{className:"language-jsx"},l.a.createElement("span",{className:"token keyword"},"import")," ",l.a.createElement("span",{className:"token punctuation"},"{")," IconButton ",l.a.createElement("span",{className:"token punctuation"},"}")," ",l.a.createElement("span",{className:"token keyword"},"from")," ",l.a.createElement("span",{className:"token string"},"'@rmwc/icon-button'"),l.a.createElement("span",{className:"token punctuation"},";"),"\n","\n",l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token punctuation"},"<"),"IconButton")," ",l.a.createElement("span",{className:"token attr-name"},"icon"),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},"="),l.a.createElement("span",{className:"token punctuation"},'"'),"star",l.a.createElement("span",{className:"token punctuation"},'"'))," ",l.a.createElement("span",{className:"token attr-name"},"label"),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},"="),l.a.createElement("span",{className:"token punctuation"},'"'),"Rate")," ",l.a.createElement("span",{className:"token attr-name"},'this!"')," ",l.a.createElement("span",{className:"token punctuation"},"/>")),"\n",l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token punctuation"},"<"),"IconButton"),"\n","  ",l.a.createElement("span",{className:"token attr-name"},"icon"),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},"="),l.a.createElement("span",{className:"token punctuation"},'"'),"https://www2.le.ac.uk/departments/law/images/twitter-follow-us-icon",l.a.createElement("span",{className:"token punctuation"},'"')),"\n","  ",l.a.createElement("span",{className:"token attr-name"},"aria-label"),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},"="),l.a.createElement("span",{className:"token punctuation"},'"'),"Tweet")," ",l.a.createElement("span",{className:"token attr-name"},'it!"'),"\n",l.a.createElement("span",{className:"token punctuation"},"/>")),"\n","\n")))),l.a.createElement("h2",null,"Usage as a Toggle"),l.a.createElement("p",null,"To use as a toggle, specify an additional toggled on state using 'onIcon'."),l.a.createElement("div",{className:"example render-with-code"},l.a.createElement("div",{className:"run"},l.a.createElement(r.a,{icon:"favorite_border",onIcon:"favorite"}),l.a.createElement(r.a,{checked:this.state.isChecked,onClick:function(){return e.setState({isChecked:!e.state.isChecked})},onIcon:"star",icon:"star_border"}),l.a.createElement(r.a,{onChange:function(e){return console.log(e.detail)},onIcon:"https://www2.le.ac.uk/departments/law/images/twitter-follow-us-icon",icon:"https://en.facebookbrand.com/wp-content/uploads/2016/05/flogo_rgb_hex-brc-site-250.png"}),l.a.createElement(r.a,{onIcon:l.a.createElement("div",{style:{background:"red",width:"24px",height:"24px"}}),icon:l.a.createElement("div",{style:{background:"green",width:"24px",height:"24px",borderRadius:"50%"}})})),l.a.createElement("div",{className:"source"},l.a.createElement("pre",{className:"language-jsx"},l.a.createElement("code",{className:"language-jsx"},l.a.createElement("span",{className:"token punctuation"},"{"),l.a.createElement("span",{className:"token comment"},"/* Uncontrolled */"),l.a.createElement("span",{className:"token punctuation"},"}"),"\n",l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token punctuation"},"<"),"IconButton"),"\n","  ",l.a.createElement("span",{className:"token attr-name"},"icon"),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},"="),l.a.createElement("span",{className:"token punctuation"},'"'),"favorite_border",l.a.createElement("span",{className:"token punctuation"},'"')),"\n","  ",l.a.createElement("span",{className:"token attr-name"},"onIcon"),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},"="),l.a.createElement("span",{className:"token punctuation"},'"'),"favorite",l.a.createElement("span",{className:"token punctuation"},'"')),"\n",l.a.createElement("span",{className:"token punctuation"},"/>")),"\n","\n",l.a.createElement("span",{className:"token punctuation"},"{"),l.a.createElement("span",{className:"token comment"},"/* Controlled */"),l.a.createElement("span",{className:"token punctuation"},"}"),"\n",l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token punctuation"},"<"),"IconButton"),"\n","  ",l.a.createElement("span",{className:"token attr-name"},"checked"),l.a.createElement("span",{className:"token script language-javascript"},l.a.createElement("span",{className:"token punctuation"},"="),l.a.createElement("span",{className:"token punctuation"},"{"),l.a.createElement("span",{className:"token keyword"},"this"),l.a.createElement("span",{className:"token punctuation"},"."),"state",l.a.createElement("span",{className:"token punctuation"},"."),"isChecked",l.a.createElement("span",{className:"token punctuation"},"}")),"\n","  ",l.a.createElement("span",{className:"token attr-name"},"onClick"),l.a.createElement("span",{className:"token script language-javascript"},l.a.createElement("span",{className:"token punctuation"},"="),l.a.createElement("span",{className:"token punctuation"},"{"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token punctuation"},")")," ",l.a.createElement("span",{className:"token operator"},"="),l.a.createElement("span",{className:"token operator"},">")," ",l.a.createElement("span",{className:"token keyword"},"this"),l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token function"},"setState"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token punctuation"},"{"),"isChecked",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token operator"},"!"),l.a.createElement("span",{className:"token keyword"},"this"),l.a.createElement("span",{className:"token punctuation"},"."),"state",l.a.createElement("span",{className:"token punctuation"},"."),"isChecked",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},")"),l.a.createElement("span",{className:"token punctuation"},"}")),"\n","  ",l.a.createElement("span",{className:"token attr-name"},"onIcon"),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},"="),l.a.createElement("span",{className:"token punctuation"},'"'),"star",l.a.createElement("span",{className:"token punctuation"},'"')),"\n","  ",l.a.createElement("span",{className:"token attr-name"},"icon"),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},"="),l.a.createElement("span",{className:"token punctuation"},'"'),"star_border",l.a.createElement("span",{className:"token punctuation"},'"')),"\n",l.a.createElement("span",{className:"token punctuation"},"/>")),"\n","\n",l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token punctuation"},"<"),"IconButton"),"\n","  ",l.a.createElement("span",{className:"token attr-name"},"onChange"),l.a.createElement("span",{className:"token script language-javascript"},l.a.createElement("span",{className:"token punctuation"},"="),l.a.createElement("span",{className:"token punctuation"},"{"),l.a.createElement("span",{className:"token punctuation"},"("),"evt",l.a.createElement("span",{className:"token punctuation"},")")," ",l.a.createElement("span",{className:"token operator"},"="),l.a.createElement("span",{className:"token operator"},">")," console",l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token function"},"log"),l.a.createElement("span",{className:"token punctuation"},"("),"evt",l.a.createElement("span",{className:"token punctuation"},"."),"detail",l.a.createElement("span",{className:"token punctuation"},")"),l.a.createElement("span",{className:"token punctuation"},"}")),"\n","  ",l.a.createElement("span",{className:"token attr-name"},"onIcon"),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},"="),l.a.createElement("span",{className:"token punctuation"},'"'),"https://www2.le.ac.uk/departments/law/images/twitter-follow-us-icon",l.a.createElement("span",{className:"token punctuation"},'"')),"\n","  ",l.a.createElement("span",{className:"token attr-name"},"icon"),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},"="),l.a.createElement("span",{className:"token punctuation"},'"'),"https://en.facebookbrand.com/wp-content/uploads/2016/05/flogo_rgb_hex-brc-site-250.png",l.a.createElement("span",{className:"token punctuation"},'"')),"\n",l.a.createElement("span",{className:"token punctuation"},"/>")),"\n","\n",l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token punctuation"},"<"),"IconButton"),"\n","  ",l.a.createElement("span",{className:"token attr-name"},"onIcon"),l.a.createElement("span",{className:"token script language-javascript"},l.a.createElement("span",{className:"token punctuation"},"="),l.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ",l.a.createElement("span",{className:"token operator"},"<"),"div style",l.a.createElement("span",{className:"token punctuation"},"="),l.a.createElement("span",{className:"token punctuation"},"{"),l.a.createElement("span",{className:"token punctuation"},"{")," background",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'red'"),l.a.createElement("span",{className:"token punctuation"},",")," width",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'24px'"),l.a.createElement("span",{className:"token punctuation"},",")," height",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'24px'"),l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},"}"))," ",l.a.createElement("span",{className:"token punctuation"},"/>")),"\n","  ",l.a.createElement("span",{className:"token punctuation"},"}"),"\n","  icon",l.a.createElement("span",{className:"token operator"},"="),l.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ",l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token punctuation"},"<"),"div")," ",l.a.createElement("span",{className:"token attr-name"},"style"),l.a.createElement("span",{className:"token script language-javascript"},l.a.createElement("span",{className:"token punctuation"},"="),l.a.createElement("span",{className:"token punctuation"},"{"),l.a.createElement("span",{className:"token punctuation"},"{")," background",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'green'"),l.a.createElement("span",{className:"token punctuation"},",")," width",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'24px'"),l.a.createElement("span",{className:"token punctuation"},",")," height",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'24px'"),l.a.createElement("span",{className:"token punctuation"},",")," borderRadius",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'50%'")," ",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},"}"))," ",l.a.createElement("span",{className:"token punctuation"},"/>")),"\n","  ",l.a.createElement("span",{className:"token punctuation"},"}"),"\n",l.a.createElement("span",{className:"token operator"},"/"),l.a.createElement("span",{className:"token operator"},">"),"\n")))),l.a.createElement("div",{className:"example render-only"},l.a.createElement("div",{className:"run"},l.a.createElement(m.a,{docs:[p,u],component:r.a,displayName:"IconButton",composes:["Icon"]}))))}}]),a}(l.a.Component);a.default=k},224:function(e,a,t){"use strict";function n(e){if(Array.isArray(e)){for(var a=0,t=Array(e.length);a<e.length;a++)t[a]=e[a];return t}return Array.from(e)}function s(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function c(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?e:a}function o(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}t.d(a,"a",function(){return p});var l=t(0),r=(t.n(l),function(){function e(e,a){var t=[],n=!0,s=!1,c=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(t.push(o.value),!a||t.length!==a);n=!0);}catch(e){s=!0,c=e}finally{try{!n&&l.return&&l.return()}finally{if(s)throw c}}return t}return function(a,t){if(Array.isArray(a))return a;if(Symbol.iterator in Object(a))return e(a,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()),m=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}(),p=function(e){function a(e){s(this,a);var t=c(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.flatDocs=Object.values(e.docs).reduce(function(e,a){return e.concat(a)},[]),t}return o(a,e),m(a,[{key:"findDocDef",value:function(e){return this.flatDocs.find(function(a){return a.displayName===e})}},{key:"renderRaw",value:function(e){return e.split("\n").map(function(e,a){return l.createElement(l.Fragment,{key:a},0!==a&&l.createElement("br",null),e.split("  ").map(function(e,a){return l.createElement(l.Fragment,{key:a},0!==a&&l.createElement(l.Fragment,null,"\xa0\xa0"),e)}))})}},{key:"getComposedDefs",value:function(e){var a=this;return e.map(function(e){return a.findDocDef(e)}).filter(Boolean).reduce(function(e,a){return Object.assign({},a,e,{props:a.props||e.props?Object.assign({},a.props||{},e.props||{}):null})},{})}},{key:"render",value:function(){var e=this,a=this.props,t=a.displayName,s=a.composes,c=void 0===s?[]:s,o=this.getComposedDefs([t].concat(n(c)));return l.createElement("div",{className:"document-component"},l.createElement("h2",null,t),o&&!!o.description&&l.createElement("p",null,o.description),o&&o.props&&l.createElement("div",null,l.createElement("h3",null,"Props"),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"Name"),l.createElement("th",null,"Type"),l.createElement("th",null,"Default"),l.createElement("th",null,"Description"))),l.createElement("tbody",null,Object.entries(o.props).map(function(a,t){var n=r(a,2),s=n[0],c=n[1];return l.createElement("tr",{key:t},l.createElement("td",{className:c.required?"required":""},l.createElement("code",null,s)),l.createElement("td",null,l.createElement("code",null,c.flowType&&e.renderRaw(c.flowType.raw||c.flowType.name||""))),l.createElement("td",null,c.defaultValue?l.createElement("code",null,c.defaultValue.value):l.createElement("code",null,"undefined")),l.createElement("td",null,c.description||""))})))))}}]),a}(l.Component)},225:function(e,a){e.exports=[{description:"",displayName:"IconRoot",methods:[]},{description:"An Icon component. Most of these options can be set once globally, read the documentation on Provider for more info.",displayName:"Icon",methods:[],props:{icon:{flowType:{name:"ReactNode",raw:"React.Node"},required:!1,description:"The icon to use. This can be a string for a font icon, a url, or whatever the selected strategy needs."},iconOptions:{flowType:{name:"IconOptionsT"},required:!1,description:"Additional Icon Options. See the Icon component documentation."}},context:{RMWCOptions:{type:{name:"object"},required:!1}}}]},227:function(e,a){e.exports=[{description:"",displayName:"IconButtonIcon",methods:[{name:"classNames",docblock:null,modifiers:[],params:[{name:"props",type:{name:"intersection",raw:"{\n  on?: boolean\n} & IconPropsT",elements:[{name:"signature",type:"object",raw:"{\n  on?: boolean\n}",signature:{properties:[{key:"on",value:{name:"boolean",required:!1}}]}},{name:"IconPropsT"}],alias:"IconButtonIconPropsT"}}],returns:null}]},{description:"",displayName:"IconButton",methods:[],props:{checked:{flowType:{name:"boolean"},required:!1,description:"Controls the on / off state of the a toggleable button."},onChange:{flowType:{name:"signature",type:"function",raw:"(evt: CustomEventT<{ isOn: boolean }>) => mixed",signature:{arguments:[{name:"evt",type:{name:"CustomEventT",elements:[{name:"signature",type:"object",raw:"{ isOn: boolean }",signature:{properties:[{key:"isOn",value:{name:"boolean",required:!0}}]}}],raw:"CustomEventT<{ isOn: boolean }>"}}],return:{name:"mixed"}}},required:!1,description:"An onChange callback that receives a custom event."},disabled:{flowType:{name:"boolean"},required:!1,description:"Makes the button disabled"},onIcon:{flowType:{name:"ReactNode",raw:"React.Node"},required:!1,description:"If specified, renders a toggle with this icon as the on state."},onIconOptions:{flowType:{name:"IconOptionsT"},required:!1,description:"Options for the onIcon"}}}]}});
//# sourceMappingURL=6.8c08f188.chunk.js.map