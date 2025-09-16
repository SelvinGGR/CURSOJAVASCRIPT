function Persona(){
	
	this.nombre: "selvin";
	this.apellido: "Gonzalez";
	this.edad = 30;

	this.imprimirInfo = function(){

		console.log(this.nombre + " " + this.apellido + "("+ this.edad +")");
	}
}

persona.prototype.pais = "Guatemala";

var sel = new Persona();

console.log(sel.pais);