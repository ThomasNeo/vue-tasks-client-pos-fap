<template>
  <div>
    <h1>Login</h1>
    <div>
      <label>Username:</label>
      <input type="text" v-model="username" />
    </div>
    <div>
      <label>Password:</label>
      <input type="password" v-model="password" autocomplete="new-password" />
    </div>
    <button @click="doLogin(username, password)">Login</button>
  </div>
</template>

<script>
import { doLoginApi } from '../../services/api'

export default {
  data() {
    return {
      username: "thomas",
      password: "123456"
    }
  },
  methods: {
    doLogin(username, password) {
      doLoginApi(username, password).then(
        result => {
          localStorage.token = result.data.token
          this.$router.push({ name: 'listTaskGroup' })
        },
        error => console.error(error.response.data.error_message)
      )
    }
  }
}
</script>

<style>

</style>
