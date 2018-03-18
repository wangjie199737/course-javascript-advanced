/*
	创建于2018/3/18
*/
//1.创建对象
var student = {
    name:"Jack",
    age:23,
    sayHi:function () {
        console.log("Hi,i'm",this.name,",i'm",this.age,"years old!");
    }
};
console.log(student.name);
console.log(student["age"]);  //console.log(student.age);
console.log(student.sayHi);
/*
ƒ () {
        console.log("Hi,i'm",this.name,",i'm",this.age,"years old!");
    }
*/
student.sayHi();
//Hi,i'm Jack ,i'm 23 years old!
//2.删除属性
student.id = 2015015001;
console.log(student.id);
delete  student.id;
console.log(student.id);

//3.查看对象是否有某个属性 in   for...in   Object.keys()
console.log("name" in student);
for(var k in student){
    console.log(k,student[k]);
}
console.log(Object.keys(student));//？？？？？？？？？？？？？？？？？？？？？？？

//JS对象详细内容参见 JS对象章节
//函数嵌套 与this问题初步了解
var obj = {
    foo:function () {
        console.log("foo里的this:",this);
        function fee() {
            //"use strict"
            console.log("fee里的this:",this);
        }
        fee();
    }
};
obj.foo();
//？？？？？？？？？？？？？？？？？？？？？？？为什么fee里面的是全局的啊
//构造函数回顾 JS面向对象具体内容 参见后续面向对象章节
function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.showInfo = function () {
    console.log("Hi,i'm",this.name,",i'm",this.age,"years old!");
};

var p1 = new Person("Mike",60);
p1.showInfo();