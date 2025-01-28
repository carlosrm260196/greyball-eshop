import axios from 'axios';

export const fetchProducts = async () => {
  const response = await axios.get('https://my-json-server.typicode.com/carlosrm260196/demo/products');
  return response.data;
};