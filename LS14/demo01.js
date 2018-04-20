/*
	创建于2018/4/19
*/
//1.
//添加了就不能再改变了
//defineProperty这个只要是定义过的就不能再定义一遍来改变了~
//使用规则：
var obj = {
    x:1,
    y:2
};
Object.defineProperty(obj,"x",{writable:false,value:11,enumerable:false,configurable:true(可配置属性：确定属性是否能删除和其他特性是否可配置)});
//第一个参数是对象（要对谁改），第二个参数是改里面的谁，第三个参数是要改动这四个属性：writeable、value、enumerable、configurable
//例子:
var person = {name:"Jack"};
Object.defineProperty(person,"name",{
    writable:false,
    configurable:false,
    enumerable:true,
    value:"Mike"
});
console.log(person.name);//Mike
person.name = "Lucy";
console.log(person.name);//Mike
delete person.name;
console.log(person.name);//Mike
//因为属性设置只可枚举，其他都是false

//通过直接添加的方式还有其他方式添加的方式如何呢？
var obj = {
    x:1,
    y:2
};
//直接添加的属性，其所有特性默认都是true
obj.z = 3;

//通过Object.defineProperty方法添加的属性，除了手动修改，其所有特性默认都是false
Object.defineProperty(obj,"w",{value:456,configurable:true});//writable,enumerable没有指定，所以默认为false
for(var k in obj){
    console.log(k,obj[k]);
}
//console.log(obj.w);//有w，但上边for...in遍历不到，因为他的枚举属性是false

//2.set，get方法
-----------------------问set、get方法在什么情况下使用呢？-------------------------------
//例子1：
var obj1={
	_name:"lucy",
	get name(){return this.name;}
};
obj1.name;
//"lucy"
var obj1={
	_name:"lucy",
	get name(){return this._name;}
};
obj1.name;
//"lucy"

//例子2：
var obj1={
    _name:"Daisy"
};
Object.defineProperty(obj1,"name",{
    get:function (){//只定义了get 特性，因此只能读不能写
        return this._name;                    ---------------这个get是写：还是空格
    }
});
console.log(obj1.name);//"Daisy"
obj1.name="jack";//只定义了getter访问器，因此写入失效
console.log(obj1.name);//"Daisy"


var obj2={
    _name:"Daisy",
    set name(val){this._name = val;},         ---------------这个get是写：还是空格
    get name(){return this._name;}
};
Object.defineProperty(obj2,"name",{
    get:function (){
        return this._name+"_hihi";
    },
    set:function (val) {
        this._name = val+"_haha";
    }
});
console.log(obj2.name);
obj2.name="jack";
console.log(obj2.name);


//3.getOwnPropertyDescriptor属性
var obj={x:1};
Object.defineProperty(obj,'y',{value:2,writeable:false});
var xDES=Object.getOwnPropertyDescriptor(obj,'x');
var yDES=Object.getOwnPropertyDescriptor(obj,'y');
console.log(xDES);
console.log(yDES);