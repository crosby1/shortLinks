// ==UserScript==
// @name        ShortLinks
// @namespace   my.namespace.example
// @description Short Links
// @include     file:///*
// @version     1
// @grant       none
// ==/UserScript==

var links = document.getElementsByTagName('A');
var i;
for (i=0; i < links.length;i++){
  var linkText = links[i].textContent;
  if (linkText.search(/http(s?):/) != -1) {
    var lastIndex = linkText.lastIndexOf('/');
    var linkLength = linkText.length;
    if (lastIndex + 1== linkLength) {
      var subText = linkText.substring(0, lastIndex -1);
      lastIndex = subText.lastIndexOf('/')
    }
    var newText = linkText.substring(lastIndex + 1);
    links[i].textContent = newText;
  }
}