<template>
  <div>
    <h1>Show Taskgroup - id: {{ id }}</h1>

    <label for="id">Id: {{taskgroup.id}}</label>
    <br />
    <label for="name">Name: {{taskgroup.name}}</label>
    <br />
    <label for="description">Description: {{taskgroup.description}}</label>
    <br />
    <label for="frequence_type">Frequence Type: {{taskgroup.frequence_type}}</label>
    <br />
  </div>
</template>

<script>
import { getTaskgroupApi } from './../../../services/api'
export default {
  props: ['id'],
  data() {
    return {
      taskgroup: {}
    }
  },
  mounted: function() {
    getTaskgroupApi(this.id).then(response => {
      this.taskgroup = response.data.data
    })
  }
};
</script>

<style>

</style>
