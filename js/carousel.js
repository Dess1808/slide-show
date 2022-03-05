const track = document.querySelector('.carousel-track')
const slides = Array.from(track.children)
const nexButton = document.querySelector('.carousel-button-right')
const prevButton = document.querySelector('.carousel-button-left')
const dotsNav = document.querySelector('.carousel-nav')
const dots = Array.from(dotsNav.children)

const slideWidth = slides[0].getBoundingClientRect().width

//arrange the slides next to one another
// slides[0].style.left = slideWidth * 0 + 'px'
// slides[1].style.left = slideWidth * 1 + 'px'
// slides[2].style.left = slideWidth * 2 + 'px'

slides.forEach((slide, index) =>{
    slide.style.left = slideWidth * index + 'px'
})

//when I click left, move slides to the left

//when I click right, move slides to the right
//when I click the nav indicators, move to that slide