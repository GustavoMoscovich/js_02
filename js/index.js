let arrayProductos = []

import { productos } from "./productos.js";
import { interfaz } from "./interfaz_html.js";



// Eventos DOM
document
  .getElementById("form-producto")
  .addEventListener("submit", function (e) {
    // se cambia el comportamiento por defecto del formulario
    e.preventDefault();

    // Obtiene valores del formulario
    const nombre = document.getElementById("nombre").value,
      precio = document.getElementById("precio").value,
      anio = document.getElementById("anio").value;

    // se crea un nuevo objeto "producto"
    const product = new productos(nombre, precio, anio);

    // se crea una nueva instancia de interfaz con html
    const int_html = new interfaz();

    // se valida lo ingresado por el usuario
    if (nombre === "" || precio === "" || anio === "") {
      int_html.showMessage("Debe Ingresar un valor en todos los campos requeridos", "danger");
    } else {
        // Guarda el nuevo producto
        int_html.addProduct(product, arrayProductos);
        int_html.showMessage("El producto fue agregado...", "success");
        int_html.resetForm();

        muestraDetalles(arrayProductos);
        console.log(arrayProductos);
    }
  });

document.getElementById("lista-de-productos").addEventListener("click", (e) => {
  const int_html1 = new interfaz();
  int_html1.deleteProduct(e.target,arrayProductos);
  e.preventDefault();
  muestraDetalles(arrayProductos);
});

function muestraDetalles (arrProd) 
  {
  let suma=0;
  arrProd.forEach (function(aP){
      suma += Number(aP.precio);
  });
  document.getElementById('cantProductos').innerHTML = arrProd.length;
  document.getElementById('sumaProductos').innerHTML = suma;

  }