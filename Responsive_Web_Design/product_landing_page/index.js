
//fetch menu item 
let menu = document.querySelector("#menu-btn")
let navbar = document.querySelector("#header #nav-bar")

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove("active");
}