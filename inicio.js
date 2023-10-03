class Producto{
    constructor(id,nombre,precio,categoria){
        this.id= id;
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
productos.push(new Producto(1,"auriculares jbl wave",32000,"auriculares"));
productos.push(new Producto(2,"auriculares jbl tune 500",20550,"auriculares"));
productos.push(new Producto(3,"auriculares jbl quantum 350",94500,"auriculares"));
productos.push(new Producto(4,"stereo Panacom CA",10000,"stereo"));
productos.push(new Producto(5,"stereo Pionner In Dash Avh-5350",210000,"stereo"));
productos.push(new Producto(6,"Stereo Sony Bluethoot",69000,"stereo"))
productos.push(new Producto(7,"Parlante Stromberg Portatil Bump",92650,"parlante"));
productos.push(new Producto(8,"Parlante JBL Party Box 310 Hero",623000,"parlante"));
productos.push(new Producto(9,"Parlante JBL GO 3",27870,"parlante"));
productos.push(new Producto(10,"Controlador Pionner WE GO 4",358804,"controlador"));
productos.push(new Producto(11,"Controlador DJ Hercules Inpulse 3",252147,"controlador"));
productos.push(new Producto(12,"Controlador DDJ-200",113421,"controlador"));



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
botonAgregar.addEventListener("click",(e)=>{
    console.log("click save")
});


const botonEliminar= document.getElementById("boton eliminar")
botonEliminar.addEventListener("click",(e)=>{
    console.log("click remove")
});

function agregarCarrito(id){
    if(botonAgregar){
        carritoShop.push(Producto.item)
    }else{NaN}
}
