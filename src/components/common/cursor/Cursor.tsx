import React, { useEffect, useRef } from "react";
import { Dot, OutLine } from "./Cursor.styles";

const Cursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outLineRef = useRef<HTMLDivElement>(null);
  const accelerationRef = useRef<number>(0);

  const cursorPosHandler = (event: MouseEvent) => {
    const posX = event.clientX;
    const posY = event.clientY;

    if (dotRef.current) {
      dotRef.current.style.left = `${posX}px`;
      dotRef.current.style.top = `${posY}px`;
    }

    const acceleration = Math.sqrt(event.movementX ** 2 + event.movementY ** 2);
    accelerationRef.current = acceleration;

    if (outLineRef.current) {
      outLineRef.current.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 150, fill: "forwards" }
      );
    }
  };

  const animateOutLine = () => {
    if (outLineRef.current) {
      const newSize = Math.min(
        outLineRef.current.clientWidth + accelerationRef.current,
        50
      );
      outLineRef.current.style.width = `${newSize}px`;
      outLineRef.current.style.height = `${newSize}px`;
    }
    requestAnimationFrame(animateOutLine);
  };

  useEffect(() => {
    animateOutLine();

    window.addEventListener("mousemove", cursorPosHandler);

    return () => window.removeEventListener("mousemove", cursorPosHandler);
  }, []);

  return (
    <>
      <Dot ref={dotRef} />
      <OutLine ref={outLineRef} size={10} />
    </>
  );
};

export default Cursor;
