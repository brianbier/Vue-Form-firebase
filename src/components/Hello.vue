<template lang="html">
  <div class="">
    <button type="button" @click="addProject()">Add new project</button>
    <table class="table">
      <thead>
        <tr>
          <th>User ID</th>
          <th>Tittle</th>
          <th>Body</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in projects">
          <td>{{item.userId}}</td>
          <td>{{item.title}}</td>
          <td>{{item.body}}</td>
          <button type="button" @click="toggle(item)">
            <p> v-if item completed X</p>
            <p> v-elss item Not completed -</p>
          </button>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: ['item'],
  name: 'projectList',
  computed: mapState([
    'projects'
  ]),
  methods: {
    addProject () {
      this.$store.dispatch('ADD_NEW_PROJECT')
    },
    toggle (item) {
      this.$store.dispatch('TOGGLE_COMPLETED', { item: item })
    }
  },
  mounted () {
    this.$store.dispatch('LOAD_PROJECT_LIST')
  }
  // The above is a helper for the below
  // projects () {
  //   return this.$store.state.projects
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
