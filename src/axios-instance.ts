import axios from "axios";

export const instance = axios.create({
  baseURL: 'https://645644b92e41ccf16918360b.mockapi.io/',
  timeout: 3000,
  headers: {

  }
});
