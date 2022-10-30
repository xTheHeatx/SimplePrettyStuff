function menuOpen() {


    const button = document.getElementById('menu')


    button.addEventListener('click', () => {

        const header = document.getElementById('header')


        header.classList.toggle('hide')

        header.classList.add('rendered')


    })



}

export default menuOpen