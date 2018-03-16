/*
	创建于2018/3/16
*/

//1.字符串拼接
var a = "abc";
var b = "def";
var c = a+b;
console.log(c);
//abcdef
//2.与字符串相关的几个方法
var str1 = "aaa".concat("bbb");
var str2 = "abcdef".slice(2);
var str3 = "abcdef".slice(2,5);
var str4 = "abcdef".slice(-2);
var str5 = "abcdef".slice(2,-2);
//aaabbb
//cdef
//cde
//ef
//cd
//以上返回字符串
var str6 = "abcdef".split("c");
var str7 = "abcdef".split("c",1);
var str8 = "abcdef".split("c",2);
//["ab","def"]
//["ab"]
//["ab","def"]
//以上返回数组
var str9 = "abcdef".charAt(2);
var str10 = "abcdefabcdef".indexOf("d",1);//??
var str11 = "abcdefabcdef".indexOf("d",4);
//c
//3
//9
//??
var str12 = "    abc def     \r\n  ".trim();
//abc def
//??
//3.substr与stsubstring
var str13 = "abcdefghijklmn";
var str14 = str13.substr(2,5);//后一个参数代表长度
console.log(str13,str14);
//abcdefghijklmn cdefg

var str15 = str13.substring(2,5);//后一个参数代表第几个end
console.log(str13,str15);
//abcdefghijklmn cde