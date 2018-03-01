<template>
  <div class="note">
    <v-container fluid>
      <v-layout>
        <v-flex xs12>
          <h3 style="text-align:center;">{{title}}</h3>
          <v-form ref="form" lazy-validation>
            <h5>Note Title</h5>
            <v-text-field
              label="Type Title Here"
              v-model="note.title"
              class="white--text"
              textarea
              required>
            </v-text-field>
            <h5>Note Text</h5>
            <v-text-field
              label="Type Text Here"
              v-model="note.text"
              class="white--text"
              :rules="[(v) => v.length <= 255 || 'Max 255 characters']"
              :counter="255"
              multi-line
              textarea
              required>
            </v-text-field>
            <v-btn class="white" @click="addNote">Add</v-btn>
            <v-btn class="white" @click="clear">Clear</v-btn>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Note',
  data () {
    return {
      title: 'Notemaster',
      note: {
        title: '',
        text: ''
      },
      notes: [{
        title: '',
        text: '',
        date: new Date(Date.now()).toLocaleString()
      }]
    }
  },
  methods: {
    addNote () {
      let { text, title } = this.note
      this.notes.push({
        text,
        title,
        date: new Date(Date.now().toLocaleString())
      })
    },
    clear () {
      this.$refs.form.reset()
    }
  }
}
</script>

<style scoped>
h3,h5{
  color: white;
}
</style>
