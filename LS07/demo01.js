/*
	创建于2018/3/19
*/

//1.函数定义 函数表达式方式 等号右侧可以是匿名函数也可以是非匿名函数
function max(a,b){
    return a>b?a:b;
}
max(2,3);

var max = function (a,b){ //匿名函数
    return a>b?a:b;
};
max(2,3);

/*
//略讲：非匿名函数便于调用栈追踪 测试使用匿名和非匿名函数的区别
var foo = function max(a,b){
    console.trace();
    return console.log(a>b?a:b);
};
foo(2,3);

foo = function min(a,b){
    console.trace();
    return console.log(a>b?b:a);
};
foo(2,3);
*/

//函数定义 Function构造函数方式
var max = new Function("a","b","return a>b?a:b");   
max(2,3);

//new Function 配置实例参见 NodeFunTest文件夹
//理解 new Function





//课上
var str="return a>b?a:b";
var min=new Function("a","b",str);
min(2,3);
//2
var max =new Function("a","b","return a>b?a:b");
max(2,3);
//3


var x=45;
var test=function(){
console.log(this.x); 

}
var obj={
 x:23
};
obj.test=test;
obj.test();
test();
//23
//45	


var x=45;
var obj={
	x:23,
	test:function(){
		 function foo(){
			console.log(this.x);
		}
		foo();
	}
}
obj.test();
//45    ??????????这个为啥是window是主体啊

