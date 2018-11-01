import axios from 'axios';

const ROOT_URL = process.env.VUE_APP__API_BASEURL;

export default {
  fetchUsers() {
    return axios.get(`${ROOT_URL}/user`);
  }
};
