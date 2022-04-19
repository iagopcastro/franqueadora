/* abre e fecha o menu ao clicar no icone */
const nav = document.querySelector('#header nav')
const  toggle =  document.querySelectorAll('nav .toggle')


//seleciona todos os elementos toggle e cria um evento de click
//cada vez que for clicado irá tirar ou adicionar a classe show na nav
for(const element of toggle){
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for(const link of links){
    link.addEventListener('click', function(){
        nav.classList.remove('show')
    })
}

/* mudar o header da página quando der scroll */


const header = document.querySelector('#header');
const navHeight = header.offsetHeight;
const botaoLogo = document.querySelector('#header .logo')
function changeHeaderWhenScroll(){

    if(window.scrollY >= navHeight) {
        // scroll é maior que a altura do header
        header.classList.add('scroll')
    } else {
        //menor que altura do header
        header.classList.remove('scroll') 
    }
}


/* testimonials carpisel slider */
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    loop: true,
    breakpoints:{
        767: {
            slidesPerView: 1,
            setWrapperSize: true,
        }
    }
  });


  /* ScrollReveal */

  const scrollReveal = ScrollReveal({
      origin: 'top',
      distance: '30px',
      duration: 700,
      reset: true,
  })

  scrollReveal.reveal(`
  #home .text, #home .image,
  #benefits .container-beneficios,
  #about .image, #about .text,
  #testimonials header, #testimonials .testimonials,
  #conversion .conversao-gif, #conversion .conversion-text,
  #model header, #model .card,
  #map .mapa-img, #map .mapa-legenda,
  #contact .text, contact .links,
  footer .brand, footer .social
  `,
  {interval: 300})

  /* botão voltar para o topo */

const backToTopButton = document.querySelector('.back-to-top');
function backToTop(){

    if (window.scrollY >= 560){
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
}

/* Menu ativo */
const sections = document.querySelectorAll('main section[id]');
function activateMenuAtCurrentSection(){
    
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

    for(const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        const checkpointStart = checkpoint >= sectionTop;
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

        if(checkpointStart && checkpointEnd){
            document.
            querySelector('nav ul li a[href*='+ sectionId + ']')
            .classList.add('active')

        } else {
            document.
            querySelector('nav ul li a[href*='+ sectionId + ']')
            .classList.remove('active')
        }

    }
}

/* When scroll */
  window.addEventListener('scroll', function(){
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
})
