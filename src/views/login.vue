<template>
  <div class="login">
    <el-form size="mini" :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
      <el-form-item prop="username">
        <el-input v-model="ruleForm.username" autocomplete="off" placeholder="请输入管理员账号">
          <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="passward">
        <el-input type="password" v-model="ruleForm.passward" autocomplete="off" placeholder="请输入管理员密码">
          <i slot="prefix" class="el-input__icon el-icon-lock"></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      ruleForm: {},
      rules:{
        username: { required: true, message: '请输入用户姓名', trigger: 'blur' },
        passward: { required: true, message: '请输入密码', trigger: 'blur' },
      }
    }
  },
  methods: {
    async submitForm() {
      try {
        let body = this.ruleForm
        const res = await this.$http.login({body})
        if(res.code == 200) {
          sessionStorage.setItem('AUTH_TOKEN',res.userInfo_token)
          this.$router.push({name:'home'})
        }else{
          this.$message.error(res.msg)
        }
      } catch (error) {
        console.log(error)
      }
    },

    login() {
      this.$refs['ruleForm'].validate((valid) => {
        if (!valid) {
            return false
        }
        this.submitForm()
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.login
  width 200px
  height 130px
  padding 20px
  position absolute
  border 1px solid #fff
  border-radius 4px
  left 0
  top 0
  right 0
  bottom 0
  margin auto
  background-color rgba(0,0,0,.5)
</style>

