// Función para guardar un valor en localStorage
function guardarEnLocalStorage(clave, valor) {
  localStorage.setItem(clave, valor);
}

// Función para recuperar un valor de localStorage
function recuperarDeLocalStorage(clave) {
  return localStorage.getItem(clave);
}

// Ejemplo
guardarEnLocalStorage('nombre', 'Indira');
var nombreRecuperado = recuperarDeLocalStorage('nombre');
console.log(nombreRecuperado); 
