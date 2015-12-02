function createStars(i,div)
{
	var rating = document.createElement("div");
	rating.setAttribute("class","shop_rating");
	rating.style.position = "absolute";
	rating.style.width = "60%";
	rating.style.left = 40 * width+"px";
	rating.style.bottom = "40px";
	rating.style.color = "black";
	div.appendChild(rating);
	var title = document.createElement("span");
	var level = document.createElement("ul");
	level.setAttribute("class","rating-level");
	level.setAttribute("id","stars"+i);
	level.style.position = "absolute";
	level.style.left = 20*width+"px";
	level.style.top = "-2px";
	rating.appendChild(level);
	var rating_li1 = document.createElement("li");
	var rating_a1 = document.createElement("a");
	level.appendChild(rating_li1);
	rating_li1.appendChild(rating_a1);
	rating_a1.setAttribute("class","one-star");
	rating_a1.setAttribute("star:value","20");
	rating_a1.setAttribute("href","javascript:void(0);");
	var rating_li2 = document.createElement("li");
	var rating_a2 = document.createElement("a");
	level.appendChild(rating_li2);
	rating_li2.appendChild(rating_a2);
	rating_a2.setAttribute("class","two-stars");
	rating_a2.setAttribute("star:value","40");
	rating_a2.setAttribute("href","javascript:void(0);");
	var rating_li3 = document.createElement("li");
	var rating_a3 = document.createElement("a");
	level.appendChild(rating_li3);
	rating_li3.appendChild(rating_a3);
	rating_a3.setAttribute("class","three-stars");
	rating_a3.setAttribute("star:value","60");
	rating_a3.setAttribute("href","javascript:void(0);");
	var rating_li4 = document.createElement("li");
	var rating_a4 = document.createElement("a");
	level.appendChild(rating_li4);
	rating_li4.appendChild(rating_a4);
	rating_a4.setAttribute("class","four-stars");
	rating_a4.setAttribute("star:value","80");
	rating_a4.setAttribute("href","javascript:void(0);");
	var rating_li5 = document.createElement("li");
	var rating_a5 = document.createElement("a");
	level.appendChild(rating_li5);
	rating_li5.appendChild(rating_a5);
	rating_a5.setAttribute("class","five-stars");
	rating_a5.setAttribute("star:value","100");
	rating_a5.setAttribute("href","javascript:void(0);");
	var tip = document.createElement("span");
	rating.appendChild(tip);
	tip.setAttribute("class","result");
	tip.setAttribute("id","stars"+i+"-tips");
	tip.style.display = "none";
	var rating_input = document.createElement("input");
	rating_input.setAttribute("type","hidden");
	rating_input.setAttribute("id","stars"+i+"-input");
	rating_input.setAttribute("name","b");
	rating_input.setAttribute("value"," ");
	rating_input.setAttribute("size","2");
	rating.appendChild(rating_input);
}
function createStarsSettings(i)
{
	var TB = function() { 	
		var T$ = function(id) { return document.getElementById(id) } 
		var T$$ = function(r, t) { return (r || document).getElementsByTagName(t) } 
		var Stars = function(cid, rid, hid, config) { 
			var lis = T$$(T$(cid), 'li'), curA; 
			for (var i = 0, len = lis.length; i < len; i++) { 
				lis[i]._val = i; 
				lis[i].onclick = function() { 
				T$(rid).innerHTML = '<em>' + (T$(hid).value = T$$(this, 'a')[0].getAttribute('star:value')) + '分</em> - ' + config.info[this._val]; 
				curA = T$$(T$(cid), 'a')[T$(hid).value / config.step - 1]; 
				}; 
			lis[i].onmouseout = function() { 
				curA && (curA.className += config.curcss); 
			} 
			lis[i].onmouseover = function() { 
				curA && (curA.className = curA.className.replace(config.curcss, '')); 
			} 
			} 
		}; 
		return {Stars: Stars} 
	}
	().Stars('stars'+i, 'stars'+i+'-tips', 'stars'+i+'-input', { 
	'info' : ['味道极差', '味道不咋地', '味道一般', '挺好吃的', '超级好吃'], 
	'curcss': ' current-rating', 
	'step': 20 
	}); 
}