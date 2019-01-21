var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

console.log(teclas);

document.addEventListener("keydown", dibujarConTeclado);
var cuadrito = document.getElementById("areaDibujo");
var papel = cuadrito.getContext("2d");

// Variables que recuerdan el punto inicial cada vez que mueva una flecha
var x = 150;
var y = 150;

dibujarLinea("red", 149, 149, 151, 151, papel); // Se crea un efecto de punto rojo de arranque con una línea diagonal muy pequeña.


function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, lienzo) // Declaro 5 variables (pràmetros) dentro de una funciòn
{
    lienzo.beginPath(); // Arrancar un trazo
    lienzo.strokeStyle = color; // Elegir color de la línea, strokeStyle es un atributo (propiedad) del objeto lienzo
    lienzo. linewidth = 3; // Ancho de la línea en píxeles
    lienzo.moveTo(xInicial, yInicial); // Mover el lápiz a coordenada 100, 100
    lienzo.lineTo(xFinal, yFinal); // Función de trazar una línea de (100, 100) a 200, 200
    lienzo.stroke(); // stroke dibuja la línea
    lienzo. closePath(); // Levantar el lápiz (cerrar el trazo)
}

function dibujarConTeclado(evento) // La variable evento recopila los detalles como qué flecha se está oprimiendo
{
    var colorcito = "green";
    var movimiento = 3;
    /*if(evento.keyCode == teclas.UP) // switch se usa cuando hay muchos if juntos
    {
        console.log("arriba");
    }*/

    switch(evento.keyCode) // Switch compara muchos casos, inicial y final, no sirve para comparar mayor que o igual que.
    {
        case teclas.UP:
        dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
        y = y - movimiento; // Cambio que queda en el punto final
        break;

        case teclas.DOWN:
        dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
        y = y + movimiento;        
        break;

        case teclas.LEFT:
        dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
        x = x - movimiento;        
        break;

        case teclas.RIGHT:
        dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
        x = x + movimiento;
        break;

        default:
        console.log("Otra tecla");
        break;
    }
}