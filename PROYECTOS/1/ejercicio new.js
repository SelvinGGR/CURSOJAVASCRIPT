


function Persona(){

this.nombre = "selvin";
this.apellido ="gonzalez";
this.edad = 30;

this.nombreCompleto = function(){

	return this.nombre + " " + this.apellido ;
}


}

var selvin = new Persona();
console.log (selvin);
console.log (selvin.nombreCompleto());