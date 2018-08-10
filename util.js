

function ticktengah(tick,nbsp){
	var arr = [];
	for(x=0;x<tick;x++){
		arr.push([x+.5,''+nbsp]);
	}
	return arr;
}

function drawArrow(ctx, x, y, radius){
	ctx.beginPath();
	ctx.moveTo(x + radius, y + radius);
	ctx.lineTo(x, y);
	ctx.lineTo(x - radius, y + radius);
	ctx.stroke();
}

function drawArrow2(ctx, x, y, radius){
	ctx.beginPath();
	ctx.moveTo(x + radius, y - radius);
	ctx.lineTo(x, y);
	ctx.lineTo(x - radius, y - radius);
	ctx.stroke();
}

function nbsp(i){
	var str = "";
	for(x=0;x<i;x++){
		str = str+"&nbsp;";
	}
	return str;
}

function tick_time(tick,time){
	var arr = [];
	for(x=0;x<tick;x++){
		let mom = moment(time[x][1], "YYYY-MM-DD HH:mm:ss");
		arr.push([x+1.5,mom.format('h:m</br>a</br> D/M/YY')]);
	}
	return arr;
}

function xAxisReplot(id){
	let countertoplus = 0; 
	let nbspmargin = 38;
	$(id).children('.tickLabel').each(function(index){

		let left = parseInt($(this).css('left'));
		if(index == 0){
			countertoplus = left/2;
		}
		$(this).css('left',left-countertoplus+nbspmargin);
		
	});
}

function tick_yaxis(max,min,nbsp){
	let tick = (max-min)/5;
	var arr = [];
	for(x=min;x<max;x+=5){
		arr.push([x,nbsp+x]);
	}
	return arr;
}

function updRange(min,max){
	$("#customRange2").attr('min',min);
	$("#customRange2").attr('max',max);
	$('#rangeshow').text($("#customRange2").val());
	$('#rangemax').text(max);
}

function filterRange(array,range){
	return array.slice(0,range);
}
