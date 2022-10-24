const scrollEvent = document.addEventListener('scroll', e => {

    const slider1 = document.querySelector('.main-container')
    const slider2 = document.querySelector('.slider2')

    const scrollPosition = window.scrollY

    const shortNumber = Math.floor(scrollPosition * 100) / 100



    slider1.setAttribute("style", `background-position-y: calc(-${shortNumber}px + 2px);`)



    // slider2.setAttribute("style", `background-position-y: calc(-${shortNumber}px + 2px); transform: translateY(calc(-${shortNumber}px + 2px));`)
    // slider2.setAttribute("style", `background-position-y: calc(-${shortNumber}px + 6px);`)



})


let slider1 = document.querySelector('.main-container')

function pos(e) {
    slider1.setAttribute("style", `background-position-x: calc(-${e.pageX}px / 3); background-position-y: calc(-${e.pageY}px / 2);`)
}

addEventListener('mousemove', pos, false);









