import quill from '..'

/* 
  ESTILOS/FORMATOS APLICABLES
  https://quilljs.com/docs/formats
*/

// Boton para cambiar el formato del texto/lineas seleccionado // SOLO SE PUEDE APLICAR FORMATOS -> INLINE
document.querySelector<HTMLButtonElement>('#formatButton')!.onclick = () => {
  quill.format('color', 'red')
  quill.format('background', 'yellow')
  quill.format('size', 'huge') // small, large, huge, default: normal
}

// Boton para cambiar el formato de las lineas de un rango dado // SOLO SE PUEDE APLICAR FORMATOS -> BLOCK
document.querySelector<HTMLButtonElement>('#formatLIneButton')!.onclick = () => {
  quill.formatLine(0, 100, {
    'align': 'right',
    'list': 'ordered'
  })
}

// Boton para cambiar el formatear el texto en un rango dado
document.querySelector<HTMLButtonElement>('#formatTextButton')!.onclick = () => {
  quill.formatText({ index: 0, length: 10 }, 'bold', true); // <-- // confictivo - revisar luego
}

// Boton para obtener los formatos en comun del (texto en un rango)/seleccionado o del cursor actual
document.querySelector<HTMLButtonElement>('#getFormatButton')!.onclick = () => {
  console.log(quill.getFormat()) // <-- del cursor actual/texto seleccionado
  // console.log(quill.getFormat(0, 10)) <-- en un rango dado
}

// Boton para remover el formato de un rango dado 
document.querySelector<HTMLButtonElement>('#removeFormatButton')!.onclick = () => {
  console.log(quill.removeFormat({
    index: 0,
    length: 10
  }, {
    bold: true, // indica que solo se removera el formato bold e italic
    italic: true
  }))
} 
