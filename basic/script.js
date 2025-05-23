let cateMenu = document.querySelector(".category-menu");
let gnb = document.querySelector(".gnb-menu-trigger")
let megaMenu = document.querySelectorAll(".category-mega-menu");
let sideMenu = document.querySelectorAll(".category-side-item");
let megaItem = document.querySelector(".category-mega-menu");
let sideItem = document.querySelector(".category-side-item");
let action = document.querySelector(".action");

gnb.addEventListener("click", function(){
    cateMenu.classList.toggle("action");
})

sideMenu.forEach(function(e){
    e.addEventListener("mouseover", function(){
        sideMenu.forEach(function(item){
            item.classList.remove("action");
        });

        e.classList.add("action");

        megaMenu.forEach(function(item){
            item.classList.remove("action");
        });
        let sideActIndex = Array.from(sideMenu).findIndex(el => el.classList.contains("action"));
        let megaActIndex = megaMenu[sideActIndex];
        megaActIndex.classList.add("action");
    })
})