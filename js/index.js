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
    } else if (buscaProduct(nombre, arrayProductos)) {
              int_html.showMessage("El producto de nombre "+nombre+"  ya fue ingresado  ", "danger");       
           }  else {
                // Guarda el nuevo producto
                int_html.addProduct(product, arrayProductos);
                int_html.showMessage("El producto fue agregado...", "success");
                int_html.resetForm();
                muestraDetalles(arrayProductos);
              }
});


// el usuario ha realizado un click para que se borre un elemento en la lista de productos
document.getElementById("lista-de-productos").addEventListener("click", (e) => {
  const int_html1 = new interfaz();
  arrayProductos = int_html1.deleteProduct(e.target,arrayProductos);
  e.preventDefault();
  muestraDetalles(arrayProductos);
});


// el usuario dispara la búsqueda de un artículo por su nombre
document.getElementById("busca-producto").addEventListener("submit", (e) => {

  buscaProduct(document.getElementById('nombre-buscado').value, arrayProductos);
  
});

// muestra la cantidad de artículos ingresados y la suma de los importes
function muestraDetalles (arrProd) 
  {
  let suma=0;
  arrProd.forEach (function(aP){
      suma += Number(aP.precio);
  });
  document.getElementById('cantProductos').innerHTML = arrProd.length;
  document.getElementById('sumaProductos').innerHTML = suma;

}

// busca el producto por el nombre y muestra los datos del mismo
// se aplica uso de find en array
function buscaProduct(nom,arP) {
  //debugger;
  let busqueda = arP.find(x => x.nombre == nom);
  if (busqueda != undefined){
    return true;
  } else {
          return false;
    }
}
