(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9628)}])},9628:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return M}});var r=n(5893),i=n(6256),a=n(6257),o=n(7294),l=n(2142),c=n(784),s=n(944),u=n(8616),d=function(e){var t=e.users,n=(0,o.useState)(1),i=(n[0],n[1]);(0,o.useEffect)((function(){var e=setInterval((function(){i((function(e){return e+1}))}),1e3);return function(){return clearInterval(e)}}),[]);var a=function(e){var t=(0,l.Z)({start:e,end:Date.now()});return(0,c.Z)(t,{locale:s.Z,delimiter:""})+"\u7d4c\u904e"};return(null===t||void 0===t?void 0:t.length)?(0,r.jsx)("ul",{className:"space-y-2 hidden lg:block",children:t.map((function(e){return(0,r.jsxs)("li",{children:[(0,r.jsxs)("p",{className:"text-sm",children:[(0,r.jsx)(u.dy,{size:13,emoji:e.emoji,native:!0})," ",e.name]}),(0,r.jsx)("p",{className:"text-xs opacity-40",children:e.startAt&&a(e.startAt)})]},e.id)}))}):null},f=n(6671),m=function(){var e=(0,o.useState)(),t=e[0],n=e[1];return(0,o.useEffect)((function(){n(new Date);var e=setInterval((function(){n(new Date)}),1e3);return function(){clearInterval(e)}}),[]),(0,r.jsx)("p",{className:"text-sm hidden lg:block",children:t&&(0,f.Z)(t,"M\u6708d\u65e5(eee) HH\u6642mm\u5206ss\u79d2",{locale:s.Z})})},x=n(7536),p=n(9218),v=n(6096),h=n(8386),b=n(6159),j=n(9435),y=n(6622),g=n(5690),w=function(){(0,b.XB)(j.I8).then((function(){g.ZP.success("\u300c".concat(y.T.title,"\u300d\u3078\u3088\u3046\u3053\u305d\uff01"),{icon:"\ud83d\udc4b\ud83c\udffb"})}))},N=function(){(0,b.w7)(j.I8)},k=n(4051),O=n.n(k),S=n(1294);n(8100);function C(e,t,n,r,i,a,o){try{var l=e[a](o),c=l.value}catch(s){return void n(s)}l.done?t(c):Promise.resolve(c).then(r,i)}function P(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function o(e){C(a,r,i,o,l,"next",e)}function l(e){C(a,r,i,o,l,"throw",e)}o(void 0)}))}}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){E(e,t,n[t])}))}return e}(function(){var e=P(O().mark((function e(t,n){var r,i;return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,S.JU)((0,S.hJ)(j.db,"rooms")),i=V({},t,{rid:r.id,createdAt:Date.now(),users:[n.id]}),e.next=4,(0,S.pl)(r,V({},i,{rid:r.id,createdAt:Date.now()}));case 4:return e.abrupt("return",r.id);case 5:case"end":return e.stop()}}),e)})))})(),function(){var e=P(O().mark((function e(t){var n,r;return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,S.JU)(j.db,"rooms/".concat(t)),e.next=3,(0,S.QT)(n);case 3:return r=e.sent.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))}();var _=function(){var e=P(O().mark((function e(t,n){var r,i;return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,S.hJ)(j.db,"rooms/".concat(t,"/messages")),i=V({},n,{createdAt:Date.now()}),e.abrupt("return",(0,S.ET)(r,i));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){I(e,t,n[t])}))}return e}function T(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var F=function(e){var t=e.isVisible,n=(0,x.cI)({mode:"onChange"}),i=n.handleSubmit,a=n.register,l=n.reset,c=n.getValues,s=n.formState.isValid,u=a("body",{required:!0}),d=u.ref,f=T(u,["ref"]),m=(0,h.a)(),b=(0,o.useRef)();if((0,p.y1)("f",(function(e){var t;null===(t=b.current)||void 0===t||t.focus(),e.preventDefault()})),(0,o.useEffect)((function(){var e;b.current&&(null===(e=b.current)||void 0===e||e.focus())}),[t]),void 0===m)return null;if(null===m)return(0,r.jsxs)("p",{className:"mb-6",children:[(0,r.jsx)("button",{onClick:w,className:"text-pink-600",children:"\u533f\u540d\u3067\u53c2\u52a0"}),"\u3057\u3066\u30b3\u30e1\u30f3\u30c8\u3059\u308b"]});var j=function(e){_("global",{name:m.name,emoji:m.emoji,body:e.body}),l()};return(0,r.jsxs)("form",{className:"mb-1 text-right",onSubmit:i(j),children:[(0,r.jsx)(v.Z,D({onKeyDown:function(e){e.metaKey&&"Enter"===e.key&&s&&j(c())},placeholder:"\u3061\u3087\u3063\u3068\u4e00\u606f...\u2615\ufe0f",autoFocus:!0,className:"bg-transparent w-full resize-none rounded"},f,{ref:function(e){d(e),b.current=e}})),(0,r.jsxs)("button",{disabled:!s,className:"text-sm disabled:opacity-40 disabled:text-white text-green-400 text-glow",type:"submit",children:[(0,r.jsx)("span",{className:"emoji",children:"\u23ce"}),"(Cmd + Enter)"]})]})},Z=n(7881),A=n(3731),J=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")};function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var q=function(){var e=(0,o.useState)(),t=e[0],n=e[1],i=(0,h.a)();return(0,o.useEffect)((function(){return(0,S.cf)(function(e){var t=(0,S.hJ)(j.db,"rooms/".concat(e,"/messages"));return(0,S.IO)(t,(0,S.Xo)("createdAt","desc"))}("global"),(function(e){var t=e.docs.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){z(e,t,n[t])}))}return e}({id:e.id},e.data())}));n(t)}))}),[]),void 0===t?null:(0,r.jsx)("div",{className:"flex-1 overflow-auto",children:(null===t||void 0===t?void 0:t.length)?(0,r.jsx)("ul",{className:"space-y-4",children:null===t||void 0===t?void 0:t.map((function(e){var t;return(0,r.jsxs)("li",{children:[(0,r.jsxs)("div",{className:"flex gap-4",children:[(0,r.jsx)("p",{className:"break-words flex-1",children:(0,r.jsx)(A.Z,{children:e.body})}),(0,r.jsxs)("button",{onClick:function(){i?function(e,t){var n=(0,S.JU)(j.db,"rooms/".concat(e,"/messages/").concat(t));(0,S.r7)(n,{likeCount:(0,S.nP)(1)})}("global",e.id):alert("\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u306d")},className:J("text-sm whitespace-nowrap text-gray-500",!e.likeCount&&"opacity-40"),children:["\u2615\ufe0f ",null===(t=e.likeCount)||void 0===t?void 0:t.toLocaleString()]})]}),e.emoji&&e.name&&(0,r.jsxs)("p",{className:"flex mt-1 items-center space-x-1 flex-wrap text-xs opacity-60",children:[(0,r.jsx)(u.dy,{native:!0,size:16,emoji:e.emoji}),(0,r.jsx)("span",{children:e.name}),(0,r.jsx)("span",{children:(0,Z.Z)(e.createdAt,{addSuffix:!0,locale:s.Z})})]})]},e.id)}))}):(0,r.jsx)("p",{children:"Empty...\ud83d\ude34"})})},U=(n(7898),n(162)),W=n(6727);function R(e){var t=e.isOpen,n=e.onClose,i=e.title,a=e.children;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(W.uT,{appear:!0,show:t,as:o.Fragment,children:(0,r.jsx)(W.Vq,{as:"div",className:"fixed inset-0 z-10 overflow-y-auto",onClose:n,children:(0,r.jsxs)("div",{className:"min-h-screen px-4 text-center",children:[(0,r.jsx)(W.uT.Child,{as:o.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,r.jsx)(W.Vq.Overlay,{className:"fixed inset-0"})}),(0,r.jsx)("span",{className:"inline-block h-screen align-middle","aria-hidden":"true",children:"\u200b"}),(0,r.jsx)(W.uT.Child,{as:o.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,r.jsxs)("div",{className:"text-white inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-black shadow-xl rounded-2xl",children:[(0,r.jsx)(W.Vq.Title,{as:"h3",className:"text-lg leading-6 text-center mb-6 font-bold",children:i}),a]})})]})})})})}function X(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){X(e,t,n[t])}))}return e}var B=function(){var e=(0,o.useState)(!1),t=e[0],n=e[1],i=(0,o.useState)(!1),a=i[0],l=i[1],c=(0,h.a)(),s=(0,x.cI)(),d=s.handleSubmit,f=s.register,m=s.watch,p=s.control,v=s.formState.isValid;if(!c)return null;return(0,r.jsxs)("div",{children:[(0,r.jsx)("button",{title:"\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u7de8\u96c6",className:"px-2",onClick:function(){return n(!0)},children:"\ud83d\udc64"}),(0,r.jsxs)(R,{title:"\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb",isOpen:t,onClose:function(){return n(!1)},children:[(0,r.jsx)("div",{className:"mb-6",children:(0,r.jsxs)("form",{onSubmit:d((function(e){(0,U.Nq)(c.id,e)})),className:"flex gap-4",children:[(0,r.jsx)("button",{type:"button",onClick:function(){return l((function(e){return!e}))},className:"w-14 h-14 border-gray-800 border-2 grid place-content-center rounded-lg",children:(0,r.jsx)(u.dy,{size:32,emoji:m("emoji")||c.emoji})}),(0,r.jsx)("input",H({type:"text",autoComplete:"off",className:"flex-1 min-w-0 bg-transparent rounded border-gray-800 border-2",defaultValue:c.name},f("name",{required:!0}))),(0,r.jsx)("button",{disabled:!v,children:"\u66f4\u65b0"})]})}),a&&(0,r.jsx)("div",{children:(0,r.jsx)(x.Qr,{name:"emoji",control:p,render:function(e){return(0,r.jsx)(u.cW,{theme:"dark",title:"\u30a2\u30a4\u30b3\u30f3\u3092\u9078\u3076",emoji:"point_up",onSelect:function(t){return e.field.onChange(t.id)}})}})}),(0,r.jsxs)("div",{className:"flex items-center justify-between mt-6",children:[(0,r.jsx)("button",{onClick:function(){return n(!1)},children:"\u9589\u3058\u308b"}),(0,r.jsx)("button",{className:"text-sm text-gray-700 ml-auto block",onClick:N,children:"\u30ed\u30b0\u30a2\u30a6\u30c8"})]})]})]})},K=function(e){var t,n,i,a,o,l=e.playerState,c=e.target,s=function(){null===c||void 0===c||c.playVideo()},u=function(){null===c||void 0===c||c.pauseVideo()},d=function(){null===c||void 0===c||c.previousVideo()},f=function(){null===c||void 0===c||c.nextVideo()};return(0,p.y1)("right",f),(0,p.y1)("left",d),(0,p.y1)("space",(function(){1===(null===c||void 0===c?void 0:c.getPlayerState())?u():s()})),(0,r.jsxs)("div",{className:"flex items-center space-x-1 py-2",children:[1!==l&&(0,r.jsx)("button",{className:"flex py-2 px-1 text-2xl emoji",onClick:s,children:"\u25b6\ufe0e"}),1===l&&(0,r.jsx)("button",{className:"flex py-2 px-1 emoji text-2xl",onClick:u,children:"\u23f8"}),(0,r.jsx)("button",{className:"flex py-2 px-1 emoji text-2xl",onClick:d,children:"\u23ea"}),(0,r.jsx)("button",{className:"flex py-2 px-1 emoji text-2xl",onClick:f,children:"\u23e9"}),c&&(0,r.jsxs)("a",{className:"pl-2 flex-1 min-w-0",href:null===(t=c.playerInfo)||void 0===t?void 0:t.videoUrl,rel:"noreferrer",target:"_blank",children:[(0,r.jsx)("h2",{className:"font-bold truncate",children:null===(n=c.playerInfo)||void 0===n||null===(i=n.videoData)||void 0===i?void 0:i.title}),(0,r.jsx)("p",{className:"text-sm truncate",children:null===(a=c.playerInfo)||void 0===a||null===(o=a.videoData)||void 0===o?void 0:o.author})]})]})},L=n(5406),Q=function(e){var t=e.onReady,n=e.onStateChange;return(0,r.jsxs)("div",{className:"fixed inset-0 w-full h-full flex items-center justify-items-center bg-black",children:[(0,r.jsx)(L.Z,{opts:{height:"390",width:"640",playerVars:{listType:"playlist",list:"PL0DVChfFgSa85wVKWF-r55_5005wRuQ4-",autoplay:1,controls:0,disablekb:1,fs:0,iv_load_policy:3,loop:1,modestbranding:1,rel:0}},onReady:function(e){t(e),e.target.setShuffle(!0),e.target.nextVideo()},className:"youtube-space",onStateChange:n}),(0,r.jsx)("div",{className:"youtube-vintage fixed inset-0"}),(0,r.jsx)("div",{className:"noise"})]})},M=function(){var e=(0,o.useState)(),t=e[0],n=e[1],l=(0,o.useState)(),c=l[0],s=l[1],u=(0,o.useState)(!0),f=u[0],x=u[1],p=(0,o.useState)(),v=p[0],b=p[1],g=(0,o.useState)(),N=g[0],k=g[1],C=(0,h.a)();(0,o.useEffect)((function(){(null===C||void 0===C?void 0:C.online)&&function(e){var t=(0,i.iH)(j.WW,"connectedUsers/".concat(e||Date.now())),n=(0,i.iH)(j.WW,".info/connected");(0,i.jM)(n,(function(e){if(!0===e.val()){var n=(0,i.VF)(t,!0);(0,i.ae)(n).remove(),(0,i.t8)(n,!0)}}))}(null===C||void 0===C?void 0:C.id)}),[null===C||void 0===C?void 0:C.online]),(0,o.useEffect)((function(){var e=Boolean(localStorage.getItem("chatClose"));x(!e);var t=function(){var e=(0,a.JU)(j.db,"status/online");return(0,a.cf)(e,(function(e){var t=e.data();s((null===t||void 0===t?void 0:t.count)||0)}))}(),n=function(e){var t=(0,S.hJ)(j.db,"users"),n=(0,S.IO)(t,(0,S.ar)("online","==",!0),(0,S.Xo)("startAt","asc"));return(0,S.cf)(n,function(){var t=P(O().mark((function t(n){var r;return O().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=n.docs.map((function(e){return e.data()})),e(r);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}((function(e){k(e)}));return function(){t(),n()}}),[]);return(0,r.jsx)("div",{children:(0,r.jsxs)("main",{className:"relative",children:[(0,r.jsx)(Q,{onReady:function(e){n(e.target)},onStateChange:function(e){var t=e.data;b(t)}}),(0,r.jsxs)("div",{className:"flex flex-col fixed inset-0 z-10",children:[(0,r.jsxs)("header",{className:"py-4 px-6 bg-black text-white flex items-center gap-2",children:[(0,r.jsx)("h1",{children:y.T.title}),(0,r.jsx)("span",{className:"flex-1"}),(0,r.jsx)("button",{title:"\u30c1\u30e3\u30c3\u30c8\u3092".concat(f?"\u975e\u8868\u793a":"\u8868\u793a"),className:J("px-2",!f&&"opacity-40"),onClick:function(){x((function(e){var t=!e;return t?localStorage.removeItem("chatClose"):localStorage.setItem("chatClose","true"),t}))},children:"\ud83d\udcac"}),C?(0,r.jsx)(B,{}):(0,r.jsx)("button",{onClick:w,children:"\u53c2\u52a0"}),(0,r.jsx)("a",{href:"https://github.com/dninomiya/lofi/wiki",target:"_blank",rel:"noreferrer",className:"px-2",title:"\u3053\u306e\u30b5\u30a4\u30c8\u306b\u3064\u3044\u3066",children:"\u2139\ufe0f"}),(0,r.jsx)(m,{})]}),(0,r.jsxs)("main",{className:"flex-1 grid grid-cols-1 lg:grid-cols-3 overflow-hidden",children:[(0,r.jsxs)("div",{className:"py-4 px-6 col-span-2 lg:block hidden space-y-6",onClick:function(){return null===t||void 0===t?void 0:t.playVideo()},children:[void 0!==c&&(0,r.jsxs)("p",{className:"opacity-40 text-sm",children:[c.toLocaleString(),"\u4eba\u304c\u3082\u304f\u3082\u304f\u4e2d..."]}),(0,r.jsx)(d,{users:N})]}),(0,r.jsx)("div",{className:J("col-span-1 p-4 h-full overflow-hidden",!f&&"hidden"),children:(0,r.jsxs)("div",{className:"rounded-md bg-black bg-opacity-30 p-4 lg:p-6 text-white flex flex-col h-full",children:[(0,r.jsx)(F,{isVisible:f}),(0,r.jsx)(q,{})]})})]}),(0,r.jsx)("footer",{className:"flex px-6 items-center bg-black z-10 text-white justify-between",children:t?(0,r.jsx)(K,{playerState:v,target:t}):(0,r.jsx)("div",{})})]})]})})}}},function(e){e.O(0,[229,395,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);