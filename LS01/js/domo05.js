/*
	创建于2018/3/15
*/

//1.标识符合法规则
/*  - 在JS中所有的可以由我们自主命名的都可以称为是标识符
    - 例如：变量名、函数名、属性名都属于标识符
    - 命名一个标识符时需要遵守如下的规则：
	    1.标识符中可以含有字母 、数字 、下划线_ 、$符号
	    2.标识符不能以数字开头
	    3.标识符不能是ES中的关键字或保留字 
	    4.标识符一般都采用驼峰命名法
    		- 首字母小写，每个单词的开头字母大写，其余字母小写
  			  helloWorld  xxxYyyZzz
    - JS底层保存标识符时实际上是采用的Unicode编码，
      所以理论上讲，所有的utf-8中含有的内容都可以作为标识符
*/、

//2.保留字
//Javascript保留字不可以用作变量,函数名，对象名等，其中有的保留字是为以后Javascript扩展用的。
//abstract、goto、return、arguments、break、continue、typeof、instanceof、delete等等

//3.类型判断
console.log(typeof NaN);
console.log(typeof Infinity);
//number
//number