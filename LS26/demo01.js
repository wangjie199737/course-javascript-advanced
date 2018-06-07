/*
    创建于2018/5/28
 */
//1.线程和进程
//工厂和人嘿嘿~
//2.同步和异步
// JS异步的几种方式
// (1)回调函数，回调地狱
// (2)事件监听机制
Array.map//映射
//map对于数组中的东东进行操作，并且返回，但是却不改变原来数组
const array = [1, 3, 6, 9];
const newArray = array.map(function (value) {
  return value + 1;
});
console.log(newArray);
console.log(array);
//[2, 4, 7, 10]
//[1, 3, 6, 9]
//还有类似的for in;for;foreach



