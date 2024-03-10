import quill from '.'

document.querySelector<HTMLButtonElement>('#formatButton')!.onclick = () => {
  quill.format('color', 'red')
  quill.format('align', 'right')
}
