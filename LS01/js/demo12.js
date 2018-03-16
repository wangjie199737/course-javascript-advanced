/*
	创建于2018/3/16
*/
//1.什么时候需要加上分号
function max(a,b) {
    return a>b?a:b;
}     //不加分号
console.log(max(2,3));

var min = function(a,b){
    return a<b?a:b;
};    //加分号
console.log(min(2,3));
//2.函数声明的提升，初步了解，详细内容见函数章节
foo();//可以在定义前执行，解析器会将foo函数声明提升
function foo() {
    console.log("foo");
}
//3.函数参数数量回顾
function f2(a,b,c,d) {
    console.log(a,b,c,d);
}
f2(2,3);
//2 3 undefined undefined
//4.严格模式
function f3() {
    //"use strict"
    gVar = 23;//严格模式下是不允许定义全局变量的
}