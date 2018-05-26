/*
	创建于2018/5/14
	*/
//1.
//（1）避免程序直接崩溃 （2）在调试过程中
//try后面必须有catch或者是finally，有一个也行，都有也行
try{
	var a=new Array(-5);
	console.log("XX");
}
catch(e){
	console.log(e);
}
finally{
	console.log("finally");
}
//不至于直接就崩掉，使自己的程序不断的健壮
//也可以抛出一个字符串
try{
	console.log("X");
}
catch(e){
	console.log(e);
	console.log("YY");
}
//如果没有发生异常，没有抛出，所以就不会catch。所以就不会输出YY

console.assert(2>3,"haha");//当前面的是错，就会输出后面的东西。但是是真就不会输出任何的东西
//Assertion failed: haha

finally是不管你是否异常都会执行

//注意异步执行 node、还有linux
try{
	function abc(x,cb){
		console.log(x);
		cb();
    }
	abc("xx",function(){
		var arr = new Array(-1);
	});
}
catch(e){
	console.log(e);
}

//JS的异步
//思考这种情况是否能捕获到异常，回调函数捕获异常的问题
try{
	function abc(x,cb){
		console.log(x);
		cb();
    }
}
catch(e){
	console.log(e);
}
abc("xx",function(){
    var arr = new Array(-1);
});

引用的分类


