const burger = document.getElementById("burger")
const sideNav = document.querySelector(".side-nav")
const links = document.querySelectorAll(".link")

burger.addEventListener("click", function(){
    this.classList.toggle("rotate")
    sideNav.classList.toggle("translate")
})

window.addEventListener("resize", function(){
    if(window.innerWidth < 768){
        burger.classList.remove("rotate")
        sideNav.classList.remove("translate")
    }
})