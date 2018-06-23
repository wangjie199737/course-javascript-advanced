/*
    创建于2018/6/23
*/
//1.新增的箭头函数
var max=function(a,b){
	return a>b?a:b;
}
max(4,7);//（普通函数）
//7
var max=(a,b)=>a>b?a:b;
max(1,3);//（箭头函数：参数=>函数体 或者（参数）=>{函数体}；箭头函数中的this是与箭头函数定义的时候的对象绑定而不是使用时候的对象绑定）
//3
var foo = function (num1, num2) {
    if (num1 > num2) {
        return num1 * 2;
    } else {
        return num2 * 2;
    }
};
//foo(2,3);
//foo(3,2);
const full = ({ first, last }) => last + ' ' + first;
full({first:"Ming",last:"Li"});
//Li Ming
//2.箭头函数的this
//im1 缺陷
var point = {
    x:0,  //这里的x y是属性，不是变量 不会因为不加var而成为全局变量 
    y:0,
    moveTo:function (x,y) {
        //内部嵌套函数
        function moveToX() {
            this.x = x;//this绑定到了哪里？ 绑定到window 并且临时添加了x y。我们想让她输出2 2但是却输出了0 0，这就是缺陷
        }
        //内部嵌套函数
        function moveToY() {
            this.y = y;//this绑定到了哪里？
        }
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);//{x:0,y:0,moveTo:f} 
console.log(window.x,window.y);// 2 2
//这里的this绑定到哪里了呢
// im2 方法中的函数嵌套 this缺陷 ES5中通过软绑定解决办法
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        var that = this;//关键的一行，软绑定
        //内部嵌套函数
        function moveToX() {
            that.x = x;//this改为that
        }
        //内部嵌套函数
        function moveToY() {
            that.y = y;//this绑定到了哪里？绑定到了point的身上，所以就会改变了x y的值，输出了2 2
        }
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);//{x:2,y:2,moveTo:f}
console.log(window.x,window.y);//undefined undefined  这个就是因为这个没有去过window 所以没有为window临时加x y，所以就是未定义
//im3 箭头函数导致this总是指向函数定义生效时所在的对象
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        //内部嵌套函数
        var moveToX = ()=>this.x=x;
        //内部嵌套函数
        var moveToY = ()=>this.y=y;
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);
console.log(window.x,window.y);//{x:2,y:2,f}  undefined undefined  就和软绑定的效果是一样子的了哦
//im4 还可以通过bind、apply、call来实现this的绑定
//demo7的后面继续看完！！！！！！！！！！

//3.函数参数默认值的方法
//im1用||实现默认值的设置
var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
};
console.log(sum(1,2,3));//1+2+3
console.log(sum(1,2));//1+2+5
console.log(sum(1));//1+4+5
console.log(sum(1,0,0));
//-------------------------------------
var sum = function(a,b=4,c=5){
    return a+b+c;
};
console.log(sum(1,2,3));//1+2+3
console.log(sum(1,2));//1+2+5
console.log(sum(1));//1+4+5
console.log(sum(1,0,0));//1+0+0

//注意事项：
function foo(x=5){
    let x=1;//报错
    const x=2;//报错
}
foo();
//默认值顺序，参数一般有顺序，有默认值的参数应该是尾参数
//否则无法使有默认值的用默认值，没有默认值的用传递的参数
function f(x = 1,y) {
    return [x,y];
}
f();//[1,undefined]
f(2);//[2,undefined]
//f(,3);//报错，无法使x用1，y用3
//所以有默认值的参数在最后!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function f(x,y = 1) {
    return [x,y];
}
f();//[undefined, 1]
f(2);//[2, 1] 这样就可以x为传递的参数，y为默认的值

//Rest （剩余操作符） Spread （扩展操作符）