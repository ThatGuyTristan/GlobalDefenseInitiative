<template lang="pug">
  PrimaryLayout
    template(v-slot:header)
      div.text-center.mx-auto
        h3.mx-auto History
        .caption It all started with the discovery of the Holden Meteorite
    template(v-slot:body)
      v-card(dark)
        v-card-text
          div.px-16
            h2.px-16 January 18th, 2023. . .         
            p.body-1.px-16(v-for="(txt, i) in backstory") {{ txt }}
            template.px-16  
              v-parallax.px-16(height="250" width="100" dark src="@/assets/images/asteroid.jpg")
            p.body-1.px-16(v-for="(txt, i) in escalation") {{ txt }}
            p.body-1.px-16(v-for="(txt, i) in strategies") {{ txt }}
</template>

<script>
import PrimaryLayout from "../layouts/Primary.vue"
import BackstoryText from "/src/assets/text/backstory"
import EscalationText from "/src/assets/text/escalation"
import StrategyText from "/src/assets/text/strategies"

export default {
  name: "About",
  components: {PrimaryLayout},
  data: () => ({
    backstory: BackstoryText, 
    escalation: EscalationText,
    strategies: StrategyText
  })
};
</script>