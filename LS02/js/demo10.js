/*
	创建于2018/3/18
 */
//包装对象
var a = 123;
var b = new Number(a);

console.log(a == b);
console.log(a === b);
//true
//false

//临时包装对象
var str = "abcde";
console.log(str.length);//临时包装成了String对象
str.length = 1;
console.log(str.length,str);//临时包装对象并不影响原始值

console.log(obj instanceof Object);
console.log(arr instanceof Object);
console.log(foo instanceof Object);
console.log(foo === window.foo);
//这个必须看上面的一个demo