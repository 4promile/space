

var macierz = {
	
		wymiarX:	0,					//wielkość planszy w osi X (ilość sześcianów)
		wymiarY:	0,
		wymiarZ:	0,
		
		katObrotuX:	0,
		katObrotuY:	0,
		katObrotuZ:	0,
		cosAX:	Math.cos(this.katObrotuX),
		cosAY:	Math.cos(this.katObrotuY),
		cosAZ:	Math.cos(this.katObrotuZ),
		sinAX:	Math.sin(this.katObrotuX),
		sinAY:	Math.sin(this.katObrotuY),
		sinAZ:	Math.sin(this.katObrotuZ),
		macierzObrotuX:	[[1,0,0,0],[0,this.cosAX,this.sinAX,0],[0,-this.sinAX,this.cosAX,0],[0,0,0,1]],
		macierzObrotuY:	[[this.cosAY,0,-this.sinAY,0],[0,1,0,0],[this.sinAY,0,this.cosAY,0],[0,0,0,1]],
		macierzObrotuZ:	[[this.cosAZ,-this.sinAZ,0,0],[this.sinAZ,this.cosAZ,0,0],[0,0,1,0],[0,0,0,1]],
		
		transX:	0,
		transY:	0,
		transZ:	0,
		macierzTranslacji:	[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0, 0, 0, 1]],
		
		tablica:	[],
		punkt: function(pozycjaX, pozycjaY, pozycjaZ){
				this.X = pozycjaX;
				this.Y = pozycjaY;
				this.Z = pozycjaZ;
				this.macierzPunktu = [pozycjaX, pozycjaY, pozycjaZ, 1];
			},
		
		stworzPunkty:		function(wymiarX, wymiarY, wymiarZ, odstep){
						
						this.wymiarX=wymiarX;
						this.wymiarY=wymiarY;
						this.wymiarZ=wymiarZ;
						
						for (var i=0; i<wymiarX; i++){
							this.tablica[i] = [];
							for (var j=0; j<wymiarY; j++){
								this.tablica[i][j]=[];
								for (var k=0; k<wymiarZ; k++){
									this.tablica[i][j][k]= new this.punkt(i*odstep, j*odstep, k*odstep);
								}
							}
						}
					},
					
		
		stworzPunktyPerspektywa:	function(ileX, ileY, ileZ, odstep){
					
						this.wymiarX=ileX;
						this.wymiarY=ileY;
						this.wymiarZ=ileZ;
					
						for (var i=0; i<ileX; i++){
							this.tablica[i] = [];
							for (var j=0; j<ileY; j++){
								this.tablica[i][j]=[];
								for (var k=0; k<ileZ; k++){
									this.tablica[i][j][k]= new this.punkt((i-0.5*ileX)*(odstep+2*k), (j-0.5*ileY)*(odstep+2*k), k*(odstep+2*k));
								}
							}
						}
		},
		
		
		obliczOdstepPunktow:	function(){
			
						
			
		},
		
		
		mnozenie:		function(macierz1, macierz2){
							
						var wynik = [];
						var dl = macierz1.length;
						
							if (macierz1[0][0]===undefined){
								for (var i=0; i<dl; i++){
									wynik[i]=0;
									for (var j=0; j<dl; j++){
									wynik[i] += macierz1[j]*macierz2[j][i];
									}
								}
							}
								
							else {
								for (var i=0; i<dl; i++){
									wynik[i]=[];
									for (var j=0; j<dl; j++){
										wynik[i][j]=0;
										for (var k=0; k<dl; k++){
										wynik[i][j] += macierz1[i][k]*macierz2[k][j];
										}
									}
								}
							}
						
						return wynik;
				
				},
		
		
		
		aktualizujKatObrotu:	function (katObrotuWgOsiX,katObrotuWgOsiY, katObrotuWgOsiZ){
	
			this.katObrotuX = katObrotuWgOsiX;
			this.katObrotuY = katObrotuWgOsiY;
			this.katObrotuZ = katObrotuWgOsiZ;

			this.cosAX = Math.cos(this.katObrotuX);
			this.cosAY = Math.cos(this.katObrotuY);
			this.cosAZ = Math.cos(this.katObrotuZ);
			this.sinAX = Math.sin(this.katObrotuX);
			this.sinAY = Math.sin(this.katObrotuY);
			this.sinAZ = Math.sin(this.katObrotuZ);
			
			this.macierzObrotuX = [[1,0,0,0],[0,this.cosAX,this.sinAX,0],[0,-this.sinAX,this.cosAX,0],[0,0,0,1]];
			this.macierzObrotuY = [[this.cosAY,0,-this.sinAY,0],[0,1,0,0],[this.sinAY,0,this.cosAY,0],[0,0,0,1]];
			this.macierzObrotuZ = [[this.cosAZ,-this.sinAZ,0,0],[this.sinAZ,this.cosAZ,0,0],[0,0,1,0],[0,0,0,1]];
	
	
		},
		
		
		
		translacja:	function(dlugX, dlugY, dlugZ){
		
				this.transX = dlugX;
				this.transY = dlugY;
				this.transZ = dlugZ;
				this.macierzTranslacji[3][0] = dlugX;
				this.macierzTranslacji[3][1] = dlugY;
				this.macierzTranslacji[3][2] = dlugZ;
		},
		
		
		
		przeliczWszystko:	function (){
		
			for (var i=0; i<this.wymiarX; i++){
				for (var j=0; j<this.wymiarY; j++){
					for (var k=0; k<this.wymiarZ; k++){
						this.translacja(-300,-200,-200);
						this.aktualizujPozycjePunktu(i, j, k, this.mnozenie(this.tablica[i][j][k].macierzPunktu, this.macierzTranslacji));					
						this.aktualizujPozycjePunktu(i, j, k, this.mnozenie(this.tablica[i][j][k].macierzPunktu, this.macierzObrotuX));					
						this.aktualizujPozycjePunktu(i, j, k, this.mnozenie(this.tablica[i][j][k].macierzPunktu, this.macierzObrotuY));				
						this.aktualizujPozycjePunktu(i, j, k, this.mnozenie(this.tablica[i][j][k].macierzPunktu, this.macierzObrotuZ));
						this.translacja(300,200,200);
						this.aktualizujPozycjePunktu(i, j, k, this.mnozenie(this.tablica[i][j][k].macierzPunktu, this.macierzTranslacji));
						//this.translacja(0,0,0);
					}
				}
			}
		
		},
		
		
		
		przeliczMacierz:	function(macierz){
			//this.translacja(300,300,0);
			for (var i=0; i<this.wymiarX; i++){
				for (var j=0; j<this.wymiarY; j++){
					for (var k=0; k<this.wymiarZ; k++){
						//this.translacja(300,300,0);
					this.aktualizujPozycjePunktu(i, j, k, this.mnozenie(this.tablica[i][j][k].macierzPunktu, macierz));
					}
				}
			}
		},
		
		
		
		
		aktualizujPozycjePunktu:	function(pozX, pozY, pozZ, nowaPozycja){
			this.tablica[pozX][pozY][pozZ].X = nowaPozycja[0];
			this.tablica[pozX][pozY][pozZ].macierzPunktu[0] = nowaPozycja[0];
			this.tablica[pozX][pozY][pozZ].Y = nowaPozycja[1];
			this.tablica[pozX][pozY][pozZ].macierzPunktu[1] = nowaPozycja[1];
			this.tablica[pozX][pozY][pozZ].Z = nowaPozycja[2];
			this.tablica[pozX][pozY][pozZ].macierzPunktu[2] = nowaPozycja[2];
		}
		
		
	};
	

	
//początkowe ustawienie punktów i macierzy:
macierz.stworzPunktyPerspektywa(6,6,20,65);
macierz.translacja(400,330,0);
macierz.przeliczMacierz(macierz.macierzTranslacji);
	
	
//testowe macierze, później można usunąć:
var macierzTestowa1 = [[1,0],[3,2]];
var macierzTestowa2 = [[5,4],[2,1]];
var macierzTestowa3 = [5,4,2,1];
var macierzTestowaWynik = macierz.mnozenie(macierzTestowa1, macierzTestowa2);
	
var macierzTestowa4 = [-1,-1,-1,1];
var macierzTestowa5 = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[5,2,0,1]];
var macierzTestowaWynik2 = macierz.mnozenie(macierzTestowa4, macierzTestowa5);
	
	
//macierz.aktualizujKatObrotu(0.00,0.0.01,0.0);
//macierz.przeliczWszystko();
	
var testy = {
	
	katX:	0,
	katXFL:	true,
	katXgranicaUP: 0.002,
	katXgranicaDAWN: -0.002,
	obrotX:	0.0001,
	
	katY:	0,		
	katYFL:	true,
	katYgranicaUP: 0.001,
	katYgranicaDAWN: -0.001,
	obrotY:	0.0001,
	
	katZ:	0,		
	katZFL:	true,
	katZgranicaUP: 0.0015,
	katZgranicaDAWN: -0.0015,
	obrotZ:	0.0001,
	
	ruszaj: function(){
		if (this.katXFL) this.katX+=this.obrotX; else this.katX-=this.obrotX;
			if (this.katX>this.katXgranicaUP) this.katXFL=false;
			if (this.katX<this.katXgranicaDAWN) this.katXFL=true;
		if (this.katYFL) this.katY+=this.obrotY; else this.katY-=this.obrotY;
			if (this.katY>this.katYgranicaUP) this.katYFL=false;
			if (this.katY<this.katYgranicaDAWN) this.katYFL=true;
		if (this.katZFL) this.katZ+=this.obrotZ; else this.katZ-=this.obrotZ;
			if (this.katZ>this.katZgranicaUP) this.katZFL=false;
			if (this.katZ<this.katZgranicaDAWN) this.katZFL=true;
		
		macierz.aktualizujKatObrotu(this.katX,this.katY,this.katZ);
		macierz.przeliczWszystko();
	},
};

	
	

	
	
	
	
	
	
	
	
	
	
	