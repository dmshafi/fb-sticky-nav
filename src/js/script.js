
var myHeight = 600;
if( typeof( window.innerWidth ) == 'number' ) {
	myHeight = window.innerHeight;
}
var height = myHeight - 100;
var overflow_y = "overflow-y: scroll !important ;";
var overflow_x = "overflow-x: hidden !important ;";
var css_height = "height:"+ height + "px !important;";
var css_code = "#leftCol{" +overflow_x + overflow_y + 
  css_height +"}";
var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = css_code;
document.getElementsByTagName("head")[0].appendChild( style );
