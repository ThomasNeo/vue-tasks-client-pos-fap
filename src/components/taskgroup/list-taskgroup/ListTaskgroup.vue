<template>
  <div>
    <h1>List taskgroup</h1>
    <ul>
      <li v-for="taskgroup in taskgroups" :key="taskgroup.id">
        <router-link
          :to="{ name: 'showTaskGroup', params: { id: taskgroup.id } }">
            {{taskgroup.name}}
        </router-link>
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        <button @click="deleteTaskgroup(taskgroup.id)">Delete</button>
      </li>
    </ul>
    <button @click="newTaskgroup()">New taskgroup</button>
    <br />
    <br />
    <br />
    <br />
    <button @click="doLogout()">Logout</button>
  </div>
</template>

<script>
import { getTaskgroupsApi, deleteTaskgroupApi } from './../../../services/api'
export default {
 data() {
   return {
     taskgroups: []
   }
 },
 mounted: function() {
   getTaskgroupsApi().then(response => {
     this.taskgroups = response.data.data
   })
 },
 methods: {
   doLogout() {
     localStorage.removeItem('token')
     this.$router.push({ name: 'login' })
   },
   newTaskgroup() {
     this.$router.push({ name: 'createTaskGroup' })
   },
   deleteTaskgroup(id) {
     deleteTaskgroupApi(id).then(
       result => {
         console.log('Deletado'),
         this.$router.go()
        },
       error => console.error('Deu errado!'))
   }
 }
}
</script>

<style>

</style>
