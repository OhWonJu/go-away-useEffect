import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { stylesWithCssVar } from "../utils/motion";
import HeaderContentStore from "../lib/client/store/headerContentStore";
import { Callout, Image } from "../components/ui";

export const WhatIUse = () => {
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
    [0.2, 0.3, 0.6, 0.7],
    [0, 1, 1, 0]
  );

  const item20Opacity = useTransform(
    scrollYProgress,
    [0.5, 0.55, 0.9, 0.99],
    [0, 1, 1, 0]
  );
  const item20Y = useTransform(
    scrollYProgress,
    [0.4, 0.45, 0.9, 0.99],
    ["30px", "0px", "0px", "-30px"]
  );

  const item30Opacity = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9, 0.99],
    [0, 1, 1, 0]
  );

  return (
    <section ref={targetRef} className="h-[500vh] mt-[200vh]">
      <div className="sticky top-[16.7vh] h-[66.8vh] px-16 text-2xl leading-[1] [&_p]:w-[45rem] [&_p]:max-w-[90%]">
        <motion.div
          style={{ opacity: item10Opacity }}
          className="absolute top-0 left-1/2 -translate-x-1/2 h-[45vh]"
        >
          <Image
            src="/images/whatIUsed.png"
            alt="그냥 이렇게 썼었습니다."
            className="h-full aspect-2/1"
          />
        </motion.div>
        <motion.div
          style={stylesWithCssVar({
            opacity: item20Opacity,
            "--y": item20Y,
          })}
          className="translate-y-centered-offset absolute top-[70%] left-1/2 -translate-x-1/2"
        >
          <Callout
            mainContent="useEffect"
            subContent="컴포넌트를 외부 시스템과 동기화하는 Reack Hook 입니다."
          />
        </motion.div>
        <motion.div
          style={{ opacity: item30Opacity }}
          className="absolute top-0 left-1/2 -translate-x-1/2 h-[45vh]"
        >
          <Image
            src="/images/effectOrigin.png"
            alt="useEffect 예시."
            className="h-full aspect-2/1"
          />
        </motion.div>
      </div>
    </section>
  );
};
