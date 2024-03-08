import Quill from 'quill';
import optionsQuill from './optionsQuill';

const quill = new Quill('#editor', optionsQuill);

// Establecer el contenido inicial del editor
const Delta = Quill.import('delta');

quill.setContents(
  new Delta()
    .insert('Hola ')
    .insert('Mundo, ', { bold: true })
    .insert('Mi nombre es ', { italic: true })
    .insert('Jaen', { color: '#00f', bold: true, italic: true })
    .insert('\n')
)