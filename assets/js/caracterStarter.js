const topText = document.querySelector("div > h1")
topText.innerHTML = sessionStorage.getItem('name')

class CaracterPage {
  constructor({ name, height, mass, hair_color, skin_color, eye_color, gender }) {
    this.name = name
    this.height = height
    this.mass = mass
    this.hair_color = hair_color
    this.skin_color = skin_color
    this.eye_color = eye_color
    this.gender = gender
    this.document = {
      height: document.querySelector("td.height"),
      mass: document.querySelector("td.mass"),
      hair_color: document.querySelector("td.hair_color"),
      skin_color: document.querySelector("td.skin_color"),
      eye_color: document.querySelector("td.eye_color"),
      gender: document.querySelector("td.gender")
    }
  }
  start() {
    this.document.height.innerHTML = this.height
    this.document.mass.innerHTML = this.mass
    this.document.hair_color.innerHTML = this.hair_color
    this.document.skin_color.innerHTML = this.skin_color
    this.document.eye_color.innerHTML = this.eye_color
    this.document.gender.innerHTML = this.gender
  }
}

function addPictures(pics) {
  const divGalery = document.querySelector('.galery')

  divGalery.innerHTML = `
  <div class="column">
    <img src="${pics[1]}">
    <img src="${pics[2]}">
    <img src="${pics[3]}">
    <img src="${pics[4]}">
    <img src="${pics[5]}">
    <img src="${pics[6]}">
    <img src="${pics[7]}">
    <img src="${pics[8]}">
    <img src="${pics[9]}">
    <img src="${pics[10]}">
  </div>
  `
}

document.title = `Caracter | ${sessionStorage.getItem('name')}`
fetch(`https://swapi.dev/api/people/?search=${sessionStorage.getItem('name')}`, { method: "GET", mode: "cors" })
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data.results[0])
    const app = new CaracterPage(data.results[0])
    app.start()
  })

fetch(`http://localhost:4564/?search=${sessionStorage.getItem('name')}`, { method: "GET", mode: "cors" })
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    addPictures(data)
  })