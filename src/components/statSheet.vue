<template lang="pug">
  v-sheet.py-5.mx-auto(width="150" outlined)
    div.text-center
      v-progress-circular(size="100" :value="value" :color="color") {{ value }} %
      h4.mt-5 {{ label }}
</template>

<script>
export default {
  props: {  
    color: { type: [String, Number], default: null },
    label: { type: [String, Number], default: null },
    value: { type: [String, Number], default: null }
  }
}
</script>
