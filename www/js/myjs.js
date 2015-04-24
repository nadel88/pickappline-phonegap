/**
 * @author nadav
 */


$(function(){
	var array = $("div.hidden-box").toArray();
 	jQuery.each(array,function(i,val){
	 	$( "div.hidden-box" ).on( "swipe", swipeHandler );
	 	 function swipeHandler( event ){
	 	 	$( event.target ).animate({marginLeft:'500px'},'slow');  
	 	 }
 		
 	});
});

