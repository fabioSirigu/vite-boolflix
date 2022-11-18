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
      margin-top: 300px;
      padding-top: 50px;
      position: relative;
      z-index: 1;
      height: calc(100vh - 450px);
      overflow-x: scroll;
      display: flex;
      align-items: center;

}
</style>