// Tipos de datos en js

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

//6. SYMBOL (Simbolo)
console.warn("---Tipo de Dato SYMBOL (Simbolo o Unico)")

const numero1 = 5;
const numero2 =5.0;
const numero3 ="5";
const numero4 ="5.0";
const numero5 = Symbol(5)
const numero6 =Symbol(5)
const numero7 = Symbol(5.0)
const numero8 = Symbol("5")
const numero9 = Symbol("5.0")

// Pruebas comparativas
console.log("¿Es 5 = 5.0?")
if(numero1 == numero2)
    console.log("Se comparo numero1 con numero2, determinado que tienen el mismo valor")
else
console.log("Se comparo nuemro1 con nuemro2, determinando que no tienen el mismo valor")


console.log("¿Es 5 = \"5\?")
if(numero1 == numero3)
    console.log("Se comparo numero1 con numero3, determinado que tienen el mismo valor")
else
console.log("Se comparo nuemro1 con nuemro2, determinando que no tienen el mismo valor")


console.log("¿Es 5 = \"5\?")
if(numero1 === numero3)
    console.log("Se comparo numero1 con numero3, determinado que tienen el mismo valor")
else
console.log("Se comparo nuemro1 con nuemro3, determinando que tienen el mismo valor pero no el mismo tipo de dato")



console.log("¿Es 5 = \"5.0\?")
if(numero1 == numero4)
    console.log("Se comparo numero1 con numero4, determinado que tienen el mismo valor")
else
console.log("Se comparo nuemro1 con nuemro4, determinando que tienen el mismo valor pero no el mismo tipo de dato")


console.log("¿Es 5 = \"5.0\?")
if(numero1 === numero4)
    console.log("Se comparo numero1 con numero4, determinado que tienen el mismo valor")
else
console.log("Se comparo nuemro1 con nuemro4, determinando que tienen el mismo valor pero no el mismo tipo de dato")



console.log("¿Es 5 = \"5\?")
if(numero1 == numero5)
    console.log("Se comparo numero1 con numero5, determinado que tienen el mismo valor")
else
console.log("Se comparo nuemro1 con nuemro5, determinando que tienen el mismo valor pero no el mismo tipo de dato")

console.log("¿Es 5 = \"5\?")
if(numero1 === numero5)
    console.log("Se comparo numero1 con numero5, determinado que tienen el mismo valor")
else
console.log("Se comparo nuemro1 con nuemro5, determinando que tienen el mismo valor pero no el mismo tipo de dato")


