var cadena = "",resultado=null;
var ancho=parseFloat(400);
var alto=parseFloat(200);
var x=parseFloat(ancho/2);
var y=parseFloat(alto/2);


function dibujarPlano(){

	canvas.width =ancho;
	canvas.height = alto;
	canvas.style.border="1px solid skyblue";

	ctx.fillStyle = "#FF0000";

	ctx.moveTo(0,parseFloat(y));
	ctx.lineTo(parseFloat(x*2),parseFloat(y));
	//ctx.stroke();

	ctx.moveTo(parseFloat(x),0);
	ctx.lineTo(parseFloat(x),parseFloat(y*2));
	ctx.stroke();

}
function concatenar(e){
	cadena+=e.target.id;
	resultado.value = cadena;
}
function funcionCuadratica(){

}
function funcionLineal(f){
	reporte = new Array;
	j = 0;

	funcion = f;
	funcion = "2*x+50";

	x1i = null,	y1i = null,	x2f = null,	y2f = null;

	for(i = 0; i<y ; i++){
		p = "2*"+i+"+4";
		//console.log(p);
		yResultado = eval(p);
		negativo = -yResultado;
		////console.log("+Y: "+yResultado);
		if(j<=10) {
			reporte[j] = "x = "+i+" ; y = "+yResultado;
			j++;
		}
		yResultado = eval((-1)*(yResultado)) ;	
		yString = y+yResultado;
		console.log(yString);	
		//yString = yResultado < 0 ? y+yResultado : y+"+"+yResultado;

		//console.log(yString);
		//yResultado = eval(yString);
		//////console.log("+Y: "+yResultado);
		x1i = parseFloat(x+i);
		y1i =  eval(yString);

		//console.log("x1i:"+x1i+", y1i: "+y1i+", Resultado:"+yResultado+" i:"+i);
		ii = -i;
		p = "2*"+ii+"+50";
		yResultado = eval(p);
		//console.log("-Y: "+yResultado);
		//yResultado = negativo;
		if(j<=10 && i!=0) {
			reporte[j] = "x = "+"-"+i+" ; y = "+yResultado;
			j++;
		}
		//yResultado = yResultado < 0 ? eval((-1)*(yResultado)):eval((-1)*(yResultado)) ; 
		yResultado = eval((-1)*(yResultado)) ;	
		yString = y+yResultado;
		console.log(yString);
		//yString = yResultado < 0 ? y+yResultado:y+"+"+yResultado;
		//console.log(yString);
		//yResultado = eval(yString);
		////console.log("-Y: "+yResultado);
		x2f = parseFloat(x-i);
		y2f = eval(yString);

		//console.log("x2f:"+x2f+", y2f: "+y2f+", Resultado: "+yResultado);

	}
	ctx.moveTo(x1i,y1i);
	ctx.lineTo(x2f,y2f);
	ctx.stroke();
	imprimirReporte(funcion,reporte);

}
function imprimirReporte(funcion ,arrayReporte){
	document.getElementById("reporte").innerHTML+="Ecuación: "+funcion+"<br>";
	for(i =0 ; i< arrayReporte.length ; i++)
		document.getElementById("reporte").innerHTML+=arrayReporte[i]+"<br>";
}
function dibujarPunto(){

}
function limpiar(){
	document.getElementById("reporte").innerHTML="";
	/*resultado.value="";
	cadena ="";*/
}
function igual(){
	limpiar();
	ctx.lineWidth = 0.5;
	ctx.fillStyle = "red";
	funcion = resultado.value;
	if(funcion!=""){
		if(funcion.indexOf("^")>-1)
			funcionCuadratica(funcion);
		else if(funcion.indexOf("x")>-1)
			funcionLineal(funcion);
	}

	/*c = document.getElementById("canvas");
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
		funcion2 +=funcion[i];
		funcion2 += 
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
	}*/
	
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

	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");

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