//헤더1,2 로 문서 타이틀 자동 완성
window.onload = function () { 
var maintitle = document.getElementsByTagName('h1')[0].childNodes[0].nodeValue;
var subtitle = document.getElementsByTagName('h2')[0].childNodes[0].nodeValue;
document.title = (subtitle + " :: " + maintitle); }
