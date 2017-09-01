
var obiekty = {
	
		tablica:	[],
		
		
		nowy:	function(nr, imie, pozX, pozY, pozZ){
				
				this.nr = nr;							//nr w tablicy obiektów
				this.imie = imie;						//można dowolną nazwę nadać obiektowi
				this.typ = "nieznany";					//czyli czy np sześcian lub inny typ
				this.nrTypu = 0;						//czyli unikatowy dla nazwy typu nr, pomocny przy funkcji figura
				this.X = pozX;							//pozycja na osi X centralnego punktru obiektu (na jego podstawie budowany/rysowany jest cały typ obiektu)
				this.Y = pozY;
				this.Z = pozZ;
				this.obrotX = 0;						//obrot obiektu względem osi X
				this.obrotY = 0;
				this.obrotZ = 0;
				this.skalaX = 1;						//skala obiektu względem osi X
				this.skalaY = 1;
				this.skalaZ = 1;
				this.macierz = [pozX,pozY,pozZ,1];		//macierz pozycji obiektu (zawiera jego pozycję)
				this.punkty = [];						//tablica wszystkich punktów obiektu
		},
		
		
		
		figura:	function(nr, wielkosc, obiekt){
			
			switch(nr) {
				
				
			case 1:
			case "szescian":
				
				
			break;
				
				
			case n:
				//code block
				break;
			default:
				//code block
			}
			
		},
};