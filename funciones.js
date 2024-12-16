const menus = [{nombre:"Inicio", url:"index.html"},
    {nombre:"¿Quienes somos?", url:""},
    {nombre:"Contacto", url:"contacto.html"},
    ]
    
    function cargarmenu(){
        let enlaces = document.getElementById("ulmenu")
        for (const menu of menus) {
            let lista = document.createElement("li")
            lista.innerHTML=`<a href="${menu.url}">${menu.nombre}</a>`
            enlaces.appendChild(lista);
            
        }
    }
    
    cargarmenu();
    
    const productos = [{nombre:"Napolitana", precio:"1000", img:"imagenes/napolitana.webp", id: "1"},
        {nombre:"Margarita", precio:"2000", img:"imagenes/margarita.png", id:"2"},
        {nombre:"Hawai", precio:"3000", img:"imagenes/hawai.png", id:"3"},
        {nombre:"Pepperoni", precio:"4000", img:"imagenes/pepperoni.png", id:"4"},
        {nombre:"Prosciutto", precio:"5000", img:"imagenes/prosciutto.png", id:"5"},
        {nombre:"muzzarella", precio:"6000", img:"imagenes/muzzarella.png", id:"6"},
        {nombre:"diavolo", precio:"7000", img:"imagenes/diavolo.png", id:"7"},
        {nombre:"Barbacoa", precio:"8000", img:"imagenes/barbacoa.webp", id:"8"}

    ]
    
    function cargarproductos() {
        let ventas = document.getElementById("boxproducto");
        for (const producto of productos) {
            let contenedor = document.createElement("div");
            contenedor.innerHTML = `<div class="boxproducto">
                <h3>${producto.nombre}</h3>
                <img src="${producto.img}" alt="" width="100"> 
                <p>$${producto.precio}</p>
                <button onclick="verdetalle('${producto.id}')">detalle</button>
                </div>`;
            ventas.appendChild(contenedor);
        }
    }
    
    cargarproductos();
    
    function verdetalle(idproducto){
        const buscarproducto=productos.find(producto => producto.id === (idproducto));
        const enJSON =JSON.stringify(buscarproducto);
        localStorage.setItem("detalleproducto", enJSON)
        window,location.href= "detalle.html";
    
    }

    function actualizarCarrito() {
        // Recuperar la cantidad desde localStorage
        let cantidadTotal = parseInt(localStorage.getItem("cantidadCarrito"), 10) || 0;
    
        // Actualizar el contador en el ícono del carrito
        const cantidadCarritoElement = document.getElementById("cantidad-carrito");
        if (cantidadCarritoElement) {
            cantidadCarritoElement.textContent = cantidadTotal;
        }
    }
    
    window.addEventListener('DOMContentLoaded', function() {
        actualizarCarrito();
    });
    