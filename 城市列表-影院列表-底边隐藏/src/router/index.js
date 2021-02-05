import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

// 导入src下的文件夹
import filmRouter from '@/router/routes/film.js'
import centerRouter from '@/router/routes/center.js'
import cinemaRouter from '@/router/routes/cinema.js'
import cityRouter from '@/router/routes/city.js'

const routes = [
  // 相当于film里的内容在此处
  filmRouter,
  centerRouter,
  cinemaRouter, 
  cityRouter,
 {
    path: '/',
    redirect:'/film'
  },
  
]

const router = new VueRouter({
  routes
})

export default router
