const searchInput = document.querySelector("div > input[type=search]")
const app = new Content()

fetch('https://swapi.dev/api/people/', { method: "GET", mode: "cors" })
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    app.addCaracter(data.results)
    app.start()
  })

searchInput.addEventListener('change', () => {
  app.divMain.innerHTML = ''
  app.caracter = []
  fetch(`https://swapi.dev/api/people/?search=${searchInput.value}`, { method: "GET", mode: "cors" })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      app.addCaracter(data.results)
      app.start()
    })
})

document.querySelector('.caracters').addEventListener('click', (e) => {
  const el = e.target
  if(el.getAttribute('href') == './caracter.html'){
    const parentElement = el.parentNode.parentNode
    const name = parentElement.getElementsByTagName('h1')[0].outerText
    sessionStorage.setItem('name', name)
  }
})
