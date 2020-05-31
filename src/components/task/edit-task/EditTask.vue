<template>
  <div>
    <h1>Edit task name - id: {{ idtask }}</h1>
    <div>
      <label>Name:</label>
      <input type="text" v-model="name" />
    </div>
    <button @click="updateTask(name)">Edit Task</button>
  </div>
</template>

<script>
import { updateTaskApi } from './../../../services/api'
export default {
  props: ['idtask'],
  data() {
    return {
      name: ""
    }
  },
  methods: {
    updateTask(name) {
      const { idtask } = this
      updateTaskApi(idtask, name).then(
        result => this.$router.push({ name: 'listTaskGroup'}),
        error => console.error(error.response.data.error_message)
      )
    }
  }
}
</script>

<style>

</style>
