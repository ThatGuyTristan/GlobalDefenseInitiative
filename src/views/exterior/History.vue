<template lang="pug">
  PrimaryLayout
    template(v-slot:header)
      div.text-center.mx-auto
        h3.mx-auto History
    template(v-slot:body)
      v-card(dark)
        v-card-title 
          h4.mx-auto About the Holden Meteorite
        v-card-text
          template
            v-parallax(dark src="@/assets/images/asteroid.jpg")
              div.px-16
                p.body-1.px-16(v-for="(txt, i) in backstory") {{ txt }}
                p.body-1.px-16(v-for="(txt, i) in escalation") {{ txt }}
                h4.ml-5 A War on Four Fronts
                p.body-1.px-16(v-for="(txt, i) in strategies") {{ strategies }}
</template>

<script>
import PrimaryLayout from "../layouts/Primary.vue"
import BackstoryText from "/src/assets/text/backstory"
import EscalationText from "/src/assets/text/escalation"

export default {
  name: "About",
  components: {PrimaryLayout},
  data: () => ({
    backstory: BackstoryText, 
    escalation: EscalationText
  })
};
</script>