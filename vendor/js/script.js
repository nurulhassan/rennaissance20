setTimeout(function myfunction(){
	document.getElementById('loading').style.display='none';
},1500);
setTimeout(function myfunction(){
	document.getElementById('loading-zarurat').style.display='none';
},1500);
setTimeout(function myfunction(){
	document.getElementById('loading-quanta').style.display='none';
},1500);
setTimeout(function myfunction(){
	document.getElementById('loading-splash').style.display='none';
},3000);
setTimeout(function myfunction(){
	document.getElementById('loading-endeavour').style.display='none';
},3000);
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
