$(document).ready(function(event) {
	let menu_opened = false;
	$('.menu-btn').click(function (event){
		if (!menu_opened){
			$('.menu-box').css('transform', 'translate(0, 0)');
			menu_opened = true;
		}else{
			$('.menu-box').css('transform', 'translate(-100%, 0)');
			menu_opened = false;
		}
	});

});