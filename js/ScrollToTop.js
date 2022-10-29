function ScrollToTop() {



    const button = document.getElementById('up-btn')


    button.addEventListener('click', () => {





        setTimeout(() => {

            const slider = document.getElementById('slider')
            const about = document.getElementById('about-div')
            const footer = document.getElementById('footer')


            slider.classList.add('hide')
            about.classList.add('hide')
            footer.classList.add('hide')

            const container = document.getElementById('container')
            container.setAttribute('style', "height:  calc( (100vh - 100px)/(1920 - 100) + 1100px)")




        }, 300);


        const clouds = document.getElementById('clouds')
        clouds.setAttribute('style', "margin-bottom: 40%")

        window.scrollTo({ top: 0, behavior: 'smooth' })














    })



}



export default ScrollToTop