<template>
  <div class="home">
    <header class="center">
      <h4>Negri博客管理后台</h4>
      <span class="center">当前版本:1.0.0</span>
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
  background-color #f6f6f6
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
  header
    height 50px
    border-bottom 1px solid #f6f6f6
    box-shadow 0px 2px 5px rgba(41, 12, 127, 0.2)
    justify-content space-between
    padding 0 20px
    background-color #fff
</style>