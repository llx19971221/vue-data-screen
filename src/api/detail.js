import api from "./api";
import req from "@utils/request.js";
let allFn = {};
function gen(url) {
  return function(data) {
    return req.request(url, data);
  };
}
for (let key in api) {
  allFn[key] = gen(api[key]);
}
export default allFn;
