"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7918],{9649:(e,t,a)=>{a.d(t,{N:()=>u,Z:()=>v});var n=a(102),l=a(3117),i=a(7294),s=a(6010),r=a(5999),c=a(6681);const o="anchorWithStickyNavbar_31ik",d="anchorWithHideOnScrollNavbar_3R7-";var m=["id"],u=function(e){var t=Object.assign({},e);return i.createElement("header",null,i.createElement("h1",(0,l.Z)({},t,{id:void 0}),t.children))};const v=function(e){return"h1"===e?u:(t=e,function(e){var a,u=e.id,v=(0,n.Z)(e,m),h=(0,c.LU)().navbar.hideOnScroll;return u?i.createElement(t,(0,l.Z)({},v,{className:(0,s.Z)("anchor",(a={},a[d]=h,a[o]=!h,a)),id:u}),v.children,i.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#"+u,title:(0,r.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):i.createElement(t,v)});var t}},1674:(e,t,a)=>{a.d(t,{U:()=>s});var n=a(412),l=a(5999),i=a(7294),s=function(e){var t=e.label,a=(0,i.useState)(!1),s=a[0],r=a[1],c=(0,i.useState)(!1),o=c[0],d=c[1];if(!n.Z.canUseDOM)return null;var m=function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"feedback",eventLabel:t,eventValue:e}),r(!0),d(0===e)};return s?i.createElement("div",{className:"docsRating"},o?i.createElement("div",{className:"leaveReply"},i.createElement(l.Z,{id:"components.DocsRating.replyTitle"},"\u0423\u0434\u0435\u043b\u0438\u0442\u0435 \u043d\u0430\u043c \u0435\u0449\u0451 \u043c\u0438\u043d\u0443\u0442\u0443 \u0432\u0430\u0448\u0435\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438"),i.createElement("textarea",{className:"textArea",name:"reply",autoFocus:!0,placeholder:(0,l.I)({id:"components.DocsRating.replyTextareaPlaceholder",message:"\u041a\u0430\u043a \u043c\u043e\u0436\u043d\u043e \u0443\u043b\u0443\u0447\u0448\u0438\u0442\u044c \u044d\u0442\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443?"}),rows:5,maxLength:400}),i.createElement("button",{type:"button",onClick:function(e){var a=e.target.previousSibling.value;window.ga&&a&&window.ga("send",{hitType:"event",eventCategory:"reply",eventAction:a,eventLabel:t}),d(!1)},className:"button button--m button--primary margin--xs"},i.createElement(l.Z,{id:"components.DocsRating.replySendButton"},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"))):(0,l.I)({id:"components.DocsRating.replySuccess",message:"\u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u043e\u0442\u0437\u044b\u0432!"})):i.createElement("div",{className:"docsRating"},i.createElement(l.Z,{id:"components.DocsRating.title"},"\u0411\u044b\u043b\u0430 \u043b\u0438 \u044d\u0442\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043f\u043e\u043b\u0435\u0437\u043d\u043e\u0439?"),i.createElement("svg",{className:"i_thumbsup",onClick:function(){return m(1)},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76"},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",onClick:function(){return m(0)},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76"},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))}},4606:(e,t,a)=>{a.r(t),a.d(t,{default:()=>B});var n=a(7294),l=a(9960),i=a(5999);const s=function(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(l.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.createElement(l.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},a.title," \xbb"))))};var r=a(2263),c=a(907),o=a(6681),d=a(6010);var m={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function u(e){var t=m[e.versionMetadata.banner];return n.createElement(t,e)}function v(e){var t=e.versionLabel,a=e.to,s=e.onClick;return n.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(l.Z,{to:a,onClick:s},n.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function h(e){var t,a=e.className,l=e.versionMetadata,i=(0,r.Z)().siteConfig.title,s=(0,c.gA)({failfast:!0}).pluginId,m=(0,o.J)(s).savePreferredVersionName,h=(0,c.Jo)(s),g=h.latestDocSuggestion,p=h.latestVersionSuggestion,E=null!=g?g:(t=p).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,d.Z)(a,o.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(u,{siteTitle:i,versionMetadata:l})),n.createElement("div",{className:"margin-top--md"},n.createElement(v,{versionLabel:p.label,to:E.path,onClick:function(){return m(p.name)}})))}function g(e){var t=e.className,a=(0,o.E6)();return a.banner?n.createElement(h,{className:t,versionMetadata:a}):null}var p=a(1217);function E(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(i.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function b(e){var t=e.lastUpdatedBy;return n.createElement(i.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function f(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:o.kM.common.lastUpdated},n.createElement(i.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(E,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(b,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var N=a(3117),k=a(102),_=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function w(e){var t=e.toc,a=e.className,l=e.linkClassName,i=e.isChild;return t.length?n.createElement("ul",{className:i?void 0:a},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(w,{isChild:!0,toc:e.children,className:a,linkClassName:l}))}))):null}function L(e){var t=e.toc,a=e.className,l=void 0===a?"table-of-contents table-of-contents__left-border":a,i=e.linkClassName,s=void 0===i?"table-of-contents__link":i,r=e.linkActiveClassName,c=void 0===r?void 0:r,d=e.minHeadingLevel,m=e.maxHeadingLevel,u=(0,k.Z)(e,_),v=(0,o.LU)(),h=null!=d?d:v.tableOfContents.minHeadingLevel,g=null!=m?m:v.tableOfContents.maxHeadingLevel,p=(0,o.DA)({toc:t,minHeadingLevel:h,maxHeadingLevel:g}),E=(0,n.useMemo)((function(){if(s&&c)return{linkClassName:s,linkActiveClassName:c,minHeadingLevel:h,maxHeadingLevel:g}}),[s,c,h,g]);return(0,o.Si)(E),n.createElement(w,(0,N.Z)({toc:p,className:l,linkClassName:s},u))}const Z="tableOfContents_35-E";var y=["className"];const U=function(e){var t=e.className,a=(0,k.Z)(e,y);return n.createElement("div",{className:(0,d.Z)(Z,"thin-scrollbar",t)},n.createElement(L,(0,N.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))},T="iconEdit_2_ui";var C=["className"];const A=function(e){var t=e.className,a=(0,k.Z)(e,C);return n.createElement("svg",(0,N.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,d.Z)(T,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function x(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:o.kM.common.editThisPage},n.createElement(A,null),n.createElement(i.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var H=a(9649),M=a(1674);const S="docItemContainer_1EXp",D="lastUpdated_1szQ",I="docItemCol_2rXS";const B=function(e){var t,a=e.content,l=e.versionMetadata,i=a.metadata,r=a.frontMatter,o=r.image,m=r.keywords,u=r.hide_title,v=r.hide_table_of_contents,h=i.description,E=i.title,b=i.editUrl,N=i.lastUpdatedAt,k=i.formattedLastUpdatedAt,_=i.lastUpdatedBy,w=i.unversionedId,L=(0,c.gA)({failfast:!0}).pluginId,Z=(0,c.gB)(L).length>1,y=!u&&void 0===a.contentTitle;return n.createElement(n.Fragment,null,n.createElement(p.Z,{title:E,description:h,keywords:m,image:o}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,d.Z)("col",(t={},t[I]=!v,t))},n.createElement(g,{versionMetadata:l}),n.createElement("div",{className:S},n.createElement("article",null,Z&&n.createElement("span",{className:"badge badge--secondary"},"Version: ",l.label),n.createElement("div",{className:"markdown"},y&&n.createElement(H.N,null,E),n.createElement(a,null)),n.createElement(M.U,{label:w}),(b||N||_)&&n.createElement("footer",{className:"row docusaurus-mt-lg"},n.createElement("div",{className:"col"},b&&n.createElement(x,{editUrl:b})),n.createElement("div",{className:(0,d.Z)("col",D)},(N||_)&&n.createElement(f,{lastUpdatedAt:N,formattedLastUpdatedAt:k,lastUpdatedBy:_})))),n.createElement(s,{metadata:i}))),!v&&a.toc&&n.createElement("div",{className:"col col--3"},n.createElement(U,{toc:a.toc}))))}}}]);