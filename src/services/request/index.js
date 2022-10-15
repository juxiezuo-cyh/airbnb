import axios from "axios";
import { BASE_URL, TIMEOUT } from './config';

class HYRequest {
  constructor(baseURL) {
    this.instance = axios.create({
      baseURL,
      timeout: TIMEOUT
    });

    this.instance.interceptors.response.use((response) => {
      return response.data;
    }, error => {
      return error;
    });
  }

  request(config) {
    return this.instance.request(config);
  }

  get(config) {
    return this.request({ ...config, method: "get" });
  }

  post(config) {
    return this.request({ ...config, method: "post" });
  }
}

export default new HYRequest(BASE_URL);