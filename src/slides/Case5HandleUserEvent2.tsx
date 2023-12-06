import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { stylesWithCssVar } from "../utils/motion";
import HeaderContentStore from "../lib/client/store/headerContentStore";
import { Image } from "../components/ui";

const animationOrder = {
  initial: 0.1,
  showCode1: 0.3,
  code1MoveStart: 0.4,
  code1MoveEnd: 0.5,
  FadeOutStart: 0.9,
  FadeOutEnd: 1,
};

export const Case5HandleUserEvent2 = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(targetRef);

  const { setHeaderContent } = HeaderContentStore();

  useEffect(() => {
    if (isInView) {
      setHeaderContent("User Event", "를 다루는 경우");
      window.location.hash = "User Event";
    }
  }, [isInView]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const code1Opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.showCode1,
      animationOrder.FadeOutStart,
      animationOrder.FadeOutEnd,
    ],
    [0, 1, 1, 0]
  );
  const code1X = useTransform(
    scrollYProgress,
    [animationOrder.code1MoveStart, animationOrder.code1MoveEnd],
    ["-50%", "-85%"]
  );

  const code2Opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.code1MoveStart,
      animationOrder.code1MoveEnd,
      animationOrder.FadeOutStart,
      animationOrder.FadeOutEnd,
    ],
    [0, 1, 1, 0]
  );
  const code2X = useTransform(
    scrollYProgress,
    [animationOrder.code1MoveStart, animationOrder.code1MoveEnd],
    ["-45%", "-13%"]
  );

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-[16.7vh] h-[66.8vh] px-16 text-2xl leading-[1] [&_p]:w-[45rem] [&_p]:max-w-[90%]">
        <motion.div
          style={stylesWithCssVar({
            opacity: code1Opacity,
            x: code1X,
          })}
          className="absolute top-[2rem] left-1/2 h-[60vh]"
        >
          <Image
            src="/images/userEvent1.png"
            alt="External store 예시."
            className="h-full aspect-2/1"
          />
        </motion.div>
        <motion.div
          style={stylesWithCssVar({
            opacity: code2Opacity,
            x: code2X,
          })}
          className="absolute top-[2rem] left-1/2 h-[60vh]"
        >
          <Image
            src="/images/userEvent2.png"
            alt="External store 예시."
            className="h-full aspect-2/1"
          />
        </motion.div>
      </div>
    </section>
  );
};
