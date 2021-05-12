<!--  -->
<template>
  <div class="edit">
    <el-form size="mini" :model="form" status-icon :rules="rules" label-width="80px" ref="form">
      <el-form-item prop="title" label="标题">
        <el-input v-model="form.title" autocomplete="off" placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item prop="tags" label="标签">
        <el-input v-model="form.tags" autocomplete="off" placeholder="请输入标签"></el-input>
      </el-form-item>
      <el-form-item prop="contant" label="内容">
        <mavon-editor ref="editor" v-model="form.contant"> </mavon-editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">保存</el-button>
      </el-form-item>
    </el-form>
    
  </div>
</template>

<script>
import {mavonEditor} from "mavon-editor";
import "mavon-editor/dist/css/index.css";
export default {
  data () {
    return {
      form:{},
      rules: {
        title: { required: true, message: '请输入标题', trigger: 'blur' },
        tags: { required: true, message: '请输入标签', trigger: 'blur' },
        contant: { required: true, message: '请输入密码', trigger: 'blur' },
      },
      flag: false,
      wid: this.$route.query.id
    };
  },

  components: {mavonEditor},

  created() {
    if(this.wid){
      this.flag = true
      this.getData()
    }
  },

  methods: {
    // update post
    async edit() {
      try {
        let body = {
          id:this.wid,
          ...this.form
        }
        const res = await this.$http.updatePost({body})
        if(res.code == 200) {
          this.$message.success(res.msg)
        }else{
          this.$message.error(res.msg)
        }
      } catch (error) {
        console.log(error)
      }
    },

    // add post
    async addMarkdown() {
      try {
        let body = this.form
        const res = await this.$http.insertPost({body})
        if(res.code == 200) {
          this.$message.success(res.msg)
        }else{
          this.$message.error(res.msg)
        }
      } catch (error) {
        console.log(error)
      }
    },

    submit() {
      this.$refs['form'].validate((valid) => {
        if (!valid) {
            return false
        }
        if(this.flag) {
          this.edit()
        }else{
          this.addMarkdown()
        }
      })
      
    },

    //Obtain post data
    async getData(){
      try {
        let params = {
          post_id:this.wid
        }
        const res = await this.$http.getPost({params})
        this.form = res.data;
        // if(res.code == 200) {
        //   this.$message.success(res.msg)
        // }else{
        //   this.$message.error(res.msg)
        // }
      } catch (error) {
        console.log(error)
      }
    }
  }
}

</script>
<style lang='stylus' scoped>
</style>