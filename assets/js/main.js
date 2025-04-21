/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
    
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link') 

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click',linkAction))

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header')

    this.scrollY >= 50 ?header.classList.add('shadow-header')
                        :header.classList.remove('shadow-header')
}
window.addEventListener('scroll',shadowHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form')
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_3kczu9g','template_m7ood8w','#contact-form','db4-fqWXjl7xRdMf9')
    .then(()=> {
        contactMessage.textContent = 'Message sent successfully!'

        setTimeout(()=> {
            contactMessage.textContent = ''

        },5000)

        contactForm.reset()
    },()=>{
         contactMessage.textContent = 'Message not sent (service error)!'
    })
}

contactForm.addEventListener('submit',sendEmail)
/*=============== SHOW SCROLL UP ===============*/ 
const scrollup = () => {
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll',scrollup)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach (current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop -58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*='+sectionId+']')
        if(scrollDown >sectionTop && scrollDown <= sectionTop+sectionHeight){
            sectionsClass.classList.add('active-link')
        }
        else {
            sectionsClass.classList.remove('active-link')
        }
     })
          
}
window.addEventListener('scroll',scrollActive)
/*=============== DARK LIGHT THEME ===============*/ 

const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const icon = document.querySelector('.btn__icon');

//to save the dark mode use the object "local storage".

//function that stores the value true if the dark mode is activated or false if it's not.
function store(value){
  localStorage.setItem('dark-theme', value);
}

//function that indicates if the "darkmode" property exists. It loads the page as we had left it.
function load(){
  const darkmode = localStorage.getItem('dark-theme');

  //if the dark mode was never activated
  if(!darkmode){
    store(false);
    icon.classList.add('ri-moon-line');
  } else if( darkmode == 'true'){ //if the dark mode is activated
    body.classList.add('dark-theme');
    icon.classList.add('ri-sun-line');
  } else if(darkmode == 'false'){ //if the dark mode exists but is disabled
    icon.classList.add('ri-moon-line');
  }
}


load();

btn.addEventListener('click', () => {

  body.classList.toggle('dark-theme');
  icon.classList.add('animated');

  //save true or false
  store(body.classList.contains('dark-theme'));

  if(body.classList.contains('dark-theme')){
    icon.classList.remove('ri-moon-line');
    icon.classList.add('ri-sun-line');
  }else{
    icon.classList.remove('ri-sun-line');
    icon.classList.add('ri-moon-line');
  }

  setTimeout( () => {
    icon.classList.remove('animated');
  }, 500)
})
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.home__perfil, .about__image, .contact__mail`,{origin: 'right'})
sr.reveal(`.home__name, .home__info,
     .anout__container, .section__title-1, .about__info,
     .contact__social, .contact__data`,{origin: 'left'})
sr.reveal(`.services__card, .projects__card`,{interval: 100})


//=================TYPE=========================
var typingEffect = new Typed(".multiText", {
  strings : ["Phuong Uyen", "Coder"],
  loop:true,
  typeSpeed:100,
  backSpeed:80,
  backDelay:1500
})


//----------------MOVING EYE==================
document.addEventListener("mousemove", (event) => {
  const eyes = document.querySelectorAll('.eye'); 
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  eyes.forEach(eye => {
      const eyeRect = eye.getBoundingClientRect();
      const eyeCenterX = eyeRect.left + eyeRect.width / 2;
      const eyeCenterY = eyeRect.top + eyeRect.height / 2;

      const deltaX = mouseX - eyeCenterX;
      const deltaY = mouseY - eyeCenterY;

      const distance = Math.min(Math.sqrt(deltaX * deltaX + deltaY * deltaY), 15); // limit the maximum distance
      const angle = Math.atan2(deltaY, deltaX); // get the angle

      const ball = eye.querySelector('.ball');
      const moveX = Math.cos(angle) * distance;
      const moveY = Math.sin(angle) * distance;

      ball.style.transform = `translate(-50%, -50%) translate(${moveX}px, ${moveY}px)`;
  });
});


// Mảng chứa thông tin của các dự án
const projects = [
  {
      title: "Materials Management",
      subtitle: "C++",
      description: "The Data Structures and Algorithms project implements the management of material, employee and invoice information in a sales system. The program uses data structures such as binary search trees for material lists, pointer arrays.",
      imgSrc: "img/project-1",
      link: "https://github.com/phuyen27/DoAnQuanLyVatTu"
  },
  {
      title: "Bus Booking and Management",
      subtitle: "C#, SQL",
      description: "C# project connects to database to help customers book bus tickets online and manage bus operations, including vehicle management, customers, finance, staff, information system and efficient ticket booking and payment process.",
      imgSrc: "img/project-2.jpg",
      link: "https://github.com/phuyen27/BusBookingAndManagement/tree/main"
  },
  {
      title: "Delight Ordering and Management System",
      subtitle: "JavaScript, CSS, Html, C#, ASP.NET",
      description: "The website allows users to browse and purchase Christmas products from Delight store, while administrators can manage database information such as invoices, purchase receipts, user details, and customer reviews.",
      imgSrc: "img/project-3.png",
      link: "https://github.com/phuyen27/Delight-Ordering-and-Management-System"  
  },
  {
      title: "Delight Ordering app",
      subtitle: "Kotlin, Java",
      description: "The order app offers features like login, registration, and password recovery. Users can browse, select, and add products to their cart, remove items, and mark products as favorites. Once an order is placed, confirmation and details are sent via email.",
      imgSrc: "img/project-4.png",
      link: "https://github.com/phuyen27/DelightShop-kotlin-"  
  }
];

// Hàm để tạo các bài viết dựa trên mảng dự án
function renderProjects() {
  const container = document.getElementById("projectsContainer");

  // Lặp qua các dự án và tạo phần tử HTML cho mỗi dự án
  projects.forEach(project => {
      const article = document.createElement("article");
      article.classList.add("projects__card");

      article.innerHTML = `
          <div class="projects__image">
              <img src="${project.imgSrc}" alt="" class="projects__img">
              <a href="${project.link}" class="projects__button button">
                  <i class="ri-arrow-right-up-line"></i>
              </a>
          </div>

          <div class="projects__content">
              <h3 class="projects__subtitle">${project.subtitle}</h3>
              <h2 class="projects__title">${project.title}</h2>
              <p class="projects__description">${project.description}</p>
          </div>

          <div class="projects__buttons">
              <a href="${project.link}" target="_blank" class="projects__link">
                  <i class="ri-github-line"></i> View
              </a>
          </div>
      `;

      container.appendChild(article);
  });
}

// Gọi hàm renderProjects khi trang được tải
document.addEventListener("DOMContentLoaded", renderProjects);


