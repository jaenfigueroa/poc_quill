import Quill from 'quill'

new Quill('#editor', {
  modules: {
    syntax: true, // ???
    toolbar: '#toolbar-container', // id del contenedor de la barra de herramientas
  },
  placeholder: 'Aqui escribe tu texto...',
  theme: 'snow',
})
