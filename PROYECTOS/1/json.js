
var  objeto = {

	nombre: "Selvin",
	edad: 30
};

console.log ("el objeto literal", objeto);

var jsonString = JSON.stringify(objeto);

console.log(jsonString);

var objetoDesdeJson = JSON.parse( jsonString);
 console.log(objetoDesdeJson);

 console.log(objetoDesdeJson.nombre	);
 console.log(objetoDesdeJson.edad);















