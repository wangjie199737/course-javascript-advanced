/*
	创建于2018/3/19
*/
//1.函数直接调用
//1.function test() {
    console.log("this is",this);
}
test();//window
//这样就为window下面的

var obj = {
    name:"obj",
    x:23,
    test:function(){
        console.log(this.x,this);
    }
};
obj.test();//调用
//2.给对象加方法
var sayHi = function () {
    console.log("Hi，i'm",this.name);
};
obj.sayHi = sayHi;//添加给对象添加方法
obj.sayHi();
//Hi，i'm obj

/*
//思考如下代码 详情参见高阶函数章节
var fun1 = function () {
    return function fun2() {
        return this.x;//若改为 return this;
    }
};
obj.fun3 = fun1;
obj.fun4 = fun1();
console.log(obj.fun3());//输出什么
console.log(obj.fun3()());//输出什么
console.log(obj.fun4());//输出什么
*/


//3.吸星大法
objA = {name:"AA"};
objB = {name:"BB"};
objA.foo = function(){
    console.log(this.name);
};
objA.foo();
//AA
objA.foo.call(objB);
//BB


var fish = {
    name:"fish",
    swim:function (m,n) {
        console.log("i'm "+this.name+" i cam swim ___",m,n);
    }
};

var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
};

var me = {
    name:"ABC"
};

bird.fly(5,6);
fish.swim.call(me,3,4);
bird.fly.call(me,7,8);
//i'm:polly i can fly ___ 5 6
//i'm ABC i cam swim ___ 3 4
//i'm:ABC i can fly ___ 7 8
//swim(1,2);与swim.call(null,1,2);相同



function test() {
    console.log(Array.prototype.slice.call(arguments));
}
test(1,2,3,"4",5);
//[1,2,3,"4",5]



function Person(name){
    this.name = name;
}
Person.prototype.sayHi = function(){
    console.log("Hi,i'm "+this.name);
};
var p1 = new Person("Jack");
p1.sayHi();
//Hi,i'm Jack

