import parallaxScroll from "./parallaxScroll.js"
import parallaxScrollDIV from "./parallaxScrollDIV.js"

import parallaxMouseMove from "./parallaxMouseMove.js"
import parallaxMouseMoveDIV from "./parallaxMouseMoveDIV.js"

import swiper from "./swiper.js"



parallaxScroll('.main-container')
parallaxMouseMove('.main-container', 8)

parallaxScrollDIV('.cloud-1')
parallaxScrollDIV('.cloud-2')
parallaxScrollDIV('.cloud-3')
parallaxScrollDIV('.cloud-4')
parallaxScrollDIV('.cloud-5')
parallaxScrollDIV('.cloud-6')
parallaxScrollDIV('.cloud-7')
// parallaxMouseMoveDIV('.clouds', 25, 25)

swiper()