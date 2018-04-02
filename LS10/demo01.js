/*
	创建于2018/4/2
*/
//1.作用域问题
var a = 10,
    b = 20;
function fn() {
    //fn局部作用域
    var a = 100,
        c = 200;
    //console.log(a,b,c,d);
    function bar() {
        //bar局部作用域
        var a = 500,    //如果把这个，换成；  就会在window中定义
            d = 600;
        console.log(a,b,c,d);
    }
    bar();
}
fn();
//500 20 200 600 
//console.log(a,b,c,d);
//c is not defined


//2.词法作用域
var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    echo();
}
foo();
//Jack
//注意词法作用域的意思就是函数调用和他的调用位置没有关系，主要看他在那里被定义，访问的东东都是原来的
----------------------------------------------------------------------------------------------
//通过new Function实例化的函数对象，不一定遵从静态词法作用域
var scope = "g";
function foo(){
	var scope = "l";
	return new Function("console.log(scope);")
}
foo()();
//g


//3.块作用域
{
    var a = 4;
}
console.log(a);
//没有定义局部变量 
//变量污染、变量共享问题,尤其是异步执行的情况下。如果是两个单独的文件的情况下，更容易造成变量污染
-------------------------------下面是解决方法--------------------------------------------------
var userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
    //alert("userId = "+userId);
};
//多人协同开发时问题，块作用域缺陷的问题可能会更加明显
(function(){
    var a=2,b=3;
    if(a<b){
        var userId = 234;
    }
}());
//立即执行表达式

//4.利用工具来理解上下文以及调用栈等
//调试~