/*
	创建于2018/5/3
*/
//1.异步执行


//2.数组是对象，进行数组之间赋值的时候是两个都会影响的
var a1 = [1,2,3];
var a2 = a1;
a2.length = 0;
console.log(a1,a2);
//[] []

var a3 = [1,2,3];
var a4 = a3;
a4 = [];
console.log(a3,a4);
//[1,2,3] []
//3.引用数据类型和基本数据类型的区别


//4.delete不彻底 会将其置为空。如果想彻底删除，可以改变长度还有pop等等
var a = ["hello"];
a[1] = 3.14;//增加
a[2] = "world";
console.log("删除a[2]前的数组a",a);
delete a[2];//删除
console.log("删除a[2]后的数组a",a);
//['hello',3.14,'world']
//["hello", 3.14, empty]


//5.空和undefined的区别，空就是没有给赋值，undefined是将空赋值给他

//6.类数组对象 有元素和属性

//7.静态方法 demo05细细
function p1(){
	console.log(Array.isArray(arguments));
}
p1(1,2,3,"ss");
//false



function f(){
	console.log(arguments);
	console.log(arguments instanceof Array);
	Array.prototype.pop.call(arguments);
	console.log(arguments);
}
f(1,2,3,"sl");


//8.高阶函数
//将函数作为返回值还有参数传递

//9.在一定范围中，[]中的数字才是下标，一旦超出了就是属性
var a = [];
a[-1.23] = true; //创建一个名为“-1,23”的属性
a["100"] = 0;   // 数组的第101个元素   -------这个会进行隐式类转化
a[1.00] = "Hi"; //和a[1]相当          -------这个会进行隐式类转化
console.log(a.length);
console.log(a);
//101
//[empty, "Hi", empty × 98, 0, -1.23: true]

//10.一些特殊数组的长度
var a1 = [,"abc"];
console.log(a1.length);
//2
for(var i in a1){
    console.log(i,a1[i]);//输出几个元素
}
console.log(0 in a1,1 in a1);
//1 abc
//false true   --注意这个0，1指的是数组的下标


var a3 = [,,];
console.log(a3.length);
console.log(["a","b"].length);
console.log(["a","b",].length);
console.log(["a","b",,].length);
//2
//2
//2
//3

//11.数组方法改编，方法的破坏性
var arr3 = [-1,-20,7,50];
arr3.sort();
console.log(arr3);
-----------------------------------------
arr3.sort(function (a,b) {return a-b;});
------------------------------------------
var arr2 = ["banana","apple","pear","orange"];
arr2.sort(function(a,b){return a[1]>b[1];});
console.log(arr2);