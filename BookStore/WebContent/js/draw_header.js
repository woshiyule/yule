var window_height = document.all ? document.getElementsByTagName("html")[0].offsetHeight : window.innerHeight;
var window_width = document.all ? document.getElementsByTagName("html")[0].offsetWidth : window.innerWidth;
var width = window_width / 100;
var height = window_height / 100;

var restaurant_name = "雅佳川菜馆";


function set_header(){	
	$('#logo').css("height", (6 * height).toString() + 'px');
	$('#logo').css("width", (6 * height).toString() + 'px');
	$('#logo').css("border-radius", (6 * height).toString() + 'px');
	$('#logo').css("top", ($("#header").height() - $("#logo").height())/2);
	$('#logo').css("left", ($("#header").height() - $("#logo").height())/2);
	
	$('#restaurant_name').html(restaurant_name);
	$('#restaurant_name').css("font-size", (2.8 * height).toString() + 'px');
	$('#restaurant_name').css("line-height",  $("#restaurant_name").height().toString() + 'px');
	
	$('#call_service').css("font-size", (2.6 * height).toString() + 'px');
	$('#call_service').css("right", $("#call_service").css('font-size'));
	$('#call_service').css("line-height",  $("#restaurant_name").height().toString() + 'px');
}

$('#call_service').click(function(){
	
});

set_header();