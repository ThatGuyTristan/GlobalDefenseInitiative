<template lang="pug">
  v-card.pb-5(tile dark)
    v-card-title
      h3.mx-auto Environmental Statuses -- Atmospheric Toxicity        
    v-card-text     
      v-row
        v-card.mx-auto(width="150" outlined)
          v-card-title.mx-auto
            h4.mx-auto Saturation
          v-card-text
            div.px-3.text-center
              v-row(no-gutters)
                h1.mx-auto .18%
              v-row.mb-3(no-gutters)
                .caption.mx-auto 60 months ago
              v-row(no-gutters)
                h1.mx-auto 1.4% 
              v-row.mb-3(no-gutters)
                .caption.mx-auto Current
              v-row(no-gutters)
                h1.mx-auto.text-warning 11.12%
              v-row(no-gutters)
                .caption.mx-auto Predicted 
        Sparkline(
          v-for="spark in sparks"
          :title="spark.title"
          :gradient="spark.color" 
          :value="spark.sparks" 
          :labels="spark.labels"
        )
</template>

<script>
export default {
  components: { Sparkline: () => import("./statSparkline.vue")},
  data: () => ({
    sparks: [ 
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

}

</script>
