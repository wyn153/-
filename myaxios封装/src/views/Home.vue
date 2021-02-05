<template>
<div>
  <div v-for="(item,index) in list1" :key='index'>
    <p>{{item.name}}</p>

  </div>
</div>
</template>

<script>
import {nowplayingListData} from '@/api/api'

export default {
  name: 'Home',
  components: {

  },
  data(){
    return {
      list1:''
    }
  },
   async created() {
       // console.log('nowplaying使用');
  //以下两步 一个是表面，一个是内在引入过后的面貌 可以把http 这个方法axios请求揪出来
      let ret =await nowplayingListData(this.page)
      // api.js 传出等于 = await http.get(nowPlayingListUri +page)
      // console.log(ret);
      this.list1= ret.data.data.films
      console.log(this.list1);
    },
}
</script>
