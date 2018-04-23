/*
	创建于2018/4/23
*/
//1.三种方式来创建对象
//字面量：
var obj1={
	x:1
}
//Object工厂
var obj2=Object.create(obj1);
//构造函数方式
function person(name,age){
	this.name=name;
	this.age=age;
}
var obj3=new person('wangjie',20);
console.log(obj3);

//2.原型以及原型链
var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
//console.log(obj.__proto__);
console.log(obj.__proto__ === Object.prototype);

var newObj = Object.create(obj);
newObj.age = 23;
//console.log(newObj.__proto__);
console.log(newObj.__proto__ === obj);
//true
//true

//JavaScript的继承方式 是对象-对象的继承，对象要实现继承首先要有原型对象
console.log(newObj.__proto__.__proto__);//Object.prototype
console.log(newObj.__proto__.__proto__.__proto__);//null


var p1=document.createElement('p');
p1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__===Object.prototype;
//true
//原型的共享：有多个对象指向了一个原型，如果将原型上面的东西改变了，就全部会改变，原型链的查找方式



var proObj = {
    z:3
};

var obj = Object.create(proObj);
obj.x = 1;
obj.y = 2;

console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3

console.log("z" in obj);//true   这个in是查看是否有这个属性的 不论是在原型上面或者是自身上面
console.log(obj.hasOwnProperty("z"));//false   这个方法是查看是否是自身含有的属性

//3.原型链属性操作
obj.z = 5;

console.log(obj.hasOwnProperty("z"));
console.log(obj.z);
console.log(proObj.z);

obj.z = 8;
console.log(obj.z);

delete obj.z;//true
console.log(obj.z);

delete obj.z;//true
console.log(obj.z);//still 3

//如何删除原型上的属性
delete  obj.__proto__.z;//或者delete proObj.z;
console.log(obj.z);//此时彻底没有z了
//1
//2
//3
//true
//false
//true
//5
//3
//8
//3
//3
//undefined



function person(){
	this.name="jack";
	console.log('hi');
}
var p=new person();
console.log(person.name);
//hi
//person

function Person(name,age){
	this.name=name;
	this.age=age;
}
Person.prototype.sayhi=function(){

	console.log(this.name,this.age);
}
var p=new Person("Mike",23);
p.sayhi();
//Mike 23




