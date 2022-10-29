function ScrollToAbout() {



    const button = document.getElementById('about-btn')


    button.addEventListener('click', () => {

        const slider = document.getElementById('about-div')
        const footer = document.getElementById('footer')


        slider.classList.remove('hide')

        slider.classList.add('rendered')


        footer.classList.remove('hide')

        footer.classList.add('rendered')


        window.scrollTo({ top: 2500, behavior: 'smooth' })






    })



}



export default ScrollToAbout