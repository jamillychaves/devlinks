function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/Avatar.png")
  }
  //substituir a imagem
}
// -> também funcionaria e seria uma forma mais abreveada.
