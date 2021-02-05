// 这里的 fixed  设置吸顶效果，
<template>
  <div id="film">
    <div class="comtop">
    <div class="city">
      <span @click="cityswitch"> {{ this.$store.state.city }}</span>
    </div>
    <span class="title">电影</span>
    <span class="iconfont icon-soushuo"></span>
  </div>
    <comfilmlisttopnav :class="fixed?'fixed':''"></comfilmlisttopnav>
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
    cityswitch() {
      console.log("我进来cityswitch了");
      // 在首页点击左上角的城市 选择进入城市列表页面
      this.$router.push("/city");
    },
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
  .up {
  height: 50px;
  border-bottom: 1px solid #eee;
  position: relative;

  .up2 {
    text-align: center;
    line-height: 50px;
    .filmtext {
      font-size: 20px;
    }
  }
}
.citytext {
  position: absolute;
  left: 10px;
  top: 15px;
  font-size: 10px;
}

// 

.comtop {
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 44px;
  background-color: #fff;
  display: flex;
  align-items: center;
  .city {
    margin-left: 10px;
    font-size: 13px;
    .iconfont {
      font-size: 11px;
    }
  }
  .title {
    flex: 1;
    text-align: center;
    margin-right: 30px;
  }
  .icon-sousuo {
    position: absolute;
    right: 10px;
    font-size: 20px;
  }
}

.icon-soushuo {
  color: skyblue;
  margin-right: 20px;
  font-size: 20px;
}
</style>