function get_order_list()  //根据用户信息获取订单的信息json（格式见orderlist.json）
{
	var dish_evaluations = document.getElementById("evaluate_dishes");
	order_list = [];
	$.getJSON("http://namespaceXP.github.io/yajia/json/orderlist.json", function(json){
		for(var i = 0; i < json.order_list.length; i++){
			order_list[i] = init_order_list_for_show(json.order_list[i].name, json.order_list[i].id, json.order_list[i].price,json.order_list[i].img, json.order_list[i].number);
		}
		
		for(var i = 0; i < order_list.length; i++){
			createEvaluation(i);
		}
		dish_evaluations.style.height = 24 * order_list.length * height + "px";
	})
}

function get_dish_list(dishtype){   //根据传入类型的ID获取菜的列表json
	//alert(dishtype);
	dishlist = [];
	$('#dish_list').html("");
	$.getJSON("http://namespaceXP.github.io/yajia/json/dishlist_type.json", function(json){
		for(var i = 0; i < json.dishes.length; i++){
			dishlist[i] = init_dish(json.dishes[i].name, json.dishes[i].id, json.dishes[i].score, json.dishes[i].price, json.dishes[i].img, json.dishes[i].sell);
		}
		dishlist.sort(function(a, b){return a.number > b.number? -1:1});
		set_dish_list();
	})
}

function get_search_list(keynode){   //根据传入的关键字获取搜索结果列表json
	$('#dish_list').html("");
	searchlist = [];
	$.getJSON("http://namespaceXP.github.io/yajia/json/dishlist_search.json", function(json){
		for(var i = 0; i < json.dishes.length; i++){
			dishlist[i] = init_dish(json.dishes[i].name, json.dishes[i].id, json.dishes[i].score, json.dishes[i].price, json.dishes[i].img, json.dishes[i].sell);
		}
		set_dish_list();
	})
}

function get_filter_list(min, max){   //根据传入的最低值和最高值获取筛选结果列表json
	$('#dish_list').html("");
	searchlist = [];
	$.getJSON("http://namespaceXP.github.io/yajia/json/dishlist_search.json", function(json){
		for(var i = 0; i < json.dishes.length; i++){
			dishlist[i] = init_dish(json.dishes[i].name, json.dishes[i].id, json.dishes[i].score, json.dishes[i].price, json.dishes[i].img, json.dishes[i].sell);
		}
		set_dish_list();
	})
}

function get_type_list(){   //获取菜的类型列表json
	$.getJSON("http://namespaceXP.github.io/yajia/json/dishtypes.json", function(json){
		for(var i = 0; i < json.types.length; i++){
			typelist[i] = init_type(json.types[i].name, json.types[i].id);
		}
		set_type_list();
	})
}

function get_hot_search_list()  //获取热门搜索的类型列表json
{
	$.getJSON("http://namespaceXP.github.io/yajia/json/hot_search.json", function(json){
		for(var i = 0; i < json.keywords.length; i++){
			hotlist[i] = json.keywords[i].name;
		}
		set_hot_search_list();
	})
}

function get_comment_list(dishid){  //根据传入的菜id获取菜的评论列表js
	show_dish_comments.innerHTML = '';
	$.getJSON("http://namespaceXP.github.io/yajia/json/dishcomment_id.json", function(json){
		for(var i = 0; i < json.comment_list.length; i++){
			commentlist[i] = init_comment(json.comment_list[i].User_id, json.comment_list[i].date, json.comment_list[i].score, json.comment_list[i].content);
		}
		set_comment_style();		
	})
	$("#blank").css("top",(3).toString() + 'px');
}