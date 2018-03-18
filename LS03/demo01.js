/*
	创建于2018/3/18
*/
//Number构造器属性（静态属性）
Number.MAX_VALUE
Number.MIN_VALUE
Number.NaN
Number.NEGATIVE_INFINITY
Number.POSITIVE_INFINITY

//Number原型方法(Number对象继承的方法）
// Number.prototype.toFixed();
// Number.prototype.toPrecision();
// Number.prototype.toString();
// Number.prototype.toExponential();

var n1 = 12345.6789;
console.log(n1.toFixed(2));
console.log(n1.toPrecision(2));
console.log(n1.toString());
console.log(n1.toExponential(2));
//12345.68
//1.2e+4
//12345.6789
//1.23e+4

console.log(NaN === NaN);
console.log(isNaN("12,3"));
console.log(Math.floor(3.8));
console.log(Math.floor(-3.8));
console.log(Math.ceil(3.2));
console.log(Math.ceil(-3.2));
console.log(Math.round(-3.2));
console.log(Math.round(-3.5));
//round对于0.5将进行上舍入
console.log(Math.round(-3.8));
//false
//true
//3
//-4
//4
//-3
//-3
//-3
//-4

//其余部分参见《深入理解JS》第11章

