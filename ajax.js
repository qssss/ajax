function Ajax(method,url,data,success,error) {
	//创建ajax对象
	var xhr = null;
	if(window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	} else {
		xhr = new ActiveXObject('Microsoft.XMLHTTP');
	}
	if(method == 'get' && data) {
		url += '?' + data;
	} 
	//open
	xhr.open(method,url,true);
	if(method == 'get') {
		xhr.send();
	} else {
		//设置post请求的编码问题 设置在open方法之后 send方法之前
		xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		xhr.send(data);
	}
	//接收数据
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4) {
			if(xhr.status == 200) {
				if(success) {
					success(xhr.responseText);
				}
			} else {
				if(error) {
					error(xhr.status);
				}
			}
		}
	}
}