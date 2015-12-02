window.onload=function(){
	var window_height = document.all ? document.getElementsByTagName("html")[0].offsetHeight : window.innerHeight ;
	var width = window_height/50;
	var current_height = 0;
	$("#set_font").css("font-size",width);
	current_height = $("#show_dish_picture").height();
	$("#show_dish_info").css("top",current_height);
	$("#show_dish_order_amount").css("line-height", $("#show_dish_order_amount").height()+"px");
	current_height += $("#show_dish_info").height();
	$("#show_dish_introduction_div").css("top", current_height);
	$("#show_dish_introduction").html("hsidohsaoidhsaoihdoisahoidhsaoidhoisahdoisahoidhsaoidhsaoihdoisahoidhsaoidhsaoihdoisahdoihsaoidhsaoidhsaoihdoisahdoisahdoihsaoidhsaoidhsaoihdoisahdoisahdoisahoidhoisahdoisad");
	$("#show_dish_introduction_div").css("height", ($("#show_dish_introduction").height()+ 80)+"px");
	current_height += ($("#show_dish_introduction").height()+ 80);
	$("#show_dish_comment_div").css("top", current_height);
}

