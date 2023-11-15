import { createApp } from 'vue'

import App from './App.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faAngleDown, faCartShopping, faMagnifyingGlass, faCheck} from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-regular-svg-icons'





/* add icons to the library */
library.add(faAngleDown, faCartShopping,faUserCircle,faMagnifyingGlass, faCheck )

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
