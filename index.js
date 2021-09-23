
//mobile-nav
function disableScroll() {
    document.body.classList.add("stop-scrolling");
  }
  
  function enableScroll() {
    document.body.classList.remove("stop-scrolling");
  }
  
  document.getElementById("hamburger").addEventListener("click", ()=> {
    
    let hamburgerIcon = document.getElementById("hamburger");
    
    const nav = document.querySelector("nav");

    const mobileNav = document.querySelector(".desktop-nav");
    
    nav.classList.toggle("open");
  
    if(nav.classList.contains("open")){
        hamburgerIcon.src = "images/icon-close.svg";
        mobileNav.classList.add("mobile-nav-open");
        disableScroll();
    } else {
        nav.classList.remove("open");
        mobileNav.classList.remove("mobile-nav-open");
        hamburgerIcon.src = "images/icon-hamburger.svg";
        enableScroll();
    }
  })


// Slider
let buttons = document.getElementsByClassName('btn');
let cardsContainer = document.querySelector('.cards-container');

buttons[0].onclick = function(){
    cardsContainer.style.transform = 'translateX(0px)';
    for(let i = 0; i < 4; i++){
        buttons[i].classList.remove('active');
    }
    this.classList.add('active');
}

buttons[1].onclick = function(){
    cardsContainer.style.transform = 'translateX(-375px)';
    for(let i = 0; i < 4; i++){
        buttons[i].classList.remove('active');
    }
    this.classList.add('active');
}

buttons[2].onclick = function(){
    cardsContainer.style.transform = 'translateX(-750px)';
    for(let i = 0; i < 4; i++){
        buttons[i].classList.remove('active');
    }
    this.classList.add('active');
}

buttons[3].onclick = function(){
    cardsContainer.style.transform = 'translateX(-1125px)';
    for(let i = 0; i < 4; i++){
        buttons[i].classList.remove('active');
    }
    this.classList.add('active');
}


//Client-Side Validation

let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    let email = document.getElementById("email");
    let errorMessage = document.getElementById("error-message");

    if(email.validity.valueMissing){
        e.preventDefault();
        errorMessage.classList.remove('hidden');
        errorMessage.classList.add('display-block');
    }else if (email.validity.typeMismatch) {
        e.preventDefault();
        errorMessage.classList.remove('hidden');
        errorMessage.classList.add('display-block');
        email.value = '';
        email.placeholder = 'johnmadden/mail';
    } else {
        e.preventDefault();
        errorMessage.classList.remove('display-block');
        errorMessage.classList.add('hidden');
        email.placeholder = 'Updates in your inbox…';
        email.value = '';
    }
})

/* Check overflow
var docWidth = document.documentElement.offsetWidth;
[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);
*/