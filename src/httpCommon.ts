
// const http = axios.create({
//   baseURL: 'www.themealdb.com/api/json/v1/1',

// });

// export default http;

// httpCommon.ts
import axios, { AxiosInstance } from 'axios';

const http: AxiosInstance = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1',
  headers: {
    'Content-type': 'application/json',
  },
});

export default http;
