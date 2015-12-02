<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<head>
<!-- 	<meta charset="UTF-8" /> -->
	<title>我的书斋</title>
	<script src="js/jquery.js"></script>
	<link rel="stylesheet" type="text/css" href="../css/default.css" />
	<link rel="stylesheet" type="text/css" href="../css/order_main.css" />
	<link rel="stylesheet" type="text/css" href="../css/dish_list.css" />
	<link rel="stylesheet" type="text/css" href="../css/alert.css" />
	<link rel="stylesheet" type="text/css" href="../css/preview.css" />
	<link rel="stylesheet" type="text/css" href="../css/filter.css" />
	<link rel="stylesheet" type="text/css" href="../css/search_view.css" />
	<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="HandheldFriendly" content="true">
	
</head>

<body>
	<div id = 'cover' style = 'display:none'>
	</div>
	<div id = 'preview_list' class = 'book_list'>
	</div>
	<script src="../js/data.js"></script>
	<script src="../js/draw_header.js"></script>
	<script src="../js/draw_order_main.js"></script>
	<script src="../js/apis.js"></script>
	<script src="../js/draw_header.js"></script>
	<script text= "text/javascript">
	window.onload = function() 
	{
		var window_height = document.all ? document.getElementsByTagName("html")[0].offsetHeight : window.innerHeight;
		var window_width = document.all ? document.getElementsByTagName("html")[0].offsetWidth : window.innerWidth;
		var width = window_width / 100;
		var height = window_height / 100;
		get_book_list();
	  
	}
	</script>
</body>