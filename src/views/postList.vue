<!--  -->
<template>
  <div class="postList" v-loading="loading">
    <el-table
    :data="data"
    size="mini"
    border
    style="width: 100%">
    <el-table-column
      type="index"
      label="id">
    </el-table-column>
    <el-table-column
      prop="title"
      label="标题">
    </el-table-column>
    <el-table-column
      prop="tags"
      label="标签">
    </el-table-column>
    <el-table-column
      label="最后修改时间">
      <template slot-scope="scope">
        {{scope.row.time | date}}
      </template>
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="remove(scope.row.id)" type="text" size="small">删除</el-button>
        <el-button  @click="editPost(scope.row.id)" type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: null,
      loading: false
    };
  },

  components: {},

  computed: {},

  created() {
    this.getData()
  },

  methods: {
    async getData(){
      try {
        this.loading = true
        let params = {
          pageSize:1
        }
        const res = await this.$http.getPostList({params})
        this.data = res.data
        this.loading = false
      } catch (error) {
        this.loading = false
      }
    },

    remove(id) {
      let cid = id
      this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.delPost(cid)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })      
        })
    },

    editPost(id){
      this.$router.push({name:'edit',query:{id:id}})
    },

    async delPost(id) {
      try {
        let body = {
          data:{
            post_id:id
          }
        }
        const res = await this.$http.delPost({body})
        if(res.code == 200) {
          this.$message.success(res.msg)
          this.getData()
        }else{
          this.$message.error(res.msg)
        }
      } catch (error) {
        // console.log(error)
      }
    }
  }
}

</script>
<style lang='stylus' scoped>

</style>