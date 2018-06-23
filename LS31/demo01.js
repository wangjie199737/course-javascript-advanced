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