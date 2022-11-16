import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
      movies: null,
      url: 'https://api.themoviedb.org/3/search/movie',
      params: {
            appKey: 'bf0adbbc7cc3cff932de6b4b6b5eef10',
            query: ''
      },
      callApi: (url) => {
            axios.get(url)
                  .then(response => {
                        console.log(response.data.results);
                        store.movies = response.data.results

                  })
                  .catch(err => {
                        store.error = err.message
                  })
      },
      searchMovies() {
            let moviesUrl = store.callApi(`${store.url}?api_key=${store.params.appKey}&query=${store.params.query}`)
            if (store.params.query !== '') {
                  const selectMovies = store.params.query

                  moviesUrl = store.callApi(`${store.url}?api_key=${store.params.appKey}&query=${selectMovies}`)
            }
            store.callApi(moviesUrl)

      },
      /* inputFunction() {
            console.log('input log');

      } */
})