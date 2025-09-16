var persona = function (){
this.nombre = "juan";
this.edad = 26;
this.apellido = "Gonzalez";

};

var selvin = new persona();


for ( prop in selvin){

	console.log(prop, ":",selvin[prop]);
}






















