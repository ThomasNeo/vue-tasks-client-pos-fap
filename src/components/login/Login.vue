<template>
  <div>
    <h1>Login</h1>
    <div>
      <label>Username:</label>
      <input type="text" @input="username = $event.target.value" />
    </div>
    <div>
      <label>Password:</label>
      <input type="password" @input="password = $event.target.value" autocomplete="new-password" />
    </div>
    <button>Login</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    }
  }
}
</script>

<style>

</style>
