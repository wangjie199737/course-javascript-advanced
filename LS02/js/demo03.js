/*
	创建于2018/3/11
*/
var a="stra";
var b=a;
b="strb";
console.log(a,b);
//stra strb
var a={name:"stra"};
var b=a;
b.name="strb";
console.log(a,b);
//{name: "strb"} {name: "strb"}
var a={name:"stra"};
var b=a;
b.name="strb";
var b={name:"strc"};
console.log(a,b);
//{name: "strb"} {name: "strc"}


var obj_c = {x1:2,y1:3};
var obj_d = {x2:2,y2:3};
console.log(obj_c.x1 === obj_d.x2);
//true


//经典案例练习
var a =123;
function foo1(x){
	x = 345;
}
foo1(a);
console.log(a);
//123
var a ={y:123};
function foo2(x){
	x.y = 345;
}
foo2(a);
console.log(a.y);
//345
var a ={y:123};
function foo3(x){
	x.y = 345;
	x = {y:456};
}
foo3(a);
console.log(a.y);
//345
var a ={y:123};
function foo4(x){
    x = {y:456};	
    x.y = 345;	
}
foo4(a);
console.log(a.y);
//123
