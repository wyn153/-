// 组件 comfooternav 代表着底边栏

<template>
  <div id="app">

   <router-view></router-view>
 <!-- 下面 -->
    <comfooternav v-if="is_show"></comfooternav>
  </div>
</template>
<script>
import comfooternav from '@/components/comfooternav.vue'

export default {
    name: 'app',
    props:[],
    components: {
      comfooternav
    },
    data() {
      return {
       is_show:true
      };
    },
    //方法 函数写这里
    methods: {},
    //计算属性
    computed: {},
    //侦听器
    watch: {},
    //过滤器
    filters: {
  
    },

    
    //以下是生命周期
    //组件创建之前
    beforeCreate() {},
    //组件创建之后
    created() {
       this.$nextTick(() => {
      // 接受了detail发送的 footernav 以及参数 false参数  并且赋值给了is_show  ， 此时的is_show  为false，则隐藏
       this.eventBus.$on("footernav", (flag) => {
        this.is_show = flag;
       })
    });

    },

    //页面渲染之前
    beforeMount() {},
    //页面渲染之后
    mounted() {},

    //页面视图数据更新之前
    beforeUpdate() {},
    //页面视图数据更新之后
    updated() {},
    
     //页面销毁之前
    beforeDestroy() {},
    //页面销毁之后
    destroyed() {},
  }
  </script>
  
<style lang="scss" >
* {
  margin:0;
  padding:0;
}

html,
body {
  touch-action:none;
  height: 100%;
  ul,
  li{
    list-style: none;
  }
}

</style> 