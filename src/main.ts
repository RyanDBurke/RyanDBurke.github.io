import { createApp } from 'vue'
// The old home page lives in App.vue; swap it back in here to restore it
import Landing from './Landing.vue'

const app = createApp(Landing)

app.mount('#app')
