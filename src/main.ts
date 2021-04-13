/* eslint-disable */
// @ts-ignore
import { defineCustomElements as defineIonPhaser } from '@ion-phaser/core/loader'
// @ts-ignore
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// @ts-ignore
import VueKinesis from 'vue-kinesis';
/* eslint-enable */

Vue.use(VueKinesis)

Vue.config.productionTip = false
Vue.config.ignoredElements = [/ion-\w*/]

defineIonPhaser(window)

new Vue({
  router,
  render: (h: (arg0: any) => any) => h(App)
}).$mount('#app')
