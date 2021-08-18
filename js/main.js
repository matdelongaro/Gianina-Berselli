const irArriba = document.getElementById("subir__arriba");

irArriba.addEventListener('click', ()=>{
    document.documentElement.scrollTop= 0;
});

window.addEventListener("scroll", ()=> {
    if(window.scrollY < 500) {
        irArriba.style.right = -100 + "px";
    } else{
        irArriba.style.right= 5 + "px";
    }
});
const navToggle = document.querySelector(".nav__toggle")
const navMenu = document.querySelector("nav")


navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu__visible");
    if (navMenu.classList.contains("nav-menu__visible")){
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
});


