/*
	创建于2018/5/2
*/

//1.对象的原型共享问题
//通过三种方式创建的对象的原型，原型链
var superObj = {
    x:1,
    y:2
};
var subObj_First = Object.create(superObj);
var subObj_Second = Object.create(superObj);
subObj_First.__proto__.x = 5;
console.log(subObj_Second.x);
//通过create的对象的原型就是开始定义的对象
//通过函数new的对象的原型就是Function,再原型就是Object，再原型就是null
//通过直接创建对象的方式创建的对象的原型是对象，再原型就是null


//2.原型共享问题实例
function Person(name){
    this.name = name;
}
Person.prototype.age = 22;
Person.prototype.showName = function(){console.log(this.name);};
function Student(id){
    this.id = id;
}
//var p1 = new Person("Mike");Student.prototype = p1;
Student.prototype = new Person("Mike");
var s1 = new Student(2017001);
var s2 = new Student(2017002);

//测试如下代码，思考为什么，这样的继承有什么弊端
console.log(s1.name,s1.age,s1.id);
console.log(s2.name,s2.age,s2.id);
s1.__proto__.name = "Jack";
console.log(s2.name);
s2.__proto__.__proto__.age = 99;
console.log(s2.age);

//Mike 22 2017001
//Mike 22 2017002
//Jack
//99


------------------共享的弊端呢？还有内存浪费的问题哦！！！------------------------

//3.实现继承的两种方式

第一种方式：
function Person(name,age){
    this.name = name;
    this.age = age;
};
Person.prototype.showName = function(){console.log(this.name);};
function Student(name,age,id){
    Person.call(this,name,age);
    this.id = id;
}
Student.prototype.__proto__ = Person.prototype;
var s1 = new Student("xxx",22,2017001);
var s2 = new Student("www",23,2017002);


第二种方式：
function Person(name,age){
    this.name = name;
    this.age = age;
};
Person.prototype.showName = function(){
    console.log(this.name);
};
function Student(name,age,id){
    Person.call(this,name,age);
    this.id = id;
}
Student.prototype = Object.create(Person.prototype);
// console.log(Person.prototype.constructor); //
// console.log(Student.prototype.constructor); //
Student.prototype.constructor = Student;
var s1 = new Student("xxx",22,2017001);
var s2 = new Student("www",23,2017002);

//4.静态方法
var BaseClass = function() {};
BaseClass.prototype.f2 = function () {
    console.log("This is a prototype method ");
};
BaseClass.f1 = function(){//定义静态方法
    console.log("This is a static method ");
};
BaseClass.f1();
var instance1 = new BaseClass();
instance1.f2();
//This is a static method
//This is a prototype method

//覆盖问题
var BaseClass = function() {};
BaseClass.prototype.method1 = function(){
    console.log("1 This is a instance method ");
};
var instance1 = new BaseClass();
instance1.method1();
//This is a instance method
instance1.method1 = function(){
    console.log("2 This is a instance method too ");
};
instance1.method1();
//This is a instance method too 覆盖了原型的方法

//典型例子 为什么是2呢呢呢呢呢呢呢呢？
var BaseClass = function() {
    this.method1 = function(){
        console.log('1 Defined by the "this" in the instance method');
    }
};
var instance1 = new BaseClass();
instance1.method1 = function(){
    console.log('2 Defined directly in the instance method');
};
BaseClass.prototype.method1 = function(){
    console.log('3 Defined by the prototype instance method ');
};
instance1.method1();
//2 Defined directly in the instance method



//5.constructor的三种用法
//（1）确定对象的构造函数名
function Foo() {}
var f = new Foo();
console.log(f.constructor.name);
//Foo

var foo=function(){
	console.log("hah");
}
console.log(foo.constructor.name);
//Function 

//（2）创建相似对象
function Constr(name) {
    this.name = name;
}
var x = new Constr("Jack");
var y = new x.constructor("Mike");
console.log(y);
console.log(y instanceof Constr);

//（3）指定构造函数
function Person(area){
    this.type = 'person';
    this.area = area;
}
Person.prototype.sayArea = function(){
    console.log(this.area);
};
var Father = function(age){
    this.age = age;
};
Father.prototype = new Person('Beijin');
console.log(Person.prototype.constructor); //function person()
console.log(Father.prototype.constructor); //function person()
Father.prototype.constructor = Father;     //修正
console.log(Father.prototype.constructor); //function father()
var one = new Father(25);

//6.共有属性，私有属性还有获取方式
function A(id) {
    this.publicId = id;
    var privateId = 456;
    this.getId = function () {
        console.log(this.publicId,privateId);
    };
}
var a = new A(123);
console.log(a.publicId);//123
// console.log(a.privateId);//undefined
a.getId();//123 456
