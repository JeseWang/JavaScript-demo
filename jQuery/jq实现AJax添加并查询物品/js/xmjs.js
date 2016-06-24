$(function(){
var url="http://localhost:5000/json"
//添加
$("#left button:even").click(function(e){
		alert("添加成功！")
	$.post(url,$("form").serialize(),function(){
	});e.preventDefault();
});
//查询
$("#right button").click(function(e){
	$.get(url,function(data,statue){
		if(statue=="success"){
		for(i=0;i<data.length;i++){
	$("<p>"+"名称为："+data[i].name+"价格为："+data[i].price+"数量为："+data[i].num+"</p>").css("font-size","20px").appendTo(".right_1")
	$("#right p:even").css("color","red")
		}
		}
	})
});
//获取
$.get(url,function(data){
	for(i=0;i<data.length;i++){
	$("<p><span><a href='#' title='http://localhost:5000/json/"+data[i].id+"'>查看</a></span><span>"+data[i].name+"</span><span>"+data[i].price+"</span><span>"+data[i].num+"</span></p>").appendTo(".bottom_1")	
	}
	$(".bottom_1 span:even").css("color","darkblue")
	$("a").each(function(index){
	$(this).click(function(e){
		tc($(this).attr("title"));
		})
	})
})
function tc(url){
	$(".bottom_2").css("display","block")
	$.get(url,function(data){
		$(".bottom_2").each(function(index){
			$(this).html("");
			$(this).append(data.name+"<br/>"+data.price+"<br/>"+data.num);
		})
	})
}
})