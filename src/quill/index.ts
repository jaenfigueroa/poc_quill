import Quill from 'quill'
import options from './options'

const quill = new Quill('#editor', options)

export default quill






// Establecer el contenido inicial del editor usando un Delta
const Delta = Quill.import('delta')

quill.setContents(
  new Delta()
    .insert('Hola ')
    .insert('Mundo, ', { bold: true })
    .insert('Mi nombre es ', { italic: true })
    .insert('Jaen', { color: '#00f', bold: true, italic: true })
    .insert('\n'),
)


