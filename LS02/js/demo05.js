/*
	创建于2018/3/18
 */
 //1.引用值传递
 var obj_a = {value:1};
function fn_a(arg){
    arg.value=3;
};
fn_a(obj_a);
console.log(obj_a);
//{value:3}
function fn_b(arg){
    arg={value:2};//创建了一个新的对象，arg指向新对象
};
//{value:3}