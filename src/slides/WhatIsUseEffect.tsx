import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { stylesWithCssVar } from "../utils/motion";
import { Callout, Image } from "../components/ui";

export const WhatIsUseEffect = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const item10Opacity = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.9, 0.99],
    [0, 1, 1, 0]
  );

  const item20Opacity = useTransform(
    scrollYProgress,
    [0.3, 0.35, 0.4, 0.5],
    [0, 1, 1, 0]
  );
  const item20Y = useTransform(
    scrollYProgress,
    [0.3, 0.35, 0.4, 0.5],
    ["30px", "0px", "0px", "-30px"]
  );

  const item30Opacity = useTransform(
    scrollYProgress,
    [0.5, 0.55, 0.85, 0.9],
    [0, 1, 1, 0]
  );
  const item30Y = useTransform(
    scrollYProgress,
    [0.5, 0.55, 0.6, 0.7],
    ["30px", "0px", "0px", "-30px"]
  );
  const item30X = useTransform(scrollYProgress, [0.58, 0.7], ["-70%", "-180%"]);

  const item40Opacity = useTransform(
    scrollYProgress,
    [0.65, 0.7, 0.85, 0.9],
    [0, 1, 1, 0]
  );
  const item40X = useTransform(scrollYProgress, [0.59, 0.7], ["-50%", "-28%"]);

  const item50Opacity = useTransform(
    scrollYProgress,
    [0.75, 0.8, 0.9, 0.99],
    [0, 1, 1, 0]
  );

  return (
    <section ref={targetRef} className="h-[500vh]">
      <div className="sticky top-[16.7vh] h-[66.8vh] px-16 text-2xl leading-[1] [&_p]:w-[45rem] [&_p]:max-w-[90%]">
        <motion.div
          style={{ opacity: item10Opacity }}
          className="absolute top-0 left-[1/2] w-full"
        >
          <Callout
            mainContent="useEffect 는 외부 시스템과 동기화 하기 위해 사용한다?"
            subContent=""
          />
        </motion.div>
        <motion.div
          style={stylesWithCssVar({
            opacity: item20Opacity,
            "--y": item20Y,
          })}
          className="translate-y-centered-offset absolute top-1/2 left-1/2 -translate-x-[25%]"
        >
          <Callout
            mainContent="strict mode"
            subContent="우발적인 불순물을 걸러내기 위해"
          />
        </motion.div>
        <motion.div
          style={stylesWithCssVar({
            opacity: item30Opacity,
            x: item30X,
            "--y": item30Y,
          })}
          className="translate-y-centered-offset absolute top-1/2 left-1/2"
        >
          <Callout mainContent="생각해 봅시다." />
        </motion.div>
        <motion.div
          style={stylesWithCssVar({
            x: item40X,
            opacity: item40Opacity,
          })}
          className="translate-y-centered-offset absolute top-1/2 left-1/2"
        >
          <Callout mainContent="침착맨과 나는 트위치로 하나가 된다...!" />
        </motion.div>
        <motion.div
          style={{ opacity: item50Opacity }}
          className="absolute top-[5rem] left-1/2 -translate-x-1/2 h-[55vh]"
        >
          <Image
            src="/images/kalla.png"
            alt="useEffect 예시."
            className="h-full aspect-2/1"
          />
        </motion.div>
      </div>
    </section>
  );
};
