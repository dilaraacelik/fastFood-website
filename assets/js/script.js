 

// add eventListeners to multiple elements 

const addEventOnElements = function (elements, eventType, callback) {
    for (let i=0, len=elements.length; i<len; ++i){
        elements[i].addEventListener(eventType, callback);}
}

// select the elements  

const navbar = document.querySelector("[data-navbar]");
const navbarTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

// function for the navbarTogglers' eventListeners 

const togglerNav = function() {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}

addEventOnElements(navbarTogglers, "click", togglerNav);


// function for the navbarLinks' eventListeners 

const closeNav = function() {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
}

addEventOnElements(navbarLinks, "click", closeNav);

//Change header appearance based on scroll position 
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function(){
    header.classList[window.scrollY > 50 ?  "add" : "remove"]("active");
});
