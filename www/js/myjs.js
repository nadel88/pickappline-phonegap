/**
 * @author nadav
 */

$(function(){
  // Bind the swipeHandler callback function to the swipe event on div.box
  $( "div.container-box" ).on( "swipe", swipeHandler );
 
  // Callback function references the event target and adds the 'swipe' class to it
  function swipeHandler( event ){
  //	$( event.target ).addClass( "swipe" );
  $( event.target ).animate({marginLeft:'500px'},'slow');  
  $("div.hidden-box").delay(200).animate({marginLeft:'40px'},'slow');
  var array = $("div.hidden-box").toArray();
 jQuery.each(array,function(i,val){
 	$( "div.hidden-box" ).on( "swipe", swipeHandler );
 	 function swipeHandler( event ){
 	 	$( event.target ).animate({marginLeft:'500px'},'slow');  
 	 }
 	 
 });
  
  }
});