import { useRef, useState } from 'react';

export const useTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const timerId = useRef<number | undefined>(undefined);

  const startTimer = () => {
    setSeconds(0);
    timerId.current = setInterval(() => {
      setSeconds((current) => current + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerId.current);
  };

  return {
    seconds,
    startTimer,
    stopTimer,
  };
};
