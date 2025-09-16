var persona =
{
nombre: "selvin", 
apellido: "gonzalez",
imrprimirNombre: function(){
console.log(this.nombre + " " + this.apellido);
},

direccion: {

	pais: "guatemala",
	obtenerPais:function (){
console.log( this.pais );

var nuevaDireccion = function(){
console.log(this);

}

nuevaDireccion();

	}
}

};
persona.imrprimirNombre();
persona.direccion.obtenerPais();

