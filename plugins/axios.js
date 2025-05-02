import axios from 'axios';
import Vue from 'vue';

export default ({ store, redirect, route }, inject) => {
  const instance = axios.create({
    baseURL: 'https://randomuser.me/',
    validateStatus: (status) => {
      return status >= 200 && status !== 204 && status < 300;
    },
  });

  instance.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Expose axios context
  Vue.prototype.axios = instance;
  inject('axios', instance);
};
