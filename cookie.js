var cookieUtil = {
	setCookie: function(key,value,times) {
		var date = new Date();
		date.setDate(date.getDate() + times);
		document.cookie = key + '=' + value +'; expires' + '=' + date;
	},
	getCookie: function(key) {
		var cookie = document.cookie;
		var arr = cookie.split('; ');
		console.log(arr)
		for(var i = 0;i<arr.length;i++) {
			var subarr = arr[i].split('=');
			var _key = subarr[0];
			if(_key == key) {
				return subarr[1]
			}
		}
	},
	deleteCookie: function(key) {
		//将cookie设置为过去时间
		var value = getCookie('name');
		setCookie(key,value,-1);
	}
}