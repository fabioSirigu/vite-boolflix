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
      <footer class="text-center">
            <div class="logo">
                  <img src="/img/logo.png" alt="">
            </div>
            <div>
                  <strong class="credits">Powered by NazOne</strong>
            </div>
      </footer>

</template>
    
<style lang="scss" scoped>
footer {
      background-color: black;
      width: 100%;
      height: 150px;
      display: flex;
      align-items: center;
      position: fixed;
      bottom: 0;
      z-index: 999;
      justify-content: center;
      flex-direction: column;
      box-shadow: 0px 2px 18px 2px #1d1d1d;

      .logo {
            img {
                  width: 150px;
                  padding: 1rem 0;
            }
      }

      .credits {
            color: white;

      }
}
</style>