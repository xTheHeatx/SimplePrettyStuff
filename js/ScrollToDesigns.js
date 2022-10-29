function ScrollToDesigns() {








    window.onload = () => {

        window.scrollTo({ top: 0, behavior: 'smooth' })

    }










    const sun = document.getElementById('sun')



    sun.addEventListener('click', () => {

        const container = document.getElementById('container')
        const wrapper = document.getElementById('wrapper')
        const clouds = document.getElementById('clouds')

        container.removeAttribute('style')
        wrapper.removeAttribute('style')
        clouds.removeAttribute('style')


        if (wrapper.classList.contains('designs-opened')) {

            return

        }


        wrapper.insertAdjacentHTML('beforeend', `
        <div class="swiper slider slider_main" id="slider">
                    <h2 class="main-container__title">MY DESIGNS</h2>
                    <div class="swiper-wrapper slider__wrapper">

                        
                        <div class="swiper-slide slider__item">
                            <a href="https://xtheheatx.github.io/cinemaPlace/" class="slider__link-1">
                    
                            </a>
                        </div>
                   
                    
                        <div class="swiper-slide slider__item">
                            <a href="https://xtheheatx.github.io/cinemaPlace/" class="slider__link-2" id="2">
                                
                            </a>
                        </div>
                        
                        

                            <div class="swiper-slide slider__item">
                                <a href="./matrix.html" class="slider__link-3">
                                </a>
                            </div>
                    </div>
                </div>
        `)

        wrapper.classList.add('designs-opened')


        window.scrollTo({ top: 1400, behavior: 'smooth' })

        const body = document.getElementById('body')

        setTimeout(() => {
            body.insertAdjacentHTML('afterbegin', `
                <header class="header">
                    <div class="header__wrapper">
                        <div class="header__link-block">
                            <a href="https://xtheheatx.github.io/SimplePrettyStuff/index.html" class="header__link">MY DESIGNS</a>
                            <a href="https://xtheheatx.github.io/SimplePrettyStuff/index.html" class="header__link">MY DESIGNS</a>
                            <a href="https://xtheheatx.github.io/SimplePrettyStuff/index.html" class="header__link">CONTACTS</a>
                            <a href="https://xtheheatx.github.io/SimplePrettyStuff/index.html" class="header__link">ABOUT ME</a>
                        </div>
                    </div>
                </header>
                `,)

        }, 300);




    })



}

export default ScrollToDesigns