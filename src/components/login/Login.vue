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
      username: "registered_user1",
      password: "111"
    }
  },
  methods: {
    doLogin(username, password) {
      doLoginApi(username, password).then(
        result => {
          console.log(result.data)
          localStorage.token = result.data.token
        },
        error => console.error(error.response.data.error_message)
      )
    }
  }
}
</script>

<style>

</style>
