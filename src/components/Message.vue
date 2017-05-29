<template>
  <div class="contact_container">
    <div>
      <contact-form></contact-form>
    </div>
    <div class="contact_list">
      <ul>
        <single-contact :contact="users"></single-contact>
      </ul>
    </div>
  </div>
</template>

<script>
import Form from './Form'
import Contact from './Contact'
// import Vue from 'vue'
import firebase from 'firebase'
import { mapGetters } from 'vuex'
// import vuefire from 'vuefire'
// Vue.use(vuefire)
// Initialize Firebase

var usersRef = firebase.database().ref('users').orderByKey()

export default {
  data () {
    return {
      users: ''
    }
  },
  firebase: {
    users: usersRef
  },
  components: {
    'contact-form': Form,
    'single-contact': Contact
  },
  computed: {
    ...mapGetters([
      'projects'
    ])
  }
}
</script>

<style>
ul{
  padding: 0;
}
</style>
