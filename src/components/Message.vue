<template>
  <div class="contact_container">
    <div class="Form">
      <contact-form @contactsInformation="contacts = $event"></contact-form>
    </div>
    <div class="contact_list">
      <ul>
        <single-contact :contact="contacts"></single-contact>
      </ul>
    </div>
  </div>
</template>

<script>
import Form from './Form'
import Contact from './Contact'

export default {
  data () {
    return {
      contacts: []
    }
  },
  components: {
    'contact-form': Form,
    'single-contact': Contact
  }
}
</script>

<style>

</style>
