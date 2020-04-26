import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Carousel3d from "vue-carousel-3d";
//Vue.use(Carousel3d);
import VueAnime from "vue-animejs";

Vue.use(VueAnime);
Vue.config.productionTip = false;
new Vue({
  router,
  Carousel3d,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
