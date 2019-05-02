import Vue from 'vue'
import ShortNIM_addon from './ShortNIM_addon.vue'
import VueDraggableResizable from 'vue-draggable-resizable'
import 'prevent-pull-refresh';

import '@nimiq/style/nimiq-style.min.css'

Vue.config.productionTip = false

Vue.component('vue-draggable-resizable', VueDraggableResizable)

const app = new Vue({
  render: h => h(ShortNIM_addon)
}).$mount('#webminer-addon')
export default app
