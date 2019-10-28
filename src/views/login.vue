<template>
  <div class="login">
    <el-form size="mini" :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
      <el-form-item prop="username">
        <el-input v-model="ruleForm.username" autocomplete="off" placeholder="请输入管理员账号">
          <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off" placeholder="请输入管理员密码">
          <i slot="prefix" class="el-input__icon el-icon-lock"></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
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
      rules:{}
    }
  },
  methods: {
    submitForm() {
      
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

