/*
	创建于2018/4/26
*/
//1.简单的函数调用
var a=1;
function f1(){
	var b=2;
	function f2(){
		console.log(a,b,c);

	}
	f2();
}
f1();


//2.老师说的一道笔试题-------？？-------
function fe(){
	var a=b=1;
}
console.log(a);
console.log(b);


//3.正式介绍this的四种应用场景
//(1).一般函数中的this
一般函数中的this指代全局，但是在严格模式下就是undefined

var a = 10;b = "Hi";
function thisTest2(){
    this.a = 20;
    delete this.b;
    this.c = "新添加属性";
}
thisTest2();
console.log(a,c);
//20 "新添加属性"
//this.a是修改的是全局的a
//删除的也是全局的b

function thisTest(){
	'use strict'
	console.log(this);
}
thisTest();
//undefined

//(2).对象方法中的this（无嵌套）
var point={
	x:0,
	y:0,
	moveTo:function(x,y){
		this.x=x,
	    this.y=y
	}
}
point.moveTo(1,1);
console.log(point);
//{x: 1, y: 1, moveTo: ƒ}

//(3).构造函数中的this
构造函数中的this通过new新创建的对象
this此时绑定到新创建的对象上面
function Point(x,y){
	this.x=x;
	this.y=y;
}
var p=new Point(2,3);
p;
//Point {x: 2, y: 3}
//绑定到Point上面 Point是通过构造函数新创建的对象 

//(4).间接调用中的this（call，apply）指代第一个参数
objA = {name:"AA",x:1};
objB = {name:"BB",x:5};
objA.test = function () {
    console.log(this.name,this.x);
};
objA.test();
objA.test.call(objB);
//AA 1
//BB 5



//4.JS中的缺陷
对象方法中的this（嵌套）
函数嵌套时候是不进行作用域传递

var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        //内部嵌套函数
        function moveToX() {
            this.x = x;//this绑定到了哪里？
        }
        //内部嵌套函数
        function moveToY() {
            this.y = y;//this绑定到了哪里？
        }
        moveToX();//moveToX.call(this);通过间接调用来解决
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);
console.log(window.x,window.y);
//{x: 0, y: 0, moveTo: ƒ}
//2 2 
说明两个最内层的啊函数没有绑定到我们想象的对应的对象上面
而是绑定到了window上面



解决方法：
//（1）使用变量that或者self进行软绑定，使this指向正确
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
		var self=this;
        //内部嵌套函数
        function moveToX() {
            self.x = x;//this绑定到了哪里？
        }
        //内部嵌套函数
        function moveToY() {
            self.y = y;//this绑定到了哪里？
        }
        moveToX();//moveToX.call(this);通过间接调用来解决
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);
//{x: 2, y: 2, moveTo: ƒ}
console.log(window.x,window.y);
//undefined undefined


//(2)通过call和apply来解决
var point = {
    x:0,y:0,
    moveTo:function (x,y) {
        function moveToX() {
            this.x = x;
        }
        function moveToY() {
            this.y = y;/
        }
        moveToX.call(this);//->this.moveToX()->point.MoveToX()
        moveToY();
    }
};
point.moveTo(2,2);console.log(point);
//2,0


//(3)通过Function.prototype.bind,使this指向正确
var point={
	x:0,y:0,
	moveTo:function(x,y){
		function moveToX(){
			this.x=x;
		}
        function moveToY(){
            this.y=y;
        }
		moveToX.bind(point)();
		moveToY.bind(point)();
	}
};
point.moveTo(2,2);
console.log(point);
//{x: 2, y: 2, moveTo: ƒ}


！！！！！！！！
对于构造函数的嵌套情况也是和上面的一样的（三种方式）
//（1）
function Point(x,y){
	this.x=x;
	this.y=y;
	this.moveXY=function(x,y){
		var that=this;
		function moveX(x){
			that.x+=x;
		}
		function moveY(x){
			that.y+=y;
		}
		moveX(x);
		moveY(y);
	};
}
var p=new Point(2,3);
p.moveXY(1,1);
console.log(p);
//（2）
function Point(x,y){
	this.x=x;
	this.y=y;
	this.moveXY=function(x,y){
		
		function moveX(x){
			this.x+=x;
		}
		function moveY(x){
			this.y+=y;
		}
		moveX.call(this,x);
		moveY.call(this,y);
	};
}
var p=new Point(2,3);
p.moveXY(1,1);
console.log(p);
//（3）
function Point(x,y){
	this.x=x;
	this.y=y;
	this.moveXY=function(x,y){
		
		function moveX(x){
			this.x+=x;
		}
		function moveY(x){
			this.y+=y;
		}
		moveX.bind(this,x)();
		moveY.bind(this,y)();
	};
}
var p=new Point(2,3);
p.moveXY(1,1);
console.log(p);


//通过Object.create静态方法创建的对象的原型共享问题
var superObj = {
    x:1,
    y:2
};
var subObj_First = Object.create(superObj);
var subObj_Second = Object.create(superObj);
subObj_First.__proto__.x = 5;
console.log(subObj_Second.x);
