<template>
<div class="form-container">
  <form id="form">
    <div class="input_container">
      <input type="text" name="firstName" v-model="newUser.firstName" placeholder="First Name">
    </div>
    <div class="input_container">
      <input type="text" name="lastName" v-model="newUser.lastName" placeholder="Last Name">
    </div>
    <div class="input_container">
      <input type="email" name="email" v-model="newUser.email" placeholder="Email">
    </div>
    <div class="input_container">
      <input type="tel" name="phone" v-model="newUser.phone" placeholder="Phone">
    </div>
    <div class="input_container">
      <textarea v-model="newUser.message" placeholder="Type your pretty funny, mean, sweet message here..."></textarea>
    </div>
    <div class="button">
      <button type="submit" v-on:click.stop.prevent="addContact" v-bind:disabled="!isValid">Send</button>
    </div>
  </form>
</div>
</template>

<script>
import Vue from 'vue'
import firebase from 'firebase'
import vuefire from 'vuefire'
Vue.use(vuefire)
// Initialize Firebase
var config = {
  apiKey: 'AIzaSyCgtDEzJcYADWldbvQ0HISrW8ZZEuprsCQ',
  authDomain: 'network-f45f2.firebaseapp.com',
  databaseURL: 'https://network-f45f2.firebaseio.com',
  projectId: 'network-f45f2',
  storageBucket: 'network-f45f2.appspot.com',
  messagingSenderId: '479984077667'
}
// firebase binding
// https://github.com/vuejs/vuefire
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
        phone: '',
        message: '',
        date: Date.now()
      }
    }
  },
  firebase: {
    users: usersRef
  },
  methods: {
    addContact () {
      usersRef.push(this.newUser)
      this.newUser.firstName = ''
      this.newUser.lastName = ''
      this.newUser.email = ''
      this.newUser.phone = ''
      this.newUser.message = ''
    }
  },
  computed: {
    isValid: function () {
      return this.newUser.firstName !== '' && this.newUser.lastName !== '' && this.newUser.email !== ''
    }
  }
}
</script>

<style>
.form-container {
  width: 100%;
}
form {
  margin: 0 auto;
  width: 30%;
}
.input_container {
  margin-bottom: 1.5rem;
}
input {
    width: 100%;
    border-top: none;
    border-left: none;
    border-right: none;
    padding-bottom: 3px;
    line-height: normal;
    font-size: 1rem;
    outline: none;
}
textarea {
  width: 100%;
  height: 10rem;
  font-size: 1rem;
  outline: none;
}
button {
  width: 10rem;
  padding: 10px;
  border-radius: 4px;
  background: transparent;
  border: 1px solid #b7b7b7;
  outline: none;
}
</style>

