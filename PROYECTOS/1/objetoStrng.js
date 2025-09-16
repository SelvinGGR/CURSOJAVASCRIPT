

//un string es un objeto

var a = new String("selvin goenyi King");

console.log(a[0]);

var b = "gonzalez";

console.log(a.toUpperCase()); //uppercase vuelve todo lo escrito en mayuscula
console.log (a.toLowerCase()); //lowercase vuelve las letras minusculas


var i = a.indexOf("e");
console.log("la letra " , i); // busca la letra o palabra de la variable


i = a.lastIndexOf("n");
console.log("la letra " , i); // busca la ultima letra o palabra de la variable

var nombre = a.substr(3); // busca la posicion de la palabra que se busca en el parrafo
console.log(nombre);


var split = a.split("");
console.log(split);
console.log(split.length); 













