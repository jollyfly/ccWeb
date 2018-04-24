<template>
  <el-form :model="loginData" status-icon ref="loginData" label-width="70px"
           class="demo-ruleForm" label-position="left">
    <el-form-item label="用户名" prop="username">
      <el-input v-model.number="loginData.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="loginData.pass" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm()">提交</el-button>
      <el-button @click="resetForm('loginData')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    data() {



      return {
        loginData: {
          pass: '123456',
          username: 'wan'
        }
      };
    },
    methods: {
      submitForm() {
        console.log("success")

        this.axios.post('/login.json',this.loginForm).then((response) => {
          console.log(response.message)
        })


      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>
