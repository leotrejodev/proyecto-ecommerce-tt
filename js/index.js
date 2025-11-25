import { productos } from "./productos.js";
import { agregarAlCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenedor-tarjetas");

  const carrito = obtenerCarrito();
  actualizarContador(carrito);

  productos.forEach((producto) => {
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("card");

    const img = document.createElement("img");
    img.src = producto.img;
    img.alt = producto.nombre;

    const titulo = document.createElement("h3");
    titulo.textContent = producto.nombre;

    const precio = document.createElement("p");
    precio.textContent = `$${producto.precio}`;

    const boton = document.createElement("button");
    boton.classList.add("btn");
    boton.textContent = "Agregar al Carrito";

    boton.addEventListener("click", () => {
      agregarAlCarrito(producto);
    });

    tarjeta.appendChild(img);
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(precio);
    tarjeta.appendChild(boton);

    contenedor.appendChild(tarjeta);
  });
});
