import Vue from "vue";

import App from "./App";
import { apolloProvider } from "./apollo/provider";
import "./plugins/vue-apollo";

Vue.config.productionTip = false;

new Vue({
  apolloProvider,
  render: h => h(App)
}).$mount("#app");
