<template>
  <section class="container">
    <EventList />
  </section>
</template>

<script>
import EventList from '~/components/events/EventList.vue'

export default {
  components: {
    EventList
  }
}
</script>

<style>

/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.container {
  min-height: 100vh;
}

</style>
