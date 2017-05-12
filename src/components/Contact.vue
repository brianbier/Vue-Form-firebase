<template>
  <div class="contact-list">
   <div class="thank-you"  v-if="reverseContacts.length > 0">
     Thank you! 
   </div>
    <li v-for="person in reverseContacts">
      <div class="fullname">
        {{ person.firstName }}
      </div>
    </li>
  </div>
</template>

<script>
  export default {
    props: ['contact'],
    computed: {
      reverseContacts () {
        return this.contact.reverse()
      }
    }
  }
</script>

<style>
.contact-list{
  font-size: 1.1rem;
}
li{
  list-style: none;
  margin: 1rem;
}
</style>
