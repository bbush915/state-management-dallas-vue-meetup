import Vue from "vue";

import App from "./App";
import { apolloProvider } from "./plugins/vue-apollo";

Vue.config.productionTip = false;

new Vue({
  apolloProvider,
  render: h => h(App)
}).$mount("#app");
