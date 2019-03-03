!function(){"use strict";var r="http://www.w3.org/1999/xhtml",i={svg:"http://www.w3.org/2000/svg",xhtml:r,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function o(t){var n=t+="",e=n.indexOf(":");return 0<=e&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),i.hasOwnProperty(n)?{space:i[n],local:t}:t}function u(t){var n=o(t);return(n.local?function(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}:function(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===r&&t.documentElement.namespaceURI===r?t.createElement(e):t.createElementNS(n,e)}})(n)}function n(){}function h(t){return null==t?n:function(){return this.querySelector(t)}}function f(){return[]}function t(t){return new Array(t.length)}function _(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}_.prototype={constructor:_,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};var d="$";function x(t,n,e,r,i,o){for(var u,s=0,a=n.length,c=o.length;s<c;++s)(u=n[s])?(u.__data__=o[s],r[s]=u):e[s]=new _(t,o[s]);for(;s<a;++s)(u=n[s])&&(i[s]=u)}function b(t,n,e,r,i,o,u){var s,a,c,l={},h=n.length,f=o.length,p=new Array(h);for(s=0;s<h;++s)(a=n[s])&&(p[s]=c=d+u.call(a,a.__data__,s,n),c in l?i[s]=a:l[c]=a);for(s=0;s<f;++s)(a=l[c=d+u.call(t,o[s],s,o)])?((r[s]=a).__data__=o[s],l[c]=null):e[s]=new _(t,o[s]);for(s=0;s<h;++s)(a=n[s])&&l[p[s]]===a&&(i[s]=a)}function p(t,n){return t<n?-1:n<t?1:n<=t?0:NaN}function s(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function a(t){return t.trim().split(/^|\s+/)}function c(t){return t.classList||new e(t)}function e(t){this._node=t,this._names=a(t.getAttribute("class")||"")}function l(t,n){for(var e=c(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function v(t,n){for(var e=c(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function y(){this.textContent=""}function m(){this.innerHTML=""}function g(){this.nextSibling&&this.parentNode.appendChild(this)}function w(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function A(){return null}function S(){var t=this.parentNode;t&&t.removeChild(this)}function E(){return this.parentNode.insertBefore(this.cloneNode(!1),this.nextSibling)}function N(){return this.parentNode.insertBefore(this.cloneNode(!0),this.nextSibling)}e.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);0<=n&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return 0<=this._names.indexOf(t)}};var C={};"undefined"!=typeof document&&("onmouseenter"in document.documentElement||(C={mouseenter:"mouseover",mouseleave:"mouseout"}));function L(e,t,n){return e=P(e,t,n),function(t){var n=t.relatedTarget;n&&(n===this||8&n.compareDocumentPosition(this))||e.call(this,t)}}function P(n,e,r){return function(t){try{n.call(this,this.__data__,e,r)}finally{}}}function B(o){return function(){var t=this.__on;if(t){for(var n,e=0,r=-1,i=t.length;e<i;++e)n=t[e],o.type&&n.type!==o.type||n.name!==o.name?t[++r]=n:this.removeEventListener(n.type,n.listener,n.capture);++r?t.length=r:delete this.__on}}}function D(a,c,l){var h=C.hasOwnProperty(a.type)?L:P;return function(t,n,e){var r,i=this.__on,o=h(c,n,e);if(i)for(var u=0,s=i.length;u<s;++u)if((r=i[u]).type===a.type&&r.name===a.name)return this.removeEventListener(r.type,r.listener,r.capture),this.addEventListener(r.type,r.listener=o,r.capture=l),void(r.value=c);this.addEventListener(a.type,o,l),r={type:a.type,name:a.name,value:c,listener:o,capture:l},i?i.push(r):this.__on=[r]}}function q(t,n,e){var r=s(t),i=r.CustomEvent;"function"==typeof i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}var O=[null];function M(t,n){this._groups=t,this._parents=n}M.prototype=function(){return new M([[document.documentElement]],O)}.prototype={constructor:M,select:function(t){"function"!=typeof t&&(t=h(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,u,s=n[i],a=s.length,c=r[i]=new Array(a),l=0;l<a;++l)(o=s[l])&&(u=t.call(o,o.__data__,l,s))&&("__data__"in o&&(u.__data__=o.__data__),c[l]=u);return new M(r,this._parents)},selectAll:function(t){var n;"function"!=typeof t&&(t=null==(n=t)?f:function(){return this.querySelectorAll(n)});for(var e=this._groups,r=e.length,i=[],o=[],u=0;u<r;++u)for(var s,a=e[u],c=a.length,l=0;l<c;++l)(s=a[l])&&(i.push(t.call(s,s.__data__,l,a)),o.push(s));return new M(i,o)},filter:function(t){var n;"function"!=typeof t&&(n=t,t=function(){return this.matches(n)});for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o)for(var u,s=e[o],a=s.length,c=i[o]=[],l=0;l<a;++l)(u=s[l])&&t.call(u,u.__data__,l,s)&&c.push(u);return new M(i,this._parents)},data:function(t,n){if(!t)return _=new Array(this.size()),l=-1,this.each(function(t){_[++l]=t}),_;var e,r=n?b:x,i=this._parents,o=this._groups;"function"!=typeof t&&(e=t,t=function(){return e});for(var u=o.length,s=new Array(u),a=new Array(u),c=new Array(u),l=0;l<u;++l){var h=i[l],f=o[l],p=f.length,_=t.call(h,h&&h.__data__,l,i),d=_.length,v=a[l]=new Array(d),y=s[l]=new Array(d);r(h,f,v,y,c[l]=new Array(p),_,n);for(var m,g,w=0,A=0;w<d;++w)if(m=v[w]){for(A<=w&&(A=w+1);!(g=y[A])&&++A<d;);m._next=g||null}}return(s=new M(s,i))._enter=a,s._exit=c,s},enter:function(){return new M(this._enter||this._groups.map(t),this._parents)},exit:function(){return new M(this._exit||this._groups.map(t),this._parents)},join:function(t,n,e){var r=this.enter(),i=this,o=this.exit();return r="function"==typeof t?t(r):r.append(t+""),null!=n&&(i=n(i)),null==e?o.remove():e(o),r&&i?r.merge(i).order():i},merge:function(t){for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),u=new Array(r),s=0;s<o;++s)for(var a,c=n[s],l=e[s],h=c.length,f=u[s]=new Array(h),p=0;p<h;++p)(a=c[p]||l[p])&&(f[p]=a);for(;s<r;++s)u[s]=n[s];return new M(u,this._parents)},order:function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],o=i.length-1,u=i[o];0<=--o;)(r=i[o])&&(u&&4^r.compareDocumentPosition(u)&&u.parentNode.insertBefore(r,u),u=r);return this},sort:function(e){function t(t,n){return t&&n?e(t.__data__,n.__data__):!t-!n}e||(e=p);for(var n=this._groups,r=n.length,i=new Array(r),o=0;o<r;++o){for(var u,s=n[o],a=s.length,c=i[o]=new Array(a),l=0;l<a;++l)(u=s[l])&&(c[l]=u);c.sort(t)}return new M(i,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){var t=new Array(this.size()),n=-1;return this.each(function(){t[++n]=this}),t},node:function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var u=r[i];if(u)return u}return null},size:function(){var t=0;return this.each(function(){++t}),t},empty:function(){return!this.node()},each:function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,o=n[e],u=0,s=o.length;u<s;++u)(i=o[u])&&t.call(i,i.__data__,u,o);return this},attr:function(t,n){var e=o(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?function(t){return function(){this.removeAttributeNS(t.space,t.local)}}:function(t){return function(){this.removeAttribute(t)}}:"function"==typeof n?e.local?function(n,e){return function(){var t=e.apply(this,arguments);null==t?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,t)}}:function(n,e){return function(){var t=e.apply(this,arguments);null==t?this.removeAttribute(n):this.setAttribute(n,t)}}:e.local?function(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}:function(t,n){return function(){this.setAttribute(t,n)}})(e,n))},style:function(t,n,e){return 1<arguments.length?this.each((null==n?function(t){return function(){this.style.removeProperty(t)}}:"function"==typeof n?function(n,e,r){return function(){var t=e.apply(this,arguments);null==t?this.style.removeProperty(n):this.style.setProperty(n,t,r)}}:function(t,n,e){return function(){this.style.setProperty(t,n,e)}})(t,n,null==e?"":e)):(r=this.node(),i=t,r.style.getPropertyValue(i)||s(r).getComputedStyle(r,null).getPropertyValue(i));var r,i},property:function(t,n){return 1<arguments.length?this.each((null==n?function(t){return function(){delete this[t]}}:"function"==typeof n?function(n,e){return function(){var t=e.apply(this,arguments);null==t?delete this[n]:this[n]=t}}:function(t,n){return function(){this[t]=n}})(t,n)):this.node()[t]},classed:function(t,n){var e=a(t+"");if(arguments.length<2){for(var r=c(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each(("function"==typeof n?function(t,n){return function(){(n.apply(this,arguments)?l:v)(this,t)}}:n?function(t){return function(){l(this,t)}}:function(t){return function(){v(this,t)}})(e,n))},text:function(t){return arguments.length?this.each(null==t?y:("function"==typeof t?function(n){return function(){var t=n.apply(this,arguments);this.textContent=null==t?"":t}}:function(t){return function(){this.textContent=t}})(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?m:("function"==typeof t?function(n){return function(){var t=n.apply(this,arguments);this.innerHTML=null==t?"":t}}:function(t){return function(){this.innerHTML=t}})(t)):this.node().innerHTML},raise:function(){return this.each(g)},lower:function(){return this.each(w)},append:function(t){var n="function"==typeof t?t:u(t);return this.select(function(){return this.appendChild(n.apply(this,arguments))})},insert:function(t,n){var e="function"==typeof t?t:u(t),r=null==n?A:"function"==typeof n?n:h(n);return this.select(function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)})},remove:function(){return this.each(S)},clone:function(t){return this.select(t?N:E)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,n,e){var r,i,o=(t+"").trim().split(/^|\s+/).map(function(t){var n="",e=t.indexOf(".");return 0<=e&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}}),u=o.length;if(!(arguments.length<2)){for(s=n?D:B,null==e&&(e=!1),r=0;r<u;++r)this.each(s(o[r],n,e));return this}var s=this.node().__on;if(s)for(var a,c=0,l=s.length;c<l;++c)for(r=0,a=s[c];r<u;++r)if((i=o[r]).type===a.type&&i.name===a.name)return a.value},dispatch:function(t,n){return this.each(("function"==typeof n?function(t,n){return function(){return q(this,t,n.apply(this,arguments))}}:function(t,n){return function(){return q(this,t,n)}})(t,n))}},window.addEventListener("load",function(){var t;(t="#chart","string"==typeof t?new M([[document.querySelector(t)]],[document.documentElement]):new M([[t]],O)).append("svg").attr("width",1040).attr("height",520)})}();
