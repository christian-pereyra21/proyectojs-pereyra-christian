const carritoShop= []
const carritoStorage= localStorage.getItem("carritoShop")

if(botonAgregar){
    carritoShop.forEach((Productos) => {
        let div= document.createElement("div")
        div.innerHTML=`
        <h2 id=${Productos.id}>producto: ${Productos.nombre}</h2>
        <p>$${Productos.precio}`
        document.body.append(div)
    })
}else{
    let div= document.createElement("div");
    div.innerHTML= "No hay productos en el carrito de compras";
    document.body.append(div);
}


