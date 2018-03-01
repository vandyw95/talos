<template>
  <div class="topNavBar">
    <v-toolbar id="vNavbar" fixed>
      <v-toolbar-title @click="toHome(); snackbar=true" style="letter-spacing:12px;font-size:31pt;">
        <v-icon light large>whatshot</v-icon>
        Talos
      </v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat @click="toStory(); snackbar=true">Story</v-btn>
        <v-btn flat @click="toGallery(); snackbar=true">Gallery</v-btn>
        <v-btn flat @click="toNote(); snackbar=true">Note</v-btn>
        <v-btn flat @click="toReference(); snackbar=true">Reference</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-card color="grey lighten-2">
        <v-snackbar
          :timeout="timeout"
          color="success"
          multi-line
          v-model="snackbar">
            {{ txtSnack }}
            <v-btn dark flat @click.native="snackbar = false">Close</v-btn>
        </v-snackbar>
      </v-card>
  </div>
</template>

<script>
export default {
  name: 'topNavBar',
  data () {
    return {
      snackbar: false,
      timeout: 1750,
      txtSnack: 'Opened'
    }
  },
  methods: {
    toHome () {
      this.$router.push({name: 'Home'})
    },
    toStory () {
      this.$router.push({name: 'Story'})
    },
    toGallery () {
      this.$router.push({name: 'Gallery'})
    },
    toNote () {
      this.$router.push({name: 'Note'})
    },
    toReference () {
      this.$router.push({name: 'Home'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#vNavbar{
  background-color: rgba(42, 42, 42, 0.7);
  color: white;
}
#vNavbar:hover{
  background-color: rgba(255, 255, 255, 0.9);
  color: black;
}
h1, h2 {
  font-weight: normal;
  color: white;
}
.home{
  margin: 20px;
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
