(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(t,n,e){t.exports=e.p+"static/media/easy3-80.75bea977.png"},24:function(t,n,e){t.exports=e(38)},29:function(t,n,e){},37:function(t,n,e){},38:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e.n(r),o=e(14),i=e.n(o),c=(e(29),e(15)),u=e(16),l=e(20),p=e(17),x=e(21),s=e(1),f=e(5),b=e(3),d=e(2);function g(){var t=Object(s.a)(["\n\tbackground: white;\n\tborder: solid 2px white;\n"]);return g=function(){return t},t}function h(){var t=Object(s.a)(["\n\tbackground: transparent;\n\tborder: solid 2px #317ae2;\n"]);return h=function(){return t},t}function m(){var t=Object(s.a)(["\n\theight: 3px;\n\twidth: 3px;\n\tborder-radius: 50%;\n\tborder: solid 2px #317ae2;\n\tbackground: #317ae2;\n\tmargin-bottom: 2px;\n\tbox-shadow: 0 0 1px 1px rgba(0,0,0,0.04), 0 1px 2px -2px rgba(0,0,0,.06), 0 1px 3px 0 rgba(0,0,0,.07);\n"]);return m=function(){return t},t}function v(){var t=Object(s.a)(["\n\tposition: absolute;\n\tright: 0px;\n\ttop: 3px;\n\theight: 50px;\n\twidth: 10px;\n"]);return v=function(){return t},t}var w=function(t){var n=[];return t.forEach(function(t,e){return 0===t?n.push(a.a.createElement(E,{key:e})):1===t?n.push(a.a.createElement(y,{key:e})):n.push(a.a.createElement(j,{key:e}))}),n},O=d.a.div(v()),y=d.a.div(m()),E=Object(d.a)(y)(h()),j=Object(d.a)(y)(g()),k=function(t){var n=t.scoreData;return a.a.createElement(O,null,w(n))};function C(){var t=Object(s.a)(["\n\toutline: solid 2px #317ae2;\n"]);return C=function(){return t},t}function z(){var t=Object(s.a)(["\n\tborder-radius: 2px;\n\theight: 50px;\n\twidth: 50px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin-bottom: 4px;\n\topacity: initial;\n\tbackground: rgb(255, 255, 255);\n\tbox-shadow: 0 0 1px 1px rgba(0,0,0,.05), 0 1px 2px -2px rgba(0,0,0,.06), 0 1px 3px 0 rgba(0,0,0,.07);\n\ttext-align: center;\n\tpadding-top: 16px;\n\tbox-sizing: border-box;\n\ttransition: box-shadow .1s linear;\n\tposition: relative;\n\n\t:hover {\n\t\tbox-shadow: rgba(0, 0, 0, 0.16) 0px 0px 1px 0px, rgba(0, 0, 0, 0.05) 0px 2px 2px 0px, rgba(0, 0, 0, 0.06) 0px 3px 1px -2px, rgba(0, 0, 0, 0.1) 0px 1px 5px 0px;\n\t}\n\n\t:first-of-type {\n\t\tmargin-top: 58px;\n\t}\n"]);return z=function(){return t},t}var D=function(t){return t.reduce(function(t,n){return t+n},0)},T=function(t){return null==t},N=d.a.div(z()),F=Object(d.a)(N)(C()),M=function(t){var n=t.scoreData,e=t.selected,r="";return n.every(T)||(r=D(n)),e?a.a.createElement(F,null,r,a.a.createElement(k,{scoreData:n})):a.a.createElement(N,null,r,a.a.createElement(k,{scoreData:n}))};function P(){var t=Object(s.a)(["\n\theight: 50px;\n\twidth: 50px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin-bottom: 4px;\n\ttext-align: center;\n\tpadding-top: 16px;\n\tbox-sizing: border-box;\n\tposition: relative;\n"]);return P=function(){return t},t}function U(){var t=Object(s.a)(["\n\twidth: 52px;\n\tpadding: 4px 2px;\n"]);return U=function(){return t},t}var R=function(t,n,e){var r=t[e],o=[];return o.push(a.a.createElement(H,{key:e},e+1)),r&&Object.keys(r).map(function(t){var i="".concat(n.frame).concat(n.distance).concat(n.throw).concat(t);return n.frame===e&&n.distance===Number(t)?o.push(a.a.createElement(M,{selected:!0,scoreData:r[t],key:i})):o.push(a.a.createElement(M,{scoreData:r[t],key:i}))}),o},S=d.a.div(U()),H=d.a.div(P()),V=function(t){var n=t.frameNo,e=Object(r.useContext)(Gt).state,o=e.scoreMatrix,i=e.target;return a.a.createElement(S,null,R(o,i,n))},B=function(t){for(var n=t.target,e=n.frame<3?0:n.frame-2,r=n.frame+1,o=[],i=e;i<r;i++)o.push(a.a.createElement(V,{key:"".concat(n.throw,"-").concat(i),frameNo:i}));return o},A=function(t){return a.a.createElement(It,null,function(t){return B(t.state)})},J=e(6),L=e.n(J);function W(){var t=Object(s.a)(["\n\tdisplay: inline-flex;\n\tflex: 0 0 auto;\n\tbox-sizing: border-box;\n\twidth: 24px;\n\theight: 24px;\n\tfill: ",";\n\tuser-select: none;\n"]);return W=function(){return t},t}function G(){var t=Object(s.a)(["\n\tborder-radius: 2px;\n\theight: 70px;\n\twidth: 90px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin: 4px 4px;\n\topacity: initial;\n\tbackground: rgb(255, 255, 255);\n\tbox-shadow: 0 0 1px 1px rgba(0,0,0,.05), 0 1px 2px -2px rgba(0,0,0,.06), 0 1px 3px 0 rgba(0,0,0,.07);\n\ttext-align: center;\n\ttext-align: -webkit-center;\n\tpadding-top: 20px;\n\tbox-sizing: border-box;\n\ttransition: box-shadow .1s linear;\n\tcursor: pointer;\n\tcolor: ",";\n\tfont-size: 24px;\n\n\t:hover {\n\t\tbox-shadow: rgba(0, 0, 0, 0.16) 0px 0px 1px 0px, rgba(0, 0, 0, 0.05) 0px 2px 2px 0px, rgba(0, 0, 0, 0.06) 0px 3px 1px -2px, rgba(0, 0, 0, 0.1) 0px 1px 5px 0px;\n\t}\n"]);return G=function(){return t},t}var I=d.a.button(G(),function(t){return t.fontColor||"#317ae2"}),$=d.a.svg(W(),function(t){return t.color}),q=function(t){var n=t.keyName,e=t.keyValue,r=t.fontColor;return a.a.createElement(It,null,function(t){return a.a.createElement(I,{fontColor:r,onClick:function(){return t.state.keyPress(e,t)}},a.a.createElement($,{className:n,color:r},a.a.createElement("use",{xlinkHref:"".concat(L.a,"#").concat(n)})))})},K=function(t){return a.a.createElement(It,null,function(t){return a.a.createElement(a.a.Fragment,null,a.a.createElement(q,{key:1,keyName:"Hit",keyValue:1,fontColor:"#08a742"}),a.a.createElement(q,{key:2,keyName:"Miss",keyValue:0,fontColor:"#f94839"}),a.a.createElement(q,{key:3,keyName:"Undo",keyValue:"UNDO",fontColor:"#317ae2"}))})},Q=[5,6,7,8,9,10];function X(){var t=Object(s.a)(["\n\tbox-shadow: 0 0 1px 1px rgba(49, 122, 226,.05), 0 1px 2px -2px rgba(49, 122, 226, .06), 0 1px 3px 0 rgba(49, 122, 226, .07);\n\tbackground: rgba(49, 122, 226, 0.2);\n"]);return X=function(){return t},t}function Y(){var t=Object(s.a)(["\n\tborder-radius: 2px;\n\theight: 50px;\n\twidth: 50px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin-bottom: 4px;\n\topacity: initial;\n\tbackground: rgba(0,0,0,.02);\n\tbox-shadow: 0 0 1px 1px rgba(0,0,0,.05), 0 1px 2px -2px rgba(0,0,0,.06), 0 1px 3px 0 rgba(0,0,0,.07);\n\ttext-align: center;\n\tpadding-top: 16px;\n\tbox-sizing: border-box;\n\ttransition: box-shadow .1s linear;\n\n\t:hover {\n\t\tbox-shadow: rgba(0, 0, 0, 0.16) 0px 0px 1px 0px, rgba(0, 0, 0, 0.05) 0px 2px 2px 0px, rgba(0, 0, 0, 0.06) 0px 3px 1px -2px, rgba(0, 0, 0, 0.1) 0px 1px 5px 0px;\n\t}\n\n\t:first-of-type {\n\t\tmargin-top: 54px;\n\t}\n"]);return Y=function(){return t},t}function Z(){var t=Object(s.a)(["\n\twidth: 56px;\n\tpadding: 4px 2px;\n\tmargin-left: 16px;\n"]);return Z=function(){return t},t}var _=function(t,n){var e=[];if(t){var r=!0,o=!1,i=void 0;try{for(var c,u=Q[Symbol.iterator]();!(r=(c=u.next()).done);r=!0){var l=c.value;l===n?e.push(a.a.createElement(et,{key:l},"".concat(l,"m"))):e.push(a.a.createElement(nt,{key:l},"".concat(l,"m")))}}catch(p){o=!0,i=p}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return e}},tt=d.a.div(Z()),nt=d.a.div(Y()),et=Object(d.a)(nt)(X()),rt=function(t){var n=Object(r.useContext)(Gt),e=n.state.target.distance,o=n.state.scoreMatrix[0];return a.a.createElement(tt,null,_(o,e))};function at(){var t=Object(s.a)(["\n\tdisplay: inline-flex;\n\tflex: 0 0 auto;\n\tbox-sizing: border-box;\n\twidth: 24px;\n\theight: 24px;\n\tfill: #317ae2;\n\tuser-select: none;\n"]);return at=function(){return t},t}function ot(){var t=Object(s.a)(["\n\tborder-radius: 2px;\n\theight: 50px;\n\twidth: 50px;\n\tdisplay: flex;\n\tflex-direction: column;\n\topacity: initial;\n\tbackground: transparent;\n\tbox-shadow: 0 0 0 0 rgba(0,0,0,0), 0 0 0 0 rgba(0,0,0,0), 0 0 0 0 rgba(0,0,0,0);\n\tborder: 0;\n\ttext-align: center;\n\ttext-align: -webkit-center;\n\tpadding-top: 12px;\n\tbox-sizing: border-box;\n\ttransition: box-shadow .1s linear;\n\tcursor: pointer;\n\tcolor: ",";\n\tfont-size: 24px;\n\n\t:hover {\n\t\tbox-shadow: rgba(0, 0, 0, 0.16) 0px 0px 1px 0px, rgba(0, 0, 0, 0.05) 0px 2px 2px 0px, rgba(0, 0, 0, 0.06) 0px 3px 1px -2px, rgba(0, 0, 0, 0.1) 0px 1px 5px 0px;\n\t}\n"]);return ot=function(){return t},t}function it(){var t=Object(s.a)(["\n\tborder-radius: 2px;\n\theight: 50px;\n\twidth: 50px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin-bottom: 4px;\n\topacity: initial;\n\tbackground: rgb(255, 255, 255);\n\tbox-shadow: 0 0 1px 1px rgba(0,0,0,.05), 0 1px 2px -2px rgba(0,0,0,.06), 0 1px 3px 0 rgba(0,0,0,.07);\n\ttext-align: center;\n\tpadding-top: 16px;\n\tbox-sizing: border-box;\n\ttransition: box-shadow .1s linear;\n\tposition: relative;\n\n\t:hover {\n\t\tbox-shadow: rgba(0, 0, 0, 0.16) 0px 0px 1px 0px, rgba(0, 0, 0, 0.05) 0px 2px 2px 0px, rgba(0, 0, 0, 0.06) 0px 3px 1px -2px, rgba(0, 0, 0, 0.1) 0px 1px 5px 0px;\n\t}\n"]);return it=function(){return t},t}function ct(){var t=Object(s.a)(["\n\ttext-align: center;\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 18px 0;\n"]);return ct=function(){return t},t}function ut(){var t=Object(s.a)(["\n\twidth: 52px;\n\tpadding: 4px 2px;\n\tmargin-left: 16px;\n"]);return ut=function(){return t},t}var lt=d.a.div(ut()),pt=d.a.span(ct()),xt=d.a.div(it()),st=d.a.button(ot(),function(t){return t.fontColor||"#317ae2"}),ft=d.a.svg(at()),bt=function(t){var n=Object(r.useContext)(Gt),e=n.state,o=n.set,i=e.showTotal,c=e.currentTotal,u=i?"Hide":"Show";return a.a.createElement(It,null,function(t){return a.a.createElement(lt,null,a.a.createElement(pt,null,"Total:"),a.a.createElement(xt,null,i?c:"-"),a.a.createElement(st,{onClick:function(){o(Object(b.a)({},e,{showTotal:!i}))}},a.a.createElement(ft,null,a.a.createElement("use",{xlinkHref:"".concat(L.a,"#").concat(u)}))))})};function dt(){var t=Object(s.a)(["\n\tposition: absolute;\n\tright: 7px;\n\tbottom: 7px;\n\tcolor: #61c786;\n\tfont-size: 14px;\n\tbackground-color: white;\n\tpadding: 1px;\n"]);return dt=function(){return t},t}function gt(){var t=Object(s.a)(["\n\theight: 10px;\n\twidth: ",";\n\tmargin: 2px 0;\n\tbackground-color: #61c786;\n"]);return gt=function(){return t},t}var ht=d.a.div(gt(),function(t){return t.width?t.width:"0"}),mt=d.a.span(dt()),vt=function(t){var n=t.width,e=t.count;return a.a.createElement(a.a.Fragment,null,a.a.createElement(ht,{width:n}),a.a.createElement(mt,null,e||0))};function wt(){var t=Object(s.a)(["\n\tposition: absolute;\n\tright: 7px;\n\ttop: 7px;\n\tcolor: #fb8a80;\n\tfont-size: 14px;\n\tbackground-color: white;\n\tpadding: 1px;\n"]);return wt=function(){return t},t}function Ot(){var t=Object(s.a)(["\n\theight: 10px;\n\twidth: ",";\n\tmargin: 2px 0;\n\tbackground-color: #fb8a80;\n"]);return Ot=function(){return t},t}var yt=d.a.div(Ot(),function(t){return t.width?t.width:"0"}),Et=d.a.span(wt()),jt=function(t){var n=t.width,e=t.count;return a.a.createElement(a.a.Fragment,null,a.a.createElement(yt,{width:n}),a.a.createElement(Et,null,e||0))};function kt(){var t=Object(s.a)(["\n\tmin-height: 50px;\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin-bottom: 4px;\n\tpadding: 12px 0 0 8px;\n\tflex-basis: 100%;\n\topacity: initial;\n\tbackground: rgb(255, 255, 255);\n\ttext-align: center;\n\tbox-sizing: border-box;\n\ttransition: box-shadow .1s linear;\n\tposition: relative;\n\n\t:first-of-type {\n\t\tmargin-top: 58px;\n\t}\n"]);return kt=function(){return t},t}var Ct=function(t){var n=zt(t.count[0]),e=zt(t.count[1]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(jt,{width:n,count:t.count[0]}),a.a.createElement(vt,{width:e,count:t.count[1]}))},zt=function(t){return t?"".concat(7*t,"px"):"0px"},Dt=d.a.div(kt()),Tt=function(t){return a.a.createElement(Dt,null,Ct(t))},Nt=e(4),Ft=function(t){var n={5:[],6:[],7:[],8:[],9:[],10:[]},e=[];t.forEach(function(t,e){for(var r=Object.entries(t),a=0;a<r.length;a++){var o=r[a],i=Object(f.a)(o,2),c=i[0],u=i[1];n[c]=Object(Nt.concat)(n[c],u)}});for(var r=Object.entries(n),o=0;o<r.length;o++){var i=r[o],c=Object(f.a)(i,2),u=c[0],l=c[1],p=Object(Nt.filter)(l,function(t){return 1===t||0===t}),x=Object(Nt.countBy)(p,Math.floor);n[u]=x,e.push(a.a.createElement(Tt,{count:x,key:u}))}return e},Mt=function(t){var n=Object(r.useContext)(Gt).state.scoreMatrix;return Ft(n)},Pt=e(7),Ut={past:[],present:null,future:[]},Rt=function(t,n){var e=t.past,r=t.present,a=t.future;switch(n.type){case"UNDO":var o=e[e.length-1];return{past:e.slice(0,e.length-1),present:o,future:[r].concat(Object(Pt.a)(a))};case"REDO":var i=a[0],c=a.slice(1);return{past:[].concat(Object(Pt.a)(e),[r]),present:i,future:c};case"SET":var u=n.newPresent;return u===r?t:{past:[].concat(Object(Pt.a)(e),[r]),present:u,future:[]};case"CLEAR":var l=n.initialPresent;return Object(b.a)({},Ut,{present:l});default:return{past:e,present:r,future:a}}},St=function(t){var n=Object(r.useReducer)(Rt,Object(b.a)({},Ut,{present:t})),e=Object(f.a)(n,2),a=e[0],o=e[1],i=a.past.length>0,c=a.future.length>0,u=Object(r.useCallback)(function(){i&&o({type:"UNDO"})},[i,o]),l=Object(r.useCallback)(function(){c&&o({type:"REDO"})},[c,o]),p=Object(r.useCallback)(function(t){return o({type:"SET",newPresent:t})},[o]),x=Object(r.useCallback)(function(){return o({tyoe:"CLEAR",initialPresent:t})},[o]);return{state:a.present,set:p,undo:u,redo:l,clear:x,canUndo:i,canRedo:c}},Ht=e(11),Vt=e.n(Ht);function Bt(){var t=Object(s.a)(["\n\tbackground: #f7f7f7;\n\twidth: 100%;\n\ttext-align: center;\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding-top: 20px;\n\tfont-size: 1.3em;\n"]);return Bt=function(){return t},t}function At(){var t=Object(s.a)(["\n\tpadding: 0 0 50px;\n\twidth: 100%;\n\tbackground: #f7f7f7;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\tbox-sizing: border-box;\n"]);return At=function(){return t},t}function Jt(){var t=Object(s.a)(["\n\twidth: 350px;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\tbackground: #f7f7f7;\n"]);return Jt=function(){return t},t}function Lt(){var t=Object(s.a)(["\n\twidth: 100%;\n\theight: 100%;\n\tpadding: 10px;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\tbackground: #f7f7f7;\n"]);return Lt=function(){return t},t}function Wt(){var t=Object(s.a)(["\n\twidth: 100px;\n\theight: 100px;\n\tdisplay: block;\n\tmargin: 0 auto;\n"]);return Wt=function(){return t},t}var Gt=Object(r.createContext)({}),It=(Gt.Provider,Gt.Consumer),$t={noOfFrames:20,totalThrows:0,currentTotal:0,scoreMatrix:[],showTotal:!0,target:{frame:0,distance:Q[0],throw:0},keyPress:function(t,n){return qt(t,n)}},qt=function(t,n){var e=n.state,r=n.set,a=n.undo,o=n.canUndo;if("UNDO"===t&&o)return a();e.totalThrows!==5*e.noOfFrames&&r(Object(b.a)({},e,{scoreMatrix:Qt(n,t),totalThrows:e.totalThrows+1,target:Xt(n,t),currentTotal:Yt(e,t)}))},Kt=function(t){for(var n=t.state,e=t.set,r=[],a=0;a<n.noOfFrames;a++){var o={},i=!0,c=!1,u=void 0;try{for(var l,p=Q[Symbol.iterator]();!(i=(l=p.next()).done);i=!0){o[l.value]=[null,null,null,null,null]}}catch(x){c=!0,u=x}finally{try{i||null==p.return||p.return()}finally{if(c)throw u}}r.push(o)}e(Object(b.a)({},n,{scoreMatrix:r}))},Qt=function(t,n){var e=Object(Nt.cloneDeep)(t.state),r=e.target,a=e.scoreMatrix;return a[r.frame][r.distance][r.throw]=n,a},Xt=function(t,n){var e=Object(Nt.cloneDeep)(t.state).target;if(e.throw=e.throw<4?e.throw+1:0,0===e.throw&&(e.frame=e.frame+1),1===n&&10===e.distance)return e;if(1===n&&e.distance<10)e.distance=e.distance+1;else if(0===n&&e.distance>5)e.distance=e.distance-1;else if(0===n&&5===e.distance)return e;return e},Yt=function(t,n){var e=Object(Nt.cloneDeep)(t),r=e.scoreMatrix,a=e.target.distance*n,o=0;return r.forEach(function(t){for(var n=Object.entries(t),e=0;e<n.length;e++){var r=n[e],a=Object(f.a)(r,2),i=a[0],c=a[1],u=!0,l=!1,p=void 0;try{for(var x,s=c[Symbol.iterator]();!(u=(x=s.next()).done);u=!0){var b=x.value;o+=i*b}}catch(d){l=!0,p=d}finally{try{u||null==s.return||s.return()}finally{if(l)throw p}}}}),o+a},Zt=function(t){return t.state.target.frame+1>t.state.noOfFrames?"Game Over":"Frame ".concat(t.state.target.frame+1)},_t=d.a.img(Wt()),tn=d.a.div(Lt()),nn=d.a.div(Jt()),en=d.a.div(At()),rn=d.a.span(Bt()),an=function(){var t=St($t);return Object(r.useEffect)(function(){Kt(t)},[]),t.state.target.frame+1>t.state.noOfFrames?a.a.createElement(Gt.Provider,{value:t},a.a.createElement(rn,null,Zt(t)),a.a.createElement(tn,null,a.a.createElement(rt,null),a.a.createElement(nn,null,a.a.createElement(Mt,null)),a.a.createElement(bt,null)),a.a.createElement(en,null),a.a.createElement(_t,{src:Vt.a})):a.a.createElement(Gt.Provider,{value:t},a.a.createElement(rn,null,Zt(t)),a.a.createElement(tn,null,a.a.createElement(rt,null),a.a.createElement(A,null),a.a.createElement(bt,null)),a.a.createElement(en,null,a.a.createElement(K,null)),a.a.createElement(_t,{src:Vt.a}))},on=(e(36),e(37),function(t){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(x.a)(n,t),Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(an,null))}}]),n}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(on,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},6:function(t,n,e){t.exports=e.p+"static/media/icons.38b9c6cd.svg"}},[[24,1,2]]]);
//# sourceMappingURL=main.b4b73776.chunk.js.map