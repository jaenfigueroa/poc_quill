import Quill from 'quill'
import optionsQuill from './optionsQuill'

const quill = new Quill('#editor', optionsQuill)

// Establecer el contenido inicial del editor usando un Delta
const Delta = Quill.import('delta')

quill.setContents(
  new Delta()
    .insert('Hola ')
    .insert('Mundo, ', { bold: true })
    .insert('Mi nombre es ', { italic: true })
    .insert('Jaen', { color: '#00f', bold: true, italic: true })
    .insert('\n')
)

// Boton para eliminar texto
document.querySelector<HTMLButtonElement>('#deleteTextButton')!.addEventListener('click', () => {
  console.log(quill.deleteText(5, 7)) // devuelve un Delta
})

// Boton para obtener el texto
document.querySelector<HTMLButtonElement>('#getContentsButton')!.addEventListener('click', () => {
  console.log(quill.getContents()) // devuelve un Delta
})

// Boton para obtener la longitud del texto
document.querySelector<HTMLButtonElement>('#getLengthButton')!.addEventListener('click', () => {
  console.log(quill.getLength()) // devuelve un número
})

// Boton para obtener el texto
document.querySelector<HTMLButtonElement>('#getTextButton')!.addEventListener('click', () => {
  console.log(quill.getText()) // devuelve un string
})

// Boton para obtener un trozo/todo el html semantico
document.querySelector<HTMLButtonElement>('#getSemanticHTMLButton')!.addEventListener('click', () => {
  console.log(quill.getSemanticHTML(0, 10)) 
})


// Boton para insertar un embebido
document.querySelector<HTMLButtonElement>('#insertEmbedButton')!.addEventListener('click', () => {
  console.log(quill.insertEmbed(5, 'image', 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'))
})