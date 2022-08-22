console.log("aasan hai");


const close = document.getElementById("close")
const burger = document.getElementById("burger")
const navlist = document.querySelector('.sidelist')


burger.addEventListener("click", () => {
    burger.style.display = "none"
    close.style.display = "block"
    navlist.classList.add('toggle')

})
close.addEventListener("click", () => {
    burger.style.display = "block"
    close.style.display = "none"
    navlist.classList.remove('toggle')

})

