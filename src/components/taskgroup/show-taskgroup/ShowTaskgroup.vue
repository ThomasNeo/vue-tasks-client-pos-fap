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

    <ul>
      <li v-for="taskitem in formattedTaskitems" :key="taskitem.id">
        <label for="task_checked">Checked: {{taskitem.checked}}</label>
        <br />
        <label for="task_name">Name: {{taskitem.name}}</label>
        <br />
        <label for="task_description">Description: {{taskitem.description}}</label>
        <br />
        <br />
      </li>
    </ul>
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
  },
  methods: {
    formatTaskItem(taskitem) {
      return {
        id: taskitem.task.id,
        checked: taskitem.checked,
        name: taskitem.task.name,
        description: taskitem.task.description,
      }
    }
  },
  computed: {
    formattedTaskitems: function() {
      if (!this.taskgroup.task_in_lists) {
        return []
      }

      const { task_in_lists: taskItems } = this.taskgroup

      return taskItems.map(this.formatTaskItem);
    }
  }
};
</script>

<style>

</style>
