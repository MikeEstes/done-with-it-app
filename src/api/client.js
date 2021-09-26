import { create } from 'apisauce';

const apiClient = create({
  baseURL: 'http://192.168.4.111:9000/api',
});

export default apiClient;
