<script>
import { store } from '../store.js'
import SingleCard from './SingleCard.vue'
export default {
      name: 'AppHeader',
      components: {
            SingleCard
      },
      data() {
            return {
                  store
            }
      }
}
</script>
<template>
      <div class="searchBox">
            <input v-model="store.params.query" class="form-control form-control-lg" type="search"
                  placeholder="Search Movie!">
            <button class="btn btn-primary" @click="store.searchMovies()">Search</button>
      </div>
      <SingleCard />

</template>
    
<style lang="scss" scoped>
.searchBox {
      padding: 1rem;

      input {
            width: fit-content;
            display: inline-block;
            margin-right: 1rem;

      }
}
</style>