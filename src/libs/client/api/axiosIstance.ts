import axios from 'axios';
import { AXIOS_CONFIG } from 'libs/client/constants/api';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_ROUTE,
});

export default instance;
