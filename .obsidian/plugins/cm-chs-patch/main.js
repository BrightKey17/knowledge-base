/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source visit the plugins github repository
*/

"use strict";var Ee=Object.defineProperty;var Lt=Object.getOwnPropertyDescriptor;var Ht=Object.getOwnPropertyNames;var Ft=Object.prototype.hasOwnProperty;var Wt=(i,r)=>{for(var e in r)Ee(i,e,{get:r[e],enumerable:!0})},It=(i,r,e,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let t of Ht(r))!Ft.call(i,t)&&t!==e&&Ee(i,t,{get:()=>r[t],enumerable:!(n=Lt(r,t))||n.enumerable});return i};var jt=i=>It(Ee({},"__esModule",{value:!0}),i);var gn={};Wt(gn,{default:()=>Ae});module.exports=jt(gn);var Se=require("obsidian");var nt=require("obsidian");var zt=/[\u4e00-\u9fff]/,j=i=>zt.test(i);var et={".":"\u3002",",":"\uFF0C",":":"\uFF1A",";":"\uFF1B","?":"\uFF1F","\\":"\u3001",'"':"\u201C","<":"\u300A",">":"\u300B","[":"\u300C","]":"\u300D","(":"\uFF08",")":"\uFF09"};function tt({vim:i,CodeMirror:r,cut:e}){let n=i.getVimGlobalState_(),t=r.Pos;var o=[r.isWordChar,function(f){return f&&!r.isWordChar(f)&&!/\s/.test(f)}],l=[function(f){return/\S/.test(f)}];function s(f,b){n.lastCharacterSearch.increment=f,n.lastCharacterSearch.forward=b.forward,n.lastCharacterSearch.selectedCharacter=b.selectedCharacter}function a(f,b,T,x,y){var g;return x?(g=b.indexOf(T,f+1),g!=-1&&!y&&(g-=1)):(g=b.lastIndexOf(T,f-1),g!=-1&&!y&&(g+=1)),g}function u(f){return new t(f.line,f.ch)}function c(f,b){return b>=f.firstLine()&&b<=f.lastLine()}function d(f,b){return f.getLine(b).length}function m(f,b,T,x,y,g){var h=u(b),w=[];(x&&!y||!x&&y)&&T++;for(var R=!(x&&y),D=0;D<T;D++){var A=C(f,b,x,g,R);if(!A){var _=d(f,f.lastLine());w.push(x?{line:f.lastLine(),from:_,to:_}:{line:0,from:0,to:0});break}w.push(A),b=new t(A.line,x?A.to-1:A.from)}var N=w.length!=T,P=w[0],S=w.pop();return x&&!y?(!N&&(P.from!=h.ch||P.line!=h.line)&&(S=w.pop()),new t(S.line,S.from)):x&&y?new t(S.line,S.to-1):!x&&y?(!N&&(P.to!=h.ch||P.line!=h.line)&&(S=w.pop()),new t(S.line,S.to)):new t(S.line,S.from)}function p(f,b,T,x){let y=f.getCursor(),g=y.ch,h;for(let w=0;w<b;w++){let R=f.getLine(y.line);if(h=a(g,R,x,T,!0),h=I(x,g,R,T,h),h==-1)return null;g=h}return new t(f.getCursor().line,h)}function C(f,b,T,x,y){var g=b.line,h=b.ch,w=f.getLine(g),R=T?1:-1,D=x?l:o;if(y&&w==""){if(g+=R,w=f.getLine(g),!c(f,g))return null;h=T?0:w.length}for(;;){if(y&&w=="")return{from:0,to:0,line:g};for(var A=R>0?w.length:-1,_=A,N=A;h!=A;){var P=!1;let Pt=Math.max(h-6,0),Ot=Math.min(h+6,w.length),Vt=w.slice(Pt,Ot);if(j(Vt))for(let $=0;$<D.length&&!P;++$){if(!D[$](w.charAt(h)))continue;_=h;let Ze=e(w),J;for(;h!=A;)if(J=L(Ze,h),!!D[$](J.text)){if(T){h=J.end,h=Math.min(h,A);break}J=L(Ze,Math.max(--h,0)),D[$](J.text)&&(h=J.begin-1,h=Math.max(h,A));break}N=h,P=_!=N;let Bt=T?Math.min(_+R,A):Math.max(_+R,A);if(!(_==b.ch&&g==b.line&&N==Bt))return{from:Math.min(_,N+1),to:Math.max(_,N),line:g}}for(var S=0;S<D.length&&!P;++S)if(D[S](w.charAt(h))){for(_=h;h!=A&&D[S](w.charAt(h));)h+=R;if(N=h,P=_!=N,_==b.ch&&g==b.line&&N==_+R)continue;return{from:Math.min(_,N+1),to:Math.max(_,N),line:g}}P||(h+=R)}if(g+=R,!c(f,g))return null;w=f.getLine(g),h=R>0?0:w.length}}function I(f,b,T,x,y){if(f.length==1&&et[f]!=null){let g=et[f],h=a(b,T,g,x,!0);return h==-1?y:y==-1?h:x?Math.min(y,h):Math.max(y,h)}return y}function L(f,b){let T=0,x=0;for(var y=0;y<f.length;y++){var g=f[y];if(x=T+g.length,b>=T&&b<x)break;T+=g.length}return{index:y,text:g,begin:T,end:x}}return{moveToCharacter:p,recordLastCharacterSearch:s,moveToWord:m}}var re=class extends nt.Component{constructor(r){super(),this.plugin=r,this.utils=tt({CodeMirror:window.CodeMirror,vim:this.vim,cut:r.cut.bind(r)})}get vim(){return window.CodeMirrorAdapter?.Vim}get enabled(){return this.plugin.settings.useJieba||window.Intl?.Segmenter}onload(){!this.vim||(this.enabled&&this.plugin.settings.moveByChineseWords&&this.enableMoveByChineseWords(this.vim),this.enabled&&this.plugin.settings.moveTillChinesePunctuation&&this.enableMoveTillChinesePunctuation(this.vim))}enableMoveByChineseWords(r){r.defineMotion("moveByWords",(e,n,t)=>this.utils.moveToWord(e,n,t.repeat,!!t.forward,!!t.wordEnd,!!t.bigWord))}enableMoveTillChinesePunctuation(r){let{recordLastCharacterSearch:e,moveToCharacter:n}=this.utils;r.defineMotion("moveToCharacter",(t,o,l)=>{let s=l.repeat;return e(0,l),n(t,s,l.forward,l.selectedCharacter)||o}),r.defineMotion("moveTillCharacter",(t,o,l)=>{let s=l.repeat,a=n(t,s,l.forward,l.selectedCharacter),u=l.forward?-1:1;return e(u,l),a?(a.ch+=u,a):null}),r.defineMotion("repeatLastCharacterSearch",(t,o,l)=>{let a=r.getVimGlobalState_().lastCharacterSearch,u=l.repeat,c=l.forward===a.forward,d=(a.increment?1:0)*(c?-1:1);t.moveH(-d,"char"),l.inclusive=!!c;let m=n(t,u,c,a.selectedCharacter);return m?(m.ch+=d,m):(t.moveH(d,"char"),o)})}};var he=require("@codemirror/state"),Tt=require("@codemirror/view");function Re(i,r){let e=Object.keys(r).map(n=>Gt(i,n,r[n]));return e.length===1?e[0]:function(){e.forEach(n=>n())}}function Gt(i,r,e){let n=i[r],t=i.hasOwnProperty(r),o=e(n);return n&&Object.setPrototypeOf(o,n),Object.setPrototypeOf(l,o),i[r]=l,s;function l(...a){return o===n&&i[r]===l&&s(),o.apply(this,a)}function s(){i[r]===l&&(t?i[r]=n:delete i[r]),o!==n&&(o=n,Object.setPrototypeOf(l,n||Function))}}var fe=require("@codemirror/state"),yt=require("@codemirror/view");var rt=require("@codemirror/state"),Jt=(i,r,e,n)=>{if(!e)return null;let{from:t,to:o}=e,l=n.doc.sliceString(t,o),s=i.getSegRangeFromCursor(r,{from:t,to:o,text:l});return s?rt.EditorSelection.range(s.from,s.to):null},ie=Jt;function oe(i){return i.nodeType==3?De(i,0,i.nodeValue.length).getClientRects():i.nodeType==1?i.getClientRects():[]}function Ne(i){for(var r=0;;r++)if(i=i.previousSibling,!i)return r}function ot(i){return i.nodeType==3?i.nodeValue.length:i.childNodes.length}var ke={left:0,right:0,top:0,bottom:0};function ve(i,r){let e=r?i.left:i.right;return{left:e,right:e,top:i.top,bottom:i.bottom}}var it;function De(i,r,e=r){let n=it||(it=document.createRange());return n.setEnd(i,e),n.setStart(i,r),n}function le(i){for(;i.attributes.length;)i.removeAttributeNode(i.attributes[0])}var v=class{constructor(r,e,n=!0){this.node=r;this.offset=e;this.precise=n}static before(r,e){return new v(r.parentNode,Ne(r),e)}static after(r,e){return new v(r.parentNode,Ne(r)+1,e)}},se=[],E=class{constructor(){this.parent=null;this.dom=null;this.dirty=2}get editorView(){if(!this.parent)throw new Error("Accessing view in orphan content view");return this.parent.editorView}get overrideDOMText(){return null}get posAtStart(){return this.parent?this.parent.posBefore(this):0}get posAtEnd(){return this.posAtStart+this.length}posBefore(r){let e=this.posAtStart;for(let n of this.children){if(n==r)return e;e+=n.length+n.breakAfter}throw new RangeError("Invalid child in posBefore")}posAfter(r){return this.posBefore(r)+r.length}coordsAt(r,e){return null}sync(r){if(this.dirty&2){let e=this.dom,n=null,t;for(let o of this.children){if(o.dirty){if(!o.dom&&(t=n?n.nextSibling:e.firstChild)){let l=E.get(t);(!l||!l.parent&&l.canReuseDOM(o))&&o.reuseDOM(t)}o.sync(r),o.dirty=0}if(t=n?n.nextSibling:e.firstChild,r&&!r.written&&r.node==e&&t!=o.dom&&(r.written=!0),o.dom.parentNode==e)for(;t&&t!=o.dom;)t=lt(t);else e.insertBefore(o.dom,t);n=o.dom}for(t=n?n.nextSibling:e.firstChild,t&&r&&r.node==e&&(r.written=!0);t;)t=lt(t)}else if(this.dirty&1)for(let e of this.children)e.dirty&&(e.sync(r),e.dirty=0)}reuseDOM(r){}localPosFromDOM(r,e){let n;if(r==this.dom)n=this.dom.childNodes[e];else{let t=ot(r)==0?0:e==0?-1:1;for(;;){let o=r.parentNode;if(o==this.dom)break;t==0&&o.firstChild!=o.lastChild&&(r==o.firstChild?t=-1:t=1),r=o}t<0?n=r:n=r.nextSibling}if(n==this.dom.firstChild)return 0;for(;n&&!E.get(n);)n=n.nextSibling;if(!n)return this.length;for(let t=0,o=0;;t++){let l=this.children[t];if(l.dom==n)return o;o+=l.length+l.breakAfter}}domBoundsAround(r,e,n=0){let t=-1,o=-1,l=-1,s=-1;for(let a=0,u=n,c=n;a<this.children.length;a++){let d=this.children[a],m=u+d.length;if(u<r&&m>e)return d.domBoundsAround(r,e,u);if(m>=r&&t==-1&&(t=a,o=u),u>e&&d.dom.parentNode==this.dom){l=a,s=c;break}c=m,u=m+d.breakAfter}return{from:o,to:s<0?n+this.length:s,startDOM:(t?this.children[t-1].dom.nextSibling:null)||this.dom.firstChild,endDOM:l<this.children.length&&l>=0?this.children[l].dom:null}}markDirty(r=!1){this.dirty|=2,this.markParentsDirty(r)}markParentsDirty(r){for(let e=this.parent;e;e=e.parent){if(r&&(e.dirty|=2),e.dirty&1)return;e.dirty|=1,r=!1}}setParent(r){this.parent!=r&&(this.parent=r,this.dirty&&this.markParentsDirty(!0))}setDOM(r){this.dom&&(this.dom.cmView=null),this.dom=r,r.cmView=this}get rootView(){for(let r=this;;){let e=r.parent;if(!e)return r;r=e}}replaceChildren(r,e,n=se){this.markDirty();for(let t=r;t<e;t++){let o=this.children[t];o.parent==this&&o.destroy()}this.children.splice(r,e-r,...n);for(let t=0;t<n.length;t++)n[t].setParent(this)}ignoreMutation(r){return!1}ignoreEvent(r){return!1}childCursor(r=this.length){return new Pe(this.children,r,this.children.length)}childPos(r,e=1){return this.childCursor().findPos(r,e)}toString(){let r=this.constructor.name.replace("View","");return r+(this.children.length?"("+this.children.join()+")":this.length?"["+(r=="Text"?this.text:this.length)+"]":"")+(this.breakAfter?"#":"")}static get(r){return r.cmView}get isEditable(){return!0}merge(r,e,n,t,o,l){return!1}become(r){return!1}canReuseDOM(r){return r.constructor==this.constructor}getSide(){return 0}destroy(){this.parent=null}};E.prototype.breakAfter=0;function lt(i){let r=i.nextSibling;return i.parentNode.removeChild(i),r}var Pe=class{constructor(r,e,n){this.children=r;this.pos=e;this.i=n;this.off=0}findPos(r,e=1){for(;;){if(r>this.pos||r==this.pos&&(e>0||this.i==0||this.children[this.i-1].breakAfter))return this.off=r-this.pos,this;let n=this.children[--this.i];this.pos-=n.length+n.breakAfter}}};function qt(i,r,e,n,t,o,l,s,a){let{children:u}=i,c=u.length?u[r]:null,d=o.length?o[o.length-1]:null,m=d?d.breakAfter:l;if(!(r==n&&c&&!l&&!m&&o.length<2&&c.merge(e,t,o.length?d:null,e==0,s,a))){if(n<u.length){let p=u[n];p&&t<p.length?(r==n&&(p=p.split(t),t=0),!m&&d&&p.merge(0,t,d,!0,0,a)?o[o.length-1]=p:(t&&p.merge(0,t,null,!1,0,a),o.push(p))):p?.breakAfter&&(d?d.breakAfter=1:l=1),n++}for(c&&(c.breakAfter=l,e>0&&(!l&&o.length&&c.merge(e,c.length,o[0],!1,s,0)?c.breakAfter=o.shift().breakAfter:(e<c.length||c.children.length&&c.children[c.children.length-1].length==0)&&c.merge(e,c.length,null,!1,s,0),r++));r<n&&o.length;)if(u[n-1].become(o[o.length-1]))n--,o.pop(),a=o.length?0:s;else if(u[r].become(o[0]))r++,o.shift(),s=o.length?0:a;else break;!o.length&&r&&n<u.length&&!u[r-1].breakAfter&&u[n].merge(0,0,u[r-1],!1,s,a)&&r--,(r<n||o.length)&&i.replaceChildren(r,n,o)}}function ae(i,r,e,n,t,o){let l=i.childCursor(),{i:s,off:a}=l.findPos(e,1),{i:u,off:c}=l.findPos(r,-1),d=r-e;for(let m of n)d+=m.length;i.length+=d,qt(i,u,c,s,a,n,0,t,o)}var ce=require("@codemirror/state");var k=typeof navigator<"u"?navigator:{userAgent:"",vendor:"",platform:""},Ve=typeof document<"u"?document:{documentElement:{style:{}}},Be=/Edge\/(\d+)/.exec(k.userAgent),ct=/MSIE \d/.test(k.userAgent),Le=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(k.userAgent),ue=!!(ct||Le||Be),st=!ue&&/gecko\/(\d+)/i.test(k.userAgent),Oe=!ue&&/Chrome\/(\d+)/.exec(k.userAgent),at="webkitFontSmoothing"in Ve.documentElement.style,ft=!ue&&/Apple Computer/.test(k.vendor),ut=ft&&(/Mobile\/\w+/.test(k.userAgent)||k.maxTouchPoints>2),q={mac:ut||/Mac/.test(k.platform),windows:/Win/.test(k.platform),linux:/Linux|X11/.test(k.platform),ie:ue,ie_version:ct?Ve.documentMode||6:Le?+Le[1]:Be?+Be[1]:0,gecko:st,gecko_version:st?+(/Firefox\/(\d+)/.exec(k.userAgent)||[0,0])[1]:0,chrome:!!Oe,chrome_version:Oe?+Oe[1]:0,ios:ut,android:/Android\b/.test(k.userAgent),webkit:at,safari:ft,webkit_version:at?+(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent)||[0,0])[1]:0,tabSize:Ve.documentElement.style.tabSize!=null?"tab-size":"-moz-tab-size"};var Ut=256,O=class extends E{constructor(e){super();this.text=e}get length(){return this.text.length}createDOM(e){this.setDOM(e||document.createTextNode(this.text))}sync(e){this.dom||this.createDOM(),this.dom.nodeValue!=this.text&&(e&&e.node==this.dom&&(e.written=!0),this.dom.nodeValue=this.text)}reuseDOM(e){e.nodeType==3&&this.createDOM(e)}merge(e,n,t){return t&&(!(t instanceof O)||this.length-(n-e)+t.length>Ut)?!1:(this.text=this.text.slice(0,e)+(t?t.text:"")+this.text.slice(n),this.markDirty(),!0)}split(e){let n=new O(this.text.slice(e));return this.text=this.text.slice(0,e),this.markDirty(),n}localPosFromDOM(e,n){return e==this.dom?n:n?this.text.length:0}domAtPos(e){return new v(this.dom,e)}domBoundsAround(e,n,t){return{from:t,to:t+this.length,startDOM:this.dom,endDOM:this.dom.nextSibling}}coordsAt(e,n){return Yt(this.dom,e,n)}},V=class extends E{constructor(e,n=[],t=0){super();this.mark=e;this.children=n;this.length=t;for(let o of n)o.setParent(this)}setAttrs(e){if(le(e),this.mark.class&&(e.className=this.mark.class),this.mark.attrs)for(let n in this.mark.attrs)e.setAttribute(n,this.mark.attrs[n]);return e}reuseDOM(e){e.nodeName==this.mark.tagName.toUpperCase()&&(this.setDOM(e),this.dirty|=6)}sync(e){this.dom?this.dirty&4&&this.setAttrs(this.dom):this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))),super.sync(e)}merge(e,n,t,o,l,s){return t&&(!(t instanceof V&&t.mark.eq(this.mark))||e&&l<=0||n<this.length&&s<=0)?!1:(ae(this,e,n,t?t.children:[],l-1,s-1),this.markDirty(),!0)}split(e){let n=[],t=0,o=-1,l=0;for(let a of this.children){let u=t+a.length;u>e&&n.push(t<e?a.split(e-t):a),o<0&&t>=e&&(o=l),t=u,l++}let s=this.length-e;return this.length=e,o>-1&&(this.children.length=o,this.markDirty()),new V(this.mark,n,s)}domAtPos(e){return He(this,e)}coordsAt(e,n){return We(this,e,n)}};function Yt(i,r,e){let n=i.nodeValue.length;r>n&&(r=n);let t=r,o=r,l=0;r==0&&e<0||r==n&&e>=0?q.chrome||q.gecko||(r?(t--,l=1):o<n&&(o++,l=-1)):e<0?t--:o<n&&o++;let s=De(i,t,o).getClientRects();if(!s.length)return ke;let a=s[(l?l<0:e>=0)?0:s.length-1];return q.safari&&!l&&a.width==0&&(a=Array.prototype.find.call(s,u=>u.width)||a),l?ve(a,l<0):a||null}var F=class extends E{constructor(e,n,t){super();this.widget=e;this.length=n;this.side=t;this.prevWidget=null}static create(e,n,t){return new(e.customView||F)(e,n,t)}split(e){let n=F.create(this.widget,this.length-e,this.side);return this.length-=e,n}sync(){(!this.dom||!this.widget.updateDOM(this.dom))&&(this.dom&&this.prevWidget&&this.prevWidget.destroy(this.dom),this.prevWidget=null,this.setDOM(this.widget.toDOM(this.editorView)),this.dom.contentEditable="false")}getSide(){return this.side}merge(e,n,t,o,l,s){return t&&(!(t instanceof F)||!this.widget.compare(t.widget)||e>0&&l<=0||n<this.length&&s<=0)?!1:(this.length=e+(t?t.length:0)+(this.length-n),!0)}become(e){return e.length==this.length&&e instanceof F&&e.side==this.side&&this.widget.constructor==e.widget.constructor?(this.widget.eq(e.widget)||this.markDirty(!0),this.dom&&!this.prevWidget&&(this.prevWidget=this.widget),this.widget=e.widget,!0):!1}ignoreMutation(){return!0}ignoreEvent(e){return this.widget.ignoreEvent(e)}get overrideDOMText(){if(this.length==0)return ce.Text.empty;let e=this;for(;e.parent;)e=e.parent;let n=e.editorView,t=n&&n.state.doc,o=this.posAtStart;return t?t.slice(o,o+this.length):ce.Text.empty}domAtPos(e){return e==0?v.before(this.dom):v.after(this.dom,e==this.length)}domBoundsAround(){return null}coordsAt(e,n){let t=this.dom.getClientRects(),o=null;if(!t.length)return ke;for(let l=e>0?t.length-1:0;o=t[l],!(e>0?l==0:l==t.length-1||o.top<o.bottom);l+=e>0?-1:1);return ve(o,this.side>0)}get isEditable(){return!1}destroy(){super.destroy(),this.dom&&this.widget.destroy(this.dom)}};var K=class extends E{constructor(e){super();this.side=e}get length(){return 0}merge(){return!1}become(e){return e instanceof K&&e.side==this.side}split(){return new K(this.side)}sync(){if(!this.dom){let e=document.createElement("img");e.className="cm-widgetBuffer",e.setAttribute("aria-hidden","true"),this.setDOM(e)}}getSide(){return this.side}domAtPos(e){return v.before(this.dom)}localPosFromDOM(){return 0}domBoundsAround(){return null}coordsAt(e){let n=this.dom.getBoundingClientRect(),t=Xt(this,this.side>0?-1:1);return t&&t.top<n.bottom&&t.bottom>n.top?{left:n.left,right:n.right,top:t.top,bottom:t.bottom}:n}get overrideDOMText(){return ce.Text.empty}};O.prototype.children=F.prototype.children=K.prototype.children=se;function Xt(i,r){let e=i.parent,n=e?e.children.indexOf(i):-1;for(;e&&n>=0;)if(r<0?n>0:n<e.children.length){let t=e.children[n+r];if(t instanceof O){let o=t.coordsAt(r<0?t.length:0,r);if(o)return o}n+=r}else if(e instanceof V&&e.parent)n=e.parent.children.indexOf(e)+(r<0?0:1),e=e.parent;else{let t=e.dom.lastChild;if(t&&t.nodeName=="BR")return t.getClientRects()[0];break}}function He(i,r){let e=i.dom,{children:n}=i,t=0;for(let o=0;t<n.length;t++){let l=n[t],s=o+l.length;if(!(s==o&&l.getSide()<=0)){if(r>o&&r<s&&l.dom.parentNode==e)return l.domAtPos(r-o);if(r<=o)break;o=s}}for(let o=t;o>0;o--){let l=n[o-1];if(l.dom.parentNode==e)return l.domAtPos(l.length)}for(let o=t;o<n.length;o++){let l=n[o];if(l.dom.parentNode==e)return l.domAtPos(0)}return new v(e,0)}function Fe(i,r,e){let n,{children:t}=i;e>0&&r instanceof V&&t.length&&(n=t[t.length-1])instanceof V&&n.mark.eq(r.mark)?Fe(n,r.children[0],e-1):(t.push(r),r.setParent(i)),i.length+=r.length}function We(i,r,e){return i.children.length?(e<=0?dt:ht)(i,r):$t(i)}function dt(i,r){let e=null,n=-1;function t(o,l){for(let s=0,a=0;s<o.children.length&&a<=l;s++){let u=o.children[s],c=a+u.length;if(c>=l){if(u.children.length){if(t(u,l-a))return!0}else if(c>=l){if(c==l&&u.getSide()>0)return!0;e=u,n=l-a}}a=c}}return t(i,r),e?e.coordsAt(Math.max(0,n),-1):ht(i,r)}function ht(i,r){let e=null,n=-1;function t(o,l){for(let s=o.children.length-1,a=o.length;s>=0&&a>=l;s--){let u=o.children[s];if(a-=u.length,a<=l){if(u.children.length){if(t(u,l-a))return!0}else if(a<=l){if(a==l&&u.getSide()<0)return!0;e=u,n=l-a}}}}return t(i,r),e?e.coordsAt(Math.max(0,n),1):dt(i,r)}function $t(i){let r=i.dom.lastChild;if(!r)return i.dom.getBoundingClientRect();let e=oe(r);return e[e.length-1]||null}function Ie(i,r){for(let e in i)e=="class"&&r.class?r.class+=" "+i.class:e=="style"&&r.style?r.style+=";"+i.style:r[e]=i[e];return r}function mt(i,r){if(i==r)return!0;if(!i||!r)return!1;let e=Object.keys(i),n=Object.keys(r);if(e.length!=n.length)return!1;for(let t of e)if(n.indexOf(t)==-1||i[t]!==r[t])return!1;return!0}function gt(i,r,e){let n=null;if(r)for(let t in r)e&&t in e||i.removeAttribute(n=t);if(e)for(let t in e)r&&r[t]==e[t]||i.setAttribute(n=t,e[t]);return!!n}var Qt=require("@codemirror/state"),W=class extends E{constructor(){super(...arguments);this.children=[];this.length=0;this.prevAttrs=void 0;this.attrs=null;this.breakAfter=0}merge(e,n,t,o,l,s){if(t){if(!(t instanceof W))return!1;this.dom||t.transferDOM(this)}return o&&this.setDeco(t?t.attrs:null),ae(this,e,n,t?t.children:[],l,s),!0}split(e){let n=new W;if(n.breakAfter=this.breakAfter,this.length==0)return n;let{i:t,off:o}=this.childPos(e);o&&(n.append(this.children[t].split(o),0),this.children[t].merge(o,this.children[t].length,null,!1,0,0),t++);for(let l=t;l<this.children.length;l++)n.append(this.children[l],0);for(;t>0&&this.children[t-1].length==0;)this.children[--t].destroy();return this.children.length=t,this.markDirty(),this.length=e,n}transferDOM(e){!this.dom||(this.markDirty(),e.setDOM(this.dom),e.prevAttrs=this.prevAttrs===void 0?this.attrs:this.prevAttrs,this.prevAttrs=void 0,this.dom=null)}setDeco(e){mt(this.attrs,e)||(this.dom&&(this.prevAttrs=this.attrs,this.markDirty()),this.attrs=e)}append(e,n){Fe(this,e,n)}addLineDeco(e){let n=e.spec.attributes,t=e.spec.class;n&&(this.attrs=Ie(n,this.attrs||{})),t&&(this.attrs=Ie({class:t},this.attrs||{}))}domAtPos(e){return He(this,e)}reuseDOM(e){e.nodeName=="DIV"&&(this.setDOM(e),this.dirty|=6)}sync(e){this.dom?this.dirty&4&&(le(this.dom),this.dom.className="cm-line",this.prevAttrs=this.attrs?null:void 0):(this.setDOM(document.createElement("div")),this.dom.className="cm-line",this.prevAttrs=this.attrs?null:void 0),this.prevAttrs!==void 0&&(gt(this.dom,this.prevAttrs,this.attrs),this.dom.classList.add("cm-line"),this.prevAttrs=void 0),super.sync(e);let n=this.dom.lastChild;for(;n&&E.get(n)instanceof V;)n=n.lastChild;if(!n||!this.length||n.nodeName!="BR"&&E.get(n)?.isEditable==!1&&(!q.ios||!this.children.some(t=>t instanceof O))){let t=document.createElement("BR");t.cmIgnore=!0,this.dom.appendChild(t)}}measureTextSize(){if(this.children.length==0||this.length>20)return null;let e=0;for(let n of this.children){if(!(n instanceof O)||/[^ -~]/.test(n.text))return null;let t=oe(n.dom);if(t.length!=1)return null;e+=t[0].width}return e?{lineHeight:this.dom.getBoundingClientRect().height,charWidth:e/this.length}:null}coordsAt(e,n){return We(this,e,n)}become(e){return!1}get type(){return 0}static find(e,n){for(let t=0,o=0;t<e.children.length;t++){let l=e.children[t],s=o+l.length;if(s>=n){if(l instanceof W)return l;if(s>n)break}o=s+l.breakAfter}return null}};var B=require("@codemirror/state");function je(i,r,e=1){let n=i.charCategorizer(r),t=i.doc.lineAt(r),o=r-t.from;if(t.length==0)return B.EditorSelection.cursor(r);o==0?e=1:o==t.length&&(e=-1);let l=o,s=o;e<0?l=(0,B.findClusterBreak)(t.text,o,!1):s=(0,B.findClusterBreak)(t.text,o);let a=n(t.text.slice(l,s));for(;l>0;){let u=(0,B.findClusterBreak)(t.text,l,!1);if(n(t.text.slice(u,l))!=a)break;l=u}for(;s<t.length;){let u=(0,B.findClusterBreak)(t.text,s);if(n(t.text.slice(s,u))!=a)break;s=u}return B.EditorSelection.range(l+t.from,s+t.from)}var bt=(i,r)=>i>=r.top&&i<=r.bottom,pt=(i,r,e)=>bt(r,e)&&i>=e.left&&i<=e.right;function Zt(i,r,e,n){let t=W.find(i.docView,r);if(!t)return 1;let o=r-t.posAtStart;if(o==0)return 1;if(o==t.length)return-1;let l=t.coordsAt(o,-1);if(l&&pt(e,n,l))return-1;let s=t.coordsAt(o,1);return s&&pt(e,n,s)?1:l&&bt(n,l)?-1:1}function ze(i,r){let e=i.posAtCoords({x:r.clientX,y:r.clientY},!1);return{pos:e,bias:Zt(i,e,r.clientX,r.clientY)}}var wt=i=>{let r=(n,t,o,l)=>{let s=je(n.state,t,o);return ie(i,t,s,n.state)??s};return yt.EditorView.mouseSelectionStyle.of((n,t)=>{if(t.button!==0||t.detail!==2)return null;let o=ze(n,t),l=t.detail,s=n.state.selection,a=o,u=t;return{update(c){c.docChanged&&(o&&(o.pos=c.changes.mapPos(o.pos)),s=s.map(c.changes),u=null)},get(c,d,m){let p;if(u&&c.clientX==u.clientX&&c.clientY==u.clientY?p=a:(p=a=ze(n,c),u=c),!p||!o)return s;let C=r(n,p.pos,p.bias,l);if(o.pos!=p.pos&&!d){let I=r(n,o.pos,o.bias,l),L=Math.min(I.from,C.from),f=Math.max(I.to,C.to);C=L<C.from?fe.EditorSelection.range(L,f):fe.EditorSelection.range(f,L)}return d?s.replaceRange(s.main.extend(C.from,C.to)):m?s.addRange(C):fe.EditorSelection.create([C])}}})};var de=require("@codemirror/state"),U=require("@codemirror/view"),Ct=i=>{function r(l,s){if(l.state.readOnly)return!1;let a="delete.selection",{state:u}=l,c=u.changeByRange(d=>{let{from:m,to:p}=d;if(m==p){let C=s(m);C<m?(a="delete.backward",C=e(l,C,!1)):C>m&&(a="delete.forward",C=e(l,C,!0)),m=Math.min(m,C),p=Math.max(p,C)}else m=e(l,m,!1),p=e(l,m,!0);return m==p?{range:d}:{changes:{from:m,to:p},range:de.EditorSelection.cursor(m)}});return c.changes.empty?!1:(l.dispatch(u.update(c,{scrollIntoView:!0,userEvent:a,effects:a=="delete.selection"?U.EditorView.announce.of(u.phrase("Selection deleted")):void 0})),!0)}function e(l,s,a){if(l instanceof U.EditorView)for(let u of l.state.facet(U.EditorView.atomicRanges).map(c=>c(l)))u.between(s,s,(c,d)=>{c<s&&d>s&&(s=a?d:c)});return s}let n=(l,s)=>r(l,a=>{let u=a,{state:c}=l,d=c.doc.lineAt(u),m=c.charCategorizer(u);for(let p=null;;){if(u==(s?d.to:d.from)){u==a&&d.number!=(s?c.doc.lines:1)&&(u+=s?1:-1);break}let C=(0,de.findClusterBreak)(d.text,u-d.from,s)+d.from,I=d.text.slice(Math.min(u,C)-d.from,Math.max(u,C)-d.from),L=m(I);if(p!=null&&L!=p)break;(I!=" "||u!=a)&&(p=L),u=C}return u=i.getSegRangeFromGroup(a,u,c.sliceDoc.bind(c))??u,u}),t=l=>n(l,!1),o=l=>n(l,!0);return U.keymap.of([{key:"Ctrl-Alt-h",run:t},{key:"Mod-Backspace",mac:"Alt-Backspace",run:t},{key:"Mod-Delete",mac:"Alt-Delete",run:o}])};var xt=i=>[wt(i),Ct(i)];var en=i=>{i.registerEditorExtension(xt(i)),i.register(Re(he.EditorState.prototype,{wordAt:r=>function(e){let n=r.call(this,e);return ie(i,e,r.call(this,e),this)??n}})),i.register(Re(Tt.EditorView.prototype,{moveByGroup:r=>function(e,n){let t=r.call(this,e,n);if(t.empty&&e.empty){let o=i.getSegRangeFromGroup(e.from,t.from,this.state.sliceDoc.bind(this.state));if(o)return he.EditorSelection.range(o,o)}return t}}))},Mt=en;var me=class extends Error{},Ge=class extends me{},Je=class extends me{},tn=(i,r=",")=>i.join(r),nn={accept:"*",multiple:!1,strict:!1},_t=i=>{let{accept:r,multiple:e,strict:n}={...nn,...i},t=ln({multiple:e,accept:Array.isArray(r)?tn(r):r});return new Promise(o=>{t.onchange=()=>{o(rn(t.files,e,n)),t.remove()},t.click()})},rn=(i,r,e)=>new Promise((n,t)=>{if(!i)return t(new Ge);let o=on(i,r,e);if(!o)return t(new Je);n(o)}),on=(i,r,e)=>!r&&e?i.length===1?i[0]:null:i.length?i:null,ln=({accept:i,multiple:r})=>{let e=document.createElement("input");return e.type="file",e.multiple=r,e.accept=i,e};var Q=require("obsidian"),At="var(--background-modifier-success)",St="var(--background-modifier-cover)",qe="https://unpkg.com/jieba-wasm@0.0.2/pkg/web/jieba_rs_wasm_bg.wasm",z=class extends Q.Modal{constructor(e){super(e.app);this.plugin=e;this.reloadButton=null;this.selectButton=null;this.downloadButton=null;this.modalEl.addClass("zt-install-guide")}get libName(){return this.plugin.libName}onOpen(){this.contentEl.createEl("h1",{text:"\u5B89\u88C5\u7ED3\u5DF4\u5206\u8BCD"}),this.contentEl.createDiv({},e=>{e.appendText("\u65B0\u7248\u5206\u8BCD\u63D2\u4EF6\u9700\u8981\u5B89\u88C5 jieba-wasm\uFF0C\u8BF7\u6309\u7167\u4E0B\u9762\u7684\u6B65\u9AA4\u5B89\u88C5\uFF1A"),e.createEl("ol",{},n=>{n.createEl("li",{},t=>{this.downloadButton=t.createEl("button",{text:"\u81EA\u52A8\u4E0B\u8F7D"},o=>o.onclick=this.onDownloadingFile.bind(this)),t.createEl("br"),t.appendText("\u6216"),t.createEl("ol",{},o=>{o.createEl("li",{},l=>{l.appendText("\u70B9\u51FB\u94FE\u63A5\u624B\u52A8\u4E0B\u8F7D"),l.createEl("code",{text:this.libName}),l.createEl("br"),l.createEl("a",{href:qe,text:qe})}),o.createEl("li",{},l=>{l.appendText("\u5728\u5F39\u51FA\u7684\u7A97\u53E3\u9009\u62E9\u4E0B\u8F7D\u597D\u7684 "),l.createEl("code",{text:this.libName}),l.appendText("  "),this.selectButton=l.createEl("button",{text:"\u9009\u62E9\u6587\u4EF6"},s=>s.onclick=this.onSelectingFile.bind(this))})})}),n.createEl("li",{},t=>{t.appendText("\u91CD\u65B0\u52A0\u8F7D\u5206\u8BCD\u63D2\u4EF6:  "),this.reloadButton=t.createEl("button",{text:"\u91CD\u65B0\u52A0\u8F7D"},o=>{o.disabled=!0,o.style.backgroundColor=St,o.onclick=this.onReloadPlugin.bind(this)})})})})}onClose(){this.contentEl.empty()}async onSelectingFile(){let e=await _t({multiple:!1,accept:".wasm",strict:!0});!e||(await this.plugin.saveLib(await e.arrayBuffer()),this.selectButton&&(this.selectButton.setText("\u7ED3\u5DF4\u5206\u8BCD\u63D2\u4EF6\u5BFC\u5165\u6210\u529F"),this.selectButton.style.backgroundColor=At),this.reloadButton&&(this.reloadButton.disabled=!1,this.reloadButton.style.backgroundColor=""))}async onDownloadingFile(){this.reloadButton&&(this.reloadButton.disabled=!0,this.reloadButton.style.backgroundColor=St);let e=await fetch(qe);await this.plugin.saveLib(await e.arrayBuffer()),this.selectButton&&(this.selectButton.setText("\u7ED3\u5DF4\u5206\u8BCD\u63D2\u4EF6\u5BFC\u5165\u6210\u529F"),this.selectButton.style.backgroundColor=At),this.reloadButton&&(this.reloadButton.disabled=!1,this.reloadButton.style.backgroundColor="")}async onReloadPlugin(){if(await this.plugin.libExists()){let e=await app.vault.adapter.stat(this.plugin.libPath);e&&e.type=="file"&&e.size>0&&(await this.app.plugins.disablePlugin(this.plugin.manifest.id),this.close(),await this.app.plugins.enablePlugin(this.plugin.manifest.id),await this.app.setting.openTabById(this.plugin.manifest.id)),new Q.Notice("\u2714\uFE0F \u5B89\u88C5\u7ED3\u5DF4\u5206\u8BCD\u63D2\u4EF6\u6210\u529F")}else new Q.Notice("\u274C \u5B89\u88C5\u7ED3\u5DF4\u5206\u8BCD\u63D2\u4EF6\u5931\u8D25")}};var dn={},M,Et=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Et.decode();var ge=null;function ye(){return(ge===null||ge.buffer!==M.memory.buffer)&&(ge=new Uint8Array(M.memory.buffer)),ge}function Ke(i,r){return Et.decode(ye().subarray(i,i+r))}var H=new Array(32).fill(void 0);H.push(void 0,null,!0,!1);var te=H.length;function Z(i){te===H.length&&H.push(H.length+1);let r=te;return te=H[r],H[r]=i,r}function we(i){return H[i]}function sn(i){i<36||(H[i]=te,te=i)}function ee(i){let r=we(i);return sn(i),r}function Ye(i){let r=typeof i;if(r=="number"||r=="boolean"||i==null)return`${i}`;if(r=="string")return`"${i}"`;if(r=="symbol"){let t=i.description;return t==null?"Symbol":`Symbol(${t})`}if(r=="function"){let t=i.name;return typeof t=="string"&&t.length>0?`Function(${t})`:"Function"}if(Array.isArray(i)){let t=i.length,o="[";t>0&&(o+=Ye(i[0]));for(let l=1;l<t;l++)o+=", "+Ye(i[l]);return o+="]",o}let e=/\[object ([^\]]+)\]/.exec(toString.call(i)),n;if(e.length>1)n=e[1];else return toString.call(i);if(n=="Object")try{return"Object("+JSON.stringify(i)+")"}catch{return"Object"}return i instanceof Error?`${i.name}: ${i.message}
${i.stack}`:n}var Y=0,Ce=new TextEncoder("utf-8"),an=typeof Ce.encodeInto=="function"?function(i,r){return Ce.encodeInto(i,r)}:function(i,r){let e=Ce.encode(i);return r.set(e),{read:i.length,written:e.length}};function xe(i,r,e){if(e===void 0){let s=Ce.encode(i),a=r(s.length);return ye().subarray(a,a+s.length).set(s),Y=s.length,a}let n=i.length,t=r(n),o=ye(),l=0;for(;l<n;l++){let s=i.charCodeAt(l);if(s>127)break;o[t+l]=s}if(l!==n){l!==0&&(i=i.slice(l)),t=e(t,n,n=l+i.length*3);let s=ye().subarray(t+l,t+n),a=an(i,s);l+=a.written}return Y=l,t}var pe=null;function Te(){return(pe===null||pe.buffer!==M.memory.buffer)&&(pe=new Int32Array(M.memory.buffer)),pe}var be=null;function un(){return(be===null||be.buffer!==M.memory.buffer)&&(be=new Uint32Array(M.memory.buffer)),be}function cn(i,r){let n=un().subarray(i/4,i/4+r),t=[];for(let o=0;o<n.length;o++)t.push(ee(n[o]));return t}function Xe(i,r){try{let s=M.__wbindgen_add_to_stack_pointer(-16);var e=xe(i,M.__wbindgen_malloc,M.__wbindgen_realloc),n=Y;M.cut(s,e,n,r);var t=Te()[s/4+0],o=Te()[s/4+1],l=cn(t,o).slice();return M.__wbindgen_free(t,o*4),l}finally{M.__wbindgen_add_to_stack_pointer(16)}}function Ue(i){return i==null}function Me(i,r,e){var n=xe(i,M.__wbindgen_malloc,M.__wbindgen_realloc),t=Y,o=Ue(e)?0:xe(e,M.__wbindgen_malloc,M.__wbindgen_realloc),l=Y,s=M.add_word(n,t,!Ue(r),Ue(r)?0:r,o,l);return s>>>0}async function fn(i,r){if(typeof Response=="function"&&i instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(i,r)}catch(n){if(i.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",n);else throw n}let e=await i.arrayBuffer();return await WebAssembly.instantiate(e,r)}else{let e=await WebAssembly.instantiate(i,r);return e instanceof WebAssembly.Instance?{instance:e,module:i}:e}}async function Rt(i){typeof i>"u"&&(i=new URL("jieba_rs_wasm_bg.wasm",dn.url));let r={};r.wbg={},r.wbg.__wbindgen_string_new=function(t,o){var l=Ke(t,o);return Z(l)},r.wbg.__wbindgen_object_drop_ref=function(t){ee(t)},r.wbg.__wbg_new_68adb0d58759a4ed=function(){var t=new Object;return Z(t)},r.wbg.__wbindgen_number_new=function(t){var o=t;return Z(o)},r.wbg.__wbg_set_2e79e744454afade=function(t,o,l){we(t)[ee(o)]=ee(l)},r.wbg.__wbindgen_object_clone_ref=function(t){var o=we(t);return Z(o)},r.wbg.__wbg_new_7031805939a80203=function(t,o){var l=new Error(Ke(t,o));return Z(l)},r.wbg.__wbindgen_debug_string=function(t,o){var l=Ye(we(o)),s=xe(l,M.__wbindgen_malloc,M.__wbindgen_realloc),a=Y;Te()[t/4+1]=a,Te()[t/4+0]=s},r.wbg.__wbindgen_throw=function(t,o){throw new Error(Ke(t,o))},r.wbg.__wbindgen_rethrow=function(t){throw ee(t)},(typeof i=="string"||typeof Request=="function"&&i instanceof Request||typeof URL=="function"&&i instanceof URL)&&(i=fetch(i));let{instance:e,module:n}=await fn(await i,r);return M=e.exports,Rt.__wbindgen_wasm_module=n,M}var Nt=Rt;var hn=i=>i&&Number.isInteger(+i)?+i:void 0,kt=i=>i&&i in mn?i:void 0,$e=!1,vt=async(i,r)=>{if($e)return;let e=[];if(await Nt(i),r)for(let n of r.split(/\r?\n/)){let[t,o,l]=n.trim().split(/\s+/),s,a;if(!t){e.push(n);continue}!o&&!l?Me(t):(a=kt(o))?Me(t,void 0,a):(a=kt(l),s=hn(o),Me(t,s,a))}Xe("",!0),$e=!0},Dt=(i,r=!1)=>{if(!$e)throw new Error("jieba not loaded");return Xe(i,r)},mn={n:void 0,f:void 0,s:void 0,t:void 0,nr:void 0,ns:void 0,nt:void 0,nw:void 0,nz:void 0,v:void 0,vd:void 0,vn:void 0,a:void 0,ad:void 0,an:void 0,d:void 0,m:void 0,q:void 0,r:void 0,p:void 0,c:void 0,u:void 0,xc:void 0,w:void 0,PER:void 0,LOC:void 0,ORG:void 0,TIME:void 0};var G=require("obsidian");var Qe={useJieba:!1,hmm:!1,dict:"",moveByChineseWords:!0,moveTillChinesePunctuation:!0},_e=class extends G.PluginSettingTab{constructor(e){super(e.app,e);this.plugin=e}display(){let{containerEl:e}=this;e.empty(),this.addToggle(e,"useJieba").setName("\u4F7F\u7528\u7ED3\u5DF4\u5206\u8BCD").setDesc("\u652F\u6301\u65B0\u8BCD\u53D1\u73B0\u3001\u81EA\u5B9A\u4E49\u8BCD\u5178\uFF0C\u9700\u8981\u989D\u5916\u4E0B\u8F7D\uFF0C\u91CD\u542F Obsidian \u751F\u6548"),(this.plugin.settings.useJieba||!window.Intl?.Segmenter)&&(this.addToggle(e,"hmm").setName("\u65B0\u8BCD\u53D1\u73B0\u529F\u80FD").setDesc("\u91C7\u7528\u57FA\u4E8E\u6C49\u5B57\u6210\u8BCD\u80FD\u529B\u7684 HMM \u6A21\u578B\uFF0C\u4F7F\u7528 Viterbi \u7B97\u6CD5\u63A8\u7B97\u672A\u5B58\u5728\u4E8E\u8BCD\u5E93\u5185\u7684\u8BCD\u3002\u82E5\u6548\u679C\u4E0D\u7406\u60F3\uFF0C\u53EF\u9009\u62E9\u5173\u95ED\u6B64\u9009\u9879"),this.addTextField(e,{get:"dict",set:"dict"},{cols:30,rows:5}).setName("\u7528\u6237\u81EA\u5B9A\u4E49\u8BCD\u5178").setDesc(createFragment(n=>{n.appendText("\u901A\u8FC7\u7528\u6237\u81EA\u5B9A\u4E49\u8BCD\u5178\u6765\u589E\u5F3A\u6B67\u4E49\u7EA0\u9519\u80FD\u529B"),n.createEl("br"),n.appendText("\u8BCD\u5178\u683C\u5F0F\uFF1A\u4E00\u4E2A\u8BCD\u5360\u4E00\u884C\uFF1B\u6BCF\u4E00\u884C\u5206\u4E09\u90E8\u5206\uFF1A\u8BCD\u8BED\u3001\u8BCD\u9891\uFF08\u53EF\u7701\u7565\uFF09\u3001\u8BCD\u6027\uFF08\u53EF\u7701\u7565\uFF09\uFF0C\u7528\u7A7A\u683C\u9694\u5F00\uFF0C\u987A\u5E8F\u4E0D\u53EF\u98A0\u5012"),n.createEl("br"),n.appendText("\u6309\u4E0B\u6309\u94AE\u751F\u6548")})).addButton(n=>n.setIcon("reset").setTooltip("\u91CD\u65B0\u52A0\u8F7D\u8BCD\u5178").onClick(async()=>{await this.app.plugins.disablePlugin(this.plugin.manifest.id),await this.app.plugins.enablePlugin(this.plugin.manifest.id),this.app.setting.openTabById(this.plugin.manifest.id)}))),(this.plugin.settings.useJieba||window.Intl?.Segmenter)&&app.vault.getConfig("vimMode")==!0&&(this.addToggle(e,"moveByChineseWords").setName("\u3010Vim Mode\u3011\u4F7F\u7528\u7ED3\u5DF4\u5206\u8BCD\u79FB\u52A8\u5149\u6807").setDesc("Motion w/e/b/ge \u4F7F\u7528\u7ED3\u5DF4\u5206\u8BCD\u79FB\u52A8\u5149\u6807 in Vim Normal Mode, \u91CD\u542FObsidian\u751F\u6548"),this.addToggle(e,"moveTillChinesePunctuation").setName("\u3010Vim Mode\u3011f/t<character> \u652F\u6301\u8F93\u5165\u82F1\u6587\u6807\u70B9\u8DF3\u8F6C\u5230\u4E2D\u6587\u6807\u70B9").setDesc("Motion f/t<character> \u652F\u6301\u8F93\u5165\u82F1\u6587\u6807\u70B9\u8DF3\u8F6C\u5230\u4E2D\u6587\u6807\u70B9 in Vim Normal Mode, \u91CD\u542FObsidian\u751F\u6548"))}addToggle(e,n){return new G.Setting(e).addToggle(t=>{t.setValue(this.plugin.settings[n]).onChange(o=>{this.plugin.settings[n]=o,this.plugin.saveSettings(),n=="useJieba"&&(app.vault.adapter.exists(this.plugin.libPath,!0).then(l=>{!l&&o==!0&&new z(this.plugin).open()}),this.display())})})}addTextField(e,n,t={},o=500){return new G.Setting(e).addTextArea(l=>{let{get:s,set:a}=n,u=typeof s=="function"?s:()=>this.plugin.settings[s],c=typeof a=="function"?a:m=>this.plugin.settings[a]=m,d=async m=>{c(m),await this.plugin.saveSettings()};l.setValue(u()).onChange((0,G.debounce)(d,o,!0)),Object.assign(l.inputEl,{cols:30,rows:5,...t})})}};var X=6,ne=Se.Platform.isDesktopApp?require("@electron/remote").app.getPath("userData"):null,Ae=class extends Se.Plugin{constructor(){super(...arguments);this.libName="jieba_rs_wasm_bg.wasm";this.settings=Qe}async loadLib(){if(ne){let{readFile:e}=require("fs/promises");try{return await e(this.libPath)}catch(n){if(n.code==="ENOENT")return null;throw n}}else return await app.vault.adapter.exists(this.libPath,!0)?await app.vault.adapter.readBinary(this.libPath):null}async libExists(){if(ne){let{access:e}=require("fs/promises");try{return await e(this.libPath),!0}catch(n){if(n.code==="ENOENT")return!1;throw n}}else return await app.vault.adapter.exists(this.libPath,!0)}async saveLib(e){if(ne){let{writeFile:n}=require("fs/promises");await n(this.libPath,Buffer.from(e))}else await app.vault.adapter.writeBinary(this.libPath,e)}get libPath(){if(ne){let{join:e}=require("path");return e(ne,this.libName)}else return[app.vault.configDir,this.libName].join("/")}async onload(){this.addSettingTab(new _e(this)),await this.loadSettings(),await this.loadSegmenter()&&(Mt(this),console.info("editor word splitting patched")),this.addChild(new re(this))}async loadSettings(){this.settings=Object.assign({},Qe,await this.loadData())}async saveSettings(){await this.saveData(this.settings)}async loadSegmenter(){if(!this.settings.useJieba&&window.Intl?.Segmenter)return this.segmenter=new Intl.Segmenter("zh-CN",{granularity:"word"}),console.info("window.Intl.Segmenter loaded"),!0;let e=await this.loadLib();return e?(await vt(e,this.settings.dict),console.info("Jieba loaded"),!0):(new z(this).open(),!1)}cut(e){return!this.settings.useJieba&&this.segmenter?Array.from(this.segmenter.segment(e)).map(n=>n.segment):Dt(e,this.settings.hmm)}getSegRangeFromCursor(e,{from:n,to:t,text:o}){if(j(o)){if(e-n>X){let c=e-X;j(o.slice(c,e))&&(o=o.slice(c-n),n=c)}if(t-e>X){let c=e+X;j(o.slice(e,c))&&(o=o.slice(0,c-t),t=c)}let l=this.cut(o);if(e===t){let c=l.last();return{from:t-c.length,to:t}}let s=0,a=0,u=e-n;for(let c of l){if(a=s+c.length,u>=s&&u<a)break;s+=c.length}return t=a+n,n+=s,{from:n,to:t}}else return null}getSegRangeFromGroup(e,n,t){let o=n,l=e<n;Math.abs(e-n)>X&&(n=e+X*(l?1:-1));let s=l?t(e,n):t(n,e);if(!j(s)){if(o==n)return null;n=o,s=l?t(e,n):t(n,e)}let a=this.cut(s);return a.length===0?null:l?e+a.first().length:e-a.last().length}};