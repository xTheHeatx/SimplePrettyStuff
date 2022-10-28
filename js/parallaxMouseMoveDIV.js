function parallaxMouseMoveDIV(className, multiplayerX, multiplayerY) {


    document.addEventListener('mousemove', (position) => {

        let slider1 = document.querySelector(className)

        slider1.setAttribute("style", `transform: translate(calc(-${position.pageX}px / ${multiplayerX}), calc(-${position.pageY}px / ${multiplayerY}));  `)
        console.log(position)

    })
}

export default parallaxMouseMoveDIV







