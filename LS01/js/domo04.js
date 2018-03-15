/*
	创建于2018/3/15
*/

//1.判等时候注意前后
var xx = 234;
if(234 == xx){ //这个反写就是让自己出错的时候更容易找到
    console.log("相等");
}

//!!
var xx=234;
if(xx=234){//因为不小心写成赋值会一直成立也不会报错，错误很难发现
	console.log("相等");
}
//2.输出what
console.log(a);
if(true){
    var a = 2;
}
console.log(a);

console.log(b);
if(false){
    var b = 3;
}
console.log(b);
//undefined
//2
//undefined
//undefined
//3.循环语句
for(var i=0;i<3;i++){
    console.log("i:",i);
}
console.log(i);
//i:0
//i:1
//i:2
//3
//要注意最后i为3！