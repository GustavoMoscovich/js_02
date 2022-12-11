// Clase Productos

export class productos {
// @param {string} nombre Nombre del producto
// @param {number} precio Precio del producto
// @param {number} anio Año de creación del producto
    constructor(nombre, precio, anio, id) {
      this.nombre = nombre;
      this.precio = precio;
      this.anio = anio;
      this.id = id;
    }
  }