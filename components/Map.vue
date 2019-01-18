<template>
  <div
    :id="'map-container'"
    class="Map">
    <p>Map</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      accessToken: process.env.MAPBOX_TOKEN,
    }
  },
  mounted(){
    this.$mapbox()
  }
}
</script>

<style>
.Map{
  background: #efefef;
  height: 100%;
  margin: 0 auto;
  min-height: 40vh;
  width: 100%;
}
</style>
