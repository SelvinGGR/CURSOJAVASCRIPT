

//var reg1 = RegExp("a");


var reg2 = /a/;

var texto = "Hola mundooooo xdxdxd9";

var arr = texto.match (/^a/);
console.log(arr);
var arr = texto.match (/.o/);
console.log(arr);
var arr = texto.match (/[153]/);
console.log(arr);
var arr = texto.match (/[a-z]/);
console.log(arr);
var arr = texto.match (/[A-Z]/);
console.log(arr);
var arr = texto.match (/^H[a-z]/);
console.log(arr);
var arr = texto.match (/[a-z].$/);
console.log(arr);
var arr = texto.match (/ /);
console.log(arr);
var arr = texto.match (/\w/);
console.log(arr);
var arr = texto.match (/\d/); //decimales
console.log(arr);
var arr = texto.match (/\M/i); //la i es para buscar sea minuscula o mayuscula
console.log(arr);

var arr = texto.match (/\M/ig); //la i es para buscar sea minuscula o mayuscula
console.log(arr);

var arr = texto.match (/\M/ig); //la i es para buscar sea minuscula o mayuscula
console.log(arr);


var arr = texto.match (/o+/g); //la i es para buscar sea minuscula o mayuscula
console.log(arr);

var arr = texto.match (/o?/g); //la i es para buscar sea minuscula o mayuscula
console.log(arr);

var arr = texto.match (/o*/g); //la i es para buscar sea minuscula o mayuscula
console.log(arr);

var arr = texto.match (/o{2,}/g); //la i es para buscar sea minuscula o mayuscula
console.log(arr);

var arr = texto.match (/o{2,3}/g); //la i es para buscar sea minuscula o mayuscula
console.log(arr);

var arr = texto.match (/o{2,3}/g); //la i es para buscar sea minuscula o mayuscula
console.log(arr);

var texto = "Aeropuerto";

console.log (texto);

var arr = texto.match (/[aeiou]{2,2}/ig);
console.log(arr);

var arr = texto.match (/\w{2,2}/ig);
console.log(arr);
var arr = texto.match (/\w{2,2}/ig);
console.log(arr);

var texto = "la respuesta de la suma es : 45 + 60 = 105";

console.log (texto);

var arr = texto.match (/\d{1,}|respuesta/g);
console.log(arr);

var arr = texto.match (/\d{1,}|respuesta/g);
console.log(arr);








