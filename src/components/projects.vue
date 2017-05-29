<template lang="html">
  <article class="message">
    <div class="message-header">
      <p>Project Status:</p>
    </div>
    <div class="message-body">
      <div class="control">
        <span class="tag is-info">Number of projects: {{projectCount}}</span>
      </div>
      <div class="control">
        <span class="tag is-success">Completed: {{completedProjects}}</span>
      </div>
    </div>
  </article>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'projectList',
  computed: {
    ...mapGetters([
      'completedProjects',
      'projectCount'
    ])
  }
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
