$(document).ready(function(){
	$('#MyImg').click(function(){
  		$('#Mymodal').modal('show')
	});

	var DocWidth = $(window).width()

	$('.certificate_new').on('scroll',()=>{
	$('.nav-pills').css("position","fixed")
	$('.nav-pills').css("background-color","orange")
  $('.tab-content').css("margin-top","30px");
	$(window).on('resize',function(){
    if ((DocWidth>=981) || (DocWidth<981)) {
      location.reload();  // refresh page
    }
	});
	if(DocWidth>=981){
		$('.nav-pills').css("width","50%")
	}
	else{
		$('.nav-pills').css("width","80%")
	}

})



});
