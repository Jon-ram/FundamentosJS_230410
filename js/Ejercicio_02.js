// Tipos de datos en js

const { isLeafType } = require("graphql");

// 1 Undefined
console.warn("---Tipo de Dato UNDEFINED(No definido)")
let cliente;
console.log(`El cliente es : ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

cliente = "Juan Romero"
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

cliente = 19227
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

//console.log(`El cliente ha realizado: ${NumCompras} en este mes.`);

//Undefined es el tipo de dato que por defecto se asigna a variables no inicializadas o no declaradas

// 2. BOOLEAN - Boleanos -TRUE/FALSE (Flaso/Verdadero)
console.warn("---Tipo de Dato : BOOLEAN (True/ False)")
let esPremium = "No lo se";
console.log(`¿Es el clientePremium? : ${esPremium}`)
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);

console.log("Asignando el valor \"true\"a la variable. ")
esPremium = "true"
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);

console.log("Asignando el valor true a la variable. ")
esPremium = true
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);

console.log(`¿Es el clientePremium? : ${esPremium}`);
console.log("Cambaindo el valor de esPremium a false")
esPremium=0

if(esPremium)
    console.log("El cliente pago por usar el servicio");
else
console.log("El cliente recibe los servicios gratuitos");

//3. Numbre

var cantidad;
const costo_producto = 10.50
let saldo_cuenta = 2500.40
let monto_transaccion ;

console.warn("---Tipo de Dato -MUMBER (Numeros, positivos, negativos, decimales, flotantes)");
console.log(`Tu saldo al dia de hoy es de: ${saldo_cuenta}, (tipo de Dato = ${typeof(saldo_cuenta)})`);
console.log(`El producto que has seleccionado cuesta: ${costo_producto}`)
cantidad = 8;
console.log(`Has elegido comprar: ${cantidad} de productos`)
console.log(`El importe total de la compra es: ${(cantidad*costo_producto)}`)
saldo_cuenta= saldo_cuenta - (cantidad*costo_producto);
console.log(`Tu nuevo saldo es de: ${saldo_cuenta}`);

//El cliente realiza un bono de 1500
monto_transaccion=1500;
console.log(`Tu abono de: ${monto_transaccion} ha recibodp, tu nuevo saldo es de: ${saldo_cuenta+monto_transaccion}`);

//4. STRING (Cadena de Caracteres)
const alumno = "Jonathan Baldemar Ramirez Reyes"
let producto;

console.warn("---Tipo de Datos - STRING (Cadena de Caracteres)");
console.log(`El nombre del alumno es: ${alumno}, que es un tipo de dato ${typeof(alumno)}`);

//Inicializamos el valor de la variable producto
producto= "MONITOR 20\" FULL HD"
console.log(`Elnombre del PRODUCTO es: ${producto}, que es un tipo de valor: ${typeof(producto)}`);

//Manipulando los STRINGS
console.log(`Mas adelante podremos transformar el contenido de los STRING usandolos metodos y funciones especificas, como su valor a mayusculas: ${alumno} =>
${alumno.toLocaleUpperCase()}`);
console.log(`O en su defecto a minusculas: ${producto} => ${producto.toLowerCase()}`);

//5. BIGINT (Numero de Mayor Amplitud)

console.warn("---Tipo de Dato - BIGINT (Numero Amplio)");
const numeroGrande = 1234567890
const numeroGrande2 = 12345678901234567890
let numeroGrande3 = 123456789012345678901234567890
let numeroGrande4 = 1234567890123456789012345678901234567890

console.log(`El primer experimento de un numero grande es: ${numeroGrande}, que si es soportado por NUMBER, y su tipo de dato es ${typeof(numeroGrande)}`)
console.log(`El segundo experimento de un numero grande es: ${numeroGrande2}, que si es soportado por NUMBER, y su tipo de dato es ${typeof(numeroGrande2)}`)
console.log(`El tercer experimento de un numero grande es: ${numeroGrande3}, que no es soportado por NUMBER, perdiendo precicion y su tipo de dato es ${typeof(numeroGrande3)}`)
console.log(`El cuarto experimento de un numero grande es: ${numeroGrande4}, que si es soportado por NUMBER, perdiendo precicion y su tipo de dato es ${typeof(numeroGrande4)}`)

numeroGrande3 = BigInt(123456789012345678901234567890n);
console.log(`El quinto experimento de un numero grande es: ${numeroGrande3}, que ya fue convertido a BIGINT, y su tipo de dato es ${typeof(numeroGrande3)}`)

numeroGrande4 = BigInt(1234567890123456789012345678901234567890n);
console.log(`El sexto experimento de un numero grande es: ${numeroGrande4}, que ya fue convertido a BIGINT, y su tipo de dato es ${typeof(numeroGrande4)}`)

//¿Se pueden realizar operaciones matematicas entre un NUMBER y un BEGINT?
const numero = 129
console.log(`Intentando realizar la suma de : numero + numeroGrande3, el resultado es: ${BigInt(numero) + numeroGrande3}`) 

// 6. SYMBOL (Símbolo)
console.warn("---Tipo de Dato - SYMBOL (Símbolo o Único)")
const numero1=5;
const numero2=5.0;
const numero3="5";
const numero4="5.0";
const numero5=Symbol(5)
const numero6=Symbol(5)
const numero7=Symbol(5.0)
const numero8=Symbol("5")
const numero9=Symbol("5.0")

// Pruebas comparativas 
//1
console.log("¿Es 5 = 5.0?")
if(numero1 == numero2)
    console.log("Se comparo numero1 con numero2, determinando que tienen el mismo valor.")
else
    console.log("Se comparo numero1 con numero2, determinando que no tienen el mismo valor.")


//2
console.log("¿Es 5 = \"5\"?")
    if(numero1 == numero3) //Estrictamente igual (equidad)= Mismpo valor, mismo tipo de datos
        console.log("Se comparo numero1 con numero3, determinando que tienen el mismo valor.")
    else
        console.log("Se comparo numero1 con numero3, determinando que no tienen el mismo valor.")

//3
console.log("¿Es 5 === \"5\"?")
    if(numero1 === numero3)
        console.log("Se comparo numero1 con numero3, determinando que tienen el mismo valor.")
    else
        console.log("Se comparo numero1 con numero3, determinando que tienen el mismo valor, pero NO el mismo tipo de dato.")


//4

console.log("¿Es 5 = \"5.0\"?")
    if(numero1 == numero4)
        console.log("Se comparo numero1 con numero4, determinando que tienen el mismo valor.")
    else
        console.log("Se comparo numero1 con numero4, determinando que no tienen el mismo valor.")

//5        

console.log("¿Es 5 === \"5.0\"?")
    if(numero1 === numero4)
        console.log("Se comparo numero1 con numero4, determinando que tienen el mismo valor.")
    else
     console.log("Se comparo numero1 con numero4, determinando que tienen el mismo valor, pero NO el mismo tipo de dato.")


//6
console.log(`¿Es 5 === Symbol(5)?, antes de compararlos analizamos que tipo de dato son: siendo numero1 del tipo: ${typeof(numero1)} y numero5 del tipo de dato: ${typeof(numero5)}`)
    if(numero1 == numero5)
        console.log("Se comparo numero1 con numero5, determinando que tienen el mismo valor.")
    else
        console.log("Se comparo numero1 con numero5, determinando que tienen el mismo valor, pero NO el mismo tipo de dato.")

//7
console.log(`¿Es 5 === Symbol(5.0)?, antes de compararlos analizamos que tipo de dato son: siendo numero1 del tipo: ${typeof(numero1)} y numero5 del tipo de dato: ${typeof(numero7)}`)
    if(numero1 == numero7)
        console.log("Se comparo numero1 con numero7, determinando que tienen el mismo valor.")
    else
        console.log("Se comparo numero1 con numero7, determinando que tienen el mismo valor, pero NO el mismo tipo de dato.")
    
//8
console.log(`¿Es 5 === Symbol(\"5\")?, antes de compararlos analizamos que tipo de dato son: siendo numero1 del tipo: ${typeof(numero1)} y numero5 del tipo de dato: ${typeof(numero8)}`)
    if(numero1 == numero8)
        console.log("Se comparo numero1 con numero8, determinando que tienen el mismo valor.")
    else
        console.log("Se comparo numero1 con numero8, determinando que tienen el mismo valor, pero NO el mismo tipo de dato.")


//9
console.log(`¿Es 5 === Symbol("5.0")?, antes de compararlos analizamos que tipo de dato son: siendo numero1 del tipo: ${typeof(numero1)} y numero5 del tipo de dato: ${typeof(numero9)}`)
    if(numero1 == numero9)
        console.log("Se comparo numero1 con numero9, determinando que tienen el mismo valor.")
    else
        console.log("Se comparo numero1 con numero9, determinando que tienen el mismo valor, pero NO el mismo tipo de dato.")




// 10 prueba importante

console.log(`¿Es Symbol(5) === Symbol(5)?, antes de compararlos analizamos que tipo de dato son: siendo numero1 del tipo: ${typeof(numero5)} y numero5 del tipo de dato: ${typeof(numero6)}`)
    if(numero5 === numero6)
        console.log("Se comparo numero5 con numero6, determinando que tienen el mismo valor.")
    else
        console.log("Se comparo numero5 con numero6, determinando que tienen el mismo valor y el mismo tipo de dato, es la condición de Symbol la que lo hace único en la memoria.")



//7. NULL

console.warn("---Tipo de Dato - NULL (Nulo o vacio)");
//El tipo de dato NULL se asigna cuando el sistema o el usuario saben de la variable pero prefienren dejarlo vacio, bajo su consentimiento 


let nombreUsuario =null;
let passUsuario=null;
let generoUsuario= null;
let estatusRelacionSentimental=null;
let fecha_ultimoPost=null;

//supongamos que estamos progracmando una red social, tipo Facebook, en la parte de la informacionse publicara en el perfil del usuario

//si el usuario no ha iniciado sesion en el dispositivo movil o en la aplicacion web, puede explorar el contenido de acceso publico. y no exixtira informacion para msotrar

//En la HU (Historia de Usuario), que el ususario desea logearse debera ingresar su numero telefonico o correo electronico y una contraseña que deberemos guardar en las variables previamente declaradas

//Supongamos que el usuario: Jonathan con correo electronico: 230410@utxicotepec.edu.mx desea ingresar con su contraseña: pas1234

nombreUsuario = "230410@utxicotepec.edu.mx";
passUsuario = "pas1234";

//en este momento de ejecucion del sistema no sabemos su genero, ni su estatus de relacion sentimantal 

console.loh(`El usuario ${nombreUsuario} enta intentando logearse con una contarseña de: ${passUsuario}`);

//lo que prosigue es que el sistema contejara los datos ingresados con la base de datos y ene caso de que elos datos sean correctos comenzara la sesion en la plataforma actualizando estos valores

//  Dado que Jonathan es del genero Masculino, y denota que su estatus de relacion no ha sido capturado o los mantiene privado esto genera la actualizacion de los valores de las variables

generoUsuario="M"
estatusRelacionSentimental=null

console.log(`El usuario: ${nombreUsuario}, se ha logeado exitosamente, al tener acceso a su informacion de perfil podemos deducir que es del genero
    ${generoUsuario} y que su estus de relacion es<: ${estatusRelacionSentimental} y su ultima publicacon se realizo el: ${fecha_ultimoPost}`);

//Comparando NULL vs UNDEFINED
//S i bien UNDEFINED  y NULL tienen el mismo valor, no tienen el mismo tipo de dato 

console.log("Comparacion de la eqidad entre Undefined y Null")
console.log((fecha_ultimoPost == estatusRelacionSentimental)?
    "Ambas variables tienen el mismo valor" :
    "las variables no tienen el mismo valor"
);


console.log("Comparacion de la eqidad entre Undefined y Null")
console.log((fecha_ultimoPost === estatusRelacionSentimental)?
    "Ambas variables tienen el mismo valor y ele mismo tipo de dato" :
    "las variables tienen el mismo valor, pero no el mismo tipo de dato"
);

// 8. FUNCTION (Funciones)
console.warn("--- Tipo de Dato FUNCTION (Función)")

// Declaramos una funcion que nos permita recibir un paramento en este caso el nombre de la persona a saludar, y le enviamos un saludo, esta función la asignamos a una constante.
const saludar =  function(nombre){return Hola, ${nombre}!}

// Invocamos a la función declarada
console.log(saludar('Marco'));

//Y que tipo de dato tiene esta constante
console.log(`El tipo de dato de la constante saludar es: ${typeof(saludar)}`)

