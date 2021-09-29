<template lang="pug">
  v-snackbar(id="bar" dark v-model="snackbar" tile)
    .overline.text-center(id="bar-text") {{ text }}
</template>

<script>
export default {
  data:() => ({
    snackbar: false,
    text: ""
  }),
  created(){
    this.$eventHub.$on("setSnack", (val) => {
      console.log("made it here");
      this.snackbar = true;
      this.text = val;
    })
  }
}
</script>
<style scoped>
#bar-text {
  color:chartreuse;
}

#bar {
  color: black;
}
</style>