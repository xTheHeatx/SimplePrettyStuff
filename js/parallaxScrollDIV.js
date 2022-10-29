function parallaxScrollDIV(className) {

    document.addEventListener('scroll', e => {

        const object = document.querySelector(className)

        const scrollPosition = window.scrollY

        const shortNumber = Math.floor(scrollPosition * 100) / 100

        object.setAttribute("style", `transform: translateY(calc(-${shortNumber}px / 2));`)

    })

}

export default parallaxScrollDIV







