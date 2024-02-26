/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-17 11:37:49
 * @modify date 2024-02-22 01:28:59
 * @desc api 기본 설정
 */
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const API_AUTH_TOKEN = process.env.REACT_APP_API_AUTH_TOKEN;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${API_AUTH_TOKEN}`, // 환경 변수에서 가져온 토큰 사용
  },
  withCredentials: true,
});

export default api;
