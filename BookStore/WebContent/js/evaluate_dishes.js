var order_list = new Array;

function createEvaluation(i)
{
	var dish_evaluation = document.createElement("div");
	var dish_evaluations = document.getElementById("evaluate_dishes");
	dish_evaluations.appendChild(dish_evaluation);
	dish_evaluation.style.position = "absolute";
	dish_evaluation.style.width = "100%";
	dish_evaluation.style.top = (i - 1) * 24 * height + 20 + "px";
	dish_evaluation.style.height = 24 * height + "px";
	var dish_img = document.createElement("img");
	var dish_divide = document.createElement("div");
	dish_divide.style.bottom = "0px";
	dish_divide.style.position = "absolute";
	dish_divide.style.heig = "0px";
	dish_img.setAttribute("class","dish_img");
	dish_divide.setAttribute("class","show_dividing");
	dish_img.src = "img/small_img/" + order_list[i].img;
	dish_evaluation.appendChild(dish_img);
	var evaluation_input = document.createElement("textarea");
	evaluation_input.setAttribute("class","evaluation_input");
	evaluation_input.value = "请写下您对菜品的感受吧，对他人的帮助很大哦~";
	dish_evaluation.appendChild(evaluation_input);
	dish_evaluation.appendChild(dish_divide);
	createStars(i,dish_evaluation);
	createStarsSettings(i);
}

window.onload = function()
{
	get_order_list();
	$("#evaluate_dishes").css("top", 15 * height + $("#evaluation_text").height() + 100 +"px");
	$("#check_order").css("font-size",(4 * width).toString() + 'px');
	$("#check_order").css("width",(20 * height).toString() + 'px');
}