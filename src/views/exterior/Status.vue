<template lang="pug">
  PrimaryLayout
    template(v-slot:header)
      div.text-center.mx-auto
        h3.mx-auto World Status
        .caption Updated on a monthly basis
    template(v-slot:body)
      v-card.my-3(tile dark)
        v-card-title 
          div.text-center.mx-auto
            h3 Alumni Funding
            .subtitle Alumni continues to seek funding to counter the extinction-level threat posed by the Holden Impact
        v-card-text
          v-row
            StatSheet(
              v-for="sheet in stats" 
              :label="sheet.label" 
              :value="sheet.value" 
              :color="sheet.color"
            )
      v-card.pb-5(tile dark)
        v-card-title
          h3.mx-auto Environmental Statuses -- Atmospheric Toxicity        
        v-card-text     
          v-row
            StatSparkline(
              v-for="spark in sparklines"
              :title="spark.title"
              :gradient="spark.color" 
              :value="spark.sparks" 
              :labels="spark.labels"
            )
</template>

<script>
import PrimaryLayout from "@/views/layouts/Primary"
import StatSheet from "@/components/statSheet"
import StatSparkline from "@/components/statSparkline"

export default {
  components: {PrimaryLayout, StatSheet, StatSparkline},
  data: () => ({
    stats: [
      { label: "Scientific", value: "90", color: "blue" },
      { label: "Environmental", value: "48", color: "green" },
      { label: "Practical", value: "87", color: "orange" },
      { label: "Military", value: "34", color: "red" }
    ],
    sparklines: [ 
      {  
        title: "Historical",
        sparks: [ 12, 18, 30, 45, 72 ],
        labels: [ '-60', '-48', '-36',  '-24', '-12'],
        color: ['red', 'green']
      },
      {  
        title: "Predicted",
        sparks: [ 108, 260, 390, 585, 878 ],
        labels: [ '12', '24', '36', '48', '60'],
        color: ['red darken-5', 'red']
      },
    ]
  })
};
</script>