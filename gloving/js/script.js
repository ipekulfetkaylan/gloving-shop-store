
// addEventListener
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

//  navbar
const navTogglers= document.querySelectorAll("[data-nav-toggler]");
const navbar= document.querySelector("[data-navbar]");
const navbarLinks= document.querySelectorAll("[data-nav-link]");


const toggleNavbar= function(){
    navbar.classList.toggle("active");
    
}

addEventOnElem(navTogglers,"click", toggleNavbar);

const closeNavbar= function(){
    navbar.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);

// header
const header= document.querySelector("[data-header]");
const backTopBtn= document.querySelector("[ data-back-top-btn]")

const headerActive= function(){
    if(window.scrollY > 150){
        header.classList.add("active");
        backTopBtn.classList.add("active")
    }else{
        header.classList.remove("active");
        backTopBtn.classList.remove("active")
    }
}
addEventOnElem(window, "scroll", headerActive);

let lastScrolledPos = 0;

const headerSticky = function () {
  if (lastScrolledPos >= window.scrollY) {
    header.classList.remove("header-hide");
  } else {
    header.classList.add("header-hide");
  }

  lastScrolledPos = window.scrollY;
}

addEventOnElem(window, "scroll", headerSticky);

// scroll effect

const sections= document.querySelectorAll("[data-section]");

const scrollReveal= function(){
    for(let i= 0; i < sections.length; i++){
        if(sections[i].getBoundingClientRect().top < window.innerHeight /2){
            sections[i].classList.add("active")
        }
    }
}

addEventOnElem(window, "scroll", scrollReveal)

// countdown
const dayEl= document.querySelector("#day");
const hourEl= document.querySelector("#hour");
const minuteEl= document.querySelector("#minute");
const secondEl= document.querySelector("#second");

const discountEndDate= new Date("Jan 1, 2024 00:00:00").getTime(); 

countdownEndDate();
function countdownEndDate(){
    const now= new Date().getTime();
    const gap= (discountEndDate - now)

    const second= 1000; // 1 saniye kaç ms
    const minute= second * 60;
    const hour= minute * 60; // 1 saat kaç ms 
    const day= hour * 24; // 1 gün kaç ms

    const d= Math.floor(gap / day);
    const h= Math.floor((gap % day) / hour);
    const m= Math.floor((gap % hour) / minute);
    const s= Math.floor((gap % minute) / second);

    dayEl.innerText= d;
    hourEl.innerText= h;
    minuteEl.innerText= m;
    secondEl.innerText= s;
    
    setTimeout(countdownEndDate,1000);
}







