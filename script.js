var scrlTimer;

$(window).load(function(){
	$('.intro').css({
		'top':'30%',
		'opacity':'1'
	});
});
$(document).ready(function(){
	$(window).scroll(function(){
		scrlTimer = setInterval(function(){	
			scrl = $(window).scrollTop();
			if(scrl > $(window).height()/3){
				$('.mid').css({
					'top':'0px',
					'opacity':'1'
				});
				clearInterval(scrlTimer);
			}
		},200);	
	});

});
