/*
	创建于2018/5/7
*/
//回顾
//1.forEach
var arr1=[2,5,8];
var arr2=[1,6,7];
arr1.forEach(function(a,i){
		console.log(a,i,this);
},arr2);
console.log(arr1);;


var arr1=[2,5,8];
var arr2=[1,6,7];
var arr3=[];
arr1.forEach(function(a,i){
		arr3[i]=a>arr2[i]?a:arr2[i];
},arr2);//这里传参不传参都是一样的
console.log(arr3);
//[2，6，8]


//date
//1.
var today=new Date();
today.setMonth(6);
console.log(today)
//知道明年的今天是星期几
//也就是先得到今天的年月日，然后呢set（变换）他的月份，就知道相应的星期了


//2.正则表达式
-------------g是全局 i是忽略大小写---------------------
console.log("moon2xyz".replace(/o/,"ab"));//mabon2xyz
console.log("moon2xyz".replace(/o/g,"ab"));//mababn2xyz
console.log("moon2 ooxyz".replace(/\bo/g,"ab"));//moon2 aboxyz
console.log("moon2xyz".replace(/\dx/,"_"));//moon_yz
console.log("moon2xyz".replace(/[xyz]/g,"ab"));//moon2ababab
console.log("m2on2x2z".replace(/\d[zo]/g,"ab"));//mabn2xab
console.log("m2on2x2z".replace(/2[x-z]/g,""));//m2on


//正则对象的创建
//正则对象的创建方式一 通过字面量直接创建
var reg1 = /[bcf]at/gi;

//正则对象的创建方式二 通过RegExp构造函数来实例化正则对象
var reg2 = new RegExp(/[bcf]at/,"gi");//常见形式
var reg3 = new RegExp("[bcf]at","gi");

