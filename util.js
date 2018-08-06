

function ticktengah(tick){
	var arr = [];
	for(x=0;x<tick;x++){
		arr.push([x+.5,'']);
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
