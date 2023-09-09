class Producto{
    constructor(nombre,precio,categoria){
        this.nombre= nombre;
        this.precio= precio;
        this.categoria= categoria;
        this.vendido= false;
    }

    vender(){
        this.vendido= true
    }
}

const productos= []
productos.push(new Producto("auriculares jbl wave",32000,"auriculares"));
productos.push(new Producto("auriculares jbl tune 500",20550,"auriculares"));
productos.push(new Producto("auriculares jbl quantum 350",94500,"auriculares"));
productos.push(new Producto("stereo Panacom CA",10000,"stereo"));
productos.push(new Producto("stereo Pionner In Dash Avh-5350",210000,"stereo"));
productos.push(new Producto("Stereo Sony Bluethoot",69000,"stereo"))
productos.push(new Producto("Parlante Stromberg Portatil Bump",92650,"parlante"));
productos.push(new Producto("Parlante JBL Party Box 310 Hero",623000,"parlante"));
productos.push(new Producto("Parlante JBL GO 3",27870,"parlante"));
productos.push(new Producto("Controlador Pionner WE GO 4",358804,"controlador"));
productos.push(new Producto("Controlador DJ Hercules Inpulse 3",252147,"controlador"));
productos.push(new Producto("Controlador DDJ-200",113421,"controlador"));


let nombreProducto= prompt("Hola!! gracias por visitarnos, elija su producto.");
const articulo= productos.filter((item)=> item.categoria === nombreProducto || item.nombre === nombreProducto)


if (articulo.length > 0) {
    let mensaje = "Productos encontrados:\n";

    articulo.forEach((producto) => {
        mensaje += `Nombre: ${producto.nombre}\n`;
        mensaje += `Costo por unidad: ${producto.precio}\n\n`;
    });

    alert(mensaje);
} else {
    alert("Este producto no se encuentra :(");
}

let botonAgregar= document.getElementById("boton agregar")
botonAgregar.addEventListener("click",()=>{
    console.log("click save");
})

let botonEliminar= document.getElementById("boton eliminar")
botonEliminar.addEventListener("click",()=>{
    console.log("click remove");
})