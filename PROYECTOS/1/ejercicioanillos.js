function Jugador (nombre){
this.nombre = nombre;
this.pv = 100;
this.sp = 100;

this.curar = function( JugadorObjetivo){

if (this.sp >= 40){ 

this.sp -=40;

JugadorObjetivo.pv += 20;
} else {

	console.info(this.nombre + "no tiene sp");
}

this.estado (JugadorObjetivo);

}

this.estado = function (JugadorObjetivo){

	console.info(this);
	console.info(JugadorObjetivo);
}


this.TirarFlecha = function (JugadorObjetivo){
if(JugadorObjetivo.pv >40){
	JugadorObjetivo.pv -=40;
	this.estado(JugadorObjetivo);
}else{

	JugadorObjetivo.pv =0;
	console.error(JugadorObjetivo.nombre + "Murio!!!");
}	
this.estado(JugadorObjetivo);
}
};

var Goenyi = new Jugador("Goenyi")
var Atsuya = new Jugador("Atsuya")

console.log (Goenyi );
console.log (Atsuya );

Goenyi.curar(Atsuya);

















