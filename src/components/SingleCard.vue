<script>
import { store } from '../store.js'
export default {
      name: 'SingleCard',
      data() {
            return {
                  store
            }
      }
}
</script>
<template>

      <div class="container">
            <div class="row row-cols-3 gap-2">
                  <div class="col-3" v-for="movie in store.movies">
                        <div class="card card-body">
                              <h3 class="card-title">Title: {{ movie.title || movie.name }}</h3>
                              <h4 class="card-text">Original Title: {{ movie.original_title || movie.original_name }}
                              </h4>
                              <h4 class="card-text">Language:
                                    <!-- <img src="../assets/img/UKFlag.png" alt=""> -->
                                    <img :src="store.flagsChange(movie.original_language)" alt="">
                              </h4>
                              <small>Rating {{ movie.vote_average }}</small>

                        </div>
                  </div>
            </div>
      </div>

</template>
    
<style lang="scss" scoped>
.container {
      margin-top: 2rem;

      .card {
            border: 1px solid;
            height: 500px;

            img {
                  width: 50px;
            }
      }
}
</style>