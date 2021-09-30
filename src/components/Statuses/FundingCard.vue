<template lang="pug">
  v-card.mb-3(tile dark)
    v-card-title 
      div.text-center.mx-auto
        h3 Alumni Funding
        .caption.mb-2 Alumni continues to seek funding to counter the extinction-level threat posed by the Holden Impact
    v-card-text
      v-row
        StatSheet(
          v-for="sheet in sheets" 
          :label="sheet.label" 
          :value="sheet.value" 
          :color="sheet.color"
        )
</template>

<script>
import StatSheet from "./statSheet.vue"

export default {
  components: { StatSheet },
  data: () => ({
    sheets: [
      { label: "Scientific", value: "90", color: "blue" },
      { label: "Environmental", value: "48", color: "green" },
      { label: "Practical", value: "87", color: "orange" },
      { label: "Military", value: "34", color: "red" }
    ],
  })
}
</script>
