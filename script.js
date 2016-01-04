$(document).ready( function() {
	$('#navigation').on('mouseover', function() {
	    $(this).css('-webkit-animation', 'color_change 4s infinite alternate');
	    $(this).css('-moz-animation', 'color_change 4s infinite alternate');
	    $(this).css('-ms-animation', 'color_change 4s infinite alternate');
	    $(this).css('-o-animation', 'color_change 4s infinite alternate');
	    $(this).css('animation', 'color_change 4s infinite alternate');	    
	});

	$('#navigation').on('mouseout', function() {
	    $(this).css('-webkit-animation', 'none 4s infinite alternate');
	    $(this).css('-moz-animation', 'none 4s infinite alternate');
	    $(this).css('-ms-animation', 'none 4s infinite alternate');
	    $(this).css('-o-animation', 'none 4s infinite alternate');
	    $(this).css('animation', 'none 4s infinite alternate');	   
	});


	$("#photo1").mouseenter(function(){
		$('#home-page #photo1').attr('src', 'photos/1Info.jpg');
	}).mouseleave(function(){
		$('#home-page #photo1').attr('src', 'photos/1Pillow copy.png');
	});		

	$("#photo2").mouseenter(function(){
		$('#home-page #photo2').attr('src', 'photos/2Info.jpg');
	}).mouseleave(function(){
		$('#home-page #photo2').attr('src', 'photos/2Clock copy.png');
	});		

	$("#photo3").mouseenter(function(){
		$('#home-page #photo3').attr('src', 'photos/3Info.jpg');
	}).mouseleave(function(){
		$('#home-page #photo3').attr('src', 'photos/3Bed copy.png');
	});		

	$("#photo4").mouseenter(function(){
		$('#home-page #photo4').attr('src', 'photos/4Info.jpg');
	}).mouseleave(function(){
		$('#home-page #photo4').attr('src', 'photos/4Cat copy.png');
	});		

	$("#photo5").mouseenter(function(){
		$('#home-page #photo5').attr('src', 'photos/5Info.jpg');
	}).mouseleave(function(){
		$('#home-page #photo5').attr('src', 'photos/5Zzz copy.png');
	});		

	$("#photo6").mouseenter(function(){
		$('#home-page #photo6').attr('src', 'photos/6Info.jpg');
	}).mouseleave(function(){
		$('#home-page #photo6').attr('src', 'photos/6Moon copy.png');
	});		

	$("#photo7").mouseenter(function(){
		$('#home-page #photo7').attr('src', 'photos/7Info.jpg');
	}).mouseleave(function(){
		$('#home-page #photo7').attr('src', 'photos/7Pills copy.png');
	});		

	$("#photo8").mouseenter(function(){
		$('#home-page #photo8').attr('src', 'photos/8Info.jpg');
	}).mouseleave(function(){
		$('#home-page #photo8').attr('src', 'photos/8Study copy.png');
	});		


});

