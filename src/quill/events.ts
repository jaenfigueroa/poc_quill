import quill from ".";

/* 
  text-change: Se dispara cuando el texto del editor cambia.
*/
// quill.on('text-change', (delta, oldDelta, source) => {
//   console.log('delta: ', delta)
//   console.log('olddelta: ',oldDelta)
//   console.log('source: ', source)

//   if (source == 'api') {
//     console.log('Una llamada API desencadenó este cambio.');
//   } else if (source == 'user') {
//     console.log('Una acción del usuario desencadenó este cambio.');
//   }
// });

/* 
  selection-change: Se dispara cuando la selección del editor cambia.
*/

// quill.on('selection-change', (range, oldRange, source) => {
//   console.log('range: ', range)
//   console.log('oldRange: ', oldRange)
//   console.log('source: ', source)

//   if (range) {
//     if (range.length == 0) {
//       console.log('El cursor del usuario está en ', range.index);
//     } else {
//       const text = quill.getText(range.index, range.length);
//       console.log('El usuario ha seleccionado:', text);
//     }
//   } else {
//     console.log('El cursor no esta en el editor');
//   }
// });

/* 
  editor-change: Se dispara cuando el editor cambia, ya sea el text-change o la selection-change
*/

// quill.on('editor-change', (eventName, ...args) => {
//   console.log('eventName: ', eventName)
//   console.log('args: ', args)

//   if (eventName === 'text-change') {
//     // args[0] will be delta
//   } else if (eventName === 'selection-change') {
//     // args[0] will be old range
//   }
// });

/* 
    HANDLERS
*/

/* 
  on: Se dispara cada vez que el evento ocurre.
*/

// quill.on('text-change', () => {
//   console.log('Texto cambiado!');
// });

/* 
  once: Se dispara una sola vez cuando el evento ocurre.
*/

// quill.once('text-change', () => {
//   console.log('Texto cambiado por primera vez!');
// });

/* 
  off: Elimina el controlador de eventos.
*/

// const saludar = () =>  {
//   console.log('Hola!');
// }

// quill.off('text-change', saludar);