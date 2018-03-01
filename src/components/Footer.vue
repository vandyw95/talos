<template>
  <div>
    <v-footer class="footer pa-2">
      <p class="pLeft">Made with 
        <v-icon light medium color="red">favorite</v-icon>
        by Vandy Cheung
      </p>
      <v-spacer></v-spacer>
      <div>© {{ new Date().getFullYear() }}</div>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      msg: 'Tiber Septim'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .footer,.container{
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  background-color: black;
} */
.footer{
  background-color: rgba(42, 42, 42, 0.7);
  color: white;
}
.footer:hover{
  background-color: rgba(255, 255, 255, 0.7);
  color: black;
}
.pLeft{
  padding-top: 13px;
  /* color: white; */
  font-size: 12pt;
}
h1, h2 {
  font-weight: normal;
  color: white;
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
