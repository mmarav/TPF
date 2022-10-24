const ham =document.querySelector(".ham"),
      menu=document.querySelector(".menu-navegacion");
      
ham.addEventListener("clic",()=>{
    menu.classList.toggle("spread");
} )

ventana.addEventListener("clic", e =>{
    if (menu.classList.contains("spread") && e.target != menu && e.target != ham){
        menu.classList.toggle("spread")
    }
})
