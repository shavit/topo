<template lang="html">
  <div class="EventList content-between">
    <div
      v-for="(item) in events"
      :key="item"
      @newEventList="events = $event">
      <div class="max-w-md w-full mb-6 lg:flex">
        <div
          class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style="background-image: url('https://images.unsplash.com/photo-1547152850-11ac68bbe48f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=620&q=20')"
          title="Landscape" />
        <div class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div class="mb-8">
            <p class="text-sm text-grey-dark flex items-center">
              <svg
                class="fill-current text-grey w-3 h-3 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20">
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
              Item {{ item }}
            </p>
            <div class="text-black font-bold text-xl mb-2">Event number {{ item }}</div>
            <p class="text-grey-darker text-base">Hit or miss, I guess they never miss, huh?</p>
            <p class="text-base">We all have regrets sometimes, we wish to go back in time, is that why you tried to quit three times? They want you at work, so, girl, go do your job.</p>
          </div>
          <div class="flex items-center">
            <img
              class="w-10 h-10 rounded-full mr-4"
              src="https://images.unsplash.com/photo-1547131303-2ea002d9598d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=120&q=10"
              alt="Avatar of Poppy">
            <div class="text-sm">
              <p class="text-black leading-none">Tigger Kanga</p>
              <p class="text-grey-dark">Aug 25</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [1, 2, 3, 4, 5]
    }
  }
}
</script>

<style lang="css">
</style>
