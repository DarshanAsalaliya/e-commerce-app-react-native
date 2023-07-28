import axios from 'axios';
import { apiUrl } from '../constant';

// api instanse
const Api = axios.create({
  baseURL: apiUrl.baseUrl,
  headers: apiUrl.header,
});

export default Api;
