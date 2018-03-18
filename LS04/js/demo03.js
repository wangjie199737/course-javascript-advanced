/*
	创建于2018/3/18
 */
//ES5 中没有块作用域
{
    var a = 20;
}
console.log("大括号外依然能访问到a:",a);

for(var i = 0;i<5;i++){
    console.log("in for ",i);
}
console.log("out of for ",i);
//不报错 输出
//in for  0
//in for  1
//in for  2
//in for  3
//in for  4
//out of for  5

if(true){
    var a = 20;
}
console.log(a);

// 你是否能够区分undefined和undeclared
if(false){
    var b = 30;
}
console.log(b);
//undefined
//undeclared是说变量在使用前未声明，而undefined是说变量虽已声明，但类型未知

//C、C++、C#、Java等语言中的块，在线编译网站上查看
/*
 #include <iostream>
 using namespace std;
 int main()
 {
 for(int i =0;i<5;i++){
 cout<<"i = "<<i<<endl;
 }
 //cout<<"i = "<<i<<endl;//这里是否能输出i，和JavaScript（ES5）有什么不同
 return 0;
 }
 */
 //不能输出 因为此时外面的i是没有定义的 没有意义