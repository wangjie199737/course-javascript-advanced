/*
  创建于2018/5/10
*/

//细讲正则表达式
-------------g是全局 i是忽略大小写---------------------
console.log("moon2xyz".replace(/o/,"ab"));//mabon2xyz
console.log("moon2xyz".replace(/o/g,"ab"));//mababn2xyz
console.log("moon2 ooxyz".replace(/\bo/g,"ab"));//moon2 aboxyz
console.log("moon2xyz".replace(/\dx/,"_"));//moon_yz
console.log("moon2xyz".replace(/[xyz]/g,"ab"));//moon2ababab
console.log("m2on2x2z".replace(/\d[zo]/g,"ab"));//mabn2xab
console.log("m2on2x2z".replace(/2[x-z]/g,""));//m2on


//正则对象的创建
//正则对象的创建方式一 通过字面量直接创建
var reg1 = /[bcf]at/gi;

//正则对象的创建方式二 通过RegExp构造函数来实例化正则对象
var reg2 = new RegExp(/[bcf]at/,"gi");//常见形式
var reg3 = new RegExp("[bcf]at","gi");

//运用正则来实现字符串的分割
var str="xx-x*y-YY";
var a =str.split(/[-*]/gi);
console.log(a);
//(4) ["xx", "x", "y", "xx"]

//注意全局和非全局的方法g，非全局的就只能匹配到一个

//字符串的replace方法
"abcdef".replace("a","W");
//"Wbcdef"
"abcedef".replace(/f/,"MM");
//"abcedeMM"



//正则中的分组~
console.log("NameNameName_11111".replace(/Name{3}/,"X"));
//这个相当于是要求匹配Nameee，所以他找不到，所以就匹配不到
console.log("NameNameName_11111".replace(/(Name){3}/,"X"));
这个就是分组了，用（）


// |（或运算符）的使用
"abcdefghijk".replace(/abcde|fghijk/g,"X");
"abcdefghijk_abcdehijk_abcfghijk".replace(/abc(de|fg)hijk/g,"X");
//"abcdefghijk_X_X"


//进行匹配的时候是先往后找，然后找不到就回去找，所以有时候会出现TFTFT的情况

// 影响exec 而不影响test
// lastindex是指的是全局，要是不是全局就都从0开始。



//1.自我令我阶段
//（1）字符类匹配
console.log("absxsdfe123Ab".replace(/[abd]/,"X"));//后面的[abd]就是任意一个匹配即可，但是是小写，而且只能匹配第一个
console.log("absxsdfe123Ab".replace(/[abd]/g,"X"));//后面的[abd]就是任意一个匹配即可，但是是小写，但是能匹配所有符合条件的
console.log("absxsdfe123Ab".replace(/[abd]/gi,"X"));//后面的[abd]就是任意一个匹配即可，忽略大小写，而且能匹配所有符合条件的

var a=/[bcf]at/gi;//字面量直接创建
var a1=new RegExp(/[bcf]at/,"gi");//通过RegExp构造函数创建
var a2=new RegExp("[bcf]at","gi");//除了用//之外还可以用 “”   返回的都是匹配的数组
console.log("A FAt HUY,a huS JIk".match(a));

var regExp=/a?b/gi;//?是尽可能的匹配a少的情况，也就是ab、b的情况，注意只有ab而没有aab什么之类的
var matchResult="xxabcaabbbxyz".match(regExp);
console.log(matchResult);//最后输出的是符合的每一个元素所组成的数组

var reg=/a/gi;
console.log(reg.test("ab"));
console.log(reg.test("ab"));
console.log(reg.test("ab"));
console.log(reg.test("ab"));
console.log(reg.test("ab"));
console.log(reg.test("ab"));
//会出现TFTFTFTFT的情况，是因为检测时候是先从左开始检测，然后检测不到时候就会从刚刚的往后找，找完了就会从最开始找


//输出都是"Fat"
//（2）[^]就是非里面的匹配，然后大小写说的也是[]里面的东西忽略大小写之后
console.log("absxsdfe123Ab".replace(/[^abd]/,"X"));
console.log("absxsdfe123Ab".replace(/[^abd]/g,"X"));
console.log("absxsdfe123Ab".replace(/[^abd]/gi,"X"));
//（3）匹配很多~
console.log("12345667".replace(/[3-9]/gi,"X"));//这个就是匹配3-9的数字
console.log("absxsdfe123Ab".replace(/[a-f1-9]/gi,"X"));//这是匹配a-f的字母还有1-9数字
console.log("absxsdfe123Ab".replace(/[a-f][1-9]/gi,"X"));//？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？不会？？
console.log("absxsdfe1Q2e3Ab".replace(/[a-f][1-9][A-Z]/gi,"X"));//？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？不会
//（4）匹配-
console.log("2017-10-23".replace(/[0-9]/g,"X"));
console.log("2017-10-23".replace(/[0-9-]/g,"X"));//就是直接将-加进去即可

//（5）疑问？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？
console.log("2017-10-23".replace(/^[0-9]/g,"X"));
//X017-10-23
console.log("2017-10-23".replace(/[^0-9]/g,"X"));
//2017X10X23
console.log("This is a Boy is".replace(/is/g,0));
console.log("This is a Boy is".replace(/^is/g,0));//??????????????????????????????这个表示什么意思啊 为什么不是非is
console.log("This is a Boy is".replace(/is$/g,0));
console.log("This is a Boy is".replace(/is\b/g,0));
console.log("This is a Boy is".replace(/is\B/g,0));
console.log("This is a Boy is".replace(/\bis/g,0));
console.log("This is a Boy is".replace(/\Bis/g,0));

//（6）{}贪婪算法
"12345678".replace(/\d{5}/,'X');
//"X678"
"12345678".replace(/\d{5,6}/,'X');
//"X78"
"12345".replace(/\d{5,6}/,'X');
//"X"

//（7）分组然后反转
"2017-170-23".replace(/(\d{4})-(\d{3})-(\d{2})/,"$2/$3/$1");
//"170/23/2017"
"2017-10-23".replace(/(?:\d{4})-(\d{2})-(\d{2})/,"$2/$3/$1"); //？：是忽略分组的意思
//"23/$3/10"

