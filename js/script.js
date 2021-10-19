$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 200){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.hamburger').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.hamburger i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Engineer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Engineer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,



        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 1,
                nav: false
            },
            1000:{
                items: 1,
                nav: false
            }
        }
    });
});


//Add scroll functionality to know the current scroll value
const Sections = Array.from(document.getElementsByTagName("section"));

window.addEventListener("scroll", () => {
    let current = "";
    Sections.forEach((Section) => {
      const sectionTop = Section.offsetTop;
      const sectionHeight = Section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = Section.getAttribute("id");
      }
    });
  
  //Add loob to the main navbar elements to select the active li
  const navLi = document.querySelectorAll(".menu li a");

    navLi.forEach((li) => {
      li.classList.remove("Now");
      if (li.classList.contains(current)) {
        li.classList.add("Now");
      }
  
    });

  //Add loob to select the active section
  Sections.forEach((sec) => {
    sec.classList.remove("Now-sec");
    if (sec.id == current) {
      sec.classList.add("Now-sec");
    }
  });
});

// Add website open animation
gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".banner", { opacity: 0, duration: 1, delay: 1.5, x: -200 });
gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 1, x: 20 });
gsap.from(".home-content .text-1", { opacity: 0, duration: 1, delay: 2, y: -50 });
gsap.from(".home-content .text-2", { opacity: 0, duration: 1, delay: 2.5, y: -45 });
gsap.from(".home-content .text-3", { opacity: 0, duration: 1, delay: 3, y: -30 });
gsap.from(".home-content a", { opacity: 0, duration: 1, delay: 3.5, y: 50 });
gsap.from(".menu .menu-btn", {
  opacity: 0,
  duration: 1,
  delay: 1.2,
  y: 30,
  stagger: 0.2,
});
gsap.from(".media-icons span", {
  opacity: 0,
  duration: 1,
  delay: 4,
  x: -30,
  stagger: 0.2,
});
// modal shrink start

const modalHeader = document.querySelector(".modal-header");
const shrinkBtn = document.querySelector(".modal-shrink-btn");
const shrinkBtnPlus = document.querySelector(".modal-shrink-btn i");

shrinkBtn.addEventListener("click", () =>{
  modalHeader.classList.toggle("show-header")
  if(modalHeader.classList.contains("show-header")){
    shrinkBtnPlus.classList.remove("fa-plus")
    shrinkBtnPlus.classList.add("fa-minus")
  }else{
    shrinkBtnPlus.classList.add("fa-plus")
    shrinkBtnPlus.classList.remove("fa-minus")

  }
});



// modal shrink end
// init aos
AOS.init()