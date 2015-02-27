var cadena = "",resultado=null;
var ancho=parseFloat(400);
var alto=parseFloat(200);
var x=parseFloat(ancho/2);
var y=parseFloat(alto/2);


function dibujarPlano(){
	c = document.getElementById("canvas");
	c.width =ancho;
	c.height = alto;
	c.style.border="1px solid skyblue";

	ctx = c.getContext("2d");
	ctx.fillStyle = "#FF0000";

	ctx.moveTo(0,parseFloat(y));
	ctx.lineTo(parseFloat(x*2),parseFloat(y));
	ctx.stroke();

	ctx.moveTo(parseFloat(x),0);
	ctx.lineTo(parseFloat(x),parseFloat(y*2));
	ctx.stroke();

}
function concatenar(e){
	cadena+=e.target.id;
	resultado.value = cadena;
}
function igual(){
	c = document.getElementById("canvas");
	ctx = c.getContext("2d");
	ctx.fillStyle = "red";
	x1 =0;
	x2 =0;
	y2 =0;
	y2 =0;
	xinicial=null;
	yinicial=null;

	funcion = "2x+2+2";
	funcion = funcion.split("x");
	for(i = 0 ;i<funcion.length;i++){
		funcion2 +=funcion[i]
	}
	for(i = 0; i<y;i++){
		console.log("-------------------------------------------");
		p = "-2+4-2+"+i+"+1";
		yResultado = eval(p);
		console.log("Funcion: "+p+" ; Y="+yResultado);

		yResultado = yResultado < 0 ? eval((-1)*(yResultado)):eval((-1)*(yResultado)) ; 
		console.log("Preparado para operar: "+yResultado);

		yString = yResultado < 0 ? y+yResultado:y+"+"+yResultado;
		console.log("Ycoordenada : "+yString);
		yResultado = eval(yString);
		console.log("Coordenada Y:"+yResultado);
		console.log("X= "+parseFloat(x+i)+" ; Y= "+yResultado);
		x1 = parseFloat(x+i);
		y1 = yResultado;
		if(xinicial!=null && yinicial!=null){
			ctx.moveTo(x1,y1);
			xinicial = x1;
			yinicial = y1;
		}
		ctx.lineTo(x1,y1);
		ctx.stroke();

		p = "-2+4-2+"+"-"+i+"+1";
		yResultado = eval(p);
		console.log("Funcion: "+p+" ; Y="+yResultado);

		yResultado = yResultado < 0 ? eval((-1)*(yResultado)):eval((-1)*(yResultado)) ; 
		console.log("Preparado para operar: "+yResultado);

		yString = yResultado < 0 ? y+yResultado:y+"+"+yResultado;
		console.log("Ycoordenada : "+yString);
		yResultado = eval(yString);
		console.log("Coordenada Y:"+yResultado);
		console.log("X= "+parseFloat(x+i)+" ; Y= "+yResultado);
		x1 = parseFloat(x-i);
		y1 = yResultado;
		ctx.lineTo(x1,y1);
		ctx.stroke();
	}
	
}
function grafica(){
	c = document.getElementById("canvas");
	ctx = c.getContext("2d");
	ctx.fillStyle = "red";
	n = 2;
	parseFloat(n);

	ctx.moveTo(x,y);
	ctx.lineTo(ancho,-alto);
	ctx.stroke();
}
function cargarDoc(){
	for(i = 0 ; i<10 ; i++)
		document.getElementById(i).addEventListener("click",concatenar);

	document.getElementById("+").addEventListener("click",concatenar);
	document.getElementById("-").addEventListener("click",concatenar);
	document.getElementById("*").addEventListener("click",concatenar);
	document.getElementById("/").addEventListener("click",concatenar);

	document.getElementById("x").addEventListener("click",concatenar);
	document.getElementById("y").addEventListener("click",concatenar);
	document.getElementById("x2").addEventListener("click",concatenar);
	document.getElementById("igual").addEventListener("click",igual);
	resultado = document.getElementById("in");
	dibujarPlano();
	//grafica();

}
window.addEventListener("load",cargarDoc);



/*function igual(){
	c = document.getElementById("canvas");
	ctx = c.getContext("2d");
	ctx.fillStyle = "red";
	x1 =0;
	x2 =0;
	y2 =0;
	y2 =0;
	xinicial=null;
	yinicial=null;


	for(i = 0; i<y;i++){
		console.log("-------------------------------------------");
		p = "-2+4-2*"+i+"+1";
		yResultado = eval(p);
		console.log("Funcion: "+p+" ; Y="+yResultado);

		yResultado = yResultado < 0 ? eval((-1)*(yResultado)):eval((-1)*(yResultado)) ; 
		console.log("Preparado para operar: "+yResultado);

		yString = yResultado < 0 ? y+yResultado:y+"+"+yResultado;
		console.log("Ycoordenada : "+yString);
		yResultado = eval(yString);
		console.log("Coordenada Y:"+yResultado);
		console.log("X= "+parseFloat(x+i)+" ; Y= "+yResultado);
		x1 = parseFloat(x+i);
		y1 = yResultado;
		if(xinicial!=null && yinicial!=null){
			ctx.moveTo(x1,y1);
			xinicial = x1;
			yinicial = y1;
		}
		ctx.lineTo(x1,y1);
		ctx.stroke();

		p = "-2+4-2*"+"-"+i+"+1";
		yResultado = eval(p);
		console.log("Funcion: "+p+" ; Y="+yResultado);

		yResultado = yResultado < 0 ? eval((-1)*(yResultado)):eval((-1)*(yResultado)) ; 
		console.log("Preparado para operar: "+yResultado);

		yString = yResultado < 0 ? y+yResultado:y+"+"+yResultado;
		console.log("Ycoordenada : "+yString);
		yResultado = eval(yString);
		console.log("Coordenada Y:"+yResultado);
		console.log("X= "+parseFloat(x+i)+" ; Y= "+yResultado);
		x1 = parseFloat(x-i);
		y1 = yResultado;
		ctx.lineTo(x1,y1);
		ctx.stroke();
	}
	
}*/