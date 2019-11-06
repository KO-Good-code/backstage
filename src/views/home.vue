<template>
  <div class="home">
    <header class="center">
      <h4>Negri博客管理后台</h4>
    </header>
    <main class="center main">
      <navs/>
      <div class="data">
        <router-view/>
      </div>
    </main>
  </div>
</template>


<script>
import navs from '@/components/nav.vue'

export default {
  name: 'home',
  data() {
    return {
      data: [],
      
    }
  },

  components:{
    navs
  },

  created() {
  },

  methods: {
    
  }
}
</script>

<style scoped lang="stylus">
.home
  height 100%
  .main
    flex 1
    height calc(100% - 52px)
    justify-content flex-start
    align-items flex-start
  .data
    flex 1
    height calc(100% - 52px)
    padding 20px
    overflow auto
    background-color #f6f6f6
  header
    height 50px
    border-bottom 1px solid #f6f6f6
    box-shadow 0px 2px 5px rgba(41, 12, 127, 0.2)
    
</style>