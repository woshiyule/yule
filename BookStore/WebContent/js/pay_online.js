window.onload = function()
{
	set_header();
	$("#continue_order").css("line-height",$("#continue_order").height()+"px");
	$("#pay_online").css("line-height",$("#pay_online").height()+"px");	
	$("#unpaid_bill").css("height",(10 * height).toString() + 'px');
	$("#unpaid_bill").css("top",(10 * height).toString() + 'px');
	$("#unpaid_bill0").css("left",(5 * width).toString() + 'px');
	$("#unpaid_bill0").css("top",(10 * height - $("#unpaid_bill0").height())/2);
	$('#unpaid_bill1').css("font-size", (4 * height).toString() + 'px');
	$('#unpaid_bill1').css("color", "red");
	$("#unpaid_bill1").css("left",$("#unpaid_bill0").width()+5 * width);
	$("#unpaid_bill1").css("top",(10 * height - $("#unpaid_bill1").height())/2);
	$("#unpaid_bill2").css("top",(10 * height - $("#unpaid_bill2").height())/2);
	$("#unpaid_bill2").css("left",$("#unpaid_bill0").width() + $("#unpaid_bill1").width()+5 * width);
	$("#pay_bill").css("top",20 * height + 50);
	$(".show_title").css("font-size",(3 * height).toString() + 'px');
	$(".pay_introduction").css("font-size",(2 * height).toString() + 'px');
	$("#pay_bill").css("height",4 * height + 50);
	$("#share_bill").css("top",20 * height + 120 + $("#pay_bill").height());
	$("#share_bill").css("height",4 * height + 80);
	$(".pay_go").css("font-size",(2 * height).toString() + 'px');
	$(".pay_go").css("height",(4 * height).toString() + 'px');
	$(".pay_go").css("line-height",(4 * height).toString() + 'px');
	$("#check_order").css("font-size",(4 * width).toString() + 'px');
	$("#check_order").css("width",(20 * height).toString() + 'px');
}