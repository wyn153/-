// 这里的 fixed  设置吸顶效果，
<template>
  <div id="film">
    <comfilmlisttopnav :class="fixed?'fixed':''"></comfilmlisttopnav>

    <h1 v-for=" item in 50">
       这里有 {{item}}  个
       </h1>

    <router-view></router-view>
  </div>
</template>
<script>
import comfilmlisttopnav from '@/components/comfilmlisttopnav.vue'

export default {
  name: "film",
  props: [],
  components: {
    comfilmlisttopnav
  },
  data() {
    return {
       fixed:false,
    };
  },
  //方法 函数写这里
  methods: {
  },
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
  mounted() {
     window.addEventListener('scroll',(e)=>{
      let top =document.documentElement.scrollTop;
      console.log('film里的top值--->'+top)
      if(top > 0) {
          this.fixed = true
      }else {
        this.fixed =false
      }
       
    },true)
  },

  //页面视图数据更新之前
  beforeUpdate() {},
  //页面视图数据更新之后
  updated() {},

  //页面销毁之前
  beforeDestroy() {},
  //页面销毁之后
  destroyed() {},
};
</script>
  
<style lang="scss" scoped>
  .fixed {
    position: fixed;
    top: 0;
    background-color: #ffffff;
  }
</style>