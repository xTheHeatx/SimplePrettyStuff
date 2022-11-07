function ScrollToDesigns() {


    const button = document.getElementById('sun')


    button.addEventListener('click', () => {
        const slider = document.getElementById('slider')

        if (slider.classList.contains('rendered')) {

            return window.scrollTo({ top: 1495, behavior: 'smooth' })

        }

        const clouds = document.getElementById('clouds')
        const container = document.getElementById('container')
        const wrapper = document.getElementById('wrapper')

        container.removeAttribute('style')
        clouds.removeAttribute('style')
        wrapper.removeAttribute('style')




        slider.classList.remove('hide')

        slider.classList.add('rendered')


        window.scrollTo({ top: 1800, behavior: 'smooth' })






    })



}

export default ScrollToDesigns