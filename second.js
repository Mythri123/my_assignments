//Closures
var profile = "Phani_My3"
function sayGn(nickname){
	var wish = "Profile: " + nickname;
	var gn = function(){
		document.write(wish);
	}
	gn()
}
sayGn(profile);

/* Closures are written to keep the function alive. 
If we dont have closure then nickname which we are passing as an argument will not be avaliable tho wish is avaiable.
And we know that js is full of functions. There are some functionality where an event (or lets say browser) 
is not actually triggered to call a function,  
to update something at this point
 we look forward for a concept called closure. */
var n =10;
console.log(n.length)