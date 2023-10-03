const carritoShop= []
const carritoStorage= localStorage.getItem("carritoShop")

if(carritoStorage){
    carritoShop= JSON.parse(carritoStorage)
}else{
    let div= document.createElement("div");
    div.innerHTML= "No hay productos en el carrito de compras";
    document.body.append(div);
}

carritoShop.forEach((producto) => {
    let div= document.createElement("div")
    div.innerHTML=`
    <h2 id=${producto.id}>producto: ${producto.nombre}</h2>
    <p>$${producto.precio}`
})
