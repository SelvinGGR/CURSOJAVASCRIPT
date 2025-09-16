 

 var fecha = new Date(2016, 9, 21);

 console.log(fecha);

Date.prototype.sumarDias = function(dias){

this.setDate(this.getDate() + dias);
return this;
}

Date.prototype.sumarAnios = function(anios){

this.setFullYear(this.getFullYear() + anios);
return this;
}

console.log(fecha);
console.log(fecha.sumarDias(5));
console.log(fecha);
console.log(fecha.sumarDias(-25));
console.log(fecha);
console.log(fecha.sumarAnios(-25));


