
// Interface que maneja la interacción con la página HTML

export class interfaz {

  
     // Agregar un nuevo producto 
     // @param {Object} productos (Objeto de para nuevos productos)
     // @param {Object} arrP le paso como referencia el array que uso para mostrar valores sobre los productos.
     // cuando se genera un nuevo producto lo identifico con un ID aleatorio que queda registrado en el HTML y en el 
     // array.. de esta forma luego puedo identificar cual el el que están eliminando en la WEB para eliminar el mismo
     // elemento del array de productos

     addProduct(producto, arrP) {
      const productList = document.getElementById("lista-de-productos");
      const element = document.createElement("div");
      producto.id = randomInt(1,1000);
      arrP.push(producto);
      element.innerHTML = `
              <div class="card text-center mb-4">
                  <div class="productos_agr card-body">
                      Producto: ${producto.nombre}   -
                      Precio: ${producto.precio}   - 
                      Año: ${producto.anio}
                      <a href="#" id="${producto.id}" class="btn btn-danger" name="borrar">Borrar</a>
                  </div>
              </div>
          `;
      productList.appendChild(element);
    }
  
    // Resetea variables del Form
    resetForm() {
      document.getElementById("form-producto").reset();
    }
  
    // al eliminar un producto en el html de la web
    // uso el id que se genera en la función de alta de nuevos productos para encontrar en el array
    // cual es el elemento homónimo que debo borrar..
    // hago uso de splice y findIndex

    deleteProduct(element,arP) {
      if (element.name === "borrar") {
        //debugger;
        arP.splice(arP.findIndex(x => x.id == element.id),1);
        element.parentElement.parentElement.remove();
        this.showMessage("El producto fue borrado", "success");
      }
    }
  
    showMessage(message, cssClass) {
      const div = document.createElement("div");
      div.className = `alert alert-${cssClass} mt-2`;
      div.appendChild(document.createTextNode(message));
  
      // Mostrar en DOM
      const container = document.querySelector(".container");
      const app = document.querySelector("#App");
  
      // Insertar Mensaje
      container.insertBefore(div, app);
  
      // Borrar el mensaje luego de 2 segs
      setTimeout(function () {
        document.querySelector(".alert").remove();
      }, 2000);
    }
  }
  
  // Genera nros random enteros entre un mínimo y un máximo

  function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

