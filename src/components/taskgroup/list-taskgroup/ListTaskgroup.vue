<template>
  <div>
    <h1>List taskgroup</h1>
    <ul>
      <li v-for="taskgroup in taskgroups" :key="taskgroup.id">
        {{taskgroup.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import { getTaskgroupApi } from './../../../services/api'
export default {
 data() {
   return {
     taskgroups: []
   }
 },
 mounted: function() {
   getTaskgroupApi().then(response => {
     this.taskgroups = response.data.data
   })
 }
}
</script>

<style>

</style>
