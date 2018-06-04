alert("Insertar la cantidad de lineas que quieres en la caja de texto");

var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;

function dibujoPorClick()
{
  var lineas = parseInt(texto.value);
  var l = 0;
  var yi, xf;
  var colorin = "#FAA";
  var espacio = ancho / lineas;

  while (l < lineas)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(colorin, 0, yi, xf, 300);
    console.log("Linea" + l);
    l = l + 1;
  }

    dibujarLinea("#FAA", 1, 1, 1, 300); 
    dibujarLinea("#FAA", 1, 299, 299, 299); 

  function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
  {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_inicial, y_inicial );
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
  }
}