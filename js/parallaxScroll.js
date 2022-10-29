function parallaxScroll(className) {

    document.addEventListener('scroll', e => {

        const slider1 = document.querySelector(className)

        const scrollPosition = window.scrollY

        const shortNumber = Math.floor(scrollPosition * 100) / 100

        slider1.setAttribute("style", `background-position-y: calc(-${shortNumber}px + 1px);`)


    })

}

export default parallaxScroll







