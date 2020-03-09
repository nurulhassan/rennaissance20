$(document).ready(function(){
	$('#MyImg').click(function(){
  		$('#Mymodal').modal('show')
	});

	$(".r-logo").click(function(e){
	  $(e.currentTarget).removeClass("r-animate"); 
	});

	$("#animator").click(function(e){
	  $('.r-logo').addClass("r-animate");
	});



});
