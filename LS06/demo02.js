/*
	创建于2018//3/19
*/
//1.if...else
var score = 76;
if(score>90){
    console.log("优");
}else if(score>75){
    console.log("良");
}else if(score>60){
    console.log("及格");
}else{
    console.log("不及格");
}
//良
//等效以下的~
//小括号优先级最高
console.log((score>90&&"优")||(score>75&&"良")||(score>60&&"及格")||"不及格");//逻辑与可以实现if
//2.特殊的~
var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
};
console.log(sum(1,2,3));
console.log(sum(1,2));
console.log(sum(1));
//6
//8
//10


var sum = function(a,b,c){
    if(b!=false){b = b||4;}//(b!=false)&&(b=b||4);
    if(c!=false){c = c||5;}//(c!=false)&&(c=c||5);
    return a+b+c;
};
console.log(sum(1,2,3));
console.log(sum(1,2));
console.log(sum(1));
console.log(sum(1,0,0));
//6
//8
//10
//1