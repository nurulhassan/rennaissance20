$(document).ready(function(){
	$('#MyImg').click(function(){
  		$('#Mymodal').modal('show')
	});
  function hideLoader() {
    $('#loading').fadeOut('slow',function(){});
}

$(window).ready(hideLoader);

// Strongly recommended: Hide loader after 20 seconds, even if the page hasn't finished loading
setTimeout(hideLoader, 1000);
});
