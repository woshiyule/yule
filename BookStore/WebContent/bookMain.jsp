<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<!DOCTYPE html>
<head>
	<!-- <meta charset="UTF-8" /> -->
	<title>贝壳书斋</title>
	<script src="js/jquery.js"></script>
	<link rel="stylesheet" type="text/css" href="css/default.css" />
	<link rel="stylesheet" type="text/css" href="css/user_main.css" />
	<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="HandheldFriendly" content="true">
	
</head>

<body>
	<div id = "continue_order" class = "main_button" style = "top: 17%; left: 15%;">
		<img class = "main_button_image" src = "icons/myStore.jpg" />
		<p class = "main_button_word">
		我的书斋
		</p>
	</div>
	<div id = "pay_online" class = "main_button" style = "top:17%; right: 15%;">
		<img class = "main_button_image" src = "icons/myInfo.jpg" />
		<p class = "main_button_word">
		我的信息
		</p>
	</div>
	<div id = "go_dishlist" class = "main_button" style = "left: 15%;">
		<img class = "main_button_image" src = "icons/courseBook.jpg" />
		<p class = "main_button_word">
		课程书籍
		</p>
	</div>
	<div id = "call_service" class = "main_button" style = "right: 15%;">
		<img class = "main_button_image" src = "icons/otherBook.jpg" />
		<p class = "main_button_word">
		其他书籍
		</p>
	</div>
	<!-- <div id = "go_game" class = "main_button" style = "bottom: 12%; left: 15%;">
		<img class = "main_button_image" src = "icons/game.png" />
		<p class = "main_button_word">
		想玩游戏
		</p>
	</div>
	<div id = "contact_us" class = "main_button" style = "bottom: 12%; right: 15%;">
		<img class = "main_button_image" src = "icons/call.png" />
		<p class = "main_button_word">
		联系我们
		</p>
	</div> -->
	<div id = "footer">贝壳书斋V2.0</div>

	<script src="js/draw_header.js"></script>
	<script src="js/bookMain.js"></script>
	<script text= "text/javascript">
	window.onload = function()
	{
		$(".main_button").css("height",$(".main_button").width() + "px");
		$("#go_dishlist").css("top", (window.innerHeight - $(".main_button").width()) / 2 + "px");
		$("#call_service").css("top", (window.innerHeight - $(".main_button").width()) / 2 + "px");
	}
	</script>
</body>