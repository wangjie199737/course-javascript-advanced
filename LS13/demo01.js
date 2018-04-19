/*
	创建于2018/4/16
*/
//1.JS对象
//key值是字符串类型
//构造函数以及对象
//Math是Object而不是Function
//而String既是又是
console.log(Object instanceof Function);
console.log(Object instanceof Object);
console.log(Boolean instanceof Function);
console.log(Boolean instanceof Object);
console.log(String instanceof Function);
console.log(String instanceof Object);
console.log(Number instanceof Function);
console.log(Number instanceof Object);
console.log(Function instanceof Function);
console.log(Function instanceof Object);
console.log(Array instanceof Function);
console.log(Array instanceof Object);
console.log(Date instanceof Function);
console.log(Date instanceof Object);
console.log(Math instanceof Function);//f
console.log(Math instanceof Object);
console.log(JSON instanceof Function);//f
console.log(JSON instanceof Object);

//2.对象属性
var o = {
    _x:1.0,//如果都写成x会怎样
    get x(){
        return this._x;//如果都写成x会怎样
    },
    set x(val){
        this._x = val;//如果都写成x会怎样
    }
};
console.log(o.x);
o.x = 2;
console.log(o.x,o._x);
//1
//2 2
-----------------------------------------------
//如果没有set方法 就会添加一个属性了
 var o = {
    _x:1.0,//如果都写成x会怎样
    get x(){
        return this._x;//如果都写成x会怎样
    }
};
console.log(o.x);
o.x = 2;
console.log(o.x,o._x);
//1
//1 1
//方法的优先级高~~~

-----------------------------------------------
var p1 = {
    _name:"Jack",
    _age:23,
    set age(val){
        if(val>0&&val<150){
            this._age = val;
        }else{
            console.log("请设置正常年龄");
        }
    },
    get age(){
        return this._age;
    }
};
p1.age = 178;
console.log(p1.age);
//如果将console.log(p1.age)删除还是会输出“请设置正常年龄”，因为赋值也会调用set方法

//3.原型
var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
console.log(obj.num);
console.log(obj.str);
console.log(obj.show());
console.log(obj.__proto__);
console.log(obj.__proto__ === Object.prototype);
//10
//hi
//hi
//{...}
//true

//4.构造函数的方式创建对象
var objStr = new Object("xxx");
console.log(typeof objStr);
console.log(objStr instanceof String);
//object
//true




//caller小回顾
function test(){
	if(test.caller==null){
		console.log("无")
	}
	else{
		console.log("有");
		console.log(test.caller.toString());
	}
}
function wang(a,b){
	function jie(a,b){
		test();
	}
	jie(3,4);
}
wang(1,2);