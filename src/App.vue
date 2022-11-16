<script>
import { store } from './store.js'
export default {
  name: 'App',
  data() {
    return {
      store
    }
  },
  mounted() {
    store.callApi(`${store.url}?api_key=${store.params.appKey}&query=${store.params.query}`)
  }
}
</script>

<template>

</template>

<style scoped>

</style>
