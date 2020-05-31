<template>
  <div>
    <h1>New taskgroup</h1>
    <div>
      <label>Name:</label>
      <input type="text" v-model="name" />
    </div>
    <div>
      <label>Description:</label>
      <input type="text" v-model="description" />
    </div>
    <div>
      <label>Frequence type:</label>
      <input type="text" v-model="frequence_type" />
    </div>
    <button @click="createTaskgroup(name, description, frequence_type)">New Taskgroup</button>
    <button @click="goToTaskgroup()">Voltar</button>
  </div>
</template>

<script>
import { createTaskgroupApi } from './../../../services/api'
export default {
  data() {
    return {
      name: "",
      description: "",
      frequence_type: ""
    }
  },
  methods: {
    createTaskgroup(name, description, frequence_type) {
      createTaskgroupApi({ name, description, frequence_type }).then(
        result => this.$router.push({ name: 'listTaskGroup' }),
        error => console.error(error.response.data.error_message)
      )
    },
    goToTaskgroup() {
      this.$router.push({ name: 'listTaskGroup' })
    }
  }
}
</script>

<style>

</style>
