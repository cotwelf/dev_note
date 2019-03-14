# 最原始方法

var xhr = new XMLHttpRequest();  
xhr.open('接口名称');  
xhr.send();  
xhr.onreadystateChange = function(){  
 if(readyState!=4) return;  
 xxxxx;  
}

# jquery

$.ajax({  
    url:'接口名称',  
    type:'post'（或'get'）  
    data:{id:'11',name:'hhh'},  
    dataType:'json',  
    beforeSend:function(xhr){  //请求前发送  
        console.log(xhr)  
    },  
    success:function(res){      //请求成功后执行  
        console.log(res)  
    },  
    fail: function() {  
        $(".msgWrapper").html('Error:' + error);  
 },  
 complete:function(xhr){  
 console.log('请求结束（不论成功与否）')  
 }  
})

## 等同于

$.getJSON('接口名称' , {id: 1} ,function(res){
    console.log(res)
})
$.postJSON('接口名称' , {id: 1} ,function(res){
console.log(res)
})

## \*局部加载

$(function($){
$(".xxx").on('click', function(){
        $('xxx').load(url + '#main>\_') //xxx 中加载 url 页面里的#main 里的部分
})
})

## \*添加 loading 动画

$(document).ajaxStart(function(){
    //只要有ajax请求发生 就会执行
})
$(document).ajaxStop(function(){
// 只要有 ajax 请求结束就会执行
})
