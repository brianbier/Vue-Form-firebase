<template>
  <div>
  <p>Hello from contacts</p>
  <li v-for="person in contact">
    <div class="firstname">
      {{ person.firstName }}
    </div>
  </li>
  </div>

</template>

<script>
  export default {
    props: ['contact']
  }
</script>
