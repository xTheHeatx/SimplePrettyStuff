function ScrollToDesigns() {


    const button = document.getElementById('sun')


    button.addEventListener('click', () => {

        const slider = document.getElementById('slider')
        const clouds = document.getElementById('clouds')
        const container = document.getElementById('container')
        const wrapper = document.getElementById('wrapper')

        container.removeAttribute('style')
        clouds.removeAttribute('style')
        wrapper.removeAttribute('style')

        window.scrollTo({ top: 1420, behavior: 'smooth' })


        slider.classList.remove('hide')

        slider.classList.add('rendered')


        window.scrollTo({ top: 1420, behavior: 'smooth' })






    })



}

export default ScrollToDesigns