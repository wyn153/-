<template>
  <div id="app">

   <router-view></router-view>
 <!-- 下面 -->
    <comfooternav></comfooternav>
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
       
      };
    },
    //方法 函数写这里
    methods: {},
    //计算属性
    computed: {},
    //侦听器
    watch: {},
    //过滤器
    filters: {},

    
    //以下是生命周期
    //组件创建之前
    beforeCreate() {},
    //组件创建之后
    created() {},

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
  
  
  <style>
    *{
      margin: 0;
      padding: 0;
    }
    html,body{
      touch-action: none;
      height: 100%;
    }
    ul,li{
      list-style: none;
    }
  </style>