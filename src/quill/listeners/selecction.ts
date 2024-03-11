import quill from '..'

// Boton para obtener 
document.querySelector<HTMLButtonElement>('#getBoundsButton')!.addEventListener('click', () => {
  console.log(quill.getBounds(0,10))
})

document.querySelector<HTMLButtonElement>('#getSelectionButton')!.addEventListener('click', () => {
  console.log()
})

document.querySelector<HTMLButtonElement>('#setSelectionButton')!.addEventListener('click', () => {
  console.log()
})

document.querySelector<HTMLButtonElement>('#scrollSelectionInToView')!.addEventListener('click', () => {
  console.log()
})