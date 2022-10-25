const scrollEvent = document.addEventListener('scroll', e => {

    const slider1 = document.querySelector('.main-container')

    const scrollPosition = window.scrollY

    const shortNumber = Math.floor(scrollPosition * 100) / 100



    slider1.setAttribute("style", `background-position-y: calc(-${shortNumber}px + 2px);`)



})



function pos(e) {

    let slider1 = document.querySelector('.main-container')

    slider1.setAttribute("style", `background-position-x: calc(-${e.pageX}px / 3); background-position-y: calc(-${e.pageY}px / 2);`)


}


addEventListener('mousemove', pos, false);




let sliderImg = document.getElementById('2')

sliderImg.addEventListener('mousemove', pos1, false);

function pos1(e) {

    sliderImg.setAttribute("style", `background-position-x: calc(-${e.pageX}px / 8); background-position-y: calc(-${e.pageY}px / 8);`)
}










