"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[13083],{3905:function(e,t,r){r.d(t,{Zo:function(){return i},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},i=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,w=d["".concat(l,".").concat(m)]||d[m]||c[m]||p;return r?n.createElement(w,o(o({ref:t},i),{},{components:r})):n.createElement(w,o({ref:t},i))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<p;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},83919:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return i},default:function(){return d}});var n=r(87462),a=r(63366),p=(r(67294),r(3905)),o=["components"],s={},l=void 0,u={unversionedId:"puppeteer.browser",id:"version-10.1.0/puppeteer.browser",isDocsHomePage:!1,title:"puppeteer.browser",description:"Home &gt; puppeteer &gt; Browser",source:"@site/versioned_docs/version-10.1.0/puppeteer.browser.md",sourceDirName:".",slug:"/puppeteer.browser",permalink:"/puppeteer/docs/puppeteer.browser",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-10.1.0/puppeteer.browser.md",version:"10.1.0",frontMatter:{},sidebar:"version-10.1.0/docs",previous:{title:"puppeteer.browserfetcher.revisioninfo",permalink:"/puppeteer/docs/puppeteer.browserfetcher.revisioninfo"},next:{title:"puppeteer.browser.browsercontexts",permalink:"/puppeteer/docs/puppeteer.browser.browsercontexts"}},i=[{value:"Browser class",id:"browser-class",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]},{value:"Methods",id:"methods",children:[]}],c={toc:i};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.browser"},"Browser")),(0,p.kt)("h2",{id:"browser-class"},"Browser class"),(0,p.kt)("p",null,"A Browser is created when Puppeteer connects to a Chromium instance, either through ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.puppeteernode.launch"},"PuppeteerNode.launch()")," or ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.puppeteer.connect"},"Puppeteer.connect()"),"."),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class Browser extends EventEmitter \n")),(0,p.kt)("b",null,"Extends:")," [EventEmitter](/puppeteer/docs/puppeteer.eventemitter)",(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,"The Browser class extends from Puppeteer's ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.eventemitter"},"EventEmitter")," class and will emit various events which are documented in the ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.browseremittedevents"},"BrowserEmittedEvents")," enum."),(0,p.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,p.kt)("inlineCode",{parentName:"p"},"Browser")," class."),(0,p.kt)("h2",{id:"example-1"},"Example 1"),(0,p.kt)("p",null,"An example of using a ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.browser"},"Browser")," to create a ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.page"},"Page"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"const puppeteer = require('puppeteer');\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.goto('https://example.com');\n  await browser.close();\n})();\n\n")),(0,p.kt)("h2",{id:"example-2"},"Example 2"),(0,p.kt)("p",null,"An example of disconnecting from and reconnecting to a ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.browser"},"Browser"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"const puppeteer = require('puppeteer');\n\n(async () => {\n  const browser = await puppeteer.launch();\n  // Store the endpoint to be able to reconnect to Chromium\n  const browserWSEndpoint = browser.wsEndpoint();\n  // Disconnect puppeteer from Chromium\n  browser.disconnect();\n\n  // Use the endpoint to reestablish a connection\n  const browser2 = await puppeteer.connect({browserWSEndpoint});\n  // Close Chromium\n  await browser2.close();\n})();\n\n")),(0,p.kt)("h2",{id:"methods"},"Methods"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Method"),(0,p.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.browser.browsercontexts"},"browserContexts()")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},"Returns an array of all open browser contexts. In a newly created browser, this will return a single instance of ",(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.browsercontext"},"BrowserContext"),".")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.browser.close"},"close()")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},"Closes Chromium and all of its pages (if any were opened). The ",(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.browser"},"Browser")," object itself is considered to be disposed and cannot be used anymore.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.browser.createincognitobrowsercontext"},"createIncognitoBrowserContext()")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},"Creates a new incognito browser context. This won't share cookies/cache with other browser contexts.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.browser.defaultbrowsercontext"},"defaultBrowserContext()")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},"Returns the default browser context. The default browser context cannot be closed.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.browser.disconnect"},"disconnect()")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},"Disconnects Puppeteer from the browser, but leaves the Chromium process running. After calling ",(0,p.kt)("code",null,"disconnect"),", the ",(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.browser"},"Browser")," object is considered disposed and cannot be used anymore.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.browser.isconnected"},"isConnected()")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},"Indicates that the browser is connected.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.browser.newpage"},"newPage()")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},"Promise which resolves to a new ",(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page"},"Page")," object. The Page is created in a default browser context.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.browser.pages"},"pages()")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},"An array of all open pages inside the Browser.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.browser.process"},"process()")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},"The spawned browser process. Returns ",(0,p.kt)("code",null,"null")," if the browser instance was created with ",(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.puppeteer.connect"},"Puppeteer.connect()"),".")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.browser.target"},"target()")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},"The target associated with the browser.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.browser.targets"},"targets()")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},"All active targets inside the Browser. In case of multiple browser contexts, returns an array with all the targets in all browser contexts.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.browser.useragent"},"userAgent()")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},"The browser's original user agent. Pages can override the browser user agent with ",(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.setuseragent"},"Page.setUserAgent()"),".")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.browser.version"},"version()")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},"A string representing the browser name and version.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.browser.waitfortarget"},"waitForTarget(predicate, options)")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},"Searches for a target in all browser contexts.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.browser.wsendpoint"},"wsEndpoint()")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},"The browser websocket endpoint which can be used as an argument to ",(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.puppeteer.connect"},"Puppeteer.connect()"),".")))))}d.isMDXComponent=!0}}]);