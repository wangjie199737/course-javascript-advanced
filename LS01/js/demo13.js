/*
	创建于2018/3/18
 */
 //1.立即执行表达式 IIFE
(function (x,y) {
    return x>y?x:y;
}(4,5));

var result = function min(x,y) {
    return x<y?x:y;
}(2,3);
console.log(result);
//2.作用域问题
var x = 23;
var foo = function () {
    var x = 34;
    console.log("inside x:",x);//输出多少     34
    y = 45;//加var和不加var的区别
    console.log("inside y:",y);//输出多少     45
};
foo();//如果没调用会如何
console.log("outside x:", x);            // 23
console.log("outside y:", y);           // 45   默认为全局变量