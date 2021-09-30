 <template lang="pug">
  v-card.py-3.mx-auto(tile dark)
    v-card-title.text-center
      div.text-center.mx-auto
        h3.mx-auto Personnel Staffing Levels 
        .caption.mb-2 Updated Monthly
    v-card-text
      v-row
        Sparkline.ma-3(
          v-for="stat in stats"
          type="bar"
          tag="" 
          :title="stat.title" 
          :subtitle="stat.subtitle"
          :gradient="stat.color" 
          :labels="stat.labels" 
          :value="stat.sparks"
        )
</template>

<script>
import Sparkline from "./statSparkline"

export default {
  components: { Sparkline },
  data: () => ({
      stats: [ 
        {  
          title: "Scientific",
          subtitle: "Research, Development, Testing",
          sparks: [ 15, 20, 10, 5, 30 ],
          labels: [ 'Interviewed', 'Recruited', 'In Training',  'Certified', 'Active'],
          color: ['blue', 'green']
        },
        {  
          title: "Environmental",
          subtitle: "Field Research and Containment",
          sparks: [ 5, 10, 10, 0, 75 ],
          labels: [ 'Interviewed', 'Recruited', 'In Training',  'Certified', 'Active'],
          color: ['green lighten-4', 'green']
        },
        {  
          title: "Practical",
          subtitle: "Civilian Staff",
          sparks: [ 15, 20, 20, 20, 25 ],
          labels: [ 'Interviewed', 'Recruited', 'In Training',  'Certified', 'Active'],
          color: ['yellow', 'green']
        },
        {  
          title: "Military",
          subtitle: "Special Operations and Security",
          sparks: [ 3, 7, 20, 10, 60 ],
          labels: [ 'Interviewed', 'Recruited', 'In Training',  'Certified', 'Active'],
          color: ['gold', 'green']
        },
      ]
  })
}


</script>
