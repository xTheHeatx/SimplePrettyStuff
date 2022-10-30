function ScrollToTop() {



    const button = document.getElementById('up-btn')


    button.addEventListener('click', () => {



        window.scrollTo({ top: 0, behavior: 'smooth' })


    })



}



export default ScrollToTop