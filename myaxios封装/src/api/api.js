//实际上引入过来的就是axios
import http from "./http";
import {
  // 是url.js中的数据
  nowplayingListUri,
  comingSoonListUri,
} from "@/config/url";
import { nowPlayingListUri} from "../config/url";

// 暴露出  nowpalying中引入
export const nowplayingListData = (page = 1) => {
  // 封装好的数据等待请求
  return http.get(nowPlayingListUri + page);
};

// api.js 和 url.js 是film.vue中的封装。二选一即可



