<template>
  <div class="login">
    <label for="account" class="account">帳號
      <input v-model="form.id" type="text" placeholder="請輸入用戶帳號">
    </label>
    <label for="password" class="password">密碼
      <input v-model="form.pwd" type="password" placeholder="請輸入密碼">
    </label>
    <button type="btn" class="btn" @click="login">登入</button>
  </div>
</template>

<script>

import * as test from '@/api/login'

export default {
  name: 'Login',
  data() {
    return {
      form: {
        id: '',
        pwd: '',
        app_ver: '',
        os_ver: ''
      }
    }
  },
  methods: {
    async login() {
      const vm = this
      const info = await test.login(vm.form)
      if (!info.is_ok) {
        alert(info.err_msg)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  label {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  input {
    height: 28px;
    width: 150px;
    margin: 5px;
    padding: 2px 2px 2px 4px;
  }
  .btn {
    cursor: pointer;
  }
}
</style>
