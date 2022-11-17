<script>
import { store } from '../../store.js'
export default {
      name: 'SearchBox',
      data() {
            return {
                  store
            }
      }
}
</script>
<template>
      <div class="searchBox text-center">
            <input v-model="store.params.query" class="form-control form-control-lg" type="search"
                  placeholder="Search Movie!" @keyup.enter="store.searchMovies()">
            <button class="btn btn-primary" @click="store.searchMovies()">Search</button>
      </div>
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