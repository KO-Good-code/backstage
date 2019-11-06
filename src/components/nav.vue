<template>
  <div class="navs">
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      router
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>博客数据</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/home">博客帖子列表</el-menu-item>
          <el-menu-item index="/home/edit">新增/编辑博客</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.navs
  width 150px
  height 100%
  .el-menu
    height 100%
  .el-submenu .el-menu-item
    min-width 100px
</style>
