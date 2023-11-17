import { createApp } from 'vue'

import App from './App.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faAngleDown, faCartShopping, faMagnifyingGlass, faCheck, faArrowRight, faGear, faTv, faUsers, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle, faFlag, faLifeRing, faFile, faCalendar, faEye } from '@fortawesome/free-regular-svg-icons'
import { faSquareFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'






/* add icons to the library */
library.add(faAngleDown, faCartShopping,faUserCircle,faMagnifyingGlass, faCheck, faArrowRight, faFlag, faGear, faLifeRing, faTv, faSquareFacebook, faTwitter, faInstagram, faLinkedin, faFile, faUsers, faArrowUp, faCalendar, faEye )

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
