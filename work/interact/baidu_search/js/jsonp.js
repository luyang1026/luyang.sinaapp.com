function json2url(json){
	var arr = [];
	for(var name in json){
		arr.push(name+'='+json[name]);
	}
	return arr.join('&');
}
function jsonp(url,data,cdName,fnSucc){
	var fnName = 'jsonp_'+Math.random();
	fnName = fnName.replace('.','');
	window[fnName] = function(json){
		fnSucc&&fnSucc(json);
		header.removeChild(oS);
		window[fnName] = null;
	}
	data[cdName] = fnName;
	var oS = document.createElement('script');
	oS.src = url+'?'+json2url(data);
	var header = document.getElementsByTagName('head')[0];
	header.appendChild(oS);
}