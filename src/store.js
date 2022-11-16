import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
      url: 'https://api.themoviedb.org/3/search/company',
      params: {
            appKey: 'bf0adbbc7cc3cff932de6b4b6b5eef10',
            query: 'Matrix'
      },
      callApi: (url) => {
            axios.get(url)
                  .then(response => {
                        console.log(response.data);


                  })
                  .catch(err => {
                        store.error = err.message
                  })
      }
})