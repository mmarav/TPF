const imagenes = document.querySelectorAll(".img-galeria")
const imagenesLight = document.querySelector(".agregar-imagen")
const contenedorLight = document.querySelector(".imagen-light")
const ham1 = document.querySelector(".ham");

console.log(imagenes)
console.log(imagenesLight)
console.log(contenedorLight)

imagenes.forEach(imagen => {
    imagen.addEventListener("click", () => {
        aparecerImagen (imagen.getAttribute("src"))
    })
})

contenedorLight.addEventListener("click", () => {
    if (e.target !== imagenesLight) {
        contenedorLight.classList.toggle("show")
        imagenesLight.classList.toggle("showImage")
        ham1.style.opacity ="1"
    }
})

const aparecerImagen = (imagen) => {
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle("show")
    imagenesLight.classList.toggle("showImage")
    ham1.style.opacity = "0"
}
