/*
	创建于2018/3/22
*/
//1.参数传递
//实参数大于形参数
function test() {
    console.log(arguments);//多余的东东都存在了arguments类数组对象当中   console.log(test.arguments);
    console.log(Array.prototype.slice.call(arguments));
    var s = "";
    for (var i = 0; i < arguments.length; i++) {
        s += arguments[i];
    }
    return s;
}
test("hello,", "world!");//"hello,world!"


//实参数小于形参数
var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
};
console.log(sum(1,2,3));
console.log(sum(1,2));
console.log(sum(1));
