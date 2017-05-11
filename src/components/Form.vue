<template>
  <form id="form">
    <div class="first_name">
      <input type="text" name="firstName" v-model="newUser.firstName" placeholder="First Name">
    </div>
    <div class="last_name">
      <input type="text" name="lastName" v-model="newUser.lastName" placeholder="Last Name">
    </div>
    <div class="email">
      <input type="email" name="email" v-model="newUser.email" placeholder="Email">
    </div>
    <div class="phone_number">
      <input type="tel" name="phone" v-model="newUser.phone" placeholder="Phone">
    </div>
    <div class="button">
      <button type="submit" v-on:click.stop.prevent="addContact" v-bind:disabled="!isValid">Submit</button>
    </div>
  </form>
</template>

<script>
  import firebase from 'firebase'

  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyCgtDEzJcYADWldbvQ0HISrW8ZZEuprsCQ',
    authDomain: 'network-f45f2.firebaseapp.com',
    databaseURL: 'https://network-f45f2.firebaseio.com',
    projectId: 'network-f45f2',
    storageBucket: 'network-f45f2.appspot.com',
    messagingSenderId: '479984077667'
  }

  firebase.initializeApp(config)

  var usersRef = firebase.database().ref('users')

  export default {
    name: 'hello',
    data () {
      return {
        newUser: {
          firstName: '',
          lastName: '',
          email: '',
          phone: ''
        }
      }
    },
    // firebase binding
    // https://github.com/vuejs/vuefire
    firebase: {
      users: usersRef
    },
    methods: {
      addContact () {
        usersRef.push(this.newUser)
        this.firstName = ''
        this.lastName = ''
        this.email = ''
        this.phone = ''
      }
    },
    computed: {
      isValid: function () {
        return this.firstName !== '' && this.lastName !== '' && this.email !== ''
      }
    }
  }
</script>
