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
export default {
  data() {
    return {
      username: "registered_user1",
      password: "111"
    }
  },
  methods: {
    doLogin(username, password) {
      const baseURL = "https://edimossilva-task-manager.herokuapp.com/auth/login"
      const params = { username, password }

      this.$http.post(baseURL, params).then(
        result => console.log(result.data),
        error => console.log(error.response.data.error_message)
      )
    }
  }
}
</script>

<style>

</style>
