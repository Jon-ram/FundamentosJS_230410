// comentarios en una sola linea

/*
Comentarios multi linea
*/

//EJERCICIO 01 : Declaracion de Variables

// a) Var

var miNombre ="Jonathan Baldemar";
var misApellidos;
var miEdad = 19;

//El objeto de consola nos permite enviar datos a la terminal y poder 
console.warn("---Declaracion de variables usando el prefijo   VAR");
console.log("Intentando leer las variables: ", miNombre,misApellidos, miEdad);

misApellidos = "Ramirez Reyes"
console.log("Ya que anbos fueron inicializados vuelven a intentar leerlas: ", miNombre, misApellidos);

//Una variable puede cambiar de valor en el proseso de jecucion del programa

console.warn("--- Declaracion de variables del tipo constante usando: CONST")
const miUniversidad ="UT Xicotepec";
const miMatricula=230410
console.log("Hola ", miNombre," ", misApellidos," se que estudia actualmente en: ",miUniversidad, " asignaron la matricula: ", miMatricula,
    " y tienes una edad de: ", miEdad, " años.");


//Para saber el tipo de dato que tiene una variable o constante podemos utilizar la funcion typeOf()

console.log("Analizando los datos puedo deducir que: ")
console.log("miNombre es del tipo: ", typeof(miNombre))
console.log("misApellidos es del tipo: ", typeof(misApellidos))
console.log("miUniversidad es del tipo: ", typeof(miUniversidad))
console.log("miMatricula es del tipo: ", typeof(miMatricula))
console.log("miEdad es del tipo: ", typeof(miEdad))

// c) LET
let miFechaNacimiento = "2005-03-15"
let miColorFavorito;

console.warn("--- Declaracion de Variables locales usando: LET")
console.log("Genial, te voy  conociendo mejor, ahora se que tu naciste el: ",miFechaNacimiento, " y tu color favorito es mmmmmmmmm dejame pensa...r")
miColorFavorito="Verde";
console.log(`creo que es ${miColorFavorito}, le atine?`)
console.log("Analizando los datos puedo deducir que: ")
console.log("miColorFavorito es del tipo: ", typeof(miColorFavorito))
console.log("miFechaNacimiento es del tipo: ", typeof(miFechaNacimiento))

