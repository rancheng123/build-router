/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
function uaMatch(t){t=t.toLowerCase();var e=rwebkit.exec(t)||ropera.exec(t)||rmsie.exec(t)||t.indexOf("compatible")<0&&rmozilla.exec(t)||[];return{browser:e[1]||"",version:e[2]||"0"}}!function(t,e){"object"==typeof module&&"object"==typeof module.exports?module.exports=t.document?e(t,!0):function(t){if(!t.document)throw new Error("jQuery requires a window with a document");return e(t)}:e(t)}("undefined"!=typeof window?window:this,function(t,e){function i(t){var e=t.length,i=st.type(t);return"function"!==i&&!st.isWindow(t)&&(!(1!==t.nodeType||!e)||("array"===i||0===e||"number"==typeof e&&e>0&&e-1 in t))}function n(t,e,i){if(st.isFunction(e))return st.grep(t,function(t,n){return!!e.call(t,n,t)!==i});if(e.nodeType)return st.grep(t,function(t){return t===e!==i});if("string"==typeof e){if(dt.test(e))return st.filter(e,t,i);e=st.filter(e,t)}return st.grep(t,function(t){return st.inArray(t,e)>=0!==i})}function s(t,e){do t=t[e];while(t&&1!==t.nodeType);return t}function o(t){var e=yt[t]={};return st.each(t.match(bt)||[],function(t,i){e[i]=!0}),e}function a(){ft.addEventListener?(ft.removeEventListener("DOMContentLoaded",r,!1),t.removeEventListener("load",r,!1)):(ft.detachEvent("onreadystatechange",r),t.detachEvent("onload",r))}function r(){(ft.addEventListener||"load"===event.type||"complete"===ft.readyState)&&(a(),st.ready())}function l(t,e,i){if(void 0===i&&1===t.nodeType){var n="data-"+e.replace(Dt,"-$1").toLowerCase();if(i=t.getAttribute(n),"string"==typeof i){try{i="true"===i||"false"!==i&&("null"===i?null:+i+""===i?+i:Ct.test(i)?st.parseJSON(i):i)}catch(s){}st.data(t,e,i)}else i=void 0}return i}function h(t){var e;for(e in t)if(("data"!==e||!st.isEmptyObject(t[e]))&&"toJSON"!==e)return!1;return!0}function c(t,e,i,n){if(st.acceptData(t)){var s,o,a=st.expando,r=t.nodeType,l=r?st.cache:t,h=r?t[a]:t[a]&&a;if(h&&l[h]&&(n||l[h].data)||void 0!==i||"string"!=typeof e)return h||(h=r?t[a]=V.pop()||st.guid++:a),l[h]||(l[h]=r?{}:{toJSON:st.noop}),("object"==typeof e||"function"==typeof e)&&(n?l[h]=st.extend(l[h],e):l[h].data=st.extend(l[h].data,e)),o=l[h],n||(o.data||(o.data={}),o=o.data),void 0!==i&&(o[st.camelCase(e)]=i),"string"==typeof e?(s=o[e],null==s&&(s=o[st.camelCase(e)])):s=o,s}}function u(t,e,i){if(st.acceptData(t)){var n,s,o=t.nodeType,a=o?st.cache:t,r=o?t[st.expando]:st.expando;if(a[r]){if(e&&(n=i?a[r]:a[r].data)){st.isArray(e)?e=e.concat(st.map(e,st.camelCase)):e in n?e=[e]:(e=st.camelCase(e),e=e in n?[e]:e.split(" ")),s=e.length;for(;s--;)delete n[e[s]];if(i?!h(n):!st.isEmptyObject(n))return}(i||(delete a[r].data,h(a[r])))&&(o?st.cleanData([t],!0):it.deleteExpando||a!=a.window?delete a[r]:a[r]=null)}}}function d(){return!0}function p(){return!1}function f(){try{return ft.activeElement}catch(t){}}function m(t){var e=zt.split("|"),i=t.createDocumentFragment();if(i.createElement)for(;e.length;)i.createElement(e.pop());return i}function g(t,e){var i,n,s=0,o=typeof t.getElementsByTagName!==kt?t.getElementsByTagName(e||"*"):typeof t.querySelectorAll!==kt?t.querySelectorAll(e||"*"):void 0;if(!o)for(o=[],i=t.childNodes||t;null!=(n=i[s]);s++)!e||st.nodeName(n,e)?o.push(n):st.merge(o,g(n,e));return void 0===e||e&&st.nodeName(t,e)?st.merge([t],o):o}function v(t){Nt.test(t.type)&&(t.defaultChecked=t.checked)}function _(t,e){return st.nodeName(t,"table")&&st.nodeName(11!==e.nodeType?e:e.firstChild,"tr")?t.getElementsByTagName("tbody")[0]||t.appendChild(t.ownerDocument.createElement("tbody")):t}function b(t){return t.type=(null!==st.find.attr(t,"type"))+"/"+t.type,t}function y(t){var e=Kt.exec(t.type);return e?t.type=e[1]:t.removeAttribute("type"),t}function w(t,e){for(var i,n=0;null!=(i=t[n]);n++)st._data(i,"globalEval",!e||st._data(e[n],"globalEval"))}function x(t,e){if(1===e.nodeType&&st.hasData(t)){var i,n,s,o=st._data(t),a=st._data(e,o),r=o.events;if(r){delete a.handle,a.events={};for(i in r)for(n=0,s=r[i].length;s>n;n++)st.event.add(e,i,r[i][n])}a.data&&(a.data=st.extend({},a.data))}}function k(t,e){var i,n,s;if(1===e.nodeType){if(i=e.nodeName.toLowerCase(),!it.noCloneEvent&&e[st.expando]){s=st._data(e);for(n in s.events)st.removeEvent(e,n,s.handle);e.removeAttribute(st.expando)}"script"===i&&e.text!==t.text?(b(e).text=t.text,y(e)):"object"===i?(e.parentNode&&(e.outerHTML=t.outerHTML),it.html5Clone&&t.innerHTML&&!st.trim(e.innerHTML)&&(e.innerHTML=t.innerHTML)):"input"===i&&Nt.test(t.type)?(e.defaultChecked=e.checked=t.checked,e.value!==t.value&&(e.value=t.value)):"option"===i?e.defaultSelected=e.selected=t.defaultSelected:("input"===i||"textarea"===i)&&(e.defaultValue=t.defaultValue)}}function C(e,i){var n,s=st(i.createElement(e)).appendTo(i.body),o=t.getDefaultComputedStyle&&(n=t.getDefaultComputedStyle(s[0]))?n.display:st.css(s[0],"display");return s.detach(),o}function D(t){var e=ft,i=Zt[t];return i||(i=C(t,e),"none"!==i&&i||(Jt=(Jt||st("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement),e=(Jt[0].contentWindow||Jt[0].contentDocument).document,e.write(),e.close(),i=C(t,e),Jt.detach()),Zt[t]=i),i}function T(t,e){return{get:function(){var i=t();if(null!=i)return i?void delete this.get:(this.get=e).apply(this,arguments)}}}function I(t,e){if(e in t)return e;for(var i=e.charAt(0).toUpperCase()+e.slice(1),n=e,s=de.length;s--;)if(e=de[s]+i,e in t)return e;return n}function S(t,e){for(var i,n,s,o=[],a=0,r=t.length;r>a;a++)n=t[a],n.style&&(o[a]=st._data(n,"olddisplay"),i=n.style.display,e?(o[a]||"none"!==i||(n.style.display=""),""===n.style.display&&St(n)&&(o[a]=st._data(n,"olddisplay",D(n.nodeName)))):(s=St(n),(i&&"none"!==i||!s)&&st._data(n,"olddisplay",s?i:st.css(n,"display"))));for(a=0;r>a;a++)n=t[a],n.style&&(e&&"none"!==n.style.display&&""!==n.style.display||(n.style.display=e?o[a]||"":"none"));return t}function M(t,e,i){var n=le.exec(e);return n?Math.max(0,n[1]-(i||0))+(n[2]||"px"):e}function N(t,e,i,n,s){for(var o=i===(n?"border":"content")?4:"width"===e?1:0,a=0;4>o;o+=2)"margin"===i&&(a+=st.css(t,i+It[o],!0,s)),n?("content"===i&&(a-=st.css(t,"padding"+It[o],!0,s)),"margin"!==i&&(a-=st.css(t,"border"+It[o]+"Width",!0,s))):(a+=st.css(t,"padding"+It[o],!0,s),"padding"!==i&&(a+=st.css(t,"border"+It[o]+"Width",!0,s)));return a}function P(t,e,i){var n=!0,s="width"===e?t.offsetWidth:t.offsetHeight,o=te(t),a=it.boxSizing&&"border-box"===st.css(t,"boxSizing",!1,o);if(0>=s||null==s){if(s=ee(t,e,o),(0>s||null==s)&&(s=t.style[e]),ne.test(s))return s;n=a&&(it.boxSizingReliable()||s===t.style[e]),s=parseFloat(s)||0}return s+N(t,e,i||(a?"border":"content"),n,o)+"px"}function E(t,e,i,n,s){return new E.prototype.init(t,e,i,n,s)}function A(){return setTimeout(function(){pe=void 0}),pe=st.now()}function H(t,e){var i,n={height:t},s=0;for(e=e?1:0;4>s;s+=2-e)i=It[s],n["margin"+i]=n["padding"+i]=t;return e&&(n.opacity=n.width=t),n}function O(t,e,i){for(var n,s=(be[e]||[]).concat(be["*"]),o=0,a=s.length;a>o;o++)if(n=s[o].call(i,e,t))return n}function z(t,e,i){var n,s,o,a,r,l,h,c,u=this,d={},p=t.style,f=t.nodeType&&St(t),m=st._data(t,"fxshow");i.queue||(r=st._queueHooks(t,"fx"),null==r.unqueued&&(r.unqueued=0,l=r.empty.fire,r.empty.fire=function(){r.unqueued||l()}),r.unqueued++,u.always(function(){u.always(function(){r.unqueued--,st.queue(t,"fx").length||r.empty.fire()})})),1===t.nodeType&&("height"in e||"width"in e)&&(i.overflow=[p.overflow,p.overflowX,p.overflowY],h=st.css(t,"display"),c="none"===h?st._data(t,"olddisplay")||D(t.nodeName):h,"inline"===c&&"none"===st.css(t,"float")&&(it.inlineBlockNeedsLayout&&"inline"!==D(t.nodeName)?p.zoom=1:p.display="inline-block")),i.overflow&&(p.overflow="hidden",it.shrinkWrapBlocks()||u.always(function(){p.overflow=i.overflow[0],p.overflowX=i.overflow[1],p.overflowY=i.overflow[2]}));for(n in e)if(s=e[n],me.exec(s)){if(delete e[n],o=o||"toggle"===s,s===(f?"hide":"show")){if("show"!==s||!m||void 0===m[n])continue;f=!0}d[n]=m&&m[n]||st.style(t,n)}else h=void 0;if(st.isEmptyObject(d))"inline"===("none"===h?D(t.nodeName):h)&&(p.display=h);else{m?"hidden"in m&&(f=m.hidden):m=st._data(t,"fxshow",{}),o&&(m.hidden=!f),f?st(t).show():u.done(function(){st(t).hide()}),u.done(function(){var e;st._removeData(t,"fxshow");for(e in d)st.style(t,e,d[e])});for(n in d)a=O(f?m[n]:0,n,u),n in m||(m[n]=a.start,f&&(a.end=a.start,a.start="width"===n||"height"===n?1:0))}}function W(t,e){var i,n,s,o,a;for(i in t)if(n=st.camelCase(i),s=e[n],o=t[i],st.isArray(o)&&(s=o[1],o=t[i]=o[0]),i!==n&&(t[n]=o,delete t[i]),a=st.cssHooks[n],a&&"expand"in a){o=a.expand(o),delete t[n];for(i in o)i in t||(t[i]=o[i],e[i]=s)}else e[n]=s}function L(t,e,i){var n,s,o=0,a=_e.length,r=st.Deferred().always(function(){delete l.elem}),l=function(){if(s)return!1;for(var e=pe||A(),i=Math.max(0,h.startTime+h.duration-e),n=i/h.duration||0,o=1-n,a=0,l=h.tweens.length;l>a;a++)h.tweens[a].run(o);return r.notifyWith(t,[h,o,i]),1>o&&l?i:(r.resolveWith(t,[h]),!1)},h=r.promise({elem:t,props:st.extend({},e),opts:st.extend(!0,{specialEasing:{}},i),originalProperties:e,originalOptions:i,startTime:pe||A(),duration:i.duration,tweens:[],createTween:function(e,i){var n=st.Tween(t,h.opts,e,i,h.opts.specialEasing[e]||h.opts.easing);return h.tweens.push(n),n},stop:function(e){var i=0,n=e?h.tweens.length:0;if(s)return this;for(s=!0;n>i;i++)h.tweens[i].run(1);return e?r.resolveWith(t,[h,e]):r.rejectWith(t,[h,e]),this}}),c=h.props;for(W(c,h.opts.specialEasing);a>o;o++)if(n=_e[o].call(h,t,c,h.opts))return n;return st.map(c,O,h),st.isFunction(h.opts.start)&&h.opts.start.call(t,h),st.fx.timer(st.extend(l,{elem:t,anim:h,queue:h.opts.queue})),h.progress(h.opts.progress).done(h.opts.done,h.opts.complete).fail(h.opts.fail).always(h.opts.always)}function F(t){return function(e,i){"string"!=typeof e&&(i=e,e="*");var n,s=0,o=e.toLowerCase().match(bt)||[];if(st.isFunction(i))for(;n=o[s++];)"+"===n.charAt(0)?(n=n.slice(1)||"*",(t[n]=t[n]||[]).unshift(i)):(t[n]=t[n]||[]).push(i)}}function j(t,e,i,n){function s(r){var l;return o[r]=!0,st.each(t[r]||[],function(t,r){var h=r(e,i,n);return"string"!=typeof h||a||o[h]?a?!(l=h):void 0:(e.dataTypes.unshift(h),s(h),!1)}),l}var o={},a=t===Be;return s(e.dataTypes[0])||!o["*"]&&s("*")}function $(t,e){var i,n,s=st.ajaxSettings.flatOptions||{};for(n in e)void 0!==e[n]&&((s[n]?t:i||(i={}))[n]=e[n]);return i&&st.extend(!0,t,i),t}function R(t,e,i){for(var n,s,o,a,r=t.contents,l=t.dataTypes;"*"===l[0];)l.shift(),void 0===s&&(s=t.mimeType||e.getResponseHeader("Content-Type"));if(s)for(a in r)if(r[a]&&r[a].test(s)){l.unshift(a);break}if(l[0]in i)o=l[0];else{for(a in i){if(!l[0]||t.converters[a+" "+l[0]]){o=a;break}n||(n=a)}o=o||n}return o?(o!==l[0]&&l.unshift(o),i[o]):void 0}function B(t,e,i,n){var s,o,a,r,l,h={},c=t.dataTypes.slice();if(c[1])for(a in t.converters)h[a.toLowerCase()]=t.converters[a];for(o=c.shift();o;)if(t.responseFields[o]&&(i[t.responseFields[o]]=e),!l&&n&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=h[l+" "+o]||h["* "+o],!a)for(s in h)if(r=s.split(" "),r[1]===o&&(a=h[l+" "+r[0]]||h["* "+r[0]])){a===!0?a=h[s]:h[s]!==!0&&(o=r[0],c.unshift(r[1]));break}if(a!==!0)if(a&&t["throws"])e=a(e);else try{e=a(e)}catch(u){return{state:"parsererror",error:a?u:"No conversion from "+l+" to "+o}}}return{state:"success",data:e}}function q(t,e,i,n){var s;if(st.isArray(e))st.each(e,function(e,s){i||Ke.test(t)?n(t,s):q(t+"["+("object"==typeof s?e:"")+"]",s,i,n)});else if(i||"object"!==st.type(e))n(t,e);else for(s in e)q(t+"["+s+"]",e[s],i,n)}function Y(){try{return new t.XMLHttpRequest}catch(e){}}function U(){try{return new t.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}function K(t){return st.isWindow(t)?t:9===t.nodeType&&(t.defaultView||t.parentWindow)}var V=[],X=V.slice,G=V.concat,Q=V.push,J=V.indexOf,Z={},tt=Z.toString,et=Z.hasOwnProperty,it={},nt="1.11.1",st=function(t,e){return new st.fn.init(t,e)},ot=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,at=/^-ms-/,rt=/-([\da-z])/gi,lt=function(t,e){return e.toUpperCase()};st.fn=st.prototype={jquery:nt,constructor:st,selector:"",length:0,toArray:function(){return X.call(this)},get:function(t){return null!=t?0>t?this[t+this.length]:this[t]:X.call(this)},pushStack:function(t){var e=st.merge(this.constructor(),t);return e.prevObject=this,e.context=this.context,e},each:function(t,e){return st.each(this,t,e)},map:function(t){return this.pushStack(st.map(this,function(e,i){return t.call(e,i,e)}))},slice:function(){return this.pushStack(X.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(t){var e=this.length,i=+t+(0>t?e:0);return this.pushStack(i>=0&&e>i?[this[i]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:Q,sort:V.sort,splice:V.splice},st.extend=st.fn.extend=function(){var t,e,i,n,s,o,a=arguments[0]||{},r=1,l=arguments.length,h=!1;for("boolean"==typeof a&&(h=a,a=arguments[r]||{},r++),"object"==typeof a||st.isFunction(a)||(a={}),r===l&&(a=this,r--);l>r;r++)if(null!=(s=arguments[r]))for(n in s)t=a[n],i=s[n],a!==i&&(h&&i&&(st.isPlainObject(i)||(e=st.isArray(i)))?(e?(e=!1,o=t&&st.isArray(t)?t:[]):o=t&&st.isPlainObject(t)?t:{},a[n]=st.extend(h,o,i)):void 0!==i&&(a[n]=i));return a},st.extend({expando:"jQuery"+(nt+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isFunction:function(t){return"function"===st.type(t)},isArray:Array.isArray||function(t){return"array"===st.type(t)},isWindow:function(t){return null!=t&&t==t.window},isNumeric:function(t){return!st.isArray(t)&&t-parseFloat(t)>=0},isEmptyObject:function(t){var e;for(e in t)return!1;return!0},isPlainObject:function(t){var e;if(!t||"object"!==st.type(t)||t.nodeType||st.isWindow(t))return!1;try{if(t.constructor&&!et.call(t,"constructor")&&!et.call(t.constructor.prototype,"isPrototypeOf"))return!1}catch(i){return!1}if(it.ownLast)for(e in t)return et.call(t,e);for(e in t);return void 0===e||et.call(t,e)},type:function(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?Z[tt.call(t)]||"object":typeof t},globalEval:function(e){e&&st.trim(e)&&(t.execScript||function(e){t.eval.call(t,e)})(e)},camelCase:function(t){return t.replace(at,"ms-").replace(rt,lt)},nodeName:function(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()},each:function(t,e,n){var s,o=0,a=t.length,r=i(t);if(n){if(r)for(;a>o&&(s=e.apply(t[o],n),s!==!1);o++);else for(o in t)if(s=e.apply(t[o],n),s===!1)break}else if(r)for(;a>o&&(s=e.call(t[o],o,t[o]),s!==!1);o++);else for(o in t)if(s=e.call(t[o],o,t[o]),s===!1)break;return t},trim:function(t){return null==t?"":(t+"").replace(ot,"")},makeArray:function(t,e){var n=e||[];return null!=t&&(i(Object(t))?st.merge(n,"string"==typeof t?[t]:t):Q.call(n,t)),n},inArray:function(t,e,i){var n;if(e){if(J)return J.call(e,t,i);for(n=e.length,i=i?0>i?Math.max(0,n+i):i:0;n>i;i++)if(i in e&&e[i]===t)return i}return-1},merge:function(t,e){for(var i=+e.length,n=0,s=t.length;i>n;)t[s++]=e[n++];if(i!==i)for(;void 0!==e[n];)t[s++]=e[n++];return t.length=s,t},grep:function(t,e,i){for(var n,s=[],o=0,a=t.length,r=!i;a>o;o++)n=!e(t[o],o),n!==r&&s.push(t[o]);return s},map:function(t,e,n){var s,o=0,a=t.length,r=i(t),l=[];if(r)for(;a>o;o++)s=e(t[o],o,n),null!=s&&l.push(s);else for(o in t)s=e(t[o],o,n),null!=s&&l.push(s);return G.apply([],l)},guid:1,proxy:function(t,e){var i,n,s;return"string"==typeof e&&(s=t[e],e=t,t=s),st.isFunction(t)?(i=X.call(arguments,2),n=function(){return t.apply(e||this,i.concat(X.call(arguments)))},n.guid=t.guid=t.guid||st.guid++,n):void 0},now:function(){return+new Date},support:it}),st.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){Z["[object "+e+"]"]=e.toLowerCase()});var ht=function(t){function e(t,e,i,n){var s,o,a,r,l,h,u,p,f,m;if((e?e.ownerDocument||e:j)!==E&&P(e),e=e||E,i=i||[],!t||"string"!=typeof t)return i;if(1!==(r=e.nodeType)&&9!==r)return[];if(H&&!n){if(s=_t.exec(t))if(a=s[1]){if(9===r){if(o=e.getElementById(a),!o||!o.parentNode)return i;if(o.id===a)return i.push(o),i}else if(e.ownerDocument&&(o=e.ownerDocument.getElementById(a))&&L(e,o)&&o.id===a)return i.push(o),i}else{if(s[2])return Z.apply(i,e.getElementsByTagName(t)),i;if((a=s[3])&&w.getElementsByClassName&&e.getElementsByClassName)return Z.apply(i,e.getElementsByClassName(a)),i}if(w.qsa&&(!O||!O.test(t))){if(p=u=F,f=e,m=9===r&&t,1===r&&"object"!==e.nodeName.toLowerCase()){for(h=D(t),(u=e.getAttribute("id"))?p=u.replace(yt,"\\$&"):e.setAttribute("id",p),p="[id='"+p+"'] ",l=h.length;l--;)h[l]=p+d(h[l]);f=bt.test(t)&&c(e.parentNode)||e,m=h.join(",")}if(m)try{return Z.apply(i,f.querySelectorAll(m)),i}catch(g){}finally{u||e.removeAttribute("id")}}}return I(t.replace(lt,"$1"),e,i,n)}function i(){function t(i,n){return e.push(i+" ")>x.cacheLength&&delete t[e.shift()],t[i+" "]=n}var e=[];return t}function n(t){return t[F]=!0,t}function s(t){var e=E.createElement("div");try{return!!t(e)}catch(i){return!1}finally{e.parentNode&&e.parentNode.removeChild(e),e=null}}function o(t,e){for(var i=t.split("|"),n=t.length;n--;)x.attrHandle[i[n]]=e}function a(t,e){var i=e&&t,n=i&&1===t.nodeType&&1===e.nodeType&&(~e.sourceIndex||V)-(~t.sourceIndex||V);if(n)return n;if(i)for(;i=i.nextSibling;)if(i===e)return-1;return t?1:-1}function r(t){return function(e){var i=e.nodeName.toLowerCase();return"input"===i&&e.type===t}}function l(t){return function(e){var i=e.nodeName.toLowerCase();return("input"===i||"button"===i)&&e.type===t}}function h(t){return n(function(e){return e=+e,n(function(i,n){for(var s,o=t([],i.length,e),a=o.length;a--;)i[s=o[a]]&&(i[s]=!(n[s]=i[s]))})})}function c(t){return t&&typeof t.getElementsByTagName!==K&&t}function u(){}function d(t){for(var e=0,i=t.length,n="";i>e;e++)n+=t[e].value;return n}function p(t,e,i){var n=e.dir,s=i&&"parentNode"===n,o=R++;return e.first?function(e,i,o){for(;e=e[n];)if(1===e.nodeType||s)return t(e,i,o)}:function(e,i,a){var r,l,h=[$,o];if(a){for(;e=e[n];)if((1===e.nodeType||s)&&t(e,i,a))return!0}else for(;e=e[n];)if(1===e.nodeType||s){if(l=e[F]||(e[F]={}),(r=l[n])&&r[0]===$&&r[1]===o)return h[2]=r[2];if(l[n]=h,h[2]=t(e,i,a))return!0}}}function f(t){return t.length>1?function(e,i,n){for(var s=t.length;s--;)if(!t[s](e,i,n))return!1;return!0}:t[0]}function m(t,i,n){for(var s=0,o=i.length;o>s;s++)e(t,i[s],n);return n}function g(t,e,i,n,s){for(var o,a=[],r=0,l=t.length,h=null!=e;l>r;r++)(o=t[r])&&(!i||i(o,n,s))&&(a.push(o),h&&e.push(r));return a}function v(t,e,i,s,o,a){return s&&!s[F]&&(s=v(s)),o&&!o[F]&&(o=v(o,a)),n(function(n,a,r,l){var h,c,u,d=[],p=[],f=a.length,v=n||m(e||"*",r.nodeType?[r]:r,[]),_=!t||!n&&e?v:g(v,d,t,r,l),b=i?o||(n?t:f||s)?[]:a:_;if(i&&i(_,b,r,l),s)for(h=g(b,p),s(h,[],r,l),c=h.length;c--;)(u=h[c])&&(b[p[c]]=!(_[p[c]]=u));if(n){if(o||t){if(o){for(h=[],c=b.length;c--;)(u=b[c])&&h.push(_[c]=u);o(null,b=[],h,l)}for(c=b.length;c--;)(u=b[c])&&(h=o?et.call(n,u):d[c])>-1&&(n[h]=!(a[h]=u))}}else b=g(b===a?b.splice(f,b.length):b),o?o(null,a,b,l):Z.apply(a,b)})}function _(t){for(var e,i,n,s=t.length,o=x.relative[t[0].type],a=o||x.relative[" "],r=o?1:0,l=p(function(t){return t===e},a,!0),h=p(function(t){return et.call(e,t)>-1},a,!0),c=[function(t,i,n){return!o&&(n||i!==S)||((e=i).nodeType?l(t,i,n):h(t,i,n))}];s>r;r++)if(i=x.relative[t[r].type])c=[p(f(c),i)];else{if(i=x.filter[t[r].type].apply(null,t[r].matches),i[F]){for(n=++r;s>n&&!x.relative[t[n].type];n++);return v(r>1&&f(c),r>1&&d(t.slice(0,r-1).concat({value:" "===t[r-2].type?"*":""})).replace(lt,"$1"),i,n>r&&_(t.slice(r,n)),s>n&&_(t=t.slice(n)),s>n&&d(t))}c.push(i)}return f(c)}function b(t,i){var s=i.length>0,o=t.length>0,a=function(n,a,r,l,h){var c,u,d,p=0,f="0",m=n&&[],v=[],_=S,b=n||o&&x.find.TAG("*",h),y=$+=null==_?1:Math.random()||.1,w=b.length;for(h&&(S=a!==E&&a);f!==w&&null!=(c=b[f]);f++){if(o&&c){for(u=0;d=t[u++];)if(d(c,a,r)){l.push(c);break}h&&($=y)}s&&((c=!d&&c)&&p--,n&&m.push(c))}if(p+=f,s&&f!==p){for(u=0;d=i[u++];)d(m,v,a,r);if(n){if(p>0)for(;f--;)m[f]||v[f]||(v[f]=Q.call(l));v=g(v)}Z.apply(l,v),h&&!n&&v.length>0&&p+i.length>1&&e.uniqueSort(l)}return h&&($=y,S=_),m};return s?n(a):a}var y,w,x,k,C,D,T,I,S,M,N,P,E,A,H,O,z,W,L,F="sizzle"+-new Date,j=t.document,$=0,R=0,B=i(),q=i(),Y=i(),U=function(t,e){return t===e&&(N=!0),0},K="undefined",V=1<<31,X={}.hasOwnProperty,G=[],Q=G.pop,J=G.push,Z=G.push,tt=G.slice,et=G.indexOf||function(t){for(var e=0,i=this.length;i>e;e++)if(this[e]===t)return e;return-1},it="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",nt="[\\x20\\t\\r\\n\\f]",st="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ot=st.replace("w","w#"),at="\\["+nt+"*("+st+")(?:"+nt+"*([*^$|!~]?=)"+nt+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ot+"))|)"+nt+"*\\]",rt=":("+st+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+at+")*)|.*)\\)|)",lt=new RegExp("^"+nt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+nt+"+$","g"),ht=new RegExp("^"+nt+"*,"+nt+"*"),ct=new RegExp("^"+nt+"*([>+~]|"+nt+")"+nt+"*"),ut=new RegExp("="+nt+"*([^\\]'\"]*?)"+nt+"*\\]","g"),dt=new RegExp(rt),pt=new RegExp("^"+ot+"$"),ft={ID:new RegExp("^#("+st+")"),CLASS:new RegExp("^\\.("+st+")"),TAG:new RegExp("^("+st.replace("w","w*")+")"),ATTR:new RegExp("^"+at),PSEUDO:new RegExp("^"+rt),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+nt+"*(even|odd|(([+-]|)(\\d*)n|)"+nt+"*(?:([+-]|)"+nt+"*(\\d+)|))"+nt+"*\\)|)","i"),bool:new RegExp("^(?:"+it+")$","i"),needsContext:new RegExp("^"+nt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+nt+"*((?:-\\d)?\\d*)"+nt+"*\\)|)(?=[^-]|$)","i")},mt=/^(?:input|select|textarea|button)$/i,gt=/^h\d$/i,vt=/^[^{]+\{\s*\[native \w/,_t=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,bt=/[+~]/,yt=/'|\\/g,wt=new RegExp("\\\\([\\da-f]{1,6}"+nt+"?|("+nt+")|.)","ig"),xt=function(t,e,i){var n="0x"+e-65536;return n!==n||i?e:0>n?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320)};try{Z.apply(G=tt.call(j.childNodes),j.childNodes),G[j.childNodes.length].nodeType}catch(kt){Z={apply:G.length?function(t,e){J.apply(t,tt.call(e))}:function(t,e){for(var i=t.length,n=0;t[i++]=e[n++];);t.length=i-1}}}w=e.support={},C=e.isXML=function(t){var e=t&&(t.ownerDocument||t).documentElement;return!!e&&"HTML"!==e.nodeName},P=e.setDocument=function(t){var e,i=t?t.ownerDocument||t:j,n=i.defaultView;return i!==E&&9===i.nodeType&&i.documentElement?(E=i,A=i.documentElement,H=!C(i),n&&n!==n.top&&(n.addEventListener?n.addEventListener("unload",function(){P()},!1):n.attachEvent&&n.attachEvent("onunload",function(){P()})),w.attributes=s(function(t){return t.className="i",!t.getAttribute("className")}),w.getElementsByTagName=s(function(t){return t.appendChild(i.createComment("")),!t.getElementsByTagName("*").length}),w.getElementsByClassName=vt.test(i.getElementsByClassName)&&s(function(t){return t.innerHTML="<div class='a'></div><div class='a i'></div>",t.firstChild.className="i",2===t.getElementsByClassName("i").length}),w.getById=s(function(t){return A.appendChild(t).id=F,!i.getElementsByName||!i.getElementsByName(F).length}),w.getById?(x.find.ID=function(t,e){if(typeof e.getElementById!==K&&H){var i=e.getElementById(t);return i&&i.parentNode?[i]:[]}},x.filter.ID=function(t){var e=t.replace(wt,xt);return function(t){return t.getAttribute("id")===e}}):(delete x.find.ID,x.filter.ID=function(t){var e=t.replace(wt,xt);return function(t){var i=typeof t.getAttributeNode!==K&&t.getAttributeNode("id");return i&&i.value===e}}),x.find.TAG=w.getElementsByTagName?function(t,e){return typeof e.getElementsByTagName!==K?e.getElementsByTagName(t):void 0}:function(t,e){var i,n=[],s=0,o=e.getElementsByTagName(t);if("*"===t){for(;i=o[s++];)1===i.nodeType&&n.push(i);return n}return o},x.find.CLASS=w.getElementsByClassName&&function(t,e){return typeof e.getElementsByClassName!==K&&H?e.getElementsByClassName(t):void 0},z=[],O=[],(w.qsa=vt.test(i.querySelectorAll))&&(s(function(t){t.innerHTML="<select msallowclip=''><option selected=''></option></select>",t.querySelectorAll("[msallowclip^='']").length&&O.push("[*^$]="+nt+"*(?:''|\"\")"),t.querySelectorAll("[selected]").length||O.push("\\["+nt+"*(?:value|"+it+")"),t.querySelectorAll(":checked").length||O.push(":checked")}),s(function(t){var e=i.createElement("input");e.setAttribute("type","hidden"),t.appendChild(e).setAttribute("name","D"),t.querySelectorAll("[name=d]").length&&O.push("name"+nt+"*[*^$|!~]?="),t.querySelectorAll(":enabled").length||O.push(":enabled",":disabled"),t.querySelectorAll("*,:x"),O.push(",.*:")})),(w.matchesSelector=vt.test(W=A.matches||A.webkitMatchesSelector||A.mozMatchesSelector||A.oMatchesSelector||A.msMatchesSelector))&&s(function(t){w.disconnectedMatch=W.call(t,"div"),W.call(t,"[s!='']:x"),z.push("!=",rt)}),O=O.length&&new RegExp(O.join("|")),z=z.length&&new RegExp(z.join("|")),e=vt.test(A.compareDocumentPosition),L=e||vt.test(A.contains)?function(t,e){var i=9===t.nodeType?t.documentElement:t,n=e&&e.parentNode;return t===n||!(!n||1!==n.nodeType||!(i.contains?i.contains(n):t.compareDocumentPosition&&16&t.compareDocumentPosition(n)))}:function(t,e){if(e)for(;e=e.parentNode;)if(e===t)return!0;return!1},U=e?function(t,e){if(t===e)return N=!0,0;var n=!t.compareDocumentPosition-!e.compareDocumentPosition;return n?n:(n=(t.ownerDocument||t)===(e.ownerDocument||e)?t.compareDocumentPosition(e):1,1&n||!w.sortDetached&&e.compareDocumentPosition(t)===n?t===i||t.ownerDocument===j&&L(j,t)?-1:e===i||e.ownerDocument===j&&L(j,e)?1:M?et.call(M,t)-et.call(M,e):0:4&n?-1:1)}:function(t,e){if(t===e)return N=!0,0;var n,s=0,o=t.parentNode,r=e.parentNode,l=[t],h=[e];if(!o||!r)return t===i?-1:e===i?1:o?-1:r?1:M?et.call(M,t)-et.call(M,e):0;if(o===r)return a(t,e);for(n=t;n=n.parentNode;)l.unshift(n);for(n=e;n=n.parentNode;)h.unshift(n);for(;l[s]===h[s];)s++;return s?a(l[s],h[s]):l[s]===j?-1:h[s]===j?1:0},i):E},e.matches=function(t,i){return e(t,null,null,i)},e.matchesSelector=function(t,i){if((t.ownerDocument||t)!==E&&P(t),i=i.replace(ut,"='$1']"),!(!w.matchesSelector||!H||z&&z.test(i)||O&&O.test(i)))try{var n=W.call(t,i);if(n||w.disconnectedMatch||t.document&&11!==t.document.nodeType)return n}catch(s){}return e(i,E,null,[t]).length>0},e.contains=function(t,e){return(t.ownerDocument||t)!==E&&P(t),L(t,e)},e.attr=function(t,e){(t.ownerDocument||t)!==E&&P(t);var i=x.attrHandle[e.toLowerCase()],n=i&&X.call(x.attrHandle,e.toLowerCase())?i(t,e,!H):void 0;return void 0!==n?n:w.attributes||!H?t.getAttribute(e):(n=t.getAttributeNode(e))&&n.specified?n.value:null},e.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)},e.uniqueSort=function(t){var e,i=[],n=0,s=0;if(N=!w.detectDuplicates,M=!w.sortStable&&t.slice(0),t.sort(U),N){for(;e=t[s++];)e===t[s]&&(n=i.push(s));for(;n--;)t.splice(i[n],1)}return M=null,t},k=e.getText=function(t){var e,i="",n=0,s=t.nodeType;if(s){if(1===s||9===s||11===s){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)i+=k(t)}else if(3===s||4===s)return t.nodeValue}else for(;e=t[n++];)i+=k(e);return i},x=e.selectors={cacheLength:50,createPseudo:n,match:ft,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(wt,xt),t[3]=(t[3]||t[4]||t[5]||"").replace(wt,xt),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||e.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&e.error(t[0]),t},PSEUDO:function(t){var e,i=!t[6]&&t[2];return ft.CHILD.test(t[0])?null:(t[3]?t[2]=t[4]||t[5]||"":i&&dt.test(i)&&(e=D(i,!0))&&(e=i.indexOf(")",i.length-e)-i.length)&&(t[0]=t[0].slice(0,e),t[2]=i.slice(0,e)),t.slice(0,3))}},filter:{TAG:function(t){var e=t.replace(wt,xt).toLowerCase();return"*"===t?function(){return!0}:function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(t){var e=B[t+" "];return e||(e=new RegExp("(^|"+nt+")"+t+"("+nt+"|$)"))&&B(t,function(t){return e.test("string"==typeof t.className&&t.className||typeof t.getAttribute!==K&&t.getAttribute("class")||"")})},ATTR:function(t,i,n){return function(s){var o=e.attr(s,t);return null==o?"!="===i:!i||(o+="","="===i?o===n:"!="===i?o!==n:"^="===i?n&&0===o.indexOf(n):"*="===i?n&&o.indexOf(n)>-1:"$="===i?n&&o.slice(-n.length)===n:"~="===i?(" "+o+" ").indexOf(n)>-1:"|="===i&&(o===n||o.slice(0,n.length+1)===n+"-"))}},CHILD:function(t,e,i,n,s){var o="nth"!==t.slice(0,3),a="last"!==t.slice(-4),r="of-type"===e;return 1===n&&0===s?function(t){return!!t.parentNode}:function(e,i,l){var h,c,u,d,p,f,m=o!==a?"nextSibling":"previousSibling",g=e.parentNode,v=r&&e.nodeName.toLowerCase(),_=!l&&!r;if(g){if(o){for(;m;){for(u=e;u=u[m];)if(r?u.nodeName.toLowerCase()===v:1===u.nodeType)return!1;f=m="only"===t&&!f&&"nextSibling"}return!0}if(f=[a?g.firstChild:g.lastChild],a&&_){for(c=g[F]||(g[F]={}),h=c[t]||[],p=h[0]===$&&h[1],d=h[0]===$&&h[2],u=p&&g.childNodes[p];u=++p&&u&&u[m]||(d=p=0)||f.pop();)if(1===u.nodeType&&++d&&u===e){c[t]=[$,p,d];break}}else if(_&&(h=(e[F]||(e[F]={}))[t])&&h[0]===$)d=h[1];else for(;(u=++p&&u&&u[m]||(d=p=0)||f.pop())&&((r?u.nodeName.toLowerCase()!==v:1!==u.nodeType)||!++d||(_&&((u[F]||(u[F]={}))[t]=[$,d]),u!==e)););return d-=s,d===n||d%n===0&&d/n>=0}}},PSEUDO:function(t,i){var s,o=x.pseudos[t]||x.setFilters[t.toLowerCase()]||e.error("unsupported pseudo: "+t);return o[F]?o(i):o.length>1?(s=[t,t,"",i],x.setFilters.hasOwnProperty(t.toLowerCase())?n(function(t,e){for(var n,s=o(t,i),a=s.length;a--;)n=et.call(t,s[a]),t[n]=!(e[n]=s[a])}):function(t){return o(t,0,s)}):o}},pseudos:{not:n(function(t){var e=[],i=[],s=T(t.replace(lt,"$1"));return s[F]?n(function(t,e,i,n){for(var o,a=s(t,null,n,[]),r=t.length;r--;)(o=a[r])&&(t[r]=!(e[r]=o))}):function(t,n,o){return e[0]=t,s(e,null,o,i),!i.pop()}}),has:n(function(t){return function(i){return e(t,i).length>0}}),contains:n(function(t){return function(e){return(e.textContent||e.innerText||k(e)).indexOf(t)>-1}}),lang:n(function(t){return pt.test(t||"")||e.error("unsupported lang: "+t),t=t.replace(wt,xt).toLowerCase(),function(e){var i;do if(i=H?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return i=i.toLowerCase(),i===t||0===i.indexOf(t+"-");while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var i=t.location&&t.location.hash;return i&&i.slice(1)===e.id},root:function(t){return t===A},focus:function(t){return t===E.activeElement&&(!E.hasFocus||E.hasFocus())&&!!(t.type||t.href||~t.tabIndex)},enabled:function(t){return t.disabled===!1},disabled:function(t){return t.disabled===!0},checked:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&!!t.checked||"option"===e&&!!t.selected},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,t.selected===!0},empty:function(t){for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeType<6)return!1;return!0},parent:function(t){return!x.pseudos.empty(t)},header:function(t){return gt.test(t.nodeName)},input:function(t){return mt.test(t.nodeName)},button:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&"button"===t.type||"button"===e},text:function(t){var e;return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(null==(e=t.getAttribute("type"))||"text"===e.toLowerCase())},first:h(function(){return[0]}),last:h(function(t,e){return[e-1]}),eq:h(function(t,e,i){return[0>i?i+e:i]}),even:h(function(t,e){for(var i=0;e>i;i+=2)t.push(i);return t}),odd:h(function(t,e){for(var i=1;e>i;i+=2)t.push(i);return t}),lt:h(function(t,e,i){for(var n=0>i?i+e:i;--n>=0;)t.push(n);return t}),gt:h(function(t,e,i){for(var n=0>i?i+e:i;++n<e;)t.push(n);return t})}},x.pseudos.nth=x.pseudos.eq;for(y in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})x.pseudos[y]=r(y);for(y in{submit:!0,reset:!0})x.pseudos[y]=l(y);return u.prototype=x.filters=x.pseudos,x.setFilters=new u,D=e.tokenize=function(t,i){var n,s,o,a,r,l,h,c=q[t+" "];if(c)return i?0:c.slice(0);for(r=t,l=[],h=x.preFilter;r;){(!n||(s=ht.exec(r)))&&(s&&(r=r.slice(s[0].length)||r),l.push(o=[])),n=!1,(s=ct.exec(r))&&(n=s.shift(),
o.push({value:n,type:s[0].replace(lt," ")}),r=r.slice(n.length));for(a in x.filter)!(s=ft[a].exec(r))||h[a]&&!(s=h[a](s))||(n=s.shift(),o.push({value:n,type:a,matches:s}),r=r.slice(n.length));if(!n)break}return i?r.length:r?e.error(t):q(t,l).slice(0)},T=e.compile=function(t,e){var i,n=[],s=[],o=Y[t+" "];if(!o){for(e||(e=D(t)),i=e.length;i--;)o=_(e[i]),o[F]?n.push(o):s.push(o);o=Y(t,b(s,n)),o.selector=t}return o},I=e.select=function(t,e,i,n){var s,o,a,r,l,h="function"==typeof t&&t,u=!n&&D(t=h.selector||t);if(i=i||[],1===u.length){if(o=u[0]=u[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&w.getById&&9===e.nodeType&&H&&x.relative[o[1].type]){if(e=(x.find.ID(a.matches[0].replace(wt,xt),e)||[])[0],!e)return i;h&&(e=e.parentNode),t=t.slice(o.shift().value.length)}for(s=ft.needsContext.test(t)?0:o.length;s--&&(a=o[s],!x.relative[r=a.type]);)if((l=x.find[r])&&(n=l(a.matches[0].replace(wt,xt),bt.test(o[0].type)&&c(e.parentNode)||e))){if(o.splice(s,1),t=n.length&&d(o),!t)return Z.apply(i,n),i;break}}return(h||T(t,u))(n,e,!H,i,bt.test(t)&&c(e.parentNode)||e),i},w.sortStable=F.split("").sort(U).join("")===F,w.detectDuplicates=!!N,P(),w.sortDetached=s(function(t){return 1&t.compareDocumentPosition(E.createElement("div"))}),s(function(t){return t.innerHTML="<a href='#'></a>","#"===t.firstChild.getAttribute("href")})||o("type|href|height|width",function(t,e,i){return i?void 0:t.getAttribute(e,"type"===e.toLowerCase()?1:2)}),w.attributes&&s(function(t){return t.innerHTML="<input/>",t.firstChild.setAttribute("value",""),""===t.firstChild.getAttribute("value")})||o("value",function(t,e,i){return i||"input"!==t.nodeName.toLowerCase()?void 0:t.defaultValue}),s(function(t){return null==t.getAttribute("disabled")})||o(it,function(t,e,i){var n;return i?void 0:t[e]===!0?e.toLowerCase():(n=t.getAttributeNode(e))&&n.specified?n.value:null}),e}(t);st.find=ht,st.expr=ht.selectors,st.expr[":"]=st.expr.pseudos,st.unique=ht.uniqueSort,st.text=ht.getText,st.isXMLDoc=ht.isXML,st.contains=ht.contains;var ct=st.expr.match.needsContext,ut=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,dt=/^.[^:#\[\.,]*$/;st.filter=function(t,e,i){var n=e[0];return i&&(t=":not("+t+")"),1===e.length&&1===n.nodeType?st.find.matchesSelector(n,t)?[n]:[]:st.find.matches(t,st.grep(e,function(t){return 1===t.nodeType}))},st.fn.extend({find:function(t){var e,i=[],n=this,s=n.length;if("string"!=typeof t)return this.pushStack(st(t).filter(function(){for(e=0;s>e;e++)if(st.contains(n[e],this))return!0}));for(e=0;s>e;e++)st.find(t,n[e],i);return i=this.pushStack(s>1?st.unique(i):i),i.selector=this.selector?this.selector+" "+t:t,i},filter:function(t){return this.pushStack(n(this,t||[],!1))},not:function(t){return this.pushStack(n(this,t||[],!0))},is:function(t){return!!n(this,"string"==typeof t&&ct.test(t)?st(t):t||[],!1).length}});var pt,ft=t.document,mt=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,gt=st.fn.init=function(t,e){var i,n;if(!t)return this;if("string"==typeof t){if(i="<"===t.charAt(0)&&">"===t.charAt(t.length-1)&&t.length>=3?[null,t,null]:mt.exec(t),!i||!i[1]&&e)return!e||e.jquery?(e||pt).find(t):this.constructor(e).find(t);if(i[1]){if(e=e instanceof st?e[0]:e,st.merge(this,st.parseHTML(i[1],e&&e.nodeType?e.ownerDocument||e:ft,!0)),ut.test(i[1])&&st.isPlainObject(e))for(i in e)st.isFunction(this[i])?this[i](e[i]):this.attr(i,e[i]);return this}if(n=ft.getElementById(i[2]),n&&n.parentNode){if(n.id!==i[2])return pt.find(t);this.length=1,this[0]=n}return this.context=ft,this.selector=t,this}return t.nodeType?(this.context=this[0]=t,this.length=1,this):st.isFunction(t)?"undefined"!=typeof pt.ready?pt.ready(t):t(st):(void 0!==t.selector&&(this.selector=t.selector,this.context=t.context),st.makeArray(t,this))};gt.prototype=st.fn,pt=st(ft);var vt=/^(?:parents|prev(?:Until|All))/,_t={children:!0,contents:!0,next:!0,prev:!0};st.extend({dir:function(t,e,i){for(var n=[],s=t[e];s&&9!==s.nodeType&&(void 0===i||1!==s.nodeType||!st(s).is(i));)1===s.nodeType&&n.push(s),s=s[e];return n},sibling:function(t,e){for(var i=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&i.push(t);return i}}),st.fn.extend({has:function(t){var e,i=st(t,this),n=i.length;return this.filter(function(){for(e=0;n>e;e++)if(st.contains(this,i[e]))return!0})},closest:function(t,e){for(var i,n=0,s=this.length,o=[],a=ct.test(t)||"string"!=typeof t?st(t,e||this.context):0;s>n;n++)for(i=this[n];i&&i!==e;i=i.parentNode)if(i.nodeType<11&&(a?a.index(i)>-1:1===i.nodeType&&st.find.matchesSelector(i,t))){o.push(i);break}return this.pushStack(o.length>1?st.unique(o):o)},index:function(t){return t?"string"==typeof t?st.inArray(this[0],st(t)):st.inArray(t.jquery?t[0]:t,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,e){return this.pushStack(st.unique(st.merge(this.get(),st(t,e))))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),st.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},parents:function(t){return st.dir(t,"parentNode")},parentsUntil:function(t,e,i){return st.dir(t,"parentNode",i)},next:function(t){return s(t,"nextSibling")},prev:function(t){return s(t,"previousSibling")},nextAll:function(t){return st.dir(t,"nextSibling")},prevAll:function(t){return st.dir(t,"previousSibling")},nextUntil:function(t,e,i){return st.dir(t,"nextSibling",i)},prevUntil:function(t,e,i){return st.dir(t,"previousSibling",i)},siblings:function(t){return st.sibling((t.parentNode||{}).firstChild,t)},children:function(t){return st.sibling(t.firstChild)},contents:function(t){return st.nodeName(t,"iframe")?t.contentDocument||t.contentWindow.document:st.merge([],t.childNodes)}},function(t,e){st.fn[t]=function(i,n){var s=st.map(this,e,i);return"Until"!==t.slice(-5)&&(n=i),n&&"string"==typeof n&&(s=st.filter(n,s)),this.length>1&&(_t[t]||(s=st.unique(s)),vt.test(t)&&(s=s.reverse())),this.pushStack(s)}});var bt=/\S+/g,yt={};st.Callbacks=function(t){t="string"==typeof t?yt[t]||o(t):st.extend({},t);var e,i,n,s,a,r,l=[],h=!t.once&&[],c=function(o){for(i=t.memory&&o,n=!0,a=r||0,r=0,s=l.length,e=!0;l&&s>a;a++)if(l[a].apply(o[0],o[1])===!1&&t.stopOnFalse){i=!1;break}e=!1,l&&(h?h.length&&c(h.shift()):i?l=[]:u.disable())},u={add:function(){if(l){var n=l.length;!function o(e){st.each(e,function(e,i){var n=st.type(i);"function"===n?t.unique&&u.has(i)||l.push(i):i&&i.length&&"string"!==n&&o(i)})}(arguments),e?s=l.length:i&&(r=n,c(i))}return this},remove:function(){return l&&st.each(arguments,function(t,i){for(var n;(n=st.inArray(i,l,n))>-1;)l.splice(n,1),e&&(s>=n&&s--,a>=n&&a--)}),this},has:function(t){return t?st.inArray(t,l)>-1:!(!l||!l.length)},empty:function(){return l=[],s=0,this},disable:function(){return l=h=i=void 0,this},disabled:function(){return!l},lock:function(){return h=void 0,i||u.disable(),this},locked:function(){return!h},fireWith:function(t,i){return!l||n&&!h||(i=i||[],i=[t,i.slice?i.slice():i],e?h.push(i):c(i)),this},fire:function(){return u.fireWith(this,arguments),this},fired:function(){return!!n}};return u},st.extend({Deferred:function(t){var e=[["resolve","done",st.Callbacks("once memory"),"resolved"],["reject","fail",st.Callbacks("once memory"),"rejected"],["notify","progress",st.Callbacks("memory")]],i="pending",n={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},then:function(){var t=arguments;return st.Deferred(function(i){st.each(e,function(e,o){var a=st.isFunction(t[e])&&t[e];s[o[1]](function(){var t=a&&a.apply(this,arguments);t&&st.isFunction(t.promise)?t.promise().done(i.resolve).fail(i.reject).progress(i.notify):i[o[0]+"With"](this===n?i.promise():this,a?[t]:arguments)})}),t=null}).promise()},promise:function(t){return null!=t?st.extend(t,n):n}},s={};return n.pipe=n.then,st.each(e,function(t,o){var a=o[2],r=o[3];n[o[1]]=a.add,r&&a.add(function(){i=r},e[1^t][2].disable,e[2][2].lock),s[o[0]]=function(){return s[o[0]+"With"](this===s?n:this,arguments),this},s[o[0]+"With"]=a.fireWith}),n.promise(s),t&&t.call(s,s),s},when:function(t){var e,i,n,s=0,o=X.call(arguments),a=o.length,r=1!==a||t&&st.isFunction(t.promise)?a:0,l=1===r?t:st.Deferred(),h=function(t,i,n){return function(s){i[t]=this,n[t]=arguments.length>1?X.call(arguments):s,n===e?l.notifyWith(i,n):--r||l.resolveWith(i,n)}};if(a>1)for(e=new Array(a),i=new Array(a),n=new Array(a);a>s;s++)o[s]&&st.isFunction(o[s].promise)?o[s].promise().done(h(s,n,o)).fail(l.reject).progress(h(s,i,e)):--r;return r||l.resolveWith(n,o),l.promise()}});var wt;st.fn.ready=function(t){return st.ready.promise().done(t),this},st.extend({isReady:!1,readyWait:1,holdReady:function(t){t?st.readyWait++:st.ready(!0)},ready:function(t){if(t===!0?!--st.readyWait:!st.isReady){if(!ft.body)return setTimeout(st.ready);st.isReady=!0,t!==!0&&--st.readyWait>0||(wt.resolveWith(ft,[st]),st.fn.triggerHandler&&(st(ft).triggerHandler("ready"),st(ft).off("ready")))}}}),st.ready.promise=function(e){if(!wt)if(wt=st.Deferred(),"complete"===ft.readyState)setTimeout(st.ready);else if(ft.addEventListener)ft.addEventListener("DOMContentLoaded",r,!1),t.addEventListener("load",r,!1);else{ft.attachEvent("onreadystatechange",r),t.attachEvent("onload",r);var i=!1;try{i=null==t.frameElement&&ft.documentElement}catch(n){}i&&i.doScroll&&!function s(){if(!st.isReady){try{i.doScroll("left")}catch(t){return setTimeout(s,50)}a(),st.ready()}}()}return wt.promise(e)};var xt,kt="undefined";for(xt in st(it))break;it.ownLast="0"!==xt,it.inlineBlockNeedsLayout=!1,st(function(){var t,e,i,n;i=ft.getElementsByTagName("body")[0],i&&i.style&&(e=ft.createElement("div"),n=ft.createElement("div"),n.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",i.appendChild(n).appendChild(e),typeof e.style.zoom!==kt&&(e.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",it.inlineBlockNeedsLayout=t=3===e.offsetWidth,t&&(i.style.zoom=1)),i.removeChild(n))}),function(){var t=ft.createElement("div");if(null==it.deleteExpando){it.deleteExpando=!0;try{delete t.test}catch(e){it.deleteExpando=!1}}t=null}(),st.acceptData=function(t){var e=st.noData[(t.nodeName+" ").toLowerCase()],i=+t.nodeType||1;return(1===i||9===i)&&(!e||e!==!0&&t.getAttribute("classid")===e)};var Ct=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Dt=/([A-Z])/g;st.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(t){return t=t.nodeType?st.cache[t[st.expando]]:t[st.expando],!!t&&!h(t)},data:function(t,e,i){return c(t,e,i)},removeData:function(t,e){return u(t,e)},_data:function(t,e,i){return c(t,e,i,!0)},_removeData:function(t,e){return u(t,e,!0)}}),st.fn.extend({data:function(t,e){var i,n,s,o=this[0],a=o&&o.attributes;if(void 0===t){if(this.length&&(s=st.data(o),1===o.nodeType&&!st._data(o,"parsedAttrs"))){for(i=a.length;i--;)a[i]&&(n=a[i].name,0===n.indexOf("data-")&&(n=st.camelCase(n.slice(5)),l(o,n,s[n])));st._data(o,"parsedAttrs",!0)}return s}return"object"==typeof t?this.each(function(){st.data(this,t)}):arguments.length>1?this.each(function(){st.data(this,t,e)}):o?l(o,t,st.data(o,t)):void 0},removeData:function(t){return this.each(function(){st.removeData(this,t)})}}),st.extend({queue:function(t,e,i){var n;return t?(e=(e||"fx")+"queue",n=st._data(t,e),i&&(!n||st.isArray(i)?n=st._data(t,e,st.makeArray(i)):n.push(i)),n||[]):void 0},dequeue:function(t,e){e=e||"fx";var i=st.queue(t,e),n=i.length,s=i.shift(),o=st._queueHooks(t,e),a=function(){st.dequeue(t,e)};"inprogress"===s&&(s=i.shift(),n--),s&&("fx"===e&&i.unshift("inprogress"),delete o.stop,s.call(t,a,o)),!n&&o&&o.empty.fire()},_queueHooks:function(t,e){var i=e+"queueHooks";return st._data(t,i)||st._data(t,i,{empty:st.Callbacks("once memory").add(function(){st._removeData(t,e+"queue"),st._removeData(t,i)})})}}),st.fn.extend({queue:function(t,e){var i=2;return"string"!=typeof t&&(e=t,t="fx",i--),arguments.length<i?st.queue(this[0],t):void 0===e?this:this.each(function(){var i=st.queue(this,t,e);st._queueHooks(this,t),"fx"===t&&"inprogress"!==i[0]&&st.dequeue(this,t)})},dequeue:function(t){return this.each(function(){st.dequeue(this,t)})},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,e){var i,n=1,s=st.Deferred(),o=this,a=this.length,r=function(){--n||s.resolveWith(o,[o])};for("string"!=typeof t&&(e=t,t=void 0),t=t||"fx";a--;)i=st._data(o[a],t+"queueHooks"),i&&i.empty&&(n++,i.empty.add(r));return r(),s.promise(e)}});var Tt=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,It=["Top","Right","Bottom","Left"],St=function(t,e){return t=e||t,"none"===st.css(t,"display")||!st.contains(t.ownerDocument,t)},Mt=st.access=function(t,e,i,n,s,o,a){var r=0,l=t.length,h=null==i;if("object"===st.type(i)){s=!0;for(r in i)st.access(t,e,r,i[r],!0,o,a)}else if(void 0!==n&&(s=!0,st.isFunction(n)||(a=!0),h&&(a?(e.call(t,n),e=null):(h=e,e=function(t,e,i){return h.call(st(t),i)})),e))for(;l>r;r++)e(t[r],i,a?n:n.call(t[r],r,e(t[r],i)));return s?t:h?e.call(t):l?e(t[0],i):o},Nt=/^(?:checkbox|radio)$/i;!function(){var t=ft.createElement("input"),e=ft.createElement("div"),i=ft.createDocumentFragment();if(e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",it.leadingWhitespace=3===e.firstChild.nodeType,it.tbody=!e.getElementsByTagName("tbody").length,it.htmlSerialize=!!e.getElementsByTagName("link").length,it.html5Clone="<:nav></:nav>"!==ft.createElement("nav").cloneNode(!0).outerHTML,t.type="checkbox",t.checked=!0,i.appendChild(t),it.appendChecked=t.checked,e.innerHTML="<textarea>x</textarea>",it.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue,i.appendChild(e),e.innerHTML="<input type='radio' checked='checked' name='t'/>",it.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,it.noCloneEvent=!0,e.attachEvent&&(e.attachEvent("onclick",function(){it.noCloneEvent=!1}),e.cloneNode(!0).click()),null==it.deleteExpando){it.deleteExpando=!0;try{delete e.test}catch(n){it.deleteExpando=!1}}}(),function(){var e,i,n=ft.createElement("div");for(e in{submit:!0,change:!0,focusin:!0})i="on"+e,(it[e+"Bubbles"]=i in t)||(n.setAttribute(i,"t"),it[e+"Bubbles"]=n.attributes[i].expando===!1);n=null}();var Pt=/^(?:input|select|textarea)$/i,Et=/^key/,At=/^(?:mouse|pointer|contextmenu)|click/,Ht=/^(?:focusinfocus|focusoutblur)$/,Ot=/^([^.]*)(?:\.(.+)|)$/;st.event={global:{},add:function(t,e,i,n,s){var o,a,r,l,h,c,u,d,p,f,m,g=st._data(t);if(g){for(i.handler&&(l=i,i=l.handler,s=l.selector),i.guid||(i.guid=st.guid++),(a=g.events)||(a=g.events={}),(c=g.handle)||(c=g.handle=function(t){return typeof st===kt||t&&st.event.triggered===t.type?void 0:st.event.dispatch.apply(c.elem,arguments)},c.elem=t),e=(e||"").match(bt)||[""],r=e.length;r--;)o=Ot.exec(e[r])||[],p=m=o[1],f=(o[2]||"").split(".").sort(),p&&(h=st.event.special[p]||{},p=(s?h.delegateType:h.bindType)||p,h=st.event.special[p]||{},u=st.extend({type:p,origType:m,data:n,handler:i,guid:i.guid,selector:s,needsContext:s&&st.expr.match.needsContext.test(s),namespace:f.join(".")},l),(d=a[p])||(d=a[p]=[],d.delegateCount=0,h.setup&&h.setup.call(t,n,f,c)!==!1||(t.addEventListener?t.addEventListener(p,c,!1):t.attachEvent&&t.attachEvent("on"+p,c))),h.add&&(h.add.call(t,u),u.handler.guid||(u.handler.guid=i.guid)),s?d.splice(d.delegateCount++,0,u):d.push(u),st.event.global[p]=!0);t=null}},remove:function(t,e,i,n,s){var o,a,r,l,h,c,u,d,p,f,m,g=st.hasData(t)&&st._data(t);if(g&&(c=g.events)){for(e=(e||"").match(bt)||[""],h=e.length;h--;)if(r=Ot.exec(e[h])||[],p=m=r[1],f=(r[2]||"").split(".").sort(),p){for(u=st.event.special[p]||{},p=(n?u.delegateType:u.bindType)||p,d=c[p]||[],r=r[2]&&new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=d.length;o--;)a=d[o],!s&&m!==a.origType||i&&i.guid!==a.guid||r&&!r.test(a.namespace)||n&&n!==a.selector&&("**"!==n||!a.selector)||(d.splice(o,1),a.selector&&d.delegateCount--,u.remove&&u.remove.call(t,a));l&&!d.length&&(u.teardown&&u.teardown.call(t,f,g.handle)!==!1||st.removeEvent(t,p,g.handle),delete c[p])}else for(p in c)st.event.remove(t,p+e[h],i,n,!0);st.isEmptyObject(c)&&(delete g.handle,st._removeData(t,"events"))}},trigger:function(e,i,n,s){var o,a,r,l,h,c,u,d=[n||ft],p=et.call(e,"type")?e.type:e,f=et.call(e,"namespace")?e.namespace.split("."):[];if(r=c=n=n||ft,3!==n.nodeType&&8!==n.nodeType&&!Ht.test(p+st.event.triggered)&&(p.indexOf(".")>=0&&(f=p.split("."),p=f.shift(),f.sort()),a=p.indexOf(":")<0&&"on"+p,e=e[st.expando]?e:new st.Event(p,"object"==typeof e&&e),e.isTrigger=s?2:3,e.namespace=f.join("."),e.namespace_re=e.namespace?new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),i=null==i?[e]:st.makeArray(i,[e]),h=st.event.special[p]||{},s||!h.trigger||h.trigger.apply(n,i)!==!1)){if(!s&&!h.noBubble&&!st.isWindow(n)){for(l=h.delegateType||p,Ht.test(l+p)||(r=r.parentNode);r;r=r.parentNode)d.push(r),c=r;c===(n.ownerDocument||ft)&&d.push(c.defaultView||c.parentWindow||t)}for(u=0;(r=d[u++])&&!e.isPropagationStopped();)e.type=u>1?l:h.bindType||p,o=(st._data(r,"events")||{})[e.type]&&st._data(r,"handle"),o&&o.apply(r,i),o=a&&r[a],o&&o.apply&&st.acceptData(r)&&(e.result=o.apply(r,i),e.result===!1&&e.preventDefault());if(e.type=p,!s&&!e.isDefaultPrevented()&&(!h._default||h._default.apply(d.pop(),i)===!1)&&st.acceptData(n)&&a&&n[p]&&!st.isWindow(n)){c=n[a],c&&(n[a]=null),st.event.triggered=p;try{n[p]()}catch(m){}st.event.triggered=void 0,c&&(n[a]=c)}return e.result}},dispatch:function(t){t=st.event.fix(t);var e,i,n,s,o,a=[],r=X.call(arguments),l=(st._data(this,"events")||{})[t.type]||[],h=st.event.special[t.type]||{};if(r[0]=t,t.delegateTarget=this,!h.preDispatch||h.preDispatch.call(this,t)!==!1){for(a=st.event.handlers.call(this,t,l),e=0;(s=a[e++])&&!t.isPropagationStopped();)for(t.currentTarget=s.elem,o=0;(n=s.handlers[o++])&&!t.isImmediatePropagationStopped();)(!t.namespace_re||t.namespace_re.test(n.namespace))&&(t.handleObj=n,t.data=n.data,i=((st.event.special[n.origType]||{}).handle||n.handler).apply(s.elem,r),void 0!==i&&(t.result=i)===!1&&(t.preventDefault(),t.stopPropagation()));return h.postDispatch&&h.postDispatch.call(this,t),t.result}},handlers:function(t,e){var i,n,s,o,a=[],r=e.delegateCount,l=t.target;if(r&&l.nodeType&&(!t.button||"click"!==t.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==t.type)){for(s=[],o=0;r>o;o++)n=e[o],i=n.selector+" ",void 0===s[i]&&(s[i]=n.needsContext?st(i,this).index(l)>=0:st.find(i,this,null,[l]).length),s[i]&&s.push(n);s.length&&a.push({elem:l,handlers:s})}return r<e.length&&a.push({elem:this,handlers:e.slice(r)}),a},fix:function(t){if(t[st.expando])return t;var e,i,n,s=t.type,o=t,a=this.fixHooks[s];for(a||(this.fixHooks[s]=a=At.test(s)?this.mouseHooks:Et.test(s)?this.keyHooks:{}),n=a.props?this.props.concat(a.props):this.props,t=new st.Event(o),e=n.length;e--;)i=n[e],t[i]=o[i];return t.target||(t.target=o.srcElement||ft),3===t.target.nodeType&&(t.target=t.target.parentNode),t.metaKey=!!t.metaKey,a.filter?a.filter(t,o):t},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(t,e){return null==t.which&&(t.which=null!=e.charCode?e.charCode:e.keyCode),t}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(t,e){var i,n,s,o=e.button,a=e.fromElement;return null==t.pageX&&null!=e.clientX&&(n=t.target.ownerDocument||ft,s=n.documentElement,i=n.body,t.pageX=e.clientX+(s&&s.scrollLeft||i&&i.scrollLeft||0)-(s&&s.clientLeft||i&&i.clientLeft||0),t.pageY=e.clientY+(s&&s.scrollTop||i&&i.scrollTop||0)-(s&&s.clientTop||i&&i.clientTop||0)),!t.relatedTarget&&a&&(t.relatedTarget=a===t.target?e.toElement:a),t.which||void 0===o||(t.which=1&o?1:2&o?3:4&o?2:0),t}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==f()&&this.focus)try{return this.focus(),!1}catch(t){}},delegateType:"focusin"},blur:{trigger:function(){return this===f()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return st.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(t){return st.nodeName(t.target,"a")}},beforeunload:{postDispatch:function(t){void 0!==t.result&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}},simulate:function(t,e,i,n){var s=st.extend(new st.Event,i,{type:t,isSimulated:!0,originalEvent:{}});n?st.event.trigger(s,null,e):st.event.dispatch.call(e,s),s.isDefaultPrevented()&&i.preventDefault()}},st.removeEvent=ft.removeEventListener?function(t,e,i){t.removeEventListener&&t.removeEventListener(e,i,!1)}:function(t,e,i){var n="on"+e;t.detachEvent&&(typeof t[n]===kt&&(t[n]=null),t.detachEvent(n,i))},st.Event=function(t,e){return this instanceof st.Event?(t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&t.returnValue===!1?d:p):this.type=t,e&&st.extend(this,e),this.timeStamp=t&&t.timeStamp||st.now(),void(this[st.expando]=!0)):new st.Event(t,e)},st.Event.prototype={isDefaultPrevented:p,isPropagationStopped:p,isImmediatePropagationStopped:p,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=d,t&&(t.preventDefault?t.preventDefault():t.returnValue=!1)},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=d,t&&(t.stopPropagation&&t.stopPropagation(),t.cancelBubble=!0)},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=d,t&&t.stopImmediatePropagation&&t.stopImmediatePropagation(),this.stopPropagation()}},st.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,e){st.event.special[t]={delegateType:e,bindType:e,handle:function(t){var i,n=this,s=t.relatedTarget,o=t.handleObj;return(!s||s!==n&&!st.contains(n,s))&&(t.type=o.origType,i=o.handler.apply(this,arguments),t.type=e),i}}}),it.submitBubbles||(st.event.special.submit={setup:function(){return!st.nodeName(this,"form")&&void st.event.add(this,"click._submit keypress._submit",function(t){var e=t.target,i=st.nodeName(e,"input")||st.nodeName(e,"button")?e.form:void 0;i&&!st._data(i,"submitBubbles")&&(st.event.add(i,"submit._submit",function(t){t._submit_bubble=!0}),st._data(i,"submitBubbles",!0))})},postDispatch:function(t){t._submit_bubble&&(delete t._submit_bubble,this.parentNode&&!t.isTrigger&&st.event.simulate("submit",this.parentNode,t,!0))},teardown:function(){return!st.nodeName(this,"form")&&void st.event.remove(this,"._submit")}}),it.changeBubbles||(st.event.special.change={setup:function(){return Pt.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(st.event.add(this,"propertychange._change",function(t){"checked"===t.originalEvent.propertyName&&(this._just_changed=!0)}),st.event.add(this,"click._change",function(t){this._just_changed&&!t.isTrigger&&(this._just_changed=!1),st.event.simulate("change",this,t,!0)})),!1):void st.event.add(this,"beforeactivate._change",function(t){var e=t.target;Pt.test(e.nodeName)&&!st._data(e,"changeBubbles")&&(st.event.add(e,"change._change",function(t){!this.parentNode||t.isSimulated||t.isTrigger||st.event.simulate("change",this.parentNode,t,!0)}),st._data(e,"changeBubbles",!0))})},handle:function(t){var e=t.target;return this!==e||t.isSimulated||t.isTrigger||"radio"!==e.type&&"checkbox"!==e.type?t.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return st.event.remove(this,"._change"),!Pt.test(this.nodeName)}}),it.focusinBubbles||st.each({focus:"focusin",blur:"focusout"},function(t,e){var i=function(t){st.event.simulate(e,t.target,st.event.fix(t),!0)};st.event.special[e]={setup:function(){var n=this.ownerDocument||this,s=st._data(n,e);s||n.addEventListener(t,i,!0),st._data(n,e,(s||0)+1)},teardown:function(){var n=this.ownerDocument||this,s=st._data(n,e)-1;s?st._data(n,e,s):(n.removeEventListener(t,i,!0),st._removeData(n,e))}}}),st.fn.extend({on:function(t,e,i,n,s){var o,a;if("object"==typeof t){"string"!=typeof e&&(i=i||e,e=void 0);for(o in t)this.on(o,e,i,t[o],s);return this}if(null==i&&null==n?(n=e,i=e=void 0):null==n&&("string"==typeof e?(n=i,i=void 0):(n=i,i=e,e=void 0)),n===!1)n=p;else if(!n)return this;return 1===s&&(a=n,n=function(t){return st().off(t),a.apply(this,arguments)},n.guid=a.guid||(a.guid=st.guid++)),this.each(function(){st.event.add(this,t,n,i,e)})},one:function(t,e,i,n){return this.on(t,e,i,n,1)},off:function(t,e,i){var n,s;if(t&&t.preventDefault&&t.handleObj)return n=t.handleObj,st(t.delegateTarget).off(n.namespace?n.origType+"."+n.namespace:n.origType,n.selector,n.handler),this;if("object"==typeof t){for(s in t)this.off(s,e,t[s]);return this}return(e===!1||"function"==typeof e)&&(i=e,e=void 0),i===!1&&(i=p),this.each(function(){st.event.remove(this,t,i,e)})},trigger:function(t,e){return this.each(function(){st.event.trigger(t,e,this)})},triggerHandler:function(t,e){var i=this[0];return i?st.event.trigger(t,e,i,!0):void 0}});var zt="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",Wt=/ jQuery\d+="(?:null|\d+)"/g,Lt=new RegExp("<(?:"+zt+")[\\s/>]","i"),Ft=/^\s+/,jt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,$t=/<([\w:]+)/,Rt=/<tbody/i,Bt=/<|&#?\w+;/,qt=/<(?:script|style|link)/i,Yt=/checked\s*(?:[^=]|=\s*.checked.)/i,Ut=/^$|\/(?:java|ecma)script/i,Kt=/^true\/(.*)/,Vt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Xt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:it.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},Gt=m(ft),Qt=Gt.appendChild(ft.createElement("div"));Xt.optgroup=Xt.option,Xt.tbody=Xt.tfoot=Xt.colgroup=Xt.caption=Xt.thead,Xt.th=Xt.td,st.extend({clone:function(t,e,i){var n,s,o,a,r,l=st.contains(t.ownerDocument,t);if(it.html5Clone||st.isXMLDoc(t)||!Lt.test("<"+t.nodeName+">")?o=t.cloneNode(!0):(Qt.innerHTML=t.outerHTML,Qt.removeChild(o=Qt.firstChild)),!(it.noCloneEvent&&it.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||st.isXMLDoc(t)))for(n=g(o),r=g(t),a=0;null!=(s=r[a]);++a)n[a]&&k(s,n[a]);if(e)if(i)for(r=r||g(t),n=n||g(o),a=0;null!=(s=r[a]);a++)x(s,n[a]);else x(t,o);return n=g(o,"script"),n.length>0&&w(n,!l&&g(t,"script")),n=r=s=null,o},buildFragment:function(t,e,i,n){for(var s,o,a,r,l,h,c,u=t.length,d=m(e),p=[],f=0;u>f;f++)if(o=t[f],o||0===o)if("object"===st.type(o))st.merge(p,o.nodeType?[o]:o);else if(Bt.test(o)){for(r=r||d.appendChild(e.createElement("div")),l=($t.exec(o)||["",""])[1].toLowerCase(),c=Xt[l]||Xt._default,r.innerHTML=c[1]+o.replace(jt,"<$1></$2>")+c[2],s=c[0];s--;)r=r.lastChild;if(!it.leadingWhitespace&&Ft.test(o)&&p.push(e.createTextNode(Ft.exec(o)[0])),!it.tbody)for(o="table"!==l||Rt.test(o)?"<table>"!==c[1]||Rt.test(o)?0:r:r.firstChild,s=o&&o.childNodes.length;s--;)st.nodeName(h=o.childNodes[s],"tbody")&&!h.childNodes.length&&o.removeChild(h);for(st.merge(p,r.childNodes),r.textContent="";r.firstChild;)r.removeChild(r.firstChild);r=d.lastChild}else p.push(e.createTextNode(o));for(r&&d.removeChild(r),it.appendChecked||st.grep(g(p,"input"),v),f=0;o=p[f++];)if((!n||-1===st.inArray(o,n))&&(a=st.contains(o.ownerDocument,o),r=g(d.appendChild(o),"script"),a&&w(r),i))for(s=0;o=r[s++];)Ut.test(o.type||"")&&i.push(o);return r=null,d},cleanData:function(t,e){for(var i,n,s,o,a=0,r=st.expando,l=st.cache,h=it.deleteExpando,c=st.event.special;null!=(i=t[a]);a++)if((e||st.acceptData(i))&&(s=i[r],o=s&&l[s])){if(o.events)for(n in o.events)c[n]?st.event.remove(i,n):st.removeEvent(i,n,o.handle);l[s]&&(delete l[s],h?delete i[r]:typeof i.removeAttribute!==kt?i.removeAttribute(r):i[r]=null,V.push(s))}}}),st.fn.extend({text:function(t){return Mt(this,function(t){return void 0===t?st.text(this):this.empty().append((this[0]&&this[0].ownerDocument||ft).createTextNode(t))},null,t,arguments.length)},append:function(){return this.domManip(arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=_(this,t);e.appendChild(t)}})},prepend:function(){return this.domManip(arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=_(this,t);e.insertBefore(t,e.firstChild)}})},before:function(){return this.domManip(arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)})},after:function(){return this.domManip(arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)})},remove:function(t,e){for(var i,n=t?st.filter(t,this):this,s=0;null!=(i=n[s]);s++)e||1!==i.nodeType||st.cleanData(g(i)),i.parentNode&&(e&&st.contains(i.ownerDocument,i)&&w(g(i,"script")),i.parentNode.removeChild(i));return this},empty:function(){for(var t,e=0;null!=(t=this[e]);e++){for(1===t.nodeType&&st.cleanData(g(t,!1));t.firstChild;)t.removeChild(t.firstChild);t.options&&st.nodeName(t,"select")&&(t.options.length=0)}return this},clone:function(t,e){return t=null!=t&&t,e=null==e?t:e,this.map(function(){return st.clone(this,t,e)})},html:function(t){return Mt(this,function(t){var e=this[0]||{},i=0,n=this.length;if(void 0===t)return 1===e.nodeType?e.innerHTML.replace(Wt,""):void 0;if(!("string"!=typeof t||qt.test(t)||!it.htmlSerialize&&Lt.test(t)||!it.leadingWhitespace&&Ft.test(t)||Xt[($t.exec(t)||["",""])[1].toLowerCase()])){t=t.replace(jt,"<$1></$2>");try{for(;n>i;i++)e=this[i]||{},1===e.nodeType&&(st.cleanData(g(e,!1)),e.innerHTML=t);e=0}catch(s){}}e&&this.empty().append(t)},null,t,arguments.length)},replaceWith:function(){var t=arguments[0];return this.domManip(arguments,function(e){t=this.parentNode,st.cleanData(g(this)),t&&t.replaceChild(e,this)}),t&&(t.length||t.nodeType)?this:this.remove()},detach:function(t){return this.remove(t,!0)},domManip:function(t,e){t=G.apply([],t);var i,n,s,o,a,r,l=0,h=this.length,c=this,u=h-1,d=t[0],p=st.isFunction(d);if(p||h>1&&"string"==typeof d&&!it.checkClone&&Yt.test(d))return this.each(function(i){var n=c.eq(i);p&&(t[0]=d.call(this,i,n.html())),n.domManip(t,e)});if(h&&(r=st.buildFragment(t,this[0].ownerDocument,!1,this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=st.map(g(r,"script"),b),s=o.length;h>l;l++)n=r,l!==u&&(n=st.clone(n,!0,!0),s&&st.merge(o,g(n,"script"))),e.call(this[l],n,l);if(s)for(a=o[o.length-1].ownerDocument,st.map(o,y),l=0;s>l;l++)n=o[l],Ut.test(n.type||"")&&!st._data(n,"globalEval")&&st.contains(a,n)&&(n.src?st._evalUrl&&st._evalUrl(n.src):st.globalEval((n.text||n.textContent||n.innerHTML||"").replace(Vt,"")));r=i=null}return this}}),st.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,e){st.fn[t]=function(t){for(var i,n=0,s=[],o=st(t),a=o.length-1;a>=n;n++)i=n===a?this:this.clone(!0),st(o[n])[e](i),Q.apply(s,i.get());return this.pushStack(s)}});var Jt,Zt={};!function(){var t;it.shrinkWrapBlocks=function(){if(null!=t)return t;t=!1;var e,i,n;return i=ft.getElementsByTagName("body")[0],i&&i.style?(e=ft.createElement("div"),n=ft.createElement("div"),n.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",i.appendChild(n).appendChild(e),typeof e.style.zoom!==kt&&(e.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",e.appendChild(ft.createElement("div")).style.width="5px",t=3!==e.offsetWidth),i.removeChild(n),t):void 0}}();var te,ee,ie=/^margin/,ne=new RegExp("^("+Tt+")(?!px)[a-z%]+$","i"),se=/^(top|right|bottom|left)$/;t.getComputedStyle?(te=function(t){return t.ownerDocument.defaultView.getComputedStyle(t,null)},ee=function(t,e,i){var n,s,o,a,r=t.style;return i=i||te(t),a=i?i.getPropertyValue(e)||i[e]:void 0,i&&(""!==a||st.contains(t.ownerDocument,t)||(a=st.style(t,e)),
ne.test(a)&&ie.test(e)&&(n=r.width,s=r.minWidth,o=r.maxWidth,r.minWidth=r.maxWidth=r.width=a,a=i.width,r.width=n,r.minWidth=s,r.maxWidth=o)),void 0===a?a:a+""}):ft.documentElement.currentStyle&&(te=function(t){return t.currentStyle},ee=function(t,e,i){var n,s,o,a,r=t.style;return i=i||te(t),a=i?i[e]:void 0,null==a&&r&&r[e]&&(a=r[e]),ne.test(a)&&!se.test(e)&&(n=r.left,s=t.runtimeStyle,o=s&&s.left,o&&(s.left=t.currentStyle.left),r.left="fontSize"===e?"1em":a,a=r.pixelLeft+"px",r.left=n,o&&(s.left=o)),void 0===a?a:a+""||"auto"}),!function(){function e(){var e,i,n,s;i=ft.getElementsByTagName("body")[0],i&&i.style&&(e=ft.createElement("div"),n=ft.createElement("div"),n.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",i.appendChild(n).appendChild(e),e.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",o=a=!1,l=!0,t.getComputedStyle&&(o="1%"!==(t.getComputedStyle(e,null)||{}).top,a="4px"===(t.getComputedStyle(e,null)||{width:"4px"}).width,s=e.appendChild(ft.createElement("div")),s.style.cssText=e.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",s.style.marginRight=s.style.width="0",e.style.width="1px",l=!parseFloat((t.getComputedStyle(s,null)||{}).marginRight)),e.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=e.getElementsByTagName("td"),s[0].style.cssText="margin:0;border:0;padding:0;display:none",r=0===s[0].offsetHeight,r&&(s[0].style.display="",s[1].style.display="none",r=0===s[0].offsetHeight),i.removeChild(n))}var i,n,s,o,a,r,l;i=ft.createElement("div"),i.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",s=i.getElementsByTagName("a")[0],(n=s&&s.style)&&(n.cssText="float:left;opacity:.5",it.opacity="0.5"===n.opacity,it.cssFloat=!!n.cssFloat,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",it.clearCloneStyle="content-box"===i.style.backgroundClip,it.boxSizing=""===n.boxSizing||""===n.MozBoxSizing||""===n.WebkitBoxSizing,st.extend(it,{reliableHiddenOffsets:function(){return null==r&&e(),r},boxSizingReliable:function(){return null==a&&e(),a},pixelPosition:function(){return null==o&&e(),o},reliableMarginRight:function(){return null==l&&e(),l}}))}(),st.swap=function(t,e,i,n){var s,o,a={};for(o in e)a[o]=t.style[o],t.style[o]=e[o];s=i.apply(t,n||[]);for(o in e)t.style[o]=a[o];return s};var oe=/alpha\([^)]*\)/i,ae=/opacity\s*=\s*([^)]*)/,re=/^(none|table(?!-c[ea]).+)/,le=new RegExp("^("+Tt+")(.*)$","i"),he=new RegExp("^([+-])=("+Tt+")","i"),ce={position:"absolute",visibility:"hidden",display:"block"},ue={letterSpacing:"0",fontWeight:"400"},de=["Webkit","O","Moz","ms"];st.extend({cssHooks:{opacity:{get:function(t,e){if(e){var i=ee(t,"opacity");return""===i?"1":i}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":it.cssFloat?"cssFloat":"styleFloat"},style:function(t,e,i,n){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){var s,o,a,r=st.camelCase(e),l=t.style;if(e=st.cssProps[r]||(st.cssProps[r]=I(l,r)),a=st.cssHooks[e]||st.cssHooks[r],void 0===i)return a&&"get"in a&&void 0!==(s=a.get(t,!1,n))?s:l[e];if(o=typeof i,"string"===o&&(s=he.exec(i))&&(i=(s[1]+1)*s[2]+parseFloat(st.css(t,e)),o="number"),null!=i&&i===i&&("number"!==o||st.cssNumber[r]||(i+="px"),it.clearCloneStyle||""!==i||0!==e.indexOf("background")||(l[e]="inherit"),!(a&&"set"in a&&void 0===(i=a.set(t,i,n)))))try{l[e]=i}catch(h){}}},css:function(t,e,i,n){var s,o,a,r=st.camelCase(e);return e=st.cssProps[r]||(st.cssProps[r]=I(t.style,r)),a=st.cssHooks[e]||st.cssHooks[r],a&&"get"in a&&(o=a.get(t,!0,i)),void 0===o&&(o=ee(t,e,n)),"normal"===o&&e in ue&&(o=ue[e]),""===i||i?(s=parseFloat(o),i===!0||st.isNumeric(s)?s||0:o):o}}),st.each(["height","width"],function(t,e){st.cssHooks[e]={get:function(t,i,n){return i?re.test(st.css(t,"display"))&&0===t.offsetWidth?st.swap(t,ce,function(){return P(t,e,n)}):P(t,e,n):void 0},set:function(t,i,n){var s=n&&te(t);return M(t,i,n?N(t,e,n,it.boxSizing&&"border-box"===st.css(t,"boxSizing",!1,s),s):0)}}}),it.opacity||(st.cssHooks.opacity={get:function(t,e){return ae.test((e&&t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":e?"1":""},set:function(t,e){var i=t.style,n=t.currentStyle,s=st.isNumeric(e)?"alpha(opacity="+100*e+")":"",o=n&&n.filter||i.filter||"";i.zoom=1,(e>=1||""===e)&&""===st.trim(o.replace(oe,""))&&i.removeAttribute&&(i.removeAttribute("filter"),""===e||n&&!n.filter)||(i.filter=oe.test(o)?o.replace(oe,s):o+" "+s)}}),st.cssHooks.marginRight=T(it.reliableMarginRight,function(t,e){return e?st.swap(t,{display:"inline-block"},ee,[t,"marginRight"]):void 0}),st.each({margin:"",padding:"",border:"Width"},function(t,e){st.cssHooks[t+e]={expand:function(i){for(var n=0,s={},o="string"==typeof i?i.split(" "):[i];4>n;n++)s[t+It[n]+e]=o[n]||o[n-2]||o[0];return s}},ie.test(t)||(st.cssHooks[t+e].set=M)}),st.fn.extend({css:function(t,e){return Mt(this,function(t,e,i){var n,s,o={},a=0;if(st.isArray(e)){for(n=te(t),s=e.length;s>a;a++)o[e[a]]=st.css(t,e[a],!1,n);return o}return void 0!==i?st.style(t,e,i):st.css(t,e)},t,e,arguments.length>1)},show:function(){return S(this,!0)},hide:function(){return S(this)},toggle:function(t){return"boolean"==typeof t?t?this.show():this.hide():this.each(function(){St(this)?st(this).show():st(this).hide()})}}),st.Tween=E,E.prototype={constructor:E,init:function(t,e,i,n,s,o){this.elem=t,this.prop=i,this.easing=s||"swing",this.options=e,this.start=this.now=this.cur(),this.end=n,this.unit=o||(st.cssNumber[i]?"":"px")},cur:function(){var t=E.propHooks[this.prop];return t&&t.get?t.get(this):E.propHooks._default.get(this)},run:function(t){var e,i=E.propHooks[this.prop];return this.pos=e=this.options.duration?st.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):t,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),i&&i.set?i.set(this):E.propHooks._default.set(this),this}},E.prototype.init.prototype=E.prototype,E.propHooks={_default:{get:function(t){var e;return null==t.elem[t.prop]||t.elem.style&&null!=t.elem.style[t.prop]?(e=st.css(t.elem,t.prop,""),e&&"auto"!==e?e:0):t.elem[t.prop]},set:function(t){st.fx.step[t.prop]?st.fx.step[t.prop](t):t.elem.style&&(null!=t.elem.style[st.cssProps[t.prop]]||st.cssHooks[t.prop])?st.style(t.elem,t.prop,t.now+t.unit):t.elem[t.prop]=t.now}}},E.propHooks.scrollTop=E.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},st.easing={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2}},st.fx=E.prototype.init,st.fx.step={};var pe,fe,me=/^(?:toggle|show|hide)$/,ge=new RegExp("^(?:([+-])=|)("+Tt+")([a-z%]*)$","i"),ve=/queueHooks$/,_e=[z],be={"*":[function(t,e){var i=this.createTween(t,e),n=i.cur(),s=ge.exec(e),o=s&&s[3]||(st.cssNumber[t]?"":"px"),a=(st.cssNumber[t]||"px"!==o&&+n)&&ge.exec(st.css(i.elem,t)),r=1,l=20;if(a&&a[3]!==o){o=o||a[3],s=s||[],a=+n||1;do r=r||".5",a/=r,st.style(i.elem,t,a+o);while(r!==(r=i.cur()/n)&&1!==r&&--l)}return s&&(a=i.start=+a||+n||0,i.unit=o,i.end=s[1]?a+(s[1]+1)*s[2]:+s[2]),i}]};st.Animation=st.extend(L,{tweener:function(t,e){st.isFunction(t)?(e=t,t=["*"]):t=t.split(" ");for(var i,n=0,s=t.length;s>n;n++)i=t[n],be[i]=be[i]||[],be[i].unshift(e)},prefilter:function(t,e){e?_e.unshift(t):_e.push(t)}}),st.speed=function(t,e,i){var n=t&&"object"==typeof t?st.extend({},t):{complete:i||!i&&e||st.isFunction(t)&&t,duration:t,easing:i&&e||e&&!st.isFunction(e)&&e};return n.duration=st.fx.off?0:"number"==typeof n.duration?n.duration:n.duration in st.fx.speeds?st.fx.speeds[n.duration]:st.fx.speeds._default,(null==n.queue||n.queue===!0)&&(n.queue="fx"),n.old=n.complete,n.complete=function(){st.isFunction(n.old)&&n.old.call(this),n.queue&&st.dequeue(this,n.queue)},n},st.fn.extend({fadeTo:function(t,e,i,n){return this.filter(St).css("opacity",0).show().end().animate({opacity:e},t,i,n)},animate:function(t,e,i,n){var s=st.isEmptyObject(t),o=st.speed(e,i,n),a=function(){var e=L(this,st.extend({},t),o);(s||st._data(this,"finish"))&&e.stop(!0)};return a.finish=a,s||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(t,e,i){var n=function(t){var e=t.stop;delete t.stop,e(i)};return"string"!=typeof t&&(i=e,e=t,t=void 0),e&&t!==!1&&this.queue(t||"fx",[]),this.each(function(){var e=!0,s=null!=t&&t+"queueHooks",o=st.timers,a=st._data(this);if(s)a[s]&&a[s].stop&&n(a[s]);else for(s in a)a[s]&&a[s].stop&&ve.test(s)&&n(a[s]);for(s=o.length;s--;)o[s].elem!==this||null!=t&&o[s].queue!==t||(o[s].anim.stop(i),e=!1,o.splice(s,1));(e||!i)&&st.dequeue(this,t)})},finish:function(t){return t!==!1&&(t=t||"fx"),this.each(function(){var e,i=st._data(this),n=i[t+"queue"],s=i[t+"queueHooks"],o=st.timers,a=n?n.length:0;for(i.finish=!0,st.queue(this,t,[]),s&&s.stop&&s.stop.call(this,!0),e=o.length;e--;)o[e].elem===this&&o[e].queue===t&&(o[e].anim.stop(!0),o.splice(e,1));for(e=0;a>e;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete i.finish})}}),st.each(["toggle","show","hide"],function(t,e){var i=st.fn[e];st.fn[e]=function(t,n,s){return null==t||"boolean"==typeof t?i.apply(this,arguments):this.animate(H(e,!0),t,n,s)}}),st.each({slideDown:H("show"),slideUp:H("hide"),slideToggle:H("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,e){st.fn[t]=function(t,i,n){return this.animate(e,t,i,n)}}),st.timers=[],st.fx.tick=function(){var t,e=st.timers,i=0;for(pe=st.now();i<e.length;i++)t=e[i],t()||e[i]!==t||e.splice(i--,1);e.length||st.fx.stop(),pe=void 0},st.fx.timer=function(t){st.timers.push(t),t()?st.fx.start():st.timers.pop()},st.fx.interval=13,st.fx.start=function(){fe||(fe=setInterval(st.fx.tick,st.fx.interval))},st.fx.stop=function(){clearInterval(fe),fe=null},st.fx.speeds={slow:600,fast:200,_default:400},st.fn.delay=function(t,e){return t=st.fx?st.fx.speeds[t]||t:t,e=e||"fx",this.queue(e,function(e,i){var n=setTimeout(e,t);i.stop=function(){clearTimeout(n)}})},function(){var t,e,i,n,s;e=ft.createElement("div"),e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=e.getElementsByTagName("a")[0],i=ft.createElement("select"),s=i.appendChild(ft.createElement("option")),t=e.getElementsByTagName("input")[0],n.style.cssText="top:1px",it.getSetAttribute="t"!==e.className,it.style=/top/.test(n.getAttribute("style")),it.hrefNormalized="/a"===n.getAttribute("href"),it.checkOn=!!t.value,it.optSelected=s.selected,it.enctype=!!ft.createElement("form").enctype,i.disabled=!0,it.optDisabled=!s.disabled,t=ft.createElement("input"),t.setAttribute("value",""),it.input=""===t.getAttribute("value"),t.value="t",t.setAttribute("type","radio"),it.radioValue="t"===t.value}();var ye=/\r/g;st.fn.extend({val:function(t){var e,i,n,s=this[0];return arguments.length?(n=st.isFunction(t),this.each(function(i){var s;1===this.nodeType&&(s=n?t.call(this,i,st(this).val()):t,null==s?s="":"number"==typeof s?s+="":st.isArray(s)&&(s=st.map(s,function(t){return null==t?"":t+""})),e=st.valHooks[this.type]||st.valHooks[this.nodeName.toLowerCase()],e&&"set"in e&&void 0!==e.set(this,s,"value")||(this.value=s))})):s?(e=st.valHooks[s.type]||st.valHooks[s.nodeName.toLowerCase()],e&&"get"in e&&void 0!==(i=e.get(s,"value"))?i:(i=s.value,"string"==typeof i?i.replace(ye,""):null==i?"":i)):void 0}}),st.extend({valHooks:{option:{get:function(t){var e=st.find.attr(t,"value");return null!=e?e:st.trim(st.text(t))}},select:{get:function(t){for(var e,i,n=t.options,s=t.selectedIndex,o="select-one"===t.type||0>s,a=o?null:[],r=o?s+1:n.length,l=0>s?r:o?s:0;r>l;l++)if(i=n[l],!(!i.selected&&l!==s||(it.optDisabled?i.disabled:null!==i.getAttribute("disabled"))||i.parentNode.disabled&&st.nodeName(i.parentNode,"optgroup"))){if(e=st(i).val(),o)return e;a.push(e)}return a},set:function(t,e){for(var i,n,s=t.options,o=st.makeArray(e),a=s.length;a--;)if(n=s[a],st.inArray(st.valHooks.option.get(n),o)>=0)try{n.selected=i=!0}catch(r){n.scrollHeight}else n.selected=!1;return i||(t.selectedIndex=-1),s}}}}),st.each(["radio","checkbox"],function(){st.valHooks[this]={set:function(t,e){return st.isArray(e)?t.checked=st.inArray(st(t).val(),e)>=0:void 0}},it.checkOn||(st.valHooks[this].get=function(t){return null===t.getAttribute("value")?"on":t.value})});var we,xe,ke=st.expr.attrHandle,Ce=/^(?:checked|selected)$/i,De=it.getSetAttribute,Te=it.input;st.fn.extend({attr:function(t,e){return Mt(this,st.attr,t,e,arguments.length>1)},removeAttr:function(t){return this.each(function(){st.removeAttr(this,t)})}}),st.extend({attr:function(t,e,i){var n,s,o=t.nodeType;if(t&&3!==o&&8!==o&&2!==o)return typeof t.getAttribute===kt?st.prop(t,e,i):(1===o&&st.isXMLDoc(t)||(e=e.toLowerCase(),n=st.attrHooks[e]||(st.expr.match.bool.test(e)?xe:we)),void 0===i?n&&"get"in n&&null!==(s=n.get(t,e))?s:(s=st.find.attr(t,e),null==s?void 0:s):null!==i?n&&"set"in n&&void 0!==(s=n.set(t,i,e))?s:(t.setAttribute(e,i+""),i):void st.removeAttr(t,e))},removeAttr:function(t,e){var i,n,s=0,o=e&&e.match(bt);if(o&&1===t.nodeType)for(;i=o[s++];)n=st.propFix[i]||i,st.expr.match.bool.test(i)?Te&&De||!Ce.test(i)?t[n]=!1:t[st.camelCase("default-"+i)]=t[n]=!1:st.attr(t,i,""),t.removeAttribute(De?i:n)},attrHooks:{type:{set:function(t,e){if(!it.radioValue&&"radio"===e&&st.nodeName(t,"input")){var i=t.value;return t.setAttribute("type",e),i&&(t.value=i),e}}}}}),xe={set:function(t,e,i){return e===!1?st.removeAttr(t,i):Te&&De||!Ce.test(i)?t.setAttribute(!De&&st.propFix[i]||i,i):t[st.camelCase("default-"+i)]=t[i]=!0,i}},st.each(st.expr.match.bool.source.match(/\w+/g),function(t,e){var i=ke[e]||st.find.attr;ke[e]=Te&&De||!Ce.test(e)?function(t,e,n){var s,o;return n||(o=ke[e],ke[e]=s,s=null!=i(t,e,n)?e.toLowerCase():null,ke[e]=o),s}:function(t,e,i){return i?void 0:t[st.camelCase("default-"+e)]?e.toLowerCase():null}}),Te&&De||(st.attrHooks.value={set:function(t,e,i){return st.nodeName(t,"input")?void(t.defaultValue=e):we&&we.set(t,e,i)}}),De||(we={set:function(t,e,i){var n=t.getAttributeNode(i);return n||t.setAttributeNode(n=t.ownerDocument.createAttribute(i)),n.value=e+="","value"===i||e===t.getAttribute(i)?e:void 0}},ke.id=ke.name=ke.coords=function(t,e,i){var n;return i?void 0:(n=t.getAttributeNode(e))&&""!==n.value?n.value:null},st.valHooks.button={get:function(t,e){var i=t.getAttributeNode(e);return i&&i.specified?i.value:void 0},set:we.set},st.attrHooks.contenteditable={set:function(t,e,i){we.set(t,""!==e&&e,i)}},st.each(["width","height"],function(t,e){st.attrHooks[e]={set:function(t,i){return""===i?(t.setAttribute(e,"auto"),i):void 0}}})),it.style||(st.attrHooks.style={get:function(t){return t.style.cssText||void 0},set:function(t,e){return t.style.cssText=e+""}});var Ie=/^(?:input|select|textarea|button|object)$/i,Se=/^(?:a|area)$/i;st.fn.extend({prop:function(t,e){return Mt(this,st.prop,t,e,arguments.length>1)},removeProp:function(t){return t=st.propFix[t]||t,this.each(function(){try{this[t]=void 0,delete this[t]}catch(e){}})}}),st.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(t,e,i){var n,s,o,a=t.nodeType;if(t&&3!==a&&8!==a&&2!==a)return o=1!==a||!st.isXMLDoc(t),o&&(e=st.propFix[e]||e,s=st.propHooks[e]),void 0!==i?s&&"set"in s&&void 0!==(n=s.set(t,i,e))?n:t[e]=i:s&&"get"in s&&null!==(n=s.get(t,e))?n:t[e]},propHooks:{tabIndex:{get:function(t){var e=st.find.attr(t,"tabindex");return e?parseInt(e,10):Ie.test(t.nodeName)||Se.test(t.nodeName)&&t.href?0:-1}}}}),it.hrefNormalized||st.each(["href","src"],function(t,e){st.propHooks[e]={get:function(t){return t.getAttribute(e,4)}}}),it.optSelected||(st.propHooks.selected={get:function(t){var e=t.parentNode;return e&&(e.selectedIndex,e.parentNode&&e.parentNode.selectedIndex),null}}),st.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){st.propFix[this.toLowerCase()]=this}),it.enctype||(st.propFix.enctype="encoding");var Me=/[\t\r\n\f]/g;st.fn.extend({addClass:function(t){var e,i,n,s,o,a,r=0,l=this.length,h="string"==typeof t&&t;if(st.isFunction(t))return this.each(function(e){st(this).addClass(t.call(this,e,this.className))});if(h)for(e=(t||"").match(bt)||[];l>r;r++)if(i=this[r],n=1===i.nodeType&&(i.className?(" "+i.className+" ").replace(Me," "):" ")){for(o=0;s=e[o++];)n.indexOf(" "+s+" ")<0&&(n+=s+" ");a=st.trim(n),i.className!==a&&(i.className=a)}return this},removeClass:function(t){var e,i,n,s,o,a,r=0,l=this.length,h=0===arguments.length||"string"==typeof t&&t;if(st.isFunction(t))return this.each(function(e){st(this).removeClass(t.call(this,e,this.className))});if(h)for(e=(t||"").match(bt)||[];l>r;r++)if(i=this[r],n=1===i.nodeType&&(i.className?(" "+i.className+" ").replace(Me," "):"")){for(o=0;s=e[o++];)for(;n.indexOf(" "+s+" ")>=0;)n=n.replace(" "+s+" "," ");a=t?st.trim(n):"",i.className!==a&&(i.className=a)}return this},toggleClass:function(t,e){var i=typeof t;return"boolean"==typeof e&&"string"===i?e?this.addClass(t):this.removeClass(t):this.each(st.isFunction(t)?function(i){st(this).toggleClass(t.call(this,i,this.className,e),e)}:function(){if("string"===i)for(var e,n=0,s=st(this),o=t.match(bt)||[];e=o[n++];)s.hasClass(e)?s.removeClass(e):s.addClass(e);else(i===kt||"boolean"===i)&&(this.className&&st._data(this,"__className__",this.className),this.className=this.className||t===!1?"":st._data(this,"__className__")||"")})},hasClass:function(t){for(var e=" "+t+" ",i=0,n=this.length;n>i;i++)if(1===this[i].nodeType&&(" "+this[i].className+" ").replace(Me," ").indexOf(e)>=0)return!0;return!1}}),st.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(t,e){st.fn[e]=function(t,i){return arguments.length>0?this.on(e,null,t,i):this.trigger(e)}}),st.fn.extend({hover:function(t,e){return this.mouseenter(t).mouseleave(e||t)},bind:function(t,e,i){return this.on(t,null,e,i)},unbind:function(t,e){return this.off(t,null,e)},delegate:function(t,e,i,n){return this.on(e,t,i,n)},undelegate:function(t,e,i){return 1===arguments.length?this.off(t,"**"):this.off(e,t||"**",i)}});var Ne=st.now(),Pe=/\?/,Ee=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;st.parseJSON=function(e){if(t.JSON&&t.JSON.parse)return t.JSON.parse(e+"");var i,n=null,s=st.trim(e+"");return s&&!st.trim(s.replace(Ee,function(t,e,s,o){return i&&e&&(n=0),0===n?t:(i=s||e,n+=!o-!s,"")}))?Function("return "+s)():st.error("Invalid JSON: "+e)},st.parseXML=function(e){var i,n;if(!e||"string"!=typeof e)return null;try{t.DOMParser?(n=new DOMParser,i=n.parseFromString(e,"text/xml")):(i=new ActiveXObject("Microsoft.XMLDOM"),i.async="false",i.loadXML(e))}catch(s){i=void 0}return i&&i.documentElement&&!i.getElementsByTagName("parsererror").length||st.error("Invalid XML: "+e),i};var Ae,He,Oe=/#.*$/,ze=/([?&])_=[^&]*/,We=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Le=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Fe=/^(?:GET|HEAD)$/,je=/^\/\//,$e=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Re={},Be={},qe="*/".concat("*");try{He=location.href}catch(Ye){He=ft.createElement("a"),He.href="",He=He.href}Ae=$e.exec(He.toLowerCase())||[],st.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:He,type:"GET",isLocal:Le.test(Ae[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":qe,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":st.parseJSON,"text xml":st.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,e){return e?$($(t,st.ajaxSettings),e):$(st.ajaxSettings,t)},ajaxPrefilter:F(Re),ajaxTransport:F(Be),ajax:function(t,e){function i(t,e,i,n){var s,c,v,_,y,x=e;2!==b&&(b=2,r&&clearTimeout(r),h=void 0,a=n||"",w.readyState=t>0?4:0,s=t>=200&&300>t||304===t,i&&(_=R(u,w,i)),_=B(u,_,w,s),s?(u.ifModified&&(y=w.getResponseHeader("Last-Modified"),y&&(st.lastModified[o]=y),y=w.getResponseHeader("etag"),y&&(st.etag[o]=y)),204===t||"HEAD"===u.type?x="nocontent":304===t?x="notmodified":(x=_.state,c=_.data,v=_.error,s=!v)):(v=x,(t||!x)&&(x="error",0>t&&(t=0))),w.status=t,w.statusText=(e||x)+"",s?f.resolveWith(d,[c,x,w]):f.rejectWith(d,[w,x,v]),w.statusCode(g),g=void 0,l&&p.trigger(s?"ajaxSuccess":"ajaxError",[w,u,s?c:v]),m.fireWith(d,[w,x]),l&&(p.trigger("ajaxComplete",[w,u]),--st.active||st.event.trigger("ajaxStop")))}"object"==typeof t&&(e=t,t=void 0),e=e||{};var n,s,o,a,r,l,h,c,u=st.ajaxSetup({},e),d=u.context||u,p=u.context&&(d.nodeType||d.jquery)?st(d):st.event,f=st.Deferred(),m=st.Callbacks("once memory"),g=u.statusCode||{},v={},_={},b=0,y="canceled",w={readyState:0,getResponseHeader:function(t){var e;if(2===b){if(!c)for(c={};e=We.exec(a);)c[e[1].toLowerCase()]=e[2];e=c[t.toLowerCase()]}return null==e?null:e},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(t,e){var i=t.toLowerCase();return b||(t=_[i]=_[i]||t,v[t]=e),this},overrideMimeType:function(t){return b||(u.mimeType=t),this},statusCode:function(t){var e;if(t)if(2>b)for(e in t)g[e]=[g[e],t[e]];else w.always(t[w.status]);return this},abort:function(t){var e=t||y;return h&&h.abort(e),i(0,e),this}};if(f.promise(w).complete=m.add,w.success=w.done,w.error=w.fail,u.url=((t||u.url||He)+"").replace(Oe,"").replace(je,Ae[1]+"//"),u.type=e.method||e.type||u.method||u.type,u.dataTypes=st.trim(u.dataType||"*").toLowerCase().match(bt)||[""],null==u.crossDomain&&(n=$e.exec(u.url.toLowerCase()),u.crossDomain=!(!n||n[1]===Ae[1]&&n[2]===Ae[2]&&(n[3]||("http:"===n[1]?"80":"443"))===(Ae[3]||("http:"===Ae[1]?"80":"443")))),u.data&&u.processData&&"string"!=typeof u.data&&(u.data=st.param(u.data,u.traditional)),j(Re,u,e,w),2===b)return w;l=u.global,l&&0===st.active++&&st.event.trigger("ajaxStart"),u.type=u.type.toUpperCase(),u.hasContent=!Fe.test(u.type),o=u.url,u.hasContent||(u.data&&(o=u.url+=(Pe.test(o)?"&":"?")+u.data,delete u.data),u.cache===!1&&(u.url=ze.test(o)?o.replace(ze,"$1_="+Ne++):o+(Pe.test(o)?"&":"?")+"_="+Ne++)),u.ifModified&&(st.lastModified[o]&&w.setRequestHeader("If-Modified-Since",st.lastModified[o]),st.etag[o]&&w.setRequestHeader("If-None-Match",st.etag[o])),(u.data&&u.hasContent&&u.contentType!==!1||e.contentType)&&w.setRequestHeader("Content-Type",u.contentType),w.setRequestHeader("Accept",u.dataTypes[0]&&u.accepts[u.dataTypes[0]]?u.accepts[u.dataTypes[0]]+("*"!==u.dataTypes[0]?", "+qe+"; q=0.01":""):u.accepts["*"]);for(s in u.headers)w.setRequestHeader(s,u.headers[s]);if(u.beforeSend&&(u.beforeSend.call(d,w,u)===!1||2===b))return w.abort();y="abort";for(s in{success:1,error:1,complete:1})w[s](u[s]);if(h=j(Be,u,e,w)){w.readyState=1,l&&p.trigger("ajaxSend",[w,u]),u.async&&u.timeout>0&&(r=setTimeout(function(){w.abort("timeout")},u.timeout));try{b=1,h.send(v,i)}catch(x){if(!(2>b))throw x;i(-1,x)}}else i(-1,"No Transport");return w},getJSON:function(t,e,i){return st.get(t,e,i,"json")},getScript:function(t,e){return st.get(t,void 0,e,"script")}}),st.each(["get","post"],function(t,e){st[e]=function(t,i,n,s){return st.isFunction(i)&&(s=s||n,n=i,i=void 0),st.ajax({url:t,type:e,dataType:s,data:i,success:n})}}),st.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(t,e){st.fn[e]=function(t){return this.on(e,t)}}),st._evalUrl=function(t){return st.ajax({url:t,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},st.fn.extend({wrapAll:function(t){if(st.isFunction(t))return this.each(function(e){st(this).wrapAll(t.call(this,e))});if(this[0]){var e=st(t,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var t=this;t.firstChild&&1===t.firstChild.nodeType;)t=t.firstChild;return t}).append(this)}return this},wrapInner:function(t){return this.each(st.isFunction(t)?function(e){st(this).wrapInner(t.call(this,e))}:function(){var e=st(this),i=e.contents();i.length?i.wrapAll(t):e.append(t)})},wrap:function(t){var e=st.isFunction(t);return this.each(function(i){st(this).wrapAll(e?t.call(this,i):t)})},unwrap:function(){return this.parent().each(function(){st.nodeName(this,"body")||st(this).replaceWith(this.childNodes)}).end()}}),st.expr.filters.hidden=function(t){return t.offsetWidth<=0&&t.offsetHeight<=0||!it.reliableHiddenOffsets()&&"none"===(t.style&&t.style.display||st.css(t,"display"))},st.expr.filters.visible=function(t){return!st.expr.filters.hidden(t)};var Ue=/%20/g,Ke=/\[\]$/,Ve=/\r?\n/g,Xe=/^(?:submit|button|image|reset|file)$/i,Ge=/^(?:input|select|textarea|keygen)/i;st.param=function(t,e){var i,n=[],s=function(t,e){e=st.isFunction(e)?e():null==e?"":e,n[n.length]=encodeURIComponent(t)+"="+encodeURIComponent(e)};if(void 0===e&&(e=st.ajaxSettings&&st.ajaxSettings.traditional),st.isArray(t)||t.jquery&&!st.isPlainObject(t))st.each(t,function(){s(this.name,this.value)});else for(i in t)q(i,t[i],e,s);return n.join("&").replace(Ue,"+")},st.fn.extend({serialize:function(){return st.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var t=st.prop(this,"elements");return t?st.makeArray(t):this}).filter(function(){var t=this.type;return this.name&&!st(this).is(":disabled")&&Ge.test(this.nodeName)&&!Xe.test(t)&&(this.checked||!Nt.test(t))}).map(function(t,e){var i=st(this).val();return null==i?null:st.isArray(i)?st.map(i,function(t){return{name:e.name,value:t.replace(Ve,"\r\n")}}):{name:e.name,value:i.replace(Ve,"\r\n")}}).get()}}),st.ajaxSettings.xhr=void 0!==t.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Y()||U()}:Y;var Qe=0,Je={},Ze=st.ajaxSettings.xhr();t.ActiveXObject&&st(t).on("unload",function(){for(var t in Je)Je[t](void 0,!0)}),it.cors=!!Ze&&"withCredentials"in Ze,Ze=it.ajax=!!Ze,Ze&&st.ajaxTransport(function(t){if(!t.crossDomain||it.cors){var e;return{send:function(i,n){var s,o=t.xhr(),a=++Qe;if(o.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(s in t.xhrFields)o[s]=t.xhrFields[s];t.mimeType&&o.overrideMimeType&&o.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(s in i)void 0!==i[s]&&o.setRequestHeader(s,i[s]+"");o.send(t.hasContent&&t.data||null),e=function(i,s){var r,l,h;if(e&&(s||4===o.readyState))if(delete Je[a],e=void 0,o.onreadystatechange=st.noop,s)4!==o.readyState&&o.abort();else{h={},r=o.status,"string"==typeof o.responseText&&(h.text=o.responseText);try{l=o.statusText}catch(c){l=""}r||!t.isLocal||t.crossDomain?1223===r&&(r=204):r=h.text?200:404}h&&n(r,l,h,o.getAllResponseHeaders())},t.async?4===o.readyState?setTimeout(e):o.onreadystatechange=Je[a]=e:e()},abort:function(){e&&e(void 0,!0)}}}}),st.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(t){return st.globalEval(t),t}}}),st.ajaxPrefilter("script",function(t){void 0===t.cache&&(t.cache=!1),t.crossDomain&&(t.type="GET",t.global=!1)}),st.ajaxTransport("script",function(t){if(t.crossDomain){var e,i=ft.head||st("head")[0]||ft.documentElement;return{send:function(n,s){e=ft.createElement("script"),e.async=!0,t.scriptCharset&&(e.charset=t.scriptCharset),e.src=t.url,e.onload=e.onreadystatechange=function(t,i){(i||!e.readyState||/loaded|complete/.test(e.readyState))&&(e.onload=e.onreadystatechange=null,e.parentNode&&e.parentNode.removeChild(e),e=null,i||s(200,"success"))},i.insertBefore(e,i.firstChild)},abort:function(){e&&e.onload(void 0,!0)}}}});var ti=[],ei=/(=)\?(?=&|$)|\?\?/;st.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=ti.pop()||st.expando+"_"+Ne++;return this[t]=!0,t}}),st.ajaxPrefilter("json jsonp",function(e,i,n){var s,o,a,r=e.jsonp!==!1&&(ei.test(e.url)?"url":"string"==typeof e.data&&!(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&ei.test(e.data)&&"data");return r||"jsonp"===e.dataTypes[0]?(s=e.jsonpCallback=st.isFunction(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,r?e[r]=e[r].replace(ei,"$1"+s):e.jsonp!==!1&&(e.url+=(Pe.test(e.url)?"&":"?")+e.jsonp+"="+s),e.converters["script json"]=function(){return a||st.error(s+" was not called"),a[0]},e.dataTypes[0]="json",o=t[s],t[s]=function(){a=arguments},n.always(function(){t[s]=o,e[s]&&(e.jsonpCallback=i.jsonpCallback,ti.push(s)),a&&st.isFunction(o)&&o(a[0]),a=o=void 0}),"script"):void 0}),st.parseHTML=function(t,e,i){if(!t||"string"!=typeof t)return null;"boolean"==typeof e&&(i=e,e=!1),e=e||ft;var n=ut.exec(t),s=!i&&[];return n?[e.createElement(n[1])]:(n=st.buildFragment([t],e,s),s&&s.length&&st(s).remove(),st.merge([],n.childNodes))};var ii=st.fn.load;st.fn.load=function(t,e,i){if("string"!=typeof t&&ii)return ii.apply(this,arguments);var n,s,o,a=this,r=t.indexOf(" ");return r>=0&&(n=st.trim(t.slice(r,t.length)),t=t.slice(0,r)),st.isFunction(e)?(i=e,e=void 0):e&&"object"==typeof e&&(o="POST"),a.length>0&&st.ajax({url:t,type:o,dataType:"html",data:e}).done(function(t){s=arguments,a.html(n?st("<div>").append(st.parseHTML(t)).find(n):t)}).complete(i&&function(t,e){a.each(i,s||[t.responseText,e,t])}),this},st.expr.filters.animated=function(t){return st.grep(st.timers,function(e){return t===e.elem}).length};var ni=t.document.documentElement;st.offset={setOffset:function(t,e,i){var n,s,o,a,r,l,h,c=st.css(t,"position"),u=st(t),d={};"static"===c&&(t.style.position="relative"),r=u.offset(),o=st.css(t,"top"),l=st.css(t,"left"),h=("absolute"===c||"fixed"===c)&&st.inArray("auto",[o,l])>-1,h?(n=u.position(),a=n.top,s=n.left):(a=parseFloat(o)||0,s=parseFloat(l)||0),st.isFunction(e)&&(e=e.call(t,i,r)),null!=e.top&&(d.top=e.top-r.top+a),null!=e.left&&(d.left=e.left-r.left+s),"using"in e?e.using.call(t,d):u.css(d)}},st.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){st.offset.setOffset(this,t,e)});var e,i,n={top:0,left:0},s=this[0],o=s&&s.ownerDocument;return o?(e=o.documentElement,st.contains(e,s)?(typeof s.getBoundingClientRect!==kt&&(n=s.getBoundingClientRect()),i=K(o),{top:n.top+(i.pageYOffset||e.scrollTop)-(e.clientTop||0),left:n.left+(i.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}):n):void 0},position:function(){if(this[0]){var t,e,i={top:0,left:0},n=this[0];return"fixed"===st.css(n,"position")?e=n.getBoundingClientRect():(t=this.offsetParent(),e=this.offset(),st.nodeName(t[0],"html")||(i=t.offset()),i.top+=st.css(t[0],"borderTopWidth",!0),i.left+=st.css(t[0],"borderLeftWidth",!0)),{top:e.top-i.top-st.css(n,"marginTop",!0),left:e.left-i.left-st.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||ni;t&&!st.nodeName(t,"html")&&"static"===st.css(t,"position");)t=t.offsetParent;return t||ni})}}),st.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,e){var i=/Y/.test(e);st.fn[t]=function(n){return Mt(this,function(t,n,s){var o=K(t);return void 0===s?o?e in o?o[e]:o.document.documentElement[n]:t[n]:void(o?o.scrollTo(i?st(o).scrollLeft():s,i?s:st(o).scrollTop()):t[n]=s)},t,n,arguments.length,null)}}),st.each(["top","left"],function(t,e){st.cssHooks[e]=T(it.pixelPosition,function(t,i){return i?(i=ee(t,e),ne.test(i)?st(t).position()[e]+"px":i):void 0})}),st.each({Height:"height",Width:"width"},function(t,e){st.each({padding:"inner"+t,content:e,"":"outer"+t},function(i,n){st.fn[n]=function(n,s){var o=arguments.length&&(i||"boolean"!=typeof n),a=i||(n===!0||s===!0?"margin":"border");return Mt(this,function(e,i,n){
var s;return st.isWindow(e)?e.document.documentElement["client"+t]:9===e.nodeType?(s=e.documentElement,Math.max(e.body["scroll"+t],s["scroll"+t],e.body["offset"+t],s["offset"+t],s["client"+t])):void 0===n?st.css(e,i,a):st.style(e,i,n,a)},e,o?n:void 0,o,null)}})}),st.fn.size=function(){return this.length},st.fn.andSelf=st.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return st});var si=t.jQuery,oi=t.$;return st.noConflict=function(e){return t.$===st&&(t.$=oi),e&&t.jQuery===st&&(t.jQuery=si),st},typeof e===kt&&(t.jQuery=t.$=st),st}),$.fn.extend({
//事件扩展
input:function(t){var e=$(this);return window.navigator.userAgent.indexOf("MSIE 9")!=-1?void e.each(function(e){var i=this;i.timer=null,i.onfocus=function(){this.timer=setInterval(function(){t.call(i)},30)},i.onblur=function(){clearInterval(this.timer)}}):void(document.getElementsByClassName?e.each(function(e){this.oninput=function(){t.call(this)}}):e.each(function(e){this.onpropertychange=function(){t.call(this)}}))}}),$.extend({browser:function(){var t={},e=window.navigator.userAgent,i=uaMatch(e);return i.browser&&(t[i.browser]=!0,t.version=i.version),{browser:t}}}),/*!
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
// Script: jQuery hashchange event
//
// *Version: 1.3, Last updated: 7/21/2010*
// 
// Project Home - http://benalman.com/projects/jquery-hashchange-plugin/
// GitHub       - http://github.com/cowboy/jquery-hashchange/
// Source       - http://github.com/cowboy/jquery-hashchange/raw/master/jquery.ba-hashchange.js
// (Minified)   - http://github.com/cowboy/jquery-hashchange/raw/master/jquery.ba-hashchange.min.js (0.8kb gzipped)
// 
// About: License
// 
// Copyright (c) 2010 "Cowboy" Ben Alman,
// Dual licensed under the MIT and GPL licenses.
// http://benalman.com/about/license/
// 
// About: Examples
// 
// These working examples, complete with fully commented code, illustrate a few
// ways in which this plugin can be used.
// 
// hashchange event - http://benalman.com/code/projects/jquery-hashchange/examples/hashchange/
// document.domain - http://benalman.com/code/projects/jquery-hashchange/examples/document_domain/
// 
// About: Support and Testing
// 
// Information about what version or versions of jQuery this plugin has been
// tested with, what browsers it has been tested in, and where the unit tests
// reside (so you can test it yourself).
// 
// jQuery Versions - 1.2.6, 1.3.2, 1.4.1, 1.4.2
// Browsers Tested - Internet Explorer 6-8, Firefox 2-4, Chrome 5-6, Safari 3.2-5,
//                   Opera 9.6-10.60, iPhone 3.1, Android 1.6-2.2, BlackBerry 4.6-5.
// Unit Tests      - http://benalman.com/code/projects/jquery-hashchange/unit/
// 
// About: Known issues
// 
// While this jQuery hashchange event implementation is quite stable and
// robust, there are a few unfortunate browser bugs surrounding expected
// hashchange event-based behaviors, independent of any JavaScript
// window.onhashchange abstraction. See the following examples for more
// information:
// 
// Chrome: Back Button - http://benalman.com/code/projects/jquery-hashchange/examples/bug-chrome-back-button/
// Firefox: Remote XMLHttpRequest - http://benalman.com/code/projects/jquery-hashchange/examples/bug-firefox-remote-xhr/
// WebKit: Back Button in an Iframe - http://benalman.com/code/projects/jquery-hashchange/examples/bug-webkit-hash-iframe/
// Safari: Back Button from a different domain - http://benalman.com/code/projects/jquery-hashchange/examples/bug-safari-back-from-diff-domain/
// 
// Also note that should a browser natively support the window.onhashchange 
// event, but not report that it does, the fallback polling loop will be used.
// 
// About: Release History
// 
// 1.3   - (7/21/2010) Reorganized IE6/7 Iframe code to make it more
//         "removable" for mobile-only development. Added IE6/7 document.title
//         support. Attempted to make Iframe as hidden as possible by using
//         techniques from http://www.paciellogroup.com/blog/?p=604. Added 
//         support for the "shortcut" format $(window).hashchange( fn ) and
//         $(window).hashchange() like jQuery provides for built-in events.
//         Renamed jQuery.hashchangeDelay to <jQuery.fn.hashchange.delay> and
//         lowered its default value to 50. Added <jQuery.fn.hashchange.domain>
//         and <jQuery.fn.hashchange.src> properties plus document-domain.html
//         file to address access denied issues when setting document.domain in
//         IE6/7.
// 1.2   - (2/11/2010) Fixed a bug where coming back to a page using this plugin
//         from a page on another domain would cause an error in Safari 4. Also,
//         IE6/7 Iframe is now inserted after the body (this actually works),
//         which prevents the page from scrolling when the event is first bound.
//         Event can also now be bound before DOM ready, but it won't be usable
//         before then in IE6/7.
// 1.1   - (1/21/2010) Incorporated document.documentMode test to fix IE8 bug
//         where browser version is incorrectly reported as 8.0, despite
//         inclusion of the X-UA-Compatible IE=EmulateIE7 meta tag.
// 1.0   - (1/9/2010) Initial Release. Broke out the jQuery BBQ event.special
//         window.onhashchange functionality into a separate plugin for users
//         who want just the basic event & back button support, without all the
//         extra awesomeness that BBQ provides. This plugin will be included as
//         part of jQuery BBQ, but also be available separately.
function(t,e,i){"$:nomunge";
// Get location.hash (or what you'd expect location.hash to be) sans any
// leading #. Thanks for making this necessary, Firefox!
function n(t){return t=t||location.href,"#"+t.replace(/^[^#]*#?(.*)$/,"$1")}// Used by YUI compressor.
// Reused string.
var s,o="hashchange",
// Method / object references.
a=document,r=t.event.special,
// Does the browser support window.onhashchange? Note that IE8 running in
// IE7 compatibility mode reports true for 'onhashchange' in window, even
// though the event isn't supported, so also test document.documentMode.
l=a.documentMode,h="on"+o in e&&(l===i||l>7);
// Method: jQuery.fn.hashchange
// 
// Bind a handler to the window.onhashchange event or trigger all bound
// window.onhashchange event handlers. This behavior is consistent with
// jQuery's built-in event handlers.
// 
// Usage:
// 
// > jQuery(window).hashchange( [ handler ] );
// 
// Arguments:
// 
//  handler - (Function) Optional handler to be bound to the hashchange
//    event. This is a "shortcut" for the more verbose form:
//    jQuery(window).bind( 'hashchange', handler ). If handler is omitted,
//    all bound window.onhashchange event handlers will be triggered. This
//    is a shortcut for the more verbose
//    jQuery(window).trigger( 'hashchange' ). These forms are described in
//    the <hashchange event> section.
// 
// Returns:
// 
//  (jQuery) The initial jQuery collection of elements.
// Allow the "shortcut" format $(elem).hashchange( fn ) for binding and
// $(elem).hashchange() for triggering, like jQuery does for built-in events.
t.fn[o]=function(t){return t?this.bind(o,t):this.trigger(o)},
// Property: jQuery.fn.hashchange.delay
// 
// The numeric interval (in milliseconds) at which the <hashchange event>
// polling loop executes. Defaults to 50.
// Property: jQuery.fn.hashchange.domain
// 
// If you're setting document.domain in your JavaScript, and you want hash
// history to work in IE6/7, not only must this property be set, but you must
// also set document.domain BEFORE jQuery is loaded into the page. This
// property is only applicable if you are supporting IE6/7 (or IE8 operating
// in "IE7 compatibility" mode).
// 
// In addition, the <jQuery.fn.hashchange.src> property must be set to the
// path of the included "document-domain.html" file, which can be renamed or
// modified if necessary (note that the document.domain specified must be the
// same in both your main JavaScript as well as in this file).
// 
// Usage:
// 
// jQuery.fn.hashchange.domain = document.domain;
// Property: jQuery.fn.hashchange.src
// 
// If, for some reason, you need to specify an Iframe src file (for example,
// when setting document.domain as in <jQuery.fn.hashchange.domain>), you can
// do so using this property. Note that when using this property, history
// won't be recorded in IE6/7 until the Iframe src file loads. This property
// is only applicable if you are supporting IE6/7 (or IE8 operating in "IE7
// compatibility" mode).
// 
// Usage:
// 
// jQuery.fn.hashchange.src = 'path/to/file.html';
t.fn[o].delay=50,/*
  $.fn[ str_hashchange ].domain = null;
  $.fn[ str_hashchange ].src = null;
  */
// Event: hashchange event
// 
// Fired when location.hash changes. In browsers that support it, the native
// HTML5 window.onhashchange event is used, otherwise a polling loop is
// initialized, running every <jQuery.fn.hashchange.delay> milliseconds to
// see if the hash has changed. In IE6/7 (and IE8 operating in "IE7
// compatibility" mode), a hidden Iframe is created to allow the back button
// and hash-based history to work.
// 
// Usage as described in <jQuery.fn.hashchange>:
// 
// > // Bind an event handler.
// > jQuery(window).hashchange( function(e) {
// >   var hash = location.hash;
// >   ...
// > });
// > 
// > // Manually trigger the event handler.
// > jQuery(window).hashchange();
// 
// A more verbose usage that allows for event namespacing:
// 
// > // Bind an event handler.
// > jQuery(window).bind( 'hashchange', function(e) {
// >   var hash = location.hash;
// >   ...
// > });
// > 
// > // Manually trigger the event handler.
// > jQuery(window).trigger( 'hashchange' );
// 
// Additional Notes:
// 
// * The polling loop and Iframe are not created until at least one handler
//   is actually bound to the 'hashchange' event.
// * If you need the bound handler(s) to execute immediately, in cases where
//   a location.hash exists on page load, via bookmark or page refresh for
//   example, use jQuery(window).hashchange() or the more verbose 
//   jQuery(window).trigger( 'hashchange' ).
// * The event can be bound before DOM ready, but since it won't be usable
//   before then in IE6/7 (due to the necessary Iframe), recommended usage is
//   to bind it inside a DOM ready handler.
// Override existing $.event.special.hashchange methods (allowing this plugin
// to be defined after jQuery BBQ in BBQ's source code).
r[o]=t.extend(r[o],{
// Called only when the first 'hashchange' event is bound to window.
setup:function(){
// If window.onhashchange is supported natively, there's nothing to do..
// If window.onhashchange is supported natively, there's nothing to do..
// Otherwise, we need to create our own. And we don't want to call this
// until the user binds to the event, just in case they never do, since it
// will create a polling loop and possibly even a hidden Iframe.
return!h&&void t(s.start)},
// Called only when the last 'hashchange' event is unbound from window.
teardown:function(){
// If window.onhashchange is supported natively, there's nothing to do..
// If window.onhashchange is supported natively, there's nothing to do..
// Otherwise, we need to stop ours (if possible).
return!h&&void t(s.stop)}}),
// fake_onhashchange does all the work of triggering the window.onhashchange
// event for browsers that don't natively support it, including creating a
// polling loop to watch for hash changes and in IE 6/7 creating a hidden
// Iframe to enable back and forward.
s=function(){
// This polling loop checks every $.fn.hashchange.delay milliseconds to see
// if location.hash has changed, and triggers the 'hashchange' event on
// window when necessary.
function s(){var i=n(),a=p(c);i!==c?(d(c=i,a),t(e).trigger(o)):a!==c&&(location.href=location.href.replace(/#.*/,"")+a),r=setTimeout(s,t.fn[o].delay)}var r,l={},
// Remember the initial hash so it doesn't get triggered immediately.
c=n(),u=function(t){return t},d=u,p=u;
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// ^^^^^^^^^^^^^^^^^^^ REMOVE IF NOT SUPPORTING IE6/7/8 ^^^^^^^^^^^^^^^^^^^
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// Start the polling loop.
// Stop the polling loop.
// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// vvvvvvvvvvvvvvvvvvv REMOVE IF NOT SUPPORTING IE6/7/8 vvvvvvvvvvvvvvvvvvv
// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
return l.start=function(){r||s()},l.stop=function(){r&&clearTimeout(r),r=i},t.browser.msie&&!h&&function(){
// Not only do IE6/7 need the "magical" Iframe treatment, but so does IE8
// when running in "IE7 compatibility" mode.
var e,i;
// When the event is bound and polling starts in IE 6/7, create a hidden
// Iframe for history handling.
l.start=function(){e||(i=t.fn[o].src,i=i&&i+n(),
// Create hidden Iframe. Attempt to make Iframe as hidden as possible
// by using techniques from http://www.paciellogroup.com/blog/?p=604.
e=t('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){i||d(n()),s()}).attr("src",i||"javascript:0").insertAfter("body")[0].contentWindow,
// Whenever `document.title` changes, update the Iframe's title to
// prettify the back/next history menu entries. Since IE sometimes
// errors with "Unspecified error" the very first time this is set
// (yes, very useful) wrap this with a try/catch block.
a.onpropertychange=function(){try{"title"===event.propertyName&&(e.document.title=a.title)}catch(t){}})},
// Override the "stop" method since an IE6/7 Iframe was created. Even
// if there are no longer any bound event handlers, the polling loop
// is still necessary for back/next to work at all!
l.stop=u,
// Get history by looking at the hidden Iframe's location.hash.
p=function(){return n(e.location.href)},
// Set a new history item by opening and then closing the Iframe
// document, *then* setting its location.hash. If document.domain has
// been set, update that as well.
d=function(i,n){var s=e.document,r=t.fn[o].domain;i!==n&&(
// Update Iframe with any initial `document.title` that might be set.
s.title=a.title,
// Opening the Iframe's document after it has been closed is what
// actually adds a history entry.
s.open(),
// Set document.domain for the Iframe document as well, if necessary.
r&&s.write('<script>document.domain="'+r+'"</script>'),s.close(),
// Update the Iframe's hash, for great justice.
e.location.hash=i)}}(),l}()}(jQuery,this),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):
// Node/CommonJS:
t("object"==typeof exports?require("jquery"):window.jQuery)}(function(t,e){function i(e,i,n,s){
// Returns a template item data structure for a new rendered instance of a template (a 'template item').
// The content field is a hierarchical array of strings and nested items (to be
// removed and replaced by nodes field of dom elements, once inserted in DOM).
var o={data:s||0===s||s===!1?s:i?i.data:{},_wrap:i?i._wrap:null,tmpl:null,parent:i||null,nodes:[],calls:c,nest:u,wrap:d,html:p,update:f};
// Build the hierarchical content to be used during insertion into DOM
// Keep track of new template item, until it is stored as jQuery Data on DOM element
return e&&t.extend(o,e,{nodes:[],parent:i}),n&&(o.tmpl=n,o._ctnt=o._ctnt||o.tmpl(t,o),o.key=++x,(C.length?y:b)[x]=o),o}
//========================== Private helper functions, used by code above ==========================
function n(e,i,o){
// Convert hierarchical content into flat string array
// and finally return array of fragments ready for DOM insertion
var a,r=o?t.map(o,function(t){
// Insert template item annotations, to be converted to jQuery.data( "tmplItem" ) when elems are inserted into DOM.
// This is a child template item. Build nested template.
return"string"==typeof t?e.key?t.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,"$1 "+v+'="'+e.key+'" $2'):t:n(t,e,t._ctnt)}):
// If content is not defined, insert tmplItem directly. Not a template item. May be a string, or a string array, e.g. from {{html $item.html()}}.
e;
// top-level template
// Support templates which have initial or final text nodes, or consist only of text
// Also support HTML entities within the HTML markup.
return i?r:(r=r.join(""),r.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,function(e,i,n,o){a=t(n).get(),h(a),i&&(a=s(i).concat(a)),o&&(a=a.concat(s(o)))}),a?a:s(r))}function s(e){
// Use createElement, since createTextNode will not render HTML entities correctly
var i=document.createElement("div");return i.innerHTML=e,t.makeArray(i.childNodes)}
// Generate a reusable function that will serve to render a template against data
function o(e){
// Use the variable __ to hold a string array while building the compiled template. (See https://github.com/jquery/jquery-tmpl/issues#issue/10).
// Convert the template into pure JavaScript
return new Function("jQuery","$item","var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('"+t.trim(e).replace(/([\\'])/g,"\\$1").replace(/[\r\t\n]/g," ").replace(/\$\{([^\}]*)\}/g,"{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,function(e,i,n,s,o,a,l){var h,c,u,d=t.tmpl.tag[n];if(!d)throw"Unknown template tag: "+n;
// Support for target being things like a.toLowerCase();
// In that case don't call with template item as 'this' pointer. Just evaluate...
return h=d._default||[],a&&!/\w$/.test(o)&&(o+=a,a=""),o?(o=r(o),l=l?","+r(l)+")":a?")":"",c=a?o.indexOf(".")>-1?o+r(a):"("+o+").call($item"+l:o,u=a?c:"(typeof("+o+")==='function'?("+o+").call($item):("+o+"))"):u=c=h.$1||"null",s=r(s),"');"+d[i?"close":"open"].split("$notnull_1").join(o?"typeof("+o+")!=='undefined' && ("+o+")!=null":"true").split("$1a").join(u).split("$1").join(c).split("$2").join(s||h.$2||"")+"__.push('"})+"');}return __;")}function a(e,i){
// Build the wrapped content.
e._wrap=n(e,!0,
// Suport imperative scenario in which options.wrapped can be set to a selector or an HTML string.
t.isArray(i)?i:[_.test(i)?i:t(i).html()]).join("")}function r(t){return t?t.replace(/\\'/g,"'").replace(/\\\\/g,"\\"):null}function l(t){var e=document.createElement("div");return e.appendChild(t.cloneNode(!0)),e.innerHTML}
// Store template items in jQuery.data(), ensuring a unique tmplItem data data structure for each rendered template instance.
function h(e){function n(e){function n(t){t+=h,a=c[t]=c[t]||i(a,b[a.parent.key+h]||a.parent)}var s,o,a,r,l=e;
// Ensure that each rendered template inserted into the DOM has its own template item,
if(r=e.getAttribute(v)){for(;l.parentNode&&1===(l=l.parentNode).nodeType&&!(s=l.getAttribute(v)););s!==r&&(
// The next ancestor with a _tmplitem expando is on a different key than this one.
// So this is a top-level element within this template item
// Set pntNode to the key of the parentNode, or to 0 if pntNode.parentNode is null, or pntNode is a fragment.
l=l.parentNode?11===l.nodeType?0:l.getAttribute(v)||0:0,(a=b[r])||(
// The item is for wrapped content, and was copied from the temporary parent wrappedItem.
a=y[r],a=i(a,b[l]||y[l]),a.key=++x,b[x]=a),k&&n(r)),e.removeAttribute(v)}else k&&(a=t.data(e,"tmplItem"))&&(
// This was a rendered element, cloned during append or appendTo etc.
// TmplItem stored in jQuery data has already been cloned in cloneCopyEvent. We must replace it with a fresh cloned tmplItem.
n(a.key),b[a.key]=a,l=t.data(e.parentNode,"tmplItem"),l=l?l.key:0);if(a){
// Find the template item of the parent element.
// (Using !=, not !==, since pntItem.key is number, and pntNode may be a string)
for(o=a;o&&o.key!=l;)
// Add this element as a top-level node for this rendered template item, as well as for any
// ancestor items between this item and the item of its parent element
o.nodes.push(e),o=o.parent;
// Delete content built during rendering - reduce API surface area and memory use, and avoid exposing of stale data after rendering...
delete a._ctnt,delete a._wrap,
// Store template item as jQuery data on the element
t.data(e,"tmplItem",a)}}var s,o,a,r,l,h="_"+k,c={};for(a=0,r=e.length;a<r;a++)if(1===(s=e[a]).nodeType){for(o=s.getElementsByTagName("*"),l=o.length-1;l>=0;l--)n(o[l]);n(s)}}
//---- Helper functions for template item ----
function c(t,e,i,n){return t?void C.push({_:t,tmpl:e,item:this,data:i,options:n}):C.pop()}function u(e,i,n){
// nested template, using {{tmpl}} tag
return t.tmpl(t.template(e),i,n,this)}function d(e,i){
// nested template, using {{wrap}} tag
var n=e.options||{};
// Apply the template, which may incorporate wrapped content,
return n.wrapped=i,t.tmpl(t.template(e.tmpl),e.data,n,e.item)}function p(e,i){var n=this._wrap;return t.map(t(t.isArray(n)?n.join(""):n).filter(e||"*"),function(t){return i?t.innerText||t.textContent:t.outerHTML||l(t)})}function f(){var e=this.nodes;t.tmpl(null,null,null,this).insertBefore(e[0]),t(e).remove()}var m,g=t.fn.domManip,v="_tmplitem",_=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,b={},y={},w={key:0,data:{}},x=0,k=0,C=[];
// Override appendTo etc., in order to provide support for targeting multiple elements. (This code would disappear if integrated in jquery core).
t.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,i){t.fn[e]=function(n){var s,o,a,r,l=[],h=t(n),c=1===this.length&&this[0].parentNode;if(m=b||{},c&&11===c.nodeType&&1===c.childNodes.length&&1===h.length)h[i](this[0]),l=this;else{for(o=0,a=h.length;o<a;o++)k=o,s=(o>0?this.clone(!0):this).get(),t(h[o])[i](s),l=l.concat(s);k=0,l=this.pushStack(l,e,h.selector)}return r=m,m=null,t.tmpl.complete(r),l}}),t.fn.extend({
// Use first wrapped element as template markup.
// Return wrapped set of template items, obtained by rendering template against data.
tmpl:function(e,i,n){return t.tmpl(this[0],e,i,n)},
// Find which rendered template item the first wrapped DOM element belongs to
tmplItem:function(){return t.tmplItem(this[0])},
// Consider the first wrapped element as a template declaration, and get the compiled template or store it as a named template.
template:function(e){return t.template(e,this[0])},domManip:function(e,i,n,s){if(e[0]&&t.isArray(e[0])){for(var o,a=t.makeArray(arguments),r=e[0],l=r.length,h=0;h<l&&!(o=t.data(r[h++],"tmplItem")););o&&k&&(a[2]=function(e){
// Handler called by oldManip when rendered template has been inserted into DOM.
t.tmpl.afterManip(this,e,n)}),g.apply(this,a)}else g.apply(this,arguments);return k=0,m||t.tmpl.complete(b),this}}),t.extend({
// Return wrapped set of template items, obtained by rendering template against data.
tmpl:function(e,s,o,r){var l,h=!r;if(h)
// This is a top-level tmpl call (not from a nested template using {{tmpl}})
r=w,e=t.template[e]||t.template(null,e),y={};else if(!e)
// Rebuild, without creating a new template item
// The template item is already associated with DOM - this is a refresh.
// Re-evaluate rendered template for the parentItem
return e=r.tmpl,b[r.key]=r,r.nodes=[],r.wrapped&&a(r,r.wrapped),t(n(r,null,r.tmpl(t,r)));return e?("function"==typeof s&&(s=s.call(r||{})),o&&o.wrapped&&a(o,o.wrapped),l=t.isArray(s)?t.map(s,function(t){return t?i(o,r,e,t):null}):[i(o,r,e,s)],h?t(n(r,null,l)):l):[]},
// Return rendered template item for an element.
tmplItem:function(e){var i;for(e instanceof t&&(e=e[0]);e&&1===e.nodeType&&!(i=t.data(e,"tmplItem"))&&(e=e.parentNode););return i||w},
// Set:
// Use $.template( name, tmpl ) to cache a named template,
// where tmpl is a template string, a script element or a jQuery instance wrapping a script element, etc.
// Use $( "selector" ).template( name ) to provide access by name to a script block template declaration.
// Get:
// Use $.template( name ) to access a cached template.
// Also $( selectorToScriptBlock ).template(), or $.template( null, templateString )
// will return the compiled template, without adding a name reference.
// If templateString includes at least one HTML tag, $.template( templateString ) is equivalent
// to $.template( null, templateString )
template:function(e,i){
// Compile template and associate with name
// This is an HTML string being passed directly in.
// If this is a template block, use cached copy, or generate tmpl function and cache.
// If not in map, and not containing at least on HTML tag, treat as a selector.
// (If integrated with core, use quickExpr.exec)
return i?("string"==typeof i?i=o(i):i instanceof t&&(i=i[0]||{}),i.nodeType&&(i=t.data(i,"tmpl")||t.data(i,"tmpl",o(i.innerHTML))),"string"==typeof e?t.template[e]=i:i):e?"string"!=typeof e?t.template(null,e):t.template[e]||t.template(null,_.test(e)?e:t(e)):null},encode:function(t){
// Do HTML encoding replacing < > & and ' and " by corresponding entities.
return(""+t).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")}}),t.extend(t.tmpl,{tag:{tmpl:{_default:{$2:"null"},open:"if($notnull_1){__=__.concat($item.nest($1,$2));}"},wrap:{_default:{$2:"null"},open:"$item.calls(__,$1,$2);__=[];",close:"call=$item.calls();__=call._.concat($item.wrap(call,__));"},each:{_default:{$2:"$index, $value"},open:"if($notnull_1){$.each($1a,function($2){with(this){",close:"}});}"},"if":{open:"if(($notnull_1) && $1a){",close:"}"},"else":{_default:{$1:"true"},open:"}else if(($notnull_1) && $1a){"},html:{
// Unecoded expression evaluation.
open:"if($notnull_1){__.push($1a);}"},"=":{
// Encoded expression evaluation. Abbreviated form is ${}.
_default:{$1:"$data"},open:"if($notnull_1){__.push($.encode($1a));}"},"!":{
// Comment tag. Skipped by parser
open:""}},
// This stub can be overridden, e.g. in jquery.tmplPlus for providing rendered events
complete:function(t){b={}},
// Call this from code which overrides domManip, or equivalent
// Manage cloning/storing template items etc.
afterManip:function(e,i,n){
// Provides cloned fragment ready for fixup prior to and after insertion into DOM
var s=11===i.nodeType?t.makeArray(i.childNodes):1===i.nodeType?[i]:[];
// Return fragment to original caller (e.g. append) for DOM insertion
n.call(e,i),
// Fragment has been inserted:- Add inserted nodes to tmplItem data structure. Replace inserted element annotations by jQuery.data.
h(s),k++}})}),function(t,e){function i(e,i,n,s){
// Returns a template item data structure for a new rendered instance of a template (a 'template item').
// The content field is a hierarchical array of strings and nested items (to be
// removed and replaced by nodes field of dom elements, once inserted in DOM).
var o={data:s||0===s||s===!1?s:i?i.data:{},_wrap:i?i._wrap:null,tmpl:null,parent:i||null,nodes:[],calls:c,nest:u,wrap:d,html:p,update:f};
// Build the hierarchical content to be used during insertion into DOM
// Keep track of new template item, until it is stored as jQuery Data on DOM element
return e&&t.extend(o,e,{nodes:[],parent:i}),n&&(o.tmpl=n,o._ctnt=o._ctnt||o.tmpl(t,o),o.key=++x,(C.length?y:b)[x]=o),o}
//========================== Private helper functions, used by code above ==========================
function n(e,i,o){
// Convert hierarchical content into flat string array
// and finally return array of fragments ready for DOM insertion
var a,r=o?t.map(o,function(t){
// Insert template item annotations, to be converted to jQuery.data( "tmplItem" ) when elems are inserted into DOM.
// This is a child template item. Build nested template.
return"string"==typeof t?e.key?t.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,"$1 "+v+'="'+e.key+'" $2'):t:n(t,e,t._ctnt)}):
// If content is not defined, insert tmplItem directly. Not a template item. May be a string, or a string array, e.g. from {{html $item.html()}}.
e;
// top-level template
// Support templates which have initial or final text nodes, or consist only of text
// Also support HTML entities within the HTML markup.
return i?r:(r=r.join(""),r.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,function(e,i,n,o){a=t(n).get(),h(a),i&&(a=s(i).concat(a)),o&&(a=a.concat(s(o)))}),a?a:s(r))}function s(e){
// Use createElement, since createTextNode will not render HTML entities correctly
var i=document.createElement("div");return i.innerHTML=e,t.makeArray(i.childNodes)}
// Generate a reusable function that will serve to render a template against data
function o(e){
// Use the variable __ to hold a string array while building the compiled template. (See https://github.com/jquery/jquery-tmpl/issues#issue/10).
// Convert the template into pure JavaScript
return new Function("jQuery","$item","var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('"+t.trim(e).replace(/([\\'])/g,"\\$1").replace(/[\r\t\n]/g," ").replace(/\$\{([^\}]*)\}/g,"{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,function(e,i,n,s,o,a,l){var h,c,u,d=t.tmpl.tag[n];if(!d)throw"Unknown template tag: "+n;
// Support for target being things like a.toLowerCase();
// In that case don't call with template item as 'this' pointer. Just evaluate...
return h=d._default||[],a&&!/\w$/.test(o)&&(o+=a,a=""),o?(o=r(o),l=l?","+r(l)+")":a?")":"",c=a?o.indexOf(".")>-1?o+r(a):"("+o+").call($item"+l:o,u=a?c:"(typeof("+o+")==='function'?("+o+").call($item):("+o+"))"):u=c=h.$1||"null",s=r(s),"');"+d[i?"close":"open"].split("$notnull_1").join(o?"typeof("+o+")!=='undefined' && ("+o+")!=null":"true").split("$1a").join(u).split("$1").join(c).split("$2").join(s||h.$2||"")+"__.push('"})+"');}return __;")}function a(e,i){
// Build the wrapped content.
e._wrap=n(e,!0,
// Suport imperative scenario in which options.wrapped can be set to a selector or an HTML string.
t.isArray(i)?i:[_.test(i)?i:t(i).html()]).join("")}function r(t){return t?t.replace(/\\'/g,"'").replace(/\\\\/g,"\\"):null}function l(t){var e=document.createElement("div");return e.appendChild(t.cloneNode(!0)),e.innerHTML}
// Store template items in jQuery.data(), ensuring a unique tmplItem data data structure for each rendered template instance.
function h(e){function n(e){function n(t){t+=h,a=c[t]=c[t]||i(a,b[a.parent.key+h]||a.parent)}var s,o,a,r,l=e;
// Ensure that each rendered template inserted into the DOM has its own template item,
if(r=e.getAttribute(v)){for(;l.parentNode&&1===(l=l.parentNode).nodeType&&!(s=l.getAttribute(v)););s!==r&&(
// The next ancestor with a _tmplitem expando is on a different key than this one.
// So this is a top-level element within this template item
// Set pntNode to the key of the parentNode, or to 0 if pntNode.parentNode is null, or pntNode is a fragment.
l=l.parentNode?11===l.nodeType?0:l.getAttribute(v)||0:0,(a=b[r])||(
// The item is for wrapped content, and was copied from the temporary parent wrappedItem.
a=y[r],a=i(a,b[l]||y[l]),a.key=++x,b[x]=a),k&&n(r)),e.removeAttribute(v)}else k&&(a=t.data(e,"tmplItem"))&&(
// This was a rendered element, cloned during append or appendTo etc.
// TmplItem stored in jQuery data has already been cloned in cloneCopyEvent. We must replace it with a fresh cloned tmplItem.
n(a.key),b[a.key]=a,l=t.data(e.parentNode,"tmplItem"),l=l?l.key:0);if(a){
// Find the template item of the parent element.
// (Using !=, not !==, since pntItem.key is number, and pntNode may be a string)
for(o=a;o&&o.key!=l;)
// Add this element as a top-level node for this rendered template item, as well as for any
// ancestor items between this item and the item of its parent element
o.nodes.push(e),o=o.parent;
// Delete content built during rendering - reduce API surface area and memory use, and avoid exposing of stale data after rendering...
delete a._ctnt,delete a._wrap,
// Store template item as jQuery data on the element
t.data(e,"tmplItem",a)}}var s,o,a,r,l,h="_"+k,c={};for(a=0,r=e.length;a<r;a++)if(1===(s=e[a]).nodeType){for(o=s.getElementsByTagName("*"),l=o.length-1;l>=0;l--)n(o[l]);n(s)}}
//---- Helper functions for template item ----
function c(t,e,i,n){return t?void C.push({_:t,tmpl:e,item:this,data:i,options:n}):C.pop()}function u(e,i,n){
// nested template, using {{tmpl}} tag
return t.tmpl(t.template(e),i,n,this)}function d(e,i){
// nested template, using {{wrap}} tag
var n=e.options||{};
// Apply the template, which may incorporate wrapped content,
return n.wrapped=i,t.tmpl(t.template(e.tmpl),e.data,n,e.item)}function p(e,i){var n=this._wrap;return t.map(t(t.isArray(n)?n.join(""):n).filter(e||"*"),function(t){return i?t.innerText||t.textContent:t.outerHTML||l(t)})}function f(){var e=this.nodes;t.tmpl(null,null,null,this).insertBefore(e[0]),t(e).remove()}var m,g=t.fn.domManip,v="_tmplitem",_=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,b={},y={},w={key:0,data:{}},x=0,k=0,C=[];
// Override appendTo etc., in order to provide support for targeting multiple elements. (This code would disappear if integrated in jquery core).
t.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,i){t.fn[e]=function(n){var s,o,a,r,l=[],h=t(n),c=1===this.length&&this[0].parentNode;if(m=b||{},c&&11===c.nodeType&&1===c.childNodes.length&&1===h.length)h[i](this[0]),l=this;else{for(o=0,a=h.length;o<a;o++)k=o,s=(o>0?this.clone(!0):this).get(),t(h[o])[i](s),l=l.concat(s);k=0,l=this.pushStack(l,e,h.selector)}return r=m,m=null,t.tmpl.complete(r),l}}),t.fn.extend({
// Use first wrapped element as template markup.
// Return wrapped set of template items, obtained by rendering template against data.
tmpl:function(e,i,n){return t.tmpl(this[0],e,i,n)},
// Find which rendered template item the first wrapped DOM element belongs to
tmplItem:function(){return t.tmplItem(this[0])},
// Consider the first wrapped element as a template declaration, and get the compiled template or store it as a named template.
template:function(e){return t.template(e,this[0])},domManip:function(e,i,n,s){if(e[0]&&t.isArray(e[0])){for(var o,a=t.makeArray(arguments),r=e[0],l=r.length,h=0;h<l&&!(o=t.data(r[h++],"tmplItem")););o&&k&&(a[2]=function(e){
// Handler called by oldManip when rendered template has been inserted into DOM.
t.tmpl.afterManip(this,e,n)}),g.apply(this,a)}else g.apply(this,arguments);return k=0,m||t.tmpl.complete(b),this}}),t.extend({
// Return wrapped set of template items, obtained by rendering template against data.
tmpl:function(e,s,o,r){var l,h=!r;if(h)
// This is a top-level tmpl call (not from a nested template using {{tmpl}})
r=w,e=t.template[e]||t.template(null,e),y={};else if(!e)
// Rebuild, without creating a new template item
// The template item is already associated with DOM - this is a refresh.
// Re-evaluate rendered template for the parentItem
return e=r.tmpl,b[r.key]=r,r.nodes=[],r.wrapped&&a(r,r.wrapped),t(n(r,null,r.tmpl(t,r)));return e?("function"==typeof s&&(s=s.call(r||{})),o&&o.wrapped&&a(o,o.wrapped),l=t.isArray(s)?t.map(s,function(t){return t?i(o,r,e,t):null}):[i(o,r,e,s)],h?t(n(r,null,l)):l):[]},
// Return rendered template item for an element.
tmplItem:function(e){var i;for(e instanceof t&&(e=e[0]);e&&1===e.nodeType&&!(i=t.data(e,"tmplItem"))&&(e=e.parentNode););return i||w},
// Set:
// Use $.template( name, tmpl ) to cache a named template,
// where tmpl is a template string, a script element or a jQuery instance wrapping a script element, etc.
// Use $( "selector" ).template( name ) to provide access by name to a script block template declaration.
// Get:
// Use $.template( name ) to access a cached template.
// Also $( selectorToScriptBlock ).template(), or $.template( null, templateString )
// will return the compiled template, without adding a name reference.
// If templateString includes at least one HTML tag, $.template( templateString ) is equivalent
// to $.template( null, templateString )
template:function(e,i){
// Compile template and associate with name
// This is an HTML string being passed directly in.
// If this is a template block, use cached copy, or generate tmpl function and cache.
// If not in map, and not containing at least on HTML tag, treat as a selector.
// (If integrated with core, use quickExpr.exec)
return i?("string"==typeof i?i=o(i):i instanceof t&&(i=i[0]||{}),i.nodeType&&(i=t.data(i,"tmpl")||t.data(i,"tmpl",o(i.innerHTML))),"string"==typeof e?t.template[e]=i:i):e?"string"!=typeof e?t.template(null,e):t.template[e]||t.template(null,_.test(e)?e:t(e)):null},encode:function(t){
// Do HTML encoding replacing < > & and ' and " by corresponding entities.
return(""+t).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")}}),t.extend(t.tmpl,{tag:{tmpl:{_default:{$2:"null"},open:"if($notnull_1){__=__.concat($item.nest($1,$2));}"},wrap:{_default:{$2:"null"},open:"$item.calls(__,$1,$2);__=[];",close:"call=$item.calls();__=call._.concat($item.wrap(call,__));"},each:{_default:{$2:"$index, $value"},open:"if($notnull_1){$.each($1a,function($2){with(this){",close:"}});}"},"if":{open:"if(($notnull_1) && $1a){",close:"}"},"else":{_default:{$1:"true"},open:"}else if(($notnull_1) && $1a){"},html:{
// Unecoded expression evaluation.
open:"if($notnull_1){__.push($1a);}"},"=":{
// Encoded expression evaluation. Abbreviated form is ${}.
_default:{$1:"$data"},open:"if($notnull_1){__.push($.encode($1a));}"},"!":{
// Comment tag. Skipped by parser
open:""}},
// This stub can be overridden, e.g. in jquery.tmplPlus for providing rendered events
complete:function(t){b={}},
// Call this from code which overrides domManip, or equivalent
// Manage cloning/storing template items etc.
afterManip:function(e,i,n){
// Provides cloned fragment ready for fixup prior to and after insertion into DOM
var s=11===i.nodeType?t.makeArray(i.childNodes):1===i.nodeType?[i]:[];
// Return fragment to original caller (e.g. append) for DOM insertion
n.call(e,i),
// Fragment has been inserted:- Add inserted nodes to tmplItem data structure. Replace inserted element annotations by jQuery.data.
h(s),k++}})}(jQuery),/*! jQuery UI - v1.12.1 - 2016-09-14
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
function(t){"function"==typeof define&&define.amd?
// AMD. Register as an anonymous module.
define(["jquery"],t):
// Browser globals
t(jQuery)}(function(t){
// Support: IE 8 only
// IE 8 doesn't resolve inherit to visible/hidden for computed values
function e(t){for(var e=t.css("visibility");"inherit"===e;)t=t.parent(),e=t.css("visibility");return"hidden"!==e}function i(t){for(var e,i;t.length&&t[0]!==document;){if(
// Ignore z-index if position is set to a value where z-index is ignored by the browser
// This makes behavior of this function consistent across browsers
// WebKit always returns auto if the element is positioned
e=t.css("position"),("absolute"===e||"relative"===e||"fixed"===e)&&(
// IE returns 0 when zIndex is not specified
// other browsers return a string
// we ignore the case of nested elements with an explicit value of 0
// <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
i=parseInt(t.css("zIndex"),10),!isNaN(i)&&0!==i))return i;t=t.parent()}return 0}/* Date picker manager.
   Use the singleton instance of this class, $.datepicker, to interact with the date picker.
   Settings for (groups of) date pickers are maintained in an instance object,
   allowing multiple different settings on the same page. */
function n(){this._curInst=null,// The current instance in use
this._keyEvent=!1,// If the last event was a key event
this._disabledInputs=[],// List of date picker inputs that have been disabled
this._datepickerShowing=!1,// True if the popup picker is showing , false if not
this._inDialog=!1,// True if showing within a "dialog", false if not
this._mainDivId="ui-datepicker-div",// The ID of the main datepicker division
this._inlineClass="ui-datepicker-inline",// The name of the inline marker class
this._appendClass="ui-datepicker-append",// The name of the append marker class
this._triggerClass="ui-datepicker-trigger",// The name of the trigger marker class
this._dialogClass="ui-datepicker-dialog",// The name of the dialog marker class
this._disableClass="ui-datepicker-disabled",// The name of the disabled covering marker class
this._unselectableClass="ui-datepicker-unselectable",// The name of the unselectable cell marker class
this._currentClass="ui-datepicker-current-day",// The name of the current day marker class
this._dayOverClass="ui-datepicker-days-cell-over",// The name of the day hover marker class
this.regional=[],// Available regional settings, indexed by language code
this.regional[""]={// Default regional settings
closeText:"Done",// Display text for close link
prevText:"Prev",// Display text for previous month link
nextText:"Next",// Display text for next month link
currentText:"Today",// Display text for current month link
monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],// Names of months for drop-down and formatting
monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],// For formatting
dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],// For formatting
dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],// For formatting
dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],// Column headings for days starting at Sunday
weekHeader:"Wk",// Column header for week of the year
dateFormat:"mm/dd/yy",// See format options on parseDate
firstDay:0,// The first day of the week, Sun = 0, Mon = 1, ...
isRTL:!1,// True if right-to-left language, false if left-to-right
showMonthAfterYear:!1,// True if the year select precedes month, false for month then year
yearSuffix:""},this._defaults={// Global defaults for all the date picker instances
showOn:"focus",// "focus" for popup on focus,
// "button" for trigger button, or "both" for either
showAnim:"fadeIn",// Name of jQuery animation for popup
showOptions:{},// Options for enhanced animations
defaultDate:null,// Used when field is blank: actual date,
// +/-number for offset from today, null for today
appendText:"",// Display text following the input box, e.g. showing the format
buttonText:"...",// Text for trigger button
buttonImage:"",// URL for trigger button image
buttonImageOnly:!1,// True if the image appears alone, false if it appears on a button
hideIfNoPrevNext:!1,// True to hide next/previous month links
// if not applicable, false to just disable them
navigationAsDateFormat:!1,// True if date formatting applied to prev/today/next links
gotoCurrent:!1,// True if today link goes back to current selection instead
changeMonth:!1,// True if month can be selected directly, false if only prev/next
changeYear:!1,// True if year can be selected directly, false if only prev/next
yearRange:"c-10:c+10",// Range of years to display in drop-down,
// either relative to today's year (-nn:+nn), relative to currently displayed year
// (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
showOtherMonths:!1,// True to show dates in other months, false to leave blank
selectOtherMonths:!1,// True to allow selection of dates in other months, false for unselectable
showWeek:!1,// True to show week of the year, false to not show it
calculateWeek:this.iso8601Week,// How to calculate the week of the year,
// takes a Date and returns the number of the week for it
shortYearCutoff:"+10",// Short year values < this are in the current century,
// > this are in the previous century,
// string value starting with "+" for current year + value
minDate:null,// The earliest selectable date, or null for no limit
maxDate:null,// The latest selectable date, or null for no limit
duration:"fast",// Duration of display/closure
beforeShowDay:null,// Function that takes a date and returns an array with
// [0] = true if selectable, false if not, [1] = custom CSS class name(s) or "",
// [2] = cell title (optional), e.g. $.datepicker.noWeekends
beforeShow:null,// Function that takes an input field and
// returns a set of custom settings for the date picker
onSelect:null,// Define a callback function when a date is selected
onChangeMonthYear:null,// Define a callback function when the month or year is changed
onClose:null,// Define a callback function when the datepicker is closed
numberOfMonths:1,// Number of months to show at a time
showCurrentAtPos:0,// The position in multipe months at which to show the current month (starting at 0)
stepMonths:1,// Number of months to step back/forward
stepBigMonths:12,// Number of months to step back/forward for the big links
altField:"",// Selector for an alternate field to store selected dates into
altFormat:"",// The date format to use for the alternate field
constrainInput:!0,// The input is constrained by the current date format
showButtonPanel:!1,// True to show button panel, false to not show it
autoSize:!1,// True to size the input for the date format, false to leave as is
disabled:!1},t.extend(this._defaults,this.regional[""]),this.regional.en=t.extend(!0,{},this.regional[""]),this.regional["en-US"]=t.extend(!0,{},this.regional.en),this.dpDiv=s(t("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}/*
 * Bind hover events for datepicker elements.
 * Done via delegate so the binding only occurs once in the lifetime of the parent div.
 * Global datepicker_instActive, set by _updateDatepicker allows the handlers to find their way back to the active picker.
 */
function s(e){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.on("mouseout",i,function(){t(this).removeClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!==-1&&t(this).removeClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!==-1&&t(this).removeClass("ui-datepicker-next-hover")}).on("mouseover",i,o)}function o(){t.datepicker._isDisabledDatepicker(g.inline?g.dpDiv.parent()[0]:g.input[0])||(t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),t(this).addClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!==-1&&t(this).addClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!==-1&&t(this).addClass("ui-datepicker-next-hover"))}/* jQuery extend now ignores nulls! */
function a(e,i){t.extend(e,i);for(var n in i)null==i[n]&&(e[n]=i[n]);return e}/*!
 * jQuery UI Spinner 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Spinner
//>>group: Widgets
//>>description: Displays buttons to easily input numbers via the keyboard or mouse.
//>>docs: http://api.jqueryui.com/spinner/
//>>demos: http://jqueryui.com/spinner/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/spinner.css
//>>css.theme: ../../themes/base/theme.css
function r(t){return function(){var e=this.element.val();t.apply(this,arguments),this._refresh(),e!==this.element.val()&&this._trigger("change")}}t.ui=t.ui||{};var l=(t.ui.version="1.12.1",0),h=Array.prototype.slice;t.cleanData=function(e){return function(i){var n,s,o;for(o=0;null!=(s=i[o]);o++)try{
// Only trigger remove when necessary to save time
n=t._data(s,"events"),n&&n.remove&&t(s).triggerHandler("remove")}catch(a){}e(i)}}(t.cleanData),t.widget=function(e,i,n){var s,o,a,r={},l=e.split(".")[0];e=e.split(".")[1];var h=l+"-"+e;
// Create selector for plugin
// Extend with the existing constructor to carry over any static properties
// We need to make the options hash a property directly on the new instance
// otherwise we'll modify the options hash on the prototype that we're
// inheriting from
// If this widget is being redefined then we need to find all widgets that
// are inheriting from it and redefine all of them so that they inherit from
// the new version of this widget. We're essentially trying to replace one
// level in the prototype chain.
// Remove the list of existing child constructors from the old constructor
// so the old child constructors can be garbage collected
return n||(n=i,i=t.Widget),t.isArray(n)&&(n=t.extend.apply(null,[{}].concat(n))),t.expr[":"][h.toLowerCase()]=function(e){return!!t.data(e,h)},t[l]=t[l]||{},s=t[l][e],o=t[l][e]=function(t,e){
// Allow instantiation without "new" keyword
// Allow instantiation without "new" keyword
// Allow instantiation without initializing for simple inheritance
// must use "new" keyword (the code above always passes args)
return this._createWidget?void(arguments.length&&this._createWidget(t,e)):new o(t,e)},t.extend(o,s,{version:n.version,
// Copy the object used to create the prototype in case we need to
// redefine the widget later
_proto:t.extend({},n),
// Track widgets that inherit from this widget in case this widget is
// redefined after a widget inherits from it
_childConstructors:[]}),a=new i,a.options=t.widget.extend({},a.options),t.each(n,function(e,n){return t.isFunction(n)?void(r[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function s(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=s,e=n.apply(this,arguments),this._super=i,this._superApply=o,e}}()):void(r[e]=n)}),o.prototype=t.widget.extend(a,{
// TODO: remove support for widgetEventPrefix
// always use the name + a colon as the prefix, e.g., draggable:start
// don't prefix for widgets that aren't DOM-based
widgetEventPrefix:s?a.widgetEventPrefix||e:e},r,{constructor:o,namespace:l,widgetName:e,widgetFullName:h}),s?(t.each(s._childConstructors,function(e,i){var n=i.prototype;
// Redefine the child widget using the same prototype that was
// originally used, but inherit from the new version of the base
t.widget(n.namespace+"."+n.widgetName,o,i._proto)}),delete s._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var i,n,s=h.call(arguments,1),o=0,a=s.length;o<a;o++)for(i in s[o])n=s[o][i],s[o].hasOwnProperty(i)&&void 0!==n&&(
// Clone objects
t.isPlainObject(n)?e[i]=t.isPlainObject(e[i])?t.widget.extend({},e[i],n):
// Don't extend strings, arrays, etc. with objects
t.widget.extend({},n):e[i]=n);return e},t.widget.bridge=function(e,i){var n=i.prototype.widgetFullName||e;t.fn[e]=function(s){var o="string"==typeof s,a=h.call(arguments,1),r=this;
// If this is an empty collection, we need to have the instance method
// return undefined instead of the jQuery instance
// Allow multiple hashes to be passed on init
return o?this.length||"instance"!==s?this.each(function(){var i,o=t.data(this,n);return"instance"===s?(r=o,!1):o?t.isFunction(o[s])&&"_"!==s.charAt(0)?(i=o[s].apply(o,a),i!==o&&void 0!==i?(r=i&&i.jquery?r.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+s+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; attempted to call method '"+s+"'")}):r=void 0:(a.length&&(s=t.widget.extend.apply(null,[s].concat(a))),this.each(function(){var e=t.data(this,n);e?(e.option(s||{}),e._init&&e._init()):t.data(this,n,new i(s,this))})),r}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,
// Callbacks
create:null},_createWidget:function(e,i){i=t(i||this.defaultElement||this)[0],this.element=t(i),this.uuid=l++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},i!==this&&(t.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===i&&this.destroy()}}),this.document=t(i.style?
// Element within the document
i.ownerDocument:
// Element is window or document
i.document||i),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,function(t,i){e._removeClass(i,t)}),
// We can probably remove the unbind calls in 2.0
// all event bindings should go through this._on()
this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
// Clean up events and states
this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var n,s,o,a=e;if(0===arguments.length)
// Don't return a reference to the internal hash
return t.widget.extend({},this.options);if("string"==typeof e)if(
// Handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
a={},n=e.split("."),e=n.shift(),n.length){for(s=a[e]=t.widget.extend({},this.options[e]),o=0;o<n.length-1;o++)s[n[o]]=s[n[o]]||{},s=s[n[o]];if(e=n.pop(),1===arguments.length)return void 0===s[e]?null:s[e];s[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,n,s;for(i in e)s=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&s&&s.length&&(
// We are doing this to create a new jQuery object because the _removeClass() call
// on the next line is going to destroy the reference to the current elements being
// tracked. We need to save a copy of this collection so that we can add the new classes
// below.
n=t(s.get()),this._removeClass(s,i),
// We don't use _addClass() here, because that uses this.options.classes
// for generating the string of classes. We want to use the value passed in from
// _setOption(), this is the new value of the classes option which was passed to
// _setOption(). We pass this value directly to _classes().
n.addClass(this._classes({element:n,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),
// If the widget is becoming disabled, then nothing is interactive
t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){function i(i,o){var a,r;for(r=0;r<i.length;r++)a=s.classesElementLookup[i[r]]||t(),a=t(e.add?t.unique(a.get().concat(e.element.get())):a.not(e.element).get()),s.classesElementLookup[i[r]]=a,n.push(i[r]),o&&e.classes[i[r]]&&n.push(e.classes[i[r]])}var n=[],s=this;return e=t.extend({element:this.element,classes:this.options.classes||{}},e),this._on(e.element,{remove:"_untrackClassesElement"}),e.keys&&i(e.keys.match(/\S+/g)||[],!0),e.extra&&i(e.extra.match(/\S+/g)||[]),n.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,function(n,s){t.inArray(e.target,s)!==-1&&(i.classesElementLookup[n]=t(s.not(e.target).get()))})},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,n){n="boolean"==typeof n?n:i;var s="string"==typeof t||null===t,o={extra:s?e:i,keys:s?t:e,element:s?this.element:t,add:n};return o.element.toggleClass(this._classes(o),n),this},_on:function(e,i,n){var s,o=this;
// No suppressDisabledCheck flag, shuffle arguments
"boolean"!=typeof e&&(n=i,i=e,e=!1),
// No element argument, shuffle and use this.element
n?(i=s=t(i),this.bindings=this.bindings.add(i)):(n=i,i=this.element,s=this.widget()),t.each(n,function(n,a){function r(){
// Allow widgets to customize the disabled handling
// - disabled as an array instead of boolean
// - disabled class as method for disabling individual parts
if(e||o.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled"))return("string"==typeof a?o[a]:a).apply(o,arguments)}
// Copy the guid so direct unbinding works
"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var l=n.match(/^([\w:-]*)\s*(.*)$/),h=l[1]+o.eventNamespace,c=l[2];c?s.on(h,c,r):i.on(h,r)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),
// Clear the stack to avoid memory leaks (#10056)
this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?n[t]:t).apply(n,arguments)}var n=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,n){var s,o,a=this.options[e];if(n=n||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),
// The original event may come from any element
// so we need to reset the target on the new event
i.target=this.element[0],
// Copy original event properties over to the new event
o=i.originalEvent)for(s in o)s in i||(i[s]=o[s]);return this.element.trigger(i,n),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(n))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(n,s,o){"string"==typeof s&&(s={effect:s});var a,r=s?s===!0||"number"==typeof s?i:s.effect||i:e;s=s||{},"number"==typeof s&&(s={duration:s}),a=!t.isEmptyObject(s),s.complete=o,s.delay&&n.delay(s.delay),a&&t.effects&&t.effects.effect[r]?n[e](s):r!==e&&n[r]?n[r](s.duration,s.easing,o):n.queue(function(i){t(this)[e](),o&&o.call(n[0]),i()})}});t.widget;/*!
 * jQuery UI Position 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
//>>label: Position
//>>group: Core
//>>description: Positions elements relative to other elements.
//>>docs: http://api.jqueryui.com/position/
//>>demos: http://jqueryui.com/position/
!function(){function e(t,e,i){return[parseFloat(t[0])*(u.test(t[0])?e/100:1),parseFloat(t[1])*(u.test(t[1])?i/100:1)]}function i(e,i){return parseInt(t.css(e,i),10)||0}function n(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}var s,o=Math.max,a=Math.abs,r=/left|center|right/,l=/top|center|bottom/,h=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,u=/%$/,d=t.fn.position;t.position={scrollbarWidth:function(){if(void 0!==s)return s;var e,i,n=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=n.children()[0];return t("body").append(n),e=o.offsetWidth,n.css("overflow","scroll"),i=o.offsetWidth,e===i&&(i=n[0].clientWidth),n.remove(),s=e-i},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),n=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),s="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,o="scroll"===n||"auto"===n&&e.height<e.element[0].scrollHeight;return{width:o?t.position.scrollbarWidth():0,height:s?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),n=t.isWindow(i[0]),s=!!i[0]&&9===i[0].nodeType,o=!n&&!s;return{element:i,isWindow:n,isDocument:s,offset:o?t(e).offset():{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:i.outerWidth(),height:i.outerHeight()}}},t.fn.position=function(s){if(!s||!s.of)return d.apply(this,arguments);
// Make a copy, we don't want to modify arguments
s=t.extend({},s);var u,p,f,m,g,v,_=t(s.of),b=t.position.getWithinInfo(s.within),y=t.position.getScrollInfo(b),w=(s.collision||"flip").split(" "),x={};
// Force left top to allow flipping
// Clone to reuse original targetOffset later
// Force my and at to have valid horizontal and vertical positions
// if a value is missing or invalid, it will be converted to center
// Normalize collision option
return v=n(_),_[0].preventDefault&&(s.at="left top"),p=v.width,f=v.height,m=v.offset,g=t.extend({},m),t.each(["my","at"],function(){var t,e,i=(s[this]||"").split(" ");1===i.length&&(i=r.test(i[0])?i.concat(["center"]):l.test(i[0])?["center"].concat(i):["center","center"]),i[0]=r.test(i[0])?i[0]:"center",i[1]=l.test(i[1])?i[1]:"center",
// Calculate offsets
t=h.exec(i[0]),e=h.exec(i[1]),x[this]=[t?t[0]:0,e?e[0]:0],
// Reduce to just the positions without the offsets
s[this]=[c.exec(i[0])[0],c.exec(i[1])[0]]}),1===w.length&&(w[1]=w[0]),"right"===s.at[0]?g.left+=p:"center"===s.at[0]&&(g.left+=p/2),"bottom"===s.at[1]?g.top+=f:"center"===s.at[1]&&(g.top+=f/2),u=e(x.at,p,f),g.left+=u[0],g.top+=u[1],this.each(function(){var n,r,l=t(this),h=l.outerWidth(),c=l.outerHeight(),d=i(this,"marginLeft"),v=i(this,"marginTop"),k=h+d+i(this,"marginRight")+y.width,C=c+v+i(this,"marginBottom")+y.height,D=t.extend({},g),T=e(x.my,l.outerWidth(),l.outerHeight());"right"===s.my[0]?D.left-=h:"center"===s.my[0]&&(D.left-=h/2),"bottom"===s.my[1]?D.top-=c:"center"===s.my[1]&&(D.top-=c/2),D.left+=T[0],D.top+=T[1],n={marginLeft:d,marginTop:v},t.each(["left","top"],function(e,i){t.ui.position[w[e]]&&t.ui.position[w[e]][i](D,{targetWidth:p,targetHeight:f,elemWidth:h,elemHeight:c,collisionPosition:n,collisionWidth:k,collisionHeight:C,offset:[u[0]+T[0],u[1]+T[1]],my:s.my,at:s.at,within:b,elem:l})}),s.using&&(
// Adds feedback as second argument to using callback, if present
r=function(t){var e=m.left-D.left,i=e+p-h,n=m.top-D.top,r=n+f-c,u={target:{element:_,left:m.left,top:m.top,width:p,height:f},element:{element:l,left:D.left,top:D.top,width:h,height:c},horizontal:i<0?"left":e>0?"right":"center",vertical:r<0?"top":n>0?"bottom":"middle"};p<h&&a(e+i)<p&&(u.horizontal="center"),f<c&&a(n+r)<f&&(u.vertical="middle"),o(a(e),a(i))>o(a(n),a(r))?u.important="horizontal":u.important="vertical",s.using.call(this,t,u)}),l.offset(t.extend(D,{using:r}))})},t.ui.position={fit:{left:function(t,e){var i,n=e.within,s=n.isWindow?n.scrollLeft:n.offset.left,a=n.width,r=t.left-e.collisionPosition.marginLeft,l=s-r,h=r+e.collisionWidth-a-s;
// Element is wider than within
e.collisionWidth>a?
// Element is initially over the left side of within
l>0&&h<=0?(i=t.left+l+e.collisionWidth-a-s,t.left+=l-i):h>0&&l<=0?t.left=s:l>h?t.left=s+a-e.collisionWidth:t.left=s:l>0?t.left+=l:h>0?t.left-=h:t.left=o(t.left-r,t.left)},top:function(t,e){var i,n=e.within,s=n.isWindow?n.scrollTop:n.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,l=s-r,h=r+e.collisionHeight-a-s;
// Element is taller than within
e.collisionHeight>a?
// Element is initially over the top of within
l>0&&h<=0?(i=t.top+l+e.collisionHeight-a-s,t.top+=l-i):h>0&&l<=0?t.top=s:l>h?t.top=s+a-e.collisionHeight:t.top=s:l>0?t.top+=l:h>0?t.top-=h:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,n,s=e.within,o=s.offset.left+s.scrollLeft,r=s.width,l=s.isWindow?s.scrollLeft:s.offset.left,h=t.left-e.collisionPosition.marginLeft,c=h-l,u=h+e.collisionWidth-r-l,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];c<0?(i=t.left+d+p+f+e.collisionWidth-r-o,(i<0||i<a(c))&&(t.left+=d+p+f)):u>0&&(n=t.left-e.collisionPosition.marginLeft+d+p+f-l,(n>0||a(n)<u)&&(t.left+=d+p+f))},top:function(t,e){var i,n,s=e.within,o=s.offset.top+s.scrollTop,r=s.height,l=s.isWindow?s.scrollTop:s.offset.top,h=t.top-e.collisionPosition.marginTop,c=h-l,u=h+e.collisionHeight-r-l,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,m=-2*e.offset[1];c<0?(n=t.top+p+f+m+e.collisionHeight-r-o,(n<0||n<a(c))&&(t.top+=p+f+m)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+m-l,(i>0||a(i)<u)&&(t.top+=p+f+m))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}}}();var c=(t.ui.position,t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(i){return!!t.data(i,e)}}):
// Support: jQuery <1.8
function(e,i,n){return!!t.data(e,n[3])}}),t.fn.extend({disableSelection:function(){var t="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.on(t+".ui-disableSelection",function(t){t.preventDefault()})}}(),enableSelection:function(){return this.off(".ui-disableSelection")}}),"ui-effects-"),u="ui-effects-style",d="ui-effects-animated",
// Create a local jQuery because jQuery Color relies on it and the
// global may not exist with AMD and a custom build (#10199)
p=t;t.effects={effect:{}},/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
function(t,e){function i(t,e,i){var n=u[e.type]||{};
// ~~ is an short way of doing floor for positive numbers
// IE will pass in empty strings as value for alpha,
// which will hit this case
return null==t?i||!e.def?null:e.def:(t=n.floor?~~t:parseFloat(t),isNaN(t)?e.def:n.mod?(t+n.mod)%n.mod:0>t?0:n.max<t?n.max:t)}function n(e){var i=h(),n=i._rgba=[];
// Found a stringParser that handled it
// Found a stringParser that handled it
// If this came from a parsed string, force "transparent" when alpha is 0
// chrome, (and maybe others) return "transparent" as rgba(0,0,0,0)
return e=e.toLowerCase(),f(l,function(t,s){var o,a=s.re.exec(e),r=a&&s.parse(a),l=s.space||"rgba";if(r)
// Exit each( stringParsers ) here because we matched
// If this was an rgba parse the assignment might happen twice
// oh well....
return o=i[l](r),i[c[l].cache]=o[c[l].cache],n=i._rgba=o._rgba,!1}),n.length?("0,0,0,0"===n.join()&&t.extend(n,o.transparent),i):o[e]}
// Hsla conversions adapted from:
// https://code.google.com/p/maashaack/source/browse/packages/graphics/trunk/src/graphics/colors/HUE2RGB.as?r=5021
function s(t,e,i){return i=(i+1)%1,6*i<1?t+(e-t)*i*6:2*i<1?e:3*i<2?t+(e-t)*(2/3-i)*6:t}var
// Colors = jQuery.Color.names
o,a="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
// Plusequals test for += 100 -= 100
r=/^([\-+])=\s*(\d+\.?\d*)/,
// A set of RE's that can match strings and generate color tuples.
l=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{
// This regex ignores A-F because it's compared against an already lowercased string
re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{
// This regex ignores A-F because it's compared against an already lowercased string
re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],
// JQuery.Color( )
h=t.Color=function(e,i,n,s){return new t.Color.fn.parse(e,i,n,s)},c={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=h.support={},
// Element for support tests
p=t("<p>")[0],
// Local aliases of functions called often
f=t.each;
// Determine rgba support immediately
p.style.cssText="background-color:rgba(1,1,1,.5)",d.rgba=p.style.backgroundColor.indexOf("rgba")>-1,
// Define cache name and alpha properties
// for rgba and hsla spaces
f(c,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),h.fn=t.extend(h.prototype,{parse:function(s,a,r,l){if(s===e)return this._rgba=[null,null,null,null],this;(s.jquery||s.nodeType)&&(s=t(s).css(a),a=e);var u=this,d=t.type(s),p=this._rgba=[];
// More than 1 argument specified - assume ( red, green, blue, alpha )
return a!==e&&(s=[s,a,r,l],d="array"),"string"===d?this.parse(n(s)||o._default):"array"===d?(f(c.rgba.props,function(t,e){p[e.idx]=i(s[e.idx],e)}),this):"object"===d?(s instanceof h?f(c,function(t,e){s[e.cache]&&(u[e.cache]=s[e.cache].slice())}):f(c,function(e,n){var o=n.cache;f(n.props,function(t,e){
// If the cache doesn't exist, and we know how to convert
if(!u[o]&&n.to){
// If the value was null, we don't need to copy it
// if the key was alpha, we don't need to copy it either
if("alpha"===t||null==s[t])return;u[o]=n.to(u._rgba)}
// This is the only case where we allow nulls for ALL properties.
// call clamp with alwaysAllowEmpty
u[o][e.idx]=i(s[t],e,!0)}),
// Everything defined but alpha?
u[o]&&t.inArray(null,u[o].slice(0,3))<0&&(
// Use the default of 1
u[o][3]=1,n.from&&(u._rgba=n.from(u[o])))}),this):void 0},is:function(t){var e=h(t),i=!0,n=this;return f(c,function(t,s){var o,a=e[s.cache];return a&&(o=n[s.cache]||s.to&&s.to(n._rgba)||[],f(s.props,function(t,e){if(null!=a[e.idx])return i=a[e.idx]===o[e.idx]})),i}),i},_space:function(){var t=[],e=this;return f(c,function(i,n){e[n.cache]&&t.push(i)}),t.pop()},transition:function(t,e){var n=h(t),s=n._space(),o=c[s],a=0===this.alpha()?h("transparent"):this,r=a[o.cache]||o.to(a._rgba),l=r.slice();return n=n[o.cache],f(o.props,function(t,s){var o=s.idx,a=r[o],h=n[o],c=u[s.type]||{};
// If null, don't override start value
null!==h&&(
// If null - use end
null===a?l[o]=h:(c.mod&&(h-a>c.mod/2?a+=c.mod:a-h>c.mod/2&&(a-=c.mod)),l[o]=i((h-a)*e+a,s)))}),this[s](l)},blend:function(e){
// If we are already opaque - return ourself
if(1===this._rgba[3])return this;var i=this._rgba.slice(),n=i.pop(),s=h(e)._rgba;return h(t.map(i,function(t,e){return(1-n)*s[e]+n*t}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(t,e){
// Catch 1 and 2
return null==t&&(t=e>2?1:0),e&&e<3&&(t=Math.round(100*t)+"%"),t});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),n=i.pop();return e&&i.push(~~(255*n)),"#"+t.map(i,function(t){
// Default to 0 when nulls exist
return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),h.fn.parse.prototype=h.fn,c.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,n=t[0]/255,s=t[1]/255,o=t[2]/255,a=t[3],r=Math.max(n,s,o),l=Math.min(n,s,o),h=r-l,c=r+l,u=.5*c;
// Chroma (diff) == 0 means greyscale which, by definition, saturation = 0%
// otherwise, saturation is based on the ratio of chroma (diff) to lightness (add)
return e=l===r?0:n===r?60*(s-o)/h+360:s===r?60*(o-n)/h+120:60*(n-s)/h+240,i=0===h?0:u<=.5?h/c:h/(2-c),[Math.round(e)%360,i,u,null==a?1:a]},c.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],n=t[2],o=t[3],a=n<=.5?n*(1+i):n+i-n*i,r=2*n-a;return[Math.round(255*s(r,a,e+1/3)),Math.round(255*s(r,a,e)),Math.round(255*s(r,a,e-1/3)),o]},f(c,function(n,s){var o=s.props,a=s.cache,l=s.to,c=s.from;
// Makes rgba() and hsla()
h.fn[n]=function(n){if(
// Generate a cache for this space if it doesn't exist
l&&!this[a]&&(this[a]=l(this._rgba)),n===e)return this[a].slice();var s,r=t.type(n),u="array"===r||"object"===r?n:arguments,d=this[a].slice();return f(o,function(t,e){var n=u["object"===r?t:e.idx];null==n&&(n=d[e.idx]),d[e.idx]=i(n,e)}),c?(s=h(c(d)),s[a]=d,s):h(d)},
// Makes red() green() blue() alpha() hue() saturation() lightness()
f(o,function(e,i){
// Alpha is included in more than one space
h.fn[e]||(h.fn[e]=function(s){var o,a=t.type(s),l="alpha"===e?this._hsla?"hsla":"rgba":n,h=this[l](),c=h[i.idx];return"undefined"===a?c:("function"===a&&(s=s.call(this,c),a=t.type(s)),null==s&&i.empty?this:("string"===a&&(o=r.exec(s),o&&(s=c+parseFloat(o[2])*("+"===o[1]?1:-1))),h[i.idx]=s,this[l](h)))})})}),
// Add cssHook and .fx.step function for each named hook.
// accept a space separated string of properties
h.hook=function(e){var i=e.split(" ");f(i,function(e,i){t.cssHooks[i]={set:function(e,s){var o,a,r="";if("transparent"!==s&&("string"!==t.type(s)||(o=n(s)))){if(s=h(o||s),!d.rgba&&1!==s._rgba[3]){for(a="backgroundColor"===i?e.parentNode:e;(""===r||"transparent"===r)&&a&&a.style;)try{r=t.css(a,"backgroundColor"),a=a.parentNode}catch(l){}s=s.blend(r&&"transparent"!==r?r:"_default")}s=s.toRgbaString()}try{e.style[i]=s}catch(l){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=h(e.elem,i),e.end=h(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}})},h.hook(a),t.cssHooks.borderColor={expand:function(t){var e={};return f(["Top","Right","Bottom","Left"],function(i,n){e["border"+n+"Color"]=t}),e}},
// Basic color names only.
// Usage of any of the other color names requires adding yourself or including
// jquery.color.svg-names.js.
o=t.Color.names={
// 4.1. Basic color keywords
aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",
// 4.2.3. "transparent" color keyword
transparent:[null,null,null,0],_default:"#ffffff"}}(p),/******************************************************************************/
/****************************** CLASS ANIMATIONS ******************************/
/******************************************************************************/
function(){function e(e){var i,n,s=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,o={};if(s&&s.length&&s[0]&&s[s[0]])for(n=s.length;n--;)i=s[n],"string"==typeof s[i]&&(o[t.camelCase(i)]=s[i]);else for(i in s)"string"==typeof s[i]&&(o[i]=s[i]);return o}function i(e,i){var n,o,a={};for(n in i)o=i[n],e[n]!==o&&(s[n]||!t.fx.step[n]&&isNaN(parseFloat(o))||(a[n]=o));return a}var n=["add","remove","toggle"],s={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,i){t.fx.step[i]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(p.style(t.elem,i,t.end),t.setAttr=!0)}}),
// Support: jQuery <1.8
t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(s,o,a,r){var l=t.speed(o,a,r);return this.queue(function(){var o,a=t(this),r=a.attr("class")||"",h=l.children?a.find("*").addBack():a;
// Map the animated objects to store the original styles.
h=h.map(function(){var i=t(this);return{el:i,start:e(this)}}),
// Apply class change
o=function(){t.each(n,function(t,e){s[e]&&a[e+"Class"](s[e])})},o(),
// Map all animated objects again - calculate new styles and diff
h=h.map(function(){return this.end=e(this.el[0]),this.diff=i(this.start,this.end),this}),
// Apply original class
a.attr("class",r),
// Map all animated objects again - this time collecting a promise
h=h.map(function(){var e=this,i=t.Deferred(),n=t.extend({},l,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,n),i.promise()}),
// Once all animations have completed:
t.when.apply(t,h.get()).done(function(){
// Set the final class
o(),
// For each animated element,
// clear all css properties that were animated
t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),
// This is guarnteed to be there if you use jQuery.speed()
// it also handles dequeuing the next anim...
l.complete.call(a[0])})})},t.fn.extend({addClass:function(e){return function(i,n,s,o){return n?t.effects.animateClass.call(this,{add:i},n,s,o):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(i,n,s,o){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},n,s,o):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(e){return function(i,n,s,o,a){return"boolean"==typeof n||void 0===n?s?t.effects.animateClass.call(this,n?{add:i}:{remove:i},s,o,a):e.apply(this,arguments):t.effects.animateClass.call(this,{toggle:i},n,s,o)}}(t.fn.toggleClass),switchClass:function(e,i,n,s,o){return t.effects.animateClass.call(this,{add:i,remove:e},n,s,o)}})}(),/******************************************************************************/
/*********************************** EFFECTS **********************************/
/******************************************************************************/
function(){
// Return an effect options object for the given parameters:
function e(e,i,n,s){
// Allow passing all options as the first parameter
// Convert to an object
// Catch (effect, null, ...)
// Catch (effect, callback)
// Catch (effect, speed, ?)
// Catch (effect, options, callback)
// Add options to effect
return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(s=i,n=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(s=n,n=i,i={}),t.isFunction(n)&&(s=n,n=null),i&&t.extend(e,i),n=n||i.duration,e.duration=t.fx.off?0:"number"==typeof n?n:n in t.fx.speeds?t.fx.speeds[n]:t.fx.speeds._default,e.complete=s||i.complete,e}function i(e){
// Valid standard speeds (nothing, number, named speed)
// Valid standard speeds (nothing, number, named speed)
// Invalid strings - treat as "normal" speed
// Complete callback
return!(e&&"number"!=typeof e&&!t.fx.speeds[e])||("string"==typeof e&&!t.effects.effect[e]||(!!t.isFunction(e)||"object"==typeof e&&!e.effect))}function n(t,e){var i=e.outerWidth(),n=e.outerHeight(),s=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,o=s.exec(t)||["",0,i,n,0];return{top:parseFloat(o[1])||0,right:"auto"===o[2]?i:parseFloat(o[2]),bottom:"auto"===o[3]?n:parseFloat(o[3]),left:parseFloat(o[4])||0}}t.expr&&t.expr.filters&&t.expr.filters.animated&&(t.expr.filters.animated=function(e){return function(i){return!!t(i).data(d)||e(i)}}(t.expr.filters.animated)),t.uiBackCompat!==!1&&t.extend(t.effects,{
// Saves a set of properties in a data storage
save:function(t,e){for(var i=0,n=e.length;i<n;i++)null!==e[i]&&t.data(c+e[i],t[0].style[e[i]])},
// Restores a set of previously saved properties from a data storage
restore:function(t,e){for(var i,n=0,s=e.length;n<s;n++)null!==e[n]&&(i=t.data(c+e[n]),t.css(e[n],i))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},
// Wraps the element around a wrapper that copies position properties
createWrapper:function(e){
// If the element is already wrapped, return it
if(e.parent().is(".ui-effects-wrapper"))return e.parent();
// Wrap the element
var i={width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("float")},n=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),
// Store the size in case width/height are defined in % - Fixes #5245
s={width:e.width(),height:e.height()},o=document.activeElement;
// Support: Firefox
// Firefox incorrectly exposes anonymous content
// https://bugzilla.mozilla.org/show_bug.cgi?id=561664
try{o.id}catch(a){o=document.body}
// Fixes #7595 - Elements lose focus when wrapped.
// Hotfix for jQuery 1.4 since some change in wrap() seems to actually
// lose the reference to the wrapped element
// Transfer positioning properties to the wrapper
return e.wrap(n),(e[0]===o||t.contains(e[0],o))&&t(o).trigger("focus"),n=e.parent(),"static"===e.css("position")?(n.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,n){i[n]=e.css(n),isNaN(parseInt(i[n],10))&&(i[n]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(s),n.css(i).show()},removeWrapper:function(e){var i=document.activeElement;
// Fixes #7595 - Elements lose focus when wrapped.
return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).trigger("focus")),e}}),t.extend(t.effects,{version:"1.12.1",define:function(e,i,n){return n||(n=i,i="effect"),t.effects.effect[e]=n,t.effects.effect[e].mode=i,n},scaledDimensions:function(t,e,i){if(0===e)return{height:0,width:0,outerHeight:0,outerWidth:0};var n="horizontal"!==i?(e||100)/100:1,s="vertical"!==i?(e||100)/100:1;return{height:t.height()*s,width:t.width()*n,outerHeight:t.outerHeight()*s,outerWidth:t.outerWidth()*n}},clipToBox:function(t){return{width:t.clip.right-t.clip.left,height:t.clip.bottom-t.clip.top,left:t.clip.left,top:t.clip.top}},
// Injects recently queued functions to be first in line (after "inprogress")
unshift:function(t,e,i){var n=t.queue();e>1&&n.splice.apply(n,[1,0].concat(n.splice(e,i))),t.dequeue()},saveStyle:function(t){t.data(u,t[0].style.cssText)},restoreStyle:function(t){t[0].style.cssText=t.data(u)||"",t.removeData(u)},mode:function(t,e){var i=t.is(":hidden");return"toggle"===e&&(e=i?"show":"hide"),(i?"hide"===e:"show"===e)&&(e="none"),e},
// Translates a [top,left] array into a baseline value
getBaseline:function(t,e){var i,n;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":n=0;break;case"center":n=.5;break;case"right":n=1;break;default:n=t[1]/e.width}return{x:n,y:i}},
// Creates a placeholder element so that the original element can be made absolute
createPlaceholder:function(e){var i,n=e.css("position"),s=e.position();
// Lock in margins first to account for form elements, which
// will change margin if you explicitly set height
// see: http://jsfiddle.net/JZSMt/3/ https://bugs.webkit.org/show_bug.cgi?id=107380
// Support: Safari
return e.css({marginTop:e.css("marginTop"),marginBottom:e.css("marginBottom"),marginLeft:e.css("marginLeft"),marginRight:e.css("marginRight")}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()),/^(static|relative)/.test(n)&&(n="absolute",i=t("<"+e[0].nodeName+">").insertAfter(e).css({
// Convert inline to inline block to account for inline elements
// that turn to inline block based on content (like img)
display:/^(inline|ruby)/.test(e.css("display"))?"inline-block":"block",visibility:"hidden",
// Margins need to be set to account for margin collapse
marginTop:e.css("marginTop"),marginBottom:e.css("marginBottom"),marginLeft:e.css("marginLeft"),marginRight:e.css("marginRight"),"float":e.css("float")}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"),e.data(c+"placeholder",i)),e.css({position:n,left:s.left,top:s.top}),i},removePlaceholder:function(t){var e=c+"placeholder",i=t.data(e);i&&(i.remove(),t.removeData(e))},
// Removes a placeholder if it exists and restores
// properties that were modified during placeholder creation
cleanUp:function(e){t.effects.restoreStyle(e),t.effects.removePlaceholder(e)},setTransition:function(e,i,n,s){return s=s||{},t.each(i,function(t,i){var o=e.cssUnit(i);o[0]>0&&(s[i]=o[0]*n+o[1])}),s}}),t.fn.extend({effect:function(){function i(e){function i(){r.removeData(d),t.effects.cleanUp(r),"hide"===n.mode&&r.hide(),a()}function a(){t.isFunction(l)&&l.call(r[0]),t.isFunction(e)&&e()}var r=t(this);
// Override mode option on a per element basis,
// as toggle can be either show or hide depending on element state
n.mode=c.shift(),t.uiBackCompat===!1||o?"none"===n.mode?(
// Call the core method to track "olddisplay" properly
r[h](),a()):s.call(r[0],n,i):(r.is(":hidden")?"hide"===h:"show"===h)?(
// Call the core method to track "olddisplay" properly
r[h](),a()):s.call(r[0],n,a)}var n=e.apply(this,arguments),s=t.effects.effect[n.effect],o=s.mode,a=n.queue,r=a||"fx",l=n.complete,h=n.mode,c=[],u=function(e){var i=t(this),n=t.effects.mode(i,h)||o;
// Sentinel for duck-punching the :animated psuedo-selector
i.data(d,!0),
// Save effect mode for later use,
// we can't just call $.effects.mode again later,
// as the .show() below destroys the initial state
c.push(n),
// See $.uiBackCompat inside of run() for removal of defaultMode in 1.13
o&&("show"===n||n===o&&"hide"===n)&&i.show(),o&&"none"===n||t.effects.saveStyle(i),t.isFunction(e)&&e()};
// Delegate to the original method (e.g., .show()) if possible
return t.fx.off||!s?h?this[h](n.duration,l):this.each(function(){l&&l.call(this)}):a===!1?this.each(u).each(i):this.queue(r,u).queue(r,i)},show:function(t){return function(n){if(i(n))return t.apply(this,arguments);var s=e.apply(this,arguments);return s.mode="show",this.effect.call(this,s)}}(t.fn.show),hide:function(t){return function(n){if(i(n))return t.apply(this,arguments);var s=e.apply(this,arguments);return s.mode="hide",this.effect.call(this,s)}}(t.fn.hide),toggle:function(t){return function(n){if(i(n)||"boolean"==typeof n)return t.apply(this,arguments);var s=e.apply(this,arguments);return s.mode="toggle",this.effect.call(this,s)}}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),n=[];return t.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(n=[parseFloat(i),e])}),n},cssClip:function(t){return t?this.css("clip","rect("+t.top+"px "+t.right+"px "+t.bottom+"px "+t.left+"px)"):n(this.css("clip"),this)},transfer:function(e,i){var n=t(this),s=t(e.to),o="fixed"===s.css("position"),a=t("body"),r=o?a.scrollTop():0,l=o?a.scrollLeft():0,h=s.offset(),c={top:h.top-r,left:h.left-l,height:s.innerHeight(),width:s.innerWidth()},u=n.offset(),d=t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({top:u.top-r,left:u.left-l,height:n.innerHeight(),width:n.innerWidth(),position:o?"fixed":"absolute"}).animate(c,e.duration,e.easing,function(){d.remove(),t.isFunction(i)&&i()})}}),t.fx.step.clip=function(e){e.clipInit||(e.start=t(e.elem).cssClip(),"string"==typeof e.end&&(e.end=n(e.end,e.elem)),e.clipInit=!0),t(e.elem).cssClip({top:e.pos*(e.end.top-e.start.top)+e.start.top,right:e.pos*(e.end.right-e.start.right)+e.start.right,bottom:e.pos*(e.end.bottom-e.start.bottom)+e.start.bottom,left:e.pos*(e.end.left-e.start.left)+e.start.left})}}(),/******************************************************************************/
/*********************************** EASING ***********************************/
/******************************************************************************/
function(){
// Based on easing equations from Robert Penner (http://www.robertpenner.com/easing)
var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,i){e[i]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;t<((e=Math.pow(2,--i))-1)/11;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return t<.5?i(2*t)/2:1-i(t*-2+2)/2}})}();var f,f=t.effects;t.effects.define("blind","hide",function(e,i){var n={up:["bottom","top"],vertical:["bottom","top"],down:["top","bottom"],left:["right","left"],horizontal:["right","left"],right:["left","right"]},s=t(this),o=e.direction||"up",a=s.cssClip(),r={clip:t.extend({},a)},l=t.effects.createPlaceholder(s);r.clip[n[o][0]]=r.clip[n[o][1]],"show"===e.mode&&(s.cssClip(r.clip),l&&l.css(t.effects.clipToBox(r)),r.clip=a),l&&l.animate(t.effects.clipToBox(r),e.duration,e.easing),s.animate(r,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("bounce",function(e,i){var n,s,o,a=t(this),
// Defaults:
r=e.mode,l="hide"===r,h="show"===r,c=e.direction||"up",u=e.distance,d=e.times||5,
// Number of internal animations
p=2*d+(h||l?1:0),f=e.duration/p,m=e.easing,
// Utility:
g="up"===c||"down"===c?"top":"left",v="up"===c||"left"===c,_=0,b=a.queue().length;
// Bounces up/down/left/right then back to 0 -- times * 2 animations happen here
for(t.effects.createPlaceholder(a),o=a.css(g),
// Default distance for the BIGGEST bounce is the outer Distance / 3
u||(u=a["top"===g?"outerHeight":"outerWidth"]()/3),h&&(s={opacity:1},s[g]=o,
// If we are showing, force opacity 0 and set the initial position
// then do the "first" animation
a.css("opacity",0).css(g,v?2*-u:2*u).animate(s,f,m)),
// Start at the smallest distance if we are hiding
l&&(u/=Math.pow(2,d-1)),s={},s[g]=o;_<d;_++)n={},n[g]=(v?"-=":"+=")+u,a.animate(n,f,m).animate(s,f,m),u=l?2*u:u/2;
// Last Bounce when Hiding
l&&(n={opacity:0},n[g]=(v?"-=":"+=")+u,a.animate(n,f,m)),a.queue(i),t.effects.unshift(a,b,p+1)}),t.effects.define("clip","hide",function(e,i){var n,s={},o=t(this),a=e.direction||"vertical",r="both"===a,l=r||"horizontal"===a,h=r||"vertical"===a;n=o.cssClip(),s.clip={top:h?(n.bottom-n.top)/2:n.top,right:l?(n.right-n.left)/2:n.right,bottom:h?(n.bottom-n.top)/2:n.bottom,left:l?(n.right-n.left)/2:n.left},t.effects.createPlaceholder(o),"show"===e.mode&&(o.cssClip(s.clip),s.clip=n),o.animate(s,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("drop","hide",function(e,i){var n,s=t(this),o=e.mode,a="show"===o,r=e.direction||"left",l="up"===r||"down"===r?"top":"left",h="up"===r||"left"===r?"-=":"+=",c="+="===h?"-=":"+=",u={opacity:0};t.effects.createPlaceholder(s),n=e.distance||s["top"===l?"outerHeight":"outerWidth"](!0)/2,u[l]=h+n,a&&(s.css(u),u[l]=c+n,u.opacity=1),
// Animate
s.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("explode","hide",function(e,i){
// Children animate complete:
function n(){b.push(this),b.length===u*d&&s()}function s(){p.css({visibility:"visible"}),t(b).remove(),i()}var o,a,r,l,h,c,u=e.pieces?Math.round(Math.sqrt(e.pieces)):3,d=u,p=t(this),f=e.mode,m="show"===f,
// Show and then visibility:hidden the element before calculating offset
g=p.show().css("visibility","hidden").offset(),
// Width and height of a piece
v=Math.ceil(p.outerWidth()/d),_=Math.ceil(p.outerHeight()/u),b=[];
// Clone the element for each row and cell.
for(o=0;o<u;o++)for(// ===>
l=g.top+o*_,c=o-(u-1)/2,a=0;a<d;a++)// |||
r=g.left+a*v,h=a-(d-1)/2,
// Create a clone of the now hidden main element that will be absolute positioned
// within a wrapper div off the -left and -top equal to size of our pieces
p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-a*v,top:-o*_}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:v,height:_,left:r+(m?h*v:0),top:l+(m?c*_:0),opacity:m?0:1}).animate({left:r+(m?0:h*v),top:l+(m?0:c*_),opacity:m?1:0},e.duration||500,e.easing,n)}),t.effects.define("fade","toggle",function(e,i){var n="show"===e.mode;t(this).css("opacity",n?0:1).animate({opacity:n?1:0},{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("fold","hide",function(e,i){
// Create element
var n=t(this),s=e.mode,o="show"===s,a="hide"===s,r=e.size||15,l=/([0-9]+)%/.exec(r),h=!!e.horizFirst,c=h?["right","bottom"]:["bottom","right"],u=e.duration/2,d=t.effects.createPlaceholder(n),p=n.cssClip(),f={clip:t.extend({},p)},m={clip:t.extend({},p)},g=[p[c[0]],p[c[1]]],v=n.queue().length;l&&(r=parseInt(l[1],10)/100*g[a?0:1]),f.clip[c[0]]=r,m.clip[c[0]]=r,m.clip[c[1]]=0,o&&(n.cssClip(m.clip),d&&d.css(t.effects.clipToBox(m)),m.clip=p),
// Animate
n.queue(function(i){d&&d.animate(t.effects.clipToBox(f),u,e.easing).animate(t.effects.clipToBox(m),u,e.easing),i()}).animate(f,u,e.easing).animate(m,u,e.easing).queue(i),t.effects.unshift(n,v,4)}),t.effects.define("highlight","show",function(e,i){var n=t(this),s={backgroundColor:n.css("backgroundColor")};"hide"===e.mode&&(s.opacity=0),t.effects.saveStyle(n),n.css({backgroundImage:"none",backgroundColor:e.color||"#ffff99"}).animate(s,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("size",function(e,i){
// Create element
var n,s,o,a=t(this),
// Copy for children
r=["fontSize"],l=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],h=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],
// Set options
c=e.mode,u="effect"!==c,d=e.scale||"both",p=e.origin||["middle","center"],f=a.css("position"),m=a.position(),g=t.effects.scaledDimensions(a),v=e.from||g,_=e.to||t.effects.scaledDimensions(a,0);t.effects.createPlaceholder(a),"show"===c&&(o=v,v=_,_=o),
// Set scaling factor
s={from:{y:v.height/g.height,x:v.width/g.width},to:{y:_.height/g.height,x:_.width/g.width}},
// Scale the css box
"box"!==d&&"both"!==d||(
// Vertical props scaling
s.from.y!==s.to.y&&(v=t.effects.setTransition(a,l,s.from.y,v),_=t.effects.setTransition(a,l,s.to.y,_)),
// Horizontal props scaling
s.from.x!==s.to.x&&(v=t.effects.setTransition(a,h,s.from.x,v),_=t.effects.setTransition(a,h,s.to.x,_))),
// Scale the content
"content"!==d&&"both"!==d||
// Vertical props scaling
s.from.y!==s.to.y&&(v=t.effects.setTransition(a,r,s.from.y,v),_=t.effects.setTransition(a,r,s.to.y,_)),
// Adjust the position properties based on the provided origin points
p&&(n=t.effects.getBaseline(p,g),v.top=(g.outerHeight-v.outerHeight)*n.y+m.top,v.left=(g.outerWidth-v.outerWidth)*n.x+m.left,_.top=(g.outerHeight-_.outerHeight)*n.y+m.top,_.left=(g.outerWidth-_.outerWidth)*n.x+m.left),a.css(v),
// Animate the children if desired
"content"!==d&&"both"!==d||(l=l.concat(["marginTop","marginBottom"]).concat(r),h=h.concat(["marginLeft","marginRight"]),
// Only animate children with width attributes specified
// TODO: is this right? should we include anything with css width specified as well
a.find("*[width]").each(function(){var i=t(this),n=t.effects.scaledDimensions(i),o={height:n.height*s.from.y,width:n.width*s.from.x,outerHeight:n.outerHeight*s.from.y,outerWidth:n.outerWidth*s.from.x},a={height:n.height*s.to.y,width:n.width*s.to.x,outerHeight:n.height*s.to.y,outerWidth:n.width*s.to.x};
// Vertical props scaling
s.from.y!==s.to.y&&(o=t.effects.setTransition(i,l,s.from.y,o),a=t.effects.setTransition(i,l,s.to.y,a)),
// Horizontal props scaling
s.from.x!==s.to.x&&(o=t.effects.setTransition(i,h,s.from.x,o),a=t.effects.setTransition(i,h,s.to.x,a)),u&&t.effects.saveStyle(i),
// Animate children
i.css(o),i.animate(a,e.duration,e.easing,function(){
// Restore children
u&&t.effects.restoreStyle(i)})})),
// Animate
a.animate(_,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){var e=a.offset();0===_.opacity&&a.css("opacity",v.opacity),u||(a.css("position","static"===f?"relative":f).offset(e),
// Need to save style here so that automatic style restoration
// doesn't restore to the original styles from before the animation.
t.effects.saveStyle(a)),i()}})}),t.effects.define("scale",function(e,i){
// Create element
var n=t(this),s=e.mode,o=parseInt(e.percent,10)||(0===parseInt(e.percent,10)?0:"effect"!==s?0:100),a=t.extend(!0,{from:t.effects.scaledDimensions(n),to:t.effects.scaledDimensions(n,o,e.direction||"both"),origin:e.origin||["middle","center"]},e);
// Fade option to support puff
e.fade&&(a.from.opacity=1,a.to.opacity=0),t.effects.effect.size.call(this,a,i)}),t.effects.define("puff","hide",function(e,i){var n=t.extend(!0,{},e,{fade:!0,percent:parseInt(e.percent,10)||150});t.effects.effect.scale.call(this,n,i)}),t.effects.define("pulsate","show",function(e,i){var n=t(this),s=e.mode,o="show"===s,a="hide"===s,r=o||a,
// Showing or hiding leaves off the "last" animation
l=2*(e.times||5)+(r?1:0),h=e.duration/l,c=0,u=1,d=n.queue().length;
// Anims - 1 opacity "toggles"
for(!o&&n.is(":visible")||(n.css("opacity",0).show(),c=1);u<l;u++)n.animate({opacity:c},h,e.easing),c=1-c;n.animate({opacity:c},h,e.easing),n.queue(i),t.effects.unshift(n,d,l+1)}),t.effects.define("shake",function(e,i){var n=1,s=t(this),o=e.direction||"left",a=e.distance||20,r=e.times||3,l=2*r+1,h=Math.round(e.duration/l),c="up"===o||"down"===o?"top":"left",u="up"===o||"left"===o,d={},p={},f={},m=s.queue().length;
// Shakes
for(t.effects.createPlaceholder(s),
// Animation
d[c]=(u?"-=":"+=")+a,p[c]=(u?"+=":"-=")+2*a,f[c]=(u?"-=":"+=")+2*a,
// Animate
s.animate(d,h,e.easing);n<r;n++)s.animate(p,h,e.easing).animate(f,h,e.easing);s.animate(p,h,e.easing).animate(d,h/2,e.easing).queue(i),t.effects.unshift(s,m,l+1)}),t.effects.define("slide","show",function(e,i){var n,s,o=t(this),a={up:["bottom","top"],down:["top","bottom"],left:["right","left"],right:["left","right"]},r=e.mode,l=e.direction||"left",h="up"===l||"down"===l?"top":"left",c="up"===l||"left"===l,u=e.distance||o["top"===h?"outerHeight":"outerWidth"](!0),d={};t.effects.createPlaceholder(o),n=o.cssClip(),s=o.position()[h],
// Define hide animation
d[h]=(c?-1:1)*u+s,d.clip=o.cssClip(),d.clip[a[l][1]]=d.clip[a[l][0]],
// Reverse the animation if we're showing
"show"===r&&(o.cssClip(d.clip),o.css(h,d[h]),d.clip=n,d[h]=s),
// Actually animate
o.animate(d,{queue:!1,duration:e.duration,easing:e.easing,complete:i})});t.uiBackCompat!==!1&&(f=t.effects.define("transfer",function(e,i){t(this).transfer(e,i)}));/*!
 * jQuery UI Focusable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: :focusable Selector
//>>group: Core
//>>description: Selects elements which can be focused.
//>>docs: http://api.jqueryui.com/focusable-selector/
// Selectors
t.ui.focusable=function(i,n){var s,o,a,r,l,h=i.nodeName.toLowerCase();
// Form controls within a disabled fieldset are disabled.
// However, controls within the fieldset's legend do not get disabled.
// Since controls generally aren't placed inside legends, we skip
// this portion of the check.
return"area"===h?(s=i.parentNode,o=s.name,!(!i.href||!o||"map"!==s.nodeName.toLowerCase())&&(a=t("img[usemap='#"+o+"']"),a.length>0&&a.is(":visible"))):(/^(input|select|textarea|button|object)$/.test(h)?(r=!i.disabled,r&&(l=t(i).closest("fieldset")[0],l&&(r=!l.disabled))):r="a"===h?i.href||n:n,r&&t(i).is(":visible")&&e(t(i)))},t.extend(t.expr[":"],{focusable:function(e){return t.ui.focusable(e,null!=t.attr(e,"tabindex"))}});t.ui.focusable,t.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):t(this[0].form)},t.ui.formResetMixin={_formResetHandler:function(){var e=t(this);
// Wait for the form reset to actually happen before refreshing
setTimeout(function(){var i=e.data("ui-form-reset-instances");t.each(i,function(){this.refresh()})})},_bindFormResetHandler:function(){if(this.form=this.element.form(),this.form.length){var t=this.form.data("ui-form-reset-instances")||[];t.length||
// We don't use _on() here because we use a single event handler per form
this.form.on("reset.ui-form-reset",this._formResetHandler),t.push(this),this.form.data("ui-form-reset-instances",t)}},_unbindFormResetHandler:function(){if(this.form.length){var e=this.form.data("ui-form-reset-instances");e.splice(t.inArray(this,e),1),e.length?this.form.data("ui-form-reset-instances",e):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")}}};/*!
 * jQuery UI Support for jQuery core 1.7.x 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 */
//>>label: jQuery 1.7 Support
//>>group: Core
//>>description: Support version 1.7.x of jQuery core
// Support: jQuery 1.7 only
// Not a great way to check versions, but since we only support 1.7+ and only
// need to detect <1.8, this is a simple check that should suffice. Checking
// for "1.7." would be a bit safer, but the version string is 1.7, not 1.7.0
// and we'll never reach 1.70.0 (if we do, we certainly won't be supporting
// 1.7 anymore). See #11197 for why we're not using feature detection.
"1.7"===t.fn.jquery.substring(0,3)&&(
// Setters for .innerWidth(), .innerHeight(), .outerWidth(), .outerHeight()
// Unlike jQuery Core 1.8+, these only support numeric values to set the
// dimensions in pixels
t.each(["Width","Height"],function(e,i){function n(e,i,n,o){return t.each(s,function(){i-=parseFloat(t.css(e,"padding"+this))||0,n&&(i-=parseFloat(t.css(e,"border"+this+"Width"))||0),o&&(i-=parseFloat(t.css(e,"margin"+this))||0)}),i}var s="Width"===i?["Left","Right"]:["Top","Bottom"],o=i.toLowerCase(),a={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};t.fn["inner"+i]=function(e){return void 0===e?a["inner"+i].call(this):this.each(function(){t(this).css(o,n(this,e)+"px")})},t.fn["outer"+i]=function(e,s){return"number"!=typeof e?a["outer"+i].call(this,e):this.each(function(){t(this).css(o,n(this,e,!0,s)+"px")})}}),t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))});/*!
 * jQuery UI Keycode 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Keycode
//>>group: Core
//>>description: Provide keycodes as keynames
//>>docs: http://api.jqueryui.com/jQuery.ui.keyCode/
t.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},t.ui.escapeSelector=function(){var t=/([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;return function(e){return e.replace(t,"\\$1")}}(),t.fn.labels=function(){var e,i,n,s,o;
// Check control.labels first
// Check control.labels first
// Support: IE <= 11, FF <= 37, Android <= 2.3 only
// Above browsers do not support control.labels. Everything below is to support them
// as well as document fragments. control.labels does not work on document fragments
// Look for the label based on the id
// We don't search against the document in case the element
// is disconnected from the DOM
// Get a full set of top level ancestors
// Create a selector for the label based on the id
return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(s=this.eq(0).parents("label"),n=this.attr("id"),n&&(e=this.eq(0).parents().last(),o=e.add(e.length?e.siblings():this.siblings()),i="label[for='"+t.ui.escapeSelector(n)+"']",s=s.add(o.find(i).addBack(i))),this.pushStack(s))},t.fn.scrollParent=function(e){var i=this.css("position"),n="absolute"===i,s=e?/(auto|scroll|hidden)/:/(auto|scroll)/,o=this.parents().filter(function(){var e=t(this);return(!n||"static"!==e.css("position"))&&s.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==i&&o.length?o:t(this[0].ownerDocument||document)},t.extend(t.expr[":"],{tabbable:function(e){var i=t.attr(e,"tabindex"),n=null!=i;return(!n||i>=0)&&t.ui.focusable(e,n)}}),t.fn.extend({uniqueId:function(){var t=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}}),t.widget("ui.accordion",{version:"1.12.1",options:{active:0,animate:{},classes:{"ui-accordion-header":"ui-corner-top","ui-accordion-header-collapsed":"ui-corner-all","ui-accordion-content":"ui-corner-bottom"},collapsible:!1,event:"click",header:"> li > :first-child, > :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},
// Callbacks
activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var e=this.options;this.prevShow=this.prevHide=t(),this._addClass("ui-accordion","ui-widget ui-helper-reset"),this.element.attr("role","tablist"),
// Don't allow collapsible: false and active: false / null
e.collapsible||e.active!==!1&&null!=e.active||(e.active=0),this._processPanels(),
// handle negative values
e.active<0&&(e.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():t()}},_createIcons:function(){var e,i,n=this.options.icons;n&&(e=t("<span>"),this._addClass(e,"ui-accordion-header-icon","ui-icon "+n.header),e.prependTo(this.headers),i=this.active.children(".ui-accordion-header-icon"),this._removeClass(i,n.header)._addClass(i,null,n.activeHeader)._addClass(this.headers,"ui-accordion-icons"))},_destroyIcons:function(){this._removeClass(this.headers,"ui-accordion-icons"),this.headers.children(".ui-accordion-header-icon").remove()},_destroy:function(){var t;
// Clean up main element
this.element.removeAttr("role"),
// Clean up headers
this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(),this._destroyIcons(),
// Clean up content panels
t=this.headers.next().css("display","").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&t.css("height","")},_setOption:function(t,e){
// _activate() will handle invalid values and update this.options
// Setting collapsible: false while collapsed; open first panel
return"active"===t?void this._activate(e):("event"===t&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(e)),this._super(t,e),"collapsible"!==t||e||this.options.active!==!1||this._activate(0),void("icons"===t&&(this._destroyIcons(),e&&this._createIcons())))},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t),
// Support: IE8 Only
// #5332 / #6059 - opacity doesn't cascade to positioned elements in IE
// so we need to add the disabled class to the headers and panels
this._toggleClass(null,"ui-state-disabled",!!t),this._toggleClass(this.headers.add(this.headers.next()),null,"ui-state-disabled",!!t)},_keydown:function(e){if(!e.altKey&&!e.ctrlKey){var i=t.ui.keyCode,n=this.headers.length,s=this.headers.index(e.target),o=!1;switch(e.keyCode){case i.RIGHT:case i.DOWN:o=this.headers[(s+1)%n];break;case i.LEFT:case i.UP:o=this.headers[(s-1+n)%n];break;case i.SPACE:case i.ENTER:this._eventHandler(e);break;case i.HOME:o=this.headers[0];break;case i.END:o=this.headers[n-1]}o&&(t(e.target).attr("tabIndex",-1),t(o).attr("tabIndex",0),t(o).trigger("focus"),e.preventDefault())}},_panelKeyDown:function(e){e.keyCode===t.ui.keyCode.UP&&e.ctrlKey&&t(e.currentTarget).prev().trigger("focus")},refresh:function(){var e=this.options;this._processPanels(),
// Was collapsed or no panel
e.active===!1&&e.collapsible===!0||!this.headers.length?(e.active=!1,this.active=t()):e.active===!1?this._activate(0):this.active.length&&!t.contains(this.element[0],this.active[0])?
// all remaining panel are disabled
this.headers.length===this.headers.find(".ui-state-disabled").length?(e.active=!1,this.active=t()):this._activate(Math.max(0,e.active-1)):
// make sure active index is correct
e.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){var t=this.headers,e=this.panels;this.headers=this.element.find(this.options.header),this._addClass(this.headers,"ui-accordion-header ui-accordion-header-collapsed","ui-state-default"),this.panels=this.headers.next().filter(":not(.ui-accordion-content-active)").hide(),this._addClass(this.panels,"ui-accordion-content","ui-helper-reset ui-widget-content"),
// Avoid memory leaks (#10056)
e&&(this._off(t.not(this.headers)),this._off(e.not(this.panels)))},_refresh:function(){var e,i=this.options,n=i.heightStyle,s=this.element.parent();this.active=this._findActive(i.active),this._addClass(this.active,"ui-accordion-header-active","ui-state-active")._removeClass(this.active,"ui-accordion-header-collapsed"),this._addClass(this.active.next(),"ui-accordion-content-active"),this.active.next().show(),this.headers.attr("role","tab").each(function(){var e=t(this),i=e.uniqueId().attr("id"),n=e.next(),s=n.uniqueId().attr("id");e.attr("aria-controls",s),n.attr("aria-labelledby",i)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),
// Make sure at least one header is in the tab order
this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(i.event),"fill"===n?(e=s.height(),this.element.siblings(":visible").each(function(){var i=t(this),n=i.css("position");"absolute"!==n&&"fixed"!==n&&(e-=i.outerHeight(!0))}),this.headers.each(function(){e-=t(this).outerHeight(!0)}),this.headers.next().each(function(){t(this).height(Math.max(0,e-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===n&&(e=0,this.headers.next().each(function(){var i=t(this).is(":visible");i||t(this).show(),e=Math.max(e,t(this).css("height","").height()),i||t(this).hide()}).height(e))},_activate:function(e){var i=this._findActive(e)[0];
// Trying to activate the already active panel
i!==this.active[0]&&(
// Trying to collapse, simulate a click on the currently active header
i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return"number"==typeof e?this.headers.eq(e):t()},_setupEvents:function(e){var i={keydown:"_keydown"};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(e){var i,n,s=this.options,o=this.active,a=t(e.currentTarget),r=a[0]===o[0],l=r&&s.collapsible,h=l?t():a.next(),c=o.next(),u={oldHeader:o,oldPanel:c,newHeader:l?t():a,newPanel:h};e.preventDefault(),
// click on active header, but not collapsible
r&&!s.collapsible||
// allow canceling activation
this._trigger("beforeActivate",e,u)===!1||(s.active=!l&&this.headers.index(a),
// When the call to ._toggle() comes after the class changes
// it causes a very odd bug in IE 8 (see #6720)
this.active=r?t():a,this._toggle(u),
// Switch classes
// corner classes on the previously active header stay after the animation
this._removeClass(o,"ui-accordion-header-active","ui-state-active"),s.icons&&(i=o.children(".ui-accordion-header-icon"),this._removeClass(i,null,s.icons.activeHeader)._addClass(i,null,s.icons.header)),r||(this._removeClass(a,"ui-accordion-header-collapsed")._addClass(a,"ui-accordion-header-active","ui-state-active"),s.icons&&(n=a.children(".ui-accordion-header-icon"),this._removeClass(n,null,s.icons.header)._addClass(n,null,s.icons.activeHeader)),this._addClass(a.next(),"ui-accordion-content-active")))},_toggle:function(e){var i=e.newPanel,n=this.prevShow.length?this.prevShow:e.oldPanel;
// Handle activating a panel during the animation for another activation
this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=n,this.options.animate?this._animate(i,n,e):(n.hide(),i.show(),this._toggleComplete(e)),n.attr({"aria-hidden":"true"}),n.prev().attr({"aria-selected":"false","aria-expanded":"false"}),
// if we're switching panels, remove the old header from the tab order
// if we're opening from collapsed state, remove the previous header from the tab order
// if we're collapsing, then keep the collapsing header in the tab order
i.length&&n.length?n.prev().attr({tabIndex:-1,"aria-expanded":"false"}):i.length&&this.headers.filter(function(){return 0===parseInt(t(this).attr("tabIndex"),10)}).attr("tabIndex",-1),i.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_animate:function(t,e,i){var n,s,o,a=this,r=0,l=t.css("box-sizing"),h=t.length&&(!e.length||t.index()<e.index()),c=this.options.animate||{},u=h&&c.down||c,d=function(){a._toggleComplete(i)};
// fall back from options to animation in case of partial down settings
return"number"==typeof u&&(o=u),"string"==typeof u&&(s=u),s=s||u.easing||c.easing,o=o||u.duration||c.duration,e.length?t.length?(n=t.show().outerHeight(),e.animate(this.hideProps,{duration:o,easing:s,step:function(t,e){e.now=Math.round(t)}}),void t.hide().animate(this.showProps,{duration:o,easing:s,complete:d,step:function(t,i){i.now=Math.round(t),"height"!==i.prop?"content-box"===l&&(r+=i.now):"content"!==a.options.heightStyle&&(i.now=Math.round(n-e.outerHeight()-r),r=0)}})):e.animate(this.hideProps,o,s,d):t.animate(this.showProps,o,s,d)},_toggleComplete:function(t){var e=t.oldPanel,i=e.prev();this._removeClass(e,"ui-accordion-content-active"),this._removeClass(i,"ui-accordion-header-active")._addClass(i,"ui-accordion-header-collapsed"),
// Work around for rendering bug in IE (#5421)
e.length&&(e.parent()[0].className=e.parent()[0].className),this._trigger("activate",null,t)}}),t.ui.safeActiveElement=function(t){var e;
// Support: IE 9 only
// IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
try{e=t.activeElement}catch(i){e=t.body}
// Support: IE 9 - 11 only
// IE may return null instead of an element
// Interestingly, this only seems to occur when NOT in an iframe
// Support: IE 11 only
// IE11 returns a seemingly empty object in some cases when accessing
// document.activeElement from an <iframe>
return e||(e=t.body),e.nodeName||(e=t.body),e},t.widget("ui.menu",{version:"1.12.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",
// Callbacks
blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,
// Flag used to prevent firing of the click handler
// as the event bubbles up through nested menus
this.mouseHandled=!1,this.element.uniqueId().attr({role:this.options.role,tabIndex:0}),this._addClass("ui-menu","ui-widget ui-widget-content"),this._on({
// Prevent focus from sticking to links inside menu after clicking
// them (focus should always stay on UL during navigation).
"mousedown .ui-menu-item":function(t){t.preventDefault()},"click .ui-menu-item":function(e){var i=t(e.target),n=t(t.ui.safeActiveElement(this.document[0]));!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(e),
// Only set the mouseHandled flag if the event will bubble, see #9469.
e.isPropagationStopped()||(this.mouseHandled=!0),
// Open submenu on click
i.has(".ui-menu").length?this.expand(e):!this.element.is(":focus")&&n.closest(".ui-menu").length&&(
// Redirect focus to the menu
this.element.trigger("focus",[!0]),
// If the active item is on the top level, let it stay active.
// Otherwise, blur the active item since it is no longer visible.
this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(e){
// Ignore mouse events while typeahead is active, see #10458.
// Prevents focusing the wrong item when typeahead causes a scroll while the mouse
// is over an item in the menu
if(!this.previousFilter){var i=t(e.target).closest(".ui-menu-item"),n=t(e.currentTarget);
// Ignore bubbled events on parent items, see #11641
i[0]===n[0]&&(
// Remove ui-state-active class from siblings of the newly focused menu item
// to avoid a jump caused by adjacent elements both having a class with a border
this._removeClass(n.siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(e,n))}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){
// If there's already an active item, keep it active
// If not, activate the first item
var i=this.active||this.element.find(this.options.items).eq(0);e||this.focus(t,i)},blur:function(e){this._delay(function(){var i=!t.contains(this.element[0],t.ui.safeActiveElement(this.document[0]));i&&this.collapseAll(e)})},keydown:"_keydown"}),this.refresh(),
// Clicks outside of a menu collapse any open menus
this._on(this.document,{click:function(t){this._closeOnDocumentClick(t)&&this.collapseAll(t),
// Reset the mouseHandled flag
this.mouseHandled=!1}})},_destroy:function(){var e=this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),i=e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
// Destroy (sub)menus
this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),i.children().each(function(){var e=t(this);e.data("ui-menu-submenu-caret")&&e.remove()})},_keydown:function(e){var i,n,s,o,a=!0;switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case t.ui.keyCode.HOME:this._move("first","first",e);break;case t.ui.keyCode.END:this._move("last","last",e);break;case t.ui.keyCode.UP:this.previous(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.keyCode.ESCAPE:this.collapse(e);break;default:a=!1,n=this.previousFilter||"",o=!1,
// Support number pad values
s=e.keyCode>=96&&e.keyCode<=105?(e.keyCode-96).toString():String.fromCharCode(e.keyCode),clearTimeout(this.filterTimer),s===n?o=!0:s=n+s,i=this._filterMenuItems(s),i=o&&i.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):i,
// If no matches on the current filter, reset to the last character pressed
// to move down the menu to the first item that starts with that character
i.length||(s=String.fromCharCode(e.keyCode),i=this._filterMenuItems(s)),i.length?(this.focus(e,i),this.previousFilter=s,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}a&&e.preventDefault()},_activate:function(t){this.active&&!this.active.is(".ui-state-disabled")&&(this.active.children("[aria-haspopup='true']").length?this.expand(t):this.select(t))},refresh:function(){var e,i,n,s,o,a=this,r=this.options.icons.submenu,l=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length),
// Initialize nested menus
n=l.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=t(this),i=e.prev(),n=t("<span>").data("ui-menu-submenu-caret",!0);a._addClass(n,"ui-menu-icon","ui-icon "+r),i.attr("aria-haspopup","true").prepend(n),e.attr("aria-labelledby",i.attr("id"))}),this._addClass(n,"ui-menu","ui-widget ui-widget-content ui-front"),e=l.add(this.element),i=e.find(this.options.items),
// Initialize menu-items containing spaces and/or dashes only as dividers
i.not(".ui-menu-item").each(function(){var e=t(this);a._isDivider(e)&&a._addClass(e,"ui-menu-divider","ui-widget-content")}),
// Don't refresh list items that are already adapted
s=i.not(".ui-menu-item, .ui-menu-divider"),o=s.children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),this._addClass(s,"ui-menu-item")._addClass(o,"ui-menu-item-wrapper"),
// Add aria-disabled attribute to any disabled menu item
i.filter(".ui-state-disabled").attr("aria-disabled","true"),
// If the active item has been removed, blur the menu
this.active&&!t.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){if("icons"===t){var i=this.element.find(".ui-menu-icon");this._removeClass(i,null,this.options.icons.submenu)._addClass(i,null,e.submenu)}this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",String(t)),this._toggleClass(null,"ui-state-disabled",!!t)},focus:function(t,e){var i,n,s;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),n=this.active.children(".ui-menu-item-wrapper"),this._addClass(n,null,"ui-state-active"),
// Only update aria-activedescendant if there's a role
// otherwise we assume focus is managed elsewhere
this.options.role&&this.element.attr("aria-activedescendant",n.attr("id")),
// Highlight active parent menu item, if any
s=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),this._addClass(s,null,"ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=e.children(".ui-menu"),i.length&&t&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(e){var i,n,s,o,a,r;this._hasScroll()&&(i=parseFloat(t.css(this.activeMenu[0],"borderTopWidth"))||0,n=parseFloat(t.css(this.activeMenu[0],"paddingTop"))||0,s=e.offset().top-this.activeMenu.offset().top-i-n,o=this.activeMenu.scrollTop(),a=this.activeMenu.height(),r=e.outerHeight(),s<0?this.activeMenu.scrollTop(o+s):s+r>a&&this.activeMenu.scrollTop(o+s-a+r))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active"),this._trigger("blur",t,{item:this.active}),this.active=null)},_startOpening:function(t){clearTimeout(this.timer),
// Don't open if already open fixes a Firefox bug that caused a .5 pixel
// shift in the submenu position when mousing over the caret icon
"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(e){var i=t.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){
// If we were passed an event, look for the submenu that contains the event
var n=i?this.element:t(e&&e.target).closest(this.element.find(".ui-menu"));
// If we found no valid submenu ancestor, use the main menu to close all
// sub menus anyway
n.length||(n=this.element),this._close(n),this.blur(e),
// Work around active item staying active after menu is blurred
this._removeClass(n.find(".ui-state-active"),null,"ui-state-active"),this.activeMenu=n},this.delay)},
// With no arguments, closes the currently active menu - if nothing is active
// it closes all menus.  If passed an argument, it will search for menus BELOW
_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")},_closeOnDocumentClick:function(e){return!t(e.target).closest(".ui-menu").length},_isDivider:function(t){
// Match hyphen, em dash, en dash
return!/[^\-\u2014\u2013\s]/.test(t.text())},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();e&&e.length&&(this._open(e.parent()),
// Delay so Firefox will not hide activedescendant change in expanding submenu from AT
this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var n;this.active&&(n="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),n&&n.length&&this.active||(n=this.activeMenu.find(this.options.items)[e]()),this.focus(i,n)},nextPage:function(e){var i,n,s;return this.active?void(this.isLastItem()||(this._hasScroll()?(n=this.active.offset().top,s=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=t(this),i.offset().top-n-s<0}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items)[this.active?"last":"first"]()))):void this.next(e)},previousPage:function(e){var i,n,s;return this.active?void(this.isFirstItem()||(this._hasScroll()?(n=this.active.offset().top,s=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=t(this),i.offset().top-n+s>0}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items).first()))):void this.next(e)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){
// TODO: It should never be possible to not have an active item at this
// point, but the tests don't trigger mouseenter before click.
this.active=this.active||t(e.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,i)},_filterMenuItems:function(e){var i=e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),n=new RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return n.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))})}});/*!
 * jQuery UI Autocomplete 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Autocomplete
//>>group: Widgets
//>>description: Lists suggested words as the user is typing.
//>>docs: http://api.jqueryui.com/autocomplete/
//>>demos: http://jqueryui.com/autocomplete/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/autocomplete.css
//>>css.theme: ../../themes/base/theme.css
t.widget("ui.autocomplete",{version:"1.12.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,
// Callbacks
change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){
// Some browsers only repeat keydown events, not keypress events,
// so we use the suppressKeyPress flag to determine if we've already
// handled the keydown event. #7269
// Unfortunately the code for & in keypress is the same as the up arrow,
// so we use the suppressKeyPressRepeat flag to avoid handling keypress
// events when we know the keydown event was used to modify the
// search term. #7799
var e,i,n,s=this.element[0].nodeName.toLowerCase(),o="textarea"===s,a="input"===s;
// Textareas are always multi-line
// Inputs are always single-line, even if inside a contentEditable element
// IE also treats inputs as contentEditable
// All other element types are determined by whether or not they're contentEditable
this.isMultiLine=o||!a&&this._isContentEditable(this.element),this.valueMethod=this.element[o||a?"val":"text"],this.isNewMenu=!0,this._addClass("ui-autocomplete-input"),this.element.attr("autocomplete","off"),this._on(this.element,{keydown:function(s){if(this.element.prop("readOnly"))return e=!0,n=!0,void(i=!0);e=!1,n=!1,i=!1;var o=t.ui.keyCode;switch(s.keyCode){case o.PAGE_UP:e=!0,this._move("previousPage",s);break;case o.PAGE_DOWN:e=!0,this._move("nextPage",s);break;case o.UP:e=!0,this._keyEvent("previous",s);break;case o.DOWN:e=!0,this._keyEvent("next",s);break;case o.ENTER:
// when menu is open and has focus
this.menu.active&&(
// #6055 - Opera still allows the keypress to occur
// which causes forms to submit
e=!0,s.preventDefault(),this.menu.select(s));break;case o.TAB:this.menu.active&&this.menu.select(s);break;case o.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(s),
// Different browsers have different default behavior for escape
// Single press can mean undo or clear
// Double press in IE means clear the whole form
s.preventDefault());break;default:i=!0,
// search timeout should be triggered before the input value is changed
this._searchTimeout(s)}},keypress:function(n){if(e)return e=!1,void(this.isMultiLine&&!this.menu.element.is(":visible")||n.preventDefault());if(!i){
// Replicate some key handlers to allow them to repeat in Firefox and Opera
var s=t.ui.keyCode;switch(n.keyCode){case s.PAGE_UP:this._move("previousPage",n);break;case s.PAGE_DOWN:this._move("nextPage",n);break;case s.UP:this._keyEvent("previous",n);break;case s.DOWN:this._keyEvent("next",n)}}},input:function(t){return n?(n=!1,void t.preventDefault()):void this._searchTimeout(t)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(t){return this.cancelBlur?void delete this.cancelBlur:(clearTimeout(this.searching),this.close(t),void this._change(t))}}),this._initSource(),this.menu=t("<ul>").appendTo(this._appendTo()).menu({
// disable ARIA support, the live region takes care of that
role:null}).hide().menu("instance"),this._addClass(this.menu.element,"ui-autocomplete","ui-front"),this._on(this.menu.element,{mousedown:function(e){
// prevent moving focus out of the text field
e.preventDefault(),
// IE doesn't prevent moving focus even with event.preventDefault()
// so we set a flag to know when we should ignore the blur event
this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,
// Support: IE 8 only
// Right clicking a menu item or selecting text from the menu items will
// result in focus moving out of the input. However, we've already received
// and ignored the blur event because of the cancelBlur flag set above. So
// we restore focus to ensure that the menu closes properly based on the user's
// next actions.
this.element[0]!==t.ui.safeActiveElement(this.document[0])&&this.element.trigger("focus")})},menufocus:function(e,i){var n,s;
// support: Firefox
// Prevent accidental activation of menu items in Firefox (#7024 #9118)
// support: Firefox
// Prevent accidental activation of menu items in Firefox (#7024 #9118)
// Announce the value in the liveRegion
return this.isNewMenu&&(this.isNewMenu=!1,e.originalEvent&&/^mouse/.test(e.originalEvent.type))?(this.menu.blur(),void this.document.one("mousemove",function(){t(e.target).trigger(e.originalEvent)})):(s=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",e,{item:s})&&e.originalEvent&&/^key/.test(e.originalEvent.type)&&this._value(s.value),n=i.item.attr("aria-label")||s.value,void(n&&t.trim(n).length&&(this.liveRegion.children().hide(),t("<div>").text(n).appendTo(this.liveRegion))))},menuselect:function(e,i){var n=i.item.data("ui-autocomplete-item"),s=this.previous;
// Only trigger when focus was lost (click on menu)
this.element[0]!==t.ui.safeActiveElement(this.document[0])&&(this.element.trigger("focus"),this.previous=s,
// #6109 - IE triggers two focus events and the second
// is asynchronous, so we need to reset the previous
// term synchronously and asynchronously :-(
this._delay(function(){this.previous=s,this.selectedItem=n})),!1!==this._trigger("select",e,{item:n})&&this._value(n.value),
// reset the term after the select event
// this allows custom select handling to work properly
this.term=this._value(),this.close(e),this.selectedItem=n}}),this.liveRegion=t("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),
// Turning off autocomplete prevents the browser from remembering the
// value when navigating through history, so we re-enable autocomplete
// if the page is unloaded before the widget is destroyed. #7790
this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(t,e){this._super(t,e),"source"===t&&this._initSource(),"appendTo"===t&&this.menu.element.appendTo(this._appendTo()),"disabled"===t&&e&&this.xhr&&this.xhr.abort()},_isEventTargetInWidget:function(e){var i=this.menu.element[0];return e.target===this.element[0]||e.target===i||t.contains(i,e.target)},_closeOnClickOutside:function(t){this._isEventTargetInWidget(t)||this.close()},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front, dialog")),e.length||(e=this.document[0].body),e},_initSource:function(){var e,i,n=this;t.isArray(this.options.source)?(e=this.options.source,this.source=function(i,n){n(t.ui.autocomplete.filter(e,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(e,s){n.xhr&&n.xhr.abort(),n.xhr=t.ajax({url:i,data:e,dataType:"json",success:function(t){s(t)},error:function(){s([])}})}):this.source=this.options.source},_searchTimeout:function(t){clearTimeout(this.searching),this.searching=this._delay(function(){
// Search if the value has changed, or if the user retypes the same value (see #7434)
var e=this.term===this._value(),i=this.menu.element.is(":visible"),n=t.altKey||t.ctrlKey||t.metaKey||t.shiftKey;e&&(!e||i||n)||(this.selectedItem=null,this.search(null,t))},this.options.delay)},search:function(t,e){
// Always save the actual value, not the one passed as an argument
return t=null!=t?t:this._value(),this.term=this._value(),t.length<this.options.minLength?this.close(e):this._trigger("search",e)!==!1?this._search(t):void 0},_search:function(t){this.pending++,this._addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:t},this._response())},_response:function(){var e=++this.requestIndex;return t.proxy(function(t){e===this.requestIndex&&this.__response(t),this.pending--,this.pending||this._removeClass("ui-autocomplete-loading")},this)},__response:function(t){t&&(t=this._normalize(t)),this._trigger("response",null,{content:t}),!this.options.disabled&&t&&t.length&&!this.cancelSearch?(this._suggest(t),this._trigger("open")):
// use ._close() instead of .close() so we don't cancel future searches
this._close()},close:function(t){this.cancelSearch=!0,this._close(t)},_close:function(t){
// Remove the handler that closes the menu on outside clicks
this._off(this.document,"mousedown"),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",t))},_change:function(t){this.previous!==this._value()&&this._trigger("change",t,{item:this.selectedItem})},_normalize:function(e){
// assume all items have the right format when the first item is complete
// assume all items have the right format when the first item is complete
return e.length&&e[0].label&&e[0].value?e:t.map(e,function(e){return"string"==typeof e?{label:e,value:e}:t.extend({},e,{label:e.label||e.value,value:e.value||e.label})})},_suggest:function(e){var i=this.menu.element.empty();this._renderMenu(i,e),this.isNewMenu=!0,this.menu.refresh(),
// Size and position menu
i.show(),this._resizeMenu(),i.position(t.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(),
// Listen for interactions outside of the widget (#6642)
this._on(this.document,{mousedown:"_closeOnClickOutside"})},_resizeMenu:function(){var t=this.menu.element;t.outerWidth(Math.max(
// Firefox wraps long text (possibly a rounding bug)
// so we add 1px to avoid the wrapping (#7513)
t.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(e,i){var n=this;t.each(i,function(t,i){n._renderItemData(e,i)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-autocomplete-item",e)},_renderItem:function(e,i){return t("<li>").append(t("<div>").text(i.label)).appendTo(e)},_move:function(t,e){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(t)||this.menu.isLastItem()&&/^next/.test(t)?(this.isMultiLine||this._value(this.term),void this.menu.blur()):void this.menu[t](e):void this.search(null,e)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(t,e){this.isMultiLine&&!this.menu.element.is(":visible")||(this._move(t,e),
// Prevents moving cursor to beginning/end of the text field in some browsers
e.preventDefault())},
// Support: Chrome <=50
// We should be able to just use this.element.prop( "isContentEditable" )
// but hidden elements always report false in Chrome.
// https://code.google.com/p/chromium/issues/detail?id=313082
_isContentEditable:function(t){if(!t.length)return!1;var e=t.prop("contentEditable");return"inherit"===e?this._isContentEditable(t.parent()):"true"===e}}),t.extend(t.ui.autocomplete,{escapeRegex:function(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(e,i){var n=new RegExp(t.ui.autocomplete.escapeRegex(i),"i");return t.grep(e,function(t){return n.test(t.label||t.value||t)})}}),
// Live region extension, adding a `messages` option
// NOTE: This is an experimental API. We are still investigating
// a full solution for string manipulation and internationalization.
t.widget("ui.autocomplete",t.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(t){return t+(t>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=e&&e.length?this.options.messages.results(e.length):this.options.messages.noResults,this.liveRegion.children().hide(),t("<div>").text(i).appendTo(this.liveRegion))}});var m=(t.ui.autocomplete,/ui-corner-([a-z]){2,6}/g);t.widget("ui.controlgroup",{version:"1.12.1",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:!0,items:{button:"input[type=button], input[type=submit], input[type=reset], button, a",controlgroupLabel:".ui-controlgroup-label",checkboxradio:"input[type='checkbox'], input[type='radio']",selectmenu:"select",spinner:".ui-spinner-input"}},_create:function(){this._enhance()},
// To support the enhanced option in jQuery Mobile, we isolate DOM manipulation
_enhance:function(){this.element.attr("role","toolbar"),this.refresh()},_destroy:function(){this._callChildMethod("destroy"),this.childWidgets.removeData("ui-controlgroup-data"),this.element.removeAttr("role"),this.options.items.controlgroupLabel&&this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()},_initWidgets:function(){var e=this,i=[];
// First we iterate over each of the items options
t.each(this.options.items,function(n,s){var o,a={};
// Make sure the widget has a selector set
if(s)
// Make sure the widget actually exists
// We assume everything is in the middle to start because we can't determine
// first / last elements until all enhancments are done.
// Find instances of this widget inside controlgroup and init them
return"controlgroupLabel"===n?(o=e.element.find(s),o.each(function(){var e=t(this);e.children(".ui-controlgroup-label-contents").length||e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")}),e._addClass(o,null,"ui-widget ui-widget-content ui-state-default"),void(i=i.concat(o.get()))):void(t.fn[n]&&(a=e["_"+n+"Options"]?e["_"+n+"Options"]("middle"):{classes:{}},e.element.find(s).each(function(){var s=t(this),o=s[n]("instance"),r=t.widget.extend({},a);
// If the button is the child of a spinner ignore it
// TODO: Find a more generic solution
if("button"!==n||!s.parent(".ui-spinner").length){
// Create the widget if it doesn't exist
o||(o=s[n]()[n]("instance")),o&&(r.classes=e._resolveClassesValues(r.classes,o)),s[n](r);
// Store an instance of the controlgroup to be able to reference
// from the outermost element for changing options and refresh
var l=s[n]("widget");t.data(l[0],"ui-controlgroup-data",o?o:s[n]("instance")),i.push(l[0])}})))}),this.childWidgets=t(t.unique(i)),this._addClass(this.childWidgets,"ui-controlgroup-item")},_callChildMethod:function(e){this.childWidgets.each(function(){var i=t(this),n=i.data("ui-controlgroup-data");n&&n[e]&&n[e]()})},_updateCornerClass:function(t,e){var i="ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",n=this._buildSimpleOptions(e,"label").classes.label;this._removeClass(t,null,i),this._addClass(t,null,n)},_buildSimpleOptions:function(t,e){var i="vertical"===this.options.direction,n={classes:{}};return n.classes[e]={middle:"",first:"ui-corner-"+(i?"top":"left"),last:"ui-corner-"+(i?"bottom":"right"),only:"ui-corner-all"}[t],n},_spinnerOptions:function(t){var e=this._buildSimpleOptions(t,"ui-spinner");return e.classes["ui-spinner-up"]="",e.classes["ui-spinner-down"]="",e},_buttonOptions:function(t){return this._buildSimpleOptions(t,"ui-button")},_checkboxradioOptions:function(t){return this._buildSimpleOptions(t,"ui-checkboxradio-label")},_selectmenuOptions:function(t){var e="vertical"===this.options.direction;return{width:!!e&&"auto",classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(e?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(e?"top":"left")},last:{"ui-selectmenu-button-open":e?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(e?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[t]}},_resolveClassesValues:function(e,i){var n={};return t.each(e,function(s){var o=i.options.classes[s]||"";o=t.trim(o.replace(m,"")),n[s]=(o+" "+e[s]).replace(/\s+/g," ")}),n},_setOption:function(t,e){return"direction"===t&&this._removeClass("ui-controlgroup-"+this.options.direction),this._super(t,e),"disabled"===t?void this._callChildMethod(e?"disable":"enable"):void this.refresh()},refresh:function(){var e,i=this;this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction),"horizontal"===this.options.direction&&this._addClass(null,"ui-helper-clearfix"),this._initWidgets(),e=this.childWidgets,
// We filter here because we need to track all childWidgets not just the visible ones
this.options.onlyVisible&&(e=e.filter(":visible")),e.length&&(
// We do this last because we need to make sure all enhancment is done
// before determining first and last
t.each(["first","last"],function(t,n){var s=e[n]().data("ui-controlgroup-data");if(s&&i["_"+s.widgetName+"Options"]){var o=i["_"+s.widgetName+"Options"](1===e.length?"only":n);o.classes=i._resolveClassesValues(o.classes,s),s.element[s.widgetName](o)}else i._updateCornerClass(e[n](),n)}),
// Finally call the refresh method on each of the child widgets.
this._callChildMethod("refresh"))}});/*!
 * jQuery UI Checkboxradio 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Checkboxradio
//>>group: Widgets
//>>description: Enhances a form with multiple themeable checkboxes or radio buttons.
//>>docs: http://api.jqueryui.com/checkboxradio/
//>>demos: http://jqueryui.com/checkboxradio/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/button.css
//>>css.structure: ../../themes/base/checkboxradio.css
//>>css.theme: ../../themes/base/theme.css
t.widget("ui.checkboxradio",[t.ui.formResetMixin,{version:"1.12.1",options:{disabled:null,label:null,icon:!0,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var e,i,n=this,s=this._super()||{};
// We read the type here, because it makes more sense to throw a element type error first,
// rather then the error for lack of a label. Often if its the wrong type, it
// won't have a label (e.g. calling on a div, btn, etc)
// If there are multiple labels, use the last one
// We need to get the label text but this may also need to make sure it does not contain the
// input itself.
// Set the label option if we found label text
return this._readType(),i=this.element.labels(),this.label=t(i[i.length-1]),this.label.length||t.error("No label found for checkboxradio widget"),this.originalLabel="",this.label.contents().not(this.element[0]).each(function(){
// The label contents could be text, html, or a mix. We concat each element to get a
// string representation of the label, without the input as part of it.
n.originalLabel+=3===this.nodeType?t(this).text():this.outerHTML}),this.originalLabel&&(s.label=this.originalLabel),e=this.element[0].disabled,null!=e&&(s.disabled=e),s},_create:function(){var t=this.element[0].checked;this._bindFormResetHandler(),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled),this._setOption("disabled",this.options.disabled),this._addClass("ui-checkboxradio","ui-helper-hidden-accessible"),this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget"),"radio"===this.type&&this._addClass(this.label,"ui-checkboxradio-radio-label"),this.options.label&&this.options.label!==this.originalLabel?this._updateLabel():this.originalLabel&&(this.options.label=this.originalLabel),this._enhance(),t&&(this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active"),this.icon&&this._addClass(this.icon,null,"ui-state-hover")),this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus")},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus")}})},_readType:function(){var e=this.element[0].nodeName.toLowerCase();this.type=this.element[0].type,"input"===e&&/radio|checkbox/.test(this.type)||t.error("Can't create checkboxradio on element.nodeName="+e+" and element.type="+this.type)},
// Support jQuery Mobile enhanced option
_enhance:function(){this._updateIcon(this.element[0].checked)},widget:function(){return this.label},_getRadioGroup:function(){var e,i=this.element[0].name,n="input[name='"+t.ui.escapeSelector(i)+"']";return i?(e=this.form.length?t(this.form[0].elements).filter(n):t(n).filter(function(){return 0===t(this).form().length}),e.not(this.element)):t([])},_toggleClasses:function(){var e=this.element[0].checked;this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",e),this.options.icon&&"checkbox"===this.type&&this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",e)._toggleClass(this.icon,null,"ui-icon-blank",!e),"radio"===this.type&&this._getRadioGroup().each(function(){var e=t(this).checkboxradio("instance");e&&e._removeClass(e.label,"ui-checkboxradio-checked","ui-state-active")})},_destroy:function(){this._unbindFormResetHandler(),this.icon&&(this.icon.remove(),this.iconSpace.remove())},_setOption:function(t,e){
// We don't allow the value to be set to nothing
if("label"!==t||e)return this._super(t,e),"disabled"===t?(this._toggleClass(this.label,null,"ui-state-disabled",e),void(this.element[0].disabled=e)):void this.refresh()},_updateIcon:function(e){var i="ui-icon ui-icon-background ";this.options.icon?(this.icon||(this.icon=t("<span>"),this.iconSpace=t("<span> </span>"),this._addClass(this.iconSpace,"ui-checkboxradio-icon-space")),"checkbox"===this.type?(i+=e?"ui-icon-check ui-state-checked":"ui-icon-blank",this._removeClass(this.icon,null,e?"ui-icon-blank":"ui-icon-check")):i+="ui-icon-blank",this._addClass(this.icon,"ui-checkboxradio-icon",i),e||this._removeClass(this.icon,null,"ui-icon-check ui-state-checked"),this.icon.prependTo(this.label).after(this.iconSpace)):void 0!==this.icon&&(this.icon.remove(),this.iconSpace.remove(),delete this.icon)},_updateLabel:function(){
// Remove the contents of the label ( minus the icon, icon space, and input )
var t=this.label.contents().not(this.element[0]);this.icon&&(t=t.not(this.icon[0])),this.iconSpace&&(t=t.not(this.iconSpace[0])),t.remove(),this.label.append(this.options.label)},refresh:function(){var t=this.element[0].checked,e=this.element[0].disabled;this._updateIcon(t),this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",t),null!==this.options.label&&this._updateLabel(),e!==this.options.disabled&&this._setOptions({disabled:e})}}]);t.ui.checkboxradio;/*!
 * jQuery UI Button 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Button
//>>group: Widgets
//>>description: Enhances a form with themeable buttons.
//>>docs: http://api.jqueryui.com/button/
//>>demos: http://jqueryui.com/button/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/button.css
//>>css.theme: ../../themes/base/theme.css
t.widget("ui.button",{version:"1.12.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOptions:function(){var t,
// This is to support cases like in jQuery Mobile where the base widget does have
// an implementation of _getCreateOptions
e=this._super()||{};return this.isInput=this.element.is("input"),t=this.element[0].disabled,null!=t&&(e.disabled=t),this.originalLabel=this.isInput?this.element.val():this.element.html(),this.originalLabel&&(e.label=this.originalLabel),e},_create:function(){!this.option.showLabel&!this.options.icon&&(this.options.showLabel=!0),
// We have to check the option again here even though we did in _getCreateOptions,
// because null may have been passed on init which would override what was set in
// _getCreateOptions
null==this.options.disabled&&(this.options.disabled=this.element[0].disabled||!1),this.hasTitle=!!this.element.attr("title"),
// Check to see if the label needs to be set or if its already correct
this.options.label&&this.options.label!==this.originalLabel&&(this.isInput?this.element.val(this.options.label):this.element.html(this.options.label)),this._addClass("ui-button","ui-widget"),this._setOption("disabled",this.options.disabled),this._enhance(),this.element.is("a")&&this._on({keyup:function(e){e.keyCode===t.ui.keyCode.SPACE&&(e.preventDefault(),
// Support: PhantomJS <= 1.9, IE 8 Only
// If a native click is available use it so we actually cause navigation
// otherwise just trigger a click event
this.element[0].click?this.element[0].click():this.element.trigger("click"))}})},_enhance:function(){this.element.is("button")||this.element.attr("role","button"),this.options.icon&&(this._updateIcon("icon",this.options.icon),this._updateTooltip())},_updateTooltip:function(){this.title=this.element.attr("title"),this.options.showLabel||this.title||this.element.attr("title",this.options.label)},_updateIcon:function(e,i){var n="iconPosition"!==e,s=n?this.options.iconPosition:i,o="top"===s||"bottom"===s;
// Create icon
this.icon?n&&
// If we are updating the icon remove the old icon class
this._removeClass(this.icon,null,this.options.icon):(this.icon=t("<span>"),this._addClass(this.icon,"ui-button-icon","ui-icon"),this.options.showLabel||this._addClass("ui-button-icon-only")),
// If we are updating the icon add the new icon class
n&&this._addClass(this.icon,null,i),this._attachIcon(s),
// If the icon is on top or bottom we need to add the ui-widget-icon-block class and remove
// the iconSpace if there is one.
o?(this._addClass(this.icon,null,"ui-widget-icon-block"),this.iconSpace&&this.iconSpace.remove()):(
// Position is beginning or end so remove the ui-widget-icon-block class and add the
// space if it does not exist
this.iconSpace||(this.iconSpace=t("<span> </span>"),this._addClass(this.iconSpace,"ui-button-icon-space")),this._removeClass(this.icon,null,"ui-wiget-icon-block"),this._attachIconSpace(s))},_destroy:function(){this.element.removeAttr("role"),this.icon&&this.icon.remove(),this.iconSpace&&this.iconSpace.remove(),this.hasTitle||this.element.removeAttr("title")},_attachIconSpace:function(t){this.icon[/^(?:end|bottom)/.test(t)?"before":"after"](this.iconSpace)},_attachIcon:function(t){this.element[/^(?:end|bottom)/.test(t)?"append":"prepend"](this.icon)},_setOptions:function(t){var e=void 0===t.showLabel?this.options.showLabel:t.showLabel,i=void 0===t.icon?this.options.icon:t.icon;e||i||(t.showLabel=!0),this._super(t)},_setOption:function(t,e){"icon"===t&&(e?this._updateIcon(t,e):this.icon&&(this.icon.remove(),this.iconSpace&&this.iconSpace.remove())),"iconPosition"===t&&this._updateIcon(t,e),
// Make sure we can't end up with a button that has neither text nor icon
"showLabel"===t&&(this._toggleClass("ui-button-icon-only",null,!e),this._updateTooltip()),"label"===t&&(this.isInput?this.element.val(e):(
// If there is an icon, append it, else nothing then append the value
// this avoids removal of the icon when setting label text
this.element.html(e),this.icon&&(this._attachIcon(this.options.iconPosition),this._attachIconSpace(this.options.iconPosition)))),this._super(t,e),"disabled"===t&&(this._toggleClass(null,"ui-state-disabled",e),this.element[0].disabled=e,e&&this.element.blur())},refresh:function(){
// Make sure to only check disabled if its an element that supports this otherwise
// check for the disabled class to determine state
var t=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOptions({disabled:t}),this._updateTooltip()}}),
// DEPRECATED
t.uiBackCompat!==!1&&(
// Text and Icons options
t.widget("ui.button",t.ui.button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:function(){this.options.showLabel&&!this.options.text&&(this.options.showLabel=this.options.text),!this.options.showLabel&&this.options.text&&(this.options.text=this.options.showLabel),this.options.icon||!this.options.icons.primary&&!this.options.icons.secondary?this.options.icon&&(this.options.icons.primary=this.options.icon):this.options.icons.primary?this.options.icon=this.options.icons.primary:(this.options.icon=this.options.icons.secondary,this.options.iconPosition="end"),this._super()},_setOption:function(t,e){return"text"===t?void this._super("showLabel",e):("showLabel"===t&&(this.options.text=e),"icon"===t&&(this.options.icons.primary=e),"icons"===t&&(e.primary?(this._super("icon",e.primary),this._super("iconPosition","beginning")):e.secondary&&(this._super("icon",e.secondary),this._super("iconPosition","end"))),void this._superApply(arguments))}}),t.fn.button=function(e){return function(){return!this.length||this.length&&"INPUT"!==this[0].tagName||this.length&&"INPUT"===this[0].tagName&&"checkbox"!==this.attr("type")&&"radio"!==this.attr("type")?e.apply(this,arguments):(t.ui.checkboxradio||t.error("Checkboxradio widget missing"),0===arguments.length?this.checkboxradio({icon:!1}):this.checkboxradio.apply(this,arguments))}}(t.fn.button),t.fn.buttonset=function(){return t.ui.controlgroup||t.error("Controlgroup widget missing"),"option"===arguments[0]&&"items"===arguments[1]&&arguments[2]?this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]):"option"===arguments[0]&&"items"===arguments[1]?this.controlgroup.apply(this,[arguments[0],"items.button"]):("object"==typeof arguments[0]&&arguments[0].items&&(arguments[0].items={button:arguments[0].items}),this.controlgroup.apply(this,arguments))});t.ui.button;
// jscs:disable maximumLineLength
/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
/*!
 * jQuery UI Datepicker 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Datepicker
//>>group: Widgets
//>>description: Displays a calendar from an input or inline for selecting dates.
//>>docs: http://api.jqueryui.com/datepicker/
//>>demos: http://jqueryui.com/datepicker/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/datepicker.css
//>>css.theme: ../../themes/base/theme.css
t.extend(t.ui,{datepicker:{version:"1.12.1"}});var g;t.extend(n.prototype,{/* Class name added to elements to indicate already configured with a date picker. */
markerClassName:"hasDatepicker",
//Keep track of the maximum number of rows displayed (see #7043)
maxRows:4,
// TODO rename to "widget" when switching to widget factory
_widgetDatepicker:function(){return this.dpDiv},/* Override the default settings for all instances of the date picker.
	 * @param  settings  object - the new settings to use as defaults (anonymous object)
	 * @return the manager object
	 */
setDefaults:function(t){return a(this._defaults,t||{}),this},/* Attach the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 * @param  settings  object - the new settings to use for this date picker instance (anonymous)
	 */
_attachDatepicker:function(e,i){var n,s,o;n=e.nodeName.toLowerCase(),s="div"===n||"span"===n,e.id||(this.uuid+=1,e.id="dp"+this.uuid),o=this._newInst(t(e),s),o.settings=t.extend({},i||{}),"input"===n?this._connectDatepicker(e,o):s&&this._inlineDatepicker(e,o)},/* Create a new instance object. */
_newInst:function(e,i){var n=e[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");// escape jQuery meta chars
return{id:n,input:e,// associated target
selectedDay:0,selectedMonth:0,selectedYear:0,// current selection
drawMonth:0,drawYear:0,// month being drawn
inline:i,// is datepicker inline or not
dpDiv:i?// presentation div
s(t("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},/* Attach the date picker to an input field. */
_connectDatepicker:function(e,i){var n=t(e);i.append=t([]),i.trigger=t([]),n.hasClass(this.markerClassName)||(this._attachments(n,i),n.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keypress",this._doKeyPress).on("keyup",this._doKeyUp),this._autoSize(i),t.data(e,"datepicker",i),
//If disabled option is true, disable the datepicker once it has been attached to the input (see ticket #5665)
i.settings.disabled&&this._disableDatepicker(e))},/* Make attachments based on settings. */
_attachments:function(e,i){var n,s,o,a=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),a&&(i.append=t("<span class='"+this._appendClass+"'>"+a+"</span>"),e[r?"before":"after"](i.append)),e.off("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),n=this._get(i,"showOn"),"focus"!==n&&"both"!==n||// pop-up date picker when in the marked field
e.on("focus",this._showDatepicker),"button"!==n&&"both"!==n||(// pop-up date picker when button clicked
s=this._get(i,"buttonText"),o=this._get(i,"buttonImage"),i.trigger=t(this._get(i,"buttonImageOnly")?t("<img/>").addClass(this._triggerClass).attr({src:o,alt:s,title:s}):t("<button type='button'></button>").addClass(this._triggerClass).html(o?t("<img/>").attr({src:o,alt:s,title:s}):s)),e[r?"before":"after"](i.trigger),i.trigger.on("click",function(){return t.datepicker._datepickerShowing&&t.datepicker._lastInput===e[0]?t.datepicker._hideDatepicker():t.datepicker._datepickerShowing&&t.datepicker._lastInput!==e[0]?(t.datepicker._hideDatepicker(),t.datepicker._showDatepicker(e[0])):t.datepicker._showDatepicker(e[0]),!1}))},/* Apply the maximum length for the date format. */
_autoSize:function(t){if(this._get(t,"autoSize")&&!t.inline){var e,i,n,s,o=new Date(2009,11,20),// Ensure double digits
a=this._get(t,"dateFormat");a.match(/[DM]/)&&(e=function(t){for(i=0,n=0,s=0;s<t.length;s++)t[s].length>i&&(i=t[s].length,n=s);return n},o.setMonth(e(this._get(t,a.match(/MM/)?"monthNames":"monthNamesShort"))),o.setDate(e(this._get(t,a.match(/DD/)?"dayNames":"dayNamesShort"))+20-o.getDay())),t.input.attr("size",this._formatDate(t,o).length)}},/* Attach an inline date picker to a div. */
_inlineDatepicker:function(e,i){var n=t(e);n.hasClass(this.markerClassName)||(n.addClass(this.markerClassName).append(i.dpDiv),t.data(e,"datepicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),
//If disabled option is true, disable the datepicker before showing it (see ticket #5665)
i.settings.disabled&&this._disableDatepicker(e),
// Set display:block in place of inst.dpDiv.show() which won't work on disconnected elements
// http://bugs.jqueryui.com/ticket/7552 - A Datepicker created on a detached div has zero height
i.dpDiv.css("display","block"))},/* Pop-up the date picker in a "dialog" box.
	 * @param  input element - ignored
	 * @param  date	string or Date - the initial date to display
	 * @param  onSelect  function - the function to call when a date is selected
	 * @param  settings  object - update the dialog date picker instance's settings (anonymous object)
	 * @param  pos int[2] - coordinates for the dialog's position within the screen or
	 *					event - with x/y coordinates or
	 *					leave empty for default (screen centre)
	 * @return the manager object
	 */
_dialogDatepicker:function(e,i,n,s,o){var r,l,h,c,u,d=this._dialogInst;// internal instance
// should use actual width/height below
// Move input on screen for focus, but hidden behind dialog
return d||(this.uuid+=1,r="dp"+this.uuid,this._dialogInput=t("<input type='text' id='"+r+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.on("keydown",this._doKeyDown),t("body").append(this._dialogInput),d=this._dialogInst=this._newInst(this._dialogInput,!1),d.settings={},t.data(this._dialogInput[0],"datepicker",d)),a(d.settings,s||{}),i=i&&i.constructor===Date?this._formatDate(d,i):i,this._dialogInput.val(i),this._pos=o?o.length?o:[o.pageX,o.pageY]:null,this._pos||(l=document.documentElement.clientWidth,h=document.documentElement.clientHeight,c=document.documentElement.scrollLeft||document.body.scrollLeft,u=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[l/2-100+c,h/2-150+u]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),d.settings.onSelect=n,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),t.blockUI&&t.blockUI(this.dpDiv),t.data(this._dialogInput[0],"datepicker",d),this},/* Detach a datepicker from its control.
	 * @param  target	element - the target input field or division or span
	 */
_destroyDatepicker:function(e){var i,n=t(e),s=t.data(e,"datepicker");n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),t.removeData(e,"datepicker"),"input"===i?(s.append.remove(),s.trigger.remove(),n.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp)):"div"!==i&&"span"!==i||n.removeClass(this.markerClassName).empty(),g===s&&(g=null))},/* Enable the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 */
_enableDatepicker:function(e){var i,n,s=t(e),o=t.data(e,"datepicker");s.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!1,o.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):"div"!==i&&"span"!==i||(n=s.children("."+this._inlineClass),n.children().removeClass("ui-state-disabled"),n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}))},/* Disable the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 */
_disableDatepicker:function(e){var i,n,s=t(e),o=t.data(e,"datepicker");s.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!0,o.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):"div"!==i&&"span"!==i||(n=s.children("."+this._inlineClass),n.children().addClass("ui-state-disabled"),n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}),// delete entry
this._disabledInputs[this._disabledInputs.length]=e)},/* Is the first field in a jQuery collection disabled as a datepicker?
	 * @param  target	element - the target input field or division or span
	 * @return boolean - true if disabled, false if enabled
	 */
_isDisabledDatepicker:function(t){if(!t)return!1;for(var e=0;e<this._disabledInputs.length;e++)if(this._disabledInputs[e]===t)return!0;return!1},/* Retrieve the instance data for the target control.
	 * @param  target  element - the target input field or division or span
	 * @return  object - the associated instance data
	 * @throws  error if a jQuery problem getting data
	 */
_getInst:function(e){try{return t.data(e,"datepicker")}catch(i){throw"Missing instance data for this datepicker"}},/* Update or retrieve the settings for a date picker attached to an input field or division.
	 * @param  target  element - the target input field or division or span
	 * @param  name	object - the new settings to update or
	 *				string - the name of the setting to change or retrieve,
	 *				when retrieving also "all" for all instance settings or
	 *				"defaults" for all global defaults
	 * @param  value   any - the new value for the setting
	 *				(omit if above is an object or to retrieve a value)
	 */
_optionDatepicker:function(e,i,n){var s,o,r,l,h=this._getInst(e);
// reformat the old minDate/maxDate values if dateFormat changes and a new minDate/maxDate isn't provided
return 2===arguments.length&&"string"==typeof i?"defaults"===i?t.extend({},t.datepicker._defaults):h?"all"===i?t.extend({},h.settings):this._get(h,i):null:(s=i||{},"string"==typeof i&&(s={},s[i]=n),void(h&&(this._curInst===h&&this._hideDatepicker(),o=this._getDateDatepicker(e,!0),r=this._getMinMaxDate(h,"min"),l=this._getMinMaxDate(h,"max"),a(h.settings,s),null!==r&&void 0!==s.dateFormat&&void 0===s.minDate&&(h.settings.minDate=this._formatDate(h,r)),null!==l&&void 0!==s.dateFormat&&void 0===s.maxDate&&(h.settings.maxDate=this._formatDate(h,l)),"disabled"in s&&(s.disabled?this._disableDatepicker(e):this._enableDatepicker(e)),this._attachments(t(e),h),this._autoSize(h),this._setDate(h,o),this._updateAlternate(h),this._updateDatepicker(h))))},
// Change method deprecated
_changeDatepicker:function(t,e,i){this._optionDatepicker(t,e,i)},/* Redraw the date picker attached to an input field or division.
	 * @param  target  element - the target input field or division or span
	 */
_refreshDatepicker:function(t){var e=this._getInst(t);e&&this._updateDatepicker(e)},/* Set the dates for a jQuery selection.
	 * @param  target element - the target input field or division or span
	 * @param  date	Date - the new date
	 */
_setDateDatepicker:function(t,e){var i=this._getInst(t);i&&(this._setDate(i,e),this._updateDatepicker(i),this._updateAlternate(i))},/* Get the date(s) for the first entry in a jQuery selection.
	 * @param  target element - the target input field or division or span
	 * @param  noDefault boolean - true if no default date is to be used
	 * @return Date - the current date
	 */
_getDateDatepicker:function(t,e){var i=this._getInst(t);return i&&!i.inline&&this._setDateFromField(i,e),i?this._getDate(i):null},/* Handle keystrokes. */
_doKeyDown:function(e){var i,n,s,o=t.datepicker._getInst(e.target),a=!0,r=o.dpDiv.is(".ui-datepicker-rtl");if(o._keyEvent=!0,t.datepicker._datepickerShowing)switch(e.keyCode){case 9:t.datepicker._hideDatepicker(),a=!1;break;// hide on tab out
case 13:
// Trigger custom callback
return s=t("td."+t.datepicker._dayOverClass+":not(."+t.datepicker._currentClass+")",o.dpDiv),s[0]&&t.datepicker._selectDay(e.target,o.selectedMonth,o.selectedYear,s[0]),i=t.datepicker._get(o,"onSelect"),i?(n=t.datepicker._formatDate(o),i.apply(o.input?o.input[0]:null,[n,o])):t.datepicker._hideDatepicker(),!1;// don't submit the form
case 27:t.datepicker._hideDatepicker();break;// hide on escape
case 33:t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;// previous month/year on page up/+ ctrl
case 34:t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;// next month/year on page down/+ ctrl
case 35:(e.ctrlKey||e.metaKey)&&t.datepicker._clearDate(e.target),a=e.ctrlKey||e.metaKey;break;// clear on ctrl or command +end
case 36:(e.ctrlKey||e.metaKey)&&t.datepicker._gotoToday(e.target),a=e.ctrlKey||e.metaKey;break;// current on ctrl or command +home
case 37:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?1:-1,"D"),a=e.ctrlKey||e.metaKey,
// -1 day on ctrl or command +left
e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");
// next month/year on alt +left on Mac
break;case 38:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,-7,"D"),a=e.ctrlKey||e.metaKey;break;// -1 week on ctrl or command +up
case 39:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?-1:1,"D"),a=e.ctrlKey||e.metaKey,
// +1 day on ctrl or command +right
e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");
// next month/year on alt +right
break;case 40:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,7,"D"),a=e.ctrlKey||e.metaKey;break;// +1 week on ctrl or command +down
default:a=!1}else 36===e.keyCode&&e.ctrlKey?// display the date picker on ctrl+home
t.datepicker._showDatepicker(this):a=!1;a&&(e.preventDefault(),e.stopPropagation())},/* Filter entered characters - based on date format. */
_doKeyPress:function(e){var i,n,s=t.datepicker._getInst(e.target);if(t.datepicker._get(s,"constrainInput"))return i=t.datepicker._possibleChars(t.datepicker._get(s,"dateFormat")),n=String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),e.ctrlKey||e.metaKey||n<" "||!i||i.indexOf(n)>-1},/* Synchronise manual entry and field/alternate field. */
_doKeyUp:function(e){var i,n=t.datepicker._getInst(e.target);if(n.input.val()!==n.lastVal)try{i=t.datepicker.parseDate(t.datepicker._get(n,"dateFormat"),n.input?n.input.val():null,t.datepicker._getFormatConfig(n)),i&&(// only if valid
t.datepicker._setDateFromField(n),t.datepicker._updateAlternate(n),t.datepicker._updateDatepicker(n))}catch(s){}return!0},/* Pop-up the date picker for a given input field.
	 * If false returned from beforeShow event handler do not show.
	 * @param  input  element - the input field attached to the date picker or
	 *					event - if triggered by focus
	 */
_showDatepicker:function(e){if(e=e.target||e,"input"!==e.nodeName.toLowerCase()&&(// find from button/image trigger
e=t("input",e.parentNode)[0]),!t.datepicker._isDisabledDatepicker(e)&&t.datepicker._lastInput!==e){var n,s,o,r,l,h,c;n=t.datepicker._getInst(e),t.datepicker._curInst&&t.datepicker._curInst!==n&&(t.datepicker._curInst.dpDiv.stop(!0,!0),n&&t.datepicker._datepickerShowing&&t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),s=t.datepicker._get(n,"beforeShow"),o=s?s.apply(e,[e,n]):{},o!==!1&&(a(n.settings,o),n.lastVal=null,t.datepicker._lastInput=e,t.datepicker._setDateFromField(n),t.datepicker._inDialog&&(// hide cursor
e.value=""),t.datepicker._pos||(// position below input
t.datepicker._pos=t.datepicker._findPos(e),t.datepicker._pos[1]+=e.offsetHeight),r=!1,t(e).parents().each(function(){return r|="fixed"===t(this).css("position"),!r}),l={left:t.datepicker._pos[0],top:t.datepicker._pos[1]},t.datepicker._pos=null,
//to avoid flashes on Firefox
n.dpDiv.empty(),
// determine sizing offscreen
n.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),t.datepicker._updateDatepicker(n),
// fix width for dynamic number of date pickers
// and adjust position before showing
l=t.datepicker._checkOffset(n,l,r),n.dpDiv.css({position:t.datepicker._inDialog&&t.blockUI?"static":r?"fixed":"absolute",display:"none",left:l.left+"px",top:l.top+"px"}),n.inline||(h=t.datepicker._get(n,"showAnim"),c=t.datepicker._get(n,"duration"),n.dpDiv.css("z-index",i(t(e))+1),t.datepicker._datepickerShowing=!0,t.effects&&t.effects.effect[h]?n.dpDiv.show(h,t.datepicker._get(n,"showOptions"),c):n.dpDiv[h||"show"](h?c:null),t.datepicker._shouldFocusInput(n)&&n.input.trigger("focus"),t.datepicker._curInst=n))}},/* Generate the date picker content. */
_updateDatepicker:function(e){this.maxRows=4,//Reset the max number of rows being displayed (see #7043)
g=e,// for delegate hover events
e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e);var i,n=this._getNumberOfMonths(e),s=n[1],a=17,r=e.dpDiv.find("."+this._dayOverClass+" a");r.length>0&&o.apply(r.get(0)),e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),s>1&&e.dpDiv.addClass("ui-datepicker-multi-"+s).css("width",a*s+"em"),e.dpDiv[(1!==n[0]||1!==n[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e===t.datepicker._curInst&&t.datepicker._datepickerShowing&&t.datepicker._shouldFocusInput(e)&&e.input.trigger("focus"),
// Deffered render of the years select (to avoid flashes on Firefox)
e.yearshtml&&(i=e.yearshtml,setTimeout(function(){
//assure that inst.yearshtml didn't change.
i===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),i=e.yearshtml=null},0))},
// #6694 - don't focus the input if it's already focused
// this breaks the change event in IE
// Support: IE and jQuery <1.9
_shouldFocusInput:function(t){return t.input&&t.input.is(":visible")&&!t.input.is(":disabled")&&!t.input.is(":focus")},/* Check positioning to remain on screen. */
_checkOffset:function(e,i,n){var s=e.dpDiv.outerWidth(),o=e.dpDiv.outerHeight(),a=e.input?e.input.outerWidth():0,r=e.input?e.input.outerHeight():0,l=document.documentElement.clientWidth+(n?0:t(document).scrollLeft()),h=document.documentElement.clientHeight+(n?0:t(document).scrollTop());
// Now check if datepicker is showing outside window viewport - move to a better place if so.
return i.left-=this._get(e,"isRTL")?s-a:0,i.left-=n&&i.left===e.input.offset().left?t(document).scrollLeft():0,i.top-=n&&i.top===e.input.offset().top+r?t(document).scrollTop():0,i.left-=Math.min(i.left,i.left+s>l&&l>s?Math.abs(i.left+s-l):0),i.top-=Math.min(i.top,i.top+o>h&&h>o?Math.abs(o+r):0),i},/* Find an object's position on the screen. */
_findPos:function(e){for(var i,n=this._getInst(e),s=this._get(n,"isRTL");e&&("hidden"===e.type||1!==e.nodeType||t.expr.filters.hidden(e));)e=e[s?"previousSibling":"nextSibling"];return i=t(e).offset(),[i.left,i.top]},/* Hide the date picker from view.
	 * @param  input  element - the input field attached to the date picker
	 */
_hideDatepicker:function(e){var i,n,s,o,a=this._curInst;!a||e&&a!==t.data(e,"datepicker")||this._datepickerShowing&&(i=this._get(a,"showAnim"),n=this._get(a,"duration"),s=function(){t.datepicker._tidyDialog(a)},
// DEPRECATED: after BC for 1.8.x $.effects[ showAnim ] is not needed
t.effects&&(t.effects.effect[i]||t.effects[i])?a.dpDiv.hide(i,t.datepicker._get(a,"showOptions"),n,s):a.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?n:null,s),i||s(),this._datepickerShowing=!1,o=this._get(a,"onClose"),o&&o.apply(a.input?a.input[0]:null,[a.input?a.input.val():"",a]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),t.blockUI&&(t.unblockUI(),t("body").append(this.dpDiv))),this._inDialog=!1)},/* Tidy up after a dialog display. */
_tidyDialog:function(t){t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")},/* Close date picker if clicked elsewhere. */
_checkExternalClick:function(e){if(t.datepicker._curInst){var i=t(e.target),n=t.datepicker._getInst(i[0]);(i[0].id===t.datepicker._mainDivId||0!==i.parents("#"+t.datepicker._mainDivId).length||i.hasClass(t.datepicker.markerClassName)||i.closest("."+t.datepicker._triggerClass).length||!t.datepicker._datepickerShowing||t.datepicker._inDialog&&t.blockUI)&&(!i.hasClass(t.datepicker.markerClassName)||t.datepicker._curInst===n)||t.datepicker._hideDatepicker()}},/* Adjust one of the date sub-fields. */
_adjustDate:function(e,i,n){var s=t(e),o=this._getInst(s[0]);this._isDisabledDatepicker(s[0])||(this._adjustInstDate(o,i+("M"===n?this._get(o,"showCurrentAtPos"):0),// undo positioning
n),this._updateDatepicker(o))},/* Action for current link. */
_gotoToday:function(e){var i,n=t(e),s=this._getInst(n[0]);this._get(s,"gotoCurrent")&&s.currentDay?(s.selectedDay=s.currentDay,s.drawMonth=s.selectedMonth=s.currentMonth,s.drawYear=s.selectedYear=s.currentYear):(i=new Date,s.selectedDay=i.getDate(),s.drawMonth=s.selectedMonth=i.getMonth(),s.drawYear=s.selectedYear=i.getFullYear()),this._notifyChange(s),this._adjustDate(n)},/* Action for selecting a new month/year. */
_selectMonthYear:function(e,i,n){var s=t(e),o=this._getInst(s[0]);o["selected"+("M"===n?"Month":"Year")]=o["draw"+("M"===n?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(o),this._adjustDate(s)},/* Action for selecting a day. */
_selectDay:function(e,i,n,s){var o,a=t(e);t(s).hasClass(this._unselectableClass)||this._isDisabledDatepicker(a[0])||(o=this._getInst(a[0]),o.selectedDay=o.currentDay=t("a",s).html(),o.selectedMonth=o.currentMonth=i,o.selectedYear=o.currentYear=n,this._selectDate(e,this._formatDate(o,o.currentDay,o.currentMonth,o.currentYear)))},/* Erase the input field and hide the date picker. */
_clearDate:function(e){var i=t(e);this._selectDate(i,"")},/* Update the input field with the selected date. */
_selectDate:function(e,i){var n,s=t(e),o=this._getInst(s[0]);i=null!=i?i:this._formatDate(o),o.input&&o.input.val(i),this._updateAlternate(o),n=this._get(o,"onSelect"),n?n.apply(o.input?o.input[0]:null,[i,o]):o.input&&o.input.trigger("change"),o.inline?this._updateDatepicker(o):(this._hideDatepicker(),this._lastInput=o.input[0],"object"!=typeof o.input[0]&&o.input.trigger("focus"),this._lastInput=null)},/* Update any alternate field to synchronise with the main field. */
_updateAlternate:function(e){var i,n,s,o=this._get(e,"altField");o&&(// update alternate field too
i=this._get(e,"altFormat")||this._get(e,"dateFormat"),n=this._getDate(e),s=this.formatDate(i,n,this._getFormatConfig(e)),t(o).val(s))},/* Set as beforeShowDay function to prevent selection of weekends.
	 * @param  date  Date - the date to customise
	 * @return [boolean, string] - is this date selectable?, what is its CSS class?
	 */
noWeekends:function(t){var e=t.getDay();return[e>0&&e<6,""]},/* Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
	 * @param  date  Date - the date to get the week for
	 * @return  number - the number of the week within the year that contains this date
	 */
iso8601Week:function(t){var e,i=new Date(t.getTime());
// Find Thursday of this week starting on Monday
// Compare with Jan 1
return i.setDate(i.getDate()+4-(i.getDay()||7)),e=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((e-i)/864e5)/7)+1},/* Parse a string value into a date object.
	 * See formatDate below for the possible formats.
	 *
	 * @param  format string - the expected format of the date
	 * @param  value string - the date in the above format
	 * @param  settings Object - attributes include:
	 *					shortYearCutoff  number - the cutoff year for determining the century (optional)
	 *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
	 *					dayNames		string[7] - names of the days from Sunday (optional)
	 *					monthNamesShort string[12] - abbreviated names of the months (optional)
	 *					monthNames		string[12] - names of the months (optional)
	 * @return  Date - the extracted date value or null if value is blank
	 */
parseDate:function(e,i,n){if(null==e||null==i)throw"Invalid arguments";if(i="object"==typeof i?i.toString():i+"",""===i)return null;var s,o,a,r,l=0,h=(n?n.shortYearCutoff:null)||this._defaults.shortYearCutoff,c="string"!=typeof h?h:(new Date).getFullYear()%100+parseInt(h,10),u=(n?n.dayNamesShort:null)||this._defaults.dayNamesShort,d=(n?n.dayNames:null)||this._defaults.dayNames,p=(n?n.monthNamesShort:null)||this._defaults.monthNamesShort,f=(n?n.monthNames:null)||this._defaults.monthNames,m=-1,g=-1,v=-1,_=-1,b=!1,
// Check whether a format character is doubled
y=function(t){var i=s+1<e.length&&e.charAt(s+1)===t;return i&&s++,i},
// Extract a number from the string value
w=function(t){var e=y(t),n="@"===t?14:"!"===t?20:"y"===t&&e?4:"o"===t?3:2,s="y"===t?n:1,o=new RegExp("^\\d{"+s+","+n+"}"),a=i.substring(l).match(o);if(!a)throw"Missing number at position "+l;return l+=a[0].length,parseInt(a[0],10)},
// Extract a name from the string value and convert to an index
x=function(e,n,s){var o=-1,a=t.map(y(e)?s:n,function(t,e){return[[e,t]]}).sort(function(t,e){return-(t[1].length-e[1].length)});if(t.each(a,function(t,e){var n=e[1];if(i.substr(l,n.length).toLowerCase()===n.toLowerCase())return o=e[0],l+=n.length,!1}),o!==-1)return o+1;throw"Unknown name at position "+l},
// Confirm that a literal character matches the string value
k=function(){if(i.charAt(l)!==e.charAt(s))throw"Unexpected literal at position "+l;l++};for(s=0;s<e.length;s++)if(b)"'"!==e.charAt(s)||y("'")?k():b=!1;else switch(e.charAt(s)){case"d":v=w("d");break;case"D":x("D",u,d);break;case"o":_=w("o");break;case"m":g=w("m");break;case"M":g=x("M",p,f);break;case"y":m=w("y");break;case"@":r=new Date(w("@")),m=r.getFullYear(),g=r.getMonth()+1,v=r.getDate();break;case"!":r=new Date((w("!")-this._ticksTo1970)/1e4),m=r.getFullYear(),g=r.getMonth()+1,v=r.getDate();break;case"'":y("'")?k():b=!0;break;default:k()}if(l<i.length&&(a=i.substr(l),!/^\s+/.test(a)))throw"Extra/unparsed characters found in date: "+a;if(m===-1?m=(new Date).getFullYear():m<100&&(m+=(new Date).getFullYear()-(new Date).getFullYear()%100+(m<=c?0:-100)),_>-1)for(g=1,v=_;;){if(o=this._getDaysInMonth(m,g-1),v<=o)break;g++,v-=o}if(r=this._daylightSavingAdjust(new Date(m,g-1,v)),r.getFullYear()!==m||r.getMonth()+1!==g||r.getDate()!==v)throw"Invalid date";return r},/* Standard date formats. */
ATOM:"yy-mm-dd",// RFC 3339 (ISO 8601)
COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",// RFC 822
TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",// ISO 8601
_ticksTo1970:24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*60*60*1e7,/* Format a date object into a string value.
	 * The format can be combinations of the following:
	 * d  - day of month (no leading zero)
	 * dd - day of month (two digit)
	 * o  - day of year (no leading zeros)
	 * oo - day of year (three digit)
	 * D  - day name short
	 * DD - day name long
	 * m  - month of year (no leading zero)
	 * mm - month of year (two digit)
	 * M  - month name short
	 * MM - month name long
	 * y  - year (two digit)
	 * yy - year (four digit)
	 * @ - Unix timestamp (ms since 01/01/1970)
	 * ! - Windows ticks (100ns since 01/01/0001)
	 * "..." - literal text
	 * '' - single quote
	 *
	 * @param  format string - the desired format of the date
	 * @param  date Date - the date value to format
	 * @param  settings Object - attributes include:
	 *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
	 *					dayNames		string[7] - names of the days from Sunday (optional)
	 *					monthNamesShort string[12] - abbreviated names of the months (optional)
	 *					monthNames		string[12] - names of the months (optional)
	 * @return  string - the date in the above format
	 */
formatDate:function(t,e,i){if(!e)return"";var n,s=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,o=(i?i.dayNames:null)||this._defaults.dayNames,a=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,
// Check whether a format character is doubled
l=function(e){var i=n+1<t.length&&t.charAt(n+1)===e;return i&&n++,i},
// Format a number, with leading zero if necessary
h=function(t,e,i){var n=""+e;if(l(t))for(;n.length<i;)n="0"+n;return n},
// Format a name, short or long as requested
c=function(t,e,i,n){return l(t)?n[e]:i[e]},u="",d=!1;if(e)for(n=0;n<t.length;n++)if(d)"'"!==t.charAt(n)||l("'")?u+=t.charAt(n):d=!1;else switch(t.charAt(n)){case"d":u+=h("d",e.getDate(),2);break;case"D":u+=c("D",e.getDay(),s,o);break;case"o":u+=h("o",Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3);break;case"m":u+=h("m",e.getMonth()+1,2);break;case"M":u+=c("M",e.getMonth(),a,r);break;case"y":u+=l("y")?e.getFullYear():(e.getFullYear()%100<10?"0":"")+e.getFullYear()%100;break;case"@":u+=e.getTime();break;case"!":u+=1e4*e.getTime()+this._ticksTo1970;break;case"'":l("'")?u+="'":d=!0;break;default:u+=t.charAt(n)}return u},/* Extract all possible characters from the date format. */
_possibleChars:function(t){var e,i="",n=!1,
// Check whether a format character is doubled
s=function(i){var n=e+1<t.length&&t.charAt(e+1)===i;return n&&e++,n};for(e=0;e<t.length;e++)if(n)"'"!==t.charAt(e)||s("'")?i+=t.charAt(e):n=!1;else switch(t.charAt(e)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;// Accept anything
case"'":s("'")?i+="'":n=!0;break;default:i+=t.charAt(e)}return i},/* Get a setting value, defaulting if necessary. */
_get:function(t,e){return void 0!==t.settings[e]?t.settings[e]:this._defaults[e]},/* Parse existing date and initialise date picker. */
_setDateFromField:function(t,e){if(t.input.val()!==t.lastVal){var i=this._get(t,"dateFormat"),n=t.lastVal=t.input?t.input.val():null,s=this._getDefaultDate(t),o=s,a=this._getFormatConfig(t);try{o=this.parseDate(i,n,a)||s}catch(r){n=e?"":n}t.selectedDay=o.getDate(),t.drawMonth=t.selectedMonth=o.getMonth(),t.drawYear=t.selectedYear=o.getFullYear(),t.currentDay=n?o.getDate():0,t.currentMonth=n?o.getMonth():0,t.currentYear=n?o.getFullYear():0,this._adjustInstDate(t)}},/* Retrieve the default date shown on opening. */
_getDefaultDate:function(t){return this._restrictMinMax(t,this._determineDate(t,this._get(t,"defaultDate"),new Date))},/* A date may be specified as an exact value or a relative one. */
_determineDate:function(e,i,n){var s=function(t){var e=new Date;return e.setDate(e.getDate()+t),e},o=function(i){try{return t.datepicker.parseDate(t.datepicker._get(e,"dateFormat"),i,t.datepicker._getFormatConfig(e))}catch(n){}for(var s=(i.toLowerCase().match(/^c/)?t.datepicker._getDate(e):null)||new Date,o=s.getFullYear(),a=s.getMonth(),r=s.getDate(),l=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,h=l.exec(i);h;){switch(h[2]||"d"){case"d":case"D":r+=parseInt(h[1],10);break;case"w":case"W":r+=7*parseInt(h[1],10);break;case"m":case"M":a+=parseInt(h[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(o,a));break;case"y":case"Y":o+=parseInt(h[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(o,a))}h=l.exec(i)}return new Date(o,a,r)},a=null==i||""===i?n:"string"==typeof i?o(i):"number"==typeof i?isNaN(i)?n:s(i):new Date(i.getTime());return a=a&&"Invalid Date"===a.toString()?n:a,a&&(a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)),this._daylightSavingAdjust(a)},/* Handle switch to/from daylight saving.
	 * Hours may be non-zero on daylight saving cut-over:
	 * > 12 when midnight changeover, but then cannot generate
	 * midnight datetime, so jump to 1AM, otherwise reset.
	 * @param  date  (Date) the date to check
	 * @return  (Date) the corrected date
	 */
_daylightSavingAdjust:function(t){return t?(t.setHours(t.getHours()>12?t.getHours()+2:0),t):null},/* Set the date(s) directly. */
_setDate:function(t,e,i){var n=!e,s=t.selectedMonth,o=t.selectedYear,a=this._restrictMinMax(t,this._determineDate(t,e,new Date));t.selectedDay=t.currentDay=a.getDate(),t.drawMonth=t.selectedMonth=t.currentMonth=a.getMonth(),t.drawYear=t.selectedYear=t.currentYear=a.getFullYear(),s===t.selectedMonth&&o===t.selectedYear||i||this._notifyChange(t),this._adjustInstDate(t),t.input&&t.input.val(n?"":this._formatDate(t))},/* Retrieve the date(s) directly. */
_getDate:function(t){var e=!t.currentYear||t.input&&""===t.input.val()?null:this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return e},/* Attach the onxxx handlers.  These are declared statically so
	 * they work with static code transformers like Caja.
	 */
_attachHandlers:function(e){var i=this._get(e,"stepMonths"),n="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){t.datepicker._adjustDate(n,-i,"M")},next:function(){t.datepicker._adjustDate(n,+i,"M")},hide:function(){t.datepicker._hideDatepicker()},today:function(){t.datepicker._gotoToday(n)},selectDay:function(){return t.datepicker._selectDay(n,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return t.datepicker._selectMonthYear(n,this,"M"),!1},selectYear:function(){return t.datepicker._selectMonthYear(n,this,"Y"),!1}};t(this).on(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},/* Generate the HTML for the current state of the date picker. */
_generateHTML:function(t){var e,i,n,s,o,a,r,l,h,c,u,d,p,f,m,g,v,_,b,y,w,x,k,C,D,T,I,S,M,N,P,E,A,H,O,z,W,L,F,j=new Date,$=this._daylightSavingAdjust(new Date(j.getFullYear(),j.getMonth(),j.getDate())),// clear time
R=this._get(t,"isRTL"),B=this._get(t,"showButtonPanel"),q=this._get(t,"hideIfNoPrevNext"),Y=this._get(t,"navigationAsDateFormat"),U=this._getNumberOfMonths(t),K=this._get(t,"showCurrentAtPos"),V=this._get(t,"stepMonths"),X=1!==U[0]||1!==U[1],G=this._daylightSavingAdjust(t.currentDay?new Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),Q=this._getMinMaxDate(t,"min"),J=this._getMinMaxDate(t,"max"),Z=t.drawMonth-K,tt=t.drawYear;if(Z<0&&(Z+=12,tt--),J)for(e=this._daylightSavingAdjust(new Date(J.getFullYear(),J.getMonth()-U[0]*U[1]+1,J.getDate())),e=Q&&e<Q?Q:e;this._daylightSavingAdjust(new Date(tt,Z,1))>e;)Z--,Z<0&&(Z=11,tt--);for(t.drawMonth=Z,t.drawYear=tt,i=this._get(t,"prevText"),i=Y?this.formatDate(i,this._daylightSavingAdjust(new Date(tt,Z-V,1)),this._getFormatConfig(t)):i,n=this._canAdjustMonth(t,-1,tt,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(R?"e":"w")+"'>"+i+"</span></a>":q?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(R?"e":"w")+"'>"+i+"</span></a>",s=this._get(t,"nextText"),s=Y?this.formatDate(s,this._daylightSavingAdjust(new Date(tt,Z+V,1)),this._getFormatConfig(t)):s,o=this._canAdjustMonth(t,1,tt,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+s+"'><span class='ui-icon ui-icon-circle-triangle-"+(R?"w":"e")+"'>"+s+"</span></a>":q?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+s+"'><span class='ui-icon ui-icon-circle-triangle-"+(R?"w":"e")+"'>"+s+"</span></a>",a=this._get(t,"currentText"),r=this._get(t,"gotoCurrent")&&t.currentDay?G:$,a=Y?this.formatDate(a,r,this._getFormatConfig(t)):a,l=t.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(t,"closeText")+"</button>",h=B?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(R?l:"")+(this._isInRange(t,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+a+"</button>":"")+(R?"":l)+"</div>":"",c=parseInt(this._get(t,"firstDay"),10),c=isNaN(c)?0:c,u=this._get(t,"showWeek"),d=this._get(t,"dayNames"),p=this._get(t,"dayNamesMin"),f=this._get(t,"monthNames"),m=this._get(t,"monthNamesShort"),g=this._get(t,"beforeShowDay"),v=this._get(t,"showOtherMonths"),_=this._get(t,"selectOtherMonths"),b=this._getDefaultDate(t),y="",x=0;x<U[0];x++){for(k="",this.maxRows=4,C=0;C<U[1];C++){if(D=this._daylightSavingAdjust(new Date(tt,Z,t.selectedDay)),T=" ui-corner-all",I="",X){if(I+="<div class='ui-datepicker-group",U[1]>1)switch(C){case 0:I+=" ui-datepicker-group-first",T=" ui-corner-"+(R?"right":"left");break;case U[1]-1:I+=" ui-datepicker-group-last",T=" ui-corner-"+(R?"left":"right");break;default:I+=" ui-datepicker-group-middle",T=""}I+="'>"}for(I+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+T+"'>"+(/all|left/.test(T)&&0===x?R?o:n:"")+(/all|right/.test(T)&&0===x?R?n:o:"")+this._generateMonthYearHeader(t,Z,tt,Q,J,x>0||C>0,f,m)+// draw month headers
"</div><table class='ui-datepicker-calendar'><thead><tr>",S=u?"<th class='ui-datepicker-week-col'>"+this._get(t,"weekHeader")+"</th>":"",w=0;w<7;w++)// days of the week
M=(w+c)%7,S+="<th scope='col'"+((w+c+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+d[M]+"'>"+p[M]+"</span></th>";for(I+=S+"</tr></thead><tbody>",N=this._getDaysInMonth(tt,Z),tt===t.selectedYear&&Z===t.selectedMonth&&(t.selectedDay=Math.min(t.selectedDay,N)),P=(this._getFirstDayOfMonth(tt,Z)-c+7)%7,E=Math.ceil((P+N)/7),// calculate the number of rows to generate
A=X&&this.maxRows>E?this.maxRows:E,//If multiple months, use the higher number of rows (see #7043)
this.maxRows=A,H=this._daylightSavingAdjust(new Date(tt,Z,1-P)),O=0;O<A;O++){for(// create date picker rows
I+="<tr>",z=u?"<td class='ui-datepicker-week-col'>"+this._get(t,"calculateWeek")(H)+"</td>":"",w=0;w<7;w++)// create date picker days
W=g?g.apply(t.input?t.input[0]:null,[H]):[!0,""],L=H.getMonth()!==Z,F=L&&!_||!W[0]||Q&&H<Q||J&&H>J,z+="<td class='"+((w+c+6)%7>=5?" ui-datepicker-week-end":"")+(// highlight weekends
L?" ui-datepicker-other-month":"")+(// highlight days from other months
H.getTime()===D.getTime()&&Z===t.selectedMonth&&t._keyEvent||// user pressed key
b.getTime()===H.getTime()&&b.getTime()===D.getTime()?
// or defaultDate is current printedDate and defaultDate is selectedDate
" "+this._dayOverClass:"")+(// highlight selected day
F?" "+this._unselectableClass+" ui-state-disabled":"")+(// highlight unselectable days
L&&!v?"":" "+W[1]+(// highlight custom dates
H.getTime()===G.getTime()?" "+this._currentClass:"")+(// highlight selected day
H.getTime()===$.getTime()?" ui-datepicker-today":""))+"'"+(// highlight today (if different)
L&&!v||!W[2]?"":" title='"+W[2].replace(/'/g,"&#39;")+"'")+(// cell title
F?"":" data-handler='selectDay' data-event='click' data-month='"+H.getMonth()+"' data-year='"+H.getFullYear()+"'")+">"+(// actions
L&&!v?"&#xa0;":// display for other months
F?"<span class='ui-state-default'>"+H.getDate()+"</span>":"<a class='ui-state-default"+(H.getTime()===$.getTime()?" ui-state-highlight":"")+(H.getTime()===G.getTime()?" ui-state-active":"")+(// highlight selected day
L?" ui-priority-secondary":"")+// distinguish dates from other months
"' href='#'>"+H.getDate()+"</a>")+"</td>",// display selectable date
H.setDate(H.getDate()+1),H=this._daylightSavingAdjust(H);I+=z+"</tr>"}Z++,Z>11&&(Z=0,tt++),I+="</tbody></table>"+(X?"</div>"+(U[0]>0&&C===U[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),k+=I}y+=k}return y+=h,t._keyEvent=!1,y},/* Generate the month and year header. */
_generateMonthYearHeader:function(t,e,i,n,s,o,a,r){var l,h,c,u,d,p,f,m,g=this._get(t,"changeMonth"),v=this._get(t,"changeYear"),_=this._get(t,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",y="";
// Month selection
if(o||!g)y+="<span class='ui-datepicker-month'>"+a[e]+"</span>";else{for(l=n&&n.getFullYear()===i,h=s&&s.getFullYear()===i,y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",c=0;c<12;c++)(!l||c>=n.getMonth())&&(!h||c<=s.getMonth())&&(y+="<option value='"+c+"'"+(c===e?" selected='selected'":"")+">"+r[c]+"</option>");y+="</select>"}
// Year selection
if(_||(b+=y+(!o&&g&&v?"":"&#xa0;")),!t.yearshtml)if(t.yearshtml="",o||!v)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(
// determine range of years to display
u=this._get(t,"yearRange").split(":"),d=(new Date).getFullYear(),p=function(t){var e=t.match(/c[+\-].*/)?i+parseInt(t.substring(1),10):t.match(/[+\-].*/)?d+parseInt(t,10):parseInt(t,10);return isNaN(e)?d:e},f=p(u[0]),m=Math.max(f,p(u[1]||"")),f=n?Math.max(f,n.getFullYear()):f,m=s?Math.min(m,s.getFullYear()):m,t.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";f<=m;f++)t.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";t.yearshtml+="</select>",b+=t.yearshtml,t.yearshtml=null}// Close datepicker_header
return b+=this._get(t,"yearSuffix"),_&&(b+=(!o&&g&&v?"":"&#xa0;")+y),b+="</div>"},/* Adjust one of the date sub-fields. */
_adjustInstDate:function(t,e,i){var n=t.selectedYear+("Y"===i?e:0),s=t.selectedMonth+("M"===i?e:0),o=Math.min(t.selectedDay,this._getDaysInMonth(n,s))+("D"===i?e:0),a=this._restrictMinMax(t,this._daylightSavingAdjust(new Date(n,s,o)));t.selectedDay=a.getDate(),t.drawMonth=t.selectedMonth=a.getMonth(),t.drawYear=t.selectedYear=a.getFullYear(),"M"!==i&&"Y"!==i||this._notifyChange(t)},/* Ensure a date is within any min/max bounds. */
_restrictMinMax:function(t,e){var i=this._getMinMaxDate(t,"min"),n=this._getMinMaxDate(t,"max"),s=i&&e<i?i:e;return n&&s>n?n:s},/* Notify change of month/year. */
_notifyChange:function(t){var e=this._get(t,"onChangeMonthYear");e&&e.apply(t.input?t.input[0]:null,[t.selectedYear,t.selectedMonth+1,t])},/* Determine the number of months to show. */
_getNumberOfMonths:function(t){var e=this._get(t,"numberOfMonths");return null==e?[1,1]:"number"==typeof e?[1,e]:e},/* Determine the current maximum date - ensure no time components are set. */
_getMinMaxDate:function(t,e){return this._determineDate(t,this._get(t,e+"Date"),null)},/* Find the number of days in a given month. */
_getDaysInMonth:function(t,e){return 32-this._daylightSavingAdjust(new Date(t,e,32)).getDate()},/* Find the day of the week of the first of a month. */
_getFirstDayOfMonth:function(t,e){return new Date(t,e,1).getDay()},/* Determines if we should allow a "next/prev" month display change. */
_canAdjustMonth:function(t,e,i,n){var s=this._getNumberOfMonths(t),o=this._daylightSavingAdjust(new Date(i,n+(e<0?e:s[0]*s[1]),1));return e<0&&o.setDate(this._getDaysInMonth(o.getFullYear(),o.getMonth())),this._isInRange(t,o)},/* Is the given date in the accepted range? */
_isInRange:function(t,e){var i,n,s=this._getMinMaxDate(t,"min"),o=this._getMinMaxDate(t,"max"),a=null,r=null,l=this._get(t,"yearRange");return l&&(i=l.split(":"),n=(new Date).getFullYear(),a=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(a+=n),i[1].match(/[+\-].*/)&&(r+=n)),(!s||e.getTime()>=s.getTime())&&(!o||e.getTime()<=o.getTime())&&(!a||e.getFullYear()>=a)&&(!r||e.getFullYear()<=r)},/* Provide the configuration settings for formatting/parsing. */
_getFormatConfig:function(t){var e=this._get(t,"shortYearCutoff");return e="string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),{shortYearCutoff:e,dayNamesShort:this._get(t,"dayNamesShort"),dayNames:this._get(t,"dayNames"),monthNamesShort:this._get(t,"monthNamesShort"),monthNames:this._get(t,"monthNames")}},/* Format the given date for display. */
_formatDate:function(t,e,i,n){e||(t.currentDay=t.selectedDay,t.currentMonth=t.selectedMonth,t.currentYear=t.selectedYear);var s=e?"object"==typeof e?e:this._daylightSavingAdjust(new Date(n,i,e)):this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return this.formatDate(this._get(t,"dateFormat"),s,this._getFormatConfig(t))}}),/* Invoke the datepicker functionality.
   @param  options  string - a command, optionally followed by additional parameters or
					Object - settings for attaching new datepicker functionality
   @return  jQuery object */
t.fn.datepicker=function(e){/* Verify an empty collection wasn't passed - Fixes #6976 */
if(!this.length)return this;/* Initialise the date picker. */
t.datepicker.initialized||(t(document).on("mousedown",t.datepicker._checkExternalClick),t.datepicker.initialized=!0),/* Append datepicker main container to body if not exist. */
0===t("#"+t.datepicker._mainDivId).length&&t("body").append(t.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof e||"isDisabled"!==e&&"getDate"!==e&&"widget"!==e?"option"===e&&2===arguments.length&&"string"==typeof arguments[1]?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof e?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this].concat(i)):t.datepicker._attachDatepicker(this,e)}):t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i))},t.datepicker=new n,// singleton instance
t.datepicker.initialized=!1,t.datepicker.uuid=(new Date).getTime(),t.datepicker.version="1.12.1";var v=(t.datepicker,t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),!1);t(document).on("mouseup",function(){v=!1});t.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.on("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).on("click."+this.widgetName,function(i){if(!0===t.data(i.target,e.widgetName+".preventClickEvent"))return t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1}),this.started=!1},
// TODO: make sure destroying one instance of mouse doesn't mess with
// other instances of mouse
_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(e){
// don't let more than one widget handle mouseStart
if(!v){this._mouseMoved=!1,
// We may have missed mouseup (out of window)
this._mouseStarted&&this._mouseUp(e),this._mouseDownEvent=e;var i=this,n=1===e.which,
// event.target.nodeName works around a bug in IE 8 with
// disabled inputs (#7620)
s=!("string"!=typeof this.options.cancel||!e.target.nodeName)&&t(e.target).closest(this.options.cancel).length;
// Click event may never have fired (Gecko & Opera)
// These delegates are required to keep context
return!(n&&!s&&this._mouseCapture(e))||(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(e)!==!1,!this._mouseStarted)?(e.preventDefault(),!0):(!0===t.data(e.target,this.widgetName+".preventClickEvent")&&t.removeData(e.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return i._mouseMove(t)},this._mouseUpDelegate=function(t){return i._mouseUp(t)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),e.preventDefault(),v=!0,!0))}},_mouseMove:function(e){
// Only check for mouseups outside the document if you've moved inside the document
// at least once. This prevents the firing of mouseup in the case of IE<9, which will
// fire a mousemove event if content is placed under the cursor. See #7778
// Support: IE <9
if(this._mouseMoved){
// IE mouseup check - mouseup happened when mouse was out of window
if(t.ui.ie&&(!document.documentMode||document.documentMode<9)&&!e.button)return this._mouseUp(e);if(!e.which)
// Support: Safari <=8 - 9
// Safari sets which to 0 if you press any of the following keys
// during a drag (#14461)
if(e.originalEvent.altKey||e.originalEvent.ctrlKey||e.originalEvent.metaKey||e.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(e)}return(e.which||e.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,v=!1,e.preventDefault()},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},
// These are placeholder methods, to be overriden by extending plugin
_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),t.ui.plugin={add:function(e,i,n){var s,o=t.ui[e].prototype;for(s in n)o.plugins[s]=o.plugins[s]||[],o.plugins[s].push([i,n[s]])},call:function(t,e,i,n){var s,o=t.plugins[e];if(o&&(n||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(s=0;s<o.length;s++)t.options[o[s][0]]&&o[s][1].apply(t.element,i)}},t.ui.safeBlur=function(e){
// Support: IE9 - 10 only
// If the <body> is blurred, IE will switch windows, see #9420
e&&"body"!==e.nodeName.toLowerCase()&&t(e).trigger("blur")};/*!
 * jQuery UI Draggable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Draggable
//>>group: Interactions
//>>description: Enables dragging functionality for any element.
//>>docs: http://api.jqueryui.com/draggable/
//>>demos: http://jqueryui.com/draggable/
//>>css.structure: ../../themes/base/draggable.css
t.widget("ui.draggable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,
// Callbacks
drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()},_setOption:function(t,e){this._super(t,e),"handle"===t&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?void(this.destroyOnClear=!0):(this._removeHandleClassName(),void this._mouseDestroy())},_mouseCapture:function(e){var i=this.options;
// Among others, prevent a drag on a resizable-handle
// Among others, prevent a drag on a resizable-handle
//Quit if we're not on a valid handle
return!(this.helper||i.disabled||t(e.target).closest(".ui-resizable-handle").length>0)&&(this.handle=this._getHandle(e),!!this.handle&&(this._blurActiveElement(e),this._blockFrames(i.iframeFix===!0?"iframe":i.iframeFix),!0))},_blockFrames:function(e){this.iframeBlocks=this.document.find(e).map(function(){var e=t(this);return t("<div>").css("position","absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(e){var i=t.ui.safeActiveElement(this.document[0]),n=t(e.target);
// Don't blur if the event occurred on an element that is within
// the currently focused element
// See #10527, #12472
n.closest(i).length||
// Blur any element that currently has focus, see #4261
t.ui.safeBlur(i)},_mouseStart:function(e){var i=this.options;
//Trigger event + callbacks
//Create and append the visible helper
//Cache the helper size
//If ddmanager is used for droppables, set the global draggable
/*
		 * - Position generation -
		 * This block generates everything position related - it's the core of draggables.
		 */
//Cache the margins of the original element
//Store the helper's css position
//The element's absolute position on the page minus margins
//Generate the original position
//Adjust the mouse offset relative to the helper if "cursorAt" is supplied
//Set a containment if given in the options
//Trigger event + callbacks
//Recache the helper size
//Prepare the droppable offsets
// Execute the drag once - this causes the helper not to be visible before getting its
// correct position
// If the ddmanager is used for droppables, inform the manager that dragging has started
// (see #5003)
return this.helper=this._createHelper(e),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===t(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(e),this.originalPosition=this.position=this._generatePosition(e,!1),this.originalPageX=e.pageX,this.originalPageY=e.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",e)===!1?(this._clear(),!1):(this._cacheHelperProportions(),t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._mouseDrag(e,!0),t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0)},_refreshOffsets:function(t){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:t.pageX-this.offset.left,top:t.pageY-this.offset.top}},_mouseDrag:function(e,i){
//Call plugins and callbacks and use the resulting position if something is returned
if(
// reset any necessary cached properties (see #5009)
this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),
//Compute the helpers position
this.position=this._generatePosition(e,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var n=this._uiHash();if(this._trigger("drag",e,n)===!1)return this._mouseUp(new t.Event("mouseup",e)),!1;this.position=n.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1},_mouseStop:function(e){
//If we are using droppables, inform the manager about the drop
var i=this,n=!1;
//if a drop comes from outside (a sortable)
return t.ui.ddmanager&&!this.options.dropBehaviour&&(n=t.ui.ddmanager.drop(this,e)),this.dropped&&(n=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!n||"valid"===this.options.revert&&n||this.options.revert===!0||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,n)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",e)!==!1&&i._clear()}):this._trigger("stop",e)!==!1&&this._clear(),!1},_mouseUp:function(e){
// If the ddmanager is used for droppables, inform the manager that dragging has stopped
// (see #5003)
// Only need to focus if the event occurred on the draggable itself, see #10527
// The interaction is over; whether or not the click resulted in a drag,
// focus the element
return this._unblockFrames(),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),this.handleElement.is(e.target)&&this.element.trigger("focus"),t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new t.Event("mouseup",{target:this.element[0]})):this._clear(),this},_getHandle:function(e){return!this.options.handle||!!t(e.target).closest(this.element.find(this.options.handle)).length},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")},_createHelper:function(e){var i=this.options,n=t.isFunction(i.helper),s=n?t(i.helper.apply(this.element[0],[e])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;
// Http://bugs.jqueryui.com/ticket/9446
// a helper function can return the original element
// which wouldn't have been set to relative in _create
return s.parents("body").length||s.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),n&&s[0]===this.element[0]&&this._setPositionRelative(),s[0]===this.element[0]||/(fixed|absolute)/.test(s.css("position"))||s.css("position","absolute"),s},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_isRootNode:function(t){return/(html|body)/i.test(t.tagName)||t===this.document[0]},_getParentOffset:function(){
//Get the offsetParent and cache its position
var e=this.offsetParent.offset(),i=this.document[0];
// This is a special case where we need to modify a offset calculated on start, since the
// following happened:
// 1. The position of the helper is absolute, so it's position is calculated based on the
// next positioned parent
// 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't
// the document, which means that the scroll is included in the initial calculation of the
// offset of the parent, and never recalculated upon drag
return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var t=this.element.position(),e=this._isRootNode(this.scrollParent[0]);return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+(e?0:this.scrollParent.scrollTop()),left:t.left-(parseInt(this.helper.css("left"),10)||0)+(e?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,n,s=this.options,o=this.document[0];return this.relativeContainer=null,s.containment?"window"===s.containment?void(this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):"document"===s.containment?void(this.containment=[0,0,t(o).width()-this.helperProportions.width-this.margins.left,(t(o).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):s.containment.constructor===Array?void(this.containment=s.containment):("parent"===s.containment&&(s.containment=this.helper[0].parentNode),i=t(s.containment),n=i[0],void(n&&(e=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(e?Math.max(n.scrollWidth,n.offsetWidth):n.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(n.scrollHeight,n.offsetHeight):n.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i))):void(this.containment=null)},_convertPositionTo:function(t,e){e||(e=this.position);var i="absolute"===t?1:-1,n=this._isRootNode(this.scrollParent[0]);return{top:
// The absolute mouse position
e.top+
// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.relative.top*i+
// The offsetParent's offset without borders (offset + border)
this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:n?0:this.offset.scroll.top)*i,left:
// The absolute mouse position
e.left+
// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.relative.left*i+
// The offsetParent's offset without borders (offset + border)
this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:n?0:this.offset.scroll.left)*i}},_generatePosition:function(t,e){var i,n,s,o,a=this.options,r=this._isRootNode(this.scrollParent[0]),l=t.pageX,h=t.pageY;
// Cache the scroll
/*
		 * - Position constraining -
		 * Constrain the position to a mix of grid, containment.
		 */
// If we are not dragging yet, we won't check for options
//Check for grid elements set to 0 to prevent divide by 0 error causing invalid
// argument errors in IE (see ticket #6950)
return r&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),e&&(this.containment&&(this.relativeContainer?(n=this.relativeContainer.offset(),i=[this.containment[0]+n.left,this.containment[1]+n.top,this.containment[2]+n.left,this.containment[3]+n.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(l=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(h=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(l=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(h=i[3]+this.offset.click.top)),a.grid&&(s=a.grid[1]?this.originalPageY+Math.round((h-this.originalPageY)/a.grid[1])*a.grid[1]:this.originalPageY,h=i?s-this.offset.click.top>=i[1]||s-this.offset.click.top>i[3]?s:s-this.offset.click.top>=i[1]?s-a.grid[1]:s+a.grid[1]:s,o=a.grid[0]?this.originalPageX+Math.round((l-this.originalPageX)/a.grid[0])*a.grid[0]:this.originalPageX,l=i?o-this.offset.click.left>=i[0]||o-this.offset.click.left>i[2]?o:o-this.offset.click.left>=i[0]?o-a.grid[0]:o+a.grid[0]:o),"y"===a.axis&&(l=this.originalPageX),"x"===a.axis&&(h=this.originalPageY)),{top:
// The absolute mouse position
h-
// Click offset (relative to the element)
this.offset.click.top-
// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.relative.top-
// The offsetParent's offset without borders (offset + border)
this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:
// The absolute mouse position
l-
// Click offset (relative to the element)
this.offset.click.left-
// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.relative.left-
// The offsetParent's offset without borders (offset + border)
this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:r?0:this.offset.scroll.left)}},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},
// From now on bulk stuff - mainly helpers
_trigger:function(e,i,n){
// Absolute position and offset (see #6884 ) have to be recalculated after plugins
return n=n||this._uiHash(),t.ui.plugin.call(this,e,[i,n,this],!0),/^(drag|start|stop)/.test(e)&&(this.positionAbs=this._convertPositionTo("absolute"),n.offset=this.positionAbs),t.Widget.prototype._trigger.call(this,e,i,n)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),t.ui.plugin.add("draggable","connectToSortable",{start:function(e,i,n){var s=t.extend({},i,{item:n.element});n.sortables=[],t(n.options.connectToSortable).each(function(){var i=t(this).sortable("instance");i&&!i.options.disabled&&(n.sortables.push(i),
// RefreshPositions is called at drag start to refresh the containerCache
// which is used in drag. This ensures it's initialized and synchronized
// with any changes that might have happened on the page since initialization.
i.refreshPositions(),i._trigger("activate",e,s))})},stop:function(e,i,n){var s=t.extend({},i,{item:n.element});n.cancelHelperRemoval=!1,t.each(n.sortables,function(){var t=this;t.isOver?(t.isOver=0,
// Allow this sortable to handle removing the helper
n.cancelHelperRemoval=!0,t.cancelHelperRemoval=!1,
// Use _storedCSS To restore properties in the sortable,
// as this also handles revert (#9675) since the draggable
// may have modified them in unexpected ways (#8809)
t._storedCSS={position:t.placeholder.css("position"),top:t.placeholder.css("top"),left:t.placeholder.css("left")},t._mouseStop(e),
// Once drag has ended, the sortable should return to using
// its original helper, not the shared helper from draggable
t.options.helper=t.options._helper):(
// Prevent this Sortable from removing the helper.
// However, don't set the draggable to remove the helper
// either as another connected Sortable may yet handle the removal.
t.cancelHelperRemoval=!0,t._trigger("deactivate",e,s))})},drag:function(e,i,n){t.each(n.sortables,function(){var s=!1,o=this;
// Copy over variables that sortable's _intersectsWith uses
o.positionAbs=n.positionAbs,o.helperProportions=n.helperProportions,o.offset.click=n.offset.click,o._intersectsWith(o.containerCache)&&(s=!0,t.each(n.sortables,function(){
// Copy over variables that sortable's _intersectsWith uses
return this.positionAbs=n.positionAbs,this.helperProportions=n.helperProportions,this.offset.click=n.offset.click,this!==o&&this._intersectsWith(this.containerCache)&&t.contains(o.element[0],this.element[0])&&(s=!1),s})),s?(
// If it intersects, we use a little isOver variable and set it once,
// so that the move-in stuff gets fired only once.
o.isOver||(o.isOver=1,
// Store draggable's parent in case we need to reappend to it later.
n._parent=i.helper.parent(),o.currentItem=i.helper.appendTo(o.element).data("ui-sortable-item",!0),
// Store helper option to later restore it
o.options._helper=o.options.helper,o.options.helper=function(){return i.helper[0]},
// Fire the start events of the sortable with our passed browser event,
// and our own helper (so it doesn't create a new one)
e.target=o.currentItem[0],o._mouseCapture(e,!0),o._mouseStart(e,!0,!0),
// Because the browser event is way off the new appended portlet,
// modify necessary variables to reflect the changes
o.offset.click.top=n.offset.click.top,o.offset.click.left=n.offset.click.left,o.offset.parent.left-=n.offset.parent.left-o.offset.parent.left,o.offset.parent.top-=n.offset.parent.top-o.offset.parent.top,n._trigger("toSortable",e),
// Inform draggable that the helper is in a valid drop zone,
// used solely in the revert option to handle "valid/invalid".
n.dropped=o.element,
// Need to refreshPositions of all sortables in the case that
// adding to one sortable changes the location of the other sortables (#9675)
t.each(n.sortables,function(){this.refreshPositions()}),
// Hack so receive/update callbacks work (mostly)
n.currentItem=n.element,o.fromOutside=n),o.currentItem&&(o._mouseDrag(e),
// Copy the sortable's position because the draggable's can potentially reflect
// a relative position, while sortable is always absolute, which the dragged
// element has now become. (#8809)
i.position=o.position)):
// If it doesn't intersect with the sortable, and it intersected before,
// we fake the drag stop of the sortable, but make sure it doesn't remove
// the helper by using cancelHelperRemoval.
o.isOver&&(o.isOver=0,o.cancelHelperRemoval=!0,
// Calling sortable's mouseStop would trigger a revert,
// so revert must be temporarily false until after mouseStop is called.
o.options._revert=o.options.revert,o.options.revert=!1,o._trigger("out",e,o._uiHash(o)),o._mouseStop(e,!0),
// Restore sortable behaviors that were modfied
// when the draggable entered the sortable area (#9481)
o.options.revert=o.options._revert,o.options.helper=o.options._helper,o.placeholder&&o.placeholder.remove(),
// Restore and recalculate the draggable's offset considering the sortable
// may have modified them in unexpected ways. (#8809, #10669)
i.helper.appendTo(n._parent),n._refreshOffsets(e),i.position=n._generatePosition(e,!0),n._trigger("fromSortable",e),
// Inform draggable that the helper is no longer in a valid drop zone
n.dropped=!1,
// Need to refreshPositions of all sortables just in case removing
// from one sortable changes the location of other sortables (#9675)
t.each(n.sortables,function(){this.refreshPositions()}))})}}),t.ui.plugin.add("draggable","cursor",{start:function(e,i,n){var s=t("body"),o=n.options;s.css("cursor")&&(o._cursor=s.css("cursor")),s.css("cursor",o.cursor)},stop:function(e,i,n){var s=n.options;s._cursor&&t("body").css("cursor",s._cursor)}}),t.ui.plugin.add("draggable","opacity",{start:function(e,i,n){var s=t(i.helper),o=n.options;s.css("opacity")&&(o._opacity=s.css("opacity")),s.css("opacity",o.opacity)},stop:function(e,i,n){var s=n.options;s._opacity&&t(i.helper).css("opacity",s._opacity)}}),t.ui.plugin.add("draggable","scroll",{start:function(t,e,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(e,i,n){var s=n.options,o=!1,a=n.scrollParentNotHidden[0],r=n.document[0];a!==r&&"HTML"!==a.tagName?(s.axis&&"x"===s.axis||(n.overflowOffset.top+a.offsetHeight-e.pageY<s.scrollSensitivity?a.scrollTop=o=a.scrollTop+s.scrollSpeed:e.pageY-n.overflowOffset.top<s.scrollSensitivity&&(a.scrollTop=o=a.scrollTop-s.scrollSpeed)),s.axis&&"y"===s.axis||(n.overflowOffset.left+a.offsetWidth-e.pageX<s.scrollSensitivity?a.scrollLeft=o=a.scrollLeft+s.scrollSpeed:e.pageX-n.overflowOffset.left<s.scrollSensitivity&&(a.scrollLeft=o=a.scrollLeft-s.scrollSpeed))):(s.axis&&"x"===s.axis||(e.pageY-t(r).scrollTop()<s.scrollSensitivity?o=t(r).scrollTop(t(r).scrollTop()-s.scrollSpeed):t(window).height()-(e.pageY-t(r).scrollTop())<s.scrollSensitivity&&(o=t(r).scrollTop(t(r).scrollTop()+s.scrollSpeed))),s.axis&&"y"===s.axis||(e.pageX-t(r).scrollLeft()<s.scrollSensitivity?o=t(r).scrollLeft(t(r).scrollLeft()-s.scrollSpeed):t(window).width()-(e.pageX-t(r).scrollLeft())<s.scrollSensitivity&&(o=t(r).scrollLeft(t(r).scrollLeft()+s.scrollSpeed)))),o!==!1&&t.ui.ddmanager&&!s.dropBehaviour&&t.ui.ddmanager.prepareOffsets(n,e)}}),t.ui.plugin.add("draggable","snap",{start:function(e,i,n){var s=n.options;n.snapElements=[],t(s.snap.constructor!==String?s.snap.items||":data(ui-draggable)":s.snap).each(function(){var e=t(this),i=e.offset();this!==n.element[0]&&n.snapElements.push({item:this,width:e.outerWidth(),height:e.outerHeight(),top:i.top,left:i.left})})},drag:function(e,i,n){var s,o,a,r,l,h,c,u,d,p,f=n.options,m=f.snapTolerance,g=i.offset.left,v=g+n.helperProportions.width,_=i.offset.top,b=_+n.helperProportions.height;for(d=n.snapElements.length-1;d>=0;d--)l=n.snapElements[d].left-n.margins.left,h=l+n.snapElements[d].width,c=n.snapElements[d].top-n.margins.top,u=c+n.snapElements[d].height,v<l-m||g>h+m||b<c-m||_>u+m||!t.contains(n.snapElements[d].item.ownerDocument,n.snapElements[d].item)?(n.snapElements[d].snapping&&n.options.snap.release&&n.options.snap.release.call(n.element,e,t.extend(n._uiHash(),{snapItem:n.snapElements[d].item})),n.snapElements[d].snapping=!1):("inner"!==f.snapMode&&(s=Math.abs(c-b)<=m,o=Math.abs(u-_)<=m,a=Math.abs(l-v)<=m,r=Math.abs(h-g)<=m,s&&(i.position.top=n._convertPositionTo("relative",{top:c-n.helperProportions.height,left:0}).top),o&&(i.position.top=n._convertPositionTo("relative",{top:u,left:0}).top),a&&(i.position.left=n._convertPositionTo("relative",{top:0,left:l-n.helperProportions.width}).left),r&&(i.position.left=n._convertPositionTo("relative",{top:0,left:h}).left)),p=s||o||a||r,"outer"!==f.snapMode&&(s=Math.abs(c-_)<=m,o=Math.abs(u-b)<=m,a=Math.abs(l-g)<=m,r=Math.abs(h-v)<=m,s&&(i.position.top=n._convertPositionTo("relative",{top:c,left:0}).top),o&&(i.position.top=n._convertPositionTo("relative",{top:u-n.helperProportions.height,left:0}).top),a&&(i.position.left=n._convertPositionTo("relative",{top:0,left:l}).left),r&&(i.position.left=n._convertPositionTo("relative",{top:0,left:h-n.helperProportions.width}).left)),!n.snapElements[d].snapping&&(s||o||a||r||p)&&n.options.snap.snap&&n.options.snap.snap.call(n.element,e,t.extend(n._uiHash(),{snapItem:n.snapElements[d].item})),n.snapElements[d].snapping=s||o||a||r||p)}}),t.ui.plugin.add("draggable","stack",{start:function(e,i,n){var s,o=n.options,a=t.makeArray(t(o.stack)).sort(function(e,i){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(i).css("zIndex"),10)||0)});a.length&&(s=parseInt(t(a[0]).css("zIndex"),10)||0,t(a).each(function(e){t(this).css("zIndex",s+e)}),this.css("zIndex",s+a.length))}}),t.ui.plugin.add("draggable","zIndex",{start:function(e,i,n){var s=t(i.helper),o=n.options;s.css("zIndex")&&(o._zIndex=s.css("zIndex")),s.css("zIndex",o.zIndex)},stop:function(e,i,n){var s=n.options;s._zIndex&&t(i.helper).css("zIndex",s._zIndex)}});t.ui.draggable;/*!
 * jQuery UI Resizable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Resizable
//>>group: Interactions
//>>description: Enables resize functionality for any element.
//>>docs: http://api.jqueryui.com/resizable/
//>>demos: http://jqueryui.com/resizable/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/resizable.css
//>>css.theme: ../../themes/base/theme.css
t.widget("ui.resizable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,
// See #7960
zIndex:90,
// Callbacks
resize:null,start:null,stop:null},_num:function(t){return parseFloat(t)||0},_isNumber:function(t){return!isNaN(parseFloat(t))},_hasScroll:function(e,i){if("hidden"===t(e).css("overflow"))return!1;var n=i&&"left"===i?"scrollLeft":"scrollTop",s=!1;
// TODO: determine which cases actually cause this to happen
// if the element doesn't have the scroll set, see if it's possible to
// set the scroll
return e[n]>0||(e[n]=1,s=e[n]>0,e[n]=0,s)},_create:function(){var e,i=this.options,n=this;this._addClass("ui-resizable"),t.extend(this,{_aspectRatio:!!i.aspectRatio,aspectRatio:i.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:i.helper||i.ghost||i.animate?i.helper||"ui-resizable-helper":null}),
// Wrap the element if it cannot hold child nodes
this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,e={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")},this.element.css(e),this.originalElement.css("margin",0),
// support: Safari
// Prevent Safari textarea resize
this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),
// Support: IE9
// avoid IE jump (hard set the margin)
this.originalElement.css(e),this._proportionallyResize()),this._setupHandles(),i.autoHide&&t(this.element).on("mouseenter",function(){i.disabled||(n._removeClass("ui-resizable-autohide"),n._handles.show())}).on("mouseleave",function(){i.disabled||n.resizing||(n._addClass("ui-resizable-autohide"),n._handles.hide())}),this._mouseInit()},_destroy:function(){this._mouseDestroy();var e,i=function(e){t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()};
// TODO: Unwrap at same DOM position
return this.elementIsWrapper&&(i(this.element),e=this.element,this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")}).insertAfter(e),e.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_setOption:function(t,e){switch(this._super(t,e),t){case"handles":this._removeHandles(),this._setupHandles()}},_setupHandles:function(){var e,i,n,s,o,a=this.options,r=this;if(this.handles=a.handles||(t(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=t(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),n=this.handles.split(","),this.handles={},i=0;i<n.length;i++)e=t.trim(n[i]),s="ui-resizable-"+e,o=t("<div>"),this._addClass(o,"ui-resizable-handle "+s),o.css({zIndex:a.zIndex}),this.handles[e]=".ui-resizable-"+e,this.element.append(o);this._renderAxis=function(e){var i,n,s,o;e=e||this.element;for(i in this.handles)this.handles[i].constructor===String?this.handles[i]=this.element.children(this.handles[i]).first().show():(this.handles[i].jquery||this.handles[i].nodeType)&&(this.handles[i]=t(this.handles[i]),this._on(this.handles[i],{mousedown:r._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(n=t(this.handles[i],this.element),o=/sw|ne|nw|se|n|s/.test(i)?n.outerHeight():n.outerWidth(),s=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),e.css(s,o),this._proportionallyResize()),this._handles=this._handles.add(this.handles[i])},
// TODO: make renderAxis a prototype function
this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.on("mouseover",function(){r.resizing||(this.className&&(o=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),r.axis=o&&o[1]?o[1]:"se")}),a.autoHide&&(this._handles.hide(),this._addClass("ui-resizable-autohide"))},_removeHandles:function(){this._handles.remove()},_mouseCapture:function(e){var i,n,s=!1;for(i in this.handles)n=t(this.handles[i])[0],(n===e.target||t.contains(n,e.target))&&(s=!0);return!this.options.disabled&&s},_mouseStart:function(e){var i,n,s,o=this.options,a=this.element;return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css("left")),n=this._num(this.helper.css("top")),o.containment&&(i+=t(o.containment).scrollLeft()||0,n+=t(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:n},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:a.width(),height:a.height()},this.originalSize=this._helper?{width:a.outerWidth(),height:a.outerHeight()}:{width:a.width(),height:a.height()},this.sizeDiff={width:a.outerWidth()-a.width(),height:a.outerHeight()-a.height()},this.originalPosition={left:i,top:n},this.originalMousePosition={left:e.pageX,top:e.pageY},this.aspectRatio="number"==typeof o.aspectRatio?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,s=t(".ui-resizable-"+this.axis).css("cursor"),t("body").css("cursor","auto"===s?this.axis+"-resize":s),this._addClass("ui-resizable-resizing"),this._propagate("start",e),!0},_mouseDrag:function(e){var i,n,s=this.originalMousePosition,o=this.axis,a=e.pageX-s.left||0,r=e.pageY-s.top||0,l=this._change[o];return this._updatePrevProperties(),!!l&&(i=l.apply(this,[e,a,r]),this._updateVirtualBoundaries(e.shiftKey),(this._aspectRatio||e.shiftKey)&&(i=this._updateRatio(i,e)),i=this._respectSize(i,e),this._updateCache(i),this._propagate("resize",e),n=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),t.isEmptyObject(n)||(this._updatePrevProperties(),this._trigger("resize",e,this.ui()),this._applyChanges()),!1)},_mouseStop:function(e){this.resizing=!1;var i,n,s,o,a,r,l,h=this.options,c=this;return this._helper&&(i=this._proportionallyResizeElements,n=i.length&&/textarea/i.test(i[0].nodeName),s=n&&this._hasScroll(i[0],"left")?0:c.sizeDiff.height,o=n?0:c.sizeDiff.width,a={width:c.helper.width()-o,height:c.helper.height()-s},r=parseFloat(c.element.css("left"))+(c.position.left-c.originalPosition.left)||null,l=parseFloat(c.element.css("top"))+(c.position.top-c.originalPosition.top)||null,h.animate||this.element.css(t.extend(a,{top:l,left:r})),c.helper.height(c.size.height),c.helper.width(c.size.width),this._helper&&!h.animate&&this._proportionallyResize()),t("body").css("cursor","auto"),this._removeClass("ui-resizable-resizing"),this._propagate("stop",e),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var t={};return this.position.top!==this.prevPosition.top&&(t.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(t.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(t.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(t.height=this.size.height+"px"),this.helper.css(t),t},_updateVirtualBoundaries:function(t){var e,i,n,s,o,a=this.options;o={minWidth:this._isNumber(a.minWidth)?a.minWidth:0,maxWidth:this._isNumber(a.maxWidth)?a.maxWidth:1/0,minHeight:this._isNumber(a.minHeight)?a.minHeight:0,maxHeight:this._isNumber(a.maxHeight)?a.maxHeight:1/0},(this._aspectRatio||t)&&(e=o.minHeight*this.aspectRatio,n=o.minWidth/this.aspectRatio,i=o.maxHeight*this.aspectRatio,s=o.maxWidth/this.aspectRatio,e>o.minWidth&&(o.minWidth=e),n>o.minHeight&&(o.minHeight=n),i<o.maxWidth&&(o.maxWidth=i),s<o.maxHeight&&(o.maxHeight=s)),this._vBoundaries=o},_updateCache:function(t){this.offset=this.helper.offset(),this._isNumber(t.left)&&(this.position.left=t.left),this._isNumber(t.top)&&(this.position.top=t.top),this._isNumber(t.height)&&(this.size.height=t.height),this._isNumber(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var e=this.position,i=this.size,n=this.axis;return this._isNumber(t.height)?t.width=t.height*this.aspectRatio:this._isNumber(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===n&&(t.left=e.left+(i.width-t.width),t.top=null),"nw"===n&&(t.top=e.top+(i.height-t.height),t.left=e.left+(i.width-t.width)),t},_respectSize:function(t){var e=this._vBoundaries,i=this.axis,n=this._isNumber(t.width)&&e.maxWidth&&e.maxWidth<t.width,s=this._isNumber(t.height)&&e.maxHeight&&e.maxHeight<t.height,o=this._isNumber(t.width)&&e.minWidth&&e.minWidth>t.width,a=this._isNumber(t.height)&&e.minHeight&&e.minHeight>t.height,r=this.originalPosition.left+this.originalSize.width,l=this.originalPosition.top+this.originalSize.height,h=/sw|nw|w/.test(i),c=/nw|ne|n/.test(i);
// Fixing jump error on top/left - bug #2330
return o&&(t.width=e.minWidth),a&&(t.height=e.minHeight),n&&(t.width=e.maxWidth),s&&(t.height=e.maxHeight),o&&h&&(t.left=r-e.minWidth),n&&h&&(t.left=r-e.maxWidth),a&&c&&(t.top=l-e.minHeight),s&&c&&(t.top=l-e.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_getPaddingPlusBorderDimensions:function(t){for(var e=0,i=[],n=[t.css("borderTopWidth"),t.css("borderRightWidth"),t.css("borderBottomWidth"),t.css("borderLeftWidth")],s=[t.css("paddingTop"),t.css("paddingRight"),t.css("paddingBottom"),t.css("paddingLeft")];e<4;e++)i[e]=parseFloat(n[e])||0,i[e]+=parseFloat(s[e])||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var t,e=0,i=this.helper||this.element;e<this._proportionallyResizeElements.length;e++)t=this._proportionallyResizeElements[e],
// TODO: Seems like a bug to cache this.outerDimensions
// considering that we are in a loop.
this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(t)),t.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var e=this.element,i=this.options;this.elementOffset=e.offset(),this._helper?(this.helper=this.helper||t("<div style='overflow:hidden;'></div>"),this._addClass(this.helper,this._helper),this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,e){return{width:this.originalSize.width+e}},w:function(t,e){var i=this.originalSize,n=this.originalPosition;return{left:n.left+e,width:i.width-e}},n:function(t,e,i){var n=this.originalSize,s=this.originalPosition;return{top:s.top+i,height:n.height-i}},s:function(t,e,i){return{height:this.originalSize.height+i}},se:function(e,i,n){return t.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[e,i,n]))},sw:function(e,i,n){return t.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[e,i,n]))},ne:function(e,i,n){return t.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[e,i,n]))},nw:function(e,i,n){return t.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[e,i,n]))}},_propagate:function(e,i){t.ui.plugin.call(this,e,[i,this.ui()]),"resize"!==e&&this._trigger(e,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),/*
 * Resizable Extensions
 */
t.ui.plugin.add("resizable","animate",{stop:function(e){var i=t(this).resizable("instance"),n=i.options,s=i._proportionallyResizeElements,o=s.length&&/textarea/i.test(s[0].nodeName),a=o&&i._hasScroll(s[0],"left")?0:i.sizeDiff.height,r=o?0:i.sizeDiff.width,l={width:i.size.width-r,height:i.size.height-a},h=parseFloat(i.element.css("left"))+(i.position.left-i.originalPosition.left)||null,c=parseFloat(i.element.css("top"))+(i.position.top-i.originalPosition.top)||null;i.element.animate(t.extend(l,c&&h?{top:c,left:h}:{}),{duration:n.animateDuration,easing:n.animateEasing,step:function(){var n={width:parseFloat(i.element.css("width")),height:parseFloat(i.element.css("height")),top:parseFloat(i.element.css("top")),left:parseFloat(i.element.css("left"))};s&&s.length&&t(s[0]).css({width:n.width,height:n.height}),
// Propagating resize, and updating values for each animation step
i._updateCache(n),i._propagate("resize",e)}})}}),t.ui.plugin.add("resizable","containment",{start:function(){var e,i,n,s,o,a,r,l=t(this).resizable("instance"),h=l.options,c=l.element,u=h.containment,d=u instanceof t?u.get(0):/parent/.test(u)?c.parent().get(0):u;d&&(l.containerElement=t(d),/document/.test(u)||u===document?(l.containerOffset={left:0,top:0},l.containerPosition={left:0,top:0},l.parentData={element:t(document),left:0,top:0,width:t(document).width(),height:t(document).height()||document.body.parentNode.scrollHeight}):(e=t(d),i=[],t(["Top","Right","Left","Bottom"]).each(function(t,n){i[t]=l._num(e.css("padding"+n))}),l.containerOffset=e.offset(),l.containerPosition=e.position(),l.containerSize={height:e.innerHeight()-i[3],width:e.innerWidth()-i[1]},n=l.containerOffset,s=l.containerSize.height,o=l.containerSize.width,a=l._hasScroll(d,"left")?d.scrollWidth:o,r=l._hasScroll(d)?d.scrollHeight:s,l.parentData={element:d,left:n.left,top:n.top,width:a,height:r}))},resize:function(e){var i,n,s,o,a=t(this).resizable("instance"),r=a.options,l=a.containerOffset,h=a.position,c=a._aspectRatio||e.shiftKey,u={top:0,left:0},d=a.containerElement,p=!0;d[0]!==document&&/static/.test(d.css("position"))&&(u=l),h.left<(a._helper?l.left:0)&&(a.size.width=a.size.width+(a._helper?a.position.left-l.left:a.position.left-u.left),c&&(a.size.height=a.size.width/a.aspectRatio,p=!1),a.position.left=r.helper?l.left:0),h.top<(a._helper?l.top:0)&&(a.size.height=a.size.height+(a._helper?a.position.top-l.top:a.position.top),c&&(a.size.width=a.size.height*a.aspectRatio,p=!1),a.position.top=a._helper?l.top:0),s=a.containerElement.get(0)===a.element.parent().get(0),o=/relative|absolute/.test(a.containerElement.css("position")),s&&o?(a.offset.left=a.parentData.left+a.position.left,a.offset.top=a.parentData.top+a.position.top):(a.offset.left=a.element.offset().left,a.offset.top=a.element.offset().top),i=Math.abs(a.sizeDiff.width+(a._helper?a.offset.left-u.left:a.offset.left-l.left)),n=Math.abs(a.sizeDiff.height+(a._helper?a.offset.top-u.top:a.offset.top-l.top)),i+a.size.width>=a.parentData.width&&(a.size.width=a.parentData.width-i,c&&(a.size.height=a.size.width/a.aspectRatio,p=!1)),n+a.size.height>=a.parentData.height&&(a.size.height=a.parentData.height-n,c&&(a.size.width=a.size.height*a.aspectRatio,p=!1)),p||(a.position.left=a.prevPosition.left,a.position.top=a.prevPosition.top,a.size.width=a.prevSize.width,a.size.height=a.prevSize.height)},stop:function(){var e=t(this).resizable("instance"),i=e.options,n=e.containerOffset,s=e.containerPosition,o=e.containerElement,a=t(e.helper),r=a.offset(),l=a.outerWidth()-e.sizeDiff.width,h=a.outerHeight()-e.sizeDiff.height;e._helper&&!i.animate&&/relative/.test(o.css("position"))&&t(this).css({left:r.left-s.left-n.left,width:l,height:h}),e._helper&&!i.animate&&/static/.test(o.css("position"))&&t(this).css({left:r.left-s.left-n.left,width:l,height:h})}}),t.ui.plugin.add("resizable","alsoResize",{start:function(){var e=t(this).resizable("instance"),i=e.options;t(i.alsoResize).each(function(){var e=t(this);e.data("ui-resizable-alsoresize",{width:parseFloat(e.width()),height:parseFloat(e.height()),left:parseFloat(e.css("left")),top:parseFloat(e.css("top"))})})},resize:function(e,i){var n=t(this).resizable("instance"),s=n.options,o=n.originalSize,a=n.originalPosition,r={height:n.size.height-o.height||0,width:n.size.width-o.width||0,top:n.position.top-a.top||0,left:n.position.left-a.left||0};t(s.alsoResize).each(function(){var e=t(this),n=t(this).data("ui-resizable-alsoresize"),s={},o=e.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];t.each(o,function(t,e){var i=(n[e]||0)+(r[e]||0);i&&i>=0&&(s[e]=i||null)}),e.css(s)})},stop:function(){t(this).removeData("ui-resizable-alsoresize")}}),t.ui.plugin.add("resizable","ghost",{start:function(){var e=t(this).resizable("instance"),i=e.size;e.ghost=e.originalElement.clone(),e.ghost.css({opacity:.25,display:"block",position:"relative",height:i.height,width:i.width,margin:0,left:0,top:0}),e._addClass(e.ghost,"ui-resizable-ghost"),
// DEPRECATED
// TODO: remove after 1.12
t.uiBackCompat!==!1&&"string"==typeof e.options.ghost&&
// Ghost option
e.ghost.addClass(this.options.ghost),e.ghost.appendTo(e.helper)},resize:function(){var e=t(this).resizable("instance");e.ghost&&e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})},stop:function(){var e=t(this).resizable("instance");e.ghost&&e.helper&&e.helper.get(0).removeChild(e.ghost.get(0))}}),t.ui.plugin.add("resizable","grid",{resize:function(){var e,i=t(this).resizable("instance"),n=i.options,s=i.size,o=i.originalSize,a=i.originalPosition,r=i.axis,l="number"==typeof n.grid?[n.grid,n.grid]:n.grid,h=l[0]||1,c=l[1]||1,u=Math.round((s.width-o.width)/h)*h,d=Math.round((s.height-o.height)/c)*c,p=o.width+u,f=o.height+d,m=n.maxWidth&&n.maxWidth<p,g=n.maxHeight&&n.maxHeight<f,v=n.minWidth&&n.minWidth>p,_=n.minHeight&&n.minHeight>f;n.grid=l,v&&(p+=h),_&&(f+=c),m&&(p-=h),g&&(f-=c),/^(se|s|e)$/.test(r)?(i.size.width=p,i.size.height=f):/^(ne)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.top=a.top-d):/^(sw)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.left=a.left-u):((f-c<=0||p-h<=0)&&(e=i._getPaddingPlusBorderDimensions(this)),f-c>0?(i.size.height=f,i.position.top=a.top-d):(f=c-e.height,i.size.height=f,i.position.top=a.top+o.height-f),p-h>0?(i.size.width=p,i.position.left=a.left-u):(p=h-e.width,i.size.width=p,i.position.left=a.left+o.width-p))}});t.ui.resizable;/*!
 * jQuery UI Dialog 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Dialog
//>>group: Widgets
//>>description: Displays customizable dialog windows.
//>>docs: http://api.jqueryui.com/dialog/
//>>demos: http://jqueryui.com/dialog/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/dialog.css
//>>css.theme: ../../themes/base/theme.css
t.widget("ui.dialog",{version:"1.12.1",options:{appendTo:"body",autoOpen:!0,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:!0,closeText:"Close",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",
// Ensure the titlebar is always visible
using:function(e){var i=t(this).css(e).offset().top;i<0&&t(this).css("top",e.top-i)}},resizable:!0,show:null,title:null,width:300,
// Callbacks
beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),null==this.options.title&&null!=this.originalTitle&&(this.options.title=this.originalTitle),
// Dialogs can't be disabled
this.options.disabled&&(this.options.disabled=!1),this._createWrapper(),this.element.show().removeAttr("title").appendTo(this.uiDialog),this._addClass("ui-dialog-content","ui-widget-content"),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&t.fn.draggable&&this._makeDraggable(),this.options.resizable&&t.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var e=this.options.appendTo;return e&&(e.jquery||e.nodeType)?t(e):this.document.find(e||"body").eq(0)},_destroy:function(){var t,e=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().css(this.originalCss).detach(),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),t=e.parent.children().eq(e.index),
// Don't try to place the dialog next to itself (#8613)
t.length&&t[0]!==this.element[0]?t.before(this.element):e.parent.append(this.element)},widget:function(){return this.uiDialog},disable:t.noop,enable:t.noop,close:function(e){var i=this;this._isOpen&&this._trigger("beforeClose",e)!==!1&&(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),this.opener.filter(":focusable").trigger("focus").length||
// Hiding a focused element doesn't trigger blur in WebKit
// so in case we have nothing to focus on, explicitly blur the active element
// https://bugs.webkit.org/show_bug.cgi?id=47182
t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])),this._hide(this.uiDialog,this.options.hide,function(){i._trigger("close",e)}))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(e,i){var n=!1,s=this.uiDialog.siblings(".ui-front:visible").map(function(){return+t(this).css("z-index")}).get(),o=Math.max.apply(null,s);return o>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",o+1),n=!0),n&&!i&&this._trigger("focus",e),n},open:function(){var e=this;
// Ensure the overlay is moved to the top with the dialog, but only when
// opening. The overlay shouldn't move after the dialog is open so that
// modeless dialogs opened after the modal dialog stack properly.
// Track the dialog immediately upon openening in case a focus event
// somehow occurs outside of the dialog before an element inside the
// dialog is focused (#10152)
return this._isOpen?void(this._moveToTop()&&this._focusTabbable()):(this._isOpen=!0,this.opener=t(t.ui.safeActiveElement(this.document[0])),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){e._focusTabbable(),e._trigger("focus")}),this._makeFocusTarget(),void this._trigger("open"))},_focusTabbable:function(){
// Set focus to the first match:
// 1. An element that was focused previously
// 2. First element inside the dialog matching [autofocus]
// 3. Tabbable element inside the content element
// 4. Tabbable element inside the buttonpane
// 5. The close button
// 6. The dialog itself
var t=this._focusedElement;t||(t=this.element.find("[autofocus]")),t.length||(t=this.element.find(":tabbable")),t.length||(t=this.uiDialogButtonPane.find(":tabbable")),t.length||(t=this.uiDialogTitlebarClose.filter(":tabbable")),t.length||(t=this.uiDialog),t.eq(0).trigger("focus")},_keepFocus:function(e){function i(){var e=t.ui.safeActiveElement(this.document[0]),i=this.uiDialog[0]===e||t.contains(this.uiDialog[0],e);i||this._focusTabbable()}e.preventDefault(),i.call(this),
// support: IE
// IE <= 8 doesn't prevent moving focus even with event.preventDefault()
// so we check again later
this._delay(i)},_createWrapper:function(){this.uiDialog=t("<div>").hide().attr({
// Setting tabIndex makes the div focusable
tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front"),this._on(this.uiDialog,{keydown:function(e){if(this.options.closeOnEscape&&!e.isDefaultPrevented()&&e.keyCode&&e.keyCode===t.ui.keyCode.ESCAPE)return e.preventDefault(),void this.close(e);
// Prevent tabbing out of dialogs
if(e.keyCode===t.ui.keyCode.TAB&&!e.isDefaultPrevented()){var i=this.uiDialog.find(":tabbable"),n=i.filter(":first"),s=i.filter(":last");e.target!==s[0]&&e.target!==this.uiDialog[0]||e.shiftKey?e.target!==n[0]&&e.target!==this.uiDialog[0]||!e.shiftKey||(this._delay(function(){s.trigger("focus")}),e.preventDefault()):(this._delay(function(){n.trigger("focus")}),e.preventDefault())}},mousedown:function(t){this._moveToTop(t)&&this._focusTabbable()}}),
// We assume that any existing aria-describedby attribute means
// that the dialog content is marked up properly
// otherwise we brute force the content as the description
this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var e;this.uiDialogTitlebar=t("<div>"),this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix"),this._on(this.uiDialogTitlebar,{mousedown:function(e){
// Don't prevent click on close button (#8838)
// Focusing a dialog that is partially scrolled out of view
// causes the browser to scroll it into view, preventing the click event
t(e.target).closest(".ui-dialog-titlebar-close")||
// Dialog isn't getting focus when dragging (#8063)
this.uiDialog.trigger("focus")}}),
// Support: IE
// Use type="button" to prevent enter keypresses in textboxes from closing the
// dialog in IE (#9312)
this.uiDialogTitlebarClose=t("<button type='button'></button>").button({label:t("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:!1}).appendTo(this.uiDialogTitlebar),this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close"),this._on(this.uiDialogTitlebarClose,{click:function(t){t.preventDefault(),this.close(t)}}),e=t("<span>").uniqueId().prependTo(this.uiDialogTitlebar),this._addClass(e,"ui-dialog-title"),this._title(e),this.uiDialogTitlebar.prependTo(this.uiDialog),this.uiDialog.attr({"aria-labelledby":e.attr("id")})},_title:function(t){this.options.title?t.text(this.options.title):t.html("&#160;")},_createButtonPane:function(){this.uiDialogButtonPane=t("<div>"),this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix"),this.uiButtonSet=t("<div>").appendTo(this.uiDialogButtonPane),this._addClass(this.uiButtonSet,"ui-dialog-buttonset"),this._createButtons()},_createButtons:function(){var e=this,i=this.options.buttons;
// If we already have a button pane, remove it
return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),t.isEmptyObject(i)||t.isArray(i)&&!i.length?void this._removeClass(this.uiDialog,"ui-dialog-buttons"):(t.each(i,function(i,n){var s,o;n=t.isFunction(n)?{click:n,text:i}:n,
// Default to a non-submitting button
n=t.extend({type:"button"},n),
// Change the context for the click callback to be the main element
s=n.click,o={icon:n.icon,iconPosition:n.iconPosition,showLabel:n.showLabel,
// Deprecated options
icons:n.icons,text:n.text},delete n.click,delete n.icon,delete n.iconPosition,delete n.showLabel,
// Deprecated options
delete n.icons,"boolean"==typeof n.text&&delete n.text,t("<button></button>",n).button(o).appendTo(e.uiButtonSet).on("click",function(){s.apply(e.element[0],arguments)})}),this._addClass(this.uiDialog,"ui-dialog-buttons"),void this.uiDialogButtonPane.appendTo(this.uiDialog))},_makeDraggable:function(){function e(t){return{position:t.position,offset:t.offset}}var i=this,n=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(n,s){i._addClass(t(this),"ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",n,e(s))},drag:function(t,n){i._trigger("drag",t,e(n))},stop:function(s,o){var a=o.offset.left-i.document.scrollLeft(),r=o.offset.top-i.document.scrollTop();n.position={my:"left top",at:"left"+(a>=0?"+":"")+a+" top"+(r>=0?"+":"")+r,of:i.window},i._removeClass(t(this),"ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",s,e(o))}})},_makeResizable:function(){function e(t){return{originalPosition:t.originalPosition,originalSize:t.originalSize,position:t.position,size:t.size}}var i=this,n=this.options,s=n.resizable,
// .ui-resizable has position: relative defined in the stylesheet
// but dialogs have to use absolute or fixed positioning
o=this.uiDialog.css("position"),a="string"==typeof s?s:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:n.maxWidth,maxHeight:n.maxHeight,minWidth:n.minWidth,minHeight:this._minHeight(),handles:a,start:function(n,s){i._addClass(t(this),"ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",n,e(s))},resize:function(t,n){i._trigger("resize",t,e(n))},stop:function(s,o){var a=i.uiDialog.offset(),r=a.left-i.document.scrollLeft(),l=a.top-i.document.scrollTop();n.height=i.uiDialog.height(),n.width=i.uiDialog.width(),n.position={my:"left top",at:"left"+(r>=0?"+":"")+r+" top"+(l>=0?"+":"")+l,of:i.window},i._removeClass(t(this),"ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",s,e(o))}}).css("position",o)},_trackFocus:function(){this._on(this.widget(),{focusin:function(e){this._makeFocusTarget(),this._focusedElement=t(e.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var e=this._trackingInstances(),i=t.inArray(this,e);i!==-1&&e.splice(i,1)},_trackingInstances:function(){var t=this.document.data("ui-dialog-instances");return t||(t=[],this.document.data("ui-dialog-instances",t)),t},_minHeight:function(){var t=this.options;return"auto"===t.height?t.minHeight:Math.min(t.minHeight,t.height)},_position:function(){
// Need to show the dialog to get the actual offset in the position plugin
var t=this.uiDialog.is(":visible");t||this.uiDialog.show(),this.uiDialog.position(this.options.position),t||this.uiDialog.hide()},_setOptions:function(e){var i=this,n=!1,s={};t.each(e,function(t,e){i._setOption(t,e),t in i.sizeRelatedOptions&&(n=!0),t in i.resizableRelatedOptions&&(s[t]=e)}),n&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",s)},_setOption:function(e,i){var n,s,o=this.uiDialog;"disabled"!==e&&(this._super(e,i),"appendTo"===e&&this.uiDialog.appendTo(this._appendTo()),"buttons"===e&&this._createButtons(),"closeText"===e&&this.uiDialogTitlebarClose.button({
// Ensure that we always pass a string
label:t("<a>").text(""+this.options.closeText).html()}),"draggable"===e&&(n=o.is(":data(ui-draggable)"),n&&!i&&o.draggable("destroy"),!n&&i&&this._makeDraggable()),"position"===e&&this._position(),"resizable"===e&&(
// currently resizable, becoming non-resizable
s=o.is(":data(ui-resizable)"),s&&!i&&o.resizable("destroy"),
// Currently resizable, changing handles
s&&"string"==typeof i&&o.resizable("option","handles",i),
// Currently non-resizable, becoming resizable
s||i===!1||this._makeResizable()),"title"===e&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){
// If the user has resized the dialog, the .ui-dialog and .ui-dialog-content
// divs will both have width and height set, so we need to reset them
var t,e,i,n=this.options;
// Reset content sizing
this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),n.minWidth>n.width&&(n.width=n.minWidth),
// Reset wrapper sizing
// determine the height of all the non-content elements
t=this.uiDialog.css({height:"auto",width:n.width}).outerHeight(),e=Math.max(0,n.minHeight-t),i="number"==typeof n.maxHeight?Math.max(0,n.maxHeight-t):"none","auto"===n.height?this.element.css({minHeight:e,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,n.height-t)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var e=t(this);return t("<div>").css({position:"absolute",width:e.outerWidth(),height:e.outerHeight()}).appendTo(e.parent()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(e){return!!t(e.target).closest(".ui-dialog").length||!!t(e.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){
// We use a delay in case the overlay is created from an
// event that we're going to be cancelling (#2804)
var e=!0;this._delay(function(){e=!1}),this.document.data("ui-dialog-overlays")||
// Prevent use of anchors and inputs
// Using _on() for an event handler shared across many instances is
// safe because the dialogs stack and must be closed in reverse order
this._on(this.document,{focusin:function(t){e||this._allowInteraction(t)||(t.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=t("<div>").appendTo(this._appendTo()),this._addClass(this.overlay,null,"ui-widget-overlay ui-front"),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var t=this.document.data("ui-dialog-overlays")-1;t?this.document.data("ui-dialog-overlays",t):(this._off(this.document,"focusin"),this.document.removeData("ui-dialog-overlays")),this.overlay.remove(),this.overlay=null}}}),
// DEPRECATED
// TODO: switch return back to widget declaration at top of file when this is removed
t.uiBackCompat!==!1&&
// Backcompat for dialogClass option
t.widget("ui.dialog",t.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super(),this.uiDialog.addClass(this.options.dialogClass)},_setOption:function(t,e){"dialogClass"===t&&this.uiDialog.removeClass(this.options.dialogClass).addClass(e),this._superApply(arguments)}});t.ui.dialog;/*!
 * jQuery UI Droppable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Droppable
//>>group: Interactions
//>>description: Enables drop targets for draggable elements.
//>>docs: http://api.jqueryui.com/droppable/
//>>demos: http://jqueryui.com/droppable/
t.widget("ui.droppable",{version:"1.12.1",widgetEventPrefix:"drop",options:{accept:"*",addClasses:!0,greedy:!1,scope:"default",tolerance:"intersect",
// Callbacks
activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var e,i=this.options,n=i.accept;this.isover=!1,this.isout=!0,this.accept=t.isFunction(n)?n:function(t){return t.is(n)},this.proportions=function(){
// Store the droppable's proportions
return arguments.length?void(e=arguments[0]):e?e:e={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}},this._addToManager(i.scope),i.addClasses&&this._addClass("ui-droppable")},_addToManager:function(e){
// Add the reference and positions to the manager
t.ui.ddmanager.droppables[e]=t.ui.ddmanager.droppables[e]||[],t.ui.ddmanager.droppables[e].push(this)},_splice:function(t){for(var e=0;e<t.length;e++)t[e]===this&&t.splice(e,1)},_destroy:function(){var e=t.ui.ddmanager.droppables[this.options.scope];this._splice(e)},_setOption:function(e,i){if("accept"===e)this.accept=t.isFunction(i)?i:function(t){return t.is(i)};else if("scope"===e){var n=t.ui.ddmanager.droppables[this.options.scope];this._splice(n),this._addToManager(i)}this._super(e,i)},_activate:function(e){var i=t.ui.ddmanager.current;this._addActiveClass(),i&&this._trigger("activate",e,this.ui(i))},_deactivate:function(e){var i=t.ui.ddmanager.current;this._removeActiveClass(),i&&this._trigger("deactivate",e,this.ui(i))},_over:function(e){var i=t.ui.ddmanager.current;
// Bail if draggable and droppable are same element
i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this._addHoverClass(),this._trigger("over",e,this.ui(i)))},_out:function(e){var i=t.ui.ddmanager.current;
// Bail if draggable and droppable are same element
i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this._removeHoverClass(),this._trigger("out",e,this.ui(i)))},_drop:function(e,i){var n=i||t.ui.ddmanager.current,s=!1;
// Bail if draggable and droppable are same element
// Bail if draggable and droppable are same element
return!(!n||(n.currentItem||n.element)[0]===this.element[0])&&(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var i=t(this).droppable("instance");if(i.options.greedy&&!i.options.disabled&&i.options.scope===n.options.scope&&i.accept.call(i.element[0],n.currentItem||n.element)&&_(n,t.extend(i,{offset:i.element.offset()}),i.options.tolerance,e))return s=!0,!1}),!s&&(!!this.accept.call(this.element[0],n.currentItem||n.element)&&(this._removeActiveClass(),this._removeHoverClass(),this._trigger("drop",e,this.ui(n)),this.element)))},ui:function(t){return{draggable:t.currentItem||t.element,helper:t.helper,position:t.position,offset:t.positionAbs}},
// Extension points just to make backcompat sane and avoid duplicating logic
// TODO: Remove in 1.13 along with call to it below
_addHoverClass:function(){this._addClass("ui-droppable-hover")},_removeHoverClass:function(){this._removeClass("ui-droppable-hover")},_addActiveClass:function(){this._addClass("ui-droppable-active")},_removeActiveClass:function(){this._removeClass("ui-droppable-active")}});var _=t.ui.intersect=function(){function t(t,e,i){return t>=e&&t<e+i}return function(e,i,n,s){if(!i.offset)return!1;var o=(e.positionAbs||e.position.absolute).left+e.margins.left,a=(e.positionAbs||e.position.absolute).top+e.margins.top,r=o+e.helperProportions.width,l=a+e.helperProportions.height,h=i.offset.left,c=i.offset.top,u=h+i.proportions().width,d=c+i.proportions().height;switch(n){case"fit":return h<=o&&r<=u&&c<=a&&l<=d;case"intersect":// Right Half
// Left Half
// Bottom Half
return h<o+e.helperProportions.width/2&&r-e.helperProportions.width/2<u&&c<a+e.helperProportions.height/2&&l-e.helperProportions.height/2<d;// Top Half
case"pointer":return t(s.pageY,c,i.proportions().height)&&t(s.pageX,h,i.proportions().width);case"touch":// Top edge touching
// Bottom edge touching
// Left edge touching
// Right edge touching
return(a>=c&&a<=d||l>=c&&l<=d||a<c&&l>d)&&(o>=h&&o<=u||r>=h&&r<=u||o<h&&r>u);default:return!1}}}();/*
	This manager tracks offsets of draggables and droppables
*/
t.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(e,i){var n,s,o=t.ui.ddmanager.droppables[e.options.scope]||[],a=i?i.type:null,// workaround for #2317
r=(e.currentItem||e.element).find(":data(ui-droppable)").addBack();t:for(n=0;n<o.length;n++)
// No disabled and non-accepted
if(!(o[n].options.disabled||e&&!o[n].accept.call(o[n].element[0],e.currentItem||e.element))){
// Filter out elements in the current dragged item
for(s=0;s<r.length;s++)if(r[s]===o[n].element[0]){o[n].proportions().height=0;continue t}o[n].visible="none"!==o[n].element.css("display"),o[n].visible&&(
// Activate the droppable if used directly from draggables
"mousedown"===a&&o[n]._activate.call(o[n],i),o[n].offset=o[n].element.offset(),o[n].proportions({width:o[n].element[0].offsetWidth,height:o[n].element[0].offsetHeight}))}},drop:function(e,i){var n=!1;
// Create a copy of the droppables in case the list changes during the drop (#9116)
return t.each((t.ui.ddmanager.droppables[e.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&_(e,this,this.options.tolerance,i)&&(n=this._drop.call(this,i)||n),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),n},dragStart:function(e,i){
// Listen for scrolling so that if the dragging causes scrolling the position of the
// droppables can be recalculated (see #5003)
e.element.parentsUntil("body").on("scroll.droppable",function(){e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)})},drag:function(e,i){
// If you have a highly dynamic page, you might try this option. It renders positions
// every time you move the mouse.
e.options.refreshPositions&&t.ui.ddmanager.prepareOffsets(e,i),
// Run through all droppables and check their positions based on specific tolerance options
t.each(t.ui.ddmanager.droppables[e.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var n,s,o,a=_(e,this,this.options.tolerance,i),r=!a&&this.isover?"isout":a&&!this.isover?"isover":null;r&&(this.options.greedy&&(
// find droppable parents with same scope
s=this.options.scope,o=this.element.parents(":data(ui-droppable)").filter(function(){return t(this).droppable("instance").options.scope===s}),o.length&&(n=t(o[0]).droppable("instance"),n.greedyChild="isover"===r)),
// We just moved into a greedy child
n&&"isover"===r&&(n.isover=!1,n.isout=!0,n._out.call(n,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),
// We just moved out of a greedy child
n&&"isout"===r&&(n.isout=!1,n.isover=!0,n._over.call(n,i)))}})},dragStop:function(e,i){e.element.parentsUntil("body").off("scroll.droppable"),
// Call prepareOffsets one final time since IE does not fire return scroll events when
// overflow was caused by drag (see #5003)
e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)}},
// DEPRECATED
// TODO: switch return back to widget declaration at top of file when this is removed
t.uiBackCompat!==!1&&
// Backcompat for activeClass and hoverClass options
t.widget("ui.droppable",t.ui.droppable,{options:{hoverClass:!1,activeClass:!1},_addActiveClass:function(){this._super(),this.options.activeClass&&this.element.addClass(this.options.activeClass)},_removeActiveClass:function(){this._super(),this.options.activeClass&&this.element.removeClass(this.options.activeClass)},_addHoverClass:function(){this._super(),this.options.hoverClass&&this.element.addClass(this.options.hoverClass)},_removeHoverClass:function(){this._super(),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass)}});t.ui.droppable,t.widget("ui.progressbar",{version:"1.12.1",options:{classes:{"ui-progressbar":"ui-corner-all","ui-progressbar-value":"ui-corner-left","ui-progressbar-complete":"ui-corner-right"},max:100,value:0,change:null,complete:null},min:0,_create:function(){
// Constrain initial value
this.oldValue=this.options.value=this._constrainedValue(),this.element.attr({
// Only set static values; aria-valuenow and aria-valuemax are
// set inside _refreshValue()
role:"progressbar","aria-valuemin":this.min}),this._addClass("ui-progressbar","ui-widget ui-widget-content"),this.valueDiv=t("<div>").appendTo(this.element),this._addClass(this.valueDiv,"ui-progressbar-value","ui-widget-header"),this._refreshValue()},_destroy:function(){this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"),this.valueDiv.remove()},value:function(t){return void 0===t?this.options.value:(this.options.value=this._constrainedValue(t),void this._refreshValue())},_constrainedValue:function(t){
// Sanitize value
return void 0===t&&(t=this.options.value),this.indeterminate=t===!1,"number"!=typeof t&&(t=0),!this.indeterminate&&Math.min(this.options.max,Math.max(this.min,t))},_setOptions:function(t){
// Ensure "value" option is set after other values (like max)
var e=t.value;delete t.value,this._super(t),this.options.value=this._constrainedValue(e),this._refreshValue()},_setOption:function(t,e){"max"===t&&(
// Don't allow a max less than min
e=Math.max(this.min,e)),this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t),this._toggleClass(null,"ui-state-disabled",!!t)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var e=this.options.value,i=this._percentage();this.valueDiv.toggle(this.indeterminate||e>this.min).width(i.toFixed(0)+"%"),this._toggleClass(this.valueDiv,"ui-progressbar-complete",null,e===this.options.max)._toggleClass("ui-progressbar-indeterminate",null,this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=t("<div>").appendTo(this.valueDiv),this._addClass(this.overlayDiv,"ui-progressbar-overlay"))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":e}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==e&&(this.oldValue=e,this._trigger("change")),e===this.options.max&&this._trigger("complete")}}),t.widget("ui.selectable",t.ui.mouse,{version:"1.12.1",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",
// Callbacks
selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var e=this;this._addClass("ui-selectable"),this.dragged=!1,
// Cache selectee children based on filter
this.refresh=function(){e.elementPos=t(e.element[0]).offset(),e.selectees=t(e.options.filter,e.element[0]),e._addClass(e.selectees,"ui-selectee"),e.selectees.each(function(){var i=t(this),n=i.offset(),s={left:n.left-e.elementPos.left,top:n.top-e.elementPos.top};t.data(this,"selectable-item",{element:this,$element:i,left:s.left,top:s.top,right:s.left+i.outerWidth(),bottom:s.top+i.outerHeight(),startselected:!1,selected:i.hasClass("ui-selected"),selecting:i.hasClass("ui-selecting"),unselecting:i.hasClass("ui-unselecting")})})},this.refresh(),this._mouseInit(),this.helper=t("<div>"),this._addClass(this.helper,"ui-selectable-helper")},_destroy:function(){this.selectees.removeData("selectable-item"),this._mouseDestroy()},_mouseStart:function(e){var i=this,n=this.options;this.opos=[e.pageX,e.pageY],this.elementPos=t(this.element[0]).offset(),this.options.disabled||(this.selectees=t(n.filter,this.element[0]),this._trigger("start",e),t(n.appendTo).append(this.helper),
// position helper (lasso)
this.helper.css({left:e.pageX,top:e.pageY,width:0,height:0}),n.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var n=t.data(this,"selectable-item");n.startselected=!0,e.metaKey||e.ctrlKey||(i._removeClass(n.$element,"ui-selected"),n.selected=!1,i._addClass(n.$element,"ui-unselecting"),n.unselecting=!0,
// selectable UNSELECTING callback
i._trigger("unselecting",e,{unselecting:n.element}))}),t(e.target).parents().addBack().each(function(){var n,s=t.data(this,"selectable-item");if(s)
// selectable (UN)SELECTING callback
return n=!e.metaKey&&!e.ctrlKey||!s.$element.hasClass("ui-selected"),i._removeClass(s.$element,n?"ui-unselecting":"ui-selected")._addClass(s.$element,n?"ui-selecting":"ui-unselecting"),s.unselecting=!n,s.selecting=n,s.selected=n,n?i._trigger("selecting",e,{selecting:s.element}):i._trigger("unselecting",e,{unselecting:s.element}),!1}))},_mouseDrag:function(e){if(this.dragged=!0,!this.options.disabled){var i,n=this,s=this.options,o=this.opos[0],a=this.opos[1],r=e.pageX,l=e.pageY;return o>r&&(i=r,r=o,o=i),a>l&&(i=l,l=a,a=i),this.helper.css({left:o,top:a,width:r-o,height:l-a}),this.selectees.each(function(){var i=t.data(this,"selectable-item"),h=!1,c={};
//prevent helper from being selected if appendTo: selectable
i&&i.element!==n.element[0]&&(c.left=i.left+n.elementPos.left,c.right=i.right+n.elementPos.left,c.top=i.top+n.elementPos.top,c.bottom=i.bottom+n.elementPos.top,"touch"===s.tolerance?h=!(c.left>r||c.right<o||c.top>l||c.bottom<a):"fit"===s.tolerance&&(h=c.left>o&&c.right<r&&c.top>a&&c.bottom<l),h?(
// SELECT
i.selected&&(n._removeClass(i.$element,"ui-selected"),i.selected=!1),i.unselecting&&(n._removeClass(i.$element,"ui-unselecting"),i.unselecting=!1),i.selecting||(n._addClass(i.$element,"ui-selecting"),i.selecting=!0,
// selectable SELECTING callback
n._trigger("selecting",e,{selecting:i.element}))):(
// UNSELECT
i.selecting&&((e.metaKey||e.ctrlKey)&&i.startselected?(n._removeClass(i.$element,"ui-selecting"),i.selecting=!1,n._addClass(i.$element,"ui-selected"),i.selected=!0):(n._removeClass(i.$element,"ui-selecting"),i.selecting=!1,i.startselected&&(n._addClass(i.$element,"ui-unselecting"),i.unselecting=!0),
// selectable UNSELECTING callback
n._trigger("unselecting",e,{unselecting:i.element}))),i.selected&&(e.metaKey||e.ctrlKey||i.startselected||(n._removeClass(i.$element,"ui-selected"),i.selected=!1,n._addClass(i.$element,"ui-unselecting"),i.unselecting=!0,
// selectable UNSELECTING callback
n._trigger("unselecting",e,{unselecting:i.element})))))}),!1}},_mouseStop:function(e){var i=this;return this.dragged=!1,t(".ui-unselecting",this.element[0]).each(function(){var n=t.data(this,"selectable-item");i._removeClass(n.$element,"ui-unselecting"),n.unselecting=!1,n.startselected=!1,i._trigger("unselected",e,{unselected:n.element})}),t(".ui-selecting",this.element[0]).each(function(){var n=t.data(this,"selectable-item");i._removeClass(n.$element,"ui-selecting")._addClass(n.$element,"ui-selected"),n.selecting=!1,n.selected=!0,n.startselected=!0,i._trigger("selected",e,{selected:n.element})}),this._trigger("stop",e),this.helper.remove(),!1}}),t.widget("ui.selectmenu",[t.ui.formResetMixin,{version:"1.12.1",defaultElement:"<select>",options:{appendTo:null,classes:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"},disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:!1,
// Callbacks
change:null,close:null,focus:null,open:null,select:null},_create:function(){var e=this.element.uniqueId().attr("id");this.ids={element:e,button:e+"-button",menu:e+"-menu"},this._drawButton(),this._drawMenu(),this._bindFormResetHandler(),this._rendered=!1,this.menuItems=t()},_drawButton:function(){var e,i=this,n=this._parseOption(this.element.find("option:selected"),this.element[0].selectedIndex);
// Associate existing label with the new button
this.labels=this.element.labels().attr("for",this.ids.button),this._on(this.labels,{click:function(t){this.button.focus(),t.preventDefault()}}),
// Hide original select element
this.element.hide(),
// Create button
this.button=t("<span>",{tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true",title:this.element.attr("title")}).insertAfter(this.element),this._addClass(this.button,"ui-selectmenu-button ui-selectmenu-button-closed","ui-button ui-widget"),e=t("<span>").appendTo(this.button),this._addClass(e,"ui-selectmenu-icon","ui-icon "+this.options.icons.button),this.buttonItem=this._renderButtonItem(n).appendTo(this.button),this.options.width!==!1&&this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusin",function(){
// Delay rendering the menu items until the button receives focus.
// The menu may have already been rendered via a programmatic open.
i._rendered||i._refreshMenu()})},_drawMenu:function(){var e=this;
// Create menu
this.menu=t("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu}),
// Wrap menu
this.menuWrap=t("<div>").append(this.menu),this._addClass(this.menuWrap,"ui-selectmenu-menu","ui-front"),this.menuWrap.appendTo(this._appendTo()),
// Initialize menu widget
this.menuInstance=this.menu.menu({classes:{"ui-menu":"ui-corner-bottom"},role:"listbox",select:function(t,i){t.preventDefault(),
// Support: IE8
// If the item was selected via a click, the text selection
// will be destroyed in IE
e._setSelection(),e._select(i.item.data("ui-selectmenu-item"),t)},focus:function(t,i){var n=i.item.data("ui-selectmenu-item");
// Prevent inital focus from firing and check if its a newly focused item
null!=e.focusIndex&&n.index!==e.focusIndex&&(e._trigger("focus",t,{item:n}),e.isOpen||e._select(n,t)),e.focusIndex=n.index,e.button.attr("aria-activedescendant",e.menuItems.eq(n.index).attr("id"))}}).menu("instance"),
// Don't close the menu on mouseleave
this.menuInstance._off(this.menu,"mouseleave"),
// Cancel the menu's collapseAll on document click
this.menuInstance._closeOnDocumentClick=function(){return!1},
// Selects often contain empty items, but never contain dividers
this.menuInstance._isDivider=function(){return!1}},refresh:function(){this._refreshMenu(),this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(
// Fall back to an empty object in case there are no options
this._getSelectedItem().data("ui-selectmenu-item")||{})),null===this.options.width&&this._resizeButton()},_refreshMenu:function(){var t,e=this.element.find("option");this.menu.empty(),this._parseOptions(e),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"),this._rendered=!0,e.length&&(t=this._getSelectedItem(),
// Update the menu to have the correct item focused
this.menuInstance.focus(null,t),this._setAria(t.data("ui-selectmenu-item")),
// Set disabled state
this._setOption("disabled",this.element.prop("disabled")))},open:function(t){this.options.disabled||(
// If this is the first time the menu is being opened, render the items
this._rendered?(
// Menu clears focus on close, reset focus to selected item
this._removeClass(this.menu.find(".ui-state-active"),null,"ui-state-active"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),
// If there are no options, don't open the menu
this.menuItems.length&&(this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",t)))},_position:function(){this.menuWrap.position(t.extend({of:this.button},this.options.position))},close:function(t){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this.range=null,this._off(this.document),this._trigger("close",t))},widget:function(){return this.button},menuWidget:function(){return this.menu},_renderButtonItem:function(e){var i=t("<span>");return this._setText(i,e.label),this._addClass(i,"ui-selectmenu-text"),i},_renderMenu:function(e,i){var n=this,s="";t.each(i,function(i,o){var a;o.optgroup!==s&&(a=t("<li>",{text:o.optgroup}),n._addClass(a,"ui-selectmenu-optgroup","ui-menu-divider"+(o.element.parent("optgroup").prop("disabled")?" ui-state-disabled":"")),a.appendTo(e),s=o.optgroup),n._renderItemData(e,o)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-selectmenu-item",e)},_renderItem:function(e,i){var n=t("<li>"),s=t("<div>",{title:i.element.attr("title")});return i.disabled&&this._addClass(n,null,"ui-state-disabled"),this._setText(s,i.label),n.append(s).appendTo(e)},_setText:function(t,e){e?t.text(e):t.html("&#160;")},_move:function(t,e){var i,n,s=".ui-menu-item";this.isOpen?i=this.menuItems.eq(this.focusIndex).parent("li"):(i=this.menuItems.eq(this.element[0].selectedIndex).parent("li"),s+=":not(.ui-state-disabled)"),n="first"===t||"last"===t?i["first"===t?"prevAll":"nextAll"](s).eq(-1):i[t+"All"](s).eq(0),n.length&&this.menuInstance.focus(e,n)},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex).parent("li")},_toggle:function(t){this[this.isOpen?"close":"open"](t)},_setSelection:function(){var t;this.range&&(window.getSelection?(t=window.getSelection(),t.removeAllRanges(),t.addRange(this.range)):this.range.select(),
// Support: IE
// Setting the text selection kills the button focus in IE, but
// restoring the focus doesn't kill the selection.
this.button.focus())},_documentClick:{mousedown:function(e){this.isOpen&&(t(e.target).closest(".ui-selectmenu-menu, #"+t.ui.escapeSelector(this.ids.button)).length||this.close(e))}},_buttonEvents:{
// Prevent text selection from being reset when interacting with the selectmenu (#10144)
mousedown:function(){var t;window.getSelection?(t=window.getSelection(),t.rangeCount&&(this.range=t.getRangeAt(0))):this.range=document.selection.createRange()},click:function(t){this._setSelection(),this._toggle(t)},keydown:function(e){var i=!0;switch(e.keyCode){case t.ui.keyCode.TAB:case t.ui.keyCode.ESCAPE:this.close(e),i=!1;break;case t.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(e);break;case t.ui.keyCode.UP:e.altKey?this._toggle(e):this._move("prev",e);break;case t.ui.keyCode.DOWN:e.altKey?this._toggle(e):this._move("next",e);break;case t.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(e):this._toggle(e);break;case t.ui.keyCode.LEFT:this._move("prev",e);break;case t.ui.keyCode.RIGHT:this._move("next",e);break;case t.ui.keyCode.HOME:case t.ui.keyCode.PAGE_UP:this._move("first",e);break;case t.ui.keyCode.END:case t.ui.keyCode.PAGE_DOWN:this._move("last",e);break;default:this.menu.trigger(e),i=!1}i&&e.preventDefault()}},_selectFocusedItem:function(t){var e=this.menuItems.eq(this.focusIndex).parent("li");e.hasClass("ui-state-disabled")||this._select(e.data("ui-selectmenu-item"),t)},_select:function(t,e){var i=this.element[0].selectedIndex;
// Change native select element
this.element[0].selectedIndex=t.index,this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(t)),this._setAria(t),this._trigger("select",e,{item:t}),t.index!==i&&this._trigger("change",e,{item:t}),this.close(e)},_setAria:function(t){var e=this.menuItems.eq(t.index).attr("id");this.button.attr({"aria-labelledby":e,"aria-activedescendant":e}),this.menu.attr("aria-activedescendant",e)},_setOption:function(t,e){if("icons"===t){var i=this.button.find("span.ui-icon");this._removeClass(i,null,this.options.icons.button)._addClass(i,null,e.button)}this._super(t,e),"appendTo"===t&&this.menuWrap.appendTo(this._appendTo()),"width"===t&&this._resizeButton()},_setOptionDisabled:function(t){this._super(t),this.menuInstance.option("disabled",t),this.button.attr("aria-disabled",t),this._toggleClass(this.button,null,"ui-state-disabled",t),this.element.prop("disabled",t),t?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0)},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front, dialog")),e.length||(e=this.document[0].body),e},_toggleAttr:function(){this.button.attr("aria-expanded",this.isOpen),
// We can't use two _toggleClass() calls here, because we need to make sure
// we always remove classes first and add them second, otherwise if both classes have the
// same theme class, it will be removed after we add it.
this._removeClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"closed":"open"))._addClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"open":"closed"))._toggleClass(this.menuWrap,"ui-selectmenu-open",null,this.isOpen),this.menu.attr("aria-hidden",!this.isOpen)},_resizeButton:function(){var t=this.options.width;
// For `width: false`, just remove inline style and stop
// For `width: false`, just remove inline style and stop
// For `width: null`, match the width of the original element
return t===!1?void this.button.css("width",""):(null===t&&(t=this.element.show().outerWidth(),this.element.hide()),void this.button.outerWidth(t))},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),
// Support: IE10
// IE10 wraps long text (possibly a rounding bug)
// so we add 1px to avoid the wrapping
this.menu.width("").outerWidth()+1))},_getCreateOptions:function(){var t=this._super();return t.disabled=this.element.prop("disabled"),t},_parseOptions:function(e){var i=this,n=[];e.each(function(e,s){n.push(i._parseOption(t(s),e))}),this.items=n},_parseOption:function(t,e){var i=t.parent("optgroup");return{element:t,index:e,value:t.val(),label:t.text(),optgroup:i.attr("label")||"",disabled:i.prop("disabled")||t.prop("disabled")}},_destroy:function(){this._unbindFormResetHandler(),this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.labels.attr("for",this.ids.element)}}]),t.widget("ui.slider",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"slide",options:{animate:!1,classes:{"ui-slider":"ui-corner-all","ui-slider-handle":"ui-corner-all",
// Note: ui-widget-header isn't the most fittingly semantic framework class for this
// element, but worked best visually with a variety of themes
"ui-slider-range":"ui-corner-all ui-widget-header"},distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,
// Callbacks
change:null,slide:null,start:null,stop:null},
// Number of pages in a slider
// (how many times can you page up/down to go through the whole range)
numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this._addClass("ui-slider ui-slider-"+this.orientation,"ui-widget ui-widget-content"),this._refresh(),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,n=this.options,s=this.element.find(".ui-slider-handle"),o="<span tabindex='0'></span>",a=[];for(i=n.values&&n.values.length||1,s.length>i&&(s.slice(i).remove(),s=s.slice(0,i)),e=s.length;e<i;e++)a.push(o);this.handles=s.add(t(a.join("")).appendTo(this.element)),this._addClass(this.handles,"ui-slider-handle","ui-state-default"),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e).attr("tabIndex",0)})},_createRange:function(){var e=this.options;e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?(this._removeClass(this.range,"ui-slider-range-min ui-slider-range-max"),
// Handle range switching from true to min/max
this.range.css({left:"",bottom:""})):(this.range=t("<div>").appendTo(this.element),this._addClass(this.range,"ui-slider-range")),"min"!==e.range&&"max"!==e.range||this._addClass(this.range,"ui-slider-range-"+e.range)):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this._mouseDestroy()},_mouseCapture:function(e){var i,n,s,o,a,r,l,h,c=this,u=this.options;return!u.disabled&&(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},n=this._normValueFromMouse(i),s=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(n-c.values(e));(s>i||s===i&&(e===c._lastChangedValue||c.values(e)===u.min))&&(s=i,o=t(this),a=e)}),r=this._start(e,a),r!==!1&&(this._mouseSliding=!0,this._handleIndex=a,this._addClass(o,null,"ui-state-active"),o.trigger("focus"),l=o.offset(),h=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=h?{left:0,top:0}:{left:e.pageX-l.left-o.width()/2,top:e.pageY-l.top-o.height()/2-(parseInt(o.css("borderTopWidth"),10)||0)-(parseInt(o.css("borderBottomWidth"),10)||0)+(parseInt(o.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,a,n),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this._removeClass(this.handles,null,"ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,n,s,o;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),n=i/e,n>1&&(n=1),n<0&&(n=0),"vertical"===this.orientation&&(n=1-n),s=this._valueMax()-this._valueMin(),o=this._valueMin()+n*s,this._trimAlignValue(o)},_uiHash:function(t,e,i){var n={handle:this.handles[t],handleIndex:t,value:void 0!==e?e:this.value()};return this._hasMultipleValues()&&(n.value=void 0!==e?e:this.values(t),n.values=i||this.values()),n},_hasMultipleValues:function(){return this.options.values&&this.options.values.length},_start:function(t,e){return this._trigger("start",t,this._uiHash(e))},_slide:function(t,e,i){var n,s,o=this.value(),a=this.values();this._hasMultipleValues()&&(s=this.values(e?0:1),o=this.values(e),2===this.options.values.length&&this.options.range===!0&&(i=0===e?Math.min(s,i):Math.max(s,i)),a[e]=i),i!==o&&(n=this._trigger("slide",t,this._uiHash(e,i,a)),
// A slide can be canceled by returning false from the slide callback
n!==!1&&(this._hasMultipleValues()?this.values(e,i):this.value(i)))},_stop:function(t,e){this._trigger("stop",t,this._uiHash(e))},_change:function(t,e){this._keySliding||this._mouseSliding||(
//store the last changed value index for reference when handles overlap
this._lastChangedValue=e,this._trigger("change",t,this._uiHash(e)))},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),void this._change(null,0)):this._value()},values:function(e,i){var n,s,o;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),void this._change(null,e);if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this._hasMultipleValues()?this._values(e):this.value();for(n=this.options.values,s=arguments[0],o=0;o<n.length;o+=1)n[o]=this._trimAlignValue(s[o]),this._change(null,o);this._refreshValue()},_setOption:function(e,i){var n,s=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(s=this.options.values.length),this._super(e,i),e){case"orientation":this._detectOrientation(),this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-"+this.orientation),this._refreshValue(),this.options.range&&this._refreshRange(i),
// Reset positioning from previous orientation
this.handles.css("horizontal"===i?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":
// Start from the last handle to prevent unreachable handles (#9046)
for(this._animateOff=!0,this._refreshValue(),n=s-1;n>=0;n--)this._change(null,n);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_setOptionDisabled:function(t){this._super(t),this._toggleClass(null,"ui-state-disabled",!!t)},
//internal value getter
// _value() returns value trimmed by min and max, aligned by step
_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},
//internal values getter
// _values() returns array of values trimmed by min and max, aligned by step
// _values( index ) returns single value trimmed by min and max, aligned by step
_values:function(t){var e,i,n;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this._hasMultipleValues()){for(
// .slice() creates a copy of the array
// this copy gets trimmed by min and max and then returned
i=this.options.values.slice(),n=0;n<i.length;n+=1)i[n]=this._trimAlignValue(i[n]);return i}return[]},
// Returns the step-aligned value that val is closest to, between (inclusive) min and max
_trimAlignValue:function(t){if(t<=this._valueMin())return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,n=t-i;
// Since JavaScript has problems with large floats, round
// the final value to 5 digits after the decimal point (see #4124)
return 2*Math.abs(i)>=e&&(n+=i>0?e:-e),parseFloat(n.toFixed(5))},_calculateNewMax:function(){var t=this.options.max,e=this._valueMin(),i=this.options.step,n=Math.round((t-e)/i)*i;t=n+e,t>this.options.max&&(
//If max is not divisible by step, rounding off may increase its value
t-=i),this.max=parseFloat(t.toFixed(this._precision()))},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=t.toString(),i=e.indexOf(".");return i===-1?0:e.length-i-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshRange:function(t){"vertical"===t&&this.range.css({width:"",left:""}),"horizontal"===t&&this.range.css({height:"",bottom:""})},_refreshValue:function(){var e,i,n,s,o,a=this.options.range,r=this.options,l=this,h=!this._animateOff&&r.animate,c={};this._hasMultipleValues()?this.handles.each(function(n){i=(l.values(n)-l._valueMin())/(l._valueMax()-l._valueMin())*100,c["horizontal"===l.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[h?"animate":"css"](c,r.animate),l.options.range===!0&&("horizontal"===l.orientation?(0===n&&l.range.stop(1,1)[h?"animate":"css"]({left:i+"%"},r.animate),1===n&&l.range[h?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===n&&l.range.stop(1,1)[h?"animate":"css"]({bottom:i+"%"},r.animate),1===n&&l.range[h?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i}):(n=this.value(),s=this._valueMin(),o=this._valueMax(),i=o!==s?(n-s)/(o-s)*100:0,c["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[h?"animate":"css"](c,r.animate),"min"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({width:i+"%"},r.animate),"max"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({width:100-i+"%"},r.animate),"min"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({height:i+"%"},r.animate),"max"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({height:100-i+"%"},r.animate))},_handleEvents:{keydown:function(e){var i,n,s,o,a=t(e.target).data("ui-slider-handle-index");switch(e.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(e.preventDefault(),!this._keySliding&&(this._keySliding=!0,this._addClass(t(e.target),null,"ui-state-active"),i=this._start(e,a),i===!1))return}switch(o=this.options.step,n=s=this._hasMultipleValues()?this.values(a):this.value(),e.keyCode){case t.ui.keyCode.HOME:s=this._valueMin();break;case t.ui.keyCode.END:s=this._valueMax();break;case t.ui.keyCode.PAGE_UP:s=this._trimAlignValue(n+(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.PAGE_DOWN:s=this._trimAlignValue(n-(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(n===this._valueMax())return;s=this._trimAlignValue(n+o);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(n===this._valueMin())return;s=this._trimAlignValue(n-o)}this._slide(e,a,s)},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),this._removeClass(t(e.target),null,"ui-state-active"))}}}),t.widget("ui.sortable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,
// Callbacks
activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(t,e,i){return t>=e&&t<e+i},_isFloating:function(t){return/left|right/.test(t.css("float"))||/inline|table-cell/.test(t.css("display"))},_create:function(){this.containerCache={},this._addClass("ui-sortable"),
//Get the items
this.refresh(),
//Let's determine the parent's offset
this.offset=this.element.offset(),
//Initialize mouse events for interaction
this._mouseInit(),this._setHandleClassName(),
//We're ready to go
this.ready=!0},_setOption:function(t,e){this._super(t,e),"handle"===t&&this._setHandleClassName()},_setHandleClassName:function(){var e=this;this._removeClass(this.element.find(".ui-sortable-handle"),"ui-sortable-handle"),t.each(this.items,function(){e._addClass(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item,"ui-sortable-handle")})},_destroy:function(){this._mouseDestroy();for(var t=this.items.length-1;t>=0;t--)this.items[t].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(e,i){var n=null,s=!1,o=this;
//We have to refresh the items data once first
//Find out if the clicked node (or one of its parents) is a actual item in this.items
return!this.reverting&&(!this.options.disabled&&"static"!==this.options.type&&(this._refreshItems(e),t(e.target).parents().each(function(){if(t.data(this,o.widgetName+"-item")===o)return n=t(this),!1}),t.data(e.target,o.widgetName+"-item")===o&&(n=t(e.target)),!!n&&(!(this.options.handle&&!i&&(t(this.options.handle,n).find("*").addBack().each(function(){this===e.target&&(s=!0)}),!s))&&(this.currentItem=n,this._removeCurrentsFromItems(),!0))))},_mouseStart:function(e,i,n){var s,o,a=this.options;
//Post "activate" events to possible containers
if(this.currentContainer=this,
//We only need to call refreshPositions, because the refreshItems call has been moved to
// mouseCapture
this.refreshPositions(),
//Create and append the visible helper
this.helper=this._createHelper(e),
//Cache the helper size
this._cacheHelperProportions(),/*
		 * - Position generation -
		 * This block generates everything position related - it's the core of draggables.
		 */
//Cache the margins of the original element
this._cacheMargins(),
//Get the next scrolling parent
this.scrollParent=this.helper.scrollParent(),
//The element's absolute position on the page minus margins
this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},t.extend(this.offset,{click:{//Where the click happened, relative to the element
left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),
// This is a relative to absolute position minus the actual position calculation -
// only used for relative positioned helper
relative:this._getRelativeOffset()}),
// Only after we got the offset, we can change the helper's position to absolute
// TODO: Still need to figure out a way to make relative sorting possible
this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),
//Generate the original position
this.originalPosition=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,
//Adjust the mouse offset relative to the helper if "cursorAt" is supplied
a.cursorAt&&this._adjustOffsetFromHelper(a.cursorAt),
//Cache the former DOM position
this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},
// If the helper is not the original, hide the original so it's not playing any role during
// the drag, won't cause anything bad this way
this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),
//Create the placeholder
this._createPlaceholder(),
//Set a containment if given in the options
a.containment&&this._setContainment(),a.cursor&&"auto"!==a.cursor&&(// cursor option
o=this.document.find("body"),
// Support: IE
this.storedCursor=o.css("cursor"),o.css("cursor",a.cursor),this.storedStylesheet=t("<style>*{ cursor: "+a.cursor+" !important; }</style>").appendTo(o)),a.opacity&&(// opacity option
this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",a.opacity)),a.zIndex&&(// zIndex option
this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",a.zIndex)),
//Prepare scrolling
this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),
//Call callbacks
this._trigger("start",e,this._uiHash()),
//Recache the helper size
this._preserveHelperProportions||this._cacheHelperProportions(),!n)for(s=this.containers.length-1;s>=0;s--)this.containers[s]._trigger("activate",e,this._uiHash(this));
//Prepare possible droppables
// Execute the drag once - this causes the helper not to be visiblebefore getting its
// correct position
return t.ui.ddmanager&&(t.ui.ddmanager.current=this),t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this.dragging=!0,this._addClass(this.helper,"ui-sortable-helper"),this._mouseDrag(e),!0},_mouseDrag:function(e){var i,n,s,o,a=this.options,r=!1;
//Rearrange
for(
//Compute the helpers position
this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),
//Do scrolling
this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<a.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+a.scrollSpeed:e.pageY-this.overflowOffset.top<a.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-a.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<a.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+a.scrollSpeed:e.pageX-this.overflowOffset.left<a.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-a.scrollSpeed)):(e.pageY-this.document.scrollTop()<a.scrollSensitivity?r=this.document.scrollTop(this.document.scrollTop()-a.scrollSpeed):this.window.height()-(e.pageY-this.document.scrollTop())<a.scrollSensitivity&&(r=this.document.scrollTop(this.document.scrollTop()+a.scrollSpeed)),e.pageX-this.document.scrollLeft()<a.scrollSensitivity?r=this.document.scrollLeft(this.document.scrollLeft()-a.scrollSpeed):this.window.width()-(e.pageX-this.document.scrollLeft())<a.scrollSensitivity&&(r=this.document.scrollLeft(this.document.scrollLeft()+a.scrollSpeed))),r!==!1&&t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e)),
//Regenerate the absolute position used for position checks
this.positionAbs=this._convertPositionTo("absolute"),
//Set the helper position
this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(
//Cache variables and intersection, continue if no intersection
n=this.items[i],s=n.item[0],o=this._intersectsWithPointer(n),o&&n.instance===this.currentContainer&&!(s===this.currentItem[0]||this.placeholder[1===o?"next":"prev"]()[0]===s||t.contains(this.placeholder[0],s)||"semi-dynamic"===this.options.type&&t.contains(this.element[0],s))){if(this.direction=1===o?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(n))break;this._rearrange(e,n),this._trigger("change",e,this._uiHash());break}
//Post events to containers
//Interconnect with droppables
//Call callbacks
return this._contactContainers(e),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),this._trigger("sort",e,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(e,i){if(e){if(
//If we are using droppables, inform the manager about the drop
t.ui.ddmanager&&!this.options.dropBehaviour&&t.ui.ddmanager.drop(this,e),this.options.revert){var n=this,s=this.placeholder.offset(),o=this.options.axis,a={};o&&"x"!==o||(a.left=s.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),o&&"y"!==o||(a.top=s.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,t(this.helper).animate(a,parseInt(this.options.revert,10)||500,function(){n._clear(e)})}else this._clear(e,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp(new t.Event("mouseup",{target:null})),"original"===this.options.helper?(this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")):this.currentItem.show();
//Post deactivating events to containers
for(var e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("deactivate",null,this._uiHash(this)),this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",null,this._uiHash(this)),this.containers[e].containerCache.over=0)}
//$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately,
// it unbinds ALL events from the original node!
return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),t.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?t(this.domPosition.prev).after(this.currentItem):t(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(e){var i=this._getItemsAsjQuery(e&&e.connected),n=[];return e=e||{},t(i).each(function(){var i=(t(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[\-=_](.+)/);i&&n.push((e.key||i[1]+"[]")+"="+(e.key&&e.expression?i[1]:i[2]))}),!n.length&&e.key&&n.push(e.key+"="),n.join("&")},toArray:function(e){var i=this._getItemsAsjQuery(e&&e.connected),n=[];return e=e||{},i.each(function(){n.push(t(e.item||this).attr(e.attribute||"id")||"")}),n},/* Be careful with the following core functions */
_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,n=this.positionAbs.top,s=n+this.helperProportions.height,o=t.left,a=o+t.width,r=t.top,l=r+t.height,h=this.offset.click.top,c=this.offset.click.left,u="x"===this.options.axis||n+h>r&&n+h<l,d="y"===this.options.axis||e+c>o&&e+c<a,p=u&&d;// Right Half
// Left Half
// Bottom Half
return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]?p:o<e+this.helperProportions.width/2&&i-this.helperProportions.width/2<a&&r<n+this.helperProportions.height/2&&s-this.helperProportions.height/2<l},_intersectsWithPointer:function(t){var e,i,n="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top,t.height),s="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left,t.width),o=n&&s;return!!o&&(e=this._getDragVerticalDirection(),i=this._getDragHorizontalDirection(),this.floating?"right"===i||"down"===e?2:1:e&&("down"===e?2:1))},_intersectsWithSides:function(t){var e=this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),i=this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),n=this._getDragVerticalDirection(),s=this._getDragHorizontalDirection();return this.floating&&s?"right"===s&&i||"left"===s&&!i:n&&("down"===n&&e||"up"===n&&!e)},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top;return 0!==t&&(t>0?"down":"up")},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left;return 0!==t&&(t>0?"right":"left")},refresh:function(t){return this._refreshItems(t),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var t=this.options;return t.connectWith.constructor===String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(e){function i(){r.push(this)}var n,s,o,a,r=[],l=[],h=this._connectWith();if(h&&e)for(n=h.length-1;n>=0;n--)for(o=t(h[n],this.document[0]),s=o.length-1;s>=0;s--)a=t.data(o[s],this.widgetFullName),a&&a!==this&&!a.options.disabled&&l.push([t.isFunction(a.options.items)?a.options.items.call(a.element):t(a.options.items,a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),a]);for(l.push([t.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):t(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),n=l.length-1;n>=0;n--)l[n][0].each(i);return t(r)},_removeCurrentsFromItems:function(){var e=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=t.grep(this.items,function(t){for(var i=0;i<e.length;i++)if(e[i]===t.item[0])return!1;return!0})},_refreshItems:function(e){this.items=[],this.containers=[this];var i,n,s,o,a,r,l,h,c=this.items,u=[[t.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):t(this.options.items,this.element),this]],d=this._connectWith();
//Shouldn't be run the first time through due to massive slow-down
if(d&&this.ready)for(i=d.length-1;i>=0;i--)for(s=t(d[i],this.document[0]),n=s.length-1;n>=0;n--)o=t.data(s[n],this.widgetFullName),o&&o!==this&&!o.options.disabled&&(u.push([t.isFunction(o.options.items)?o.options.items.call(o.element[0],e,{item:this.currentItem}):t(o.options.items,o.element),o]),this.containers.push(o));for(i=u.length-1;i>=0;i--)for(a=u[i][1],r=u[i][0],n=0,h=r.length;n<h;n++)l=t(r[n]),
// Data for target checking (mouse manager)
l.data(this.widgetName+"-item",a),c.push({item:l,instance:a,width:0,height:0,left:0,top:0})},refreshPositions:function(e){
// Determine whether items are being displayed horizontally
this.floating=!!this.items.length&&("x"===this.options.axis||this._isFloating(this.items[0].item)),
//This has to be redone because due to the item being moved out/into the offsetParent,
// the offsetParent's position will change
this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,n,s,o;for(i=this.items.length-1;i>=0;i--)n=this.items[i],
//We ignore calculating positions of all connected containers when we're not over them
n.instance!==this.currentContainer&&this.currentContainer&&n.item[0]!==this.currentItem[0]||(s=this.options.toleranceElement?t(this.options.toleranceElement,n.item):n.item,e||(n.width=s.outerWidth(),n.height=s.outerHeight()),o=s.offset(),n.left=o.left,n.top=o.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)o=this.containers[i].element.offset(),this.containers[i].containerCache.left=o.left,this.containers[i].containerCache.top=o.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(e){e=e||this;var i,n=e.options;n.placeholder&&n.placeholder.constructor!==String||(i=n.placeholder,n.placeholder={element:function(){var n=e.currentItem[0].nodeName.toLowerCase(),s=t("<"+n+">",e.document[0]);return e._addClass(s,"ui-sortable-placeholder",i||e.currentItem[0].className)._removeClass(s,"ui-sortable-helper"),"tbody"===n?e._createTrPlaceholder(e.currentItem.find("tr").eq(0),t("<tr>",e.document[0]).appendTo(s)):"tr"===n?e._createTrPlaceholder(e.currentItem,s):"img"===n&&s.attr("src",e.currentItem.attr("src")),i||s.css("visibility","hidden"),s},update:function(t,s){
// 1. If a className is set as 'placeholder option, we don't force sizes -
// the class is responsible for that
// 2. The option 'forcePlaceholderSize can be enabled to force it even if a
// class name is specified
i&&!n.forcePlaceholderSize||(
//If the element doesn't have a actual height by itself (without styles coming
// from a stylesheet), it receives the inline height from the dragged item
s.height()||s.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10)),s.width()||s.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10)))}}),
//Create the placeholder
e.placeholder=t(n.placeholder.element.call(e.element,e.currentItem)),
//Append it after the actual current item
e.currentItem.after(e.placeholder),
//Update the size of the placeholder (TODO: Logic to fuzzy, see line 316/317)
n.placeholder.update(e,e.placeholder)},_createTrPlaceholder:function(e,i){var n=this;e.children().each(function(){t("<td>&#160;</td>",n.document[0]).attr("colspan",t(this).attr("colspan")||1).appendTo(i)})},_contactContainers:function(e){var i,n,s,o,a,r,l,h,c,u,d=null,p=null;
// Get innermost container that intersects with item
for(i=this.containers.length-1;i>=0;i--)
// Never consider a container that's located within the item itself
if(!t.contains(this.currentItem[0],this.containers[i].element[0]))if(this._intersectsWith(this.containers[i].containerCache)){
// If we've already found a container and it's more "inner" than this, then continue
if(d&&t.contains(this.containers[i].element[0],d.element[0]))continue;d=this.containers[i],p=i}else
// container doesn't intersect. trigger "out" event if necessary
this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",e,this._uiHash(this)),this.containers[i].containerCache.over=0);
// If no intersecting containers found, return
if(d)
// Move the item into the container if it's not there already
if(1===this.containers.length)this.containers[p].containerCache.over||(this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p].containerCache.over=1);else{for(
// When entering a new container, we will find the item with the least distance and
// append our item near it
s=1e4,o=null,c=d.floating||this._isFloating(this.currentItem),a=c?"left":"top",r=c?"width":"height",u=c?"pageX":"pageY",n=this.items.length-1;n>=0;n--)t.contains(this.containers[p].element[0],this.items[n].item[0])&&this.items[n].item[0]!==this.currentItem[0]&&(l=this.items[n].item.offset()[a],h=!1,e[u]-l>this.items[n][r]/2&&(h=!0),Math.abs(e[u]-l)<s&&(s=Math.abs(e[u]-l),o=this.items[n],this.direction=h?"up":"down"));
//Check if dropOnEmpty is enabled
if(!o&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[p])return void(this.currentContainer.containerCache.over||(this.containers[p]._trigger("over",e,this._uiHash()),this.currentContainer.containerCache.over=1));o?this._rearrange(e,o,null,!0):this._rearrange(e,null,this.containers[p].element,!0),this._trigger("change",e,this._uiHash()),this.containers[p]._trigger("change",e,this._uiHash(this)),this.currentContainer=this.containers[p],
//Update the placeholder
this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p].containerCache.over=1}},_createHelper:function(e){var i=this.options,n=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;
//Add the helper to the DOM if that didn't happen already
return n.parents("body").length||t("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(n[0]),n[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),n[0].style.width&&!i.forceHelperSize||n.width(this.currentItem.width()),n[0].style.height&&!i.forceHelperSize||n.height(this.currentItem.height()),n},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){
//Get the offsetParent and cache its position
this.offsetParent=this.helper.offsetParent();var e=this.offsetParent.offset();
// This is a special case where we need to modify a offset calculated on start, since the
// following happened:
// 1. The position of the helper is absolute, so it's position is calculated based on the
// next positioned parent
// 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't
// the document, which means that the scroll is included in the initial calculation of the
// offset of the parent, and never recalculated upon drag
// This needs to be actually done for all browsers, since pageX/pageY includes this
// information with an ugly IE fix
return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.currentItem.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,n,s=this.options;"parent"===s.containment&&(s.containment=this.helper[0].parentNode),"document"!==s.containment&&"window"!==s.containment||(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===s.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===s.containment?this.document.height()||document.body.parentNode.scrollHeight:this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(s.containment)||(e=t(s.containment)[0],i=t(s.containment).offset(),n="hidden"!==t(e).css("overflow"),this.containment=[i.left+(parseInt(t(e).css("borderLeftWidth"),10)||0)+(parseInt(t(e).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(t(e).css("borderTopWidth"),10)||0)+(parseInt(t(e).css("paddingTop"),10)||0)-this.margins.top,i.left+(n?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(t(e).css("borderLeftWidth"),10)||0)-(parseInt(t(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(n?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(t(e).css("borderTopWidth"),10)||0)-(parseInt(t(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(e,i){i||(i=this.position);var n="absolute"===e?1:-1,s="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(s[0].tagName);return{top:
// The absolute mouse position
i.top+
// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.relative.top*n+
// The offsetParent's offset without borders (offset + border)
this.offset.parent.top*n-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():o?0:s.scrollTop())*n,left:
// The absolute mouse position
i.left+
// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.relative.left*n+
// The offsetParent's offset without borders (offset + border)
this.offset.parent.left*n-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():o?0:s.scrollLeft())*n}},_generatePosition:function(e){var i,n,s=this.options,o=e.pageX,a=e.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,l=/(html|body)/i.test(r[0].tagName);
// This is another very weird special case that only happens for relative elements:
// 1. If the css position is relative
// 2. and the scroll parent is the document or similar to the offset parent
// we have to refresh the relative offset during the scroll so there are no jumps
/*
		 * - Position constraining -
		 * Constrain the position to a mix of grid, containment.
		 */
//If we are not dragging yet, we won't check for options
return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(e.pageX-this.offset.click.left<this.containment[0]&&(o=this.containment[0]+this.offset.click.left),e.pageY-this.offset.click.top<this.containment[1]&&(a=this.containment[1]+this.offset.click.top),e.pageX-this.offset.click.left>this.containment[2]&&(o=this.containment[2]+this.offset.click.left),e.pageY-this.offset.click.top>this.containment[3]&&(a=this.containment[3]+this.offset.click.top)),s.grid&&(i=this.originalPageY+Math.round((a-this.originalPageY)/s.grid[1])*s.grid[1],a=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-s.grid[1]:i+s.grid[1]:i,n=this.originalPageX+Math.round((o-this.originalPageX)/s.grid[0])*s.grid[0],o=this.containment?n-this.offset.click.left>=this.containment[0]&&n-this.offset.click.left<=this.containment[2]?n:n-this.offset.click.left>=this.containment[0]?n-s.grid[0]:n+s.grid[0]:n)),{top:
// The absolute mouse position
a-
// Click offset (relative to the element)
this.offset.click.top-
// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.relative.top-
// The offsetParent's offset without borders (offset + border)
this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():l?0:r.scrollTop()),left:
// The absolute mouse position
o-
// Click offset (relative to the element)
this.offset.click.left-
// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.relative.left-
// The offsetParent's offset without borders (offset + border)
this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():l?0:r.scrollLeft())}},_rearrange:function(t,e,i,n){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?e.item[0]:e.item[0].nextSibling),
//Various things done here to improve the performance:
// 1. we create a setTimeout, that calls refreshPositions
// 2. on the instance, we have a counter variable, that get's higher after every append
// 3. on the local scope, we copy the counter variable, and check in the timeout,
// if it's still the same
// 4. this lets only the last addition to the timeout stack through
this.counter=this.counter?++this.counter:1;var s=this.counter;this._delay(function(){s===this.counter&&
//Precompute after each DOM insertion, NOT on mousemove
this.refreshPositions(!n)})},_clear:function(t,e){
//Post events to containers
function i(t,e,i){return function(n){i._trigger(t,n,e._uiHash(e))}}this.reverting=!1;
// We delay all events that have to be triggered to after the point where the placeholder
// has been removed and everything else normalized again
var n,s=[];if(
// We first have to update the dom position of the actual currentItem
// Note: don't do it if the current item is already removed (by a user), or it gets
// reappended (see #4088)
!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(n in this._storedCSS)"auto"!==this._storedCSS[n]&&"static"!==this._storedCSS[n]||(this._storedCSS[n]="");this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!e&&s.push(function(t){this._trigger("receive",t,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||e||
// Trigger update callback if the DOM position has changed
s.push(function(t){this._trigger("update",t,this._uiHash())}),
// Check if the items Container has Changed and trigger appropriate
// events.
this!==this.currentContainer&&(e||(s.push(function(t){this._trigger("remove",t,this._uiHash())}),s.push(function(t){return function(e){t._trigger("receive",e,this._uiHash(this))}}.call(this,this.currentContainer)),s.push(function(t){return function(e){t._trigger("update",e,this._uiHash(this))}}.call(this,this.currentContainer)))),n=this.containers.length-1;n>=0;n--)e||s.push(i("deactivate",this,this.containers[n])),this.containers[n].containerCache.over&&(s.push(i("out",this,this.containers[n])),this.containers[n].containerCache.over=0);if(
//Do what was originally in plugins
this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,e||this._trigger("beforeStop",t,this._uiHash()),
//$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately,
// it unbinds ALL events from the original node!
this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!e){for(n=0;n<s.length;n++)
// Trigger all delayed events
s[n].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){t.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(e){var i=e||this;return{helper:i.helper,placeholder:i.placeholder||t([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:e?e.element:null}}});t.widget("ui.spinner",{version:"1.12.1",defaultElement:"<input>",widgetEventPrefix:"spin",options:{classes:{"ui-spinner":"ui-corner-all","ui-spinner-down":"ui-corner-br","ui-spinner-up":"ui-corner-tr"},culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){
// handle string values that need to be parsed
this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),
// Only format if there is a value, prevents the field from being marked
// as invalid in Firefox, see #9573.
""!==this.value()&&
// Format the value, but don't constrain.
this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),
// Turning off autocomplete prevents the browser from remembering the
// value when navigating through history, so we re-enable autocomplete
// if the page is unloaded before the widget is destroyed. #7790
this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var e=this._super(),i=this.element;return t.each(["min","max","step"],function(t,n){var s=i.attr(n);null!=s&&s.length&&(e[n]=s)}),e},_events:{keydown:function(t){this._start(t)&&this._keydown(t)&&t.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(t){return this.cancelBlur?void delete this.cancelBlur:(this._stop(),this._refresh(),void(this.previous!==this.element.val()&&this._trigger("change",t)))},mousewheel:function(t,e){if(e){if(!this.spinning&&!this._start(t))return!1;this._spin((e>0?1:-1)*this.options.step,t),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(t)},100),t.preventDefault()}},"mousedown .ui-spinner-button":function(e){function i(){var e=this.element[0]===t.ui.safeActiveElement(this.document[0]);e||(this.element.trigger("focus"),this.previous=n,
// support: IE
// IE sets focus asynchronously, so we need to check if focus
// moved off of the input because the user clicked on the button.
this._delay(function(){this.previous=n}))}var n;
// We never want the buttons to have focus; whenever the user is
// interacting with the spinner, the focus should be on the input.
// If the input is focused then this.previous is properly set from
// when the input first received focus. If the input is not focused
// then we need to set this.previous based on the value before spinning.
n=this.element[0]===t.ui.safeActiveElement(this.document[0])?this.previous:this.element.val(),
// Ensure focus is on (or stays on) the text field
e.preventDefault(),i.call(this),
// Support: IE
// IE doesn't prevent moving focus even with event.preventDefault()
// so we set a flag to know when we should ignore the blur event
// and check (again) if focus moved off of the input.
this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,i.call(this)}),this._start(e)!==!1&&this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(e){
// button will add ui-state-active if mouse was down while mouseleave and kept down
if(t(e.currentTarget).hasClass("ui-state-active"))return this._start(e)!==!1&&void this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e)},
// TODO: do we really want to consider this a stop?
// shouldn't we just stop the repeater and wait until mouseup before
// we trigger the stop event?
"mouseleave .ui-spinner-button":"_stop"},
// Support mobile enhanced option and make backcompat more sane
_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap("<span>").parent().append("<a></a><a></a>")},_draw:function(){this._enhance(),this._addClass(this.uiSpinner,"ui-spinner","ui-widget ui-widget-content"),this._addClass("ui-spinner-input"),this.element.attr("role","spinbutton"),
// Button bindings
this.buttons=this.uiSpinner.children("a").attr("tabIndex",-1).attr("aria-hidden",!0).button({classes:{"ui-button":""}}),
// TODO: Right now button does not support classes this is already updated in button PR
this._removeClass(this.buttons,"ui-corner-all"),this._addClass(this.buttons.first(),"ui-spinner-button ui-spinner-up"),this._addClass(this.buttons.last(),"ui-spinner-button ui-spinner-down"),this.buttons.first().button({icon:this.options.icons.up,showLabel:!1}),this.buttons.last().button({icon:this.options.icons.down,showLabel:!1}),
// IE 6 doesn't understand height: 50% for the buttons
// unless the wrapper has an explicit height
this.buttons.height()>Math.ceil(.5*this.uiSpinner.height())&&this.uiSpinner.height()>0&&this.uiSpinner.height(this.uiSpinner.height())},_keydown:function(e){var i=this.options,n=t.ui.keyCode;switch(e.keyCode){case n.UP:return this._repeat(null,1,e),!0;case n.DOWN:return this._repeat(null,-1,e),!0;case n.PAGE_UP:return this._repeat(null,i.page,e),!0;case n.PAGE_DOWN:return this._repeat(null,-i.page,e),!0}return!1},_start:function(t){return!(!this.spinning&&this._trigger("start",t)===!1)&&(this.counter||(this.counter=1),this.spinning=!0,!0)},_repeat:function(t,e,i){t=t||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,e,i)},t),this._spin(e*this.options.step,i)},_spin:function(t,e){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+t*this._increment(this.counter)),this.spinning&&this._trigger("spin",e,{value:i})===!1||(this._value(i),this.counter++)},_increment:function(e){var i=this.options.incremental;return i?t.isFunction(i)?i(e):Math.floor(e*e*e/5e4-e*e/500+17*e/200+1):1},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=t.toString(),i=e.indexOf(".");return i===-1?0:e.length-i-1},_adjustValue:function(t){var e,i,n=this.options;
// Clamp the value
// Make sure we're at a valid step
// - find out where we are relative to the base (min or 0)
// - round to the nearest step
// - rounding is based on 0, so adjust back to our base
// Fix precision from bad JS floating point math
// Clamp the value
return e=null!==n.min?n.min:0,i=t-e,i=Math.round(i/n.step)*n.step,t=e+i,t=parseFloat(t.toFixed(this._precision())),null!==n.max&&t>n.max?n.max:null!==n.min&&t<n.min?n.min:t},_stop:function(t){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",t))},_setOption:function(t,e){var i,n,s;return"culture"===t||"numberFormat"===t?(i=this._parse(this.element.val()),this.options[t]=e,void this.element.val(this._format(i))):("max"!==t&&"min"!==t&&"step"!==t||"string"==typeof e&&(e=this._parse(e)),"icons"===t&&(n=this.buttons.first().find(".ui-icon"),this._removeClass(n,null,this.options.icons.up),this._addClass(n,null,e.up),s=this.buttons.last().find(".ui-icon"),this._removeClass(s,null,this.options.icons.down),this._addClass(s,null,e.down)),void this._super(t,e))},_setOptionDisabled:function(t){this._super(t),this._toggleClass(this.uiSpinner,null,"ui-state-disabled",!!t),this.element.prop("disabled",!!t),this.buttons.button(t?"disable":"enable")},_setOptions:r(function(t){this._super(t)}),_parse:function(t){return"string"==typeof t&&""!==t&&(t=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(t,10,this.options.culture):+t),""===t||isNaN(t)?null:t},_format:function(t){return""===t?"":window.Globalize&&this.options.numberFormat?Globalize.format(t,this.options.numberFormat,this.options.culture):t},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,
// TODO: what should we do with values that can't be parsed?
"aria-valuenow":this._parse(this.element.val())})},isValid:function(){var t=this.value();
// Null is invalid
// Null is invalid
return null!==t&&t===this._adjustValue(t)},
// Update the value without triggering change
_value:function(t,e){var i;""!==t&&(i=this._parse(t),null!==i&&(e||(i=this._adjustValue(i)),t=this._format(i))),this.element.val(t),this._refresh()},_destroy:function(){this.element.prop("disabled",!1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:r(function(t){this._stepUp(t)}),_stepUp:function(t){this._start()&&(this._spin((t||1)*this.options.step),this._stop())},stepDown:r(function(t){this._stepDown(t)}),_stepDown:function(t){this._start()&&(this._spin((t||1)*-this.options.step),this._stop())},pageUp:r(function(t){this._stepUp((t||1)*this.options.page)}),pageDown:r(function(t){this._stepDown((t||1)*this.options.page)}),value:function(t){return arguments.length?void r(this._value).call(this,t):this._parse(this.element.val())},widget:function(){return this.uiSpinner}}),
// DEPRECATED
// TODO: switch return back to widget declaration at top of file when this is removed
t.uiBackCompat!==!1&&
// Backcompat for spinner html extension points
t.widget("ui.spinner",t.ui.spinner,{_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())},_uiSpinnerHtml:function(){return"<span>"},_buttonHtml:function(){return"<a></a><a></a>"}});t.ui.spinner;/*!
 * jQuery UI Tabs 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Tabs
//>>group: Widgets
//>>description: Transforms a set of container elements into a tab structure.
//>>docs: http://api.jqueryui.com/tabs/
//>>demos: http://jqueryui.com/tabs/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/tabs.css
//>>css.theme: ../../themes/base/theme.css
t.widget("ui.tabs",{version:"1.12.1",delay:300,options:{active:null,classes:{"ui-tabs":"ui-corner-all","ui-tabs-nav":"ui-corner-all","ui-tabs-panel":"ui-corner-bottom","ui-tabs-tab":"ui-corner-top"},collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,
// Callbacks
activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:function(){var t=/#.*$/;return function(e){var i,n;i=e.href.replace(t,""),n=location.href.replace(t,"");
// Decoding may throw an error if the URL isn't UTF-8 (#9518)
try{i=decodeURIComponent(i)}catch(s){}try{n=decodeURIComponent(n)}catch(s){}return e.hash.length>1&&i===n}}(),_create:function(){var e=this,i=this.options;this.running=!1,this._addClass("ui-tabs","ui-widget ui-widget-content"),this._toggleClass("ui-tabs-collapsible",null,i.collapsible),this._processTabs(),i.active=this._initialActive(),
// Take disabling tabs via class attribute from HTML
// into account and update option properly.
t.isArray(i.disabled)&&(i.disabled=t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"),function(t){return e.tabs.index(t)}))).sort()),
// Check for length avoids error when initializing empty list
this.options.active!==!1&&this.anchors.length?this.active=this._findActive(i.active):this.active=t(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var e=this.options.active,i=this.options.collapsible,n=location.hash.substring(1);
// check the fragment identifier in the URL
// Check for a tab marked active via a class
// No active tab, set to false
// Handle numbers: negative, out of range
// Don't allow collapsible: false and active: false
return null===e&&(n&&this.tabs.each(function(i,s){if(t(s).attr("aria-controls")===n)return e=i,!1}),null===e&&(e=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),null!==e&&e!==-1||(e=!!this.tabs.length&&0)),e!==!1&&(e=this.tabs.index(this.tabs.eq(e)),e===-1&&(e=!i&&0)),!i&&e===!1&&this.anchors.length&&(e=0),e},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):t()}},_tabKeydown:function(e){var i=t(t.ui.safeActiveElement(this.document[0])).closest("li"),n=this.tabs.index(i),s=!0;if(!this._handlePageNav(e)){switch(e.keyCode){case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:n++;break;case t.ui.keyCode.UP:case t.ui.keyCode.LEFT:s=!1,n--;break;case t.ui.keyCode.END:n=this.anchors.length-1;break;case t.ui.keyCode.HOME:n=0;break;case t.ui.keyCode.SPACE:
// Activate only, no collapsing
return e.preventDefault(),clearTimeout(this.activating),void this._activate(n);case t.ui.keyCode.ENTER:
// Toggle (cancel delayed activation, allow collapsing)
// Determine if we should collapse or activate
return e.preventDefault(),clearTimeout(this.activating),void this._activate(n!==this.options.active&&n);default:return}
// Focus the appropriate tab, based on which key was pressed
e.preventDefault(),clearTimeout(this.activating),n=this._focusNextTab(n,s),
// Navigating with control/command key will prevent automatic activation
e.ctrlKey||e.metaKey||(
// Update aria-selected immediately so that AT think the tab is already selected.
// Otherwise AT may confuse the user by stating that they need to activate the tab,
// but the tab will already be activated by the time the announcement finishes.
i.attr("aria-selected","false"),this.tabs.eq(n).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",n)},this.delay))}},_panelKeydown:function(e){this._handlePageNav(e)||
// Ctrl+up moves focus to the current tab
e.ctrlKey&&e.keyCode===t.ui.keyCode.UP&&(e.preventDefault(),this.active.trigger("focus"))},
// Alt+page up/down moves focus to the previous/next tab (and activates)
_handlePageNav:function(e){return e.altKey&&e.keyCode===t.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):e.altKey&&e.keyCode===t.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(e,i){function n(){return e>s&&(e=0),e<0&&(e=s),e}for(var s=this.tabs.length-1;t.inArray(n(),this.options.disabled)!==-1;)e=i?e+1:e-1;return e},_focusNextTab:function(t,e){return t=this._findNextTab(t,e),this.tabs.eq(t).trigger("focus"),t},_setOption:function(t,e){
// _activate() will handle invalid values and update this.options
// Setting collapsible: false while collapsed; open first panel
return"active"===t?void this._activate(e):(this._super(t,e),"collapsible"===t&&(this._toggleClass("ui-tabs-collapsible",null,e),e||this.options.active!==!1||this._activate(0)),"event"===t&&this._setupEvents(e),void("heightStyle"===t&&this._setupHeightStyle(e)))},_sanitizeSelector:function(t){return t?t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var e=this.options,i=this.tablist.children(":has(a[href])");
// Get disabled tabs from class attribute from HTML
// this will get converted to a boolean if needed in _refresh()
e.disabled=t.map(i.filter(".ui-state-disabled"),function(t){return i.index(t)}),this._processTabs(),
// Was collapsed or no tabs
e.active!==!1&&this.anchors.length?this.active.length&&!t.contains(this.tablist[0],this.active[0])?
// all remaining tabs are disabled
this.tabs.length===e.disabled.length?(e.active=!1,this.active=t()):this._activate(this._findNextTab(Math.max(0,e.active-1),!1)):
// make sure active index is correct
e.active=this.tabs.index(this.active):(e.active=!1,this.active=t()),this._refresh()},_refresh:function(){this._setOptionDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),
// Make sure one tab is in the tab order
this.active.length?(this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._addClass(this.active,"ui-tabs-active","ui-state-active"),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var e=this,i=this.tabs,n=this.anchors,s=this.panels;this.tablist=this._getList().attr("role","tablist"),this._addClass(this.tablist,"ui-tabs-nav","ui-helper-reset ui-helper-clearfix ui-widget-header"),
// Prevent users from focusing disabled tabs via click
this.tablist.on("mousedown"+this.eventNamespace,"> li",function(e){t(this).is(".ui-state-disabled")&&e.preventDefault()}).on("focus"+this.eventNamespace,".ui-tabs-anchor",function(){t(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this.tabs=this.tablist.find("> li:has(a[href])").attr({role:"tab",tabIndex:-1}),this._addClass(this.tabs,"ui-tabs-tab","ui-state-default"),this.anchors=this.tabs.map(function(){return t("a",this)[0]}).attr({role:"presentation",tabIndex:-1}),this._addClass(this.anchors,"ui-tabs-anchor"),this.panels=t(),this.anchors.each(function(i,n){var s,o,a,r=t(n).uniqueId().attr("id"),l=t(n).closest("li"),h=l.attr("aria-controls");
// Inline tab
e._isLocal(n)?(s=n.hash,a=s.substring(1),o=e.element.find(e._sanitizeSelector(s))):(
// If the tab doesn't already have aria-controls,
// generate an id by using a throw-away element
a=l.attr("aria-controls")||t({}).uniqueId()[0].id,s="#"+a,o=e.element.find(s),o.length||(o=e._createPanel(a),o.insertAfter(e.panels[i-1]||e.tablist)),o.attr("aria-live","polite")),o.length&&(e.panels=e.panels.add(o)),h&&l.data("ui-tabs-aria-controls",h),l.attr({"aria-controls":a,"aria-labelledby":r}),o.attr("aria-labelledby",r)}),this.panels.attr("role","tabpanel"),this._addClass(this.panels,"ui-tabs-panel","ui-widget-content"),
// Avoid memory leaks (#10056)
i&&(this._off(i.not(this.tabs)),this._off(n.not(this.anchors)),this._off(s.not(this.panels)))},
// Allow overriding how to find the list for rare usage scenarios (#7715)
_getList:function(){return this.tablist||this.element.find("ol, ul").eq(0)},_createPanel:function(e){return t("<div>").attr("id",e).data("ui-tabs-destroy",!0)},_setOptionDisabled:function(e){var i,n,s;
// Disable tabs
for(t.isArray(e)&&(e.length?e.length===this.anchors.length&&(e=!0):e=!1),s=0;n=this.tabs[s];s++)i=t(n),e===!0||t.inArray(s,e)!==-1?(i.attr("aria-disabled","true"),this._addClass(i,null,"ui-state-disabled")):(i.removeAttr("aria-disabled"),this._removeClass(i,null,"ui-state-disabled"));this.options.disabled=e,this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,e===!0)},_setupEvents:function(e){var i={};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),
// Always prevent the default action, even when disabled
this._on(!0,this.anchors,{click:function(t){t.preventDefault()}}),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(e){var i,n=this.element.parent();"fill"===e?(i=n.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var e=t(this),n=e.css("position");"absolute"!==n&&"fixed"!==n&&(i-=e.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=t(this).outerHeight(!0)}),this.panels.each(function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===e&&(i=0,this.panels.each(function(){i=Math.max(i,t(this).height("").height())}).height(i))},_eventHandler:function(e){var i=this.options,n=this.active,s=t(e.currentTarget),o=s.closest("li"),a=o[0]===n[0],r=a&&i.collapsible,l=r?t():this._getPanelForTab(o),h=n.length?this._getPanelForTab(n):t(),c={oldTab:n,oldPanel:h,newTab:r?t():o,newPanel:l};e.preventDefault(),o.hasClass("ui-state-disabled")||
// tab is already loading
o.hasClass("ui-tabs-loading")||
// can't switch durning an animation
this.running||
// click on active header, but not collapsible
a&&!i.collapsible||
// allow canceling activation
this._trigger("beforeActivate",e,c)===!1||(i.active=!r&&this.tabs.index(o),this.active=a?t():o,this.xhr&&this.xhr.abort(),h.length||l.length||t.error("jQuery UI Tabs: Mismatching fragment identifier."),l.length&&this.load(this.tabs.index(o),e),this._toggle(e,c))},
// Handles show/hide for selecting tabs
_toggle:function(e,i){function n(){o.running=!1,o._trigger("activate",e,i)}function s(){o._addClass(i.newTab.closest("li"),"ui-tabs-active","ui-state-active"),a.length&&o.options.show?o._show(a,o.options.show,n):(a.show(),n())}var o=this,a=i.newPanel,r=i.oldPanel;this.running=!0,
// Start out by hiding, then showing, then completing
r.length&&this.options.hide?this._hide(r,this.options.hide,function(){o._removeClass(i.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),s()}):(this._removeClass(i.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),r.hide(),s()),r.attr("aria-hidden","true"),i.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),
// If we're switching tabs, remove the old tab from the tab order.
// If we're opening from collapsed state, remove the previous tab from the tab order.
// If we're collapsing, then keep the collapsing tab in the tab order.
a.length&&r.length?i.oldTab.attr("tabIndex",-1):a.length&&this.tabs.filter(function(){return 0===t(this).attr("tabIndex")}).attr("tabIndex",-1),a.attr("aria-hidden","false"),i.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(e){var i,n=this._findActive(e);
// Trying to activate the already active panel
n[0]!==this.active[0]&&(
// Trying to collapse, simulate a click on the current active header
n.length||(n=this.active),i=n.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return e===!1?t():this.tabs.eq(e)},_getIndex:function(e){
// meta-function to give users option to provide a href string instead of a numerical index.
return"string"==typeof e&&(e=this.anchors.index(this.anchors.filter("[href$='"+t.ui.escapeSelector(e)+"']"))),e},_destroy:function(){this.xhr&&this.xhr.abort(),this.tablist.removeAttr("role").off(this.eventNamespace),this.anchors.removeAttr("role tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){t.data(this,"ui-tabs-destroy")?t(this).remove():t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")}),this.tabs.each(function(){var e=t(this),i=e.data("ui-tabs-aria-controls");i?e.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):e.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(e){var i=this.options.disabled;i!==!1&&(void 0===e?i=!1:(e=this._getIndex(e),i=t.isArray(i)?t.map(i,function(t){return t!==e?t:null}):t.map(this.tabs,function(t,i){return i!==e?i:null})),this._setOptionDisabled(i))},disable:function(e){var i=this.options.disabled;if(i!==!0){if(void 0===e)i=!0;else{if(e=this._getIndex(e),t.inArray(e,i)!==-1)return;i=t.isArray(i)?t.merge([e],i).sort():[e]}this._setOptionDisabled(i)}},load:function(e,i){e=this._getIndex(e);var n=this,s=this.tabs.eq(e),o=s.find(".ui-tabs-anchor"),a=this._getPanelForTab(s),r={tab:s,panel:a},l=function(t,e){"abort"===e&&n.panels.stop(!1,!0),n._removeClass(s,"ui-tabs-loading"),a.removeAttr("aria-busy"),t===n.xhr&&delete n.xhr};
// Not remote
this._isLocal(o[0])||(this.xhr=t.ajax(this._ajaxSettings(o,i,r)),
// Support: jQuery <1.8
// jQuery <1.8 returns false if the request is canceled in beforeSend,
// but as of 1.8, $.ajax() always returns a jqXHR object.
this.xhr&&"canceled"!==this.xhr.statusText&&(this._addClass(s,"ui-tabs-loading"),a.attr("aria-busy","true"),this.xhr.done(function(t,e,s){
// support: jQuery <1.8
// http://bugs.jquery.com/ticket/11778
setTimeout(function(){a.html(t),n._trigger("load",i,r),l(s,e)},1)}).fail(function(t,e){
// support: jQuery <1.8
// http://bugs.jquery.com/ticket/11778
setTimeout(function(){l(t,e)},1)})))},_ajaxSettings:function(e,i,n){var s=this;return{
// Support: IE <11 only
// Strip any hash that exists to prevent errors with the Ajax request
url:e.attr("href").replace(/#.*$/,""),beforeSend:function(e,o){return s._trigger("beforeLoad",i,t.extend({jqXHR:e,ajaxSettings:o},n))}}},_getPanelForTab:function(e){var i=t(e).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}}),
// DEPRECATED
// TODO: Switch return back to widget declaration at top of file when this is removed
t.uiBackCompat!==!1&&
// Backcompat for ui-tab class (now ui-tabs-tab)
t.widget("ui.tabs",t.ui.tabs,{_processTabs:function(){this._superApply(arguments),this._addClass(this.tabs,"ui-tab")}});t.ui.tabs;/*!
 * jQuery UI Tooltip 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Tooltip
//>>group: Widgets
//>>description: Shows additional information for any element on hover or focus.
//>>docs: http://api.jqueryui.com/tooltip/
//>>demos: http://jqueryui.com/tooltip/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/tooltip.css
//>>css.theme: ../../themes/base/theme.css
t.widget("ui.tooltip",{version:"1.12.1",options:{classes:{"ui-tooltip":"ui-corner-all ui-widget-shadow"},content:function(){
// support: IE<9, Opera in jQuery <1.7
// .text() can't accept undefined, so coerce to a string
var e=t(this).attr("title")||"";
// Escape title, since we're going from an attribute to raw HTML
return t("<a>").text(e).html()},hide:!0,
// Disabled elements have inconsistent behavior across browsers (#8661)
items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,track:!1,
// Callbacks
close:null,open:null},_addDescribedBy:function(e,i){var n=(e.attr("aria-describedby")||"").split(/\s+/);n.push(i),e.data("ui-tooltip-id",i).attr("aria-describedby",t.trim(n.join(" ")))},_removeDescribedBy:function(e){var i=e.data("ui-tooltip-id"),n=(e.attr("aria-describedby")||"").split(/\s+/),s=t.inArray(i,n);s!==-1&&n.splice(s,1),e.removeData("ui-tooltip-id"),n=t.trim(n.join(" ")),n?e.attr("aria-describedby",n):e.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"}),
// IDs of generated tooltips, needed for destroy
this.tooltips={},
// IDs of parent tooltips where we removed the title attribute
this.parents={},
// Append the aria-live region so tooltips announce correctly
this.liveRegion=t("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this.disabledTitles=t([])},_setOption:function(e,i){var n=this;this._super(e,i),"content"===e&&t.each(this.tooltips,function(t,e){n._updateContent(e.element)})},_setOptionDisabled:function(t){this[t?"_disable":"_enable"]()},_disable:function(){var e=this;
// Close open tooltips
t.each(this.tooltips,function(i,n){var s=t.Event("blur");s.target=s.currentTarget=n.element[0],e.close(s,!0)}),
// Remove title attributes to prevent native tooltips
this.disabledTitles=this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function(){var e=t(this);if(e.is("[title]"))return e.data("ui-tooltip-title",e.attr("title")).removeAttr("title")}))},_enable:function(){
// restore title attributes
this.disabledTitles.each(function(){var e=t(this);e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title"))}),this.disabledTitles=t([])},open:function(e){var i=this,n=t(e?e.target:this.element).closest(this.options.items);
// No element to show a tooltip for or the tooltip is already open
n.length&&!n.data("ui-tooltip-id")&&(n.attr("title")&&n.data("ui-tooltip-title",n.attr("title")),n.data("ui-tooltip-open",!0),
// Kill parent tooltips, custom or native, for hover
e&&"mouseover"===e.type&&n.parents().each(function(){var e,n=t(this);n.data("ui-tooltip-open")&&(e=t.Event("blur"),e.target=e.currentTarget=this,i.close(e,!0)),n.attr("title")&&(n.uniqueId(),i.parents[this.id]={element:this,title:n.attr("title")},n.attr("title",""))}),this._registerCloseHandlers(e,n),this._updateContent(n,e))},_updateContent:function(t,e){var i,n=this.options.content,s=this,o=e?e.type:null;return"string"==typeof n||n.nodeType||n.jquery?this._open(e,t,n):(i=n.call(t[0],function(i){
// IE may instantly serve a cached response for ajax requests
// delay this call to _open so the other call to _open runs first
s._delay(function(){
// Ignore async response if tooltip was closed already
t.data("ui-tooltip-open")&&(
// JQuery creates a special event for focusin when it doesn't
// exist natively. To improve performance, the native event
// object is reused and the type is changed. Therefore, we can't
// rely on the type being correct after the event finished
// bubbling, so we set it back to the previous value. (#8740)
e&&(e.type=o),this._open(e,t,i))})}),void(i&&this._open(e,t,i)))},_open:function(e,i,n){function s(t){h.of=t,a.is(":hidden")||a.position(h)}var o,a,r,l,h=t.extend({},this.options.position);if(n){if(
// Content can be updated multiple times. If the tooltip already
// exists, then just update the content and bail.
o=this._find(i))return void o.tooltip.find(".ui-tooltip-content").html(n);
// If we have a title, clear it to prevent the native tooltip
// we have to check first to avoid defining a title if none exists
// (we don't want to cause an element to start matching [title])
//
// We use removeAttr only for key events, to allow IE to export the correct
// accessible attributes. For mouse events, set to empty string to avoid
// native tooltip showing up (happens only when removing inside mouseover).
i.is("[title]")&&(e&&"mouseover"===e.type?i.attr("title",""):i.removeAttr("title")),o=this._tooltip(i),a=o.tooltip,this._addDescribedBy(i,a.attr("id")),a.find(".ui-tooltip-content").html(n),
// Support: Voiceover on OS X, JAWS on IE <= 9
// JAWS announces deletions even when aria-relevant="additions"
// Voiceover will sometimes re-read the entire log region's contents from the beginning
this.liveRegion.children().hide(),l=t("<div>").html(a.find(".ui-tooltip-content").html()),l.removeAttr("name").find("[name]").removeAttr("name"),l.removeAttr("id").find("[id]").removeAttr("id"),l.appendTo(this.liveRegion),this.options.track&&e&&/^mouse/.test(e.type)?(this._on(this.document,{mousemove:s}),
// trigger once to override element-relative positioning
s(e)):a.position(t.extend({of:i},this.options.position)),a.hide(),this._show(a,this.options.show),
// Handle tracking tooltips that are shown with a delay (#8644). As soon
// as the tooltip is visible, position the tooltip using the most recent
// event.
// Adds the check to add the timers only when both delay and track options are set (#14682)
this.options.track&&this.options.show&&this.options.show.delay&&(r=this.delayedShow=setInterval(function(){a.is(":visible")&&(s(h.of),clearInterval(r))},t.fx.interval)),this._trigger("open",e,{tooltip:a})}},_registerCloseHandlers:function(e,i){var n={keyup:function(e){if(e.keyCode===t.ui.keyCode.ESCAPE){var n=t.Event(e);n.currentTarget=i[0],this.close(n,!0)}}};
// Only bind remove handler for delegated targets. Non-delegated
// tooltips will handle this in destroy.
i[0]!==this.element[0]&&(n.remove=function(){this._removeTooltip(this._find(i).tooltip)}),e&&"mouseover"!==e.type||(n.mouseleave="close"),e&&"focusin"!==e.type||(n.focusout="close"),this._on(!0,i,n)},close:function(e){var i,n=this,s=t(e?e.currentTarget:this.element),o=this._find(s);
// The tooltip may already be closed
// The tooltip may already be closed
// Disabling closes the tooltip, so we need to track when we're closing
// to avoid an infinite loop in case the tooltip becomes disabled on close
// Clear the interval for delayed tracking tooltips
// Only set title if we had one before (see comment in _open())
// If the title attribute has changed since open(), don't restore
// Remove 'remove' binding only on delegated targets
// We set ui-tooltip-open immediately upon open (in open()), but only set the
// additional data once there's actually content to show (in _open()). So even if the
// tooltip doesn't have full data, we always remove ui-tooltip-open in case we're in
// the period between open() and _open().
return o?(i=o.tooltip,void(o.closing||(clearInterval(this.delayedShow),s.data("ui-tooltip-title")&&!s.attr("title")&&s.attr("title",s.data("ui-tooltip-title")),this._removeDescribedBy(s),o.hiding=!0,i.stop(!0),this._hide(i,this.options.hide,function(){n._removeTooltip(t(this))}),s.removeData("ui-tooltip-open"),this._off(s,"mouseleave focusout keyup"),s[0]!==this.element[0]&&this._off(s,"remove"),this._off(this.document,"mousemove"),e&&"mouseleave"===e.type&&t.each(this.parents,function(e,i){t(i.element).attr("title",i.title),delete n.parents[e]}),o.closing=!0,this._trigger("close",e,{tooltip:i}),o.hiding||(o.closing=!1)))):void s.removeData("ui-tooltip-open")},_tooltip:function(e){var i=t("<div>").attr("role","tooltip"),n=t("<div>").appendTo(i),s=i.uniqueId().attr("id");return this._addClass(n,"ui-tooltip-content"),this._addClass(i,"ui-tooltip","ui-widget ui-widget-content"),i.appendTo(this._appendTo(e)),this.tooltips[s]={element:e,tooltip:i}},_find:function(t){var e=t.data("ui-tooltip-id");return e?this.tooltips[e]:null},_removeTooltip:function(t){t.remove(),delete this.tooltips[t.attr("id")]},_appendTo:function(t){var e=t.closest(".ui-front, dialog");return e.length||(e=this.document[0].body),e},_destroy:function(){var e=this;
// Close open tooltips
t.each(this.tooltips,function(i,n){
// Delegate to close method to handle common cleanup
var s=t.Event("blur"),o=n.element;s.target=s.currentTarget=o[0],e.close(s,!0),
// Remove immediately; destroying an open tooltip doesn't use the
// hide animation
t("#"+i).remove(),
// Restore the title
o.data("ui-tooltip-title")&&(
// If the title attribute has changed since open(), don't restore
o.attr("title")||o.attr("title",o.data("ui-tooltip-title")),o.removeData("ui-tooltip-title"))}),this.liveRegion.remove()}}),
// DEPRECATED
// TODO: Switch return back to widget declaration at top of file when this is removed
t.uiBackCompat!==!1&&
// Backcompat for tooltipClass option
t.widget("ui.tooltip",t.ui.tooltip,{options:{tooltipClass:null},_tooltip:function(){var t=this._superApply(arguments);return this.options.tooltipClass&&t.tooltip.addClass(this.options.tooltipClass),t}});t.ui.tooltip}),/*
 * jQuery Templates Plugin 1.0.0pre
 * http://github.com/jquery/jquery-tmpl
 * Requires jQuery 1.4.2
 *
 * Copyright 2011, Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
function(t){function e(e,i,n,s){var o={data:s||0===s||s===!1?s:i?i.data:{},_wrap:i?i._wrap:null,tmpl:null,parent:i||null,nodes:[],calls:h,nest:c,wrap:u,html:d,update:p};return e&&t.extend(o,e,{nodes:[],parent:i}),n&&(o.tmpl=n,o._ctnt=o._ctnt||o.tmpl(t,o),o.key=++w,(k.length?b:_)[w]=o),o}function i(e,s,o){var a,r=o?t.map(o,function(t){return"string"==typeof t?e.key?t.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,"$1 "+g+'="'+e.key+'" $2'):t:i(t,e,t._ctnt)}):e;return s?r:(r=r.join(""),r.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,function(e,i,s,o){a=t(s).get(),l(a),i&&(a=n(i).concat(a)),o&&(a=a.concat(n(o)))}),a?a:n(r))}function n(e){var i=document.createElement("div");return i.innerHTML=e,t.makeArray(i.childNodes)}function s(e){return new Function("jQuery","$item","var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('"+t.trim(e).replace(/([\\'])/g,"\\$1").replace(/[\r\t\n]/g," ").replace(/\$\{([^\}]*)\}/g,"{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,function(e,i,n,s,o,r,l){var h,c,u,d=t.tmpl.tag[n];if(!d)throw"Unknown template tag: "+n;return h=d._default||[],r&&!/\w$/.test(o)&&(o+=r,r=""),o?(o=a(o),l=l?","+a(l)+")":r?")":"",c=r?o.indexOf(".")>-1?o+a(r):"("+o+").call($item"+l:o,u=r?c:"(typeof("+o+")==='function'?("+o+").call($item):("+o+"))"):u=c=h.$1||"null",s=a(s),"');"+d[i?"close":"open"].split("$notnull_1").join(o?"typeof("+o+")!=='undefined' && ("+o+")!=null":"true").split("$1a").join(u).split("$1").join(c).split("$2").join(s||h.$2||"")+"__.push('"})+"');}return __;")}function o(e,n){e._wrap=i(e,!0,t.isArray(n)?n:[v.test(n)?n:t(n).html()]).join("")}function a(t){return t?t.replace(/\\'/g,"'").replace(/\\\\/g,"\\"):null}function r(t){var e=document.createElement("div");return e.appendChild(t.cloneNode(!0)),e.innerHTML}function l(i){function n(i){function n(t){t+=h,a=c[t]=c[t]||e(a,_[a.parent.key+h]||a.parent)}var s,o,a,r,l=i;if(r=i.getAttribute(g)){for(;l.parentNode&&1===(l=l.parentNode).nodeType&&!(s=l.getAttribute(g)););s!==r&&(l=l.parentNode?11===l.nodeType?0:l.getAttribute(g)||0:0,(a=_[r])||(a=b[r],a=e(a,_[l]||b[l]),a.key=++w,_[w]=a),x&&n(r)),i.removeAttribute(g)}else x&&(a=t.data(i,"tmplItem"))&&(n(a.key),_[a.key]=a,l=t.data(i.parentNode,"tmplItem"),l=l?l.key:0);if(a){for(o=a;o&&o.key!=l;)o.nodes.push(i),o=o.parent;delete a._ctnt,delete a._wrap,t.data(i,"tmplItem",a)}}var s,o,a,r,l,h="_"+x,c={};for(a=0,r=i.length;a<r;a++)if(1===(s=i[a]).nodeType){for(o=s.getElementsByTagName("*"),l=o.length-1;l>=0;l--)n(o[l]);n(s)}}function h(t,e,i,n){return t?void k.push({_:t,tmpl:e,item:this,data:i,options:n}):k.pop()}function c(e,i,n){return t.tmpl(t.template(e),i,n,this)}function u(e,i){var n=e.options||{};return n.wrapped=i,t.tmpl(t.template(e.tmpl),e.data,n,e.item)}function d(e,i){var n=this._wrap;return t.map(t(t.isArray(n)?n.join(""):n).filter(e||"*"),function(t){return i?t.innerText||t.textContent:t.outerHTML||r(t)})}function p(){var e=this.nodes;t.tmpl(null,null,null,this).insertBefore(e[0]),t(e).remove()}var f,m=t.fn.domManip,g="_tmplitem",v=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,_={},b={},y={key:0,data:{}},w=0,x=0,k=[];t.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,i){t.fn[e]=function(n){var s,o,a,r,l=[],h=t(n),c=1===this.length&&this[0].parentNode;if(f=_||{},c&&11===c.nodeType&&1===c.childNodes.length&&1===h.length)h[i](this[0]),l=this;else{for(o=0,a=h.length;o<a;o++)x=o,s=(o>0?this.clone(!0):this).get(),t(h[o])[i](s),l=l.concat(s);x=0,l=this.pushStack(l,e,h.selector)}return r=f,f=null,t.tmpl.complete(r),l}}),t.fn.extend({tmpl:function(e,i,n){return t.tmpl(this[0],e,i,n)},tmplItem:function(){return t.tmplItem(this[0])},template:function(e){return t.template(e,this[0])},domManip:function(e,i,n){if(e[0]&&t.isArray(e[0])){for(var s,o=t.makeArray(arguments),a=e[0],r=a.length,l=0;l<r&&!(s=t.data(a[l++],"tmplItem")););s&&x&&(o[2]=function(e){t.tmpl.afterManip(this,e,n)}),m.apply(this,o)}else m.apply(this,arguments);return x=0,!f&&t.tmpl.complete(_),this}}),t.extend({tmpl:function(n,s,a,r){var l,h=!r;if(h)r=y,n=t.template[n]||t.template(null,n),b={};else if(!n)return n=r.tmpl,_[r.key]=r,r.nodes=[],r.wrapped&&o(r,r.wrapped),t(i(r,null,r.tmpl(t,r)));return n?("function"==typeof s&&(s=s.call(r||{})),a&&a.wrapped&&o(a,a.wrapped),l=t.isArray(s)?t.map(s,function(t){return t?e(a,r,n,t):null}):[e(a,r,n,s)],h?t(i(r,null,l)):l):[]},tmplItem:function(e){var i;for(e instanceof t&&(e=e[0]);e&&1===e.nodeType&&!(i=t.data(e,"tmplItem"))&&(e=e.parentNode););return i||y},template:function(e,i){return i?("string"==typeof i?i=s(i):i instanceof t&&(i=i[0]||{}),i.nodeType&&(i=t.data(i,"tmpl")||t.data(i,"tmpl",s(i.innerHTML))),"string"==typeof e?t.template[e]=i:i):e?"string"!=typeof e?t.template(null,e):t.template[e]||t.template(null,v.test(e)?e:t(e)):null},encode:function(t){return(""+t).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")}}),t.extend(t.tmpl,{tag:{tmpl:{_default:{$2:"null"},open:"if($notnull_1){__=__.concat($item.nest($1,$2));}"},wrap:{_default:{$2:"null"},open:"$item.calls(__,$1,$2);__=[];",close:"call=$item.calls();__=call._.concat($item.wrap(call,__));"},each:{_default:{$2:"$index, $value"},open:"if($notnull_1){$.each($1a,function($2){with(this){",close:"}});}"},"if":{open:"if(($notnull_1) && $1a){",close:"}"},"else":{_default:{$1:"true"},open:"}else if(($notnull_1) && $1a){"},html:{open:"if($notnull_1){__.push($1a);}"},"=":{_default:{$1:"$data"},open:"if($notnull_1){__.push($.encode($1a));}"},"!":{open:""}},complete:function(){_={}},afterManip:function(e,i,n){var s=11===i.nodeType?t.makeArray(i.childNodes):1===i.nodeType?[i]:[];n.call(e,i),l(s),x++}})}(jQuery);var commonUtils={
//当前url
baseUrl:window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:""),url:{context:"online",//online线上环境，   dev开发环境
webUrl:{online:"http://www.zhongchou.com/",dev:"http://dev.web.zhongchou.com/"}},
//依据环境获取url
getUrlByContext:function(t){var e=this,i=e.url.context;return e.url[t][i]},
//统计字数
count:function(t){var e=t.jqueryEle,i=e.attr("maxlength")-e.val().length;$(".limit").text(i),e.input(function(){var t=$(this).attr("maxlength")-$(this).val().length;$(".limit").text(t)})},
// //统计字数
// count: function (opts){
//     var jqueryEle = opts.jqueryEle;
//     jqueryEle.input(function(){
//         var num = $(this).attr('maxlength') - $(this).val().length;
//         $(this).next('.limit').remove();
//         $(this).after( $('<em class="limit">'+ num +'</em>'));
//     })
// },
//元素跟随
follow:function(t){var e,i=t.offset().top,n=t.offset().left,s={position:t.css("position"),top:t.css("top"),left:t.css("left"),zIndex:t.css("zIndex")},o=$(window);o.scroll(function(){o.scrollTop()>i&&!t.hasClass("follow-hasFixed")?(e=t.clone().addClass("follow-copy").css("visibility","hidden"),t.after(e),t.css({position:"fixed",top:0,left:n,zIndex:999}).addClass("follow-hasFixed")):o.scrollTop()<=i&&t.hasClass("follow-hasFixed")&&(e.remove(),t.css(s).removeClass("follow-hasFixed"))})},
//textarea 文字识别换行
newline:function(t){return t.split("\n").join("<br />")},filterTag:function(t){/*return text.replace(/<[^<>]+>/g,'')
                .replace(/[<>]/g,'');
*/
return t.replace(/</g,"[").replace(/>/g,"]").replace(/\"/g,"”").replace(/\'/g,"’")},getQueryString:function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),i=window.location.search.substr(1).match(e);return null!=i?unescape(i[2]):null},
//textarea 可以设置最小高度 最大高度 当小于最大高度时，高度自适应，反之，出现滚动条
autoTextarea:function(t){var e=t.where,i={maxHeight:null,minHeight:null},n=$.extend({},i,t);return e.each(function(){$(this).bind("paste cut keydown keyup focus blur",function(){var t,e=this.style;if(this.style.height=n.minHeight+"px",this.scrollHeight>n.minHeight){if(n.maxHeight&&this.scrollHeight>n.maxHeight)t=n.maxHeight,e.overflowY="scroll";else{if($(this).css("padding-top"))var i=parseInt($(this).css("padding-top"));if($(this).css("padding-bottom"))var s=parseInt($(this).css("padding-bottom"));var o=i+s;t=this.scrollHeight-o,e.overflowY="hidden"}e.height=t+"px"}})})},
//统一ajax入口
ajax:function(t){t.type=t.type||"post",t.dataType=t.dataType||"json";var e=$.ajax(t);return e&&e.fail(function(){var e=t.errMsg?t.errMsg:"服务请求错误";alert(e)}),e},renderData:function(t){var e=t.data||[{}],i=t.render,n=t.where,s=t.callback,o=t.isClear;o&&n.html("");var a="";$.each(e,function(t,e){a+=i(t,e)}),$(a).appendTo(n),s&&s(n)},
//发起专用select
selectLaunchType:function(t){var e=t.jqueryEle,i=e.children(".select-click"),n=i.children("span"),s=e.children(".select-option");//点击选项
$(i).click(function(t){t.stopPropagation(),$(s).is(":visible")?$(s).slideUp():$(s).slideDown().parent().siblings().find(".select-option").slideUp()}),$(document).click(function(t){s.is(t.target)||0!==s.has(t.target).length||$(s).is(":visible")&&$(s).slideUp()}),$(s).find("li").click(function(){$(n).html($(this).find("span").html()),$(s).slideToggle(),t.callback&&t.callback.call(this)})}},DataUtil={
//统一ajax入口
ajax:function(t){t.type=t.type||"post",t.dataType=t.dataType||"json";var e=$.ajax(t);return e&&e.fail(function(){alert(t.errMsg)}),e},renderData:function(t){var e=t.data||[{}],i=t.render,n=t.where,s=t.callback,o=t.isClear;o&&n.html("");var a="";$.each(e,function(t,e){a+=i(t,e)}),$(a).appendTo(n),s&&s(n)}};!function(t){function e(){}/*var eventSystem = (function(){
        var eventStore = {};
        var eventSystem = {
            on: function(oContext,eventType,callback){
                if(!eventStore[oContext]){
                    eventStore[oContext] = {};
                };
                if(!eventStore[oContext][eventType]){
                    eventStore[oContext][eventType] = [];
                };
                eventStore[oContext][eventType].push(callback);
            },

            off: function(oContext,eventType){
                if(!eventStore[oContext]){
                    console.error('没有'+ oContext +'此宿主');
                    return;
                }
                if(!eventType){
                    delete eventStore[oContext];
                }else{
                    delete eventStore[oContext][eventType];
                };
            },

            trigger: function(oContext,eventType){
                if(!eventStore[oContext]){
                    console.error('没有'+ oContext +'此宿主');
                    return;
                }
                if(!eventStore[oContext][eventType]){
                    console.error('没有'+ eventType +'此事件');
                    return;
                }
                var callbackList = eventStore[oContext][eventType];
                for(var i=0;i<callbackList.length;i++){
                    callbackList[i]();
                }
            }
        };
        return eventSystem;
    })();
    Win.eventSystem = eventSystem;*/
var i={};e.prototype={
//订阅消息
on:function(t,e,n){i[t]||(i[t]={}),i[t][e]||(i[t][e]=[]),i[t][e].push(n)},
//卸载消息
off:function(t,e){return i[t]?void(e?delete i[t][e]:delete i[t]):void console.error("没有"+t+"此宿主")},
//发布消息
trigger:function(t,e,n){if(!i[t])return void console.error("没有"+t+"此宿主");if(!i[t][e])return void console.error("没有"+e+"此事件");for(var s=i[t][e],o=0;o<s.length;o++)s[o](n)},
//检测是否有某个消息
isInEventSystem:function(t,e){return!!i[t]&&!!i[t][e]}},t.EventSystem=e}(this),/* //使用
    document.getElementById('on').onclick = function(){
        //注册事件
        eventSystem.on('head','toGreen',function(){
            document.body.style.background = 'green';

            console.log('发布事件成功')
        });
    };

    document.getElementById('trigger').onclick = function(){
        //发布事件
        eventSystem.trigger('head','toGreen');
    };

    document.getElementById('off').onclick = function(){
        //卸载事件
        eventSystem.off('head','toGreen');
    };
*/
function(t){
//基类
function e(){
//宿主标志
this.oContext="xbn_modules"}
//继承事件系统
e.prototype=new EventSystem,
//注册模块
e.prototype.module=function(t,e){var i=this;i.on(i.oContext,t,e)},
//发布模块
e.prototype.publish=function(t,e){var i=this;i.trigger(i.oContext,t,e)},t.xbn=function(){return t.xbnCase||(t.xbnCase=new e),t.xbnCase}}(this),function(t){var e={
//请求本地模板
renderTmpl:function(t){var e=this,i=t.url,n=t.where,s=t.renderData;return $.ajax({url:i,type:"GET",async:!1,cache:!1}).then(function(t){e.renderText(t,s,n)})},
//渲染子模板
renderChildTmpl:function(t){var e=this,i=t.url,n=t.where,s=t.renderData,o=i.html();o=$.trim(o).replace(/_\[+/g,"{").replace(/\]+_/g,"}"),e.renderText(o,s,n)},
//渲染文本
renderText:function(t,e,i){
//包一层( 防止结构丢失，因为jquery.tmpl识别最外层为script标签 ，会自动去掉)
t="<div>"+t+"</div>";var n=$(t).tmpl(e);i.html(n)}};t.view=e}(xbn());var projectConfig={rootPath:""};