

setTimeout(function(){
console.log("paso un segundo");

}, 1000);

var segundos= 0;
var intervalo = setInterval(function(){
segundos ++;

if(segundos === 3){
clearInterval(intervalo);

}

console.log("seg", segundos);

}, 1000)

















