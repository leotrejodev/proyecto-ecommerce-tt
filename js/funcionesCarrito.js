import {
  guardarCarrito,
  obtenerCarrito,
  vaciarCarritoStorage,
} from "./storage.js"; // poner .JS del archivo para que lo tome
import { actualizarContador, mostrarMensaje } from "./ui.js";

export const agregarAlCarrito = (producto) => {
  //producto seria un objeto de array donde estan los datos
  const carrito = obtenerCarrito(); // me traje lo del storage o un array vacio
  carrito.push(producto);

  guardarCarrito(carrito);
  actualizarContador(carrito);
  mostrarMensaje("Producto agregado en CARRITO");
};

export const eliminarProducto = (indice) => {
  const carrito = obtenerCarrito();
  carrito.splice(indice, 1); // con SPLICE se toma ese indice y se borra ese unico para eliminar
  guardarCarrito(carrito); // aca se guarda en localStorage
  actualizarContador(carrito);
  mostrarMensaje("Producto borrado");
};

export const vaciarCarrito = () => {
  vaciarCarritoStorage();
  actualizarContador([]);
  mostrarMensaje("Vaciado el Carrito");
};
