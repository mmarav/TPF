const ham = document.querySelector(".ham");
const menu = document.querySelector(".menu-navegacion");

console.loh(menu)
console.log(ham)

ham.addEventListener("clic", () => {
    menu.classList.toggle("spread");
})

window.addEventListener("clic", e => {
    if(menu.classList.contains("spread") && e.target != menu && e.target != ham) {
        
        menu.classList.toggle("spread")
    }
})
