const track = document.querySelector('.carousel-track')
const slides = Array.from(track.children)
const nexButton = document.querySelector('.carousel-button--right')
const prevButton = document.querySelector('.carousel-button--left')
const dotsNav = document.querySelector('.carousel-nav')
const dots = Array.from(dotsNav.children)

const slideWidth = slides[0].getBoundingClientRect().width

//arrange the slides next to one another

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px'
}

slides.forEach(setSlidePosition)

//when I click left, move slides to the left

//when I click right, move slides to the right
nexButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide')
    const nextSlide = currentSlide.nextElementSibling
    console.log(currentSlide.nextElementSibling)
    const amoutToMove = nextSlide.style.left
   //move to next slide
   track.style.transform = 'translatex(-' + amoutToMove + ')'
})
//when I click the nav indicators, move to that slide