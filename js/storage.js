const KEY = "carrito";

export const guardarCarrito = (carrito) => {
  localStorage.setItem(KEY, JSON.stringify(carrito)); // guarda en JSON y para eso pasa el Array como cadena de texto
};

export const obtenerCarrito = () => {
  return JSON.parse(localStorage.getItem(KEY)) || []; //el texto plano lo convierte en Array o crea un array vacio si no hay informacion
};

export const vaciarCarritoStorage = () => {
    localStorage.removeItem(KEY)
}