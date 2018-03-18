/*
	创建于2018/3/18
*/
//1.字符位置比较
console.log("A" > "a");
console.log("B".localeCompare("A")); //考虑本地化的字符排序，返回0或非0
console.log("A".localeCompare("A")); //考虑本地化的字符排序，返回0或非0
console.log("A".localeCompare("B"));
//2.字符串拼接
var a = "abc";
var b = "def";
var c = a+b;
//3.字符串提取
//String.prototype.charAt(pos);
//String.prototype.charCodeAt(pos);
//String.prototype.slice(start,end?);
//String.prototype.substr(start,length?)
//String.prototype.substring(start,end?);
//String.prototype.split(separator?,limit?);
//4.关于字符串的一些方法
var str2 = "abcdef".slice(2);
var str3 = "abcdef".slice(2,5);
var str4 = "abcdef".slice(-2);
var str5 = "abcdef".slice(2,-2);

var str6 = "abcdef".split("c");//返回数组
var str7 = "abcdef".split("c",1);
var str8 = "abcdef".split("c",2);

var str9 = "abcdef".charAt(2);
var str10 = "abcdef".charCodeAt(3);
//c
//100
var str11 = "abcdefabcdef".indexOf("d",1);
var str12 = "abcdefabcdef".indexOf("d",4);//从第4个开始找