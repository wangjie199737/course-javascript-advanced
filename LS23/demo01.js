/*
创建于2018/5/17
*/
//XML：可扩展标记语言，标准通用标记语言的子集，是一种用于标记电子文件使其具有结构性的标记语言。
//对象的key值也必须是要加“”

 //1.stringify() 有一个对象（任何一种），转换成JSON
 var wj={
	name:"wangjie",
	age:12,
	hobby:"玩，睡"
}
var p1=JSON.stringify(wj);
console.log(p1);
//{"name":"wangjie","age":12,"hobby":"玩，睡"}

stringify的后面的replacer是添加一个回调函数，然后对于对象中的属性进行筛选，比如可以让等于什么的东西返回undefined，等等

 //2.parse() stringif的逆过程
 var p2=JSON.parse(p1);
 console.log(p2);
//{name: "wangjie", age: 12, hobby: "玩，睡"}

//filer数组中的过滤

//函数中如果没有返回值也是返回undefined

//要是传数组时候就是返回数组里面的，其他的不返回
dns域名系统



