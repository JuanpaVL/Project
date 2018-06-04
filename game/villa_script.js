var vk = document.getElementById("villa_kuka");
var papel = vk.getContext("2d");

var fondo = 
{
    url = "tile.png",
    cargaOK: false
};

var vaca =
{
    url = "vaca.png",
    cargaOK: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.object = new Image;
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVacas);

function cargarFondo();
{
    fondo.cargaOK = true;
    dibujar()
}

function dibujar();
{
    if(fondo.cargaOK == true)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
}

function aleatorio (min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}