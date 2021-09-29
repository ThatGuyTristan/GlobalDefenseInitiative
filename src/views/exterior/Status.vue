<template lang="pug">
  PrimaryLayout
    template(v-slot:header)
      div.text-center.mx-auto
        h3.mx-auto World Status
        .caption Updated on a monthly basis
    template(v-slot:body)

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