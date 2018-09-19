!function(t){function e(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,a){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:a})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/docs/",e(e.s=1)}([function(t,e,n){!function(e,n){t.exports=n()}(0,function(){"use strict";function t(t,e,n){return t<e?e:t>n?n:t}function e(t){var e=!1;if(void 0!==t)try{e=JSON.parse(JSON.stringify(t))}catch(t){}return e}function n(n){return n=e(n),"object"!=typeof n&&(n={}),Object.keys(d).filter(function(t){return"iterations"!==t}).forEach(function(e){"number"!=typeof n[e]||isNaN(n[e])?n[e]=d[e]:n[e]=t(n[e],0,100),n[e]=Math.round(n[e])}),("number"!=typeof n.iterations||isNaN(n.iterations)||n.iterations<=0)&&(n.iterations=d.iterations),n.iterations=Math.round(n.iterations),n}function a(t){if(t instanceof HTMLImageElement){if(!t.naturalWidth||!t.naturalHeight||!1===t.complete)throw new Error("This this image hasn't finished loading: "+t.src);var e=new m(t.naturalWidth,t.naturalHeight),n=e.getContext("2d");n.drawImage(t,0,0,e.width,e.height);var a=n.getImageData(0,0,e.width,e.height);return a.data&&a.data.length&&(void 0===a.width&&(a.width=t.naturalWidth),void 0===a.height&&(a.height=t.naturalHeight)),a}throw new Error("This object does not seem to be an image.")}function r(t){return new Promise(function(e,n){var a=new l;a.onload=function(){e(a)},a.onerror=function(t){n(t)},a.src=t})}function i(t,e,n,a){r(t).then(n,a)}function o(t){return{width:t.width||t.naturalWidth,height:t.height||t.naturalHeight}}function s(t){var e=o(t),n=new m(e.width,e.height),a=n.getContext("2d");return a.drawImage(t,0,0,e.width,e.height),{canvas:n,ctx:a}}function u(t,e,n,a){r(t).then(function(t){var e=o(t),a=s(t).ctx.getImageData(0,0,e.width,e.height);a.width||(a.width=e.width),a.height||(a.height=e.height),n(a)},a)}function c(t){return t&&"number"==typeof t.width&&"number"==typeof t.height&&t.data&&"number"==typeof t.data.length&&"object"==typeof t.data}function h(t,e){return new Promise(function(n,a){if(c(t)){var r=new m(t.width,t.height);r.getContext("2d").putImageData(t,0,0);n(r.toDataURL("image/jpeg",e/100))}else a(new Error("object is not valid imageData"))})}function f(t){function e(){return t}function r(){var t=p({},B);return I||p(t,M),t}function o(){var t=p({},B);return D||p(t,R),t}function s(t){return t}function c(t){return l(a,t)}function f(t){return l(s,t)}function d(t){return y(s)}function m(t){return y(i,t,!0)}function g(t){return y(u,t,!0)}function l(t,e,n){return I=function(){return new Promise(function(a,r){if(n)t(e,a,r);else if(t===s)a(e);else try{a(t(e,a,r))}catch(t){r(t)}})},v()?b():o()}function y(t,e,n){return D=function(a){return new Promise(function(r,i){n?t(a,e,r,i):t===s?r(a):t(a,e).then(r,i)})},v()?b():r()}function v(){return I&&D}function b(){return new Promise(function(e,n){I().then(function(e){return w(e,t)},n).then(function(t){D(t).then(e,n)},n)})}function w(t,e){return new Promise(function(n,a){h(t,e.quality).then(function(n){return x(t,n,e)},a).then(n,a)})}function x(t,e,n){return new Promise(function(a,r){L.addEventListener("message",function(t){t.data&&t.data.base64URL?a(t.data.base64URL):r(t.data&&t.data.err?t.data.err:t)}),L.postMessage({params:n,base64URL:e,imageData:t,imageDataWidth:t.width,imageDataHeight:t.height})})}t=n(t);var I,D,L=new Worker(URL.createObjectURL(new Blob(["function isImageData ( imageData ) {\n\treturn (\n\t\timageData && \n\t\ttypeof imageData.width === 'number' &&\n\t\ttypeof imageData.height === 'number' &&\n\t\timageData.data &&\n\t\ttypeof imageData.data.length === 'number' &&\n\t\ttypeof imageData.data === 'object'\n\t);\n}\n\nvar base64Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';\nvar base64Map = base64Chars.split( '' );\nvar reversedBase64Map$1 = { };\n\nbase64Map.forEach( function ( val, key ) { reversedBase64Map$1[val] = key; } );\n\nvar maps = {\n\tbase64Map: base64Map,\n\treversedBase64Map: reversedBase64Map$1\n};\n\nvar reversedBase64Map = maps.reversedBase64Map;\n\n// https://github.com/mutaphysis/smackmyglitchupjs/blob/master/glitch.html\n// base64 is 2^6, byte is 2^8, every 4 base64 values create three bytes\nfunction base64ToByteArray ( base64URL ) {\t\n\tvar result = [ ];\n\tvar prev;\n\n\tfor ( var i = 23, len = base64URL.length; i < len; i++ ) {\n\t\tvar currrentChar = reversedBase64Map[ base64URL.charAt( i ) ];\n\t\tvar digitNum = ( i - 23 ) % 4;\n\n\t\tswitch ( digitNum ) {\n\t\t\t// case 0: first digit - do nothing, not enough info to work with\n\t\t\tcase 1: // second digit\n\t\t\t\tresult.push( prev << 2 | currrentChar >> 4 );\n\t\t\t\tbreak;\n\t\t\t\n\t\t\tcase 2: // third digit\n\t\t\t\tresult.push( ( prev & 0x0f ) << 4 | currrentChar >> 2 );\n\t\t\t\tbreak;\n\t\t\t\n\t\t\tcase 3: // fourth digit\n\t\t\t\tresult.push( ( prev & 3 ) << 6 | currrentChar );\n\t\t\t\tbreak;\n\t\t}\n\n\t\tprev = currrentChar;\n\t}\n\n\treturn result;\n}\n\n// http://stackoverflow.com/a/10424014/229189\n\nfunction jpgHeaderLength ( byteArr ) {\n\tvar result = 417;\n\n\tfor ( var i = 0, len = byteArr.length; i < len; i++ ) {\n\t\tif ( byteArr[i] === 0xFF && byteArr[i + 1] === 0xDA ) {\n\t\t\tresult = i + 2;\n\t\t\tbreak;\n\t\t}\n\t}\n\n\treturn result;\n}\n\nfunction glitchByteArray ( byteArray, seed, amount, iterationCount ) {\n\tvar headerLength = jpgHeaderLength( byteArray );\n\tvar maxIndex = byteArray.length - headerLength - 4;\n\n\tvar amountPercent = amount / 100;\n\tvar seedPercent   = seed / 100;\n\n\tfor ( var iterationIndex = 0; iterationIndex < iterationCount; iterationIndex++ ) {\n\t\tvar minPixelIndex = ( maxIndex / iterationCount * iterationIndex ) | 0;\n\t\tvar maxPixelIndex = ( maxIndex / iterationCount * ( iterationIndex + 1 ) ) | 0;\n\t\t\n\t\tvar delta = maxPixelIndex - minPixelIndex;\n\t\tvar pixelIndex = ( minPixelIndex + delta * seedPercent ) | 0;\n\n\t\tif ( pixelIndex > maxIndex ) {\n\t\t\tpixelIndex = maxIndex;\n\t\t}\n\n\t\tvar indexInByteArray = ~~( headerLength + pixelIndex );\n\n\t\tbyteArray[indexInByteArray] = ~~( amountPercent * 256 );\n\t}\n\n\treturn byteArray;\n}\n\nvar base64Map$1 = maps.base64Map;\n\nfunction byteArrayToBase64 ( byteArray ) {\n\tvar result = [ 'data:image/jpeg;base64,' ];\n\tvar byteNum;\n\tvar previousByte;\n\n\tfor ( var i = 0, len = byteArray.length; i < len; i++ ) {\n\t\tvar currentByte = byteArray[i];\n\t\tbyteNum = i % 3;\n\n\t\tswitch ( byteNum ) {\n\t\t\tcase 0: // first byte\n\t\t\t\tresult.push( base64Map$1[ currentByte >> 2 ] );\n\t\t\t\tbreak;\n\t\t\tcase 1: // second byte\n\t\t\t\tresult.push( base64Map$1[( previousByte & 3 ) << 4 | ( currentByte >> 4 )] );\n\t\t\t\tbreak;\n\t\t\tcase 2: // third byte\n\t\t\t\tresult.push( base64Map$1[( previousByte & 0x0f ) << 2 | ( currentByte >> 6 )] );\n\t\t\t\tresult.push( base64Map$1[currentByte & 0x3f] );\n\t\t\t\tbreak;\n\t\t}\n\n\t\tpreviousByte = currentByte;\n\t}\n\n\tif ( byteNum === 0 ) {\n\t\tresult.push( base64Map$1[( previousByte & 3 ) << 4] );\n\t\tresult.push( '==' );\n\t} else {\n\t\tif ( byteNum === 1 ) {\n\t\t\tresult.push( base64Map$1[( previousByte & 0x0f ) << 2] );\n\t\t\tresult.push( '=' );\n\t\t}\n\t}\n\n\treturn result.join( '' );\n}\n\nfunction glitchImageData ( imageData, base64URL, params ) {\n\tif ( isImageData( imageData ) ) {\n\t\tvar byteArray = base64ToByteArray( base64URL );\n\t\tvar glitchedByteArray = glitchByteArray( byteArray, params.seed, params.amount, params.iterations );\n\t\tvar glitchedBase64URL = byteArrayToBase64( glitchedByteArray );\n\t\treturn glitchedBase64URL;\n\t} else {\n\t\tthrow new Error( 'glitchImageData: imageData seems to be corrupt.' );\n\t\treturn;\n\t}\n}\n\nonmessage = function (msg) {\n\tvar imageData = msg.data.imageData;\n\tvar params = msg.data.params;\n\tvar base64URL = msg.data.base64URL;\n\n\tif ( imageData && base64URL && params ) {\n\t\ttry {\n\t\t\t// phantomjs seems to have some memory loss so we need to make sure\n\t\t\tif ( typeof imageData.width === 'undefined' && typeof msg.data.imageDataWidth === 'number' ) {\n\t\t\t\timageData.width = msg.data.imageDataWidth;\n\t\t\t}\n\n\t\t\tif ( typeof imageData.height === 'undefined' && typeof msg.data.imageDataHeight === 'number' ) {\n\t\t\t\timageData.height = msg.data.imageDataHeight;\n\t\t\t}\n\n\t\t\tvar glitchedBase64URL = glitchImageData( imageData, base64URL, params );\n\t\t\tsuccess( glitchedBase64URL );\n\n\t\t} catch ( err ) {\n\t\t\tfail( err );\n\t\t}\n\n\t} else {\n\t\tif ( msg.data.imageData ) {\n\t\t\tfail( 'Parameters are missing.' );\n\t\t} else {\n\t\t\tfail( 'ImageData is missing.' );\n\t\t}\n\t}\n\t\n\tself.close();\n};\n\nfunction fail ( err ) {\n\tself.postMessage( { err: err.message || err } );\n}\n\nfunction success ( base64URL ) {\n\tself.postMessage( { base64URL: base64URL } );\n}\n"],{type:"text/javascript"}))),B={getParams:e,getInput:r,getOutput:o},M={fromImageData:f,fromImage:c},R={toImage:m,toDataURL:d,toImageData:g};return r()}var d={amount:35,iterations:20,quality:30,seed:25},m=function(t,e){void 0===t&&(t=300),void 0===e&&(e=150),this.canvasEl=document.createElement("canvas"),this.canvasEl.width=t,this.canvasEl.height=e,this.ctx=this.canvasEl.getContext("2d")},g={width:{configurable:!0},height:{configurable:!0}};m.prototype.getContext=function(){return this.ctx},m.prototype.toDataURL=function(t,e,n){if("function"!=typeof n)return this.canvasEl.toDataURL(t,e);n(this.canvasEl.toDataURL(t,e))},g.width.get=function(){return this.canvasEl.width},g.width.set=function(t){this.canvasEl.width=t},g.height.get=function(){return this.canvasEl.height},g.height.set=function(t){this.canvasEl.height=t},Object.defineProperties(m.prototype,g),m.Image=Image;var l=m.Image;"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("").forEach(function(t,e){});var p=Object.assign;return f})},function(t,e,n){"use strict";function a(t,e){return Math.floor(Math.random()*(e-t))+t}function r(){m.rect(0,0,p,l),m.fill(),m.drawImage(y,0,0,y.width,y.height,0,0,p,l)}function i(){var t=0;for(t=0;t<a(1,4);t+=1){var e=Math.random()*p,n=Math.random()*l,r=p-e,i=l/a(2,10);m.save(),m.scale(-1,1),m.drawImage(d,0,n,p,i,0,n,-1*p,i),m.restore(),m.drawImage(d,0,n,r,i,e,i,r,i)}}function o(){var t={seed:a(0,50),quality:a(0,50),amount:a(0,50),iterations:a(0,20)},e=m.getImageData(0,0,p,l);(0,f.default)(t).fromImageData(e).toDataURL().then(function(t){var e=new Image;e.onload=function(){m.drawImage(e,0,0)},e.src=t})}function s(){setTimeout(i,a(0,500)),setTimeout(i,a(501,700)),setTimeout(i,a(701,1100)),setTimeout(r,a(1101,1200)),setTimeout(o,a(1201,1300)),setTimeout(o,a(1301,1800)),setTimeout(o,a(1801,2800)),setTimeout(r,a(2801,3e3)),setTimeout(i,a(3001,3500)),setTimeout(i,a(3501,3700)),setTimeout(i,a(3701,4200)),setTimeout(r,a(4201,6e3)),setTimeout(u,a(6001,6200))}function u(){v+=1;var t=new Image,e=Object.keys(b)[v%Object.keys(b).length];t.src="/assets/images/"+e+".jpg",console.log(t),t.onload=function(){y=t,document.body.style.backgroundColor=b[e],r(),setTimeout(s,a(0,1e3))}}function c(){d.height=l=document.body.offsetWidth/g,d.width=p=document.body.offsetWidth}var h=n(0),f=function(t){return t&&t.__esModule?t:{default:t}}(h),d=document.createElement("canvas"),m=d.getContext("2d"),g=2e3/1333,l=void 0,p=void 0,y=document.querySelector(".glitch-image"),v=0,b={a:"#f0f0f0",b:"#f0f0f0",c:"#f0f0f0",d:"#f0f0f0",e:"#f0f0f0",f:"#f0f0f0",j:"#f0f0f0",k:"#f0f0f0",l:"#f0f0f0"};y.onload=function(){c(),y.parentNode.replaceChild(d,y),r(),setTimeout(s,a(1e3,3e3))},window.addEventListener("resize",c)}]);