/*
  Ejemplo 1
*/

// const toolbarOptions = ['bold', 'italic', 'underline', 'strike'];

/* 
  Ejemplo 2
*/

// const toolbarOptions = [['bold', 'italic', 'underline', 'strike'], ['link', 'image', 'video']];

/* 
  Ejemplo 3
*/

// const toolbarOptions = [
//   ['bold', 'italic', 'underline', 'strike'],
//   ['link', 'image', 'video'],
//   [{ header: 1 }, { header: 2 }, { header: 3 },{ header: 4 },{ header: 5 },{ header: 6 }]
// ];

/* 
  Ejemplo 4
*/

// const toolbarOptions = [
//   ['bold', 'italic', 'underline', 'strike'],
//   ['link', 'image', 'video'],
//   [{ header: 1 }, { header: 2 }, { header: 3 }, { header: 4 }, { header: 5 }, { header: 6 }],
//   [{ size: ['small', false, 'large', 'huge'] }],
// ];

/* 
  Ejemplo 5
*/

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // botones alternados
  ['blockquote', 'code-block'],
  ['link', 'image', 'video', 'formula'],

  [{ 'header': 1 }, { 'header': 2 }],               // valores de botones personalizados
  [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
  
  [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
  
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // dirección del texto

  [{ 'size': ['small', false, 'large', 'huge'] }],  // menú desplegable personalizado
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // menú desplegable con valores predeterminados del tema // se puede poner un array de hexadecimales
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean']                                         // boton para eliminar el formato
];


export default toolbarOptions