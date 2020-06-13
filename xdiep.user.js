// ==UserScript==
// @name         zoomtest
// @description  
// @version      0.1
// @author       SS
// @match        *://diep.io/*
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @connect      diep.io
// @connect      github.com
// @namespace    
// ==/UserScript==

window.stop();

GM_xmlhttpRequest({
    method: "GET",
    url: "http://diep.io",
    onload: function(e) {
         document.open(), document.write("<script src='https://raw.githack.com/SSisGOD/xDiep.io/master/head.js'></script>" + e.responseText), document.close();
    }
});
