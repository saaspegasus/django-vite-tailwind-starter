function component() {
  const element = document.createElement('div');
  element.innerHTML = 'Hello Vite';
  return element;
}
document.body.appendChild(component());
