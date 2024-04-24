"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[508],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>f});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,f=u["".concat(l,".").concat(d)]||u[d]||y[d]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3480:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(8168),o=(r(6540),r(5680));const a={},i="Array vs. Pointer",s={unversionedId:"Lab 2 - Memory Operations. Introduction to GDB/Memory Operations/Guides/Array vs Pointer/README",id:"Lab 2 - Memory Operations. Introduction to GDB/Memory Operations/Guides/Array vs Pointer/README",title:"Array vs. Pointer",description:"To follow this guide, you'll need to use the arrayvspointer.c file located in the guides/arrayvspointer/support directory.",source:"@site/docs/Lab 2 - Memory Operations. Introduction to GDB/Memory Operations/Guides/Array vs Pointer/README.md",sourceDirName:"Lab 2 - Memory Operations. Introduction to GDB/Memory Operations/Guides/Array vs Pointer",slug:"/Lab 2 - Memory Operations. Introduction to GDB/Memory Operations/Guides/Array vs Pointer/",permalink:"/hardware-software-interface/Lab 2 - Memory Operations. Introduction to GDB/Memory Operations/Guides/Array vs Pointer/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Guides",permalink:"/hardware-software-interface/Lab 2 - Memory Operations. Introduction to GDB/Memory Operations/Guides/"},next:{title:"Drills",permalink:"/hardware-software-interface/Lab 2 - Memory Operations. Introduction to GDB/Memory Operations/Drills/"}},l={},c=[],p={toc:c},u="wrapper";function y(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"array-vs-pointer"},"Array vs. Pointer"),(0,o.yg)("p",null,"To follow this guide, you'll need to use the ",(0,o.yg)("inlineCode",{parentName:"p"},"array_vs_pointer.c")," file located in the ",(0,o.yg)("inlineCode",{parentName:"p"},"guides/array_vs_pointer/support")," directory."),(0,o.yg)("p",null,"Compile and run the source from the skeleton."),(0,o.yg)("p",null,"The program simply declares an array chars and a char pointer, we'll try to understand the difference between the two."),(0,o.yg)("p",null,"We can observe the fact that even though both of them point to the same sequence of characters, the sizeof operator returns different values: the number of bytes needed for the array (13), while for the pointer, it simply returns its size as a data type (4/8 on most systems)."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"sizeof(v): 13\nsizeof(p): 8\n")),(0,o.yg)("p",null,"We've previously learned that an array is also technically a pointer to the first element of the array, so why would it be in any way different?\nThis behaviour is a consequence that comes from the fact that the value of the pointer which represents the array is ",(0,o.yg)("strong",{parentName:"p"},"constant")," and cannot be changed.\nThis means that we can determine the size of the array at compile time since it is not possible to make it point to a different memory location, but for a regular pointer like the one declared in the example, the address which it points to can be changed at runtime, so it will not always points to an array of the same size and we cannot even determine if it will point to an array at all (it could point to a single variable for example)."),(0,o.yg)("p",null,"The second difference appears when attempting to change the value of one of the characters in the sequence, it seems that we can't do it using the pointer, while we can do it using the array.\nThis is a consequence of the fact that the pointer points to read-only memory (the string literal, which we'll later learn is stored in a memory area called ",(0,o.yg)("inlineCode",{parentName:"p"},".rodata"),"), while the array points to its own allocated memory, which is writable."))}y.isMDXComponent=!0}}]);