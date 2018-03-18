/*
	创建于2018/3/18
*/
//1.类型转换
var a1 = 20;
var a2 = 23.4;
console.log(parseInt(a2));
console.log(parseFloat("23.456xy"));
//如果是非数字，则先转换为字符串，然后在转成整型
////parseInt和parseFloat都为全局方法，即window全局对象的方法
//23
//23.456
//2.舍入函数
var a2=23.4;
console.log(Math.ceil(a2));      //向上取整
console.log(Math.floor(a2));     //向下取整
console.log(Math.round(a2));     //四舍五入
//24  
//23    
//23
//3.指数形式
a3 = 5e2; //指数形式
console.log(a3);  //??这里的e2是100吗    对e是10！
//500
//4.NaN
var x = Number("xis021");//试着转成Number类型
console.log(x);
//4.NaN
isNaN(x);
//true
typeof NaN;
//"number"

console.log(Math.log(-1));//NaN??????
console.log(Math.acos(2));//NaN???????
console.log(NaN === NaN);//false???????
//5.无穷与0
//Infinity与-Infinity
var y1 = 2/0;
console.log(y1);//Infinity
var y2 = -2/0;
console.log(y2);//-Infinity
isFinite(y2);//false，非有限数
isFinite(23);//true，有限数

//0与-0
var z1 = 1/Infinity;
console.log(z1);//0
var z2 = -1/Infinity;
console.log(z2);//-0
