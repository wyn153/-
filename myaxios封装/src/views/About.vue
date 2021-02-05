<template>
  <div class="about">
    <div class="item" v-for="(item, index) in data1" :key="index">
      <p>{{ item.name }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "about",
  props: [],
  components: {},
  data() {
    return {
      data1: "",
    };
  },
  //方法 函数写这里
  methods: {},
  //以下是生命周期

  //页面渲染之后
  mounted() {
    // 这是简写的axios请求  两种方法
    //   console.log("进入了comingsoon页面的调试");
    axios.interceptors.request.use(
      function (config) {
        config.headers = {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"1611759546420507363049473","bc":"310100"}',
          "X-Host": "mall.film-ticket.film.list",
        };
        return config;
      },
      function (err) {
        if (err) {
          console.log("err", err);
        }
      }
    );
    axios
      .get(
        "https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=2&k=1149725"
      )
      .then((data) => {
        this.data1 = data.data.data.films;
        console.log("即将上映");
        console.log(this.data1);
      });
  },

};
</script>
  
  
<style lang="scss" scoped>
</style>
