function renderHeaderWithDelay(buttonId, divId, whereToPast) {

    const divObject = document.getElementById(divId)



    const button = document.getElementById(buttonId)



    button.addEventListener('click', () => {

        if (divObject.classList.contains('section-rendered')) {

            return

        }

        setTimeout(() => {
            divObject.insertAdjacentHTML(whereToPast, `
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

        divObject.classList.add('section-rendered')

    })
}

export default renderHeaderWithDelay