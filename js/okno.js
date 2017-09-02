
var okno = {
	
	szerokosc:	0,
	wysokosc:	0,
	
	ustawWymiary:	function(){
		this.szerokosc = 0.9*window.innerWidth;
		this.wysokosc =	0.9*window.innerHeight;
		document.getElementById("mycanvas").style.width = this.szerokosc;
		document.getElementById("mycanvas").style.height = this.wysokosc;
	}
	
};