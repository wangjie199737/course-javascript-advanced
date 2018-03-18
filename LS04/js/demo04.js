/*
	创建于2018/3/18
*/
//1.严格模式
// 严格模式的目的：
// 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为
// 消除代码运行的一些不安全之处，保证代码运行的安全


// 严格模式使用方式
"use strict"//全局使用

function foo() {
    "use strict"//函数内部使用
}



function  sloppyFunc() {
    sloppyVar = 123;
}
sloppyFunc();
console.log(sloppyVar);


//下边的实例，若使用严格模式则报错
function  sloppyFunc() {
    //'use strict'
    sloppyVar = 123;
}
sloppyFunc();
console.log(sloppyVar);



//检测是否在严格模式的方法
function isStrictMode() {
    return this === window?false:true;
}
"use stirct"
console.log(isStrictMode());