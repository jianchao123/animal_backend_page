
function sendRequest(type,action_name,_data) {
    var ret;
	var urlPrx = "https://shalilai.cn"+action_name;//正式服务器
	// var urlPrx = "http://animal.xhty.site"+action_name;//测试服务器
	// var urlPrx = "http://www.shalilai.cn"+action_name;
	// var urlPrx = "https://47.106.227.96"+action_name;//测试服务器
    var msg;
    $.ajax({
        type:type,
        url: urlPrx,
        async: false,
        data: _data,
        contentType: "application/json",
        dataType: "json",
        xhrFields: {
       		withCredentials: true
    	},
    	crossDomain: true,
        success: function (data, status, xhr) {
        	ret = data;
        	if(ret.code === 0){
        		
        	}else{
        		var detail = '操作失败！'+ ret.detail;
        		layer.msg(detail,{icon: 5,time:1000});
//      		layer.msg(detail,{icon: 5,time:1000},function(){
//					var index = parent.layer.getFrameIndex(window.name);
//					parent.layer.close(index); //关闭弹层的窗口
//				})     
        	}
     	},error:function (XMLHttpRequest, textStatus, errorThrown) {      
          if( XMLHttpRequest.status === 403){
			  sendRequest("get", "/user/signout/", {});
	          	//未登录
          	 setTimeout(function(){
				 top.location.href = 'login.html';
		      },1000);
          }else if( XMLHttpRequest.status === 500){
          	
          	//未知错误
          	alert("未知错误！");
          }
          
     	}
    });
    return ret;
}
//接口请求地址
function geturl(){
	// return  "http://animal.xhty.site";//测试服务器
	// return "https://47.106.227.96";//测试服务器
	return "https://shalilai.cn";//正式服务器
}
//图片地址
function getimgurl(){
    // return "http://shopping.strongbug.com/";
	return "http://image-pro.shalilai.cn";//七牛云正式地址
	// return "http://img-shopping-test.xhty.site/";//七牛云测试地址
}

//获取登陆用户信息
function getAccoutInfo(){
	var account = sessionStorage.getItem("account");
	var data = JSON.parse(account);
	return data;
}


