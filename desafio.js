class producto{
    constructor(nombre,precio){
        this.nombre= nombre;
        this.precio= precio;
        this.vendido= false;
    }

    vender(){
        this.vendido= true
    }
}

const productos= []
productos.push(new producto("auriculares jbl wave",123))
productos.push(new producto("auriculares jbl tune500",123))
productos.push(new producto("auriculares jbl quantum 350",))
productos.push(new producto("stereo Panacom CA",))
productos.push(new producto("stereo Pionner In Dash Avh-5350",))
productos.push(new producto("Stereo Sony Bluethoot",))
productos.push(new producto("Parlante Stromberg Portatil Bump",))
productos.push(new producto("Parlante JBL Party Box 310 Hero",))
productos.push(new producto("Parlante JBL GO 3",))
productos.push(new producto("Controlador Pionner WE GO 4",))
productos.push(new producto("Controlador DJ Hercules Inpulse 3",))
productos.push(new producto("Controlador DDJ-200",))

let nombreProducto= prompt("Hola!! gracias por visitarnos, elija su producto.")

for(let index =0; index< productos.length; index++){
    if(productos[index].nombre === nombre){
        alert(`tipo de producto: ${producto.nombre} precio$: ${producto.precio}`);
    }else{
        alert("No se encontro el producto :(")
    }
}
