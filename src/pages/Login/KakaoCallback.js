import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAccessToken } from '../../apis/requests/kakaoRequest';
import { login } from '../../apis/request';

/**
 * @author 엄상은
 * @email sangeun.e.9@gmail.com
 * @create date 2024-02-26 19:41:08
 * @modify date 2024-02-26 19:41:08
 * @desc 로그인 전체 로직
 */

function KakaoCallback() {
    const navigate = useNavigate();
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        console.log("1. 카카오로부터 얻은 code:" + code);

        // 비동기 작업 처리
        const processLogin = async () => {
            try {
                const accessToken = await getAccessToken(code);
                console.log("2. 카카오 accessToken:" + accessToken);
                const jwt = await login(accessToken);
                console.log("3. 자체 jwt 토큰:" + jwt);
                // spring에서 발급된 jwt localStorage 저장
                localStorage.setItem("accessToken", jwt);
                // 메인 페이지로 이동
                navigate('/onboarding');
            } catch (error) {
                console.error("로그인 처리 실패", error);
            }
        };
        processLogin();
    }, [navigate]);
}

export default KakaoCallback;
