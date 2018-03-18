/*
	创建于2018/3/18
*/
//1.练习
console.log(3==new String(3));
console.log(3===new String(3));
//true    
//false

var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz"==obj1);
console.log("xyz"===obj1);
console.log(obj1 == obj2);   //这个两个对象==为啥就不等呢？？？？？？？？
console.log(obj1 === obj2);
console.log(obj1 == new String("xyz"));
//true
//false
//false
//false
//false

var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz"!=obj1);
console.log(obj1 !== obj2);
console.log(obj1 != obj2);
console.log(obj1 != new String("xyz"));
//false
//true
//true
//true

console.log(2 == 2);
console.log(new Number(2) == new Number(2));
console.log(2 == new Number(2));
//true
//false
//true
//引用转化为基本类型