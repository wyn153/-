import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

// 导入src下的文件夹
import filmRouter from '@/router/routes/film.js'
import centerRouter from '@/router/routes/center.js'
import cinemaRouter from '@/router/routes/cinema.js'
import detailRouter from '@/router/routes/detail.js'
import cityRouter from '@/router/routes/city'
const routes = [
  // 相当于film里的内容在此处
  filmRouter,
  centerRouter,
  cinemaRouter, 
  detailRouter,
  cityRouter,
 {
    path: '/',
    redirect:'/film'
  },
  {
    path:'/test1',
    component:()=> import('@/views/test/test1')
  },{
    path:'/vuex',
    component:()=> import('@/views/vuex/vuex')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
