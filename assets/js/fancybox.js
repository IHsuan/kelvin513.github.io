$(document).on('click', '#fancybox', function(){
	$('#panel').css("display", "block");
});
$('#closeArea').bind('click',function(){
	$('#panel').style.display = "none";
});

var replaceClass = function(domObj , cName){
	domObj.className = domObj.className.replace(cName , "");
}
var addClass = function(domObj , cName){
	if( domObj.className.search(cName) !== -1 )
		return;
	domObj.className += ' ' + cName;
}
var open = false;
$('#X').bind('click',function(){
	if( open===false ){
		$('#menu').style.display = "block";
		setTimeout( function(){
			addClass( $('#menu') , "menuOpen" );
		} , 100 );
		open = true;	
	}
	else{
		$('#menu').style.display = "none";
		replaceClass( $('#menu') , "menuOpen" );
		open = false;	
	}
})
