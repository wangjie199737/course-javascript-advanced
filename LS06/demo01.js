/*
	创建于2018/3/19
*/
//1.&&短路问题
console.log(2&&4);
console.log(0&&4);
console.log({x:2}&&{name:"Jack"});
console.log(null&&"hello");
console.log({}&&"world");
//4
//0
//{name:"jack"}
//null
//"world"
//2.||短路问题
console.log(2||4);
console.log(0||4);
console.log({x:2}||{name:"Jack"});
console.log(null||"hello");
console.log({}||"world");
//2
//4
//{x:2}
//"hello"
//{}
//3.特殊短路问题
console.log((new Boolean(false))&&234);
console.log((new Boolean(false))||234);
//234
//Boolean {false}