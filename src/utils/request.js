import axios from "axios";
import Vue from "vue";
// const { CancelToken } = axios;
Vue.prototype.$cancelRequest = new Map();
Vue.prototype.$axios = axios;
export default {
  request: (option, params) => {
    let url = option;
    let method = "get";
    let opArr = url.split(" ");
    if (opArr.length >= 2) {
      url = opArr[0];
      method = opArr[1];
      if (
        method.toLocaleLowerCase() !== "get" &&
        method.toLocaleLowerCase() !== "post"
      ) {
        url = method;
        method = opArr[0].toLocaleLowerCase();
      }
    }
    // let cancelToken = new CancelToken(cancel => {
    //   Vue.prototype.$cancelRequest.set(Symbol(Date.now()), {
    //     pathname: window.location.pathname,
    //     cancel
    //   });
    // });
    let op = {
      url: url,
      method: method,
      params,
      timeout: 30000
      // cancelToken: cancelToken
    };
    if (method == "post") {
      op = {
        url: url,
        method: method,
        data: params,
        timeout: 30000
        // cancelToken: cancelToken
      };
    }
    return axios(op)
      .then(res => {
        // console.log(res);
        let data = res.data.Data;
        return Promise.resolve({
          data,
          code: 1,
          status: true,
          msg: "成功！"
        });
      })
      .catch(() => {
        return Promise.resolve({
          code: -1,
          status: false,
          msg: "请求出错了!"
        });
      });
  }
};
