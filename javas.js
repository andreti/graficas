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


	for(i = 0; i<alto;i++){
		yResultado = eval("20+3*"+0+"");
		yResultado = yResultado < 0 ? +yResultado:-yResultado ; 
		yResultado = eval(y+yResultado);
		ctx.moveTo(x,yResultado);
		parseFloat(yResultado);
		ctx.lineTo(x+i,y-i);
		x1 = x+i;
		y1 = y-i;
	}

	
ctx.stroke();
	//grafica();
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