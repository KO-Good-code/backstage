<!--  -->
<template>
  <div class="center opt">
    <div class="loading center">
      <span class="ani" :class="statusName"></span>
    </div>
    <i :class="classname"></i>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  props: {
    status: {
      default: 'loading'
    }
  },

  computed: {
    classname() {
      const result = {
        loading: 'el-icon-loading',
        success: 'el-icon-success',
        error: 'el-icon-error'
      }
      return result[this.status]
    },
    statusName() {
      const result = {
        loading: 'sloading',
        success: 'success',
        error: 'error'
      }
      return result[this.status]
    }
  },

  mounted() {},

  methods: {}
}

</script>
<style lang='stylus' scoped>
.opt
  position absolute
  bottom  0
.loading
  width 120px
  height 8px
  border 1px solid #eee
  overflow hidden
  justify-content start
  margin 5px 2px
  .ani
    display inline-block
    width 40px
    height 10px
    background #e6a23c
    &.sloading
      animation loading 1s infinite
    &.success
      width 100%
      background-color #67c23a
      transition width 1s
    &.error
      width 100%
      background-color red
      transition width 1s
.el-icon-success
  color #67c23a
.el-icon-loading
  color #e6a23c
.el-icon-error
  color red
@keyframes loading {
  to{
    transform translate3d(100px,0,0)
  }
  from{
    transform translate3d(-40px,0,0)
  }
}
</style>