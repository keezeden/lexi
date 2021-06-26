import Vue from "vue";
import App from "./src/views/app";

import store from "./src/store";

import "./index.css";

new Vue({
  render: h => h(App),
  store
}).$mount("#app");
