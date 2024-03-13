
const options = {
  // debug: 'info', // activar/desactivar el modo de depuración, mensajes en consola
  // readonly: false, // activar/desactivar el modo de solo lectura
  placeholder: 'Escriba su texto aquí...', // en caso de que el editor esté vacío
  theme: 'snow',

  /* 
    MODULOS
  */

  modules: { 
    toolbar: {
      container: '#toolbar-container', // id del contenedor de la barra de herramientas
      handlers: {
        bold: () => console.log('se ha pulsado el botón de negrita'), // Controlador de negrita personalizado
        italic: () => console.log('se ha pulsado el botón de cursiva'), // Controlador de cursiva personalizado
        color: () => console.log('se cambio el color'), // la etiqueta es ql-color , "color" es el nombre del atributo a poner aqui
        // link: (value) => {
        //   console.log(value)
        //   if (value) {
        //     const href = prompt('Ingresa la URL');
        //     quill.format('link', href);
        //   } else {
        //     quill.format('link', false);
        //   }
        // }
      }
    },
    // Keyboard: {
    //   bindings: {}
    // }
    syntax: true, // permitir cambiar el lenguage cuando es un bloque de código
  },
}

export default options
