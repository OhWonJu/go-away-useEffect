"use client";

import React, { use, useEffect, useState } from "react";
import { AxiosResponse } from "axios";

import { Image } from "../../ui";
import {
  CountDownWrapper,
  Format,
  Time,
  TimeWrapper,
} from "./CountDown.styles";

interface CountDownPros {
  targetTime: number;
  timePromise: Promise<AxiosResponse<any, any>>;
}

export const CountDown: React.FC<CountDownPros> = ({
  targetTime,
  timePromise,
}) => {
  const [isShowTime, setIsShowTime] = useState<boolean>(false);
  let currentTime = Date.now();

  if (!isShowTime && targetTime >= currentTime) {
    const { data } = use(timePromise);

    currentTime = data.unixtime * 1000;

    return (
      <Timer
        targetTime={targetTime}
        currentTime={currentTime}
        setIsShowTime={setIsShowTime}
      />
    );
  } else {
    return (
      <Image
        src="/images/fxxkoff.png"
        alt="useEffect야_가라"
        className="h-[40vw] aspect-2/1 mt-[6vh]"
      />
    );
  }
};

const Timer = ({
  targetTime,
  currentTime,
  setIsShowTime,
}: {
  targetTime: number;
  currentTime: number;
  setIsShowTime: Function;
}) => {
  const [timeRemaining, setTimeRemaining] = useState(targetTime - currentTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining((timeRemaining: number) => timeRemaining - 1000);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (timeRemaining <= 0) setIsShowTime(true);

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return (
    <CountDownWrapper>
      <TimeWrapper>
        <Time>{days}</Time>
        <Format>일</Format>
      </TimeWrapper>
      <TimeWrapper>
        <Time>{hours}</Time>
        <Format>시간</Format>
      </TimeWrapper>
      <TimeWrapper>
        <Time>{minutes}</Time>
        <Format>분</Format>
      </TimeWrapper>
      <TimeWrapper>
        <Time>{seconds}</Time>
        <Format>초</Format>
      </TimeWrapper>
    </CountDownWrapper>
  );
};
