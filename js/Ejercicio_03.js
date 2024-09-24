const bg = "linear-gradient(11deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";

const style_console = `background: ${bg}; color: white; border-radius: 6px; padding:4px; font-size: 1.0rem; font-weigth: bold `

//Personalizacion de las salidas de consola
console.warn("Practica 05 : Repaso de objetos en JavaScript");


//VARIABLES INDEPENDIENTES
console.log("%c1.- Variables independientes", style_console);


//Decaramos valores independientes relacionados a un producto

let Producto_Nombre = "Computadora gamer Laptop 17\"";
let Producto_Marca = "ASUS";
let Producto_Modelo = "TUF 17";
let Producto_Precio = 15749.50;
let Producto_Disponibilidad = true;
let Producto_SKU = Symbol("TUF707W-HX221W");
let Producto_Stock = 15;
let Producto_Imagen = null;
let Producto_Barcode;
let Producto_Categorias = ["Electronios", "Computacio", "Gaming", "Promociones de Buen Fin", "Mejor valorados "];

//Acceddemos a los valores de las caracteristicas del producto de manera independiente

console.log(`Los datos del producto son: \n
    Nombre: ${Producto_Nombre}, tipo de dato <${typeof(Producto_Nombre)}>
    Marca: ${Producto_Marca}, tipo de dato <${typeof(Producto_Marca)}>
    Modelo: ${Producto_Modelo}, tipo de dato <${typeof(Producto_Modelo)}>
    Precio: ${Producto_Precio}, tipo de dato <${typeof(Producto_Precio)}>
    Disponibilidad: ${Producto_Disponibilidad}, tipo de dato <${typeof(Producto_Disponibilidad)}>
    Stock: ${Producto_Stock}, tipo de dato <${typeof(Producto_Stock)}>
    Barcode: ${Producto_Barcode}, tipo de dato <${typeof(Producto_Barcode)}>
    Imagen: ${Producto_Imagen}, tipo de dato <${typeof(Producto_Imagen)}>
    Categorias: ${Producto_Categorias}, tipo de dato <${typeof(Producto_Categorias)}>`);

    console.log("En el caso del SKU al ser un Symbol, no se puede concatenar a la cadena de impresion anterior");
    console.log(Producto_SKU);
    console.log(typeof(Producto_SKU));

    //Ahora lo declaramos como un objeto
    console.log("%C2.- Objeto", style_console);

    let Producto =
    {
        Nombre : "Tenis Deportivo",
        Marca : "Nike",
        Modelo :"Jordan 24",
        Precio : 3361.25,
        Disponibilidad : false,
        Stock : 0,
        SKU : "025485-612",
        Imagen : "../assets/products/sneaker/JORDAN.png",
        Barcode :null,
        Categorias : ["Deportes", "Juvenil"]
    }

    //Ahora leemos el objeto completo
    console.table(Producto)

    //Para acceder a las propiedades  del objeto Utilizamos un " , " y el nombre de la propiedad a leer

    console.log("Accediendo a propiedades especificas del PRODUCTO")
    console.log(`Nombre COMPLETO del PRODUCTO: ${Producto.Nombre} ${Producto.Marca} ${Producto.Modelo} `)
    console.log(`Precio: ${Producto.Precio}`)
    console.log(`Estus: ${Producto.Precio}`)
    if(Producto.Disponibilidad == 0)
        console.log(`Estaus: Agotado`)
    else
    console.log(`Estatus: ${Producto.Stock} unidades Disponibles`);



    console.log("%c3.-Destruccion de OBjetos", style_console);

    let Producto2 = 
    {
        Clave : 316,
        Nombre : "Lentes para sol",
        Marca : "Oakley",
        Modelo :"QNIN Kato",
        Precio : 6829.0,
        Disponibilidad : true,
        Stock : 5,
        SKU : "009481D-0356",
        Imagen : "../assets/products/sunglassses/katoRed.png",
        Barcode :451232457845,
        Categorias : ["Deportes", "Lnetes", "Hombre", "Accesorios"]  
    }

    let Comprador = 
    {
        Clave : 3216,
        Nombre : "Jonathan Baldemar",
       Apellidos: "Ramirez Reyes",
       Tipo: "Freacuente",
       Correo: "230410@utxicotepec.edu.mx",
       PaisOrigen: "Mexico",
       SaldoActual: 14000
    }

    let Pedido =
    {
        Producto_Clave:316,
        Comprador_Clave: 3216,
        Cantidad:2,
        Estatus:"Carrito de Compra ",
        TipoPago:"Targeta de Credito"
    }

    //En base a los 3 objetos nesesitamos calcular el costo de la compra y si le alcanza con su saldo a favor

    let {Precio:Producto_Precio2} = Producto2;
    let {Cantidad:Pedido_Cantidad} = Pedido;
    let {SalsoActual:Cliente_SalsoActual} = Comprador;
    let Costo_Compra=  Producto_Precio2 * Pedido_Cantidad  ;

    console.log(`El cliente ha agregado a su carrito de compras ${Pedido_Cantidad} unidades, con un costo total de: ${Costo_Compra}`);
    if(Costo_Compra < Cliente_SalsoActual)
        console.log("El cliente tiene saldo suficiente")


    //Actualizar el valor de los objetos

    console.log("%c4.- A ctualizacion de los valores de las propiedaddesde un objeto", style_console);

    console.log(`El objeto actualmente tiene los siguientes valores ${Producto2}`)
    console.log(`Por cuestiones de inflacion el costo del producto ha cambiado y debe ser actualizado... de $6,829.00 a $6,915.50`)
    //Para m,odificar el valor de un objeto basta con igualar el nuevvo valor de la propiedad deseada
    
    console.log(`Los nuevos valores son: `)
    console.log(Producto2);

    //¿pUEDE CAMBIAR NO SOLO EL VALOR, SI NO EL TIPO DE DATO DE UN oBJETO en JvaScript?
    console.log(`---------------------------------------------------------`)
    console.log(`eL OBJETO ACTUALMENTE TIENE LOS SIGUIENTES VALORES`)
    let tipoDisponibilidad = typeof(Producto.Disponibilidad)
    console.log(JSON.stringify(Producto2, null, 2)); //Disponibilidad Booleana
    Producto2.Disponibilidad="Si";
    let nuevoTipoDisponibilidad = typeof(Producto2.Disponibilidad)
    console.log(Producto2);
    console.log(`El nuevo tipo de dato de la disponibilidad es: ${nuevoTipoDisponibilidad}`)

    //Agregar nuevas propiedades al objeto

    console.log("%c5.- Agregar neuvas propiedades al objeto", style_console);
    //Para agregar una nueva propiedad utilizaremos el nombre del objeto los corchetes [] y para el nuevo de la propiedadcon su valor por defecto
    console.log("Los datos actuales del comprador son: ")
    console.table(Comprador)
    Comprador['Direccion'] = "Nicolas Bravo No. 108,  Xicotepec de Jueres, Puebla, Mexico"
    Comprador['Tipo'] = "Nuevo Cliente"
    Comprador['ActividadReciente']= true
    Comprador['TotalComprar'] = 3516.25
    console.log("Despues de haber agregado las propiedades Direccion, tipo, ActividadReciente, TotalComprar.....  ")
    console.table(Comprador)
    console.log("lA ESTRUCTURA Y VALOR DEL OBJETO pedido previos a la modficacion")
    console.table(Pedido)
    delete Pedido.TipoPago
    console.log("Despues de la modidificacion...")
    console.table(Pedido)





   

    
    