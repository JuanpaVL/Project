var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

console.log(imagenes);

class Pakiman
{
    constructor(n, v, a)
    {
        this.imagen = new Image();
        this.nombre = n;
        this.vida = v;
        this.ataque = a;
        this.tipo = "tierra";
        
        this.imagen.src = imagenes[this.nombre]
    }
    hablar()
    {
        alert(this.nombre);
    }
    mostrar() 
    {
      document.write("<p>");
      document.body.appendChild(this.imagen);
      document.write("<strong>" + this.nombre + "</strong><br />");
      document.write("Vida <strong>" + this.vida + "</strong><br />");
      document.write("Ataque <strong>" + this.ataque + "</strong><br />");
      document.write("Tipo <strong>" + this.tipo + "</strong><br />");
      document.write("</p>");
    }
    
}


var cauchin = new Pakiman("Cauchin", 100, 30);
var pokacho = new Pakiman("Pokacho", 80, 50);
var tocinauro = new Pakiman("Tocinauro", 120, 40);
console.log(cauchin, pokacho, tocinauro);


