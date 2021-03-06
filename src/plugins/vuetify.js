import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#00bcd4",
        secondary: "#3f51b5",
        accent: "#009688",
        error: "#f44336",
        warning: "#ff9800",
        info: "#03a9f4",
        success: "#4caf50",
      },
    },
  },
});
