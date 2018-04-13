/*
	创建于2018/4/12
*/
//1.闭包
function f1(){
	var x=1;
	function f2(){
		return x++;
	}
	return f2;
}
var f3=f1();
console.log(f3());
console.log(f3());
//1
//2

//1.多个闭包
function createInc(startValue){
	return function(step){
		startValue+=step;
		return startValue;
	}
}
var inc = createInc(5);
console.log(inc(1));//6
console.log(inc(2));//8
var inc2 = createInc(5);
console.log(inc(1));//9
console.log(inc2(1));//6
//形成了两个闭包，独立的包裹体


function f1(m){
	var z = 100;
	function f2(x) {
    	return function (y) {
        	console.log(x + y + (++z));//设置断点，查看有几个闭包
    	}
	}
	return f2(m);
}
var f3 = f1(2); 
f3(10);
f3(10);
