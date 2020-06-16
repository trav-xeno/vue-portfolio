import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Carousel3d from "vue-carousel-3d";
import VueAnime from "vue-animejs";

Vue.use(VueAnime);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  Carousel3d,
  vuetify,
  render: h => h(App)
}).$mount('#app')
