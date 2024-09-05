import axios from "axios";
// import { JWT_TOKEN } from "../constants";
// import { getCookie } from "../functions/cookie";
// это для addJWT()

class DataService {
  apiClient;

  constructor() {
    this.apiClient = axios.create({
      headers: {
        "Content-type": "application/json",
      },
    });
  }

  // async addJWT() {
  //   const token = await getCookie(JWT_TOKEN);
  //   if (token) {
  //     this.apiClient.defaults.headers.common.Authorization = `Bearer ${token}`;
  //   } else {
  //     delete this.apiClient.defaults.headers.common.Authorization;
  //   }
  // }

  async post(url, body) {
    return this.apiClient.post(url, body);
  }

  async get(url) {
    return this.apiClient.get(url);
  }

  async delete(url) {
    return this.apiClient.delete(url);
  }

  async put(url, body) {
    return this.apiClient.put(url, body);
  }
}

export default DataService;
