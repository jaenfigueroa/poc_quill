import Quill from 'quill';
import optionsQuill from './optionsQuill';

const quill = new Quill('#editor', optionsQuill);

// Establecer el contenido inicial del editor
const Delta = Quill.import('delta');

quill.setContents(
  new Delta()
    .insert('Hola, ')
    .insert('Mundo', { bold: true })
    .insert('\n')
);