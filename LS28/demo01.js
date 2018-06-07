/*
    新建于2018/6/7
*/
//1.数组解构赋值
//好处1  将两个数组交换 如果是直接交换就得定义一个中间变量
var a=[1],b=['2'];
console.log(a,b);
[a,b]=[b,a];
console.log(a,b);
//[1] ["2"]
//["2"] [1]
//好处2  给变量设置默认值
var [foo3=3]=[];
console.log(foo3);
//3例子
let a=[];
let b=[1,2,3,4,5];
[a[0],,a[1],,a[2]]=b;
console.log(a);
//[1, 3, 5]
//4var 和 let 的不同
//var 会进行提升 但是let有块作用域


//2.对象解构赋值
var {bar2,foo2}={foo2:'ccc',bar2:'ddd'};
console.log(foo2,bar2);
//ccc ddd

//3.字符串解构赋值
const [a,b,c,d,e]='hello';
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);


//数字转换成字符串 
let {toString:s1} =123;
console.log(s1===Number,Proxy)