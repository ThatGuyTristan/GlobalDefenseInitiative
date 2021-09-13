import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.amber.lighten1,
      },
      dark: {
        primary: colors.amber.lighten1,
      },
    },
  },
});

export default vuetify;
