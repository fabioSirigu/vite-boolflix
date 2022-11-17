<script>
import SearchBox from './layouts/SearchBox.vue'
export default {
      name: 'AppHeader',
      components: {
            SearchBox
      }
}
</script>
<template>
      <header class="text-center">
            <div class="logo">
                  <img src="/img/logo.png" alt="">
            </div>
            <h3>Il meglio dei Film e delle Serie TV a portata di click!</h3>
            <SearchBox />
      </header>

</template>
    
<style lang="scss" scoped>
header {
      background-image: url('/img/cinema.jpg');
      background-size: cover;
      position: fixed;
      width: 100%;
      height: 500px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      top: 0;
      z-index: 10000;
      box-shadow: 0px 2px 18px 2px #1d1d1d;

      .logo {
            img {
                  width: 300px;
                  padding: 1rem 0;
            }
      }

      h3 {
            color: white;
      }
}
</style>