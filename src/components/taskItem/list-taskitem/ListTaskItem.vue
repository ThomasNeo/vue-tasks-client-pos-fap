<template>
  <div>
    <h1>List Taskitem</h1>

    <br />
    <label for="taskItemsOverview">{{taskItemsOverview}}</label>
    <ul>
      <li v-for="taskitem in formattedTaskitems" :key="taskitem.id">
        <label for="task_checked">Checked:</label>
        <input type="checkbox" v-model="taskitem.checked"  @click="updateTaskitem(taskitem)"/>
        <br />
        <label for="task_name">Name: {{taskitem.name}}</label>
        <br />
        <label for="task_description">Description: {{taskitem.description}}</label>
        <br />
        <button @click="deleteTaskitem(taskitem.task_id)">Delete</button>
        <br />
        <br />
      </li>
    </ul>
  </div>
</template>

<script>
import { updateTaskitemApi, deleteTaskApi } from './../../../services/api'
import { mapState, mapMutations } from 'vuex';
export default {
  computed: {
    ...mapState(["taskitems"]),
    formattedTaskitems: function() {
      const { taskitems, formatTaskItem } = this



      return taskitems.map(formatTaskItem);
    },
    taskItemsOverview: function() {
      const { formattedTaskitems, isTaskItemChecked } = this
      const totalCount = formattedTaskitems.length
      const checkedCount = formattedTaskitems.filter(isTaskItemChecked).length

      return `${checkedCount} of ${totalCount} task items are checked`
    }
  },
  methods: {
    ...mapMutations(['setTaskitem']),
    formatTaskItem(taskitem) {
      return {
        id: taskitem.id,
        checked: taskitem.checked,
        name: taskitem.task.name,
        description: taskitem.task.description,
        task_id: taskitem.task.id
      }
    },
    isTaskItemChecked(taskitem) {
      return taskitem.checked
    },
    updateTaskitem(taskitem) {
      const mutableTaskItem = {
        id: taskitem.id,
        checked: !taskitem.checked
      }

      updateTaskitemApi(mutableTaskItem).then(result => {
        this.setTaskitem(mutableTaskItem)
      })
    },
    deleteTaskitem(taskitemID) {
      deleteTaskApi(taskitemID).then(
        result => this.$router.go(),
        error => console.error(error.response.data.error_message)
      )
    }
  },
}
</script>

<style>

</style>
