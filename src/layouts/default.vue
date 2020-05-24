<template>
  <div>
    <TheHeader />
    <main class="container-fluid">
      <nuxt />
    </main>
  </div>
</template>


<script>

import TheHeader from '../components/common/TheHeader.vue'

export default {

  components: {
    TheHeader
  }
}
</script>
