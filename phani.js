//factory pattern

var peopleFactory = function(age,name,state){
	//create temp object
	var temp = {};
	//var temp = new Object;
	temp.age = age;
	temp.name = name;
	temp.state = state;
	//creating another function
	temp.peopleFunc = function(){
		document.write(this.name + this.age + this.state);
	};
	return temp;
}

//to create a person object

var person1 = peopleFactory(26,"Phani",'TX');
var person2 = peopleFactory(27,"T","CA");

person1.peopleFunc();
person2.peopleFunc();

//constructor pattern
//the below function behaves as class
var peopleConstructor = function(name,age,state){
	//instead creating temp object, create object by itself
	this.name = name;
	this.age = age;
	this.state = state
	this.printPerson = function(){
		document.write
		(this.name + this.age + this.state);
	};
};
//create other object from above object itself unlike returning object in factory pattern
//we need to use new, to create a new object
var person1 = new peopleConstructor('john',23,'TX');
var person2 = new peopleConstructor('kim',24,'CA');
person1.printPerson();
person2.printPerson();
//The problem with this is we need to create new var for every object, if we have 100 objects we need to create 100 variables

//prototype pattern
//To overcome constructor pattern prototype pattern is introduced
//instead creating function with properties we are going to create empty object
//we are going to create a empty object like below first(no objects just function skeliton)
//to create a shared object we write prototype
var peopleProto = function(){

};
peopleProto.prototype.age = 0;
peopleProto.prototype.name="no name";
peopleProto.prototype.city="no City";

peopleProto.prototype.printPerson = function(){
	document.write(this.name + this.age + this.city <br/>);
}
//lets create objects from the above prototype

var person1 = new peopleProto();
//we are going to assagin properties one by one after declartion
person1.name = 'john';
person1.age = 23;
person1.city = 'CA';