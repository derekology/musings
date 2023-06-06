import './assets/main.css'

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import '@dbetka/vue-material-icons/dist/index.css'
import { createHead } from "@unhead/vue"
import materialIcons from '@dbetka/vue-material-icons'

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(head)
app.use(materialIcons);

app.mount('#app')
