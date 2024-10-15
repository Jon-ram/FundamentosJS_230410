const bg = "linear-gradient(11deg, rgba(199,0,36,1) 0%, rgba(255,129,26,1) 33%, rgba(255,191,26,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

//Personalizacion de las salidas de consola
console.warn("Practica 07:Arreglos de JavaScript")


console.log("%c1.-Si/Entinces ...", style_console);
//Le indica al programa que hacer o que no en vase a una pruba logica de verdaderos o falso
let fechaActual = new Date();
console.log(`Hola, la Fecha de hoy es: ${fechaActual.toString()}`);

//y si lo nesesitamos en formato local?
const fechaActualMX= fechaActual.toLocaleDateString('es-MX', 
    {
        weekday:'long', 
        year:'numeric',
        month:'long',
        day:'numeric',
        hour:'numeric',
        minute:'numeric',
        second:'numeric',
        hour12: false
    }
);

console.log(`en formato local (Mexico): ${fechaActualMX}`);

//Si es antes de las doce saluda con buenos dias 

if(fechaActual.getHours()<12)
    console.log(`Buenos Dias, hoy es: ${fechaActualMX}`);

//Existe un extensor de la sentencia if(si) que es else(en caso contrario)
if(fechaActual.getMonth()<=6)
    console.log(`Esta es la primera mitad del año.`);
else
    console.log(`Esta es la s¿egunda mitad del año .`);



