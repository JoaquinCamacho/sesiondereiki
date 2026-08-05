const boton = document.querySelector("#boton")
const menu = document.querySelector("#menu")

boton.addEventListener("click",()=>{
    console.log("Click")

    menu.classList.toggle("hidden")
})