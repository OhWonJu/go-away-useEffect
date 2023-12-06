import axios from "axios";
import React, { useEffect } from "react";

interface CountDownPros {
  targetTime: number;
  timeRemaining: number;
  setTimeRemaining: Function;
}

export const CountDown: React.FC<CountDownPros> = ({
  targetTime,
  timeRemaining,
  setTimeRemaining,
}) => {
  // use -> data fetching 예시로 리팩토링
  // const targetTime = new Date("2023/12/06/17:00:00").getTime();

  useEffect(() => {
    const fetchWorldTime = async () => {
      try {
        const response = await axios.get(
          "http://worldtimeapi.org/api/timezone/Asia/seoul"
        );
        setTimeRemaining(targetTime - response.data.unixtime * 1000);
      } catch (error) {
        console.error("Error fetching world time:", error);
      }
    };

    fetchWorldTime();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining((timeRemaining: number) => timeRemaining - 1000);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return (
    <div>
      <div>Days: {days}</div>
      <div>Hours: {hours}</div>
      <div>Minutes: {minutes}</div>
      <div>Seconds: {seconds}</div>
    </div>
  );
};
