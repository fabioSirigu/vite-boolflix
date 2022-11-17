<script>
import { store } from '../store.js'
import SingleCard from './layouts/SingleCard.vue'
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
      <main>
            <SingleCard />
      </main>

</template>
    
<style lang="scss" scoped>
main {
      background-color: rgb(0, 0, 0);
      margin-top: 500px;
      padding-top: 50px;
      position: relative;
      z-index: 1;
}
</style>