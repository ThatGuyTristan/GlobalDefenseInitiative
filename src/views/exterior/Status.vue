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
      { label: "Military", value: "67", color: "red" }
    ],
    sparklines: [ 
      {  
        title: "Historical",
        sparks: [ 13, 18, 28, 91 ],
        labels: [ '-120', '-90', '-60', '-30'],
        color: ['red', 'green']
      },
      {  
        title: "Predicted",
        sparks: [ 270, 1010, 3030, 10000 ],
        labels: [ '+30', '+60', '+90', '+120'],
        color: ['red darken-5', 'red']
      },
    ]
  })
};
</script>