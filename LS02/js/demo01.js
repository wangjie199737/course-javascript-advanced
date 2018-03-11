/*
	创建于2018/3/11
*/

//普通练习

console.log(typeof 123);
//number
console.log(typeof false);
//boolean
console.log(typeof "123");
//string
console.log(typeof null);
//object
console.log(typeof undefined);
//undefined
console.log(typeof {name:"wangjie",age:"20"});
//object
console.log(typeof function foo(){});
//function

//特殊练习

console.log(typeof Array);
//function
console.log(typeof Function);
//function
console.log(typeof Date);
//function
console.log(typeof Number);
//function
console.log(typeof Math);
//object
console.log(typeof JSON);
//object

//instanceof

var a={name:"wangjie",age:"20"};
console.log(a instanceof Object);
//true
var a=[1,2,3];
console.log(a instanceof Array);
//true
var a=[1,2,3];
console.log(a instanceof Function);
//false
var a=[1,2,3];
console.log(a instanceof Object);
//true
var a=function foo(){
	var x=2;
	//...
}
var b=new a();
console.log(b instanceof a);
//true
var a=function foo(){
	var x=2;
	//...
}
var b=new a();
console.log(typeof b);
//object
var a=function foo(){
	var x=2;
	//...
}
var b=new a();
console.log(b instanceof Object);
//true
