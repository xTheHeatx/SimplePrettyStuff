function parallaxMouseMove(className, multiplayer) {


    document.addEventListener('mousemove', (position) => {

        let slider1 = document.querySelector(className)

        slider1.setAttribute("style", `background-position-x: calc(-${position.pageX}px / ${multiplayer}); background-position-y: calc(-${position.pageY}px /  ${multiplayer});`)


    })
}

export default parallaxMouseMove







