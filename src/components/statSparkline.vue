<template lang="pug">
  v-card.py-3.mx-auto(width="450" outlined)
    v-card-title.text-center
      h4 {{ title }}
    v-card-text
      v-sparkline(auto-draw show-labels :value="value" :gradient="gradient" :labels="labels")
</template>

<script>
export default {
  props: {  
    title: { type: String, default: null },
    gradient: { type: Array, default: () => [] },
    labels: { type: Array, default: () => [] },
    value: { type: Array, default: () => [] }
  },
  created(){
    console.log(this.title, this.gradient, this.labels, this.value)
  }
}
</script>