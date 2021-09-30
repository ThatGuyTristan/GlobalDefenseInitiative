<template lang="pug">
  v-card-text
    v-row
      v-col(cols="2")
        h3 Date
      v-col
        h3 Report
    template
      v-divder
    v-row(style="border-top:1px solid green")
      v-col(style="border-left: 1px solid green" cols="2")
        caption {{ date }}
      v-col(style="border-right: 1px solid green")
        .caption {{ body }}

</template>

<script>
export default {
  props: {
    date: { type: String, default: null },
    body: { type: String, default: null }
  }
}
</script>
