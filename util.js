

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

function tick_y(tick){
	var arr = [];
	for(x=0;x<tick;x++){
		arr.push([x+1.5,'']);
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

function tick_yaxis(max,min,nbsp,placeholder1){
	let tick = (max-min)/5;
	var arr = [];
	if(placeholder1 == true){

		//ini untuk pain score
		arr.push([min,nbsp+'0']);
		arr.push([min+10,'<b>Pain Score</b> 5']);

		//ini untuk bp, pulse, temp
		for(x=min+20;x<max;x+=5){
			arr.push([x,nbsp+x]);
		}

		//ini untuk date
		arr.push([max,nbsp+'']);
		arr.push([max+10,'<b><br>TIME</b>']);
		arr.push([max+20,'<b><br>DATE</b>']);


	}else{
		for(x=min;x<max;x+=5){
			arr.push([x,nbsp+x]);
		}
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

function plot_pain_score(plot,array){
	array.forEach(function(item,index){
		let o = plot.pointOffset({ x: index+1, y: 23});
		$("#placeholder").append("<div style='position:absolute;left:" + (o.left-18) + "px;top:" + o.top + "px;color:#666;font-size:smaller'>"+item[1]+"</div>");
	});
}

function plot_time_date(plot,array){
	array.forEach(function(item,index){
		let o = plot.pointOffset({ x: index+1, y: 190});
		let mom = moment(item[1], "YYYY-MM-DD HH:mm:ss");
		$("#placeholder").append("<div style='position:absolute;left:" + (o.left-18) + "px;top:" + o.top + "px;color:#666;font-size:smaller'>"+mom.format('h:m</br>a')+"</div>");
		$("#placeholder").append("<div style='position:absolute;left:" + (o.left-18) + "px;top:" + (o.top-35) + "px;color:#666;font-size:smaller'>"+mom.format('DD-MM<br>YYYY')+"</div>");
	});
}

function markings(){
	var markings = [
		{ color: "#f6f6f6", yaxis: { from: 180 } },
		{ color: "#f6f6f6", yaxis: { to: 30 } },
		{ color: "#000", lineWidth: 2, yaxis: { from: 30, to: 30 } },
		{ color: "#000", lineWidth: 2, yaxis: { from: 180, to: 180 } }
	];

	return markings;
}

function formatTime(array){
	array = array.map(function(item,index){
		let mom = moment(item, "YYYY-MM-DD HH:mm:ss");
		return [index+1,mom.format('h:ma D/M/YY')];
	});

	return array;
}

function legend_tepi(plot){
	let o = plot.pointOffset({ x: 0, y: 120});
	// let bp = "Blood Pressure<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='sistole'>(BLUE)</span>";
	let bp=`<div class="row" >
				<div class="col-3">
					<b>Blood Pressure</b></br>
					<span class='sistole'>(BLUE)</span>
				</div>
				<div class="col-3">
					<b>Heart Rate</b></br>
					<span class='pulse'>(RED)</span>
				</div>
				<div class="col-3">
					<b>Temperature</b></br>
					<span class='temp'>(ORANGE)</span>
				</div>
			</div>`;

	$("#placeholder").append("<div class='legendtepi' style='top:" + o.top + "px;'>"+bp+"</div>");


	// o = plot.pointOffset({ x: 0, y: 100});
	// let hr = "Heart Rate<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='pulse'>(RED)</span>";
	// $("#placeholder").append("<div class='legendtepi' style='top:" + o.top + "px;'>"+hr+"</div>");


	// let o = plot.pointOffset({ x: 0, y: 90});
	// let bp = "Blood Pressure<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='sistole'>(Blue)</span>";
	// $("#placeholder").append("<div class='legendtepi' style='top:" + o.top + "px;'>"+bp+"</div>");
}