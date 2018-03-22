/*
	创建于2018/3/22
*/
//1.值传递
var a = 1;
function foo(x) {
    console.trace("a:",a," x:",x);
    x = 2;//step 2222
    console.trace("a:",a," x:",x);//step 3333
}

console.trace("a:",a);
foo(a);// step 1111
console.trace("a:",a); // step 4444  a仍为1
//a: 1
//a: 1  x: 1   foo
//a: 1  x: 2   foo
//a: 1



//2.引用传递
var obj = {x:1};
function fee(o){
    console.trace("obj.x :",obj.x," o.x :",o.x);
    o.x = 3;// step 2222
    console.trace("obj.x :",obj.x," o.x :",o.x);// step 3333
}

console.trace("obj.x :",obj.x);
fee(obj);// step 1111
console.trace("obj.x :",obj.x);//step 4444  obj.x被改写为3
//obj.x : 1
//obj.x : 1  o.x : 1      fee
//obj.x : 3  o.x : 3      fee
//obj.x : 3


//3.追踪~~~