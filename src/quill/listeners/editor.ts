import quill from "..";

// Boton para quitar focus del editor?? a mi me activa el foco -_-
document.querySelector<HTMLButtonElement>('#blurButton')!.addEventListener('click', () => {
  quill.focus()
})

// Boton para desactivar el editor
document.querySelector<HTMLButtonElement>('#disableButton')!.addEventListener('click', () => {
  quill.disable()
})

// Boton para activar el editor
document.querySelector<HTMLButtonElement>('#enableButton')!.addEventListener('click', () => {
  quill.enable()
  // quill.enable(false) // desactivar el editor
})

// Boton para darle el foco al editor
document.querySelector<HTMLButtonElement>('#focusButton')!.addEventListener('click', () => {
  quill.focus()
})

// Boton para comprobar si el editor tiene el foco
document.querySelector<HTMLButtonElement>('#hasFocusButton')!.addEventListener('click', () => {
  console.log(quill.hasFocus())
})

// Boton para buscar actualizaciones de otros usuarios , util para uso colaborativo
document.querySelector<HTMLButtonElement>('#updateButton')!.addEventListener('click', () => {
  quill.update()
})

// Boton para Desplazar scroll del editor a la posición de píxel dada
document.querySelector<HTMLButtonElement>('#scrollRectIntoViewButton')!.addEventListener('click', () => {

  quill.scrollRectIntoView({
    top: 20,
    right: 20,
    bottom: 20,
    left: 20,
  });

  // const bounds = quill.getBounds(20000, 10);
  // quill.scrollRectIntoView(bounds!);
})

