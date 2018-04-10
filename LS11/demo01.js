/*
	创建于2018/4/9
*/
//1.立即执行表达式
//（注意：立即执行表达式可以是匿名函数）
({}) && function(a,b){
    return a>b?a:b;
}(5,9);
//9
!function(x,y){
    return x==y?true:false;
}("5",5);
//false
//===返回true
//函数前面有符号、运算符一定要在执行之后进行运算

!function(){return 2; }(); 
//false
!function(){return 0; }();
//true

//2.函数调用加分号 
(function() {
    console.log("111");
})();//没有分号的话会报错！
(function () {
    console.log("222");
})()

//3.变量共享问题
function f(){
    var getNumFuncs = [];//函数数组
    for(var i=0;i<10;i++){
            getNumFuncs[i] = function(){return i;};
    }
    return getNumFuncs;
}
var tmp = f();
tmp[3]();
//10
//存在变量共享问题

function f(){
    var getNumFuncs = [];
    for(var i=0;i<10;i++){
         (function(i){
            getNumFuncs[i] = function(){return i;};
         }(i));
    }
    return getNumFuncs;
}
var tmp = f();
tmp[3]();
//3