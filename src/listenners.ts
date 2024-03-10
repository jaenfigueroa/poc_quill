import { Delta } from "quill/core"
import quill from "./main"

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

// Boton para obtener un trozo/t0do el html semantico
document.querySelector<HTMLButtonElement>('#getSemanticHTMLButton')!.addEventListener('click', () => {
  console.log(quill.getSemanticHTML(0, 10)) 
})


// Boton para insertar un embebido
document.querySelector<HTMLButtonElement>('#insertEmbedButton')!.addEventListener('click', () => {
  console.log(quill.insertEmbed(5, 'image', 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'))
})

// Boton para insertar texto con/sin formato
document.querySelector<HTMLButtonElement>('#insertTextButton')!.addEventListener('click', () => {
  console.log(quill.insertText(0, 'Texto agregado', {
    bold: true,
    color: '#f00'
  }, 'api')) // por alguna razon tenemos que indicar que el source es 'api', cuando es su valor por defecto
})

// Boton para sobrescribir todo el contenido del editor por un delta
document.querySelector<HTMLButtonElement>('#setContentsButton')!.addEventListener('click', () => {
  console.log(quill.setContents([
    { insert: 'Jaen ' },
    { insert: 'Figueroa ', attributes: { bold: true, color: '#f0f' } },
    { insert: 'Llampi' },
    { insert: '\n' },
  ]))
})

// Boton para reemplazar contenido del editor con un texto plano
document.querySelector<HTMLButtonElement>('#setTextButton')!.addEventListener('click', () => {
  console.log(quill.setText('Texto agregado'))
})

// Boton para actualizar el contenido del editor usando un delta
document.querySelector<HTMLButtonElement>('#updateContentsButton')!.addEventListener('click', () => {
  console.log(quill.updateContents(new Delta()
    .retain(5)                                    // saltar 5 caracteres (desde el inicio del texto)
    .delete(5)                                    // eliminar los siguientes 5 caracteres
    .insert('Jaen',{bold: true, color: "#0ff"})   // insertar 'Jaen' en esa posición, con ciertos estilos
    .retain(1, { bold: true, color: "#f0f" })     // aplicar negrita al siguiente caracter 
  ))
})
