
var myHeight = 800;
if( typeof( window.innerWidth ) == 'number' ) {
	myHeight = window.innerHeight;
}
var height = myHeight - 100;
var NOT_IMPORTANT = " !important"
var SEMI_COLON = ";"
var PIXEL = "px";
var OVERFLOW = "overflow: scroll" + NOT_IMPORTANT +";"
var code = "#leftCol{height:"+ height + PIXEL +NOT_IMPORTANT + SEMI_COLON + OVERFLOW+"}";
var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = code;
document.getElementsByTagName("head")[0].appendChild( style );