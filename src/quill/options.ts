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
      }
    },
    syntax: true, // ???
  },
}

export default options
