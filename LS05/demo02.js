/*
	创建于2018/3/18
*/
//1.练习
console.log(1+{});
//1[object Object]？？？？？？？？？
console.log("1"+2); 
//"12"
var x = "1";
console.log(x+1);
//11

//2.++
var i=1;
var b=++i + ++i + ++i;
b;
//9

//3.类型转化
var x="1";
x+=1;
console.log(x);
//11
typeof(x);
//"string"
x/=1;
console.log(x);
//11
typeof(x);
//"number"
//注意：这里的+还有+=是转化成string类型，但是/=就会转化成number类型