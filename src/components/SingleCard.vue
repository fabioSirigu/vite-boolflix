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
            <div class="row row-cols-4 g-1">
                  <div class="col" v-for="movie in store.movies">
                        <div class="card">
                              <img :src="store.posterUrl + store.sizePoster + movie.poster_path" class="card-img-top"
                                    :alt="movie.title">

                              <div class="card-body">
                                    <h3 class="card-title">Title: {{ movie.title || movie.name }}</h3>
                                    <h5 class="card-text">Original Title: {{ movie.original_title || movie.original_name
                                    }}
                                    </h5>
                                    <h6 class="card-text">Language:

                                          <img :src="store.flagsChange(movie.original_language)" alt="" class="flag">
                                    </h6>
                                    <small>Rating: {{ store.roundedVote(movie.vote_average / 2) }} / 5</small>
                                    <div class="stars">
                                          <img src="img/favorite.png" alt=""
                                                v-for="star in store.roundedVote(movie.vote_average / 2)">
                                    </div>

                              </div>
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
            height: 800px;

            img.card-img-top {
                  width: 100%;
            }

            img.flag {
                  width: 50px;
            }

            .stars {

                  img {
                        width: 30px
                  }


            }
      }
}
</style>