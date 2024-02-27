import axios from 'axios';

/**
 * @author 엄상은
 * @email sangeun.e.9@gmail.com
 * @create date 2024-02-26 19:41:08
 * @modify date 2024-02-26 19:41:08
 * @desc 카카오에서 인가코드로 accessToken 받기
 */
export const getAccessToken = async code => {
    const params = new URLSearchParams();
    params.append("grant_type", "authorization_code");
    params.append("client_id", process.env.REACT_APP_KAKAO_CLIENT_ID);
    params.append("redirect_uri", process.env.REACT_APP_KAKAO_REDIRECT_URI);
    params.append("code", code);
  
    try {
        const response = await axios({
            method: 'post',
            url: 'https://kauth.kakao.com/oauth/token',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
            data: params
        });
        return response.data.access_token;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}
