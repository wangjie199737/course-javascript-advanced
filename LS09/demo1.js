/*
	创建于2018/3/29
*/
//1.预解析
//解析器不会进行二次声明
function AA(){
	console.log("AA_1");
}
var AA;//这个相当于没有，因为不会二次声明，但是如果定义了之后就ok了
AA();
AA=function AA(){
	console.log("AA_2");
}
AA();
//2.解析器眼中的代码
//下面的原来的
console.log(a);//undefined
var a = 1;
console.log(a);//1

//下面的是眼中的
var a;
console.log(a);//undefined
a = 1;
console.log(a);//1

//原来的
console.log(a,b);//undefined undefined
var b = 23;
console.log(a,b);//undefined 23
var a = b;
console.log(a,b);//23 23

//原来的
console.log(obj1,obj2);//undefined undefined
var obj1 = {x:23};
console.log(obj1,obj2);//{x:23} undefined
var obj2 = obj1;
console.log(obj1,obj2);//{x:23} {x:23}
obj2.x =25;
console.log(obj1,obj2);//{x:25} {x:25}

//3.词法作用域
//这个输出不是取决于就近，而是需要看调用的原本作用域
var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    echo();
}
foo();//Jack
//4.定义变量时候如果不加var就是定义在全局，加了就是定义在局部
var f2 = function () {
    var y = "局部";
    //y = "全局";
    console.log(y);
};
f2();
console.log(y);
//局部
//报错：y is not defined