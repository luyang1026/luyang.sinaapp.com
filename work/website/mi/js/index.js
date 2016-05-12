window.onload = function(){
	var oCart = document.getElementById('cart');
	var oCartList = oCart.getElementsByTagName('ul')[0];
	var oLine = oCart.getElementsByTagName('span')[0];
	var oCartIcon = oCart.getElementsByTagName('i')[0];

	oCart.onmouseover = function(){
		oLine.style.display = 'block';
		oCartList.style.display = 'block';
		oCartIcon.className = 'hover_cart_icon cart_icon';
		this.className = 'cart cart_hover fr';

	}
	oCart.onmouseout = function(){
		oLine.style.display = 'none';
		oCartList.style.display = 'none';
		oCartIcon.className = 'cart_icon';
		this.className = 'cart fr';
	}
}