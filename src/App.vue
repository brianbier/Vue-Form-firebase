<template>
  <div id="app">
    <img class="me" src="./assets/brian.jpg">
    <div class="text">
      <p>Join me for drinks today! After 5 pm </p>
      <p>Location: 60 E 41st St, New York, NY 10017</p>
      <p>Fill out the form below to stay in touch or you can always follow me on instagram!<br /> There is some pretty cool stuff there.</p>
    </div>
    <ul>
      <li>
        <a href="https://www.instagram.com/briansbier/" target="_blank">
          <img class="instagram" src="./assets/instagram.png" alt="">
        </a>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.me {
  border-radius: 100%;
  filter: #424242;
  width: 10rem;
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
  -moz-transition: all 300ms ease-in-out;
  -o-transition: all 300ms ease-in-out;
  -webkit-transition: all 300ms ease-in-out;
  transition: all 300ms ease-in-out;
  margin-bottom: 1rem;
}
.instagram {
  width: 2rem;
  cursor: pointer;
}
.spin {
    -webkit-animation:spin 4s linear infinite;
    -moz-animation:spin 4s linear infinite;
    animation:spin 4s linear infinite;
}

@-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
@-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
@keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
</style>
