// $(function(){
	// $(".overlay").fadeOut(0);
	// $(".overlay2").fadeOut(0);
// });
$(document).ready(function(){
		$(".overlay").hide();
		$(".overlay2").hide();
		$(window).load(function(){
			$(".overlay").fadeIn(3000);
			$(".overlay2").fadeIn(3000, function(){
				$(".con").fadeIn(500);
			});
		});
});