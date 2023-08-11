class productos{
    constructor(nombre,precio){
        this.id;
        this.nombre;
        this.precio;
    }
}

let producto1= new productos("Auriculares jbl wave",123)
let producto2= new productos("Auriculares JBL TUNE500",123)
let producto3= new productos("Auriculares JBL Quantum 350",)
let producto4= new productos("Stereo Panacom CA",)
let producto5= new productos("Stereo Pionner In Dash Avh-5350",)
let producto6= new productos("Stereo Sony Bluethoot",)
let producto7= new productos("Parlante Stromberg Portatil Bump",)
let producto8= new productos("Parlante JBL Party Box 310 Hero",)
let producto9= new productos("Parlante JBL GO 3",)
let producto10= new productos("Controlador Pionner WE GO 4",)
let producto11= new productos("Controlador DJ Hercules Inpulse 3",)
let producto12= new productos("Controlador DDJ-200",)
let carrito= []

let seleccion= prompt("Buen dia ¿Desea comprar algun producto?. Seleccione SI o NO.")

while(seleccion != "si" && seleccion != "no"){
    alert("Elija una opcion")
let seleccion= prompt("Buen dia ¿Desea comprar algun producto?. Seleccione SI o NO.")
}

if(seleccion == "si"){
    let todosLosProductos= productos.map(
        (productos) => productos.nombre+ " " +productos.precio+ "$");
    alert(todosLosProductos.join("--"))
} else if(seleccion == "no"){
    alert("Gracias por visitarnos!!")
}

while(seleccion != "no"){
    let producto= prompt("Agrega un producto a tu carrito de compras")
    let precio= 0 

    if(producto == "auriculares"){
        switch(productos){
            case "jbl wave":
                precio= 123
                break;
            case "jbl tune 500":
                precio= 123
                break;
            case "jbl quantum 350":
                precio=123
                break;
            
        }
    }

    else(producto == "stereo"){
        switch(productos){
            case "pionner":
                precio= 123
                break;
            case "panacom":
                precio= 123
                break;
            case "sony":
                precio= 123
                break;
        }
    }

    else(producto == "parlantes"){
        switch(productos){
            case "stromberg":
                precio= 123
                break;
            case "jbl party box":
                precio= 123
                break;
            case "jbl go 3":
                precio= 123
                break;
        }
    }
}