var cadena = "",
	resultado=null,
	ancho=parseFloat(400),
	alto=parseFloat(ancho),
	x=parseFloat(ancho/2),
	y=parseFloat(alto/2),
	valorT=parseFloat(ancho/40);
	pixel = 0.05;
	ok = false;

function dibujarPlano(){

	canvas.width = ancho;
	canvas.height = alto;
	canvas.style.border="1px solid skyblue";

	ctx.beginPath();

	ctx.fillText("X",0,parseFloat(y));
	ctx.moveTo(0,parseFloat(y));
	ctx.lineTo(parseFloat(x*2),parseFloat(y));

	ctx.fillText("Y",parseFloat(x),10);
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

function concatenarCuadratica(funcion){
	return funcion.replace(/c/g,"*1*(x*x)*1");
}
function concatenarLineal(funcion){
	return funcion.replace(/x/g,"*1*x*1");
}
function concatenarSen(){

}
function concatenarTan(){

}
function concatenarCos(){

}
function dibujar(funcion){
	funcionOrigina = funcion;
	por = funcion.indexOf("x")==0?"":"*";
	if(funcion.indexOf("x")>-1)
		funcion = funcion.replace(/x/g,por+"1*x");
	if(funcion.indexOf("c")>-1)
		funcion = funcion.replace(/c/g,por+"1*(x*x)");
	while(funcion.indexOf("(*")>-1)
		funcion = funcion.replace('(*',"(");
	if(funcion.indexOf("sen(")>-1){
		console.log(funcion.indexOf("sen("));
	}
/*
 sen(*1*x)+2*1*x
 *0.5440211108893698(*1*x)+2*1*x
 *0.5440211108893698(*1*-10)+2*1*-10
*/
	ctx.beginPath();
	j = 0;
	console.log(funcion);
	reporte = new Array();
	for(i = -valorT ; i < valorT ; i+=pixel){
		funcion = funcion.replace(/sen/g, por+Math.sin(i) );
		console.log(funcion);
		funcion = funcion.replace(/x/g,i);
		console.log(funcion);
		res = eval(funcion);
		console.log(funcion);
		res = eval(y+(res*-1)) ;	
		if(i == -valorT)
			ctx.moveTo(x+i,res);
		ctx.lineTo(x+i,res);

		if(j<=10) {
			reporte[j] = "x = &nbsp;"+parseFloat(x+i)+"&nbsp;&nbsp;&nbsp;,&nbsp;&nbsp; y = &nbsp;"+res;
			j++;
		}
	}

	graficar();
	imprimirReporte(funcionOrigina, reporte);
	
}
function graficar(){
	ctx.lineWidth = 2;
	ctx.strokeStyle = '#000';
	ctx.stroke();
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
	//dibujar("2c+3c+100");
	//dibujar("2x+10");
	dibujar("sen(x)+2x+sen(x)");
	//graficar();

}
window.addEventListener("load",cargarDoc);



/*


function graficar(funcion){

	n = eval("2^x");
	n = "x^2";
	//n = eval("2+x");
	//n = eval("2^x+2+x");

	for(i = -y ; i < y ; i++){

		p =n;
		pos=p.indexOf("^");
		izquierda ="";
		derecha ="";
		l=0;
		for(h = 1 ; h<1000 && pos>-1; h++){		
			l=h;	
			v = p.charAt(pos+h);
			if(v=="")
				break;

			if(v!=null && v!="x" && izquierda==""){
				if(!isNaN(v))
					derecha+=v;
				else
					break;
			}
			v=p.charAt(pos-h);
			if(v!=null && v!="x" && derecha==""){
				if(!isNaN(v))
					izquierda+=v;
				else
					break;
			}
		}
		temp = i;
		total = 0;
		if(derecha!=""){
			for(m = 0;m<parseFloat(derecha);m++){
				total += temp*temp; 
			}
		}
		else if(izquierda!=""){

		}


		if(pos>-1){
			for(j=0;j<i;j++){
				p = p.replace(/x/g,"*1*"+i);
			}
		}
		funcion = funcion.replace(/x/g,"*1*"+i);
		p = p.replace(/x/g,i);

		ctx.moveTo(x1i,y1i);
		ctx.lineTo(x2f,y2f);
		ctx.stroke();
	}
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
/*function funcionLineal(funcion){
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
}*/

