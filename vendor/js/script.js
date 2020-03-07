$(document).ready(function(){
	$('#MyImg').click(function(){
  		$('#Mymodal').modal('show')
	});

	$('.certificate_new').on('scroll',()=>{
	$('.nav-pills').css("position","fixed")
	$('.nav-pills').css("background-color","white")
  $('.tab-content').css("padding-top","90px;")
	$('.nav-pills').css("width","50%")
	if(DocWidth>=500){
		$('.tab-content').css("margin-top","20px")
	}
	else{
		$('.tab-content').css("margin-top","53px")
	}
})

});
