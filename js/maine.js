/*=========== show mwnu ====*/

const navMenu =document.getElementById('nav-menu'),
      navToggle =document.getElementById('nav-toggle'),
      navClose =document.getElementById('nav-close')

 /*=========== show mwnu ====*/
 /*=========== valide if exest====*/     
 if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')

    })
 }
  /*=========== valide if exest====*/     
  if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
  }




/* remouve menu mobile */
  const navLink = document.querySelectorAll('.nav__link')
  const linkAction = () =>{
       const navMenu = document.getElementById('nav-menu')
       navMenu.classList.remove('show-menu')
  }
  navLink.forEach(n => n.addEventListener('click',linkAction))




  /* shadow header */
const shadowHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
  }
  window.addEventListener('scroll', shadowHeader)


   /*======================= email js */

    const contactForm = document.getElementById('contact-form')
    const contactMessage = document.getElementById('contact-message')
    const  sendEmail = (e) =>{
           e.preventDefault()

           emailjs.sendForm('service_idv8935','template_t4k7qpd','#contact-form','z83QPKb-CX-dl78WP')
           .then(() =>{
  
               contactMessage.textContent = 'Message sent successfully 🫶🏼🫶🏼'

             // remouve message after five seconds
               setTimeout(() =>{
                contactMessage.textContent = ''
               }, 5000)

               contactForm.reset()
           
           }, ()=>{
            contactMessage.textContent ='message note send (service erreur)❌'
           })
    }

    contactForm.addEventListener('submit', sendEmail)


       /*======================= scrolllup =============*/


const scrollUp =() =>{
        const scrollUp =document.getElementById('scroll-up')
         this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                              :scrollUp.classList.remove('show-scroll')
       }

window.addEventListener('scroll',scrollUp)

    /*======================= scrol section active link =============*/

    const sections = document.querySelectorAll('section[id]')


    const scrollActive = () =>{
         const scrollDown = window.scrollY


          sections.forEach(current =>{
            const sectionHeight = current.offsetHeight,
                  sectionTop = current.offsetTop - 58,
                  sectionId = current.getAttribute('id'),
                  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

            if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
              sectionsClass.classList.add('active-link')

            }else{
              sectionsClass.classList.remove('active-link')
            }

    })
    } 
window.addEventListener('scroll', scrollActive)    


/*=========================   dark light theme ========*/

const ThemeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// previously selected topic (if user selected )

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//we obtain the currend theme that the interface has by validating the dark theme class

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => ThemeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// we validate if the user priviously chose a topic 

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  ThemeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

//Activater / deactivate the theme manually with tha button

ThemeButton.addEventListener('click', () => {

  document.body.classList.toggle(darkTheme)
  ThemeButton.classList.toggle(iconTheme)

  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})


/*===== scroll animation ===*/
 const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 400,
      // reset: true 
 })

 sr.reveal('.home__perfil, .contact__mail', {origin: 'right'})
 sr.reveal('.home__name, .home__info, .about__container .sectiom__title-1, .about__info, .contact__social, .contact__data', {origin: 'left'})
 
 sr.reveal('.services__card, .projects__card', {interval: 100})