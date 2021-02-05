// 电影列表 pageNum=数字（在api.js中）

// 此 数据跟film.vue中数据相同。。从https://m.maizuo.com/中获取。network -> XHR ->  Request URL:
export const nowPlayingListUri =
    "/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=3841751&pageNum=";
// 即将上映
export const comingSoonListUri =
    "/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=8961450&pageNum=";

// 后续需要可以再添加...

