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