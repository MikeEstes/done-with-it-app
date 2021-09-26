import { create } from 'apisauce';

const apiClient = create({
  baseURL: 'http://192.168.4.30:9000/api',
});

export default apiClient;

/* Laptop IP
http://192.168.4.111:9000/api */

/* PC IP
http://192.168.4.30:9000/api */
