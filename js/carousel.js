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

const moveToSlide = (track, currentSlide, targetSlide) =>{
    track.style.transform = 'translatex(-' + targetSlide.style.left + ')'
    currentSlide.classList.remove('current-slide')
    targetSlide.classList.add('current-slide')
}

//when I click left, move slides to the left
prevButton.addEventListener('click', e =>{
    const currentSlide = track.querySelector('.current-slide')
    const prevSlide = currentSlide.previousElementSibling

    moveToSlide(track, currentSlide, prevSlide)
})

//when I click right, move slides to the right
nexButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide')
    const nextSlide = currentSlide.nextElementSibling

    moveToSlide(track, currentSlide, nextSlide)
})

//when I click the nav indicators, move to that slide
dotsNav.addEventListener('click', e =>{
    //what indicator was clicked on?
    const targetDot = e.target.closest('button')

    if(!targetDot) return
    
    const currentSlide = track.querySelector('.current-slide')
    const currentDot = track.querySelector('.current-slide')
    const targetIndex = dots.findIndex(dots => dots === targetDot)
    const targetSlide = slides[targetIndex]
    

    moveToSlide(track, currentSlide, targetSlide)
})

//automatic slide show