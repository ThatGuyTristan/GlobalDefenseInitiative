<template lang="pug">
  PrimaryLayout
    template(v-slot:header)
      h3.mx-auto About Alumni MultiNational
    template(v-slot:body)
      h4.mx-auto About the Holden Meteorite
      p.px-3(v-for="(txt, i) in backstory") {{ txt }}
      h4.mx-auto Three Years Later. . . 
      p.px-3(v-for="(txt, i) in escalation") {{ txt }}

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