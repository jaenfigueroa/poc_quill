import quill from "."

// Agrear eventos de teclado
quill.keyboard.addBinding({ key: ['j', 'J'] }, () => {
  console.log('se presionó la tecla "j"')
  return true // para permitir enlazar varios controladores de eventos, deja ejecutar la linea 17
})

quill.keyboard.addBinding({ key: ['j', 'J'], shiftKey: true }, () => {
  console.log('se presionó la tecla "j" con "shift"')
})

quill.keyboard.addBinding({ key: ['j', 'J'], ctrlKey: true }, () => {
  console.log('se presionó la tecla "j" con "control"')
})

quill.keyboard.addBinding({ key: ['j', 'J'], }, {
  format: ['blockquote', 'list'],
}, () => {
  console.log('se presionó la tecla "j" dentro de una lista o bloque de cita')
});