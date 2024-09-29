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
        ID: 3216,
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
        ID: 5816,
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
    console.log( "%c5.- Agregar nuevas propiedades al Objeto", style_console );
    // Para agregar una nueva propiedad utilizamos el nombre del objeto, los corchetes [] y el nuevo de la propiedad con su valor por defecto.
    console.log("Los datos actuales del Comprador son: ")
    console.table(Comprador)
    Comprador[`Direccion`] = "Av. Benito Juarez No. 1525, Interior 4D, Xicotepec de Juárez, Puebla, México"
    Comprador[`Tipo`] = "Nuevo Cliente"
    Comprador[`ActividadReciente`] = true
    Comprador[`TotalCompras`] = 3516.25
    console.log("Despues de haber agregado las propiedades Dirección, Tipo, ActividadReciente y TotalCompras....")
    console.table(Comprador)

    // Eliminar propiedades existentes de un Objeto
    console.log( "%c6.- Eliminar propiedades existentes de un Objeto", style_console );
    console.log("La estructura y valores del objeto PEDIDO son previos a la modificación: ")
    console.table(Pedido)
    delete Pedido.TipoPago
    console.log("Después de la modifcación...")
    console.table(Pedido)

    //7.-
    console.log("%c7.- Metodos para controlar la mutabilidad de los Objetos, Congelacion (FREEZE)", style_console);
    //Si deseamos no permitir que los objetos sean modificados ni en estructura, mni en valor, utilizamos  el metodo FREEZE (Congeral)
    console.log(`La estructura actual del objeto Comprador es: `)
    console.table(Comprador)
    Object.freeze(Comprador)
    //intentaremos agregar, eliminar o modificar los valores de las propiedades
    Comprador.FechaUltimaCompra = "05/09/2024 10:15:25"
    delete Comprador.Tipo;
    Comprador.Direccion= "Calle 15 de seprienbre #102, Col Manantiales";
    console.log(`verificamos si se realizaron los cambios en el objeto Comprador`)
    console.table(Comprador)

    console.log("%c8.- Metodos para controlar la mutabilidad de los Objetos, Sellado (SEAL)", style_console);
    //Sin embargo, el el caso que deseemos poder modificar los valores de las propiedades del objeto,pero no su estructura, usaremosd SEAL
    console.log("Objeto antes de ser modificado")
    console.table(Pedido)
    //Selladmos el objeto
    Object.seal(Pedido)
    //Intentamos modificar su estructura
    Pedido[`FechaPedido`]="25/09/2024 11:05:03"
    delete Pedido[`Cantidad`]
    console.log(`Verificamos si se realizaron los cambios en el Objeto PEDIDO`)
    console.table(Pedido)
    //Ahora intentamos modificar el valor de las propiedades 
    Pedido.Cantidad=5
    console.log(`Verificamos si se realizaron los cambios en el objeto PEDIDO: `)
    console.table(Pedido)
   
    //Desestructuracion de 2 o mas objetos
    console.log("%c9.- Desestructuracion de 2 o mas objetos", style_console);

    let {Precio: productoPrecio, Marca: productoMarca} = Producto
    let {Correo: clienteCorreo, PaisOrigen: clientePais, SaldoActual: clienteSaldo, Tipo:clienteTipo} = Comprador

    //Tranformar valores cualitativos en cuantitativos
    if(productoPrecio=2000)
        productoPrecio = "Caro"
    else
        productoPrecio = "Barato"

    if(clienteSaldo > 0)
        clienteSaldo ="A favor"
    else if(clienteSaldo <0)
        clienteSaldo="En contra"
    else
        clienteSaldo ="Sin deuda"



    let clienteNivel;
    if(clienteTipo=="Premium")
        clienteNivel = 1
    if(clienteTipo == "Freemium")
        clienteNivel == 2
    if(clienteNivel == "No identificado")
        clienteTipo = 3
    

    //Clasificamos al cliente por su pais de origen
    if(clientePais == "Mexico")
        clientePais= "Nacional"
    else
        clientePais="Extranjero"

    
    //OLE - Objet Literal Enhancement

    let datosClientePromociones = {clienteCorreo, clientePais, clienteNivel, clienteSaldo, productoMarca, productoPrecio}

    //El nuevo objeto que creamos seria uun ejemplo de la informacion que enviamos al area de marketing para la difucion de promociones 
    console.log("Los datos del cliente y sus habitos de compra son: ")
    console.table(datosClientePromociones)

     console.log("%c10 .- Union de objetos usando el metodo de asignacion (ASSING)", style_console);

     console.log("Imprimimos la estructura y valores del objeto PEDIDO")
     console.table(Pedido);
     //Suponiendo que el usuario ya reliazo el pago, el pedido se convierta en una VENTA que requiere iformacion de ambos objetos
     const Venta = Object.assign(Producto, Pedido);
     console.log("Consultamos este nuevo objeto VENTA")
     console.table(Venta);

     //Union de Objetos usando SPREAD para evitar la perdidad de informacion con objetos que comparten el mismo nombre en sus propiedades 


    console.log("%c11.Union de Objetos usando el SPREAD OPERATOR(...)",style_console);

    //pARCHAMOS EL ERROR ,REINOICANDO EL VALOR DEL PRODUCTO ID al original producto.ID=100;

    console.table(Producto)
    console.table(Comprador)
    console.table(Pedido)

    const Venta2 =
    {
    producto: {...Producto},
    comprador: {...Comprador},
    pedido: {...Pedido}
    }
    console.log("Funcionamos los 3 objetos en uno nuevo,sin perdida de informacion")
    console.log(Venta2)
    console.table(Venta2)

    console.log("%c12.Mutabilidad POST Union de Objetos ",style_console);
    //vamos a verificar el estatus de mutabilidad de los objetos 
    console.log("Vamos a verificar el estatus de muytabilidad del objeto PEDIDO")
    console.log(`Esta el objeto de Pedido congelado ? :${Object.isFrozen(Pedido)}`)
    console.log(`Esta el objeto de Pedido sellado ? :${Object.isSealed(Pedido)}`)

    
    console.log("Vamos a verificar el estatus de muytabilidad del objeto COMPRADOR")
    console.log(`Esta el objeto de Pedido congelado ? :${Object.isFrozen(Comprador)}`)
    console.log(`Esta el objeto de Pedido sellado ? :${Object.isSealed(Comprador)}`)

    console.log("Vamos a verificar el estatus de muytabilidad del objeto PRODUCTO")
    console.log(`Esta el objeto de Pedido congelado ? :${Object.isFrozen(Producto)}`)
    console.log(`Esta el objeto de Pedido sellado ? :${Object.isSealed(Producto)}`)

    //Modificamos la estrtuctura de productos,agregando una nueva propiedad
    Producto[`isLegacy` ]=false;
    console.log(Producto)
    console.log(Venta2)