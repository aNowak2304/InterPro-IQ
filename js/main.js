const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year');
const allNavLinks = document.querySelectorAll('.nav__link');
const accordion = document.querySelector('.accordion')
const accordionBtns = document.querySelectorAll('.accordion-btn')
const sliderBox = document.querySelector('.slider__box')
const leftBtn = document.querySelector('.btn-left')
const rightBtn = document.querySelector('.btn-right')
const carouselImages = document.querySelectorAll('.slider-img')
const carouselWidth = 300
const carouselSpeed = 3000

const handleNav = () => {
    navBtn.classList.toggle('is-active');
    navMobile.classList.toggle('nav-mobile--active');

    allNavLinks.forEach(link => {
        link.addEventListener('click', () =>{
            navMobile.classList.remove('nav-mobile--active')
        })
    })
}

navBtn.addEventListener('click', handleNav);
const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}
handleCurrentYear();

function openAccordionItems() {

	if(this.nextElementSibling.classList.contains('active')) {
		this.nextElementSibling.classList.remove('active')
	} else {

		closeAccordionItem()
		this.nextElementSibling.classList.toggle('active')
		
	}
	
};

const closeAccordionItem = () => {
	const allActiveItems = document.querySelectorAll('.accordion-info')
	allActiveItems.forEach(item => item.classList.remove('active'))
}

const clickOutsideAccordion = e => {
    if (
		e.target.classList.contains('accordion-btn') ||
		e.target.classList.contains('accordion-info') ||
		e.target.classList.contains('accordion-info-text')
	)
		return

	closeAccordionItem()
};

accordionBtns.forEach(btn => btn.addEventListener('click', openAccordionItems))


let index = 0

const handleCarousel = () => {
	index++
	changeImage()
}

let startCarousel = setInterval(handleCarousel, carouselSpeed)

const changeImage = () => {
	if (index > carouselImages.length - 1) {
		index = 0
	} else if (index < 0) {
		index = carouselImages.length - 1
	}

	sliderBox.style.transform = `translateX(${-index * carouselWidth}px)`
}

const handleRightArrow = () => {
	index++
	resetInterval()
}

const handleLeftArrow = () => {
	index--
    resetInterval()
}

const resetInterval = () => {
    changeImage()
    clearInterval(startCarousel)
	startCarousel = setInterval(handleCarousel, carouselSpeed)
}

rightBtn.addEventListener('click', handleRightArrow)
leftBtn.addEventListener('click', handleLeftArrow)
window.addEventListener('click', clickOutsideAccordion)
