/*
	创建于2018/3/15
*/
//1.数据类型
var num = 1;
var str = "some string";
var b = true;
var n = null;
var u = undefined;

var arr = ["apple", "pear", "banana"];
var func = function(){
    return "this a function";
};
var obj = new Object();
obj.name = "test";

console.log("\n");
console.log(typeof num); //number
console.log(typeof str); //string
console.log(typeof b); //boolean
console.log(typeof n); //这里返回的是object，这是JS语言的特别之处
console.log(typeof u); //undefined
console.log("\n");
console.log(typeof arr); //object
console.log(typeof func); //function
console.log(typeof obj); //object

//特殊
//思考
console.log(typeof Number);     //function
console.log(typeof String);     //function
console.log(typeof Boolean);    //function
console.log(typeof Object);     //function  //??
console.log(typeof Array);      //function
console.log(typeof Function);   //function
console.log(typeof RegExp);     //function
console.log(typeof Error);      //function  //??
console.log(typeof Math);       //object
console.log(typeof JSON);       //object 
//??什么时候是function 什么时候是object??

//2.包装对象
var str2 = "abc";
console.log(str2.length);
str2.length = 1;
console.log(str2);
//3
//abc