<template>
  <div id="app">
    <div id="appWrapper">
      <router-view name="topNavBar"/>
      <div style="text-align:center;padding-top:70px;">
        <v-container fluid>
          <v-layout row wrap>
            <v-flex xs12>
              <img src="./assets/talosShrine.png">
              <br>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
      <div id="viewContent" style="min-height:40vh;">
        <v-container fluid>
          <v-layout row wrap>
            <v-flex xs12>
              <router-view/>
              <router-view name="a"/>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
      <br>
      <router-view name="Footer"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      navBar: false
    }
  },
  methods: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#appWrapper{
  background: url(./assets/talosBgMain.jpg);
  /* Cover made this obsolete
  background-size: 100vw 100vh; */
  background-repeat: no-repeat;
  /* Enable to see Parallax Effect
  height: 100vh;
  width: 100vw; */
  min-height: 100vh;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
}
#btnLink{
  text-decoration: none;
}
#viewContent{
  background-color: rgba(0,0, 0, 0.7);
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 20px;
}
.btnNavbar {
  position: fixed;
  right: 0%;
  top: 0px;
  height: 80px;
  width: 5vw;
  opacity: 0.6;
}
.btnNavbar:hover{
  opacity: 1;
}
</style>
