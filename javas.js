var cadena = "",
	resultado=null,
	ancho=parseFloat(400),
	alto=parseFloat(300),
	x=parseFloat(ancho/2),
	y=parseFloat(alto/2),
	ok = false;



function dibujarPlano(){

	canvas.width = ancho;
	canvas.height = alto;
	canvas.style.border="1px solid skyblue";

	ctx.moveTo(0,parseFloat(y));
	ctx.lineTo(parseFloat(x*2),parseFloat(y));

	ctx.moveTo(parseFloat(x),0);
	ctx.lineTo(parseFloat(x),parseFloat(y*2));
	ctx.lineWidth = 1;
	ctx.strokeStyle = '#C1C1C1';
	ctx.stroke();   

}
function concatenar(e){
	cadena+=e.target.id;
	resultado.value = cadena;
}
function funcionCuadratica(){
	reporte = new Array;
	j = 0;

	x1i = null,	y1i = null,	x2f = null,	y2f = null;

	for(i = 0; i<y ; i++){
		p = funcion.replace(/x/g,i);
		yResultado = eval(p);
		negativo = -yResultado;
		if(j<=10) {
			reporte[j] = "x = &nbsp;"+i+"&nbsp;&nbsp;&nbsp;,&nbsp;&nbsp; y = &nbsp;"+yResultado;
			j++;
		}
		yResultado = eval((-1)*(yResultado)) ;	
		yString = y+yResultado;
		x1i = parseFloat(x+i);
		y1i =  eval(yString);

		p = funcion.replace(/x/g,-i);
		yResultado = eval(p);
		if(j<=10 && i!=0) {
			reporte[j] = "x = "+"-"+i+"&nbsp;&nbsp;&nbsp;,&nbsp;&nbsp; y = &nbsp;"+yResultado;
			j++;
		}
		yResultado = eval((-1)*(yResultado)) ;	
		yString = y+yResultado;
		console.log(yString);
		x2f = parseFloat(x-i);
		y2f = eval(yString);

	}
	ctx.moveTo(x1i,y1i);
	ctx.lineTo(x2f,y2f);
	ctx.stroke();
	imprimirReporte(funcion,reporte);
	ok = true;
}
function funcionLineal(funcion){
	reporte = new Array;
	j = 0;

	x1i = null,	y1i = null,	x2f = null,	y2f = null;

	for(i = 0; i<y ; i++){
		p = funcion.replace(/x/g,i);
		yResultado = eval(p);
		negativo = -yResultado;
		if(j<=10) {
			reporte[j] = "x = &nbsp;"+i+"&nbsp;&nbsp;&nbsp;,&nbsp;&nbsp; y = &nbsp;"+yResultado;
			j++;
		}
		yResultado = eval((-1)*(yResultado)) ;	
		yString = y+yResultado;
		x1i = parseFloat(x+i);
		y1i =  eval(yString);

		p = funcion.replace(/x/g,-i);
		yResultado = eval(p);
		if(j<=10 && i!=0) {
			reporte[j] = "x = "+"-"+i+"&nbsp;&nbsp;&nbsp;,&nbsp;&nbsp; y = &nbsp;"+yResultado;
			j++;
		}
		yResultado = eval((-1)*(yResultado)) ;	
		yString = y+yResultado;
		console.log(yString);
		x2f = parseFloat(x-i);
		y2f = eval(yString);

	}
	ctx.moveTo(x1i,y1i);
	ctx.lineTo(x2f,y2f);
	ctx.stroke();
	imprimirReporte(funcion,reporte);
	ok = true;

}
function imprimirReporte(funcion ,arrayReporte){
	document.getElementById("reporte").innerHTML+="Ecuación: "+funcion+"<br>";
	for(i =0 ; i< arrayReporte.length ; i++)
		document.getElementById("reporte").innerHTML+=arrayReporte[i]+"<br>";
}
function limpiar(){
	document.getElementById("reporte").innerHTML="";
	resultado.value="";
	cadena ="";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dibujarPlano();
	ok = false;
}
function igual(){
	if(ok)
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
}

function cargarDoc(){
	for(i = 0 ; i<10 ; i++)
		document.getElementById(i).addEventListener("click",concatenar);

	document.getElementById("+").addEventListener("click",concatenar);
	document.getElementById("-").addEventListener("click",concatenar);
	document.getElementById("*").addEventListener("click",concatenar);
	document.getElementById("/").addEventListener("click",concatenar);

	document.getElementById("x").addEventListener("click",concatenar);
	document.getElementById("^").addEventListener("click",concatenar);
	document.getElementById("igual").addEventListener("click",igual);

	document.getElementById("CE").addEventListener("click",limpiar);
	anchoSection = ancho+5;
	document.getElementById("section").style.width=anchoSection+"px";
	resultado = document.getElementById("in");

	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	dibujarPlano();

}
window.addEventListener("load",cargarDoc);