const iconTrigger = document.getElementById("icontrigger")
const icon = document.getElementById("icon")
const menuContainer = document.getElementById("menucontainer")

menuContainer.classList.add('hideContainer')

iconTrigger.addEventListener("click", () =>{
    if(icon.classList.contains('fa-bars')){

        icon.classList.remove('fa-bars')
        icon.classList.add('fa-close')
        

        menuContainer.classList.add('showContainer')
        menuContainer.classList.remove('hideContainer')
    }
    else{
        icon.classList.remove('fa-close')
        icon.classList.add('fa-bars')

        menuContainer.classList.add('hideContainer')
        menuContainer.classList.remove('showContainer')
    }
})