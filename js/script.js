$(document).ready(function(){
    $(window).scroll(function(){
        
        
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

const modals = Array.from(document.querySelectorAll(".modal-shrink-btn"));


// const modalHeader =  document.querySelector(".modal-header");
// const shrinkBtn = document.querySelector(".modal-shrink-btn");
// const shrinkBtnPlus = document.querySelector(".modal-shrink-btn i");

const modalB1 = document.getElementById("modalB1");
const modalH1 = document.getElementById("modalH1");
const modalI1 = document.getElementById("modalI1");

const modalB2 = document.getElementById("modalB2");
const modalH2 = document.getElementById("modalH2");
const modalI2 = document.getElementById("modalI2");

const modalB3 = document.getElementById("modalB3");
const modalH3 = document.getElementById("modalH3");
const modalI3 = document.getElementById("modalI3");

const modalB4 = document.getElementById("modalB4");
const modalH4 = document.getElementById("modalH4");
const modalI4 = document.getElementById("modalI4");

const modalB5 = document.getElementById("modalB5");
const modalH5 = document.getElementById("modalH5");
const modalI5 = document.getElementById("modalI5");

const modalB6 = document.getElementById("modalB6");
const modalH6 = document.getElementById("modalH6");
const modalI6 = document.getElementById("modalI6");

modalB6.addEventListener("click", () =>{
  modalH6.classList.toggle("show-header")
  if(modalH6.classList.contains("show-header")){
    modalI6.classList.remove("fa-plus")
    modalI6.classList.add("fa-minus")
  }else{
    modalI6.classList.add("fa-plus")
    modalI6.classList.remove("fa-minus")

  }
});

modalB5.addEventListener("click", () =>{
  modalH5.classList.toggle("show-header")
  if(modalH5.classList.contains("show-header")){
    modalI5.classList.remove("fa-plus")
    modalI5.classList.add("fa-minus")
  }else{
    modalI5.classList.add("fa-plus")
    modalI5.classList.remove("fa-minus")

  }
});

modalB4.addEventListener("click", () =>{
  modalH4.classList.toggle("show-header")
  if(modalH4.classList.contains("show-header")){
    modalI4.classList.remove("fa-plus")
    modalI4.classList.add("fa-minus")
  }else{
    modalI4.classList.add("fa-plus")
    modalI4.classList.remove("fa-minus")

  }
});

modalB3.addEventListener("click", () =>{
  modalH3.classList.toggle("show-header")
  if(modalH3.classList.contains("show-header")){
    modalI3.classList.remove("fa-plus")
    modalI3.classList.add("fa-minus")
  }else{
    modalI3.classList.add("fa-plus")
    modalI3.classList.remove("fa-minus")

  }
});

modalB2.addEventListener("click", () =>{
  modalH2.classList.toggle("show-header")
  if(modalH2.classList.contains("show-header")){
    modalI2.classList.remove("fa-plus")
    modalI2.classList.add("fa-minus")
  }else{
    modalI2.classList.add("fa-plus")
    modalI2.classList.remove("fa-minus")

  }
});
modalB1.addEventListener("click", () =>{
  modalH1.classList.toggle("show-header")
  if(modalH1.classList.contains("show-header")){
    modalI1.classList.remove("fa-plus")
    modalI1.classList.add("fa-minus")
  }else{
    modalI1.classList.add("fa-plus")
    modalI1.classList.remove("fa-minus")

  }
});



// modal shrink end
// init aos
AOS.init()

//secnding email


function sendEmail(event) {
  event.preventDefault();

  // Initialize EmailJS with your service ID
  emailjs.init("S2-pLts4iYFCBsY1d");

  // Prepare the email parameters
  var templateParams = {
      to_email: "medo.hagaze@gmail.com", // Replace with the recipient email address
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value
  };

  // Send the email
  emailjs.send("service_1rz7r5a", "template_748i9li", templateParams)
  .then(function(response) {
    console.log("Email sent successfully!", response);

    // Show success popup
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Message sent successfully. Thank you for contacting me.'
  }).then((result) => {
      // Clear form inputs on popup close
      if (result.isConfirmed || result.isDismissed) {
          document.getElementById("name").value = '';
          document.getElementById("email").value = '';
          document.getElementById("subject").value = '';
          document.getElementById("message").value = '';
      }
  });
})
.catch(function(error) {
    console.error("Error sending email:", error);

    // Show error popup
    Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Oops! Something went wrong. Please try again.',
        onAfterClose: function () {
            // Clear form inputs on popup close
            // document.getElementById("name").value = '';
            document.getElementById("email").value = '';
            // document.getElementById("subject").value = '';
            // document.getElementById("message").value = '';
        }
    });
});
}