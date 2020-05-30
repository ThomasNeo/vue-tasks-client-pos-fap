<template>
  <div>
    <h1>List taskgroup</h1>
    <ul>
      <li v-for="taskgroup in taskgroups" :key="taskgroup.id">
        <router-link
          :to="{ name: 'showTaskGroup', params: { id: taskgroup.id } }">
            {{taskgroup.name}}
        </router-link>
      </li>
    </ul>
    <button @click="doLogout()">Logout</button>
  </div>
</template>

<script>
import { getTaskgroupsApi } from './../../../services/api'
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
   }
 }
}
</script>

<style>

</style>
