/*
	创建于2018/3/26
*/
//1.函数对象
console.log(typeof Function);
//function
console.log(typeof Array);	
//function
console.log(typeof Date);	 
//function
console.log(typeof Error); 	 
//function
console.log(typeof Math);	 
//object
console.log(typeof JSON);	
//object

console.log(Function instanceof Function);//true
console.log(Array instanceof Function);//true
console.log(Date instanceof Function);//true
console.log(Date instanceof Object);//true
console.log(Array instanceof Object);//true
console.log(Function instanceof Object);//true
console.log(Math instanceof Object);//true
console.log(Math instanceof Function);//false
console.log(JSON instanceof Function);//false
console.log(JSON instanceof Object);//true
---------------------重点在下面------------------------
console.log(typeof new Function());
console.log(typeof new Array());
console.log(typeof new Date());	
//function
//object
//object
Object instanceof Function;
//true

//深刻理解
console.log(typeof new new Function());
//object
console.log(typeof new new new Function());
//错误

//2.属性方法
function foo(x,y,z){
	console.log("haha");
}
foo.length;
//3             得出的是形参的个数
//如何得出实参个数呢？
//？？？？？？？？？？？？？arguments不是得到的是多出来的？
var foo = function (a,b){
    console.log(arguments);//类似数组的一个对象

    console.log(foo.arguments.length);
    // console.log(arguments.length);
    var args = Array.prototype.splice.call(arguments,0);
    console.log(args);
};
foo(1,2,3,4);
//4

//Js中caller和callee的区别
//caller 返回一个调用当前函数的引用 如果是由顶层调用的话 则返回null
（//举个栗子哈 caller给你打电话的人  谁给你打电话了 谁调用了你 很显然是下面a函数的执行 只有在打电话的时候你才能知道打电话的人是谁 所以对于函数来说 只有caller在函数执行的时候才存在）

      var callerTest = function() {
          console.log(callerTest.caller) ;  
     } ;
     function a() {
            callerTest() ;   
     }
     a() ;//输出function a() {callerTest();}
     callerTest() ;//输出null 
//callee 返回一个正在被执行函数的引用  （这里常用来递归匿名函数本身 但是在严格模式下不可行）
//callee是arguments对象的一个成员 表示对函数对象本身的引用 它有个length属性（代表形参的长度）
     var c = function(x,y) {
             console.log(arguments.length,arguments.callee.length,arguments.callee)
      } ;
     c(1,2,3) ;//输出3 2 function(x,y) {console.log(arguments.length,arguments.callee.length,arguments.callee)} 

//3.原型
Object.__proto__==Function.prototype;
//true
Function.__proto__==Array.prototype;
//false


//4.函数对象的绑定
var x=45;
var obj={
	x:23,
	text:function(){
		function foo(){
			console.log(this.x);
		}
		var fee = foo.bind(this);  //绑定
		fee();
		foo();
	}
};
obj.text();
//23
//45
-------------------------------------------------------
//硬绑定
var checkNumericRange = function (value) {
    if (typeof value !== 'number')
        return false;
    else
        return value >= this.minimum && value <= this.maximum;
};

var range = { minimum: 10, maximum: 20 };
var boundCheckNumericRange = checkNumericRange.bind(range);
var result = boundCheckNumericRange (12);//相当于range.boundCheckNumericRange (12)
console.log(result);
//true
--------------------------------------------------------------------------
var displayArgs = function (val1, val2, val3, val4) {
    console.log(val1 + " " + val2 + " " + val3 + " " + val4);
};
var emptyObject = {};
// Create a new function that uses the 12 and "a" parameters
// as the first and second parameters.
var displayArgs2 = displayArgs.bind(emptyObject, 12, "a");
// Call the new function. The "b" and "c" parameters are used
// as the third and fourth parameters.
displayArgs2("b", "c");// Output: 12 a b c
--------------------------------------？？？？？？？？？上面的-----------------

//5.caller
//函数对象属性之caller 获取调用当前函数的函数。例一
function test() {
    if (test.caller == null) {
        console.log("test is called from the toppest level");
    } else {
        console.log("test is called from the function:");
        console.log(test.caller.toString());
    }
}
//caller属性只有当函数正在执行时才被定义
console.log("没有调用的情况下test.caller为：",test.caller);

test();//output: test is called from ,call from the top level

function testOuter() {
    test();
}
testOuter();//call from the function testOuter

----------------------------------------------------------------
var obj = {
    foo1:function(){
        console.log(this.foo1.caller);
    },
    foo2:function abc(){
        this.foo1();
    }
};
obj.foo1();//null
obj.foo2();
// ƒ abc(){
//         this.foo1();
//     }

//6.callee
var func = function(n){
    if (n <= 0)
        return 1;
    else
        return n * func(n - 1);
        //return n * arguments.callee(n - 1);
};
console.log(func(4));

//优点，可以是匿名函数
(function(n){
    if (n <= 0)
        return 1;
    else
        return n * arguments.callee(n - 1);
}(4));



//7.call与apply
function swim(m,n){
    console.log("i'm:"+this.name+" i can swim ___",m,n);
}
var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
};

var me = {
    name:"ABC"
};
swim(1,2);
swim.call(me,3,4);
bird.fly(5,6);
bird.fly.call(me,7,8);
bird.fly.apply(me,[7,8]);
swim.call(null,1,2);
swim.apply(me,[9,10]);
bird.fly.apply(me,[11,12]);
swim.apply(null,[13,14]);
// i'm: i can swim ___ 1 2
// i'm:ABC i can swim ___ 3 4
// i'm:polly i can fly ___ 5 6
// i'm:ABC i can fly ___ 7 8
// i'm:ABC i can fly ___ 7 8
// i'm: i can swim ___ 1 2
// i'm:ABC i can swim ___ 9 10
// i'm:ABC i can fly ___ 11 12
// i'm: i can swim ___ 13 14

-----------注意：与call不同，apply第二个参数类型一定是Array-----------------


//7.toString与valueOf
//函数对象方法之 toString与valueOf 继承自Object.prototype的方法
//返回对象的字符串表示形式。objectname.toString([radix])
var foo = function () {
    console.log("foo");
};
console.log(foo.toString()," ___ ",typeof foo.toString());
console.log(foo.valueOf()," ___ ",typeof foo.valueOf());

console.log(foo.hasOwnProperty("toString"));
console.log(Object.prototype.hasOwnProperty("toString"));

console.log(foo.hasOwnProperty("valueOf"));
console.log(Object.prototype.hasOwnProperty("valueOf"));
//关于toString与valueOf的详细内容参见JS对象相关章节
-------------------------？？？？？？？？？？？？？???----------------------------------