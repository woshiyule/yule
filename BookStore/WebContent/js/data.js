function init_dish(dname, id, rank, price, image, number){
	var dish = new Object();
	dish.name = dname;
	dish.id = id;
	dish.rank = rank;
	dish.price = price;
	dish.img = image;
	dish.number = number;
	return dish;
}

function init_order_list_for_show(dname, id, price, image, number){
	var dish = new Object();
	dish.name = dname;
	dish.id = id;
	dish.price = price;
	dish.img = image;
	dish.number = number;
	return dish;
}

function init_type(dname, id){
	var type = new Object();
	type.name = dname;
	type.id = id;
	return type;
}


function init_order(dname, id, rank, price, number){
	var dish = new Object();
	dish.name = dname;
	dish.id = id;
	dish.price = price;
	dish.number = number;
	return dish;
}


function init_comment(id, date, score, content){
	var aContent = new Object();
	aContent.date = date;
	aContent.id = id;
	aContent.score = score;
	aContent.content = content;
	return aContent;
}