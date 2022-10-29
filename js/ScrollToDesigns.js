function ScrollToDesigns() {




    const sun = document.getElementById('sun')



    sun.addEventListener('click', () => {
        const container = document.getElementById('container')
        const wrapper = document.getElementById('wrapper')
        const clouds = document.getElementById('clouds')

        container.removeAttribute('style')
        wrapper.removeAttribute('style')
        clouds.removeAttribute('style')


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


        window.scrollTo({ top: 1300, behavior: 'smooth' })

    })



}

export default ScrollToDesigns