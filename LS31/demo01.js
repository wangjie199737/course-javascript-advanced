/*
    创建于2018/6/23
*/
//1.新增数据类型
//Symbol是基本数据类型 不是对象 不能使用new命令 他可以接受参数 表示对变量的修饰
let s=Symbol();
typeof s;//"symbol"


var s1 = Symbol('foo');
var s2 = Symbol('bar');
console.log(s1); // Symbol(foo)
console.log(s2); // Symbol(bar)
console.log(s1.toString()); // "Symbol(foo)"
console.log(s2.toString()); // "Symbol(bar)"

const obj = {
    toString() {
        return 'abc';
    }
};
const sym = Symbol(obj);
sym // Symbol(abc)

//Symbol可以作为属性名
var mySymbol = Symbol();
// 第一种写法
var a = {};
a[mySymbol] = 'Hello!';//注意中括号内不要加引号，后面介绍加引号和不加引号的区别
// 第二种写法
var a = {
    [mySymbol]: 'Hello!'
};
// 第三种写法
var a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });
// 以上写法都得到同样结果
a[mySymbol] // "Hello!"

//2.set
var s2 = new Set();
[2, 3, 5, 4, 5, 2, 2].map(x => s2.add(x));
for (var i of s2) {
    console.log(i);
}// 2 3 5 4
var items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
console.log(items.size); // 5
//WeakSet 保证内存利用率

//3.map
let map = new Map();
map.set(1, 'aaa').set(1, 'bbb');
map.get(1); // "bbb"

var map = new Map();
var k1 = ['a'];
var k2 = ['a'];
map.set(k1, 111);
map.set(k2, 222);
map.get(k1); // 111
map.get(k2); // 222

var map = new Map();
var k1 = 'a';
var k2 = 'a';
map.set(k1, 111);
map.set(k2, 222);
map.get(k1); // 222
map.get(k2); // 222
//如果是一样的类型 也就是三等的关系 那么就会覆盖  但是如果是不等的数据类型 就不会覆盖


//1.数据结构（key可以是任意数据类型 节点等等）
var map=new Map();
map.set(['a'],555);            //map在set和get时候是严格判等的 ===
console.log(map.get(['a']));
//undefined
var map=new Map();
map.set('a',555);           
console.log(map.get('a'));
//555
var map=new Map();
var p1=['a'];
map.set(p1,555);           
console.log(map.get(p1));
//555

//注意下解构赋值就是在遍历的时候？？？？？？？
//filter 过滤  =>并不是箭头函数而是变量和值的关系

//下一章：
// this的指向
// 如果是一个普通函数就是指向window 如果是用new就是指向这个对象 
var p1=new Number();
p1.__proto__==Number.prototype;//true
p1.__proto__===Number.prototype;//true
//实例化的对象的链子 还有就是构造器的链子
//如何访问私有属性？
var Point=function(x,y,z){
    this.x=x;
    this.y=y;
    var z=z;//私有属性
}
var p=new Point(1,2,3);
Point.prototype.show=function(){
    console.log(x,y,z);
}
//私有变量不能通过p.z来访问，而只能是通过函数来访问z。而且通过函数访问时候必须是z 而不是this.z 其他的是this.x和this.y

//里面的属性默认是不可枚举 

//属性三种：定义的、set和get、内部的

//new命令 