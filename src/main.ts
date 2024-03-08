import Quill from 'quill'

const quill = new Quill('#editor', {
  modules: {
    syntax: true, // ???
    toolbar: '#toolbar-container', // id del contenedor de la barra de herramientas
  },
  placeholder: 'Aqui escribe tu texto...',
  theme: 'snow',
})

// Boton para eliminar texto
document.querySelector<HTMLButtonElement>('#deleteTextButton')!.addEventListener('click', () => {
  console.log(quill.deleteText(5, 7)) // devuelve un Delta
})

// Boton para obtener el texto
document.querySelector<HTMLButtonElement>('#getContentsButton')!.addEventListener('click', () => {
  console.log(quill.getContents()) // devuelve un Delta
})

