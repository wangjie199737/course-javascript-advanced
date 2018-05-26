/*
 	创建于2018/5/24
*/
//1.//安装插件
<!DOCTYPE html>
<div></div><div id='div1'></div>

//当给一个空加载点击事件就不

//ondrug

//dom
target还有捕获事件  e.target
event可以获得很多信息  
监听的对象   //事件监听、事件分发
this指的是
原型和自己身上  链  hasOwnProperty

<div onclick="alert(123)">
添加事件对象



html的耦合性太差，就是改一个test里面的，然后引用的都需要改变
取消事件响应就是呢  让onclick=null
去找哪个父节点有哪些方法

节点对象、事件名字、hander（监听事件ture、false；这个是提前响应）
节点添加事件监听事件类型 支持 


事件兼容性

 
//添加事件的三种方式
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Page Title</title>
</head>
<body>
    <div>
         <input type="button" value="按钮1" id="btn" onclick="showMessage()">  <!-- html事件处理程序 -->
         <input type="button" value="按钮2" id="btn2">  <!-- DOM0级事件处理程序 -->
         <input type="button" value="按钮3" id="btn3">  <!-- DOM2事件处理程序 -->

    </div>
    <script>
        function showMessage(){
            alert('hello boy');
        }
        var btn2=document.getElementById('btn2');
        btn2.onclick=function(){
            alert('这是通过DOM0级添加的事件');
        }
        btn2.onclick=null;
        var btn3=document.getElementById('btn3');
        btn3.addEventListener('click',showMessage,false);
        btn3.removeEventListener('click',showMessage,false);
    </script>
</body>
</html> 
