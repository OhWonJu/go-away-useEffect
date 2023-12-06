import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { Callout, Image } from "../components/ui";

export const WhatIsUseEffect2 = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const item10Opacity = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.9, 0.99],
    [0, 1, 1, 0]
  );
  const text10Opacity = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.3, 0.4],
    [0, 1, 1, 0]
  );

  const item20Opacity = useTransform(
    scrollYProgress,
    [0.4, 0.5, 0.9, 0.99],
    [0, 1, 1, 0]
  );
  const text20Opacity = useTransform(
    scrollYProgress,
    [0.4, 0.5, 0.6, 0.7],
    [0, 1, 1, 0]
  );

  const item30Opacity = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9, 0.99],
    [0, 1, 1, 0]
  );
  const text30Opacity = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9, 0.99],
    [0, 1, 1, 0]
  );

  return (
    <section ref={targetRef} className="h-[500vh]">
      <div className="sticky top-[16.7vh] h-[66.8vh] px-16 text-2xl leading-[1] [&_p]:w-[45rem] [&_p]:max-w-[90%]">
        <motion.div
          style={{ opacity: item10Opacity }}
          className="absolute top-[7rem] left-1/2 -translate-x-1/2 h-[40vh]"
        >
          <Image
            src="/images/tv1.png"
            alt="useEffect 예시."
            className="h-full aspect-2/1"
          />
        </motion.div>
        <motion.div
          style={{ opacity: text10Opacity }}
          className="absolute top-[7rem] left-1/2 -translate-x-1/2 h-[40vh]"
        >
          <Callout subContent="침투부 보러가기" />
        </motion.div>

        <motion.div
          style={{ opacity: item20Opacity }}
          className="absolute top-[7rem] left-1/2 -translate-x-1/2 h-[40vh]"
        >
          <Image
            src="/images/tv2.png"
            alt="useEffect 예시."
            className="h-full aspect-2/1"
          />
        </motion.div>
        <motion.div
          style={{ opacity: text20Opacity }}
          className="absolute top-[7rem] left-1/2 -translate-x-1/2 h-[40vh]"
        >
          <Callout subContent="침투부 그만보기" />
        </motion.div>

        <motion.div
          style={{ opacity: item30Opacity }}
          className="absolute top-[7rem] left-1/2 -translate-x-1/2 h-[40vh]"
        >
          <Image
            src="/images/tv3.png"
            alt="useEffect 예시."
            className="h-full aspect-2/1"
          />
        </motion.div>
        <motion.div
          style={{ opacity: text30Opacity }}
          className="absolute top-[7rem] left-1/2 -translate-x-1/2 h-[40vh]"
        >
          <Callout subContent="다른 채널 보러가기" />
        </motion.div>
      </div>
    </section>
  );
};
