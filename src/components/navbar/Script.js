const menu_btn = document.querySelector('.menu_btn');
const nav_list = document.querySelector(".nav_list");
menu_btn.addEventListener('click',()=>{
    nav_list.classList.toggle('mobile_view');
});