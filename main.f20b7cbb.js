parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";window.onload=function(){var e=document.getElementById("preloader");e.classList.add("hide-preloader"),setInterval(function(){e.classList.add("preloader-hidden")},1400)};var e=document.getElementById("video"),s=document.getElementById("playpause"),n=window.innerWidth;s.classList.contains("active")?s.innerHTML=n<800?'<p class="video-play"></p>':"Play":s.innerHTML=n<800?'<p class="video-pause"></p>':"Pause",window.addEventListener("resize",function(e){n=window.innerWidth,s.classList.contains("active")?s.innerHTML=n<800?'<p class="video-play"></p>':"Play":s.innerHTML=n<800?'<p class="video-pause"></p>':"Pause"}),s.addEventListener("click",function(){s.classList.contains("active")?(e.play(),s.innerHTML=n<800?'<p class="video-pause"></p>':"Pause",s.classList.toggle("active")):(e.pause(),s.innerHTML=n<800?'<p class="video-play"></p>':"Play",s.classList.toggle("active"))}),s.addEventListener("mouseleave",function(e){s.classList.contains("active")||(s.style.opacity="0")}),s.addEventListener("mouseenter",function(e){s.classList.contains("active")||(s.style.opacity="1")});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.f20b7cbb.js.map