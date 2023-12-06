import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import HeaderContentStore from "../lib/client/store/headerContentStore";
import { Image } from "../components/ui";

export const WhatIsUseEffect3 = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(targetRef);

  const { setHeaderContent } = HeaderContentStore();

  useEffect(() => {
    if (isInView) {
      setHeaderContent("useEffect?");
      window.location.hash = "useEffect?";
    }
  }, [isInView]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const item10Opacity = useTransform(
    scrollYProgress,
    [0.1, 0.15, 0.65, 0.7],
    [0, 1, 1, 0]
  );
  const item20Opacity = useTransform(
    scrollYProgress,
    [0.15, 0.2, 0.65, 0.7],
    [0, 1, 1, 0]
  );
  const item30Opacity = useTransform(
    scrollYProgress,
    [0.2, 0.25, 0.65, 0.7],
    [0, 1, 1, 0]
  );
  const item40Opacity = useTransform(
    scrollYProgress,
    [0.3, 0.35, 0.65, 0.7],
    [0, 1, 1, 0]
  );
  const item50Opacity = useTransform(
    scrollYProgress,
    [0.4, 0.45, 0.65, 0.7],
    [0, 1, 1, 0]
  );
  const item60Opacity = useTransform(
    scrollYProgress,
    [0.5, 0.55, 0.65, 0.7],
    [0, 1, 1, 0]
  );
  const item70Opacity = useTransform(
    scrollYProgress,
    [0.55, 0.6, 0.7, 0.8],
    [0, 1, 1, 0]
  );
  const item80Opacity = useTransform(
    scrollYProgress,
    [0.7, 0.75, 0.8, 0.9],
    [0, 1, 1, 0]
  );

  return (
    <section ref={targetRef} className="h-[800vh]">
      <div className="sticky top-[16.7vh] h-[66.8vh] px-16 text-2xl leading-[1] [&_p]:w-[45rem] [&_p]:max-w-[90%]">
        <motion.div
          style={{ opacity: item10Opacity }}
          className="absolute top-[7rem] left-1/2 -translate-x-1/2 h-[50vh]"
        >
          <Image
            src="/images/effect.001.png"
            alt="useEffect 예시."
            className="h-full aspect-2/1"
          />
        </motion.div>

        <motion.div
          style={{ opacity: item20Opacity }}
          className="absolute top-[7rem] left-1/2 -translate-x-1/2 h-[50vh]"
        >
          <Image
            src="/images/effect.002.png"
            alt="useEffect 예시."
            className="h-full aspect-2/1"
          />
        </motion.div>

        <motion.div
          style={{ opacity: item30Opacity }}
          className="absolute top-[7rem] left-1/2 -translate-x-1/2 h-[50vh]"
        >
          <Image
            src="/images/effect.003.png"
            alt="useEffect 예시."
            className="h-full aspect-2/1"
          />
        </motion.div>

        <motion.div
          style={{ opacity: item40Opacity }}
          className="absolute top-[7rem] left-1/2 -translate-x-1/2 h-[50vh]"
        >
          <Image
            src="/images/effect.004.png"
            alt="useEffect 예시."
            className="h-full aspect-2/1"
          />
        </motion.div>

        <motion.div
          style={{ opacity: item50Opacity }}
          className="absolute top-[7rem] left-1/2 -translate-x-1/2 h-[50vh]"
        >
          <Image
            src="/images/effect.005.png"
            alt="useEffect 예시."
            className="h-full aspect-2/1"
          />
        </motion.div>

        <motion.div
          style={{ opacity: item60Opacity }}
          className="absolute top-[7rem] left-1/2 -translate-x-1/2 h-[50vh]"
        >
          <Image
            src="/images/effect.006.png"
            alt="useEffect 예시."
            className="h-full aspect-2/1"
          />
        </motion.div>

        <motion.div
          style={{ opacity: item70Opacity }}
          className="absolute top-[7rem] left-1/2 -translate-x-1/2 h-[50vh]"
        >
          <Image
            src="/images/effect.007.png"
            alt="useEffect 예시."
            className="h-full aspect-2/1"
          />
        </motion.div>

        <motion.div
          style={{ opacity: item80Opacity }}
          className="absolute top-[7rem] left-1/2 -translate-x-1/2 h-[50vh]"
        >
          <Image
            src="/images/effect.008.png"
            alt="useEffect 예시."
            className="h-full aspect-2/1"
          />
        </motion.div>
      </div>
    </section>
  );
};
