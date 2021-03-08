class Content {
  constructor() {
    this.divMain = document.querySelector(".caracters")
    this.caracter = []
  }
  start() {
    this.caracter.forEach(e => {
      const divCaracter = createElementIn(this.divMain, 'div', 'caracter')
      createCaracter(e, divCaracter)
    })
  }
  addCaracter(results) {
    this.caracter = [...this.caracter, ...results]
  }
}

function createCaracter(element, div) {
  div.innerHTML = `<h1>${element.name}</h1>
  <p>Peso: ${element.mass}</p>
  <p>Altura: ${element.height}</p>
  <div class="button-see-more">
    <a href="./caracter.html">Saiba mais...</a>
  </div>`
}

function createElementIn(element, div, className) {
  const createEl = document.createElement(div)
  element.prepend(createEl)
  if(className) {
    createEl.classList.add(className)
  }
  return createEl
}
