/*
    创建于 2018/6/14
*/
//1.
var name='jack';
var person={
	name,
	showinfo(){
		console.log(this.name);
	}
}
person.showinfo();
//jack

//2.用[]和.的不同之处 有[]中可以进行字符串的拼接
//属性名表达式和间接表达式不能同时使用
object.case() //键值对  值

//3.
var foo='hai';
var baz={[foo]};//???????????///?
改变一下就ok

//4.object.assign 可以将三个对象的所用属性提取出来 组成一个新的对象
//assgin 浅拷贝

//setPrototypeOf  \  getPrototypeOf

//字面量
var obj1={a:1,b:2};
var obj2={c:3,d:4};
Object.setPrototypeOf(obj2,obj1);
console.log(obj2.a,obj2.b,obj2.c,obj2.d);

var obj

//对象要加小括号括起来 如果不括起来就是一个语句块