import parallaxScroll from "./parallaxScroll.js"
import parallaxScrollDIV from "./parallaxScrollDIV.js"

import parallaxMouseMove from "./parallaxMouseMove.js"

import ScrollToDesigns from "./ScrollToDesigns.js"

import ScrollToAbout from "./ScrollToAbout.js"

import ScrollToTop from "./ScrollToTop.js"

import renderHeaderWithDelay from "./renderHeaderWithDelay.js"






window.onload = () => {

    window.scrollTo({ top: 0, behavior: 'smooth' })

}





// parallaxScroll('.main-container')

// parallaxMouseMove('.main-container', 2)

parallaxScrollDIV('.cloud-1')
parallaxScrollDIV('.cloud-2')
parallaxScrollDIV('.cloud-3')
parallaxScrollDIV('.cloud-4')
parallaxScrollDIV('.cloud-5')
parallaxScrollDIV('.cloud-6')
parallaxScrollDIV('.cloud-7')
parallaxScrollDIV('.cloud-8')
parallaxScrollDIV('.cloud-9')

ScrollToDesigns()
ScrollToAbout()
ScrollToTop()




renderHeaderWithDelay('sun', 'body', 'afterbegin')//buttonId, divId, whereToPast                      HEADER


