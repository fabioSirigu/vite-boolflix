<script>
import { store } from '../../store.js'
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
            <div class="row row-cols-3 g-4">
                  <div class="col" v-for="movie in store.movies">
                        <div class="card">
                              <div class="no-image" v-if="movie.poster_path === null"></div>
                              <img v-else :src="store.posterUrl + store.sizePoster + movie.poster_path"
                                    class="card-img-top" :alt="movie.title">

                              <div class="card-body">
                                    <h3 class="card-title card-text">Title: {{ movie.title || movie.name }}</h3>
                                    <h4 class="card-text">Original Title: {{ movie.original_title || movie.original_name
                                    }}
                                    </h4>
                                    <h4 class="card-text">Language:

                                          <img :src="store.flagsChange(movie.original_language)" alt="" class="flag">
                                    </h4>
                                    <!-- <small>Rating: {{ store.roundedVote(movie.vote_average / 2) }} / 5</small> -->
                                    <div class="stars card-text">
                                          <h4>Voto:</h4>
                                          <h4 v-if="movie.vote_average === 0"> UNRATED </h4>
                                          <img v-else src="img/favorite.png" alt=""
                                                v-for="star in store.roundedVote(movie.vote_average / 2)">
                                    </div>
                                    <div class="overview" v-show="movie.overview !== ''">
                                          <h4>Description</h4>
                                          <p>{{ movie.overview }}</p>
                                    </div>


                              </div>
                        </div>
                  </div>
            </div>
      </div>

</template>
    
<style lang="scss" scoped>
.container {
      margin: 2rem;

      .row {
            flex-wrap: nowrap;
      }

      .col {
            height: 520px;

            .card {
                  border: 3px solid whitesmoke;
                  border-radius: 0.5rem;
                  height: 100%;
                  position: relative;
                  /* background-color: rgb(141, 141, 141); */




                  .no-image {
                        height: 100%;
                        background-color: black;

                  }

                  img.card-img-top {
                        height: 100%;
                        object-fit: cover;

                  }

                  .card-body {
                        position: absolute;
                        height: 100%;
                        padding: 0.8rem;
                        display: none;
                        font-weight: bold;
                        overflow-y: auto;

                        img.flag {
                              width: 35px;
                        }

                        .card-text {
                              font-weight: bold;
                              padding: 0.8rem 0;
                        }

                        .stars {
                              img {
                                    width: 30px
                              }
                        }

                        .overview {
                              padding: 2rem 0;
                        }
                  }

                  &:hover .card-img-top,
                  &:hover .no-image {
                        opacity: 0.4;
                  }

                  &:hover .card-body {
                        display: block;
                  }


            }
      }

}
</style>