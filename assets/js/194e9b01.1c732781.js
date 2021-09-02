"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[50244],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,d=f["".concat(u,".").concat(m)]||f[m]||s[m]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},81815:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return f}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],p={},u=void 0,l={unversionedId:"puppeteer.framewaitforfunctionoptions",id:"version-9.1.1/puppeteer.framewaitforfunctionoptions",isDocsHomePage:!1,title:"puppeteer.framewaitforfunctionoptions",description:"Home &gt; puppeteer &gt; FrameWaitForFunctionOptions",source:"@site/versioned_docs/version-9.1.1/puppeteer.framewaitforfunctionoptions.md",sourceDirName:".",slug:"/puppeteer.framewaitforfunctionoptions",permalink:"/puppeteer/docs/9.1.1/puppeteer.framewaitforfunctionoptions",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-9.1.1/puppeteer.framewaitforfunctionoptions.md",version:"9.1.1",frontMatter:{}},c=[{value:"FrameWaitForFunctionOptions interface",id:"framewaitforfunctionoptions-interface",children:[]},{value:"Properties",id:"properties",children:[]}],s={toc:c};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/index"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer"},"puppeteer")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer.framewaitforfunctionoptions"},"FrameWaitForFunctionOptions")),(0,a.kt)("h2",{id:"framewaitforfunctionoptions-interface"},"FrameWaitForFunctionOptions interface"),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface FrameWaitForFunctionOptions \n")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/docs/9.1.1/puppeteer.framewaitforfunctionoptions.polling"},"polling?")),(0,a.kt)("td",{parentName:"tr",align:null},"string ","|"," number"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," An interval at which the ",(0,a.kt)("code",null,"pageFunction")," is executed, defaults to ",(0,a.kt)("code",null,"raf"),". If ",(0,a.kt)("code",null,"polling")," is a number, then it is treated as an interval in milliseconds at which the function would be executed. If ",(0,a.kt)("code",null,"polling")," is a string, then it can be one of the following values:- ",(0,a.kt)("code",null,"raf")," - to constantly execute ",(0,a.kt)("code",null,"pageFunction")," in ",(0,a.kt)("code",null,"requestAnimationFrame")," callback. This is the tightest polling mode which is suitable to observe styling changes.- ",(0,a.kt)("code",null,"mutation")," - to execute ",(0,a.kt)("code",null,"pageFunction")," on every DOM mutation.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/docs/9.1.1/puppeteer.framewaitforfunctionoptions.timeout"},"timeout?")),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," Maximum time to wait in milliseconds. Defaults to ",(0,a.kt)("code",null,"30000")," (30 seconds). Pass ",(0,a.kt)("code",null,"0")," to disable the timeout. Puppeteer's default timeout can be changed using ",(0,a.kt)("a",{parentName:"td",href:"/puppeteer/docs/9.1.1/puppeteer.page.setdefaulttimeout"},"Page.setDefaultTimeout()"),".")))))}f.isMDXComponent=!0}}]);