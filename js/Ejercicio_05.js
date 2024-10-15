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





    console.log("%c2.- Operador Ternario ( validacion?cumple:no_cumple) ", style_console);
    // En Java Script exista una operación simplicada que valida si una condición se cumple o no, y que hacer en cada caso
    
    const edadPersona = 18;
    const mayoriaEdadMX = 18;
    const mayoriaEdadUS = 21;
    
    let evaluarMayoriaEdad = (edad) =>
        edad>=18 ? "Eres mayor de edad.": "No eres mayor de edad."
    
    console.log("Evaluando la mayoría de edad de una persona...")
    console.log(evaluarMayoriaEdad(edadPersona));
    
    // Sin embargo tenemos que considerar que la mayoría de edad varia en cada país por cuestiones legales, por lo que debemos considerar un segundo parámmetro en la evalación.
    
    evaluarMayoriaEdad = (edad,pais) =>
        (edad>=18 && pais==="MX")?`En ${pais} eres mayor de edad `:`En ${pais} NO eres mayor de edad `;
    
    console.log("Evaluando la mayoría de edad de una persona en México...")
    console.log(evaluarMayoriaEdad(edadPersona, "MX"));
    
    console.log("Evaluando la mayoría de edad de una persona en Estados Unidos...")
    console.log(evaluarMayoriaEdad(edadPersona, "US"));
    
    
    console.log("%c3.- SwITCH - CASE ( Elección por valor definido) ", style_console);
    
    // Calculando tu generación en base a tu edad
    
    let asingaGeneracion = (anioNacimiento)=>{
        switch(true)
        {
            case(anioNacimiento<1968):   //Baby Boomers 
                return "Baby Boomers";
    
            case (anioNacimiento>1968 && anioNacimiento<=1980): 
                return "Generación X";
    
            case (anioNacimiento>1980 && anioNacimiento<=1994):
                return "Milenials";
            
            case (anioNacimiento>1994 && anioNacimiento<=2010):
                return "Centenials";
                
            case (anioNacimiento>2010):
                return "Krystal";
        }
    }
    
    console.log(`Dado que nació en el año 2005 soy de la generación: ${asingaGeneracion(2005)}`);

    console.log("%c4.- Manejo de Excepciones (TRY / CATCH)", style_console);

    try{//intenta
        let result = 0/10;
        console.log(`Intentamos dividir 0/10, el resultado es: ${result}`);
        }catch(error){
            console.log("Ocurrió un error: "+error.message);
        }
    try{//intenta
        let result = 10/0;
         console.log(`Intentamos dividir 10/0, el resultado es: ${result}`);
        }catch(error){
        console.log("Ocurrió un error: "+error.message);
        }
        try{//intenta
        let a="hola";
        let result = a/10;
         console.log(`Intentamos dividir a/10, el resultado es: ${result}`);
        }catch(error){
        console.log("Ocurrió un error: "+error.message);
         }
        try{//intenta
        let result = a/10;
         console.log(result);
        }catch(error){
        console.log("Ocurrió un error: "+error.message);
        }
         try{//intenta
        let x=8, y=2, result=x/y; //Dividir una variable no definoda entre 0
        console.log(result);
        }catch(error){
        console.log("Ocurrió un error: "+error.message);
       }
       
       console.log("%c5.- Control de Ciclos (BREAK / CONTINUA)", style_console);

       // En algunas ocaciones será importante detener un ciclo de manera abrupta para controlar casos especiales en un ciclo...

       console.log("Vamos a contar del 1 al 10....")
       for(let num=1; num<=10; num++)
          console.log(num);

       console.log("Ahora necesitamos que si llegas al 7 pares de contar... suponiendo que solo por hoy es de mala suerte...")
       for( num=1;num<=10;num++)
        if(num==7)
            break;
        else
        console.log(num);

        
       console.log("Ahora necesitamos que si llegas al 7 te saltes ese número y continues")
       for( num=1;num<=10;num++){
        if(num==7)
            continue;
        console.log(num);
        }


