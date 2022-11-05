const ham = document.querySelector(".ham");
const menu = document.querySelector(".menu-navegacion");

console.log(menu)
console.log(ham)

ham.addEventListener("clic", () => {
    menu.classList.toggle("spread");
})

<<HEAD
ventana.addEventListener ("clic"), e =>{
if (menu.classList.contains("spread") && e.target != menu && e.target != ham)
        menu.classList.toggle ("spread")}

window.addEventListener("clic", e => {
    if(menu.classList.contains("spread") && e.target != menu && e.target != ham) {
        
        menu.classList.toggle("spread")
    }
})

>>> b617ea4be0ac1835182079dc402ea02db39f8742