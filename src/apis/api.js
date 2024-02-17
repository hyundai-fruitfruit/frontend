/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-17 11:37:49
 * @modify date 2024-02-17 11:40:44
 * @desc api 기본 설정
 */
import axios from "axios";

const api = axios.create({
    // baseURL : "http://localhost",
    headers: {
        "Content-Type" : "application/json",
        Accept : "application/json",
        // Authorization : localStorage.getItem("jwtToken"),
    },
    withCredentials: true,
});

export default api;
