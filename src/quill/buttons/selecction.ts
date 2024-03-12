import quill from '..'

// Boton para obtener la posicion de la seleccion, util para dónde colocar la información sobre herramientas.
document.querySelector<HTMLButtonElement>('#getBoundsButton')!.addEventListener('click', () => {
  console.log(quill.getBounds(0,10))
})

// Boton para recuperar el rango de la selección actual
document.querySelector<HTMLButtonElement>('#getSelectionButton')!.addEventListener('click', () => {
  console.log(quill.getSelection())
})

// Boton para establecer la selección en el editor // selecciona el texto por el usuario usando el rango
document.querySelector<HTMLButtonElement>('#setSelectionButton')!.addEventListener('click', () => {
  console.log(quill.setSelection(5, 5))
})

// Boton para desplazar el scroll hasta donde se encuentra el texto seleccionado o el cursor
document.querySelector<HTMLButtonElement>('#scrollSelectionInToView')!.addEventListener('click', () => {
  console.log(quill.scrollSelectionIntoView())
})