let li_user = document.querySelector("#li_user")
let div_logout = document.querySelector("#div_logout")

let li_menu = document.querySelector("#li_menu")
let div_menu = document.querySelector("#div_menu")

let li_images = document.querySelector("#li_images")

let li_email = document.querySelector("#li_email")

let search = document.querySelector("#search")

let d_search = document.querySelector("#d_search")

let clickable = [div_logout, div_menu]

li_user.addEventListener("click", () => {

    if (!div_logout.classList.contains("hidden"))
        div_logout.classList.add("hidden")
    else
        div_logout.classList.remove("hidden")


    if (!div_menu.classList.contains("hidden"))
        div_menu.classList.add("hidden")

})


li_menu.addEventListener("click", () => {

    if (!div_menu.classList.contains("hidden"))
        div_menu.classList.add("hidden")
    else
        div_menu.classList.remove("hidden")

    if (!div_logout.classList.contains("hidden"))
        div_logout.classList.add("hidden")

})


li_images.addEventListener("click", () => {

    if (!div_menu.classList.contains("hidden"))
        div_menu.classList.add("hidden")

    if (!div_logout.classList.contains("hidden"))
        div_logout.classList.add("hidden")

})


li_email.addEventListener("click", () => {

    if (!div_menu.classList.contains("hidden"))
        div_menu.classList.add("hidden")

    if (!div_logout.classList.contains("hidden"))
        div_logout.classList.add("hidden")

})

document.querySelector("#main").addEventListener("click", () => {
    for (const items of clickable)
    {
        if (!items.classList.contains("hidden"))
        {
            items.classList.add("hidden")
        }
    }
})