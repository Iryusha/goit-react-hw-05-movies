"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[774],{611:function(n,t,e){e.d(t,{Gy:function(){return d},Lo:function(){return f},hh:function(){return l},iR:function(){return p},uN:function(){return h}});var r=e(861),c=e(757),a=e.n(c),o="https://api.themoviedb.org/3/",i="084ca305e7a4e4bb3dbbc7b67e975385";function u(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(a().mark((function n(){var t,e,r,c=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",e=c.length>1&&void 0!==c[1]?c[1]:{},n.next=4,fetch(t,e);case 4:if(!(r=n.sent).ok){n.next=11;break}return n.next=8,r.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),s.apply(this,arguments)}function f(){return u("".concat(o,"trending/movie/day?api_key=").concat(i))}function h(n){return u("".concat(o,"/movie/").concat(n,"?api_key=").concat(i))}function p(n){return u("".concat(o,"movie/").concat(n,"/credits?api_key=").concat(i))}function l(n){return u("".concat(o,"movie/").concat(n,"/reviews?api_key=").concat(i))}function d(n){return u("".concat(o,"search/movie?api_key=").concat(i,"&language=en-US&query=").concat(n))}},774:function(n,t,e){e.r(t),e.d(t,{default:function(){return p}});var r=e(861),c=e(885),a=e(757),o=e.n(a),i=e(871),u=e(791),s=e(611),f="Cast_item__4WrzW",h=e(184);function p(){var n=(0,i.UO)().movieId,t=(0,u.useState)(null),e=(0,c.Z)(t,2),a=e[0],p=e[1];return(0,u.useEffect)((function(){var t=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.iR)(t);case 2:e=n.sent,r=e.cast,p(r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();t(n)}),[n]),(0,h.jsx)(h.Fragment,{children:a&&a.length>0?(0,h.jsx)("ul",{children:a.map((function(n){var t=n.name,e=n.profile_path,r=n.character,c=n.credit_id;return(0,h.jsxs)("li",{className:f,children:[(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w185".concat(e),alt:t}),(0,h.jsxs)("h2",{children:["Actor: ",t]}),(0,h.jsxs)("p",{children:["Character: ",r]})]},c)}))}):(0,h.jsx)("p",{children:"We don't have any Cast for this movie"})})}}}]);
//# sourceMappingURL=774.b04c12a5.chunk.js.map