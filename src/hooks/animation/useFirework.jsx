/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-25 07:15:41
 * @modify date 2024-02-25 07:15:41
 * @desc 폭죽 효과 애니메이션
 */
import { useEffect } from 'react';
import confetti from 'canvas-confetti';

const useFirework = () => {
  useEffect(() => {
    // 컴포넌트가 마운트될 때만 폭죽 효과를 실행
    firework();
  }, []);

  function firework() {
    const duration = 15 * 100;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 25, spread: 360, ticks: 50, zIndex: 100 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        }),
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        }),
      );
    }, 250);
  }
};

export default useFirework;
