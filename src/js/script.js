
var myHeight = 800;
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

var leftColumn=document.getElementById("leftCol");

var pinImage = document.createElement("img");
pinImage.setAttribute('id','pinButton')
pinImage.setAttribute('src', 'http://cdn.flaticon.com/png/256/1658.png');
pinImage.setAttribute('title','unpin')
pinImage.setAttribute('alt', 'unpin');
pinImage.setAttribute('width', '20px');
// leftColumn.insertBefore(pinImage,leftColumn.childNodes[0]);
