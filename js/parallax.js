const scrollEvent = window.addEventListener('scroll', e => {

    const body = document.querySelector('body')

    const scrollPosition = window.scrollY

    const shortNumber = Math.floor(scrollPosition * 100) / 100


    const result = body.setAttribute("style", `background-position-y: calc(-${shortNumber}px + 10px);`)

    console.log(shortNumber)
    console.dir(result)



})
