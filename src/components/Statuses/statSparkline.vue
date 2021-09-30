<template lang="pug">
  v-card.py-3.mx-auto(width="450" outlined)
    v-card-title.text-center
      h4.mx-auto {{ title }}
      .caption.mx-auto {{ subtitle }}
    v-card-text
      v-sparkline(
          :auto-draw="autodraw" 
          show-labels
          :type="type" 
          :value="value" 
          :gradient="gradient" 
          :labels="labels"
        )
        template(v-slot:label="item") {{ item.value }} {{ tag }}
</template>

<script>
export default {
  props: {  
    autodraw: { type: Boolean, default: true },
    tag: { type: String, default: "M" },
    type: { type: String, default: "trend"},
    title: { type: String, default: null },
    subtitle: { type: String, default: null },
    gradient: { type: Array, default: () => [] },
    labels: { type: Array, default: () => [] },
    value: { type: Array, default: () => [] }
  },
}
</script>