import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city:'上海',
    // 影院的数据  默认上海
    cinemaid:'310100',
  },
  mutations: {
     // 设置城市名字
     add2(state, step) {
      console.log("我进入mutations里面了add2 ");
      console.log('step',step)
      state.city = step
    },
     // 设置城市列表的城市序号
    cinemaidadd(state,step) {
      console.log('进入cinemaidadd里面了')
      state.cinemaid = step 
    }
  },
  actions: {
  },
  modules: {
  }
})
