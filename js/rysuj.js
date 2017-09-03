
var plansza = {
	
		tablicaPozycji:	[],
		
		nowyElementTablicy: function(){
			this.fl = false;
		},
		
		stworzTablicePozycji: function(dlX, dlY, dlZ){
			for (var i=0; i<dlX; i++){
							this.tablicaPozycji[i] = [];
							for (var j=0; j<dlY; j++){
								this.tablicaPozycji[i][j]=[];
								for (var k=0; k<dlZ; k++){
									this.tablicaPozycji[i][j][k]= new this.nowyElementTablicy();
								}
							}
						}
		},
		
		tlo:	function(){
			//ctx.save();
			ctx.fillStyle = "RGBA(128,128,128,1)";
			ctx.fillRect(0,0,okno.szerokosc,okno.wysokosc);
			//ctx.restore();
		},
		
		rysuj:	function(){
			ctx.moveTo(macierz.tablica[1][1][1].X,macierz.tablica[1][1][1].Y);
			ctx.lineTo(macierz.tablica[3][3][10].X,macierz.tablica[3][3][10].Y);
			ctx.stroke();
		},
		
		
		rysujSzescian:	function(pozycjaX, pozycjaY, pozycjaZ, wielkosc){
			
			ctx.beginPath();
			
			ctx.moveTo(macierz.tablica[pozycjaX][pozycjaY][pozycjaZ].X, macierz.tablica[pozycjaX][pozycjaY][pozycjaZ].Y);
			
			function kreska(x,y,z){ 
					ctx.lineTo(macierz.tablica[pozycjaX+x*wielkosc][pozycjaY+y*wielkosc][pozycjaZ+z*wielkosc].X, macierz.tablica[pozycjaX+x*wielkosc][pozycjaY+y*wielkosc][pozycjaZ+z*wielkosc].Y);
					};
			
			kreska(1,0,0);
			kreska(1,1,0);
			kreska(0,1,0);
			kreska(0,0,0);
			
			kreska(0,0,1);
			kreska(1,0,1);
			kreska(1,1,1);
			kreska(0,1,1);
			kreska(0,0,1);
			
			ctx.moveTo(macierz.tablica[pozycjaX+wielkosc][pozycjaY][pozycjaZ+wielkosc].X, macierz.tablica[pozycjaX+wielkosc][pozycjaY][pozycjaZ+wielkosc].Y);
			kreska(1,0,0);
			ctx.moveTo(macierz.tablica[pozycjaX+wielkosc][pozycjaY+wielkosc][pozycjaZ+wielkosc].X, macierz.tablica[pozycjaX+wielkosc][pozycjaY+wielkosc][pozycjaZ+wielkosc].Y);
			kreska(1,1,0);
			ctx.moveTo(macierz.tablica[pozycjaX][pozycjaY+wielkosc][pozycjaZ+wielkosc].X, macierz.tablica[pozycjaX][pozycjaY+wielkosc][pozycjaZ+wielkosc].Y);
			kreska(0,1,0);
			
			ctx.stroke();
		},
		
		
		
		rysujWszystkie:	function(){
			for (var i=0; i<macierz.wymiarX-1; i++){
				for (var j=0; j<macierz.wymiarY-1; j++){
					for (var k=0; k<macierz.wymiarZ-1; k++){
						this.rysujSzescian(i,j,k,1);
					}
				}
			}
		},
		
		
		rysujWskazane:	function(){
			for (var i=0; i<macierz.wymiarX-1; i++){
				for (var j=0; j<macierz.wymiarY-1; j++){
					for (var k=0; k<macierz.wymiarZ-1; k++){
						if (this.tablicaPozycji[i][j][k].fl) this.rysujSzescian(i,j,k,1);
					}
				}
			}
		},
		
		
};



plansza.stworzTablicePozycji(macierz.wymiarX, macierz.wymiarY, macierz.wymiarZ);


//testowe, później je usuń


function losuj(zakres){
	return (Math.floor(Math.random()*zakres));
};

var tymczasowaX = 0;
var tymczasowaY = 0;
plansza.tablicaPozycji[tymczasowaX][tymczasowaY][1].fl = true;
function asteroid(){
	for (var i=macierz.wymiarZ-2; i>-1; i--){
		if (plansza.tablicaPozycji[tymczasowaX][tymczasowaY][i].fl) {
			plansza.tablicaPozycji[tymczasowaX][tymczasowaY][i].fl = false;
			plansza.tablicaPozycji[tymczasowaX][tymczasowaY][i+1].fl = true;
		};
		if (plansza.tablicaPozycji[tymczasowaX][tymczasowaY][macierz.wymiarZ-1].fl) {
			plansza.tablicaPozycji[tymczasowaX][tymczasowaY][macierz.wymiarZ-1].fl = false;
			tymczasowaX = losuj(macierz.wymiarX);
			tymczasowaY = losuj(macierz.wymiarY);
			plansza.tablicaPozycji[tymczasowaX][tymczasowaY][0].fl = true;};
	};
};

