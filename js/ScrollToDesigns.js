function ScrollToDesigns() {


    const button = document.getElementById('sun')


    button.addEventListener('click', () => {

        const slider = document.getElementById('slider')
        const clouds = document.getElementById('clouds')
        const container = document.getElementById('container')

        container.removeAttribute('style')
        clouds.removeAttribute('style')

        window.scrollTo({ top: 1400, behavior: 'smooth' })


        slider.classList.remove('hide')

        slider.classList.add('rendered')


        window.scrollTo({ top: 1400, behavior: 'smooth' })






    })



}

export default ScrollToDesigns