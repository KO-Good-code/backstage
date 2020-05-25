<template>
  <div class="navs">
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      router
      background-color="#001529"
      text-color="#eee"
      active-text-color="#409EFF">
      <el-submenu index="/">
        <template slot="title">
          <i class="el-icon-reading"></i>
          <span>博客数据</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/home">博客帖子列表</el-menu-item>
          <el-menu-item index="/home/edit">新增/编辑博客</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/home/project">
        <i class="el-icon-folder-opened"></i>
        <span>项目文件</span>
      </el-menu-item>
      <el-menu-item index="/home/fund">
        <i class="el-icon-s-marketing"></i>
        <span>基金记录</span>
      </el-menu-item>
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
  width 220px
  height 100%
  .el-menu
    height 100%
  .el-submenu .el-menu-item
    min-width 100px

  
</style>
