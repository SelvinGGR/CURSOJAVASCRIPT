

var arr = [5, 4, 3, 2, 1];
console.log(arr);


console.log( arr[0], arr[4], arr[6]);


arr.reverse();
console.log(arr);

arr = arr.map(function (elem){

elem *= elem;
return elem;

});

console.log(arr);

arr = arr.map(Math.sqrt);
console.log(arr);

arr = arr.join("GG");
console.log (arr);


arr = arr.split("GG");
console.log (arr);


arr.push("6");
console.log (arr);

arr.unshift("0");
console.log (arr);



var elimine = arr.pop();
console.log (arr,elimine);

arr.splice( 1,0, "10", "20", "30" );
console.log(arr);

arr = arr.slice( 0,2 );
console.log (arr);




