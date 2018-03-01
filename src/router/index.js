import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Story from '@/components/Story'
import Gallery from '@/components/Gallery'
import Note from '@/components/Note'
import TopNavBar from '@/components/TopNavBar'
import Footer from '@/components/Footer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: Home,
        topNavBar: TopNavBar,
        Footer: Footer
      }
    },
    {
      path: '/story',
      name: 'Story',
      components: {
        default: Story,
        topNavBar: TopNavBar,
        Footer: Footer
      }
    },
    {
      path: '/gallery',
      name: 'Gallery',
      components: {
        default: Gallery,
        topNavBar: TopNavBar,
        Footer: Footer
      }
    },
    {
      path: '/note',
      name: 'Note',
      components: {
        default: Note,
        topNavBar: TopNavBar,
        Footer: Footer
      }
    }
  ]
})
