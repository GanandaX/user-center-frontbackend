(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[185],{8668:function(T){T.exports={pre:"pre___3fTUI"}},70347:function(){},53922:function(T,O,a){"use strict";a.r(O);var s=a(58024),i=a(91894),K=a(17462),u=a(76772),j=a(402),n=a(97272),P=a(81907),$=a(67294),Z=a(89470),I=a(8668),W=a.n(I),d=a(85893),N=function(C){var R=C.children;return(0,d.jsx)("pre",{className:W().pre,children:(0,d.jsx)("code",{children:(0,d.jsx)(n.Z.Text,{copyable:!0,children:R})})})},L=function(){var C=(0,Z.YB)();return(0,d.jsx)(P.ZP,{children:(0,d.jsxs)(i.Z,{children:[(0,d.jsx)(u.Z,{message:C.formatMessage({id:"pages.welcome.alertMessage",defaultMessage:"Faster and stronger heavy-duty components have been released."}),type:"success",showIcon:!0,banner:!0,style:{margin:-12,marginBottom:24}}),(0,d.jsx)(n.Z.Text,{strong:!0,children:(0,d.jsx)("a",{href:"https://procomponents.ant.design/components/table",rel:"noopener noreferrer",target:"__blank",children:(0,d.jsx)(Z._H,{id:"pages.welcome.link",defaultMessage:"Welcome"})})}),(0,d.jsx)(N,{children:"yarn add @ant-design/pro-components"})]})})};O.default=L},91894:function(T,O,a){"use strict";a.d(O,{Z:function(){return re}});var s=a(96156),i=a(22122),K=a(94184),u=a.n(K),j=a(98423),n=a(67294),P=a(53124),$=a(97647),Z=a(90860),I=a(86629),W=function(e,l){var c={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(c[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)l.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(c[t[r]]=e[t[r]]);return c},d=function(l){var c=l.prefixCls,t=l.className,r=l.hoverable,g=r===void 0?!0:r,_=W(l,["prefixCls","className","hoverable"]);return n.createElement(P.C,null,function(E){var y=E.getPrefixCls,h=y("card",c),v=u()("".concat(h,"-grid"),t,(0,s.Z)({},"".concat(h,"-grid-hoverable"),g));return n.createElement("div",(0,i.Z)({},_,{className:v}))})},N=d,L=function(e,l){var c={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(c[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)l.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(c[t[r]]=e[t[r]]);return c};function p(e){var l=e.map(function(c,t){return n.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(t)},n.createElement("span",null,c))});return l}var C=n.forwardRef(function(e,l){var c,t,r=n.useContext(P.E_),g=r.getPrefixCls,_=r.direction,E=n.useContext($.Z),y=function(f){var m;(m=e.onTabChange)===null||m===void 0||m.call(e,f)},h=function(){var f;return n.Children.forEach(e.children,function(m){m&&m.type&&m.type===N&&(f=!0)}),f},v=e.prefixCls,U=e.className,b=e.extra,x=e.headStyle,B=x===void 0?{}:x,A=e.bodyStyle,le=A===void 0?{}:A,z=e.title,F=e.loading,H=e.bordered,ce=H===void 0?!0:H,oe=e.size,Y=e.type,J=e.cover,G=e.actions,M=e.tabList,Q=e.children,V=e.activeTabKey,se=e.defaultActiveTabKey,de=e.tabBarExtraContent,ie=e.hoverable,X=e.tabProps,ve=X===void 0?{}:X,fe=L(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),o=g("card",v),me=n.createElement(Z.Z,{loading:!0,active:!0,paragraph:{rows:4},title:!1},Q),w=V!==void 0,ue=(0,i.Z)((0,i.Z)({},ve),(c={},(0,s.Z)(c,w?"activeKey":"defaultActiveKey",w?V:se),(0,s.Z)(c,"tabBarExtraContent",de),c)),k,q=M&&M.length?n.createElement(I.Z,(0,i.Z)({size:"large"},ue,{className:"".concat(o,"-head-tabs"),onChange:y,items:M.map(function(D){var f;return{label:D.tab,key:D.key,disabled:(f=D.disabled)!==null&&f!==void 0?f:!1}})})):null;(z||b||q)&&(k=n.createElement("div",{className:"".concat(o,"-head"),style:B},n.createElement("div",{className:"".concat(o,"-head-wrapper")},z&&n.createElement("div",{className:"".concat(o,"-head-title")},z),b&&n.createElement("div",{className:"".concat(o,"-extra")},b)),q));var _e=J?n.createElement("div",{className:"".concat(o,"-cover")},J):null,Ee=n.createElement("div",{className:"".concat(o,"-body"),style:le},F?me:Q),ye=G&&G.length?n.createElement("ul",{className:"".concat(o,"-actions")},p(G)):null,he=(0,j.Z)(fe,["onTabChange"]),ee=oe||E,Oe=u()(o,(t={},(0,s.Z)(t,"".concat(o,"-loading"),F),(0,s.Z)(t,"".concat(o,"-bordered"),ce),(0,s.Z)(t,"".concat(o,"-hoverable"),ie),(0,s.Z)(t,"".concat(o,"-contain-grid"),h()),(0,s.Z)(t,"".concat(o,"-contain-tabs"),M&&M.length),(0,s.Z)(t,"".concat(o,"-").concat(ee),ee),(0,s.Z)(t,"".concat(o,"-type-").concat(Y),!!Y),(0,s.Z)(t,"".concat(o,"-rtl"),_==="rtl"),t),U);return n.createElement("div",(0,i.Z)({ref:l},he,{className:Oe}),k,_e,Ee,ye)}),R=C,te=function(e,l){var c={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(c[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)l.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(c[t[r]]=e[t[r]]);return c},ae=function(l){return n.createElement(P.C,null,function(c){var t=c.getPrefixCls,r=l.prefixCls,g=l.className,_=l.avatar,E=l.title,y=l.description,h=te(l,["prefixCls","className","avatar","title","description"]),v=t("card",r),U=u()("".concat(v,"-meta"),g),b=_?n.createElement("div",{className:"".concat(v,"-meta-avatar")},_):null,x=E?n.createElement("div",{className:"".concat(v,"-meta-title")},E):null,B=y?n.createElement("div",{className:"".concat(v,"-meta-description")},y):null,A=x||B?n.createElement("div",{className:"".concat(v,"-meta-detail")},x,B):null;return n.createElement("div",(0,i.Z)({},h,{className:U}),b,A)})},ne=ae,S=R;S.Grid=N,S.Meta=ne;var re=S},58024:function(T,O,a){"use strict";var s=a(38663),i=a.n(s),K=a(70347),u=a.n(K),j=a(18446),n=a(18106)}}]);
