


function identicfica (param){

if (typeof param == "function"){
param();

} else {
	console.log(param);
}
}


function persona(){


}

var juan = new persona ();

identicfica(function(){console.log("anonimous");});