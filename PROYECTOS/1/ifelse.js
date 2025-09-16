


var nota = 70;

if (nota >60){

	console.log("Aprobo");
}
else {

	console.log("Reprobo");
}
console.log ("Termino el codigo");




var nota1 =50;

if (nota1 >=90){

	console.log("A");
}
else if(nota1>=80){

	console.log("B");
}
else if(nota1>=70){

	console.log("C");
}
else if(nota1>=60){

	console.log("d");
}
else {

	console.log("F");
}
console.log ("Termino el codigo");

var a = 10;
var b = 20;
var c = 0;

if (a >b){

	c = a;
}else {

	c=b;
}

console.log(c);




var a1 = 500;
var b1 = 20;
var c1 = (a > b)? a : b;

console.log(c1);




var a2 = 500;
var b2 = 20;
var c2 = (a > b)? function()
{ console.log ("A es mayor que b"); return a;}(): function
(){
console.log("B es mayor que a")();
	return b;
};

console.log(c2);




var a3 = 500;
var b3 = undefined;

var c3 = a || b;

console.log(c3);





